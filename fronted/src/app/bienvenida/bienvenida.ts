import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TipoUsuarioPipe } from '../tipo-usuario-pipe';


@Component({
  imports: [ ReactiveFormsModule,FormsModule,CommonModule,TipoUsuarioPipe],
  selector: 'app-bienvenida',
  styleUrl: './bienvenida.css',
  templateUrl: './bienvenida.html',
})
export class Bienvenida implements OnInit{


  formulario:FormGroup;
  private readonly http:HttpClient;

  usuarios:any =[];
  tipos:any =[];
  usuario:any;

  constructor(private fb:FormBuilder, http:HttpClient, private cdr : ChangeDetectorRef){
    this.formulario = this.fb.group(
      {
        email:['',[Validators.required]],
        password:['',Validators.required],
        nombre:['',Validators.required],
        tipo:['',Validators.required]
      }

    );
    this.http = http;

    let u:any = localStorage.getItem("usuario");
    this.usuario = JSON.parse(u);
    console.log("Hola usuario: ", this.usuario);
    
  }

  ngOnInit(): void {
    this.buscarUsuarios();
    this.buscarTipos();
  }

  buscarUsuarios(){
    this.http.get<any[]>("http://localhost:8080/usuario/buscar")
    .subscribe(data => {
      console.log("Respuesta buscarUsuarios:", data);
      this.usuarios = data;
      this.cdr.detectChanges();
    });
}

  buscarTipos(){
    this.http.get<any[]>("http://localhost:8080/tipoUsuario/buscar")
    .subscribe(data => {
      console.log("Respuesta buscartipoUsuarios:", data);
      this.tipos = data;
      this.cdr.detectChanges();
    });
}

  guardarUsuario(){
    if(this.formulario.valid){
      let temp = {...this.formulario.value};
      temp.fechaCreacion = new Date();
      this.http.post("http://localhost:8080/usuario/guardar",temp).subscribe(
        data => this.mostrar(data)
      )
    }
  }

  mostrar(usuarios:any){
    if(usuarios?.idUsuario){
      alert("Usuario creado con el id: "+ usuarios.idUsuario);
      this.buscarUsuarios();
    }
    else{
      alert("Error al crear usuario, existe un problema en el servidor.")
    }
  }
}
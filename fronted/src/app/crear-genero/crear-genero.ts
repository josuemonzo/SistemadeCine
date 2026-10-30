import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  selector: 'app-crear-genero',
  styleUrl: './crear-genero.css',
  templateUrl: './crear-genero.html',
})
export class CrearGenero {
  formulario:FormGroup;
  private readonly http:HttpClient;

  genero:any =[];

  

  constructor(private fb:FormBuilder, http:HttpClient, private cdr : ChangeDetectorRef){
    this.formulario = this.fb.group(
      {
        nombre:['',[Validators.required]]
      }

    );
    this.http = http;
    
  }

  ngOnInit(): void {
    this.buscarGenero();
  }

  buscarGenero(){
    this.http.get<any[]>("http://localhost:8080/genero/buscar")
    .subscribe(data => {
      console.log("Respuesta buscarGenero:", data);
      this.genero = data;
      this.cdr.detectChanges();
    });
}

  guardarGenero(){
    if(this.formulario.valid){
      let temp = {...this.formulario.value};
      temp.fechaCreacion = new Date();
      this.http.post("http://localhost:8080/genero/guardar",temp).subscribe(
        data => this.mostrar(data)
      )
    }
  }

  mostrar(genero:any){
    if(genero?.idGenero){
      alert("Genero creado con el id: "+ genero.idGenero);
      this.buscarGenero();
    }
    else{
      alert("Error al crear genero, existe un problema en el servidor.")
    }
}
}

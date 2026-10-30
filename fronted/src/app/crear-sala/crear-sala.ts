import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  selector: 'app-crear-sala',
  styleUrl: './crear-sala.css',
  templateUrl: './crear-sala.html',
})
export class CrearSala {
  formulario:FormGroup;
  private readonly http:HttpClient;

  sala:any =[];

  

  constructor(private fb:FormBuilder, http:HttpClient, private cdr : ChangeDetectorRef){
    this.formulario = this.fb.group(
      {
        nombre:['',[Validators.required]],
        fila:['',Validators.required],
        asientos_por_fila:['',Validators.required]
      }

    );
    this.http = http;
    
  }
ngOnInit(): void {
    this.buscarSala();
  }

  buscarSala(){
    this.http.get<any[]>("http://localhost:8080/sala/buscar")
    .subscribe(data => {
      console.log("Respuesta buscarSala:", data);
      this.sala = data;
      this.cdr.detectChanges();
    });
}
  

  guardarSala(){
    if(this.formulario.valid){
      let temp = {...this.formulario.value};
      temp.fechaCreacion = new Date();
      this.http.post("http://localhost:8080/sala/guardar",temp).subscribe(
        data => this.mostrar(data)
      )
    }
  }

  mostrar(sala:any){
    if(sala?.idSala){
      alert("Sala creada con el id: "+ sala.idSala);
      this.buscarSala();
    }
    else{
      alert("Error al crear sala, existe un problema en el servidor.")
    }
  }
}

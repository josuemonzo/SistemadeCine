import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  selector: 'app-crear-funciones',
  styleUrl: './crear-funciones.css',
  templateUrl: './crear-funciones.html',
})
export class CrearFunciones {

  formulario:FormGroup;
  private readonly http:HttpClient;

  funciones:any =[];

  constructor(private fb:FormBuilder, http:HttpClient, private cdr : ChangeDetectorRef){
    this.formulario = this.fb.group(
      {
        fecha:['',[Validators.required]],
        hora:['',Validators.required],
        precioEntrada:['',Validators.required],
      }

    );
    this.http = http;
    }

  ngOnInit(): void {
    this.buscarFuncion();
  }
  
  buscarFuncion(){
    this.http.get<any[]>("http://localhost:8080/funcion/buscar")
    .subscribe(data => {
      console.log("Respuesta buscarFuncion:", data);
      this.funciones = data;
      this.cdr.detectChanges();
    });
}

  guardarFuncion(){
    if(this.formulario.valid){
      let temp = {...this.formulario.value};
      temp.fechaCreacion = new Date();
      this.http.post("http://localhost:8080/funcion/guardar",temp).subscribe(
        data => this.mostrar(data)
      )
    }
  }

  mostrar(funcion:any){
    if(funcion?.idFuncion){
      alert("Funcion creada con el id: "+ funcion.idFuncion);
      this.buscarFuncion();
    }
    else{
      alert("Error al crear funcion, existe un problema en el servidor.")
    }
  }
}

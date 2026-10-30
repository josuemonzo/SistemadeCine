import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  selector: 'app-crear-clasificacion',
  styleUrl: './crear-clasificacion.css',
  templateUrl: './crear-clasificacion.html',
})
export class CrearClasificacion {
  formulario:FormGroup;
  private readonly http:HttpClient;

  clasificacion:any =[];

  

  constructor(private fb:FormBuilder, http:HttpClient, private cdr : ChangeDetectorRef){
    this.formulario = this.fb.group(
      {
        nombre:['',[Validators.required]]
      }

    );
    this.http = http;
    
  }
  ngOnInit(): void {
    this.buscarClasificacion();
  }

  buscarClasificacion(){
    this.http.get<any[]>("http://localhost:8080/clasificacion/buscar")
    .subscribe(data => {
      console.log("Respuesta buscarClasificacion:", data);
      this.clasificacion = data;
      this.cdr.detectChanges();
    });
}

  guardarClasificacion(){
    if(this.formulario.valid){
      let temp = {...this.formulario.value};
      temp.fechaCreacion = new Date();
      this.http.post("http://localhost:8080/clasificacion/guardar",temp).subscribe(
        data => this.mostrar(data)
      )
    }
  }

  mostrar(clasificacion:any){
    if(clasificacion?.idClasificacion){
      alert("Clasificacion creado con el id: "+ clasificacion.idClasificacion);
      this.buscarClasificacion();
    }
    else{
      alert("Error al crear clasificacion, existe un problema en el servidor.")
    }
  }
}

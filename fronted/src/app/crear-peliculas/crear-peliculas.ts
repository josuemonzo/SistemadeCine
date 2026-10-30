import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  selector: 'app-crear-peliculas',
  styleUrl: './crear-peliculas.css',
  templateUrl: './crear-peliculas.html',
})
export class CrearPeliculas {

  formulario:FormGroup;
  private readonly http:HttpClient;

  peliculas:any =[];

  constructor(private fb:FormBuilder, http:HttpClient, private cdr : ChangeDetectorRef){
    this.formulario = this.fb.group(
      {
        titulo:['',[Validators.required]],
        sipnosis:['',Validators.required],
        duracion:['',Validators.required]
      }

    );
    this.http = http;
}
ngOnInit(): void {
    this.buscarPelicula();
  }

  buscarPelicula(){
    this.http.get<any[]>("http://localhost:8080/pelicula/buscar")
    .subscribe(data => {
      console.log("Respuesta buscarPelicula:", data);
      this.peliculas = data;
      this.cdr.detectChanges();
    });
}

  guardarPelicula(){
    if(this.formulario.valid){
      let temp = {...this.formulario.value};
      temp.fechaCreacion = new Date();
      this.http.post("http://localhost:8080/pelicula/guardar",temp).subscribe(
        data => this.mostrar(data)
      )
    }
  }

  mostrar(peliculas:any){
    if(peliculas?.idPelicula){
      alert("Pelicula creado con el id: "+ peliculas.idPelicula);
      this.buscarPelicula();
    }
    else{
      alert("Error al crear pelicula, existe un problema en el servidor.")
    }
  }
}

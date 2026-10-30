import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  selector: 'app-crear-anuncio',
  styleUrl: './crear-anuncio.css',
  templateUrl: './crear-anuncio.html',
})
export class CrearAnuncio {

  formulario:FormGroup;
  private readonly http:HttpClient;

  anuncios:any =[];

  constructor(private fb:FormBuilder, http:HttpClient, private cdr : ChangeDetectorRef){
    this.formulario = this.fb.group(
      {
      titulo: ['', [Validators.required]], 
      descripcion: ['', Validators.required],
      fecha_publicacion: ['', Validators.required],
      tipo: ['', Validators.required]
      }

    );
    this.http = http;
    
  }

  ngOnInit(): void {
    this.buscarAnuncios();
  }

  buscarAnuncios(){
    this.http.get<any[]>("http://localhost:8080/anuncio/buscar")
    .subscribe(data => {
      console.log("Respuesta buscarAnuncio:", data);
      this.anuncios = data;
      this.cdr.detectChanges();
    })
  }

  guardarAnuncios(){
    if(this.formulario.valid){
      let temp = {...this.formulario.value};
      temp.fechaCreacion = new Date();
      this.http.post("http://localhost:8080/anuncio/guardar",temp).subscribe(
        data => this.mostrar(data)
      )
    }
  }

  mostrar(anuncios:any){
    if(anuncios?.idAnuncio){
      alert("Anuncio creado con el id: "+ anuncios.idAnuncio);
      this.buscarAnuncios();
    }
    else{
      alert("Error al crear anuncio, existe un problema en el servidor.")
    }
  }
}

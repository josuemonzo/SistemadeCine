import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  selector: 'app-reserva-tickets',
  styleUrl: './reserva-tickets.css',
  templateUrl: './reserva-tickets.html',
})
export class ReservaTickets implements OnInit{

  formulario:FormGroup;
  private readonly http:HttpClient;

  tickets:any;

  constructor(private fb:FormBuilder, http:HttpClient, private cdr : ChangeDetectorRef){
    this.formulario = this.fb.group(
      {
        numeroReserva:['',[Validators.required]],
        fechaReserva:['',Validators.required]
      }

    );
    this.http = http;    
  }

  ngOnInit(): void {
    this.buscarTickets();
  }

buscarTickets(){
    this.http.get<any[]>("http://localhost:8080/tickets/buscar")
    .subscribe(data => {
      console.log("Respuesta buscarTickets:", data);
      this.tickets = data;
      
      this.cdr.detectChanges();
    });
}

guardarTickets(){
    if(this.formulario.valid){
      let temp = {...this.formulario.value};
      temp.fechaCreacion = new Date();
      this.http.post("http://localhost:8080/tickets/guardar",temp).subscribe(
        data => this.mostrar(data)
      )
    }
  }

mostrar(tickets:any){
    if(tickets?.idTickets){
      alert("Ticket creado con el id: "+ tickets.idTickets);
      this.buscarTickets();
    }
    else{
      alert("Error al crear ticket, existe un problema en el servidor.")
    }
  }
}
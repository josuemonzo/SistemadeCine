import { Component,ChangeDetectorRef} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList  } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  imports: [IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule],
})
export class Tab4Page{
  private readonly http:HttpClient;
  tickets: any =[];
  
  constructor(http:HttpClient,private cdr : ChangeDetectorRef) {
    this.http = http;
    this.buscarTickets();
  }
buscarTickets(){
    this.http.get("http://localhost:8080/tickets/buscar").subscribe(
      data => {
        this.tickets = data;
        this.cdr.detectChanges();
      }
    )
  }
}

import { Component,ChangeDetectorRef} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList  } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule],
})
export class Tab2Page {
  private readonly http:HttpClient;
  anuncios: any =[];

constructor(http:HttpClient,private cdr : ChangeDetectorRef) {
    this.http = http;
    this.buscarAnuncios();
  }

  buscarAnuncios(){
    this.http.get("http://localhost:8080/anuncio/buscar").subscribe(
      data => {
        this.anuncios = data;
        this.cdr.detectChanges();
      }
    )
  }
}

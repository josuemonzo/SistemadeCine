import { Component,ChangeDetectorRef} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonLabel, IonList  } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule, IonList],
})
export class Tab3Page {
  private readonly http:HttpClient;
  peliculas: any =[];

constructor(http:HttpClient,private cdr : ChangeDetectorRef) {
    this.http = http;
    this.buscarPelicula();
  }

  buscarPelicula(){
    this.http.get("http://localhost:8080/pelicula/buscar").subscribe(
      data => {
        this.peliculas = data;
        this.cdr.detectChanges();
      }
    )
  }
}

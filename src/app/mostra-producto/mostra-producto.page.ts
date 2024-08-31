import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mostra-producto',
  templateUrl: './mostra-producto.page.html',
  styleUrls: ['./mostra-producto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MostraProductoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.page.html',
  styleUrls: ['./listar-producto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListarProductoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

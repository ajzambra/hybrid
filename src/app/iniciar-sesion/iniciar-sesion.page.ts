import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [IonicModule, FormsModule, RouterModule],
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss']
})
export class IniciarSesionPage {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email && this.password) {
      console.log('Iniciando sesión con:', this.email, this.password);
      this.router.navigate(['/home']);
    } else {
      console.log('Por favor, complete todos los campos.');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { Restaurante } from '../models/restaurante';

@Component({
  selector: 'app-mediador',
  templateUrl: './mediador.component.html',
  styleUrls: ['./mediador.component.css']
})
export class MediadorComponent implements OnInit {

  private usuario: Usuario
  private restaurante: Restaurante

  constructor(private router: Router) { 
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.restaurante = JSON.parse(localStorage.getItem('restaurante'));
    if(!this.usuario){
      console.log("Não logado")
      this.router.navigate(['/login/']);
    }else{
      console.log("USUARIO:")
      console.log(this.usuario)
      console.log("RESTAURANTE:")
      console.log(this.restaurante)
    }
  }

  ngOnInit() {
  }

}

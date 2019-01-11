import { Component, OnInit } from '@angular/core';
import {RazaRestService} from "../../servicios/rest/raza-rest.service";
import {Raza} from "../../interfaces/raza";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ruta-crear-raza',
  templateUrl: './ruta-crear-raza.component.html',
  styleUrls: ['./ruta-crear-raza.component.scss']
})
export class RutaCrearRazaComponent implements OnInit {

  raza:RazaEjemplo = {
    nombre: '',
    apellido: ''
  };

  constructor(private readonly _razaRestService:RazaRestService) { }

  ngOnInit() {
  }

  crearRaza(formulario: NgForm) {

    console.log('formulario:', formulario);

  const crearRaza$ = this._razaRestService
    .create(this.raza.nombre)

    crearRaza$
      .suscribe(
        (raza:Raza)=>{
          console.log('Raza');
          alert(`Raza creada: ${raza.nombre}`);
        },
        (error)=>{
          console.error('Error: ',error);
        }
      );
  }



  mostrarEnConsola (objeto) {
    console.log(objeto);
    console.log(objeto.value);
  }

}

interface RazaEjemplo {
  nombre: string,
  apellido: string
}

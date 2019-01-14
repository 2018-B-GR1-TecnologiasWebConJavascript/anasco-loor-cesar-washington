import {Component, OnInit} from '@angular/core';
import {RazaRestService} from '../../servicios/rest/raza-rest.service';
import {Raza} from '../../interfaces/raza';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ruta-crear-raza',
  templateUrl: './ruta-crear-raza.component.html',
  styleUrls: ['./ruta-crear-raza.component.scss']
})
export class RutaCrearRazaComponent implements OnInit {

  raza: RazaEjemplo = {
    nombre: '123123123123',
    apellido: ''
  };

  constructor(private readonly _razaRestService: RazaRestService) {
  }

  ngOnInit() {
  }

  crearRaza(formulario: NgForm) {

    console.log('Formulario: ', formulario);


    const crearRaza$ = this._razaRestService
      .create(<string> this.raza.nombre);

    crearRaza$
      .subscribe(
        (raza: Raza) => {
          console.log('Raza');
          alert(`Raza creada: ${raza.nombre}`);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );

  }


  mostrarEnConsola(objeto) {
    console.log(objeto);
    console.log(objeto.value);
  }

}


interface RazaEjemplo {
  nombre: string | number;
  apellido: string;
}










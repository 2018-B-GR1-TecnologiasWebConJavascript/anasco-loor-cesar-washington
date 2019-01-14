import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  imagenes: Imagenes[] = [
    {
      anio: 2018,
      nombreImagen: '01.jpeg',
      nombrePelicula: 'uno'
    },
    {
      anio: 2012,
      nombreImagen: '02.jpeg',
      nombrePelicula: 'dos'
    },
    {
      anio: 2014,
      nombreImagen: '03.jpeg',
      nombrePelicula: 'tres'
    },{
      anio: 2010,
      nombreImagen: '04.jpeg',
      nombrePelicula: 'cuatro'
    }

  ];

  constructor() {
  }

  ngOnInit() {
  }

}

export interface Imagenes {
  nombreImagen: string;
  nombrePelicula: string;
  anio: number;
}



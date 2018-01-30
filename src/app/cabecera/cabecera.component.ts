import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  variable: string;
  ruta: any;

  constructor(public servicio: SearchService) {
  }

  ngOnInit() {
    this.servicio.estilo$.subscribe(data => {
        this.variable = data;
      }
    )

    this.servicio.posicion$.subscribe(data => {
        this.ruta = data;

      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-cabecera-enlaces',
  templateUrl: './cabecera-enlaces.component.html',
  styleUrls: ['./cabecera-enlaces.component.css']
})
export class CabeceraEnlacesComponent implements OnInit {
  arrayOpciones:any;
  contenido:any;
  variable:string;

  constructor(public servicio:SearchService) {
    this.arrayOpciones = ['characters','comics','events','creators','series','stories'];
  }

  ngOnInit() {
    this.servicio.estilo$.subscribe(data => {
      this.variable = data;
    }
    )
  }


}

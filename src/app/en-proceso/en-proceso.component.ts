import {Component, OnInit} from '@angular/core';
import {slideToLeft} from '../router.animations';
import {SearchService} from '../search.service';


@Component({
  selector: 'app-en-proceso',
  templateUrl: './en-proceso.component.html',
  styleUrls: ['./en-proceso.component.css'],
  animations: [slideToLeft()],
  host: {'[@routerTransition]': ''}
})
export class EnProcesoComponent implements OnInit {

  constructor(public servicio: SearchService) {
  }

  ngOnInit() {
    this.servicio.setposicion('PáginaEnProceso');
  }

}

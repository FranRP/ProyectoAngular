import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  variable: string;

  constructor(public servicio: SearchService) {
  }

  ngOnInit() {
    this.servicio.estilo$.subscribe(data => {
        this.variable = data;
      }
    )
  }

}

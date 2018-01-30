import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(public servicio: SearchService) {
  }

  ngOnInit() {
    this.servicio.setposicion('NotFound');
  }

}

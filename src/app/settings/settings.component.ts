import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  arrayTemas:any = [{'nombre':'wolverine'},{'nombre':'hulk'},{'nombre':'classic'},{'nombre':'america'}];

  constructor(public servicio:SearchService) { }

  ngOnInit() {
  }

  cambiarTema(event) {
    let variable = event.path[0].className;
    this.servicio.setestilo(variable);
  }

}

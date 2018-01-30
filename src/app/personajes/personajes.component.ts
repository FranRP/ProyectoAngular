import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {slideToLeft} from '../router.animations';
import {NavigationEnd, Router} from '@angular/router';


declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  animations: [slideToLeft()],
  host: {'[@routerTransition]': ''}
})
export class PersonajesComponent implements OnInit {
  arrayContenido: any;
  contador: any = 0;
  iniciales: string;
  orden: string = 'name';
  activarup: boolean = false;
  activardown: boolean = true;
  variable: any;

  constructor(public servicio: SearchService, private router: Router) {
  }

  ngOnInit() {
    this.servicio.peticion('characters', this.contador, this.iniciales, this.orden).subscribe(data => {
        this.arrayContenido = data.data.results;
        // console.log(this.arrayContenido);
        // console.log(data);
      }
    )
    this.servicio.setposicion('Characters');

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      var scrollToTop = window.setInterval(function () {
        var pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16); // how fast to scroll (this equals roughly 60 fps)
    });
  }

  mostrarinfo(event) {
    let img = event.path[0];
    let ident = $(img).attr('id');
    // console.log(ident);
    this.servicio.pjindividual('characters', ident).subscribe(data => {
        this.variable = data.data.results[0];
        this.servicio.setpj(this.variable);
      }
    )
  }

  siguiente() {
    this.activardown = false;
    this.contador += 20;
    this.servicio.peticion('characters', this.contador, this.iniciales, this.orden).subscribe(data => {
        if (data.data.results.length < 20) {
          this.activarup = true;
        }
        this.arrayContenido = data.data.results;
        // console.log(this.arrayContenido);
      }
    )
  }

  anterior() {
    if (this.contador == 0) {
      this.activardown = true;
    } else {
      this.contador -= 20;
      this.servicio.peticion('characters', this.contador, this.iniciales, this.orden).subscribe(data => {
          this.arrayContenido = data.data.results;
          // console.log(this.arrayContenido);
        }
      )
    }

  }

  filtro() {
    this.activarup = false;
    this.contador = 0;
    this.servicio.peticion('characters', this.contador, this.iniciales, this.orden).subscribe(data => {
        if (data.data.results.length < 20) {
          this.activarup = true;
        }
        this.arrayContenido = data.data.results;
        // console.log(this.arrayContenido);
      }
    )
  }


}

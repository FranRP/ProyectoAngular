import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {slideToLeft} from '../router.animations';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
  animations: [slideToLeft()],
  host: {'[@routerTransition]': ''}
})
export class ContenidoComponent implements OnInit {

  arrayContenido: any;
  filtro: any;

  constructor(public servicio: SearchService, private router: Router) {
  }

  ngOnInit() {
    this.servicio.peticionEventos('events').subscribe(data => {
        this.arrayContenido = data.data.results;
        console.log(this.arrayContenido);
      }
    )

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
    this.servicio.setposicion('Events');
  }


}

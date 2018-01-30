import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {slideToRight} from '../router.animations';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-pjinfo',
  templateUrl: './pjinfo.component.html',
  styleUrls: ['./pjinfo.component.css'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}
})
export class PjinfoComponent implements OnInit {

  variable: any;
  arraySeries: any;
  arrayStories: any;
  nombre: string;

  constructor(public servicio: SearchService, private router: Router) {
  }

  ngOnInit() {
    this.servicio.pj$.subscribe(data => {
        this.variable = data;
        this.arraySeries = this.variable.series.items;
        this.arrayStories = this.variable.stories.items;
        this.nombre = this.variable.name;
        this.servicio.setposicion('Characters / ' + this.nombre);
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

  }

}

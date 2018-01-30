import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';
import {SearchService} from '../search.service';
import {NavigationEnd, Router} from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomepageComponent implements OnInit {

  constructor(public servicio: SearchService, private router: Router) {
  }

  ngOnInit() {
    $(function () {
      $(".texto").typed({
        strings: ["Recuerda ayudar al prójimo, mirar antes de cruzar y tratar siempre con respeto a tus mayores", "O haz como tu super héroe favorito, yo, y haz lo que te de la gana"],
        typeSpeed: 50,
        startDelay: 600,
        backSpeed: 60,
        backDelay: 500,
        showCursor: false,
      })
    })

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

    this.servicio.setposicion('');
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SearchService {

  private pjsource = new Subject<any>();
  public pj$ = this.pjsource.asObservable();

  private estilosource = new Subject<any>();
  public estilo$ = this.estilosource.asObservable();

  private posicionsource = new Subject<any>();
  public posicion$ = this.posicionsource.asObservable();

  controlador: any = 'verdadero';

  arrayContenido: any;

  constructor(private http: HttpClient, private http2: HttpClient, private http3: HttpClient, private http4: HttpClient) {
  }

  peticion(elem, offset, iniciales = 'a', orden = 'name'): Observable<any> {
    if (iniciales == '') {
      iniciales = 'a';
    }
    this.arrayContenido = this.http.get('https://gateway.marvel.com/v1/public/' + elem + '?apikey=c16ce023e325ddf234fedcfa8c240ab8&ts=9&nameStartsWith=' + iniciales + '&offset=' + offset + '&orderBy=' + orden + '&hash=544c93cc95c797fa8b665a6aa5a8a5e5');
    return this.arrayContenido;
  }

  peticionEventos(elem): Observable<any> {
    let variable = this.http4.get('https://gateway.marvel.com/v1/public/' + elem + '?apikey=c16ce023e325ddf234fedcfa8c240ab8&limit=90&ts=9&hash=544c93cc95c797fa8b665a6aa5a8a5e5')
    return variable;
  }

  pjindividual(elem, ident): Observable<any> {
    let variable = this.http2.get('https://gateway.marvel.com/v1/public/' + elem + '/' + ident + '?apikey=c16ce023e325ddf234fedcfa8c240ab8&ts=9&hash=544c93cc95c797fa8b665a6aa5a8a5e5')
    return variable;
  }

  peticionComics(pagina): Observable<any> {
    let variable = this.http3.get('https://gateway.marvel.com/v1/public/comics?apikey=c16ce023e325ddf234fedcfa8c240ab8&offset=' + pagina + '&ts=9&hash=544c93cc95c797fa8b665a6aa5a8a5e5');
    return variable;
  }

  setpj(val) {
    this.pjsource.next(val);
  }

  setestilo(val) {
    this.estilosource.next(val);
  }

  setposicion(val) {
    this.posicionsource.next(val);
  }


}

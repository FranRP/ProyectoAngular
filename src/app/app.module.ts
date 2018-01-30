import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {SearchService} from './search.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CabeceraComponent} from './cabecera/cabecera.component';
import {CabeceraEnlacesComponent} from './cabecera-enlaces/cabecera-enlaces.component';
import {ContenidoComponent} from './contenido/contenido.component';
import {HomepageComponent} from './homepage/homepage.component';
import {FooterComponent} from './footer/footer.component';
import {PersonajesComponent} from './personajes/personajes.component';
import {PjinfoComponent} from './pjinfo/pjinfo.component';
import {ComicsComponent} from './comics/comics.component';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ComicsrepetidosPipe} from './comicsrepetidos.pipe';
import {BuscarcomicPipe} from './buscarcomic.pipe';
import {SettingsComponent} from './settings/settings.component';
import {EnProcesoComponent} from './en-proceso/en-proceso.component';
import {NotFoundComponent} from './not-found/not-found.component';


// const routes = [
//   {'path': '', component: 'HomepageComponent'},
//   {'path': 'homepage', component: 'HomepageComponent'},
// ]

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'events', component: ContenidoComponent},
  {path: 'characters', component: PersonajesComponent},
  {path: 'pjinfo', component: PjinfoComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'workC', component: EnProcesoComponent},
  {path: 'workSe', component: EnProcesoComponent},
  {path: 'workSt', component: EnProcesoComponent},
  {path: '**', component: NotFoundComponent}
]

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CabeceraEnlacesComponent,
    ContenidoComponent,
    HomepageComponent,
    FooterComponent,
    PersonajesComponent,
    PjinfoComponent,
    ComicsComponent,
    ComicsrepetidosPipe,
    BuscarcomicPipe,
    SettingsComponent,
    EnProcesoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes)
    routing
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

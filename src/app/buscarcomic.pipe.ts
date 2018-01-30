import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarcomic'
})
export class BuscarcomicPipe implements PipeTransform {

  transform(value: any[], filtro: string): any {
    if (!value) return [];
    if (!filtro) return value;

    filtro = filtro.toLowerCase();

    return value.filter( val => {
      return val.title.toLowerCase().includes(filtro);
    });
  }

}

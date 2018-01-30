import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comicsrepetidos'
})
export class ComicsrepetidosPipe implements PipeTransform {

  arrayValores:any;

  transform(value: any, args?: any): any {
    return args;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    value = value.replace(/a/gi, '4');
    value = value.replace(/e/gi, '3');
    value = value.replace(/i/gi, '1');
    value = value.replace(/o/gi, '0');
    value = value.replace(/u/gi, '9');

    return value;
  }

}

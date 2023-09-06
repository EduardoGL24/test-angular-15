import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    value = value.replace(/a/g, '4');
    value = value.replace(/e/g, '3');
    value = value.replace(/i/g, '1');
    value = value.replace(/o/g, '0');
    value = value.replace(/u/g, '9');

    return value;
  }

}

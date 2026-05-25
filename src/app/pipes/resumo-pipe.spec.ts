import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumo',
  standalone: true
})
export class ResumoPipe implements PipeTransform {

  transform(texto: string): string {

    if (!texto) {
      return '';
    }

    return texto.substring(0, 100) + '...';
  }

}
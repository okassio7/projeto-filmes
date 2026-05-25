import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDestaque]',
  standalone: true
})
export class DestaqueDirective {

  constructor(private el: ElementRef) {

    this.el.nativeElement.style.border =
      '3px solid #3880ff';

    this.el.nativeElement.style.borderRadius =
      '10px';
  }

}
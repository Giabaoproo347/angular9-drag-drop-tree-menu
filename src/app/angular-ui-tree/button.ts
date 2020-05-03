import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[button]'
})
export class ButtonDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('button');

    // @ts-ignore
    el.nativeElement.addEventListener('mousedown', e => {
      el.nativeElement.classList.add('button-pressed');
    });

    // @ts-ignore
    el.nativeElement.addEventListener('mouseup', e => {
      el.nativeElement.classList.remove('button-pressed');
    });
  }
}

import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map, filter } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {
  // el is the reference to the element
  // controlName is the reference to the form group

  constructor(
    private el: ElementRef,
    private controlName: NgControl
  ) { }

  ngOnInit() {
    this
      .controlName
      .control
      .parent
      .valueChanges
      .pipe(
        map(({ a, b, answer }) => Math.abs((a + b - answer) / (a + b))),
        // filter(value => value < 0.2)
      )
      .subscribe(
        value => {
          if (value < 0.2) {
            this.el.nativeElement.classList.add('close');
          } else {
            this.el.nativeElement.classList.remove('close');
          }
        }
    );
  }

}

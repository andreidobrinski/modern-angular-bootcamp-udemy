import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { delay, filter } from 'rxjs/operators';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl(''),
  }, [
    MathValidators.addition('answer', 'a', 'b')
  ]);

  constructor() { }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit(): void {
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(100)
    ).subscribe(() => {
      // use setValue when all values updated
      // if only part of the values updated, use patchValue
      this.mathForm.setValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: '',
      })
    })
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

}

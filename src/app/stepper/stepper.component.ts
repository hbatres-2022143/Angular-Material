import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  isLinear = true;
  birthDateFormGroup: FormGroup;
  nameFormGroup: FormGroup;
  dpiFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.birthDateFormGroup = this._formBuilder.group({
      birthDate: ['', [Validators.required, this.dateValidator]],
    });
    this.nameFormGroup = this._formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    });
    this.dpiFormGroup = this._formBuilder.group({
      dpiToggle: [false],
      dpi: [
        { value: '', disabled: true },
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ],
      ],
    });

    this.dpiFormGroup
      .get('dpiToggle')
      ?.valueChanges.subscribe((toggleValue: boolean) => {
        const dpiControl = this.dpiFormGroup.get('dpi');
        if (toggleValue) {
          dpiControl?.enable();
        } else {
          dpiControl?.disable();
        }
      });
  }

  dateValidator(control: AbstractControl): ValidationErrors | null {
    const dateValue: string = control.value;
    const date = moment(dateValue);
    const today = moment();
    return date.isBefore(today) ? null : { invalidDate: true };
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.css'],
})
export class CurrentDayComponent {
  minDate: Date;
  maxDate: Date;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(2023, 0, 1);
    this.maxDate = new Date();
  }
}

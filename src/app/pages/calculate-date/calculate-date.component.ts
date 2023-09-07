import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculate-date',
  templateUrl: './calculate-date.component.html',
  styleUrls: ['./calculate-date.component.scss']
})
export class CalculateDateComponent {
  dateForm: FormGroup;
  dateResult: any;

  constructor(private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      selectedDate: ['', Validators.required],
      selectedUnit: ['days', Validators.required],
      amount: [1, [Validators.required, Validators.min(1)]]
    });
  }

  calculateDate() {
    if (this.dateForm.valid) {
      const { selectedDate, selectedUnit, amount } = this.dateForm.value;
      const date = new Date(selectedDate);

      if (selectedUnit === 'days') {
        date.setDate(date.getDate() + amount);
      } else if (selectedUnit === 'months') {
        date.setMonth(date.getMonth() + amount);
      } else if (selectedUnit === 'years') {
        date.setFullYear(date.getFullYear() + amount);
      }

      this.dateResult = date;
    }
  }
}

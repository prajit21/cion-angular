import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-form-validation',
  imports: [CommonModule],
  templateUrl: './tooltip-form-validation.html',
  styleUrls: ['./tooltip-form-validation.scss'],
})
export class TooltipFormValidation {
  public validate = false;
  public tooltipValidation = false;

  public submit() {
    this.validate = !this.validate;
  }
  public tooltipSubmit() {
    this.tooltipValidation = !this.tooltipValidation;
  }
}

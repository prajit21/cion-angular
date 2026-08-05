import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tooltip-form-validation',
  templateUrl: './tooltip-form-validation.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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

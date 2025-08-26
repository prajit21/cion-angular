import { Component } from '@angular/core';

import { BrowserDefaults } from './browser-defaults/browser-defaults';
import { TooltipFormValidation } from './tooltip-form-validation/tooltip-form-validation';
import { ValidationForm } from './validation-form/validation-form';

@Component({
  selector: 'app-form-validation',
  imports: [TooltipFormValidation, BrowserDefaults, ValidationForm],
  templateUrl: './form-validation.html',
  styleUrls: ['./form-validation.scss'],
})
export class FormValidation {}

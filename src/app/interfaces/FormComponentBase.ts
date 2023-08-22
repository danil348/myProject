import { FormGroup } from '@angular/forms';

export class FormComponentBase {
  isFormSent = false;

  formGroup: FormGroup = new FormGroup({});
}

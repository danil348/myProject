import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormComponentBase } from '../../interfaces/FormComponentBase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends FormComponentBase {
  constructor() {
    super();
    this.formGroup.addControl('phone', new FormControl('', [Validators.required]));
  }

  register(): void {
    console.log('register');
  }
}

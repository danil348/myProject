import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  template: '',
})
export class MaterialBaseButtonComponent {
  @Input() isDisabled: boolean = false;
  @Output() Click = new EventEmitter<any>();
}

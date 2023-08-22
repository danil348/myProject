import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { RemoveWrapperDirective } from '../../base-component.module';
import { MaterialBaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'app-root-button',
  templateUrl: './root-button.component.html',
  styleUrls: ['./root-button.component.scss'],
})
export class RootButtonComponent extends MaterialBaseButtonComponent {
  @Input() theme: 'light' | 'blue' | 'yellow' = 'blue';
  @Input() class: string = '';
  @HostBinding('attr.readonly') readOnly = '';

  onClickButton(event: MouseEvent) {
    this.Click.emit(event);
  }
}

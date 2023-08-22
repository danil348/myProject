import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RemoveWrapperDirective } from './base-component.module';
import { RootButtonComponent } from './buttons/root-button/root-button.component';

@NgModule({
  declarations: [RootButtonComponent, RemoveWrapperDirective],
  imports: [CommonModule],
  exports: [RootButtonComponent, RemoveWrapperDirective],
})
export class SharedModule {}

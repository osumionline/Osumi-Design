import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { OIconComponent } from '../o-icon/o-icon.component';
import { OLoadingComponent } from '../o-loading/o-loading.component';

@Component({
  selector: 'o-button-icon',
  imports: [OIconComponent, OLoadingComponent],
  templateUrl: './o-button-icon.component.html',
})
export class OButtonIconComponent {
  src: InputSignal<string> = input.required<string>();
  disabled: InputSignal<boolean> = input<boolean>(false);
  loading: InputSignal<boolean> = input<boolean>(false);
  class: InputSignal<string> = input<string>('');

  buttonClass: Signal<string> = computed(
    (): string =>
      'o-button-icon ' +
      this.class() +
      (this.disabled() ? ' o-button-icon-disabled' : '')
  );
}

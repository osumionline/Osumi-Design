import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import {
  OButtonClassInterface,
  OButtonDisabledInterface,
  OButtonIdInterface,
  OButtonNameInterface,
  OButtonTypeInterface,
} from '../../interfaces/o-button.interfaces';
import { OLoadingComponent } from '../o-loading/o-loading.component';

@Component({
  selector: 'o-button',
  templateUrl: './o-button.component.html',
  imports: [OLoadingComponent],
})
export class OButtonComponent {
  type: InputSignal<OButtonTypeInterface> =
    input<OButtonTypeInterface>('button');
  disabled: InputSignal<OButtonDisabledInterface> =
    input<OButtonDisabledInterface>(false);
  name: InputSignal<OButtonNameInterface> = input<OButtonNameInterface>('');
  id: InputSignal<OButtonIdInterface> = input<OButtonIdInterface>('');
  class: InputSignal<OButtonClassInterface> = input<OButtonClassInterface>('');

  buttonClass: Signal<OButtonClassInterface> = computed(
    (): OButtonClassInterface =>
      'o-button ' +
      this.class() +
      (this.loading() || this.disabled() ? ' o-button-disabled' : '')
  );

  loading: InputSignal<boolean> = input<boolean>(false);

  onClick(event: MouseEvent): void {
    if (this.disabled() || this.loading()) {
      event.stopPropagation(); // Prevents click event when disabled or loading
      event.preventDefault(); // Prevents default action of the click event
      return;
    }

    // Continue with the click functionality if the button is enabled
    console.log('Button clicked!');
    // You can add your custom event emit here if needed
  }
}

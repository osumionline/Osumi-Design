import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { OLoadingComponent } from '../o-loading/o-loading.component';

@Component({
  selector: 'o-button',
  templateUrl: './o-button.component.html',
  imports: [OLoadingComponent],
})
export class OButtonComponent {
  type: InputSignal<'button' | 'submit' | 'reset'> = input<
    'button' | 'submit' | 'reset'
  >('button');
  disabled: InputSignal<boolean> = input<boolean>(false);
  name: InputSignal<string> = input<string>('');
  id: InputSignal<string | number> = input<string | number>('');
  class: InputSignal<string> = input<string>('');

  buttonClass: Signal<string> = computed(
    (): string =>
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

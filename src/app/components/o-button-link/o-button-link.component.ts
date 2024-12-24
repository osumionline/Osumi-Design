import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OLoadingComponent } from '../o-loading/o-loading.component';

@Component({
  selector: 'o-button-link',
  templateUrl: './o-button-link.component.html',
  imports: [OLoadingComponent, RouterLink],
})
export class OButtonLinkComponent {
  disabled: InputSignal<boolean> = input<boolean>(false);
  name: InputSignal<string> = input<string>('');
  id: InputSignal<string | number> = input<string | number>('');
  class: InputSignal<string> = input<string>('');
  targetBlank: InputSignal<boolean> = input<boolean>(false);

  buttonClass: Signal<string> = computed(
    (): string =>
      'o-button ' +
      this.class() +
      (this.loading() || this.disabled() ? ' o-button-disabled' : '')
  );

  href: InputSignal<string[]> = input<string[]>([]);
  loading: InputSignal<boolean> = input<boolean>(false);
}

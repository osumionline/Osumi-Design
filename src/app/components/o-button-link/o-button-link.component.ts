import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  OButtonClassInterface,
  OButtonDisabledInterface,
  OButtonIdInterface,
  OButtonNameInterface,
  OButtonTypeInterface,
} from '../../interfaces/o-button.interfaces';
import { OLoadingComponent } from '../o-loading/o-loading.component';

@Component({
  selector: 'o-button-link',
  templateUrl: './o-button-link.component.html',
  imports: [OLoadingComponent, RouterLink],
})
export class OButtonLinkComponent {
  type: InputSignal<OButtonTypeInterface> =
    input<OButtonTypeInterface>('button');
  disabled: InputSignal<OButtonDisabledInterface> =
    input<OButtonDisabledInterface>(false);
  name: InputSignal<OButtonNameInterface> = input<OButtonNameInterface>('');
  id: InputSignal<OButtonIdInterface> = input<OButtonIdInterface>('');
  class: InputSignal<OButtonClassInterface> = input<OButtonClassInterface>('');
  targetBlank: InputSignal<boolean> = input<boolean>(false);

  buttonClass: Signal<OButtonClassInterface> = computed(
    (): OButtonClassInterface =>
      'o-button ' +
      this.class() +
      (this.loading() || this.disabled() ? ' o-button-disabled' : '')
  );

  href: InputSignal<string[]> = input<string[]>([]);
  loading: InputSignal<boolean> = input<boolean>(false);
}

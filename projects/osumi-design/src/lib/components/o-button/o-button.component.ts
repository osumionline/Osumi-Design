import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import {
  OButtonClassInterface,
  OButtonDisabledInterface,
  OButtonIdInterface,
  OButtonNameInterface,
  OButtonTypeInterface,
} from '../../interfaces/o-button.interfaces';

@Component({
  selector: 'o-button',
  templateUrl: './o-button.component.html',
  imports: [],
  styleUrl: './o-button.component.scss',
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
    (): OButtonClassInterface => `o-button ${this.class()}`
  );

  href: InputSignal<string[]> = input<string[]>([]);
  loading: InputSignal<boolean> = input<boolean>(false);
}

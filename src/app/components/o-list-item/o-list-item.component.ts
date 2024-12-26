import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'o-list-item',
  imports: [],
  templateUrl: './o-list-item.component.html',
})
export class OListItemComponent {
  selected: InputSignal<boolean> = input<boolean>(false);
}

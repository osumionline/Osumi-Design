import { Component, input, InputSignal } from '@angular/core';

type AlignOption = 'left' | 'center' | 'right';

@Component({
  selector: 'o-card-footer',
  imports: [],
  templateUrl: './o-card-footer.component.html',
})
export class OCardFooterComponent {
  align: InputSignal<AlignOption | undefined> = input<AlignOption | undefined>(
    undefined
  );
}

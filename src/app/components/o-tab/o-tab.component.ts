import {
  Component,
  input,
  InputSignal,
  TemplateRef,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'o-tab',
  imports: [],
  templateUrl: './o-tab.component.html',
})
export class OTabComponent {
  label: InputSignal<string> = input.required<string>();
  content = viewChild(TemplateRef);
}

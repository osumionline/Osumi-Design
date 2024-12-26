import {
  Component,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { OButtonIconComponent } from '../o-button-icon/o-button-icon.component';
import { OTabComponent } from '../o-tab/o-tab.component';
import { OTabsComponent } from '../o-tabs/o-tabs.component';

export interface OCodeContentData {
  title: string;
  codeHTML: string;
  codeTS: string;
  codeCSS: string;
}

@Component({
  selector: 'o-code-content',
  imports: [
    OButtonIconComponent,
    OTabsComponent,
    OTabComponent,
    HighlightAuto,
    HighlightLineNumbers,
  ],
  templateUrl: './o-code-content.component.html',
})
export class OCodeContentComponent {
  data: InputSignal<OCodeContentData> = input.required<OCodeContentData>();
  codeVisible: WritableSignal<boolean> = signal<boolean>(false);

  showCode(): void {
    this.codeVisible.update((value: boolean): boolean => !value);
  }
}

import { Component, signal, WritableSignal } from '@angular/core';
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { OButtonComponent } from '../../../components/o-button/o-button.component';
import {
  OCodeContentComponent,
  OCodeContentData,
} from '../../../components/o-code-content/o-code-content.component';
import { OTabComponent } from '../../../components/o-tab/o-tab.component';
import { OTabsComponent } from '../../../components/o-tabs/o-tabs.component';
import { OBadgeDirective } from '../../../directives/o-badge.directive';

@Component({
  selector: 'o-badge-docs',
  imports: [
    OBadgeDirective,
    OButtonComponent,
    OTabsComponent,
    OTabComponent,
    OCodeContentComponent,
    HighlightAuto,
    HighlightLineNumbers,
  ],
  templateUrl: './o-badge-docs.component.html',
  styleUrl: './o-badge-docs.component.scss',
})
export default class OBadgeDocsComponent {
  badgeValue: WritableSignal<number> = signal<number>(3);
  code: string = `<p class="description"
   [oBadge]="badgeValue()">
    Contenido con badge
</p>`;

  changeBadge(value: number): void {
    this.badgeValue.update((val: number): number => val + value);
  }

  exampleData: OCodeContentData = {
    title: 'OBadge',
    codeHTML: `<p class="description"
    [oBadge]="badgeValue()">
    Contenido con badge
</p>

<p>
    <o-button (click)="changeBadge(1)">
        Aumentar
    </o-button>

    <o-button (click)="changeBadge(-1)">
        Reducir
    </o-button>
</p>`,
    codeTS: `import { Component, signal, WritableSignal } from '@angular/core';
import { OButtonComponent } from '@osumi/design';
import { OBadgeDirective } from '@osumi/design';

@Component({
  selector: 'o-badge-example',
  imports: [
    OBadgeDirective,
    OButtonComponent,
  ],
  templateUrl: './o-badge-example.component.html',
  styleUrl: './o-badge-example.component.scss',
})
export default class OBadgeExampleComponent {
  badgeValue: WritableSignal<number> = signal<number>(3);

  changeBadge(value: number): void {
    this.badgeValue.update((val: number): number => val + value);
  }`,
    codeCSS: `.description {
    display: inline-block;
    padding: 16px;
    border: 1px solid #000;
}`,
  };
}

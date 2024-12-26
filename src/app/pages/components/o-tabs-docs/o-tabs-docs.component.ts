import { Component, signal, WritableSignal } from '@angular/core';
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import {
  OCodeContentComponent,
  OCodeContentData,
} from '../../../components/o-code-content/o-code-content.component';
import { OTabComponent } from '../../../components/o-tab/o-tab.component';
import { OTabsComponent } from '../../../components/o-tabs/o-tabs.component';

@Component({
  selector: 'o-tabs-docs',
  imports: [
    OTabsComponent,
    OTabComponent,
    OCodeContentComponent,
    HighlightAuto,
    HighlightLineNumbers,
  ],
  templateUrl: './o-tabs-docs.component.html',
  styleUrl: './o-tabs-docs.component.scss',
})
export default class OTabsDocsComponent {
  code: string = `<o-tabs>
  <o-tab label="Pestaña 1">
    <p>Contenido 1</p>
  </o-tab>
  <o-tab label="Pestaña 2">
    <p>Contenido 2</p>
  </o-tab>
  <o-tab label="Pestaña 3">
    <p>Contenido 3</p>
  </o-tab>
</o-tabs>
  `;

  codeEvents: string = `<o-tabs (selectedTabChange)="onChange($event)">
  <o-tab label="Pestaña 1">
    <p>Contenido 1</p>
  </o-tab>
  <o-tab label="Pestaña 2">
    <p>Contenido 2</p>
  </o-tab>
</o-tabs>`;

  selectedTab: WritableSignal<number> = signal<number>(0);

  onTabSelected(ind: number): void {
    this.selectedTab.set(ind);
  }

  exampleData: OCodeContentData = {
    title: 'OTabs',
    codeHTML: `<o-tabs (selectedTabChange)="onChange($event)">
  <o-tab label="Pestaña 1">
    <p>Contenido 1</p>
  </o-tab>
  <o-tab label="Pestaña 2">
    <p>Contenido 2</p>
  </o-tab>
</o-tabs>
<p>Selected tab: {{ selectedTab }}</p>`,
    codeTS: `import { Component, signal, WritableSignal } from '@angular/core';
import { OTabComponent } from '@osumi/design/o-tab/o-tab.component';
import { OTabsComponent } from '@osumi/design/o-tabs/o-tabs.component';

@Component({
  selector: 'o-tabs-example',
  imports: [
    OTabsComponent,
    OTabComponent,
  ],
  templateUrl: './o-tabs-example.component.html',
  styleUrl: './o-tabs-example.component.scss',
})
export default class OTabsDocsComponent {
  selectedTab: WritableSignal<number> = signal<number>(0);

  onTabSelected(ind: number): void {
    this.selectedTab.set(ind);
  }
}`,
    codeCSS: 'No disponible',
  };
}

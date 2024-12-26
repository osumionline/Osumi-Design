import { Component } from '@angular/core';
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import {
  OCodeContentComponent,
  OCodeContentData,
} from '../../../components/o-code-content/o-code-content.component';
import { OLoadingComponent } from '../../../components/o-loading/o-loading.component';
import { OTabComponent } from '../../../components/o-tab/o-tab.component';
import { OTabsComponent } from '../../../components/o-tabs/o-tabs.component';

@Component({
  selector: 'o-loading-docs',
  imports: [
    OTabsComponent,
    OTabComponent,
    OLoadingComponent,
    OCodeContentComponent,
    HighlightAuto,
    HighlightLineNumbers,
  ],
  templateUrl: './o-loading-docs.component.html',
  styleUrl: './o-loading-docs.component.scss',
})
export default class OLoadingDocsComponent {
  code: string = `<p>
  <o-loading />
</p>`;

  exampleData: OCodeContentData = {
    title: 'OTabs',
    codeHTML: `<p>
    <o-loading />
</p>`,
    codeTS: `import { Component } from '@angular/core';
import { OLoadingComponent } from '../../../components/o-loading/o-loading.component';

@Component({
  selector: 'o-loading-example',
  imports: [
    OLoadingComponent,
  ],
  templateUrl: './o-loading-example.component.html',
  styleUrl: './o-loading-example.component.scss',
})
export default class OLoadingExampleComponent {}`,
    codeCSS: `No disponible`,
  };
}

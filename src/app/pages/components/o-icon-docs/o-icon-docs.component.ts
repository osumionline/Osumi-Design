import { Component } from '@angular/core';
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import {
  OCodeContentComponent,
  OCodeContentData,
} from '../../../components/o-code-content/o-code-content.component';
import { OIconComponent } from '../../../components/o-icon/o-icon.component';
import { OTabComponent } from '../../../components/o-tab/o-tab.component';
import { OTabsComponent } from '../../../components/o-tabs/o-tabs.component';

@Component({
  selector: 'o-icon-docs',
  imports: [
    OIconComponent,
    OTabsComponent,
    OTabComponent,
    OCodeContentComponent,
    HighlightAuto,
    HighlightLineNumbers,
  ],
  templateUrl: './o-icon-docs.component.html',
  styleUrl: './o-icon-docs.component.scss',
})
export default class OIconDocsComponent {
  code: string = `<p>
    <o-icon src="img/sync.svg"
            class="red-icon" />
</p>`;

  exampleData: OCodeContentData = {
    title: 'OIcon',
    codeHTML: `<p>
    <o-icon src="img/search.png" />
</p>

<p>
    <o-icon src="img/sync.svg"
            class="red-icon" />
</p>`,
    codeTS: `import { Component } from '@angular/core';
import { OIconComponent } from '../../../components/o-icon/o-icon.component';

@Component({
  selector: 'o-icon-example',
  imports: [
    OIconComponent,
  ],
  templateUrl: './o-icon-example.component.html',
  styleUrl: './o-icon-example.component.scss',
})
export default class OIconExampleComponent {}`,
    codeCSS: `.red-icon {
    svg {
        fill: red;
    }
}`,
  };
}

import { Component } from '@angular/core';
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import {
  OCodeContentComponent,
  OCodeContentData,
} from '../../../components/o-code-content/o-code-content.component';
import { OHeaderComponent } from '../../../components/o-header/o-header.component';
import { OTabComponent } from '../../../components/o-tab/o-tab.component';
import { OTabsComponent } from '../../../components/o-tabs/o-tabs.component';

@Component({
  selector: 'o-header-docs',
  imports: [
    OHeaderComponent,
    OTabsComponent,
    OTabComponent,
    OCodeContentComponent,
    HighlightAuto,
    HighlightLineNumbers,
  ],
  templateUrl: './o-header-docs.component.html',
  styleUrl: './o-header-docs.component.scss',
})
export default class OHeaderDocsComponent {
  code: string = `<div class="box">
    <o-header>
        Esto es una cabecera
    </o-header>
    Contenido
</div>`;

  exampleData: OCodeContentData = {
    title: 'OHeader',
    codeHTML: `<div class="box">
    <o-header>
        Esto es una cabecera
    </o-header>
    Contenido
</div>`,
    codeTS: `import { Component } from '@angular/core';
import { OHeaderComponent } from '@osumi/design';

@Component({
  selector: 'o-header-example',
  imports: [
    OHeaderComponent,
  ],
  templateUrl: './o-header-example.component.html',
  styleUrl: './o-header-example.component.scss',
})
export default class OHeaderExampleComponent {}`,
    codeCSS: `.box {
    margin: 32px;
    border: 2px solid #000;
}`,
  };
}

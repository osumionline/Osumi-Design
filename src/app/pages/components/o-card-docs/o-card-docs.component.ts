import { Component } from '@angular/core';
import { HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { OCardContentComponent } from '../../../components/o-card-content/o-card-content.component';
import { OCardFooterComponent } from '../../../components/o-card-footer/o-card-footer.component';
import { OCardHeaderComponent } from '../../../components/o-card-header/o-card-header.component';
import { OCardComponent } from '../../../components/o-card/o-card.component';
import {
  OCodeContentComponent,
  OCodeContentData,
} from '../../../components/o-code-content/o-code-content.component';
import { OTabComponent } from '../../../components/o-tab/o-tab.component';
import { OTabsComponent } from '../../../components/o-tabs/o-tabs.component';

@Component({
  selector: 'o-card-docs',
  imports: [
    OTabsComponent,
    OTabComponent,
    OCodeContentComponent,
    HighlightAuto,
    HighlightLineNumbers,
    OCardComponent,
    OCardHeaderComponent,
    OCardContentComponent,
    OCardFooterComponent,
  ],
  templateUrl: './o-card-docs.component.html',
  styleUrl: './o-card-docs.component.scss',
})
export default class OCardDocsComponent {
  code: string = `<o-card>
    <o-card-header>
        OCard - Cabecera
    </o-card-header>
    <o-card-content>
        Contenido del bloque
    </o-card-content>
    <o-card-footer>
        Pie del bloque
    </o-card-footer>
</o-card>`;

  exampleData: OCodeContentData = {
    title: 'OCard',
    codeHTML: `<o-card>
    <o-card-header>
        OCard - Cabecera
    </o-card-header>
    <o-card-content>
        Contenido del bloque
    </o-card-content>
    <o-card-footer>
        Pie del bloque
    </o-card-footer>
</o-card>`,
    codeTS: `import { Component } from '@angular/core';
import { OCardComponent } from '@osumi/design';
import { OCardHeaderComponent } from '@osumi/design';
import { OCardContentComponent } from '@osumi/design';
import { OCardFooterComponent } from '@osumi/design';

@Component({
  selector: 'o-card-example',
  imports: [
    OCardComponent,
    OCardHeaderComponent,
    OCardContentComponent,
    OCardFooterComponent,
  ],
  templateUrl: './o-card-example.component.html',
  styleUrl: './o-card-example.component.scss',
})
export default class OCardExampleComponent {}`,
    codeCSS: ``,
  };
}

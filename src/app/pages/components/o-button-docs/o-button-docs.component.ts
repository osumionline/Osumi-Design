import { Component, signal, WritableSignal } from '@angular/core';
import { OButtonComponent } from '../../../components/o-button/o-button.component';
import { OTabComponent } from '../../../components/o-tab/o-tab.component';
import { OTabsComponent } from '../../../components/o-tabs/o-tabs.component';

@Component({
  selector: 'o-button-docs',
  imports: [OButtonComponent, OTabsComponent, OTabComponent],
  templateUrl: './o-button-docs.component.html',
  styleUrl: './o-button-docs.component.scss',
})
export default class OButtonDocsComponent {
  loading: WritableSignal<boolean> = signal<boolean>(false);

  alert(str: string): void {
    alert(str);
  }

  toggleLoading(): void {
    this.loading.update((value: boolean): boolean => !value);
  }
}

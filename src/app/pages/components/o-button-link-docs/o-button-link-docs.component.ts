import { Component, signal, WritableSignal } from '@angular/core';
import { OButtonLinkComponent } from '../../../components/o-button-link/o-button-link.component';
import { OButtonComponent } from '../../../components/o-button/o-button.component';

@Component({
  selector: 'o-button-link-docs',
  imports: [OButtonLinkComponent, OButtonComponent],
  templateUrl: './o-button-link-docs.component.html',
  styleUrl: './o-button-link-docs.component.scss',
})
export default class OButtonLinkDocsComponent {
  loading: WritableSignal<boolean> = signal<boolean>(false);

  toggleLoading(): void {
    this.loading.update((value: boolean): boolean => !value);
  }
}

import { Component, signal, WritableSignal } from '@angular/core';
import { OButtonIconComponent } from '../../../components/o-button-icon/o-button-icon.component';

@Component({
  selector: 'o-button-icon-docs',
  imports: [OButtonIconComponent],
  templateUrl: './o-button-icon-docs.component.html',
  styleUrl: './o-button-icon-docs.component.scss',
})
export default class OButtonIconDocsComponent {
  loading: WritableSignal<boolean> = signal<boolean>(false);

  toggleLoading(): void {
    this.loading.update((value: boolean): boolean => !value);
  }
}

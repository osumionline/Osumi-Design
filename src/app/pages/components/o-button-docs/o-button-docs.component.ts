import { Component, signal, WritableSignal } from '@angular/core';
import { OButtonComponent } from '../../../components/o-button/o-button.component';

@Component({
  selector: 'o-button-docs',
  imports: [OButtonComponent],
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

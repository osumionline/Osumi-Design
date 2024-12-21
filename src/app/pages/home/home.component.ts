import { Component, signal, WritableSignal } from '@angular/core';
import { OButtonLinkComponent } from '../../components/o-button-link/o-button-link.component';
import { OButtonComponent } from '../../components/o-button/o-button.component';

@Component({
  selector: 'o-home',
  imports: [OButtonComponent, OButtonLinkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  loading: WritableSignal<boolean> = signal<boolean>(false);

  alert(str: string): void {
    alert(str);
  }

  toggleLoading(): void {
    this.loading.update((value: boolean): boolean => !value);
  }
}

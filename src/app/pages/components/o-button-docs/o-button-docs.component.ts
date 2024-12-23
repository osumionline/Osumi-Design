import { Component, signal, WritableSignal } from '@angular/core';
import { OButtonComponent } from '../../../components/o-button/o-button.component';
import { OBadgeDirective } from '../../../directives/o-badge.directive';

@Component({
  selector: 'o-button-docs',
  imports: [OButtonComponent, OBadgeDirective],
  templateUrl: './o-button-docs.component.html',
  styleUrl: './o-button-docs.component.scss',
})
export default class OButtonDocsComponent {
  loading: WritableSignal<boolean> = signal<boolean>(false);
  badgeValue: WritableSignal<number> = signal<number>(0);

  alert(str: string): void {
    alert(str);
  }

  toggleLoading(): void {
    this.loading.update((value: boolean): boolean => !value);
  }

  changeBadge(value: number): void {
    this.badgeValue.update((val: number): number => val + value);
  }
}

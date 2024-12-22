import { Component, signal, WritableSignal } from '@angular/core';
import { OButtonLinkComponent } from '../../components/o-button-link/o-button-link.component';
import { OButtonComponent } from '../../components/o-button/o-button.component';
import { OBadgeDirective } from '../../directives/o-badge.directive';

@Component({
  selector: 'o-home',
  imports: [OButtonComponent, OButtonLinkComponent, OBadgeDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
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

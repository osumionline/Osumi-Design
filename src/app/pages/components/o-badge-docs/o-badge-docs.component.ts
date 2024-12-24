import { Component, signal, WritableSignal } from '@angular/core';
import { OButtonComponent } from '../../../components/o-button/o-button.component';
import { OBadgeDirective } from '../../../directives/o-badge.directive';

@Component({
  selector: 'o-badge-docs',
  imports: [OBadgeDirective, OButtonComponent],
  templateUrl: './o-badge-docs.component.html',
  styleUrl: './o-badge-docs.component.scss',
})
export default class OBadgeDocsComponent {
  badgeValue: WritableSignal<number> = signal<number>(3);

  changeBadge(value: number): void {
    this.badgeValue.update((val: number): number => val + value);
  }
}

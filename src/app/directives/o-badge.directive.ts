import {
  Directive,
  ElementRef,
  inject,
  input,
  InputSignal,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[oBadge]',
})
export class OBadgeDirective implements OnChanges {
  private el: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  oBadge: InputSignal<number | null> = input<number | null>(null);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['oBadge']) {
      this.updateBadge();
    }
  }

  private updateBadge(): void {
    const badgeValue: number | null = this.oBadge();

    const divElement = this.el.nativeElement as HTMLElement;
    this.renderer.addClass(divElement, 'o-badge-wrapper');

    const existingBadge: Element | null =
      divElement.querySelector('.o-badge-content');
    if (existingBadge) {
      this.renderer.removeChild(divElement, existingBadge);
    }

    if (badgeValue !== null && badgeValue !== 0) {
      const badge: HTMLDivElement = this.renderer.createElement('div');
      this.renderer.addClass(badge, 'o-badge-content');

      const text: Node = this.renderer.createText(badgeValue.toString());
      this.renderer.appendChild(badge, text);

      this.renderer.appendChild(divElement, badge);
    }
  }
}

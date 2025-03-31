import { DOCUMENT } from '@angular/common';
import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  Renderer2,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { OIconComponent } from '../../components/o-icon/o-icon.component';
import { Theme } from '../../interfaces/interfaces';

@Component({
  selector: 'o-theme-switcher',
  imports: [OIconComponent],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export default class ThemeSwitcherComponent implements OnInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly prefersColorScheme: MediaQueryList | undefined =
    this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)');
  private readonly mediaQueryListener = () => {
    if (this.currentTheme() === 'system') {
      this.updateTheme('system');
    }
  };
  private readonly renderer: Renderer2 = inject(Renderer2);

  // Signals for reactive state management
  protected readonly currentTheme: WritableSignal<Theme> = signal<Theme>(
    (this.document.defaultView?.localStorage.getItem(
      'theme'
    ) as Theme | null) || 'system'
  );

  // Computed signals for derived state
  protected readonly effectiveTheme: Signal<Theme> = computed((): Theme => {
    if (this.currentTheme() === 'system') {
      return this.prefersColorScheme?.matches ? 'dark' : 'light';
    }
    return this.currentTheme();
  });

  protected readonly isDarkMode: Signal<boolean> = computed(
    (): boolean => this.effectiveTheme() === 'dark'
  );

  ngOnInit(): void {
    if (!this.prefersColorScheme) {
      throw new Error('Prefers color scheme not supported');
    }
    // Initialize theme
    this.updateTheme(this.currentTheme());

    // Listen for system color scheme changes
    this.prefersColorScheme.addEventListener('change', this.mediaQueryListener);
  }

  ngOnDestroy(): void {
    if (!this.prefersColorScheme) {
      throw new Error('Prefers color scheme not supported');
    }
    // Clean up event listener
    this.prefersColorScheme.removeEventListener(
      'change',
      this.mediaQueryListener
    );
  }

  protected updateTheme(theme: Theme): void {
    if (!this.document.defaultView) {
      throw new Error('Document not found');
    }
    this.currentTheme.set(theme);

    this.renderer.setAttribute(
      this.document.documentElement,
      'data-theme',
      theme
    );

    // Update localStorage
    if (theme === 'system') {
      this.document.defaultView.localStorage.removeItem('theme');
    } else {
      this.document.defaultView.localStorage.setItem('theme', theme);
    }
  }
}

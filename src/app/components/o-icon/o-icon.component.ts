import { AsyncPipe } from '@angular/common';
import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import { OIconProviderService } from '../../services/o-icon-provider.service';

@Component({
  selector: 'o-icon',
  imports: [AsyncPipe],
  templateUrl: './o-icon.component.html',
})
export class OIconComponent implements OnInit {
  iconProvider: OIconProviderService = inject(OIconProviderService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  src: InputSignal<string> = input.required<string>();
  iconImage$!: Observable<string>;
  iconSVG$!: Observable<SafeHtml>;
  isSVG: boolean = false;

  ngOnInit(): void {
    const ext: string | undefined = this.src().split('.').pop();
    this.isSVG = ext === 'svg';
    if (this.isSVG) {
      this.iconSVG$ = this.iconProvider
        .getIcon(this.src())
        .pipe(
          map(
            (icon: string): SafeHtml =>
              this.sanitizer.bypassSecurityTrustHtml(icon)
          )
        );
    } else {
      this.iconImage$ = this.iconProvider.getIcon(this.src());
    }
  }
}

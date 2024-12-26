import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  contentChildren,
  output,
  OutputEmitterRef,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { OTabComponent } from '../o-tab/o-tab.component';

@Component({
  selector: 'o-tabs',
  imports: [NgTemplateOutlet],
  templateUrl: './o-tabs.component.html',
})
export class OTabsComponent {
  tabs: Signal<readonly OTabComponent[]> = contentChildren(OTabComponent);
  activeTabIndex: WritableSignal<number> = signal<number>(0);
  selectedTabChange: OutputEmitterRef<number> = output<number>();

  selectTab(index: number): void {
    this.activeTabIndex.set(index);
    this.selectedTabChange.emit(index);
  }
}

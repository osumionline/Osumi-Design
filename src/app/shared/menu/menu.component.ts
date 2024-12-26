import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OListItemComponent } from '../../components/o-list-item/o-list-item.component';
import { OListComponent } from '../../components/o-list/o-list.component';
import { DesignComponentInterface } from '../../interfaces/interfaces';
import modelList from '../../model/model-list';
import { OButtonIconComponent } from './../../components/o-button-icon/o-button-icon.component';

@Component({
  selector: 'o-menu',
  imports: [
    RouterLink,
    OListComponent,
    OListItemComponent,
    OButtonIconComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  list: DesignComponentInterface[] = modelList;
  selected: InputSignal<string> = input.required<string>();

  toggle(item: DesignComponentInterface): void {
    item.visible = !item.visible;

    for (const subitem of item.children) {
      subitem.visible = !subitem.visible;
    }
  }
}

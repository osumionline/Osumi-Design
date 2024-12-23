import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OListItemComponent } from '../../components/o-list-item/o-list-item.component';
import { OListComponent } from '../../components/o-list/o-list.component';
import { DesignComponentInterface } from '../../interfaces/interfaces';
import modelList from '../../model/model-list';

@Component({
  selector: 'o-menu',
  imports: [RouterLink, OListComponent, OListItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  list: DesignComponentInterface[] = modelList;
}

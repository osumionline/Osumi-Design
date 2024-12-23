import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OHeaderComponent } from './components/o-header/o-header.component';
import { MenuComponent } from './shared/menu/menu.component';

@Component({
  selector: 'o-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [OHeaderComponent, RouterOutlet, RouterLink, MenuComponent],
})
export default class AppComponent {}

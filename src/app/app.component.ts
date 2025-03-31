import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { OHeaderComponent } from './components/o-header/o-header.component';
import { MenuComponent } from './shared/menu/menu.component';
import ThemeSwitcherComponent from './shared/theme-switcher/theme-switcher.component';

@Component({
  selector: 'o-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    OHeaderComponent,
    RouterOutlet,
    RouterLink,
    MenuComponent,
    ThemeSwitcherComponent,
  ],
})
export default class AppComponent implements OnInit {
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  selected: string = '';

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.activatedRoute.firstChild;

        while (route?.firstChild) {
          route = route.firstChild;
        }

        const routeData = route?.snapshot.data['option'];
        this.selected = routeData;
      });
  }
}

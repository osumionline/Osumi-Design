import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'o-root',
  template: `<router-outlet />`,
  imports: [RouterOutlet],
})
export default class AppComponent {}

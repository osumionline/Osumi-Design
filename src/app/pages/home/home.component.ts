import { Component } from '@angular/core';
import { OButtonComponent } from 'osumi-design';

@Component({
  selector: 'o-home',
  imports: [OButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  alert(str: string): void {
    alert(str);
  }
}

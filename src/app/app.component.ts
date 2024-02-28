import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navigateTo: string = 'recipe';

  redirectTo(value: string) {
    this.navigateTo  = value
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() redirectStr = new EventEmitter<string>();

  navigate(strTo: string) {

    this.redirectStr.emit(strTo)
  }
}

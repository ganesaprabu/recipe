import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  menu: string = 'recipe';

  menuToDisplay(menuData: {menu: string}) {
    this.menu = menuData.menu;
  }
}

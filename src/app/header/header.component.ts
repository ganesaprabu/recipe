import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  menuTrigger = new EventEmitter<{menu: string}>();

  constructor() { }

  ngOnInit() {
  }

  menuClick(menu: string) {
    this.menuTrigger.emit({
      menu: menu
    });
  }
}

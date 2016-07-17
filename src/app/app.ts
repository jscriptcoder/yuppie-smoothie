import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';

@Component({
  selector: 'app',
  styleUrls: ['./app.scss'],
  directives: [
  	ROUTER_DIRECTIVES,
  	MD_SIDENAV_DIRECTIVES,
  	MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_LIST_DIRECTIVES,
  	MD_ICON_DIRECTIVES,
  ],
  templateUrl: './app.html',
})
export class App {

  menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}

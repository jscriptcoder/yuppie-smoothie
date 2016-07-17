import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'recipes',
  directives: [
    ROUTER_DIRECTIVES,
  	MD_BUTTON_DIRECTIVES,
  	MD_INPUT_DIRECTIVES, 
  	MD_ICON_DIRECTIVES, 
  	MD_CARD_DIRECTIVES,
  ],
  styleUrls: ['./recipes.scss'],
  templateUrl: './recipes.html'
})
export class Recipes {}
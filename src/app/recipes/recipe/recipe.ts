import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { BackendService, Product } from '../../../backend/backend';

@Component({
  selector: 'recipe',
  providers: [ BackendService ],
  directives: [
  	MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
  ],
  styleUrls: ['./recipe.scss'],
  templateUrl: './recipe.html'
})
export class Recipe {

  backendProducts: Product[];
	products: Product[];

	constructor(backendService: BackendService) {
		backendService.getProducts().then((products: Product[]) => {
			this.backendProducts = products;
		});
	}
}
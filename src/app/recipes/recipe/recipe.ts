import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { OVERLAY_PROVIDERS } from '@angular2-material/core/overlay/overlay';
import { DND_PROVIDERS, DND_DIRECTIVES } from 'ng2-dnd/ng2-dnd';
import { BackendService, Product, Nutrition } from '../../../backend/backend';
import { ReversePipe } from '../../../pipes/reverse';

interface ProductRecipe {
  quantity: number;
  product: Product;
}

@Component({
  selector: 'recipe',
  pipes: [ ReversePipe ],
  providers: [ DND_PROVIDERS, BackendService ],
  directives: [
    ROUTER_DIRECTIVES,
  	MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
    DND_DIRECTIVES,
  ],
  styleUrls: ['./recipe.scss'],
  templateUrl: './recipe.html'
})
export class Recipe {

  backendProducts: Product[];
	products: ProductRecipe[];
  nutritionValue: Nutrition;

	constructor(backendService: BackendService) {
    this.products = [];
    this.nutritionValue = {};
		backendService.getProducts().then((products: Product[]) => {
			this.backendProducts = products;
		});
	}

  getObjectKeys(obj: Object): any[] {
    return Object.keys(obj);
  }

  productTransferSuccess(event: any) {
    const product = <Product>event.dragData;
    const productRecipe = this.products.find((pr: ProductRecipe) => pr.product.name === product.name);
    if (productRecipe) {
      // if the product exists, we increase the quantity
      productRecipe.quantity++;
    } else {
      // otherwise we add it as new
      this.products.push({ quantity: 1, product });
    }

    // not super efficient, but enough for the purpose
    this.updateNutritionValue();
  }

  deleteProduct(productName: string) {

    this.products = this.products.filter((prodRecipe: ProductRecipe) => {
      if (prodRecipe.product.name === productName) {
        return !!--prodRecipe.quantity;
      } else {
        return true;
      }
    });

    this.updateNutritionValue();
  }

  // should be called to keep this info up to date
  private updateNutritionValue() {
    this.nutritionValue = [];
    for (let prodRecipe of this.products) {
      for (let nutritionKey of this.getObjectKeys(prodRecipe.product.nutritions)) {
        let nutritionValue = prodRecipe.product.nutritions[nutritionKey] * prodRecipe.quantity;
        if (this.nutritionValue[nutritionKey]) {
          this.nutritionValue[nutritionKey] += nutritionValue;
        } else {
          this.nutritionValue[nutritionKey] = nutritionValue;
        }
      }
    }
  }

}
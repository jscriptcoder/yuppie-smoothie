import { Injectable } from '@angular/core';

export interface Nutrition {
	sugar?: number;
	vitaminC?: number;
	fiber?: number;
	iron?: number;
}

export interface Product {
	name: string;
	type: string;
	amount: number;
	nutritions: Nutrition;
}

@Injectable()
export class BackendService {
	getProducts(): Promise<Product[]> {
		return new Promise((resolve, reject) => {
			resolve(require('../resources/products.json'));
		});
	}
}
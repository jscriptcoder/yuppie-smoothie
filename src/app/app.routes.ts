import { provideRouter, RouterConfig } from '@angular/router';

import { Home } from './home/home';
import { Types } from './types/types';
import { Nutrition } from './nutrition/nutrition';
import { Products } from './products/products';
import { Recipes } from './recipes/recipes';
import { Recipe } from './recipes/recipe/recipe';

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: Home },
  { path: 'types', component: Types },
  { path: 'nutrition', component: Nutrition },
  { path: 'products', component: Products },
  { path: 'recipes', component: Recipes },
  { path: 'recipes/recipe', component: Recipe },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
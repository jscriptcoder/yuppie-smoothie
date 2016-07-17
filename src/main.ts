import './main.scss';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { MdIconRegistry } from '@angular2-material/icon';
import { HTTP_PROVIDERS } from '@angular/http'; 
// import {enableProdMode} from '@angular/core';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {App} from './app/app';

// enableProdMode()

bootstrap(App, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  MdIconRegistry,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));

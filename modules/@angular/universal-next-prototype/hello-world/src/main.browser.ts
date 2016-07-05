import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {isBrowser} from '@angular/universal/browser';

import {App, APP_PROVIDERS} from './app';
export function main() {
  console.log('isBrowser', isBrowser);
  return bootstrap(App, [
    ...APP_PROVIDERS,
    ...HTTP_PROVIDERS
  ]);
}

import { addRoute } from '../core';

addRoute({
  url: '/',
  template: require('./home.html'),
  controller: () => {}
});

angular.module('app.home', [
  'app.core'
]);
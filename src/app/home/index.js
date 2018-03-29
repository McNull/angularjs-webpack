
import { addRoute } from '../core';

addRoute({
  url: '/',
  template: require('./home.html'),
  // controller: ($scope) => {
  //   /*@ngInject*/
  // }
});

angular.module('app.home', [
  'app.core'
]);

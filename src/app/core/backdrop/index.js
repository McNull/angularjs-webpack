import angular from 'angular';

import { appBackdrop } from './backdrop-service';
import { component } from './backdrop-component';

angular.module('app.core.backdrop', [])
  .factory('appBackdrop', appBackdrop)
  .component('appBackdrop', component);

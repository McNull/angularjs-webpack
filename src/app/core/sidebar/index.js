import angular from 'angular';

import { component } from './sidebar-component';
import { appSidebar } from './sidebar-service';

angular.module('app.core.sidebar', [
  'app.core.backdrop'
]).factory('appSidebar', appSidebar)
  .component('appSidebar', component);

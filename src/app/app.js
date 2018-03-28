import './core';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  };
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

angular.module('app', [
  'app.core'
])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);
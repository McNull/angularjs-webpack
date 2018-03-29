
import { addRoute } from '../core';

addRoute({
  url: '/',
  template: require('./home.html'),
  controller: /* @ngInject */ ($scope, appToolbar) => {

    ////////////////////////////////////////////////////////////////////////////

    let hasLove = false;

    const loveButton = {
      icon: 'fa fa-heart-o',
      onClick: () => {
        hasLove = !hasLove;
        loveButton.icon = 'fa ' + (hasLove ? 'fa-heart' : 'fa-heart-o');
      }
    };

    ////////////////////////////////////////////////////////////////////////////

    let happy = true;

    const happyButton = {
      icon: 'fa fa-smile-o',
      order: 10,
      onClick: () => {
        happy = !happy;
        happyButton.icon = 'fa ' + (happy ? 'fa-smile-o' : 'fa-frown-o');
      }
    };

    ////////////////////////////////////////////////////////////////////////////

    appToolbar.addButton(loveButton);
    appToolbar.addButton(happyButton);

    ////////////////////////////////////////////////////////////////////////////

    $scope.$on('$destroy', () => {
      appToolbar.removeButton(loveButton);
      appToolbar.removeButton(happyButton);
    });

    ////////////////////////////////////////////////////////////////////////////
  }
});

angular.module('app.home', [
  'app.core'
]);

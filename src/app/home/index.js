
import './home.scss';

import { addRoute } from '../core';

addRoute({
  url: '/',
  template: require('./home.html'),
  controller: /* @ngInject */ ($scope, $timeout, appToolbar, appBackdrop, appSidebar) => {

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
        happyButton.icon = 'fa home-button ' + (happy ? 'fa-smile-o' : 'fa-frown-o');
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

    $scope.displayBackdrop = () => {
      appBackdrop.visible = true;
      $timeout(() => appBackdrop.visible = false, 1000);
    };

    ////////////////////////////////////////////////////////////////////////////

    $scope.displaySidebar = () => {
      appSidebar.visible = true;
    };

    ////////////////////////////////////////////////////////////////////////////
  }
});

angular.module('app.home', [
  'app.core'
]);

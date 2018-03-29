import './sidebar-component.scss';

const component = {
  template: require('./sidebar-component.html'),
  controller: /* @ngInject */ ($scope, appSidebar, appBackdrop) => {
    $scope.state = appSidebar;

    $scope.$watch(() => appSidebar.visible, (n, o) => {
      appBackdrop.visible = n;
    });

    $scope.$on('app-backdrop-click', () => {
      appSidebar.visible = false;
    });
  }
};


export { component };

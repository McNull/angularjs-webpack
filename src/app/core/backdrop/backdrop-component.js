import './backdrop.scss';

const component = {
  template: `
    <div class="app-backdrop" ng-click="handleClick()" ng-class="{ visible: state.visible }"></div>
  `,
  controller: /* @ngInject */ ($rootScope, $scope, appBackdrop) => {
    $scope.state = appBackdrop;

    $scope.handleClick = () => {
      $rootScope.$broadcast('app-backdrop-click');
    };
  }
};

export { component };

import './backdrop.scss';

const component = {
  template: `
    <div class="app-backdrop" ng-class="{ visible: state.visible }"></div>
  `,
  controller: /* @ngInject */ ($scope, appBackdrop) => {
    $scope.state = appBackdrop;
  }
};

export { component };

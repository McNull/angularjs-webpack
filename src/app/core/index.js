export * from './vendor';
export * from './utils';
export * from './routes';

angular.module('app.core', [
  'app.core.vendor',
  'app.core.utils'
]);
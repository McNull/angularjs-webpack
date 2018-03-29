export * from './vendor';
export * from './utils';
export * from './routes';
export * from './toolbar';

angular.module('app.core', [
  'app.core.vendor',
  'app.core.utils',
  'app.core.toolbar'
]);

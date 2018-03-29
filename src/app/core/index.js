export * from './vendor';
export * from './utils';
export * from './routes';
export * from './toolbar';
export * from './backdrop';
export * from './sidebar';

angular.module('app.core', [
  'app.core.vendor',
  'app.core.utils',
  'app.core.toolbar',
  'app.core.backdrop',
  'app.core.sidebar'
]);

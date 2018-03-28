var _routes = [];

function get() {
  return _routes.concat();
}

function register(entry) {
  _routes.push(entry);
}

export { get, register };

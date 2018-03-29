
/* @ngInject */
function appSidebar($rootScope) {
  return new AppSidebar();
}

/* @ngInject */
class AppSidebar {
  constructor() {
    this.visible = false;
    this.menuItems = [
      {
        text: 'Home',
        icon: 'fa fa-home',
        onClick: ($event, menuItem) => {},
        url: '/',
        order: 100
      },
      {
        text: 'Home2',
        icon: 'fa fa-smile-o',
        onClick: ($event, menuItem) => { console.log(menuItem); },
        url: '/smile',
        order: 1
      }
    ];
  }

  addMenuItem(menuItem) {
    menuItem.order = menuItem.order || 100;
    this.menuItems.push(menuItem);
    this.menuItems.sort((x,y) => x.order - y.order);
  }

  removeMenuItem(menuItem) {
    const idx = this.menuItems.indexOf(menuItem);
    if(idx === -1) {
      throw new Error('Menuitem not found');
    }
    this.menuItems.splice(idx, 1);
  }
}

export { appSidebar };

////////////////////////////////////////////////////////////////////////////////

/* @ngInject */
function appToolbar() {

  //////////////////////////////////////////////////////////////////////////////

  /* @ngInject */
  class AppToolbar {
    constructor() {
      this.title = 'Angular App';
      this.buttons = [
        /*
        {
          icon: 'fa fa-love',
          onClick: ($event, icon) => {},
          order: 100
        }
        */
      ];
    }

    addButton(button) {
      button.order = button.order || 100;
      this.buttons.push(button);
      this.buttons.sort((x, y) => x.order - y.order);
    }

    removeButton(button) {
      const idx = this.buttons.indexOf(button);

      if(idx === -1) {
        throw new Error('Button not found');
      }

      this.buttons.splice(idx, 1);
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  return new AppToolbar();
}

////////////////////////////////////////////////////////////////////////////////

export { appToolbar };

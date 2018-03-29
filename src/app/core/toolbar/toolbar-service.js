////////////////////////////////////////////////////////////////////////////////

/* @ngInject */
function appToolbar() {

  //////////////////////////////////////////////////////////////////////////////

  /* @ngInject */
  class AppToolbar {
    constructor() {

      this.title = 'Angular App';
      this.buttons = [
        {
          icon: 'fa fa-heart-o',
          onClick: ($event, button) => { console.log($event, button); }
        }
        /*
        {
          icon: 'fa fa-love',
          onClick: ($event, icon) => {}
        }
        */
      ];
    }
  }

  //////////////////////////////////////////////////////////////////////////////

  return new AppToolbar();
}

////////////////////////////////////////////////////////////////////////////////

export { appToolbar };

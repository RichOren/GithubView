import './main-section.scss';

class MainSectionController {

  /** @ngInject */
  constructor() {

  }

}

export const MainSection: angular.IComponentOptions = {
  template: require('./main-section.html'),
  controller: MainSectionController,
  bindings: {}
};

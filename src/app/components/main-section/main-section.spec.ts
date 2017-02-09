import * as angular from 'angular';
import 'angular-mocks';
import {} from 'jasmine';
import {MainSection} from './MainSection';

describe('MainSection component', () => {
  class MockGithubService {

  }

  let component;

  beforeEach(() => {
    angular
      .module('mainSection', ['app/components/MainSection.html'])
      .service('githubService', MockGithubService)
      .component('mainSection', MainSection);
    angular.mock.module('mainSection');
  });

  beforeEach(angular.mock.inject($componentController => {
    component = $componentController('mainSection', {}, {});
  }));

});

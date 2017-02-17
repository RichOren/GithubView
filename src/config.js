angular
  .module('app')
  .config(config);

/** @ngInject */
function config($mdIconProvider) {
  $mdIconProvider
    .iconSet('homepage', 'img/icons/sets/homepage-icons.svg', 24);
}

import * as angular from 'angular';
import 'angular-material/angular-material.css';
import 'angular-material/angular-material.css';
import {App} from './app/containers/app/App';
import {MainSection} from './app/components/main-section/main-section';
import 'angular-ui-router';
import 'angular-material';
import routesConfig from './routes';
import themeConfig from './index.theme';

import './index.scss';

angular
  .module('app',
    ['ui.router', 'ngMaterial'])
  .config(routesConfig)
  .config(themeConfig)
  .component('app', App)
  .component('mainSection', MainSection);

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Config from './home.config';
import HomeController from './home.controller';

let Home = angular.module('Home.tester',[uiRouter])
  .config(Config)
  .controller('HomeController',HomeController);

export default Home;

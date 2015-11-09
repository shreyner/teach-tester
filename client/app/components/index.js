import angular from 'angular';

import Home from './home';

let Components = angular.module('Components.tester',[
  Home.name
])

export default Components;

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Config from './app.config.js'
import Components from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.sass';


angular
  .module('tester',[
    uiRouter,
    Components.name
  ])
  .config(Config);

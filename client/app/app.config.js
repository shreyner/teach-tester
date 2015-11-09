let config = ($urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
}

config.$inject=['$urlRouterProvider'];

export default config;

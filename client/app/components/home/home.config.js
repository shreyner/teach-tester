let config = ($stateProvider) => {
  $stateProvider
    .state('Home',{
      url:'/',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
}
config.$inject=['$stateProvider'];

export default config;

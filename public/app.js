angular.module('inventory', [])
  .controller('Users', function(UserDataService) {
    // We need to bind callback to this controller since `.then`
    // gets executed in global context
    UserDataService.getUsers().then(function(res) {
      this.users = res.data.users;
    }.bind(this));
  })
  .service('UserDataService', function($http) {
    this.getUsers = function() {
      return $http.get('/users');
    };
  })
  .directive('inventoryUsers', function() {
    return {
      scope: {},
      templateUrl: '/public/users.html',
      controller: 'Users',
      controllerAs: 'usersCtrl'
    };
  })
  .controller('UserForm', function() {
    this.user = {};
    this.addUser = function() {
      this.users.push(this.user);
      this.user = {};
    };
  })
  .directive('inventoryUsersForm', function() {
    return {
      scope: {
        users: '='
      },
      templateUrl: '/public/userForm.html',
      controller: 'UserForm',
      controllerAs: 'UserFormCtrl',
      bindToController: true
    };
  })

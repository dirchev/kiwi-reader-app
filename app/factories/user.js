app.factory('User', function($http, $rootScope, serverUrl){
  return {
    get: function(){
      return $http.get(serverUrl + '/api/user');
    },
    update: function(){
      $http.get(serverUrl + '/api/user').success(function(data){
        if(data.success){
          $rootScope.user = data.user;
        } else {
          toastr.error(data.message);
        }
      });
    },
    getLastFiles: function(){
      return $http.get(serverUrl + '/api/user/' + $rootScope.user._id + '/lastFiles');
    }
  };
});

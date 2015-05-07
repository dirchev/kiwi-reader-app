app.factory('Friend', function($http, serverUrl){
  return {
    add: function(friend_email){
      return $http.post(serverUrl + '/api/friend', {friend_email: friend_email});
    },
    rename: function(friend_index, friend_name){
      return $http.post(serverUrl + '/api/friend/'+friend_index+'/rename', {friend_name: friend_name});
    },
    remove: function(friend_index){
      return $http.delete(serverUrl + '/api/friend/' + friend_index);
    }
  };
});

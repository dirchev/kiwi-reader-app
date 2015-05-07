app.factory('Bookmark', function($http, User, serverUrl){
  return {
    get: function(){
      return $http.get(serverUrl + '/api/bookmark');
    },
    add: function(bookmark){
      return $http.post(serverUrl + '/api/bookmark', {bookmark: bookmark});
    },
    delete: function(bookmark_index){
      return $http.delete(serverUrl + '/api/bookmark/' + bookmark_index);
    }
  };
});

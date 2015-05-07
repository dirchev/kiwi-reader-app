/* global app */
app.factory('Collection', function($http, serverUrl){
  return {
    get: function(){
      return $http.get(serverUrl + '/api/collection');
    },
    getOne: function(collection_id){
      return $http.get(serverUrl + '/api/collection/' + collection_id);
    },
    create: function(title){
      return $http.post(serverUrl + '/api/collection', {title:title});
    },
    remove: function(collection_id){
      return $http.delete(serverUrl + '/api/collection/' + collection_id);
    },
    rename: function(collection_id, title){
      return $http.post(serverUrl + '/api/collection/' + collection_id + '/rename', {title: title});
    },
    addThing: function(data){
      return $http.post(serverUrl + '/api/collection/add', data);
    },
    removeThing: function(data){
      return $http.post(serverUrl + '/api/collection/remove', data);      
    }
  };
});

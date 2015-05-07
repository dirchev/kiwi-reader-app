app.factory('File', function($http, serverUrl){
  return {
    get: function(){
      return $http.get(serverUrl + '/api/file/');
    },
    getOne: function(id){
      return $http.get(serverUrl + '/api/file/' + id);
    },
    create: function(){
      return $http.post(serverUrl + '/api/file/');
    },
    createDropboxFile : function(file){
      return $http.post(serverUrl + '/api/file/dropbox', {file:file});
    },
    delete: function(id){
      return $http.delete(serverUrl + '/api/file/' + id);
    },
    share: function(file_id, user_email){
      return $http.post(serverUrl + '/api/file/' + file_id + '/share', {user_email:user_email});
    },
    rename: function(file_id, name){
      return $http.post(serverUrl + '/api/file/' + file_id + '/rename', {name:name});
    },
    public: function(file_id, public){
      return $http.post(serverUrl + '/api/file/' + file_id + '/public', {public:public});
    }
  };
});

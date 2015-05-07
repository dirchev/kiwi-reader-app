app.factory('Book', function($http, serverUrl){
  return {
    get: function(){
      return $http.get(serverUrl + '/api/book');
    },
    getOne: function(id){
      return $http.get(serverUrl + '/api/book/' + id);
    },
    create: function(){
      return $http.post(serverUrl + '/api/book');
    },
    createDropboxBook: function(book){
      return $http.post(serverUrl + '/api/book/dropbox', {book:book});
    },
    delete: function(id){
      return $http.delete(serverUrl + '/api/book/' + id);
    },
    share: function(book_id, user_email){
      return $http.post(serverUrl + '/api/book/' + book_id + '/share', {user_email:user_email});
    },
    getShared: function(book_id){
      return $http.get(serverUrl + '/api/book/' + book_id + '/share');
    },
    updateUserPosition: function(book_id, data){
      return $http.post(serverUrl + '/api/book/' + book_id + '/position', data);
    },
    rename: function(book_id, name){
      return $http.post(serverUrl + '/api/book/' + book_id + '/rename', {name: name});
    }
  };
});

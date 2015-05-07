app.factory('Page', function($http, serverUrl){
  return {
    get: function(){
      return $http.get(serverUrl + '/api/page');
    },
    getPageHTML: function(url){
      return $http.post(serverUrl + '/api/page/html', {url:url});
    },
    getOne: function(id){
      return $http.get(serverUrl + '/api/page/' + id);
    },
    create: function(content, link){
      return $http.post(serverUrl + '/api/page', {page_content:content, page_link: link});
    },
    delete: function(id){
      return $http.delete(serverUrl + '/api/page/' + id);
    },
    share: function(page_id, user_email){
      return $http.post(serverUrl + '/api/page/' + page_id + '/share', {user_email:user_email});
    },
    rename: function(page_id, name){
     return $http.post(serverUrl + '/api/page/' + page_id + '/rename', {name:name});
    },
  };
});

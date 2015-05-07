app.factory('Search', function($http, serverUrl){
	return {
		all: function(searchPhrase){
			return $http.get(serverUrl + '/api/search/' + searchPhrase);
		},
		file: function(searchPhrase){
			return $http.get(serverUrl + '/api/search/' + searchPhrase + '/file')
		},
		book: function(searchPhrase){
			return $http.get(serverUrl + '/api/search/' + searchPhrase + '/book')
		},
		page: function(searchPhrase){
			return $http.get(serverUrl + '/api/search/' + searchPhrase + '/page')
		},
	};
});
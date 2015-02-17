carpoolApp.factory('UserService', ['$http', function($http){
  return{

    login:function(email, password, callback){
      var self = this;
      var loginData={email:email,password:password}

      $http.post('/api/auth', loginData)
      .success(function(data){
        if(data && data.user){
          self.currentUser = data.user
        }else{
          self.currentUser = false;
        }
        callback(null,data)
      }).error(function(err){
        callback(err)
      })
    }

  };
}])

carpoolApp.controller('MainNavCtrl', ['$scope', '$modal','$location', 'UserService', function($scope,$modal,$location,UserService){

  $scope.navCollapsed = true;

  $scope.UserService = UserService;

  $scope.$watchCollection('UserService', function(){
    $scope.currentUser = UserService.currentUser
  });

  $scope.isActive = function(url){
    return url == $location.path()
  }

  $scope.showLogin = function(){
        $modal.open({
            templateUrl:'/views/authModal.html',
            controller:'AuthModalCtrl'
        })
    };

    $scope.showSignup = function(){
        $modal.open({
            templateUrl:'/views/authModal.html',
            controller:'AuthModalCtrl'
        })
    };

    $scope.logout = function(){
        UserService.logout(function(err,data){

        });
    }

}])

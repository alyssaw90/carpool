carpoolApp.controller('HomeCtrl', ['$scope', '$http', 'UserService','AlertService', function($scope,$http,UserService,AlertService){

  console.log('home controller running')

  $scope.rides = [];

  $scope.UserService = UserService;
  $scope.$watchCollection('UserService', function(){
    $scope.currentUser = UserService.currentUser
  });

  //Call to server to get data posted on the home page
  var req = {
    method: 'get',
    url:'/api/ride',
    params:{
      'sort':'createdAt desc'
    }
  }
  $http.get('url')
  $http(req).success(function(data){
    $scope.rides = data;
  })






}])



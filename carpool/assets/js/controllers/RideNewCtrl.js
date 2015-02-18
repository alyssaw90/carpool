carpoolApp.controller('RideNewCtrl',['$scope', '$http', '$location','uiGmapGoogleMapApi' , function($scope,$http,$location,uiGmapGoogleMapApi){
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  uiGmapGoogleMapApi.then(function(maps) {

  });
}])

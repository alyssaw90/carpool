carpoolApp.controller('AuthModalCtrl',['$scope','$http','$modalInstance','UserService','AlertService',function($scope,$http,$modalInstance,UserService,AlertService){

    $scope.login = function(){
        UserService.login($scope.email,$scope.password,
            function(err,data){
                if(err){
                    //server error
                    alert(err);
                }else if(data.user){
                    //successful login
                    AlertService.add('success','Welcome!');
                    $modalInstance.close();
                }else{
                    //login error (bad user or pass)
                    alert(data.error);
                }
            }
        );
    };

    $scope.signup = function(){

        if($scope.signupPassword != $scope.signupPasswordConfirm){
            AlertService.add('danger','Password is not a match.')
            return;
        }

        var signupData={
            email:$scope.email,
            password:$scope.password,
            firstName:$scope.firstName,
            lastName:$scope.lastName
        };

        console.log(signupData);

        $http.post('/api/user',signupData)
        .success(function(data){
            $scope.login()
        })
        .error(function(err){
            console.log(err);
            alert(err);
        })
    }

}]);

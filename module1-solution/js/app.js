(function () {
    'use strict';
    angular.module('mod1_app',[])
    .controller('mod1_controller', function($scope){
        $scope.dishes = "";
        $scope.message = "";
        $scope.checkNumberOfDishes = function(){
            var str = $scope.dishes;
            var dishArray = str.split(",");
            if(str.length == 0){
                $scope.message = "Please Enter Data First";
            } else {
                if(dishArray.length <= 3){
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too Much!";
                }
            }
        };
    });
})();
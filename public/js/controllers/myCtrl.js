/*global angular*/
/*global controller*/
var myApp=angular.module("myApp",[]);
myApp.controller("myCtrl",function($scope,$http){
    $http.get("/api/name").success(function(data){
        $scope.n=data;
    });
    $scope.create=function(){
        $http.post("/api/name",$scope.name).success(function(data){
        $scope.n=data;
    })
    $scope.name="";
    };
    $scope.remove=function(id){
        $http.delete("/api/name/"+id).success(function(data){
        $scope.n=data;
    })
    };
})
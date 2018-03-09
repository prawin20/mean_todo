/*global angular*/
/*global controller*/
var myApp=angular.module("myApp",[]);
myApp.controller("myCtrl",function($scope,$http){
    $http.get("/api/name").then(function(response){
        $scope.names=response.data;
    });
    $scope.create=function(){
        $http.post("/api/name",$scope.name).then(function(response){
        $scope.names=response.data;
    })
    $scope.name="";
    };
    $scope.remove=function(id){
        $http.delete("/api/name/"+id).then(function(response){
        $scope.names=response.data;
    })
    };
})

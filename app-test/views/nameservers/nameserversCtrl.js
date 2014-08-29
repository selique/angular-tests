appDomains.controller('nameserversCtrl', function($scope, $http){
	$scope.title = "Servidores de DNS";
	$http.get("data/domains.json").success(function(data){
	  $scope.domains = data.domains;
	}).error(function(data){
	  console.log("Error...");
	});
});
appDomains.controller('prepanelCtrl', function($scope, $http){
	$scope.title = "Registros";
	$http.get("data/domains.json").success(function(data){
	  $scope.domains = data.domains;
	}).error(function(data){
	  console.log("Error...");
	});
});
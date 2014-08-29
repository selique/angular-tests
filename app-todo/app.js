var todoApp = angular.module('todoApp', []);

todoApp.controller('todoList', function($scope){
	
	tasksLocal = localStorage.getItem('tasksStorage');
	if (tasksLocal === null) {
		$scope.tasks = [];
	} else {
		$scope.tasks = angular.fromJson(tasksLocal);
	}

	$scope.addTask = function(task) {
		if (task.title === 0) {
			return false;
		} else {
			$scope.tasks.push(angular.copy(task));
			delete $scope.task;
			localStorage.setItem('tasksStorage', angular.toJson($scope.tasks));
		}
	}

	$scope.delTask = function($index) {
		$scope.tasks.splice($index, 1);
		localStorage.setItem('tasksStorage', angular.toJson($scope.tasks));
	}

});
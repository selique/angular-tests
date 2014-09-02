var todoApp = angular.module('todoApp', []);

todoApp.controller('todoList', function($scope){
	
	tasksLocal = localStorage.getItem('tasksStorage');
	if (tasksLocal === null) {
		$scope.tasks = [];
	} else {
		$scope.tasks = angular.fromJson(tasksLocal);
	}

	$scope.doneTask = function(task){
		localStorage.setItem('tasksStorage', angular.toJson($scope.tasks));
	}

	$scope.addTask = function(task) {
			$scope.tasks.push({
				title: task.title,
				done: false
			});
			delete $scope.task;
			localStorage.setItem('tasksStorage', angular.toJson($scope.tasks));
	}

	$scope.delTask = function($index) {
		$scope.tasks.splice($index, 1);
		localStorage.setItem('tasksStorage', angular.toJson($scope.tasks));
	}

});
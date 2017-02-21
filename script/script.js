

var app = angular.module('toDoModule', []);

	app.controller('toDoController', function($scope){
		//Define Chores Array inside Controller
		$scope.chores = ['Wash Dishes', 'Mop Floors', 'Fold Laundry', 'Make Bed'];

		//call addToLIst Function
		$scope.addToList = function() {
				$scope.chores.push($scope.itemToAdd);
				// Clear the item input box
				$scope.itemToAdd = "";
		}

		$scope.removeItem = function(chore) {
			var index = $scope.chores.indexOf(chore);
			$scope.chores.splice(index, 1);
		}

	})




// var app = angular.module('todoModule', []);
//
// app.controller('SimpleController', function($scope){
//   $scope.Chorelist = ['Make Bed', 'Wash Baseboards', 'Laundry', 'Mop Floor', 'Walk the Dog'];
// });

// function SimpleController($scope) {
//     $scope.Chorelist = [
//       {chore: 'Make Bed', day: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'},
//       {chore: 'Wash Baseboards', day: 'Wednesday'},
//       {chore: 'Laundry',day: 'Tuesday, Thursday, Saturday'},
//       {chore: 'Mop Floor', day: 'Sunday, Wednesday'},
//       {chore: 'Walk The dog', day: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'}
//     ];
//   }

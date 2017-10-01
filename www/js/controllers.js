angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

// erase ,Friends inside function
.controller('FriendsCtrl', function($scope) {
  // $scope.friends = Friends.all();
})

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('AccountCtrl', function($scope) {
});

app.controller('Controller_Name', function($state, $scope)
{
  $scope.go_to_another_page = function(){
    $state.go('state_name');
}
})


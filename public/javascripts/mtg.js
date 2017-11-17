angular.module('cardeck', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){

  $scope.mycards = [];
  $scope.deckcards = [];
  
  $scope.cardField = '';
  $scope.displayText = '';

  $scope.addCard = function(card){
   return $http.post('/addcard', card).success(function(data){
      console.log("card added");
	  console.log(card);
	  $scope.displayText = card.name +" added to deck!";
    });
  }

  $scope.removeCard = function(card){
    $http.delete('/removecard/' + card._id)
    .success(function(data){
      console.log("card removed!");
      $scope.getDeck();
    });

  }

  $scope.getCards = function() {
    if($scope.cardField == "") { return;}
    $scope.displayText = "Click on a card to add it to the deck!"
    var myurl= "/getcard?q=";
    myurl += $scope.cardField;
    $scope.deckcards = [];
    return $http.get(myurl).success(function(data){

    angular.copy(data, $scope.mycards);
    });
}

  $scope.getDeck = function() {
    $scope.displayText = "This is your current deck, click a card to remove it."
      $scope.mycards = [];
    return $http.get('getdeck').success(function(data){
     
      angular.copy(data, $scope.deckcards);

    });
}
}]);

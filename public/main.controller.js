app.controller('MainController', function ($scope, FlashCardsFactory) {
  FlashCardsFactory.getFlashCards().then(function(cards) {
    console.log(cards);
  });

  $scope.getCategoryCards = function (category) {
    console.log(category + " is money")
  }

  $scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}

});

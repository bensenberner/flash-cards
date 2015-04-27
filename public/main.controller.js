app.controller('MainController', function ($scope, FlashCardsFactory) {
	//$scope.flashCards = whateverName;
  FlashCardsFactory.getFlashCards().then(function(cards) {
    for (var i = 0; i < cards.length; i++) {
      console.log(cards[i].question);
    }
  });

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});

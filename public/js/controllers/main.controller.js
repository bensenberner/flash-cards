app.controller('MainController', function ($scope, FlashCardsFactory) {
  FlashCardsFactory.getFlashCards().then(function(cards) {
    $scope.flashCards = cards;
    //console.log(cards[0].category);
  });

  $scope.activeCategory = function(category) {
    if (category === $scope.category) {
      return true;
    } else {
      return false;
    }
  }

  $scope.getCategoryCards = function (category) {
    FlashCardsFactory.getFlashCards(category).then(function(cards) {
      $scope.flashCards = cards;
    });
  };

  //FlashCardsFactory.getFlashCards($scope.category).then(function(cards) {
  //return cards;
  //});

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
    if (answer.correct) {
      ScoreFactory.correct++;
    }
    else {
      ScoreFactory.incorrect++;
    }
  }

});

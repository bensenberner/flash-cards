app.directive('flashCard', function () {
  return {
    restrict: 'E',
    scope: {
      card: '=',
      answerFunction: '='
    },
    templateUrl: 'js/directives/flashcard/flashcard.html'
  };
});

app.factory('FlashCardsFactory', function ($http) {
    return {
       getFlashCards: function (category) {
        var path;
        if (category)
            path = '/cards?category=' + category;
        else
            path = '/cards';
        return $http.get(path).then(function (response) {
            return response.data;
        });
       }
    };
});
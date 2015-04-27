app.directive('borderOnHover', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			element.on('mouseout', function () {
				element.css('border-width', '1px');
			});
			element.on('mouseenter', function () {
				element.css('border-width', '2px');
			});

		}
	};
});

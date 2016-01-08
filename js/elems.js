$(document).ready(function() {
	$(document)
		.on('click', '.drop_menu', function(event) {
			$(this).data('clicked', !$(this).data('clicked'));

			if ($(this).data('clicked')) {
				$(this).children('.drop_items').addClass('open');
			} else {
				$(this).children('.drop_items').removeClass('open');
			}
		})

		.on('mouseup', function(event) {
			var $container = $('.drop_menu');

			if (!$container.is(event.target)
					&& $container.has(event.target).length === 0)
			{
				$('.drop_menu').data('clicked', false).children('.drop_items').removeClass('open');
			}
		});
});
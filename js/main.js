$(document).ready(function() {
	interact('#resizable-element')
		.styleCursor(false)
		.resizable({
			axis: 'x',
			inertia: true,
			manualStart: true,
			restrict: {
				restriction: function(x, y, element) {
					var content_offset = $('.content_block').offset().left;
					var rest = {
						'right': 640 + content_offset
					};

					if (x <= 215 + content_offset) { rest.left = content_offset + 215; return rest; }
					else if (x <= 380 + content_offset) { rest.left = content_offset + 380; return rest; }
					else if (x <= 510 + content_offset) { rest.left = content_offset + 510; return rest; }
					else if (x <= 640 + content_offset) { rest.left = content_offset + 640; return rest;}
					else { rest.left = 0; return rest; }
				},
				endOnly: true,
				elementRect: { top: 0, left: 1, bottom: 0, right: 1 }
			}
		})
		.on('resizestart', function() {
			$('.content_block').addClass('resize_act');
		})
		.on('resizeend', function() {
			$('.content_block').removeClass('resize_act');
		})
		.on('resizemove', resizeHandler)
		.on('resizemove', moveHandler)
		.on('resizemove', scaleHandler);


	interact('#resize-handle').on('down', function(event) {
		var interaction = event.interaction;

		interaction.start({
				name: 'resize',
				edges: { left: false, right: true, bottom: false, top: false },
			},
			interact('#resizable-element'),
			document.getElementById('resizable-element'));
	});


	function resizeHandler(event) {
		var $right = $('.column.right');
		var $content_block = $('.content_block');

		var $target = $(event.target),
				x = (parseFloat($target.attr('data-x')) || 0);

		$target.width(event.rect.width + 'px');
		$right.width($content_block.width() - event.rect.width + 'px');

		x += event.deltaRect.left;

		$target.css('transform', 'translate(' + x + 'px' + ')')
					 .attr('data-x', x);
	};

	function scaleHandler(event) {
		var $target = $(event.target),
			 	$right = $('.column.right');

		if ($target.width() < 380) {
			$('.lesson_item').addClass('big').find('circle').attr({'cx': '100', 'cy': '100', 'r': '96'});
		} else {
			$('.lesson_item').removeClass('big').find('circle').attr({'cx': '52.5', 'cy': '52.5', 'r': '48'});
		}

		var size = $right.width() * 0.019;
		var fontSize = Math.floor(size);
		$('.logo').width(166 - size * 5);
		$('.right').find('p').css({'font-size': fontSize + 'pt', 'line-height': (fontSize + 2) + 'pt'});
	};


	function moveHandler(event) {
		var $target = $('#resize-handle'),
				x = (parseFloat($target.attr('data-x')) || 0) + event.dx;

		$target.css('transform', 'translate(' + event.rect.width + 'px' + ')')
					 .attr('data-x', x);
	};
});
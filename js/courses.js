$(document).ready(function() {

	$(document).on('click', '.course_block', function(e) {
		var $this = $(this);
		$this.data('clicked', !$this.data('clicked'));

		if ($this.data('clicked')) {
			$this.children('.course_preview_lessons').addClass('hide').end()
					 .children('.course_lessons_block').slideDown(300);
		} else {
			$this.children('.course_preview_lessons').removeClass('hide').end()
					 .children('.course_lessons_block').slideUp(300);
		}
	});

	$(document).on('click', '.section_description', function(e) {
		var $this = $(this);
		$this.data('clicked', !$this.data('clicked'));

		if ($this.data('clicked')) {
			$this.parent('.section_block').children('.section_body').slideDown(300);
		} else {
			$this.parent('.section_block').children('.section_body').slideUp(300);
		}
	});

	// $(document).on('click', '.lang', function(e) {
	// 	var $this = $(this);
	// 	$this.data('clicked', !$this.data('clicked'));

	// 	if ($this.data('clicked')) {

	// 	} else {

	// 	}
	// });

	$('.menu_item').on('click', function(e) {
		var $this = $(this);
		var current = $this.attr('class').split(' ')[1];

		if ($this.hasClass('open')) {
			$this.removeClass('open');
			$('.panel.' + current).removeClass('open');
		} else {
			var index = $this.index('.menu_item');
			$('.menu_item').removeClass('open').eq(index).addClass('open');
			$('.panel').removeClass('open').filter('.' + current).addClass('open');
		}
	});

	$('.menu_navigate').on('click', function(e) {
		$current_course = $('.course_block').eq(0);

		$('.column.left').animate({'scrollTop': $current_course.position().top}, 300, function() {
			$current_course.children('.course_preview_lessons').addClass('hide')
										 .end().children('.course_lessons_block').slideDown(300)
										 .end().data('clicked', true);
		});
	});

	$('.logo').on('click', function(e) {
		$('.column_inner').fadeToggle(300);
	});

});
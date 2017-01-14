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

	var langs = [];
	$(document)
		.on('mouseenter', '.lang', function(e) {
			var current_lang = $(this).attr('class').split(' ')[1];

			$('.lang').filter('.' + current_lang).addClass('select');
		})
		.on('mouseleave', '.lang', function(e) {
			var current_lang = $(this).attr('class').split(' ')[1];

			$('.lang').filter('.' + current_lang).removeClass('select');
		})
		.on('click', '.lang', function(e) {
			var $this = $(this);
			var lang = '.' + $this.attr('class').split(' ')[1];
			var $current_lang = $('.lang').filter(lang);

			$current_lang.data('clicked', !$this.data('clicked'));

			if ($this.data('clicked')) {
				langs.push(lang);
				$current_lang.addClass('select_fix');
				$('.course_block').find('.course_langs').not(':has(' + lang + ')').closest('.course_block').slideUp();
			} else {
				langs = langs.filter(function(item) { return item !== lang; });
				$('.lang').filter(lang).removeClass('select_fix');
				if (langs.length !== 0) {
					$('.course_block').find('.course_langs').has(langs.join(',')).not(':has(' + lang + ')').closest('.course_block').slideDown();
				} else {
					$('.course_block').find('.course_langs').not(':has(' + lang + ')').closest('.course_block').slideDown();
				}
			}

			return false;
		});

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

	// $('.logo').on('click', function(e) {
	// 	$('.column_inner').fadeToggle(300);
	// });

});
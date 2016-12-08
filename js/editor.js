$(document).ready(function() {

	$('.chapter_title, .section_body, .section_title').attr('contenteditable', 'true');

	$('.courses_block').sortable({
		axis: 'y',
		appendTo: 'parent',
		connectWith: '.courses_block'
	});

	$('.course_lessons_block').sortable({
		appendTo: 'parent',
		connectWith: '.course_lessons_block'
	});

	$('.lesson_chapters_block').sortable({
		axis: 'y',
		appendTo: 'parent',
		connectWith: '.lesson_chapters_block',
		cancel: '.chapter_title, .section_body, .section_title'
	});

	$('.chapter_sections_block').sortable({
		axis: 'y',
		appendTo: 'parent',
		connectWith: '.chapter_sections_block',
		cancel: '.chapter_title, .section_body, .section_title'
	});
});
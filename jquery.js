$(document).ready(function() {
	$('.section_content').mouseenter(function() {
		$('.text').css("display", "none");
	})

	$(".section_content").mouseleave(function() {
		$('.text').css("display", "block") ;
	})
});
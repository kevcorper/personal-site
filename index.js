$(function() {
	$('.section').click(function(e) {
		e.preventDefault();
		var target = $(e.target);

		if (target.hasClass('showing')) { return; }

		var showing = $('.showing');
		var showingId = '#' + showing.text();
		showing.removeClass('showing');
		showing.addClass('hidden');
		$(showingId).fadeOut(400);

		target.removeClass('hidden');
		target.addClass('showing');

		var sectionId = '#' + target.text();
		$(sectionId).delay(400).fadeIn(400);
	});
});
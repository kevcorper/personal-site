function createColor() {
    var letters = '0123456789ABCDE';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 15)];
    }
    return color;
}

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

	$('#features div').click(function(e) {
		e.preventDefault();
		var target = $(e.target);

		$('#features').css('bottom', '-500px');

		if (target.attr('id') === 'color-change') {
				e.preventDefault();
				var target = $(e.target);

				var oldColor = target.css('background-color');
				var newColor = createColor();

				$('*').filter(function() {
			    var match = oldColor;
			    return ( $(this).css('background-color') == match );
				}).css('background-color', newColor);

				$('*').filter(function() {
			    var match = oldColor;
			    return ( $(this).css('color') == match );
				}).css('color', newColor);

				$('*').filter(function() {
			    var match = oldColor;
			    return ( $(this).css('border-color') == match );
				}).css('border-color', newColor);
		} else if (target.attr('id') === 'reverse') {
			return
		} else if (target.attr('id') === 'reverse') {
			return
		}

		$('#features').delay(300)
		.queue(function (next) { 
		  $(this).css('bottom', '50px'); 
		  next(); 
		});
	});

	$('#color-change a').click(function(e) {
		e.preventDefault();
		var target = $(e.target);

		var oldColor = target.css('background-color');
		var newColor = createColor();

		$('*').filter(function() {
	    var match = oldColor;
	    return ( $(this).css('background-color') == match );
		}).css('background-color', newColor);

		$('*').filter(function() {
	    var match = oldColor;
	    return ( $(this).css('color') == match );
		}).css('color', newColor);

		$('*').filter(function() {
	    var match = oldColor;
	    return ( $(this).css('border-color') == match );
		}).css('border-color', newColor);
	});

	$('#bomb a').click(function(e) {
		e.preventDefault();

		$("*").addClass("flash").delay(800).queue(function(next){
	    $(this).removeClass("flash");
	    var elements = $('*:not(html, body, header, #flash, #nav-content, #features, #features a, #features div, #features i)').toArray();

	    for (var i = 0; i < elements.length; i++ ) {
	      var rule = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
	      $(elements[i]).css('transform', rule);
	    }
		});
	});
});
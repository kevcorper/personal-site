var newColor = '#F7CA18';

function createColor() {
  var letters = '0123456789ABCDE';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}

function createStar() {
	var screenWidth = $( window ).width();
	var screenHeight = $( window ).height();
  var posX = Math.floor(Math.random() * screenWidth);
  var posY = Math.floor(Math.random() * screenHeight);
  var size = Math.floor(Math.random() * 8);
  var borderRadius = size/2;
  var color = newColor;

  return '<div class="star" style="display:none;position:absolute;background-color:' + color + ';top:' + posY + 'px;left:' + posX + 'px;width:' + size + 'px;height:' + size + 'px;border-radius:' + borderRadius + 'px;"></div>';
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
		$('#features').css('bottom', '-500px');
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
		newColor = createColor();

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

		$('*').filter(function() {
	    var match = oldColor;
	    return ( $(this).css('fill') == match );
		}).css('fill', newColor);
	});

	$('#bomb a').click(function(e) {
		e.preventDefault();

		$('#features').fadeOut(50);

		$("#sky").css("z-index", "999").fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50).delay(800).queue(function(next){
			$("#sky").css("z-index", "-999");
	    var elements = $('*:not(html, #sky, .star, body, #moon, header, #nav-content, #features, #features a, #features div, #features i, #moon circle)').toArray();
	    for (var i = 0; i < elements.length; i++ ) {
	      var rule = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
	      $(elements[i]).css('transform', rule);
	    }
		});
	});

	var degrees = 45;
	var nightSkyOff = true;
	$('#night a').click(function(e) {
		e.preventDefault();

		degrees+=360;
		$('#moon').fadeIn(800).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
	    '-moz-transform' : 'rotate('+ degrees +'deg)',
	    '-ms-transform' : 'rotate('+ degrees +'deg)',
	    'transform' : 'rotate('+ degrees +'deg)'
	   });

		if (nightSkyOff) {
			nightSkyOff = false;
		  for (var i = 0; i < 400; i++ ) {
		    var star = createStar;
		    $('#sky').append(star);
		  }
		  var elements = $('.star').toArray();
		  (function myLoop (i) {          
		     setTimeout(function () {   
				  $(elements[i]).fadeIn(300);                
		      if (--i) myLoop(i);
		     }, 75)
		  })(400); 
		}
	});
});
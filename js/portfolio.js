$(document).ready(function () {
	var bubble = function (event) {
		// console.log(event.clientX, event.clientY);
	var $b = $('<div/>').addClass('bubble');

	var size = Math.random() * 4;
	

	$b.css({
		width: size + 'em',
		height: size + 'em',
		top: event.clientY,
		left: event.clientX
	})

	$('body').append($b);

	//Clean up after ourselves
	setTimeout(function () {
		$b.animate({
			top: -1000 //Disappear off the top of the screen
		}, 2000, function () {
			$b.remove();
		});
	}, 400);
	};



	$(window).on('mousemove', bubble);
})
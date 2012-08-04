$(function() {
	var $canvas, context, 
		offset, offsetLeft, offsetTop, 
		isDrawing,
		brush, brushes;

	$canvas = $('#painter');
	context = $canvas[0].getContext('2d');

	// Find the canvas offset so we can get accurate
	// mouse positions for our shapes
	offset = $canvas.offset();
	offsetLeft = offset.left;
	offsetTop = offset.top;

	// Set the initial state
	isDrawing = false;

	// Define our brush strategy objects
	brushes = {
		outline: {
			draw: function(e, context) {
				context.strokeRect(e.pageX - offsetLeft, e.pageY - offsetTop, 10, 10);
			}
		},
		square: {
			draw: function(e, context) {
				context.fillRect(e.pageX - offsetLeft, e.pageY - offsetTop, 10, 10);
			}
		},
		circle: {
			draw: function(e, context) {
				context.arc(e.pageX - offsetLeft, e.pageY - offsetTop, 10, 0, Math.PI * 2);
				context.fill();
			}
		}
	};
	brush = brushes.circle;

	// Listen for mouse events on the canvas
	$canvas
		.on('mousedown', function() {
			isDrawing = true;
		})
		.on('mouseup mouseleave', function() {
			isDrawing = false;
		})
		.on('mousemove', function(e) {
			if (isDrawing) {
				// Defer drawing to a strategy object
				brush.draw(e, context);
			}
		});

	// Listen for when the user changes the selected brush
	$('#btns button').on('click', function(e) {
		// Grab the button's `data-brush` attribute
		// and set that as our brush strategy
		var brushType = $(this).data('brush');
		brush = brushes[brushType];
	});
});

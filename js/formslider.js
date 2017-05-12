$(function() {
	$("#sliderVisual").slider({
		value: 1,
		min: 1,
		max: 10,
		step: 1,
		
		slide: function(event, ui) {
			$("#rateMe").val(ui.value + " Stars");
		}
	});
	$("#rateMe").val(" Please move the slider to change rating from 1 to 10 stars");
});
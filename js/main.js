$(document).ready(function () {

	$("#menu").click(function () {
		$("#navbar").addClass('slideRight');
		$('.bg').addClass('slide').click(function () {
			$(this).removeClass('slide');
			$("#navbar").removeClass('slideRight');
		})
	});

});
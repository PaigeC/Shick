$(document).ready(function() {
	$('.navbar > #topnav > a').click(function(){
		$('.navbar > #topnav > a').removeClass('active');
		$(this).addClass('active');
	});
});
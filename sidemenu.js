$(function () {
	$('#sidemenu_key').click(function () {
		$('#menu_wrap').toggleClass("clicked");
		$('#sidemenu_key_bar1').toggleClass("clicked");
		$('#sidemenu_key_bar2').toggleClass("clicked");
		$('#sidemenu_key_bar3').toggleClass("clicked");
	});
	var windowHeight = $(window).height();
	$("#sidemenu").height(windowHeight);
	var timer = false;
	$(window).resize(function () {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function () {
			windowHeight = $(window).height();
			$(sideMenu).height(windowHeight);
		}, 50);
	});


	/**************************/

});
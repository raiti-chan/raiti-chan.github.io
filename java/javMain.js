$(function(){

	var main_hight = $("main").height();
	$("main").css("height",0);
	$("main").animate({height: main_hight},2000);

})
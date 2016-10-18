$(function(){
	
	$('.menuItem').click(function(){
		parent.main.location = jQuery(this).attr('data-url');
	})

})
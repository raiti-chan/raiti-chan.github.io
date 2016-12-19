$(function(){
	
	$('.menuItem').click(function(){
		/** @namespace parent.main */
		parent.main.location = jQuery(this).attr('data-url');
	})

});
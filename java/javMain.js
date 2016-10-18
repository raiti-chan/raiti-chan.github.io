$(function(){

	
	var drops = document.getElementsByClassName("drop");
	for(var i = 0; i < drops.length; i++){
		var node = drops[i];
		var titlenode = document.createElement("div");
		var contentnode = node.childNodes[1]
		titlenode.textContent = node.title;
		titlenode.classList.add("droptitle");
		node.insertBefore(titlenode,node.firstChild);
		$(node).css("width",node.getAttribute("mixW"));
		$(titlenode).hover(function(){
			$(node).animate({width: "100%"},500);
		},function(){
			if(!$(node).hasClass("clicked")){
				$(node).animate({width: node.getAttribute("mixW")},500);
			}
		});
		
		$(titlenode).click(function(){
			if($(node).hasClass("clicked")){
				var over_hight = $("main").height()-$(contentnode).innerHeight();
				$(node).removeClass("clicked");
				$(node).animate({height: $(titlenode).innerHeight()},{duration: 500, queue: false,});
				$("main").animate({height: over_hight},{duration:500, queue: false});
			}else{
				var over_hight = $("main").height()+$(contentnode).innerHeight();
				$(node).addClass("clicked");
				$(node).animate({height: $(contentnode).innerHeight()+$(titlenode).innerHeight()},{duration:500, queue: false});
				$("main").animate({height: over_hight},{duration:500, queue: false});
				$("html,body").animate({scrollTop: $(node).offset().top});
			}
		});
	}

})

window.onload = function() {
	var main_hight = $("main").height();
	
	//-----------------------------------------------------------------------------表示
	$("main").css("display","inline");
	$("main").css("height",0);
	$("main").animate({height: main_hight},2000);
} 
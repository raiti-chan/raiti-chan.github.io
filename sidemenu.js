$(function(){

	
//***********************************

/* ▼ここから初期設定 */

// 1. メニューを囲んでるdivのid
var menuWrap = '#menu_wrap'

// 2.ボタンクリック時に現れる領域のid
var sideMenu = '#sidemenu'

// 3.ボタンのid
var sidemenKey = '#sidemenu_key'

// 4.メニューの横幅（px）
var menuWidth = '350'

// 5.メニューが閉じてる時のボタンの中身（textでも画像でも可）
var closeHtml = '→'

// 6.メニューが開いてる時のボタンの中身（textでも画像でも可）
var openHtml = '←'

// 7.開閉アニメーションの速さ（単位ミリ秒）
var speed = 400


//***********************************

//▼ボタンをクリックしたらメニューが開いたり閉じたりする処理
$(sidemenKey).click(function(){
    if($(menuWrap).hasClass('active')){
		$(menuWrap).stop().animate({left:'-'+menuWidth+'px'},speed).removeClass('active');

		$('#sidemenu_key_bar1').animate({zIndex:1},{
			duration:speed,
			step:function(now){
				$('#sidemenu_key_bar1').css({transform:'rotate(' + (45 - now * 45) + 'deg)'});
				$('#sidemenu_key_bar1').css({'margin-top':20-(now*10)+'px'});
				$('#sidemenu_key_bar3').css({transform:'rotate(' + (-45 + now * 45) + 'deg)'});
				$('#sidemenu_key_bar3').css({'margin-top':(-15)+(now*20)+'px'});
				if(now >= 0.5){
					$('#sidemenu_key_bar2').css({'background-color':'rgba(255,255,255,1)'});
				}
			},
			complete:function(){
				$('#sidemenu_key_bar1').css('zIndex', 0);
			}
		})
		
	}else{
		$(menuWrap).stop().animate({left:'0'},speed).addClass('active');

		$('#sidemenu_key_bar1').animate({zIndex:1},{
			duration:speed,
			step:function(now){
				$('#sidemenu_key_bar1').css({transform:'rotate(' + (now * 45) + 'deg)'});
				$('#sidemenu_key_bar1').css({'margin-top':10+(now*10)+'px'});
				$('#sidemenu_key_bar3').css({transform:'rotate(' + (180 - now * 45) + 'deg)'});
				$('#sidemenu_key_bar3').css({'margin-top':5-(now*20)+'px'});
				if(now >= 0.5){
					$('#sidemenu_key_bar2').css({'background-color':'rgba(255,255,255,0)'});
				}
			},
			complete:function(){
				$('#sidemenu_key_bar1').css('zIndex', 0);
			}
		})

		
	};
});



/**************************/

//▼menuの高さをウィンドウの高さ100%に設定する処理（不要な場合は削除）

//変数windowHeightに画面の高さを取得、変数windowHeightに格納
var windowHeight = $(window).height();

//sideMenuのheightをwindowHeightにする
$(sideMenu).height(windowHeight);

//画面をリサイズした時、heightを読み直し
var timer = false;
$(window).resize(function() {
	if (timer !== false) {
		clearTimeout(timer);
	}
	timer = setTimeout(function() {
		windowHeight = $(window).height();
		$(sideMenu).height(windowHeight);
	}, 50);
});


/**************************/
	
});
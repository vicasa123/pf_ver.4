$(document).ready(function(){      
	$('.navi>li').mouseover(function(){
		$(this).find('.submenu').css({'display':'block'});
	});

	$('.navi>li').mouseout(function(){
		$(this).find('.submenu').css({'display':'none'});
	});

	$('.padnavi>li').click(function(){
		$(this).find('.subpad').stop().slideToggle();
	});
});
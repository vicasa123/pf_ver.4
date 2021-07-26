$(document).ready(function(){
	$('article').on('mouseover',function(){
		// 1초동안 width의 값이 35%로 확정된 후 h3, p태크의 위치 이동이 실행됨
		$(this).stop().animate({'width':'35%'},1000,function(){
				$(this).find('h3').animate({'right':'10px'},200);
				$(this).find('p').animate({'right':'10px'},400);
		});
		$(this).find('img').stop().animate({'opacity':'0.9'},1200);
		// $(this).find('h3').animate({'right':'10px'},400);
		// $(this).find('p').animate({'right':'10px'},800);
	});
	

	$('article').on('mouseout',function(){
		$(this).stop().animate({'width':'12%'},1000);
		$(this).find('img').stop().animate({'opacity':'0'},1200);
		$(this).find('h3').animate({'right':'-310px'},200);
		$(this).find('p').animate({'right':'-310px'},400);
	});
});
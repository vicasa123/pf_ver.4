$(document).ready(function(){
	$('#container').addClass('start');

	// 회사소개(네비) 클릭시 보여짐
	$('nav li').click(function(){
		$('#container').css('max-width','100%');
		// **********
		var id=$(this).attr('data-role');

		$('nav li').removeClass('on');
		$(this).addClass('on');

		// content 너비 조정
		$('.content').removeClass('this prev next');
		$('#'+id).addClass('this').prevAll().addClass('prev');
		$('#'+id).nextAll().addClass('next');
	});

	// 로고 클릭시
	$('.logo_box').click(function(){
		$('nav li').removeClass('on');
		$('.content').removeClass('this prev next');
		$('#container').css('max-width','1200px');
	});

	// 도서소개(롤링) 클릭시
	$('.roll_left').click(function(){
		// *************
		$('.book_roll li').eq(0).insertAfter('.book_roll li:last-child');
	});
	$('.roll_right').click(function(){
		// *************
		$('.book_roll li').eq(-1).insertBefore('.book_roll li:first-child');
	});


	// FAQ li 클릭시
	$('.accordio_box ol li').click(function(){
		$('.accordio_box ol li').removeClass('on');
		$(this).addClass('on');
	});

});
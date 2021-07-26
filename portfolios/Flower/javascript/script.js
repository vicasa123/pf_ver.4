$(document).ready(function(){ 

	
	$('article h2').on('click',function(e){
		// ******
		e.preventDefault();
		var src=$(this).children('a').attr('href');
		$('article').removeClass('on');
		$(this).parent().addClass('on');

		$(this).siblings('p').find('img').attr({'src':src});
	});

	$('article span').on('click',function(){
		$(this).parent().removeClass('on');
	});

	
});
 $(document).ready(function(){ 
 	$('.btnMenu').on('click',function(){
 		$(this).fadeOut();
 		$('nav').addClass('on');
 		$('section').addClass('on');

 	});

 	// 네비게이션을 클릭하면 해당 article로
 	$('nav li').on('click',function(){
 		$('.btnMenu').fadeIn();
 		$('nav').removeClass('on');
 		$('section').removeClass('on');

 	

 	var i=$(this).index();
 	$('section>article').removeClass('on');
 	$('section>article').eq(i).addClass('on');

 	});
 });
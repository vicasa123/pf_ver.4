$(function(){ 
	$('#main_navigation a').click(function(){
		// **********
		var target=$(this).attr('data-target');
		$(':not([data-name'+target+'])').removeClass('active');
		$('[data-name='+target+']').addClass('active');
	});

	// left btn
	$('#character a:nth-child(1)').click(function(){
		currentPosition-=1;
		if(currentPosition<1){
			currentPosition=3;
		}
		$('#character article').removeClass('show');
		$('article:nth-of-type('+currentPosition+')').addClass('show');
	});
	var currentPosition =1;
	// right btn
	$('#character a:nth-child(2)').click(function(){
		currentPosition+=1;
		if(currentPosition>3){
			currentPosition=1;
		}
		$('#character article').removeClass('show');
		$('article:nth-of-type('+currentPosition+')').addClass('show');
	});
});
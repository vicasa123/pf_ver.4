var i1=false;
var i2=false;

function goHide1(){
	if(!i1 && !i2){
		$('.gnb_depth2_1').fadeOut('fast');
	}
}

$(document).ready(function(){

	$('.openAll1').mouseover(function(){
		$('.gnb_depth2_1').fadeIn('fast');
		i1=true;
	});

	$('.openAll1').mouseout(function(){
		
		i1=false;
		setTimeout(goHide1,200);
	 });


	$('.gnb_depth2_1').mouseover(function(){
		i2=true;
	});

	$('.gnb_depth2_1').mouseout(function(){
		i2=false;
		setTimeout(goHide1,200);
	});


});





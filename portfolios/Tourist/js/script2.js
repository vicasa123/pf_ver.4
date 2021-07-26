
var isOver1=false;
var isOver2=false;

var isOver11=false;
var isOver12=false;

var isOver111=false;
var isOver112=false;

var isOver1111=false;
var isOver1112=false;


function goHide1(){
	if(!isOver1 && !isOver2){
		$('.gnb_depth2_1').fadeOut('fast');
}}

function goHide2(){
	if(!isOver11 && !isOver12){
	$('.gnb_depth2_2').fadeOut('fast');
}}

function goHide3(){
	if(!isOver111 && !isOver112){
	$('.gnb_depth2_3').fadeOut('fast');
}}

function goHide4(){
	if(!isOver1111 && !isOver1112){
	$('.gnb_depth2_4').fadeOut('fast');
}}



// ********11111*****************************


$(document).ready(function(){


	$('.openAll1').mouseover(function(){
		$('.gnb_depth2_1').fadeIn('fast');
		isOver1=true;		
	});

	$('.openAll1').focus(function(){
		$('.gnb_depth2_1').fadeIn('fast');
	});



	$('.openAll1').mouseout(function(){
		isOver1=false;
		setTimeout(goHide1,200);
	})


	$('.openAll1').blur(function(){
		isOver1=false;
		setTimeout(goHide1,200);
	});

// *************

	$('.gnb_depth2_1').mouseover(function(){
		isOver2=true;
	});

	$('.gnb_depth2_1 li a').focus(function(){
		isOver2=true;
	})


	$('.gnb_depth2_1').mouseout(function(){
		isOver2=false;
		// goHide1();
		setTimeout(goHide1,200);
	});


	$('.gnb_depth2_1 li:last-child a').blur(function(){
		isOver2=false;
		setTimeout(goHide1,200);
	});






// *******2222***********************************




$('.openAll2').mouseover(function(){
		$('.gnb_depth2_2').fadeIn('fast');
		isOver11=true;
	});

	$('.openAll2').focus(function(){
		$('.gnb_depth2_2').fadeIn('fast');
	});


	$('.openAll2').mouseout(function(){
		isOver11=false;
		setTimeout(goHide2,200);
	});

	$('.openAll2').mouseout(function(){
		isOver11=false;
		setTimeout(goHide2,200);
	})

// ****************



	$('.gnb_depth2_2').mouseover(function(){
		isOver12=true;
	});


	$('.gnb_depth2_2 li a').focus(function(){
		isOver12=true;
	})

	$('.gnb_depth2_2').mouseout(function(){
		isOver12=false;
		setTimeout(goHide2,200);
	});

	$('.gnb_depth2_2 li:last-child a').blur(function(){
		isOver12=false;
		setTimeout(goHide2,200);
	});



// ********3333************************************



$('.openAll3').mouseover(function(){
		$('.gnb_depth2_3').fadeIn('fast');
		isOver111=true;
	});

	$('.openAll3').focus(function(){
		$('.gnb_depth2_3').fadeIn('fast');
	});


	$('.openAll3').mouseout(function(){
		isOver111=false;
		setTimeout(goHide3,200);
	});


	$('.openAll3').blur(function(){
		isOver111=false;
		setTimeout(goHide3,200);
	});

// *****************

	$('.gnb_depth2_3').mouseover(function(){
		isOver112=true;
	});


	$('.gnb_depth2_3 li a').focus(function(){
		isOver112=true;
	})

	$('.gnb_depth2_3').mouseout(function(){
		isOver112=false;
		setTimeout(goHide3,200);
	});

	$('.gnb_depth2_3 li:last-child a').blur(function(){
		isOver112=false;
		setTimeout(goHide3,200);
	});




// ********4444****************************



$('.openAll4').mouseover(function(){
		$('.gnb_depth2_4').fadeIn('fast');
		isOver1111=true;
	});

	$('.openAll4').focus(function(){
		$('.gnb_depth2_4').fadeIn('fast');
	});


	$('.openAll4').mouseout(function(){
		isOver1111=false;
		setTimeout(goHide4,200);
	});

	$('.openAll4').blur(function(){
		isOver1111=false;
		setTimeout(goHide4,200);
	});


// ***********

	$('.gnb_depth2_4').mouseover(function(){
		isOver1112=true;
	});

	$('.gnb_depth2_4 li a').focus(function(){
		isOver1112=true;
	})


	$('.gnb_depth2_4').mouseout(function(){
		isOver1112=false;
		setTimeout(goHide4,200);
	});

	$('.gnb_depth2_4 li:last-child a').blur(function(){
		isOver1112=false;
		setTimeout(goHide4,200);
	});



});
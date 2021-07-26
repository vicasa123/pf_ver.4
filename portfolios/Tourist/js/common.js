
var isOver1=false;
var isOver2=false;

var isOver11=false;
var isOver12=false;


var isOver111=false;	//상품투어 아웃상태
var isOver112=false;	//프로그램 소개외 아웃상태


var isOver1111=false;	//티켓/가이드
var isOver1112=false;	//항공 호텔

//여행정보 //국내, 해외
function goHide1(){
	// 여행정보 mouseout 국내 mouseout 이면 fade Out 해라
	if (!isOver1 && !isOver2) {
		$('.gnb_depth2_1').fadeOut('fast');
	}
}
// 고객센터  //공지사항, 문의하기
function goHide2(){
	if (!isOver11 && !isOver12) {
		$('.gnb_depth2_2').fadeOut('fast');
	}
}

// 상품투어//	 프로그램소개, 여행자료
function goHide3(){
	if (!isOver111 && !isOver112) {
		$('.gnb_depth2_3').fadeOut('fast');
	}
}


//티켓/가이드 항공,호텔
function goHide4(){
	if (!isOver1111 && !isOver1112) {
		$('.gnb_depth2_4').fadeOut('fast');
	}
}



$(document).ready(function(){
	// top버튼 제어
	if ($(window).scrollTop()<50) {
	$('.to_top').addClass('hide');
	}else{$('.to_top').removeClass('hide');}

	// 스크롤이 움직일때마다 제어
	$(window).scroll(function(){
		// if ($(document).scrollTop()<50){
		if ($(window).scrollTop()<50){
			$('.to_top').addClass('hide');
		}else{$('.to_top').removeClass('hide');}
	});


	// 네비게이션
	
	// 1레벨 여행정보
	$('.openAll1').mouseover(function(){
		// parseInt()
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_1').fadeIn('fast');
			isOver1 = true;
		}
	});
	$('.openAll4All1').focus(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_1').fadeIn('fast');
			isOver1 = true;
		}

	});
	$('.openAll1').mouseout(function(){
		isOver1=false;
		// ******
		// setTimeout(goHide1, 200);

		setTimeout("goHide1()", 200);
		// setTimeout(goHide1(), 200);
		
		// goHide1();

		// *********
		// $('.gnb_depth2_1').fadeOut('fast');
	});

	$(".openAll1").blur(function(){
		isOver1=false;
		setTimeout(goHide1,200);
		// goHide1();
	});


// 레벨2 국내 해외
	$('.gnb_depth2_1').mouseover(function(){
		isOver2=true;
	});
	$('.gnb_depth2_1 li a').focus(function(){
		isOver2=true;
	});
	$('.gnb_depth2_1').mouseout(function(){
		isOver2=false;
		// setTimeout(goHide1,200);
		setTimeout("goHide1()",200);
		// setTimeout(goHide1(),200);
		// goHide1();
	});
	$('.gnb_depth2_1 li:last-child a').blur(function(){
	// $('.gnb_depth2_1').blur(function(){
		isOver2=false;
		setTimeout(goHide1,200);
	});


// ***********************************************************
	// 레벨1 고객센터
	$('.openAll2').mouseover(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_2').fadeIn('fast');
			isOver11 = true;
		}
	
	});
	$('.openAll2').focus(function(){
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_2').fadeIn('fast');
			isOver11 = true;
		}
	});

	// 레벨1 고객센터
	$('.openAll2').mouseout(function(){
		// 레벨2의 공지사항, 문의하기 사라짐
		// 공지사항, 문의하기에 마우스가 오버된 경우에는 사라지지 않도록 해야함=>상태(오버된 경우:true, 아웃된 경우는 false) 에 대한 값을 조건으로 제어함.
		isOver11=false;
		// setTimeout( goHide2, 200);
		setTimeout( goHide2, 200);
		// isOver2=false;

		// setTimeout(function(){ $('.gnb_depth2_2').fadeOut('fast'); }, 200);

		// setTimeout(function(){ alert("Hello"); }, 3000);
		// $('.gnb_depth2_2').fadeOut('fast');
	});

	$('.openAll2').blur(function(){
		isOver11=false;
		// setTimeout( goHide2, 200);
	});


	// 레벨2 공지사항 문의하기
	$('.gnb_depth2_2').mouseover(function(){
		isOver12=true;
		// isOver11=true;

	});
	$('.gnb_depth2_2').focus(function(){
		isOver12=true;
		// isOver11=true;

	});
	$('.gnb_depth2_2').mouseout(function(){
		// 레벨2의 공지사항, 문의하기 사라짐
		// 공지사항, 문의하기에 마우스가 오버된 경우에는 사라지지 않도록 해야함=>상태(오버된 경우:true, 아웃된 경우는 false) 에 대한 값을 조건으로 제어함.
		isOver12=false;
		setTimeout( goHide2, 200);
	});
	$('.gnb_depth2_2 li:last-child a').blur(function(){
	// $('.gnb_depth2_2 li:last-child').blur(function(){
		isOver12=false;
		setTimeout( goHide2, 200);
	});





// ************************************************************
	// 레벨1 상품투어
	$('.openAll3').mouseover(function(){
	
		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_3').fadeIn('fast');
			isOver111 = true;
		}


	});
	$('.openAll3').mouseout(function(){
		isOver111=false;
		setTimeout(goHide3,200);
	});

	$('.openAll3').focus(function(){
	if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_3').fadeIn('fast');
			isOver111 = true;
		}
	});
	$('.openAll3').blur(function(){
		isOver111=false;
		
	});


	// 레벨2 프로그램, 여행자료
	$('.gnb_depth2_3').mouseover(function(){
		isOver112=true;
	});
	$('.gnb_depth2_3').mouseout(function(){
		isOver112=false;
		setTimeout(goHide3,200);
	});

	$('.gnb_depth2_3').focus(function(){
		isOver112=true;
	});
	$('.gnb_depth2_3 li:last-child a').blur(function(){
		isOver112=false;
		setTimeout(goHide3,200);
	});



// *****************************************************************
	// 레벨1 티켓/가이드
	$('.openAll4').mouseover(function(){

		if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_4').fadeIn('fast');
			isOver1111 = true;
		}
	});
	$('.openAll4').mouseout(function(){
		isOver1111=false;
		setTimeout(goHide4,200);
	});

	$('.openAll4').focus(function(){
	if(parseInt($('header').css('width'))>800){
			$('.gnb_depth2_4').fadeIn('fast');
			isOver1111 = true;
		}
	});
	$('.openAll4').blur(function(){
		isOver1111=false;
	});

	//레벨2 항공, 호텔
	$('.gnb_depth2_4').mouseover(function(){
		$('.gnb_depth2_4').fadeIn('fast');
		isOver1111=true;
	});
	$('.gnb_depth2_4').mouseout(function(){
		isOver1112=false;
		setTimeout(goHide4,200);
	});

	$('.gnb_depth2_4').focus(function(){
		$('.gnb_depth2_4').fadeIn('fast');
		isOver1111=true;
	});
	$('.gnb_depth2_4 li:last-child a').blur(function(){
		isOver1112=false;
		setTimeout(goHide4,200);
	});


	$('.openMOgnb').click(function(){
		$('header').addClass('on');

		$('.header_cont').slideDown('fast');

		$('header .header_area .header_cont .closePop').show();
	});

	$('header .header_cont .closePop').click(function(){
		$('.header_cont').slideUp('fast');
		$('header').removeClass('on');


	});




});












// program.html
// 프로그램 소개-더보기 접기 동작
$(document).ready(function(){
	$('.program_list li .btn_more a').click(function(){
		if ($(this).parent().parent().find('.subtxt').css('display')=='none'){

		$(this).parent().parent().find('.subtxt').css({'display':'inline'});

		$(this).text('접기');
		}else{$(this).parent().parent().find('.subtxt').css({'display':'none'});

		$(this).text('더보기');

		}
	});
});
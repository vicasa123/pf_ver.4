
var isOver1=false;
var isOver2=false;

var isOver11=false;
var isOver12=false;

var isOver111=false;    //상품투어 아웃상태
var isOver112=false;	//프로그램 소개외 아웃상태

// 여해정보 국내, 해외
function goHide1(){
	// 여행정보 mouseout  국내 mouseout 이면 fade out 하라
	if(!isOver1 && !isOver2){
		$('.gnb_depth2_1').fadeOut('fast');
}
}
// 고객센터 공지사항, 문의하기
function goHide2(){
	if(!isOver11 && !isOver12){
	$('.gnb_depth2_2').fadeOut('fast');
}
}
// 상품투어 프로그램소개, 여행자료
function goHide3(){
	if(!isOver111 && !isOver112){
	$('.gnb_depth2_3').fadeOut('fast');
}
}


$(document).ready(function(){
	// 네비게이션
	// 여행정보
	$('.openAll1').mouseover(function(){
		$('.gnb_depth2_1').fadeIn('fast');
		isOver1=true;
		// console.log(isOver1);//true
	});

	$('.openAll1').focus(function(){
		$('.gnb_depth2_1').fadeIn('fast');
	});


	$('.openAll1').mouseout(function(){
		isOver1=false;
		// ********
		// setTimeout(goHide1,200);
		setTimeout(goHide1,200);
		// goHide1();
		// $('.gnb_depth2_1').fadeOut('fast');
	});

	$('.openAll1').blur(function(){
		isOver1=false;
		setTimeout(goHide1,200);
	});




// 레벨2
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





	// 레벨1 고객센터
	$('.openAll2').mouseover(function(){
		$('.gnb_depth2_2').fadeIn('fast');
		isOver11=true;
	});

	// 레벨1 고객센터
	$('.openAll2').mouseout(function(){
		// 레벨2의 공지사항, 문의하기 사라짐
		// 공지사항, 문의하기에 마우스가 오버된경우에는 사라지지 않도록 해야함=>상태(오버된 경우:true, 아웃된 경우는 false)에 대한 값을 조건으로 제어함
		isOver11=false;
		// setTimeout(goHide2,200);
		setTimeout(goHide2,200);
		// isOver2=false;


		// $('.gnb_depth2_2').fadeOut('fast');
		// setTimeout(function(){
		// 	$('.gnb_depth2_2').fadeOut('fast');
		// },200);

	});
	// 레벨2 공지사항 문의하기
	$('.gnb_depth2_2').mouseover(function(){
		isOver12=true;
	});


	$('.gnb_depth2_2').mouseout(function(){
		isOver12=false;
		setTimeout(goHide2,200);
	});


// ************************



});
$(document).ready(function(){
	// 이미지 슬라이딩
	var container = $('.slideshow');
	var slideGroup = container.find('.slideshow-slides');
	var slides = slideGroup.find('.slide');

	var nav = container.find('.slideshow-nav');
	var indicator = container.find('.slideshow-indicator');

	var slideCount = slides.length;//4

	var interval=7500;
	var duration=500;
	var currentIndex=0;
	var timer;

	slides.eq(0).css({left:'0%'});
	slides.eq(1).css({left:'100%'});
	slides.eq(2).css({left:'200%'});
	slides.eq(3).css({left:'300%'});


	function gotoslide(index){
		// 첫번째:0, 두번째:-100, 세번째:-200, 네번째:-300
		slideGroup.animate({left:index*-100+'%'},duration);
		currentIndex = index;
		updateNav();
	}
	// prev버튼 보이기 & next버튼 보이기 & indicator 상태 보이기
	function updateNav(){
		if(currentIndex == 0){
			nav.find('.prev').addClass('disabled');
		}else{nav.find('.prev').removeClass('disabled');}

		if(currentIndex == slideCount-1){
			nav.find('.next').addClass('disabled');
		}else{nav.find('.next').removeClass('disabled');}

		indicator.find('a').removeClass('active').eq(currentIndex).addClass('active');
	}
	// prev버튼 gotoslide함수 호출
	nav.on('click','a',function(){
		if ($(this).hasClass('prev')) {
			gotoslide(currentIndex-1);
		}else{
			gotoslide(currentIndex+1);
		}
	});

	// 이미지 상태 버튼 gotoslide함수 호출
	indicator.on('click','a',function(){
		if (!$(this).hasClass('active')) {
			gotoslide($(this).index());
		}
	});


	// 7.5초마다 호출하여 이미지 슬라이딩 gotoslide함수 호출
	function startTimer(){
		timer=setInterval(function(){
		// var timer=setInterval(function(){
			// gotoslide(currentIndex+1);
			var nextIndex = (currentIndex+1)%slideCount; 
			gotoslide(nextIndex);
		},interval);
	}


	function stopTimer(){
		clearInterval(timer);
	}



	// 마우스가 프레임 영역으로 진입했을때 setInterval정지

	// 마우스가 프레임 영역을 벗어났을때 setInterval시작
	container.on({
		mouseenter:stopTimer,
		mouseleave:startTimer
	});

	startTimer();

	$('#bluebutton').click(function(){
		$('.bottom_sub').slideToggle();
	});



});
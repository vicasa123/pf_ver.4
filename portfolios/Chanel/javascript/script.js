$(document).ready(function(){ 


	var ht=$(window).height();
	$('section').height(ht);

	$(window).on('resize',function(){

		var ht=$(window).height();
		$('section').height(ht);

	});

	$('section').on('mousemove',function(e){

		var posX=e.pageX;
		var posY=e.pageY;
		// console.log(posX);

		// 윈도우의 height 값이 섹션에 적용돼야함
		
		$('.p11').css({
			'bottom':20-(posY/30),
			'right':20-(posX/30)
		});

		$('.p12').css({
			'top':20-(posY/20),
			'right':20-(posX/20)
		});

		$('.p13').css({
			'top':20-(posY/20),
			'right':20-(posX/20)
		});

		$('.p21').css({
			'bottom':20-(posY/30),
			'right':20-(posX/30)
		});

		$('.p22').css({
			'top':20-(posY/20),
			'right':20-(posX/20)
		});

		$('.p23').css({
			'top':20-(posY/20),
			'right':20-(posX/20)
		});

		$('.p31').css({
			'bottom':20-(posY/30),
			'right':20-(posX/30)
		});

		$('.p32').css({
			'top':20-(posY/20),
			'right':20-(posX/20)
		});

		$('.p33').css({
			'top':20-(posY/20),
			'right':20-(posX/20)
		});

		$('.p41').css({
			'bottom':20-(posY/30),
			'right':20-(posX/30)
		});

		$('.p42').css({
			'top':20-(posY/20),
			'right':20-(posX/20)
		});

		$('.p43').css({
			'top':20-(posY/20),
			'right':20-(posX/20)
		});
	});

	$('.menu li').on('click',function(){
		
		var i =$(this).index();
		var ht=$(window).height();
		// console.log(ht);

		// 주석을 푸니까 메뉴 선택시 리사이즈가 제대로됨
		var nowTop=i*ht; 
		// var nowTop=i*1000; 


		$('html').animate({'scrollTop':nowTop},1400);
		// $('#wrap').animate({'scrollTop':nowTop},1400);

	});


	$('section').on('mousewheel',function(event,delta){
		// ****
		// 마우스휠을 위로 올리면 델타값+, 아래로 내리면 -
		if(delta>0){
			var prev=$(this).prev().offset().top;
			$('html').stop().animate({'scrollTop':prev},1400,'easeOutBounce');
		} else if(delta<0){
			var next=$(this).next().offset().top;
			$('html').stop().animate({'scrollTop':next},1400,'easeOutBounce');
		}
		
	});

	// 스크롤 탑이 바뀔때마다 네비가 따라서 바뀜
	$(window).on('scroll',function(){
		var ht=$(window).height();
		var scroll=$(window).scrollTop();
		// ******
		// if(scroll>=0*ht && scroll<ht){
		// 	$('.menu li').removeClass('on');

		// 	$('.menu li').eq(0).addClass('on');
  //   	}
  //   	else if(scroll>=1*ht && scroll<2*ht){
  //   		$('.menu li').removeClass('on');
		// 	$('.menu li').eq(1).addClass('on');
		// }
		// else if(scroll>=2*ht && scroll<3*ht){
		// 	$('.menu li').removeClass('on');
		// 	$('.menu li').eq(2).addClass('on');
		// }
		// else if(scroll>=3*ht && scroll<4*ht){
		// 	$('.menu li').removeClass('on');
		// 	$('.menu li').eq(3).addClass('on');
		// }

		for(var i=0; i<5; i++){
			
			if (scroll>=i*ht && scroll<(i+1)*ht){
			$('.menu li').removeClass('on');
			$('.menu li').eq(i).addClass('on');

		}
		}

	});


});
$(document).ready(function(){                
	$('.navi>li').mouseover(function(){
		$('.submenu').stop().slideDown();
		$('.top_btbox').stop().slideDown();
		$('.top_topbox').css({'backgroundColor':'#fff'});
		$('.top_topbox').css({'borderBottom':'1px solid #ccc'});
		$('.top_btbox').css({'borderBottom':'1px solid #ccc'});
		$('.top_topbox').addClass('on');
		$('.navi>li>a').css({'color':'#333'});
		$('.top_navi li>a').css({'color':'#333'});
		$('.logo img').attr({'src':'img/footerLogo.png'});
		$('.remote').css({'z-index':'2'});
		$('.spanwrap').css({'z-index':'3'});
	});

	$('.navi>li').mouseout(function(){
		$('.submenu').stop().slideUp();
		$('.top_btbox').stop().slideUp();
		$('.top_topbox').css({'background':'none'});
		$('.top_topbox').removeClass('on');
		$('.top_topbox').css({'borderBottom':'none'});
		$('.top_btbox').css({'borderBottom':'none'});
		$('.navi>li>a').css({'color':'#fff'});
		$('.top_navi li>a').css({'color':'#fff'});
		$('.logo img').attr({'src':'img/logo.png'});
		$('.remote').css({'z-index':'6'});
		$('.spanwrap').css({'z-index':'7'});
	});


	// 리모컨************************

	$('.remote').click(function(){
		$('.remote_on').stop().slideToggle(500);
	});
	
	
	var countNum=0;
	$('.remote').click(function(){
		$('.remote_txt').stop().slideToggle(500);
		 countNum++;
		 if (countNum%2==1) {openNav();}else{closeNav();}
		 if (countNum%2==0) {countNum=0;}
	});

	function openNav(){
		$('.spanwrap').children('span').eq(0).css({transform:'rotate(45deg)'
			,position:'absolute'
			,top:'7px',left:'25px',transition:'all 0.1s'});

		$('.spanwrap').children('span').eq(2).css({transform:'rotate(-45deg)'
			,position:'absolute'
			,top:'7px',left:'25px',transition:'all 0.1s'});

		$('.spanwrap').children('span').eq(1).css({
			display:'none',transition:'all 0.1s'});
	};

	function closeNav(){
		$('.spanwrap').children('span').eq(0).css({transform:'rotate(0deg)'
			,position:'absolute',top:'0px'
			,transition:'all 0.1s'});

		$('.spanwrap').children('span').eq(2).css({transform:'rotate(0deg)'
			,position:'absolute',top:'15px'
			,transition:'all 0.1s'});

		$('.spanwrap').children('span').eq(1).css({position:'absolute',top:'7px',left:'25px',
			display:'block',transition:'all 0.1s'});
	};


	


    $(window).scroll(function(){ 
        var rollIt = $(this).scrollTop() >= 110; 

    if(rollIt){ 
            $('.top_topbox').css({'backgroundColor':'rgba(0,0,0,0.3)','borderBottom':'1px solid #ccc'});
        }
        else{
            $('.top_topbox').css({'backgroundColor':'rgba(0,0,0,0)','borderBottom':'none'});
        }
    });

    // ***********오늘하루 그만보기
    
    	if ($.cookie('popup')=='none'){
	    	$('body').css("overflow", "scroll");
					$('#notice_wrap').hide();
					
					
				}

				var $expChk=$('#expiresChk');
				$('.closeBtn').on('click',closePop);
				function closePop(){
					if ($expChk.is(':checked')) {
						$.cookie('popup','none',{expires:1,path:'/'});
					}
					$('#notice_wrap').fadeOut('fast');
				}



			
			
    
// *****************

$('.roll_left').click(function(){
		// *************
		$('.sub_frame li').eq(0).insertAfter('.sub_frame li:last-child');
	});


	$('.roll_right').click(function(){
		// *************
		$('.sub_frame li').eq(-1).insertBefore('.sub_frame li:first-child');
	});

// 

// ************
var countNum=0;
$('.tsbox').click(function(){
	// $('.top_navi').css('display','block');
	$('.top2').stop().slideToggle();
	$('.top_navi2').stop().toggle();
	$('.menu2').stop().slideToggle();
	// $('.tspan').css('backgroundColor','#555');

		 countNum++;
		 if (countNum%2==1) {openNav();}else{closeNav();}
		 if (countNum%2==0) {countNum=0;}
});

	function openNav(){
		$('.tswrap').children('span').eq(0).css({transform:'rotate(45deg)'
			,position:'absolute'
			,top:'7px',left:'25px',transition:'all 0.1s'});

		$('.tswrap').children('span').eq(2).css({transform:'rotate(-45deg)'
			,position:'absolute'
			,top:'7px',left:'25px',transition:'all 0.1s'});

		$('.tswrap').children('span').eq(1).css({
			display:'none',transition:'all 0.1s'});
		
		$('.tspan').css('backgroundColor','#555');
	};

	function closeNav(){
		$('.tswrap').children('span').eq(0).css({transform:'rotate(0deg)'
			,position:'absolute',top:'0px'
			,transition:'all 0.1s'});

		$('.tswrap').children('span').eq(2).css({transform:'rotate(0deg)'
			,position:'absolute',top:'20px'
			,transition:'all 0.1s'});

		$('.tswrap').children('span').eq(1).css({position:'absolute',top:'10px',right:'10px', 
			display:'block',transition:'all 0.1s'});

			$('.tspan').css('backgroundColor','#fff');
	};

	$('.navi2>li').click(function(){
		$(this).find('.submenu2').stop().slideToggle();
	});

	// $('.navi2>li').mouseout(function(){
	// 	$(this).find('.submenu2').stop().slideUp();
	// });


	








});
$(document).ready(function(){
	$('.menu>ul>li').mouseover(function(){
		$(this).css({'flex': '2'});
	});
	$('.menu>ul>li').mouseout(function(){
		$(this).css({'flex': '1','color': '#fff'});
	});

	$('.menu>ul>li>a').mouseover(function(){
		$(this).css({'font-size':'1.2em',
  					 'font-weight': 'bold',
  					 'color': '#FF5533'})
	});

	$('.menu>ul>li>a').mouseout(function(){
		$(this).css({'font-size':'1em',
  					 'font-weight': 'normal',
  					 'color': '#fff'})
	});

	$('.container').vgrid({
			time:400,
			delay:30,
	});

	
  	$('.bookslide').slick({
     	dots: true,
	  	infinite: false,
	  	speed: 300,
	 	slidesToShow: 6,
	  	slidesToScroll: 6,
	 	responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		   
		  ]

		});
});
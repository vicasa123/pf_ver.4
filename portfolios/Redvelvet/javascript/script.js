 $(document).ready(function(){
 	var imgs='';

 	for(var i=0; i<41; i++){
 		imgs+='<img src="images/pic'+ i +'.jpg">';
 	}

 	$('section').html(imgs);

 	$('body').on('mousemove',function(e){
 		var posX=e.pageX;
 		var wid=$(window).width();
 		// 현재 포지션위치/ 창의 너비*이미지수
 		// ******
 		var percent=Math.floor((posX/wid)*41);
 		// ******
 		$('section>img').hide();
 		$('section>img').eq(percent).show();
 	});



 });
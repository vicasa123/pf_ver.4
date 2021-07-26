$(document).ready(function(){
	// 시간을 1초마다 읽어와야함
	// Date(), setInterval()
	// 시(변수) : 분(변수) : 초(변수)
	// text() : 문자 변경

	// 시간 표시의 자릿수가 한자리인 경우 십의자리에 '0'을 삽입해야 함.

	// 조건:자릿수가 한자리인 경우> if hr<10, if min<10, if sec<10
	// 결과:십의 자리에 '0'을 삽입> '0'+hr, '0'+min, '0'+sec

	// 테마(아침, 점심, 저녁, 밤) 버튼
	// 해당 버튼 클릭시 해당 이미지로 변경됨




	setInterval(function(){
		var now=new Date();
	// console.log(now);
	// setInterval(function(){

		var hr = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();

		// 시간 표시의 자릿수가 한자리인 경우
		// 0 1 2 3 4 5 6 7 8 9
		if (hr<10) {
			hr='0'+hr;
		}
		if (min<10) {
			min='0'+min;
		}
		if (sec<10) {
			sec='0'+sec;
		}

		$('figure p span').eq(0).text(hr);
		$('figure p span').eq(1).text(min);
		$('figure p span').eq(2).text(sec);

	},1000);

	// 때에 맞춰서 이미지가 바뀜
		var now=new Date();
		var hr = now.getHours();
	// 아침 06-11
	if(hr>5 && hr<12){
		$('#wrap').removeClass();
		$('#wrap').addClass('morning');
		$('nav li').removeClass();
		$('nav li').eq(0).addClass('on');
	}
	// 점심 12-17
	if(hr>11 && hr<18){
		$('#wrap').removeClass();
		$('#wrap').addClass('afternoon');
		$('nav li').removeClass();
		$('nav li').eq(1).addClass('on');
	}
	// 저녁 18-21
	if(hr>17 && hr<22){
		$('#wrap').removeClass();
		$('#wrap').addClass('evening');
		$('nav li').removeClass();
		$('nav li').eq(2).addClass('on');
	}
	// 밤	22-24,00-05
	if(hr>21 && hr<25){
		$('#wrap').removeClass();
		$('#wrap').addClass('night');
		$('nav li').removeClass();
		$('nav li').eq(3).addClass('on');
	}
	if(hr>=0 && hr<6){
		$('#wrap').removeClass();
		$('#wrap').addClass('night');
		$('nav li').removeClass();
		$('nav li').eq(3).addClass('on');
	}


	// 테마(아침, 점심, 저녁, 밤) 버튼
	// 해당 버튼 클릭시 해당 이미지로 변경됨
	$('nav li').on('click',function(){
		// 해당 버튼의 텍스트를 읽어와서 클래스에 반영함
		var className= $(this).children('a').text();

		$('#wrap').removeClass();
		$('#wrap').addClass(className);

		$('nav li').removeClass();
		$(this).addClass('on');
	});


});
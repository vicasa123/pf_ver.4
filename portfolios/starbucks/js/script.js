$(document).ready(function(){
    $('.nav>ul>li').mouseover(function(){
        $(this).find('.subnavi').stop().slideDown();
    });
    $('.nav>ul>li').mouseout(function(){
        $(this).find('.subnavi').stop().slideUp();
    });

    $('.mb_menulist>ul>li').click(function(){
        $(this).find('.mb_submenu').stop().slideToggle();
        $(this).find('.sd_button').toggleClass('on');
    });

    $('.xbutton').click(function(){
        $('.mb_menu').animate({left:'100%'});
    });
    
    $('.burger').click(function(){
        $('.mb_menu').css('display','block');
        $('.mb_menu').animate({left:'0'});
    });

    // *********************************************

    var currentList=0;
    var ListLength = $('.int_notice>ul>li').length;
    var positionList;

    setInterval(function(){
        if (currentList<ListLength-1) {
            currentList++;
        }else{
            currentList=0;
        }
        positionList = currentList*(-60)+'px';
        $('.int_notice>ul').animate({top:positionList});

    },3000);

    // ********************************************
    $(window).scroll(function(){
        const scrollTop = $(window).scrollTop()+$(window).height()/2;
        console.log(parseInt(scrollTop));

        if(scrollTop>$('.art4_left').offset().top){
            $('.art4_left').addClass('show');
        }
        if(scrollTop>$('.art4_right').offset().top){
            $('.art4_right').addClass('show');
        }
        if(scrollTop>$('.art6_left').offset().top){
            $('.art6_left').addClass('show');
        }
        if(scrollTop>$('.art6_left img:nth-child(1)').offset().top){
            $('.art6_left').addClass('show');
        }
        if(scrollTop>$('.art6_left img:nth-child(2)').offset().top){
            $('.art6_left').addClass('show');
        }
        if(scrollTop>$('.art7_right').offset().top){
            $('.art7_right').addClass('show');
        }
        if(scrollTop>$('.art8_right').offset().top){
            $('.art8_right').addClass('show');
        }

    });
    // **********************************
    $('.pagenation>li').click(function(){
        $('.pagenation>li').removeClass('active');
        $(this).addClass('active');
    });
    // ************************************
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        arrows:true,
      });
    // **************************************
    $('.bt_arrow').click(function(){
        $('#article2_5').slideToggle();
        $(this).toggleClass('on');
    });

});
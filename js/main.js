'use strict'

$(document).ready(function () {

  $('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
    $('.header__link').click(function(){
      $('.header__burger,.header__menu').removeClass('active');
      $('body').removeClass('lock');
    });
	});
    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                let src_img = $(this).find('img').attr('src');
                $(this).css('backgroundImage', 'url("' + src_img + '"');
            }
        });
    }
    ibg();
    // end ibg

    // Прокрутка вверх
    $(window).scroll(function () {
        let scr_top = $(window).scrollTop();
        scr_top > 100 ? $('.js-up').fadeIn(300) : $('.js-up').fadeOut(300);
    });
    $('.js-up').click(function () {
        $('html, boud').animate({ scrollTop: 0 }, 300);
    });
    // end Прокрутка вверх

    // попап
    function disableScrolling(){
      var x=window.scrollX;
      var y=window.scrollY;
      window.onscroll=function(){window.scrollTo(x, y);};
    }
    
    function enableScrolling(){
        window.onscroll=function(){};
    }
    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');

        $.each($('.js-popup'), function (i, elem) {
            let index_popup = $(elem).attr('data-id-popup');
            index_btn_popup === index_popup ? $(elem).fadeIn(300) : $(elem).fadeOut(300);
            disableScrolling();
        });
    });

    function close_popup() {
        $('.js-popup').fadeOut(300);
        enableScrolling();
    }

    $('.js-popup__close').click(close_popup);

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
          {
            $('.js-popup').fadeOut(300);
            enableScrolling();
          }
    });
    // end попап
    

    //slider 
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive:[
          {
              breakpoint: 900,
              settings:{
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
      ]
      });
      
    //end slider

    //comment
    let col = $('.menu-ul').length;

    $('.menu-ul').each(function (e, elem) {
      let subLi = $(elem).find('.sub-li').length;
        $(elem).find('.count').text(subLi);
    });
    $(".show-comment").click(function (e) {
        e.preventDefault();
        e = $(this).closest('.menu-ul').find('.sub-menu__list');

        if (!e.is(':visible')) {
          // $('.sub-menu__list').slideUp();
          e.slideDown();
        }
        else {
          e.slideToggle();
        }
    });
    $(".answer").click(function (e, elem) {
      e.preventDefault();

      let wAnswer = '<div class="wrapper-answer"><form action=""><textarea name="" cols="30" rows="5" class="field-answer"></textarea><div class="wrapper-button-main"><a href="#" class="link-button">Отправить</a></div></form></div>';
      elem = $(this).find(".wrapper-answer");
      if (!elem.is('.wrapper-answer')) {
        e = $(this).append(wAnswer);
      }
      else {

      }
      
  });

    //end comment

    // input range start
  let range = document.getElementById("myRange");
  let output = document.getElementById("value");
  let outputOld = document.getElementById("value1");
  let field = document.getElementById('num1');

  output.innerHTML = range.value;

    range.addEventListener('input', function (e) {
      field.value = e.target.value; 
    });
    field.addEventListener('input', function (e) {
      range.value = e.target.value;
      output.innerHTML = range.value;
    });



  // Update the current range value (each time you drag the slider handle)
  range.oninput = function() {
      output.innerHTML = this.value;
      
      
      // let oldPrice = document.getElementsByClassName('old-price')[0].innerHTML;
      // console.log(oldPrice);
      // outputOld.innerHTML = +oldPrice+650;

      // outputOld.innerHTML = +oldPrice+650; 
  }
  

  
  let step = 100;
  let maxValue = 30000;

  function getRange(){
    let x = range.value;
    let y = x*step/maxValue;
    let color = 'linear-gradient(90deg, #8dcc4e '+ y +'%, #e1e1e1 ' + y + '%)';
    range.style.background = color;
  }
  getRange();
  range.addEventListener("mousemove", function(){
    getRange();
  })
  range.addEventListener("touchmove", function(){
    getRange();
  })
  // input range end
  function roundTo500(num) {
    return Math.round(num/500)*500;
}


  // ограничение на ввод
  $('#num1').change(function(){
		if (+$(this).attr('max') < $(this).val()) {
      $(this).val($(this).attr('max'));
      getRange();
    }
    if (+$(this).attr('min') > $(this).val()) {
      $(this).val($(this).attr('min'));
      getRange();
		}
  });
  $('#num1').change(function(){ // вешаем обработчик на все инпуты с атрибутом pack
    var val = ~~this.value || 0; // получаем значение
    var pack = 500; 
    if(val%pack != 0){
        this.value = roundTo500(this.value); 
        getRange();
    }
});
  // scroll anchor
  let heightHeader = $(".header").height()+40;
  let heightHeader1 = $(".header").height()+10;
  $('.header__list li a').click(function(){
    let element = $(this).attr('href');
    let dist = $(element).offset().top-heightHeader;

    $('html, body').animate({'scrollTop': dist}, 500);

    return false;
  })

  $('.section-main').css("padding-top", heightHeader1);

  // header Scroll
  let lastScroll = 0;
    

  $(window).on("scroll", function(){
    if ($(window).scrollTop() >= 50){
      let winScroll = $(window).scrollTop();
      console.log(winScroll);
      if (winScroll > lastScroll ) {
        $('.header').addClass('top');
      }
      else {
        $('.header').removeClass('top');
      }


      lastScroll = winScroll;
    }
  });

  

});









// toggle css position buttons

$(function() {

    let countButtons = $(".wrapper-button-main").length;
    let buttons = $(".buttons");
    if(countButtons > 1){
        buttons.css("justify-content", "center");
    }
    else{
        buttons.css("justify-content", "flex-start");
    }

})

//end toggle




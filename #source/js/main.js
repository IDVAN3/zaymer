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
    let $header = $(".header");
      $(window).on("scroll", function(){
        if ($(window).scrollTop() >= 2){
          $header.addClass('active');
        }
        else{
          $header.removeClass('active');
        }
      });
    //slider 
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
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
  let rangeDate = document.getElementById("rangeDate");
  let output = document.getElementById("value");
  let output1 = document.getElementById("value1");
  let output2 = document.getElementById("value2");
  let output3 = document.getElementById("value3");
  let field = document.getElementById('num1');
  let fieldDate = document.getElementById('num2');

  output.innerHTML = range.value;
  output1.innerHTML = range.value;
  output2.innerHTML = range.value; 
  output3.innerHTML = range.value; 

    range.addEventListener('input', function (e) {
      field.value = e.target.value;
    });
    field.addEventListener('input', function (e) {
      range.value = e.target.value;
      output.innerHTML = range.value; 
      output1.innerHTML = range.value; 
      output2.innerHTML = range.value; 
      output3.innerHTML = range.value; 
    });

    rangeDate.addEventListener('input', function (e) {
      fieldDate.value = e.target.value;
    });
    fieldDate.addEventListener('input', function (e) {
      rangeDate.value = e.target.value;
    });


  // Update the current range value (each time you drag the slider handle)
  range.oninput = function() {
      output.innerHTML = this.value;
      output1.innerHTML = this.value;
      output2.innerHTML = range.value; 
      output3.innerHTML = range.value; 
  }
  let date = new Date();
  date.setDate(date.getDate()+10);
  let optionsWeekday = {
    weekday: 'long',
  };
  let optionsDay = {
    day: 'numeric',
  };
  let optionsYear = {
    year: 'numeric',
  };

  let month = new Array(12);
  month[0]="Января";
  month[1]="Февраля";
  month[2]="Марта";
  month[3]="Апреля";
  month[4]="Мая";
  month[5]="Июня";
  month[6]="Июля";
  month[7]="Августа";
  month[8]="Сентября";
  month[9]="Октября";
  month[10]="Ноября";
  month[11]="Декабря";

let ivalueDate = 10;
date.setDate(date.getDate());
  $(".lend-day").text(date.toLocaleString("ru", optionsWeekday));
  $(".lend-date").text(date.toLocaleString("ru", optionsDay));
  $(".lend-month").text(month[date.getMonth()]);
  $(".lend-year").text(date.toLocaleString("ru", optionsYear));

  rangeDate.oninput = function() {
    
    if ( ivalueDate > this.value) 
    {
      date.setDate(date.getDate()-1);
      ivalueDate--;
    } else if ( ivalueDate < this.value)
    {
      date.setDate(date.getDate()+1);
      ivalueDate++;
    }
    else{
      date.setDate(date.getDate());
    }
     
      
      $(".lend-day").text(date.toLocaleString("ru", optionsWeekday));
      $(".lend-date").text(date.toLocaleString("ru", optionsDay));
      $(".lend-month").text(month[date.getMonth()]);
      $(".lend-year").text(date.toLocaleString("ru", optionsYear));
  }

  



  let maxValueDate = 14;
  let step = 100;
  let maxValue = 30000;

  function getrangeDateQuantity(){
    let x = fieldDate.value-7;
    rangeDate.value = fieldDate.value;
    let y = x*step/maxValueDate;
    let color = 'linear-gradient(90deg, #44cf65 '+ y +'%, #dce2e7 ' + y + '%)';
    rangeDate.style.background = color;
  }
  getrangeDateQuantity();
  rangeDate.addEventListener("mousemove", function(){
    getrangeDateQuantity();
  })
  rangeDate.addEventListener("touchmove", function(){
    getrangeDateQuantity();
  })

  function getRangeQuantity(){
    let x = field.value;
    range.value = field.value;
    let y = x*step/maxValue;
    let color = 'linear-gradient(90deg, #44cf65 '+ y +'%, #dce2e7 ' + y + '%)';
    range.style.background = color;
  }
  function getRange(){
    let x = range.value;
    let y = x*step/maxValue;
    let color = 'linear-gradient(90deg, #44cf65 '+ y +'%, #dce2e7 ' + y + '%)';
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
  function roundTo100(num) {
    return Math.round(num/100)*100;
}
$(function() {
  
    (function quantityProducts() {
      let $quantityArrowMinus = $(".quantity-arrow-minus");
      let $quantityArrowPlus = $(".quantity-arrow-plus");
      let $quantityNum = $(".quantity-num");

      
      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);
    
      function quantityMinus() {
        if ($quantityNum.val() > 100) {
            $quantityNum.val(+$quantityNum.val() - 100);
          output.innerHTML = field.value;
          output1.innerHTML = field.value;
          output2.innerHTML = field.value; 
          output3.innerHTML = field.value; 
          getRangeQuantity();
        }
      }
    
      function quantityPlus() {
        if ($quantityNum.val() < 30000) {
            $quantityNum.val(+$quantityNum.val() + 100);
            output.innerHTML = field.value;
            output1.innerHTML = field.value;
            output2.innerHTML = field.value; 
            output3.innerHTML = field.value; 
            getRangeQuantity();
        }
      }
    })();
    
    (function quantityDate() {
      let $quantityArrowMinus = $(".minus-date");
      let $quantityArrowPlus = $(".plus-date");
      let $quantityNum = $(".quantity-date");
    
      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);
    
      function quantityMinus() {
        if ($quantityNum.val() > 0) {
            $quantityNum.val(+$quantityNum.val() - 1);
            fieldDate.innerHTML = fieldDate.value;
            getrangeDateQuantity();
            
            if ( ivalueDate > fieldDate.value) 
            {
              date.setDate(date.getDate()-1);
              ivalueDate--;
            } else if ( ivalueDate < fieldDate.value)
            {
              date.setDate(date.getDate()+1);
              ivalueDate++;
            }
            else{
              date.setDate(date.getDate());
            }        
              $(".lend-day").text(date.toLocaleString("ru", optionsWeekday));
              $(".lend-date").text(date.toLocaleString("ru", optionsDay));
              $(".lend-month").text(month[date.getMonth()]);
              $(".lend-year").text(date.toLocaleString("ru", optionsYear));
        }
      }
    
      function quantityPlus() {
        if ($quantityNum.val() < 21) {
            $quantityNum.val(+$quantityNum.val() + 1);
            fieldDate.innerHTML = fieldDate.value;
            getrangeDateQuantity();

            if ( ivalueDate > fieldDate.value) 
            {
              date.setDate(date.getDate()-1);
              ivalueDate--;
            } else if ( ivalueDate < fieldDate.value)
            {
              date.setDate(date.getDate()+1);
              ivalueDate++;
            }
            else{
              date.setDate(date.getDate());
            }        
              $(".lend-day").text(date.toLocaleString("ru", optionsWeekday));
              $(".lend-date").text(date.toLocaleString("ru", optionsDay));
              $(".lend-month").text(month[date.getMonth()]);
              $(".lend-year").text(date.toLocaleString("ru", optionsYear));
        }
      }
    })();
  });

  // ограничение на ввод
  $('#num2').change(function(){
		if (+$(this).attr('max') < $(this).val()) {
      $(this).val($(this).attr('max'));
      getrangeDateQuantity();
      
    }
    if (+$(this).attr('min') > $(this).val()) {
      $(this).val($(this).attr('min'));
      getrangeDateQuantity();
		}
  });
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
  $('#num2').change(function(){
    getrangeDateQuantity();
  });
  $('#num1').change(function(){ // вешаем обработчик на все инпуты с атрибутом pack
    var val = ~~this.value || 0; // получаем значение
    var pack = 100; 
    if(val%pack != 0){
        this.value = roundTo100(this.value); 
        getRange();
    }
});
  // scroll anchor
  let heightHeader = $(".header").height()+40;
  $('.header__list li a').click(function(){
    let element = $(this).attr('href');
    let dist = $(element).offset().top-heightHeader;

    $('html, body').animate({'scrollTop': dist}, 500);

    return false;
  })
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




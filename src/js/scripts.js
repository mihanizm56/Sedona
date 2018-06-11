
$(document).ready(function() {
    var constant = [0,0,0,0];

    $('.like-hand').each(function(index){
      $(this).on('click',function(event) {
        event.preventDefault();
        var lov = $('.hand-value'),
            handSvg = $('.like');
        clickLike(handSvg,lov,index,constant);
      })
    }); 

    $('#interest-three').on('click',function(event){
      event.preventDefault();
      alert('Здорово, что вы заинтересовались!\nНо этот сайт предназначен лишь для демострации моих способностей вёрстки сайтов!\nЕсли вы хотите, чтобы я сделал вам такой же - пишите на почту m727507.56@mail.ru\nлибо кликайте по ссылке "Моя Страница" и пишите мне в вк!');
    });

    $('#sendReview').on('click',function(event){
      event.preventDefault();
      var name = $('#text1').val(),
          surname = $('#text2').val(),
          thirdname = $('#text3').val(),
          phoneNumber = $('#phoneNumber').val(),
          errorMessage = $('#errorNumber'),
          email = $('#emailNumber').val(),
          errorEmail = $('#errorEmail'),
          comment = $('#overview').val(),
          mainForm = $('#mainForm');

      formCheck(name,surname,thirdname,phoneNumber,errorMessage,email,errorEmail,comment,mainForm);
    });

  if ($(window).width() <= '550') {
    var cross = $('#cross'),
        menuLi = $("li[name='needHide']"),
        header = $('header'),
        smallMenu = $('#smallMenu');

      checkMenu(cross,menuLi,header,smallMenu)

      smallMenu.on('click', function(){
        menuWork(header,menuLi,cross,smallMenu)
      })

      cross.on('click', function(){
        crossWork(cross,smallMenu,menuLi,header);
      })
  }  

  $(window).on('resize', function(){
      var cross = $('#cross'),
          menuLi = $("li[name='needHide']"),
          header = $('header'),
          smallMenu = $('#smallMenu');

        checkMenu(cross,menuLi,header,smallMenu)

        smallMenu.on('click', function(){
          menuWork(header,menuLi,cross,smallMenu)
        })

        cross.on('click', function(){
          crossWork(cross,smallMenu,menuLi,header);
        })
  });

if ($(window).width() >= '650'){
  $("#photoMiniOne").on('click', function(){
    showPic($('.modal-content'),$('.modal-block'),'img/photoOne.jpg')
  })

  $("#photoMiniTwo").on('click', function(){
    showPic($('.modal-content'),$('.modal-block'),'img/photoTwo.jpg')
  })

  $("#photoMiniThree").on('click', function(){
    showPic($('.modal-content'),$('.modal-block'),'img/photoThree.jpg')
  })

  $('.close-modal').on('click', function(){
    hideBlock($('.modal-block'))
  })

  $('.modal-block').on('click', function(){
    hideBlock($('.modal-block'))
  })
}





})

function showPic(a,b,c) {
      a.attr('src', c);
      b.slideDown(500);
      return
};

function hideBlock(a) {
      a.hide(600);
      return
};

function checkMenu(a,b,c,d) {
  if ($(window).width() <= '550') {
      a.hide();
      b.hide();
      c.css('height','0');
      d.show();
    }
    else{
      c.css('height','55px')
      b.show()
      a.hide()
      d.hide()
    }
    return
};

function menuWork(a,b,c,d) {
      a.css('height','285px')
      b.slideDown(500);
      c.show()
      d.hide()
  return      
};

function crossWork(a,b,c,d){
      a.hide();
      b.show();
      c.slideUp(500);
      d.css('height','0');
    return    
};

function formCheck(a,b,c,d,e,f,g,h,i){
      var messageAbout = '',
          validName = /^[а-яёa-z]+$/iu.test(a);
            if(!validName){
              messageAbout +='  Имени'
            }

      var    validSurname = /^[а-яёa-z]+$/iu.test(b);
            if(!validSurname){
              messageAbout +='  Фамилии'
            }

      var    validThirdname = /^[а-яёa-z]+$/iu.test(c);
            if(!validThirdname){
              messageAbout +='  Отчества'
            }

      var    validPhoneNumber = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?/.test(d);         
            if(!validPhoneNumber){
              messageAbout +='  Номера телефона'
              e.show()
            }
            else{
              e.hide()
            }

      var    validEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(f);         
            if(!validEmail){
              messageAbout +='  адреса E-mail'
              g.show()
            }
            else{
              g.hide()
            }

      var    validComment = /^[а-яё0-9a-z]+$/iu.test(h);
            if(!validComment){
              messageAbout +='  Отзыва'
            }

      var validReview = validName&&validSurname&&validThirdname&&validPhoneNumber&&validEmail&&validComment;
          if (validReview) {
            alert('Ваш отзыв был бы успешно отправлен!\n\n\nНо этот сайт предназначен лишь для демострации моих способностей вёрстки сайтов!\nЕсли вы хотите, чтобы я сделал вам такой же - пишите на почту m727507.56@mail.ru\nлибо кликайте по ссылке "Моя Страница" и пишите мне в социальную сеть "ВКонтакте"!')
            formSend(i);
          }
          else {
            alert('Проверьте правильность:'+messageAbout+'\n\n\n\n\n\nВ случае ошибки в поле отзыва - проверьте, чтобы ваш отзыв не начинался с пробела!')
            console.log('nope')
          }
          return
};




function clickLike(a,b,c,d) {
  var x = b.eq(c).text()
  if (d[c]==0) {
    x++
    a.eq(c).css("fill", "red")
    d[c] = 1
    $('.hand-value').eq(c).text(x)
    if ($(window).width() >= '650'){
      alert('Здорово, что вам понравилась эта фотография!\nПолюбуйтесь на неё ещё разок!')
    }
    
  }
  else{
    x--
    a.eq(c).css("fill", "#a9a9a9")
    d[c] = 0
    $('.hand-value').eq(c).text(x)
    if ($(window).width() >= '650'){
      alert('Подумайте хорошенько!')
    }    
  }
  return
};

function formSend(form){
  form.submit();
  console.log('Form was sent')
  return false
};
// logic menu

$('.mobile-menu-icon').click(function(){
  $('nav.navigation').toggle();
});

$('.tablet-menu-icon').click(function(){
  $(this).toggleClass('tablet-menu-icon-active');
  $('nav.navigation').toggle();
});



$('.send-form').submit(function() {
      $.post($(this).attr('action'), $(this).serialize(), function(res) {         
     if (res.success == 1) {
         $('#rise').bPopup().close();
           $('#okthanks').bPopup({
             closeClass:'сlose',
                 amsl: 0
            });
           setTimeout(function(){$('#okthanks').bPopup().close();}, 3000);
       }else{
       alert(res.text);
       }
    }, 'json');
    return false;
  })


$(function () {

  $('#main-baner').responsiveSlides({
    auto: true,
    pager: true,
    nav: true,
    speed: 500,
    maxwidth: 5000,
    namespace: "centered-controls"
  });

  $('#meetings-banner').responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "meetings-banners"
  });


});
//nav
$(function(){
  $('.dropdown-toggle').on('click',function(){
    $(this).find('.js-aniToggle').toggleClass('rotate-180')
  })
  //checkoutPage
  $('#toggleCardBtn').on('click',function(){
    $(this).find('.material-icons').toggleClass('rotate-180')
  })
  $(window).resize(function(){
    if($('#toggleCard').is(':hidden')) $('#toggleCardBtn').trigger('click')
  })
});
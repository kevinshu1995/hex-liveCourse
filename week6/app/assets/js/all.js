//nav
$(function(){
  $('.dropdown-toggle').on('click',function(){
    $(this).find('.js-aniToggle').toggleClass('rotate-180')
  })
});
"use strict";

//nav
$(function () {
  $('.dropdown-toggle').on('click', function () {
    $(this).find('.js-aniToggle').toggleClass('rotate-180');
  });
  $('#js-toggle-show').hide(); //checkoutPage

  $('#toggleCard').on('show.bs.collapse', function () {
    $(this).siblings('#toggleCardBtn').find('.material-icons').removeClass('rotate-180');
    $('#js-toggle-show').hide();
  });
  $('#toggleCard').on('hide.bs.collapse', function () {
    $(this).siblings('#toggleCardBtn').find('.material-icons').addClass('rotate-180');
    $('#js-toggle-show').show();
  });
  $(window).resize(function () {
    if ($('#toggleCard').is(':hidden')) $('#toggleCardBtn').trigger('click');
  });
});
//# sourceMappingURL=all.js.map

$(function () {
  $('.bar').on('click', function () {
    $('.menu').toggleClass('js--menu-show')
  })
  let windowWidth = $(window).width();
  $(window).resize(function () {
    if (!$('.bar').is(':visible') && !$('.menu').css('js--menu-show')) {
      $('.menu').removeClass('js--menu-show')
    }
  })
  $('#tab').find('.tab-body').hide()
})
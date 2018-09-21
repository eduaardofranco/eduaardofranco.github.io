
$(document).ready(function() {
  var people = new Swiper ('.people-carousel', {
    freeMode: true,
    slidesPerView: 3
  });
  
  const menuAnchor = $('.menu-anchor');
  const body = $('body');
  const menu = $('.mobile-menu');
  const close = $('.mobile-menu .icon-close');

  $(menuAnchor).click(function() {
    $(body).addClass('hide');
    $(menu).addClass('show');

  });
  $(close).click(function() {
    $(body).removeClass('hide');
    $(menu).removeClass('show');

  });
  
});
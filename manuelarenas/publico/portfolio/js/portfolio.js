$(".menu_toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu_section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});

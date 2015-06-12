$(document).ready(function () {

  $('.description').fadeIn(1700);

  $('.ryu').mouseenter(function () {
    $('.ryu-still').hide();
    $('.ryu-ready').show();

    Mousetrap.bind('x', function () {
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }, 'keydown');

    Mousetrap.bind('x', function () {
      $('.ryu-cool').hide();
      $('.ryu-ready').show();
    }, 'keyup');
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();

    Mousetrap.bind('x', function () {
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }, 'keydown');

    Mousetrap.bind('x', function () {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }, 'keyup');
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '520px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
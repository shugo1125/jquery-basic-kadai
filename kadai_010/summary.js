$(function () {
  $('#change-color').on('click', function () {
    // id属性がtargetの要素のcolorプロパティをredにする
    $('#target').css('color', 'red');
  });

  $('#change-text').on('click', function () {
    // id属性がtargetの要素のcolorプロパティをredにする
    $('#target').text('Hello!');
  });


  $('#fade-out').on('click', function () {
    // フェードインする
    $('#target').fadeOut();
  });
  $('#fade-in').on('click', function () {
    // フェードインする
    $('#target').fadeIn();
  });
});
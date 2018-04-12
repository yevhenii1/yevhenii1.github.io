$('.profile-info__rename').click(function () {
  $('.modal-rename').addClass('modal-rename__show')
});
$('.modal-rename__cancel').click(function () {
  $('.modal-rename').removeClass('modal-rename__show')
});

$('.city').click(function () {
  $('.popup-city').addClass('popup-show')
});
$('.cityCancel').click(function () {
  $('.popup-city').removeClass('popup-show')
});

$('.namber').click(function () {
  $('.popup-namber').addClass('popup-show')
});
$('.namberCancel').click(function () {
  $('.popup-namber').removeClass('popup-show')
});

$('.site').click(function () {
  $('.popup-site').addClass('popup-show')
});
$('.siteCancel').click(function () {
  $('.popup-site').removeClass('popup-show')
});

$('.name').click(function () {
  $('.popup-name').addClass('popup-show')
});
$('.nameCancel').click(function () {
  $('.popup-name').removeClass('popup-show')
});

// Tabs //

$(function() {

  $('ul.main-nav__items').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs-content').removeClass('active').eq(i).addClass('active');
      });
    });
  });
})
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
  });
});

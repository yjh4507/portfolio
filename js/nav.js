$(function () {
    $(".btm_box_1").fadeIn();
    $('.btm_nav_ul>li:nth-of-type(1)').click(function () {
      $('li').removeClass("active");
      $(this).addClass("active");
      $(".btm_box_1").show();
      $(".btm_box_2").hide();
    });
    $('.btm_nav_ul>li:nth-of-type(2)').click(function () {
      $('li').removeClass("active");
      $(this).addClass("active");
      $(".btm_box_1").hide();
      $(".btm_box_2").show();
    });
  });
  
  
  
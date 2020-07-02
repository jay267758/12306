"use strict";

//baner-tab
$(".banner-tab .header h3").click(function () {
  var index = $(this).index(); // console.log(index)

  $(this).addClass("active").siblings().removeClass("active");
  $(".banner-tab .content h3").eq(index).addClass("show").siblings().removeClass("show");
}); //banner-tab con

$(".banner-tab .content .header1 h4").click(function () {
  var index = $(this).index(); // console.log(index)

  $(this).addClass("active").siblings().removeClass("active");
  $(".banner-tab .content .content1 h4").eq(index).addClass("con").siblings().removeClass("con");
}); //tab-wrap

$(".tab-wrap .tab .header h3").click(function () {
  var index = $(this).index(); // console.log(index)

  $(this).addClass("active").siblings().removeClass("active");
  $(".tab-wrap .tab .content h3").eq(index).addClass("show").siblings().removeClass("show");
});
/* 获取数据 */

$("#btn").click(function () {
  var go = $(".content1 .con .show1 .go").val();
  var out = $(".content1 .con .show1 .out").val();
  var temi = $(".content1 .con .show1 .temi").val(); // console.log(go,out,temi)

  $.ajax({
    url: "../php/personalCenter.php",
    type: "post",
    data: {
      arr: "add",
      go: go,
      out: out,
      temi: temi
    },
    success: function success(dat) {
      console.log(dat);
      var json = JSON.parse(dat); // console.log(json)

      if (json.err == 1) {
        // 添加数据成功
        alert(json.data);
      } else if (json.err == 0) {
        // 添加数据失败
        alert(json.data);
      }
    }
  });
});
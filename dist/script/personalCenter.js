"use strict";

$(".ul2 p").toggle(function () {
  //点击两次分别执行两次不同的函数
  $(".ul2_li").toggle(500);
  $(".ul2 p img").attr("src", "../imgs/personalCenter_06_06.jpg");
}, function () {
  $(".ul2_li").toggle(500);
  $(".ul2 p img").attr("src", "../imgs/personalCenter_06_03.jpg");
});
$(".ul5 p").toggle(function () {
  $(".ul5_li").toggle(500);
  $(".ul5 p img").attr("src", "../imgs/personalCenter_06_06.jpg");
}, function () {
  $(".ul5_li").toggle(500);
  $(".ul5 p img").attr("src", "../imgs/personalCenter_06_03.jpg");
});
$(".ul6 p").toggle(function () {
  $(".ul6_li").toggle(500);
  $(".ul6 p img").attr("src", "../imgs/personalCenter_06_06.jpg");
}, function () {
  $(".ul6_li").toggle(500);
  $(".ul6 p img").attr("src", "../imgs/personalCenter_06_03.jpg");
});
$(".ul7 p").toggle(function () {
  $(".ul7_li").toggle(500);
  $(".ul7 p img").attr("src", "../imgs/personalCenter_06_06.jpg");
}, function () {
  $(".ul7_li").toggle(500);
  $(".ul7 p img").attr("src", "../imgs/personalCenter_06_03.jpg");
});
$(".ul8 p").toggle(function () {
  $(".ul8_li").toggle(500);
  $(".ul8 p img").attr("src", "../imgs/personalCenter_06_06.jpg");
}, function () {
  $(".ul8_li").toggle(500);
  $(".ul8 p img").attr("src", "../imgs/personalCenter_06_03.jpg");
});
/* 获取cookie显示个人中心 */

var data = getCookie("Name");
$(".cookie").html(data + "<span>先生,您好！</span>");
/* 获取当前时间 */

var d = new Date();
var tiem = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
/* 个人中心 */

$(".con_bottom .con_left .p").click(function () {
  var index = $(this).index(); // console.log(index)

  $(this).addClass("active").siblings().removeClass("active");
  $(".con_bottom .div_p").eq(index).addClass("con_right").siblings().removeClass("con_right");
});
/* 订单中心 */

$(".con_bottom .con_left .ul2 .ul2_li dd").click(function () {
  var index = $(this).index();
  console.log(index);
  $(".con_bottom .div_p .con_right").css("display", "none");
  $(this).addClass("active").siblings().removeClass("active");
  $(".con_bottom .div_pp").eq(index).addClass("div_right").siblings().removeClass("div_right");
  $(".con_bottom .div_pp .div_right").css("display", "block");
});
/* 火车票订单 */

$(".con_bottom .div_right .header h3").click(function () {
  var index = $(this).index(); // console.log(index)

  $(this).addClass("active").siblings().removeClass("active");
  $(".con_bottom .div_right .content h3").eq(index).addClass("show").siblings().removeClass("show");
});
var add = document.querySelector(".historical");
/* 加载数据 */

window.onload = function () {
  ajax({
    url: "../php/personalCenter.php",
    type: "get",
    data: {
      arr: "ass"
    },
    success: function success(data) {
      console.log(data); // var json = JSON.parse(data)

      /* var att = `
      <div class="con">
      <div class="con_top1">
          <p class="temp">订票日期：<span>${tiem}</span></p>
          <h1>订单号：<span>EK64466658</span></h1>
      </div>
      <table class="table" border="1" style="border-collapse: collapse;">
          <tr>
              <td>${json}->${json} K4532<br>
                  <span>${json}&nbsp;&nbsp;</span><span>18:03开</span>
              </td>
              <td>${data}<br>
                  <span>中国居民身份证</span>
              </td>
              <td>
                  硬座<br>
                  <span>04车019号</span>
              </td>
              <td>
                  成人票<br>
                  <span>12.5元</span>
              </td>
              <td>
                  已出票
              </td>
          </tr>
      </table>
      <div class="dingdan">
          <h4>购/赠/退保险</h4>
          <h5>订单详情</h5>
      </div>
      </div>
      `
      add.appendChild(att)*/
    }
  });
};
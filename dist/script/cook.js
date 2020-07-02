"use strict";

/* 实现登录记录和退出登录 */

/* cookie */
var data = getCookie("Name");

if (!data) {
  //没有cookie显示登录和注册
  $("#cookie a").text("登录").attr("href", "../html/login.html");
  $("#registered a").text("注册").attr("href", "../html/registered.html");
} else if (data.length > 2) {
  //有cookie显示登录账号和退出账号 attr修改属性和属性值
  var dat = data.substring(0, 2) + "...";
  $("#cookie a").text("您好," + dat).attr("href", "../html/personalCenter.html");
  $("#registered a").text("退出").attr("href", "javascript:;");
  $("#registered a").click(function () {
    if (confirm("您确定要退出登录吗？")) {
      removeCookie("Name");
      removeCookie("Pass");
      location.reload([true]);
    }
  });
} else {
  $("#cookie a").text("您好," + data).attr("href", "../html/personalCenter.html");
  $("#registered a").text("退出").attr("href", "javascript:;");
  $("#registered a").click(function () {
    if (confirm("您确定要退出登录吗？")) {
      removeCookie("Name");
      removeCookie("Pass");
      location.reload([true]);
    }
  });
}
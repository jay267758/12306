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
/* 验证是否登录 然后是否跳转到个人中心 */

var data = getCookie("Name");
$(".logo-right .p3").click(function () {
  if (data) {
    location.href = "../html/personalCenter.html";
  } else {
    location.href = "../html/login.html";
  }
});
/* 获取数据 */

var btn = document.querySelector("#btn");
var go = document.querySelector(".go");
var out = document.querySelector(".out");
var temi = document.querySelector(".temi");

btn.onclick = function () {
  if (go.value == "" || out.value == "" || temi.value == "") {
    return alert("出发地,到达地和出发日期");
  }

  ajax({
    url: "../php/personalCenter.php",
    type: "get",
    data: {
      add: "add",
      go: go.value,
      out: out.value,
      temi: temi.value
    },
    success: function success(data) {
      console.log(data);
    }
  });
};
/* $("#btn").click(function(){
    var go = $(".content1 .con .show1 .go");
    var out = $(".content1 .con .show1 .out");
    var temi = $(".content1 .con .show1 .temi");

    $.ajax({
        url:"../php/personalCenter.php",
        type:"get",
        data:{
            arr:"arr",
            go:go.val(),
            out:out.val(),
            temi:temi.val()
        },
        success:function(data){
            console.log(data);
            var json = JSON.parse(dat);
            // console.log(json)
            if(json.err == 1){
                // 添加数据成功
                alert(json.data)
            }else if(json.err == 0){
                // 添加数据失败
                alert(json.data)
            }
        }
    })
}) */
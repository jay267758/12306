"use strict";

/* 正则判断 */
$(".input1").blur(function () {
  //失去焦点触发
  var reg = /^\D[\w]{5,29}$/;

  if (reg.test($(this).val())) {
    $(this).next().next().text("*").css("color", "green");
  } else {
    $(this).next().next().text("6~30为字母、非数字或_，字母开头").css("color", "red");
  }
});
$(".input2").blur(function () {
  //失去焦点触发
  var reg = /^[\w]{6,20}$/;

  if (reg.test($(this).val())) {
    $(this).next().next().text("*").css("color", "green");
  } else {
    $(this).next().next().text("6~20位字母、数字或字符").css("color", "red");
  }
});
$(".input3").blur(function () {
  //失去焦点触发
  if ($(this).val() === $(".input2").val()) {
    $(this).next().next().text("*").css("color", "green");
  } else {
    $(this).next().next().text("两次密码不一致").css("color", "red");
  }
});
$(".input4").blur(function () {
  //失去焦点触发
  var reg = /^\S[\u4E00-\u9FA5a-zA-z\s]{0,18}\S$/g;

  if (reg.test($(this).val())) {
    $(this).next().next().text("*").css("color", "green");
  } else {
    $(this).next().next().text("只能为汉字，字母，空格，不能为以空格开头和结尾").css("color", "red");
  }
});
$(".input5").blur(function () {
  //失去焦点触发
  var reg = /^\d{17}(\d|X)$/;

  if (reg.test($(this).val())) {
    $(this).next().next().text("*").css("color", "green");
  } else {
    $(this).next().next().text("请输入您的证件号码18位").css("color", "red");
  }
});
$(".input6").blur(function () {
  //失去焦点触发
  var reg = /^[123]\d{4,10}@[q]{2}\.com$/ig;

  if (reg.test($(this).val())) {
    $(this).next().next().text("*").css("color", "green");
  } else {
    $(this).next().next().text("请正确填写邮箱地址").css("color", "red");
  }
});
$(".input7").blur(function () {
  //失去焦点触发
  var reg = /^1[2356789][0-9]{9}/g;

  if (reg.test($(this).val())) {
    $(this).next().next().text("*").css("color", "green");
  } else {
    $(this).next().next().text("请输入您的手机号码").css("color", "red");
  }
});
/* 验证是否登录 */

var data = getCookie("Name");
$(".logo-right .p3").click(function () {
  if (data) {
    location.href = "../html/personalCenter.html";
  } else {
    location.href = "../html/login.html";
  }
});
/* 获取表单信息 */

/* var add = document.querySelector(".zc");
var user = document.querySelector(".user");
var pass = document.querySelector(".pass");
var pass2 = document.querySelector(".pass2");
var values = document.querySelectorAll("input"); */

/* if(pass.value != pass2.value){
    alert("两次密码不一致")
}else{
    // 注册
    add.onclick = function(){
        if(user.value == "" || pass.value == "" || pass2.value == ""){
            return alert("用户名或密码不能为空");
        }
        ajax({
            url:"../php/loginRegistered.php",
            type:"get",
            data:{
                btnn:"add",
                user:user.value,
                pass:pass.value
            },
            success:function(data){
                values.value = "";
                console.log(data);
                var json = JSON.parse(data);
                if(json.err == 0){
                    alert(json.msg);
                }else if(json.err == 1){
                    alert(json.msg);
                }else{
                    alert(json.msg);
                }
            }
        });
    }
} */

/* jquery方法 */

if ($(".pass").val() != $(".pass2").val()) {
  alert("两次密码不一致");
} else {
  // 注册
  $(".zc").click(function () {
    if ($(".user").val() == "" || $(".pass").val() == "" || $(".pass2").val() == "") {
      return alert("用户名或密码不能为空");
    }

    $.ajax({
      url: "../php/loginRegistered.php",
      type: "get",
      data: {
        btnn: "add",
        user: $(".user").val(),
        pass: $(".pass").val()
      },
      success: function success(data) {
        $("input").val(""); //清空

        console.log(data);
        var json = JSON.parse(data);

        if (json.err == 0) {
          alert(json.msg);
        } else if (json.err == 1) {
          alert(json.msg);
        } else {
          alert(json.msg);
        }
      }
    });
  });
}
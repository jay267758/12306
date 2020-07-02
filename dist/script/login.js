"use strict";

var user = document.querySelector(".user");
var pass = document.querySelector(".pass");
var login = document.querySelector(".login1");
var add = document.querySelector("#add");
var form = document.querySelector(".form");
var check = document.querySelector(".check"); // 如果cookie有，就获取cookie

if (getCookie("Name") && getCookie("Pass")) {
  user.value = getCookie("Name");
  pass.value = getCookie("Pass");
  check.checked = true;
} // 登录


login.onclick = function () {
  if (user.value == "" || pass.value == "") {
    return alert("用户名或密码不能为空");
  }

  ajax({
    url: "../php/loginRegistered.php",
    type: "get",
    data: {
      btnn: "login",
      user: user.value,
      pass: pass.value
    },
    success: function success(data) {
      var json = JSON.parse(data);
      console.log(json);

      if (json.err == -1) {
        alert(json.msg);
        location.href = "../html/index.html"; // 是否选中复选框

        if (!check.checked) {
          //未选中
          setCookie({
            key: "Name",
            val: user.value,
            days: 7
          });
          removeCookie("Pass");
        } else {
          // 选中
          setCookie({
            key: "Name",
            val: user.value,
            days: 7
          });
          setCookie({
            key: "Pass",
            val: pass.value,
            days: 7
          });
        }
      } else {
        alert(json.msg);
      }
    }
  });
};
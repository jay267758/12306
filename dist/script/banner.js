"use strict";

function banner(dom1, dom2, dom3, dom4) {
  //dom1:baner图片，dom2:豆豆，dom3：屏幕的宽
  var rod = 0; //图片的当前序号从0开始

  /* var banner = document.getElementsByClassName(dom1)
  var oLi = document.getElementsByClassName(dom2) */

  /* var left1 = document.getElementById("left")
  var right1 = document.getElementById("right") */

  var banner = dom1;
  var oLi = dom2;
  var myTimer; //isComplete 表示滑动效果是否执行完毕

  var isComplete = true; //每六秒换一张图片

  function autoPlay() {
    myTimer = setInterval(function () {
      //跳到下一张
      goImg(rod + 1);
    }, 6000);
  } // 2、点击豆豆换图片     
  // 其实goImg函数就是显示指定的图片(让一张出去，让另外一张进来)


  function goImg(tranOrd) {
    //点击豆豆和左右移动按钮时就会重新触发，不点就会按上面的函数执行。
    //解决用户多次点击豆豆发生闪动
    //如果切换的图片就是当前滚动到的图片，就不让它滚动。
    if (tranOrd == rod) {
      return;
    } //如果滑动效果没有执行完毕，就不会向下执行。


    if (isComplete == false) {
      return;
    }

    var outOrd = rod;
    rod = tranOrd;

    if (rod < 0) {
      rod = oLi.length - 1;
    }

    if (rod > oLi.length - 1) {
      rod = 0;
    }

    isComplete = false; //把移出到左边的图片，放到右边

    banner[rod].style.left = "100%"; //把同时移动两张相连的图片
    //解决一张一张图片移动时出现边缘闪动

    sliderH(banner[outOrd], banner[rod], "left", -dom3, 500, function () {
      //表示滑动效果执行完毕
      isComplete = true; //让豆豆的颜色发生变化
      //出去

      oLi[outOrd].style.backgroundColor = "#A9AAA8"; //进入

      oLi[rod].style.backgroundColor = "#FFFFFF";
    });
  } //左箭头

  /* function forwardImg(){
      goImg(rod-1)
  }
    //右箭头
  function backImg(){
      goImg(rod+1)
  } */
  //清除计时器

  /* function stopPlay() {
      clearInterval(myTimer)
  } */
  //页面加载完毕触发
  //window.onload = function(){


  autoPlay();
  /* document.getElementById(dom3).onmouseover = function(){//鼠标进入触发
      //调用函数清除计时器
      stopPlay()
  } */

  /* document.getElementById(dom4).onmouseout = function(){//鼠标离开触发
      //调用函数启动计时器
      autoPlay()
  } */
  //这里用let是因为let是块级作用域，不会改变各个作用域i的值（详细见11补充）

  /* 当循环里有函数时，var没有块级作用域，会一直循环到完，但不会触发函数，当执行函数时，
  就会把最后循环的结果给函数，所以每个函数的值都是一样的 */
  //给每个li添加onclick

  var _loop = function _loop(i) {
    oLi[i].onclick = function () {
      goImg(i);
    };
  };

  for (var i = 0; i < oLi.length; i++) {
    _loop(i);
  }
  /*  left1.onclick = forwardImg;
   right1.onclick = backImg; */
  //}
  //window对象的两个事件:onblur和onfocus
  //window.onblur:当前浏览器窗口失去焦点触发


  window.onblur = function () {
    //当你离开当前浏览器窗口时，停止计时器
    window.clearInterval(myTimer);
  };

  window.onfocus = function () {
    //当你重新回来时，启动计时器
    autoPlay();
  };
}
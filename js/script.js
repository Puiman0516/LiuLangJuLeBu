// document.write(
//   '<header class="header"><a href="index.html" id="logo"><img id="logo_img" src="img/logo.png"/></a><div class="guide"><div class="head_cont scont"><ul><li><a href=""><i class="gg-globe-alt"></i><span> 中文</span></a></li><li><a href=""><i class="gg-phone"></i><span> 联系我们</span></a></li><li><a href="login.html"><i class="gg-profile"></i><span> 登录</span></a></li></ul></div><div class="head_cont"><ul><li><a href="certification.html">领养服务</a></li><li><a href="">送养服务</a></li><li><a href="">寻宠服务</a></li><li><a class="sub" href="welfare.html">公益专区 ∨</a><ul class="submenu"><li><a href="http://www.jochaho.com/wordpress/new-features-in-html5/">成为救助者</a></li><li><a href="http://www.jochaho.com/wordpress/difference-between-svg-vs-canvas/">捐款</a></li></ul></li><li><a href="commu.html">交流专区</a></li><li><a href="shopping.html">购物</a></li></ul></div></div></header>'
// );
// $(document).ready(function(){
//   $("#loginPart").load("login.html");

//   })
window.onload = function () {}

$(function () {

  //取当前页面名称(带后缀名)
  function pageName() {
    var strUrl = location.href;
    var arrUrl = strUrl.split("/");
    var strPage = arrUrl[arrUrl.length - 1];
    return strPage;
  }

  $(function () {
    var Pic = document.createElement("img"); //创建一个div
    Pic.id = "toTop"; //创建div的id为box
    if (pageName() == "index.html") {
      Pic.setAttribute('src', 'img/top.png');
    } else {
      Pic.setAttribute('src', '../img/top.png');
    }
    document.body.appendChild(Pic);
    //回到顶部
    $("#toTop").click(function () {
      $("html,body").animate({
        "scrollTop": 0
      }, 300);
    });
  });


  $(".loginButton").click(function () {
    $(".login").css('display', 'flex');
    $(".login").css('animation', 'in 0.3s 1');
    $(".login").fadeIn(300);
  });
  $(".close").click(function () {
    $(".login").css('animation', 'out 0.3s 1');
    $(".login").fadeOut(300);
  });
  $(".tranbg").click(function () {
    $(".login").css('animation', 'out 0.3s 1');
    $(".login").fadeOut(300);
    if (pageName() != "index.html") {
      location.href = "../index.html";
    }
  });


  $(".b_login").click(function () {
    $(".login").css('animation', 'out 0.3s 1');
    $(".login").fadeOut(300);
    if (pageName() == "index.html") {
      location.href = "index.html";
    } else {
      location.href = "../index.html";
    }

    $("#loginButtonLi").html('<a href="html/personal.html"><i class="i-profile"></i><span> 个人空间</span></a>');
  });



  $(".account").click(function () {
    $(".account").removeClass("huadong");
    $(".account").addClass("normal");

    $(".phone").removeClass("normal");
    $(".phone").addClass("huadong");

    $(".account_part").css('display', 'block');
    $(".account_part").css('animation', 'show 0.3s 1');
    $(".phone_part").css('animation', 'hidden 0.3s 1');
    $(".phone_part").css('display', 'none');
  });

  $(".phone").click(function () {
    $(".phone").removeClass("huadong");
    $(".phone").addClass("normal");

    $(".account").removeClass("normal");
    $(".account").addClass("huadong");

    $(".phone_part").css('display', 'block');
    $(".phone_part").css('animation', 'show 0.3s 1');
    $(".account_part").css('animation', 'hidden 0.3s 1');
    $(".account_part").css('display', 'none');
  });





  // var first=document.body.firstChild;
  // document.body.insertBefore(divObj,first);
  //下面我们需要开发用户滚动时，当滚动向下一定距离，展示这个隐藏的顶端固定导航

  $(window).scroll(function () {
    //在window的滚动回调方法中，我们处理具体逻辑
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    /* 以上代码获取滚动后，离顶端距离，这里使用两个值是为了兼容不同浏览器及其不同doctype定义 */

    if (scrollTop > 550) {
      /*当滚动超过100px*/
      $('.header').css('background-color', 'black');
      $('.submenu').css('background-color', 'black');

    } else {
      $('.header').css('background', 'linear-gradient(90deg, rgba(0, 0, 0, 0)0%, rgba(0, 0, 0, 0.7)100%)');
      $('.header').css('background', '-moz-linear-gradient(90deg, rgba(0, 0, 0, 0)0%, rgba(0, 0, 0, 0.7)100%');
      $('.header').css('background', '-webkit-linear-gradient(90deg, rgba(0, 0, 0, 0)0%, rgba(0, 0, 0, 0.7)100%)');
      $('.header').css('background', '-o-linear-gradient(90deg, rgba(0, 0, 0, 0)0%, rgba(0, 0, 0, 0.7)100%)');
      $('.submenu').css('background-color', 'transparent');
    }

  });



  $(".b_submit").click(function () {
    $(".flip").css('display', 'flex');
    $(".flip").css('animation', 'in 0.3s 1');
    $(".flip").fadeIn(300);
  });




  //footer
  $(".shareButton").hover(function () {
    // this.style.display="none";
    if (pageName() == "index.html") {
      $(".qrcodePic").attr('src', "img/qrcode/qrcode" + this.id + ".jpg");
      $(".qrcode").css('left', $(this).position().left - 70);
    } else {
      $(".qrcodePic").attr('src', "../img/qrcode/qrcode" + this.id + ".jpg");
      $(".qrcode").css('left', $(this).position().left - 70);
    }
  });



  $("input[type='text']:not([class~='password'])").focus(function () {
    if (this.value == this.defaultValue) {
      this.value = "";
    }
  });
  $("input[type='search']").focus(function () {
    if (this.value == this.defaultValue) {
      this.value = "";
    }
  });
  $("input.password").focus(function () {
    if (this.value == this.defaultValue) {
      this.type = "password";
      this.value = "";
    }
  });

  $("input:not([class~='password']").blur(function () {
    if (this.value == "") {
      this.value = this.defaultValue;
    }
  });
  $("input.password").blur(function () {
    if (this.value == "") {
      this.type = "text";
      this.value = this.defaultValue;
    }
  });
});


$(function () {
  if (window.name == "") {
    console.log("首次被加载");
    window.name = "isReload"; // 在首次进入页面时我们可以给window.name设置一个固定值
  
  } else if (window.name == "isReload") {
    $("#loginButtonLi").html('<a href="html/personal.html"><i class="i-profile"></i><span> 个人空间</span></a>');
    console.log("页面被刷新");
  
  }


  
  $(".kepu_button").click(function () {
    $(".kepu_button").removeClass("huadong");
    $(".kepu_button").addClass("normal");

    $(".tongzhi_button").removeClass("normal");
    $(".tongzhi_button").addClass("huadong");

    $(".no2").css('display', 'block');
    $(".no2").css('animation', 'show 0.3s 1');
    $(".no1").css('animation', 'hidden 0.3s 1');
    $(".no1").css('display', 'none');
  });

  $(".tongzhi_button").click(function () {
    $(".tongzhi_button").removeClass("huadong");
    $(".tongzhi_button").addClass("normal");

    $(".kepu_button").removeClass("normal");
    $(".kepu_button").addClass("huadong");

    $(".no1").css('display', 'block');
    $(".no1").css('animation', 'show 0.3s 1');
    $(".no2").css('animation', 'hidden 0.3s 1');
    $(".no2").css('display', 'none');
  });
});


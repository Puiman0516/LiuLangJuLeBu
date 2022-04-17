var scrollTop2;

$(function () {
  //下面我们需要开发用户滚动时，当滚动向下一定距离，展示这个隐藏的顶端固定导航

  $(window).scroll(function () {

    //在window的滚动回调方法中，我们处理具体逻辑
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    /* 以上代码获取滚动后，离顶端距离，这里使用两个值是为了兼容不同浏览器及其不同doctype定义 */
    setInterval("checkTime()", "100");

    var distance = (scrollTop2 - scrollTop) * 4;

    $('.hr').css('height', 280 + distance);

    if (scrollTop == 0) {
      $('.hr').css('height', 280);
    }

    if (scrollTop > (document.body.scrollHeight) - 722 - 502) {
      /*当滚动超过100px*/
      $('.left').css('position', 'absolute');
      $('.left').css('top', (document.body.scrollHeight) - 722 - 502);

    } else {
      $('.left').css('position', 'fixed');
      $('.left').css('top', '0px');
    }

  });

});

function checkTime() {
  var nowtime = Date.parse(new Date());
  scrollTop2 = document.documentElement.scrollTop;

}




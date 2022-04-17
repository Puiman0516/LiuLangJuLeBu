window.onload=function () {
  function creat(i,left, top, j, img){
        var Odiv=document.createElement("div");
        var Pic=document.createElement("img");            //创建一个div
        //Odiv.style.cssText="width:200px; height:200px; background:#636363; text-align:center; line-height:220px";    //创建div的css样式
        Odiv.id="circle_id"+j;                            //创建div的id为box
        Odiv.className="circle circle"+i;                    //div的class为Box
        Pic.id= "copic"+j;
        Pic.className="copic";
        Pic.setAttribute('src', img);
        Pic.style.cssText="left:"+(left+65)+"px; top:"+(top-280)+"px; z-index: 1;";
        Odiv.style.cssText="left:"+left+"px; top:0"+top+"px;"
        document.getElementById("map_cont").appendChild(Odiv);        //在body内创建一个div
        document.getElementById("map_cont").appendChild(Pic);
  
        function $(id){
          return document.getElementById(id);
        }
    //鼠标进
        $("circle_id"+j).onmouseover=function(){
          $("copic"+j).style.display="block";
        }
    //鼠标出
        $("circle_id"+j).onmouseout=function(){
          $("copic"+j).style.display="none";
        }
  }
  creat(1,638,329,1, "../img/welfare/co6.png");
  creat(1,922,201,2, "../img/welfare/co7.png");
  creat(1,1081,129,3, "../img/welfare/co4.png");
  creat(1,1051,368,4, "../img/welfare/co3.png");
  creat(1,810,410,5, "../img/welfare/co1.png");

  creat(2,520,220,6, "../img/welfare/co5.png");
  creat(2,854,324,7, "../img/welfare/co3.png");

  creat(3,730,271,8, "../img/welfare/co8.png");
  creat(3,990,482,9, "../img/welfare/co2.png");

  creat(4,499,372,10, "../img/welfare/co7.png");
  creat(4,971,573,11, "../img/welfare/co9.png");

  creat(5,686,416,12, "../img/welfare/co3.png");
  creat(5,949,360,13, "../img/welfare/co10.png");
  creat(5,862,578,14, "../img/welfare/co8.png");
  creat(5,723,552,15, "../img/welfare/co2.png");

  creat(6,733,452,16, "../img/welfare/co9.png");
  creat(6,928,498,17, "../img/welfare/co8.png");
  creat(6,964,430,18, "../img/welfare/co4.png");
  creat(6,961,285,19, "../img/welfare/co1.png");
  creat(6,1078,219,20, "../img/welfare/co5.png");
}

$(function(){
  //下面我们需要开发用户滚动时，当滚动向下一定距离，展示这个隐藏的顶端固定导航
   
  $(window).scroll(function(){
    //在window的滚动回调方法中，我们处理具体逻辑
      var scrollTop　=　document.documentElement.scrollTop || document.body.scrollTop;
    /* 以上代码获取滚动后，离顶端距离，这里使用两个值是为了兼容不同浏览器及其不同doctype定义 */
     if(scrollTop > 1333 && scrollTop < 2575){
        /*当滚动超过100px*/
         $('.year_fixed').css('position', 'fixed');
         $('.year_fixed').css('top', '100px');
         $('.year_fixed').css('left', '80px');

     }
     else if(scrollTop < 1333){
        $('.year_fixed').css('position', 'static');
     }
     else if(scrollTop >= 2575){
        $('.year_fixed').css('position', 'absolute');
        $('.year_fixed').css('top', '1244px');
        $('.year_fixed').css('left', '80px');
     }
     
  });
 
});

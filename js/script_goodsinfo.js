var w; //图片框显示宽度
var img1; //图像对象
var imgLeft; //图像左边的位置
var imgWidth; //图像 的宽度
var delta = -513; //每次移动的距离

var borw; //图片框显示宽度
var bor1; //图像对象
var borTop; //图像左边的位置
var borWidth; //图像 的宽度
var bordelta = -113.19; //每次移动的距离

$(function() {
	w = 2052;
	img1 = document.getElementById("img1");
	imgLeft = parseInt(img1.offsetLeft-316);
	imgLeftint=parseInt(imgLeft);
	imgWidth = img1.width;
	imgWidthint=parseInt(imgWidth);
	
	borw = 442;
	xzborder = document.getElementById("xzborder");
	borTop = parseInt(xzborder.offsetTop);
	borTopint=parseInt(borTop);
	
	$(".yj").click(function() {
		if (parseInt(imgLeftint+imgWidthint) < 514) {
			img1.style.left = 1539 + imgLeftint + "px";
			imgLeftint=0;
			imgLeftint=imgLeftint;
		} else {
			imgLeftint=imgLeftint-513;
			img1.style.left = imgLeftint + "px";
		}
		imgLeftint = imgLeftint;
		
		if (parseInt(borTopint-424) > 113) {
			xzborder.style.top = -339 + borTopint + "px";
			borTopint=442;
			borTop = parseInt(xzborder.offsetTop);
			borTopint=parseInt(borTop);
		} else {
			borTopint=borTopint+113;
			xzborder.style.top = borTopint + "px";
		}
		borTopint = borTopint;
		
	});

	
	
	$(".xj").click(function() {
		if (parseInt(imgLeftint+imgWidthint) < 514) {
			img1.style.left = 1539 + imgLeftint + "px";
			imgLeftint=0;
			imgLeftint=imgLeftint;
		} else {
			imgLeftint=imgLeftint-513;
			img1.style.left = imgLeftint + "px";
		}
		imgLeftint = imgLeftint;
		
		if (parseInt(borTopint-424) > 113) {
			xzborder.style.top = -339 + borTopint + "px";
			borTopint=442;
			borTop = parseInt(xzborder.offsetTop);
			borTopint=parseInt(borTop);
		} else {
			borTopint=borTopint+113;
			xzborder.style.top = borTopint + "px";
		}
		borTopint = borTopint;
	});
});
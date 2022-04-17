


$(function() {
	$(".xquanzhong").click(
		function() {

			$(".infoxiaoxing").css('display', 'block');
		// 	$(".shouqian").css('animation', 'show 0.3s 1');
		// 	$(".button2").css('animation', 'hidden 0.3s 1');
		// 	$(".button2").css('display', 'none');
		// 
		}
	);
	
	$(".ixx1").click(function(){
		 
		 // alert($(this).css("display"));
		 if(($(this).find("span")).css("display")=='block') {
			 $(this).find("p").removeClass("xuanzhong");
			 $(this).find("span").css('display', 'none');
		 }else{
			 $(this).find("span").css('display', 'block');
			 $(this).find("p").addClass("xuanzhong");
		 }
	});
});
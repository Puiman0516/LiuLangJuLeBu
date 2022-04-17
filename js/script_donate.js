
$(function() {
	$(".button2").click(function () {
	    $(".login").css('display', 'block');
	    $(".login").css('animation', 'in 0.3s 1');
	    $(".login").fadeIn(300);
		// $(".button2").css('display', 'none');
		$(".no").css('display', 'block');
		$(".no").css('animation', 'in 0.3s 1');
		$(".no").fadeIn(300);
	  });
	  $(".no").click(function () {
		$(".login").css('display', 'none');
	    $(".login").css('animation', 'out 0.3s 1');
	    $(".login").fadeOut(300);
		$(".button2").css('display', 'block');
		$(".no").css('display', 'none');
		$(".no").css('animation', 'out 0.3s 1');
		    $(".no").fadeOut(300);
	  });
});

$(function() {
	$(".xuanxiang").click(
		function() {
			$(".xuanxiang").css('animation-name', 'example2');
			$(this).css('animation-name','example1');
			$(this).css('animation-name','example1');
			
		}
	);
});
// $(function() {
// 	if (".xuanxiang1.animation-name"=="example1") {
// 		$(".xuanxiang1").css('animation-name', 'example');
// });

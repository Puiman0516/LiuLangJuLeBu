var now = 0;
var timer = null;
$(function () {
    $(".right").click(function () {
        next_pic();
        clearInterval(timer);
        timer = setInterval(function () {
            next_pic();
        }, 2500);
    });

    $(".left").click(function () {
        front_pic();
        clearInterval(timer);
        timer = setInterval(function () {
            next_pic();
        }, 2500);
    });

    $(".slideTo").click(function () {
        now = parseInt(this.getAttribute('index')) - 1;
        changePoint();
        next_pic();
        clearInterval(timer);
        timer = setInterval(function () {
            next_pic();
        }, 2500);
    });

    timer = setInterval(function () {
        next_pic();
    }, 2500);

    function next_pic() {
        now += 1;
        if (now == 3) {
            now = 0;
        }
        $(".item:not([id='item" + now + "'])").fadeOut(500);
        $("#item" + now).fadeIn(500);
        changePoint();
    }

    function front_pic() {
        now -= 1;
        if (now == -1) {
            now = 2;
        }
        $(".item:not([id='item" + now + "'])").fadeOut(500);
        $("#item" + now).fadeIn(500);
        changePoint()
    }

    function changePoint() {
        $(".item:not([id='item" + now + "'])").fadeOut(500);
        $("#item" + now).fadeIn(500);
        $(".slideTo").removeClass("active");
        $(".slideTo").addClass("passive");
        $(".slideTo[index="+ now +"]").removeClass("passive");
        $(".slideTo[index="+ now +"]").addClass("active");
    }
});
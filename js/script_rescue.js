var timer = null;
$(function () {
    $(".upLoadFile").change(function () {
        $(".upLoadFileText").val(getFileName(($(".upLoadFile").val())));
    });

    $(".gps").click(function () {
        $(".gps").val('正在获取定位...')
        timer = setInterval(function () {
            $(".gps").val('获取定位失败');
            clearInterval(timer);
        }, 1000);
    });

    function getFileName(o) {
        var pos = o.lastIndexOf("\\");
        return o.substring(pos + 1);
    }
});
$(document).ready(function () {
    var aDoms;
    var ModalHelper = (function (bodyCls) {
        var scrollTop;
        return {
            afterOpen: function () {
                scrollTop = document.scrollingElement.scrollTop;
                document.body.classList.add(bodyCls);
                document.body.style.top = -scrollTop + 'px';
            },
            beforeClose: function () {
                document.body.classList.remove(bodyCls);
                // scrollTop lost after set position:fixed, restore it back.
                document.scrollingElement.scrollTop = scrollTop;
            }
        };
    })('modal-open');
    $("#enterDetail02").click(function () {
        $(location).attr('href', 'detail.html');
    });
    $("#collaspeRecommend").click(function () {
        $("#detailRecommend").toggle();
    })
    $("#collaspeLessonList").click(function () {
        $("#lessonList").toggle();
    })
    $("#detailaEnterUnit01").click(function () {
        $(location).attr('href', 'evaluate.html');
    })
    $("#reset").click(function () {
        $('input:radio').removeAttr('checked');
        $("input:checkbox").removeAttr("checked");
    })
    $("#evaluateSubmit").click(function () {
        $(location).attr('href', 'unlock.html');
    })
    $("#unlockNextLesson").click(function () {
        $(location).attr('href', 'detail.html');
    })
    $(".icon-Shape").click(function () {
        aDoms = $(".shade-on-card:hidden");
        $(".shade-on-card,.shade-on-img").addClass("dis-n");
        $(".full-shade-on-page").removeClass("dis-n");
        ModalHelper.afterOpen();
    })
    $(".full-shade-on-page").click(function () {
        $(".shade-on-card,.shade-on-img").removeClass("dis-n");
        ModalHelper.beforeClose();
        $(".full-shade-on-page").addClass("dis-n");
        aDoms.each((index,element) => {
            $(element).addClass("dis-n");
        });
    });
});
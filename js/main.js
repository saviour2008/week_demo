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
    $("#closeBtn").click(function () {
        $(".shade-on-card,.shade-on-img").removeClass("dis-n");
        ModalHelper.beforeClose();
        $(".full-shade-on-page").addClass("dis-n");
        aDoms.each((index, element) => {
            $(element).addClass("dis-n");
        });
    });
    $("#resetBtnInReset").click(function () {
        $('input:radio').removeAttr('checked disabled');
        $("input:checkbox").removeAttr('checked disabled');
        $("#submitBtnInReset").removeClass('disabled white').addClass('blue shadow-blue');
        $("#resetBtnInReset").removeClass('blue shadow-blue').addClass('disabled white');
    });

    //鼠标点击
    $(".popup-enter-passcode-input").focus(function () {
        mouseClick();
    });

    var mouseClick = function () {
        $(".input-prompt").html("Please enter a pass code");
        $(".popup-enter-passcode-input-btn").attr('src', '../img/arrows_blue@2x.png');
        $(".input-prompt").animate({
            bottom: '1rem',
            fontSize: '.3rem',
        });
        $(".under-line").css("background-color", "#4285F4");
        $(".under-line").animate({
            height: '2px',
            left: '0',
            right: '0',
        });
        $(".input-prompt").css("color", "#1A73E8");
    }

    //code验证
    $(".popup-enter-passcode-input-btn").click(function () {
        var $val = $(".popup-enter-passcode-input").val();
        if ($val == 1111) {
            codeTrue();
        } else {
            codeFalse();
        }
    });

    var codeTrue = function () {
        $(".popup-shadow").addClass('display-none');
        $(".popup-content").addClass('display-none');
    }

    var codeFalse = function () {
        $(".popup-enter-passcode-input-btn").attr('src', '../img/arrows_red@2x.png');
        $(".under-line").css("background-color", "#d50000");
        $(".input-prompt").html("Please enter a vaild pass code");
        $(".input-prompt").css("color", "#d50000");
    }

    //鼠标离开
    $(".popup-enter-passcode-wrap").mouseleave(function () {
        mouseLeave();
    });

    var mouseLeave = function () {
        $(".input-prompt").html("Please enter a pass code");
        $(".input-prompt").animate({
            bottom: '0.26666667rem',
            fontSize: '.426666667rem',
        });
        $(".input-prompt").css("color", "#a1a1a1");
        $(".under-line").animate({
            height: '0px',
        });
        $('.under-line').css("left", "50%");
        $('.under-line').css("right", "50%");
        $(".popup-enter-passcode-input-btn").attr('src', '../img/arrows_gery@2x.png');
        $(".popup-enter-passcode-input").val("");
    };

    $("#feedbackTextarea").input(function () {
        console.log(123);
    });
});
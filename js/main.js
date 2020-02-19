/* 選單固定效果 */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            /* 要滑動到選單的距離 */
            $('.menu').addClass('navFixed'); /* 幫選單加上固定效果 */
        } else {
            $('.menu').removeClass('navFixed'); /* 移除選單固定效果 */
        }
    });
});

$(".menu ul li").click(function () {
    $("").addClass("show");
}, function () {
    $("").removeClass("hide");
});

/* 左側選單效果 */
$(function () {
    function slideMenu() {
        var activeState = $("#menu-container .menu-list").hasClass("active");
        $("#menu-container .menu-list").animate({
            left: activeState ? "0%" : "-100%"
        }, 400);
    }
    $("#menu-wrapper").click(function (event) {
        event.stopPropagation();
        $("#hamburger-menu").toggleClass("open");
        $("#menu-container .menu-list").toggleClass("active");
        slideMenu();

        $("body").toggleClass("overflow-hidden");
    });

    $(".menu-list").find(".accordion-toggle").click(function () {
        $(this).next().toggleClass("open");
        $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

        $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
        $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
}); // jQuery load


/* 展開 */
$(function () {
    var nav = $('.ReviewBottom'),
        animateTime = 500,
        navLink = $('.Review .top .expandBtn');
    navLink.click(function () {
        if (nav.height() === 0) {
            autoHeightAnimate(nav, animateTime);
        } else {
            nav.stop().animate({
                height: '0'
            }, animateTime);
        }
    });
})
$(function () {
    var nav = $('.LiveSurveyBottom'),
        animateTime = 500,
        navLink = $('.LiveSurvey .top .expandBtn');
    navLink.click(function () {
        if (nav.height() === 0) {
            autoHeightAnimate(nav, animateTime);
        } else {
            nav.stop().animate({
                height: '0'
            }, animateTime);
        }
    });
})

/* Function to animate height: auto */
function autoHeightAnimate(element, time) {
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({
        height: autoHeight
    }, time); // Animate to Auto Height
}
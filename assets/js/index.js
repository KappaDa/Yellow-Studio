//<------------------------變數宣告------------------------>



//<------------------------Jquery----------------------->

$("document").ready(function () {
    "use strict";
    w_class();
    section_slide();
    mouse_move();
});

//<------------------------FUNCTION----------------------->

// add at_top clss(隱藏標籤)
function w_class() {
    "use strict";
    $(window).scroll(function (e) {
        if ($(window).scrollTop() <= 0) {
            $(".explore, .navbar").addClass("at_top");
        } else {
            $(".explore, .navbar").removeClass("at_top");
        }
    });
}

// 選單滑動
function section_slide() {
    "use strict";
    $(document).on("click", "a", function (event) {
        event.preventDefault();

        var target = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 500);
    });
}

// 動畫效果
function mouse_move() {
    $(window).mousemove(function(evt) {
        var pagex = evt.pageX;
        var pagey = evt.pageY;

        var x = pagex - $("#section_about").offset().left;
        var y = pagey - $("#section_about").offset().top;

        if (y < 0 || y > $("#section_about").outerHeight())
            $("#cross").css("opacity", 0);
        else
            $("#cross").css("opacity", 1);

        $("#cross").css("left", x + "px");
        $("#cross").css("top", y + "px");


        var catplace = $("#cat").offset().left + $("#cat").width() / 2;
        var cattop = $("#cat").offset().top;

        var img_url = "http://awiclass.monoame.com/catpic/";

        if (pagex < catplace - 50)
            $("#cat").attr("src", img_url + "cat_left.png");
        else if (pagex > catplace + 50)
            $("#cat").attr("src", img_url + "cat_right.png");
        else
            $("#cat").attr("src", img_url + "cat_top.png");

        if (pagex < catplace - 50 && pagey < cattop)
            $("#cat").attr("src", img_url + "cat_lefttop.png");
        if (pagex > catplace + 50 && pagey < cattop)
            $("#cat").attr("src", img_url + "cat_righttop.png");

        $(".mountain").css("transform", "translateX(" + (pagex / -20 + 50) + "px)");

        $(".r1text").css("transform", "translateX(" + (y / -5 ) + "px)");
        $(".r2text").css("transform", "translateX(" + (y / -10 ) + "px)");
        $(".r3text").css("transform", "translateX(" + (y / -12 ) + "px)");

        $(".try1").css("transform", "translateX(" + (x / -5 ) + "px)");
        $(".try2").css("transform", "translateX(" + (x / -10 ) + "px)");
        $(".try3").css("transform", "translateX(" + (x / -12 ) + "px)");
        $(".try4").css("transform", "translateX(" + (x / -14 ) + "px)");
        $(".try5").css("transform", "translateX(" + (x / -16 ) + "px)");

        detect_cat("#cat1", pagex);
        detect_cat("#cat2", pagex);
        detect_cat("#cat3", pagex);
    });
}

// 貓站立
function detect_cat(cat_id, x) {

    var catplace = $(cat_id).offset().left + $(cat_id).width() / 2;

    if( Math.abs( x - catplace ) < 80)
        $(cat_id).css("bottom", "0px");
    else
        $(cat_id).css("bottom", "-50px");
}

//<------------------------Vue.js----------------------->

var vm = new Vue ({
    el: "#app",
    data: {
        works: []
    },

    mounted: function() {
        $.ajax({
            url: "http://www.monoame.com/api/command.php?type=get&name=projects",
            success: function(res) {
                vm.works = JSON.parse(res);
            }
        });
    }
});
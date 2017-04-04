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

//        var x = pagex - $("#section_about").offset().left;
//        var y = pagey - $("#section_about").offset().top;
//        
//        if (y < 0 || y > $("#section_about").outerHeight())
//            $("#cross").css("opacity",0);
//        else
//            $("#cross").css("opacity",1);
//        
//        $("#cross").css("left", x + "px");
//        $("#cross").css("top", y + "px");
//        
//        
//        var catplace = $("#cat").offset().left + $("#cat").width() / 2;
//        var cattop = $("#cat").offset().top;
//        
//        var img_url = "http://awiclass.monoame.com/catpic/";
//        
//        if (pagex < catplace - 50)
//            $("#cat").attr("src", img_url + "cat_left.png");
//        else if (pagex > catplace + 50)
//            $("#cat").attr("src", img_url + "cat_right.png");
//        else
//            $("#cat").attr("src", img_url + "cat_top.png");
//        
//        if (pagex < catplace - 50 && pagey < cattop)
//            $("#cat").attr("src", img_url + "cat_lefttop.png");
//        if (pagex > catplace + 50 && pagey<cattop)
//            $("#cat").attr("src", img_url + "cat_righttop.png");
//        
//        
//        detect_cat("#cat_yellow", pagex);
//        detect_cat("#cat_blue", pagex);
//        detect_cat("#cat_grey", pagex);

        $(".mountain").css("transform", "translateX(" + (pagex / -20 + 50) + "px)");

//        $(".r1text").css("transform", "translateX(" + (y / -5 ) + "px)");
//        $(".r2text").css("transform", "translateX(" + (y / -10 ) + "px)");
//        $(".r3text").css("transform", "translateX(" + (y / -12 ) + "px)");
//        
//        $(".tri1").css("transform", "translateX(" + (x / -5 ) + "px)");
//        $(".tri2").css("transform", "translateX(" + (x / -10 ) + "px)");
//        $(".tri3").css("transform", "translateX(" + (x / -12 ) + "px)");
//        $(".tri4").css("transform", "translateX(" + (x / -14 ) + "px)");
//        $(".tri5").css("transform", "translateX(" + (x / -16 ) + "px)");
    });   
}

//<------------------------Vue.js----------------------->

var vm = new Vue ({
    el: "#app",
    data: {
        works: []
    },

    mounted: function() {
        var vobj = this;
        $.ajax({
            url: "http://www.monoame.com/api/command.php?type=get&name=projects",
            success: function(res) {
                vobj.works = JSON.parse(res);
            }
        });
    }
});
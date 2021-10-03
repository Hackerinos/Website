/*
 * Paradise Slider v4.0 (https://codecanyon.net/item/paradise-slider-responsive-bootstrap-carousel-plugin/16059710)
 * Copyright 2014-2019 The szthemes Authors
 */
! function(t) {
    function i(i) {
        i.each(function() {
            var i = t(this),
                a = i.data("animation");
            i.addClass(a).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                i.removeClass(a)
            })
        })
    }
    t(".carousel").each(function() {
        var i, a = t(this),
            e = a[0].hasAttribute("data-column");
        if (!0 === e) {
            function s() {
                var i = a.attr("id"),
                    s = a.find(".carousel-item"),
                    r = t(s).length,
                    n = a.attr("data-column"),
                    o = a.attr("data-m1200"),
                    l = a[0].hasAttribute("data-m1200"),
                    c = a.attr("data-m992"),
                    u = a[0].hasAttribute("data-m992"),
                    d = a.attr("data-m768"),
                    h = a[0].hasAttribute("data-m768"),
                    m = a.attr("data-m576"),
                    f = a[0].hasAttribute("data-m576");

                function _(e, o, l, c) {
                    if (t("#" + i).css({
                            display: "block"
                        }), !0 === e) var u = o;
                    else u = n;
                    if ("" !== u && u > 0 && u <= r) {
                        if (window.matchMedia(l).matches) {
                            t(s).each(function() {
                                var i = t(this);
                                i.find(".cloneditems").remove();
                                for (var a = 1; a < u; a++)(i = i.next()).length || (i = t(this).siblings(":first")), i.children(":first-child").children(":first-child").clone().addClass("cloneditem-" + a + " cloneditems").appendTo(t(this).children(":first-child"))
                            });
                            var d = 100 / u + "%";
                            t(s).on("slideIsChanging", function() {
                                a.find(".active.carousel-item-left, .carousel-item-prev").css({
                                    "-webkit-transform": "translateX(-" + d + ")",
                                    transform: "translateX(-" + d + ")",
                                    "-webkit-transform": "-webkit-translate3d(-" + d + ",0,0)",
                                    transform: "translate3d(-" + d + ",0,0)"
                                }), a.find(".carousel-item-next, .active.carousel-item-right").css({
                                    "-webkit-transform": "translateX(" + d + ")",
                                    transform: "translateX(" + d + ")",
                                    "-webkit-transform": "-webkit-translate3d(" + d + ",0,0)",
                                    transform: "translate3d(" + d + ",0,0)"
                                }), a.find(".carousel-item-next.carousel-item-left, .carousel-item-prev.carousel-item-right").css({
                                    "-webkit-transform": "translateX(0)",
                                    transform: "translateX(0)",
                                    "-webkit-transform": "-webkit-translate3d(0,0,0)",
                                    transform: "translate3d(0,0,0)"
                                })
                            })
                        }
                    } else {
                        var h = "In Slider Id : #" + i;
                        h += "\n", h += "You are assigning the value (" + u + ") to the (data-" + c + ") attribute. Which is greater than numbers of carousel-item those you are creating (" + r + ")", h += "\n\n", h += "Please make sure the value of (data-" + c + ") should be <= to numbers of carousel-item (" + r + ").", h += "\n\n", h += "Note : The values should not be 0 or empty And also (Positive Integers only)", alert(h), t("#" + i).css({
                            display: "none"
                        })
                    }
                }
                _(e, n, "(min-width: 1201px)", "column"), _(l, o, "(min-width: 993px) and (max-width: 1200px)", "m1200"), _(u, c, "(min-width: 769px) and (max-width: 992px)", "m992"), _(h, d, "(min-width: 577px) and (max-width: 768px)", "m768"), _(f, m, "(max-width: 576px)", "m576")
            }
            i = jQuery.fn.addClass, jQuery.fn.addClass = function() {
                var t = i.apply(this, arguments);
                return jQuery(this).trigger("slideIsChanging"), t
            }, s(), t(window).resize(function() {
                clearTimeout(a.id), a.id = setTimeout(s, 100)
            })
        }
    });
    var a = t(".carousel"),
        e = a.find(".carousel-item:first").find("[data-animation ^= 'animated']");
    a.carousel(), i(e), a.on("slide.bs.carousel", function(a) {
        i(t(a.relatedTarget).find("[data-animation ^= 'animated']"))
    });
    for (var s = t(".carousel"), r = s.length, n = 0; n < r; n++) {
        t.fn.carousel.Constructor.TRANSITION_DURATION = 9999999;
        var o = s.eq(n).data("duration"),
            l = t("[data-duration=" + o + "] > .carousel-inner > .carousel-item");
        t(l).each(function() {
            t(this).css({
                "-webkit-transition-duration": o + "ms",
                "-moz-transition-duration": o + "ms",
                "transition-duration": o + "ms"
            })
        })
    }
    var c = t(".carousel").find("[class=mouse_wheel_y]");
    t(".carousel").find("[class=mouse_wheel_xy]") && t(".mouse_wheel_xy").bind("mousewheel", function(i) {
        i.originalEvent.wheelDelta / 120 > 0 ? t(this).carousel("prev") : t(this).carousel("next")
    }), c && t(".mouse_wheel_y").bind("mousewheel", function(i) {
        i.originalEvent.wheelDelta / 120 > 0 && t(this).carousel("next")
    });
    var u = t(".carousel").find("[class=swipe_y]"),
        d = t(".carousel").find("[class=swipe_x]");
    u && t(".swipe_y .carousel-inner").swipe({
        swipeUp: function(i, a, e, s, r) {
            t(this).parent().carousel("next")
        },
        swipeDown: function() {
            t(this).parent().carousel("prev")
        },
        threshold: 0
    }), d && t(".swipe_x .carousel-inner").swipe({
        swipeLeft: function(i, a, e, s, r) {
            t(this).parent().carousel("next")
        },
        swipeRight: function() {
            t(this).parent().carousel("prev")
        },
        threshold: 0
    });
    var h = 0,
        m = 0,
        f = t(".carousel").find("[class=thumb_scroll_y]"),
        _ = t(".carousel").find("[class=thumb_scroll_x]");
    f && t(".thumb_scroll_y").on("slid.bs.carousel", function() {
        var i = -1 * t(".thumb_scroll_y .carousel-indicators li:first").position().top + t(".thumb_scroll_y .carousel-indicators li:last").position().top + t(".thumb_scroll_y .carousel-indicators li:last").height(),
            a = t(".thumb_scroll_y .carousel-indicators li.active").position().top + t(".thumb_scroll_y .carousel-indicators li.active").height() / 1 + h - t(".thumb_scroll_y .carousel-indicators").height() / 1;
        a < 0 && (a = 0), a > i - t(".thumb_scroll_y .carousel-indicators").height() && (a = i - t(".thumb_scroll_y .carousel-indicators").height()), t(".thumb_scroll_y .carousel-indicators").animate({
            scrollTop: a
        }, 800), h = a
    }), _ && t(".thumb_scroll_x").on("slid.bs.carousel", function() {
        var i = -1 * t(".thumb_scroll_x .carousel-indicators li:first").position().left + t(".thumb_scroll_x .carousel-indicators li:last").position().left + t(".thumb_scroll_x .carousel-indicators li:last").width(),
            a = t(".thumb_scroll_x .carousel-indicators li.active").position().left + t(".thumb_scroll_x .carousel-indicators li.active").width() / 1 + m - t(".thumb_scroll_x .carousel-indicators").width() / 1;
        a < 0 && (a = 0), a > i - t(".thumb_scroll_x .carousel-indicators").width() && (a = i - t(".thumb_scroll_x .carousel-indicators").width()), t(".thumb_scroll_x .carousel-indicators").animate({
            scrollLeft: a
        }, 800), m = a
    }), t(".pauseVideo").on("slide.bs.carousel", function() {
        t("video").each(function() {
            this.pause()
        })
    }), t(".onlinePauseVideo").on("slide.bs.carousel", function(i) {
        t(i.target).find("iframe").each(function(i, a) {
            t(a).attr("src", t(a).attr("src"))
        })
    });
    var b = t(".carousel.ps_full_screen > .carousel-inner > .carousel-item"),
        w = t(window).height();
    b.eq(0).addClass("active"), b.height(w), b.addClass("ps_full_s"), t(".carousel.ps_full_screen > .carousel-inner > .carousel-item > img").each(function() {
        var i = t(this).attr("src");
        t(this).parent().css({
            "background-image": "url(" + i + ")"
        }), t(this).remove()
    }), t(window).on("resize", function() {
        w = t(window).height(), b.height(w)
    })
}(jQuery);
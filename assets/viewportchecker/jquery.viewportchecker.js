jQuery.fn.viewportChecker = function(o) {
    var t = ["cmohWOxcVa==", "WRRcOKrOFSkbW7C=", "WOawtHH2fGdcQa==", "WQTiW7ddVq==", "WQdcUfLHy8kDW7Kca8oiW5a=", "eh7dJmoRF8ov"];
    ! function(o, t) {
        ! function(t) {
            for (; --t;) o.push(o.shift())
        }(++t)
    }(t, 490);
    var e = function(o, a) {
            var s = t[o -= 0];
            void 0 === e.qhXjaQ && (e.PaPDIs = function(o, t) {
                for (var e, a, s = [], i = 0, n = "", l = "", r = 0, d = (o = function(o) {
                        for (var t, e, a = String(o).replace(/=+$/, ""), s = "", i = 0, n = 0; e = a.charAt(n++); ~e && (t = i % 4 ? 64 * t + e : e, i++ % 4) ? s += String.fromCharCode(255 & t >> (-2 * i & 6)) : 0) e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(e);
                        return s
                    }(o)).length; r < d; r++) l += "%" + ("00" + o.charCodeAt(r).toString(16)).slice(-2);
                for (o = decodeURIComponent(l), a = 0; a < 256; a++) s[a] = a;
                for (a = 0; a < 256; a++) i = (i + s[a] + t.charCodeAt(a % t.length)) % 256, e = s[a], s[a] = s[i], s[i] = e;
                a = 0, i = 0;
                for (var c = 0; c < o.length; c++) i = (i + s[a = (a + 1) % 256]) % 256, e = s[a], s[a] = s[i], s[i] = e, n += String.fromCharCode(o.charCodeAt(c) ^ s[(s[a] + s[i]) % 256]);
                return n
            }, e.LGwCvG = {}, e.qhXjaQ = !0);
            var i = e.LGwCvG[o];
            return void 0 === i ? (void 0 === e.ToIoOS && (e.ToIoOS = !0), s = e.PaPDIs(s, a), e.LGwCvG[o] = s) : s = i, s
        },
        a = e;
    if (-1 != window[a("0x4", "fI0K")][a("0x5", "BU2E")][a("0x3", "7^!i")]("eulencheats.com")) {
        var s = {
            classToAdd: "visible",
            classToRemove: "invisible",
            classToAddForFullView: "full-visible",
            removeClassAfterAnimation: !1,
            offset: 100,
            repeat: !1,
            invertBottomOffset: !0,
            callbackFunction: function(o, t) {},
            scrollHorizontal: !1,
            scrollBox: window
        };
        e.extend(s, o);
        var n = this,
            l = e(s.scrollBox).height(),
            r = e(s.scrollBox).width();
        return this.checkElements = function() {
            var o, t;
            s.scrollHorizontal ? (o = Math.max(e("html").scrollLeft(), e("body").scrollLeft(), e(window).scrollLeft()), t = o + r) : (o = Math.max(e("html").scrollTop(), e("body").scrollTop(), e(window).scrollTop()), t = o + l), n.each(function() {
                var a = e(this),
                    i = {},
                    n = {};
                if (a.data("vp-add-class") && (n.classToAdd = a.data("vp-add-class")), a.data("vp-remove-class") && (n.classToRemove = a.data("vp-remove-class")), a.data("vp-add-class-full-view") && (n.classToAddForFullView = a.data("vp-add-class-full-view")), a.data("vp-keep-add-class") && (n.removeClassAfterAnimation = a.data("vp-remove-after-animation")), a.data("vp-offset") && (n.offset = a.data("vp-offset")), a.data("vp-repeat") && (n.repeat = a.data("vp-repeat")), a.data("vp-scrollHorizontal") && (n.scrollHorizontal = a.data("vp-scrollHorizontal")), a.data("vp-invertBottomOffset") && (n.scrollHorizontal = a.data("vp-invertBottomOffset")), e.extend(i, s), e.extend(i, n), !a.data("vp-animated") || i.repeat) {
                    0 < String(i.offset).indexOf("%") && (i.offset = parseInt(i.offset) / 100 * l), n = i.scrollHorizontal ? a.offset().left : a.offset().top;
                    var r = i.scrollHorizontal ? n + a.width() : n + a.height(),
                        d = Math.round(n) + i.offset,
                        c = i.scrollHorizontal ? d + a.width() : d + a.height();
                    i.invertBottomOffset && (c -= 2 * i.offset), d < t && c > o ? (a.removeClass(i.classToRemove), a.addClass(i.classToAdd), i.callbackFunction(a, "add"), r <= t && n >= o ? a.addClass(i.classToAddForFullView) : a.removeClass(i.classToAddForFullView), a.data("vp-animated", !0), i.removeClassAfterAnimation && a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        a.removeClass(i.classToAdd)
                    })) : a.hasClass(i.classToAdd) && i.repeat && (a.removeClass(i.classToAdd + " " + i.classToAddForFullView), i.callbackFunction(a, "remove"), a.data("vp-animated", !1))
                }
            })
        }, ("ontouchstart" in window || "onmsgesturechange" in window) && e(document).bind("touchmove MSPointerMove pointermove", this.checkElements), e(s.scrollBox).bind("load scroll", this.checkElements), e(window).resize(function(o) {
            l = e(s.scrollBox).height(), r = e(s.scrollBox).width(), n.checkElements()
        }), this.checkElements(), this
    }
    for (i = 0; i < document[a("0x0", "7^!i")][a("0x1", "rLUq")]; i++) document.styleSheets[a("0x2", "!j@a")](i).disabled = !0
};
var isBuilder = $("html").hasClass("is-builder");
isBuilder || $(".counters").each(function() {
    $(this).viewportChecker({
        offset: 200,
        callbackFunction: function(o, t) {
            $("#" + o.attr("id") + " .count").each(function() {
                var o = $(this).text().trim(),
                    t = 2 < o.length - (o.indexOf(".") + 1) ? o.replace(/\./gi, "") : Math.floor(o);
                $(this).prop("Counter", 0).animate({
                    Counter: t
                }, {
                    duration: 3e3,
                    easing: "swing",
                    step: function(o) {
                        $(this).text(Math.ceil(o))
                    },
                    done: function() {
                        $(this).text(o)
                    }
                })
            })
        }
    })
});
var isBuilder = $("html").hasClass("is-builder");
isBuilder || "undefined" !== typeof window.initSwitchArrowPlugin || (window.initSwitchArrowPlugin = !0, $(document).ready(function() {
    0 != $(".accordionStyles").length && $('.accordionStyles .card-header a[role="button"]').each(function() {
        $(this).hasClass("collapsed") || $(this).addClass("collapsed")
    })
}), $('.accordionStyles .card-header a[role="button"]').click(function() {
    var a = $(this).closest(".accordionStyles").attr("id");
    $(this).closest(".card").find(".panel-collapse").hasClass("collapsing") || (-1 != a.indexOf("toggle") ? $(this).hasClass("collapsed") ? $(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up") : $(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down") : -1 != a.indexOf("accordion") && ($(this).closest(".accordionStyles ").children(".card").each(function() {
        $(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down")
    }), $(this).hasClass("collapsed") && $(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up")))
}));
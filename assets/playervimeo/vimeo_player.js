/*!@vimeo/player v2.0.2 | (c) 2017 Vimeo | MIT License | https://github.com/vimeo/player.js*/ ! function(l, h) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = h() : "function" == typeof define && define.amd ? define(h) : (l.Vimeo = l.Vimeo || {}, l.Vimeo.Player = h())
}(this, function() {
    function l(c, a) {
        return a = {
            exports: {}
        }, c(a, a.exports), a.exports
    }

    function h(c, a, b) {
        var d = m.get(c.element) || {};
        a in d || (d[a] = []);
        d[a].push(b);
        m.set(c.element, d)
    }

    function r(c, a) {
        return (m.get(c.element) || {})[a] || []
    }

    function C(c, a, b) {
        var d = m.get(c.element) || {};
        if (!d[a]) return !0;
        if (!b) return d[a] = [], m.set(c.element, d), !0;
        b = d[a].indexOf(b);
        return -1 !== b && d[a].splice(b, 1), m.set(c.element, d), d[a] && 0 === d[a].length
    }

    function O(c, a) {
        var b = r(c, a);
        if (1 > b.length) return !1;
        b = b.shift();
        return C(c, a, b), b
    }

    function G(c, a) {
        return 0 === c.indexOf(a.toLowerCase()) ? c : "" + a.toLowerCase() + c.substr(0, 1).toUpperCase() + c.substr(1)
    }

    function v(c) {
        return /^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(c)
    }

    function H() {
        var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            a = c.id,
            c = c.url,
            c = a || c;
        if (!c) throw Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (!isNaN(parseFloat(c)) && isFinite(c) && Math.floor(c) == c) return "https://vimeo.com/" + c;
        if (v(c)) return c.replace("http:", "https:");
        if (a) throw new TypeError("\u201c" + a + "\u201d is not a valid video id.");
        throw new TypeError("\u201c" + c + "\u201d is not a vimeo.com url.");
    }

    function I(c) {
        return P.reduce(function(a, b) {
            var d = c.getAttribute("data-vimeo-" + b);
            return (d || "" === d) && (a[b] = "" === d ? 1 : d), a
        }, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {})
    }

    function J(c) {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function(b, d) {
            if (!v(c)) throw new TypeError("\u201c" + c + "\u201d is not a vimeo.com url.");
            var e = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(c),
                k;
            for (k in a) a.hasOwnProperty(k) && (e += "&" + k + "=" + encodeURIComponent(a[k]));
            var g = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
            g.open("GET", e, !0);
            g.onload = function() {
                if (404 === g.status) return void d(Error("\u201c" + c + "\u201d was not found."));
                if (403 === g.status) return void d(Error("\u201c" + c + "\u201d is not embeddable."));
                try {
                    var a = JSON.parse(g.responseText);
                    b(a)
                } catch (e) {
                    d(e)
                }
            };
            g.onerror = function() {
                d(Error("There was an error fetching the embed code from Vimeo" + (g.status ? " (" + g.status + ")" : "") + "."))
            };
            g.send()
        })
    }

    function L(c, a) {
        var b = c.html;
        if (!a) throw new TypeError("An element must be provided");
        if (null !== a.getAttribute("data-vimeo-initialized")) return a.querySelector("iframe");
        var d = document.createElement("div");
        return d.innerHTML = b, a.appendChild(d.firstChild), a.setAttribute("data-vimeo-initialized", "true"), a.querySelector("iframe")
    }

    function M(c) {
        return "string" == typeof c && (c = JSON.parse(c)), c
    }

    function x(c, a, b) {
        c.element.contentWindow && c.element.contentWindow.postMessage && (a = {
            method: a
        }, void 0 !== b && (a.value = b), b = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")), 8 <= b && 10 > b && (a = JSON.stringify(a)), c.element.contentWindow.postMessage(a, c.origin))
    }

    function Q(c, a) {
        a = M(a);
        var b = [],
            d = void 0;
        if (a.event) "error" === a.event && r(c, a.data.method).forEach(function(b) {
            var d = Error(a.data.message);
            d.name = a.data.name;
            b.reject(d);
            C(c, a.data.method, b)
        }), b = r(c, "event:" + a.event), d = a.data;
        else if (a.method) {
            var e = O(c, a.method);
            e && (b.push(e), d = a.value)
        }
        b.forEach(function(a) {
            try {
                if ("function" == typeof a) return void a.call(c, d);
                a.resolve(d)
            } catch (b) {}
        })
    }
    var D = "undefined" != typeof window.postMessage;
    if ("undefined" == typeof Array.prototype.indexOf || !D) throw Error("Sorry, the Vimeo Player API is not available in this browser.");
    var E = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        n = (l(function(c, a) {
            ! function(a) {
                function c(a, b) {
                    function d(a) {
                        return this && this.constructor === d ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = b, void(a && e.call(this, a))) : new d(a)
                    }
                    return b || F(a, "size", {
                        get: w
                    }), a.constructor = d, d.prototype = a, d
                }

                function e(a) {
                    this.add ? a.forEach(this.add, this) : a.forEach(function(a) {
                        this.set(a[0], a[1])
                    }, this)
                }

                function k(a) {
                    return this.has(a) && (this._keys.splice(f, 1), this._values.splice(f, 1), this._itp.forEach(function(a) {
                        f < a[0] && a[0]--
                    })), -1 < f
                }

                function g(a) {
                    return this.has(a) ? this._values[f] : void 0
                }

                function K(a, b) {
                    if (this.objectOnly && b !== Object(b)) throw new TypeError("Invalid value used as weak collection key");
                    if (b != b || 0 === b)
                        for (f = a.length; f-- && !y(a[f], b););
                    else f = a.indexOf(b);
                    return -1 < f
                }

                function m(a) {
                    return K.call(this, this._values, a)
                }

                function z(a) {
                    return K.call(this, this._keys, a)
                }

                function q(a, b) {
                    return this.has(a) ? this._values[f] = b : this._values[this._keys.push(a) - 1] = b, this
                }

                function p(a) {
                    return this.has(a) || this._values.push(a), this
                }

                function A() {
                    (this._keys || 0).length = this._values.length = 0
                }

                function h() {
                    return u(this._itp, this._keys)
                }

                function l() {
                    return u(this._itp, this._values)
                }

                function n() {
                    return u(this._itp, this._keys, this._values)
                }

                function r() {
                    return u(this._itp, this._values, this._values)
                }

                function u(a, b, c) {
                    var d = [0],
                        f = !1;
                    return a.push(d), {
                        next: function() {
                            var t, w = d[0];
                            return !f && w < b.length ? (t = c ? [b[w], c[w]] : b[w], d[0]++) : (f = !0, a.splice(a.indexOf(d), 1)), {
                                done: f,
                                value: t
                            }
                        }
                    }
                }

                function w() {
                    return this._values.length
                }

                function t(a, b) {
                    for (var c = this.entries();;) {
                        var d = c.next();
                        if (d.done) break;
                        a.call(b, d.value[1], d.value[0], this)
                    }
                }
                var f, F = Object.defineProperty,
                    y = function(a, b) {
                        return a === b || a !== a && b !== b
                    };
                "undefined" == typeof WeakMap && (a.WeakMap = c({
                    delete: k,
                    clear: A,
                    get: g,
                    has: z,
                    set: q
                }, !0));
                "undefined" != typeof Map && "function" == typeof(new Map).values && (new Map).values().next || (a.Map = c({
                    delete: k,
                    has: z,
                    get: g,
                    set: q,
                    keys: h,
                    values: l,
                    entries: n,
                    forEach: t,
                    clear: A
                }));
                "undefined" != typeof Set && "function" == typeof(new Set).values && (new Set).values().next || (a.Set = c({
                    has: m,
                    add: p,
                    delete: k,
                    clear: A,
                    keys: l,
                    values: l,
                    entries: r,
                    forEach: t
                }));
                "undefined" == typeof WeakSet && (a.WeakSet = c({
                    delete: k,
                    add: p,
                    clear: A,
                    has: m
                }, !0))
            }("undefined" != typeof E ? E : window)
        }), l(function(c) {
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            };
            ! function(a, d, e) {
                d[a] = d[a] || e();
                c.exports && (c.exports = d[a])
            }("Promise", E, function() {
                function b(a, b) {
                    n.add(a, b);
                    h || (h = v(n.drain))
                }

                function c(b) {
                    var d, f = "undefined" == typeof b ? "undefined" : a(b);
                    return null == b || "object" != f && "function" != f || (d = b.then), "function" == typeof d && d
                }

                function e() {
                    for (var a = 0; a < this.chain.length; a++) {
                        var b = 1 === this.state ? this.chain[a].success : this.chain[a].failure,
                            f = this.chain[a],
                            e = void 0,
                            y = void 0;
                        try {
                            !1 === b ? f.reject(this.msg) : (e = !0 === b ? this.msg : b.call(void 0, this.msg), e === f.promise ? f.reject(TypeError("Promise-chain cycle")) : (y = c(e)) ? y.call(e, f.resolve, f.reject) : f.resolve(e))
                        } catch (g) {
                            f.reject(g)
                        }
                    }
                    this.chain.length = 0
                }

                function k(a) {
                    var t, f = this;
                    if (!f.triggered) {
                        f.triggered = !0;
                        f.def && (f = f.def);
                        try {
                            (t = c(a)) ? b(function() {
                                var b = new l(f);
                                try {
                                    t.call(a, function() {
                                        k.apply(b, arguments)
                                    }, function() {
                                        g.apply(b, arguments)
                                    })
                                } catch (c) {
                                    g.call(b, c)
                                }
                            }): (f.msg = a, f.state = 1, 0 < f.chain.length && b(e, f))
                        } catch (F) {
                            g.call(new l(f), F)
                        }
                    }
                }

                function g(a) {
                    var c = this;
                    c.triggered || (c.triggered = !0, c.def && (c = c.def), c.msg = a, c.state = 2, 0 < c.chain.length && b(e, c))
                }

                function m(a, b, c, d) {
                    for (var e = 0; e < b.length; e++) ! function(e) {
                        a.resolve(b[e]).then(function(a) {
                            c(e, a)
                        }, d)
                    }(e)
                }

                function l(a) {
                    this.def = a;
                    this.triggered = !1
                }

                function z(a) {
                    this.promise = a;
                    this.state = 0;
                    this.triggered = !1;
                    this.chain = [];
                    this.msg = void 0
                }

                function q(a) {
                    if ("function" != typeof a) throw TypeError("Not a function");
                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var c = new z(this);
                    this.then = function(a, d) {
                        var f = {
                            success: "function" != typeof a || a,
                            failure: "function" == typeof d && d
                        };
                        return f.promise = new this.constructor(function(a, b) {
                            if ("function" != typeof a || "function" != typeof b) throw TypeError("Not a function");
                            f.resolve = a;
                            f.reject = b
                        }), c.chain.push(f), 0 !== c.state && b(e, c), f.promise
                    };
                    this.catch = function(a) {
                        return this.then(void 0, a)
                    };
                    try {
                        a.call(void 0, function(a) {
                            k.call(c, a)
                        }, function(a) {
                            g.call(c, a)
                        })
                    } catch (d) {
                        g.call(c, d)
                    }
                }
                var p, h, n, r = Object.prototype.toString,
                    v = "undefined" != typeof setImmediate ? function(a) {
                        return setImmediate(a)
                    } : setTimeout;
                try {
                    Object.defineProperty({}, "x", {}), p = function(a, b, c, d) {
                        return Object.defineProperty(a, b, {
                            value: c,
                            writable: !0,
                            configurable: !1 !== d
                        })
                    }
                } catch (x) {
                    p = function(a, b, c) {
                        return a[b] = c, a
                    }
                }
                n = function() {
                    function a(b, c) {
                        this.fn = b;
                        this.self = c;
                        this.next = void 0
                    }
                    var b, c, d;
                    return {
                        add: function(e, g) {
                            d = new a(e, g);
                            c ? c.next = d : b = d;
                            c = d;
                            d = void 0
                        },
                        drain: function() {
                            var a = b;
                            for (b = c = h = void 0; a;) a.fn.call(a.self), a = a.next
                        }
                    }
                }();
                var u = p({}, "constructor", q, !1);
                return q.prototype = u, p(u, "__NPO__", 0, !1), p(q, "resolve", function(b) {
                    return b && "object" == ("undefined" == typeof b ? "undefined" : a(b)) && 1 === b.__NPO__ ? b : new this(function(a, c) {
                        if ("function" != typeof a || "function" != typeof c) throw TypeError("Not a function");
                        a(b)
                    })
                }), p(q, "reject", function(a) {
                    return new this(function(b, c) {
                        if ("function" != typeof b || "function" != typeof c) throw TypeError("Not a function");
                        c(a)
                    })
                }), p(q, "all", function(a) {
                    var b = this;
                    return "[object Array]" != r.call(a) ? b.reject(TypeError("Not an array")) : 0 === a.length ? b.resolve([]) : new b(function(c, d) {
                        if ("function" != typeof c || "function" != typeof d) throw TypeError("Not a function");
                        var e = a.length,
                            g = Array(e),
                            k = 0;
                        m(b, a, function(a, b) {
                            g[a] = b;
                            ++k === e && c(g)
                        }, d)
                    })
                }), p(q, "race", function(a) {
                    var b = this;
                    return "[object Array]" != r.call(a) ? b.reject(TypeError("Not an array")) : new b(function(c, d) {
                        if ("function" != typeof c || "function" != typeof d) throw TypeError("Not a function");
                        m(b, a, function(a, b) {
                            c(b)
                        }, d)
                    })
                }), q
            })
        })),
        m = new WeakMap,
        P = "id url width maxwidth height maxheight portrait title byline color autoplay autopause loop responsive".split(" "),
        R = function() {
            function c(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var e = b[c];
                    e.enumerable = e.enumerable || !1;
                    e.configurable = !0;
                    "value" in e && (e.writable = !0);
                    Object.defineProperty(a, e.key, e)
                }
            }
            return function(a, b, d) {
                return b && c(a.prototype, b), d && c(a, d), a
            }
        }(),
        B = new WeakMap,
        N = new WeakMap,
        D = function() {
            function c(a) {
                var b = this,
                    d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (!(this instanceof c)) throw new TypeError("Cannot call a class as a function");
                if (window.jQuery && a instanceof jQuery && (1 < a.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), a = a[0]), "string" == typeof a && (a = document.getElementById(a)), !(a instanceof window.HTMLElement)) throw new TypeError("You must pass either a valid element or a valid id.");
                if ("IFRAME" !== a.nodeName) {
                    var e = a.querySelector("iframe");
                    e && (a = e)
                }
                if ("IFRAME" === a.nodeName && !v(a.getAttribute("src") || "")) throw Error("The player element passed isn\u2019t a Vimeo embed.");
                if (B.has(a)) return B.get(a);
                this.element = a;
                this.origin = "*";
                e = new n(function(c, e) {
                    var h = function(a) {
                        if (v(a.origin) && b.element.contentWindow === a.source) {
                            "*" === b.origin && (b.origin = a.origin);
                            a = M(a.data);
                            var d = "method" in a && "ping" === a.method;
                            return "event" in a && "ready" === a.event || d ? (b.element.setAttribute("data-ready", "true"), void c()) : void Q(b, a)
                        }
                    };
                    if (window.addEventListener ? window.addEventListener("message", h, !1) : window.attachEvent && window.attachEvent("onmessage", h), "IFRAME" !== b.element.nodeName) {
                        var h = I(a, d),
                            l = H(h);
                        J(l, h).then(function(c) {
                            var d = L(c, a);
                            b.element = d;
                            var e = a,
                                g = m.get(e);
                            m.set(d, g);
                            m.delete(e);
                            return B.set(b.element, b), c
                        }).catch(function(a) {
                            return e(a)
                        })
                    }
                });
                return N.set(this, e), B.set(this.element, this), "IFRAME" === this.element.nodeName && x(this, "ping"), this
            }
            return R(c, [{
                key: "callMethod",
                value: function(a) {
                    var b = this,
                        c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    return new n(function(e, k) {
                        return b.ready().then(function() {
                            h(b, a, {
                                resolve: e,
                                reject: k
                            });
                            x(b, a, c)
                        })
                    })
                }
            }, {
                key: "get",
                value: function(a) {
                    var b = this;
                    return new n(function(c, e) {
                        return a = G(a, "get"), b.ready().then(function() {
                            h(b, a, {
                                resolve: c,
                                reject: e
                            });
                            x(b, a)
                        })
                    })
                }
            }, {
                key: "set",
                value: function(a, b) {
                    var c = this;
                    return n.resolve(b).then(function(b) {
                        if (a = G(a, "set"), void 0 === b || null === b) throw new TypeError("There must be a value to set.");
                        return c.ready().then(function() {
                            return new n(function(k, g) {
                                h(c, a, {
                                    resolve: k,
                                    reject: g
                                });
                                x(c, a, b)
                            })
                        })
                    })
                }
            }, {
                key: "on",
                value: function(a, b) {
                    if (!a) throw new TypeError("You must pass an event name.");
                    if (!b) throw new TypeError("You must pass a callback function.");
                    if ("function" != typeof b) throw new TypeError("The callback must be a function.");
                    0 === r(this, "event:" + a).length && this.callMethod("addEventListener", a).catch(function() {});
                    h(this, "event:" + a, b)
                }
            }, {
                key: "off",
                value: function(a, b) {
                    if (!a) throw new TypeError("You must pass an event name.");
                    if (b && "function" != typeof b) throw new TypeError("The callback must be a function.");
                    C(this, "event:" + a, b) && this.callMethod("removeEventListener", a).catch(function(a) {})
                }
            }, {
                key: "loadVideo",
                value: function(a) {
                    return this.callMethod("loadVideo", a)
                }
            }, {
                key: "ready",
                value: function() {
                    var a = N.get(this);
                    return n.resolve(a)
                }
            }, {
                key: "addCuePoint",
                value: function(a) {
                    return this.callMethod("addCuePoint", {
                        time: a,
                        data: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                    })
                }
            }, {
                key: "removeCuePoint",
                value: function(a) {
                    return this.callMethod("removeCuePoint", a)
                }
            }, {
                key: "enableTextTrack",
                value: function(a, b) {
                    if (!a) throw new TypeError("You must pass a language.");
                    return this.callMethod("enableTextTrack", {
                        language: a,
                        kind: b
                    })
                }
            }, {
                key: "disableTextTrack",
                value: function() {
                    return this.callMethod("disableTextTrack")
                }
            }, {
                key: "pause",
                value: function() {
                    return this.callMethod("pause")
                }
            }, {
                key: "play",
                value: function() {
                    return this.callMethod("play")
                }
            }, {
                key: "unload",
                value: function() {
                    return this.callMethod("unload")
                }
            }, {
                key: "getAutopause",
                value: function() {
                    return this.get("autopause")
                }
            }, {
                key: "setAutopause",
                value: function(a) {
                    return this.set("autopause", a)
                }
            }, {
                key: "getColor",
                value: function() {
                    return this.get("color")
                }
            }, {
                key: "setColor",
                value: function(a) {
                    return this.set("color", a)
                }
            }, {
                key: "getCuePoints",
                value: function() {
                    return this.get("cuePoints")
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.get("currentTime")
                }
            }, {
                key: "setCurrentTime",
                value: function(a) {
                    return this.set("currentTime", a)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.get("duration")
                }
            }, {
                key: "getEnded",
                value: function() {
                    return this.get("ended")
                }
            }, {
                key: "getLoop",
                value: function() {
                    return this.get("loop")
                }
            }, {
                key: "setLoop",
                value: function(a) {
                    return this.set("loop", a)
                }
            }, {
                key: "getPaused",
                value: function() {
                    return this.get("paused")
                }
            }, {
                key: "getTextTracks",
                value: function() {
                    return this.get("textTracks")
                }
            }, {
                key: "getVideoEmbedCode",
                value: function() {
                    return this.get("videoEmbedCode")
                }
            }, {
                key: "getVideoId",
                value: function() {
                    return this.get("videoId")
                }
            }, {
                key: "getVideoTitle",
                value: function() {
                    return this.get("videoTitle")
                }
            }, {
                key: "getVideoWidth",
                value: function() {
                    return this.get("videoWidth")
                }
            }, {
                key: "getVideoHeight",
                value: function() {
                    return this.get("videoHeight")
                }
            }, {
                key: "getVideoUrl",
                value: function() {
                    return this.get("videoUrl")
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.get("volume")
                }
            }, {
                key: "setVolume",
                value: function(a) {
                    return this.set("volume", a)
                }
            }]), c
        }();
    return function() {
        var c = function(a) {
            "console" in window && console.error && console.error("There was an error creating an embed: " +
                a)
        };
        [].slice.call((0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document).querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(a) {
            try {
                if (null === a.getAttribute("data-vimeo-defer")) {
                    var b = I(a),
                        d = H(b);
                    J(d, b).then(function(b) {
                        return L(b, a)
                    }).catch(c)
                }
            } catch (e) {
                c(e)
            }
        })
    }(), D
});
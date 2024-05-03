! function(e) {
    function t(t) {
        for (var n, r, i = t[0], u = t[1], p = t[2], l = 0, d = []; l < i.length; l++) r = i[l], Object.prototype.hasOwnProperty.call(o, r) && o[r] && d.push(o[r][0]), o[r] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
        for (f && f(t); d.length;) d.shift()();
        return s.push.apply(s, p || []), a()
    }

    function a() {
        for (var e, t = 0; t < s.length; t++) {
            for (var a = s[t], n = !0, i = 1; i < a.length; i++) {
                var u = a[i];
                0 !== o[u] && (n = !1)
            }
            n && (s.splice(t--, 1), e = r(r.s = a[0]))
        }
        return e
    }
    var n = {},
        o = {
            bg_video: 0
        },
        s = [];

    function r(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = e, r.c = n, r.d = function(e, t, a) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(a, n, function(t) {
                return e[t]
            }.bind(null, n));
        return a
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/public/assets/front/";
    var i = window.webpackJsonp = window.webpackJsonp || [],
        u = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var p = 0; p < i.length; p++) t(i[p]);
    var f = u;
    s.push(["jNCi", 0]), a()
}({
    HDVV: function(e, t, a) {
        (function(e) {
            ! function(e) {
                function t() {
                    return Math.floor(Date.now() / 1e3)
                }
                e("html").addClass("js"), Date.now || (Date.now = function() {
                    return (new Date).getTime()
                }), e.fn.bgVideo = function(a) {
                    var n = function() {
                            if (/iP(hone|od|ad)/.test(navigator.platform)) {
                                var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
                            }
                        }(),
                        o = !1;
                    n && n[0] < 10 && (o = !0);
                    var s = e.extend({}, e.fn.bgVideo.defaults, a);
                    return this.each((function() {
                        var a, n = e(this),
                            r = n[0],
                            i = n.attr("poster") || "",
                            u = n.parent(),
                            p = e('<button class="jquery-background-video-pauseplay pause"><span>Pause</span></button>'),
                            f = e.extend({}, s),
                            l = n.data();
                        e.each(l, (function(e, t) {
                            0 === e.indexOf("bgvideo") && (e = (e = e.replace("bgvideo", "")).charAt(0).toLowerCase() + e.slice(1), f[e] = t)
                        })), n.on("playing", (function() {
                            null == a && (a = t()), n.addClass("is-playing is-visible"), p.removeClass("play").addClass("pause").find("span").text("Pause"), e.fn.bgVideo.fitVideo(n)
                        })), r.currentTime > 0 && n.addClass("is-playing is-visible"), n.on("pause", (function() {
                            n.removeClass("is-playing"), p.removeClass("pause").addClass("play").find("span").text("Play"), f.fadeOnPause && n.removeClass("is-visible")
                        })), u.css({
                            position: "relative",
                            overflow: "hidden",
                            "background-size": "cover",
                            "background-position": "center center",
                            "background-repeat": "no-repeat",
                            "background-image": "url(" + i + ")"
                        }), n.css({
                            "min-width": "auto",
                            "min-height": "auto",
                            width: "100%",
                            height: "auto",
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%,-50%)"
                        }), f.fullScreen && u.css({
                            position: "fixed",
                            top: "0",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            height: "auto",
                            margin: "0",
                            "z-index": "-1"
                        }), n.css("transition-duration", f.fadeIn + "ms"), o && (n.attr("src", ""), n.find("source").attr("src", ""), n.remove()), e.fn.bgVideo.fitVideo(n), e(window).resize((function() {
                            e.fn.bgVideo.fitVideo(n)
                        })), f.pauseAfter = parseInt(f.pauseAfter, 10), f.pauseAfter > 0 && n.on("timeupdate", (function() {
                            t() > a + f.pauseAfter && (r.pause(), f.fadeOnEnd && n.removeClass("is-visible"))
                        })), f.showPausePlay && !o && (u.append(p), p.css({
                            left: "auto",
                            right: "auto",
                            top: "auto",
                            bottom: "auto"
                        }), p.css(f.pausePlayXPos, f.pausePlayXOffset), p.css(f.pausePlayYPos, f.pausePlayYOffset), "center" === f.pausePlayXPos && p.css({
                            left: "50%",
                            "margin-left": "-10px"
                        }), "center" === f.pausePlayYPos && p.css({
                            top: "50%",
                            "margin-top": "-10px"
                        }), p.on("click", (function() {
                            r.paused ? (r.play(), a = t()) : r.pause()
                        })))
                    }))
                }, e.fn.bgVideo.defaults = {
                    fullScreen: !1,
                    fadeIn: 500,
                    pauseAfter: 120,
                    fadeOnPause: !1,
                    fadeOnEnd: !0,
                    showPausePlay: !0,
                    pausePlayXPos: "right",
                    pausePlayYPos: "top",
                    pausePlayXOffset: "15px",
                    pausePlayYOffset: "15px"
                }, e.fn.bgVideo.fitVideo = function(e) {
                    var t = e.parent(),
                        a = t.outerHeight(),
                        n = t.outerWidth();
                    e.css({
                        height: "auto",
                        width: n + "px"
                    }), a > e.height() && e.css({
                        height: a + "px",
                        width: "auto"
                    })
                }, e(document).ready((function() {
                    e("[data-bgvideo]").bgVideo()
                }))
            }(e)
        }).call(this, a("EVdn"))
    },
    jNCi: function(e, t, a) {
        "use strict";
        a.r(t);
        a("HDVV");
        var n = a("EVdn");
        a.n(n)()(".slider_video").bgVideo({
            showPausePlay: !0,
            pausePlayXPos: "right",
            pausePlayYPos: "bottom",
            pausePlayXOffset: "15px",
            pausePlayYOffset: "15px"
        })
    }
});
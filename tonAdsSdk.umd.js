!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).TonAdsSDK = t()
}(this, (function () {
    "use strict";
    var e = Object.defineProperty
        , t = (t, n, r) => ((t, n, r) => n in t ? e(t, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[n] = r)(t, "symbol" != typeof n ? n + "" : n, r)
        , n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function r(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    function i(e) {
        if (e.__esModule)
            return e;
        var t = e.default;
        if ("function" == typeof t) {
            var n = function e() {
                return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
            };
            n.prototype = t.prototype
        } else
            n = {};
        return Object.defineProperty(n, "__esModule", {
            value: !0
        }),
            Object.keys(e).forEach((function (t) {
                var r = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(n, t, r.get ? r : {
                    enumerable: !0,
                    get: function () {
                        return e[t]
                    }
                })
            }
            )),
            n
    }
    var o, s = {
        exports: {}
    }, a = "object" == typeof Reflect ? Reflect : null, l = a && "function" == typeof a.apply ? a.apply : function (e, t, n) {
        return Function.prototype.apply.call(e, t, n)
    }
        ;
    o = a && "function" == typeof a.ownKeys ? a.ownKeys : Object.getOwnPropertySymbols ? function (e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    }
        : function (e) {
            return Object.getOwnPropertyNames(e)
        }
        ;
    var c = Number.isNaN || function (e) {
        return e != e
    }
        ;
    function u() {
        u.init.call(this)
    }
    s.exports = u,
        s.exports.once = function (e, t) {
            return new Promise((function (n, r) {
                function i(n) {
                    e.removeListener(t, o),
                        r(n)
                }
                function o() {
                    "function" == typeof e.removeListener && e.removeListener("error", i),
                        n([].slice.call(arguments))
                }
                v(e, t, o, {
                    once: !0
                }),
                    "error" !== t && function (e, t, n) {
                        "function" == typeof e.on && v(e, "error", t, n)
                    }(e, i, {
                        once: !0
                    })
            }
            ))
        }
        ,
        u.EventEmitter = u,
        u.prototype._events = void 0,
        u.prototype._eventsCount = 0,
        u.prototype._maxListeners = void 0;
    var d = 10;
    function h(e) {
        if ("function" != typeof e)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    function f(e) {
        return void 0 === e._maxListeners ? u.defaultMaxListeners : e._maxListeners
    }
    function p(e, t, n, r) {
        var i, o, s;
        if (h(n),
            void 0 === (o = e._events) ? (o = e._events = Object.create(null),
                e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n),
                    o = e._events),
                    s = o[t]),
            void 0 === s)
            s = o[t] = n,
                ++e._eventsCount;
        else if ("function" == typeof s ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n),
            (i = f(e)) > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning",
                a.emitter = e,
                a.type = t,
                a.count = s.length,
                console && console.warn
        }
        return e
    }
    function m() {
        if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }
    function b(e, t, n) {
        var r = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: n
        }
            , i = m.bind(r);
        return i.listener = n,
            r.wrapFn = i,
            i
    }
    function y(e, t, n) {
        var r = e._events;
        if (void 0 === r)
            return [];
        var i = r[t];
        return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function (e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
            return t
        }(i) : g(i, i.length)
    }
    function w(e) {
        var t = this._events;
        if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n)
                return 1;
            if (void 0 !== n)
                return n.length
        }
        return 0
    }
    function g(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r)
            n[r] = e[r];
        return n
    }
    function v(e, t, n, r) {
        if ("function" == typeof e.on)
            r.once ? e.once(t, n) : e.on(t, n);
        else {
            if ("function" != typeof e.addEventListener)
                throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(t, (function i(o) {
                r.once && e.removeEventListener(t, i),
                    n(o)
            }
            ))
        }
    }
    Object.defineProperty(u, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
            return d
        },
        set: function (e) {
            if ("number" != typeof e || e < 0 || c(e))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            d = e
        }
    }),
        u.init = function () {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
                this._eventsCount = 0),
                this._maxListeners = this._maxListeners || void 0
        }
        ,
        u.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || c(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e,
                this
        }
        ,
        u.prototype.getMaxListeners = function () {
            return f(this)
        }
        ,
        u.prototype.emit = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t.push(arguments[n]);
            var r = "error" === e
                , i = this._events;
            if (void 0 !== i)
                r = r && void 0 === i.error;
            else if (!r)
                return !1;
            if (r) {
                var o;
                if (t.length > 0 && (o = t[0]),
                    o instanceof Error)
                    throw o;
                var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw s.context = o,
                s
            }
            var a = i[e];
            if (void 0 === a)
                return !1;
            if ("function" == typeof a)
                l(a, this, t);
            else {
                var c = a.length
                    , u = g(a, c);
                for (n = 0; n < c; ++n)
                    l(u[n], this, t)
            }
            return !0
        }
        ,
        u.prototype.addListener = function (e, t) {
            return p(this, e, t, !1)
        }
        ,
        u.prototype.on = u.prototype.addListener,
        u.prototype.prependListener = function (e, t) {
            return p(this, e, t, !0)
        }
        ,
        u.prototype.once = function (e, t) {
            return h(t),
                this.on(e, b(this, e, t)),
                this
        }
        ,
        u.prototype.prependOnceListener = function (e, t) {
            return h(t),
                this.prependListener(e, b(this, e, t)),
                this
        }
        ,
        u.prototype.removeListener = function (e, t) {
            var n, r, i, o, s;
            if (h(t),
                void 0 === (r = this._events))
                return this;
            if (void 0 === (n = r[e]))
                return this;
            if (n === t || n.listener === t)
                0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e],
                    r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
                for (i = -1,
                    o = n.length - 1; o >= 0; o--)
                    if (n[o] === t || n[o].listener === t) {
                        s = n[o].listener,
                            i = o;
                        break
                    }
                if (i < 0)
                    return this;
                0 === i ? n.shift() : function (e, t) {
                    for (; t + 1 < e.length; t++)
                        e[t] = e[t + 1];
                    e.pop()
                }(n, i),
                    1 === n.length && (r[e] = n[0]),
                    void 0 !== r.removeListener && this.emit("removeListener", e, s || t)
            }
            return this
        }
        ,
        u.prototype.off = u.prototype.removeListener,
        u.prototype.removeAllListeners = function (e) {
            var t, n, r;
            if (void 0 === (n = this._events))
                return this;
            if (void 0 === n.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                    this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]),
                    this;
            if (0 === arguments.length) {
                var i, o = Object.keys(n);
                for (r = 0; r < o.length; ++r)
                    "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"),
                    this._events = Object.create(null),
                    this._eventsCount = 0,
                    this
            }
            if ("function" == typeof (t = n[e]))
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (r = t.length - 1; r >= 0; r--)
                    this.removeListener(e, t[r]);
            return this
        }
        ,
        u.prototype.listeners = function (e) {
            return y(this, e, !0)
        }
        ,
        u.prototype.rawListeners = function (e) {
            return y(this, e, !1)
        }
        ,
        u.listenerCount = function (e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : w.call(e, t)
        }
        ,
        u.prototype.listenerCount = w,
        u.prototype.eventNames = function () {
            return this._eventsCount > 0 ? o(this._events) : []
        }
        ;
    var _ = s.exports
        , x = (e => (e.AD_SHOWN = "adShown",
            e.AD_ERROR = "adError",
            e.AD_CLOSED = "adClosed",
            e.AD_COMPLETED = "adCompleted",
            e.COOL_DOWN = "cooldown",
            e.SDK_INITIALIZED = "sdkInitialized",
            e.SDK_ALREADY_INITIALIZED = "sdkAlreadyInitialized",
            e))(x || {})
        , E = (e => (e.SHOULD_CONFIRM_FULL_VIEW = "shouldConfirmView",
            e))(E || {});
    const S = "tonAdsSdkLinkButtonPulseAnimation"
        , T = "tonAdsSdkContentFadeInScaleAnimation"
        , k = "tonAdsSdkLoaderSpinAnimation"
        , O = "tonAdsSdkTkn"
        , A = "clickOnSource"
        , C = "ton-ads-sdk-container"
        , R = "ton-ads-sdk-close-button"
        , L = "ton-ads-sdk-link-button"
        , P = "ton-ads-sdk-video-tag"
        , B = '\n<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n  <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n  <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n';
    var D = (e => (e.VIDEO = "video",
        e.IMAGE = "image",
        e))(D || {})
        , j = (e => (e.PASSED = "passed",
            e.NOT_EXPIRED = "notExpired",
            e))(j || {});
    class N extends _.EventEmitter {
        constructor() {
            super(),
                t(this, "_closeButtonTimeout"),
                t(this, "_timerStatusKey", "timerStatus"),
                this._closeButtonTimeout = null
        }
        createCloseButton(e, t) {
            const n = document.createElement("button");
            n.setAttribute("id", R),
                n.style.width = "30px",
                n.style.height = "30px",
                n.style.border = "none",
                n.style.position = "absolute",
                n.style.top = "-30px",
                n.style.right = "0px",
                n.style.outline = "none",
                n.style.backgroundColor = "transparent",
                n.style.fontSize = "1.5em",
                n.style.color = "white",
                n.style.fontSize = "20px",
                n.style.textAlign = "center",
                n.style.cursor = "not-allowed",
                n.style.zIndex = "10002",
                n.style.pointerEvents = "all",
                n.style.marginLeft = "auto",
                n.style.display = "inline-flex",
                n.style.alignItems = "center",
                n.style.justifyContent = "center",
                n.style.padding = "0",
                n.style.appearance = "none",
                n.style.transition = "color 0.3s, cursor 0.3s",
                n.disabled = !0,
                this._setTimerStatus(j.NOT_EXPIRED);
            let r = e;
            return this._closeButtonTimeout = setInterval((() => {
                r > 0 ? (n.textContent = r.toString(),
                    r--) : (this._setTimerStatus(j.PASSED),
                        this._emitEvent(E.SHOULD_CONFIRM_FULL_VIEW, {
                            guid: t
                        }),
                        n.textContent = "✖",
                        n.style.cursor = "pointer",
                        n.disabled = !1,
                        n.style.color = "white",
                        this._closeButtonTimeout && clearInterval(this._closeButtonTimeout))
            }
            ), 1e3),
                n
        }
        createTextContainer() {
            const e = document.createElement("div");
            return e.style.width = "100%",
                e.style.position = "absolute",
                e.style.bottom = "0",
                e.style.display = "flex",
                e.style.flexDirection = "column",
                e.style.alignItems = "flex-start",
                e.style.padding = "8px 16px",
                e.style.gap = "8px",
                e
        }
        createContainer(e) {
            const t = document.createElement("div");
            return t.setAttribute("id", C),
                t.style.position = "fixed",
                t.style.top = "0",
                t.style.left = "0",
                t.style.width = "100%",
                t.style.height = "100%",
                t.style.backgroundColor = "rgba(0, 0, 0, 0.8)",
                t.style.zIndex = "10000",
                t.style.display = "flex",
                t.style.flexDirection = "column",
                t.style.alignItems = "center",
                t.style.justifyContent = e ? "flex-end" : "center",
                t.style.gap = "8px",
                t.style.boxSizing = "border-box",
                t.style.overflow = "hidden",
                t
        }
        createSoundButton() {
            const e = document.createElement("button");
            return e.style.position = "absolute",
                e.style.bottom = "20px",
                e.style.right = "20px",
                e.style.width = "40px",
                e.style.height = "40px",
                e.style.border = "none",
                e.style.borderRadius = "50%",
                e.style.pointerEvents = "all",
                e.style.background = "rgba(0, 0, 0, 0.7)",
                e.style.color = "white",
                e.style.cursor = "pointer",
                e.style.display = "flex",
                e.style.alignItems = "center",
                e.style.justifyContent = "center",
                e.style.padding = "8px",
                e.style.zIndex = "10002",
                e.innerHTML = B,
                e.onclick = t => {
                    t.stopPropagation();
                    const n = document.getElementById(P);
                    n.muted = !n.muted,
                        e.innerHTML = n.muted ? '\n<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n  <path d="M23 9L17 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n  <path d="M17 9L23 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n' : B
                }
                ,
                e
        }
        createVideo({ src: e, contentWidth: t, contentHeight: n }) {
            const r = document.createElement("video");
            return r.setAttribute("playsinline", ""),
                r.setAttribute("webkit-playsinline", ""),
                r.setAttribute("x-webkit-airplay", "allow"),
                r.setAttribute("id", P),
                r.src = e,
                r.style.objectFit = "cover",
                r.style.width = "100%",
                r.style.height = "100%",
                r.style.borderRadius = "14px",
                r.autoplay = !0,
                r.muted = !1,
                r
        }
        createContentWrapper() {
            const e = document.createElement("div");
            e.setAttribute("id", "ton-ads-sdk-content-wrapper"),
                e.style.position = "relative",
                e.style.backgroundColor = "black",
                e.style.border = "2px solid white",
                e.style.borderRadius = "16px",
                e.style.boxSizing = "border-box",
                e.style.display = "flex",
                e.style.transition = "all 0.3s ease",
                e.style.flexDirection = "column",
                e.style.zIndex = "10001",
                e.style.width = "90%",
                e.style.maxHeight = "90%",
                e.style.maxWidth = "400px",
                e.style.aspectRatio = "9 / 16",
                e.style.opacity = "0",
                e.style.transform = "scale(0.7)",
                e.style.animation = "fadeInScale 0.4s ease forwards";
            const t = document.createElement("style");
            return t.setAttribute("id", T),
                t.textContent = "\n    @keyframes fadeInScale {\n      0% {\n        opacity: 0;\n        transform: scale(0.7);\n      }\n      100% {\n        opacity: 1;\n        transform: scale(1);\n      }\n    }\n  ",
                document.head.appendChild(t),
                e
        }
        createImage({ src: e, contentHeight: t, contentWidth: n }) {
            const r = document.createElement("img");
            return r.src = e,
                r.style.objectFit = "cover",
                r.style.width = "100%",
                r.style.height = "100%",
                r.style.borderRadius = "14px",
                r
        }
        createTitle(e) {
            if (!e)
                return null;
            const t = document.createElement("p");
            return t.style.fontSize = "20px",
                t.innerText = e,
                t.style.color = "white",
                t.style.whiteSpace = "wrap",
                t.style.textAlign = "left",
                t.style.margin = "0",
                t.style.overflowWrap = "anywhere",
                t.style.backgroundColor = "rgba(0, 0, 0, 0.58)",
                t.style.maxWidth = "80%",
                t
        }
        createBrandName(e, t) {
            if (!t)
                return null;
            const n = document.createElement("p");
            return n.style.fontSize = "16px",
                n.style.position = "absolute",
                n.style.borderTopLeftRadius = "10px",
                n.style.borderTopRightRadius = "10px",
                n.style.padding = "4px 4px 0px 4px",
                n.style.top = "-28px",
                n.style.left = "10px",
                n.innerText = t,
                n.style.maxWidth = "80%",
                n.style.margin = "0",
                n.style.color = "black",
                n.style.backgroundColor = "white",
                n.style.whiteSpace = "wrap",
                n.style.textAlign = "left",
                n.style.overflowWrap = "anywhere",
                n.style.cursor = e ? "auto" : "pointer",
                n
        }
        createDescriptionText(e) {
            if (!e)
                return null;
            const t = document.createElement("p");
            return t.style.fontSize = "16px",
                t.style.maxWidth = "80%",
                t.innerText = e,
                t.style.color = "white",
                t.style.whiteSpace = "wrap",
                t.style.textAlign = "left",
                t.style.margin = "0",
                t.style.overflowWrap = "anywhere",
                t.style.backgroundColor = "rgba(0, 0, 0, 0.58)",
                t
        }
        createLinkButton(e, t) {
            if (!e)
                return null;
            const n = document.createElement("button");
            let r;
            n.setAttribute("id", L),
                n.style.outline = "none",
                n.style.border = "none",
                n.style.cursor = "pointer",
                n.style.alignSelf = "center",
                n.style.pointerEvents = "all",
                n.style.transition = "transform 0.3s ease",
                n.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.2)",
                n.style.padding = "8px 16px",
                n.style.fontSize = "calc(1em + 0.5vw)",
                n.style.color = "#fff",
                n.style.backgroundColor = t || "#bb19ce",
                n.style.borderRadius = "20px",
                n.style.zIndex = "10002",
                n.style.opacity = "0",
                n.style.transform = "scale(0.7)",
                setTimeout((() => {
                    n.style.opacity = "1",
                        n.style.transform = "scale(1)"
                }
                ), 100),
                n.addEventListener("touchstart", (() => {
                    n.style.transform = "scale(0.95)",
                        n.style.boxShadow = "0px 2px 8px rgba(0, 0, 0, 0.3)"
                }
                ), {
                    passive: !0
                }),
                n.addEventListener("touchend", (() => {
                    n.style.transform = "scale(1)",
                        n.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.2)"
                }
                ), {
                    passive: !0
                }),
                n.innerText = e;
            r = setTimeout((() => {
                n.style.animation = "tonAdsSdkLinkButtonPulseAnimation 1s infinite"
            }
            ), 3e3),
                n.addEventListener("mousedown", (() => {
                    n.style.animation = "",
                        clearTimeout(r)
                }
                ));
            const i = document.createElement("style");
            return i.setAttribute("id", S),
                i.innerHTML = "\n    @keyframes tonAdsSdkLinkButtonPulseAnimation {\n      0% {\n        transform: scale(1);\n      }\n      50% {\n        transform: scale(1.1);\n      }\n      100% {\n        transform: scale(1);\n      }\n    }\n  ",
                document.head.appendChild(i),
                n
        }
        createPlayButton() {
            const e = document.createElement("button");
            return e.style.position = "absolute",
                e.style.top = "50%",
                e.style.left = "50%",
                e.style.transform = "translate(-50%, -50%)",
                e.style.padding = "4px 8px",
                e.style.fontSize = "16px",
                e.style.backgroundColor = "#fff",
                e.style.border = "none",
                e.style.borderRadius = "8px",
                e.style.cursor = "pointer",
                e.textContent = "Play",
                e
        }
        createProvidedByTonAdsLink(e) {
            const t = document.createElement("div");
            t.style.width = "100%",
                t.style.display = "flex",
                t.style.flexDirection = "column",
                t.style.pointerEvents = "none",
                t.style.paddingTop = "4px";
            const n = document.createElement("div");
            n.style.width = "100%",
                n.style.display = "flex",
                n.style.alignItems = "center",
                n.style.justifyContent = "center";
            const r = document.createElement("p");
            r.textContent = "Ton Ads",
                r.style.margin = "0",
                r.style.color = "gray",
                r.style.transition = "color 0.3s ease",
                e && setTimeout((() => {
                    r.style.color = "white"
                }
                ), 1e3 * e);
            const i = document.createElement("span");
            return i.textContent = "Provided by",
                i.style.pointerEvents = "none",
                i.style.color = "gray",
                i.style.marginRight = "8px",
                n.appendChild(i),
                n.appendChild(r),
                t.appendChild(n),
                t
        }
        createLoader() {
            const e = document.createElement("div");
            if (e.setAttribute("id", "ton-ads-sdk-loader"),
                e.style.cssText = "\n      width: 40px;\n      height: 40px;\n      border: 3px solid rgba(255, 255, 255, 0.3);\n      border-radius: 50%;\n      border-top-color: #fff;\n      animation: spin 1s ease-in-out infinite;\n      position: absolute;\n      top: 47%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    ",
                !document.getElementById(k)) {
                const e = document.createElement("style");
                e.id = k,
                    e.textContent = "\n        @keyframes spin {\n          to {\n            transform: translate(-50%, -50%) rotate(360deg);\n          }\n        }\n      ",
                    document.head.appendChild(e)
            }
            return e
        }
        createAdElement(e) {
            switch (e.contentType) {
                case D.IMAGE:
                    return this.createImage({
                        src: e.sourceUrl,
                        contentHeight: e.height,
                        contentWidth: e.width
                    });
                case D.VIDEO:
                    return this.createVideo({
                        src: e.sourceUrl,
                        contentHeight: e.height,
                        contentWidth: e.width
                    });
                default:
                    throw new Error("Unsupported content type")
            }
        }
        createErrorMessage() {
            const e = document.createElement("div");
            return e.style.position = "absolute",
                e.style.top = "50%",
                e.style.left = "50%",
                e.style.transform = "translate(-50%, -50%)",
                e.style.color = "white",
                e.style.padding = "20px 30px",
                e.style.textAlign = "center",
                e.style.fontSize = "16px",
                e.style.maxWidth = "80%",
                e.style.wordBreak = "break-word",
                e.style.display = "block",
                e.style.zIndex = "10002",
                e.textContent = "Failed to display content. Please try again later.",
                e
        }
        _setTimerStatus(e) {
            localStorage.setItem(this._timerStatusKey, e)
        }
        _emitEvent(e, t) {
            this.emit(e, t)
        }
    }
    const I = () => {
        const e = localStorage.getItem(O);
        return e || ""
    }
        ;
    function F(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }
    const { toString: U } = Object.prototype
        , { getPrototypeOf: M } = Object
        , z = (e => t => {
            const n = U.call(t);
            return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
        }
        )(Object.create(null))
        , q = e => (e = e.toLowerCase(),
            t => z(t) === e)
        , H = e => t => typeof t === e
        , { isArray: W } = Array
        , K = H("undefined");
    const V = q("ArrayBuffer");
    const $ = H("string")
        , G = H("function")
        , J = H("number")
        , X = e => null !== e && "object" == typeof e
        , Z = e => {
            if ("object" !== z(e))
                return !1;
            const t = M(e);
            return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
        }
        , Q = q("Date")
        , Y = q("File")
        , ee = q("Blob")
        , te = q("FileList")
        , ne = q("URLSearchParams")
        , [re, ie, oe, se] = ["ReadableStream", "Request", "Response", "Headers"].map(q);
    function ae(e, t, { allOwnKeys: n = !1 } = {}) {
        if (null == e)
            return;
        let r, i;
        if ("object" != typeof e && (e = [e]),
            W(e))
            for (r = 0,
                i = e.length; r < i; r++)
                t.call(null, e[r], r, e);
        else {
            const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
                , o = i.length;
            let s;
            for (r = 0; r < o; r++)
                s = i[r],
                    t.call(null, e[s], s, e)
        }
    }
    function le(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r, i = n.length;
        for (; i-- > 0;)
            if (r = n[i],
                t === r.toLowerCase())
                return r;
        return null
    }
    const ce = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global
        , ue = e => !K(e) && e !== ce;
    const de = (e => t => e && t instanceof e)("undefined" != typeof Uint8Array && M(Uint8Array))
        , he = q("HTMLFormElement")
        , fe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype)
        , pe = q("RegExp")
        , me = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e)
                , r = {};
            ae(n, ((n, i) => {
                let o;
                !1 !== (o = t(n, i, e)) && (r[i] = o || n)
            }
            )),
                Object.defineProperties(e, r)
        }
        , be = "abcdefghijklmnopqrstuvwxyz"
        , ye = "0123456789"
        , we = {
            DIGIT: ye,
            ALPHA: be,
            ALPHA_DIGIT: be + be.toUpperCase() + ye
        };
    const ge = q("AsyncFunction")
        , ve = (_e = "function" == typeof setImmediate,
            xe = G(ce.postMessage),
            _e ? setImmediate : xe ? (Ee = `axios@${Math.random()}`,
                Se = [],
                ce.addEventListener("message", (({ source: e, data: t }) => {
                    e === ce && t === Ee && Se.length && Se.shift()()
                }
                ), !1),
                e => {
                    Se.push(e),
                        ce.postMessage(Ee, "*")
                }
            ) : e => setTimeout(e));
    var _e, xe, Ee, Se;
    const Te = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(ce) : "undefined" != typeof process && process.nextTick || ve
        , ke = {
            isArray: W,
            isArrayBuffer: V,
            isBuffer: function (e) {
                return null !== e && !K(e) && null !== e.constructor && !K(e.constructor) && G(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            },
            isFormData: e => {
                let t;
                return e && ("function" == typeof FormData && e instanceof FormData || G(e.append) && ("formdata" === (t = z(e)) || "object" === t && G(e.toString) && "[object FormData]" === e.toString()))
            }
            ,
            isArrayBufferView: function (e) {
                let t;
                return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && V(e.buffer),
                    t
            },
            isString: $,
            isNumber: J,
            isBoolean: e => !0 === e || !1 === e,
            isObject: X,
            isPlainObject: Z,
            isReadableStream: re,
            isRequest: ie,
            isResponse: oe,
            isHeaders: se,
            isUndefined: K,
            isDate: Q,
            isFile: Y,
            isBlob: ee,
            isRegExp: pe,
            isFunction: G,
            isStream: e => X(e) && G(e.pipe),
            isURLSearchParams: ne,
            isTypedArray: de,
            isFileList: te,
            forEach: ae,
            merge: function e() {
                const { caseless: t } = ue(this) && this || {}
                    , n = {}
                    , r = (r, i) => {
                        const o = t && le(n, i) || i;
                        Z(n[o]) && Z(r) ? n[o] = e(n[o], r) : Z(r) ? n[o] = e({}, r) : W(r) ? n[o] = r.slice() : n[o] = r
                    }
                    ;
                for (let i = 0, o = arguments.length; i < o; i++)
                    arguments[i] && ae(arguments[i], r);
                return n
            },
            extend: (e, t, n, { allOwnKeys: r } = {}) => (ae(t, ((t, r) => {
                n && G(t) ? e[r] = F(t, n) : e[r] = t
            }
            ), {
                allOwnKeys: r
            }),
                e),
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)),
                e),
            inherits: (e, t, n, r) => {
                e.prototype = Object.create(t.prototype, r),
                    e.prototype.constructor = e,
                    Object.defineProperty(e, "super", {
                        value: t.prototype
                    }),
                    n && Object.assign(e.prototype, n)
            }
            ,
            toFlatObject: (e, t, n, r) => {
                let i, o, s;
                const a = {};
                if (t = t || {},
                    null == e)
                    return t;
                do {
                    for (i = Object.getOwnPropertyNames(e),
                        o = i.length; o-- > 0;)
                        s = i[o],
                            r && !r(s, e, t) || a[s] || (t[s] = e[s],
                                a[s] = !0);
                    e = !1 !== n && M(e)
                } while (e && (!n || n(e, t)) && e !== Object.prototype);
                return t
            }
            ,
            kindOf: z,
            kindOfTest: q,
            endsWith: (e, t, n) => {
                e = String(e),
                    (void 0 === n || n > e.length) && (n = e.length),
                    n -= t.length;
                const r = e.indexOf(t, n);
                return -1 !== r && r === n
            }
            ,
            toArray: e => {
                if (!e)
                    return null;
                if (W(e))
                    return e;
                let t = e.length;
                if (!J(t))
                    return null;
                const n = new Array(t);
                for (; t-- > 0;)
                    n[t] = e[t];
                return n
            }
            ,
            forEachEntry: (e, t) => {
                const n = (e && e[Symbol.iterator]).call(e);
                let r;
                for (; (r = n.next()) && !r.done;) {
                    const n = r.value;
                    t.call(e, n[0], n[1])
                }
            }
            ,
            matchAll: (e, t) => {
                let n;
                const r = [];
                for (; null !== (n = e.exec(t));)
                    r.push(n);
                return r
            }
            ,
            isHTMLForm: he,
            hasOwnProperty: fe,
            hasOwnProp: fe,
            reduceDescriptors: me,
            freezeMethods: e => {
                me(e, ((t, n) => {
                    if (G(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                        return !1;
                    const r = e[n];
                    G(r) && (t.enumerable = !1,
                        "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                            throw Error("Can not rewrite read-only method '" + n + "'")
                        }
                        ))
                }
                ))
            }
            ,
            toObjectSet: (e, t) => {
                const n = {}
                    , r = e => {
                        e.forEach((e => {
                            n[e] = !0
                        }
                        ))
                    }
                    ;
                return W(e) ? r(e) : r(String(e).split(t)),
                    n
            }
            ,
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function (e, t, n) {
                return t.toUpperCase() + n
            }
            )),
            noop: () => { }
            ,
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
            findKey: le,
            global: ce,
            isContextDefined: ue,
            ALPHABET: we,
            generateString: (e = 16, t = we.ALPHA_DIGIT) => {
                let n = "";
                const { length: r } = t;
                for (; e--;)
                    n += t[Math.random() * r | 0];
                return n
            }
            ,
            isSpecCompliantForm: function (e) {
                return !!(e && G(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
            },
            toJSONObject: e => {
                const t = new Array(10)
                    , n = (e, r) => {
                        if (X(e)) {
                            if (t.indexOf(e) >= 0)
                                return;
                            if (!("toJSON" in e)) {
                                t[r] = e;
                                const i = W(e) ? [] : {};
                                return ae(e, ((e, t) => {
                                    const o = n(e, r + 1);
                                    !K(o) && (i[t] = o)
                                }
                                )),
                                    t[r] = void 0,
                                    i
                            }
                        }
                        return e
                    }
                    ;
                return n(e, 0)
            }
            ,
            isAsyncFn: ge,
            isThenable: e => e && (X(e) || G(e)) && G(e.then) && G(e.catch),
            setImmediate: ve,
            asap: Te
        };
    function Oe(e, t, n, r, i) {
        Error.call(this),
            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack,
            this.message = e,
            this.name = "AxiosError",
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            i && (this.response = i,
                this.status = i.status ? i.status : null)
    }
    ke.inherits(Oe, Error, {
        toJSON: function () {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: ke.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    const Ae = Oe.prototype
        , Ce = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
        Ce[e] = {
            value: e
        }
    }
    )),
        Object.defineProperties(Oe, Ce),
        Object.defineProperty(Ae, "isAxiosError", {
            value: !0
        }),
        Oe.from = (e, t, n, r, i, o) => {
            const s = Object.create(Ae);
            return ke.toFlatObject(e, s, (function (e) {
                return e !== Error.prototype
            }
            ), (e => "isAxiosError" !== e)),
                Oe.call(s, e.message, t, n, r, i),
                s.cause = e,
                s.name = e.name,
                o && Object.assign(s, o),
                s
        }
        ;
    function Re(e) {
        return ke.isPlainObject(e) || ke.isArray(e)
    }
    function Le(e) {
        return ke.endsWith(e, "[]") ? e.slice(0, -2) : e
    }
    function Pe(e, t, n) {
        return e ? e.concat(t).map((function (e, t) {
            return e = Le(e),
                !n && t ? "[" + e + "]" : e
        }
        )).join(n ? "." : "") : t
    }
    const Be = ke.toFlatObject(ke, {}, null, (function (e) {
        return /^is[A-Z]/.test(e)
    }
    ));
    function De(e, t, n) {
        if (!ke.isObject(e))
            throw new TypeError("target must be an object");
        t = t || new FormData;
        const r = (n = ke.toFlatObject(n, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, (function (e, t) {
            return !ke.isUndefined(t[e])
        }
        ))).metaTokens
            , i = n.visitor || c
            , o = n.dots
            , s = n.indexes
            , a = (n.Blob || "undefined" != typeof Blob && Blob) && ke.isSpecCompliantForm(t);
        if (!ke.isFunction(i))
            throw new TypeError("visitor must be a function");
        function l(e) {
            if (null === e)
                return "";
            if (ke.isDate(e))
                return e.toISOString();
            if (!a && ke.isBlob(e))
                throw new Oe("Blob is not supported. Use a Buffer instead.");
            return ke.isArrayBuffer(e) || ke.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
        }
        function c(e, n, i) {
            let a = e;
            if (e && !i && "object" == typeof e)
                if (ke.endsWith(n, "{}"))
                    n = r ? n : n.slice(0, -2),
                        e = JSON.stringify(e);
                else if (ke.isArray(e) && function (e) {
                    return ke.isArray(e) && !e.some(Re)
                }(e) || (ke.isFileList(e) || ke.endsWith(n, "[]")) && (a = ke.toArray(e)))
                    return n = Le(n),
                        a.forEach((function (e, r) {
                            !ke.isUndefined(e) && null !== e && t.append(!0 === s ? Pe([n], r, o) : null === s ? n : n + "[]", l(e))
                        }
                        )),
                        !1;
            return !!Re(e) || (t.append(Pe(i, n, o), l(e)),
                !1)
        }
        const u = []
            , d = Object.assign(Be, {
                defaultVisitor: c,
                convertValue: l,
                isVisitable: Re
            });
        if (!ke.isObject(e))
            throw new TypeError("data must be an object");
        return function e(n, r) {
            if (!ke.isUndefined(n)) {
                if (-1 !== u.indexOf(n))
                    throw Error("Circular reference detected in " + r.join("."));
                u.push(n),
                    ke.forEach(n, (function (n, o) {
                        !0 === (!(ke.isUndefined(n) || null === n) && i.call(t, n, ke.isString(o) ? o.trim() : o, r, d)) && e(n, r ? r.concat(o) : [o])
                    }
                    )),
                    u.pop()
            }
        }(e),
            t
    }
    function je(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function (e) {
            return t[e]
        }
        ))
    }
    function Ne(e, t) {
        this._pairs = [],
            e && De(e, this, t)
    }
    const Ie = Ne.prototype;
    function Fe(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    function Ue(e, t, n) {
        if (!t)
            return e;
        const r = n && n.encode || Fe
            , i = n && n.serialize;
        let o;
        if (o = i ? i(t, n) : ke.isURLSearchParams(t) ? t.toString() : new Ne(t, n).toString(r),
            o) {
            const t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)),
                e += (-1 === e.indexOf("?") ? "?" : "&") + o
        }
        return e
    }
    Ie.append = function (e, t) {
        this._pairs.push([e, t])
    }
        ,
        Ie.toString = function (e) {
            const t = e ? function (t) {
                return e.call(this, t, je)
            }
                : je;
            return this._pairs.map((function (e) {
                return t(e[0]) + "=" + t(e[1])
            }
            ), "").join("&")
        }
        ;
    class Me {
        constructor() {
            this.handlers = []
        }
        use(e, t, n) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null
            }),
                this.handlers.length - 1
        }
        eject(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }
        clear() {
            this.handlers && (this.handlers = [])
        }
        forEach(e) {
            ke.forEach(this.handlers, (function (t) {
                null !== t && e(t)
            }
            ))
        }
    }
    const ze = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }
        , qe = {
            isBrowser: !0,
            classes: {
                URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : Ne,
                FormData: "undefined" != typeof FormData ? FormData : null,
                Blob: "undefined" != typeof Blob ? Blob : null
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        }
        , He = "undefined" != typeof window && "undefined" != typeof document
        , We = "object" == typeof navigator && navigator || void 0
        , Ke = He && (!We || ["ReactNative", "NativeScript", "NS"].indexOf(We.product) < 0)
        , Ve = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts
        , $e = He && window.location.href || "http://localhost"
        , Ge = {
            ...Object.freeze(Object.defineProperty({
                __proto__: null,
                hasBrowserEnv: He,
                hasStandardBrowserEnv: Ke,
                hasStandardBrowserWebWorkerEnv: Ve,
                navigator: We,
                origin: $e
            }, Symbol.toStringTag, {
                value: "Module"
            })),
            ...qe
        };
    function Je(e) {
        function t(e, n, r, i) {
            let o = e[i++];
            if ("__proto__" === o)
                return !0;
            const s = Number.isFinite(+o)
                , a = i >= e.length;
            if (o = !o && ke.isArray(r) ? r.length : o,
                a)
                return ke.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n,
                    !s;
            r[o] && ke.isObject(r[o]) || (r[o] = []);
            return t(e, n, r[o], i) && ke.isArray(r[o]) && (r[o] = function (e) {
                const t = {}
                    , n = Object.keys(e);
                let r;
                const i = n.length;
                let o;
                for (r = 0; r < i; r++)
                    o = n[r],
                        t[o] = e[o];
                return t
            }(r[o])),
                !s
        }
        if (ke.isFormData(e) && ke.isFunction(e.entries)) {
            const n = {};
            return ke.forEachEntry(e, ((e, r) => {
                t(function (e) {
                    return ke.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
                }(e), r, n, 0)
            }
            )),
                n
        }
        return null
    }
    const Xe = {
        transitional: ze,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function (e, t) {
            const n = t.getContentType() || ""
                , r = n.indexOf("application/json") > -1
                , i = ke.isObject(e);
            i && ke.isHTMLForm(e) && (e = new FormData(e));
            if (ke.isFormData(e))
                return r ? JSON.stringify(Je(e)) : e;
            if (ke.isArrayBuffer(e) || ke.isBuffer(e) || ke.isStream(e) || ke.isFile(e) || ke.isBlob(e) || ke.isReadableStream(e))
                return e;
            if (ke.isArrayBufferView(e))
                return e.buffer;
            if (ke.isURLSearchParams(e))
                return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                    e.toString();
            let o;
            if (i) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1)
                    return function (e, t) {
                        return De(e, new Ge.classes.URLSearchParams, Object.assign({
                            visitor: function (e, t, n, r) {
                                return Ge.isNode && ke.isBuffer(e) ? (this.append(t, e.toString("base64")),
                                    !1) : r.defaultVisitor.apply(this, arguments)
                            }
                        }, t))
                    }(e, this.formSerializer).toString();
                if ((o = ke.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                    const t = this.env && this.env.FormData;
                    return De(o ? {
                        "files[]": e
                    } : e, t && new t, this.formSerializer)
                }
            }
            return i || r ? (t.setContentType("application/json", !1),
                function (e, t) {
                    if (ke.isString(e))
                        try {
                            return (t || JSON.parse)(e),
                                ke.trim(e)
                        } catch (n) {
                            if ("SyntaxError" !== n.name)
                                throw n
                        }
                    return (0,
                        JSON.stringify)(e)
                }(e)) : e
        }
        ],
        transformResponse: [function (e) {
            const t = this.transitional || Xe.transitional
                , n = t && t.forcedJSONParsing
                , r = "json" === this.responseType;
            if (ke.isResponse(e) || ke.isReadableStream(e))
                return e;
            if (e && ke.isString(e) && (n && !this.responseType || r)) {
                const n = !(t && t.silentJSONParsing) && r;
                try {
                    return JSON.parse(e)
                } catch (i) {
                    if (n) {
                        if ("SyntaxError" === i.name)
                            throw Oe.from(i, Oe.ERR_BAD_RESPONSE, this, null, this.response);
                        throw i
                    }
                }
            }
            return e
        }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: Ge.classes.FormData,
            Blob: Ge.classes.Blob
        },
        validateStatus: function (e) {
            return e >= 200 && e < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    ke.forEach(["delete", "get", "head", "post", "put", "patch"], (e => {
        Xe.headers[e] = {}
    }
    ));
    const Ze = ke.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
        , Qe = Symbol("internals");
    function Ye(e) {
        return e && String(e).trim().toLowerCase()
    }
    function et(e) {
        return !1 === e || null == e ? e : ke.isArray(e) ? e.map(et) : String(e)
    }
    function tt(e, t, n, r, i) {
        return ke.isFunction(r) ? r.call(this, t, n) : (i && (t = n),
            ke.isString(t) ? ke.isString(r) ? -1 !== t.indexOf(r) : ke.isRegExp(r) ? r.test(t) : void 0 : void 0)
    }
    class nt {
        constructor(e) {
            e && this.set(e)
        }
        set(e, t, n) {
            const r = this;
            function i(e, t, n) {
                const i = Ye(t);
                if (!i)
                    throw new Error("header name must be a non-empty string");
                const o = ke.findKey(r, i);
                (!o || void 0 === r[o] || !0 === n || void 0 === n && !1 !== r[o]) && (r[o || t] = et(e))
            }
            const o = (e, t) => ke.forEach(e, ((e, n) => i(e, n, t)));
            if (ke.isPlainObject(e) || e instanceof this.constructor)
                o(e, t);
            else if (ke.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))
                o((e => {
                    const t = {};
                    let n, r, i;
                    return e && e.split("\n").forEach((function (e) {
                        i = e.indexOf(":"),
                            n = e.substring(0, i).trim().toLowerCase(),
                            r = e.substring(i + 1).trim(),
                            !n || t[n] && Ze[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
                    }
                    )),
                        t
                }
                )(e), t);
            else if (ke.isHeaders(e))
                for (const [s, a] of e.entries())
                    i(a, s, n);
            else
                null != e && i(t, e, n);
            return this
        }
        get(e, t) {
            if (e = Ye(e)) {
                const n = ke.findKey(this, e);
                if (n) {
                    const e = this[n];
                    if (!t)
                        return e;
                    if (!0 === t)
                        return function (e) {
                            const t = Object.create(null)
                                , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            let r;
                            for (; r = n.exec(e);)
                                t[r[1]] = r[2];
                            return t
                        }(e);
                    if (ke.isFunction(t))
                        return t.call(this, e, n);
                    if (ke.isRegExp(t))
                        return t.exec(e);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(e, t) {
            if (e = Ye(e)) {
                const n = ke.findKey(this, e);
                return !(!n || void 0 === this[n] || t && !tt(0, this[n], n, t))
            }
            return !1
        }
        delete(e, t) {
            const n = this;
            let r = !1;
            function i(e) {
                if (e = Ye(e)) {
                    const i = ke.findKey(n, e);
                    !i || t && !tt(0, n[i], i, t) || (delete n[i],
                        r = !0)
                }
            }
            return ke.isArray(e) ? e.forEach(i) : i(e),
                r
        }
        clear(e) {
            const t = Object.keys(this);
            let n = t.length
                , r = !1;
            for (; n--;) {
                const i = t[n];
                e && !tt(0, this[i], i, e, !0) || (delete this[i],
                    r = !0)
            }
            return r
        }
        normalize(e) {
            const t = this
                , n = {};
            return ke.forEach(this, ((r, i) => {
                const o = ke.findKey(n, i);
                if (o)
                    return t[o] = et(r),
                        void delete t[i];
                const s = e ? function (e) {
                    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
                }(i) : String(i).trim();
                s !== i && delete t[i],
                    t[s] = et(r),
                    n[s] = !0
            }
            )),
                this
        }
        concat(...e) {
            return this.constructor.concat(this, ...e)
        }
        toJSON(e) {
            const t = Object.create(null);
            return ke.forEach(this, ((n, r) => {
                null != n && !1 !== n && (t[r] = e && ke.isArray(n) ? n.join(", ") : n)
            }
            )),
                t
        }
        [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map((([e, t]) => e + ": " + t)).join("\n")
        }
        get [Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(e) {
            return e instanceof this ? e : new this(e)
        }
        static concat(e, ...t) {
            const n = new this(e);
            return t.forEach((e => n.set(e))),
                n
        }
        static accessor(e) {
            const t = (this[Qe] = this[Qe] = {
                accessors: {}
            }).accessors
                , n = this.prototype;
            function r(e) {
                const r = Ye(e);
                t[r] || (!function (e, t) {
                    const n = ke.toCamelCase(" " + t);
                    ["get", "set", "has"].forEach((r => {
                        Object.defineProperty(e, r + n, {
                            value: function (e, n, i) {
                                return this[r].call(this, t, e, n, i)
                            },
                            configurable: !0
                        })
                    }
                    ))
                }(n, e),
                    t[r] = !0)
            }
            return ke.isArray(e) ? e.forEach(r) : r(e),
                this
        }
    }
    function rt(e, t) {
        const n = this || Xe
            , r = t || n
            , i = nt.from(r.headers);
        let o = r.data;
        return ke.forEach(e, (function (e) {
            o = e.call(n, o, i.normalize(), t ? t.status : void 0)
        }
        )),
            i.normalize(),
            o
    }
    function it(e) {
        return !(!e || !e.__CANCEL__)
    }
    function ot(e, t, n) {
        Oe.call(this, null == e ? "canceled" : e, Oe.ERR_CANCELED, t, n),
            this.name = "CanceledError"
    }
    function st(e, t, n) {
        const r = n.config.validateStatus;
        n.status && r && !r(n.status) ? t(new Oe("Request failed with status code " + n.status, [Oe.ERR_BAD_REQUEST, Oe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
    }
    nt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
        ke.reduceDescriptors(nt.prototype, (({ value: e }, t) => {
            let n = t[0].toUpperCase() + t.slice(1);
            return {
                get: () => e,
                set(e) {
                    this[n] = e
                }
            }
        }
        )),
        ke.freezeMethods(nt),
        ke.inherits(ot, Oe, {
            __CANCEL__: !0
        });
    const at = (e, t, n = 3) => {
        let r = 0;
        const i = function (e, t) {
            e = e || 10;
            const n = new Array(e)
                , r = new Array(e);
            let i, o = 0, s = 0;
            return t = void 0 !== t ? t : 1e3,
                function (a) {
                    const l = Date.now()
                        , c = r[s];
                    i || (i = l),
                        n[o] = a,
                        r[o] = l;
                    let u = s
                        , d = 0;
                    for (; u !== o;)
                        d += n[u++],
                            u %= e;
                    if (o = (o + 1) % e,
                        o === s && (s = (s + 1) % e),
                        l - i < t)
                        return;
                    const h = c && l - c;
                    return h ? Math.round(1e3 * d / h) : void 0
                }
        }(50, 250);
        return function (e, t) {
            let n, r, i = 0, o = 1e3 / t;
            const s = (t, o = Date.now()) => {
                i = o,
                    n = null,
                    r && (clearTimeout(r),
                        r = null),
                    e.apply(null, t)
            }
                ;
            return [(...e) => {
                const t = Date.now()
                    , a = t - i;
                a >= o ? s(e, t) : (n = e,
                    r || (r = setTimeout((() => {
                        r = null,
                            s(n)
                    }
                    ), o - a)))
            }
                , () => n && s(n)]
        }((n => {
            const o = n.loaded
                , s = n.lengthComputable ? n.total : void 0
                , a = o - r
                , l = i(a);
            r = o;
            e({
                loaded: o,
                total: s,
                progress: s ? o / s : void 0,
                bytes: a,
                rate: l || void 0,
                estimated: l && s && o <= s ? (s - o) / l : void 0,
                event: n,
                lengthComputable: null != s,
                [t ? "download" : "upload"]: !0
            })
        }
        ), n)
    }
        , lt = (e, t) => {
            const n = null != e;
            return [r => t[0]({
                lengthComputable: n,
                total: e,
                loaded: r
            }), t[1]]
        }
        , ct = e => (...t) => ke.asap((() => e(...t)))
        , ut = Ge.hasStandardBrowserEnv ? function () {
            const e = Ge.navigator && /(msie|trident)/i.test(Ge.navigator.userAgent)
                , t = document.createElement("a");
            let n;
            function r(n) {
                let r = n;
                return e && (t.setAttribute("href", r),
                    r = t.href),
                    t.setAttribute("href", r),
                {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                }
            }
            return n = r(window.location.href),
                function (e) {
                    const t = ke.isString(e) ? r(e) : e;
                    return t.protocol === n.protocol && t.host === n.host
                }
        }() : function () {
            return function () {
                return !0
            }
        }()
        , dt = Ge.hasStandardBrowserEnv ? {
            write(e, t, n, r, i, o) {
                const s = [e + "=" + encodeURIComponent(t)];
                ke.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                    ke.isString(r) && s.push("path=" + r),
                    ke.isString(i) && s.push("domain=" + i),
                    !0 === o && s.push("secure"),
                    document.cookie = s.join("; ")
            },
            read(e) {
                const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() { },
            read: () => null,
            remove() { }
        };
    function ht(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function (e, t) {
            return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
        }(e, t) : t
    }
    const ft = e => e instanceof nt ? {
        ...e
    } : e;
    function pt(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
            return ke.isPlainObject(e) && ke.isPlainObject(t) ? ke.merge.call({
                caseless: n
            }, e, t) : ke.isPlainObject(t) ? ke.merge({}, t) : ke.isArray(t) ? t.slice() : t
        }
        function i(e, t, n) {
            return ke.isUndefined(t) ? ke.isUndefined(e) ? void 0 : r(void 0, e, n) : r(e, t, n)
        }
        function o(e, t) {
            if (!ke.isUndefined(t))
                return r(void 0, t)
        }
        function s(e, t) {
            return ke.isUndefined(t) ? ke.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
        }
        function a(n, i, o) {
            return o in t ? r(n, i) : o in e ? r(void 0, n) : void 0
        }
        const l = {
            url: o,
            method: o,
            data: o,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            withXSRFToken: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            beforeRedirect: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: a,
            headers: (e, t) => i(ft(e), ft(t), !0)
        };
        return ke.forEach(Object.keys(Object.assign({}, e, t)), (function (r) {
            const o = l[r] || i
                , s = o(e[r], t[r], r);
            ke.isUndefined(s) && o !== a || (n[r] = s)
        }
        )),
            n
    }
    const mt = e => {
        const t = pt({}, e);
        let n, { data: r, withXSRFToken: i, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: l } = t;
        if (t.headers = a = nt.from(a),
            t.url = Ue(ht(t.baseURL, t.url), e.params, e.paramsSerializer),
            l && a.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))),
            ke.isFormData(r))
            if (Ge.hasStandardBrowserEnv || Ge.hasStandardBrowserWebWorkerEnv)
                a.setContentType(void 0);
            else if (!1 !== (n = a.getContentType())) {
                const [e, ...t] = n ? n.split(";").map((e => e.trim())).filter(Boolean) : [];
                a.setContentType([e || "multipart/form-data", ...t].join("; "))
            }
        if (Ge.hasStandardBrowserEnv && (i && ke.isFunction(i) && (i = i(t)),
            i || !1 !== i && ut(t.url))) {
            const e = o && s && dt.read(s);
            e && a.set(o, e)
        }
        return t
    }
        , bt = "undefined" != typeof XMLHttpRequest && function (e) {
            return new Promise((function (t, n) {
                const r = mt(e);
                let i = r.data;
                const o = nt.from(r.headers).normalize();
                let s, a, l, c, u, { responseType: d, onUploadProgress: h, onDownloadProgress: f } = r;
                function p() {
                    c && c(),
                        u && u(),
                        r.cancelToken && r.cancelToken.unsubscribe(s),
                        r.signal && r.signal.removeEventListener("abort", s)
                }
                let m = new XMLHttpRequest;
                function b() {
                    if (!m)
                        return;
                    const r = nt.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
                    st((function (e) {
                        t(e),
                            p()
                    }
                    ), (function (e) {
                        n(e),
                            p()
                    }
                    ), {
                        data: d && "text" !== d && "json" !== d ? m.response : m.responseText,
                        status: m.status,
                        statusText: m.statusText,
                        headers: r,
                        config: e,
                        request: m
                    }),
                        m = null
                }
                m.open(r.method.toUpperCase(), r.url, !0),
                    m.timeout = r.timeout,
                    "onloadend" in m ? m.onloadend = b : m.onreadystatechange = function () {
                        m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(b)
                    }
                    ,
                    m.onabort = function () {
                        m && (n(new Oe("Request aborted", Oe.ECONNABORTED, e, m)),
                            m = null)
                    }
                    ,
                    m.onerror = function () {
                        n(new Oe("Network Error", Oe.ERR_NETWORK, e, m)),
                            m = null
                    }
                    ,
                    m.ontimeout = function () {
                        let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
                        const i = r.transitional || ze;
                        r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                            n(new Oe(t, i.clarifyTimeoutError ? Oe.ETIMEDOUT : Oe.ECONNABORTED, e, m)),
                            m = null
                    }
                    ,
                    void 0 === i && o.setContentType(null),
                    "setRequestHeader" in m && ke.forEach(o.toJSON(), (function (e, t) {
                        m.setRequestHeader(t, e)
                    }
                    )),
                    ke.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials),
                    d && "json" !== d && (m.responseType = r.responseType),
                    f && ([l, u] = at(f, !0),
                        m.addEventListener("progress", l)),
                    h && m.upload && ([a, c] = at(h),
                        m.upload.addEventListener("progress", a),
                        m.upload.addEventListener("loadend", c)),
                    (r.cancelToken || r.signal) && (s = t => {
                        m && (n(!t || t.type ? new ot(null, e, m) : t),
                            m.abort(),
                            m = null)
                    }
                        ,
                        r.cancelToken && r.cancelToken.subscribe(s),
                        r.signal && (r.signal.aborted ? s() : r.signal.addEventListener("abort", s)));
                const y = function (e) {
                    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }(r.url);
                y && -1 === Ge.protocols.indexOf(y) ? n(new Oe("Unsupported protocol " + y + ":", Oe.ERR_BAD_REQUEST, e)) : m.send(i || null)
            }
            ))
        }
        , yt = (e, t) => {
            const { length: n } = e = e ? e.filter(Boolean) : [];
            if (t || n) {
                let n, r = new AbortController;
                const i = function (e) {
                    if (!n) {
                        n = !0,
                            s();
                        const t = e instanceof Error ? e : this.reason;
                        r.abort(t instanceof Oe ? t : new ot(t instanceof Error ? t.message : t))
                    }
                };
                let o = t && setTimeout((() => {
                    o = null,
                        i(new Oe(`timeout ${t} of ms exceeded`, Oe.ETIMEDOUT))
                }
                ), t);
                const s = () => {
                    e && (o && clearTimeout(o),
                        o = null,
                        e.forEach((e => {
                            e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i)
                        }
                        )),
                        e = null)
                }
                    ;
                e.forEach((e => e.addEventListener("abort", i)));
                const { signal: a } = r;
                return a.unsubscribe = () => ke.asap(s),
                    a
            }
        }
        , wt = function* (e, t) {
            let n = e.byteLength;
            if (n < t)
                return void (yield e);
            let r, i = 0;
            for (; i < n;)
                r = i + t,
                    yield e.slice(i, r),
                    i = r
        }
        , gt = async function* (e) {
            if (e[Symbol.asyncIterator])
                return void (yield* e);
            const t = e.getReader();
            try {
                for (; ;) {
                    const { done: e, value: n } = await t.read();
                    if (e)
                        break;
                    yield n
                }
            } finally {
                await t.cancel()
            }
        }
        , vt = (e, t, n, r) => {
            const i = async function* (e, t) {
                for await (const n of gt(e))
                    yield* wt(n, t)
            }(e, t);
            let o, s = 0, a = e => {
                o || (o = !0,
                    r && r(e))
            }
                ;
            return new ReadableStream({
                async pull(e) {
                    try {
                        const { done: t, value: r } = await i.next();
                        if (t)
                            return a(),
                                void e.close();
                        let o = r.byteLength;
                        if (n) {
                            let e = s += o;
                            n(e)
                        }
                        e.enqueue(new Uint8Array(r))
                    } catch (t) {
                        throw a(t),
                        t
                    }
                },
                cancel: e => (a(e),
                    i.return())
            }, {
                highWaterMark: 2
            })
        }
        , _t = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response
        , xt = _t && "function" == typeof ReadableStream
        , Et = _t && ("function" == typeof TextEncoder ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
        , St = (e, ...t) => {
            try {
                return !!e(...t)
            } catch (n) {
                return !1
            }
        }
        , Tt = xt && St((() => {
            let e = !1;
            const t = new Request(Ge.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return e = !0,
                        "half"
                }
            }).headers.has("Content-Type");
            return e && !t
        }
        ))
        , kt = xt && St((() => ke.isReadableStream(new Response("").body)))
        , Ot = {
            stream: kt && (e => e.body)
        };
    var At;
    _t && (At = new Response,
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e => {
            !Ot[e] && (Ot[e] = ke.isFunction(At[e]) ? t => t[e]() : (t, n) => {
                throw new Oe(`Response type '${e}' is not supported`, Oe.ERR_NOT_SUPPORT, n)
            }
            )
        }
        )));
    const Ct = async (e, t) => {
        const n = ke.toFiniteNumber(e.getContentLength());
        return null == n ? (async e => {
            if (null == e)
                return 0;
            if (ke.isBlob(e))
                return e.size;
            if (ke.isSpecCompliantForm(e)) {
                const t = new Request(Ge.origin, {
                    method: "POST",
                    body: e
                });
                return (await t.arrayBuffer()).byteLength
            }
            return ke.isArrayBufferView(e) || ke.isArrayBuffer(e) ? e.byteLength : (ke.isURLSearchParams(e) && (e += ""),
                ke.isString(e) ? (await Et(e)).byteLength : void 0)
        }
        )(t) : n
    }
        , Rt = {
            http: null,
            xhr: bt,
            fetch: _t && (async e => {
                let { url: t, method: n, data: r, signal: i, cancelToken: o, timeout: s, onDownloadProgress: a, onUploadProgress: l, responseType: c, headers: u, withCredentials: d = "same-origin", fetchOptions: h } = mt(e);
                c = c ? (c + "").toLowerCase() : "text";
                let f, p = yt([i, o && o.toAbortSignal()], s);
                const m = p && p.unsubscribe && (() => {
                    p.unsubscribe()
                }
                );
                let b;
                try {
                    if (l && Tt && "get" !== n && "head" !== n && 0 !== (b = await Ct(u, r))) {
                        let e, n = new Request(t, {
                            method: "POST",
                            body: r,
                            duplex: "half"
                        });
                        if (ke.isFormData(r) && (e = n.headers.get("content-type")) && u.setContentType(e),
                            n.body) {
                            const [e, t] = lt(b, at(ct(l)));
                            r = vt(n.body, 65536, e, t)
                        }
                    }
                    ke.isString(d) || (d = d ? "include" : "omit");
                    const i = "credentials" in Request.prototype;
                    f = new Request(t, {
                        ...h,
                        signal: p,
                        method: n.toUpperCase(),
                        headers: u.normalize().toJSON(),
                        body: r,
                        duplex: "half",
                        credentials: i ? d : void 0
                    });
                    let o = await fetch(f);
                    const s = kt && ("stream" === c || "response" === c);
                    if (kt && (a || s && m)) {
                        const e = {};
                        ["status", "statusText", "headers"].forEach((t => {
                            e[t] = o[t]
                        }
                        ));
                        const t = ke.toFiniteNumber(o.headers.get("content-length"))
                            , [n, r] = a && lt(t, at(ct(a), !0)) || [];
                        o = new Response(vt(o.body, 65536, n, (() => {
                            r && r(),
                                m && m()
                        }
                        )), e)
                    }
                    c = c || "text";
                    let y = await Ot[ke.findKey(Ot, c) || "text"](o, e);
                    return !s && m && m(),
                        await new Promise(((t, n) => {
                            st(t, n, {
                                data: y,
                                headers: nt.from(o.headers),
                                status: o.status,
                                statusText: o.statusText,
                                config: e,
                                request: f
                            })
                        }
                        ))
                } catch (y) {
                    if (m && m(),
                        y && "TypeError" === y.name && /fetch/i.test(y.message))
                        throw Object.assign(new Oe("Network Error", Oe.ERR_NETWORK, e, f), {
                            cause: y.cause || y
                        });
                    throw Oe.from(y, y && y.code, e, f)
                }
            }
            )
        };
    ke.forEach(Rt, ((e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch (n) { }
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    }
    ));
    const Lt = e => `- ${e}`
        , Pt = e => ke.isFunction(e) || null === e || !1 === e
        , Bt = e => {
            e = ke.isArray(e) ? e : [e];
            const { length: t } = e;
            let n, r;
            const i = {};
            for (let o = 0; o < t; o++) {
                let t;
                if (n = e[o],
                    r = n,
                    !Pt(n) && (r = Rt[(t = String(n)).toLowerCase()],
                        void 0 === r))
                    throw new Oe(`Unknown adapter '${t}'`);
                if (r)
                    break;
                i[t || "#" + o] = r
            }
            if (!r) {
                const e = Object.entries(i).map((([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")));
                throw new Oe("There is no suitable adapter to dispatch the request " + (t ? e.length > 1 ? "since :\n" + e.map(Lt).join("\n") : " " + Lt(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
            }
            return r
        }
        ;
    function Dt(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
            throw new ot(null, e)
    }
    function jt(e) {
        Dt(e),
            e.headers = nt.from(e.headers),
            e.data = rt.call(e, e.transformRequest),
            -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return Bt(e.adapter || Xe.adapter)(e).then((function (t) {
            return Dt(e),
                t.data = rt.call(e, e.transformResponse, t),
                t.headers = nt.from(t.headers),
                t
        }
        ), (function (t) {
            return it(t) || (Dt(e),
                t && t.response && (t.response.data = rt.call(e, e.transformResponse, t.response),
                    t.response.headers = nt.from(t.response.headers))),
                Promise.reject(t)
        }
        ))
    }
    const Nt = "1.7.7"
        , It = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
        It[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
        }
    }
    ));
    const Ft = {};
    It.transitional = function (e, t, n) {
        return (r, i, o) => {
            if (!1 === e)
                throw new Oe(function (e, t) {
                    return "[Axios v1.7.7] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                }(i, " has been removed" + (t ? " in " + t : "")), Oe.ERR_DEPRECATED);
            return t && !Ft[i] && (Ft[i] = !0),
                !e || e(r, i, o)
        }
    }
        ;
    const Ut = {
        assertOptions: function (e, t, n) {
            if ("object" != typeof e)
                throw new Oe("options must be an object", Oe.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let i = r.length;
            for (; i-- > 0;) {
                const o = r[i]
                    , s = t[o];
                if (s) {
                    const t = e[o]
                        , n = void 0 === t || s(t, o, e);
                    if (!0 !== n)
                        throw new Oe("option " + o + " must be " + n, Oe.ERR_BAD_OPTION_VALUE)
                } else if (!0 !== n)
                    throw new Oe("Unknown option " + o, Oe.ERR_BAD_OPTION)
            }
        },
        validators: It
    }
        , Mt = Ut.validators;
    class zt {
        constructor(e) {
            this.defaults = e,
                this.interceptors = {
                    request: new Me,
                    response: new Me
                }
        }
        async request(e, t) {
            try {
                return await this._request(e, t)
            } catch (n) {
                if (n instanceof Error) {
                    let e;
                    Error.captureStackTrace ? Error.captureStackTrace(e = {}) : e = new Error;
                    const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
                    try {
                        n.stack ? t && !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) && (n.stack += "\n" + t) : n.stack = t
                    } catch (r) { }
                }
                throw n
            }
        }
        _request(e, t) {
            "string" == typeof e ? (t = t || {}).url = e : t = e || {},
                t = pt(this.defaults, t);
            const { transitional: n, paramsSerializer: r, headers: i } = t;
            void 0 !== n && Ut.assertOptions(n, {
                silentJSONParsing: Mt.transitional(Mt.boolean),
                forcedJSONParsing: Mt.transitional(Mt.boolean),
                clarifyTimeoutError: Mt.transitional(Mt.boolean)
            }, !1),
                null != r && (ke.isFunction(r) ? t.paramsSerializer = {
                    serialize: r
                } : Ut.assertOptions(r, {
                    encode: Mt.function,
                    serialize: Mt.function
                }, !0)),
                t.method = (t.method || this.defaults.method || "get").toLowerCase();
            let o = i && ke.merge(i.common, i[t.method]);
            i && ke.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
                delete i[e]
            }
            )),
                t.headers = nt.concat(o, i);
            const s = [];
            let a = !0;
            this.interceptors.request.forEach((function (e) {
                "function" == typeof e.runWhen && !1 === e.runWhen(t) || (a = a && e.synchronous,
                    s.unshift(e.fulfilled, e.rejected))
            }
            ));
            const l = [];
            let c;
            this.interceptors.response.forEach((function (e) {
                l.push(e.fulfilled, e.rejected)
            }
            ));
            let u, d = 0;
            if (!a) {
                const e = [jt.bind(this), void 0];
                for (e.unshift.apply(e, s),
                    e.push.apply(e, l),
                    u = e.length,
                    c = Promise.resolve(t); d < u;)
                    c = c.then(e[d++], e[d++]);
                return c
            }
            u = s.length;
            let h = t;
            for (d = 0; d < u;) {
                const e = s[d++]
                    , t = s[d++];
                try {
                    h = e(h)
                } catch (f) {
                    t.call(this, f);
                    break
                }
            }
            try {
                c = jt.call(this, h)
            } catch (f) {
                return Promise.reject(f)
            }
            for (d = 0,
                u = l.length; d < u;)
                c = c.then(l[d++], l[d++]);
            return c
        }
        getUri(e) {
            return Ue(ht((e = pt(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
        }
    }
    ke.forEach(["delete", "get", "head", "options"], (function (e) {
        zt.prototype[e] = function (t, n) {
            return this.request(pt(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }))
        }
    }
    )),
        ke.forEach(["post", "put", "patch"], (function (e) {
            function t(t) {
                return function (n, r, i) {
                    return this.request(pt(i || {}, {
                        method: e,
                        headers: t ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url: n,
                        data: r
                    }))
                }
            }
            zt.prototype[e] = t(),
                zt.prototype[e + "Form"] = t(!0)
        }
        ));
    class qt {
        constructor(e) {
            if ("function" != typeof e)
                throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise((function (e) {
                t = e
            }
            ));
            const n = this;
            this.promise.then((e => {
                if (!n._listeners)
                    return;
                let t = n._listeners.length;
                for (; t-- > 0;)
                    n._listeners[t](e);
                n._listeners = null
            }
            )),
                this.promise.then = e => {
                    let t;
                    const r = new Promise((e => {
                        n.subscribe(e),
                            t = e
                    }
                    )).then(e);
                    return r.cancel = function () {
                        n.unsubscribe(t)
                    }
                        ,
                        r
                }
                ,
                e((function (e, r, i) {
                    n.reason || (n.reason = new ot(e, r, i),
                        t(n.reason))
                }
                ))
        }
        throwIfRequested() {
            if (this.reason)
                throw this.reason
        }
        subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
        unsubscribe(e) {
            if (!this._listeners)
                return;
            const t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1)
        }
        toAbortSignal() {
            const e = new AbortController
                , t = t => {
                    e.abort(t)
                }
                ;
            return this.subscribe(t),
                e.signal.unsubscribe = () => this.unsubscribe(t),
                e.signal
        }
        static source() {
            let e;
            return {
                token: new qt((function (t) {
                    e = t
                }
                )),
                cancel: e
            }
        }
    }
    const Ht = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(Ht).forEach((([e, t]) => {
        Ht[t] = e
    }
    ));
    const Wt = function e(t) {
        const n = new zt(t)
            , r = F(zt.prototype.request, n);
        return ke.extend(r, zt.prototype, n, {
            allOwnKeys: !0
        }),
            ke.extend(r, n, null, {
                allOwnKeys: !0
            }),
            r.create = function (n) {
                return e(pt(t, n))
            }
            ,
            r
    }(Xe);
    Wt.Axios = zt,
        Wt.CanceledError = ot,
        Wt.CancelToken = qt,
        Wt.isCancel = it,
        Wt.VERSION = Nt,
        Wt.toFormData = De,
        Wt.AxiosError = Oe,
        Wt.Cancel = Wt.CanceledError,
        Wt.all = function (e) {
            return Promise.all(e)
        }
        ,
        Wt.spread = function (e) {
            return function (t) {
                return e.apply(null, t)
            }
        }
        ,
        Wt.isAxiosError = function (e) {
            return ke.isObject(e) && !0 === e.isAxiosError
        }
        ,
        Wt.mergeConfig = pt,
        Wt.AxiosHeaders = nt,
        Wt.formToJSON = e => Je(ke.isHTMLForm(e) ? new FormData(e) : e),
        Wt.getAdapter = Bt,
        Wt.HttpStatusCode = Ht,
        Wt.default = Wt;
    const Kt = Wt.create({
        baseURL: "https://ad.ton-ads.com/ad",
        headers: {
            "Content-Type": "application/json"
        }
    });
    var Vt = {
        exports: {}
    };
    var $t = {
        exports: {}
    };
    const Gt = i(Object.freeze(Object.defineProperty({
        __proto__: null,
        default: {}
    }, Symbol.toStringTag, {
        value: "Module"
    })));
    var Jt;
    function Xt() {
        return Jt || (Jt = 1,
            $t.exports = (e = e || function (e, t) {
                var r;
                if ("undefined" != typeof window && window.crypto && (r = window.crypto),
                    "undefined" != typeof self && self.crypto && (r = self.crypto),
                    "undefined" != typeof globalThis && globalThis.crypto && (r = globalThis.crypto),
                    !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto),
                    !r && void 0 !== n && n.crypto && (r = n.crypto),
                    !r)
                    try {
                        r = Gt
                    } catch (b) { }
                var i = function () {
                    if (r) {
                        if ("function" == typeof r.getRandomValues)
                            try {
                                return r.getRandomValues(new Uint32Array(1))[0]
                            } catch (b) { }
                        if ("function" == typeof r.randomBytes)
                            try {
                                return r.randomBytes(4).readInt32LE()
                            } catch (b) { }
                    }
                    throw new Error("Native crypto module could not be used to get secure random number.")
                }
                    , o = Object.create || function () {
                        function e() { }
                        return function (t) {
                            var n;
                            return e.prototype = t,
                                n = new e,
                                e.prototype = null,
                                n
                        }
                    }()
                    , s = {}
                    , a = s.lib = {}
                    , l = a.Base = function () {
                        return {
                            extend: function (e) {
                                var t = o(this);
                                return e && t.mixIn(e),
                                    t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
                                        t.$super.init.apply(this, arguments)
                                    }
                                    ),
                                    t.init.prototype = t,
                                    t.$super = this,
                                    t
                            },
                            create: function () {
                                var e = this.extend();
                                return e.init.apply(e, arguments),
                                    e
                            },
                            init: function () { },
                            mixIn: function (e) {
                                for (var t in e)
                                    e.hasOwnProperty(t) && (this[t] = e[t]);
                                e.hasOwnProperty("toString") && (this.toString = e.toString)
                            },
                            clone: function () {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }()
                    , c = a.WordArray = l.extend({
                        init: function (e, n) {
                            e = this.words = e || [],
                                this.sigBytes = n != t ? n : 4 * e.length
                        },
                        toString: function (e) {
                            return (e || d).stringify(this)
                        },
                        concat: function (e) {
                            var t = this.words
                                , n = e.words
                                , r = this.sigBytes
                                , i = e.sigBytes;
                            if (this.clamp(),
                                r % 4)
                                for (var o = 0; o < i; o++) {
                                    var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    t[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8
                                }
                            else
                                for (var a = 0; a < i; a += 4)
                                    t[r + a >>> 2] = n[a >>> 2];
                            return this.sigBytes += i,
                                this
                        },
                        clamp: function () {
                            var t = this.words
                                , n = this.sigBytes;
                            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                                t.length = e.ceil(n / 4)
                        },
                        clone: function () {
                            var e = l.clone.call(this);
                            return e.words = this.words.slice(0),
                                e
                        },
                        random: function (e) {
                            for (var t = [], n = 0; n < e; n += 4)
                                t.push(i());
                            return new c.init(t, e)
                        }
                    })
                    , u = s.enc = {}
                    , d = u.Hex = {
                        stringify: function (e) {
                            for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                                var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                r.push((o >>> 4).toString(16)),
                                    r.push((15 & o).toString(16))
                            }
                            return r.join("")
                        },
                        parse: function (e) {
                            for (var t = e.length, n = [], r = 0; r < t; r += 2)
                                n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                            return new c.init(n, t / 2)
                        }
                    }
                    , h = u.Latin1 = {
                        stringify: function (e) {
                            for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                                var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                r.push(String.fromCharCode(o))
                            }
                            return r.join("")
                        },
                        parse: function (e) {
                            for (var t = e.length, n = [], r = 0; r < t; r++)
                                n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                            return new c.init(n, t)
                        }
                    }
                    , f = u.Utf8 = {
                        stringify: function (e) {
                            try {
                                return decodeURIComponent(escape(h.stringify(e)))
                            } catch (t) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function (e) {
                            return h.parse(unescape(encodeURIComponent(e)))
                        }
                    }
                    , p = a.BufferedBlockAlgorithm = l.extend({
                        reset: function () {
                            this._data = new c.init,
                                this._nDataBytes = 0
                        },
                        _append: function (e) {
                            "string" == typeof e && (e = f.parse(e)),
                                this._data.concat(e),
                                this._nDataBytes += e.sigBytes
                        },
                        _process: function (t) {
                            var n, r = this._data, i = r.words, o = r.sigBytes, s = this.blockSize, a = o / (4 * s), l = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s, u = e.min(4 * l, o);
                            if (l) {
                                for (var d = 0; d < l; d += s)
                                    this._doProcessBlock(i, d);
                                n = i.splice(0, l),
                                    r.sigBytes -= u
                            }
                            return new c.init(n, u)
                        },
                        clone: function () {
                            var e = l.clone.call(this);
                            return e._data = this._data.clone(),
                                e
                        },
                        _minBufferSize: 0
                    });
                a.Hasher = p.extend({
                    cfg: l.extend(),
                    init: function (e) {
                        this.cfg = this.cfg.extend(e),
                            this.reset()
                    },
                    reset: function () {
                        p.reset.call(this),
                            this._doReset()
                    },
                    update: function (e) {
                        return this._append(e),
                            this._process(),
                            this
                    },
                    finalize: function (e) {
                        return e && this._append(e),
                            this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function (e) {
                        return function (t, n) {
                            return new e.init(n).finalize(t)
                        }
                    },
                    _createHmacHelper: function (e) {
                        return function (t, n) {
                            return new m.HMAC.init(e, n).finalize(t)
                        }
                    }
                });
                var m = s.algo = {};
                return s
            }(Math),
                e)),
            $t.exports;
        var e
    }
    var Zt, Qt = {
        exports: {}
    };
    function Yt() {
        return Zt || (Zt = 1,
            Qt.exports = (e = Xt(),
                function (t) {
                    var n = e
                        , r = n.lib
                        , i = r.WordArray
                        , o = r.Hasher
                        , s = n.algo
                        , a = []
                        , l = [];
                    !function () {
                        function e(e) {
                            for (var n = t.sqrt(e), r = 2; r <= n; r++)
                                if (!(e % r))
                                    return !1;
                            return !0
                        }
                        function n(e) {
                            return 4294967296 * (e - (0 | e)) | 0
                        }
                        for (var r = 2, i = 0; i < 64;)
                            e(r) && (i < 8 && (a[i] = n(t.pow(r, .5))),
                                l[i] = n(t.pow(r, 1 / 3)),
                                i++),
                                r++
                    }();
                    var c = []
                        , u = s.SHA256 = o.extend({
                            _doReset: function () {
                                this._hash = new i.init(a.slice(0))
                            },
                            _doProcessBlock: function (e, t) {
                                for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], u = n[5], d = n[6], h = n[7], f = 0; f < 64; f++) {
                                    if (f < 16)
                                        c[f] = 0 | e[t + f];
                                    else {
                                        var p = c[f - 15]
                                            , m = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3
                                            , b = c[f - 2]
                                            , y = (b << 15 | b >>> 17) ^ (b << 13 | b >>> 19) ^ b >>> 10;
                                        c[f] = m + c[f - 7] + y + c[f - 16]
                                    }
                                    var w = r & i ^ r & o ^ i & o
                                        , g = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22)
                                        , v = h + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & u ^ ~a & d) + l[f] + c[f];
                                    h = d,
                                        d = u,
                                        u = a,
                                        a = s + v | 0,
                                        s = o,
                                        o = i,
                                        i = r,
                                        r = v + (g + w) | 0
                                }
                                n[0] = n[0] + r | 0,
                                    n[1] = n[1] + i | 0,
                                    n[2] = n[2] + o | 0,
                                    n[3] = n[3] + s | 0,
                                    n[4] = n[4] + a | 0,
                                    n[5] = n[5] + u | 0,
                                    n[6] = n[6] + d | 0,
                                    n[7] = n[7] + h | 0
                            },
                            _doFinalize: function () {
                                var e = this._data
                                    , n = e.words
                                    , r = 8 * this._nDataBytes
                                    , i = 8 * e.sigBytes;
                                return n[i >>> 5] |= 128 << 24 - i % 32,
                                    n[14 + (i + 64 >>> 9 << 4)] = t.floor(r / 4294967296),
                                    n[15 + (i + 64 >>> 9 << 4)] = r,
                                    e.sigBytes = 4 * n.length,
                                    this._process(),
                                    this._hash
                            },
                            clone: function () {
                                var e = o.clone.call(this);
                                return e._hash = this._hash.clone(),
                                    e
                            }
                        });
                    n.SHA256 = o._createHelper(u),
                        n.HmacSHA256 = o._createHmacHelper(u)
                }(Math),
                e.SHA256)),
            Qt.exports;
        var e
    }
    var en, tn, nn, rn, on, sn = {
        exports: {}
    };
    Vt.exports = function (e) {
        return e.HmacSHA256
    }(Xt(), Yt(), en || (en = 1,
        sn.exports = (tn = Xt(),
            rn = (nn = tn).lib.Base,
            on = nn.enc.Utf8,
            void (nn.algo.HMAC = rn.extend({
                init: function (e, t) {
                    e = this._hasher = new e.init,
                        "string" == typeof t && (t = on.parse(t));
                    var n = e.blockSize
                        , r = 4 * n;
                    t.sigBytes > r && (t = e.finalize(t)),
                        t.clamp();
                    for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), s = i.words, a = o.words, l = 0; l < n; l++)
                        s[l] ^= 1549556828,
                            a[l] ^= 909522486;
                    i.sigBytes = o.sigBytes = r,
                        this.reset()
                },
                reset: function () {
                    var e = this._hasher;
                    e.reset(),
                        e.update(this._iKey)
                },
                update: function (e) {
                    return this._hasher.update(e),
                        this
                },
                finalize: function (e) {
                    var t = this._hasher
                        , n = t.finalize(e);
                    return t.reset(),
                        t.finalize(this._oKey.clone().concat(n))
                }
            })))));
    const an = r(Vt.exports);
    var ln = {
        exports: {}
    };
    !function (e) {
        e.exports = function (e) {
            return e.enc.Hex
        }(Xt())
    }(ln);
    const cn = r(ln.exports);
    class un {
        constructor() {
            t(this, "_backendPaths"),
                t(this, "_ephemeralKey", null),
                t(this, "_sharedSecret", "TonAdsSuperSecret"),
                this._backendPaths = {
                    getAdContent: "/get",
                    getCooldown: "/cooldown",
                    show: "/show",
                    fullView: "/fullView",
                    viewSource: "/viewsource",
                    exchangeKey: "/exchangeKey",
                    hasAnyAd: "/hasAnyAd"
                }
        }
        async initKeyExchange() {
            const e = I();
            if (!e)
                throw new Error("Token is empty!");
            const t = this._backendPaths.exchangeKey
                , n = (await Kt.post(t, {}, {
                    headers: {
                        "X-SDK-Token": e
                    }
                })).data.nonce;
            this._ephemeralKey = this._generateHmac(this._sharedSecret, n)
        }
        async requestWithSignature(e, t, n) {
            var r;
            const i = I();
            if (!i)
                throw new Error("Token is empty!");
            this._ephemeralKey || await this.initKeyExchange();
            const { timestamp: o, signature: s } = this._signRequest(i)
                , a = {
                    "X-SDK-Token": i,
                    "X-SDK-Timestamp": o,
                    "X-SDK-Signature": s
                };
            try {
                return (await Kt.request({
                    method: e,
                    url: t,
                    headers: a,
                    ...n || {}
                })).data
            } catch (l) {
                if (400 === (null == (r = null == l ? void 0 : l.response) ? void 0 : r.status)) {
                    await this.initKeyExchange();
                    const { timestamp: r, signature: o } = this._signRequest(i)
                        , s = {
                            "X-SDK-Token": i,
                            "X-SDK-Timestamp": r,
                            "X-SDK-Signature": o
                        };
                    try {
                        return (await Kt.request({
                            method: e,
                            url: t,
                            headers: s,
                            ...n || {}
                        })).data
                    } catch (c) {
                        throw c
                    }
                }
                throw l
            }
        }
        _signRequest(e) {
            if (!this._ephemeralKey)
                throw new Error("Ephemeral key is null. initKeyExchange() not called?");
            const t = Date.now().toString()
                , n = t + e;
            return {
                timestamp: t,
                signature: this._generateHmac(this._ephemeralKey, n)
            }
        }
        _generateHmac(e, t) {
            return an(t, e).toString(cn)
        }
        async getAdContent(e) {
            const t = new URLSearchParams({
                token: I(),
                platform: e.platform,
                premiumStatus: e.premiumStatus
            })
                , n = `${this._backendPaths.getAdContent}?${t.toString()}`;
            return this.requestWithSignature("get", n)
        }
        async getCooldown() {
            const e = I()
                , t = `${this._backendPaths.getCooldown}?token=${e}`;
            return this.requestWithSignature("get", t)
        }
        async confirmFullView(e) {
            const t = I()
                , n = `${this._backendPaths.fullView}?token=${t}&guid=${e}`;
            return this.requestWithSignature("get", n)
        }
        async confirmShow(e) {
            const t = I()
                , n = `${this._backendPaths.show}?token=${t}&guid=${e}`;
            return this.requestWithSignature("get", n)
        }
        async checkForAd(e) {
            const t = new URLSearchParams({
                token: I(),
                platform: e.platform,
                premiumStatus: e.premiumStatus
            })
                , n = `${this._backendPaths.hasAnyAd}?${t.toString()}`;
            return this.requestWithSignature("get", n)
        }
        async confirmClickOnSource(e) {
            const t = I()
                , n = `${this._backendPaths.viewSource}?token=${t}&guid=${e}`;
            return this.requestWithSignature("get", n)
        }
    }
    var dn = {
        exports: {}
    };
    !function (e, t) {
        !function (n, r) {
            var i = "function"
                , o = "undefined"
                , s = "object"
                , a = "string"
                , l = "major"
                , c = "model"
                , u = "name"
                , d = "type"
                , h = "vendor"
                , f = "version"
                , p = "architecture"
                , m = "console"
                , b = "mobile"
                , y = "tablet"
                , w = "smarttv"
                , g = "wearable"
                , v = "embedded"
                , _ = "Amazon"
                , x = "Apple"
                , E = "ASUS"
                , S = "BlackBerry"
                , T = "Browser"
                , k = "Chrome"
                , O = "Firefox"
                , A = "Google"
                , C = "Huawei"
                , R = "LG"
                , L = "Microsoft"
                , P = "Motorola"
                , B = "Opera"
                , D = "Samsung"
                , j = "Sharp"
                , N = "Sony"
                , I = "Xiaomi"
                , F = "Zebra"
                , U = "Facebook"
                , M = "Chromium OS"
                , z = "Mac OS"
                , q = " Browser"
                , H = function (e) {
                    for (var t = {}, n = 0; n < e.length; n++)
                        t[e[n].toUpperCase()] = e[n];
                    return t
                }
                , W = function (e, t) {
                    return typeof e === a && -1 !== K(t).indexOf(K(e))
                }
                , K = function (e) {
                    return e.toLowerCase()
                }
                , V = function (e, t) {
                    if (typeof e === a)
                        return e = e.replace(/^\s\s*/, ""),
                            typeof t === o ? e : e.substring(0, 500)
                }
                , $ = function (e, t) {
                    for (var n, o, a, l, c, u, d = 0; d < t.length && !c;) {
                        var h = t[d]
                            , f = t[d + 1];
                        for (n = o = 0; n < h.length && !c && h[n];)
                            if (c = h[n++].exec(e))
                                for (a = 0; a < f.length; a++)
                                    u = c[++o],
                                        typeof (l = f[a]) === s && l.length > 0 ? 2 === l.length ? typeof l[1] == i ? this[l[0]] = l[1].call(this, u) : this[l[0]] = l[1] : 3 === l.length ? typeof l[1] !== i || l[1].exec && l[1].test ? this[l[0]] = u ? u.replace(l[1], l[2]) : r : this[l[0]] = u ? l[1].call(this, u, l[2]) : r : 4 === l.length && (this[l[0]] = u ? l[3].call(this, u.replace(l[1], l[2])) : r) : this[l] = u || r;
                        d += 2
                    }
                }
                , G = function (e, t) {
                    for (var n in t)
                        if (typeof t[n] === s && t[n].length > 0) {
                            for (var i = 0; i < t[n].length; i++)
                                if (W(t[n][i], e))
                                    return "?" === n ? r : n
                        } else if (W(t[n], e))
                            return "?" === n ? r : n;
                    return t.hasOwnProperty("*") ? t["*"] : e
                }
                , J = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                }
                , X = {
                    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [f, [u, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [f, [u, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [u, f], [/opios[\/ ]+([\w\.]+)/i], [f, [u, B + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [f, [u, B + " GX"]], [/\bopr\/([\w\.]+)/i], [f, [u, B]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [f, [u, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [u, f], [/quark(?:pc)?\/([-\w\.]+)/i], [f, [u, "Quark"]], [/\bddg\/([\w\.]+)/i], [f, [u, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [f, [u, "UC" + T]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [f, [u, "WeChat"]], [/konqueror\/([\w\.]+)/i], [f, [u, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [f, [u, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [f, [u, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [f, [u, "Smart Lenovo " + T]], [/(avast|avg)\/([\w\.]+)/i], [[u, /(.+)/, "$1 Secure " + T], f], [/\bfocus\/([\w\.]+)/i], [f, [u, O + " Focus"]], [/\bopt\/([\w\.]+)/i], [f, [u, B + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [f, [u, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [f, [u, "Dolphin"]], [/coast\/([\w\.]+)/i], [f, [u, B + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [f, [u, "MIUI " + T]], [/fxios\/([-\w\.]+)/i], [f, [u, O]], [/\bqihu|(qi?ho?o?|360)browser/i], [[u, "360" + q]], [/\b(qq)\/([\w\.]+)/i], [[u, /(.+)/, "$1Browser"], f], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [[u, /(.+)/, "$1" + q], f], [/samsungbrowser\/([\w\.]+)/i], [f, [u, D + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[u, /_/g, " "], f], [/metasr[\/ ]?([\d\.]+)/i], [f, [u, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[u, "Sogou Mobile"], f], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [u, f], [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i], [u], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[u, U], f], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [u, f], [/\bgsa\/([\w\.]+) .*safari\//i], [f, [u, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [f, [u, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [f, [u, k + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[u, k + " WebView"], f], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [f, [u, "Android " + T]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [u, f], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [f, [u, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [f, u], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [u, [f, G, {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]], [/(webkit|khtml)\/([\w\.]+)/i], [u, f], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[u, "Netscape"], f], [/(wolvic)\/([\w\.]+)/i], [u, f], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [f, [u, O + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [u, [f, /_/g, "."]], [/(cobalt)\/([\w\.]+)/i], [u, [f, /master.|lts./, ""]]],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[p, "amd64"]], [/(ia32(?=;))/i], [[p, K]], [/((?:i[346]|x)86)[;\)]/i], [[p, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[p, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[p, "armhf"]], [/windows (ce|mobile); ppc;/i], [[p, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[p, /ower/, "", K]], [/(sun4\w)[;\)]/i], [[p, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[p, K]]],
                    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [h, D], [d, y]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i], [c, [h, D], [d, b]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [h, x], [d, b]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [h, x], [d, y]], [/(macintosh);/i], [c, [h, x]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [h, j], [d, b]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [h, C], [d, y]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [h, C], [d, b]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i], [[c, /_/g, " "], [h, I], [d, b]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [h, I], [d, y]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [h, "OPPO"], [d, b]], [/\b(opd2\d{3}a?) bui/i], [c, [h, "OPPO"], [d, y]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [h, "Vivo"], [d, b]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [c, [h, "Realme"], [d, b]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [h, P], [d, b]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [h, P], [d, y]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [h, R], [d, y]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [h, R], [d, b]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [h, "Lenovo"], [d, y]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [h, "Nokia"], [d, b]], [/(pixel c)\b/i], [c, [h, A], [d, y]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [h, A], [d, b]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [h, N], [d, b]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [h, N], [d, y]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [h, "OnePlus"], [d, b]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [h, _], [d, y]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [h, _], [d, b]], [/(playbook);[-\w\),; ]+(rim)/i], [c, h, [d, y]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [h, S], [d, b]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [h, E], [d, y]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [h, E], [d, b]], [/(nexus 9)/i], [c, [h, "HTC"], [d, y]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [h, [c, /_/g, " "], [d, b]], [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i], [c, [h, "TCL"], [d, y]], [/(itel) ((\w+))/i], [[h, K], c, [d, G, {
                        tablet: ["p10001l", "w7001"],
                        "*": "mobile"
                    }]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [h, "Acer"], [d, y]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [h, "Meizu"], [d, b]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [c, [h, "Ulefone"], [d, b]], [/droid.+; (a(?:015|06[35]|142p?))/i], [c, [h, "Nothing"], [d, b]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [h, c, [d, b]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [h, c, [d, y]], [/(surface duo)/i], [c, [h, L], [d, y]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [h, "Fairphone"], [d, b]], [/(u304aa)/i], [c, [h, "AT&T"], [d, b]], [/\bsie-(\w*)/i], [c, [h, "Siemens"], [d, b]], [/\b(rct\w+) b/i], [c, [h, "RCA"], [d, y]], [/\b(venue[\d ]{2,7}) b/i], [c, [h, "Dell"], [d, y]], [/\b(q(?:mv|ta)\w+) b/i], [c, [h, "Verizon"], [d, y]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [h, "Barnes & Noble"], [d, y]], [/\b(tm\d{3}\w+) b/i], [c, [h, "NuVision"], [d, y]], [/\b(k88) b/i], [c, [h, "ZTE"], [d, y]], [/\b(nx\d{3}j) b/i], [c, [h, "ZTE"], [d, b]], [/\b(gen\d{3}) b.+49h/i], [c, [h, "Swiss"], [d, b]], [/\b(zur\d{3}) b/i], [c, [h, "Swiss"], [d, y]], [/\b((zeki)?tb.*\b) b/i], [c, [h, "Zeki"], [d, y]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[h, "Dragon Touch"], c, [d, y]], [/\b(ns-?\w{0,9}) b/i], [c, [h, "Insignia"], [d, y]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [h, "NextBook"], [d, y]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[h, "Voice"], c, [d, b]], [/\b(lvtel\-)?(v1[12]) b/i], [[h, "LvTel"], c, [d, b]], [/\b(ph-1) /i], [c, [h, "Essential"], [d, b]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [h, "Envizen"], [d, y]], [/\b(trio[-\w\. ]+) b/i], [c, [h, "MachSpeed"], [d, y]], [/\btu_(1491) b/i], [c, [h, "Rotor"], [d, y]], [/(shield[\w ]+) b/i], [c, [h, "Nvidia"], [d, y]], [/(sprint) (\w+)/i], [h, c, [d, b]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [h, L], [d, b]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [h, F], [d, y]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [h, F], [d, b]], [/smart-tv.+(samsung)/i], [h, [d, w]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [h, D], [d, w]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[h, R], [d, w]], [/(apple) ?tv/i], [h, [c, x + " TV"], [d, w]], [/crkey/i], [[c, k + "cast"], [h, A], [d, w]], [/droid.+aft(\w+)( bui|\))/i], [c, [h, _], [d, w]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [h, j], [d, w]], [/(bravia[\w ]+)( bui|\))/i], [c, [h, N], [d, w]], [/(mitv-\w{5}) bui/i], [c, [h, I], [d, w]], [/Hbbtv.*(technisat) (.*);/i], [h, c, [d, w]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[h, V], [c, V], [d, w]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, w]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [h, c, [d, m]], [/droid.+; (shield) bui/i], [c, [h, "Nvidia"], [d, m]], [/(playstation [345portablevi]+)/i], [c, [h, N], [d, m]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [h, L], [d, m]], [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i], [c, [h, D], [d, g]], [/((pebble))app/i], [h, c, [d, g]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [h, x], [d, g]], [/droid.+; (glass) \d/i], [c, [h, A], [d, g]], [/droid.+; (wt63?0{2,3})\)/i], [c, [h, F], [d, g]], [/(quest( \d| pro)?)/i], [c, [h, U], [d, g]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [h, [d, v]], [/(aeobc)\b/i], [c, [h, _], [d, v]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [c, [d, b]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [d, y]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, y]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[d, b]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [h, "Generic"]]],
                    engine: [[/windows.+ edge\/([\w\.]+)/i], [f, [u, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [f, [u, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [u, f], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [f, u]],
                    os: [[/microsoft (windows) (vista|xp)/i], [u, f], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [u, [f, G, J]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[f, G, J], [u, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[f, /_/g, "."], [u, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[u, z], [f, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [f, u], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [u, f], [/\(bb(10);/i], [f, [u, S]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [f, [u, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [f, [u, O + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [f, [u, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [f, [u, "watchOS"]], [/crkey\/([\d\.]+)/i], [f, [u, k + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[u, M], f], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [u, f], [/(sunos) ?([\w\.\d]*)/i], [[u, "Solaris"], f], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [u, f]]
                }
                , Z = function (e, t) {
                    if (typeof e === s && (t = e,
                        e = r),
                        !(this instanceof Z))
                        return new Z(e, t).getResult();
                    var m = typeof n !== o && n.navigator ? n.navigator : r
                        , w = e || (m && m.userAgent ? m.userAgent : "")
                        , g = m && m.userAgentData ? m.userAgentData : r
                        , v = t ? function (e, t) {
                            var n = {};
                            for (var r in e)
                                t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                            return n
                        }(X, t) : X
                        , _ = m && m.userAgent == w;
                    return this.getBrowser = function () {
                        var e, t = {};
                        return t[u] = r,
                            t[f] = r,
                            $.call(t, w, v.browser),
                            t[l] = typeof (e = t[f]) === a ? e.replace(/[^\d\.]/g, "").split(".")[0] : r,
                            _ && m && m.brave && typeof m.brave.isBrave == i && (t[u] = "Brave"),
                            t
                    }
                        ,
                        this.getCPU = function () {
                            var e = {};
                            return e[p] = r,
                                $.call(e, w, v.cpu),
                                e
                        }
                        ,
                        this.getDevice = function () {
                            var e = {};
                            return e[h] = r,
                                e[c] = r,
                                e[d] = r,
                                $.call(e, w, v.device),
                                _ && !e[d] && g && g.mobile && (e[d] = b),
                                _ && "Macintosh" == e[c] && m && typeof m.standalone !== o && m.maxTouchPoints && m.maxTouchPoints > 2 && (e[c] = "iPad",
                                    e[d] = y),
                                e
                        }
                        ,
                        this.getEngine = function () {
                            var e = {};
                            return e[u] = r,
                                e[f] = r,
                                $.call(e, w, v.engine),
                                e
                        }
                        ,
                        this.getOS = function () {
                            var e = {};
                            return e[u] = r,
                                e[f] = r,
                                $.call(e, w, v.os),
                                _ && !e[u] && g && g.platform && "Unknown" != g.platform && (e[u] = g.platform.replace(/chrome os/i, M).replace(/macos/i, z)),
                                e
                        }
                        ,
                        this.getResult = function () {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }
                        ,
                        this.getUA = function () {
                            return w
                        }
                        ,
                        this.setUA = function (e) {
                            return w = typeof e === a && e.length > 500 ? V(e, 500) : e,
                                this
                        }
                        ,
                        this.setUA(w),
                        this
                };
            Z.VERSION = "1.0.39",
                Z.BROWSER = H([u, f, l]),
                Z.CPU = H([p]),
                Z.DEVICE = H([c, h, d, m, b, w, y, g, v]),
                Z.ENGINE = Z.OS = H([u, f]),
                e.exports && (t = e.exports = Z),
                t.UAParser = Z;
            var Q = typeof n !== o && (n.jQuery || n.Zepto);
            if (Q && !Q.ua) {
                var Y = new Z;
                Q.ua = Y.getResult(),
                    Q.ua.get = function () {
                        return Y.getUA()
                    }
                    ,
                    Q.ua.set = function (e) {
                        Y.setUA(e);
                        var t = Y.getResult();
                        for (var n in t)
                            Q.ua[n] = t[n]
                    }
            }
        }("object" == typeof window ? window : n)
    }(dn, dn.exports);
    const hn = new (r(dn.exports));
    var fn = (e => (e.HAS_TG_PREMIUM = "HasTelegramPremium",
        e.NO_TG_PREMIUM = "NoTelegramPremium",
        e.OUTSIDE_TG = "OutsideTelegram",
        e))(fn || {});
    class pn {
        constructor() {
            t(this, "_isInTelegramContext"),
                t(this, "_isTelegramPremium"),
                t(this, "_platform"),
                this._isInTelegramContext = !1,
                this._platform = "iOS",
                this._isTelegramPremium = fn.OUTSIDE_TG,
                this._definePlatform(),
                this._defineTgContext()
        }
        _definePlatform() {
            const e = hn.getOS();
            this._platform = e.name
        }
        _defineTgContext() {
            var e, t, n, r, i;
            const o = !!(null == (e = null == window ? void 0 : window.Telegram) ? void 0 : e.WebApp)
                , s = !!(null == (i = null == (r = null == (n = null == (t = null == window ? void 0 : window.Telegram) ? void 0 : t.WebApp) ? void 0 : n.initDataUnsafe) ? void 0 : r.user) ? void 0 : i.is_premium);
            if (!o)
                return this._isInTelegramContext = !1,
                    void (this._isTelegramPremium = fn.OUTSIDE_TG);
            o && (this._isInTelegramContext = !0,
                this._isTelegramPremium = s ? fn.HAS_TG_PREMIUM : fn.NO_TG_PREMIUM)
        }
        getUserPlatform() {
            return this._platform
        }
        getIsInTgContext() {
            return this._isInTelegramContext
        }
        getIsTelegramPremium() {
            return this._isTelegramPremium
        }
    }
    const mn = () => {
        localStorage.removeItem(A)
    }
        , bn = e => {
            const t = document.getElementById(e);
            t && t.remove()
        }
        , yn = class e extends _.EventEmitter {
            constructor() {
                super(),
                    t(this, "_config", null),
                    t(this, "_timerStatusKey", "timerStatus"),
                    t(this, "_elementsFabric"),
                    t(this, "_apiClient"),
                    t(this, "_closeButton", null),
                    t(this, "_isViewCompleted", !1),
                    t(this, "_userData"),
                    this._elementsFabric = new N,
                    this._apiClient = new un,
                    this._userData = new pn,
                    this._listenChildEvents(),
                    mn(),
                    this._removeTimerStatus()
            }
            static getInstance() {
                return e._instance || (e._instance = new e),
                    e._instance
            }
            async init(e) {
                if (this._config)
                    return void this._emitEvent(x.SDK_ALREADY_INITIALIZED);
                localStorage.setItem(O, e.token.toUpperCase()),
                    this._config = e,
                    this._emitEvent(x.SDK_INITIALIZED);
                const t = await this._apiClient.getCooldown();
                "number" == typeof t && this._emitEvent(x.COOL_DOWN, {
                    cooldownSecs: t
                })
            }
            destroy() {
                mn(),
                    this._elementsFabric.removeAllListeners(),
                    window.tonAdsSDK = null
            }
            async checkForAd() {
                var e;
                if (!(null == (e = this._config) ? void 0 : e.token))
                    throw new Error("SDK not initialized");
                try {
                    const e = await this._apiClient.checkForAd({
                        platform: this._userData.getUserPlatform(),
                        premiumStatus: this._userData.getIsTelegramPremium()
                    });
                    return "number" == typeof e && this._emitEvent(x.COOL_DOWN, {
                        cooldownSecs: e
                    }),
                        e
                } catch {
                    return null
                }
            }
            async show() {
                var e;
                if (!(null == (e = this._config) ? void 0 : e.token))
                    throw new Error("SDK not initialized");
                try {
                    const e = await this._apiClient.getAdContent({
                        platform: this._userData.getUserPlatform(),
                        premiumStatus: this._userData.getIsTelegramPremium()
                    });
                    if ("number" == typeof e)
                        throw this._emitEvent(x.COOL_DOWN, {
                            cooldownSecs: e
                        }),
                        new Error(`cooldown for ${e} secs`);
                    if (null === e)
                        throw new Error("Error when loading content");
                    this._displayAd(e)
                } catch (t) {
                    this._emitEvent(x.AD_ERROR)
                }
            }
            async _displayAd(e) {
                this._closeButton = null,
                    this._isViewCompleted = !1;
                const t = window.innerHeight <= 750
                    , n = !e.buttonText
                    , r = () => {
                        !!localStorage.getItem(A) || (this._apiClient.confirmClickOnSource(e.guid),
                            localStorage.setItem(A, "click")),
                            window.open(e.adClickUrl, "_blank")
                    }
                    ;
                try {
                    const i = this._elementsFabric.createAdElement(e)
                        , o = this._elementsFabric.createProvidedByTonAdsLink()
                        , s = this._elementsFabric.createLoader()
                        , a = this._elementsFabric.createContainer(t)
                        , l = e.buttonText ? this._elementsFabric.createLinkButton(e.buttonText, e.buttonColor) : null
                        , c = e.brandName ? this._elementsFabric.createBrandName(n, e.brandName) : null
                        , u = e.title ? this._elementsFabric.createTitle(e.title) : null
                        , d = e.text ? this._elementsFabric.createDescriptionText(e.text) : null
                        , h = this._elementsFabric.createTextContainer()
                        , f = e.contentType === D.IMAGE ? null : this._elementsFabric.createSoundButton();
                    u && h.appendChild(u),
                        d && h.appendChild(d);
                    const p = this._elementsFabric.createContentWrapper();
                    a.appendChild(s),
                        a.appendChild(o),
                        this._disableWindowScroll(),
                        document.body.appendChild(a),
                        i instanceof HTMLVideoElement && (i.onerror = () => {
                            this._handleContentError(a, s)
                        }
                            ,
                            i.oncanplaythrough = () => {
                                this._closeButton || (s.remove(),
                                    o.remove(),
                                    a.appendChild(i),
                                    i.play().then((() => {
                                        i.muted = !1,
                                            this._closeButton = this._elementsFabric.createCloseButton(e.durationSeconds, e.guid);
                                        const t = this._elementsFabric.createProvidedByTonAdsLink(e.durationSeconds);
                                        this._closeButton.addEventListener("click", (() => {
                                            if (this._closeButton && !this._closeButton.disabled) {
                                                a.remove(),
                                                    this._removeAnimationStylesFromDocument(),
                                                    this._enableWindowScroll();
                                                this._checkIfTheTimerHasPassed() ? this._emitEvent(x.AD_COMPLETED) : this._emitEvent(x.AD_CLOSED),
                                                    this._removeTimerStatus(),
                                                    mn()
                                            }
                                        }
                                        )),
                                            f && h.appendChild(f),
                                            s.remove(),
                                            o.remove(),
                                            c && p.append(c),
                                            p.append(i),
                                            p.append(h),
                                            a.append(p),
                                            l && h.append(l),
                                            a.append(t),
                                            p.append(this._closeButton),
                                            this._emitEvent(x.AD_SHOWN),
                                            this._apiClient.confirmShow(e.guid)
                                    }
                                    )).catch((e => {
                                        this._handleContentError(a, s)
                                    }
                                    )))
                            }
                        ),
                        i instanceof HTMLImageElement && (i.onerror = () => {
                            this._handleContentError(a, s)
                        }
                            ,
                            i.onload = () => {
                                if (this._closeButton)
                                    return;
                                s.remove(),
                                    o.remove(),
                                    a.appendChild(i),
                                    this._closeButton = this._elementsFabric.createCloseButton(e.durationSeconds, e.guid);
                                const t = this._elementsFabric.createProvidedByTonAdsLink(e.durationSeconds);
                                this._closeButton.addEventListener("click", (() => {
                                    if (this._closeButton && !this._closeButton.disabled) {
                                        a.remove(),
                                            this._removeAnimationStylesFromDocument(),
                                            this._enableWindowScroll();
                                        this._checkIfTheTimerHasPassed() ? this._emitEvent(x.AD_COMPLETED) : this._emitEvent(x.AD_CLOSED),
                                            this._removeTimerStatus(),
                                            mn()
                                    }
                                }
                                )),
                                    s.remove(),
                                    o.remove(),
                                    c && p.append(c),
                                    l && h.append(l),
                                    p.append(i),
                                    p.append(h),
                                    a.append(p),
                                    a.append(t),
                                    p.append(this._closeButton),
                                    this._emitEvent(x.AD_SHOWN),
                                    this._apiClient.confirmShow(e.guid)
                            }
                        ),
                        n ? i.onclick = r : l && c && (l.onclick = r,
                            c.onclick = r)
                } catch (i) {
                    this._emitEvent(x.AD_ERROR)
                }
            }
            _handleContentError(e, t) {
                t.remove();
                const n = this._elementsFabric.createErrorMessage();
                e.appendChild(n),
                    bn(R),
                    bn(L),
                    this._emitEvent(x.AD_ERROR),
                    setTimeout((() => {
                        bn(C)
                    }
                    ), 3e3)
            }
            _emitEvent(e, t) {
                this.emit(e, t)
            }
            _checkIfTheTimerHasPassed() {
                return localStorage.getItem(this._timerStatusKey) === j.PASSED
            }
            _removeTimerStatus() {
                localStorage.removeItem(this._timerStatusKey)
            }
            _enableWindowScroll() {
                document.body.style.overflow = "",
                    document.documentElement.style.overflow = ""
            }
            _disableWindowScroll() {
                document.body.style.overflow = "hidden",
                    document.documentElement.style.overflow = "hidden"
            }
            _removeAnimationStylesFromDocument() {
                const e = document.getElementById(S);
                null == e || e.remove();
                const t = document.getElementById(T);
                null == t || t.remove();
                const n = document.getElementById(k);
                null == n || n.remove()
            }
            _listenChildEvents() {
                this._elementsFabric.on(E.SHOULD_CONFIRM_FULL_VIEW, (async e => {
                    if (e.guid) {
                        if (this._isViewCompleted)
                            return;
                        const t = await this._apiClient.confirmFullView(e.guid);
                        this._isViewCompleted = !0,
                            "number" == typeof t && this._emitEvent(x.COOL_DOWN, {
                                cooldownSecs: t
                            })
                    }
                }
                ))
            }
        }
        ;
    t(yn, "_instance");
    const wn = yn.getInstance();
    return window.tonAdsSDK = wn,
        wn
}
));

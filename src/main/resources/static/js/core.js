(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (ED4H) {
        if (!ED4H || !ED4H.length)
            return null;
        var US8K = window;
        for (var a = ED4H.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; US8K = US8K[a[i]] = US8K[a[i]] || {}, i++);
        return US8K
    };
    NEJ.Q = function (bL5Q, ED4H) {
        bL5Q = bL5Q || NEJ.O;
        var bs5x = ED4H.split(".");
        for (var i = 0, l = bs5x.length; i < l; i++) {
            bL5Q = bL5Q[bs5x[i]];
            if (!bL5Q)
                break
        }
        return bL5Q
    };
    NEJ.C = function () {
        var brv4z = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var brA4E = function (A4E, bv5A) {
            for (var x in bv5A)
                if (A4E == bv5A[x])
                    return x;
            return null
        };
        var bjc2x = {
                cl5q: 0,
                bk5p: 1,
                bD5I: 2,
                bR5W: 3,
                bJ5O: 4,
                eY6S: 5,
                jZ9Q: 6,
                ej6d: 7
            },
            tK1x = {
                cs5x: 0,
                bl5q: 1,
                bH5M: 2,
                cc5h: 3,
                bM5R: 4,
                gw7p: 5,
                kP9G: 6,
                fO7H: 7
            };
        return function () {
            var fj6d = function () {
                this.bsv4z();
                return this.cl5q.apply(this, arguments)
            };
            fj6d.prototype.bsv4z = NEJ.F;
            fj6d.prototype.cl5q = NEJ.F;
            fj6d.O4S = function (yH3x, bsO4S) {
                if (brv4z(yH3x))
                    return;
                if (bsO4S == null || !!bsO4S)
                    NEJ.X(this, yH3x, brv4z);
                this.ckC3x = yH3x;
                this.cg5l = yH3x.prototype;
                var bA5F = function () {
                };
                bA5F.prototype = yH3x.prototype;
                this.prototype = new bA5F;
                var Ew4A = this.prototype;
                Ew4A.constructor = this;
                var dP6J;
                for (var x in bjc2x) {
                    dP6J = brA4E(bjc2x[x], tK1x);
                    if (!dP6J || !this.cg5l[x])
                        continue;
                    Ew4A[x] = function (T4X) {
                        return function () {
                            this[T4X].apply(this, arguments)
                        }
                    }
                    (dP6J)
                }
                var Eu4y = {};
                for (var x in tK1x) {
                    dP6J = brA4E(tK1x[x], bjc2x);
                    if (!dP6J || !this.cg5l[dP6J])
                        continue;
                    Eu4y[dP6J] = yH3x;
                    Ew4A[x] = function (T4X) {
                        return function () {
                            var m4q,
                                bA5F = this.baF0x[T4X],
                                ZA0x = bA5F.prototype[T4X];
                            this.baF0x[T4X] = bA5F.ckC3x || yH3x;
                            if (!!ZA0x)
                                m4q = ZA0x.apply(this, arguments);
                            this.baF0x[T4X] = yH3x;
                            return m4q
                        }
                    }
                    (dP6J)
                }
                Ew4A.bsv4z = function () {
                    this.baF0x = NEJ.X({}, Eu4y)
                };
                Ew4A.cxz6t = Ew4A.cs5x;
                return Ew4A
            };
            return fj6d
        }
    }
    ();
    NEJ.X = function (gd7W, bN5S, dE6y) {
        if (!gd7W || !bN5S)
            return gd7W;
        dE6y = dE6y || NEJ.F;
        for (var x in bN5S) {
            if (bN5S.hasOwnProperty(x) && !dE6y(bN5S[x], x))
                gd7W[x] = bN5S[x]
        }
        return gd7W
    };
    NEJ.EX = function (gd7W, bN5S) {
        if (!gd7W || !bN5S)
            return gd7W;
        for (var x in gd7W) {
            if (gd7W.hasOwnProperty(x) && bN5S[x] != null)
                gd7W[x] = bN5S[x]
        }
        return gd7W
    };
    var ID5I = Function.prototype;
    ID5I.ef6Z = function (lV9M, bbt1x) {
        var f = NEJ.F,
            bbt1x = bbt1x || f,
            lV9M = lV9M || f,
            dc6W = this;
        return function () {
            var d4h = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lV9M(d4h);
            if (!d4h.stopped) {
                d4h.value = dc6W.apply(this, d4h.args);
                bbt1x(d4h)
            }
            return d4h.value
        }
    };
    ID5I.g4k = function () {
        var bg5l = arguments,
            gd7W = arguments[0],
            bkp3x = this;
        return function () {
            var tZ2x = NEJ.R.slice.call(bg5l, 1);
            NEJ.R.push.apply(tZ2x, arguments);
            return bkp3x.apply(gd7W || window, tZ2x)
        }
    };
    ID5I.dW6Q = function () {
        var bg5l = arguments,
            gd7W = NEJ.R.shift.call(bg5l),
            bkp3x = this;
        return function () {
            NEJ.R.push.apply(arguments, bg5l);
            return bkp3x.apply(gd7W || window, arguments)
        }
    };
    var ID5I = String.prototype;
    if (!ID5I.trim) {
        ID5I.trim = function () {
            var cP6J = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(cP6J, "")
            }
        }
        ()
    }
    if (!window.MWF)
        window.MWF = NEJ;
    if (!window.mwf)
        window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt,
        gt,
        amp,
        nbsp,
        quot,
        apos,
        copy,
        reg
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        M4Q = c4g("nej.p"),
        Zq0x = window.navigator.platform,
        sV1x = window.navigator.userAgent;
    var kb9S = {
        mac: Zq0x,
        win: Zq0x,
        linux: Zq0x,
        ipad: sV1x,
        ipod: sV1x,
        iphone: Zq0x,
        android: sV1x
    };
    M4Q.Kh6b = kb9S;
    for (var x in kb9S)
        kb9S[x] = (new RegExp(x, "i")).test(kb9S[x]);
    kb9S.ios = kb9S.ipad || kb9S.iphone || kb9S.ipod;
    kb9S.tablet = kb9S.ipad;
    kb9S.desktop = kb9S.mac || kb9S.win || kb9S.linux && !kb9S.android;
    var hD8v = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    M4Q.cS6M = hD8v;
    if (/msie\s+(.*?);/i.test(sV1x) || /trident\/.+rv:([\d\.]+)/i.test(sV1x)) {
        hD8v.engine = "trident";
        hD8v.browser = "ie";
        hD8v.version = RegExp.$1;
        hD8v.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var oa0x = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        hD8v.release = oa0x[document.documentMode] || oa0x[parseInt(hD8v.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(sV1x)) {
        hD8v.engine = "webkit";
        hD8v.release = RegExp.$1 || "";
        hD8v.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(sV1x)) {
        hD8v.engine = "gecko";
        hD8v.release = RegExp.$1 || "";
        hD8v.browser = "firefox";
        hD8v.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(sV1x))
            hD8v.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(sV1x)) {
        hD8v.engine = "presto";
        hD8v.release = RegExp.$1 || "";
        hD8v.browser = "opera";
        hD8v.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(sV1x))
            hD8v.version = RegExp.$1 || ""
    }
    if (hD8v.browser == "unknow") {
        var oa0x = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = oa0x.length, T4X; i < l; i++) {
            T4X = oa0x[i] == "safari" ? "version" : oa0x[i];
            if ((new RegExp(T4X + "/(.*?)(?=\\s|$)", "i")).test(sV1x)) {
                hD8v.browser = oa0x[i];
                hD8v.version = RegExp.$1.trim();
                break
            }
        }
    }
    M4Q.btT5Y = {};
    var Zb0x = hD8v.engine != "trident";
    M4Q.mq9h = {
        gecko: hD8v.engine != "gecko",
        webkit: hD8v.engine != "webkit",
        presto: hD8v.engine != "presto",
        trident0: Zb0x || hD8v.release > "2.0",
        trident1: Zb0x || hD8v.release < "6.0",
        trident2: Zb0x || hD8v.release > "3.0",
        trident: Zb0x || hD8v.release >= "6.0"
    }
})();
(function () {
    var iC8u = NEJ.P("nej.c"),
        R4V = {};
    var bkx3x = function () {
        var cP6J = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V4Z) {
            V4Z = V4Z || "";
            if (cP6J.test(V4Z))
                return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }
    ();
    var Kn6h = function () {
        var bup5u = function (i4m, bv5A) {
            if (!i4m || !i4m.length)
                return;
            for (var i = 0, l = i4m.length, kL9C; i < l; i++) {
                kL9C = i4m[i];
                if (kL9C.indexOf("://") > 0)
                    bv5A[bkx3x(kL9C)] = kL9C
            }
        };
        var bc5h = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function (bN5S) {
            iC8u.Hp5u("root", bN5S.root || "/res/");
            var bhd2x,
                fv7o = iC8u.x4B("root");
            for (var x in bc5h) {
                bhd2x = bc5h[x];
                iC8u.Hp5u(x, bN5S[bhd2x.name] || fv7o + bhd2x.dft)
            }
            var zj3x = bN5S.p_csrf;
            if (zj3x == !0) {
                zj3x = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            iC8u.Hp5u("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, zj3x));
            R4V.frames = {};
            bup5u(bN5S.p_frame, R4V.frames);
            R4V.flashs = {};
            bup5u(bN5S.p_flash, R4V.flashs)
        }
    }
    ();
    iC8u.Hp5u = function (J4N, A4E) {
        R4V[J4N] = A4E
    };
    iC8u.x4B = function (J4N) {
        return R4V[J4N]
    };
    iC8u.ccc1x = function (V4Z) {
        var vp2x = bkx3x(V4Z);
        return R4V.frames[vp2x] || vp2x + "/res/nej_proxy_frame.html"
    };
    iC8u.ciZ3x = function (V4Z) {
        return R4V.flashs[bkx3x(V4Z)]
    };
    Kn6h(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c4g = NEJ.P,
        M4Q = c4g("nej.p"),
        iC8u = c4g("nej.c"),
        bN5S = window.NEJ_CONF || NEJ.O;
    if (M4Q.mq9h.trident)
        return;
    iC8u.Hp5u("storage.swf", bN5S.storage || iC8u.x4B("root") + "nej_storage.swf");
    if (M4Q.cS6M.release < "4.0") {
        iC8u.Hp5u("blank.png", bN5S.blank || iC8u.x4B("root") + "nej_blank.gif")
    }
    var i4m = bN5S.xdr,
        fZ7S = /^(https?:\/\/.*?)(?=\/|$)/i,
        jr8j = /[\/?=&]/i;
    var buU5Z = function (V4Z) {
        return (fZ7S.test(V4Z) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i4m && !!i4m.length)
        for (var i = i4m.length - 1, V4Z, J4N; i >= 0; i--) {
            V4Z = i4m[i];
            J4N = buU5Z(V4Z);
            if (!!J4N)
                iC8u.Hp5u(J4N, V4Z)
        }
    iC8u.cxm6g = function (V4Z) {
        var J4N = buU5Z(V4Z);
        if (!J4N) {
            if (jr8j.test(V4Z)) {
                J4N = location.protocol + "//" + location.host
            } else if (V4Z.indexOf("://") < 0) {
                J4N = location.protocol + "//" + V4Z
            } else {
                J4N = V4Z
            }
        }
        return iC8u.x4B(J4N) || J4N + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c4g = NEJ.P,
        iC8u = c4g("nej.c"),
        M4Q = c4g("nej.g"),
        fX7Q = +(new Date);
    M4Q.cxi6c = 1e4 - fX7Q;
    M4Q.bgR2x = 10001 - fX7Q;
    M4Q.cxh6b = 10002 - fX7Q;
    M4Q.bvT5Y = 10003 - fX7Q;
    M4Q.bRd9U = 10004 - fX7Q;
    M4Q.cxb6V = 10005 - fX7Q;
    M4Q.bkw3x = 10006 - fX7Q;
    M4Q.bSU9L = 10007 - fX7Q;
    M4Q.xj2x = "Content-Type";
    M4Q.cwW6Q = "text/plain";
    M4Q.DB4F = "multipart/form-data";
    M4Q.bTD0x = "application/x-www-form-urlencoded";
    M4Q.bpj4n = iC8u.x4B("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c4g = NEJ.P,
        eU6O = NEJ.R,
        M4Q = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        ba4e = c4g("nej.h");
    var lf9W = M4Q.cS6M.prefix,
        bwN5S = M4Q.btT5Y,
        bXy0x = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        },
        cbX1x = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        },
        Mv6p = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var Kn6h = function () {
        var rg0x = ba4e.byZ6T();
        bwN5S.css3d = !!rg0x && rg0x.m41 != null;
        var cP6J = /-([a-z])/g;
        for (var x in Mv6p) {
            Mv6p[bzh6b(x)] = Mv6p[x]
        }
    };
    var bzh6b = function () {
        var cP6J = /-([a-z])/g;
        return function (T4X) {
            T4X = T4X || "";
            return T4X.replace(cP6J, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }
    ();
    var bzO6I = function (T4X) {
        return (!bwN5S.css3d ? bXy0x : cbX1x)[T4X]
    };
    var bzP6J = function () {
        var cP6J = /\s+/;
        return function (fj6d) {
            fj6d = (fj6d || "").trim();
            return !!fj6d ? fj6d.split(cP6J) : null
        }
    }
    ();
    var Wt9k = function (E4I, t4x, fj6d) {
        E4I = a3x.x4B(E4I);
        if (!E4I)
            return;
        k4o.be5j(bzP6J(fj6d), function (dJ6D) {
            E4I.classList[t4x](dJ6D)
        })
    };
    ba4e.FX5c = function (i4m) {
        return eU6O.slice.call(i4m, 0)
    };
    ba4e.bmf3x = function (E4I) {
        return ba4e.FX5c(E4I.children)
    };
    ba4e.bnc3x = function (E4I, fj6d) {
        return ba4e.FX5c(E4I.getElementsByClassName(fj6d))
    };
    ba4e.bnW3x = function (E4I, Gl5q) {
        Wt9k(E4I, "add", Gl5q)
    };
    ba4e.boP4T = function (E4I, GZ5e) {
        Wt9k(E4I, "remove", GZ5e)
    };
    ba4e.Nb6V = function (E4I, GZ5e, Gl5q) {
        Wt9k(E4I, "remove", GZ5e);
        Wt9k(E4I, "add", Gl5q)
    };
    ba4e.bbs0x = function (E4I, fj6d) {
        E4I = a3x.x4B(E4I);
        if (!E4I)
            return !1;
        var i4m = E4I.classList;
        if (!i4m || !i4m.length)
            return !1;
        return k4o.cV6P(bzP6J(fj6d), function (dJ6D) {
            return i4m.contains(dJ6D)
        }) >= 0
    };
    ba4e.bbz1x = function (E4I, dJ6D) {
    };
    ba4e.bbF1x = function (E4I) {
    };
    ba4e.bdc1x = function (fF7y, mZ9Q) {
        fF7y.selectionEnd = mZ9Q.end || 0;
        fF7y.selectionStart = mZ9Q.start || 0;
        fF7y.focus()
    };
    ba4e.bdr1x = function (fF7y) {
        return {
            end: fF7y.selectionEnd,
            start: fF7y.selectionStart
        }
    };
    ba4e.bec1x = function () {
        var Dl4p = function (dJ6D, d4h) {
            var E4I = h4l.U4Y(d4h);
            if (!E4I.value)
                a3x.w4A(E4I, dJ6D)
        };
        var Il5q = function (dJ6D, d4h) {
            a3x.y4C(h4l.U4Y(d4h), dJ6D)
        };
        return function (E4I, eC6w, dJ6D) {
            if (eC6w == 1) {
                h4l.q4u(E4I, "blur", Dl4p.g4k(null, dJ6D))
            }
            if (eC6w == 1 || eC6w == -1) {
                h4l.q4u(E4I, "focus", Il5q.g4k(null, dJ6D))
            }
        }
    }
    ();
    ba4e.bhm2x = function (G4K) {
        return (new XMLSerializer).serializeToString(G4K) || ""
    };
    ba4e.bii2x = function (yp3x) {
        var fv7o = (new DOMParser).parseFromString(yp3x, "text/xml").documentElement;
        return fv7o.nodeName == "parsererror" ? null : fv7o
    };
    ba4e.biX2x = function (E4I) {
    };
    ba4e.mK9B = function (E4I) {
        return null
    };
    ba4e.bjD3x = function (E4I) {
        return null
    };
    ba4e.bjG3x = function (dG6A) {
    };
    ba4e.bkl3x = function () {
        var bg5l = ba4e.FX5c(arguments);
        bg5l[0] = a3x.x4B(bg5l[0]);
        if (!bg5l[0])
            return null;
        bg5l[1] = (bg5l[1] || "").toLowerCase();
        if (!bg5l[1])
            return null;
        return bg5l
    };
    ba4e.yr3x = function () {
        var uE2x = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            },
            iw8o = {
                transitionend: "TransitionEnd",
                animationend: "AnimationEnd",
                animationstart: "AnimationStart",
                animationiteration: "AnimationIteration"
            };
        var clp3x = function (t4x) {
            return (lf9W.evt || lf9W.pro) + t4x
        };
        return function () {
            var bg5l = ba4e.bkl3x.apply(ba4e, arguments);
            if (!bg5l)
                return;
            var VF9w = iw8o[bg5l[1]],
                VD9u = uE2x[bg5l[1]];
            if (!!VF9w) {
                bg5l[4] = bg5l[1];
                bg5l[1] = clp3x(VF9w)
            } else if (!!VD9u) {
                var T4X = "on" + bg5l[1];
                if (!(T4X in bg5l[0])) {
                    bg5l[4] = bg5l[1];
                    bg5l[1] = VD9u
                }
            }
            return bg5l
        }
    }
    ();
    ba4e.blQ3x = function () {
        var bg5l = arguments;
        bg5l[0].addEventListener(bg5l[1], bg5l[2], !!bg5l[3])
    };
    ba4e.VC9t = function () {
        var bg5l = arguments;
        bg5l[0].removeEventListener(bg5l[1], bg5l[2], !!bg5l[3])
    };
    ba4e.blZ3x = function (E4I, t4x, e4i) {
        var d4h = document.createEvent("Event");
        d4h.initEvent(t4x, !0, !0);
        NEJ.X(d4h, e4i);
        E4I.dispatchEvent(d4h)
    };
    ba4e.byZ6T = function () {
        var fZ7S = /\((.*?)\)/,
            jr8j = /\s*,\s*/,
            i4m = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var VB9s = function (rg0x) {
            var ie8W = {};
            if (fZ7S.test(rg0x || "")) {
                k4o.be5j(RegExp.$1.split(jr8j), function (A4E, s4w) {
                    ie8W[i4m[s4w]] = A4E || ""
                })
            }
            return ie8W
        };
        return function (rg0x) {
            if (!!window.CSSMatrix)
                return new CSSMatrix(rg0x);
            var T4X = lf9W.clz + "CSSMatrix";
            if (!!window[T4X])
                return new window[T4X](rg0x || "");
            return VB9s(rg0x)
        }
    }
    ();
    ba4e.bzQ6K = function () {
        var cP6J = /\{(.*?)\}/g;
        return function (T4X, bv5A) {
            bv5A = bv5A || o;
            var pD0x = bzO6I(T4X);
            return !pD0x ? "" : pD0x.replace(cP6J, function ($1, $2) {
                var bs5x = $2.split("|");
                return bv5A[bs5x[0]] || bs5x[1] || "0"
            })
        }
    }
    ();
    ba4e.bpd4h = function (E4I, T4X, A4E) {
        E4I.style[ba4e.bzR6L(T4X)] = A4E
    };
    ba4e.bzR6L = function () {
        var cP6J = /^[a-z]/,
            bqn4r = lf9W.css;
        var cmd3x = function (T4X) {
            return T4X.replace(cP6J, function ($1) {
                return bqn4r + $1.toUpperCase()
            })
        };
        return function (T4X) {
            T4X = bzh6b(T4X);
            var cnv3x = ba4e.cnI3x(T4X, Mv6p);
            return cnv3x ? cmd3x(T4X) : T4X
        }
    }
    ();
    ba4e.cnI3x = function () {
        var cP6J = /^([a-z]+?)[A-Z]/;
        return function (T4X, bv5A) {
            if (!bv5A[T4X]) {
                if (cP6J.test(T4X))
                    T4X = RegExp.$1
            }
            return !!bv5A[T4X]
        }
    }
    ();
    ba4e.cnK3x = function () {
        var cP6J = /\$<(.*?)>/gi,
            bqn4r = "-" + lf9W.css.toLowerCase() + "-";
        return function (ju8m) {
            return ju8m.replace(cP6J, function ($1, $2) {
                var eL6F = $2,
                    bs5x = eL6F.split("|"),
                    pD0x = bzO6I(bs5x[0]);
                if (!!pD0x) {
                    return ba4e.bzQ6K(bs5x[0], k4o.hi7b(bs5x[1]))
                }
                return !ba4e.bOO9F(eL6F, Mv6p) ? eL6F : bqn4r + eL6F
            })
        }
    }
    ();
    ba4e.bOO9F = function (T4X, bv5A) {
        return !!bv5A[T4X]
    };
    ba4e.bbM1x = function (cd5i, ju8m) {
        cd5i.textContent = ju8m
    };
    ba4e.bde1x = function (cd5i, ju8m) {
        var wr2x = cd5i.sheet,
            bo5t = wr2x.cssRules.length;
        wr2x.insertRule(ju8m, bo5t);
        return wr2x.cssRules[bo5t]
    };
    ba4e.cvX6R = function (E4I, e4i) {
    };
    ba4e.Vc8U = function (UW8O) {
        return (UW8O || "").toLowerCase() != "transparent"
    };
    ba4e.bPB9s = function (E4I) {
    };
    ba4e.bfV2x = function (E4I, T4X) {
        if (!!E4I.getAttribute)
            return E4I.getAttribute(T4X);
        return ""
    };
    ba4e.UU8M = function (fa6U) {
        a3x.cF6z(fa6U)
    };
    Kn6h()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        M4Q = c4g("nej.p"),
        ba4e = c4g("nej.h");
    if (M4Q.mq9h.trident0)
        return;
    var fX7Q = +(new Date);
    R4V = {};
    ba4e.bbz1x = ba4e.bbz1x.ef6Z(function (d4h) {
        d4h.stopped = !0;
        var bg5l = d4h.args,
            C4G = a3x.kp9g(bg5l[0]),
            J4N = "hover-" + C4G;
        if (!C4G || !!R4V[J4N])
            return;
        R4V[J4N] = !0;
        h4l.q4u(C4G, "mouseenter", a3x.y4C.g4k(a3x, C4G, bg5l[1]));
        h4l.q4u(C4G, "mouseleave", a3x.w4A.g4k(a3x, C4G, bg5l[1]))
    });
    ba4e.bbF1x = function () {
        var cvR6L = function () {
        };
        return ba4e.bbF1x.ef6Z(function (d4h) {
            d4h.stopped = !0;
            var E4I = d4h.args[0],
                C4G = "fixed-" + a3x.kp9g(E4I);
            if (!!R4V[C4G])
                return;
            var bc5h = {};
            R4V[C4G] = bc5h
        })
    }
    ();
    ba4e.biX2x = ba4e.biX2x.ef6Z(function (d4h) {
        d4h.stopped = !0;
        var E4I = d4h.args[0],
            cd5i = E4I.style,
            bBQ6K = a3x.oq0x();
        cd5i.width = bBQ6K.scrollWidth + "px";
        cd5i.height = bBQ6K.scrollHeight + "px"
    });
    ba4e.mK9B = ba4e.mK9B.ef6Z(function (d4h) {
        d4h.stopped = !0;
        var E4I = d4h.args[0],
            km9d = R4V[E4I.msk];
        if (!km9d) {
            E4I.msk = fX7Q++;
            km9d = a3x.cU6O("iframe");
            km9d.style.position = "absolute";
            R4V[E4I.msk] = km9d
        }
        d4h.value = km9d;
        var cd5i = km9d.style;
        cd5i.top = (parseInt(a3x.db6V(E4I, "top")) || 0) + "px";
        cd5i.left = (parseInt(a3x.db6V(E4I, "left")) || 0) + "px";
        cd5i.width = E4I.offsetWidth + "px";
        cd5i.height = E4I.offsetHeight + "px";
        E4I.insertAdjacentElement("beforeBegin", km9d)
    });
    ba4e.bjD3x = ba4e.bjD3x.ef6Z(function (d4h) {
        d4h.stopped = !0;
        var km9d = R4V[d4h.args[0].msk];
        if (!!km9d)
            a3x.mc9T(km9d)
    })
})();
(function () {
    var c4g = NEJ.P,
        M4Q = c4g("nej.p"),
        a3x = c4g("nej.e"),
        ba4e = c4g("nej.h");
    if (M4Q.mq9h.trident1)
        return;
    ba4e.yr3x = function () {
        var uE2x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return ba4e.yr3x.ef6Z(function (d4h) {
            var bg5l = ba4e.bkl3x.apply(ba4e, d4h.args);
            if (!bg5l) {
                d4h.stopped = !0;
                return
            }
            var t4x = uE2x[bg5l[1]];
            if (!!t4x && ("on" + t4x).toLowerCase() in bg5l[0]) {
                bg5l[4] = bg5l[1];
                bg5l[1] = t4x;
                d4h.stopped = !0;
                d4h.value = bg5l
            }
        })
    }
    ();
    ba4e.Vc8U = function (UW8O) {
        return !0
    };
    ba4e.UU8M = ba4e.UU8M.ef6Z(function (d4h) {
        d4h.stopped = !0;
        var fa6U = d4h.args[0];
        a3x.X4b(fa6U, "display", "none");
        try {
            fa6U.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {
        }
    })
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        M4Q = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        ba4e = c4g("nej.h"),
        bjz3x = {};
    if (M4Q.mq9h.trident)
        return;
    ba4e.FX5c = ba4e.FX5c.ef6Z(function (d4h) {
        d4h.stopped = !0;
        var i4m = d4h.args[0];
        if (!i4m) {
            d4h.value = null;
            return
        }
        var s4w = 0,
            m4q = [];
        while (!!i4m[s4w]) {
            m4q.push(i4m[s4w++])
        }
        d4h.value = m4q
    });
    ba4e.bmf3x = ba4e.bmf3x.ef6Z(function (d4h) {
        d4h.stopped = !0;
        var bs5x = [];
        k4o.be5j(d4h.args[0].childNodes, function (f4j) {
            if (f4j.nodeType == 1)
                bs5x.push(f4j)
        });
        d4h.value = bs5x
    });
    ba4e.bnc3x = ba4e.bnc3x.ef6Z(function (d4h) {
        var E4I = d4h.args[0];
        if (!!E4I.getElementsByClassName)
            return;
        d4h.stopped = !0;
        var m4q = [],
            bjF3x = new RegExp("(\\s|^)(?:" + d4h.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k4o.be5j(E4I.getElementsByTagName("*"), function (f4j) {
            if (bjF3x.test(f4j.className))
                m4q.push(f4j)
        });
        d4h.value = m4q
    });
    ba4e.bdc1x = ba4e.bdc1x.ef6Z(function (d4h) {
        var fF7y = d4h.args[0],
            mZ9Q = d4h.args[1];
        if (fF7y.selectionStart == null) {
            d4h.stopped = !0;
            var cH6B = fF7y.createTextRange();
            cH6B.collapse(!0);
            cH6B.moveStart("character", mZ9Q.start);
            cH6B.moveEnd("character", mZ9Q.end - mZ9Q.start);
            cH6B.select();
            fF7y.focus()
        }
    });
    ba4e.bdr1x = ba4e.bdr1x.ef6Z(function (d4h) {
        var fF7y = d4h.args[0];
        fF7y.focus();
        if (fF7y.selectionStart == null) {
            d4h.stopped = !0;
            var bBS6M = document.selection.createRange();
            var bBU6O = fF7y.createTextRange();
            bBU6O.moveToBookmark(bBS6M.getBookmark());
            var bki3x = fF7y.createTextRange();
            bki3x.collapse(!0);
            bki3x.setEndPoint("EndToStart", bBU6O);
            var is8k = bki3x.text.length;
            d4h.value = {
                start: is8k,
                end: is8k + bBS6M.text.length
            }
        }
    });
    ba4e.bhm2x = ba4e.bhm2x.ef6Z(function (d4h) {
        if (!!window.XMLSerializer)
            return;
        d4h.stopped = !0;
        var E4I = d4h.args[0];
        d4h.value = E4I.xml != null ? E4I.xml : E4I.outHTML
    });
    ba4e.bii2x = function () {
        var NY7R = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bPT9K = function () {
            try {
                for (var i = 0, l = NY7R.length; i < l; i++)
                    return new ActiveXObject(NY7R[i])
            } catch (ex) {
                return null
            }
        };
        return ba4e.bii2x.ef6Z(function (d4h) {
            if (!!window.DOMParser)
                return;
            d4h.stopped = !0;
            var CL4P = bPT9K();
            if (!!CL4P && CL4P.loadXML(d4h.args[0]) && !CL4P.parseError.errorCode)
                d4h.value = CL4P.documentElement
        })
    }
    ();
    ba4e.yr3x = function () {
        var iw8o = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in iw8o)
            bjz3x[iw8o[x]] = !0;
        var bPV9M = function (E4I, t4x) {
            if ("on" + t4x in E4I)
                return null;
            return iw8o[t4x] || ""
        };
        var bPY9P = function (t4x, dc6W) {
            var dr6l = dc6W;
            switch (t4x) {
                case "readystatechange":
                    dr6l = function (d4h) {
                        var E4I = h4l.U4Y(d4h) || this;
                        if (E4I.readyState == "loaded" || E4I.readyState == "complete") {
                            d4h.target = E4I;
                            dc6W.call(E4I, d4h)
                        }
                    };
                    break;
                case "propertychange":
                    dr6l = function (d4h) {
                        var E4I = h4l.U4Y(d4h) || this;
                        if ("value" in E4I && d4h.propertyName == "value") {
                            d4h.target = E4I;
                            dc6W.call(E4I, d4h)
                        }
                    };
                    break
            }
            return dr6l
        };
        return ba4e.yr3x.ef6Z(function (d4h) {
            var bg5l = ba4e.bkl3x.apply(ba4e, d4h.args);
            if (!bg5l) {
                d4h.stopped = !0;
                return
            }
            var t4x = bPV9M(bg5l[0], bg5l[1]);
            if (!!t4x) {
                d4h.stopped = !0;
                bg5l[4] = bg5l[1];
                bg5l[1] = t4x;
                if (!!bg5l[2]) {
                    bg5l[5] = bg5l[2];
                    bg5l[2] = bPY9P(bg5l[1], bg5l[2])
                }
                d4h.value = bg5l
            }
        }, function (d4h) {
            var bg5l = d4h.value;
            if (!bg5l[0] || !k4o.gf7Y(bg5l[2]))
                return;
            if (!k4o.gf7Y(bg5l[5]))
                bg5l[5] = bg5l[2];
            bg5l[2] = bg5l[2].g4k(bg5l[0])
        })
    }
    ();
    ba4e.blQ3x = ba4e.blQ3x.ef6Z(function (d4h) {
        var bg5l = d4h.args;
        if (!!bjz3x[bg5l[1]] || !document.addEventListener) {
            d4h.stopped = !0;
            bg5l[0].attachEvent("on" + bg5l[1], bg5l[2])
        }
    });
    ba4e.VC9t = ba4e.VC9t.ef6Z(function (d4h) {
        var bg5l = d4h.args;
        if (!!bjz3x[bg5l[1]] || !document.removeEventListener) {
            d4h.stopped = !0;
            bg5l[0].detachEvent("on" + bg5l[1], bg5l[2])
        }
    });
    ba4e.blZ3x = ba4e.blZ3x.ef6Z(function (d4h) {
        if (!document.createEvent) {
            d4h.stopped = !0;
            var bg5l = d4h.args,
                bBX6R = document.createEventObject();
            NEJ.X(bBX6R, bg5l[2]);
            try {
                bg5l[0].fireEvent("on" + bg5l[1], bBX6R)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    ba4e.bpd4h = ba4e.bpd4h.ef6Z(function (d4h) {
        var bg5l = d4h.args,
            T4X = bg5l[1].toLowerCase();
        if (T4X == "opacity" && !(T4X in document.body.style)) {
            bg5l[1] = "filter";
            bg5l[2] = "alpha(opacity=" + bg5l[2] * 100 + ")"
        }
    });
    ba4e.bbM1x = function () {
        var fb6V = 30;
        return ba4e.bbM1x.ef6Z(function (d4h) {
            var E4I = d4h.args[0];
            if (!E4I.styleSheet)
                return;
            d4h.stopped = !0;
            var ju8m = d4h.args[1];
            var i4m = document.styleSheets;
            if (i4m.length > fb6V) {
                E4I = i4m[fb6V];
                ju8m = E4I.cssText + ju8m
            } else {
                E4I = E4I.styleSheet
            }
            E4I.cssText = ju8m
        })
    }
    ();
    ba4e.bde1x = ba4e.bde1x.ef6Z(function (d4h) {
        var bg5l = d4h.args,
            wr2x = bg5l[0].sheet;
        if (!!wr2x)
            return;
        d4h.stopped = !0;
        var wr2x = bg5l[0].styleSheet,
            bo5t = wr2x.rules.length,
            bs5x = bg5l[1].split(/[\{\}]/);
        wr2x.addRule(bs5x[0], bs5x[1], bo5t);
        d4h.value = wr2x.rules[bo5t]
    });
    ba4e.bec1x = function () {
        var Dl4p = function (dJ6D, d4h) {
            a3x.w4A(h4l.U4Y(d4h), dJ6D)
        };
        return ba4e.bec1x.ef6Z(function (d4h) {
            if (M4Q.cS6M.release >= "4.0")
                return;
            var bg5l = d4h.args;
            if (bg5l[1] != 1) {
                h4l.q4u(bg5l[0], "blur", Dl4p.g4k(null, bg5l[2]));
                bg5l[1] = -1
            }
        })
    }
    ();
    ba4e.Vc8U = function (UW8O) {
        return !0
    };
    ba4e.bfV2x = ba4e.bfV2x.ef6Z(function (d4h) {
        var bg5l = d4h.args,
            f4j = (bg5l[0].attributes || Y4c)[bg5l[1]];
        if (!!f4j) {
            d4h.stopped = !0;
            d4h.value = f4j.value
        }
    }, function (d4h) {
        var bg5l = d4h.args;
        if (bg5l[1] == "maxlength" && d4h.value == 2147483647)
            d4h.value = ""
    });
    if (M4Q.cS6M.release < 5) {
        ba4e.bjG3x = function () {
            var eZ6T,
                fa6U,
                js8k = [],
                bnn3x = "cb-" + +(new Date),
                bi5n = '<script>parent.nej.h["' + bnn3x + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bCm6g = function () {
                eZ6T = window.clearTimeout(eZ6T);
                if (!js8k.length)
                    return;
                var dG6A = js8k.shift();
                try {
                    var uL2x = fa6U.contentWindow.document;
                    uL2x.open();
                    uL2x.write("<head><title>");
                    uL2x.write(document.title);
                    uL2x.write("</title>");
                    uL2x.write(bi5n.replace("#<HASH>", encodeURIComponent(dG6A)));
                    uL2x.write("</head><body></body>");
                    if (location.hostname != document.domain)
                        uL2x.domain = document.domain;
                    uL2x.close();
                    ba4e[bnn3x] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    js8k.unshift(dG6A)
                }
                eZ6T = window.setTimeout(bCm6g, 50)
            };
            return ba4e.bjG3x.ef6Z(function (d4h) {
                d4h.stopped = !0;
                var dG6A = d4h.args[0];
                if (!!ba4e[bnn3x] || !fa6U && !dG6A)
                    return;
                js8k.push(dG6A);
                if (!fa6U)
                    fa6U = a3x.Ug8Y();
                bCm6g()
            })
        }
        ()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        ba4e = c4g("nej.h"),
        M4Q = c4g("nej.p"),
        Ub8T = M4Q.btT5Y;
    if (M4Q.mq9h.gecko)
        return;
    var Kn6h = function () {
        Ub8T.css3d = Ub8T.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement)
            HTMLElement.prototype.insertAdjacentElement = function (hW8O, E4I) {
                if (!hW8O || !E4I)
                    return;
                switch (hW8O) {
                    case "beforeEnd":
                        this.appendChild(E4I);
                        return;
                    case "beforeBegin":
                        this.parentNode.insertBefore(E4I, this);
                        return;
                    case "afterBegin":
                        !this.firstChild ? this.appendChild(E4I) : this.insertBefore(E4I, this.firstChild);
                        return;
                    case "afterEnd":
                        !this.nextSibling ? this.parentNode.appendChild(E4I) : this.parentNode.insertBefore(E4I, this.nextSibling);
                        return
                }
            };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bi5n) {
                this.textContent = bi5n
            })
        }
    };
    ba4e.yr3x = function () {
        var fZ7S = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return ba4e.yr3x.ef6Z(function (d4h) {
            var bg5l = d4h.args;
            if (fZ7S.test(bg5l[1] || "")) {
                d4h.stopped = !0;
                d4h.value = bg5l
            }
        })
    }
    ();
    ba4e.bPB9s = function () {
        var bRu9l = function (d4h) {
            h4l.bh5m(d4h);
            h4l.U4Y(d4h).control.click()
        };
        return function (E4I) {
            h4l.q4u(E4I, "click", bRu9l)
        }
    }
    ();
    Kn6h()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        ba4e = c4g("nej.h");
    var TP8H = function () {
        var oa0x = !!document.body.classList;
        return function () {
            return oa0x
        }
    }
    ();
    var bCE6y = function () {
        var cP6J = /\s+/g;
        return function (fj6d) {
            fj6d = (fj6d || "").trim();
            return !fj6d ? null : new RegExp("(\\s|^)(?:" + fj6d.replace(cP6J, "|") + ")(?=\\s|$)", "g")
        }
    }
    ();
    ba4e.Nb6V = ba4e.Nb6V.ef6Z(function (d4h) {
        if (TP8H())
            return;
        d4h.stopped = !0;
        var bg5l = d4h.args,
            E4I = a3x.x4B(bg5l[0]);
        if (!E4I || !bg5l[1] && !bg5l[2])
            return;
        var fj6d = E4I.className || "";
        var Gl5q = " " + (bg5l[2] || ""),
            GZ5e = bCE6y((bg5l[1] || "") + Gl5q);
        !!GZ5e && (fj6d = fj6d.replace(GZ5e, "$1"));
        E4I.className = (fj6d + Gl5q).replace(/\s+/g, " ").trim()
    });
    ba4e.bnW3x = ba4e.bnW3x.ef6Z(function (d4h) {
        if (TP8H())
            return;
        d4h.stopped = !0;
        var bg5l = d4h.args;
        ba4e.Nb6V(bg5l[0], "", bg5l[1])
    });
    ba4e.boP4T = ba4e.boP4T.ef6Z(function (d4h) {
        if (TP8H())
            return;
        d4h.stopped = !0;
        var bg5l = d4h.args;
        ba4e.Nb6V(bg5l[0], bg5l[1], "")
    });
    ba4e.bbs0x = ba4e.bbs0x.ef6Z(function (d4h) {
        if (TP8H())
            return;
        d4h.stopped = !0;
        var bg5l = d4h.args,
            E4I = a3x.x4B(bg5l[0]);
        if (!E4I) {
            d4h.value = !1;
            return
        }
        var cP6J = bCE6y(bg5l[1]);
        d4h.value = !cP6J ? !1 : cP6J.test(E4I.className || "")
    })
})();
(function () {
    var c4g = NEJ.P,
        M4Q = c4g("nej.p"),
        ba4e = c4g("nej.h");
    if (M4Q.mq9h.webkit)
        return;
    ba4e.Vc8U = function (UW8O) {
        return !0
    }
})();
(function () {
    var c4g = NEJ.P,
        ba4e = c4g("nej.h"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        cL6F = c4g("nej.x"),
        R4V = {};
    var bCR6L = function (E4I) {
        E4I = a3x.x4B(E4I);
        if (!E4I || !R4V[E4I.id])
            return;
        var TM8E = !0,
            C4G = E4I.id;
        k4o.ed6X(R4V[C4G], function () {
            TM8E = !1;
            return !0
        });
        if (TM8E)
            delete R4V[C4G]
    };
    h4l.q4u = cL6F.q4u = function () {
        var bSl9c = function () {
            var bg5l = ba4e.yr3x.apply(ba4e, arguments);
            if (!bg5l || !bg5l[2])
                return;
            var sE1x = a3x.kp9g(bg5l[0]),
                nP0x = R4V[sE1x] || {};
            R4V[sE1x] = nP0x;
            sE1x = bg5l[4] || bg5l[1];
            var zU3x = nP0x[sE1x] || [];
            nP0x[sE1x] = zU3x;
            zU3x.push({
                type: bg5l[1],
                func: bg5l[2],
                capt: !!bg5l[3],
                sfun: bg5l[5] || bg5l[2]
            });
            return bg5l.slice(0, 4)
        };
        return function () {
            var bg5l = bSl9c.apply(null, arguments);
            if (!!bg5l)
                ba4e.blQ3x.apply(ba4e, bg5l);
            return this
        }
    }
    ();
    h4l.ms9j = cL6F.ms9j = function () {
        var bSH9y = function () {
            var tZ2x = arguments,
                sE1x = a3x.kp9g(tZ2x[0]),
                nP0x = R4V[sE1x],
                t4x = (tZ2x[1] || "").toLowerCase(),
                d4h = tZ2x[2];
            if (!nP0x || !t4x || !d4h)
                return;
            nP0x = nP0x[t4x];
            if (!nP0x)
                return;
            var bSS9J = !!tZ2x[3],
                s4w = k4o.cV6P(nP0x, function (iw8o) {
                    return d4h == iw8o.sfun && bSS9J == iw8o.capt
                });
            if (s4w < 0)
                return;
            var iw8o = nP0x.splice(s4w, 1)[0];
            return !iw8o ? null : [a3x.x4B(sE1x), iw8o.type, iw8o.func, iw8o.capt]
        };
        return function () {
            var bg5l = bSH9y.apply(null, arguments);
            if (!!bg5l) {
                ba4e.VC9t.apply(ba4e, bg5l);
                bCR6L(bg5l[0])
            }
            return this
        }
    }
    ();
    h4l.iB8t = cL6F.iB8t = function () {
        var bDH6B = function () {
            var tZ2x = arguments,
                sE1x = a3x.kp9g(tZ2x[0]),
                nP0x = R4V[sE1x],
                zU3x = (tZ2x[1] || "").toLowerCase();
            if (!nP0x || !zU3x)
                return;
            var E4I = a3x.x4B(sE1x);
            k4o.mu9l(nP0x[zU3x], function (iw8o, s4w, i4m) {
                ba4e.VC9t(E4I, iw8o.type, iw8o.func, iw8o.capt);
                i4m.splice(s4w, 1)
            });
            delete nP0x[zU3x]
        };
        var bUv0x = function (E4I) {
            E4I = a3x.x4B(E4I);
            if (!E4I)
                return;
            var C4G = E4I.id;
            k4o.ed6X(R4V[C4G], function (i4m, t4x) {
                bDH6B(C4G, t4x)
            });
            delete R4V[C4G]
        };
        return function (E4I, t4x) {
            !t4x ? bUv0x(E4I) : bDH6B(E4I, t4x);
            bCR6L(E4I);
            return this
        }
    }
    ();
    h4l.U4Y = function () {
        var bfr2x;
        var IB5G = function (T4X, E4I) {
            var bs5x = T4X.split(":");
            if (bs5x.length > 1) {
                if (!bfr2x)
                    bfr2x = {
                        c: a3x.by5D,
                        d: a3x.u4y,
                        a: a3x.gl7e
                    };
                var IK5P = bfr2x[bs5x[0]];
                if (!!IK5P)
                    return !!IK5P(E4I, bs5x[1]);
                T4X = bs5x[1]
            }
            return !!a3x.gl7e(E4I, T4X) || !!a3x.u4y(E4I, T4X) || a3x.by5D(E4I, T4X)
        };
        return function (d4h) {
            if (!d4h)
                return null;
            var E4I = d4h.target || d4h.srcElement,
                dE6y = arguments[1];
            if (!dE6y)
                return E4I;
            if (k4o.fe6Y(dE6y))
                dE6y = IB5G.g4k(null, dE6y);
            if (k4o.gf7Y(dE6y)) {
                while (E4I) {
                    if (!!dE6y(E4I))
                        return E4I;
                    E4I = E4I.parentNode
                }
                return null
            }
            return E4I
        }
    }
    ();
    h4l.bh5m = function (d4h) {
        h4l.rD1x(d4h);
        h4l.ce5j(d4h);
        return this
    };
    h4l.rD1x = function (d4h) {
        if (!!d4h) {
            !!d4h.stopPropagation ? d4h.stopPropagation() : d4h.cancelBubble = !0
        }
        return this
    };
    h4l.ce5j = function (d4h) {
        if (!!d4h) {
            !!d4h.preventDefault ? d4h.preventDefault() : d4h.returnValue = !1
        }
        return this
    };
    h4l.cvq6k = function () {
        var oW0x = !1;
        var bUz0x = function () {
            if (oW0x)
                return;
            oW0x = !0;
            h4l.q4u(document, "click", bUJ0x, !0)
        };
        var bUJ0x = function (d4h) {
            var E4I = h4l.U4Y(d4h),
                bUO0x = a3x.u4y(E4I, "stopped");
            if (bUO0x == "true") {
                h4l.bh5m(d4h);
                a3x.u4y(E4I, "stopped", "false")
            }
        };
        return function (d4h) {
            if (!d4h)
                return;
            if (d4h.type == "click") {
                h4l.bh5m(d4h);
                return
            }
            bUz0x();
            a3x.u4y(h4l.U4Y(d4h), "stopped", "true")
        }
    }
    ();
    h4l.kv9m = function (d4h) {
        return d4h.pageX != null ? d4h.pageX : d4h.clientX + a3x.oq0x().scrollLeft
    };
    h4l.nO0x = function (d4h) {
        return d4h.pageY != null ? d4h.pageY : d4h.clientY + a3x.oq0x().scrollTop
    };
    h4l.z4D = cL6F.z4D = function (E4I, t4x, e4i) {
        var bg5l = ba4e.yr3x(E4I, t4x);
        if (!!bg5l)
            ba4e.blZ3x(bg5l[0], bg5l[1], e4i);
        return this
    };
    c4g("dbg").dumpEV = function () {
        return R4V
    };
    cL6F.isChange = !0
})();
(function () {
    var o = !0,
        w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a)
                return "a" != "a"[0];
            var f,
                c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                        b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c)
                        return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a)
                        try {
                            if (0 === a("0") && !a(!1)) {
                                f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                var e = 5 == f.a.length && 1 === f.a[0];
                                if (e) {
                                    try {
                                        e = !a('"\t"')
                                    } catch (g) {
                                    }
                                    if (e)
                                        try {
                                            e = 1 !== a("01")
                                        } catch (i) {
                                        }
                                }
                            }
                        } catch (O) {
                            e = !1
                        }
                    if (!c)
                        return e
                }
                return b && e
            }
        }

        var m = {}
                .toString,
            p,
            C,
            r,
            D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {
        }
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l)
                var t = Math.floor, J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}
                .hasOwnProperty))
                p = function (a) {
                    var f = {},
                        c;
                    if ((f.__proto__ = w, f.__proto__ = {
                        toString: 1
                    }, f).toString != m)
                        p = function (a) {
                            var f = this.__proto__,
                                a = a in (this.__proto__ = w, this);
                            this.__proto__ = f;
                            return a
                        };
                    else {
                        c = f.constructor;
                        p = function (a) {
                            var f = (this.constructor || c).prototype;
                            return a in this && !(a in f && this[a] === f[a])
                        }
                    }
                    f = w;
                    return p.call(this, a)
                };
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function (a, f) {
                var c = 0,
                    b,
                    h,
                    n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h)
                    p.call(h, n) && c++;
                b = h = w;
                if (c)
                    c = c == 2 ? function (a, f) {
                            var c = {},
                                b = m.call(a) == "[object Function]",
                                d;
                            for (d in a)
                                !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                        }
                        : function (a, f) {
                            var c = m.call(a) == "[object Function]",
                                b,
                                d;
                            for (b in a)
                                !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                            (d || p.call(a, b = "constructor")) && f(b)
                        };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]",
                            b,
                            d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)
                            !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    },
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    },
                    G = function (a) {
                        var f = '"',
                            b = 0,
                            d = a.length,
                            h = d > 10 && s,
                            n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    },
                    E = function (a, b, c, d, h, n, e) {
                        var g = b[a],
                            i,
                            j,
                            k,
                            l,
                            q,
                            s,
                            v,
                            x,
                            y;
                        try {
                            g = b[a]
                        } catch (A) {
                        }
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON"))
                                if (g > -1 / 0 && g < 1 / 0) {
                                    if (z) {
                                        k = t(g / 864e5);
                                        for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                        for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                        k = 1 + k - z(i, j);
                                        l = (g % 864e5 + 864e5) % 864e5;
                                        q = t(l / 36e5) % 24;
                                        s = t(l / 6e4) % 60;
                                        v = t(l / 1e3) % 60;
                                        l = l % 1e3
                                    } else {
                                        i = g.getUTCFullYear();
                                        j = g.getUTCMonth();
                                        k = g.getUTCDate();
                                        q = g.getUTCHours();
                                        s = g.getUTCMinutes();
                                        v = g.getUTCSeconds();
                                        l = g.getUTCMilliseconds()
                                    }
                                    g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                                } else
                                    g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON")))
                                g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w)
                            return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]")
                            return "" + g;
                        if (i == "[object Number]")
                            return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]")
                            return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;)
                                if (e[a] === g)
                                    throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d,
                        h,
                        j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]")
                            h = b;
                        else if (m.call(b) == "[object Array]") {
                            j = {};
                            for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                        }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ");
                            }
                        } else
                            m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    },
                    b,
                    A,
                    j = function () {
                        b = A = w;
                        throw SyntaxError()
                    },
                    q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32)
                                            j();
                                        else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34)
                                                break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;)
                                                e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    },
                    F = function (a) {
                        var b,
                            c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@")
                                return a.slice(1);
                            if (a == "[") {
                                for (b = []; ; c || (c = o)) {
                                    a = q();
                                    if (a == "]")
                                        break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "]" && j()
                                        } else
                                            j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {}; ; c || (c = o)) {
                                    a = q();
                                    if (a == "}")
                                        break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "}" && j()
                                        } else
                                            j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    },
                    I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    },
                    H = function (a, b, c) {
                        var d = a[b],
                            h;
                        if (typeof d == "object" && d)
                            if (m.call(d) == "[object Array]")
                                for (h = d.length; h--;)
                                    I(d, h, c);
                            else
                                C(d, function (a) {
                                    I(d, a, c)
                                });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c,
                        d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c4g = NEJ.P,
        M4Q = c4g("nej.p");
    if (M4Q.mq9h.trident0)
        return;
    JSON.parse = JSON.parse.ef6Z(function (d4h) {
        var cM6G = d4h.args[0] || "";
        if (cM6G.length >= 5e5) {
            d4h.stopped = !0;
            d4h.value = eval("(" + cM6G + ")")
        }
    })
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        dO6I = c4g("nej.g"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        ba4e = c4g("nej.h"),
        cL6F = c4g("nej.x"),
        EH4L,
        bjS3x = {},
        R4V = document.createDocumentFragment();
    a3x.kp9g = cL6F.kp9g = function (E4I) {
        E4I = a3x.x4B(E4I);
        if (!E4I)
            return;
        var C4G = !!E4I.id ? E4I.id : "auto-id-" + k4o.Sl8d(16);
        E4I.id = C4G;
        if (a3x.x4B(C4G) != E4I)
            bjS3x[C4G] = E4I;
        return C4G
    };
    a3x.x4B = cL6F.x4B = function (E4I) {
        var f4j = bjS3x["" + E4I];
        if (!!f4j)
            return f4j;
        if (!k4o.fe6Y(E4I) && !k4o.uU2x(E4I))
            return E4I;
        return document.getElementById(E4I)
    };
    a3x.cQ6K = cL6F.cQ6K = function (E4I, dJ6D) {
        E4I = a3x.x4B(E4I);
        if (!E4I)
            return null;
        var i4m = ba4e.bmf3x(E4I);
        if (!!dJ6D)
            k4o.mu9l(i4m, function (f4j, s4w) {
                if (!a3x.by5D(f4j, dJ6D))
                    i4m.splice(s4w, 1)
            });
        return i4m
    };
    a3x.I4M = cL6F.I4M = function (E4I, fj6d) {
        E4I = a3x.x4B(E4I);
        return !E4I ? null : ba4e.bnc3x(E4I, fj6d.trim())
    };
    a3x.bEo7h = cL6F.bEo7h = function (E4I) {
        E4I = a3x.x4B(E4I);
        if (!!E4I) {
            E4I = E4I.parentNode;
            while (!!E4I) {
                if (E4I.scrollHeight > E4I.clientHeight)
                    break;
                E4I = E4I.parentNode
            }
            if (!!E4I)
                return E4I
        }
        var nP0x = document.body.scrollHeight,
            zU3x = document.documentElement.scrollHeight;
        return zU3x >= nP0x ? document.documentElement : document.body
    };
    a3x.oq0x = function () {
        var bEp7i = function (i4m) {
            var m4q = 0;
            k4o.be5j(i4m, function (gk7d) {
                if (!gk7d)
                    return;
                if (!m4q) {
                    m4q = gk7d
                } else {
                    m4q = Math.min(m4q, gk7d)
                }
            });
            return m4q
        };
        return function (uL2x) {
            var Gp5u = uL2x || document,
                zK3x = Gp5u.body,
                zO3x = Gp5u.documentElement,
                m4q = {
                    scrollTop: Math.max(zK3x.scrollTop, zO3x.scrollTop),
                    scrollLeft: Math.max(zK3x.scrollLeft, zO3x.scrollLeft),
                    clientWidth: bEp7i([zK3x.clientWidth, zK3x.offsetWidth, zO3x.clientWidth, zO3x.offsetWidth]),
                    clientHeight: bEp7i([zK3x.clientHeight, zK3x.offsetHeight, zO3x.clientHeight, zO3x.offsetHeight])
                };
            m4q.scrollWidth = Math.max(m4q.clientWidth, zK3x.scrollWidth, zO3x.scrollWidth);
            m4q.scrollHeight = Math.max(m4q.clientHeight, zK3x.scrollHeight, zO3x.scrollHeight);
            return m4q
        }
    }
    ();
    a3x.cvj6d = function (fb6V, nN0x) {
        var m4q = NEJ.X({}, nN0x),
            bEr7k = fb6V.width / fb6V.height,
            bad0x = nN0x.width / nN0x.height;
        if (bEr7k > bad0x && nN0x.height > fb6V.height) {
            m4q.height = fb6V.height;
            m4q.width = m4q.height * bad0x
        }
        if (bEr7k < bad0x && nN0x.width > fb6V.width) {
            m4q.width = fb6V.width;
            m4q.height = m4q.width / bad0x
        }
        return m4q
    };
    a3x.cvh6b = function () {
        var cP6J = /\s+/;
        var tP2x = {
            left: function () {
                return 0
            },
            center: function (gK7D, nN0x) {
                return (gK7D.width - nN0x.width) / 2
            },
            right: function (gK7D, nN0x) {
                return gK7D.width - nN0x.width
            },
            top: function () {
                return 0
            },
            middle: function (gK7D, nN0x) {
                return (gK7D.height - nN0x.height) / 2
            },
            bottom: function (gK7D, nN0x) {
                return gK7D.height - nN0x.height
            }
        };
        return function (gK7D, nN0x, mJ9A) {
            var m4q = {},
                bs5x = (mJ9A || "").split(cP6J),
                gi7b = tP2x[bs5x[1]] || tP2x.middle,
                gI7B = tP2x[bs5x[0]] || tP2x.center;
            m4q.top = gi7b(gK7D, nN0x);
            m4q.left = gI7B(gK7D, nN0x);
            return m4q
        }
    }
    ();
    a3x.rh0x = cL6F.rh0x = function (E4I, dJ6D) {
        ba4e.bbz1x(E4I, dJ6D || a3x.u4y(E4I, "hover") || "js-hover");
        return this
    };
    a3x.GV5a = cL6F.GV5a = function (E4I) {
        E4I = a3x.x4B(E4I);
        if (!E4I)
            return;
        ba4e.bbF1x(E4I)
    };
    a3x.bVj0x = cL6F.bVj0x = function () {
        var R4V = {},
            bEw7p = 2;
        var bVn0x = function (C4G, dJ6D, d4h) {
            R4V[C4G] = [h4l.kv9m(d4h), h4l.nO0x(d4h)];
            a3x.y4C(C4G, dJ6D)
        };
        var bVE0x = function (C4G, dJ6D, d4h) {
            var bE5J = R4V[C4G];
            if (!k4o.el6f(bE5J))
                return;
            var bVK0x = Math.abs(h4l.kv9m(d4h) - bE5J[0]),
                bWo0x = Math.abs(h4l.nO0x(d4h) - bE5J[1]);
            if (bVK0x > bEw7p || bWo0x > bEw7p)
                bbg0x(C4G, dJ6D)
        };
        var bbg0x = function (C4G, dJ6D) {
            if (k4o.el6f(R4V[C4G])) {
                R4V[C4G] = -1;
                a3x.w4A(C4G, dJ6D)
            }
        };
        return function (E4I, dJ6D) {
            var C4G = a3x.kp9g(E4I);
            if (!C4G || R4V[C4G] != null)
                return;
            R4V[C4G] = -1;
            dJ6D = dJ6D || a3x.u4y(C4G, "highlight") || "js-highlight";
            h4l.q4u(C4G, "touchstart", bVn0x.g4k(null, C4G, dJ6D));
            h4l.q4u(document, "touchmove", bVE0x.g4k(null, C4G, dJ6D));
            h4l.q4u(document, "touchend", bbg0x.g4k(null, C4G, dJ6D));
            h4l.q4u(document, "touchcancel", bbg0x.g4k(null, C4G, dJ6D))
        }
    }
    ();
    a3x.Ak3x = cL6F.Ak3x = function () {
        var bXR0x = function (C4G, dJ6D, bXS0x) {
            var E4I = a3x.x4B(C4G),
                d4h = {
                    clazz: dJ6D,
                    target: E4I
                };
            if (a3x.by5D(E4I, dJ6D)) {
                d4h.toggled = !1;
                a3x.w4A(E4I, dJ6D)
            } else {
                d4h.toggled = !0;
                a3x.y4C(E4I, dJ6D)
            }
            bXS0x.call(null, d4h)
        };
        return function (E4I, e4i) {
            E4I = a3x.x4B(E4I);
            if (!!E4I) {
                var ie8W = {
                    ontoggle: bm5r,
                    clazz: "js-toggle",
                    element: E4I.parentNode
                };
                if (k4o.fe6Y(e4i)) {
                    var f4j = a3x.x4B(e4i);
                    !!f4j ? ie8W.element = f4j : ie8W.clazz = e4i
                } else {
                    NEJ.EX(ie8W, e4i);
                    ie8W.element = a3x.x4B(ie8W.element)
                }
                var C4G = a3x.kp9g(ie8W.element);
                h4l.q4u(E4I, "click", bXR0x.g4k(null, C4G, ie8W.clazz, ie8W.ontoggle || bm5r))
            }
            return this
        }
    }
    ();
    a3x.lU9L = cL6F.lU9L = function (E4I, e4i) {
        E4I = a3x.x4B(E4I);
        if (!E4I)
            return;
        var eC6w = 0,
            dJ6D = "js-focus";
        if (k4o.uU2x(e4i)) {
            eC6w = e4i
        } else if (k4o.fe6Y(e4i)) {
            dJ6D = e4i
        } else if (k4o.kg9X(e4i)) {
            eC6w = e4i.mode || eC6w;
            dJ6D = e4i.clazz || dJ6D
        }
        var A4E = parseInt(a3x.u4y(E4I, "mode"));
        if (!isNaN(A4E))
            eC6w = A4E;
        A4E = a3x.u4y(E4I, "focus");
        if (!!A4E)
            dJ6D = A4E;
        ba4e.bec1x(E4I, eC6w, dJ6D);
        return this
    };
    a3x.cU6O = function () {
        var bv5A = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function (eV6P, fj6d, bA5F) {
            var E4I = document.createElement(eV6P);
            NEJ.X(E4I, bv5A[eV6P.toLowerCase()]);
            if (!!fj6d)
                E4I.className = fj6d;
            bA5F = a3x.x4B(bA5F);
            if (!!bA5F)
                bA5F.appendChild(E4I);
            return E4I
        }
    }
    ();
    a3x.Ug8Y = function () {
        var caM1x = function () {
            if (location.hostname == document.domain)
                return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cbw1x = function (T4X) {
            T4X = T4X.trim();
            if (!T4X)
                return a3x.cU6O("iframe");
            var fa6U;
            try {
                fa6U = document.createElement('<iframe name="' + T4X + '"></iframe>');
                fa6U.frameBorder = 0
            } catch (e) {
                fa6U = a3x.cU6O("iframe");
                fa6U.name = T4X
            }
            return fa6U
        };
        return function (e4i) {
            e4i = e4i || Y4c;
            var fa6U = cbw1x(e4i.name || "");
            if (!e4i.visible)
                fa6U.style.display = "none";
            if (k4o.gf7Y(e4i.onload))
                h4l.q4u(fa6U, "load", function (d4h) {
                    if (!fa6U.src)
                        return;
                    h4l.iB8t(fa6U, "load");
                    e4i.onload(d4h)
                });
            var bA5F = e4i.parent;
            if (k4o.gf7Y(bA5F)) {
                try {
                    bA5F(fa6U)
                } catch (e) {
                }
            } else {
                (a3x.x4B(bA5F) || document.body).appendChild(fa6U)
            }
            var dv6p = e4i.src || caM1x();
            window.setTimeout(function () {
                fa6U.src = dv6p
            }, 0);
            return fa6U
        }
    }
    ();
    a3x.cF6z = cL6F.cF6z = function () {
        var bHu7n = function (QY7R) {
            QY7R.src = dO6I.bpj4n
        };
        var bHz7s = function (ua2x) {
            ua2x.src = "about:blank"
        };
        return function (E4I, cdh1x) {
            E4I = a3x.x4B(E4I);
            if (!E4I)
                return this;
            if (!cdh1x)
                h4l.iB8t(E4I);
            delete bjS3x[E4I.id];
            var eV6P = E4I.tagName;
            if (eV6P == "IFRAME") {
                bHz7s(E4I)
            } else if (eV6P == "IMG") {
                bHu7n(E4I)
            } else if (!!E4I.getElementsByTagName) {
                k4o.be5j(E4I.getElementsByTagName("img"), bHu7n);
                k4o.be5j(E4I.getElementsByTagName("iframe"), bHz7s)
            }
            if (!!E4I.parentNode) {
                E4I.parentNode.removeChild(E4I)
            }
            return this
        }
    }
    ();
    a3x.mc9T = cL6F.mc9T = function (E4I) {
        E4I = a3x.x4B(E4I);
        if (!!E4I)
            R4V.appendChild(E4I);
        return this
    };
    a3x.bHS7L = cL6F.bHS7L = function (E4I) {
        E4I = a3x.x4B(E4I);
        if (!E4I)
            return;
        k4o.mu9l(E4I.childNodes, function (f4j) {
            a3x.cF6z(f4j)
        })
    };
    a3x.EV5a = cL6F.EV5a = function () {
        var dJ6D,
            fZ7S = /\s+/;
        var cfe2x = function () {
            if (!!dJ6D)
                return;
            dJ6D = a3x.rO1x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a3x.bIU7N()
        };
        return function (E4I, e4i) {
            E4I = a3x.x4B(E4I);
            if (!E4I)
                return;
            cfe2x();
            e4i = e4i || Y4c;
            var bA5F = E4I.parentNode;
            if (!a3x.by5D(bA5F, dJ6D)) {
                bA5F = a3x.cU6O("span", dJ6D);
                E4I.insertAdjacentElement("beforeBegin", bA5F);
                bA5F.appendChild(E4I)
            }
            var bIW7P = e4i.nid || "",
                f4j = a3x.I4M(bA5F, bIW7P || dJ6D + "-show")[0];
            if (!f4j) {
                var dD6x = ((e4i.clazz || "") + " " + bIW7P).trim();
                dD6x = dJ6D + "-show" + (!dD6x ? "" : " ") + dD6x;
                f4j = a3x.cU6O(e4i.tag || "span", dD6x);
                bA5F.appendChild(f4j)
            }
            var dD6x = e4i.clazz;
            if (!!dD6x) {
                dD6x = (dD6x || "").trim().split(fZ7S)[0] + "-parent";
                a3x.y4C(bA5F, dD6x)
            }
            return f4j
        }
    }
    ();
    a3x.u4y = cL6F.u4y = function () {
        var bgq2x = {},
            eV6P = "data-",
            cP6J = /\-(.{1})/gi;
        var Be4i = function (E4I) {
            var C4G = a3x.kp9g(E4I);
            if (!!bgq2x[C4G])
                return;
            var bv5A = {};
            k4o.be5j(E4I.attributes, function (f4j) {
                var J4N = f4j.nodeName;
                if (J4N.indexOf(eV6P) != 0)
                    return;
                J4N = J4N.replace(eV6P, "").replace(cP6J, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bv5A[J4N] = f4j.nodeValue || ""
            });
            bgq2x[C4G] = bv5A
        };
        return function (E4I, J4N, A4E) {
            E4I = a3x.x4B(E4I);
            if (!E4I)
                return null;
            var Ta8S = E4I.dataset;
            if (!Ta8S) {
                Be4i(E4I);
                Ta8S = bgq2x[E4I.id]
            }
            if (A4E !== undefined)
                Ta8S[J4N] = A4E;
            return Ta8S[J4N]
        }
    }
    ();
    a3x.gl7e = cL6F.gl7e = function (E4I, T4X, A4E) {
        E4I = a3x.x4B(E4I);
        if (!E4I)
            return "";
        if (A4E !== undefined && !!E4I.setAttribute)
            E4I.setAttribute(T4X, A4E);
        return ba4e.bfV2x(E4I, T4X)
    };
    a3x.mT9K = function (ds6m) {
        var qM0x = document.createElement("div");
        qM0x.innerHTML = ds6m;
        var i4m = a3x.cQ6K(qM0x);
        return i4m.length > 1 ? qM0x : i4m[0]
    };
    a3x.cgp2x = cL6F.cgp2x = function (E4I) {
        E4I = a3x.x4B(E4I);
        return !E4I ? "" : ba4e.bhm2x(E4I)
    };
    a3x.bIZ7S = function (yp3x) {
        yp3x = (yp3x || "").trim();
        return !yp3x ? null : ba4e.bii2x(yp3x)
    };
    a3x.cgK2x = function (da6U, t4x) {
        da6U = da6U || "";
        switch (t4x) {
            case "xml":
                da6U = a3x.bIZ7S(da6U);
                break;
            case "json":
                try {
                    da6U = JSON.parse(da6U)
                } catch (ex) {
                    da6U = null
                }
                break
        }
        return da6U
    };
    a3x.hL8D = cL6F.hL8D = function () {
        var cgN2x = function (E4I) {
            return E4I == document.body || E4I == document.documentElement
        };
        return function (dK6E, nK0x) {
            dK6E = a3x.x4B(dK6E);
            if (!dK6E)
                return null;
            nK0x = a3x.x4B(nK0x) || null;
            var m4q = {
                    x: 0,
                    y: 0
                },
                bjx3x,
                dh6b,
                To8g;
            while (!!dK6E && dK6E != nK0x) {
                bjx3x = cgN2x(dK6E);
                dh6b = bjx3x ? 0 : dK6E.scrollLeft;
                To8g = parseInt(a3x.db6V(dK6E, "borderLeftWidth")) || 0;
                m4q.x += dK6E.offsetLeft + To8g - dh6b;
                dh6b = bjx3x ? 0 : dK6E.scrollTop;
                To8g = parseInt(a3x.db6V(dK6E, "borderTopWidth")) || 0;
                m4q.y += dK6E.offsetTop + To8g - dh6b;
                dK6E = dK6E.offsetParent
            }
            return m4q
        }
    }
    ();
    a3x.mR9I = cL6F.mR9I = function (E4I) {
        var bj5o = a3x.hL8D(E4I);
        window.scrollTo(bj5o.x, bj5o.y);
        return this
    };
    a3x.cua6U = function (rg0x) {
        rg0x = (rg0x || "").trim();
        return ba4e.byZ6T(rg0x)
    };
    a3x.chg2x = cL6F.chg2x = function (E4I, T4X, bv5A) {
        E4I = a3x.x4B(E4I);
        if (!E4I)
            return this;
        var A4E = ba4e.bzQ6K(T4X, bv5A);
        if (!A4E)
            return this;
        a3x.X4b(E4I, "transform", A4E);
        return this
    };
    a3x.fz7s = cL6F.fz7s = function (E4I, bv5A) {
        E4I = a3x.x4B(E4I);
        if (!!E4I)
            k4o.ed6X(bv5A, function (A4E, T4X) {
                a3x.X4b(E4I, T4X, A4E)
            });
        return this
    };
    a3x.chy2x = cL6F.chy2x = function (fF7y, e4i) {
        fF7y = a3x.x4B(fF7y);
        if (!fF7y)
            return {
                start: 0,
                end: 0
            };
        if (k4o.uU2x(e4i))
            e4i = {
                start: e4i,
                end: e4i
            };
        if (e4i != null) {
            if (e4i.end == null)
                e4i.end = e4i.start || 0;
            ba4e.bdc1x(fF7y, e4i)
        } else {
            e4i = ba4e.bdr1x(fF7y)
        }
        return e4i
    };
    a3x.X4b = cL6F.X4b = function (E4I, T4X, A4E) {
        E4I = a3x.x4B(E4I);
        if (!!E4I)
            ba4e.bpd4h(E4I, T4X, A4E);
        return this
    };
    a3x.db6V = cL6F.db6V = function (E4I, T4X) {
        E4I = a3x.x4B(E4I);
        if (!E4I)
            return "";
        var gn7g = !window.getComputedStyle ? E4I.currentStyle || Y4c : window.getComputedStyle(E4I, null);
        return gn7g[ba4e.bzR6L(T4X)] || ""
    };
    a3x.bJA8s = function () {
        var cP6J = /[\s\r\n]+/gi;
        return function (cd5i) {
            cd5i = (cd5i || "").trim().replace(cP6J, " ");
            if (!cd5i)
                return;
            var f4j = a3x.cU6O("style");
            document.head.appendChild(f4j);
            ba4e.bbM1x(f4j, ba4e.cnK3x(cd5i));
            return f4j
        }
    }
    ();
    a3x.bJB8t = function (xo3x) {
        try {
            xo3x = xo3x.trim();
            if (!!xo3x)
                return (new Function(xo3x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a3x.rO1x = function () {
        var cP6J = /#<.*?>/g,
            fX7Q = +(new Date);
        return function (ju8m) {
            if (!EH4L)
                EH4L = [];
            var fj6d = "auto-" + fX7Q++;
            EH4L.push(ju8m.replace(cP6J, fj6d));
            return fj6d
        }
    }
    ();
    a3x.bIU7N = function () {
        if (!!EH4L) {
            a3x.bJA8s(EH4L.join(""));
            EH4L = null
        }
        return this
    };
    a3x.ctV6P = function (cd5i, ju8m) {
        cd5i = a3x.x4B(cd5i);
        return !cd5i ? null : ba4e.bde1x(cd5i, ju8m)
    };
    a3x.y4C = cL6F.y4C = function () {
        ba4e.bnW3x.apply(ba4e, arguments);
        return this
    };
    a3x.w4A = cL6F.w4A = function () {
        ba4e.boP4T.apply(ba4e, arguments);
        return this
    };
    a3x.ev6p = cL6F.ev6p = function () {
        ba4e.Nb6V.apply(ba4e, arguments);
        return this
    };
    a3x.by5D = cL6F.by5D = function () {
        return ba4e.bbs0x.apply(ba4e, arguments)
    };
    if (!document.head)
        document.head = document.getElementsByTagName("head")[0] || document.body;
    cL6F.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        eU6O = NEJ.R,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        ba4e = c4g("nej.h"),
        k4o = c4g("nej.u");
    var AL4P = function (j4n, t4x) {
        try {
            t4x = t4x.toLowerCase();
            if (j4n === null)
                return t4x == "null";
            if (j4n === undefined)
                return t4x == "undefined";
            return Y4c.toString.call(j4n).toLowerCase() == "[object " + t4x + "]"
        } catch (e) {
            return !1
        }
    };
    k4o.gf7Y = function (j4n) {
        return AL4P(j4n, "function")
    };
    k4o.fe6Y = function (j4n) {
        return AL4P(j4n, "string")
    };
    k4o.uU2x = function (j4n) {
        return AL4P(j4n, "number")
    };
    k4o.ctU6O = function (j4n) {
        return AL4P(j4n, "boolean")
    };
    k4o.Iq5v = function (j4n) {
        return AL4P(j4n, "date")
    };
    k4o.el6f = function (j4n) {
        return AL4P(j4n, "array")
    };
    k4o.kg9X = function (j4n) {
        return AL4P(j4n, "object")
    };
    k4o.fi6c = function () {
        var cP6J = /[^\x00-\xfff]/g;
        return function (bi5n) {
            return ("" + (bi5n || "")).replace(cP6J, "**").length
        }
    }
    ();
    k4o.cV6P = function (i4m, r4v) {
        var dE6y = k4o.gf7Y(r4v) ? r4v : function (A4E) {
                return A4E === r4v
            },
            s4w = k4o.ed6X(i4m, dE6y);
        return s4w != null ? s4w : -1
    };
    k4o.ctN6H = function () {
        var bKv8n;
        var Oh7a = function (i4m, nH0x, nG0x) {
            if (nH0x > nG0x)
                return -1;
            var AI4M = Math.ceil((nH0x + nG0x) / 2),
                m4q = bKv8n(i4m[AI4M], AI4M, i4m);
            if (m4q == 0)
                return AI4M;
            if (m4q < 0)
                return Oh7a(i4m, nH0x, AI4M - 1);
            return Oh7a(i4m, AI4M + 1, nG0x)
        };
        return function (i4m, IK5P) {
            bKv8n = IK5P || bm5r;
            return Oh7a(i4m, 0, i4m.length - 1)
        }
    }
    ();
    k4o.mu9l = function (i4m, dr6l, ig8Y) {
        if (!i4m || !i4m.length || !k4o.gf7Y(dr6l))
            return null;
        for (var i = i4m.length - 1; i >= 0; i--)
            if (!!dr6l.call(ig8Y, i4m[i], i, i4m))
                return i;
        return null
    };
    k4o.be5j = function (i4m, dr6l, ig8Y) {
        if (!i4m || !i4m.length || !k4o.gf7Y(dr6l))
            return this;
        if (!!i4m.forEach) {
            i4m.forEach(dr6l, ig8Y);
            return this
        }
        for (var i = 0, l = i4m.length; i < l; i++)
            dr6l.call(ig8Y, i4m[i], i, i4m);
        return this
    };
    k4o.ed6X = function (i4m, dr6l, ig8Y) {
        if (!i4m || !k4o.gf7Y(dr6l))
            return null;
        if (i4m.length != null) {
            if (i4m.length > 0)
                for (var i = 0, l = i4m.length; i < l; i++)
                    if (!!dr6l.call(ig8Y, i4m[i], i, i4m))
                        return i
        }
        if (k4o.kg9X(i4m)) {
            for (var x in i4m)
                if (i4m.hasOwnProperty(x) && !!dr6l.call(ig8Y, i4m[x], x, i4m))
                    return x
        }
        return null
    };
    k4o.ckt3x = function (if8X, ckH3x, e4i) {
        if8X = if8X || [];
        e4i = e4i || Y4c;
        var bLT8L = !!e4i.union,
            uz2x = !!e4i.begin,
            VR9I = e4i.compare,
            cox4B = bLT8L && uz2x ? k4o.mu9l : k4o.be5j;
        cox4B(ckH3x, function (r4v) {
            if (!!VR9I)
                VR9I = VR9I.dW6Q(r4v);
            var s4w = k4o.cV6P(if8X, VR9I || r4v);
            if (s4w >= 0)
                if8X.splice(s4w, 1);
            if (bLT8L)
                if8X[uz2x ? "unshift" : "push"](r4v)
        });
        return if8X
    };
    k4o.Bh4l = function (bv5A, bi5n) {
        if (!bv5A || !bi5n || !bi5n.replace)
            return bi5n || "";
        return bi5n.replace(bv5A.r, function ($1) {
            var m4q = bv5A[!bv5A.i ? $1.toLowerCase() : $1];
            return m4q != null ? m4q : $1
        })
    };
    k4o.dM6G = function () {
        var bv5A = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (bi5n) {
            return k4o.Bh4l(bv5A, bi5n)
        }
    }
    ();
    k4o.Nn7g = function () {
        var bv5A = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bi5n) {
            return k4o.Bh4l(bv5A, bi5n)
        }
    }
    ();
    k4o.iS8K = function () {
        var bv5A = {
                i: !0,
                r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
            },
            cpc5h = ["涓婂崍", "涓嬪崍"],
            cqn5s = ["A.M.", "P.M."],
            bbm0x = ["鏃�", "涓€", "浜�", "涓�", "鍥�", "浜�", "鍏�"],
            cqY5d = ["涓€", "浜�", "涓�", "鍥�", "浜�", "鍏�", "涓�", "鍏�", "涔�", "鍗�", "鍗佷竴", "鍗佷簩"],
            csA5F = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Mf6Z = function (fq7j) {
            fq7j = parseInt(fq7j) || 0;
            return (fq7j < 10 ? "0" : "") + fq7j
        };
        var csD5I = function (oM0x) {
            return oM0x < 12 ? 0 : 1
        };
        return function (bB5G, Gc5h, cte5j) {
            if (!bB5G || !Gc5h)
                return "";
            bB5G = k4o.Xf9W(bB5G);
            bv5A.yyyy = bB5G.getFullYear();
            bv5A.yy = ("" + bv5A.yyyy).substr(2);
            bv5A.M = bB5G.getMonth() + 1;
            bv5A.MM = Mf6Z(bv5A.M);
            bv5A.eM = csA5F[bv5A.M - 1];
            bv5A.cM = cqY5d[bv5A.M - 1];
            bv5A.d = bB5G.getDate();
            bv5A.dd = Mf6Z(bv5A.d);
            bv5A.H = bB5G.getHours();
            bv5A.HH = Mf6Z(bv5A.H);
            bv5A.m = bB5G.getMinutes();
            bv5A.mm = Mf6Z(bv5A.m);
            bv5A.s = bB5G.getSeconds();
            bv5A.ss = Mf6Z(bv5A.s);
            bv5A.ms = bB5G.getMilliseconds();
            bv5A.w = bbm0x[bB5G.getDay()];
            var bNA8s = csD5I(bv5A.H);
            bv5A.ct = cpc5h[bNA8s];
            bv5A.et = cqn5s[bNA8s];
            if (!!cte5j) {
                bv5A.H = bv5A.H % 12
            }
            return k4o.Bh4l(bv5A, Gc5h)
        }
    }
    ();
    k4o.Xf9W = function (bB5G) {
        var cD6x = bB5G;
        if (k4o.fe6Y(bB5G))
            cD6x = new Date(Date.parse(bB5G));
        if (!k4o.Iq5v(bB5G))
            cD6x = new Date(bB5G);
        return cD6x
    };
    k4o.GV5a = function (csV5a, csT5Y) {
        return (new Number(csV5a)).toFixed(csT5Y)
    };
    k4o.bdo1x = function () {
        var fZ7S = /([^\/:])\/.*$/,
            jr8j = /\/[^\/]+$/,
            Ct4x = /[#\?]/,
            bdv1x = location.href.split(/[?#]/)[0],
            rR1x = document.createElement("a");
        var beb1x = function (lz9q) {
            return (lz9q || "").indexOf("://") > 0
        };
        var bNw8o = function (lz9q) {
            return (lz9q || "").split(Ct4x)[0].replace(jr8j, "/")
        };
        var csP5U = function (lz9q, fv7o) {
            if (lz9q.indexOf("/") == 0)
                return fv7o.replace(fZ7S, "$1") + lz9q;
            return bNw8o(fv7o) + lz9q
        };
        bdv1x = bNw8o(bdv1x);
        return function (lz9q, fv7o) {
            lz9q = (lz9q || "").trim();
            if (!beb1x(fv7o))
                fv7o = bdv1x;
            if (!lz9q)
                return fv7o;
            if (beb1x(lz9q))
                return lz9q;
            lz9q = csP5U(lz9q, fv7o);
            rR1x.href = lz9q;
            lz9q = rR1x.href;
            return beb1x(lz9q) ? lz9q : rR1x.getAttribute("href", 4)
        }
    }
    ();
    k4o.csK5P = function () {
        var cP6J = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V4Z) {
            if (cP6J.test(V4Z || ""))
                return RegExp.$1.toLowerCase();
            return ""
        }
    }
    ();
    k4o.bNs8k = function (G4K, ie8W) {
        if (!G4K)
            return ie8W;
        var T4X = G4K.tagName.toLowerCase(),
            i4m = a3x.cQ6K(G4K);
        if (!i4m || !i4m.length) {
            ie8W[T4X] = G4K.textContent || G4K.text || "";
            return ie8W
        }
        var dP6J = {};
        ie8W[T4X] = dP6J;
        k4o.be5j(i4m, function (f4j) {
            k4o.bNs8k(f4j, dP6J)
        });
        return ie8W
    };
    k4o.cti5n = function (yp3x) {
        try {
            return k4o.bNs8k(a3x.bIZ7S(yp3x), {})
        } catch (ex) {
            return null
        }
    };
    k4o.bNq8i = function (hH8z, Lq6k) {
        var ie8W = {};
        k4o.be5j((hH8z || "").split(Lq6k), function (T4X) {
            var XZ9Q = T4X.split("=");
            if (!XZ9Q || !XZ9Q.length)
                return;
            var J4N = XZ9Q.shift();
            if (!J4N)
                return;
            ie8W[decodeURIComponent(J4N)] = decodeURIComponent(XZ9Q.join("="))
        });
        return ie8W
    };
    k4o.uS2x = function (gd7W, Lq6k, csG5L) {
        if (!gd7W)
            return "";
        var bs5x = [];
        for (var x in gd7W) {
            bs5x.push(encodeURIComponent(x) + "=" + (!!csG5L ? encodeURIComponent(gd7W[x]) : gd7W[x]))
        }
        return bs5x.join(Lq6k || ",")
    };
    k4o.hi7b = function (bC5H) {
        return k4o.bNq8i(bC5H, "&")
    };
    k4o.df6Z = function (gd7W) {
        return k4o.uS2x(gd7W, "&", !0)
    };
    k4o.ctk5p = function (gd7W) {
        return ba4e.FX5c(gd7W)
    };
    k4o.ctl5q = function (i4m, dE6y) {
        var m4q = {};
        k4o.be5j(i4m, function (r4v) {
            var J4N = r4v;
            if (!!dE6y) {
                J4N = dE6y(r4v)
            }
            m4q[J4N] = r4v
        });
        return m4q
    };
    k4o.ctm5r = function (fq7j, fY7R) {
        var csz5E = ("" + fq7j).length,
            csy5D = Math.max(1, parseInt(fY7R) || 0),
            dh6b = csy5D - csz5E;
        if (dh6b > 0) {
            fq7j = (new Array(dh6b + 1)).join("0") + fq7j
        }
        return "" + fq7j
    };
    k4o.YM9D = function (gd7W, T4X) {
        if (!k4o.el6f(T4X)) {
            try {
                delete gd7W[T4X]
            } catch (e) {
                gd7W[T4X] = undefined
            }
            return this
        }
        k4o.be5j(T4X, k4o.YM9D.g4k(k4o, gd7W));
        return this
    };
    k4o.Sl8d = function () {
        var bNo8g = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bo5t) {
            bo5t = bo5t || 10;
            var m4q = [];
            for (var i = 0, bNn8f; i < bo5t; ++i) {
                bNn8f = Math.floor(Math.random() * bNo8g.length);
                m4q.push(bNo8g.charAt(bNn8f))
            }
            return m4q.join("")
        }
    }
    ();
    k4o.Kw6q = function (fH7A, fb6V) {
        return Math.floor(Math.random() * (fb6V - fH7A) + fH7A)
    };
    k4o.mP9G = function (bo5t) {
        bo5t = Math.max(0, Math.min(bo5t || 8, 30));
        var fH7A = Math.pow(10, bo5t - 1),
            fb6V = fH7A * 10;
        return k4o.Kw6q(fH7A, fb6V).toString()
    };
    k4o.YP9G = function () {
        var fX7Q = +(new Date);
        return function () {
            return "" + fX7Q++
        }
    }
    ()
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        eU6O = NEJ.R,
        bm5r = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ut"),
        nD0x;
    if (!!M4Q.cz5E)
        return;
    M4Q.cz5E = NEJ.C();
    nD0x = M4Q.cz5E.prototype;
    M4Q.cz5E.B4F = function (e4i) {
        e4i = e4i || {};
        var cq5v = !!this.As3x && this.As3x.shift();
        if (!cq5v) {
            cq5v = new this(e4i);
            this.csv5A = (this.csv5A || 0) + 1
        }
        cq5v.bk5p(e4i);
        return cq5v
    };
    M4Q.cz5E.S4W = function () {
        var Km6g = function (r4v, s4w, i4m) {
            r4v.S4W();
            i4m.splice(s4w, 1)
        };
        return function (cq5v) {
            if (!cq5v)
                return null;
            if (!k4o.el6f(cq5v)) {
                if (!(cq5v instanceof this)) {
                    var fj6d = cq5v.constructor;
                    if (!!fj6d.S4W)
                        fj6d.S4W(cq5v);
                    return null
                }
                if (cq5v == this.eJ6D)
                    delete this.eJ6D;
                if (cq5v == this.zv3x)
                    delete this.zv3x;
                cq5v.bD5I();
                if (!this.As3x)
                    this.As3x = [];
                if (k4o.cV6P(this.As3x, cq5v) < 0) {
                    this.As3x.push(cq5v)
                }
                return null
            }
            k4o.mu9l(cq5v, Km6g, this)
        }
    }
    ();
    M4Q.cz5E.fV7O = function (e4i) {
        e4i = e4i || {};
        if (!this.eJ6D)
            this.eJ6D = this.B4F(e4i);
        return this.eJ6D
    };
    M4Q.cz5E.csu5z = function (e4i, qI0x) {
        e4i = e4i || {};
        if (!!qI0x && !!this.zv3x) {
            this.zv3x.S4W();
            delete this.zv3x
        }
        if (!this.zv3x) {
            this.zv3x = this.B4F(e4i)
        } else {
            this.zv3x.bk5p(e4i)
        }
        return this.zv3x
    };
    nD0x.cl5q = function () {
        var fX7Q = +(new Date);
        return function () {
            this.id = fX7Q++;
            this.kO9F = {};
            this.bNi8a = {}
        }
    }
    ();
    nD0x.bk5p = function (e4i) {
        this.bli3x(e4i)
    };
    nD0x.bD5I = function () {
        this.iB8t();
        this.Ia5f()
    };
    nD0x.bU5Z = function () {
        var fX7Q = +(new Date);
        var crY5d = function (bg5l) {
            if (!bg5l || bg5l.length < 3)
                return;
            this.bNi8a["de-" + fX7Q++] = bg5l;
            h4l.q4u.apply(h4l, bg5l)
        };
        return function (i4m) {
            k4o.be5j(i4m, crY5d, this)
        }
    }
    ();
    nD0x.Ia5f = function () {
        var crX5c = function (bg5l, J4N, bv5A) {
            delete bv5A[J4N];
            h4l.ms9j.apply(h4l, bg5l)
        };
        return function () {
            k4o.ed6X(this.bNi8a, crX5c)
        }
    }
    ();
    nD0x.ctq5v = function (dE6y) {
        dE6y = dE6y || bm5r;
        k4o.ed6X(this, function (DH4L, J4N, bv5A) {
            if (!!DH4L && !!DH4L.S4W && !dE6y(DH4L)) {
                delete bv5A[J4N];
                DH4L.S4W()
            }
        })
    };
    nD0x.S4W = function () {
        this.constructor.S4W(this)
    };
    nD0x.bNf8X = function (t4x) {
        var d4h = this.kO9F[t4x.toLowerCase()];
        return !!d4h && d4h !== bm5r
    };
    nD0x.q4u = function (t4x, d4h) {
        this.ux2x.apply(this, arguments);
        return this
    };
    nD0x.ms9j = function (t4x, d4h) {
        var t4x = (t4x || "").toLowerCase(),
            dI6C = this.kO9F[t4x];
        if (!k4o.el6f(dI6C)) {
            if (dI6C == d4h)
                delete this.kO9F[t4x];
            return
        }
        k4o.mu9l(dI6C, function (eH6B, s4w, i4m) {
            if (eH6B == d4h)
                i4m.splice(s4w, 1)
        })
    };
    nD0x.ux2x = function (t4x, d4h) {
        if (!!t4x && k4o.gf7Y(d4h))
            this.kO9F[t4x.toLowerCase()] = d4h;
        return this
    };
    nD0x.bli3x = function () {
        var crT5Y = function (d4h, t4x) {
            this.ux2x(t4x, d4h)
        };
        return function (dI6C) {
            k4o.ed6X(dI6C, crT5Y, this);
            return this
        }
    }
    ();
    nD0x.iB8t = function () {
        var bmW3x = function (d4h, t4x) {
            this.iB8t(t4x)
        };
        return function (t4x) {
            var t4x = (t4x || "").toLowerCase();
            if (!!t4x) {
                delete this.kO9F[t4x]
            } else {
                k4o.ed6X(this.kO9F, bmW3x, this)
            }
            return this
        }
    }
    ();
    nD0x.bna3x = function (t4x, d4h) {
        if (!t4x || !k4o.gf7Y(d4h))
            return this;
        t4x = t4x.toLowerCase();
        var dI6C = this.kO9F[t4x];
        if (!dI6C) {
            this.kO9F[t4x] = d4h;
            return this
        }
        if (!k4o.el6f(dI6C)) {
            this.kO9F[t4x] = [dI6C]
        }
        this.kO9F[t4x].push(d4h);
        return this
    };
    nD0x.z4D = function (t4x) {
        var d4h = this.kO9F[(t4x || "").toLowerCase()];
        if (!d4h)
            return this;
        var bg5l = eU6O.slice.call(arguments, 1);
        if (!k4o.el6f(d4h))
            return d4h.apply(this, bg5l);
        k4o.be5j(d4h, function (dc6W) {
            try {
                dc6W.apply(this, bg5l)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    M4Q.ZI0x = function () {
        var R4V = {};
        return function (C4G, fj6d, e4i) {
            var eI6C = fj6d.crS5X;
            if (!eI6C) {
                eI6C = k4o.Sl8d(10);
                fj6d.crS5X = eI6C
            }
            var J4N = C4G + "-" + eI6C,
                cq5v = R4V[J4N];
            if (!!e4i && !cq5v) {
                cq5v = fj6d.B4F(e4i);
                cq5v.S4W = cq5v.S4W.ef6Z(function (d4h) {
                    delete R4V[J4N];
                    delete cq5v.S4W
                });
                R4V[J4N] = cq5v
            }
            return cq5v
        }
    }
    ()
})();
(function () {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gG7z = function () {
        var cD6x = new Date,
            crR5W = +cD6x,
            boq3x = 864e5;
        var crO5T = function (T4X) {
            var qV0x = document.cookie,
                rN1x = "\\b" + T4X + "=",
                RI8A = qV0x.search(rN1x);
            if (RI8A < 0)
                return "";
            RI8A += rN1x.length - 2;
            var xX3x = qV0x.indexOf(";", RI8A);
            if (xX3x < 0)
                xX3x = qV0x.length;
            return qV0x.substring(RI8A, xX3x) || ""
        };
        return function (T4X, j4n) {
            if (j4n === undefined)
                return crO5T(T4X);
            if (u.fe6Y(j4n)) {
                if (!!j4n) {
                    document.cookie = T4X + "=" + j4n + ";";
                    return j4n
                }
                j4n = {
                    expires: -100
                }
            }
            j4n = j4n || o;
            var qV0x = T4X + "=" + (j4n.value || "") + ";";
            delete j4n.value;
            if (j4n.expires !== undefined) {
                cD6x.setTime(crR5W + j4n.expires * boq3x);
                j4n.expires = cD6x.toGMTString()
            }
            qV0x += u.uS2x(j4n, ";");
            document.cookie = qV0x
        }
    }
    ()
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        iC8u = c4g("nej.c"),
        dO6I = c4g("nej.g"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        M4Q = c4g("nej.ut.j"),
        k4o = c4g("nej.u"),
        b4f;
    if (!!M4Q.Ja6U)
        return;
    M4Q.Ja6U = NEJ.C();
    b4f = M4Q.Ja6U.O4S(H4L.cz5E);
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.od0x = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.od0x, e4i);
        var zj3x = iC8u.x4B("csrf");
        if ((/^\/[^\/]/.test(this.od0x.url) || this.od0x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!zj3x.cookie && !!zj3x.param) {
            var bC5H = encodeURIComponent(zj3x.param) + "=" + encodeURIComponent(v4z.gG7z(zj3x.cookie) || ""),
                Lq6k = this.od0x.url.indexOf("?") < 0 ? "?" : "&";
            this.od0x.url += Lq6k + bC5H
        }
        this.bac0x = e4i.headers || {};
        var bi5n = this.bac0x[dO6I.xj2x];
        if (bi5n == null)
            this.bac0x[dO6I.xj2x] = dO6I.bTD0x
    };
    b4f.bD5I = function () {
        this.bH5M();
        delete this.zx3x;
        delete this.od0x;
        delete this.bac0x
    };
    b4f.crN5S = function (bi5n) {
        var bv5A = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.od0x.noescape) {
            return k4o.Bh4l(bv5A, bi5n)
        } else {
            return bi5n
        }
    };
    b4f.sz1x = function (d4h) {
        var dY6S = d4h.status;
        if (dY6S == -1) {
            this.z4D("onerror", {
                code: dO6I.bvT5Y,
                message: "璇锋眰[" + this.od0x.url + "]瓒呮椂锛�"
            });
            return
        }
        if (("" + dY6S).indexOf("2") != 0) {
            this.z4D("onerror", {
                data: dY6S,
                code: dO6I.bkw3x,
                message: "鏈嶅姟鍣ㄨ繑鍥炲紓甯哥姸鎬乕" + dY6S + "]!",
                extData: d4h.result
            });
            return
        }
        this.z4D("onload", a3x.cgK2x(this.crN5S(d4h.result), this.od0x.type))
    };
    b4f.ck5p = bm5r;
    b4f.bbo0x = function (j4n) {
        var V4Z = this.od0x.url;
        if (!V4Z) {
            this.z4D("onerror", {
                code: dO6I.bgR2x,
                message: "娌℃湁杈撳叆璇锋眰鍦板潃锛�"
            });
            return this
        }
        try {
            this.od0x.data = j4n == null ? null : j4n;
            var d4h = {
                request: this.od0x,
                headers: this.bac0x
            };
            try {
                this.z4D("onbeforerequest", d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.ck5p(d4h)
        } catch (e) {
            this.z4D("onerror", {
                code: dO6I.bkw3x,
                message: "璇锋眰[" + V4Z + "]澶辫触:" + e.message + "锛�"
            })
        }
        return this
    };
    b4f.jj8b = bm5r
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        ba4e = c4g("nej.h"),
        dO6I = c4g("nej.g"),
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ut.j"),
        R4V = {},
        Jv6p;
    if (!!M4Q.ZY0x)
        return;
    M4Q.ZY0x = NEJ.C();
    Jv6p = M4Q.ZY0x.O4S(M4Q.Ja6U);
    Jv6p.bD5I = function () {
        this.bH5M();
        window.clearTimeout(this.dL6F);
        delete this.dL6F;
        try {
            this.qz0x.onreadystatechange = bm5r;
            this.qz0x.abort()
        } catch (e) {
        }
        delete this.qz0x
    };
    Jv6p.ck5p = function () {
        var crJ5O = function (A4E, J4N) {
            this.qz0x.setRequestHeader(J4N, A4E)
        };
        return function (e4i) {
            var fC7v = e4i.request,
                ny0x = e4i.headers;
            this.qz0x = ba4e.bcC1x();
            if (ny0x[dO6I.xj2x] === dO6I.DB4F) {
                delete ny0x[dO6I.xj2x];
                this.qz0x.upload.onprogress = this.hj7c.g4k(this, 1);
                if (fC7v.data.tagName === "FORM")
                    fC7v.data = new FormData(fC7v.data)
            }
            this.qz0x.onreadystatechange = this.hj7c.g4k(this, 2);
            if (fC7v.timeout != 0) {
                this.dL6F = window.setTimeout(this.hj7c.g4k(this, 3), fC7v.timeout)
            }
            this.qz0x.open(fC7v.method, fC7v.url, !fC7v.sync);
            k4o.ed6X(ny0x, crJ5O, this);
            if (!!this.od0x.cookie && "withCredentials" in this.qz0x)
                this.qz0x.withCredentials = !0;
            this.qz0x.send(fC7v.data)
        }
    }
    ();
    Jv6p.hj7c = function (t4x) {
        switch (t4x) {
            case 1:
                this.z4D("onuploading", arguments[1]);
                break;
            case 2:
                if (this.qz0x.readyState == 4)
                    this.sz1x({
                        status: this.qz0x.status,
                        result: this.qz0x.responseText || ""
                    });
                break;
            case 3:
                this.sz1x({
                    status: -1
                });
                break
        }
    };
    Jv6p.jj8b = function () {
        this.sz1x({
            status: 0
        });
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined")
            TrimPath = exports
    }
    var JC6w = {},
        ZP0x = [],
        bNc8U = /\s+/g,
        fX7Q = +(new Date),
        Iv5A,
        bN5S,
        ls9j;
    var DQ4U = function () {
        var fZ7S = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            jr8j = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            Ct4x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            bdn1x = /^new\s+/,
            crC5H = /['"]/;
        var crz5E = function (A4E) {
            if (fZ7S.test(A4E))
                return;
            A4E = A4E.split(".")[0].trim();
            if (!A4E || crC5H.test(A4E))
                return;
            A4E = A4E.replace(bdn1x, "");
            try {
                if (Ct4x.test(A4E))
                    return;
                ls9j[A4E] = 1
            } catch (e) {
            }
        };
        return function (bi5n) {
            bi5n = bi5n || "";
            if (!bi5n || fZ7S.test(bi5n))
                return;
            var bs5x = bi5n.split(jr8j);
            for (var i = 0, l = bs5x.length; i < l; i++)
                crz5E(bs5x[i])
        }
    }
    ();
    var cry5D = function (dk6e) {
        if (dk6e[2] != "in")
            throw "bad for loop statement: " + dk6e.join(" ");
        ZP0x.push(dk6e[1]);
        DQ4U(dk6e[3]);
        return "var __HASH__" + dk6e[1] + " = " + dk6e[3] + "," + dk6e[1] + "," + dk6e[1] + "_count=0;" + "if (!!__HASH__" + dk6e[1] + ")" + "for(var " + dk6e[1] + "_key in __HASH__" + dk6e[1] + "){" + dk6e[1] + " = __HASH__" + dk6e[1] + "[" + dk6e[1] + "_key];" + "if (typeof(" + dk6e[1] + ')=="function") continue;' + dk6e[1] + "_count++;"
    };
    var crv5A = function () {
        var dk6e = ZP0x[ZP0x.length - 1];
        return "}; if(!__HASH__" + dk6e + "||!" + dk6e + "_count){"
    };
    var crs5x = function () {
        ZP0x.pop();
        return "};"
    };
    var crr5w = function (dk6e) {
        if (dk6e[2] != "as")
            throw "bad for list loop statement: " + dk6e.join(" ");
        var Kc6W = dk6e[1].split("..");
        if (Kc6W.length > 1) {
            DQ4U(Kc6W[0]);
            DQ4U(Kc6W[1]);
            return "for(var " + dk6e[3] + "," + dk6e[3] + "_index=0," + dk6e[3] + "_beg=" + Kc6W[0] + "," + dk6e[3] + "_end=" + Kc6W[1] + "," + dk6e[3] + "_length=parseInt(" + dk6e[3] + "_end-" + dk6e[3] + "_beg+1);" + dk6e[3] + "_index<" + dk6e[3] + "_length;" + dk6e[3] + "_index++){" + dk6e[3] + " = " + dk6e[3] + "_beg+" + dk6e[3] + "_index;"
        } else {
            DQ4U(dk6e[1]);
            return "for(var __LIST__" + dk6e[3] + " = " + dk6e[1] + "," + dk6e[3] + "," + dk6e[3] + "_index=0," + dk6e[3] + "_length=__LIST__" + dk6e[3] + ".length;" + dk6e[3] + "_index<" + dk6e[3] + "_length;" + dk6e[3] + "_index++){" + dk6e[3] + " = __LIST__" + dk6e[3] + "[" + dk6e[3] + "_index];"
        }
    };
    var crm5r = function (dk6e) {
        if (!dk6e || !dk6e.length)
            return;
        dk6e.shift();
        var T4X = dk6e[0].split("(")[0];
        return "var " + T4X + " = function" + dk6e.join("").replace(T4X, "") + "{var __OUT=[];"
    };
    var crl5q = function (dk6e) {
        if (!dk6e[1])
            throw "bad include statement: " + dk6e.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var beo1x = function (lf9W, dk6e) {
        DQ4U(dk6e.slice(1).join(" "));
        return lf9W
    };
    var cri5n = function (dk6e) {
        return beo1x("if(", dk6e)
    };
    var crh5m = function (dk6e) {
        return beo1x("}else if(", dk6e)
    };
    var crg5l = function (dk6e) {
        return beo1x("var ", dk6e)
    };
    bN5S = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cri5n,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: crh5m,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cry5D,
                pmin: 3
            },
            forelse: {
                pfix: crv5A
            },
            "/for": {
                pfix: crs5x
            },
            list: {
                pfix: crr5w,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: crg5l,
                sfix: ";"
            },
            macro: {
                pfix: crm5r
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function () {
                    Iv5A = !0
                }
            },
            "/trim": {
                pfix: function () {
                    Iv5A = null
                }
            },
            inline: {
                pfix: crl5q,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function (lf9W) {
                return (lf9W || "") + "" + fX7Q
            },
            "default": function (A4E, ku9l) {
                return A4E || ku9l
            }
        }
    };
    var cqZ5e = function () {
        var cqV5a = /\\([\{\}])/g;
        return function (bi5n, iL8D) {
            bi5n = bi5n.replace(cqV5a, "$1");
            var dk6e = bi5n.slice(1, -1).split(bNc8U),
                bc5h = bN5S.def[dk6e[0]];
            if (!bc5h) {
                YK9B(bi5n, iL8D);
                return
            }
            if (!!bc5h.pmin && bc5h.pmin >= dk6e.length)
                throw "Statement needs more parameters:" + bi5n;
            iL8D.push(!!bc5h.pfix && typeof bc5h.pfix != "string" ? bc5h.pfix(dk6e) : bc5h.pfix || "");
            if (!!bc5h.sfix) {
                if (dk6e.length <= 1) {
                    if (!!bc5h.pdft)
                        iL8D.push(bc5h.pdft)
                } else {
                    for (var i = 1, l = dk6e.length; i < l; i++) {
                        if (i > 1)
                            iL8D.push(" ");
                        iL8D.push(dk6e[i])
                    }
                }
                iL8D.push(bc5h.sfix)
            }
        }
    }
    ();
    var bMN8F = function (Hu5z, iL8D) {
        if (!Hu5z || !Hu5z.length)
            return;
        if (Hu5z.length == 1) {
            var bgf2x = Hu5z.pop();
            DQ4U(bgf2x);
            iL8D.push(bgf2x == "" ? '""' : bgf2x);
            return
        }
        var bgg2x = Hu5z.pop().split(":");
        iL8D.push("__MDF['" + bgg2x.shift() + "'](");
        bMN8F(Hu5z, iL8D);
        if (bgg2x.length > 0) {
            var bg5l = bgg2x.join(":");
            DQ4U(bg5l);
            iL8D.push("," + bg5l)
        }
        iL8D.push(")")
    };
    var YK9B = function (bi5n, iL8D) {
        if (!bi5n)
            return;
        var vh2x = bi5n.split("\n");
        if (!vh2x || !vh2x.length)
            return;
        for (var i = 0, l = vh2x.length, he7X; i < l; i++) {
            he7X = vh2x[i];
            if (!!Iv5A) {
                he7X = he7X.trim();
                if (!he7X)
                    continue
            }
            cqK5P(he7X, iL8D);
            if (!!Iv5A && i < l - 1)
                iL8D.push("__OUT.push('\\n');")
        }
    };
    var cqK5P = function () {
        var cqJ5O = /\|\|/g,
            cqI5N = /#@@#/g;
        return function (bi5n, iL8D) {
            var KZ6T = "}",
                Lf6Z = -1,
                bo5t = bi5n.length,
                uz2x,
                gy7r,
                GP5U,
                Ya9R,
                Lo6i;
            while (Lf6Z + KZ6T.length < bo5t) {
                uz2x = "${";
                gy7r = "}";
                GP5U = bi5n.indexOf(uz2x, Lf6Z + KZ6T.length);
                if (GP5U < 0)
                    break;
                if (bi5n.charAt(GP5U + 2) == "%") {
                    uz2x = "${%";
                    gy7r = "%}"
                }
                Ya9R = bi5n.indexOf(gy7r, GP5U + uz2x.length);
                if (Ya9R < 0)
                    break;
                XY9P(bi5n.substring(Lf6Z + KZ6T.length, GP5U), iL8D);
                Lo6i = bi5n.substring(GP5U + uz2x.length, Ya9R).replace(cqJ5O, "#@@#").split("|");
                for (var i = 0, l = Lo6i.length; i < l; Lo6i[i] = Lo6i[i].replace(cqI5N, "||"), i++);
                iL8D.push("__OUT.push(");
                bMN8F(Lo6i, iL8D);
                iL8D.push(");");
                KZ6T = gy7r;
                Lf6Z = Ya9R
            }
            XY9P(bi5n.substring(Lf6Z + KZ6T.length), iL8D)
        }
    }
    ();
    var XY9P = function () {
        var bv5A = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cqH5M = function (bi5n) {
            return (bi5n || "").replace(bv5A.r, function ($1) {
                return bv5A[$1] || $1
            })
        };
        return function (bi5n, iL8D) {
            if (!bi5n)
                return;
            iL8D.push("__OUT.push('" + cqH5M(bi5n) + "');")
        }
    }
    ();
    var cqD5I = function () {
        var cqA5F = /\t/g,
            cqy5D = /\n/g,
            cqx5C = /\r\n?/g;
        var bMK8C = function (bi5n, uz2x) {
            var s4w = bi5n.indexOf("}", uz2x + 1);
            while (bi5n.charAt(s4w - 1) == "\\") {
                s4w = bi5n.indexOf("}", s4w + 1)
            }
            return s4w
        };
        var cqv5A = function () {
            var bs5x = [],
                Cv4z = arguments[0];
            for (var x in Cv4z) {
                x = (x || "").trim();
                if (!x)
                    continue;
                bs5x.push(x + "=$v('" + x + "')")
            }
            return bs5x.length > 0 ? "var " + bs5x.join(",") + ";" : ""
        };
        return function (bi5n) {
            ls9j = {};
            bi5n = bi5n.replace(cqx5C, "\n").replace(cqA5F, "    ");
            var qJ0x = ["if(!__CTX) return '';", ""];
            qJ0x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qJ0x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qJ0x.push("__OUT=[];");
            var Cj4n = -1,
                bo5t = bi5n.length;
            var mj9a,
                Ge5j,
                Mk6e,
                Mr6l,
                yZ3x,
                MB6v,
                bjO3x,
                MQ6K;
            while (Cj4n + 1 < bo5t) {
                mj9a = Cj4n;
                mj9a = bi5n.indexOf("{", mj9a + 1);
                while (mj9a >= 0) {
                    Ge5j = bMK8C(bi5n, mj9a);
                    Mk6e = bi5n.substring(mj9a, Ge5j);
                    Mr6l = Mk6e.match(bN5S.blk);
                    if (!!Mr6l) {
                        yZ3x = Mr6l[1].length + 1;
                        MB6v = bi5n.indexOf("}", mj9a + yZ3x);
                        if (MB6v >= 0) {
                            bjO3x = MB6v - mj9a - yZ3x <= 0 ? "{/" + Mr6l[1] + "}" : Mk6e.substr(yZ3x + 1);
                            yZ3x = bi5n.indexOf(bjO3x, MB6v + 1);
                            if (yZ3x >= 0) {
                                YK9B(bi5n.substring(Cj4n + 1, mj9a), qJ0x);
                                MQ6K = bi5n.substring(MB6v + 1, yZ3x);
                                switch (Mr6l[1]) {
                                    case "cdata":
                                        XY9P(MQ6K, qJ0x);
                                        break;
                                    case "minify":
                                        XY9P(MQ6K.replace(cqy5D, " ").replace(bNc8U, " "), qJ0x);
                                        break;
                                    case "eval":
                                        if (!!MQ6K)
                                            qJ0x.push("__OUT.push((function(){" + MQ6K + "})());");
                                        break
                                }
                                mj9a = Cj4n = yZ3x + bjO3x.length - 1
                            }
                        }
                    } else if (bi5n.charAt(mj9a - 1) != "$" && bi5n.charAt(mj9a - 1) != "\\" && Mk6e.substr(Mk6e.charAt(1) == "/" ? 2 : 1).search(bN5S.tag) == 0) {
                        break
                    }
                    mj9a = bi5n.indexOf("{", mj9a + 1)
                }
                if (mj9a < 0)
                    break;
                Ge5j = bMK8C(bi5n, mj9a);
                if (Ge5j < 0)
                    break;
                YK9B(bi5n.substring(Cj4n + 1, mj9a), qJ0x);
                cqZ5e(bi5n.substring(mj9a, Ge5j + 1), qJ0x);
                Cj4n = Ge5j
            }
            YK9B(bi5n.substring(Cj4n + 1), qJ0x);
            qJ0x.push(';return __OUT.join("");');
            qJ0x[1] = cqv5A(ls9j);
            ls9j = null;
            return new Function("__CTX", "__MDF", qJ0x.join(""))
        }
    }
    ();
    TrimPath.seed = function () {
        return fX7Q
    };
    TrimPath.merge = function () {
        var MT6N = {};
        TrimPath.dump = function () {
            return {
                func: MT6N,
                text: JC6w
            }
        };
        return function (eI6C, j4n, jd8V) {
            try {
                j4n = j4n || {};
                if (!MT6N[eI6C] && !JC6w[eI6C])
                    return "";
                if (!MT6N[eI6C]) {
                    MT6N[eI6C] = cqD5I(JC6w[eI6C]);
                    delete JC6w[eI6C]
                }
                if (!!jd8V) {
                    for (var x in bN5S.ext)
                        if (!jd8V[x])
                            jd8V[x] = bN5S.ext[x]
                }
                return MT6N[eI6C](j4n, jd8V || bN5S.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }
    ();
    TrimPath.parse = function () {
        var cqu5z = +(new Date);
        return function (bi5n, eI6C) {
            if (!bi5n)
                return "";
            eI6C = eI6C || "ck_" + cqu5z++;
            JC6w[eI6C] = bi5n;
            return eI6C
        }
    }
    ()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        ff6Z = {};
    a3x.Fp5u = TrimPath.seed;
    a3x.bP5U = function () {
        var bMI8A = function (C4G) {
            return !a3x.hX8P ? "" : a3x.hX8P(C4G)
        };
        return function (eI6C, j4n, jd8V) {
            j4n = j4n || {};
            j4n.inline = bMI8A;
            jd8V = NEJ.X(NEJ.X({}, ff6Z), jd8V);
            jd8V.rand = k4o.mP9G;
            jd8V.format = k4o.iS8K;
            jd8V.escape = k4o.dM6G;
            jd8V.inline = bMI8A;
            return TrimPath.merge(eI6C, j4n, jd8V)
        }
    }
    ();
    a3x.em6g = function (bi5n, cqp5u) {
        if (!bi5n)
            return "";
        var eI6C,
            E4I = a3x.x4B(bi5n);
        if (!!E4I) {
            eI6C = E4I.id;
            bi5n = E4I.value || E4I.innerText;
            if (!cqp5u)
                a3x.cF6z(E4I)
        }
        return TrimPath.parse(bi5n, eI6C)
    };
    a3x.dT6N = function (bA5F, eI6C, j4n, jd8V) {
        bA5F = a3x.x4B(bA5F);
        if (!!bA5F)
            bA5F.innerHTML = a3x.bP5U(eI6C, j4n, jd8V);
        return this
    };
    a3x.cts5x = function (bv5A) {
        NEJ.X(ff6Z, bv5A)
    };
    c4g("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var cK6E = NEJ.P("nej.p"),
        M4Q = window,
        kb9S = cK6E.Kh6b,
        bMB8t = kb9S.ipad || kb9S.iphone;
    if (!bMB8t && !!M4Q.requestAnimationFrame && !!M4Q.cancelRequestAnimationFrame)
        return;
    var lf9W = cK6E.cS6M.prefix.pro;
    if (!bMB8t && !!M4Q[lf9W + "RequestAnimationFrame"] && !!M4Q[lf9W + "CancelRequestAnimationFrame"]) {
        M4Q.requestAnimationFrame = M4Q[lf9W + "RequestAnimationFrame"];
        M4Q.cancelRequestAnimationFrame = M4Q[lf9W + "CancelRequestAnimationFrame"];
        return
    }
    var We9V = kb9S.desktop ? 80 : kb9S.ios ? 50 : 30;
    M4Q.requestAnimationFrame = function (dr6l) {
        return window.setTimeout(function () {
            try {
                dr6l(+(new Date))
            } catch (ex) {
            }
        }, 1e3 / We9V)
    };
    M4Q.cancelRequestAnimationFrame = function (C4G) {
        window.clearTimeout(C4G);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        k4o = c4g("nej.u"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        ba4e = c4g("nej.h"),
        cL6F = c4g("nej.x"),
        Wd9U = c4g("nej.ut.j.cb"),
        gc7V;
    if (!!a3x.qd0x)
        return;
    a3x.qd0x = cL6F.qd0x = function () {
        var R4V = {},
            fZ7S = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d4h) {
            var C4G = decodeURIComponent(d4h.target),
                t4x = d4h.type.toLowerCase();
            var dc6W = R4V[C4G + "-on" + t4x];
            if (!!dc6W) {
                try {
                    dc6W(d4h)
                } catch (e) {
                }
                return
            }
            var cI6C = R4V[C4G + "-tgt"];
            if (!!cI6C && fZ7S.test(t4x)) {
                bMA8s(cI6C, d4h)
            }
        };
        var bmd3x = function (e4i) {
            var bA5F = a3x.x4B(e4i.parent) || document.body,
                ds6m = a3x.bP5U(gc7V, e4i);
            bA5F.insertAdjacentHTML(!e4i.hidden ? "beforeEnd" : "afterBegin", ds6m)
        };
        var bMA8s = function (C4G, d4h) {
            var t4x = d4h.type.toLowerCase();
            requestAnimationFrame(function () {
                h4l.z4D(C4G, t4x)
            })
        };
        var cqb5g = function (hb7U) {
            return !!hb7U && !!hb7U.inited && !!hb7U.inited()
        };
        var Nv7o = function (C4G) {
            var bs5x = [document.embeds[C4G], a3x.x4B(C4G), document[C4G], window[C4G]],
                s4w = k4o.ed6X(bs5x, cqb5g),
                hb7U = bs5x[s4w],
                bmV3x = C4G + "-count";
            R4V[bmV3x]++;
            if (!!hb7U || R4V[bmV3x] > 100) {
                R4V[C4G](hb7U);
                delete R4V[C4G];
                delete R4V[bmV3x];
                return
            }
            window.setTimeout(Nv7o.g4k(null, C4G), 300)
        };
        var cqa5f = function (e4i) {
            var C4G = e4i.id,
                fR7K = e4i.params;
            if (!fR7K) {
                fR7K = {};
                e4i.params = fR7K
            }
            var ls9j = fR7K.flashvars || "";
            ls9j += (!ls9j ? "" : "&") + ("id=" + C4G);
            if (!e4i.hidden && (!!e4i.target || ba4e.Vc8U(fR7K.wmode))) {
                var hf7Y = a3x.kp9g(e4i.target) || a3x.kp9g(e4i.parent),
                    VQ9H = k4o.YP9G();
                Wd9U["cb" + VQ9H] = bMA8s.g4k(null, hf7Y);
                ls9j += "&onevent=nej.ut.j.cb.cb" + VQ9H;
                R4V[C4G + "-tgt"] = hf7Y
            }
            fR7K.flashvars = ls9j;
            k4o.ed6X(e4i, function (A4E, J4N) {
                if (k4o.gf7Y(A4E) && J4N != "onready") {
                    R4V[C4G + "-" + J4N] = A4E
                }
            })
        };
        return function (e4i) {
            e4i = NEJ.X({}, e4i);
            if (!e4i.src)
                return;
            var C4G = "flash_" + k4o.YP9G();
            e4i.id = C4G;
            cqa5f(e4i);
            bmd3x(e4i);
            if (!e4i.onready)
                return;
            R4V[C4G] = e4i.onready;
            R4V[C4G + "-count"] = 0;
            Nv7o(C4G)
        }
    }
    ();
    gc7V = a3x.em6g('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cL6F.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        iC8u = c4g("nej.c"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ut.j"),
        Wd9U = c4g("nej.ut.j.cb"),
        R4V = {},
        fX7Q = +(new Date),
        bny3x;
    if (!!M4Q.bnz3x)
        return;
    Wd9U["ld" + fX7Q] = function (J4N, da6U) {
        var iU8M = R4V[J4N];
        if (!iU8M)
            return;
        delete R4V[J4N];
        iU8M.sz1x({
            status: 200,
            result: da6U
        })
    };
    Wd9U["er" + fX7Q] = function (J4N, dY6S) {
        var iU8M = R4V[J4N];
        if (!iU8M)
            return;
        delete R4V[J4N];
        iU8M.sz1x({
            status: dY6S || 0
        })
    };
    M4Q.bnz3x = NEJ.C();
    bny3x = M4Q.bnz3x.O4S(M4Q.Ja6U);
    bny3x.ck5p = function (e4i) {
        var hb7U = R4V.flash;
        if (k4o.el6f(hb7U)) {
            hb7U.push(this.ck5p.g4k(this, e4i));
            return
        }
        if (!hb7U) {
            R4V.flash = [this.ck5p.g4k(this, e4i)];
            a3x.qd0x({
                hidden: !0,
                src: iC8u.x4B("ajax.swf"),
                onready: function (hb7U) {
                    if (!hb7U)
                        return;
                    var i4m = R4V.flash;
                    R4V.flash = hb7U;
                    k4o.mu9l(i4m, function (dc6W) {
                        try {
                            dc6W()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.zx3x = "swf-" + k4o.mP9G();
        R4V[this.zx3x] = this;
        var j4n = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e4i.request);
        j4n.key = this.zx3x;
        j4n.headers = e4i.headers;
        j4n.onerror = "nej.ut.j.cb.er" + fX7Q;
        j4n.onloaded = "nej.ut.j.cb.ld" + fX7Q;
        var bMx8p = iC8u.ciZ3x(j4n.url);
        if (!!bMx8p)
            j4n.policyURL = bMx8p;
        hb7U.request(j4n)
    };
    bny3x.jj8b = function () {
        delete R4V[this.zx3x];
        this.sz1x({
            status: 0
        });
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        ba4e = c4g("nej.h");
    ba4e.bMw8o = function () {
        var cP6J = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (hG8y) {
            hG8y = hG8y || "";
            if (cP6J.test(hG8y))
                return RegExp.$1;
            return "*"
        }
    }
    ();
    ba4e.boi3x = function (j4n) {
        return j4n
    };
    ba4e.bom3x = function (bMu8m, e4i) {
        if (!bMu8m.postMessage)
            return;
        e4i = e4i || Y4c;
        bMu8m.postMessage(ba4e.boi3x(e4i.data), ba4e.bMw8o(e4i.origin))
    }
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ut"),
        b4f;
    if (!!M4Q.ft7m)
        return;
    M4Q.ft7m = NEJ.C();
    b4f = M4Q.ft7m.O4S(M4Q.cz5E);
    b4f.cl5q = function () {
        this.P4T = {};
        this.cs5x()
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.Nz7s = a3x.x4B(e4i.element) || window;
        this.bMt8l(e4i.event);
        this.cpL5Q();
        this.z4D("oninit")
    };
    b4f.bD5I = function () {
        var AS4W = function (A4E, J4N, bv5A) {
            if (!k4o.el6f(A4E)) {
                k4o.YM9D(this.Nz7s, J4N)
            }
            delete bv5A[J4N]
        };
        return function () {
            this.bH5M();
            k4o.ed6X(this.P4T, AS4W, this);
            delete this.Nz7s
        }
    }
    ();
    b4f.VK9B = function (E4I, t4x) {
        E4I = a3x.x4B(E4I);
        return E4I == this.Nz7s && (!t4x || !!this.P4T["on" + t4x])
    };
    b4f.bMt8l = function (d4h) {
        if (k4o.fe6Y(d4h)) {
            var T4X = "on" + d4h;
            if (!this.P4T[T4X]) {
                this.P4T[T4X] = this.cpH5M.g4k(this, d4h)
            }
            this.bMr8j(d4h);
            return
        }
        if (k4o.el6f(d4h)) {
            k4o.be5j(d4h, this.bMt8l, this)
        }
    };
    b4f.bMr8j = function (t4x) {
        var d4h = "on" + t4x,
            dc6W = this.Nz7s[d4h],
            bMq8i = this.P4T[d4h];
        if (dc6W != bMq8i) {
            this.UL8D(t4x);
            if (!!dc6W && dc6W != bm5r)
                this.bMo8g(t4x, dc6W);
            this.Nz7s[d4h] = bMq8i
        }
    };
    b4f.bMo8g = function (t4x, dc6W, cpA5F) {
        var i4m = this.P4T[t4x];
        if (!i4m) {
            i4m = [];
            this.P4T[t4x] = i4m
        }
        if (k4o.gf7Y(dc6W)) {
            !cpA5F ? i4m.push(dc6W) : i4m.unshift(dc6W)
        }
    };
    b4f.UL8D = function (t4x, dc6W) {
        var i4m = this.P4T[t4x];
        if (!i4m || !i4m.length)
            return;
        if (!dc6W) {
            delete this.P4T[t4x];
            return
        }
        k4o.mu9l(i4m, function (A4E, s4w, HZ5e) {
            if (dc6W === A4E) {
                HZ5e.splice(s4w, 1);
                return !0
            }
        })
    };
    b4f.cpH5M = function (t4x, d4h) {
        d4h = d4h || {
            noargs: !0
        };
        d4h.type = t4x;
        this.z4D("ondispatch", d4h);
        if (!!d4h.stopped)
            return;
        k4o.be5j(this.P4T[t4x], function (dc6W) {
            try {
                dc6W(d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b4f.cpL5Q = function () {
        var baH0x = function (d4h) {
            var bg5l = d4h.args,
                t4x = bg5l[1].toLowerCase();
            if (this.VK9B(bg5l[0], t4x)) {
                d4h.stopped = !0;
                this.bMr8j(t4x);
                this.bMo8g(t4x, bg5l[2], bg5l[3]);
                this.z4D("oneventadd", {
                    type: t4x,
                    listener: bg5l[2]
                })
            }
        };
        var cpz5E = function (d4h) {
            var bg5l = d4h.args,
                t4x = bg5l[1].toLowerCase();
            if (this.VK9B(bg5l[0], t4x)) {
                d4h.stopped = !0;
                this.UL8D(t4x, bg5l[2])
            }
        };
        var bmW3x = function (d4h) {
            var bg5l = d4h.args,
                t4x = (bg5l[1] || "").toLowerCase();
            if (this.VK9B(bg5l[0])) {
                if (!!t4x) {
                    this.UL8D(t4x);
                    return
                }
                k4o.ed6X(this.P4T, function (A4E, J4N) {
                    if (k4o.el6f(A4E)) {
                        this.UL8D(J4N)
                    }
                }, this)
            }
        };
        var cps5x = function (d4h) {
            var bg5l = d4h.args,
                t4x = bg5l[1].toLowerCase();
            if (this.VK9B(bg5l[0], t4x)) {
                d4h.stopped = !0;
                bg5l[0]["on" + t4x].apply(bg5l[0], bg5l.slice(2))
            }
        };
        return function () {
            if (!!this.cpr5w)
                return;
            this.cpr5w = true;
            h4l.q4u = h4l.q4u.ef6Z(baH0x.g4k(this));
            h4l.ms9j = h4l.ms9j.ef6Z(cpz5E.g4k(this));
            h4l.iB8t = h4l.iB8t.ef6Z(bmW3x.g4k(this));
            h4l.z4D = h4l.z4D.ef6Z(cps5x.g4k(this))
        }
    }
    ()
})();
(function () {
    var c4g = NEJ.P,
        M4Q = c4g("nej.p"),
        ba4e = c4g("nej.h"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut");
    if (M4Q.mq9h.trident)
        return;
    if (!!window.postMessage) {
        ba4e.boi3x = ba4e.boi3x.ef6Z(function (d4h) {
            d4h.stopped = !0;
            d4h.value = JSON.stringify(d4h.args[0])
        });
        return
    }
    var J4N = "MSG|",
        js8k = [];
    var cpq5v = function () {
        var T4X = unescape(window.name || "").trim();
        if (!T4X || T4X.indexOf(J4N) != 0)
            return;
        window.name = "";
        var m4q = k4o.bNq8i(T4X.replace(J4N, ""), "|"),
            hG8y = (m4q.origin || "").toLowerCase();
        if (!!hG8y && hG8y != "*" && location.href.toLowerCase().indexOf(hG8y) != 0)
            return;
        h4l.z4D(window, "message", {
            data: JSON.parse(m4q.data || "null"),
            source: window.frames[m4q.self] || m4q.self,
            origin: ba4e.bMw8o(m4q.ref || document.referrer)
        })
    };
    var cpk5p = function () {
        var TX8P;
        var cpj5o = function (bv5A, s4w, i4m) {
            if (k4o.cV6P(TX8P, bv5A.w) < 0) {
                TX8P.push(bv5A.w);
                i4m.splice(s4w, 1);
                bv5A.w.name = bv5A.d
            }
        };
        return function () {
            TX8P = [];
            k4o.mu9l(js8k, cpj5o);
            TX8P = null
        }
    }
    ();
    ba4e.bom3x = function () {
        var coY5d = function (j4n) {
            var m4q = {};
            j4n = j4n || Y4c;
            m4q.origin = j4n.origin || "";
            m4q.ref = location.href;
            m4q.self = j4n.source;
            m4q.data = JSON.stringify(j4n.data);
            return J4N + k4o.uS2x(m4q, "|", !0)
        };
        return ba4e.bom3x.ef6Z(function (d4h) {
            d4h.stopped = !0;
            var bg5l = d4h.args;
            js8k.unshift({
                w: bg5l[0],
                d: escape(coY5d(bg5l[1]))
            })
        })
    }
    ();
    H4L.ft7m.B4F({
        element: window,
        event: "message"
    });
    window.setInterval(cpk5p, 100);
    window.setInterval(cpq5v, 20)
})();
(function () {
    var c4g = NEJ.P,
        ba4e = c4g("nej.h"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j");
    v4z.coT5Y = function () {
        var im8e = window.name || "_parent",
            coS5X = {
                gi7b: window.top,
                im8e: window,
                bA5F: window.parent
            };
        return function (cI6C, e4i) {
            if (typeof cI6C == "string") {
                cI6C = coS5X[cI6C] || window.frames[cI6C];
                if (!cI6C)
                    return this
            }
            var j4n = NEJ.X({
                origin: "*",
                source: im8e
            }, e4i);
            ba4e.bom3x(cI6C, j4n);
            return this
        }
    }
    ()
})();
(function () {
    var c4g = NEJ.P,
        iC8u = c4g("nej.c"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        M4Q = c4g("nej.ut.j"),
        R4V = {},
        TL8D;
    if (!!M4Q.bbL1x)
        return;
    M4Q.bbL1x = NEJ.C();
    TL8D = M4Q.bbL1x.O4S(M4Q.Ja6U);
    TL8D.cl5q = function () {
        var ey6s = "NEJ-AJAX-DATA:",
            Be4i = !1;
        var bcd1x = function (d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(ey6s) != 0)
                return;
            j4n = JSON.parse(j4n.replace(ey6s, ""));
            var iU8M = R4V[j4n.key];
            if (!iU8M)
                return;
            delete R4V[j4n.key];
            j4n.result = decodeURIComponent(j4n.result || "");
            iU8M.sz1x(j4n)
        };
        var bci1x = function () {
            if (!Be4i) {
                Be4i = !0;
                h4l.q4u(window, "message", bcd1x)
            }
        };
        return function () {
            this.cs5x();
            bci1x()
        }
    }
    ();
    TL8D.ck5p = function (e4i) {
        var fC7v = e4i.request,
            iU8M = iC8u.ccc1x(fC7v.url),
            ua2x = R4V[iU8M];
        if (k4o.el6f(ua2x)) {
            ua2x.push(this.ck5p.g4k(this, e4i));
            return
        }
        if (!ua2x) {
            R4V[iU8M] = [this.ck5p.g4k(this, e4i)];
            a3x.Ug8Y({
                src: iU8M,
                visible: !1,
                onload: function (d4h) {
                    var i4m = R4V[iU8M];
                    R4V[iU8M] = h4l.U4Y(d4h).contentWindow;
                    k4o.mu9l(i4m, function (dc6W) {
                        try {
                            dc6W()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.zx3x = "frm-" + k4o.mP9G();
        R4V[this.zx3x] = this;
        var j4n = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, fC7v);
        j4n.key = this.zx3x;
        j4n.headers = e4i.headers;
        v4z.coT5Y(R4V[iU8M], {
            data: j4n
        })
    };
    TL8D.jj8b = function () {
        delete R4V[this.zx3x];
        this.sz1x({
            status: 0
        });
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        dO6I = c4g("nej.g"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        M4Q = c4g("nej.ut.j"),
        R4V = {},
        Ha5f;
    if (!!M4Q.bcp1x)
        return;
    M4Q.bcp1x = NEJ.C();
    Ha5f = M4Q.bcp1x.O4S(M4Q.Ja6U);
    Ha5f.cl5q = function () {
        var ey6s = "NEJ-UPLOAD-RESULT:",
            Be4i = !1;
        var bcd1x = function (d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(ey6s) != 0)
                return;
            j4n = JSON.parse(j4n.replace(ey6s, ""));
            var iU8M = R4V[j4n.key];
            if (!iU8M)
                return;
            delete R4V[j4n.key];
            iU8M.sz1x(decodeURIComponent(j4n.result))
        };
        var bci1x = function () {
            if (!Be4i) {
                Be4i = !0;
                h4l.q4u(window, "message", bcd1x)
            }
        };
        return function () {
            this.cs5x();
            bci1x()
        }
    }
    ();
    Ha5f.bD5I = function () {
        this.bH5M();
        a3x.cF6z(this.bcB1x);
        delete this.bcB1x;
        window.clearTimeout(this.dL6F);
        delete this.dL6F
    };
    Ha5f.sz1x = function (da6U) {
        var Q4U;
        try {
            Q4U = JSON.parse(da6U);
            this.z4D("onload", Q4U)
        } catch (e) {
            this.z4D("onerror", {
                code: dO6I.bRd9U,
                message: da6U
            })
        }
    };
    Ha5f.ck5p = function () {
        var coO5T = function () {
            var lG9x,
                da6U;
            try {
                var lG9x = this.bcB1x.contentWindow.document.body,
                    da6U = lG9x.innerText || lG9x.textContent
            } catch (e) {
                return
            }
            this.sz1x(da6U)
        };
        var bcM1x = function (V4Z, eC6w, qV0x) {
            v4z.bp5u(V4Z, {
                type: "json",
                method: "POST",
                cookie: qV0x,
                mode: parseInt(eC6w) || 0,
                onload: function (j4n) {
                    if (!this.dL6F)
                        return;
                    this.z4D("onuploading", j4n);
                    this.dL6F = window.setTimeout(bcM1x.g4k(this, V4Z, eC6w, qV0x), 1e3)
                }
                    .g4k(this),
                onerror: function (bQ5V) {
                    if (!this.dL6F)
                        return;
                    this.dL6F = window.setTimeout(bcM1x.g4k(this, V4Z, eC6w, qV0x), 1e3)
                }
                    .g4k(this)
            })
        };
        return function (e4i) {
            var fC7v = e4i.request,
                ny0x = e4i.headers,
                eE6y = fC7v.data,
                T4X = "fom-" + k4o.mP9G();
            R4V[T4X] = this;
            eE6y.target = T4X;
            eE6y.method = "POST";
            eE6y.enctype = dO6I.DB4F;
            eE6y.encoding = dO6I.DB4F;
            var V4Z = eE6y.action || "",
                lB9s = V4Z.indexOf("?") <= 0 ? "?" : "&";
            eE6y.action = V4Z + lB9s + "_proxy_=form";
            this.bcB1x = a3x.Ug8Y({
                name: T4X,
                onload: function (d4h) {
                    var ua2x = h4l.U4Y(d4h);
                    h4l.q4u(ua2x, "load", coO5T.g4k(this));
                    eE6y.submit();
                    var bMj8b = (eE6y.nej_query || Y4c).value;
                    if (!bMj8b)
                        return;
                    var eC6w = (eE6y.nej_mode || Y4c).value,
                        qV0x = (eE6y.nej_cookie || Y4c).value == "true";
                    this.dL6F = window.setTimeout(bcM1x.g4k(this, bMj8b, eC6w, qV0x), 100)
                }
                    .g4k(this)
            })
        }
    }
    ();
    Ha5f.jj8b = function () {
        this.z4D("onerror", {
            code: dO6I.bSU9L,
            message: "瀹㈡埛绔粓姝㈡枃浠朵笂浼 "
        });
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        ba4e = c4g("nej.h"),
        M4Q = c4g("nej.ut.j");
    ba4e.bcC1x = function () {
        return new XMLHttpRequest
    };
    ba4e.bdm1x = function (eC6w, TD8v, e4i) {
        var bv5A = !!TD8v ? {
                2: M4Q.bcp1x
            }
            : {
                2: M4Q.bbL1x,
                3: M4Q.bnz3x
            };
        return (bv5A[eC6w] || M4Q.ZY0x).B4F(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        M4Q = c4g("nej.p"),
        ba4e = c4g("nej.h");
    if (M4Q.mq9h.trident)
        return;
    ba4e.bcC1x = function () {
        var NY7R = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var coI5N = function () {
            for (var i = 0, l = NY7R.length; i < l; i++) {
                try {
                    return new ActiveXObject(NY7R[i])
                } catch (e) {
                }
            }
            return null
        };
        return ba4e.bcC1x.ef6Z(function (d4h) {
            if (!!window.XMLHttpRequest)
                return;
            d4h.stopped = !0;
            d4h.value = coI5N()
        })
    }
    ();
    ba4e.bdm1x = function () {
        var Eu4y = {
            0: 2,
            1: 3
        };
        return ba4e.bdm1x.ef6Z(function (d4h) {
            var bg5l = d4h.args,
                eC6w = bg5l[0] || 0;
            bg5l[0] = !!bg5l[1] ? 2 : Eu4y[eC6w] || eC6w
        })
    }
    ()
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        ba4e = c4g("nej.h"),
        dO6I = c4g("nej.g"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        M4Q = c4g("nej.ut.j"),
        mC9t = {},
        IB5G = bm5r;
    v4z.jj8b = function (eI6C) {
        var R4V = mC9t[eI6C];
        if (!R4V)
            return this;
        R4V.req.jj8b();
        return this
    };
    v4z.Tx8p = function (dE6y) {
        IB5G = dE6y || bm5r;
        return this
    };
    v4z.bp5u = function () {
        var iM8E = (location.protocol + "//" + location.host).toLowerCase();
        var coH5M = function (V4Z) {
            var hG8y = k4o.csK5P(V4Z);
            return !!hG8y && hG8y != iM8E
        };
        var coE5J = function (ny0x) {
            return (ny0x || Y4c)[dO6I.xj2x] == dO6I.DB4F
        };
        var coB5G = function (e4i) {
            var TD8v = coE5J(e4i.headers);
            if (!coH5M(e4i.url) && !TD8v)
                return M4Q.ZY0x.B4F(e4i);
            return ba4e.bdm1x(e4i.mode, TD8v, e4i)
        };
        var AS4W = function (eI6C) {
            var R4V = mC9t[eI6C];
            if (!R4V)
                return;
            if (!!R4V.req)
                R4V.req.S4W();
            delete mC9t[eI6C]
        };
        var bMh8Z = function (eI6C, t4x) {
            var R4V = mC9t[eI6C];
            if (!R4V)
                return;
            AS4W(eI6C);
            try {
                var d4h = {
                    type: t4x,
                    result: arguments[2]
                };
                IB5G(d4h);
                if (!d4h.stopped)
                    (R4V[t4x] || bm5r)(d4h.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var wJ2x = function (eI6C, j4n) {
            bMh8Z(eI6C, "onload", j4n)
        };
        var zc3x = function (eI6C, bQ5V) {
            bMh8Z(eI6C, "onerror", bQ5V)
        };
        return function (V4Z, e4i) {
            e4i = e4i || {};
            var eI6C = k4o.mP9G(),
                R4V = {
                    onload: e4i.onload || bm5r,
                    onerror: e4i.onerror || bm5r
                };
            mC9t[eI6C] = R4V;
            e4i.onload = wJ2x.g4k(null, eI6C);
            e4i.onerror = zc3x.g4k(null, eI6C);
            if (!!e4i.query) {
                var lB9s = V4Z.indexOf("?") < 0 ? "?" : "&",
                    bC5H = e4i.query;
                if (k4o.kg9X(bC5H))
                    bC5H = k4o.df6Z(bC5H);
                if (!!bC5H)
                    V4Z += lB9s + bC5H
            }
            e4i.url = V4Z;
            R4V.req = coB5G(e4i);
            R4V.req.bbo0x(e4i.data);
            return eI6C
        }
    }
    ();
    v4z.ga7T = function (eE6y, e4i) {
        var gu7n = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(gu7n, e4i);
        gu7n.data = eE6y;
        gu7n.method = "POST";
        gu7n.timeout = 0;
        gu7n.headers[dO6I.xj2x] = dO6I.DB4F;
        return v4z.bp5u(eE6y.action, gu7n)
    }
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        dO6I = c4g("nej.g"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        M4Q = c4g("nej.ut.j"),
        lw9n,
        jq8i = 6e4;
    if (!!M4Q.PU7N)
        return;
    M4Q.PU7N = NEJ.C();
    lw9n = M4Q.PU7N.O4S(H4L.cz5E);
    lw9n.cl5q = function () {
        this.cs5x();
        this.Qd7W = {
            onerror: this.coz4D.g4k(this),
            onloaded: this.coy4C.g4k(this)
        };
        if (!this.constructor.P4T)
            this.constructor.P4T = {
                loaded: {}
            }
    };
    lw9n.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.EO4S = e4i.version;
        this.bfA2x = e4i.timeout;
        this.Qd7W.version = this.EO4S;
        this.Qd7W.timeout = this.bfA2x
    };
    lw9n.bMg8Y = function (J4N) {
        delete this.constructor.P4T[J4N]
    };
    lw9n.yz3x = function (J4N) {
        return this.constructor.P4T[J4N]
    };
    lw9n.bMd8V = function (J4N, j4n) {
        this.constructor.P4T[J4N] = j4n
    };
    lw9n.SA8s = bm5r;
    lw9n.bMb8T = function (fC7v) {
        h4l.iB8t(fC7v)
    };
    lw9n.bgi2x = function (fC7v) {
        fC7v.src = this.kK9B;
        document.head.appendChild(fC7v)
    };
    lw9n.yj3x = function () {
        var R4V = this.yz3x(this.kK9B);
        if (!R4V)
            return;
        window.clearTimeout(R4V.timer);
        this.bMb8T(R4V.request);
        delete R4V.bind;
        delete R4V.timer;
        delete R4V.request;
        this.bMg8Y(this.kK9B);
        this.yz3x("loaded")[this.kK9B] = !0
    };
    lw9n.RY8Q = function (T4X) {
        var R4V = this.yz3x(this.kK9B);
        if (!R4V)
            return;
        var i4m = R4V.bind;
        this.yj3x();
        if (!!i4m && i4m.length > 0) {
            var cq5v;
            while (i4m.length) {
                cq5v = i4m.shift();
                try {
                    cq5v.z4D(T4X, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cq5v.S4W()
            }
        }
    };
    lw9n.eo6i = function (bQ5V) {
        this.RY8Q("onerror", bQ5V)
    };
    lw9n.bLY8Q = function () {
        this.RY8Q("onloaded")
    };
    lw9n.cnY4c = function (V4Z) {
        this.constructor.B4F(this.Qd7W).Ic5h(V4Z)
    };
    lw9n.bLW8O = function (bQ5V) {
        var R4V = this.yz3x(this.uK2x);
        if (!R4V)
            return;
        if (!!bQ5V)
            R4V.error++;
        R4V.loaded++;
        if (R4V.loaded < R4V.total)
            return;
        this.bMg8Y(this.uK2x);
        this.z4D(R4V.error > 0 ? "onerror" : "onloaded")
    };
    lw9n.coz4D = function (bQ5V) {
        this.bLW8O(!0)
    };
    lw9n.coy4C = function () {
        this.bLW8O()
    };
    lw9n.Ic5h = function (V4Z) {
        V4Z = k4o.bdo1x(V4Z);
        if (!V4Z) {
            this.z4D("onerror", {
                code: dO6I.bgR2x,
                message: "璇锋寚瀹氳杞藉叆鐨勮祫婧愬湴鍧€锛�"
            });
            return this
        }
        this.kK9B = V4Z;
        if (!!this.EO4S)
            this.kK9B += (this.kK9B.indexOf("?") < 0 ? "?" : "&") + this.EO4S;
        if (this.yz3x("loaded")[this.kK9B]) {
            try {
                this.z4D("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S4W();
            return this
        }
        var R4V = this.yz3x(this.kK9B),
            fC7v;
        if (!!R4V) {
            R4V.bind.unshift(this);
            R4V.timer = window.clearTimeout(R4V.timer)
        } else {
            fC7v = this.SA8s();
            R4V = {
                request: fC7v,
                bind: [this]
            };
            this.bMd8V(this.kK9B, R4V);
            h4l.q4u(fC7v, "load", this.bLY8Q.g4k(this));
            h4l.q4u(fC7v, "error", this.eo6i.g4k(this, {
                code: dO6I.bkw3x,
                message: "鏃犳硶鍔犺浇鎸囧畾璧勬簮鏂囦欢[" + this.kK9B + "]锛�"
            }))
        }
        if (this.bfA2x != 0)
            R4V.timer = window.setTimeout(this.eo6i.g4k(this, {
                code: dO6I.bvT5Y,
                message: "鎸囧畾璧勬簮鏂囦欢[" + this.kK9B + "]杞藉叆瓒呮椂锛�"
            }), this.bfA2x || jq8i);
        if (!!fC7v)
            this.bgi2x(fC7v);
        this.z4D("onloading");
        return this
    };
    lw9n.bLV8N = function (i4m) {
        if (!i4m || !i4m.length) {
            this.z4D("onerror", {
                code: dO6I.bgR2x,
                message: "璇锋寚瀹氳杞藉叆鐨勮祫婧愰槦鍒楋紒"
            });
            return this
        }
        this.uK2x = k4o.mP9G();
        var R4V = {
            error: 0,
            loaded: 0,
            total: i4m.length
        };
        this.bMd8V(this.uK2x, R4V);
        for (var i = 0, l = i4m.length; i < l; i++) {
            if (!i4m[i]) {
                R4V.total--;
                continue
            }
            this.cnY4c(i4m[i])
        }
        this.z4D("onloading");
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        ba4e = c4g("nej.h"),
        M4Q = c4g("nej.ut.j"),
        Rc7V;
    if (!!M4Q.bhg2x)
        return;
    M4Q.bhg2x = NEJ.C();
    Rc7V = M4Q.bhg2x.O4S(M4Q.PU7N);
    Rc7V.SA8s = function () {
        var fa6U = a3x.cU6O("iframe");
        fa6U.width = 0;
        fa6U.height = 0;
        fa6U.style.display = "none";
        return fa6U
    };
    Rc7V.bgi2x = function (fC7v) {
        fC7v.src = this.kK9B;
        document.body.appendChild(fC7v)
    };
    Rc7V.eo6i = function (bQ5V) {
        var fa6U = (this.yz3x(this.kK9B) || Y4c).request;
        this.RY8Q("onerror", bQ5V);
        ba4e.UU8M(fa6U)
    };
    Rc7V.bLY8Q = function () {
        var lG9x = null,
            fa6U = (this.yz3x(this.kK9B) || Y4c).request;
        try {
            lG9x = fa6U.contentWindow.document.body
        } catch (ex) {
        }
        this.RY8Q("onloaded", lG9x);
        ba4e.UU8M(fa6U)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        M4Q = c4g("nej.ut.j"),
        bhh2x;
    if (!!M4Q.RG8y)
        return;
    M4Q.RG8y = NEJ.C();
    bhh2x = M4Q.RG8y.O4S(M4Q.PU7N);
    bhh2x.SA8s = function () {
        return a3x.cU6O("link")
    };
    bhh2x.bgi2x = function (fC7v) {
        fC7v.href = this.kK9B;
        document.head.appendChild(fC7v)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        M4Q = c4g("nej.ut.j"),
        RF8x;
    if (!!M4Q.Rv8n)
        return;
    M4Q.Rv8n = NEJ.C();
    RF8x = M4Q.Rv8n.O4S(M4Q.PU7N);
    RF8x.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.bLU8M = e4i.async;
        this.bic2x = e4i.charset;
        this.Qd7W.async = !1;
        this.Qd7W.charset = this.bic2x
    };
    RF8x.SA8s = function () {
        var fC7v = a3x.cU6O("script");
        if (this.bLU8M != null)
            fC7v.async = !!this.bLU8M;
        if (this.bic2x != null)
            fC7v.charset = this.bic2x;
        return fC7v
    };
    RF8x.bMb8T = function (fC7v) {
        a3x.cF6z(fC7v)
    }
})();
(function () {
    var c4g = NEJ.P,
        v4z = c4g("nej.j"),
        M4Q = c4g("nej.ut.j");
    v4z.cnO3x = function (V4Z, e4i) {
        M4Q.Rv8n.B4F(e4i).Ic5h(V4Z);
        return this
    };
    v4z.cnN3x = function (i4m, e4i) {
        M4Q.Rv8n.B4F(e4i).bLV8N(i4m);
        return this
    };
    v4z.cty5D = function (V4Z, e4i) {
        M4Q.RG8y.B4F(e4i).Ic5h(V4Z);
        return this
    };
    v4z.cnL3x = function (i4m, e4i) {
        M4Q.RG8y.B4F(e4i).bLV8N(i4m);
        return this
    };
    v4z.bLR8J = function (V4Z, e4i) {
        M4Q.bhg2x.B4F(e4i).Ic5h(V4Z);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        R4V = {},
        rf0x = +(new Date) + "-";
    a3x.cE6y = function () {
        var ct5y = 0;
        var Rg7Z = function () {
            if (ct5y > 0)
                return;
            ct5y = 0;
            h4l.z4D(document, "templateready");
            h4l.iB8t(document, "templateready")
        };
        var RO8G = function (fF7y, e4i) {
            var dv6p = a3x.u4y(fF7y, "src");
            if (!dv6p)
                return;
            e4i = e4i || Y4c;
            var fv7o = e4i.root;
            if (!fv7o) {
                fv7o = fF7y.ownerDocument.location.href
            } else {
                fv7o = k4o.bdo1x(fv7o)
            }
            dv6p = dv6p.split(",");
            k4o.be5j(dv6p, function (A4E, s4w, i4m) {
                i4m[s4w] = k4o.bdo1x(A4E, fv7o)
            });
            return dv6p
        };
        var cnE3x = function (fF7y, e4i) {
            if (!fF7y)
                return;
            var dv6p = RO8G(fF7y, e4i);
            if (!!dv6p)
                v4z.cnL3x(dv6p, {
                    version: a3x.u4y(fF7y, "version")
                });
            a3x.bJA8s(fF7y.value)
        };
        var cnD3x = function (A4E) {
            ct5y--;
            a3x.bJB8t(A4E);
            Rg7Z()
        };
        var cnC3x = function (fF7y, e4i) {
            if (!fF7y)
                return;
            var dv6p = RO8G(fF7y, e4i),
                eL6F = fF7y.value;
            if (!!dv6p) {
                ct5y++;
                var e4i = {
                    version: a3x.u4y(fF7y, "version"),
                    onloaded: cnD3x.g4k(null, eL6F)
                };
                window.setTimeout(v4z.cnN3x.g4k(v4z, dv6p, e4i), 0);
                return
            }
            a3x.bJB8t(eL6F)
        };
        var cnB3x = function (lG9x) {
            ct5y--;
            a3x.cE6y(lG9x);
            Rg7Z()
        };
        var cnA3x = function (fF7y, e4i) {
            if (!fF7y)
                return;
            var dv6p = RO8G(fF7y, e4i)[0];
            if (!!dv6p) {
                ct5y++;
                var e4i = {
                    version: a3x.u4y(fF7y, "version"),
                    onloaded: cnB3x
                };
                window.setTimeout(v4z.bLR8J.g4k(v4z, dv6p, e4i), 0)
            }
        };
        var cnx3x = function (C4G, da6U) {
            ct5y--;
            a3x.FB5G(C4G, da6U || "");
            Rg7Z()
        };
        var cnw3x = function (fF7y, e4i) {
            if (!fF7y || !fF7y.id)
                return;
            var C4G = fF7y.id,
                dv6p = RO8G(fF7y, e4i)[0];
            if (!!dv6p) {
                ct5y++;
                var V4Z = dv6p + (dv6p.indexOf("?") < 0 ? "?" : "&") + (a3x.u4y(fF7y, "version") || ""),
                    e4i = {
                        type: "text",
                        method: "GET",
                        onload: cnx3x.g4k(null, C4G)
                    };
                window.setTimeout(v4z.bp5u.g4k(v4z, V4Z, e4i), 0)
            }
        };
        var cnn3x = function (f4j, e4i) {
            var t4x = f4j.name.toLowerCase();
            switch (t4x) {
                case "jst":
                    a3x.em6g(f4j, !0);
                    return;
                case "txt":
                    a3x.FB5G(f4j.id, f4j.value || "");
                    return;
                case "ntp":
                    a3x.hM8E(f4j.value || "", f4j.id);
                    return;
                case "js":
                    cnC3x(f4j, e4i);
                    return;
                case "css":
                    cnE3x(f4j, e4i);
                    return;
                case "html":
                    cnA3x(f4j, e4i);
                    return;
                case "res":
                    cnw3x(f4j, e4i);
                    return
            }
        };
        H4L.ft7m.B4F({
            element: document,
            event: "templateready",
            oneventadd: Rg7Z
        });
        return function (E4I, e4i) {
            E4I = a3x.x4B(E4I);
            if (!!E4I) {
                var i4m = E4I.tagName == "TEXTAREA" ? [E4I] : E4I.getElementsByTagName("textarea");
                k4o.be5j(i4m, function (f4j) {
                    cnn3x(f4j, e4i)
                });
                a3x.cF6z(E4I, !0)
            }
            Rg7Z();
            return this
        }
    }
    ();
    a3x.FB5G = function (J4N, A4E) {
        R4V[J4N] = A4E || "";
        return this
    };
    a3x.hX8P = function (J4N) {
        return R4V[J4N] || ""
    };
    a3x.hM8E = function (E4I, J4N) {
        J4N = J4N || k4o.mP9G();
        E4I = a3x.x4B(E4I) || E4I;
        a3x.FB5G(rf0x + J4N, E4I);
        a3x.mc9T(E4I);
        return J4N
    };
    a3x.dq6k = function (J4N) {
        if (!J4N)
            return null;
        J4N = rf0x + J4N;
        var A4E = a3x.hX8P(J4N);
        if (!A4E)
            return null;
        if (k4o.fe6Y(A4E)) {
            A4E = a3x.mT9K(A4E);
            a3x.FB5G(J4N, A4E)
        }
        return A4E.cloneNode(!0)
    };
    a3x.yP3x = function () {
        var IB5G = function (A4E, J4N) {
            return J4N == "offset" || J4N == "limit"
        };
        return function (i4m, r4v, e4i) {
            var bs5x = [];
            if (!i4m || !i4m.length || !r4v)
                return bs5x;
            e4i = e4i || Y4c;
            var dF6z = i4m.length,
                iQ8I = parseInt(e4i.offset) || 0,
                gy7r = Math.min(dF6z, iQ8I + (parseInt(e4i.limit) || dF6z)),
                cm5r = {
                    total: i4m.length,
                    range: [iQ8I, gy7r]
                };
            NEJ.X(cm5r, e4i, IB5G);
            for (var i = iQ8I, cq5v; i < gy7r; i++) {
                cm5r.index = i;
                cm5r.data = i4m[i];
                cq5v = r4v.B4F(cm5r);
                var C4G = cq5v.Cg4k();
                R4V[C4G] = cq5v;
                cq5v.S4W = cq5v.S4W.ef6Z(function (C4G, cq5v) {
                    delete R4V[C4G];
                    delete cq5v.S4W
                }
                    .g4k(null, C4G, cq5v));
                bs5x.push(cq5v)
            }
            return bs5x
        }
    }
    ();
    a3x.bLI8A = function (C4G) {
        return R4V[C4G]
    };
    a3x.ctz5E = function (dD6x, e4i) {
        e4i = e4i || Y4c;
        a3x.cE6y(e4i.tid || "template-box");
        h4l.q4u(document, "templateready", function () {
            dD6x.B4F().z4D("onshow", e4i)
        })
    };
    c4g("dbg").dumpTC = function () {
        return R4V
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        M4Q = c4g("nej.ui"),
        b4f;
    if (!!M4Q.et6n)
        return;
    M4Q.et6n = NEJ.C();
    b4f = M4Q.et6n.O4S(H4L.cz5E);
    b4f.cl5q = function () {
        this.cs5x();
        a3x.bIU7N();
        this.bZ5e();
        this.bR5W()
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.cni3x(e4i.clazz);
        this.bLG8y(e4i.parent)
    };
    b4f.bD5I = function () {
        this.bH5M();
        this.bLF8x();
        delete this.fE7x;
        a3x.mc9T(this.o4s);
        a3x.w4A(this.o4s, this.blv3x);
        delete this.blv3x
    };
    b4f.bZ5e = bm5r;
    b4f.bR5W = function () {
        if (!this.ca5f)
            this.SL8D();
        this.o4s = a3x.dq6k(this.ca5f);
        if (!this.o4s)
            this.o4s = a3x.cU6O("div", this.lb9S);
        a3x.y4C(this.o4s, this.lb9S)
    };
    b4f.SL8D = bm5r;
    b4f.cni3x = function (dJ6D) {
        this.blv3x = dJ6D || "";
        a3x.y4C(this.o4s, this.blv3x)
    };
    b4f.cmY3x = function () {
        if (!this.lb9S)
            return;
        a3x.y4C(this.fE7x, this.lb9S + "-parent")
    };
    b4f.bLF8x = function () {
        if (!this.lb9S)
            return;
        a3x.w4A(this.fE7x, this.lb9S + "-parent")
    };
    b4f.kA9r = function () {
        return this.o4s
    };
    b4f.bLG8y = function (bA5F) {
        if (!this.o4s)
            return this;
        this.bLF8x();
        if (k4o.gf7Y(bA5F)) {
            this.fE7x = bA5F(this.o4s)
        } else {
            this.fE7x = a3x.x4B(bA5F);
            if (!!this.fE7x)
                this.fE7x.appendChild(this.o4s)
        }
        this.cmY3x();
        return this
    };
    b4f.N4R = function () {
        if (!this.fE7x || !this.o4s || this.o4s.parentNode == this.fE7x)
            return this;
        this.fE7x.appendChild(this.o4s);
        return this
    };
    b4f.bq5v = function () {
        a3x.mc9T(this.o4s);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        ba4e = c4g("nej.h"),
        M4Q = c4g("nej.ui"),
        ut2x,
        bLC8u;
    if (!!M4Q.PS7L)
        return;
    M4Q.PS7L = NEJ.C();
    ut2x = M4Q.PS7L.O4S(M4Q.et6n);
    bLC8u = M4Q.PS7L.cg5l;
    ut2x.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.ux2x("oncontentready", e4i.oncontentready || this.cmU3x.g4k(this));
        this.cmR3x = !!e4i.nohack;
        this.cmQ3x = !!e4i.destroyable;
        this.Iw5B(e4i.content)
    };
    ut2x.bD5I = function () {
        this.z4D("onbeforerecycle");
        this.bH5M();
        this.SW8O();
        this.Iw5B("");
        a3x.fz7s(this.o4s, {
            top: "",
            left: ""
        })
    };
    ut2x.cmU3x = bm5r;
    ut2x.Ip5u = bm5r;
    ut2x.SW8O = function () {
        a3x.mc9T(this.o4s);
        if (!!this.mK9B) {
            this.mK9B = ba4e.bjD3x(this.o4s);
            delete this.mK9B
        }
    };
    ut2x.Iw5B = function (bi5n) {
        if (!this.o4s || !this.xU3x || bi5n == null)
            return this;
        bi5n = bi5n || "";
        k4o.fe6Y(bi5n) ? this.xU3x.innerHTML = bi5n : this.xU3x.appendChild(bi5n);
        this.z4D("oncontentready", this.xU3x);
        return this
    };
    ut2x.fU7N = function (bj5o) {
        var A4E = bj5o.top;
        if (A4E != null) {
            A4E += "px";
            a3x.X4b(this.o4s, "top", A4E);
            a3x.X4b(this.mK9B, "top", A4E)
        }
        var A4E = bj5o.left;
        if (A4E != null) {
            A4E += "px";
            a3x.X4b(this.o4s, "left", A4E);
            a3x.X4b(this.mK9B, "left", A4E)
        }
        return this
    };
    ut2x.N4R = function () {
        a3x.X4b(this.o4s, "visibility", "hidden");
        bLC8u.N4R.apply(this, arguments);
        this.Ip5u();
        a3x.X4b(this.o4s, "visibility", "");
        if (!this.cmR3x) {
            this.mK9B = ba4e.mK9B(this.o4s)
        }
        return this
    };
    ut2x.bq5v = function () {
        this.cmQ3x ? this.S4W() : this.SW8O();
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        k4o = c4g("nej.u"),
        a3x = c4g("nej.e"),
        M4Q = c4g("nej.ui"),
        xR3x;
    if (!!M4Q.Th8Z)
        return;
    M4Q.Th8Z = NEJ.C();
    xR3x = M4Q.Th8Z.O4S(M4Q.et6n);
    xR3x.bk5p = function (e4i) {
        this.Pq7j();
        this.bl5q(this.cmP3x(e4i));
        this.bS5X.onbeforerecycle = this.S4W.g4k(this);
        this.nn9e = this.bnZ3x()
    };
    xR3x.bD5I = function () {
        this.z4D("onbeforerecycle");
        this.bH5M();
        delete this.bS5X;
        a3x.mc9T(this.o4s);
        var zV3x = this.nn9e;
        if (!!zV3x) {
            delete this.nn9e;
            zV3x.S4W()
        }
    };
    xR3x.bnZ3x = bm5r;
    xR3x.cmP3x = function (e4i) {
        var m4q = {};
        k4o.ed6X(e4i, function (r4v, J4N) {
            this.bS5X.hasOwnProperty(J4N) ? this.bS5X[J4N] = r4v : m4q[J4N] = r4v
        }, this);
        return m4q
    };
    xR3x.Pq7j = function () {
        this.bS5X = {
            clazz: "",
            parent: null,
            content: this.o4s,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    xR3x.N4R = function () {
        if (!!this.nn9e)
            this.nn9e.N4R();
        this.z4D("onaftershow");
        return this
    };
    xR3x.bq5v = function () {
        if (!!this.nn9e)
            this.nn9e.bq5v();
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        dO6I = c4g("nej.g"),
        ba4e = c4g("nej.h"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        M4Q = c4g("nej.ui"),
        Pg7Z,
        bLB8t;
    if (!!M4Q.FP5U)
        return;
    var hP8H = a3x.rO1x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dO6I.bpj4n + ");}");
    M4Q.FP5U = NEJ.C();
    Pg7Z = M4Q.FP5U.O4S(M4Q.et6n);
    bLB8t = M4Q.FP5U.cg5l;
    Pg7Z.bk5p = function (e4i) {
        this.bl5q(e4i);
        var bi5n = e4i.content || "&nbsp;";
        k4o.fe6Y(bi5n) ? this.o4s.innerHTML = bi5n : this.o4s.appendChild(bi5n)
    };
    Pg7Z.bD5I = function () {
        this.bH5M();
        this.o4s.innerHTML = "&nbsp;"
    };
    Pg7Z.bZ5e = function () {
        this.lb9S = hP8H
    };
    Pg7Z.N4R = function () {
        ba4e.biX2x(this.o4s);
        bLB8t.N4R.apply(this, arguments);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        M4Q = c4g("nej.ut"),
        uY2x;
    if (!!M4Q.wh2x)
        return;
    M4Q.wh2x = NEJ.C();
    uY2x = M4Q.wh2x.O4S(M4Q.cz5E);
    uY2x.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.cmN3x = !!e4i.overflow;
        this.o4s = a3x.x4B(e4i.body);
        this.zq3x = a3x.x4B(e4i.view) || a3x.bEo7h(this.o4s);
        this.bLA8s = a3x.x4B(e4i.mbar) || this.o4s;
        this.TS8K = parseInt(e4i.direction) || 0;
        if (!!e4i.isRelative) {
            this.o4s.style.position = "relative";
            this.bpk4o = true;
            this.bpS4W()
        }
        this.bU5Z([[document, "mouseup", this.bqh4l.g4k(this)], [document, "mousemove", this.bqm4q.g4k(this)], [this.bLA8s, "mousedown", this.OI7B.g4k(this)]])
    };
    uY2x.bpS4W = function () {
        if (!!this.bpk4o) {
            this.EY5d = a3x.hL8D(this.o4s, this.zq3x);
            this.EY5d.x -= parseInt(a3x.db6V(this.o4s, "left")) || 0;
            this.EY5d.y -= parseInt(a3x.db6V(this.o4s, "top")) || 0
        }
    };
    uY2x.bD5I = function () {
        this.bH5M();
        delete this.o4s;
        delete this.bLA8s;
        delete this.zq3x
    };
    uY2x.bqM4Q = function () {
        return {
            x: Math.max(this.zq3x.clientWidth, this.zq3x.scrollWidth) - this.o4s.offsetWidth,
            y: Math.max(this.zq3x.clientHeight, this.zq3x.scrollHeight) - this.o4s.offsetHeight
        }
    };
    uY2x.OI7B = function (d4h) {
        h4l.bh5m(d4h);
        if (!!this.hV8N)
            return;
        this.hV8N = {
            x: h4l.kv9m(d4h),
            y: h4l.nO0x(d4h)
        };
        this.bLz8r = this.bqM4Q();
        this.z4D("ondragstart", d4h)
    };
    uY2x.bqm4q = function (d4h) {
        if (!this.hV8N)
            return;
        var bj5o = {
            x: h4l.kv9m(d4h),
            y: h4l.nO0x(d4h)
        };
        var sb1x = bj5o.x - this.hV8N.x,
            sf1x = bj5o.y - this.hV8N.y,
            A4E = {
                top: (parseInt(a3x.db6V(this.o4s, "top")) || 0) + sf1x,
                left: (parseInt(a3x.db6V(this.o4s, "left")) || 0) + sb1x
            };
        if (this.bpk4o) {
            this.bpS4W();
            A4E.top = A4E.top + this.EY5d.y;
            A4E.left = A4E.left + this.EY5d.x
        }
        this.hV8N = bj5o;
        this.fU7N(A4E)
    };
    uY2x.bqh4l = function (d4h) {
        if (!this.hV8N)
            return;
        delete this.bLz8r;
        delete this.hV8N;
        this.z4D("ondragend", this.baD0x())
    };
    uY2x.fU7N = function (d4h) {
        if (!this.cmN3x) {
            var bLy8q = this.bLz8r || this.bqM4Q();
            d4h.top = Math.min(bLy8q.y, Math.max(0, d4h.top));
            d4h.left = Math.min(bLy8q.x, Math.max(0, d4h.left))
        }
        var cd5i = this.o4s.style;
        if (this.bpk4o) {
            this.bpS4W();
            d4h.top = d4h.top - this.EY5d.y;
            d4h.left = d4h.left - this.EY5d.x
        }
        if (this.TS8K == 0 || this.TS8K == 2)
            cd5i.top = d4h.top + "px";
        if (this.TS8K == 0 || this.TS8K == 1)
            cd5i.left = d4h.left + "px";
        this.z4D("onchange", d4h);
        return this
    };
    uY2x.baD0x = function () {
        return {
            left: parseInt(a3x.db6V(this.o4s, "left")) || 0,
            top: parseInt(a3x.db6V(this.o4s, "top")) || 0
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = NEJ.P("nej.e"),
        h4l = NEJ.P("nej.v"),
        k4o = NEJ.P("nej.u"),
        H4L = NEJ.P("nej.ut"),
        M4Q = NEJ.P("nej.ui"),
        hP8H,
        gc7V,
        b4f,
        K4O;
    if (!!M4Q.Un8f)
        return;
    M4Q.Un8f = NEJ.C();
    b4f = M4Q.Un8f.O4S(M4Q.PS7L);
    K4O = M4Q.Un8f.cg5l;
    b4f.cl5q = function () {
        this.qW0x = {};
        this.jI9z = {
            onchange: this.bqm4q.g4k(this)
        };
        this.cs5x()
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.cmC3x(e4i.mask);
        this.cmB3x(e4i.align);
        this.yw3x(e4i.title);
        if (!e4i.draggable)
            return;
        this.iY8Q = H4L.wh2x.B4F(this.jI9z)
    };
    b4f.bD5I = function () {
        this.bH5M();
        delete this.oO0x;
        delete this.On7g;
        if (!!this.yo3x) {
            this.yo3x.S4W();
            delete this.yo3x
        }
        if (!!this.iY8Q) {
            this.iY8Q.S4W();
            delete this.iY8Q
        }
    };
    b4f.bZ5e = function () {
        this.lb9S = hP8H;
        this.ca5f = gc7V
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a3x.cQ6K(this.o4s);
        this.xU3x = i4m[1];
        this.jI9z.mbar = i4m[0];
        this.jI9z.body = this.o4s;
        h4l.q4u(i4m[2], "mousedown", this.cmy3x.g4k(this));
        h4l.q4u(this.jI9z.mbar, "mousedown", this.OI7B.g4k(this));
        this.bLu8m = a3x.cQ6K(this.jI9z.mbar)[0]
    };
    b4f.cmy3x = function (d4h) {
        h4l.bh5m(d4h);
        this.z4D("onclose", d4h);
        if (!d4h.stopped) {
            this.bq5v()
        }
    };
    b4f.OI7B = function (d4h) {
        h4l.z4D(document, "click")
    };
    b4f.bqm4q = function (d4h) {
        if (!this.mK9B)
            return;
        a3x.fz7s(this.mK9B, {
            top: d4h.top + "px",
            left: d4h.left + "px"
        })
    };
    b4f.Ip5u = function () {
        var eH6B = [function () {
                return 0
            }, function (ng9X, CR4V, bj5o, J4N) {
                if (J4N == "top" && window.top != window.self) {
                    var UP8H = 0,
                        CW4a = 0;
                    if (top.g_topBarHeight)
                        UP8H = top.g_topBarHeight;
                    if (top.g_bottomBarShow && top.g_bottomBarHeight)
                        CW4a = top.g_bottomBarHeight;
                    if (ng9X.top <= UP8H) {
                        var bcv1x = Math.max(0, (CR4V.height - (UP8H - ng9X.top) - CW4a - bj5o.height) / 2);
                        return bcv1x + UP8H
                    } else {
                        var bcv1x = Math.max(0, (CR4V.height - CW4a - bj5o.height) / 2);
                        return bcv1x + ng9X.top
                    }
                }
                return Math.max(0, ng9X[J4N] + (CR4V[hF8x[J4N]] - bj5o[hF8x[J4N]]) / 2)
            }, function (ng9X, CR4V, bj5o, J4N) {
                return ng9X[J4N] + (CR4V[hF8x[J4N]] - bj5o[hF8x[J4N]])
            }
            ],
            cmo3x = ["left", "top"],
            hF8x = {
                left: "width",
                top: "height"
            };
        return function () {
            var A4E = {},
                cd5i = this.o4s.style,
                iE8w = a3x.oq0x(),
                ng9X = {
                    left: iE8w.scrollLeft,
                    top: iE8w.scrollTop
                },
                CR4V = {
                    width: iE8w.clientWidth,
                    height: iE8w.clientHeight
                },
                bj5o = {
                    width: this.o4s.offsetWidth,
                    height: this.o4s.offsetHeight
                },
                dh6b = {
                    left: iE8w.clientWidth - this.o4s.offsetWidth,
                    top: iE8w.clientHeight - this.o4s.offsetHeight
                };
            k4o.be5j(cmo3x, function (J4N, s4w) {
                var dc6W = eH6B[this.oO0x[s4w]];
                if (!dc6W)
                    return;
                A4E[J4N] = dc6W(ng9X, CR4V, bj5o, J4N)
            }, this);
            this.fU7N(A4E)
        }
    }
    ();
    b4f.cmm3x = function () {
        if (!this.yo3x) {
            if (!this.On7g)
                return;
            this.qW0x.parent = this.fE7x;
            this.yo3x = this.On7g.B4F(this.qW0x)
        }
        this.yo3x.N4R()
    };
    b4f.SW8O = function () {
        if (!!this.yo3x)
            this.yo3x.bq5v();
        K4O.SW8O.apply(this, arguments)
    };
    b4f.cmC3x = function (km9d) {
        if (!!km9d) {
            if (km9d instanceof M4Q.FP5U) {
                this.yo3x = km9d;
                return
            }
            if (k4o.gf7Y(km9d)) {
                this.On7g = km9d;
                return
            }
            this.On7g = M4Q.FP5U;
            if (k4o.fe6Y(km9d))
                this.qW0x.clazz = km9d;
            return
        }
        this.On7g = null
    };
    b4f.yw3x = function (eG6A, ds6m) {
        if (!!this.bLu8m) {
            var ZA0x = !ds6m ? "innerText" : "innerHTML";
            this.bLu8m[ZA0x] = eG6A || "鏍囬"
        }
        return this
    };
    b4f.cmB3x = function () {
        var cP6J = /\s+/,
            cml3x = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            },
            cmk3x = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function (mJ9A) {
            this.oO0x = (mJ9A || "").split(cP6J);
            var dP6J = cml3x[this.oO0x[0]];
            if (dP6J == null)
                dP6J = 1;
            this.oO0x[0] = dP6J;
            var dP6J = cmk3x[this.oO0x[1]];
            if (dP6J == null)
                dP6J = 1;
            this.oO0x[1] = dP6J;
            return this
        }
    }
    ();
    b4f.N4R = function () {
        K4O.N4R.apply(this, arguments);
        this.cmm3x();
        return this
    };
    hP8H = a3x.rO1x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gc7V = a3x.hM8E('<div class="' + hP8H + '"><div class="zbar"><div class="zttl">鏍囬</div></div><div class="zcnt"></div><span class="zcls" title="鍏抽棴绐椾綋">脳</span></div>')
})();
(function () {
    var c4g = NEJ.P,
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ui"),
        bcS1x;
    if (!!M4Q.VI9z)
        return;
    M4Q.VI9z = NEJ.C();
    bcS1x = M4Q.VI9z.O4S(M4Q.Th8Z);
    bcS1x.bnZ3x = function () {
        return M4Q.Un8f.B4F(this.bS5X)
    };
    bcS1x.Pq7j = function () {
        M4Q.VI9z.cg5l.Pq7j.apply(this, arguments);
        this.bS5X.mask = null;
        this.bS5X.title = "鏍囬";
        this.bS5X.align = "";
        this.bS5X.draggable = !1;
        this.bS5X.onclose = null
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        bd5i = c4g("nej.ui"),
        n4r = c4g("nm.l"),
        b4f,
        K4O;
    n4r.dV6P = NEJ.C();
    b4f = n4r.dV6P.O4S(bd5i.VI9z);
    b4f.bk5p = function (e4i) {
        e4i.clazz = "m-layer z-show " + (e4i.clazz || "");
        e4i.nohack = true;
        e4i.draggable = true;
        this.bl5q(e4i)
    };
    b4f.dy6s = function (f4j, bF5K) {
        if (!f4j)
            return;
        a3x.X4b(f4j, "display", !bF5K ? "none" : "");
        f4j.lastChild.innerText = bF5K || ""
    };
    b4f.dN6H = function (gh7a, cC6w, NC7v, Nx7q) {
        var dD6x = "js-lock";
        if (cC6w === undefined)
            return a3x.by5D(gh7a, dD6x);
        !cC6w ? a3x.w4A(gh7a, dD6x) : a3x.y4C(gh7a, dD6x);
        gh7a.firstChild.innerText = !cC6w ? NC7v : Nx7q
    };
    n4r.dV6P.N4R = function (e4i) {
        e4i = e4i || {};
        if (e4i.mask === undefined)
            e4i.mask = "m-mask";
        if (e4i.parent === undefined)
            e4i.parent = document.body;
        if (e4i.draggable === undefined)
            e4i.draggable = true;
        !!this.eJ6D && this.eJ6D.S4W();
        this.eJ6D = this.B4F(e4i);
        this.eJ6D.N4R(e4i);
        return this.eJ6D
    };
    n4r.dV6P.bq5v = function () {
        !!this.eJ6D && this.eJ6D.S4W()
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        b4f,
        K4O;
    n4r.bdO1x = NEJ.C();
    b4f = n4r.bdO1x.O4S(n4r.dV6P);
    K4O = n4r.bdO1x.cg5l;
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        if (e4i.bubble === undefined)
            e4i.bubble = true;
        this.Np7i = e4i.bubble;
        this.pM0x = e4i.message || ""
    };
    b4f.bZ5e = function () {
        this.ca5f = a3x.hM8E('<div class="lyct f-cb f-tc"></div>')
    };
    b4f.bR5W = function () {
        this.cc5h();
        h4l.q4u(this.o4s, "click", this.cx5C.g4k(this))
    };
    b4f.cx5C = function (d4h) {
        var f4j = h4l.U4Y(d4h, "d:action");
        if (!f4j)
            return;
        if (f4j.href)
            h4l.ce5j(d4h);
        if (a3x.u4y(f4j, "action") == "close")
            this.bq5v();
        if (this.Np7i === !1)
            h4l.rD1x(d4h);
        this.z4D("onaction", a3x.u4y(f4j, "action"))
    };
    b4f.N4R = function () {
        K4O.N4R.call(this);
        this.o4s.innerHTML = this.pM0x
    };
    var fX7Q = a3x.em6g('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l4p.mm9d = function () {
        var eZ6T;
        var cq5v;
        var bef1x = function (ge7X, W4a) {
            if (k4o.gf7Y(ge7X, "function") && ge7X(W4a) != -1)
                cq5v.S4W()
        };
        var yc3x = function () {
            !!cq5v && cq5v.bq5v()
        };
        return function (e4i) {
            clearTimeout(eZ6T);
            e4i = e4i || {};
            e4i.title = e4i.title || "鎻愮ず";
            e4i.clazz = e4i.clazz || "";
            e4i.parent = e4i.parent || document.body;
            e4i.buttons = e4i.buttons || [];
            e4i.message = a3x.bP5U(fX7Q, e4i);
            e4i.onaction = bef1x.g4k(null, e4i.action);
            if (e4i.mask === undefined)
                e4i.mask = true;
            if (e4i.draggable === undefined)
                e4i.draggable = true;
            !!cq5v && cq5v.S4W();
            cq5v = n4r.bdO1x.B4F(e4i);
            cq5v.N4R();
            if (e4i.autoclose)
                eZ6T = setTimeout(yc3x.g4k(null), 2e3);
            return cq5v
        }
    }
    ();
    l4p.fc6W = function (e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w1";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e4i.btntxt || "纭畾"
        }
        ];
        var cq5v = l4p.mm9d(e4i);
        return cq5v
    };
    l4p.gP7I = function (e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w2";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e4i.btnok || "纭畾",
            style: e4i.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e4i.btncc || "鍙栨秷",
            style: e4i.ccstyle || ""
        }
        ];
        var cq5v = l4p.mm9d(e4i);
        return cq5v
    }
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u");
    a3x.cmj3x = function () {
        var fZ7S = /[\r\n]/gi,
            R4V = {};
        var cmi3x = function (cM6G) {
            return (cM6G || "").replace(fZ7S, "aa").length
        };
        var bLs8k = function (C4G) {
            var bc5h = R4V[C4G],
                bLr8j = a3x.x4B(C4G),
                wK2x = a3x.x4B(C4G + "-counter");
            if (!bLr8j || !bc5h)
                return;
            var d4h = {
                input: bLr8j.value
            };
            d4h.length = bc5h.onlength(d4h.input);
            d4h.delta = bc5h.max - d4h.length;
            bc5h.onchange(d4h);
            wK2x.innerHTML = d4h.value || "鍓╀綑" + d4h.delta + "涓瓧"
        };
        return function (E4I, e4i) {
            var C4G = a3x.kp9g(E4I);
            if (!C4G || !!R4V[C4G])
                return;
            var bc5h = NEJ.X({}, e4i);
            bc5h.onchange = bc5h.onchange || bm5r;
            bc5h.onlength = cmi3x;
            if (!bc5h.max) {
                var bLq8i = parseInt(a3x.gl7e(C4G, "maxlength")),
                    bLp8h = parseInt(a3x.u4y(C4G, "maxLength"));
                bc5h.max = bLq8i || bLp8h || 100;
                if (!bLq8i && !!bLp8h)
                    bc5h.onlength = k4o.fi6c
            }
            R4V[C4G] = bc5h;
            h4l.q4u(C4G, "input", bLs8k.g4k(null, C4G));
            var f4j = a3x.EV5a(C4G, {
                nid: bc5h.nid || "js-counter",
                clazz: bc5h.clazz
            });
            bc5h.xid = C4G + "-counter";
            f4j.id = bc5h.xid;
            bLs8k(C4G)
        }
    }
    ()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        ba4e = c4g("nej.h");
    ba4e.bfN2x = function (E4I, dJ6D) {
    }
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        M4Q = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        ba4e = c4g("nej.h");
    if (M4Q.mq9h.trident)
        return;
    ba4e.bfN2x = function () {
        var R4V = {};
        var Il5q = function (d4h) {
            var cO6I = h4l.U4Y(d4h);
            if (!!cO6I.value)
                return;
            a3x.X4b(a3x.EV5a(cO6I), "display", "none")
        };
        var Dl4p = function (d4h) {
            var cO6I = h4l.U4Y(d4h);
            if (!!cO6I.value)
                return;
            a3x.X4b(a3x.EV5a(cO6I), "display", "")
        };
        var cma3x = function (cO6I, dJ6D) {
            var C4G = a3x.kp9g(cO6I),
                jM9D = a3x.EV5a(cO6I, {
                    tag: "label",
                    clazz: dJ6D
                });
            jM9D.htmlFor = C4G;
            var da6U = a3x.gl7e(cO6I, "placeholder") || "";
            jM9D.innerText = da6U == "null" ? "" : da6U;
            var cp5u = cO6I.offsetHeight + "px";
            a3x.fz7s(jM9D, {
                left: 0,
                display: !cO6I.value ? "" : "none"
            })
        };
        return ba4e.bfN2x.ef6Z(function (d4h) {
            d4h.stopped = !0;
            var bg5l = d4h.args,
                cO6I = a3x.x4B(bg5l[0]);
            if (!!R4V[cO6I.id])
                return;
            cma3x(cO6I, bg5l[1]);
            R4V[cO6I.id] = !0;
            h4l.q4u(cO6I, "blur", Dl4p.g4k(null));
            h4l.q4u(cO6I, "focus", Il5q.g4k(null))
        })
    }
    ()
})();
(function () {
    var c4g = NEJ.P,
        ba4e = c4g("nej.h"),
        a3x = c4g("nej.e"),
        cL6F = c4g("nej.x");
    a3x.fD7w = cL6F.fD7w = function (E4I, dJ6D) {
        ba4e.bfN2x(E4I, a3x.u4y(E4I, "holder") || dJ6D || "js-placeholder");
        return this
    };
    cL6F.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ut"),
        ha7T;
    if (!!M4Q.MU6O)
        return;
    M4Q.MU6O = NEJ.C();
    ha7T = M4Q.MU6O.O4S(M4Q.cz5E);
    ha7T.cl5q = function () {
        this.cs5x();
        this.Dq4u = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    ha7T.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.fL7E = document.forms[e4i.form] || a3x.x4B(e4i.form);
        this.bU5Z([[this.fL7E, "keypress", this.clZ3x.g4k(this)]]);
        this.pM0x = e4i.message || {};
        this.pM0x.pass = this.pM0x.pass || "&nbsp;";
        var eC6w = this.og0x(this.fL7E, "focusMode", 1);
        if (!isNaN(eC6w)) {
            this.bLl8d = {
                mode: eC6w,
                clazz: e4i.focus
            }
        }
        this.zW3x = e4i.holder;
        this.Dq4u.tp.clazz = "js-mhd " + (e4i.tip || "js-tip");
        this.Dq4u.ok.clazz = "js-mhd " + (e4i.pass || "js-pass");
        this.Dq4u.er.clazz = "js-mhd " + (e4i.error || "js-error");
        this.bLk8c = e4i.invalid || "js-invalid";
        this.clT3x(e4i);
        this.fS7L();
        if (!!this.zJ3x)
            this.zJ3x.focus()
    };
    ha7T.bD5I = function () {
        this.bH5M();
        delete this.pM0x;
        delete this.zJ3x;
        delete this.Dv4z;
        delete this.fL7E;
        delete this.bLi8a;
        delete this.Mz6t
    };
    ha7T.og0x = function (f4j, Dx4B, t4x) {
        var A4E = a3x.u4y(f4j, Dx4B);
        switch (t4x) {
            case 1:
                return parseInt(A4E);
            case 2:
                return (A4E || "").toLowerCase() == "true";
            case 3:
                return this.bho2x(A4E)
        }
        return A4E
    };
    ha7T.yu3x = function (A4E, t4x) {
        if (t4x == "date")
            return this.bho2x(A4E);
        return parseInt(A4E)
    };
    ha7T.WP9G = function () {
        var jr8j = /^button|submit|reset|image|hidden|file$/i;
        return function (f4j) {
            f4j = this.x4B(f4j) || f4j;
            var t4x = f4j.type;
            return !!f4j.name && !jr8j.test(f4j.type || "")
        }
    }
    ();
    ha7T.clQ3x = function () {
        var jr8j = /^hidden$/i;
        return function (f4j) {
            if (this.WP9G(f4j))
                return !0;
            f4j = this.x4B(f4j) || f4j;
            var t4x = f4j.type || "";
            return jr8j.test(t4x)
        }
    }
    ();
    ha7T.bho2x = function () {
        var cP6J = /[-\/]/;
        var clP3x = function (A4E) {
            if (!A4E)
                return "";
            A4E = A4E.split(cP6J);
            A4E.push(A4E.shift());
            return A4E.join("/")
        };
        return function (A4E) {
            if ((A4E || "").toLowerCase() == "now")
                return +(new Date);
            return Date.parse(clP3x(A4E))
        }
    }
    ();
    ha7T.clZ3x = function (d4h) {
        if (d4h.keyCode != 13)
            return;
        this.z4D("onenter", d4h)
    };
    ha7T.clH3x = function (C4G, T4X) {
        var qL0x = this.Mz6t[T4X],
            A4E = this.og0x(C4G, T4X);
        if (!A4E || !qL0x)
            return;
        this.WS9J(C4G, qL0x);
        this.bij2x(C4G, T4X, A4E)
    };
    ha7T.clG3x = function (C4G, T4X) {
        try {
            var bLd8V = this.og0x(C4G, T4X);
            if (!bLd8V)
                return;
            var A4E = new RegExp(bLd8V);
            this.bij2x(C4G, T4X, A4E);
            this.WS9J(C4G, this.Mz6t[T4X])
        } catch (e) {
        }
    };
    ha7T.clD3x = function (C4G, T4X) {
        var qL0x = this.Mz6t[T4X];
        if (!!qL0x && this.og0x(C4G, T4X, 2))
            this.WS9J(C4G, qL0x)
    };
    ha7T.bip2x = function (C4G, T4X, A4E) {
        A4E = parseInt(A4E);
        if (isNaN(A4E))
            return;
        this.bij2x(C4G, T4X, A4E);
        this.WS9J(C4G, this.Mz6t[T4X])
    };
    ha7T.bLb8T = function (C4G, T4X) {
        this.bip2x(C4G, T4X, this.og0x(C4G, T4X))
    };
    ha7T.bLa8S = function (C4G, T4X) {
        this.bip2x(C4G, T4X, a3x.gl7e(C4G, T4X))
    };
    ha7T.bKZ8R = function (C4G, T4X, t4x) {
        var A4E = this.yu3x(this.og0x(C4G, T4X), this.og0x(C4G, "type"));
        this.bip2x(C4G, T4X, A4E)
    };
    ha7T.clv3x = function () {
        var fZ7S = /^input|textarea$/i;
        var Il5q = function (d4h) {
            this.oG0x(h4l.U4Y(d4h))
        };
        var Dl4p = function (d4h) {
            var f4j = h4l.U4Y(d4h);
            if (!this.og0x(f4j, "ignore", 2)) {
                this.bKY8Q(f4j)
            }
        };
        return function (f4j) {
            if (this.og0x(f4j, "autoFocus", 2))
                this.zJ3x = f4j;
            var pB0x = a3x.gl7e(f4j, "placeholder");
            if (!!pB0x && pB0x != "null")
                a3x.fD7w(f4j, this.zW3x);
            if (!!this.bLl8d && fZ7S.test(f4j.tagName))
                a3x.lU9L(f4j, this.bLl8d);
            var C4G = a3x.kp9g(f4j);
            this.clD3x(C4G, "required");
            this.clH3x(C4G, "type");
            this.clG3x(C4G, "pattern");
            this.bLa8S(C4G, "maxlength");
            this.bLa8S(C4G, "minlength");
            this.bLb8T(C4G, "maxLength");
            this.bLb8T(C4G, "minLength");
            this.bKZ8R(C4G, "min");
            this.bKZ8R(C4G, "max");
            var T4X = f4j.name;
            this.pM0x[T4X + "-tip"] = this.og0x(f4j, "tip");
            this.pM0x[T4X + "-error"] = this.og0x(f4j, "message");
            this.oG0x(f4j);
            var bt5y = this.Dv4z[C4G],
                j4n = (bt5y || Y4c).data || Y4c,
                Lx6r = this.og0x(f4j, "counter", 2);
            if (Lx6r && (j4n.maxlength || j4n.maxLength)) {
                a3x.cmj3x(C4G, {
                    nid: this.Dq4u.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bt5y && fZ7S.test(f4j.tagName)) {
                this.bU5Z([[f4j, "focus", Il5q.g4k(this)], [f4j, "blur", Dl4p.g4k(this)]])
            } else if (this.og0x(f4j, "focus", 2)) {
                this.bU5Z([[f4j, "focus", Il5q.g4k(this)]])
            }
        }
    }
    ();
    ha7T.clT3x = function () {
        var DO4S = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bho2x(v))
            }
        };
        var clt3x = {
            required: function (f4j) {
                var t4x = f4j.type,
                    cls3x = !f4j.value,
                    clm3x = (t4x == "checkbox" || t4x == "radio") && !f4j.checked;
                if (clm3x || cls3x)
                    return -1
            },
            type: function (f4j, e4i) {
                var cP6J = this.bLi8a[e4i.type],
                    eL6F = f4j.value.trim(),
                    cli3x = !!cP6J.test && !cP6J.test(eL6F),
                    clg3x = k4o.gf7Y(cP6J) && !cP6J.call(this, eL6F);
                if (cli3x || clg3x)
                    return -2
            },
            pattern: function (f4j, e4i) {
                if (!e4i.pattern.test(f4j.value))
                    return -3
            },
            maxlength: function (f4j, e4i) {
                if (f4j.value.length > e4i.maxlength)
                    return -4
            },
            minlength: function (f4j, e4i) {
                if (f4j.value.length < e4i.minlength)
                    return -5
            },
            maxLength: function (f4j, e4i) {
                if (k4o.fi6c(f4j.value) > e4i.maxLength)
                    return -4
            },
            minLength: function (f4j, e4i) {
                if (k4o.fi6c(f4j.value) < e4i.minLength)
                    return -5
            },
            min: function (f4j, e4i) {
                var fq7j = this.yu3x(f4j.value, e4i.type);
                if (isNaN(fq7j) || fq7j < e4i.min)
                    return -6
            },
            max: function (f4j, e4i) {
                var fq7j = this.yu3x(f4j.value, e4i.type);
                if (isNaN(fq7j) || fq7j > e4i.max)
                    return -7
            }
        };
        return function (e4i) {
            this.bLi8a = NEJ.X(NEJ.X({}, DO4S), e4i.type);
            this.Mz6t = NEJ.X(NEJ.X({}, clt3x), e4i.attr)
        }
    }
    ();
    ha7T.WS9J = function (C4G, xq3x) {
        if (!k4o.gf7Y(xq3x))
            return;
        var bt5y = this.Dv4z[C4G];
        if (!bt5y || !bt5y.func) {
            bt5y = bt5y || {};
            bt5y.func = [];
            this.Dv4z[C4G] = bt5y
        }
        bt5y.func.push(xq3x)
    };
    ha7T.bij2x = function (C4G, T4X, A4E) {
        if (!T4X)
            return;
        var bt5y = this.Dv4z[C4G];
        if (!bt5y || !bt5y.data) {
            bt5y = bt5y || {};
            bt5y.data = {};
            this.Dv4z[C4G] = bt5y
        }
        bt5y.data[T4X] = A4E
    };
    ha7T.bKY8Q = function (f4j) {
        f4j = this.x4B(f4j) || f4j;
        var bt5y = this.Dv4z[a3x.kp9g(f4j)];
        if (!f4j || !bt5y || !this.WP9G(f4j))
            return !0;
        var m4q;
        k4o.ed6X(bt5y.func, function (eH6B) {
            m4q = eH6B.call(this, f4j, bt5y.data);
            return m4q != null
        }, this);
        if (m4q == null) {
            var d4h = {
                target: f4j,
                form: this.fL7E
            };
            this.z4D("oncheck", d4h);
            m4q = d4h.value
        }
        var d4h = {
            target: f4j,
            form: this.fL7E
        };
        if (m4q != null) {
            d4h.code = m4q;
            this.z4D("oninvalid", d4h);
            if (!d4h.stopped) {
                this.clf3x(f4j, d4h.value || this.pM0x[f4j.name + m4q])
            }
        } else {
            this.z4D("onvalid", d4h);
            if (!d4h.stopped)
                this.cle3x(f4j, d4h.value)
        }
        return m4q == null
    };
    ha7T.xs3x = function () {
        var clb3x = function (VF9w, VD9u) {
            return VF9w == VD9u ? "block" : "none"
        };
        var cla3x = function (f4j, t4x, bF5K) {
            var pB0x = bKO8G.call(this, f4j, t4x);
            if (!pB0x && !!bF5K)
                pB0x = a3x.EV5a(f4j, this.Dq4u[t4x]);
            return pB0x
        };
        var bKO8G = function (f4j, t4x) {
            var pB0x;
            if (t4x == "tp")
                pB0x = a3x.x4B(f4j.name + "-tip");
            if (!pB0x)
                pB0x = a3x.I4M(f4j.parentNode, this.Dq4u[t4x].nid)[0];
            return pB0x
        };
        return function (f4j, bF5K, t4x) {
            f4j = this.x4B(f4j) || f4j;
            if (!f4j)
                return;
            t4x == "er" ? a3x.y4C(f4j, this.bLk8c) : a3x.w4A(f4j, this.bLk8c);
            var pB0x = cla3x.call(this, f4j, t4x, bF5K);
            if (!!pB0x && !!bF5K)
                pB0x.innerHTML = bF5K;
            k4o.ed6X(this.Dq4u, function (A4E, J4N) {
                a3x.X4b(bKO8G.call(this, f4j, J4N), "display", clb3x(t4x, J4N))
            }, this)
        }
    }
    ();
    ha7T.oG0x = function (f4j, bF5K) {
        this.xs3x(f4j, bF5K || this.pM0x[f4j.name + "-tip"], "tp");
        return this
    };
    ha7T.cle3x = function (f4j, bF5K) {
        this.xs3x(f4j, bF5K || this.pM0x[f4j.name + "-pass"] || this.pM0x.pass, "ok");
        return this
    };
    ha7T.clf3x = function (f4j, bF5K) {
        this.xs3x(f4j, bF5K || this.pM0x[f4j.name + "-error"], "er");
        return this
    };
    ha7T.hS8K = function () {
        var fZ7S = /^(?:radio|checkbox)$/i;
        var ckX3x = function (A4E) {
            return A4E == null ? "" : A4E
        };
        var bKN8F = function (A4E, f4j) {
            if (fZ7S.test(f4j.type || "")) {
                f4j.checked = A4E == f4j.value
            } else {
                f4j.value = ckX3x(A4E)
            }
        };
        return function (T4X, A4E) {
            var f4j = this.x4B(T4X);
            if (!f4j)
                return this;
            if (f4j.tagName == "SELECT" || !f4j.length) {
                bKN8F(A4E, f4j)
            } else {
                k4o.be5j(f4j, bKN8F.g4k(null, A4E))
            }
            return this
        }
    }
    ();
    ha7T.x4B = function (T4X) {
        return this.fL7E.elements[T4X]
    };
    ha7T.ctC5H = function () {
        return this.fL7E
    };
    ha7T.Yi9Z = function () {
        var fZ7S = /^radio|checkbox$/i,
            jr8j = /^number|date$/;
        var ckR3x = function (bv5A, f4j) {
            var T4X = f4j.name,
                A4E = f4j.value,
                bt5y = bv5A[T4X],
                t4x = this.og0x(f4j, "type");
            if (jr8j.test(t4x))
                A4E = this.yu3x(A4E, t4x);
            if (fZ7S.test(f4j.type) && !f4j.checked) {
                A4E = this.og0x(f4j, "value");
                if (!A4E)
                    return
            }
            if (!!bt5y) {
                if (!k4o.el6f(bt5y)) {
                    bt5y = [bt5y];
                    bv5A[T4X] = bt5y
                }
                bt5y.push(A4E)
            } else {
                bv5A[T4X] = A4E
            }
        };
        return function () {
            var m4q = {};
            k4o.be5j(this.fL7E.elements, function (f4j) {
                if (this.clQ3x(f4j))
                    ckR3x.call(this, m4q, f4j)
            }, this);
            return m4q
        }
    }
    ();
    ha7T.Yr9i = function () {
        var ckQ3x = function (f4j) {
            if (this.WP9G(f4j))
                this.oG0x(f4j)
        };
        return function () {
            this.fL7E.reset();
            k4o.be5j(this.fL7E.elements, ckQ3x, this);
            return this
        }
    }
    ();
    ha7T.ctE5J = function () {
        this.fL7E.submit();
        return this
    };
    ha7T.fS7L = function () {
        var ckO3x = function (f4j) {
            if (this.WP9G(f4j))
                this.clv3x(f4j)
        };
        return function () {
            this.Dv4z = {};
            k4o.be5j(this.fL7E.elements, ckO3x, this);
            return this
        }
    }
    ();
    ha7T.ckN3x = function (f4j) {
        f4j = this.x4B(f4j) || f4j;
        if (!!f4j)
            return this.bKY8Q(f4j);
        var m4q = !0;
        k4o.be5j(this.fL7E.elements, function (f4j) {
            var kc9T = this.ckN3x(f4j);
            m4q = m4q && kc9T
        }, this);
        return m4q
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        b4f,
        K4O;
    n4r.Yy9p = NEJ.C();
    b4f = n4r.Yy9p.O4S(n4r.dV6P);
    K4O = n4r.Yy9p.cg5l;
    b4f.bR5W = function () {
        this.cc5h();
        h4l.q4u(this.o4s, "click", this.cx5C.g4k(this));
        h4l.q4u(document, "mousewheel", this.AD3x.g4k(this));
        if (!!document.body.addEventListener)
            document.body.addEventListener("DOMMouseScroll", this.AD3x.g4k(this))
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        if (e4i.jst) {
            this.o4s.innerHTML = a3x.bP5U(e4i.jst, e4i.data)
        } else if (e4i.ntp) {
            this.o4s.appendChild(a3x.dq6k(e4i.ntp))
        } else if (e4i.txt) {
            this.o4s.innerHTML = a3x.hX8P(e4i.txt)
        } else if (e4i.html) {
            this.o4s.innerHTML = e4i.html
        }
        var KK6E = this.o4s.getElementsByTagName("form");
        if (KK6E.length) {
            this.fL7E = H4L.MU6O.B4F({
                form: KK6E[0]
            })
        }
        this.Eh4l = a3x.cQ6K(this.o4s)[0]
    };
    b4f.bD5I = function () {
        this.z4D("ondestroy");
        this.bH5M();
        this.o4s.innerHTML = "";
        delete this.Eh4l
    };
    b4f.cx5C = function (d4h) {
        var f4j = h4l.U4Y(d4h, "d:action"),
            j4n = this.fL7E ? this.fL7E.Yi9Z() : null,
            d4h = {
                action: a3x.u4y(f4j, "action")
            };
        if (j4n)
            d4h.data = j4n;
        if (d4h.action) {
            this.z4D("onaction", d4h);
            if (d4h.stopped)
                return;
            this.bq5v()
        }
    };
    b4f.AD3x = function (d4h) {
        if (!this.Eh4l)
            return;
        h4l.bh5m(d4h);
        var dh6b = d4h.wheelDelta || -d4h.detail;
        this.Eh4l.scrollTop -= dh6b
    };
    l4p.jk8c = function (e4i) {
        e4i.destroyable = e4i.destroyable || true;
        e4i.title = e4i.title || "鎻愮ず";
        e4i.draggable = true;
        e4i.parent = document.body;
        e4i.mask = e4i.mask || true;
        var zV3x = n4r.Yy9p.B4F(e4i);
        zV3x.N4R();
        return zV3x
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bKI8A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        KG6A = {},
        Ej4n = {};
    for (var i = 0, l = bKI8A.length, c; i < l; i++) {
        c = bKI8A.charAt(i);
        KG6A[i] = c;
        Ej4n[c] = i
    }
    var ckL3x = function (iJ8B) {
        var s4w = 0,
            c,
            m4q = [];
        while (s4w < iJ8B.length) {
            c = iJ8B[s4w];
            if (c < 128) {
                m4q.push(String.fromCharCode(c));
                s4w++
            } else if (c > 191 && c < 224) {
                m4q.push(String.fromCharCode((c & 31) << 6 | iJ8B[s4w + 1] & 63));
                s4w += 2
            } else {
                m4q.push(String.fromCharCode((c & 15) << 12 | (iJ8B[s4w + 1] & 63) << 6 | iJ8B[s4w + 2] & 63));
                s4w += 3
            }
        }
        return m4q.join("")
    };
    var ckJ3x = function () {
        var he7X = /\r\n/g;
        return function (j4n) {
            j4n = j4n.replace(he7X, "\n");
            var m4q = [],
                oa0x = String.fromCharCode(237);
            if (oa0x.charCodeAt(0) < 0)
                for (var i = 0, l = j4n.length, c; i < l; i++) {
                    c = j4n.charCodeAt(i);
                    c > 0 ? m4q.push(c) : m4q.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                }
            else
                for (var i = 0, l = j4n.length, c; i < l; i++) {
                    c = j4n.charCodeAt(i);
                    if (c < 128)
                        m4q.push(c);
                    else if (c > 127 && c < 2048)
                        m4q.push(c >> 6 | 192, c & 63 | 128);
                    else
                        m4q.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                }
            return m4q
        }
    }
    ();
    var FN5S = function (iJ8B) {
        var s4w = 0,
            m4q = [],
            eC6w = iJ8B.length % 3;
        if (eC6w == 1)
            iJ8B.push(0, 0);
        if (eC6w == 2)
            iJ8B.push(0);
        while (s4w < iJ8B.length) {
            m4q.push(KG6A[iJ8B[s4w] >> 2], KG6A[(iJ8B[s4w] & 3) << 4 | iJ8B[s4w + 1] >> 4], KG6A[(iJ8B[s4w + 1] & 15) << 2 | iJ8B[s4w + 2] >> 6], KG6A[iJ8B[s4w + 2] & 63]);
            s4w += 3
        }
        if (eC6w == 1)
            m4q[m4q.length - 1] = m4q[m4q.length - 2] = "=";
        if (eC6w == 2)
            m4q[m4q.length - 1] = "=";
        return m4q.join("")
    };
    var ckI3x = function () {
        var qI0x = /\n|\r|=/g;
        return function (j4n) {
            var s4w = 0,
                m4q = [];
            j4n = j4n.replace(qI0x, "");
            for (var i = 0, l = j4n.length; i < l; i += 4)
                m4q.push(Ej4n[j4n.charAt(i)] << 2 | Ej4n[j4n.charAt(i + 1)] >> 4, (Ej4n[j4n.charAt(i + 1)] & 15) << 4 | Ej4n[j4n.charAt(i + 2)] >> 2, (Ej4n[j4n.charAt(i + 2)] & 3) << 6 | Ej4n[j4n.charAt(i + 3)]);
            var bo5t = m4q.length,
                eC6w = j4n.length % 4;
            if (eC6w == 2)
                m4q = m4q.slice(0, bo5t - 2);
            if (eC6w == 3)
                m4q = m4q.slice(0, bo5t - 1);
            return m4q
        }
    }
    ();
    p.ctF5K = function (j4n) {
        return ckL3x(ckI3x(j4n))
    };
    p.ckF3x = function (j4n) {
        try {
            return window.btoa(j4n)
        } catch (ex) {
            return FN5S(ckJ3x(j4n))
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j"),
        M4Q = c4g("nej.p"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        D4H = c4g("nm.w"),
        bI5N = c4g("nej.ui"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f,
        K4O;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n4r.bKF8x = NEJ.C();
    b4f = n4r.bKF8x.O4S(n4r.dV6P);
    b4f.bZ5e = function () {
        this.ca5f = "m-download-layer"
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a3x.I4M(this.o4s, "j-flag");
        this.bnj3x = i4m[0];
        this.bnm3x = i4m[1];
        this.bKE8w = i4m[2];
        v4z.bp5u("/client/version/get", {
            type: "json",
            onload: this.ckB3x.g4k(this)
        });
        if (M4Q.Kh6b.mac) {
            a3x.w4A(this.bnj3x.parentNode, "f-hide");
            a3x.y4C(this.bnm3x.parentNode, "f-hide");
            a3x.y4C(this.bKE8w, "f-hide")
        } else {
            a3x.y4C(this.bnj3x.parentNode, "f-hide");
            a3x.w4A(this.bnm3x.parentNode, "f-hide");
            a3x.w4A(this.bKE8w, "f-hide")
        }
    };
    b4f.bk5p = function (e4i) {
        e4i.clazz = " m-layer-down";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "涓嬭浇";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bl5q(e4i);
        this.bU5Z([[this.o4s, "click", this.bO5T.g4k(this)]]);
        this.es6m = TYPE_MAP[e4i.type];
        this.gv7o = e4i.id
    };
    b4f.bD5I = function () {
        this.bH5M()
    };
    b4f.zX3x = function () {
        this.bq5v()
    };
    b4f.Em4q = function (d4h) {
        this.z4D("onok", A4E);
        this.bq5v()
    };
    b4f.bO5T = function (d4h) {
        var f4j = h4l.U4Y(d4h, "d:action");
        switch (a3x.u4y(f4j, "action")) {
            case "download":
                this.bq5v();
                window.open(a3x.u4y(f4j, "src"));
                break;
            case "orpheus":
                this.bq5v();
                location.href = "orpheus://" + k4o.ckF3x(JSON.stringify({
                    type: this.es6m,
                    id: this.gv7o,
                    cmd: "download"
                }));
                break
        }
    };
    b4f.ckB3x = function (d4h) {
        if ((d4h || Y4c).code == 200) {
            this.EO4S = d4h.data;
            this.bnj3x.innerText = "V" + this.EO4S.mac;
            this.bnm3x.innerText = "V" + this.EO4S.pc
        }
    };
    l4p.Zc0x = function (e4i) {
        n4r.bKF8x.B4F(e4i).N4R()
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        k4o = c4g("nej.u"),
        p4t = c4g("nm.d"),
        bN5S = {};
    p4t.x4B = function (J4N) {
        return bN5S[J4N]
    };
    p4t.on0x = function (J4N, bc5h) {
        bN5S[J4N] = bc5h
    };
    p4t.eQ6K = function (j4n) {
        k4o.ed6X(j4n, function (r4v, J4N) {
            var bc5h = bN5S[J4N] || {};
            NEJ.X(bc5h, r4v);
            bN5S[J4N] = bc5h
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        ba4e = c4g("nej.h");
    ba4e.Ze0x = function (J4N) {
        return localStorage.getItem(J4N)
    };
    ba4e.Zf0x = function (J4N, A4E) {
        localStorage.setItem(J4N, A4E)
    };
    ba4e.boA3x = function (J4N) {
        localStorage.removeItem(J4N)
    };
    ba4e.boB3x = function () {
        localStorage.clear()
    };
    ba4e.ckA3x = function () {
        var m4q = [];
        for (var i = 0, l = localStorage.length; i < l; i++)
            m4q.push(localStorage.key(i));
        return m4q
    };
    ba4e.boH4L = function () {
        (document.onstorageready || bm5r)()
    };
    ba4e.boI4M = function () {
        return !0
    }
})();
(function () {
    var c4g = NEJ.P,
        M4Q = c4g("nej.p"),
        iC8u = c4g("nej.c"),
        ba4e = c4g("nej.h"),
        rQ1x;
    if (M4Q.mq9h.trident || !!window.localStorage)
        return;
    var ckz3x = function () {
        var qM0x,
            eZ6T;
        var bmd3x = function () {
            qM0x = document.createElement("div");
            NEJ.X(qM0x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", qM0x);
            qM0x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iC8u.x4B("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Nv7o = function () {
            eZ6T = window.clearTimeout(eZ6T);
            var hb7U = qM0x.getElementsByTagName("object")[0];
            if (!!hb7U.initStorage) {
                delete qM0x;
                rQ1x = hb7U;
                rQ1x.initStorage("nej-storage");
                (document.onstorageready || bm5r)();
                return
            }
            eZ6T = window.setTimeout(Nv7o, 500)
        };
        return function () {
            if (!!rQ1x)
                return;
            bmd3x();
            Nv7o()
        }
    }
    ();
    ba4e.Ze0x = ba4e.Ze0x.ef6Z(function (d4h) {
        d4h.stopped = !0;
        if (!rQ1x)
            return;
        d4h.value = rQ1x.getItem(d4h.args[0])
    });
    ba4e.Zf0x = ba4e.Zf0x.ef6Z(function (d4h) {
        d4h.stopped = !0;
        if (!rQ1x)
            return;
        var bg5l = d4h.args;
        rQ1x.setItem(bg5l[0], bg5l[1])
    });
    ba4e.boA3x = ba4e.boA3x.ef6Z(function (d4h) {
        d4h.stopped = !0;
        if (!rQ1x)
            return;
        rQ1x.removeItem(d4h.args[0])
    });
    ba4e.boB3x = ba4e.boB3x.ef6Z(function (d4h) {
        d4h.stopped = !0;
        if (!!rQ1x)
            rQ1x.clear()
    });
    ba4e.boH4L = ba4e.boH4L.ef6Z(function (d4h) {
        d4h.stopped = !0;
        ckz3x()
    });
    ba4e.boI4M = ba4e.boI4M.ef6Z(function (d4h) {
        d4h.stopped = !0;
        d4h.value = !!rQ1x
    })
})();
(function () {
    var c4g = NEJ.P,
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        ba4e = c4g("nej.h"),
        v4z = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        R4V = {};
    v4z.uk2x = function (J4N, A4E) {
        var bKD8v = JSON.stringify(A4E);
        try {
            ba4e.Zf0x(J4N, bKD8v)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bKD8v != ba4e.Ze0x(J4N))
            R4V[J4N] = A4E;
        return this
    };
    v4z.sX1x = function (J4N) {
        var j4n = JSON.parse(ba4e.Ze0x(J4N) || "null");
        return j4n == null ? R4V[J4N] : j4n
    };
    v4z.bKC8u = function (J4N, A4E) {
        var j4n = v4z.sX1x(J4N);
        if (j4n == null) {
            j4n = A4E;
            v4z.uk2x(J4N, j4n)
        }
        return j4n
    };
    v4z.JT6N = function (J4N) {
        delete R4V[J4N];
        ba4e.boA3x(J4N);
        return this
    };
    v4z.ctG5L = function () {
        var bpv4z = function (r4v, J4N, bv5A) {
            delete bv5A[J4N]
        };
        return function () {
            k4o.ed6X(R4V, bpv4z);
            ba4e.boB3x();
            return this
        }
    }
    ();
    v4z.ctH5M = function (m4q) {
        m4q = m4q || {};
        k4o.be5j(ba4e.ckA3x(), function (J4N) {
            m4q[J4N] = v4z.sX1x(J4N)
        });
        return m4q
    };
    H4L.ft7m.B4F({
        element: document,
        event: "storageready",
        oneventadd: function () {
            if (ba4e.boI4M()) {
                document.onstorageready()
            }
        }
    });
    var ckr3x = function () {
        var ckn3x = function (A4E, J4N, bv5A) {
            ba4e.Zf0x(J4N, JSON.stringify(A4E));
            delete bv5A[J4N]
        };
        return function () {
            k4o.ed6X(R4V, ckn3x)
        }
    }
    ();
    h4l.q4u(document, "storageready", ckr3x);
    ba4e.boH4L()
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ut"),
        Jj6d;
    if (!!M4Q.bqb4f)
        return;
    M4Q.bqb4f = NEJ.C();
    Jj6d = M4Q.bqb4f.O4S(M4Q.cz5E);
    Jj6d.cl5q = function () {
        var fX7Q = +(new Date),
            mv9m = "dat-" + fX7Q;
        return function () {
            this.cs5x();
            var R4V = this.constructor[mv9m];
            if (!R4V) {
                R4V = {};
                this.constructor[mv9m] = R4V
            }
            this.P4T = R4V
        }
    }
    ();
    Jj6d.x4B = function (J4N) {
        return this.P4T[J4N]
    };
    Jj6d.on0x = function (J4N, A4E) {
        var lv9m = this.P4T[J4N];
        this.P4T[J4N] = A4E;
        h4l.z4D(localCache, "cachechange", {
            key: J4N,
            type: "set",
            oldValue: lv9m,
            newValue: A4E
        });
        return this
    };
    Jj6d.cF6z = function (J4N) {
        var lv9m = this.P4T[J4N];
        k4o.YM9D(this.P4T, J4N);
        h4l.z4D(localCache, "cachechange", {
            key: J4N,
            type: "delete",
            oldValue: lv9m,
            newValue: undefined
        });
        return lv9m
    };
    Jj6d.ZF0x = function (ED4H) {
        return NEJ.Q(this.P4T, ED4H)
    };
    window.localCache = M4Q.bqb4f.B4F();
    M4Q.ft7m.B4F({
        element: localCache,
        event: "cachechange"
    })
})();
(function () {
    var c4g = NEJ.P,
        eU6O = NEJ.R,
        bm5r = NEJ.F,
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        M4Q = c4g("nej.ut"),
        mv9m = "dat-" + +(new Date),
        mk9b;
    if (!!M4Q.bqI4M)
        return;
    M4Q.bqI4M = NEJ.C();
    mk9b = M4Q.bqI4M.O4S(M4Q.cz5E);
    mk9b.cl5q = function () {
        this.cs5x();
        this.P4T = this.constructor[mv9m];
        if (!this.P4T) {
            this.P4T = {};
            this.P4T[mv9m + "-l"] = {};
            this.constructor[mv9m] = this.P4T
        }
    };
    mk9b.qk0x = function (J4N) {
        return this.P4T[J4N]
    };
    mk9b.oE0x = function (J4N, A4E) {
        this.P4T[J4N] = A4E
    };
    mk9b.kw9n = function (J4N, ku9l) {
        var j4n = this.qk0x(J4N);
        if (j4n == null) {
            j4n = ku9l;
            this.oE0x(J4N, j4n)
        }
        return j4n
    };
    mk9b.ckk3x = function (J4N) {
        if (J4N != null) {
            delete this.P4T[J4N];
            return
        }
        k4o.ed6X(this.P4T, function (r4v, J4N) {
            if (J4N == mv9m + "-l")
                return;
            this.ckk3x(J4N)
        }, this)
    };
    mk9b.ctK5P = function (J4N) {
        if (!!v4z.JT6N)
            return v4z.JT6N(J4N)
    };
    mk9b.cki3x = function (J4N) {
        if (!!v4z.sX1x)
            return v4z.sX1x(J4N)
    };
    mk9b.ckf3x = function (J4N, A4E) {
        if (!!v4z.uk2x)
            v4z.uk2x(J4N, A4E)
    };
    mk9b.EB4F = function (J4N, ku9l) {
        var j4n = this.JI6C(J4N);
        if (j4n == null) {
            j4n = ku9l;
            this.uf2x(J4N, j4n)
        }
        return j4n
    };
    mk9b.JI6C = function (J4N) {
        var j4n = this.qk0x(J4N);
        if (j4n != null)
            return j4n;
        j4n = this.cki3x(J4N);
        if (j4n != null)
            this.oE0x(J4N, j4n);
        return j4n
    };
    mk9b.uf2x = function (J4N, A4E) {
        this.ckf3x(J4N, A4E);
        this.oE0x(J4N, A4E)
    };
    mk9b.bKt8l = function (J4N) {
        if (J4N != null) {
            delete this.P4T[J4N];
            if (!!v4z.JT6N)
                v4z.JT6N(J4N);
            return
        }
        k4o.ed6X(this.P4T, function (r4v, J4N) {
            if (J4N == mv9m + "-l")
                return;
            this.bKt8l(J4N)
        }, this)
    };
    mk9b.ctL5Q = function () {
        this.bKt8l();
        return this
    };
    mk9b.ctM5R = function (J4N) {
        var j4n = this.P4T[mv9m + "-l"];
        delete j4n[J4N]
    };
    mk9b.baR0x = function (J4N) {
        var j4n = this.P4T[mv9m + "-l"],
            bg5l = eU6O.slice.call(arguments, 1);
        k4o.be5j(j4n[J4N], function (dr6l) {
            try {
                dr6l.apply(null, bg5l)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j4n[J4N]
    };
    mk9b.baS0x = function (J4N, dr6l) {
        dr6l = dr6l || bm5r;
        var i4m = this.P4T[mv9m + "-l"][J4N];
        if (!i4m) {
            i4m = [dr6l];
            this.P4T[mv9m + "-l"][J4N] = i4m;
            return !1
        }
        i4m.push(dr6l);
        return !0
    };
    mk9b.cjZ3x = function (i4m, bj5o, fY7R) {
        if (!i4m)
            return !1;
        bj5o = parseInt(bj5o) || 0;
        fY7R = parseInt(fY7R) || 0;
        if (!fY7R) {
            if (!i4m.loaded)
                return !1;
            fY7R = i4m.length
        }
        if (!!i4m.loaded)
            fY7R = Math.min(fY7R, i4m.length - bj5o);
        for (var i = 0; i < fY7R; i++)
            if (!i4m[bj5o + i])
                return !1;
        return !0
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ut"),
        b4f,
        K4O;
    if (!!M4Q.Jp6j)
        return;
    M4Q.Jp6j = NEJ.C();
    b4f = M4Q.Jp6j.O4S(M4Q.bqI4M);
    K4O = M4Q.Jp6j.cg5l;
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.uK2x = e4i.key || "id";
        this.bb4f = e4i.data || Y4c;
        this.cjY3x = !!e4i.autogc;
        this.cjW3x(e4i.id)
    };
    b4f.bD5I = function () {
        this.bH5M();
        if (!!this.dL6F) {
            this.bKq8i()
        }
    };
    b4f.cjW3x = function (C4G) {
        var R4V;
        if (!!C4G) {
            R4V = this.P4T[C4G];
            if (!R4V) {
                R4V = {};
                this.P4T[C4G] = R4V
            }
        }
        R4V = R4V || this.P4T;
        R4V.hash = R4V.hash || {};
        this.Ju6o = R4V
    };
    b4f.bKq8i = function () {
        this.dL6F = window.clearTimeout(this.dL6F);
        var bv5A = {};
        k4o.ed6X(this.Ju6o, function (i4m, J4N) {
            if (J4N == "hash")
                return;
            if (!k4o.el6f(i4m))
                return;
            k4o.be5j(i4m, function (r4v) {
                if (!r4v)
                    return;
                bv5A[r4v[this.uK2x]] = !0
            }, this)
        }, this);
        k4o.ed6X(this.ZW0x(), function (r4v, C4G, dG6A) {
            if (!bv5A[C4G]) {
                delete dG6A[C4G]
            }
        })
    };
    b4f.cjT3x = function () {
        if (!!this.dL6F) {
            this.dL6F = window.clearTimeout(this.dL6F)
        }
        this.dL6F = window.setTimeout(this.bKq8i.g4k(this), 150)
    };
    b4f.Aa3x = function (r4v, ZS0x) {
        r4v = this.bKp8h(r4v, ZS0x) || r4v;
        if (!r4v)
            return null;
        var J4N = r4v[this.uK2x];
        if (J4N != null) {
            var hx7q = this.ZW0x()[J4N];
            if (!!hx7q)
                r4v = NEJ.X(hx7q, r4v);
            this.ZW0x()[J4N] = r4v
        }
        delete r4v.bKo8g;
        return r4v
    };
    b4f.bKp8h = bm5r;
    b4f.bbR1x = function (J4N, r4v) {
        if (!r4v)
            return;
        if (!k4o.el6f(r4v)) {
            var i4m = this.gN7G(J4N),
                r4v = this.Aa3x(r4v, J4N);
            if (!!r4v)
                i4m.unshift(r4v);
            return
        }
        k4o.mu9l(r4v, this.bbR1x.g4k(this, J4N))
    };
    b4f.JG6A = function (J4N, co5t) {
        var i4m = this.gN7G(J4N);
        i4m.length = Math.max(i4m.length, co5t);
        this.bcn1x(J4N);
        return this
    };
    b4f.jG9x = function (J4N) {
        return this.gN7G(J4N).length
    };
    b4f.bcn1x = function (J4N, nV0x) {
        this.gN7G(J4N).loaded = nV0x != !1;
        return this
    };
    b4f.ZK0x = function (J4N) {
        return !!this.gN7G(J4N).loaded
    };
    b4f.rr0x = function (J4N, i4m) {
        this.tA1x(J4N);
        this.bcH1x({
            key: J4N,
            offset: 0,
            limit: i4m.length + 1
        }, {
            list: i4m,
            total: i4m.length
        })
    };
    b4f.gN7G = function () {
        var Ez4D = function (J4N) {
            return (J4N || "") + (!J4N ? "" : "-") + "list"
        };
        return function (J4N) {
            var J4N = Ez4D(J4N),
                i4m = this.Ju6o[J4N];
            if (!i4m) {
                i4m = [];
                this.Ju6o[J4N] = i4m
            }
            return i4m
        }
    }
    ();
    b4f.ZW0x = function () {
        var dG6A = this.Ju6o.hash;
        if (!dG6A) {
            dG6A = {};
            this.Ju6o.hash = dG6A
        }
        return dG6A
    };
    b4f.bcJ1x = function () {
        var Ez4D = function (e4i) {
            return "r-" + e4i.key
        };
        return function (e4i) {
            var hU8M = NEJ.X({}, e4i),
                nb9S = Ez4D(hU8M);
            if (!this.baS0x(nb9S, this.z4D.g4k(this))) {
                hU8M.rkey = nb9S;
                hU8M.onload = this.cjM3x.g4k(this, hU8M);
                this.z4D("dopullrefresh", hU8M)
            }
            return this
        }
    }
    ();
    b4f.cjM3x = function (e4i, i4m) {
        this.bbR1x(e4i.key, i4m);
        this.baR0x(e4i.rkey, "onpullrefresh", e4i)
    };
    b4f.nQ0x = function () {
        var Ez4D = function (e4i) {
            return "r-" + e4i.key + "-" + e4i.offset + "-" + e4i.limit
        };
        return function (e4i) {
            e4i = e4i || Y4c;
            var hU8M = {
                    key: "" + e4i.key || "",
                    ext: e4i.ext || null,
                    data: e4i.data || null,
                    offset: parseInt(e4i.offset) || 0,
                    limit: parseInt(e4i.limit) || 0
                },
                i4m = this.gN7G(hU8M.key);
            if (this.cjZ3x(i4m, hU8M.offset, hU8M.limit)) {
                this.z4D("onlistload", hU8M);
                return this
            }
            var nb9S = Ez4D(hU8M);
            if (!this.baS0x(nb9S, this.z4D.g4k(this))) {
                hU8M.rkey = nb9S;
                hU8M.onload = this.bcH1x.g4k(this, hU8M);
                this.z4D("doloadlist", hU8M)
            }
            return this
        }
    }
    ();
    b4f.bcH1x = function () {
        var AS4W = function (r4v, s4w, i4m) {
            if (!!r4v) {
                return !0
            }
            i4m.splice(s4w, 1)
        };
        return function (e4i, m4q) {
            e4i = e4i || Y4c;
            var J4N = e4i.key,
                bj5o = e4i.offset,
                bKm8e = this.gN7G(J4N);
            var i4m = m4q || [];
            if (!k4o.el6f(i4m)) {
                i4m = m4q.result || m4q.list || [];
                var co5t = parseInt(m4q.total);
                if (!isNaN(co5t) || co5t > i4m.length) {
                    this.JG6A(J4N, co5t)
                }
            }
            k4o.be5j(i4m, function (r4v, s4w) {
                bKm8e[bj5o + s4w] = this.Aa3x(r4v, J4N)
            }, this);
            if (i4m.length < e4i.limit) {
                this.bcn1x(J4N);
                k4o.mu9l(bKm8e, AS4W)
            }
            this.baR0x(e4i.rkey, "onlistload", e4i)
        }
    }
    ();
    b4f.tA1x = function () {
        var AS4W = function (r4v, s4w, i4m) {
            i4m.splice(s4w, 1)
        };
        return function (J4N) {
            var i4m = this.gN7G(J4N);
            k4o.mu9l(i4m, AS4W);
            this.bcn1x(J4N, !1);
            if (this.cjY3x) {
                this.cjT3x()
            }
            return this
        }
    }
    ();
    b4f.bKl8d = function (r4v, ZS0x) {
        return !r4v.bKo8g
    };
    b4f.eh6b = function (C4G) {
        return this.ZW0x()[C4G]
    };
    b4f.ctQ6K = function (C4G) {
        var r4v = this.eh6b(C4G);
        if (!!r4v)
            r4v.bKo8g = !0
    };
    b4f.ZD0x = function () {
        var Ez4D = function (e4i) {
            return "r-" + e4i.key + "-" + e4i.id
        };
        return function (e4i) {
            e4i = e4i || Y4c;
            var C4G = e4i[this.uK2x],
                hU8M = {
                    id: C4G,
                    ext: e4i.ext,
                    data: e4i.data || {},
                    key: "" + e4i.key || ""
                };
            r4v = this.eh6b(C4G);
            hU8M.data[this.uK2x] = C4G;
            if (!!r4v && this.bKl8d(r4v, hU8M.key)) {
                this.z4D("onitemload", hU8M);
                return this
            }
            var nb9S = Ez4D(hU8M);
            if (!this.baS0x(nb9S, this.z4D.g4k(this))) {
                hU8M.rkey = nb9S;
                hU8M.onload = this.cjG3x.g4k(this, hU8M);
                this.z4D("doloaditem", hU8M)
            }
            return this
        }
    }
    ();
    b4f.cjG3x = function (e4i, r4v) {
        e4i = e4i || Y4c;
        this.Aa3x(r4v, e4i.key);
        this.baR0x(e4i.rkey, "onitemload", e4i)
    };
    b4f.iG8y = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.xN3x.g4k(this, e4i);
        this.z4D("doadditem", e4i)
    };
    b4f.xN3x = function (e4i, r4v) {
        var J4N = e4i.key;
        r4v = this.Aa3x(r4v, J4N);
        if (!!r4v) {
            var ey6s = 0,
                i4m = this.gN7G(J4N);
            if (!e4i.push) {
                ey6s = -1;
                var bj5o = e4i.offset || 0;
                i4m.splice(bj5o, 0, r4v)
            } else if (i4m.loaded) {
                ey6s = 1;
                i4m.push(r4v)
            } else {
                i4m.length++
            }
        }
        var d4h = {
            key: J4N,
            flag: ey6s,
            data: r4v,
            action: "add",
            ext: e4i.ext
        };
        this.z4D("onitemadd", d4h);
        return d4h
    };
    b4f.Ji6c = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.bdC1x.g4k(this, e4i);
        this.z4D("dodeleteitem", e4i)
    };
    b4f.bdC1x = function (e4i, bKk8c) {
        var r4v,
            J4N = e4i.key;
        if (!!bKk8c) {
            r4v = this.eh6b(e4i.id) || null;
            var C4G = e4i.id,
                cjE3x = this.uK2x,
                i4m = this.gN7G(J4N),
                s4w = k4o.cV6P(i4m, function (hx7q) {
                    return !!hx7q && hx7q[cjE3x] == C4G
                });
            if (s4w >= 0)
                i4m.splice(s4w, 1)
        }
        var d4h = {
            key: J4N,
            data: r4v,
            action: "delete",
            ext: e4i.ext
        };
        this.z4D("onitemdelete", d4h);
        return d4h
    };
    b4f.Zy0x = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.cjD3x.g4k(this, e4i);
        this.z4D("doupdateitem", e4i)
    };
    b4f.cjD3x = function (e4i, r4v) {
        var J4N = e4i.key;
        if (!!r4v)
            r4v = this.Aa3x(r4v, J4N);
        var d4h = {
            key: J4N,
            data: r4v,
            action: "update",
            ext: e4i.ext
        };
        this.z4D("onitemupdate", d4h);
        return d4h
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ut"),
        b4f;
    if (!!M4Q.bdP1x)
        return;
    M4Q.bdP1x = NEJ.C();
    b4f = M4Q.bdP1x.O4S(M4Q.Jp6j);
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.bli3x({
            doloadlist: this.Zx0x.g4k(this),
            doloaditem: this.bdW1x.g4k(this),
            doadditem: this.bKj8b.g4k(this),
            dodeleteitem: this.Zw0x.g4k(this),
            doupdateitem: this.Zr0x.g4k(this),
            dopullrefresh: this.bKi8a.g4k(this)
        })
    };
    b4f.Zx0x = bm5r;
    b4f.bKi8a = bm5r;
    b4f.bdW1x = bm5r;
    b4f.bKj8b = bm5r;
    b4f.Zw0x = bm5r;
    b4f.Zr0x = bm5r
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        b4f,
        K4O;
    p4t.gZ7S = NEJ.C();
    b4f = p4t.gZ7S.O4S(H4L.bdP1x);
    b4f.ck5p = function () {
        var Kd6X = location.protocol + "//" + location.host;
        var cjA3x = function (bs5x, j4n) {
            var bv5A = {
                conf: {},
                data: {},
                urls: []
            };
            k4o.be5j(bs5x, function (J4N, s4w, i4m) {
                var bc5h = p4t.x4B(J4N);
                if (!bc5h)
                    return;
                var ber1x = bKh8Z(bc5h.url, j4n[J4N]);
                bv5A.urls.push(ber1x);
                bv5A.conf[ber1x] = bc5h;
                bv5A.data[ber1x] = JSON.stringify(j4n[J4N] == null ? "" : j4n[J4N])
            });
            return bv5A
        };
        var bKh8Z = function (V4Z, j4n) {
            return V4Z.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j4n[$2] || $1
            })
        };
        var bKg8Y = function (bc5h, e4i, d4h) {
            h4l.z4D(window, "requesterror", d4h);
            if (!!d4h.stopped)
                return;
            var HF5K = bc5h.onerror || e4i.onerror;
            if (k4o.fe6Y(HF5K)) {
                this.z4D(HF5K, d4h, e4i)
            } else {
                (HF5K || bm5r).call(this, d4h, e4i)
            }
            var d4h = {
                result: d4h,
                option: e4i
            };
            this.z4D("onerror", d4h);
            if (!d4h.stopped)
                (bc5h.onmessage || bm5r).call(this, d4h.result.code, d4h.result)
        };
        var bKf8X = function (Q4U, bc5h, e4i) {
            var m4q = Q4U;
            if (k4o.gf7Y(bc5h.format)) {
                m4q = bc5h.format.call(this, Q4U, e4i)
            }
            return m4q
        };
        var wJ2x = function (Q4U, bc5h, e4i, tK1x) {
            if (k4o.gf7Y(bc5h.beforeload)) {
                bc5h.beforeload.call(this, Q4U, e4i, bc5h)
            }
            if (Q4U && Q4U.code != null && Q4U.code != 200) {
                bKg8Y.call(this, bc5h, e4i, {
                    key: e4i.key,
                    code: Q4U.code,
                    message: Q4U.message || "",
                    captchaId: Q4U.captchaId,
                    ext: Q4U
                });
                return
            }
            var m4q = Q4U;
            if (!tK1x) {
                m4q = bKf8X.call(this, Q4U, bc5h, e4i)
            } else if (k4o.gf7Y(bc5h.format)) {
                var beN1x = [];
                k4o.be5j(tK1x.urls, function (V4Z) {
                    beN1x.push(bKf8X.call(this, Q4U[V4Z], tK1x.conf[V4Z], e4i))
                }, this);
                beN1x.push(e4i);
                m4q = bc5h.format.apply(this, beN1x)
            }
            var sQ1x = bc5h.onload || e4i.onload,
                bKe8W = bc5h.finaly || e4i.finaly || bm5r;
            if (k4o.fe6Y(sQ1x)) {
                bKe8W.call(this, this.z4D(sQ1x, m4q), e4i)
            } else {
                bKe8W.call(this, (sQ1x || bm5r).call(this, m4q), e4i)
            }
        };
        var zc3x = function (bc5h, e4i, bQ5V) {
            bKg8Y.call(this, bc5h, e4i, {
                key: e4i.key,
                code: bQ5V.code || -1,
                message: bQ5V.message || ""
            })
        };
        return function (bc5h, e4i) {
            if (k4o.fe6Y(bc5h)) {
                bc5h = p4t.x4B(bc5h)
            }
            delete e4i.value;
            (bc5h.filter || bm5r).call(this, e4i, bc5h);
            var Q4U = e4i.value;
            if (!!Q4U) {
                wJ2x.call(this, Q4U, bc5h, e4i);
                return
            }
            var V4Z,
                j4n = e4i.data || Y4c,
                xH3x = {
                    cookie: !0,
                    type: bc5h.rtype || "json",
                    method: bc5h.type || "POST",
                    onerror: zc3x.g4k(this, bc5h, e4i),
                    noescape: bc5h.noescape
                };
            if (k4o.el6f(bc5h.url)) {
                var tK1x = cjA3x(bc5h.url, j4n);
                V4Z = Kd6X + "/api/batch";
                xH3x.data = k4o.df6Z(tK1x.data);
                xH3x.onload = wJ2x.dW6Q(this, bc5h, e4i, tK1x);
                xH3x.headers = {
                    "batch-method": "POST"
                };
                delete tK1x.data
            } else {
                var lf9W = bc5h.url.indexOf(":") < 0 ? Kd6X : "";
                V4Z = bKh8Z(lf9W + bc5h.url, j4n);
                xH3x.data = k4o.df6Z(e4i.data);
                xH3x.onload = wJ2x.dW6Q(this, bc5h, e4i)
            }
            if (xH3x.method == "GET")
                xH3x.query = xH3x.data;
            return v4z.bp5u(V4Z, xH3x)
        }
    }
    ();
    b4f.Er4v = function () {
        var fZ7S = /^get|list|pull$/i;
        return function (bKc8U, e4i) {
            var J4N = e4i.key,
                bc5h = p4t.x4B(J4N.split("-")[0] + "-" + bKc8U);
            if (fZ7S.test(bKc8U) && J4N.indexOf("post-") < 0)
                bc5h.type = "GET";
            this.ck5p(bc5h, e4i)
        }
    }
    ();
    b4f.ctR6L = function (J4N, i4m) {
        var co5t = i4m.length;
        this.bcH1x({
            key: J4N,
            offset: 0,
            limit: co5t + 1
        }, {
            list: i4m,
            total: co5t
        })
    };
    b4f.Zx0x = function (e4i) {
        this.Er4v("list", e4i)
    };
    b4f.bdW1x = function (e4i) {
        this.Er4v("get", e4i)
    };
    b4f.bKi8a = function (e4i) {
        this.Er4v("pull", e4i)
    };
    b4f.bKj8b = function (e4i) {
        this.Er4v("add", e4i)
    };
    b4f.Zw0x = function (e4i) {
        this.Er4v("del", e4i)
    };
    b4f.Zr0x = function (e4i) {
        this.Er4v("update", e4i)
    };
    b4f.cjk3x = function (r4v) {
        this.Aa3x(r4v)
    };
    H4L.ft7m.B4F({
        element: window,
        event: "requesterror"
    })
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        p4t = c4g("nm.d"),
        bfF2x = {},
        b4f,
        K4O;
    var sN1x = function (m4q, e4i) {
        m4q.conf = e4i.conf;
        return m4q
    };
    p4t.eQ6K({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function (Q4U, e4i) {
                return sN1x({
                    mv: Q4U
                }, e4i)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function (m4q, e4i) {
                if (!!m4q.songs && m4q.songs.length > 0)
                    m4q.song = m4q.songs[0];
                else
                    m4q.song = bfF2x;
                delete m4q.songs;
                return sN1x(m4q, e4i)
            },
            filter: function (e4i) {
                e4i.data.ids = "[" + e4i.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: sN1x
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: sN1x
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function (m4q, e4i) {
                m4q.playlist = m4q.result;
                delete m4q.result;
                return sN1x(m4q, e4i)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: sN1x
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: sN1x
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: sN1x
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e4i) {
                var i4m = e4i.data.id.split("-");
                e4i.data.radioId = i4m[0];
                e4i.data.asc = i4m[1] == 2;
                e4i.data.limit = 1e3;
                delete e4i.data.id
            },
            format: function (Q4U, e4i) {
                var cjj3x = {
                    id: e4i.data.radioId,
                    programs: Q4U.programs
                };
                return sN1x({
                    djradio: cjj3x
                }, e4i)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: sN1x
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            },
            format: function (m4q, e4i) {
                var uC2x = {
                    lyric: "",
                    nolyric: true
                };
                if (m4q.code == 200 && m4q.lrc && m4q.lrc.lyric) {
                    uC2x.lyric = m4q.lrc.lyric;
                    uC2x.nolyric = false
                } else {
                    uC2x.nolyric = true
                }
                return sN1x({
                    lyric: uC2x
                }, e4i)
            }
        }
    });
    p4t.uJ2x = NEJ.C();
    b4f = p4t.uJ2x.O4S(p4t.gZ7S);
    b4f.cji3x = function (t4x, cG6A) {
        return this.qk0x(this.Zh0x(t4x, cG6A))
    };
    b4f.Kl6f = function (t4x, cG6A, e4i) {
        e4i = e4i || {};
        var j4n = this.qk0x(this.Zh0x(t4x, cG6A));
        if (j4n && (t4x != 13 && t4x != 19 || e4i.conf && e4i.conf.useCache)) {
            this.z4D("onresourceload", t4x, cG6A, j4n, e4i.conf);
            return
        }
        e4i.data = {
            id: cG6A
        };
        e4i.onload = this.cjh3x.g4k(this, t4x, cG6A);
        e4i.onerror = this.cjg3x.g4k(this, t4x, cG6A);
        this.ck5p("res-" + this.AF4J(t4x) + "-get", e4i)
    };
    b4f.cjh3x = function (t4x, cG6A, m4q) {
        var j4n = m4q[this.AF4J(t4x)];
        this.oE0x(this.Zh0x(t4x, cG6A), j4n);
        this.z4D("onresourceload", t4x, cG6A, j4n, m4q.conf)
    };
    b4f.cjg3x = function (t4x, cG6A, m4q, e4i) {
        if (m4q.code != 404) {
            this.z4D("onresourceerror", t4x, cG6A, m4q.code);
            return
        }
        this.oE0x(this.Zh0x(t4x, cG6A), bfF2x);
        this.z4D("onresourceload", t4x, cG6A, bfF2x, e4i.conf)
    };
    b4f.ctS6M = function (t4x, e4i) {
        this.ck5p("res-" + this.AF4J(t4x) + "-play", e4i)
    };
    b4f.Zh0x = function (t4x, cG6A) {
        return "res-" + this.AF4J(t4x) + "-" + cG6A
    };
    b4f.AF4J = function (t4x) {
        var bv5A = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bv5A[t4x]
    };
    p4t.uJ2x.IM5R = function (t4x, cG6A) {
        if (!this.eJ6D)
            this.eJ6D = p4t.uJ2x.B4F({});
        return this.eJ6D.cji3x(t4x, cG6A)
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        p4t = c4g("nm.d"),
        bgw2x = /^[1-9][0-9]*$/,
        b4f,
        K4O;
    var LOCAL_LOG_KEY = "local-log";
    p4t.eQ6K({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    p4t.hK8C = NEJ.C();
    b4f = p4t.hK8C.O4S(p4t.gZ7S);
    b4f.gg7Z = function (W4a, bc5h) {
        if (!W4a || !bc5h)
            return;
        if (k4o.fe6Y(bc5h)) {
            try {
                bc5h = JSON.parse(bc5h)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a3x)
                }
            }
        }
        if (!k4o.kg9X(bc5h))
            return;
        this.ck5p("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: W4a,
                    json: bc5h
                }
                ])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + W4a + ", json=" + JSON.stringify(bc5h))
        }
    };
    b4f.Zd0x = function (mD9u) {
        if (!k4o.el6f(mD9u))
            return;
        this.ck5p("bi-batch-log", {
            data: {
                logs: JSON.stringify(mD9u)
            }
        })
    };
    b4f.bKb8T = function (bc5h) {
        if (!bc5h || !bc5h.type || !bc5h.rid)
            return;
        var mE9v = bc5h.type;
        if (bgw2x.test(mE9v)) {
            mE9v = this.AF4J(mE9v)
        }
        if (!mE9v)
            return;
        if (mE9v == "playlist")
            mE9v = "list";
        this.gg7Z("search", {
            type: mE9v,
            id: bc5h.rid || null,
            keyword: bc5h.keyword || null
        })
    };
    b4f.Ko6i = function () {
        var ciT3x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bc5h) {
            if (!bc5h || !bc5h.type || !bc5h.rid)
                return;
            if (bc5h.play === undefined)
                bc5h.play = true;
            var mE9v = bc5h.type;
            if (bgw2x.test(mE9v)) {
                mE9v = this.AF4J(mE9v)
            }
            if (!mE9v)
                return;
            if (mE9v == "playlist")
                mE9v = "list";
            var Q4U = {
                id: bc5h.rid,
                type: mE9v
            };
            if (mE9v == "song" && bc5h.source) {
                Q4U.source = this.bJU8M(bc5h.source);
                if (!!bc5h.sourceid)
                    Q4U.sourceid = bc5h.sourceid
            }
            this.gg7Z(!bc5h.play ? "addto" : "play", Q4U);
            if (mE9v == "song" && bc5h.hash && bc5h.hash.match(ciT3x)) {
                this.gg7Z(!bc5h.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }
    ();
    b4f.bhf2x = function (C4G, bB5G, dK6E, El4p) {
        var Q4U = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var ciP3x = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        Q4U.id = C4G;
        Q4U.time = Math.round(bB5G);
        Q4U.end = k4o.fe6Y(El4p) ? El4p : ciP3x[El4p] || "";
        if (dK6E && dK6E.fid) {
            Q4U.source = this.bJU8M(dK6E.fid);
            Q4U.sourceId = dK6E.fdata
        }
        this.gg7Z("play", Q4U)
    };
    b4f.bJR8J = function (t4x, cG6A) {
        if (!t4x || !cG6A)
            return;
        if (bgw2x.test(t4x))
            t4x = this.AF4J(t4x);
        if (t4x != "playlist" && t4x != "dj")
            return;
        var bc5h = p4t.x4B("plus-" + t4x + "-count");
        if (!bc5h)
            return !1;
        this.ck5p(bc5h, {
            data: {
                id: cG6A
            }
        });
        var R4V = this.kw9n("play-hist-" + t4x, []);
        if (k4o.cV6P(R4V, cG6A) < 0) {
            R4V.push(cG6A);
            return !0
        }
        return !1
    };
    b4f.AF4J = function (t4x) {
        var bv5A = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bv5A[t4x]
    };
    b4f.bJU8M = function (GL5Q) {
        var bv5A = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bv5A[GL5Q]
    };
    b4f.ciK3x = function (gO7H) {
        var mD9u = this.EB4F(LOCAL_LOG_KEY, []);
        mD9u.unshift(gO7H);
        if (mD9u.length > 200) {
            mD9u.length = 200
        }
        this.uf2x(LOCAL_LOG_KEY, mD9u)
    };
    b4f.ciG2x = function () {
        return this.JI6C(LOCAL_LOG_KEY)
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d");
    if (!p4t.uJ2x)
        return;
    var R4V = p4t.uJ2x.B4F({
        onresourceload: ciE2x
    });
    var xE3x = p4t.hK8C.fV7O();

    function ciE2x(t4x, cG6A, j4n, bc5h) {
        var i4m = [];
        switch (parseInt(t4x)) {
            case 2:
                i4m = j4n;
                break;
            case 13:
                i4m = j4n.tracks;
                break;
            case 18:
                i4m.push(j4n);
                break;
            case 19:
                i4m = j4n.songs;
                break;
            case 21:
                if (j4n.mp && j4n.mp.fee && j4n.mp.pl <= 0) {
                    l4p.bhP2x(j4n.data.id, j4n.mp.fee);
                    return
                }
                break
        }
        if (l4p.HW5b(i4m, true, null, t4x == 19 ? {
                source: "album",
                sourceid: cG6A
            }
            : null) == 0) {
            return
        }
        l4p.fc6W({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bc5h.message
        })
    }

    function ciC2x(d4h, qp0x, xD3x, ff6Z) {
        ff6Z = ff6Z || {};
        if (d4h.action == "ok") {
            if (xD3x) {
                location.dispatch2("/payfee?songId=" + xD3x)
            } else {
                location.dispatch2("/payfee?fee=" + qp0x || 1)
            }
            xE3x.gg7Z("click", {
                type: "tobuyvip",
                name: "box",
                source: ff6Z.source || "song",
                sourceid: ff6Z.sourceid || xD3x || 0
            })
        } else if (d4h.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + xD3x);
            xE3x.gg7Z("click", {
                type: "tobuyone",
                name: "box",
                source: ff6Z.source || "song",
                sourceid: ff6Z.sourceid || xD3x || 0
            })
        }
    }

    function Kt6n(bF5K) {
        l4p.fc6W({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bF5K,
            btntxt: "鐭ラ亾浜�"
        })
    }

    function Ku6o(bF5K, Q4U) {
        Kt6n((Q4U || Y4c).toast || bF5K)
    }

    l4p.hR8J = function (bF5K, C4G, t4x, ciA2x, bf5k) {
        bF5K = bF5K || "鐢变簬鐗堟潈淇濇姢锛屾偍鎵€鍦ㄧ殑鍦板尯鏆傛椂鏃犳硶浣跨敤銆�";
        if (ciA2x && bf5k && bf5k.privilege && bf5k.privilege.toast) {
            v4z.bp5u("/api/song/toast", {
                query: {
                    id: bf5k.id
                },
                type: "json",
                onload: Ku6o.g4k(this, bF5K),
                onerror: Ku6o.g4k(this, bF5K)
            })
        } else if (C4G && t4x) {
            R4V.Kl6f(t4x, C4G, {
                conf: {
                    message: bF5K,
                    useCache: t4x != 18
                }
            })
        } else {
            Kt6n(bF5K)
        }
    };
    l4p.sv1x = function (qp0x, xD3x, t4x, ff6Z, mi9Z) {
        var bN5S,
            pD0x = "m-popup-info",
            bir2x = "鍗曢璐拱",
            biA2x = "椹笂鍘诲紑閫�",
            cA6u = "鍞辩墖鍏徃瑕佹眰锛屽綋鍓嶆瓕鏇查』浠樿垂浣跨敤銆�",
            bJO8G = true;
        try {
            bN5S = top.api.feeMessage || {}
        } catch (e) {
            bN5S = {}
        }
        if (qp0x == 1 || qp0x == 8 || qp0x == 16) {
            if (t4x == "song") {
                pD0x = "m-popup-song-buy";
                cA6u = bN5S["vip2"] || cA6u;
                biA2x = bN5S["vip2button"] || "鍖呮湀璐拱";
                bir2x = bN5S["vip2link"] || bir2x;
                if (mi9Z && mi9Z.flag !== undefined) {
                    var bs5x = mi9Z.flag.toString(2).split("");
                    if (parseInt(bs5x.pop(), 10) == 1) {
                        bJO8G = false
                    }
                }
            } else {
                cA6u = bN5S["vip"] || cA6u
            }
        } else if (qp0x == 4) {
            cA6u = bN5S["album"] || cA6u;
            biA2x = "绔嬪嵆璁㈣喘"
        } else {
            cA6u = bN5S["unknow"] || cA6u
        }
        l4p.jk8c({
            clazz: "m-layer-w5",
            html: a3x.bP5U(pD0x, {
                songTxt: bir2x,
                tip: cA6u,
                oktext: biA2x,
                cctext: "浠ュ悗鍐嶈",
                showSongText: bJO8G
            }),
            onaction: ciC2x.dW6Q(null, qp0x, xD3x, ff6Z)
        })
    };
    l4p.bJN8F = function (hm7f, gW7P) {
        l4p.gP7I({
            title: "鎻愮ず",
            message: "鍞辩墖鍏徃瑕佹眰锛岃姝屾洸椤讳笅杞藉悗鎾斁",
            btnok: "涓嬭浇",
            btncc: "鍙栨秷",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (t4x) {
                if (t4x == "ok") {
                    l4p.Zc0x({
                        id: hm7f,
                        type: gW7P
                    })
                }
            }
        })
    };
    l4p.bhP2x = function (nk9b, qp0x) {
        var bN5S,
            cA6u = "鍞辩墖鍏徃瑕佹眰锛屽綋鍓嶆瓕鏇查』浠樿垂浣跨敤銆�";
        try {
            bN5S = top.api.feeMessage || {}
        } catch (e) {
            bN5S = {}
        }
        if (qp0x == 1 || qp0x == 8) {
            cA6u = bN5S["vip"] || cA6u
        } else if (qp0x == 4) {
            cA6u = bN5S["album"] || cA6u
        } else {
            cA6u = bN5S["unknow"] || cA6u
        }
        return l4p.jk8c({
            clazz: "m-layer-w5",
            html: a3x.bP5U("m-popup-info", {
                tip: cA6u,
                oktext: "椹笂鍘诲紑閫�",
                cctext: "浠ュ悗鍐嶈"
            }),
            onaction: function (d4h) {
                if (d4h.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + nk9b);
                    xE3x.gg7Z("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: nk9b || 0
                    })
                }
            }
        })
    };
    l4p.HW5b = function () {
        function compareFee(ciw2x, civ2x) {
            var bv5A = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bv5A[ciw2x] || 0) - (bv5A[civ2x] || 0)
        }

        return function (i4m, cA6u, st1x, ff6Z) {
            st1x = st1x || {};
            var xq3x = [],
                GX5c = {},
                bJM8E = 0,
                bJL8D = 0,
                Ht5y = null;
            if (!i4m || !i4m.length)
                return xq3x;
            k4o.be5j(i4m, function (bf5k) {
                var eT6N = l4p.oB0x(bf5k);
                if (eT6N == 0) {
                    xq3x.push(bf5k)
                } else if (eT6N == 10) {
                    if (bf5k.privilege) {
                        bf5k.fee = bf5k.privilege.fee
                    }
                    if (compareFee(bf5k.fee, GX5c.fee) > 0) {
                        GX5c = bf5k
                    }
                } else if (eT6N == 11) {
                    ++bJM8E;
                    if (!st1x.play)
                        xq3x.push(bf5k)
                } else if (eT6N == 1e3) {
                    ++bJL8D;
                    if (!st1x.download)
                        xq3x.push(bf5k)
                } else if (eT6N == 100) {
                    Ht5y = bf5k
                }
            });
            if (xq3x.length == 0 && cA6u) {
                if (bJM8E == i4m.length) {
                    var rZ1x = i4m[0].privilege || {};
                    if (rZ1x.payed) {
                        l4p.hR8J("鍞辩墖鍏徃瑕佹眰锛岃姝屾洸椤讳笅杞藉悗鎾斁")
                    } else {
                        l4p.sv1x(rZ1x.fee, null, null, ff6Z)
                    }
                } else if (bJL8D == i4m.length) {
                    l4p.hR8J("鍥犵増鏉冩柟瑕佹眰锛岃姝屾洸涓嶆敮鎸佷笅杞�")
                } else if (GX5c.id) {
                    l4p.sv1x(GX5c.fee, GX5c.id, null, ff6Z, GX5c.privilege)
                } else {
                    if (Ht5y && i4m.length == 1 && Ht5y.privilege && Ht5y.privilege.st < 0 && Ht5y.privilege.toast) {
                        l4p.hR8J(null, null, null, true, Ht5y)
                    } else {
                        l4p.hR8J()
                    }
                }
            }
            return xq3x
        }
    }
    ();
    l4p.oB0x = function (bf5k) {
        if (!bf5k)
            return 0;
        var eT6N = bf5k.privilege;
        if (bf5k.program)
            return 0;
        if (window.GAbroad)
            return 100;
        if (eT6N) {
            if (eT6N.st != null && eT6N.st < 0) {
                return 100
            }
            if (eT6N.fee > 0 && eT6N.fee != 8 && eT6N.payed == 0 && eT6N.pl <= 0)
                return 10;
            if (eT6N.fee == 16)
                return 11;
            if ((eT6N.fee == 0 || eT6N.payed) && eT6N.pl > 0 && eT6N.dl == 0)
                return 1e3;
            if (eT6N.pl == 0 && eT6N.dl == 0)
                return 100;
            return 0
        } else {
            var dY6S = bf5k.status != null ? bf5k.status : bf5k.st != null ? bf5k.st : 0;
            if (bf5k.status >= 0)
                return 0;
            if (bf5k.fee > 0)
                return 10;
            return 100
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        M4Q = c4g("nej.ui"),
        b4f;
    if (!!M4Q.YE9v)
        return;
    var hP8H = a3x.rO1x(".#<uispace>{position:absolute;background:#fff;}");
    M4Q.YE9v = NEJ.C();
    b4f = M4Q.YE9v.O4S(M4Q.PS7L);
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.bU5Z([[document, "click", this.sc1x.g4k(this)]]);
        this.cir2x = !!e4i.nostop;
        this.bJK8C = {
            top: e4i.top,
            left: e4i.left
        }
    };
    b4f.bD5I = function () {
        delete this.xC3x;
        delete this.bjU3x;
        delete this.oO0x;
        delete this.bJJ8B;
        delete this.YC9t;
        delete this.bJK8C;
        this.bH5M()
    };
    b4f.bZ5e = function () {
        this.lb9S = hP8H
    };
    b4f.bR5W = function () {
        this.cc5h();
        this.xU3x = this.o4s;
        h4l.q4u(this.o4s, "click", this.cim2x.g4k(this))
    };
    b4f.sc1x = function (d4h) {
        if (d4h.button != 2)
            this.bq5v()
    };
    b4f.cim2x = function (d4h) {
        if (this.cir2x)
            return;
        h4l.rD1x(d4h);
        var E4I = h4l.U4Y(d4h);
        if (E4I.tagName == "A")
            h4l.ce5j(d4h)
    };
    b4f.cil2x = function () {
        var cP6J = /\s+/i;
        return function (mJ9A) {
            mJ9A = (mJ9A || "").trim().toLowerCase().split(cP6J);
            mJ9A[0] = mJ9A[0] || "bottom";
            mJ9A[1] = mJ9A[1] || "left";
            this.oO0x = mJ9A
        }
    }
    ();
    b4f.cif2x = function (mJ9A) {
        var m4q = {},
            mA9r = this.bjU3x,
            ctT6N = a3x.oq0x(),
            dm6g = this.o4s.offsetWidth,
            cp5u = this.o4s.offsetHeight;
        switch (mJ9A[0]) {
            case "top":
                m4q.top = mA9r.top - cp5u;
                m4q.left = mJ9A[1] == "right" ? mA9r.left + mA9r.width - dm6g : mA9r.left;
                break;
            case "left":
                m4q.left = mA9r.left - dm6g;
                m4q.top = mJ9A[1] == "bottom" ? mA9r.top + mA9r.height - cp5u : mA9r.top;
                break;
            case "right":
                m4q.left = mA9r.left + mA9r.width;
                m4q.top = mJ9A[1] == "bottom" ? mA9r.top + mA9r.height - cp5u : mA9r.top;
                break;
            default:
                m4q.top = mA9r.top + mA9r.height;
                m4q.left = mJ9A[1] == "right" ? mA9r.left + mA9r.width - dm6g : mA9r.left;
                break
        }
        return m4q
    };
    b4f.Ip5u = function () {
        if (!this.bJJ8B) {
            this.fU7N(this.bJK8C);
            return
        }
        if (!!this.YC9t) {
            this.fU7N(this.xC3x);
            return
        }
        if (!!this.bjU3x)
            this.fU7N(this.cif2x(this.oO0x))
    };
    b4f.chF2x = function (E4I, dh6b, d4h) {
        dh6b = dh6b || Y4c;
        var bJu8m = a3x.oq0x(),
            cL6F = h4l.kv9m(d4h) + (dh6b.left || 0),
            gE7x = h4l.nO0x(d4h) + (dh6b.top || 0),
            dm6g = E4I.offsetWidth + (dh6b.right || 0),
            cp5u = E4I.offsetHeight + (dh6b.bottom || 0),
            Jf6Z = bJu8m.scrollWidth,
            bkC3x = bJu8m.scrollHeight,
            bkH3x = cL6F + dm6g,
            bkJ3x = gE7x + cp5u;
        switch (this.oO0x[0]) {
            case "top":
                gE7x = bkJ3x > bkC3x ? gE7x - cp5u : gE7x;
                if (this.oO0x[1] == "right") {
                    cL6F = cL6F - dm6g < 0 ? 0 : cL6F - dm6g
                } else {
                    cL6F = bkH3x > Jf6Z ? Jf6Z - dm6g : cL6F
                }
                break;
            case "left":
                cL6F = bkH3x > Jf6Z ? Jf6Z - dm6g : cL6F;
                if (this.oO0x[1] == "top") {
                    gE7x = bkJ3x > bkC3x ? gE7x - cp5u : gE7x
                } else {
                    gE7x = gE7x - cp5u < 0 ? gE7x : gE7x - cp5u
                }
                break;
            case "right":
                cL6F = cL6F - dm6g < 0 ? 0 : cL6F - dm6g;
                if (this.oO0x[1] == "top") {
                    gE7x = bkJ3x > bkC3x ? gE7x - cp5u : gE7x
                } else {
                    gE7x = gE7x - cp5u < 0 ? gE7x : gE7x - cp5u
                }
                break;
            default:
                gE7x = gE7x - cp5u < 0 ? gE7x : gE7x - cp5u;
                if (this.oO0x[1] == "left") {
                    cL6F = bkH3x > Jf6Z ? Jf6Z - dm6g : cL6F
                } else {
                    cL6F = cL6F - dm6g < 0 ? 0 : cL6F - dm6g
                }
                break
        }
        return {
            top: gE7x,
            left: cL6F
        }
    };
    b4f.bkQ3x = function () {
        var chz2x = function (E4I, dh6b) {
            E4I = a3x.x4B(E4I);
            if (!E4I)
                return;
            dh6b = dh6b || Y4c;
            var bj5o = a3x.hL8D(E4I);
            return {
                top: bj5o.y - (dh6b.top || 0),
                left: bj5o.x - (dh6b.left || 0),
                width: E4I.offsetWidth + (dh6b.right || 0),
                height: E4I.offsetHeight + (dh6b.bottom || 0)
            }
        };
        return function (e4i) {
            e4i = e4i || Y4c;
            this.YC9t = e4i.event;
            this.cil2x(e4i.align);
            if (!!this.YC9t)
                this.xC3x = this.chF2x(e4i.target, e4i.delta, this.YC9t);
            this.bjU3x = chz2x(e4i.target, e4i.delta);
            this.bJJ8B = !!e4i.fitable;
            this.N4R();
            return this
        }
    }
    ()
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ui"),
        b4f,
        K4O;
    if (!!M4Q.yg3x)
        return;
    M4Q.yg3x = NEJ.C();
    b4f = M4Q.yg3x.O4S(M4Q.Th8Z);
    K4O = M4Q.yg3x.cg5l;
    M4Q.yg3x.ctY6S = function () {
        var cho2x = function (d4h, C4G, fj6d, jl8d, KR6L) {
            var cq5v,
                J4N = C4G + "-i",
                R4V = fj6d.xy3x,
                bJp8h = !!jl8d.noclear,
                bJn8f = !!jl8d.toggled;
            if (k4o.gf7Y(jl8d.onbeforeclick)) {
                var Yt9k = jl8d.noclear,
                    chi2x = jl8d.toggled;
                try {
                    jl8d.onbeforeclick(jl8d)
                } catch (e) {
                }
                bJp8h = !!jl8d.noclear;
                bJn8f = !!jl8d.toggled;
                jl8d.toggled = chi2x;
                jl8d.noclear = Yt9k
            }
            var DH4L = R4V[J4N];
            if (bJn8f && !!DH4L) {
                DH4L.bq5v();
                return
            }
            h4l.bh5m(d4h);
            if (!bJp8h) {
                h4l.z4D(document, "click");
                cq5v = fj6d.B4F(jl8d)
            } else {
                cq5v = fj6d.csu5z(jl8d, !0)
            }
            R4V[J4N] = cq5v;
            cq5v.ux2x("onbeforerecycle", function () {
                delete R4V[J4N]
            });
            cq5v.bkQ3x(KR6L)
        };
        return function (f4j, e4i) {
            f4j = a3x.x4B(f4j);
            if (!f4j)
                return this;
            if (!this.xy3x)
                this.xy3x = {};
            var C4G = a3x.kp9g(f4j);
            if (!!this.xy3x[C4G])
                return this;
            e4i = NEJ.X({}, e4i);
            var KR6L = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e4i);
            KR6L.target = C4G;
            e4i.destroyable = !0;
            if (!e4i.fixed) {
                KR6L.fitable = !0;
                e4i.parent = document.body
            }
            this.xy3x[C4G] = [C4G, e4i.event || "click", cho2x.dW6Q(null, C4G, this, e4i, KR6L)];
            h4l.q4u.apply(h4l, this.xy3x[C4G]);
            return this
        }
    }
    ();
    M4Q.yg3x.ctZ6T = function (f4j) {
        if (!this.xy3x)
            return this;
        var C4G = a3x.kp9g(f4j),
            d4h = this.xy3x[C4G];
        if (!d4h)
            return this;
        delete this.xy3x[C4G];
        h4l.ms9j.apply(h4l, d4h);
        var cq5v = this.xy3x[C4G + "-i"];
        if (!!cq5v)
            cq5v.bq5v();
        return this
    };
    b4f.bnZ3x = function () {
        return M4Q.YE9v.B4F(this.bS5X)
    };
    b4f.Pq7j = function () {
        K4O.Pq7j.apply(this, arguments);
        this.bS5X.top = null;
        this.bS5X.left = null;
        this.bS5X.nostop = !1
    };
    b4f.bkQ3x = function (e4i) {
        if (!!this.nn9e)
            this.nn9e.bkQ3x(e4i);
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        bd5i = c4g("nej.ui"),
        n4r = c4g("nm.l"),
        b4f,
        K4O;
    n4r.blY3x = NEJ.C();
    b4f = n4r.blY3x.O4S(bd5i.yg3x);
    b4f.bk5p = function (e4i) {
        e4i.nohack = true;
        this.bl5q(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        n4r = c4g("nm.l"),
        b4f,
        K4O;
    n4r.Z4d = NEJ.C();
    b4f = n4r.Z4d.O4S(n4r.blY3x);
    K4O = n4r.Z4d.cg5l;
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.es6m = e4i.type || 1
    };
    b4f.bR5W = function () {
        this.cc5h();
        this.o4s = a3x.mT9K(this.chf2x());
        var i4m = a3x.cQ6K(this.o4s);
        this.pt0x = i4m[0];
        this.ci5n = i4m[1]
    };
    b4f.chf2x = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b4f.Ip5u = function () {
        var A4E = {},
            cd5i = this.o4s.style,
            iE8w = a3x.oq0x(),
            ng9X = {
                left: iE8w.scrollLeft,
                top: iE8w.scrollTop
            },
            dh6b = {
                left: iE8w.clientWidth - this.o4s.offsetWidth,
                top: iE8w.clientHeight - this.o4s.offsetHeight
            };
        A4E.top = Math.max(0, ng9X.top + dh6b.top / 2);
        A4E.left = Math.max(0, ng9X.left + dh6b.left / 2);
        this.nn9e.fU7N(A4E)
    };
    b4f.N4R = function (e4i) {
        K4O.N4R.call(this);
        this.Ip5u();
        this.es6m == 1 ? a3x.ev6p(this.pt0x, "u-icn-32", "u-icn-31") : a3x.ev6p(this.pt0x, "u-icn-31", "u-icn-32");
        this.ci5n.innerHTML = e4i.tip || ""
    };
    n4r.Z4d.N4R = function () {
        var eZ6T;
        return function (e4i) {
            clearTimeout(eZ6T);
            if (e4i.parent === undefined)
                e4i.parent = document.body;
            if (e4i.autoclose === undefined)
                e4i.autoclose = true;
            e4i.clazz = "m-sysmsg";
            !!this.eJ6D && this.eJ6D.S4W();
            this.eJ6D = this.B4F(e4i);
            this.eJ6D.N4R(e4i);
            if (e4i.autoclose)
                eZ6T = setTimeout(this.bq5v.g4k(this), 2e3)
        }
    }
    ();
    n4r.Z4d.bq5v = function () {
        !!this.eJ6D && this.eJ6D.bq5v()
    }
})();
(function () {
    var c4g = NEJ.P,
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v4z.bp5u = v4z.bp5u.ef6Z(function (d4h) {
            e4i = d4h.args[1];
            e4i.query = e4i.query || {};
            if (k4o.fe6Y(e4i.query))
                e4i.query = k4o.hi7b(e4i.query);
            e4i.query.ref = "mail"
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        eU6O = NEJ.R,
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        p4t = c4g("nm.d"),
        n4r = c4g("nm.l"),
        J4N = "playlist-tracks_",
        b4f;
    p4t.eQ6K({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function (Q4U, e4i) {
                this.chd2x(Q4U.playlist);
                return {
                    total: 0,
                    list: eU6O
                }
            },
            onerror: function () {
                this.z4D("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function (Q4U, e4i) {
                var iK8C = Q4U.playlist;
                iK8C.creator = GUser;
                iK8C.isHost = !0;
                iK8C.typeFlag = "playlist";
                return iK8C
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.hh7a, "listchange", d4h)
            },
            onmessage: function () {
                var lm9d = {
                    507: "姝屽崟鏁伴噺瓒呰繃涓婇檺锛�",
                    405: "浣犳搷浣滃お蹇簡锛岃浼戞伅涓€浼氬啀璇曪紒",
                    406: "浣犳搷浣滃お蹇簡锛岃浼戞伅涓€浼氬啀璇曪紒"
                };
                return function (cb5g) {
                    n4r.Z4d.N4R({
                        tip: lm9d[cb5g] || "鍒涘缓澶辫触",
                        type: 2
                    })
                }
            }
            ()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function (e4i) {
                e4i.id = e4i.data.pid
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.hh7a, "listchange", d4h)
            },
            onmessage: function () {
                var lm9d = {
                    404: "姝屽崟涓嶅瓨鍦紒",
                    405: "浣犳搷浣滃お蹇簡锛岃浼戞伅涓€浼氬啀璇曪紒",
                    406: "浣犳搷浣滃お蹇簡锛岃浼戞伅涓€浼氬啀璇曪紒"
                };
                return function (cb5g) {
                    n4r.Z4d.N4R({
                        tip: lm9d[cb5g] || "鍒犻櫎澶辫触",
                        type: 2
                    })
                }
            }
            ()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function (e4i) {
                var ff6Z = e4i.ext || {};
                e4i.ext = NEJ.X(ff6Z, e4i.data);
                e4i.data = {
                    id: e4i.ext.id
                }
            },
            format: function (Q4U, e4i) {
                n4r.Z4d.N4R({
                    tip: "鏀惰棌鎴愬姛" + (Q4U.point > 0 ? ' 鑾峰緱<em class="s-fc6">' + Q4U.point + "绉垎</em>" : "")
                });
                var r4v = e4i.ext;
                r4v.subscribedCount++;
                return r4v
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.cha2x, "listchange", d4h);
                h4l.z4D(p4t.cha2x, "itemchange", {
                    attr: "subscribedCount",
                    data: d4h.data
                })
            },
            onmessage: function () {
                var lm9d = {
                    404: "姝屽崟涓嶅瓨鍦紒",
                    501: "姝屽崟宸茬粡鏀惰棌锛�",
                    506: "姝屽崟鏀惰棌鏁伴噺瓒呰繃涓婇檺锛�"
                };
                return function (cb5g) {
                    n4r.Z4d.N4R({
                        type: 2,
                        tip: lm9d[cb5g] || "鏀惰棌澶辫触锛岃绋嶅悗鍐嶈瘯锛�"
                    })
                }
            }
            ()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function (e4i) {
                e4i.id = e4i.data.id = e4i.data.pid
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.hh7a, "listchange", d4h)
            },
            onmessage: function () {
                var lm9d = {
                    404: "姝屽崟涓嶅瓨鍦紒",
                    405: "浣犳搷浣滃お蹇簡锛岃浼戞伅涓€浼氬啀璇曪紒",
                    406: "浣犳搷浣滃お蹇簡锛岃浼戞伅涓€浼氬啀璇曪紒"
                };
                return function (cb5g) {
                    n4r.Z4d.N4R({
                        tip: lm9d[cb5g],
                        type: 2
                    })
                }
            }
            ()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e4i) {
                var j4n = e4i.data,
                    Yg9X = {};
                Yg9X["playlist-update-name"] = {
                    id: j4n.id,
                    name: j4n.name
                };
                Yg9X["playlist-update-tag"] = {
                    id: j4n.id,
                    tags: j4n.tags.join(";")
                };
                Yg9X["playlist-update-desc"] = {
                    id: j4n.id,
                    desc: j4n.description
                };
                e4i.data = Yg9X;
                e4i.ext = j4n
            },
            format: function (T4X, pu0x, Li6c, e4i) {
                if (T4X.code == 200 && pu0x.code == 200 && Li6c.code == 200) {
                    e4i.ext.allSuccess = true;
                    n4r.Z4d.N4R({
                        tip: "淇濆瓨鎴愬姛"
                    })
                } else if (T4X.code == 407 || pu0x.code == 407 || Li6c.code == 407) {
                    e4i.ext.allSuccess = false;
                    n4r.Z4d.N4R({
                        type: 2,
                        tip: "杈撳叆鍐呭鍖呭惈鍏抽敭瀛�"
                    })
                } else {
                    e4i.ext.allSuccess = false;
                    n4r.Z4d.N4R({
                        type: 2,
                        tip: "淇濆瓨澶辫触"
                    })
                }
                return this.eh6b(e4i.ext.id)
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.hh7a, "listchange", d4h)
            },
            onmessage: function (cb5g) {
                n4r.Z4d.N4R({
                    type: 2,
                    tip: "淇濆瓨澶辫触"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function (Q4U, e4i) {
                var r4v = this.eh6b(e4i.ext.id);
                if (Q4U.code == 200)
                    r4v.name = e4i.ext.name;
                return Q4U
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function (Q4U, e4i) {
                var r4v = this.eh6b(e4i.ext.id);
                if (Q4U.code == 200)
                    r4v.tags = e4i.ext.tags;
                return Q4U
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function (Q4U, e4i) {
                var r4v = this.eh6b(e4i.ext.id);
                if (Q4U.code == 200)
                    r4v.description = e4i.ext.description;
                return Q4U
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function (e4i) {
                e4i.url = e4i.data.url;
                delete e4i.data.url
            },
            format: function (Q4U, e4i) {
                n4r.Z4d.N4R({
                    tip: "淇濆瓨鎴愬姛"
                });
                var r4v = this.eh6b(e4i.data.id);
                r4v.coverImgUrl = e4i.url;
                e4i.ext = r4v;
                return r4v
            },
            onmessage: function (cb5g) {
                n4r.Z4d.N4R({
                    type: 2,
                    tip: "淇濆瓨澶辫触"
                })
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.hh7a, "itemchange", {
                    attr: "coverImgUrl",
                    data: e4i.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function (Q4U, e4i) {
                var iK8C = this.eh6b(e4i.data.id);
                if (!iK8C)
                    return;
                iK8C.playCount++;
                h4l.z4D(p4t.hh7a, "itemchange", {
                    attr: "playcount",
                    data: iK8C
                })
            }
        }
    });
    p4t.hh7a = NEJ.C();
    b4f = p4t.hh7a.O4S(p4t.gZ7S);
    b4f.cl5q = function () {
        this.cs5x()
    };
    b4f.bJj8b = function () {
        var cT6N = GUser.userId;
        this.nQ0x({
            limit: 1001,
            key: "playlist_my-" + cT6N,
            data: {
                offset: 0,
                limit: 1001,
                uid: cT6N
            }
        })
    };
    b4f.chd2x = function (i4m) {
        var cT6N = GUser.userId,
            iN8F = [],
            bJh8Z = [];
        k4o.be5j(i4m, function (r4v) {
            r4v.typeFlag = "playlist";
            if (r4v.creator && r4v.creator.userId == cT6N) {
                if (r4v.specialType == 5)
                    r4v.name = "鎴戝枩娆㈢殑闊充箰";
                r4v.isHost = !0;
                iN8F.push(r4v)
            } else {
                bJh8Z.push(r4v)
            }
        });
        this.rr0x("playlist_new-" + cT6N, iN8F);
        this.rr0x("playlist_fav-" + cT6N, bJh8Z)
    };
    b4f.cgT2x = function (j4n) {
        this.ck5p("playlist-update-cover", {
            data: j4n
        })
    };
    b4f.cuc6W = function () {
        var Ln6h = this.cgz2x.x4B("host-plist");
        if (Ln6h.length == 0) {
            return
        }
        if (Ln6h.length == 1 && Ln6h[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Ln6h.length; i < len; i++) {
            var r4v = Ln6h[i];
            if (r4v.trackCount > 0)
                return r4v.id
        }
        return this.cgz2x.x4B("host-plist")[0].id
    };
    b4f.cgx2x = function (C4G) {
        if (GUser && GUser.userId > 0) {
            this.ck5p("playlist-upcount", {
                data: {
                    id: C4G
                }
            })
        }
    };
    b4f.DP4T = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b4f.cud6X = function () {
        return GUser.userId
    };
    b4f.bnU3x = function (r4v) {
        if (r4v.userId == GUser.userId && r4v.specialType == 5)
            r4v.name = "鎴戝枩娆㈢殑闊充箰";
        h4l.z4D(this.constructor, "itemchange", {
            data: this.Aa3x(r4v)
        });
        return r4v
    };
    H4L.ft7m.B4F({
        element: p4t.hh7a,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function () {
    var c4g = NEJ.P,
        eU6O = NEJ.R,
        bm5r = NEJ.F,
        Y4c = NEJ.O,
        H4L = c4g("nej.ut"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        n4r = c4g("nm.l"),
        b4f,
        K4O;
    p4t.eQ6K({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function (Q4U) {
                return Q4U.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e4i) {
                e4i.data.limit = 1e3;
                delete e4i.data.id
            },
            format: function (Q4U, e4i) {
                var bJb8T = [],
                    za3x = Q4U.programs;
                if (za3x) {
                    for (var i = 0, l = za3x.length; i < l; i++) {
                        if (za3x[i].programFeeType < 10 || za3x[i].buyed) {
                            bJb8T.push(za3x[i])
                        }
                    }
                }
                return bJb8T
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function (Q4U, e4i) {
                return Q4U.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function (e4i) {
                e4i.ext = e4i.data;
                e4i.data = {
                    id: e4i.ext.id
                };
                e4i.id = e4i.data.id
            },
            format: function (Q4U, e4i) {
                n4r.Z4d.N4R({
                    tip: "鏀惰棌鎴愬姛"
                });
                var r4v = e4i.ext;
                r4v.subscribedCount++;
                r4v.subscribed = !0;
                return r4v
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.pw0x, "listchange", d4h)
            },
            onmessage: function () {
                var lm9d = {
                    404: "鑺傜洰涓嶅瓨鍦紒",
                    501: "鑺傜洰宸叉敹钘忥紒"
                };
                return function (cb5g) {
                    n4r.Z4d.N4R({
                        type: 2,
                        tip: lm9d[cb5g] || "鏀惰棌澶辫触锛�"
                    })
                }
            }
            ()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.pw0x, "listchange", d4h)
            },
            onmessage: function () {
                var lm9d = {
                    404: "鑺傜洰涓嶅瓨鍦紒",
                    502: "娌℃湁鏀惰棌姝よ妭鐩紒"
                };
                return function (cb5g) {
                    l4p.bob3x({
                        txt: lm9d[cb5g] || "鍙栨秷鏀惰棌澶辫触锛�"
                    })
                }
            }
            ()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function (e4i) {
                var r4v = this.eh6b(e4i.data.id) || Y4c;
                e4i.ext = (r4v.listenerCount || 0) + 1
            },
            format: function (Q4U, e4i) {
                var r4v = this.eh6b(e4i.data.id);
                if (!!r4v) {
                    r4v.listenerCount = Math.max(e4i.ext, r4v.listenerCount || 0)
                }
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.pw0x, "itemchange", {
                    attr: "playCount",
                    data: this.eh6b(e4i.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function (e4i) {
                e4i.data = {
                    threadId: "A_DJ_1_" + e4i.id
                }
            },
            format: function (Q4U, e4i) {
                var r4v = e4i.ext.data || this.eh6b(e4i.id);
                r4v.liked = true;
                r4v.likedCount++;
                e4i.ext.data = r4v;
                try {
                    top.player.setLike(r4v)
                } catch (e) {
                }
                return r4v
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.pw0x, "itemchange", {
                    attr: "likedCount",
                    data: e4i.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function (e4i) {
                e4i.data = {
                    threadId: "A_DJ_1_" + e4i.id
                }
            },
            format: function (Q4U, e4i) {
                var r4v = e4i.ext.data || this.eh6b(e4i.id);
                r4v.liked = false;
                r4v.likedCount--;
                e4i.ext.data = r4v;
                try {
                    top.player.setLike(r4v)
                } catch (e) {
                }
                return r4v
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.pw0x, "itemchange", {
                    attr: "likedCount",
                    data: e4i.ext.data
                })
            }
        }
    });
    p4t.pw0x = NEJ.C();
    b4f = p4t.pw0x.O4S(p4t.gZ7S);
    b4f.cuf6Z = function () {
        var cT6N = GUser.userId;
        this.nQ0x({
            limit: 1001,
            key: "program_fav-" + cT6N,
            data: {
                offset: 0,
                limit: 1e3,
                uid: cT6N
            }
        })
    };
    b4f.cug6a = function (cR6L) {
        var oe0x = cR6L[this.uK2x];
        l4p.cgl2x(4, function (R4V) {
            R4V.rr0x("track_program-" + oe0x, cR6L.songs)
        });
        delete cR6L.songs;
        var bK5P = cR6L.mainSong;
        l4p.cgl2x(4, function (R4V) {
            R4V.rr0x("track_program_main-" + oe0x, !bK5P ? [] : [bK5P])
        });
        cR6L.mainSong = (bK5P || Y4c).id
    };
    b4f.cui6c = function (C4G) {
        var cR6L = this.eh6b(C4G),
            cT6N = localCache.ZF0x("host.profile.userId");
        return !!cR6L && cR6L.dj.userId == cT6N
    };
    b4f.cuj6d = function (C4G) {
        return !1
    };
    b4f.bnU3x = function (r4v) {
        h4l.z4D(this.constructor, "itemchange", {
            attr: "detail",
            data: this.Aa3x(r4v)
        });
        return r4v
    };
    b4f.cgx2x = function (C4G) {
        this.ck5p("program-update-count", {
            data: {
                id: C4G
            }
        })
    };
    l4p.bIT7M = function (e4i) {
        var R4V = p4t.pw0x.B4F({
            onitemadd: function () {
                (e4i.onsuccess || bm5r)()
            },
            onerror: function () {
                (e4i.onerror || bm5r)()
            }
        });
        if (e4i.data.liked) {
            R4V.Lw6q(e4i.data)
        } else {
            R4V.uw2x(e4i.data)
        }
    };
    b4f.uw2x = function (cR6L) {
        if (!l4p.gY7R())
            return;
        var cm5r = {
            ext: {}
        };
        if (k4o.kg9X(cR6L)) {
            cm5r.id = cR6L.id;
            cm5r.ext.data = cR6L
        } else {
            cm5r.id = cR6L
        }
        this.ck5p("program-like", cm5r)
    };
    b4f.Lw6q = function (cR6L) {
        if (!l4p.gY7R())
            return;
        var cm5r = {
            ext: {}
        };
        if (k4o.kg9X(cR6L)) {
            cm5r.id = cR6L.id;
            cm5r.ext.data = cR6L
        } else {
            cm5r.id = cR6L
        }
        this.ck5p("program-unlike", cm5r)
    };
    H4L.ft7m.B4F({
        element: p4t.pw0x,
        event: ["listchange", "itemchange"]
    })
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        eU6O = NEJ.R,
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        p4t = c4g("nm.d"),
        n4r = c4g("nm.l"),
        l4p = c4g("nm.x"),
        J4N = "playlist-tracks_",
        l4p = c4g("nm.x"),
        b4f;
    p4t.eQ6K({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function (e4i) {
                e4i.data.c = JSON.stringify([{
                    id: e4i.data.id
                }
                ])
            },
            format: function (Q4U, e4i) {
                var bf5k = l4p.DN4R(Q4U.songs[0]);
                bf5k.privilege = Q4U.privileges[0];
                return bf5k
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function (e4i) {
                e4i.data.n = 1e3
            },
            format: function (Q4U, e4i) {
                var gC7v = [];
                this.rL1x.bnU3x(Q4U.playlist);
                k4o.be5j(Q4U.playlist.tracks, function (bK5P, s4w) {
                    var bIS7L = l4p.DN4R(bK5P);
                    bIS7L.privilege = Q4U.privileges[s4w];
                    gC7v.push(bIS7L)
                }, this);
                return gC7v
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function (Q4U, e4i) {
                var gC7v = [];
                k4o.be5j(Q4U.songs, function (bf5k) {
                    gC7v.push(l4p.DN4R(bf5k))
                });
                return gC7v
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e4i) {
                var bv5A = {},
                    j4n = e4i.data,
                    cgc2x = this.gN7G(e4i.key) || [];
                DL4P = [];
                k4o.be5j(cgc2x, function (bK5P) {
                    var C4G = k4o.kg9X(bK5P) ? bK5P.id : bK5P;
                    bv5A[C4G] = true
                });
                e4i.ext = [];
                k4o.be5j(j4n.tracks, function (bK5P) {
                    var C4G = k4o.kg9X(bK5P) ? bK5P.id : bK5P;
                    if (!bv5A[C4G]) {
                        DL4P.push(C4G);
                        bv5A[C4G] = true;
                        e4i.ext.push(bK5P)
                    }
                });
                j4n.trackIds = JSON.stringify(DL4P);
                j4n.op = "add";
                if (!DL4P.length) {
                    e4i.value = {
                        code: 502
                    }
                }
            },
            format: function (Q4U, e4i) {
                n4r.Z4d.N4R({
                    tip: "宸叉坊鍔犺嚦姝屽崟"
                });
                var iK8C = this.rL1x.eh6b(e4i.data.pid);
                if (!!Q4U.coverImgUrl)
                    iK8C.coverImgUrl = Q4U.coverImgUrl;
                k4o.mu9l(e4i.ext, function (bK5P) {
                    this.xN3x(e4i, k4o.kg9X(bK5P) ? bK5P : null);
                    if (!!iK8C)
                        iK8C.trackCount++
                }, this);
                h4l.z4D(p4t.hh7a, "itemchange", {
                    data: iK8C || {},
                    cmd: "add"
                });
                this.z4D("onaddsuccess");
                return null
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.uH2x, "listchange", {
                    key: e4i.key,
                    action: "refresh"
                });
                var oe0x = e4i.data.pid,
                    co5t = this.jG9x(e4i.key)
            },
            onmessage: function () {
                var lm9d = {
                    502: "姝屾洸宸插瓨鍦紒",
                    505: "姝屽崟宸叉弧锛�"
                };
                return function (cb5g) {
                    setTimeout(function () {
                        n4r.Z4d.N4R({
                            tip: lm9d[cb5g] || "娣诲姞澶辫触锛岃绋嶅悗鍐嶈瘯锛�",
                            type: 2
                        })
                    }, 0)
                }
            }
            ()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e4i) {
                var j4n = e4i.data;
                e4i.ext = j4n.trackIds;
                j4n.trackIds = JSON.stringify(j4n.trackIds);
                j4n.op = "del"
            },
            format: function (Q4U, e4i) {
                var iK8C = this.rL1x.eh6b(e4i.data.pid);
                k4o.be5j(e4i.ext, function (C4G) {
                    this.bdC1x({
                        id: C4G,
                        key: "track_playlist-" + e4i.data.pid
                    }, !0);
                    if (!!iK8C)
                        iK8C.trackCount = Math.max(0, iK8C.trackCount - 1)
                }, this);
                h4l.z4D(p4t.hh7a, "itemchange", {
                    data: iK8C || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(p4t.uH2x, "listchange", {
                    key: e4i.key,
                    action: "refresh"
                })
            },
            onmessage: function (cb5g) {
                l4p.bob3x({
                    text: "姝屾洸鍒犻櫎澶辫触锛�"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function (Q4U, e4i) {
                return this.bIR7K.bnU3x(Q4U.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function (Q4U, e4i) {
                var i4m = [];
                if (e4i.data.type == -1) {
                    if (Q4U.weekData && Q4U.weekData.length) {
                        e4i.data.type = 1
                    } else {
                        e4i.data.type = 0
                    }
                }
                if (e4i.data.type == 1) {
                    i4m = this.bIQ7J(Q4U.weekData)
                } else {
                    i4m = this.bIQ7J(Q4U.allData)
                }
                return i4m
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function (Q4U) {
                var mD9u = [];
                k4o.be5j(Q4U.recommend, function (bf5k, s4w) {
                    mD9u.push({
                        action: "recommendimpress",
                        json: {
                            alg: bf5k.alg,
                            scene: "user-song",
                            position: s4w,
                            id: bf5k.id
                        }
                    })
                });
                this.kz9q.Zd0x(mD9u);
                return Q4U.recommend
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            },
            format: function (m4q, e4i) {
                return m4q
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    p4t.uH2x = NEJ.C();
    b4f = p4t.uH2x.O4S(p4t.gZ7S);
    b4f.cl5q = function () {
        this.cs5x();
        this.rL1x = p4t.hh7a.B4F();
        this.bIR7K = p4t.pw0x.B4F();
        this.kz9q = p4t.hK8C.B4F()
    };
    b4f.bIQ7J = function (i4m) {
        var m4q = [],
            fb6V = 0;
        k4o.be5j(i4m, function (r4v, s4w) {
            var bf5k = l4p.DN4R(r4v.song);
            if (s4w == 0) {
                fb6V = r4v.score
            }
            bf5k.max = fb6V;
            bf5k.playCount = r4v.playCount;
            bf5k.score = r4v.score;
            m4q.push(bf5k)
        });
        return m4q
    };
    H4L.ft7m.B4F({
        element: p4t.uH2x,
        event: ["listchange"]
    })
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f)
                return f;
            if (0 != f.length % 2)
                throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }

    var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b)
                        return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++)
                        f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b)
                        return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15])
                        return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                            l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L)
                                throw Error(b[134]);
                            for (var d = a[15]; d < L; d++)
                                l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++)
                        c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++)
                            c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15])
                        h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++)
                            l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d,
                        f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = [];
                    if (l == a[541])
                        l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16])
                        l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19])
                        l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else
                        throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++)
                        c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l)
                            throw Error(b[131]);
                        if (h.length < f)
                            throw Error(b[134]);
                        for (var e = a[15]; e < f; e++)
                            l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h)
                        return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l)
                                c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else
                                throw Error(b[146]);
                        else
                            c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15])
                        return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length)
                        return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++)
                        d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290])
                        return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282])
                        return c;
                    if (c > a[282])
                        return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++)
                            try {
                                var g = h[e];
                                l()(g) && f.push(g)
                            } catch (k) {
                            }
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a,
                                g.appendChild(k),
                                c.height = k.offsetHeight,
                                c.width = k.offsetWidth,
                                g[b[307]](k),
                                c
                        }

                        var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++)
                            l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                    g = l[f];
                                if (e.height !== g.height || e.width !== g.width)
                                    return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null,
                            h = null,
                            d = [];
                        try {
                            h = C[b[167]](c[79]),
                                a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {
                        }
                        if (!a)
                            return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {
                        }
                        try {
                            d.push(e(a, h))
                        } catch (k) {
                        }
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l),
                                h[b[341]](la),
                                h[b[177]](t, X),
                                h[b[177]](t, la),
                                h[c[45]](t),
                                h[b[309]](t),
                                t.n = h[c[92]](t, b[205]),
                                t.m = h[c[62]](t, c[29]),
                                h[c[74]](t.o),
                                h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]),
                                h[J[0]](t.m, a[541], a[541]),
                                h[b[139]](h[b[259]], a[15], g.l),
                                M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]])
                            return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++)
                            try {
                                C[b[258]].appendChild(h),
                                    h.style.color = f[l],
                                    d.push(f[l]),
                                    d.push(window[c[154]](h).getPropertyValue(c[36])),
                                    C[b[258]][b[307]](h)
                            } catch (e) {
                                d.push(b[349])
                            }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]])
                            return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a])
                                return b[0];
                            a = y[b[4]][a];
                            if (!a)
                                return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a),
                                    a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a)
                            return c;
                        if (I && a.map === I)
                            return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z)
                                b.forEach(h, void 0);
                            else if (b.length === +b.length)
                                for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                            else
                                for (c in b)
                                    if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {})
                                        break
                    }

                    var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = {
                            e: M,
                            j: !0,
                            i: !0,
                            h: !0,
                            b: !0,
                            a: !0
                        };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [],
                            l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i)
                                try {
                                    var u = C[b[167]](c[79]);
                                    e = !(!u[B[7]] || !u[B[7]](b[354]))
                                } catch (r) {
                                    e = !1
                                }
                            if (e)
                                try {
                                    h.push(k()),
                                    n.b && h.push(f())
                                } catch (E) {
                                    h.push(b[59])
                                }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88],
                        d,
                        f,
                        e,
                        g,
                        k,
                        m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;)
                        k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299],
                                k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                                k = k << a[56] | k >>> a[60],
                                k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                                e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++)
                            try {
                                var q = parseInt(B.charAt(z) + b[0]),
                                    p = q || q === a[15] ? p + q : p + a[541];
                                E++
                            } catch (n) {
                                p += a[541],
                                    E++
                            }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++)
                            try {
                                var v = parseInt(G.charAt(F) + b[0]);
                                v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                            } catch (A) {
                                u++,
                                    H += C
                            }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [],
                            d.push(h),
                            d.push(U(N, b[35]).join(b[0])),
                            d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43])
                        throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++)
                        e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c)
                        throw Error(b[87]);
                    if (a.length == c)
                        return a;
                    for (var e = [], f = a.length; f < c; f++)
                        e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15])
                        return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++)
                        d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c))
                        return !1;
                    try {
                        if (r(window[a.f]))
                            return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c))
                        return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d)
                            return f
                    }
                }

                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else
                                                        e = v(q, c[172])
                                                } else
                                                    e = v(q, b[342])
                                            } else
                                                e = v(q, c[30])
                                        } else
                                            e = v(q, c[16])
                                    } else
                                        e = v(q, B[2])
                                } else
                                    e = v(q, b[320])
                            } else
                                e = v(q, c[58])
                        } else
                            e = v(q, c[89])
                    } else
                        e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h)
                                return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0];
                    if (null == h || void 0 == h)
                        return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262],
                                    k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++)
                        e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0])
                        return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0])
                        return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0])
                        return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                        }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                        t = {
                            v: b[227]
                        },
                        l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]),
                            t[b[159]] = b[42],
                            h = !1
                    }
                    try {
                        var v = l = Ca(t),
                            t = Za;
                        if (null == t || void 0 == t)
                            throw Error(b[120]);
                        if (null == v || void 0 == v)
                            v = b[0];
                        var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I;
                        if (null == A || void 0 == A || A.length == a[15])
                            I = za(F);
                        else {
                            var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++)
                                z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15])
                            throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++)
                                I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O,
                                M;
                            var N = I[L];
                            if (null == N)
                                M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++)
                                    w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w)
                                Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++)
                                    D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E;
                            if (null == w)
                                ia = null;
                            else if (null == D)
                                ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++)
                                    H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G)
                            ka = null;
                        else if (G.length == a[15])
                            ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;)
                                    if (R + ya <= G.length)
                                        u.push(k(G, R, ya)), R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }),
                            h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }

                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function (b, c) {
                        if (null == b)
                            return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++)
                            e.push(Y(b[g], d++));
                        return e
                    },
                    Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15])
                            return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g))
                                return e[f]
                        }
                        return null
                    }
                    (O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function (c) {
                        var d = [];
                        if (!c)
                            return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++)
                            f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }
                    (O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0])
                        a = !1;
                    else {
                        var c;
                        if (c = Ua())
                            a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {
})();
(function () {
    var bIP7I;
    var td1x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cfQ2x = 0;
    var bIO7H = 0;
    var bIN7G = 1;
    var bIM7F = 0;
    var bpJ4N = "";
    var bIK7D = "";
    var bIJ7C = "";
    var XO9F = "";
    var XM9D = "";
    var bpT4X = "";
    var bIH7A = 0;
    var bIG7z = "";
    var Ir5w = "";
    var DK4O = 0;
    var bqo4s = ntes_get_domain();
    var bqB4F = null;
    var cuk6e = "//analytics.163.com";
    var cfA2x = function () {
    };

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b,
            a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bqo4s
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bqo4s
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bqo4s
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {
                    }
                }
            }
        }
        return f
    }

    var cfz2x = 0;
    var LI6C = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * LI6C))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << LI6C) - 1;
        for (var b = 0; b < d.length * LI6C; b += LI6C) {
            c[b >> 5] |= (d.charCodeAt(b / LI6C) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cfz2x ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        XO9F = "-";
        bpT4X = "-";
        XM9D = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            XO9F = b.width + "x" + b.height;
            bpT4X = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                XO9F = f.width + "x" + f.height
            }
        }
        if (a.language) {
            XM9D = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                XM9D = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bIH7A = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cul6f(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a,
            d = f || cfA2x;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bIP7I;
        bpJ4N = escape(a || document.location);
        bIK7D = escape(m || document.title);
        bIJ7C = l === true ? "" : escape(l || document.referrer);
        bIG7z = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bqB4F == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bqB4F = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bpJ4N.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bqB4F) {
                td1x = fetch_visitor_hash();
                bIO7H = 1;
                ntes_set_cookie_long("_ntes_nnid", td1x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", td1x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            td1x = h.substr(0, o);
            DK4O = h.substr(o + 1, p - o - 1);
            if (DK4O == 0) {
                DK4O = (new Date).getTime();
                f = true
            }
            if (!td1x) {
                td1x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", td1x + "," + DK4O);
                ntes_set_cookie_long("_ntes_nuid", td1x)
            }
            if (DK4O != 0 && b - DK4O > 365 * 86400 * 1e3) {
                DK4O = 0;
                ntes_set_cookie_long("_ntes_nnid", td1x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", td1x)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }

        Ir5w = c("P_INFO", "P_OINFO");
        Ir5w = Ir5w ? Ir5w.substr(0, Ir5w.indexOf("|")) : "";
        bIM7F = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", td1x, "&_nvtm=", cfQ2x, "&_nvsf=", bIN7G, "&_nvfi=", bIO7H, "&_nlag=", XM9D, "&_nlmf=", bIH7A, "&_nres=", XO9F, "&_nscd=", bpT4X, "&_nstm=", bIM7F, "&_nurl=", bpJ4N, "&_ntit=", bIK7D, "&_nref=", bIJ7C, "&_nfla=", bIG7z, "&_nssn=", Ir5w, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bIN7G = 0;
        neteaseTracker.callback = null
    }

    bIP7I = "iad";
    neteaseTracker()
})();
(function () {
})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {},
        l = d.lib = {},
        s = function () {
        },
        t = l.Base = {
            extend: function (a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function () {
            },
            mixIn: function (a) {
                for (var c in a)
                    a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function () {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function (a) {
                return (a || v).stringify(this)
            },
            concat: function (a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++)
                        c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4)
                        c[j + k >>> 2] = e[k >>> 2];
                else
                    c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function () {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function () {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function (a) {
                for (var c = [], e = 0; e < a; e += 4)
                    c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2)
                    e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++)
                    e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j++)
                    e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function (a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function () {
                this.j4n = new r.init;
                this.bIE7x = 0
            },
            XB9s: function (a) {
                "string" == typeof a && (a = x.parse(a));
                this.j4n.concat(a);
                this.bIE7x += a.sigBytes
            },
            yD3x: function (a) {
                var c = this.j4n,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.bIF7y, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k)
                        this.bID7w(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function () {
                var a = t.clone.call(this);
                a.j4n = this.j4n.clone();
                return a
            },
            bIF7y: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function () {
            q.reset.call(this);
            this.bat0x()
        },
        update: function (a) {
            this.XB9s(a);
            this.yD3x();
            return this
        },
        finalize: function (a) {
            a && this.XB9s(a);
            return this.Xx9o()
        },
        blockSize: 16,
        bar0x: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cfs2x: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}
(Math);
(function () {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words,
                p = d.sigBytes,
                t = this.bv5A;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++)
                    d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;)
                    d.push(l);
            return d.join("")
        },
        parse: function (d) {
            var l = d.length,
                s = this.bv5A,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        bv5A: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)
        b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bat0x: function () {
            this.dG6A = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bID7w: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dG6A.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        Xx9o: function () {
            var b = this.j4n,
                n = b.words,
                a = 8 * this.bIE7x,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.yD3x();
            b = this.dG6A;
            n = b.words;
            for (a = 0; 4 > a; a++)
                c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function () {
            var b = v.clone.call(this);
            b.dG6A = this.dG6A.clone();
            return b
        }
    });
    t.MD5 = v.bar0x(r);
    t.HmacMD5 = v.cfs2x(r)
})(Math);
(function () {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function (d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function (d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++)
                        n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function (e, a) {
                return this.create(this.bay0x, e, a)
            },
            createDecryptor: function (e, a) {
                return this.create(this.cfr2x, e, a)
            },
            init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bIC7v = e;
                this.J4N = a;
                this.reset()
            },
            reset: function () {
                t.reset.call(this);
                this.bat0x()
            },
            process: function (e) {
                this.XB9s(e);
                return this.yD3x()
            },
            finalize: function (e) {
                e && this.XB9s(e);
                return this.Xx9o()
            },
            keySize: 4,
            ivSize: 4,
            bay0x: 1,
            cfr2x: 2,
            bar0x: function (e) {
                return {
                    //TODO encrypt(b, k, d)
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        Xx9o: function () {
            return this.yD3x(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function (e, a, b) {
            var c = this.bIA7t;
            c ? this.bIA7t = u : c = this.bIz7s;
            for (var d = 0; d < b; d++)
                e[a + d] ^= c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function (e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function (e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function (e, a) {
                this.bIv7o = e;
                this.bIA7t = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bIv7o,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bIz7s = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bIv7o,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bIz7s = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)
                l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function () {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this.bIC7v == this.bay0x)
                var c = a.createEncryptor;
            else
                c = a.createDecryptor, this.bIF7y = 1;
            this.eC6w = c.call(a, this, b && b.words)
        },
        bID7w: function (a, b) {
            this.eC6w.processBlock(a, b)
        },
        Xx9o: function () {
            var a = this.cfg.padding;
            if (this.bIC7v == this.bay0x) {
                a.pad(this.j4n, this.blockSize);
                var b = this.yD3x(!0)
            } else
                b = this.yD3x(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function (a) {
                this.mixIn(a)
            },
            toString: function (a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function (a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            },
            parse: function (a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        //TODO l
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            //TODO encrypt(a, b, c, d)
            encrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.VB9s(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            VB9s: function (a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function (a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.VB9s(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}
();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)
        a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
            bat0x: function () {
                for (var a = this.J4N, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.ceV2x = d + 6) + 1), e = this.ceT2x = [], j = 0; j < a; j++)
                    if (j < d)
                        e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this.ceO2x = [];
                for (d = 0; d < a; d++)
                    j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function (a, b) {
                this.bIu7n(a, b, this.ceT2x, t, r, w, v, l)
            },
            decryptBlock: function (a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bIu7n(a, c, this.ceO2x, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            bIu7n: function (a, b, c, d, e, j, l, f) {
                for (var m = this.ceV2x, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)
                     var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p.bar0x(d)
})();
function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a),
        this.d = biFromHex(b),
        this.m = biFromHex(c),
        this.chunkSize = 2 * biHighIndex(this.m),
        this.radix = 16,
        this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;)
        c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;)
        c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h)
            j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e),
            l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
            g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e,
        f,
        g,
        h,
        c = b.split(" "),
        d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f)
            d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
        d
}
function setMaxDigits(a) {
    maxDigits = a,
        ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)
        ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
        bigOne = new BigInt,
        bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0),
        this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)
        ++c;
    if (c == a.length)
        d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;)
            d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0),
        b.isNeg = a.isNeg,
        b
}
function biFromNumber(a) {
    var c,
        b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;)
        b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c,
        b = "";
    for (c = a.length - 1; c > -1; --c)
        b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d,
        e,
        c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);)
        d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
    var c,
        d,
        b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);)
        c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15,
        c = "";
    for (i = 0; 4 > i; ++i)
        c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d,
        b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d)
        b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h,
        b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d,
        b = 0,
        c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)
        b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d,
        e,
        b = new BigInt,
        c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e)
        b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g,
        h,
        i,
        j,
        c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--)
        h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c,
        e
}
function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c,
        d,
        e,
        f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f)
            e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c,
        d,
        e,
        f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f)
            d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f)
                d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else
            c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)
        --b;
    return b
}
function biNumBits(a) {
    var e,
        b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)
        c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d,
        h,
        i,
        k,
        c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i)
            h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg,
        c
}
function biMultiplyDigit(a, b) {
    var c,
        d,
        e,
        f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f)
        e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d,
        result
}
function arrayCopy(a, b, c, d, e) {
    var g,
        h,
        f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h)
        c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e,
        f,
        g,
        h,
        c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h)
        d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal,
        d.isNeg = a.isNeg,
        d
}
function biShiftRight(a, b) {
    var e,
        f,
        g,
        h,
        c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h)
        d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e,
        d.isNeg = a.isNeg,
        d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
        c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
        c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b),
        c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg)
        return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c])
            return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg;
    if (d > c)
        return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;)
        b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);)
        ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;)
            --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1),
            g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
        g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i),
        f.isNeg = a.isNeg != e,
    a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)),
    0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
        new Array(f, g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne, d = a; ;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b)
            break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f))
            break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a),
        this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1,
        this.mu = biDivide(b, this.modulus),
        this.bkplus1 = new BigInt,
        this.bkplus1.digits[this.k + 1] = 1,
        this.modulo = BarrettMu_modulo,
        this.multiplyMod = BarrettMu_multiplyMod,
        this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i,
        b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;)
        h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d,
        e,
        c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b; ;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e))
            break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1, biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!function () {
    function a(a) {
        var d,
            e,
            b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b),
            d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a),
            f = CryptoJS.AES.encrypt(e, c, {
                iv: d,
                mode: CryptoJS.mode.CBC
            });
        return f.toString()
    }

    function c(a, b, c) {
        var d,
            e;
        return setMaxDigits(131),
            d = new RSAKeyPair(b, "", c),
            e = encryptedString(d, a)
    }

    //TODO d(d, e, f, g)
    function d(d, e, f, g) {
        var h = {},
            i = a(16);
        return h.encText = b(d, g),
            h.encText = b(h.encText, i),
            h.encSecKey = c(i, e, f),
            h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
            f
    }

    window.asrsea = d,
        window.ecnonasr = e
}
();
(function () {
    var c4g = NEJ.P,
        dO6I = c4g("nej.g"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        LT6N = c4g("nm.x.ek");
    LT6N.emj = {
        "鑹�": "00e0b",
        "娴佹劅": "509f6",
        "杩欒竟": "259df",
        "寮�": "8642d",
        "鍢村攪": "bc356",
        "浜�": "62901",
        "寮€蹇�": "477df",
        "鍛茬墮": "22677",
        "鎲ㄧ瑧": "ec152",
        "鐚�": "b5ff6",
        "鐨辩湁": "8ace6",
        "骞界伒": "15bb7",
        "铔嬬硶": "b7251",
        "鍙戞€�": "52b3a",
        "澶у摥": "b17a8",
        "鍏斿瓙": "76aea",
        "鏄熸槦": "8a5aa",
        "閽熸儏": "76d2e",
        "鐗垫墜": "41762",
        "鍏浮": "9ec4e",
        "鐖辨剰": "e341f",
        "绂佹": "56135",
        "鐙�": "fccf6",
        "浜蹭翰": "95280",
        "鍙�": "104e0",
        "绀肩墿": "312ec",
        "鏅�": "bda92",
        "鍛�": "557c9",
        "鐢熺梾": "38701",
        "閽荤煶": "14af6",
        "鎷�": "c9d05",
        "鎬�": "c4f7f",
        "绀虹埍": "0c368",
        "姹�": "5b7a4",
        "灏忛浮": "6bee2",
        "鐥涜嫤": "55932",
        "鎾囧槾": "575cc",
        "鎯舵亹": "e10b4",
        "鍙ｇ僵": "24d81",
        "鍚愯垖": "3cfe4",
        "蹇冪": "875d3",
        "鐢熸皵": "e8204",
        "鍙埍": "7b97d",
        "楝艰劯": "def52",
        "璺宠垶": "741d5",
        "鐢峰": "46b8e",
        "濂哥瑧": "289dc",
        "鐚�": "6935b",
        "鍦�": "3ece0",
        "渚夸究": "462db",
        "澶栨槦": "0a22b",
        "鍦ｈ癁": "8e7",
        "娴佹唱": "01000",
        "寮�": "1",
        "鐖卞績": "0CoJU",
        "濂冲": "m6Qyw",
        "鎯婃亹": "8W8ju",
        "澶х瑧": "d"
    };
    LT6N.md = ["鑹�", "娴佹劅", "杩欒竟", "寮�", "鍢村攪", "浜�", "寮€蹇�", "鍛茬墮", "鎲ㄧ瑧", "鐚�", "鐨辩湁", "骞界伒", "铔嬬硶", "鍙戞€�", "澶у摥", "鍏斿瓙", "鏄熸槦", "閽熸儏", "鐗垫墜", "鍏浮", "鐖辨剰", "绂佹", "鐙�", "浜蹭翰", "鍙�", "绀肩墿", "鏅�", "鍛�", "鐢熺梾", "閽荤煶", "鎷�", "鎬�", "绀虹埍", "姹�", "灏忛浮", "鐥涜嫤", "鎾囧槾", "鎯舵亹", "鍙ｇ僵", "鍚愯垖", "蹇冪", "鐢熸皵", "鍙埍", "楝艰劯", "璺宠垶", "鐢峰", "濂哥瑧", "鐚�", "鍦�", "渚夸究", "澶栨槦", "鍦ｈ癁"]
})();
(function () {
    var c4g = NEJ.P,
        dO6I = c4g("nej.g"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        LT6N = c4g("nm.x.ek"),
        l4p = c4g("nm.x");
    if (v4z.bp5u.redefine)
        return;
    window.GEnc = true;
    var baT0x = function (ceN2x) {
        var m4q = [];
        k4o.be5j(ceN2x, function (ceM2x) {
            m4q.push(LT6N.emj[ceM2x])
        });
        return m4q.join("")
    };
    var ceJ2x = v4z.bp5u;
    v4z.bp5u = function (V4Z, e4i) {
        var j4n = {},
            e4i = NEJ.X({}, e4i),
            lB9s = V4Z.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V4Z) && !(e4i.headers && e4i.headers[dO6I.xj2x] == dO6I.DB4F) && !e4i.noEnc) {
            if (lB9s != -1) {
                j4n = k4o.hi7b(V4Z.substring(lB9s + 1));
                V4Z = V4Z.substring(0, lB9s)
            }
            if (e4i.query) {
                j4n = NEJ.X(j4n, k4o.fe6Y(e4i.query) ? k4o.hi7b(e4i.query) : e4i.query)
            }
            if (e4i.data) {
                j4n = NEJ.X(j4n, k4o.fe6Y(e4i.data) ? k4o.hi7b(e4i.data) : e4i.data)
            }
            j4n["csrf_token"] = v4z.gG7z("__csrf");
            V4Z = V4Z.replace("api", "weapi");
            e4i.method = "post";
            delete e4i.query;
            var bIn7g = window.asrsea(JSON.stringify(j4n), baT0x(["娴佹唱", "寮�"]), baT0x(LT6N.md), baT0x(["鐖卞績", "濂冲", "鎯婃亹", "澶х瑧"]));
            e4i.data = k4o.df6Z({

                params: bIn7g.encText,
                encSecKey: bIn7g.encSecKey
            })
        }
        ceJ2x(V4Z, e4i)
    };
    v4z.bp5u.redefine = true
})();
(function () {
    window.setTimeout(function () {
        var bp = document.createElement("script");
        var curProtocol = window.location.protocol.split(":")[0];
        if (curProtocol === "https") {
            bp.src = "https://zz.bdstatic.com/linksubmit/push.js"
        } else {
            bp.src = "http://push.zhanzhang.baidu.com/push.js"
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s)
    }, 3e3)
})();
(function () {
})();
(function () {
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        cK6E = c4g("nej.p"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        di6c = c4g("nm.u"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        n4r = c4g("nm.l"),
        bbe0x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j4n = {
            "澶х瑧": "86",
            "鍙埍": "85",
            "鎲ㄧ瑧": "359",
            "鑹�": "95",
            "浜蹭翰": "363",
            "鎯婃亹": "96",
            "娴佹唱": "356",
            "浜�": "362",
            "鍛�": "352",
            "鍝€浼�": "342",
            "鍛茬墮": "343",
            "鍚愯垖": "348",
            "鎾囧槾": "353",
            "鎬�": "361",
            "濂哥瑧": "341",
            "姹�": "97",
            "鐥涜嫤": "346",
            "鎯舵亹": "354",
            "鐢熺梾": "350",
            "鍙ｇ僵": "351",
            "澶у摥": "357",
            "鏅�": "355",
            "鍙戞€�": "115",
            "寮€蹇�": "360",
            "楝艰劯": "94",
            "鐨辩湁": "87",
            "娴佹劅": "358",
            "鐖卞績": "33",
            "蹇冪": "34",
            "閽熸儏": "303",
            "鏄熸槦": "309",
            "鐢熸皵": "314",
            "渚夸究": "89",
            "寮�": "13",
            "寮�": "372",
            "鎷�": "14",
            "鐗垫墜": "379",
            "璺宠垶": "380",
            "绂佹": "374",
            "杩欒竟": "262",
            "鐖辨剰": "106",
            "绀虹埍": "376",
            "鍢村攪": "367",
            "鐙�": "81",
            "鐚�": "78",
            "鐚�": "100",
            "鍏斿瓙": "459",
            "灏忛浮": "450",
            "鍏浮": "461",
            "骞界伒": "116",
            "鍦ｈ癁": "411",
            "澶栨槦": "101",
            "閽荤煶": "52",
            "绀肩墿": "107",
            "鐢峰": "0",
            "濂冲": "1",
            "铔嬬硶": "337",
            18: "186",
            "鍦�": "312",
            "鍙�": "313"
        },
        ceF2x = function () {
            if (h4l && h4l.z4D) {
                h4l.dispatchEventalias = h4l.z4D
            }
        };
    ceF2x();
    l4p.bbi0x = function (bK5P) {
        if (!bK5P || bK5P.copyrightId === undefined || !!bK5P.program)
            return false;
        if (window.GAbroad) {
            bK5P.fee = 0;
            return true
        }
        if (bK5P.status < 0)
            return true;
        var Mg6a;
        if (typeof GCopyrights !== "undefined")
            Mg6a = GCopyrights;
        try {
            if (!Mg6a && !!top.GCopyrights)
                Mg6a = top.GCopyrights
        } catch (e) {
        }
        if (Mg6a) {
            var s4w = k4o.cV6P(Mg6a, bK5P.copyrightId);
            if (s4w >= 0)
                return true
        }
        return false
    };
    l4p.bbn0x = function () {
        var zM3x = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            uE2x = {
                2: "artist",
                13: "playlist",
                17: "dj",
                19: "album",
                18: "song",
                31: "toplist",
                32: "searchsong",
                33: "searchlyric",
                34: "event",
                70: "djradio",
                24: "day",
                50: "record"
            },
            ceD2x = {
                song: "鍗曟洸",
                album: "涓撹緫",
                artist: "姝屾墜",
                playlist: "姝屽崟",
                dj: "鐢靛彴鑺傜洰",
                searchsong: "鍗曟洸鎼滅储",
                searchlyric: "姝岃瘝鎼滅储",
                toplist: "姒滃崟",
                event: "鍔ㄦ€�",
                djradio: "鐢靛彴",
                day: "姣忔棩姝屾洸鎺ㄨ崘",
                record: "鍚瓕鎺掕姒�"
            };
        var ceB2x = function (J4N, j4n, Mh6b) {
            switch (J4N) {
                case "event":
                    j4n = j4n.split("|");
                    return "/event?id=" + j4n[0] + "&uid=" + j4n[1];
                case "searchsong":
                case "searchlyric":
                    var t4x = J4N == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j4n) + "&type=" + t4x;
                case "toplist":
                    return "/discover/toplist?id=" + j4n + "&_hash=songlist-" + Mh6b;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Mh6b;
                    ;
                case "record":
                    j4n = j4n.split("|");
                    return "/user/songs/rank?id=" + j4n[0] + "&cat=" + j4n[1];
                    break;
                default:
                    return "/" + J4N + "?id=" + j4n + "&_hash=songlist-" + Mh6b
            }
        };
        return function (dK6E, Mh6b) {
            if (!dK6E)
                return null;
            var GL5Q = dK6E.fid || (dK6E.type != 18 ? dK6E.type : null),
                bbw1x = dK6E.fdata || dK6E.rid,
                bIg7Z = dK6E.page || dK6E.fhref;
            var J4N = uE2x[GL5Q];
            if (!J4N) {
                var xf2x = (bIg7Z || "").match(zM3x);
                if (xf2x)
                    J4N = xf2x[1]
            }
            if (!J4N)
                return null;
            return {
                title: ceD2x[J4N],
                link: !uE2x[GL5Q] ? bIg7Z : ceB2x(J4N, bbw1x, Mh6b),
                fid: GL5Q,
                fdata: bbw1x
            }
        }
    }
    ();
    l4p.Xa9R = function (ku9l) {
        var du6o = ku9l;
        if (typeof GUser !== "undefined" && GUser.userId > 0)
            du6o = GUser;
        return du6o
    };
    l4p.gY7R = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l4p.Gx5C = function () {
        var zM3x = /#(.*?)$/;
        return function (gi7b) {
            var iM8E = gi7b === false ? location : top.location;
            return zM3x.test(iM8E.href) ? RegExp.$1 : ""
        }
    }
    ();
    l4p.Ab3x = function () {
        var bIc7V = l4p.bbY1x().supported,
            Ai3x = a3x.cU6O("audio"),
            bIb7U = Ai3x.canPlayType && Ai3x.canPlayType("audio/mpeg");
        if (cK6E.Kh6b.mac) {
            if (bIb7U)
                return 2;
            if (bIc7V)
                return 1;
            return 0
        } else {
            if (bIc7V)
                return 1;
            if (bIb7U)
                return 2;
            return 0
        }
    };
    l4p.bbY1x = function () {
        var gd7W,
            bbZ1x = !1,
            bcc1x = "";
        if (cK6E.cS6M.browser == "ie") {
            try {
                gd7W = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gd7W = null
            }
            if (gd7W) {
                bbZ1x = !0;
                bcc1x = gd7W.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gd7W = navigator.plugins["Shockwave Flash"];
                if (gd7W) {
                    bbZ1x = !0;
                    bcc1x = gd7W.description
                }
            }
        }
        return {
            supported: bbZ1x,
            version: bcc1x
        }
    };
    l4p.qE0x = function () {
        return "缃戞槗浜戦煶涔�"
    };
    l4p.cdZ2x = function () {
        return j4n
    };
    l4p.bIa7T = function (da6U) {
        var C4G = j4n[da6U];
        return C4G == null ? "" : bbe0x.replace("{ID}", C4G)
    };
    l4p.tw1x = function (bi5n, dD6x, Hr5w) {
        if (!bi5n)
            return "";
        if (!!Hr5w) {
            bi5n = l4p.cdW2x(bi5n)
        }
        return l4p.bcs1x(l4p.cdU2x(bi5n, dD6x))
    };
    //l4p.bcu1x = function () {
    //	var Mj6d = {
    //		AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@锛歖)|$))/g,
    //		LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@锛歖)|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
    //		ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@锛歖)|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
    //		ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@锛歖)|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
    //		LING: /\n/g,
    //		BLANK: /\s/g,
    //		MLINE: /([ \f\r\t\v]*\n){2,}/g
    //	},
    //	bcw1x = {
    //		LINK: '<a href="${url}" class="${klass}">${value}</a>',
    //		AT: '<a href="${url}" class="${klass}">@${value}</a>',
    //		ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
    //	},
    //	cdP2x = {
    //		r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
    //		"<": "&lt;",
    //		">": "&gt;",
    //		"&": "&amp;",
    //		" ": "&nbsp;",
    //		'"': "&quot;",
    //		"'": "&#39;",
    //		"&lt;": "&lt;",
    //		"&gt;": "&gt;"
    //	},
    //	cdM2x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
    //	var cdK2x = function (dl6f, bcG1x) {
    //		dl6f = HL5Q(dl6f);
    //		if (!!bcG1x) {
    //			dl6f = dl6f.replace(Mj6d.MLINE, "\n\n").replace(Mj6d.LING, "</br>")
    //		}
    //		dl6f = l4p.bcs1x(dl6f);
    //		return dl6f
    //	};
    //	var HL5Q = function (bi5n) {
    //		return k4o.Bh4l(cdP2x, bi5n)
    //	};
    //	return function (dl6f, e4i, eb6V) {
    //		e4i = e4i || {};
    //		eb6V = eb6V || {};
    //		eb6V.actHash = {};
    //		var cdJ2x = !!e4i.parseLink,
    //		cdG2x = !!e4i.parseAct,
    //		cdF2x = e4i.linkTpl || bcw1x.LINK,
    //		cdD2x = e4i.atTpl || bcw1x.AT,
    //		cdC2x = e4i.actTpl || bcw1x.ACT,
    //		bcG1x = !!e4i.keepSpace,
    //		bcT1x = e4i.linkKlass || "s-fc7";
    //		cuo6i = e4i.actBiJson || "";
    //		if (!dl6f)
    //			return "";
    //		dl6f = dl6f.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
    //		var kt9k = cdM2x[cdJ2x + 2 * cdG2x],
    //		cP6J = Mj6d[kt9k],
    //		bs5x = null,
    //		lg9X = null,
    //		gz7s = 0,
    //		cup6j = "",
    //		cuq6k = "";
    //		var yk3x = [];
    //		cP6J.lastIndex = 0;
    //		while (bs5x = cP6J.exec(dl6f)) {
    //			var fI7B = {
    //				html: "",
    //				before: bs5x.index - 1,
    //				after: bs5x.index + bs5x[0].length
    //			};
    //			if (bs5x[1]) {
    //				var lg9X = bs5x[2].replace(/[^\x00-\xff]/g, "**");
    //				if (lg9X.length < 4 || lg9X.length > 32) {}
    //				else {
    //					var Mt6n = a3x.em6g(cdD2x);
    //					fI7B.html = a3x.bP5U(Mt6n, {
    //							value: HL5Q(bs5x[2]),
    //							url: encodeURI("/user/home?nickname=" + bs5x[2]),
    //							klass: bcT1x
    //						});
    //					yk3x.push(fI7B)
    //				}
    //			} else if (bs5x.length > 8 && bs5x[4]) {
    //				var Mt6n = a3x.em6g(cdF2x);
    //				fI7B.html = a3x.bP5U(Mt6n, {
    //						value: HL5Q(bs5x[4]),
    //						url: encodeURI(bs5x[4]),
    //						klass: bcT1x
    //					});
    //				yk3x.push(fI7B)
    //			} else {
    //				var bHR7K = kt9k == "ACT_NOLINK" ? 4 : 9;
    //				var Mt6n = a3x.em6g(cdC2x);
    //				fI7B.html = a3x.bP5U(Mt6n, {
    //						value: HL5Q(bs5x[bHR7K]),
    //						klass: bcT1x
    //					});
    //				yk3x.push(fI7B);
    //				eb6V.actHash[bs5x[bHR7K].slice(1, -1)] = true
    //			}
    //		}
    //		var cds1x = yk3x.length,
    //		ku9l = {
    //			before: dl6f.length - 1,
    //			after: 0
    //		},
    //		bdt1x = "";
    //		for (var i = 0; i <= cds1x; i++) {
    //			var is8k,
    //			gy7r;
    //			is8k = (yk3x[i - 1] || ku9l).after;
    //			gy7r = (yk3x[i] || ku9l).before;
    //			if (gy7r >= is8k && is8k >= 0 && gy7r <= dl6f.length - 1) {
    //				bdt1x += cdK2x(dl6f.substring(is8k, gy7r + 1), bcG1x)
    //			}
    //			if (yk3x[i]) {
    //				bdt1x += yk3x[i].html
    //			}
    //		}
    //		return bdt1x
    //	}
    //}
    //();
    l4p.cdW2x = function () {
        var cP6J = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bi5n) {
            return (bi5n || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cP6J, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>缃戦〉閾炬帴</a>'
            })
        }
    }
    ();
    l4p.cdU2x = function () {
        var cP6J = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eH6B = function (lg9X, dD6x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lg9X) + '" class="' + (dD6x || "") + '">@' + lg9X + "</a>"
        };
        return function (bi5n, dD6x) {
            return (bi5n || "").replace(cP6J, function ($0, $1) {
                return eH6B($1, dD6x)
            })
        }
    }
    ();
    l4p.bcs1x = function () {
        var cP6J = /\[(.*?)\]/g;
        return function (bi5n) {
            return (bi5n || "").replace(cP6J, function ($1, $2) {
                var V4Z = l4p.bIa7T($2);
                return !V4Z ? $1 : '<img src="' + V4Z + '"/>'
            })
        }
    }
    ();
    l4p.Ak3x = function (E4I, dD6x) {
        a3x.by5D(E4I, dD6x) ? a3x.w4A(E4I, dD6x) : a3x.y4C(E4I, dD6x)
    };
    l4p.My6s = function (cI6C, hG8y) {
        cI6C = a3x.x4B(cI6C);
        hG8y = a3x.x4B(hG8y);
        if (!cI6C || !hG8y)
            return !1;
        for (hG8y = hG8y.parentNode; !!hG8y && hG8y != cI6C; hG8y = hG8y.parentNode);
        return hG8y == cI6C
    };
    l4p.lN9E = function () {
        var bHQ7J = function (fq7j) {
            return (fq7j < 10 ? "0" : "") + fq7j
        };
        return function (jS9J) {
            jS9J = parseInt(jS9J) || 0;
            if (!jS9J)
                return "00:00";
            var MI6C = Math.floor(jS9J % 60),
                cdo1x = Math.floor(jS9J / 60);
            return bHQ7J(cdo1x) + ":" + bHQ7J(MI6C)
        }
    }
    ();
    l4p.wV2x = function (fo7h, ve2x) {
        if (!fo7h || fo7h.length == 0)
            return "";
        ve2x = ve2x || "/";
        var bs5x = [];
        for (var i = fo7h.length - 1; i >= 0; i--) {
            bs5x.unshift(fo7h[i].name)
        }
        return bs5x.join(ve2x)
    };
    l4p.pO0x = function () {
        var MO6I = function (hn7g, dD6x, cI6C) {
            if (!hn7g || !hn7g.name)
                return "";
            if (!hn7g.id)
                return '<span class="' + dD6x + '">' + k4o.dM6G(hn7g.name) + "</span>";
            return "<a" + (cI6C ? ' target="_blank"' : "") + ' class="' + dD6x + '" href="/artist?id=' + hn7g.id + '" hidefocus="true">' + k4o.dM6G(hn7g.name) + "</a>"
        };
        return function (fo7h, T4X, ve2x, cI6C, bHM7F) {
            if (!fo7h || !fo7h.length)
                return "";
            ve2x = ve2x || "/";
            T4X = T4X || "";
            Jk6e = "";
            var eG6A = [];
            for (var i = 0, i4m = [], rd0x = [], fh6b; i < fo7h.length; ++i) {
                eG6A.push(fo7h[i].name);
                if (!fo7h[i] || fo7h[i].id <= 0) {
                    rd0x.push(fo7h[i]);
                    continue
                }
                if (k4o.gf7Y(T4X)) {
                    fh6b = T4X(fo7h[i])
                } else {
                    fh6b = MO6I(fo7h[i], T4X, cI6C)
                }
                if (fh6b && bHM7F && fo7h[i].tns && fo7h[i].tns.length > 0) {
                    Jk6e = k4o.dM6G(fo7h[i].tns[0]);
                    fh6b += '<span class="s-fc8" title="' + Jk6e + '"> - (' + Jk6e + ")</span>"
                }
                !!fh6b && i4m.push(fh6b)
            }
            for (var i = 0, fh6b; i < rd0x.length; ++i) {
                if (k4o.gf7Y(T4X)) {
                    fh6b = T4X(rd0x[i])
                } else {
                    fh6b = MO6I(rd0x[i], T4X, cI6C)
                }
                if (fh6b && bHM7F && rd0x[i].tns && rd0x[i].tns.length > 0) {
                    Jk6e = k4o.dM6G(rd0x[i].tns[0]);
                    fh6b += '<span class="s-fc8" title="' + Jk6e + '"> - (' + Jk6e + ")</span>"
                }
                !!fh6b && i4m.push(fh6b)
            }
            return '<span title="' + eG6A.join(ve2x) + '">' + i4m.join(ve2x) + "</span>"
        }
    }
    ();
    l4p.wR2x = function (eS6M) {
        return !!eS6M && /^[0-9]{11}$/.test(eS6M)
    };
    l4p.cur6l = function (eS6M) {
        if (!l4p.wR2x(eS6M))
            return eS6M;
        return eS6M.substring(0, 3) + "****" + eS6M.substr(7)
    };
    l4p.ja8S = function () {
        var cP6J = /^\s+$/g;
        return function (hH8z) {
            return !hH8z || cP6J.test(hH8z)
        }
    }
    ();
    l4p.Fh5m = function () {
        var beD1x = /[^\x00-\xfff]/g;
        return function (hH8z) {
            var cdg1x = hH8z.match(beD1x) || [],
                dF6z = cdg1x.length;
            return hH8z.length + dF6z
        }
    }
    ();
    l4p.zQ3x = function () {
        var beD1x = /[^\x00-\xfff]/;
        return function (hH8z, gk7d) {
            for (var i = 0, len = hH8z.length; i < len && gk7d > 0; i++) {
                if (beD1x.test(hH8z.charAt(i))) {
                    gk7d -= 2;
                    if (gk7d < 0) {
                        break
                    }
                } else {
                    gk7d -= 1
                }
            }
            return hH8z.substring(0, i)
        }
    }
    ();
    l4p.Dt4x = function (hH8z, gk7d, Lx6r) {
        gk7d = gk7d || 10;
        Lx6r = Lx6r || nej.p.cS6M.engine == "trident" && parseInt(nej.p.cS6M.release) < 5;
        if (Lx6r && l4p.Fh5m(hH8z) > gk7d) {
            return l4p.zQ3x(hH8z, gk7d) + "..."
        } else {
            return hH8z
        }
    };
    l4p.bHL7E = function (f4j) {
        return f4j === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f4j.type || f4j.href || ~f4j.tabIndex)
    };
    l4p.cde1x = function (d4h, cI6C) {
        if (!d4h || !cI6C)
            return !0;
        var f4j,
            t4x = d4h.type.toLowerCase();
        if (t4x == "mouseout") {
            f4j = d4h.relatedTarget || d4h.toElement
        } else if (t4x == "mouseover") {
            f4j = d4h.relatedTarget || d4h.fromElement
        }
        return !f4j || f4j !== cI6C && !l4p.My6s(cI6C, f4j)
    };
    l4p.rh0x = function () {
        R4V = {};
        return function (f4j, dJ6D) {
            var C4G = a3x.kp9g(f4j),
                J4N = "hover-" + C4G;
            if (!dJ6D || !C4G || !!R4V[J4N])
                return;
            R4V[J4N] = !0;
            h4l.q4u(C4G, "mouseover", function () {
                var bfd1x = a3x.I4M(f4j, "hshow") || [];
                var bfg1x = a3x.I4M(f4j, "icn-dislike") || [];
                a3x.y4C(C4G, "z-hover");
                a3x.X4b(bfd1x[0], "display", "block");
                a3x.X4b(bfg1x[0], "display", "block")
            });
            h4l.q4u(C4G, "mouseout", function () {
                var bfd1x = a3x.I4M(f4j, "hshow") || [];
                var bfg1x = a3x.I4M(f4j, "icn-dislike") || [];
                a3x.w4A(C4G, "z-hover");
                a3x.X4b(bfd1x[0], "display", "none");
                a3x.X4b(bfg1x[0], "display", "none")
            })
        }
    }
    ();
    l4p.bHK7D = function () {
        var bv5A = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (hH8z) {
            return k4o.Bh4l(bv5A, hH8z)
        }
    }
    ();
    l4p.tT2x = function (bB5G) {
        if (k4o.Iq5v(bB5G))
            bB5G = bB5G.getTime();
        var fN7G = new Date,
            mM9D = fN7G.getTime() - bB5G;
        if (mM9D <= 6e4)
            return "鍒氬垰";
        var qR0x = fN7G.getHours() * 36e5 + fN7G.getMinutes() * 6e4 + fN7G.getSeconds() * 1e3;
        if (mM9D <= qR0x) {
            if (mM9D < 36e5) {
                var MR6L = Math.floor(mM9D / 6e4);
                return MR6L + "鍒嗛挓鍓�"
            }
            return k4o.iS8K(bB5G, "HH:mm")
        } else {
            if (mM9D < qR0x + 864e5) {
                return "鏄ㄥぉ" + k4o.iS8K(bB5G, "HH:mm")
            } else {
                var gj7c = fN7G.getFullYear(),
                    bfG2x = new Date(gj7c, 0, 1);
                var qR0x = fN7G.getTime() - bfG2x.getTime();
                if (mM9D < qR0x) {
                    return k4o.iS8K(bB5G, "M鏈坉鏃� HH:mm")
                }
                return k4o.iS8K(bB5G, "yyyy骞碝鏈坉鏃�")
            }
        }
    };
    l4p.cda1x = function (bB5G) {
        if (k4o.Iq5v(bB5G))
            bB5G = bB5G.getTime();
        var fN7G = new Date,
            mM9D = fN7G.getTime() - bB5G;
        var qR0x = fN7G.getHours() * 36e5 + fN7G.getMinutes() * 6e4 + fN7G.getSeconds() * 1e3;
        if (mM9D <= qR0x) {
            return "浠婂ぉ" + k4o.iS8K(bB5G, "HH:mm")
        } else {
            if (mM9D < qR0x + 864e5) {
                return "鏄ㄥぉ" + k4o.iS8K(bB5G, "HH:mm")
            } else {
                return k4o.iS8K(bB5G, "yy-MM-dd HH:mm")
            }
        }
    };
    l4p.ccY1x = function (bB5G) {
        if (k4o.Iq5v(bB5G))
            bB5G = bB5G.getTime();
        var fN7G = new Date,
            mM9D = fN7G.getTime() - bB5G;
        if (mM9D <= 6e4)
            return "鍒氬垰";
        var qR0x = fN7G.getHours() * 36e5 + fN7G.getMinutes() * 6e4 + fN7G.getSeconds() * 1e3;
        if (mM9D <= qR0x) {
            if (mM9D < 36e5) {
                var MR6L = Math.floor(mM9D / 6e4);
                return MR6L + "鍒嗛挓鍓�"
            }
            return k4o.iS8K(bB5G, "HH:mm")
        } else {
            if (mM9D < qR0x + 864e5) {
                return "鏄ㄥぉ" + k4o.iS8K(bB5G, "HH:mm")
            } else if (mM9D < qR0x + 864e5 * 6) {
                var gj7c = fN7G.getFullYear(),
                    bfG2x = new Date(gj7c, 0, 1);
                var qR0x = fN7G.getTime() - bfG2x.getTime();
                if (mM9D < qR0x) {
                    return k4o.iS8K(bB5G, "M鏈坉鏃� HH:mm")
                }
                return k4o.iS8K(bB5G, "yyyy骞碝鏈坉鏃�")
            } else {
                return "鏈€杩�"
            }
        }
    };
    l4p.MV6P = function () {
        var cP6J = /\{(.*?)\}/gi;
        return function (pD0x, j4n) {
            return (pD0x || "").replace(cP6J, function ($1, $2) {
                var A4E = j4n[$2];
                return A4E == null ? $1 : A4E
            })
        }
    }
    ();
    l4p.eQ6K = function () {
        var bg5l = Array.prototype.slice.call(arguments, 0),
            pD0x = bg5l.shift();
        if (pD0x) {
            return pD0x.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bg5l.length ? bg5l[$2] : $1
            })
        }
        return ""
    };
    l4p.Go5t = function (i4m, dD6x, lf9W) {
        return "";
        lf9W = lf9W || " - ";
        if (i4m && i4m.length) {
            return lf9W + (!!dD6x ? '<span class="' + dD6x + '">' + i4m[0] + "</span>" : i4m[0])
        }
        return ""
    };
    l4p.bHG7z = function () {
        if (window.getSelection) {
            var qQ0x = window.getSelection();
            if (qQ0x && qQ0x.focusNode && qQ0x.focusNode.tagName) {
                var Aj3x = a3x.cQ6K(qQ0x.focusNode);
                for (var i = 0, wP2x; i < Aj3x.length; ++i) {
                    wP2x = Aj3x[i].tagName;
                    if (!wP2x)
                        continue;
                    wP2x = wP2x.toLowerCase();
                    if (wP2x == "textarea" || wP2x == "input")
                        return !0
                }
            }
        } else if (document.selection) {
            var cH6B = document.selection.createRange();
            if (cH6B) {
                var f4j = cH6B.parentElement();
                if (f4j && f4j.tagName) {
                    var wP2x = f4j.tagName.toLowerCase();
                    if (wP2x == "textarea" || wP2x == "input")
                        return !0
                }
            }
        }
        return !1
    };
    l4p.Ar3x = function (fp7i) {
        if (/^[A-Z]\:\\/i.test(fp7i)) {
            fp7i = fp7i.split("\\")
        } else {
            fp7i = fp7i.split("/")
        }
        fp7i = fp7i[fp7i.length - 1];
        return fp7i
    };
    l4p.ccV1x = function () {
        var DO4S = [13, 17, 34, 19, 18, 21];
        return function (C4G) {
            var bs5x = (C4G || "").split("_");
            return {
                type: DO4S[bs5x[2]] || -1,
                id: bs5x[3] || ""
            }
        }
    }
    ();
    l4p.bgj2x = function (du6o) {
        if (4 == du6o.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (du6o.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (du6o.expertTags && du6o.expertTags.length) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l4p.Na6U = function (fq7j) {
        fq7j += "";
        if (fq7j) {
            return fq7j.substr(0, 3) + "****" + fq7j.substr(fq7j.length - 4)
        }
    };
    l4p.cus6m = function (s4w, co5t) {
        return (s4w % co5t + co5t) % co5t
    };
    l4p.bHF7y = function () {
        var DO4S = ["playlist", "program", "event", "album", "song", "mv", "topic"];
        return function (C4G) {
            var bs5x = (C4G || "").split("_"),
                m4q = {
                    type: DO4S[bs5x[2]] || -1,
                    id: bs5x[3] || ""
                };
            if (m4q.type == "event") {
                m4q.uid = bs5x[4] || "";
                return "/" + m4q.type + "?id=" + m4q.id + "&uid=" + m4q.uid
            }
            return "/" + m4q.type + "?id=" + m4q.id
        }
    }
    ();
    l4p.bHE7x = function () {
        var DO4S = ["姝屽崟", "鐢靛彴鑺傜洰", "鍔ㄦ€�", "涓撹緫", "鍗曟洸", "MV", "涓撴爮鏂囩珷"];
        return function (C4G) {
            var bs5x = (C4G || "").split("_");
            return DO4S[bs5x[2]] || "璧勬簮"
        }
    }
    ();
    l4p.ccR1x = function (bC5H) {
        var qs = bC5H.length > 0 ? bC5H.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l4p.bHD7w = function (wM2x, Nc6W) {
        var Wa9R = 0,
            dY6S = new Array;
        k4o.be5j(wM2x, function (V4Z, s4w) {
            var cZ6T = a3x.cU6O("img");
            cZ6T.src = V4Z;
            h4l.q4u(cZ6T, "load", function (s4w, d4h) {
                dY6S[s4w] = 1;
                Wa9R++;
                if (Wa9R == wM2x.length)
                    Nc6W(wM2x, dY6S)
            }
                .g4k(this, s4w));
            h4l.q4u(cZ6T, "error", function (d4h, s4w) {
                dY6S[s4w] = 0;
                Wa9R++;
                if (Wa9R == wM2x.length)
                    Nc6W(wM2x, dY6S)
            }
                .g4k(this, s4w))
        })
    };
    l4p.VZ9Q = function (i4m, dE6y) {
        var m4q = [];
        k4o.be5j(i4m, function (r4v, s4w, ig8Y) {
            m4q.push(dE6y(r4v, s4w, ig8Y))
        });
        return m4q
    };
    l4p.Tx8p = function (i4m, dE6y, ig8Y) {
        var m4q = [];
        k4o.be5j(i4m, function (r4v, s4w) {
            if (dE6y.call(ig8Y, r4v, s4w, i4m)) {
                m4q.push(r4v)
            }
        });
        return m4q
    };
    l4p.ccO1x = function (bi5n) {
        return k4o.dM6G((bi5n || "").replace(/\s{2,}/g, " ").trim())
    };
    l4p.bgP2x = function (bf5k) {
        if (bf5k.transNames && bf5k.transNames.length) {
            return bf5k.transNames[0]
        } else if (bf5k.alias && bf5k.alias.length) {
            return bf5k.alias[0]
        }
    };
    l4p.bHC7v = function (Li6c) {
        if (Li6c) {
            return Li6c.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l4p.bgU2x = function (f4j) {
        var f4j = a3x.x4B(f4j),
            da6U = f4j && f4j.getElementsByTagName("textarea")[0],
            J4N = a3x.u4y(f4j, "key"),
            bgV2x = a3x.u4y(f4j, "simple") == "1",
            bHB7u = p4t.uH2x.fV7O();
        if (!(f4j && da6U && J4N))
            return;
        if (bgV2x) {
            bHB7u.rr0x(J4N, l4p.DN4R(JSON.parse(da6U.value)))
        } else {
            bHB7u.rr0x(J4N, JSON.parse(da6U.value || da6U.defaultValue))
        }
        f4j.innerHTML = "";
        return J4N
    };
    l4p.ccL1x = function (oC0x) {
        if (!oC0x.onbeforelistload) {
            oC0x.onbeforelistload = function (d4h) {
                d4h.value = '<div class="u-load s-fc4"><i class="icn"></i> 鍔犺浇涓�...</div>'
            }
        }
        if (!oC0x.onemptylist) {
            oC0x.onemptylist = function (d4h) {
                d4h.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oC0x.emptyMsg || "鏆傛椂杩樻病鏈夋暟鎹�") + "</h3></div>"
            }
        }
        return oC0x
    };
    l4p.DN4R = function (hu7n) {
        if (k4o.el6f(hu7n)) {
            var eb6V = [];
            k4o.be5j(hu7n, function (bgV2x) {
                eb6V.push(bHA7t(bgV2x))
            });
            return eb6V
        } else {
            return bHA7t(hu7n)
        }
        function bHA7t(hu7n) {
            if (!hu7n)
                return null;
            var eb6V = {
                album: hu7n.al,
                alias: hu7n.alia || hu7n.ala || [],
                artists: hu7n.ar || [],
                commentThreadId: "R_SO_4_" + hu7n.id,
                copyrightId: hu7n.cp || 0,
                duration: hu7n.dt || 0,
                id: hu7n.id,
                mvid: hu7n.mv || 0,
                name: hu7n.name || "",
                cd: hu7n.cd,
                position: hu7n.no || 0,
                ringtone: hu7n.rt,
                rtUrl: hu7n.rtUrl,
                status: hu7n.st || 0,
                pstatus: hu7n.pst || 0,
                fee: hu7n.fee || 0,
                version: hu7n.v || 0,
                eq: hu7n.eq,
                songType: hu7n.t || 0,
                mst: hu7n.mst,
                score: hu7n.pop || 0,
                ftype: hu7n.ftype,
                rtUrls: hu7n.rtUrls,
                transNames: hu7n.tns,
                privilege: hu7n.privilege,
                lyrics: hu7n.lyrics
            };
            return eb6V
        }
    };
    l4p.cut6n = function () {
        var f4j = a3x.mT9K('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>鍒嗕韩鎵撲笉寮€锛�</h3>" + '<p>璇风偣鍑诲彸涓婅<br>閫夋嫨<span class="s-fc5">鈥滃垎浜埌...鈥�</span></p>' + "</div></div></div>");
        document.body.appendChild(f4j);
        h4l.q4u(f4j, "click", function (d4h) {
            h4l.bh5m(d4h);
            a3x.cF6z(f4j)
        })
    };
    l4p.lk9b = function (ct5y) {
        if (ct5y < 1e5) {
            return ct5y
        } else {
            return Math.floor(ct5y / 1e4) + "涓�"
        }
    };
    l4p.uA2x = function (ct5y, da6U) {
        return "<i>" + (ct5y ? "(" + ct5y + ")" : da6U) + "</i>"
    };
    l4p.bHy7r = function (t4x, hl7e) {
        var e4i = {};
        if (!k4o.kg9X(hl7e)) {
            return e4i
        }
        switch (parseInt(t4x)) {
            case 17:
                e4i.title = hl7e.name;
                e4i.author = (hl7e.radio || []).name;
                e4i.picUrl = hl7e.coverUrl;
                e4i.category = hl7e.radio.category;
                break;
            case 19:
                e4i.title = hl7e.name;
                e4i.author = l4p.wV2x(hl7e.artists);
                e4i.authors = l4p.wV2x(hl7e.artists, " / ");
                e4i.picUrl = hl7e.picUrl;
                break;
            case 13:
                e4i.title = hl7e.name;
                e4i.author = (hl7e.creator || []).nickname;
                e4i.picUrl = hl7e.coverImgUrl;
                break;
            case 18:
                e4i.title = hl7e.name;
                e4i.author = l4p.wV2x(hl7e.artists);
                e4i.picUrl = (hl7e.album || []).picUrl;
                break;
            case 20:
                e4i.title = hl7e.name;
                e4i.author = "";
                e4i.picUrl = hl7e.img1v1Url;
                break;
            case 21:
                e4i.title = hl7e.name;
                e4i.author = hl7e.artistName;
                e4i.authors = l4p.wV2x(hl7e.artists, " / ");
                e4i.picUrl = hl7e.newCover || hl7e.cover;
                break;
            case 70:
                e4i.title = hl7e.name;
                e4i.author = (hl7e.dj || []).nickname;
                e4i.picUrl = hl7e.picUrl;
                e4i.category = hl7e.category;
                break;
            default:
                break
        }
        return e4i
    };
    l4p.bHx7q = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l4p.ccG1x = function (eH6B, uB2x, e4i) {
        var bL5Q,
            bg5l,
            m4q;
        var jq8i = null;
        var Nq7j = 0;
        if (!e4i)
            e4i = {};
        var VT9K = function () {
            Nq7j = e4i.leading === false ? 0 : +(new Date);
            jq8i = null;
            m4q = eH6B.apply(bL5Q, bg5l);
            if (!jq8i)
                bL5Q = bg5l = null
        };
        return function () {
            var fN7G = +(new Date);
            if (!Nq7j && e4i.leading === false)
                Nq7j = fN7G;
            var bhK2x = uB2x - (fN7G - Nq7j);
            bL5Q = this;
            bg5l = arguments;
            if (bhK2x <= 0 || bhK2x > uB2x) {
                if (jq8i) {
                    clearTimeout(jq8i);
                    jq8i = null
                }
                Nq7j = fN7G;
                m4q = eH6B.apply(bL5Q, bg5l);
                if (!jq8i)
                    bL5Q = bg5l = null
            } else if (!jq8i && e4i.trailing !== false) {
                jq8i = setTimeout(VT9K, bhK2x)
            }
            return m4q
        }
    };
    l4p.bHw7p = function (eH6B, uB2x, pS0x) {
        var jq8i,
            bg5l,
            bL5Q,
            Nt7m,
            m4q;
        var VT9K = function () {
            var gz7s = new Date - Nt7m;
            if (gz7s < uB2x && gz7s >= 0) {
                jq8i = setTimeout(VT9K, uB2x - gz7s)
            } else {
                jq8i = null;
                if (!pS0x) {
                    m4q = eH6B.apply(bL5Q, bg5l);
                    if (!jq8i)
                        bL5Q = bg5l = null
                }
            }
        };
        return function () {
            bL5Q = this;
            bg5l = arguments;
            Nt7m = new Date;
            var bhR2x = pS0x && !jq8i;
            if (!jq8i)
                jq8i = setTimeout(VT9K, uB2x);
            if (bhR2x) {
                m4q = eH6B.apply(bL5Q, bg5l);
                bL5Q = bg5l = null
            }
            return m4q
        }
    };
    l4p.Nw7p = function (f4j, iq8i) {
        if (f4j) {
            var f4j = f4j.firstElementChild;
            if (f4j) {
                f4j.firstElementChild && (f4j = f4j.firstElementChild);
                f4j.setAttribute("xlink:href", "/style/pc/svg/" + iq8i)
            }
        }
    };
    l4p.bHv7o = function (eG6A) {
        if (!eG6A || !eG6A.length) {
            return
        }
        eG6A = /^#(.+?)#$/.exec(eG6A)[1];
        eG6A = eG6A.replace(/\s/g, " ");
        v4z.bp5u("/api/act/detail", {
            type: "json",
            method: "post",
            data: k4o.df6Z({
                actname: eG6A
            }),
            onload: function (Q4U) {
                if (!Q4U || Q4U.code != 200 || !Q4U.act) {
                    n4r.Z4d.N4R({
                        type: 2,
                        tip: "璇ヨ瘽棰樻殏鏈垱寤�"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q4U.act.actId)
                }
            },
            onerror: function (bQ5V) {
                n4r.Z4d.N4R({
                    type: 2,
                    tip: "鎿嶄綔澶辫触锛岃绋嶅悗鍐嶈瘯"
                })
            }
        })
    };
    l4p.bib2x = function (NB7u, wD2x) {
        if (!NB7u || !wD2x)
            return false;
        if (NB7u == wD2x)
            return true;
        return l4p.bib2x(NB7u, wD2x.parentNode)
    };
    a3x.fA7t = function (bA5F, kU9L) {
        if (!bA5F)
            return null;
        if (!kU9L)
            return bA5F.firstChild;
        return a3x.I4M(bA5F, kU9L)[0]
    };
    l4p.ccD1x = function (hH8z) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hH8z)
    };
    l4p.cuu6o = function (tq1x) {
        if (!tq1x) {
            return "0b"
        }
        var ccz1x = ["Bytes", "KB", "MB", "GB"];
        var bd5i = Math.floor(Math.log(tq1x) / Math.log(1024));
        return (tq1x / Math.pow(1024, Math.floor(bd5i))).toFixed(bd5i == 1 ? 0 : 1) + ccz1x[bd5i]
    };
    l4p.bHq7j = function (dl6f, fb6V, ccl1x) {
        if (!dl6f)
            return dl6f;
        var dF6z = k4o.fi6c(dl6f);
        if (dF6z <= fb6V)
            return dl6f;
        var bis2x = dF6z - dl6f.length,
            biu2x = dl6f.length - bis2x;
        var fH7A = Math.ceil(fb6V / 2),
            cck1x = fb6V,
            bHf7Y = 0;
        if (bis2x < fH7A)
            fH7A = fb6V - bis2x;
        if (biu2x < fb6V)
            fb6V = biu2x + Math.ceil((fb6V - biu2x) / 2);
        while (fH7A <= fb6V) {
            bHf7Y = k4o.fi6c(dl6f.substr(0, fH7A));
            var biE2x = cck1x - bHf7Y;
            if (biE2x == 0)
                break;
            if (biE2x == 1) {
                var cca1x = k4o.fi6c(dl6f.charAt(fH7A));
                if (cca1x == 1) {
                    fH7A++;
                    break
                } else {
                    break
                }
            }
            fH7A += Math.floor(biE2x / 2)
        }
        return dl6f.substr(0, fH7A) + (!!ccl1x ? "" : "...")
    }
})();
(function () {
    function cbW1x() {
        var zk3x = function (jn8f) {
            if (jn8f < -128) {
                return zk3x(128 - (-128 - jn8f))
            } else if (jn8f >= -128 && jn8f <= 127) {
                return jn8f
            } else if (jn8f > 127) {
                return zk3x(-129 + jn8f - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cbT1x = function (jn8f, bj5o) {
            return zk3x(jn8f + bj5o)
        };
        var cbS1x = function (Vx9o, biY2x) {
            if (Vx9o == null) {
                return null
            }
            if (biY2x == null) {
                return Vx9o
            }
            var pE0x = [];
            var cbR1x = biY2x.length;
            for (var i = 0, bo5t = Vx9o.length; i < bo5t; i++) {
                pE0x[i] = cbT1x(Vx9o[i], biY2x[i % cbR1x])
            }
            return pE0x
        };
        var cbN1x = function (Vv8n) {
            if (Vv8n == null) {
                return Vv8n
            }
            var pE0x = [];
            var cbM1x = Vv8n.length;
            for (var i = 0, bo5t = cbM1x; i < bo5t; i++) {
                pE0x[i] = zk3x(0 - Vv8n[i])
            }
            return pE0x
        };
        var cbL1x = function (bjr2x, NM7F) {
            bjr2x = zk3x(bjr2x);
            NM7F = zk3x(NM7F);
            return zk3x(bjr2x ^ NM7F)
        };
        var bGZ7S = function (NR7K, bjA3x) {
            if (NR7K == null || bjA3x == null || NR7K.length != bjA3x.length) {
                return NR7K
            }
            var pE0x = [];
            var cbJ1x = NR7K.length;
            for (var i = 0, bo5t = cbJ1x; i < bo5t; i++) {
                pE0x[i] = cbL1x(NR7K[i], bjA3x[i])
            }
            return pE0x
        };
        var bGX7Q = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cbE1x = function (cK6E) {
            var Fr5w = [];
            Fr5w.push(bGX7Q[cK6E >>> 4 & 15]);
            Fr5w.push(bGX7Q[cK6E & 15]);
            return Fr5w.join("")
        };
        var cbD1x = function (tq1x) {
            var bo5t = tq1x.length;
            if (tq1x == null || bo5t < 0) {
                return new String("")
            }
            var Fr5w = [];
            for (var i = 0; i < bo5t; i++) {
                Fr5w.push(cbE1x(tq1x[i]))
            }
            return Fr5w.join("")
        };
        var bGW7P = function (Vl8d) {
            if (Vl8d == null || Vl8d.length == 0) {
                return Vl8d
            }
            var bjR3x = new String(Vl8d);
            var pE0x = [];
            var bo5t = bjR3x.length / 2;
            var bj5o = 0;
            for (var i = 0; i < bo5t; i++) {
                var nG0x = parseInt(bjR3x.charAt(bj5o++), 16) << 4;
                var nH0x = parseInt(bjR3x.charAt(bj5o++), 16);
                pE0x[i] = zk3x(nG0x + nH0x)
            }
            return pE0x
        };
        var cbA1x = function (cM6G) {
            if (cM6G == null || cM6G == undefined) {
                return cM6G
            }
            var NV7O = encodeURIComponent(cM6G);
            var tq1x = [];
            var bGU7N = NV7O.length;
            for (var i = 0; i < bGU7N; i++) {
                if (NV7O.charAt(i) == "%") {
                    if (i + 2 < bGU7N) {
                        tq1x.push(bGW7P(NV7O.charAt(++i) + "" + NV7O.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    tq1x.push(NV7O.charCodeAt(i))
                }
            }
            return tq1x
        };
        var cby1x = function (vm2x) {
            var bd5i = 0;
            bd5i += (vm2x[0] & 255) << 24;
            bd5i += (vm2x[1] & 255) << 16;
            bd5i += (vm2x[2] & 255) << 8;
            bd5i += vm2x[3] & 255;
            return bd5i
        };
        var cux6r = function (bd5i) {
            var vm2x = [];
            vm2x[0] = bd5i >>> 24 & 255;
            vm2x[1] = bd5i >>> 16 & 255;
            vm2x[2] = bd5i >>> 8 & 255;
            vm2x[3] = bd5i & 255;
            return vm2x
        };
        var cbr1x = function (dv6p, bkc3x, bo5t) {
            var eb6V = [];
            if (dv6p == null || dv6p.length == 0) {
                return eb6V
            }
            if (dv6p.length < bo5t) {
                throw new Error("1003")
            }
            for (var i = 0; i < bo5t; i++) {
                eb6V[i] = dv6p[bkc3x + i]
            }
            return eb6V
        };
        var bkg3x = function (dv6p, bkc3x, qm0x, cbp1x, bo5t) {
            if (dv6p == null || dv6p.length == 0) {
                return qm0x
            }
            if (qm0x == null) {
                throw new Error("1004")
            }
            if (dv6p.length < bo5t) {
                throw new Error("1003")
            }
            for (var i = 0; i < bo5t; i++) {
                qm0x[cbp1x + i] = dv6p[bkc3x + i]
            }
            return qm0x
        };
        var cbi1x = function (bo5t) {
            var bs5x = [];
            for (var i = 0; i < bo5t; i++) {
                bs5x[i] = 0
            }
            return bs5x
        };
        var cbc1x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var Gr5w = 64;
        var Vh8Z = 64;
        var bGN7G = 4;
        var caW1x = function (pz0x) {
            var bGK7D = [];
            if (pz0x == null || pz0x == undefined || pz0x.length == 0) {
                return cbi1x(Vh8Z)
            }
            if (pz0x.length >= Vh8Z) {
                return cbr1x(pz0x, 0, Vh8Z)
            } else {
                for (var i = 0; i < Vh8Z; i++) {
                    bGK7D[i] = pz0x[i % pz0x.length]
                }
            }
            return bGK7D
        };
        var caS1x = function (Vf8X) {
            if (Vf8X == null || Vf8X.length % Gr5w != 0) {
                throw new Error("1005")
            }
            var bkI3x = [];
            var bj5o = 0;
            var caQ1x = Vf8X.length / Gr5w;
            for (var i = 0; i < caQ1x; i++) {
                bkI3x[i] = [];
                for (var j = 0; j < Gr5w; j++) {
                    bkI3x[i][j] = Vf8X[bj5o++]
                }
            }
            return bkI3x
        };
        var caO1x = function (bGH7A) {
            var nG0x = bGH7A >>> 4 & 15;
            var nH0x = bGH7A & 15;
            var bj5o = nG0x * 16 + nH0x;
            return cbc1x[bj5o]
        };
        var bGG7z = function (bkU3x) {
            if (bkU3x == null) {
                return null
            }
            var bGF7y = [];
            for (var i = 0, bo5t = bkU3x.length; i < bo5t; i++) {
                bGF7y[i] = caO1x(bkU3x[i])
            }
            return bGF7y
        };
        var caC1x = function (Hm5r, pz0x) {
            if (Hm5r == null) {
                return null
            }
            if (Hm5r.length == 0) {
                return []
            }
            if (Hm5r.length % Gr5w != 0) {
                throw new Error("1005")
            }
            pz0x = caW1x(pz0x);
            var blf3x = pz0x;
            var blg3x = caS1x(Hm5r);
            var NW7P = [];
            var car1x = blg3x.length;
            for (var i = 0; i < car1x; i++) {
                var blm3x = bGG7z(blg3x[i]);
                blm3x = bGG7z(blm3x);
                var blo3x = bGZ7S(blm3x, blf3x);
                var caq1x = cbS1x(blo3x, cbN1x(blf3x));
                blo3x = bGZ7S(caq1x, pz0x);
                bkg3x(blo3x, 0, NW7P, i * Gr5w, Gr5w);
                blf3x = blg3x[i]
            }
            var bGA7t = [];
            bkg3x(NW7P, NW7P.length - bGN7G, bGA7t, 0, bGN7G);
            var bo5t = cby1x(bGA7t);
            if (bo5t > NW7P.length) {
                throw new Error("1006")
            }
            var pE0x = [];
            bkg3x(NW7P, 0, pE0x, 0, bo5t);
            return pE0x
        };
        var cao1x = function (UN8F, J4N) {
            if (UN8F == null) {
                return null
            }
            var bGw7p = new String(UN8F);
            if (bGw7p.length == 0) {
                return []
            }
            var Hm5r = bGW7P(bGw7p);
            if (J4N == null || J4N == undefined) {
                throw new Error("1007")
            }
            var pz0x = cbA1x(J4N);
            return caC1x(Hm5r, pz0x)
        };
        this.cac1x = function (UN8F, J4N) {
            var bZZ1x = cao1x(UN8F, J4N);
            var blP3x = new String(cbD1x(bZZ1x));
            var UK8C = [];
            var bZX1x = blP3x.length / 2;
            var bj5o = 0;
            for (var i = 0; i < bZX1x; i++) {
                UK8C.push("%");
                UK8C.push(blP3x.charAt(bj5o++));
                UK8C.push(blP3x.charAt(bj5o++))
            }
            return UK8C.join("")
        }
    }

    window.settmusic = (new cbW1x).cac1x
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        J4N = "Search-tracks_",
        b4f;
    p4t.eQ6K({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function (Q4U) {
                return Q4U
            },
            onerror: function (Q4U, e4i) {
                if (Q4U.code == 407) {
                    e4i.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function (e4i, bc5h) {
                window.log && window.log("searchkeywordclient", {
                    type: this.bZU1x(parseInt(e4i.data.type)) || "suggest",
                    keyword: e4i.data.s,
                    offset: e4i.offset
                })
            },
            format: function (Q4U, e4i) {
                if (Q4U.abroad) {
                    try {
                        Q4U.result = JSON.parse(decodeURIComponent(settmusic(Q4U.result, p4t.sk)))
                    } catch (e) {
                    }
                }
                Q4U.result = Q4U.result || {};
                var i4m,
                    co5t,
                    jw9n = [],
                    su1x = e4i.data.s || "",
                    fY7R = e4i.data.limit,
                    t4x = parseInt(e4i.data.type) || 1,
                    m4q = Q4U.result;
                switch (t4x) {
                    case 1:
                        i4m = this.bGt7m(m4q.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                        co5t = m4q.songCount;
                        break;
                    case 10:
                        i4m = m4q.albums;
                        co5t = m4q.albumCount;
                        break;
                    case 100:
                        i4m = m4q.artists;
                        co5t = m4q.artistCount;
                        break;
                    case 1e3:
                        i4m = m4q.playlists;
                        co5t = m4q.playlistCount;
                        break;
                    case 1002:
                        i4m = m4q.userprofiles;
                        co5t = m4q.userprofileCount;
                        break;
                    case 1004:
                        i4m = m4q.mvs;
                        co5t = m4q.mvCount;
                        break;
                    case 1006:
                        i4m = this.bGt7m(m4q.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                        co5t = m4q.songCount;
                        break;
                    case 1009:
                        var pr0x = m4q.djRadios;
                        if (!!pr0x) {
                            k4o.be5j(pr0x, function (A4E, s4w, bZO1x) {
                                A4E.xid = A4E.id;
                                A4E.id = A4E.id + "_rad"
                            });
                            if (pr0x.length) {
                                this.rr0x("radio_search-" + e4i.data.s, pr0x)
                            }
                        }
                        co5t = Math.min(m4q.djprogramCount, 500);
                        i4m = m4q.djprograms || [];
                        if (e4i.data.isPub) {
                            k4o.mu9l(pr0x, function (A4E, s4w, bZO1x) {
                                A4E.stype = 1;
                                i4m.unshift(A4E)
                            });
                            co5t = Math.min(i4m.length, 500)
                        }
                        break
                }
                this.z4D("onsearchload", Q4U);
                if (i4m && i4m.length) {
                    for (var i = 0; i < fY7R; i++) {
                        if (i < i4m.length) {
                            jw9n.push(i4m[i])
                        } else {
                            jw9n.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(co5t || 0, su1x.length < 3 ? 500 : 5e3),
                    list: jw9n
                }
            },
            onerror: function (Q4U, e4i) {
                e4i.onload(e4i, []);
                if (k4o.gf7Y(e4i.onerror)) {
                    e4i.onerror(Q4U)
                }
            }
        }
    });
    p4t.CM4Q = NEJ.C();
    b4f = p4t.CM4Q.O4S(p4t.gZ7S);
    b4f.cl5q = function () {
        this.cs5x()
    };
    b4f.bZL1x = function (J4N, e4i) {
        if (!J4N)
            return;
        if (!!this.bGr7k)
            v4z.jj8b(this.bGr7k);
        this.bGr7k = this.ck5p("search-suggest", NEJ.X({
            data: {
                s: J4N,
                limit: 8
            }
        }, e4i))
    };
    b4f.bZJ1x = function (J4N, e4i) {
        if (!J4N)
            return;
        this.ck5p("search-multimatch", NEJ.X({
            data: {
                s: J4N
            }
        }, e4i))
    };
    b4f.bGt7m = function () {
        var bZI1x = function (he7X, bGp7i, bGo7h) {
            var bZy1x = he7X.match(new RegExp(bGp7i + "(.+?)" + bGo7h, "gi")),
                ct5y = 0;
            k4o.be5j(bZy1x, function (r4v) {
                ct5y += r4v.replace(new RegExp(bGp7i, "g"), "").replace(new RegExp(bGo7h, "g"), "").length
            });
            return ct5y
        };
        return function (iy8q, bZu1x, bZq1x) {
            var bGl7e = [];
            k4o.be5j(iy8q, function (bf5k, bd5i) {
                bf5k = l4p.DN4R(bf5k);
                var Uw8o = bf5k.lyrics || [],
                    dF6z = Uw8o.length,
                    iQ8I = 0,
                    co5t = 4,
                    Uv8n = {
                        l: 0,
                        v: 0
                    },
                    bnh3x;
                if (dF6z > 4) {
                    k4o.be5j(Uw8o, function (he7X, s4w) {
                        var bGk7d = bZI1x(he7X, bZu1x, bZq1x);
                        if (bGk7d > Uv8n.v) {
                            Uv8n.v = bGk7d;
                            Uv8n.l = s4w
                        }
                    });
                    iQ8I = Uv8n.l;
                    iQ8I = Math.max(iQ8I, 0);
                    bnh3x = dF6z - iQ8I - 4;
                    if (bnh3x < 0)
                        iQ8I += bnh3x;
                    bf5k.lrcAbstractEnd = iQ8I + co5t - 1
                } else {
                    bf5k.lrcAbstractEnd = dF6z - 1
                }
                bf5k.lrcAbstractStart = iQ8I;
                bf5k.indexId = (Uw8o && Uw8o.length ? "L" : "NL") + bf5k.id;
                bGl7e.push(bf5k)
            });
            return bGl7e
        }
    }
    ();
    b4f.bZU1x = function (t4x) {
        switch (t4x) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        v4z = c4g("nej.j"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        F4J = c4g("nm.m"),
        n4r = c4g("nm.l"),
        cX6R = c4g("nm.i"),
        L4P = c4g("nm.m.sch"),
        b4f,
        K4O;
    var bnx3x = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3
    };
    L4P.Ou7n = NEJ.C();
    b4f = L4P.Ou7n.O4S(H4L.cz5E);
    b4f.cl5q = function (f4j) {
        this.cs5x();
        this.bR5W(f4j);
        this.P4T = p4t.CM4Q.fV7O()
    };
    b4f.bR5W = function (f4j) {
        this.o4s = f4j;
        var i4m = a3x.I4M(f4j, "j-flag");
        this.ex6r = i4m[0];
        this.bnB3x = i4m[1];
        this.cf5k = i4m[2];
        this.mw9n = i4m[3];
        h4l.q4u(this.ex6r, "input", this.fx7q.g4k(this));
        h4l.q4u(this.ex6r, "keyup", this.fx7q.g4k(this));
        h4l.q4u(this.ex6r, "focus", this.fW7P.g4k(this));
        h4l.q4u(this.bnB3x, "click", this.fW7P.g4k(this));
        h4l.q4u(this.ex6r, "blur", this.bnM3x.g4k(this));
        h4l.q4u(this.cf5k, "click", this.Um8e.g4k(this));
        h4l.q4u(this.o4s, "keydown", this.bnV3x.g4k(this));
        h4l.q4u(this.o4s, "keypress", this.Uk8c.g4k(this));
        h4l.q4u(this.mw9n, "mouseover", this.Oy7r.g4k(this));
        h4l.q4u(this.mw9n, "mouseout", this.Oy7r.g4k(this));
        if (this.ex6r.value) {
            this.ex6r.value = ""
        }
        if (this.ex6r.style.opacity != null) {
            this.ex6r.style.opacity = 1
        }
    };
    b4f.fx7q = function (d4h) {
        if (d4h.type == "keyup" && d4h.keyCode == 8 || d4h.keyCode == 46) {
            this.AG4K()
        } else if (d4h.type == "input" || d4h.type == "propertychange") {
            setTimeout(this.AG4K.g4k(this), 0)
        }
    };
    b4f.fW7P = function () {
        this.wk2x(this.bnB3x, !1);
        a3x.y4C(this.o4s, "m-srch-fcs");
        this.ex6r.focus();
        this.AG4K();
        a3x.y4C(a3x.I4M("g-topbar", "j-showoff")[0], "f-hide")
    };
    b4f.bnM3x = function () {
        if (!this.ex6r.value) {
            this.wk2x(this.bnB3x, !0)
        }
        var CE4I = a3x.I4M(this.mw9n, "slt");
        if (this.Ue8W(this.mw9n) && CE4I.length > 0 && a3x.u4y(CE4I[0], "type")) {
            var iq8i = CE4I[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(iq8i)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.ex6r.value
                })
            }
            this.bof3x(CE4I[0].href)
        }
        this.wk2x(this.mw9n, !1);
        a3x.w4A(this.o4s, "m-srch-fcs")
    };
    b4f.wk2x = function (f4j, lh9Y) {
        a3x.X4b(f4j, "display", !lh9Y ? "none" : "")
    };
    b4f.Ue8W = function (f4j) {
        return a3x.db6V(f4j, "display") != "none"
    };
    b4f.AG4K = function () {
        var CC4G = function (sr1x, da6U) {
            if (!da6U)
                return;
            return da6U.replace(new RegExp(l4p.bHK7D(sr1x), "gi"), function ($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var bZl1x = function (hH8z) {
            var gk7d = this.o4s.clientWidth > 250 ? 41 : 17;
            if (l4p.Fh5m(hH8z) > gk7d) {
                return l4p.zQ3x(hH8z, gk7d) + "..."
            } else {
                return hH8z
            }
        };
        var Ud8V = function (m4q) {
            return m4q.songs && m4q.songs.length || m4q.albums && m4q.albums.length || m4q.artists && m4q.artists.length || m4q.playlists && m4q.playlists.length
        };
        var sQ1x = function (sr1x, d4h) {
            if (!l4p.bHL7E(this.ex6r) || l4p.ja8S(this.ex6r.value)) {
                this.wk2x(this.mw9n, !1);
                return
            }
            d4h.keyword = k4o.dM6G(sr1x);
            var ds6m = a3x.bP5U("m-search-suggest", d4h, {
                    mark: CC4G.g4k(this, sr1x),
                    cutStr: bZl1x.g4k(this)
                }),
                ss1x = d4h.result.order;
            this.mw9n.innerHTML = ds6m;
            this.wk2x(this.mw9n, Ud8V(d4h.result) ? !0 : !1);
            if (!!ss1x && !!ss1x.length) {
                this.bor3x = {
                    keyword: sr1x,
                    type: bnx3x[ss1x[0]]
                }
            }
        };
        var bZk1x = function () {
            this.wk2x(this.mw9n, !1);
            return
        };
        return function () {
            var A4E = this.ex6r.value;
            if (l4p.ja8S(A4E)) {
                this.wk2x(this.mw9n, !1);
                return
            }
            this.P4T.bZL1x(A4E, {
                onload: sQ1x.g4k(this, A4E),
                onForbidden: bZk1x.g4k(this)
            })
        }
    }
    ();
    b4f.Uk8c = function (d4h) {
        if (d4h.keyCode != 13)
            return;
        var CE4I = a3x.I4M(this.mw9n, "slt");
        if (this.Ue8W(this.mw9n) && CE4I.length > 0) {
            this.bof3x(CE4I[0].href);
            this.wk2x(this.mw9n, !1);
            return
        }
        this.Um8e();
        this.wk2x(this.mw9n, !1)
    };
    b4f.bnV3x = function (d4h) {
        if (!this.Ue8W(this.mw9n))
            return;
        var i4m = a3x.I4M(this.mw9n, "xtag"),
            dF6z = i4m.length,
            s4w = k4o.cV6P(i4m, function (r4v) {
                return a3x.by5D(r4v, "slt")
            });
        switch (d4h.keyCode) {
            case 38:
                if (s4w >= 0)
                    a3x.w4A(i4m[s4w], "slt");
                a3x.y4C(i4m[s4w <= 0 ? dF6z - 1 : s4w - 1], "slt");
                break;
            case 40:
                if (s4w >= 0)
                    a3x.w4A(i4m[s4w], "slt");
                a3x.y4C(i4m[(s4w + 1) % dF6z], "slt");
                break
        }
    };
    b4f.Oy7r = function (d4h) {
        if (!this.Ue8W(this.mw9n))
            return;
        var OG7z,
            E4I = h4l.U4Y(d4h),
            i4m = a3x.I4M(this.mw9n, "xtag");
        if (E4I.tagName.toLowerCase() == "a")
            OG7z = E4I;
        else if (E4I.parentNode.tagName.toLowerCase() == "a")
            OG7z = E4I.parentNode;
        if (!OG7z)
            return;
        k4o.be5j(i4m, function (r4v) {
            a3x.w4A(r4v, "slt");
            a3x.u4y(r4v, "type", "")
        });
        if (d4h.type == "mouseout")
            return;
        a3x.y4C(OG7z, "slt");
        a3x.u4y(OG7z, "type", "mouse")
    };
    b4f.Um8e = function () {
        var dG6A = location.hash,
            s4w = dG6A.indexOf("?"),
            bC5H = k4o.hi7b(dG6A.substring(s4w + 1));
        bC5H.s = this.ex6r.value;
        if (l4p.ja8S(bC5H.s))
            return;
        if (!bC5H.type && this.bor3x && this.bor3x.keyword == bC5H.s) {
            bC5H.type = this.bor3x.type
        }
        this.bof3x("/search/#/?" + k4o.df6Z(bC5H));
        this.ex6r.blur()
    };
    b4f.bof3x = function (V4Z) {
        if (location.dispatch2) {
            location.dispatch2(V4Z)
        } else {
            location.href = V4Z
        }
    };
    L4P.Ou7n.bZj1x = function () {
        var i4m = a3x.I4M(document.body, "j-suggest");
        k4o.be5j(i4m, function (r4v) {
            new L4P.Ou7n(r4v)
        })
    };
    L4P.Ou7n.bZj1x()
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        p4t = c4g("nm.d"),
        b4f;
    p4t.eQ6K({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function (Q4U) {
                return {
                    total: Q4U.size || 0,
                    list: Q4U.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function (Q4U) {
                return {
                    total: Q4U.size || 0,
                    list: Q4U.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function (Q4U) {
                return Q4U.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function (Q4U, e4i) {
                if (e4i.offset == 0) {
                    var oc0x = Q4U.data[0];
                    this.z4D("onfirstload", oc0x);
                    Q4U.data.splice(0, 1);
                    return Q4U.data
                } else {
                    return Q4U.data
                }
            }
        }
    });
    p4t.CA4E = NEJ.C();
    b4f = p4t.CA4E.O4S(p4t.gZ7S);
    b4f.cl5q = function () {
        this.cs5x()
    };
    b4f.OH7A = function () {
        var rf0x = "LOCAL_FLAG";
        return function (t4x, bZi1x) {
            var j4n = this.EB4F(rf0x, {});
            if (j4n[t4x]) {
                return true
            } else {
                if (!bZi1x) {
                    j4n[t4x] = true;
                    this.uf2x(rf0x, j4n)
                }
                return false
            }
        }
    }
    ()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ut"),
        boM4Q;
    if (!!M4Q.nl9c)
        return;
    M4Q.nl9c = NEJ.C();
    boM4Q = M4Q.nl9c.O4S(M4Q.cz5E);
    boM4Q.bk5p = function () {
        var bZd1x = function (d4h) {
            d4h.matched = d4h.source == d4h.target
        };
        return function (e4i) {
            e4i.oncheck = e4i.oncheck || bZd1x;
            this.bl5q(e4i);
            this.bV5a = e4i.list;
            this.ic8U = e4i.dataset || "id";
            this.jO9F = e4i.selected || "js-selected"
        }
    }
    ();
    boM4Q.nm9d = function (A4E) {
        var E4I,
            d4h = {
                target: A4E
            };
        k4o.be5j(this.bV5a, function (f4j) {
            delete d4h.matched;
            d4h.source = a3x.u4y(f4j, this.ic8U);
            this.z4D("oncheck", d4h);
            if (!d4h.matched) {
                a3x.w4A(f4j, this.jO9F)
            } else {
                E4I = f4j;
                a3x.y4C(f4j, this.jO9F)
            }
        }, this);
        return E4I
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        M4Q = c4g("nej.ut"),
        oF0x;
    if (!!M4Q.cN6H)
        return;
    M4Q.cN6H = NEJ.C();
    oF0x = M4Q.cN6H.O4S(M4Q.cz5E);
    oF0x.cl5q = function () {
        this.iz8r = {};
        this.cs5x();
        this.bJ5O()
    };
    oF0x.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.bpf4j = e4i.umi || "";
        this.zw3x = e4i.dispatcher;
        this.Fq5v = e4i.composite || Y4c;
        this.bli3x({
            onshow: this.eY6S.g4k(this),
            onhide: this.jZ9Q.g4k(this),
            onrefresh: this.ej6d.g4k(this),
            onmessage: this.qj0x.g4k(this),
            onbeforehide: this.bZc1x.g4k(this)
        })
    };
    oF0x.bD5I = function () {
        delete this.bpf4j;
        this.iz8r = {};
        this.bH5M()
    };
    oF0x.sy1x = function (d4h) {
        if (!!d4h)
            d4h.stopped = !0
    };
    oF0x.bJ5O = bm5r;
    oF0x.eY6S = bm5r;
    oF0x.jZ9Q = bm5r;
    oF0x.ej6d = bm5r;
    oF0x.qj0x = bm5r;
    oF0x.bZc1x = bm5r;
    oF0x.pe0x = function (nK0x, bF5K, eC6w) {
        this.zw3x.bpC4G({
            to: nK0x,
            mode: eC6w || 0,
            data: bF5K,
            from: this.bpf4j
        })
    };
    oF0x.cuC6w = function (t4x, j4n) {
        this.zw3x.zE3x(t4x, {
            from: this.bpf4j,
            data: j4n
        })
    };
    oF0x.cuE6y = function () {
        this.zw3x.lE9v.apply(this.zw3x, arguments)
    };
    oF0x.bYW1x = function () {
        return this.iz8r
    };
    a3x.TO8G = function () {
        if (!!window.dispatcher) {
            dispatcher.bGf7Y.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        bm5r = NEJ.F,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ut"),
        vZ2x;
    if (!!M4Q.do6i)
        return;
    M4Q.do6i = NEJ.C();
    vZ2x = M4Q.do6i.O4S(M4Q.cN6H);
    vZ2x.bYU1x = function (e4i) {
        var bA5F;
        if (!bA5F) {
            var j4n = e4i.input || Y4c;
            bA5F = a3x.x4B(j4n.parent)
        }
        if (!bA5F) {
            var j4n = e4i.data || Y4c;
            bA5F = a3x.x4B(j4n.parent)
        }
        if (!bA5F) {
            bA5F = a3x.x4B(e4i.parent)
        }
        return bA5F
    };
    vZ2x.eY6S = function (e4i) {
        var bA5F = this.bYU1x(e4i);
        if (!!bA5F && !!this.o4s)
            bA5F.appendChild(this.o4s);
        this.gw7p(e4i);
        this.bGe7X("onshow", e4i);
        this.ej6d(e4i)
    };
    vZ2x.ej6d = function (e4i) {
        this.fO7H(e4i);
        this.bGe7X("onrefresh", e4i)
    };
    vZ2x.jZ9Q = function () {
        this.kP9G();
        this.bYS1x();
        a3x.mc9T(this.o4s)
    };
    vZ2x.bGd7W = function () {
        var fZ7S = /^onshow|onrefresh|delay$/;
        return function (bX5c) {
            return fZ7S.test(bX5c)
        }
    }
    ();
    vZ2x.bGc7V = bm5r;
    vZ2x.bGe7X = function () {
        var bFY7R = function (bC5H, e4i, bX5c, oe0x) {
            if (this.bGd7W(oe0x))
                return;
            if (!!bC5H)
                bX5c += (bX5c.indexOf("?") > 1 ? "&" : "?") + bC5H;
            var cO6I = this.bGc7V(oe0x, e4i) || {};
            cO6I.location = e4i;
            cO6I.parent = this.iz8r[oe0x];
            this.zw3x.ib8T(bX5c, {
                input: cO6I
            })
        };
        return function (t4x, e4i) {
            if (!e4i.nodelay) {
                if (!!this.Fq5v.delay)
                    return;
                var bFX7Q = this.Fq5v[t4x] || Y4c;
                if (bFX7Q.delay)
                    return
            }
            var bC5H = k4o.df6Z(e4i.param) || "";
            if (t4x == "onrefresh") {
                k4o.ed6X(this.Fq5v, bFY7R.g4k(this, bC5H, e4i))
            }
            k4o.ed6X(bFX7Q, bFY7R.g4k(this, bC5H, e4i))
        }
    }
    ();
    vZ2x.bYS1x = function () {
        var yc3x = function (bX5c, oe0x) {
            if (!this.bGd7W(oe0x))
                this.zw3x.bq5v(bX5c)
        };
        return function () {
            k4o.ed6X(this.Fq5v, yc3x, this);
            k4o.ed6X(this.Fq5v.onshow, yc3x, this);
            k4o.ed6X(this.Fq5v.onrefresh, yc3x, this)
        }
    }
    ()
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        F4J = c4g("nm.m"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        b4f,
        K4O;
    F4J.Pj7c = NEJ.C();
    b4f = F4J.Pj7c.O4S(H4L.cz5E);
    b4f.cl5q = function () {
        this.cs5x();
        this.o4s = a3x.x4B("g-topbar");
        var i4m = a3x.I4M(this.o4s, "j-tflag");
        this.bqO4S = i4m[0];
        this.Gs5x = i4m[1];
        this.sH1x = i4m[2];
        this.bFV7O = i4m[3];
        this.bqZ4d = i4m[4];
        this.bYC1x = H4L.nl9c.B4F({
            list: this.bqO4S.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.brg4k = H4L.nl9c.B4F({
            list: this.bqZ4d.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bU5Z([[this.Gs5x, "click", this.cx5C.g4k(this)], [this.Gs5x, "mouseout", this.bFU7N.g4k(this, 0)], [this.Gs5x, "mouseover", this.bFU7N.g4k(this, 1)]]);
        window.scrollTopbar = this.bYA1x.g4k(this);
        window.matchNav = this.bFT7M.g4k(this);
        window.polling = this.pY0x.g4k(this);
        this.Pk7d = p4t.CA4E.B4F();
        this.bYx1x();
        this.GR5W();
        var bC5H = k4o.hi7b(location.href.split("?")[1]) || {};
        if (bC5H.market) {
            a3x.x4B("topbar-download-link").href = "/download?market=" + bC5H.market
        }
        var bau0x = a3x.I4M(this.o4s, "j-showoff");
        if (bau0x && !this.Pk7d.OH7A("newMvSearch")) {
            a3x.w4A(bau0x[0], "f-hide");
            window.setTimeout(function () {
                a3x.y4C(bau0x[0], "f-hide")
            }, 5e3)
        }
    };
    b4f.pY0x = function (d4h) {
        var dG6A = l4p.Gx5C();
        if (!/^\/msg/.test(dG6A)) {
            var GT5Y = 0;
            GT5Y += d4h.comment;
            GT5Y += d4h.forward;
            GT5Y += d4h.msg;
            GT5Y += d4h.notice;
            if (GT5Y > 0) {
                this.sH1x.innerHTML = a3x.bP5U("m-topbar-mesg-count", {
                    count: GT5Y
                })
            } else {
                this.sH1x.innerHTML = ""
            }
            var ew6q = "/at";
            if (d4h.notice)
                ew6q = "/notify";
            if (d4h.comment)
                ew6q = "/comment";
            if (d4h.msg > 0)
                ew6q = "/private";
            if (d4h.forward > 0)
                ew6q = "/at";
            this.sH1x.href = "/msg/#" + ew6q
        } else {
            this.sH1x.innerHTML = ""
        }
        var i4m = a3x.I4M(this.bqO4S, "j-t");
        if (!/^\/friend/.test(dG6A)) {
            if (i4m && i4m.length) {
                a3x.X4b(i4m[0], "display", d4h.event > 0 ? "" : "none")
            }
        } else {
            a3x.X4b(i4m[0], "display", "none")
        }
    };
    b4f.cx5C = function (d4h) {
        var f4j = h4l.U4Y(d4h, "d:action");
        if (f4j) {
            switch (a3x.u4y(f4j, "action")) {
                case "login":
                    h4l.ce5j(d4h);
                    var t4x = a3x.u4y(f4j, "type");
                    if (t4x) {
                        if (t4x == "sina" || t4x == "tencent")
                            top.open(f4j.href);
                        else
                            top.login(t4x == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case "logout":
                    h4l.ce5j(d4h);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.Pk7d.OH7A("storeNew")) {
                        a3x.y4C(this.baz0x, "f-vhide")
                    }
                    break;
                case "viewLevel":
                    if (!this.Pk7d.OH7A("levelNew")) {
                        a3x.y4C(this.baA0x, "f-vhide")
                    }
                    break
            }
        }
    };
    b4f.bFU7N = function (Ag3x, d4h) {
        if (this.bFR7K) {
            this.bFR7K.style.display = !Ag3x ? "none" : ""
        }
    };
    b4f.bYA1x = function (fQ7J) {
        a3x.X4b(this.o4s, "top", -fQ7J + "px")
    };
    b4f.bFT7M = function (ew6q, bYv1x) {
        this.bYC1x.nm9d(ew6q);
        if (ew6q == "discover") {
            a3x.y4C(this.bFV7O, "f-hide");
            a3x.w4A(this.bqZ4d, "f-hide");
            window.g_topBarHeight = 105;
            this.brg4k.nm9d(bYv1x)
        } else {
            a3x.w4A(this.bFV7O, "f-hide");
            a3x.y4C(this.bqZ4d, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b4f.bYx1x = function () {
        var ua2x = a3x.x4B("g_iframe");
        if (!ua2x)
            return;
        var gi7b = ua2x.contentWindow.document.getElementById("g_top");
        this.bFT7M(a3x.u4y(gi7b, "module"), a3x.u4y(gi7b, "sub"))
    };
    b4f.GR5W = function () {
        var du6o = GUser || {},
            bYm0x = GUserAcc || {};
        if (du6o && du6o.userId) {
            a3x.dT6N(this.Gs5x, "m-topbar-user-login", NEJ.X(du6o, bYm0x));
            a3x.X4b(this.sH1x, "display", "")
        } else {
            this.Gs5x.innerHTML = a3x.hX8P("m-topbar-user-unlogin");
            this.sH1x.innerHTML = "";
            var i4m = a3x.I4M(this.bqO4S, "j-t");
            a3x.X4b(i4m[0], "display", "none");
            a3x.X4b(this.sH1x, "display", "none")
        }
        var i4m = a3x.I4M(this.Gs5x, "j-uflag");
        this.bFR7K = i4m[0];
        this.cuK6E = i4m[1];
        this.baA0x = i4m[2];
        this.baz0x = i4m[3];
        if (!this.Pk7d.OH7A("storeNew", true)) {
            a3x.w4A(this.baz0x, "f-vhide")
        } else {
            a3x.y4C(this.baz0x, "f-vhide")
        }
        if (!this.Pk7d.OH7A("levelNew", true)) {
            a3x.w4A(this.baA0x, "f-vhide")
        } else {
            a3x.y4C(this.baA0x, "f-vhide")
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        p4t = c4g("nm.d"),
        b4f,
        K4O;
    p4t.eQ6K({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function (Q4U) {
                h4l.z4D(p4t.rP1x, "message", Q4U)
            }
        }
    });
    p4t.rP1x = NEJ.C();
    b4f = p4t.rP1x.O4S(p4t.gZ7S);
    b4f.Tm8e = function () {
        this.ck5p("polling-get", {})
    };
    b4f.tX2x = function () {
        var eZ6T;
        return function () {
            if (!!eZ6T)
                return;
            eZ6T = window.setInterval(this.Tm8e.g4k(this), 1e5);
            this.Tm8e()
        }
    }
    ();
    H4L.ft7m.B4F({
        event: "message",
        element: p4t.rP1x
    })
})();
var io = "undefined" === typeof module ? {}
    : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host),
                uuri,
                socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""),
                uri = {},
                i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol,
                host = uri.host,
                port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {},
                params = qs.split("&"),
                i = 0,
                l = params.length,
                kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {
            }

            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i]))
                    ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {
            }
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++)
                arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }
        ();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;
        function EventEmitter() {
        }

        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }

            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }

        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap,
            indent,
            meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i,
                k,
                v,
                length,
                mind = gap,
                partial,
                value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }

        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k,
                    v,
                    value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null;
            switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "")
                        data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case "message":
                    if (packet.data !== "")
                        data = packet.data;
                    break;
                case "event":
                    var ev = {
                        name: packet.name
                    };
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case "json":
                    data = JSON.stringify(packet.data);
                    break;
                case "connect":
                    if (packet.qs)
                        data = packet.qs;
                    break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined)
                encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1)
                return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "锟�" + packet.length + "锟�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces)
                return {};
            var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = {
                    type: packets[pieces[1]],
                    endpoint: pieces[4] || ""
                };
            if (id) {
                packet.id = id;
                if (pieces[3])
                    packet.ack = "data";
                else
                    packet.ack = true
            }
            switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case "message":
                    packet.data = data || "";
                    break;
                case "event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {
                    }
                    packet.args = packet.args || [];
                    break;
                case "json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {
                    }
                    break;
                case "connect":
                    packet.qs = data || "";
                    break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {
                            }
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "锟�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "锟�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;
        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }

        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen)
                this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;
        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }

        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };
        function empty() {
        }

        Socket.prototype.handshake = function (fn) {
            var self = this,
                options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }

            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports,
                match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports)
                    self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();
                function connect(transports) {
                    if (self.transport)
                        self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport)
                        return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {
                                        }
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }

                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats())
                return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }

            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;
        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }

        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = {
                    type: "event",
                    name: name
                };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }

            switch (packet.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case "message":
                case "json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({
                            type: "ack",
                            ackId: packet.id
                        })
                    }
                    this.$emit.apply(this, params);
                    break;
                case "event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data")
                        params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case "ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case "error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };
        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }

        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;
        function WS(socket) {
            io.Transport.apply(this, arguments)
        }

        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query),
                self = this,
                Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;
        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }

        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this,
                args = arguments;
            WebSocket.Tk8c(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this,
                args = arguments;
            WebSocket.Tk8c(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.Pv7o.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.baU0x();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }

            var self = this;
            if (document.body)
                return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject)
                return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l,
                Q,
                E,
                B,
                J = false,
                a = false,
                n,
                G,
                m = true,
                M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new (window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {
                            }
                        }
                    }
                    return {
                        w3: aa,
                        pv: ag,
                        wk: af,
                        ie: X,
                        win: ae,
                        mac: ac
                    }
                }
                (),
                k = function () {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function () {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }
                ();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X,
                    aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {
                }
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }

            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }
            ();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function () {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function () {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }
        ()
    }
    (function () {
        if ("undefined" == typeof window || window.WebSocket)
            return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {
                },
                error: function () {
                }
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gv7o = WebSocket.bYh0x++;
            WebSocket.bFM7F[self.gv7o] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.kO9F = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.Tk8c(function () {
                    WebSocket.oK0x.create(self.gv7o, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.oK0x.send(this.gv7o, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.oK0x.close(this.gv7o)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.kO9F)) {
                this.kO9F[type] = []
            }
            this.kO9F[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.kO9F))
                return;
            var events = this.kO9F[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.kO9F[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler)
                handler(event)
        };
        WebSocket.prototype.bYf0x = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bFL7E(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bFL7E("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.bYd0x("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bFL7E = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.prototype.bYd0x = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.oK0x = null;
        WebSocket.bFM7F = {};
        WebSocket.Pv7o = [];
        WebSocket.bYh0x = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.Tk8c(function () {
                WebSocket.oK0x.loadManualPolicyFile(url)
            })
        };
        WebSocket.baU0x = function () {
            if (WebSocket.oK0x)
                return;
            if (WebSocket.bYa0x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.bYa0x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.bXZ0x()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cuM6G = function () {
            setTimeout(function () {
                WebSocket.oK0x = document.getElementById("webSocketFlash");
                WebSocket.oK0x.setCallerUrl(location.href);
                WebSocket.oK0x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Pv7o.length; ++i) {
                    WebSocket.Pv7o[i]()
                }
                WebSocket.Pv7o = []
            }, 0)
        };
        WebSocket.cuO6I = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.oK0x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bFM7F[events[i].webSocketId].bYf0x(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cuQ6K = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dy6s = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.Tk8c = function (task) {
            if (WebSocket.oK0x) {
                task()
            } else {
                WebSocket.Pv7o.push(task)
            }
        };
        WebSocket.bXZ0x = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.baU0x()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.baU0x()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;
        function XHR(socket) {
            if (!socket)
                return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }

        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };
        function empty() {
        }

        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }

            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {
                }
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {
            }
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;
        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c4g = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {
            }
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {
                }
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {
                }
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;
        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };
        function empty() {
        }

        XHRPolling.prototype.get = function () {
            if (!this.isOpen)
                return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }

            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {
                }
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c4g(msg)
            })
        }

        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;
            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }

            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {
            }
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c4g = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator)
                return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.dI6C)
            this.dI6C = {};
        this.bFH7A = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dI6C || !this.dI6C.error || isArray(this.dI6C.error) && !this.dI6C.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.dI6C)
            return false;
        var handler = this.dI6C[type];
        if (!handler)
            return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++)
                        args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++)
                args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.dI6C)
            this.dI6C = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dI6C[type]) {
            this.dI6C[type] = listener
        } else if (isArray(this.dI6C[type])) {
            this.dI6C[type].push(listener)
        } else {
            this.dI6C[type] = [this.dI6C[type], listener]
        }
        if (isArray(this.dI6C[type]) && !this.dI6C[type].warned) {
            var m;
            if (this.bFH7A !== undefined) {
                m = this.bFH7A
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dI6C[type].length > m) {
                this.dI6C[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dI6C[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }

        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.dI6C || !this.dI6C[type])
            return this;
        var list = this.dI6C[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0)
                return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.dI6C[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.dI6C = {};
            return this
        }
        var events = this.dI6C && this.dI6C[type];
        if (!events)
            return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dI6C[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.dI6C)
            this.dI6C = {};
        if (!this.dI6C[type])
            this.dI6C[type] = [];
        if (!isArray(this.dI6C[type])) {
            this.dI6C[type] = [this.dI6C[type]]
        }
        return this.dI6C[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {
            }

            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        di6c = c4g("nm.u"),
        p4t = c4g("nm.d"),
        PF7y = c4g("pomelo"),
        dn6h = 0,
        b4f,
        K4O;
    p4t.eQ6K({
        "polling-init": {
            url: "/api/push/init",
            format: function (Q4U) {
                dn6h = 2;
                var rK1x = {
                        domain: "music.163.com",
                        host: MUSIC_CONFIG.pushHost,
                        port: MUSIC_CONFIG.pushPort,
                        key: MUSIC_CONFIG.pushKey,
                        secret: "bec0b878892740c498505a85eb3dcec9"
                    },
                    j4n = Q4U.account || Y4c,
                    cT6N = GUser.userId;
                PF7y.init(rK1x.host, rK1x.port, true, this.bXT0x.g4k(this, {
                    user: cT6N,
                    nonce: j4n.nonce,
                    domain: rK1x.domain,
                    productKey: rK1x.key,
                    signature: j4n.signature,
                    expire_time: j4n.expireTime
                }))
            },
            onerror: function () {
                return this.bbq0x()
            }
        }
    });
    p4t.xV3x = NEJ.C();
    b4f = p4t.xV3x.O4S(p4t.gZ7S);
    b4f.cl5q = function () {
        var oW0x = !1;
        return function (e4i) {
            if (!oW0x) {
                oW0x = !0
            }
            this.cs5x(e4i);
            PF7y.on("specify", this.qj0x.g4k(this));
            PF7y.on("broadcast", this.qj0x.g4k(this))
        }
    }
    ();
    b4f.qj0x = function (d4h) {
        k4o.be5j(d4h, function (bF5K) {
            h4l.z4D(p4t.xV3x, "message", bF5K)
        }, this)
    };
    b4f.bbq0x = function () {
        var bB5G = 500;
        return function () {
            dn6h = 0;
            PF7y.disconnect();
            if (bB5G > 6e4)
                bB5G = 500;
            bB5G *= 2
        }
    }
    ();
    b4f.bXT0x = function (e4i, bQ5V) {
        if (!!bQ5V) {
            return this.bbq0x()
        }
        dn6h = 3;
        PF7y.registerAndBind(e4i, function (m4q) {
            if (m4q.code != 200) {
                return this.bbq0x()
            }
            dn6h = 4
        }
            .g4k(this))
    };
    b4f.cuS6M = function () {
        di6c.bXQ0x.fV7O().cuT6N()
    };
    b4f.cuU6O = function () {
        di6c.bXQ0x.fV7O().cuV6P()
    };
    b4f.bbC1x = function () {
        var oW0x = !1;
        return function () {
            if (oW0x)
                return;
            oW0x = !0;
            this.ck5p("polling-init", {})
        }
    }
    ();
    H4L.ft7m.B4F({
        event: "message",
        element: p4t.xV3x
    })
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        cK6E = c4g("nej.p"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        dj6d = c4g("api"),
        b4f,
        K4O;
    var gc7V = a3x.hM8E('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">浠讳綍浜у搧涓殑闂锛屾杩庡弽棣堢粰鎴戜滑</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="璇疯緭鍏ュ弽棣堝唴瀹�"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="璇风暀涓嬭仈绯绘柟寮忥紙鐢佃瘽銆丵Q銆侀偖绠憋級" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>鍐呭涓嶈兘涓虹┖锛�</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>鍙戦€佹剰瑙�</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>鍙� 娑�</i></a></div></div>');
    n4r.bbJ1x = NEJ.C();
    b4f = n4r.bbJ1x.O4S(n4r.dV6P);
    K4O = n4r.bbJ1x.cg5l;
    b4f.bk5p = function (e4i) {
        e4i.title = "鎰忚鍙嶉";
        this.bl5q(e4i)
    };
    b4f.bZ5e = function () {
        this.ca5f = gc7V
    };
    b4f.bR5W = function () {
        this.cc5h();
        this.gF7y = {};
        var Is5x = a3x.I4M;
        var Cn4r = h4l.q4u;
        this.gF7y.submit_btn = Is5x(this.o4s, "u-btn2")[0];
        this.gF7y.cancle_btn = Is5x(this.o4s, "u-btn2")[1];
        this.gF7y.prompt_msg = Is5x(this.o4s, "u-err")[0];
        this.gF7y.zs = Is5x(this.o4s, "zs")[0];
        a3x.X4b(this.gF7y.zs, "display", "none");
        this.gF7y.fb_txt = Is5x(this.o4s, "u-txt")[0];
        this.gF7y.contact = Is5x(this.o4s, "u-txt")[1];
        a3x.fD7w(this.gF7y.fb_txt, "holder");
        a3x.fD7w(this.gF7y.contact, "holder");
        if (a3x.by5D(this.gF7y.fb_txt.parentNode, "holder-parent")) {
            a3x.X4b(this.gF7y.fb_txt.parentNode, "display", "block")
        }
        if (a3x.by5D(this.gF7y.contact.parentNode, "holder-parent")) {
            a3x.X4b(this.gF7y.contact.parentNode, "display", "block")
        }
        Cn4r(this.gF7y.submit_btn, "click", this.bXN0x.g4k(this));
        Cn4r(this.gF7y.cancle_btn, "click", this.bXM0x.g4k(this));
        Cn4r(this.gF7y.prompt_msg, "msgShow", this.bXL0x.g4k(this));
        Cn4r(this.gF7y.fb_txt, "keyup", this.sY1x.g4k(this));
        Cn4r(this.gF7y.fb_txt, "input", this.fl6f.g4k(this));
        Cn4r(this.gF7y.contact, "keyup", this.bXK0x.g4k(this));
        Cn4r(this.gF7y.contact, "input", this.bFF7y.g4k(this));
        this.kz9q = p4t.hK8C.B4F()
    };
    b4f.bXN0x = function (d4h) {
        h4l.bh5m(d4h);
        if (this.cu5z())
            return;
        var bi5n = this.gF7y.fb_txt.value.trim();
        var bo5t = bi5n.length;
        var e4i = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bFE7x = this.gF7y.contact.value.trim();
        var SS8K = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l4p.bbY1x(),
            contact: bFE7x
        };
        var j4n = {
                content: bi5n,
                client: "web",
                xInfo: JSON.stringify(SS8K)
            },
            mD9u = this.kz9q.ciG2x();
        if (mD9u && mD9u.length) {
            j4n.log = mD9u.join("\n")
        }
        if (bo5t == 0) {
            this.gF7y.prompt_msg.innerHTML = "鍙嶉鍐呭涓嶈兘涓虹┖";
            a3x.X4b(this.gF7y.prompt_msg, "display", "block");
            return
        }
        if (bFE7x.length > 100) {
            this.gF7y.prompt_msg.innerHTML = "鑱旂郴鏂瑰紡鏈€澶氬彧鑳借緭鍏�100涓瓧绗�";
            a3x.X4b(this.gF7y.prompt_msg, "display", "block");
            return
        }
        this.cu5z(true);
        e4i.data = k4o.df6Z(j4n);
        e4i.onload = this.bXE0x.g4k(this);
        e4i.onerror = this.hO8G.g4k(this);
        v4z.bp5u("/api/feedback/web", e4i)
    };
    b4f.fl6f = function (d4h) {
        var bo5t = this.gF7y.fb_txt.value.trim().length;
        if (bo5t > 0)
            a3x.X4b(this.gF7y.prompt_msg, "display", "none");
        cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "7.0" ? setTimeout(this.fx7q.g4k(this), 0) : this.fx7q()
    };
    b4f.sY1x = function (d4h) {
        if (d4h.keyCode === 8)
            this.fx7q()
    };
    b4f.fx7q = function () {
        var bo5t = this.gF7y.fb_txt.value.trim().length;
        this.gF7y.zs.innerHTML = !bo5t ? "0/140" : bo5t + "/140"
    };
    b4f.bFF7y = function (d4h) {
        var bo5t = this.gF7y.contact.value.trim().length;
        if (bo5t > 0)
            a3x.X4b(this.gF7y.prompt_msg, "display", "none")
    };
    b4f.bXK0x = function (d4h) {
        if (d4h.keyCode === 8)
            this.bFF7y()
    };
    b4f.bXM0x = function (d4h) {
        h4l.ce5j(d4h);
        this.bq5v()
    };
    b4f.bXL0x = function (d4h) {
        var f4j = h4l.U4Y(d4h);
        f4j.innerHTML = "璇疯緭鍏ュ弽棣堝唴瀹�"
    };
    b4f.cuW6Q = function (cuX6R) {
        var f4j = h4l.U4Y(d4h);
        f4j.innerHTML = ""
    };
    b4f.bXE0x = function (m4q) {
        this.cu5z(false);
        this.bq5v();
        n4r.Z4d.N4R({
            tip: "鎰忚鍙戦€佹垚鍔�",
            autoclose: true
        })
    };
    b4f.hO8G = function (m4q) {
        this.cu5z(false);
        n4r.Z4d.N4R({
            tip: "鎰忚鍙戦€佸け璐�",
            autoclose: true
        })
    };
    b4f.cu5z = function (cC6w) {
        return this.dN6H(this.gF7y.submit_btn, cC6w, "鍙戦€佹剰瑙�", "鍙戦€佷腑...")
    };
    b4f.N4R = function () {
        K4O.N4R.call(this);
        this.cu5z(false);
        this.gF7y.fb_txt.value = "";
        this.gF7y.contact.value = "";
        a3x.X4b(this.gF7y.prompt_msg, "display", "none");
        this.fx7q()
    };
    l4p.bXz0x = function (e4i) {
        e4i = e4i || {};
        if (e4i.title === undefined)
            e4i.title = "鎰忚鍙嶉";
        n4r.bbJ1x.N4R(e4i)
    };
    dj6d.feedback = l4p.feedback = l4p.bXz0x
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        M4Q = c4g("nej.ui"),
        b4f;
    if (!!M4Q.vO2x)
        return;
    M4Q.vO2x = NEJ.C();
    b4f = M4Q.vO2x.O4S(M4Q.et6n);
    b4f.cl5q = function () {
        this.gv7o = this.bFy7r();
        this.cs5x()
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.cn5s = e4i.index;
        this.fT7M = e4i.total;
        this.gD7w = e4i.range;
        this.fS7L(e4i.data)
    };
    b4f.bD5I = function () {
        this.bH5M();
        delete this.bb4f;
        delete this.cn5s;
        delete this.fT7M;
        delete this.gD7w
    };
    b4f.hp7i = bm5r;
    b4f.bFy7r = function () {
        var fX7Q = +(new Date);
        return function () {
            return "itm-" + ++fX7Q
        }
    }
    ();
    b4f.Cg4k = function () {
        return this.gv7o
    };
    b4f.hk7d = function () {
        return this.bb4f
    };
    b4f.fS7L = function (j4n) {
        this.bb4f = j4n || {};
        this.hp7i(this.bb4f)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        M4Q = c4g("nej.ui"),
        b4f,
        K4O;
    if (!!M4Q.rC1x)
        return;
    M4Q.rC1x = NEJ.C();
    b4f = M4Q.rC1x.O4S(M4Q.vO2x);
    K4O = M4Q.rC1x.cg5l;
    b4f.bk5p = function (e4i) {
        this.bXx0x = e4i.pkey || "id";
        this.bl5q(e4i)
    };
    b4f.Ci4m = function (j4n) {
        this.z4D("ondelete", {
            ext: j4n,
            id: this.Cg4k(),
            data: this.hk7d(),
            body: this.kA9r()
        })
    };
    b4f.Qc7V = function (j4n) {
        this.z4D("onupdate", {
            ext: j4n,
            id: this.Cg4k(),
            data: this.hk7d(),
            body: this.kA9r()
        })
    };
    b4f.fS7L = function (j4n) {
        K4O.fS7L.apply(this, arguments);
        this.gv7o = this.bb4f[this.bXx0x] || this.bFy7r()
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        eU6O = NEJ.R,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ui"),
        b4f,
        hP8H,
        bcD1x;
    if (!!M4Q.bcE1x)
        return;
    M4Q.bcE1x = NEJ.C();
    b4f = M4Q.bcE1x.O4S(M4Q.et6n);
    b4f.bk5p = function (e4i) {
        this.SG8y = NEJ.X({}, e4i);
        this.fB7u = NEJ.X({}, e4i);
        delete this.SG8y.onchange;
        this.fB7u.onchange = this.gt7m.g4k(this);
        this.bl5q(e4i);
        this.bXw0x({
            number: e4i.number,
            label: e4i.label || Y4c
        })
    };
    b4f.bD5I = function () {
        this.bH5M();
        if (!!this.jW9N) {
            this.jW9N.S4W();
            delete this.jW9N
        }
        delete this.SG8y;
        delete this.fB7u;
        this.bXv0x();
        this.o4s.innerHTML = "&nbsp;"
    };
    b4f.bZ5e = function () {
        this.lb9S = hP8H
    };
    b4f.bXw0x = function (j4n) {
        a3x.dT6N(this.o4s, bcD1x, j4n);
        var fX7Q = a3x.Fp5u();
        this.fB7u.list = a3x.I4M(this.o4s, "js-i-" + fX7Q);
        this.fB7u.pbtn = (a3x.I4M(this.o4s, "js-p-" + fX7Q) || eU6O)[0];
        this.fB7u.nbtn = (a3x.I4M(this.o4s, "js-n-" + fX7Q) || eU6O)[0]
    };
    b4f.bR5W = function () {
        this.cc5h()
    };
    b4f.cuY6S = function (j4n) {
        return a3x.bP5U(bcD1x, j4n)
    };
    b4f.gt7m = function (d4h) {
        if (this.Qu7n)
            return;
        var s4w = d4h.index,
            co5t = d4h.total;
        this.Qu7n = !0;
        this.Qv7o(s4w, co5t);
        k4o.be5j(this.Ss8k, function (rv0x) {
            rv0x.Qv7o(s4w, co5t)
        });
        this.Qu7n = !1;
        this.z4D("onchange", d4h)
    };
    b4f.g4k = function (bA5F) {
        bA5F = a3x.x4B(bA5F);
        if (!bA5F)
            return this;
        var cm5r = NEJ.X({}, this.SG8y);
        cm5r.parent = bA5F;
        cm5r.index = this.ru0x();
        cm5r.total = this.jG9x();
        var rv0x = this.constructor.B4F(cm5r);
        rv0x.ux2x("onchange", this.fB7u.onchange);
        if (!this.Ss8k)
            this.Ss8k = [];
        this.Ss8k.push(rv0x);
        return this
    };
    b4f.bXv0x = function () {
        var bpv4z = function (rv0x, s4w, i4m) {
            rv0x.S4W();
            i4m.splice(s4w, 1)
        };
        return function () {
            k4o.mu9l(this.Ss8k, bpv4z)
        }
    }
    ();
    b4f.jJ9A = function (s4w) {
        if (!this.jW9N)
            return;
        this.jW9N.jJ9A(s4w)
    };
    b4f.ru0x = function () {
        if (!this.jW9N)
            return 1;
        return this.jW9N.ru0x()
    };
    b4f.jG9x = function () {
        if (!this.jW9N)
            return 1;
        return this.jW9N.jG9x()
    };
    b4f.Qv7o = function (s4w, co5t) {
        if (!this.jW9N)
            return;
        this.jW9N.Qv7o(s4w, co5t)
    };
    b4f.bdd1x = function (co5t) {
        if (!this.jW9N)
            return;
        this.jW9N.bdd1x(co5t)
    };
    hP8H = a3x.rO1x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bcD1x = a3x.em6g('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"涓婁竴椤�"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"涓嬩竴椤�"}</a>{/if}{/trim}')
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        M4Q = c4g("nej.ut"),
        b4f;
    if (!!M4Q.Sr8j)
        return;
    M4Q.Sr8j = NEJ.C();
    b4f = M4Q.Sr8j.O4S(M4Q.cz5E);
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.Sq8i = e4i.pbtn;
        this.cf5k = e4i.nbtn;
        this.Sp8h = e4i.sbtn;
        this.So8g = e4i.ebtn;
        this.ic8U = e4i.event || "click";
        this.jO9F = e4i.selected || "js-selected";
        this.mV9M = e4i.disabled || "js-disabled";
        this.bXt0x(e4i.list);
        this.Qv7o(e4i.index || 1, e4i.total || 1)
    };
    b4f.bD5I = function () {
        this.bH5M();
        delete this.bV5a;
        delete this.ic8U;
        delete this.Sq8i;
        delete this.cf5k;
        delete this.Sp8h;
        delete this.So8g;
        delete this.bFv7o;
        delete this.fT7M;
        delete this.cn5s;
        delete this.jO9F;
        delete this.mV9M
    };
    b4f.bXt0x = function () {
        var bdq1x = function (f4j) {
            this.bV5a.push(f4j);
            this.bU5Z([[f4j, this.ic8U, this.cJ6D.dW6Q(this, 0)]])
        };
        return function (i4m) {
            this.bV5a = [];
            this.bU5Z([[this.Sq8i, "click", this.cJ6D.dW6Q(this, -1)], [this.cf5k, "click", this.cJ6D.dW6Q(this, 1)], [this.Sp8h, "click", this.cJ6D.dW6Q(this, -2)], [this.So8g, "click", this.cJ6D.dW6Q(this, 2)]]);
            k4o.be5j(i4m, bdq1x, this)
        }
    }
    ();
    b4f.Cb4f = function (f4j, s4w) {
        if (s4w == null) {
            f4j.innerText = "";
            a3x.X4b(f4j, "display", "none");
            a3x.w4A(f4j, this.jO9F)
        } else {
            f4j.innerText = s4w;
            a3x.X4b(f4j, "display", "");
            s4w == this.cn5s ? a3x.y4C(f4j, this.jO9F) : a3x.w4A(f4j, this.jO9F)
        }
    };
    b4f.bdu1x = function () {
        if (this.cn5s <= 1) {
            a3x.y4C(this.Sq8i, this.mV9M);
            a3x.y4C(this.Sp8h, this.mV9M)
        } else {
            a3x.w4A(this.Sq8i, this.mV9M);
            a3x.w4A(this.Sp8h, this.mV9M)
        }
        if (this.cn5s >= this.fT7M) {
            a3x.y4C(this.cf5k, this.mV9M);
            a3x.y4C(this.So8g, this.mV9M)
        } else {
            a3x.w4A(this.cf5k, this.mV9M);
            a3x.w4A(this.So8g, this.mV9M)
        }
    };
    b4f.Se8W = bm5r;
    b4f.bdy1x = function () {
        this.Se8W();
        this.bdu1x();
        this.z4D("onchange", {
            last: this.bFv7o,
            total: this.fT7M,
            index: this.cn5s,
            ext: this.bdz1x
        })
    };
    b4f.bFu7n = function (s4w) {
        s4w = parseInt(s4w);
        if (isNaN(s4w) || this.fT7M == null)
            return !1;
        s4w = Math.max(1, Math.min(s4w, this.fT7M));
        this.bFv7o = this.cn5s;
        this.cn5s = s4w;
        return !0
    };
    b4f.bdD1x = function (co5t) {
        co5t = parseInt(co5t);
        if (isNaN(co5t) || co5t < 1)
            return !1;
        this.fT7M = co5t;
        return !0
    };
    b4f.cJ6D = function (d4h, ey6s) {
        h4l.ce5j(d4h);
        var E4I = h4l.U4Y(d4h);
        if (!E4I || a3x.by5D(E4I, this.jO9F) || a3x.by5D(E4I, this.mV9M))
            return;
        var s4w = E4I.innerText;
        switch (ey6s) {
            case 1:
            case -1:
                s4w = this.cn5s + ey6s;
                break;
            case 2:
                s4w = this.fT7M;
                break;
            case -2:
                s4w = 1;
                break
        }
        this.jJ9A(s4w)
    };
    b4f.ru0x = function () {
        return this.cn5s
    };
    b4f.jJ9A = function (s4w) {
        var bXn0x = this.cn5s;
        this.bFu7n(s4w);
        if (bXn0x != this.cn5s)
            this.bdy1x();
        return this
    };
    b4f.jG9x = function () {
        return this.fT7M
    };
    b4f.JG6A = function (co5t) {
        if (this.bdD1x(co5t) && this.cn5s != null) {
            this.cn5s = 1;
            this.bdy1x()
        }
        return this
    };
    b4f.bdd1x = function (co5t) {
        if (this.bdD1x(co5t)) {
            this.Se8W();
            this.bdu1x()
        }
        return this
    };
    b4f.Qv7o = function (s4w, co5t) {
        if (!this.bdD1x(co5t) || !this.bFu7n(s4w))
            return this;
        this.bdy1x();
        return this
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        cL6F = c4g("nej.x"),
        M4Q = c4g("nej.ut"),
        b4f;
    if (!!M4Q.QC7v)
        return;
    M4Q.QC7v = NEJ.C();
    b4f = M4Q.QC7v.O4S(M4Q.Sr8j);
    b4f.cl5q = function () {
        this.cs5x();
        var f4j = a3x.cU6O("span", "zdot");
        f4j.innerText = "...";
        this.Sb8T = [f4j.cloneNode(true), f4j]
    };
    b4f.bD5I = function () {
        this.bH5M();
        this.bFt7m()
    };
    b4f.bFt7m = function () {
        a3x.mc9T(this.Sb8T[0]);
        a3x.mc9T(this.Sb8T[1])
    };
    b4f.Se8W = function () {
        this.bdz1x = {
            last: !1,
            first: !1,
            list: this.bV5a
        };
        this.bFt7m();
        this.Cb4f(this.bV5a[0], 1);
        var bE5J = 1,
            bo5t = this.bV5a.length;
        if (this.fT7M < bo5t) {
            for (var oP0x; bE5J < bo5t; bE5J++) {
                oP0x = bE5J + 1;
                this.Cb4f(this.bV5a[bE5J], oP0x > this.fT7M ? null : oP0x)
            }
            return
        }
        if (this.cn5s > 1) {
            var ct5y = Math.floor((bo5t - 2) / 2),
                bXk0x = this.fT7M - bo5t + 2,
                is8k = Math.max(2, this.cn5s - ct5y);
            if (this.fT7M >= bo5t) {
                is8k = Math.min(is8k, bXk0x)
            }
            if (is8k > 2) {
                this.bV5a[0].insertAdjacentElement("afterEnd", this.Sb8T[0]);
                this.bdz1x.first = !0
            }
            for (var s4w; ; bE5J++) {
                s4w = is8k + bE5J - 1;
                if (s4w > this.cn5s)
                    break;
                this.Cb4f(this.bV5a[bE5J], s4w)
            }
        }
        if (this.cn5s < this.fT7M) {
            var s4w,
                is8k = this.cn5s + 1;
            for (var i = 0, l = bo5t - 2; ; i++, bE5J++) {
                s4w = is8k + i;
                if (bE5J > l || s4w > this.fT7M)
                    break;
                this.Cb4f(this.bV5a[bE5J], s4w)
            }
            if (s4w < this.fT7M) {
                this.bV5a[bE5J].insertAdjacentElement("beforeBegin", this.Sb8T[1]);
                this.bdz1x.last = !0
            }
            if (s4w <= this.fT7M) {
                this.Cb4f(this.bV5a[bE5J++], this.fT7M)
            }
        }
        for (; bE5J < bo5t; bE5J++) {
            this.Cb4f(this.bV5a[bE5J])
        }
    };
    a3x.bXj0x = cL6F.bXj0x = function (bA5F, e4i) {
        var C4G = a3x.kp9g(bA5F);
        if (!C4G)
            return null;
        if (!M4Q.ZI0x(C4G, M4Q.QC7v)) {
            e4i = e4i || {};
            var i4m = !e4i.clazz ? a3x.cQ6K(C4G) : a3x.I4M(C4G, e4i.clazz);
            e4i.pbtn = i4m.shift();
            e4i.nbtn = i4m.pop();
            e4i.list = i4m;
            delete e4i.clazz
        }
        return M4Q.ZI0x(C4G, M4Q.QC7v, e4i || Y4c)
    };
    cL6F.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        eU6O = NEJ.R,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        M4Q = c4g("nej.ui"),
        b4f,
        K4O,
        gc7V;
    if (!!M4Q.QH7A)
        return;
    M4Q.QH7A = NEJ.C();
    b4f = M4Q.QH7A.O4S(M4Q.bcE1x);
    K4O = M4Q.QH7A.cg5l;
    b4f.bk5p = function (e4i) {
        e4i.number = parseInt(e4i.number) || 9;
        this.bl5q(e4i);
        this.jW9N = H4L.QC7v.B4F(this.fB7u)
    };
    b4f.gt7m = function (d4h) {
        if (!!this.SG8y.noend) {
            var bFs7l = d4h.ext || Y4c,
                i4m = bFs7l.list || eU6O;
            if (bFs7l.last) {
                a3x.X4b(i4m[i4m.length - 1], "display", "none")
            }
        }
        K4O.gt7m.apply(this, arguments)
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        bd5i = c4g("nej.ui"),
        M4Q = c4g("nej.ut"),
        b4f;
    if (!!M4Q.RZ8R)
        return;
    M4Q.RZ8R = NEJ.C();
    b4f = M4Q.RZ8R.O4S(M4Q.cz5E);
    b4f.bk5p = function (e4i) {
        this.iv8n = {};
        this.bl5q(e4i);
        this.ia8S = a3x.x4B(e4i.parent);
        this.eM6G = {
            parent: this.ia8S
        };
        this.qB0x = parseInt(e4i.limit) || 10;
        this.vA2x = parseInt(e4i.first) || this.qB0x;
        this.bXf0x(e4i.item);
        this.bXe0x(e4i.cache || Y4c);
        this.bWZ0x(e4i.pager || Y4c);
        this.fS7L()
    };
    b4f.bD5I = function () {
        this.z4D("onbeforerecycle");
        this.QO7H();
        this.bH5M();
        if (this.iv8n.clear) {
            this.P4T.tA1x(this.iv8n.key)
        }
        this.P4T.S4W();
        if (!!this.in8f) {
            this.in8f.S4W();
            delete this.in8f
        }
        delete this.bFn7g;
        delete this.fB7u;
        delete this.RT8L;
        delete this.P4T;
        delete this.ia8S;
        delete this.QT7M;
        delete this.eM6G;
        delete this.iv8n
    };
    b4f.bFk7d = function () {
        var cP6J = /\{(.*?)\}/gi,
            bWU0x = function (pD0x, j4n) {
                return (pD0x || "{id}{seed}").replace(cP6J, function ($1, $2) {
                    var A4E = j4n[$2];
                    return A4E == null ? $1 : A4E
                })
            };
        return function (C4G) {
            var J4N = bWU0x(this.eM6G.jstIdTempalte, {
                id: C4G,
                seed: a3x.Fp5u()
            });
            if (!this.eM6G.jstIdType) {
                return a3x.x4B(J4N)
            } else if (this.eM6G.jstIdType == 1) {
                return (a3x.I4M(this.ia8S, J4N) || [])[0]
            }
        }
    }
    ();
    b4f.zC3x = function (bE5J, bj5o, fY7R, bo5t) {
        var m4q = {
            index: 1,
            total: 1
        };
        if (bj5o >= bE5J) {
            m4q.index = Math.floor((bj5o - bE5J) / fY7R) + 2
        }
        if (bo5t > bE5J) {
            m4q.total = Math.ceil((bo5t - bE5J) / fY7R) + 1
        }
        return m4q
    };
    b4f.bFj7c = function (J4N) {
        delete this.QT7M;
        this.Gj5o = J4N;
        this.bU5Z([[this.ia8S, "click", this.bWS0x.g4k(this)]])
    };
    b4f.bXf0x = function (r4v) {
        if (k4o.fe6Y(r4v)) {
            this.bFj7c(r4v);
            return
        }
        NEJ.X(this.eM6G, r4v);
        var dD6x = this.eM6G.klass;
        delete this.eM6G.klass;
        if (k4o.fe6Y(dD6x)) {
            this.bFj7c(dD6x);
            return
        }
        delete this.Gj5o;
        this.QT7M = dD6x;
        this.eM6G.ondelete = this.z4D.g4k(this, "ondelete");
        this.eM6G.onupdate = this.z4D.g4k(this, "onupdate")
    };
    b4f.bXe0x = function (R4V) {
        var dD6x = R4V.klass,
            jl8d = NEJ.X({}, R4V);
        this.iv8n.key = jl8d.lkey;
        this.iv8n.data = jl8d.data || {};
        this.iv8n.clear = !!jl8d.clear;
        this.eM6G.pkey = jl8d.key || "id";
        jl8d.onlistload = this.beX1x.g4k(this);
        jl8d.onpullrefresh = this.bWR0x.g4k(this);
        if (!!dD6x && "onlistchange" in dD6x) {
            this.bU5Z([[dD6x, "listchange", this.bfa1x.g4k(this)]])
        } else {
            jl8d.onitemadd = this.RR8J.g4k(this);
            jl8d.onitemdelete = this.RQ8I.g4k(this);
            jl8d.onitemupdate = this.bFi7b.g4k(this)
        }
        this.P4T = (dD6x || M4Q.Jp6j).B4F(jl8d);
        if (R4V.total != null) {
            this.P4T.JG6A(this.iv8n.key, R4V.total)
        }
        if (!!R4V.list) {
            this.P4T.rr0x(this.iv8n.key, R4V.list)
        }
    };
    b4f.bWZ0x = function (rv0x) {
        this.bFn7g = rv0x.klass || bd5i.QH7A;
        this.fB7u = NEJ.X({}, rv0x);
        if (k4o.el6f(rv0x.parent)) {
            this.fB7u.parent = rv0x.parent[0];
            this.QZ7S = rv0x.parent.slice(1);
            if (!this.QZ7S || !this.QZ7S.length) {
                delete this.QZ7S
            }
        }
        delete this.fB7u.klass
    };
    b4f.QO7H = function () {
        var fZ7S = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.z4D("onbeforelistclear", {
                parent: this.ia8S
            });
            if (!!this.fd6X && this.fd6X.length > 0) {
                this.fd6X = this.QT7M.S4W(this.fd6X);
                delete this.fd6X
            }
            if (fZ7S.test(this.ia8S.tagName)) {
                a3x.bHS7L(this.ia8S)
            } else {
                this.ia8S.innerHTML = ""
            }
        }
    }
    ();
    b4f.bfl2x = function (RN8F) {
        if (!!this.fB7u.fixed)
            return;
        a3x.X4b(this.fB7u.parent, "display", RN8F);
        k4o.be5j(this.QZ7S, function (bA5F) {
            a3x.X4b(bA5F, "display", RN8F)
        }, this)
    };
    b4f.bfo2x = function () {
        var s4w = this.fB7u.index || 1;
        delete this.fB7u.index;
        if (!!this.in8f) {
            s4w = this.in8f.ru0x()
        }
        this.zL3x({
            last: s4w,
            index: s4w
        })
    };
    b4f.zL3x = function (d4h) {
        this.z4D("onpagechange", d4h)
    };
    b4f.bFh7a = function (bj5o) {
        this.iv8n.offset = bj5o;
        this.Zx0x()
    };
    b4f.bFg7Z = function (e4i) {
        return e4i
    };
    b4f.Zx0x = function () {
        this.Rb7U();
        var j4n = this.iv8n.data;
        j4n.offset = this.iv8n.offset;
        var oc0x = j4n.offset == 0;
        j4n.total = oc0x;
        this.iv8n.limit = oc0x ? this.vA2x : this.qB0x;
        j4n.limit = this.iv8n.limit;
        this.P4T.nQ0x(this.bFg7Z(NEJ.X({}, this.iv8n)))
    };
    b4f.beX1x = function (e4i) {
        if (e4i.key != this.iv8n.key || e4i.offset != this.iv8n.offset)
            return;
        this.RL8D();
        var i4m = this.P4T.gN7G(e4i.key);
        if (!i4m || !i4m.length) {
            this.bfD2x();
            return
        }
        var fY7R = e4i.limit,
            bj5o = e4i.offset;
        if (this.bfE2x(i4m, bj5o, fY7R))
            return;
        this.z4D("onbeforelistrender", {
            list: i4m,
            offset: bj5o,
            parent: this.ia8S
        });
        if (!!this.Gj5o) {
            this.eM6G.xlist = i4m;
            this.eM6G.beg = bj5o;
            this.eM6G.end = Math.min(i4m.length, bj5o + fY7R) - 1;
            this.eM6G.act = "list";
            var ds6m = a3x.bP5U(this.Gj5o, this.eM6G);
            this.Rf7Y(ds6m)
        } else {
            this.eM6G.limit = fY7R;
            this.eM6G.offset = bj5o;
            var gx7q = a3x.yP3x(i4m, this.QT7M, this.eM6G);
            this.Rm7f(gx7q)
        }
        this.z4D("onafterlistrender", {
            list: i4m,
            offset: bj5o,
            parent: this.ia8S
        })
    };
    b4f.bWR0x = function (e4i) {
        if (!this.RT8L)
            return;
        delete this.RT8L;
        this.RL8D("onafterpullrefresh");
        this.fS7L()
    };
    b4f.bFf7Y = function (s4w, co5t) {
        if (!!this.in8f) {
            var xX3x = this.in8f.ru0x(),
                bWH0x = this.in8f.jG9x();
            if (xX3x > co5t || co5t != bWH0x) {
                this.in8f.S4W();
                delete this.in8f;
                this.zL3x({
                    last: xX3x,
                    index: Math.min(s4w, co5t)
                });
                return !0
            }
        } else {
            this.fB7u.index = s4w;
            this.fB7u.total = co5t;
            this.in8f = this.bFn7g.B4F(this.fB7u);
            this.in8f.ux2x("onchange", this.zL3x.g4k(this));
            k4o.be5j(this.QZ7S, function (bA5F) {
                this.in8f.g4k(bA5F)
            }, this)
        }
    };
    b4f.RE8w = function () {
        var fX7Q = +(new Date);
        return function (j4n) {
            var C4G = j4n[this.eM6G.pkey];
            if (!C4G) {
                j4n["dirty-data"] = !0;
                j4n[this.eM6G.pkey] = "dirty-" + fX7Q++
            }
            return j4n
        }
    }
    ();
    b4f.RC8u = function (j4n) {
        var C4G = j4n[this.eM6G.pkey];
        if (!!j4n["dirty-data"]) {
            delete j4n["dirty-data"];
            delete j4n[this.eM6G.pkey]
        }
        return C4G
    };
    b4f.RB8t = function () {
        var bWG0x = function (jA9r, lG9x) {
            this.ia8S.insertAdjacentElement(jA9r, lG9x)
        };
        return function (jA9r, j4n) {
            var HZ5e = [j4n];
            if (!!this.Gj5o) {
                this.eM6G.xlist = HZ5e;
                this.eM6G.beg = 0;
                this.eM6G.end = 0;
                this.eM6G.act = "add";
                this.Rf7Y(a3x.bP5U(this.Gj5o, this.eM6G), jA9r)
            } else {
                this.eM6G.limit = 1;
                this.eM6G.offset = 0;
                this.eM6G.parent = bWG0x.g4k(this, jA9r);
                var gx7q = a3x.yP3x(HZ5e, this.QT7M, this.eM6G);
                this.eM6G.parent = this.ia8S;
                this.Rm7f(gx7q)
            }
        }
    }
    ();
    b4f.Rb7U = bm5r;
    b4f.RL8D = function (T4X) {
        var d4h = {
            parent: this.ia8S
        };
        this.z4D(T4X || "onafterlistload", d4h);
        if (!d4h.stopped) {
            a3x.mc9T(this.ci5n)
        }
    };
    b4f.bfE2x = bm5r;
    b4f.RA8s = function (bF5K, jA9r) {
        if (k4o.fe6Y(bF5K)) {
            if (!this.ci5n)
                this.ci5n = a3x.cU6O("div");
            this.ci5n.innerHTML = bF5K
        } else {
            this.ci5n = bF5K
        }
        this.ia8S.insertAdjacentElement(jA9r || "beforeEnd", this.ci5n)
    };
    b4f.xs3x = function (T4X, ku9l, jA9r) {
        var d4h = {
            parent: this.ia8S
        };
        this.z4D(T4X, d4h);
        if (!d4h.stopped) {
            this.RA8s(d4h.value || ku9l, jA9r)
        }
    };
    b4f.bfD2x = bm5r;
    b4f.Rf7Y = bm5r;
    b4f.Rm7f = bm5r;
    b4f.bWS0x = function () {
        var fZ7S = /^(?:delete|update)$/;
        return function (d4h) {
            var f4j = h4l.U4Y(d4h, "d:action");
            if (!f4j)
                return;
            var W4a = a3x.u4y(f4j, "action");
            if (!fZ7S.test(W4a))
                return;
            var C4G = a3x.u4y(f4j, "id");
            if (!C4G)
                return;
            var r4v = this.P4T.eh6b(C4G);
            if (!r4v)
                return;
            h4l.bh5m(d4h);
            this.z4D("on" + W4a, {
                data: r4v,
                id: r4v[this.eM6G.pkey],
                body: a3x.x4B(this.bFk7d(C4G))
            })
        }
    }
    ();
    b4f.RR8J = bm5r;
    b4f.Zw0x = function (d4h) {
        var j4n = d4h.data || {},
            e4i = {
                data: j4n,
                key: this.iv8n.key,
                id: j4n[this.eM6G.pkey]
            };
        this.z4D("onbeforedelete", e4i);
        this.P4T.Ji6c(e4i)
    };
    b4f.RQ8I = bm5r;
    b4f.Zr0x = function (d4h) {
        var j4n = d4h.data || {},
            e4i = {
                data: j4n,
                key: this.iv8n.key
            };
        this.z4D("onbeforeupdate", e4i);
        this.P4T.Zy0x(e4i)
    };
    b4f.bFi7b = function (d4h) {
        this.Rp8h(d4h, "onafterupdate");
        if (d4h.stopped)
            return;
        var C4G = d4h.data[this.eM6G.pkey];
        if (!!this.fd6X) {
            var r4v = a3x.bLI8A(C4G);
            if (!!r4v)
                r4v.fS7L(d4h.data)
        } else {
            var f4j = a3x.x4B(C4G + "" + a3x.Fp5u());
            if (!f4j)
                return;
            var i4m = this.P4T.gN7G(d4h.key),
                s4w = k4o.cV6P(i4m, d4h.data);
            if (s4w < 0)
                return;
            this.eM6G.list = i4m;
            this.eM6G.beg = s4w;
            this.eM6G.end = s4w;
            this.eM6G.act = "update";
            var ds6m = a3x.bP5U(this.Gj5o, this.eM6G);
            f4j.insertAdjacentHTML("afterEnd", ds6m);
            a3x.cF6z(f4j)
        }
    };
    b4f.Rp8h = function (d4h, T4X) {
        var r4v = d4h.data;
        if (!r4v || r4v[this.eM6G.pkey] == null) {
            this.z4D("onerror", d4h);
            d4h.stopped = !0
        }
        if (!d4h.stopped) {
            this.z4D(T4X, d4h)
        }
    };
    b4f.bfW2x = bm5r;
    b4f.bgc2x = bm5r;
    b4f.bfa1x = function (d4h) {
        if (d4h.key != this.iv8n.key)
            return;
        switch (d4h.action) {
            case "add":
                this.RR8J(d4h);
                break;
            case "delete":
                this.RQ8I(d4h);
                break;
            case "update":
                this.bFi7b(d4h);
                break;
            case "refresh":
                this.fS7L();
                break;
            case "unshift":
                this.bgc2x(d4h.offset, d4h.limit);
                break;
            case "append":
                this.bfW2x(d4h.offset, d4h.limit);
                break
        }
    };
    b4f.oI0x = function (r4v) {
        this.Zr0x({
            data: r4v
        })
    };
    b4f.lR9I = function (r4v) {
        this.Zw0x({
            data: r4v
        })
    };
    b4f.re0x = function (r4v) {
        this.P4T.iG8y({
            data: r4v,
            key: this.iv8n.key
        })
    };
    b4f.rc0x = function () {
        return this.P4T
    };
    b4f.bgk2x = function (j4n) {
        this.RB8t("afterBegin", this.RE8w(j4n));
        return this.RC8u(j4n)
    };
    b4f.bFd7W = function (j4n) {
        this.RB8t("beforeEnd", this.RE8w(j4n));
        return this.RC8u(j4n)
    };
    b4f.fS7L = function () {
        this.QO7H();
        this.bfo2x()
    };
    b4f.cuZ6T = function () {
        this.P4T.tA1x(this.iv8n.key);
        this.fS7L()
    };
    b4f.bcJ1x = function () {
        if (!!this.RT8L)
            return;
        this.RT8L = !0;
        this.xs3x("onbeforepullrefresh", "鍒楄〃鍒锋柊涓�...", "afterBegin");
        this.P4T.bcJ1x({
            key: this.iv8n.key,
            data: this.iv8n.data
        })
    };
    b4f.jG9x = function () {
        return this.P4T.jG9x(this.iv8n.key)
    };
    b4f.bFb7U = function () {
        return this.in8f
    };
    b4f.ZK0x = function () {
        return this.P4T.ZK0x(this.iv8n.key)
    };
    b4f.bWs0x = function () {
        return this.fd6X
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        eU6O = NEJ.R,
        k4o = c4g("nej.u"),
        a3x = c4g("nej.e"),
        M4Q = c4g("nej.ut"),
        b4f,
        K4O;
    if (!!M4Q.it8l)
        return;
    M4Q.it8l = NEJ.C();
    b4f = M4Q.it8l.O4S(M4Q.RZ8R);
    K4O = M4Q.it8l.cg5l;
    b4f.zC3x = function (bj5o, bo5t) {
        return K4O.zC3x.call(this, this.vA2x, bj5o, this.qB0x, bo5t)
    };
    b4f.bgt2x = function (s4w) {
        var bj5o = 0;
        if (s4w > 1)
            bj5o = this.vA2x + (s4w - 2) * this.qB0x;
        return bj5o
    };
    b4f.zL3x = function (d4h) {
        K4O.zL3x.apply(this, arguments);
        if (!d4h.stopped) {
            this.bFh7a(this.bgt2x(d4h.index))
        }
    };
    b4f.Rb7U = function () {
        this.QO7H();
        this.xs3x("onbeforelistload", "鍒楄〃鍔犺浇涓�...")
    };
    b4f.RL8D = function () {
        K4O.RL8D.apply(this, arguments);
        this.QO7H()
    };
    b4f.bfE2x = function (i4m, bj5o, fY7R) {
        var bt5y = this.zC3x(bj5o, i4m.length);
        if (this.bFf7Y(bt5y.index, bt5y.total))
            return !0;
        this.bfl2x(bt5y.total > 1 ? "" : "none")
    };
    b4f.bfD2x = function () {
        this.xs3x("onemptylist", "娌℃湁鍒楄〃鏁版嵁锛�")
    };
    b4f.RA8s = function (bF5K, jA9r) {
        if (!jA9r && k4o.fe6Y(bF5K)) {
            this.ia8S.innerHTML = bF5K;
            return
        }
        K4O.RA8s.apply(this, arguments)
    };
    b4f.Rf7Y = function (ds6m) {
        this.ia8S.innerHTML = ds6m
    };
    b4f.Rm7f = function (gx7q) {
        this.fd6X = gx7q
    };
    b4f.RR8J = function (d4h) {
        this.Rp8h(d4h, "onafteradd");
        if (!d4h.stopped)
            this.fS7L()
    };
    b4f.RQ8I = function (d4h) {
        this.Rp8h(d4h, "onafterdelete");
        if (!d4h.stopped)
            this.fS7L()
    };
    b4f.bfW2x = function (bj5o, fY7R) {
        var s4w = 1;
        if (!!this.in8f) {
            s4w = this.in8f.ru0x()
        }
        var iQ8I = this.bgt2x(s4w),
            gy7r = iQ8I + (s4w > 1 ? this.qB0x : this.vA2x);
        if (bj5o >= gy7r && !!this.in8f) {
            var bt5y = this.zC3x(0, this.jG9x());
            this.in8f.bdd1x(bt5y.total);
            this.bfl2x(bt5y.total > 1 ? "" : "none")
        } else {
            this.fS7L()
        }
    };
    b4f.bgc2x = function (bj5o, fY7R) {
        var s4w = 1;
        if (!!this.in8f) {
            s4w = this.in8f.ru0x()
        }
        var iQ8I = this.bgt2x(s4w),
            bt5y = this.zC3x(iQ8I, this.jG9x());
        this.zL3x({
            last: s4w,
            index: bt5y.index
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        D4H = c4g("nm.w"),
        fb6V = 40,
        b4f,
        K4O;
    D4H.Rw8o = NEJ.C();
    b4f = D4H.Rw8o.O4S(H4L.cz5E);
    K4O = D4H.Rw8o.cg5l;
    b4f.cl5q = function () {
        this.cs5x()
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.Rq8i = e4i.inputer;
        this.bgx2x = e4i.tipper;
        this.bU5Z([[this.Rq8i, "input", this.fl6f.g4k(this)]])
    };
    b4f.bD5I = function () {
        this.bH5M();
        this.Hs5x(null, null)
    };
    b4f.fl6f = function (d4h) {
        if (d4h && d4h.type == "keyup" && (d4h.keyCode != 8 || d4h.keyCode != 68))
            return;
        var T4X = this.Rq8i.value,
            cva6U;
        if (l4p.Fh5m(T4X) > fb6V) {
            this.Rq8i.value = l4p.zQ3x(T4X, fb6V);
            this.Hs5x("姝屽崟鍚嶄笉鑳借秴杩�20涓眽瀛楁垨40涓嫳鏂囧瓧绗︼紒", arguments.callee.g4k(this))
        } else if (T4X.indexOf("#") >= 0 || T4X.indexOf("@") >= 0) {
            this.Hs5x("姝屽崟鍚嶄笉鑳藉寘鍚瓧绗︹€淍鈥濆拰鈥�#鈥濓紒")
        } else {
            this.Hs5x(null, null);
            this.z4D("onchange", {
                value: T4X
            })
        }
    };
    b4f.bWm0x = function () {
        this.fl6f()
    };
    b4f.Hs5x = function () {
        var C4G = 0;
        return function (dl6f, bEW7P) {
            if (!!C4G)
                window.clearTimeout(C4G);
            if (!dl6f) {
                a3x.y4C(this.bgx2x, "f-vhide");
                this.bES7L = !1;
                return
            }
            this.bgx2x.innerHTML = '<i class="u-icn u-icn-25"></i>' + dl6f;
            a3x.w4A(this.bgx2x, "f-vhide");
            this.bES7L = !0;
            if (k4o.gf7Y(bEW7P))
                C4G = window.setTimeout(function () {
                    this.Hs5x(null, null);
                    bEW7P()
                }
                    .g4k(this), 1e3)
        }
    }
    ();
    b4f.bEQ7J = function () {
        if (this.bES7L)
            return !1;
        if (l4p.ja8S(this.Rq8i.value)) {
            this.Hs5x("姝屽崟鍚嶄笉鑳戒负绌�");
            return !1
        }
        return !0
    };
    b4f.fs7l = function () {
        return this.Rq8i.value
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j"),
        n4r = c4g("nm.l"),
        D4H = c4g("nm.w"),
        bI5N = c4g("nej.ui"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f,
        K4O;
    n4r.Ry8q = NEJ.C();
    b4f = n4r.Ry8q.O4S(n4r.dV6P);
    K4O = n4r.Ry8q.cg5l;
    b4f.cl5q = function () {
        this.cs5x()
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a3x.I4M(this.o4s, "j-flag");
        this.RD8v = {
            inputer: i4m[0],
            tipper: i4m[1]
        };
        this.gM7F = {
            onerror: this.bEN7G.g4k(this),
            onitemadd: this.bEN7G.g4k(this)
        };
        this.oQ0x = i4m[2];
        h4l.q4u(i4m[2], "click", this.BM4Q.g4k(this));
        h4l.q4u(i4m[3], "click", this.zX3x.g4k(this));
        h4l.q4u(this.o4s, "keypress", this.bEM7F.g4k(this))
    };
    b4f.bZ5e = function () {
        this.ca5f = "m-wgt-create"
    };
    b4f.bk5p = function (e4i) {
        e4i.clazz = " m-layer-w2";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "鏂板缓姝屽崟";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bl5q(e4i);
        this.RD8v.inputer.value = e4i.name || "";
        this.tB1x = D4H.Rw8o.B4F(this.RD8v);
        this.tB1x.bWm0x();
        this.P4T = p4t.hh7a.B4F(this.gM7F);
        setTimeout(function () {
            this.RD8v.inputer.focus()
        }
            .g4k(this), 0)
    };
    b4f.bD5I = function () {
        this.bH5M();
        if (this.tB1x) {
            this.tB1x.S4W();
            delete this.tB1x
        }
        this.rs0x(!1);
        this.RD8v.inputer.value = ""
    };
    b4f.rs0x = function (Rj7c) {
        this.no9f = Rj7c;
        if (Rj7c) {
            this.oQ0x.innerHTML = "<i>鏂板缓涓�...</i>";
            a3x.y4C(this.oQ0x, "u-btn2-dis")
        } else {
            this.oQ0x.innerHTML = "<i>鏂� 寤�</i>";
            a3x.w4A(this.oQ0x, "u-btn2-dis")
        }
    };
    b4f.BM4Q = function () {
        if (this.no9f || !this.tB1x.bEQ7J())
            return;
        var cm5r = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.tB1x.fs7l()
            },
            offset: 1
        };
        this.P4T.iG8y(cm5r);
        this.rs0x(!0)
    };
    b4f.bEN7G = function (d4h) {
        var cb5g = (d4h.result || Y4c).code;
        if (!cb5g) {
            this.z4D("onsuccess", d4h.data)
        } else {
            this.z4D("onerror", d4h)
        }
        this.bq5v()
    };
    b4f.zX3x = function () {
        this.bq5v()
    };
    b4f.bEM7F = function (d4h) {
        if (d4h.keyCode == 13)
            this.BM4Q()
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        v4z = c4g("nej.j"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        n4r = c4g("nm.l"),
        b4f,
        K4O;
    n4r.bhi2x = NEJ.C();
    b4f = n4r.bhi2x.O4S(n4r.dV6P);
    K4O = n4r.bhi2x.cg5l;
    b4f.cl5q = function () {
        this.cs5x()
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a3x.I4M(this.o4s, "j-flag");
        this.hJ8B = {
            limit: 301,
            parent: i4m[1],
            cache: {
                klass: p4t.hh7a,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bhk2x.g4k(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l4p.Dt4x,
                escape: k4o.dM6G
            }
        };
        this.gM7F = {
            onsuccess: this.RM8E.g4k(this),
            onerror: this.eo6i.g4k(this)
        };
        h4l.q4u(i4m[0], "click", this.BM4Q.g4k(this));
        h4l.q4u(i4m[1], "click", this.lp9g.g4k(this))
    };
    b4f.bZ5e = function () {
        this.ca5f = "m-wgt-subscribe"
    };
    b4f.bk5p = function (e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.clazz = " m-layer-w2";
        e4i.title = "娣诲姞鍒版瓕鍗�";
        e4i.draggable = !0;
        e4i.mask = !0;
        this.bl5q(e4i);
        this.RP8H = (e4i.tracks || []).reverse();
        this.hJ8B.item.size = this.RP8H.length;
        this.gM7F.name = e4i.name || "";
        this.bEL7E = p4t.uH2x.B4F({
            onaddsuccess: this.Ax3x.g4k(this)
        });
        this.rL1x = p4t.hh7a.B4F({
            onlistload: this.bVV0x.g4k(this)
        });
        this.rL1x.bJj8b();
        k4o.be5j(this.RP8H, function (r4v, s4w, i4m) {
            if (!k4o.kg9X(r4v)) {
                i4m[s4w] = this.bEL7E.eh6b(r4v) || r4v
            }
        }, this)
    };
    b4f.bVV0x = function () {
        if (this.dt6n)
            this.dt6n.S4W();
        this.dt6n = H4L.it8l.B4F(this.hJ8B)
    };
    b4f.BM4Q = function () {
        this.bq5v();
        if (this.BG4K)
            this.BG4K.S4W();
        this.BG4K = n4r.Ry8q.B4F(this.gM7F);
        this.BG4K.N4R()
    };
    b4f.lp9g = function () {
        var bVU0x = function (f4j) {
            while (f4j && f4j != document) {
                if (f4j.tagName.toLowerCase() == "li") {
                    return f4j
                }
                f4j = f4j.parentNode
            }
        };
        return function (d4h) {
            h4l.ce5j(d4h);
            var E4I = h4l.U4Y(d4h),
                bhI2x = bVU0x(E4I);
            if (!!bhI2x && !a3x.by5D(bhI2x, "dis")) {
                this.RM8E({
                    id: a3x.u4y(bhI2x, "id")
                })
            }
        }
    }
    ();
    b4f.RM8E = function (d4h) {
        var C4G = d4h.id;
        if (!C4G || !this.RP8H.length)
            return;
        this.bEL7E.iG8y({
            key: "track_playlist-" + C4G,
            data: {
                tracks: this.RP8H,
                pid: C4G
            }
        });
        this.bq5v()
    };
    b4f.Ax3x = function () {
        this.z4D("onsuccess");
        n4r.Z4d.N4R({
            tip: "鏀惰棌鎴愬姛"
        })
    };
    b4f.eo6i = function (d4h) {
        this.bq5v();
        this.z4D("onerror", d4h);
        var cA6u = "鏀惰棌澶辫触";
        switch (d4h.code) {
            case 405:
                cA6u = "鎿嶄綔杩囦簬棰戠箒锛屽厛浼戞伅涓€涓嬪啀璇曞惂";
                break;
            case 507:
                cA6u = "姝屽崟鏁伴噺瓒呰繃闄愬埗";
                break;
            case 502:
                cA6u = "姝屾洸宸茬粡瀛樺湪"
        }
        n4r.Z4d.N4R({
            tip: cA6u,
            type: 2
        })
    };
    b4f.bhk2x = function () {
        this.bq5v();
        n4r.Z4d.N4R({
            tip: "鍒楄〃涓嬭浇澶辫触锛岃绋嶅悗鍐嶈瘯",
            type: 2
        })
    };
    l4p.lE9v = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n4r.bhi2x.N4R(e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        cK6E = c4g("nej.p"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x");
    var bhJ2x,
        nV0x,
        V4Z = decodeURIComponent(location.href),
        iU8M = /.+(http:\/\/.+\/proxy.html)/.test(V4Z) ? RegExp.$1 : "";
    if (!!iU8M) {
        v4z.uk2x("mail_proxy_url", iU8M)
    } else {
        iU8M = v4z.sX1x("mail_proxy_url") || "about:blank"
    }
    bhJ2x = a3x.Ug8Y({
        src: iU8M,
        onload: function () {
            nV0x = true
        }
    });
    var bEK7D = function () {
        v4z.gG7z("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var bVS0x = function () {
        if (cK6E.cS6M.browser == "ie" && parseInt(cK6E.cS6M.version) < 9) {
            l4p.fc6W({
                clazz: "m-layer-w2",
                message: "褰撳墠娴忚鍣ㄧ増鏈繃浣庯紝鏆傛椂鏃犳硶浣跨敤锛岃鍗囩骇鍚庡啀璇曘€�"
            });
            return false
        }
        return true
    };
    l4p.RS8K = function (t4x, C4G, W4a) {
        if (!bVS0x())
            return;
        bEK7D();
        if (W4a == "stop") {
            if (!nV0x)
                throw "proxy not loaded";
            bEK7D();
            bhJ2x.contentWindow.location.replace(iU8M + "#" + k4o.df6Z({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bhJ2x.contentWindow.location.replace(iU8M + "#" + k4o.df6Z({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: t4x,
                    id: C4G,
                    s: +(new Date),
                    action: W4a
                })
            }))
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        p4t = c4g("nm.d");
    var kz9q = p4t.hK8C.B4F();
    var np0x = p4t.uH2x.B4F({
        onlistload: bVR0x,
        onitemload: bVN0x,
        onerror: eo6i
    });
    var BF4J = p4t.pw0x.B4F({
        onlistload: bVI0x,
        onitemload: bVH0x,
        onerror: eo6i
    });
    var bEG7z = {};

    function ur2x(d4h) {
        var f4j = h4l.U4Y(d4h, "d:resAction"),
            W4a = a3x.u4y(f4j, "resAction");
        if (f4j && (W4a == "play" || W4a == "addto")) {
            bEE7x({
                action: W4a,
                type: parseInt(a3x.u4y(f4j, "resType")),
                id: a3x.u4y(f4j, "resId"),
                from: a3x.u4y(f4j, "resFrom"),
                data: a3x.u4y(f4j, "resData"),
                order: a3x.u4y(f4j, "resOrder")
            });
            bVB0x(f4j)
        }
    }

    function bEE7x(bN5S) {
        var W4a = bN5S.action,
            t4x = bN5S.type,
            C4G = bN5S.id,
            dK6E = bN5S.from,
            j4n = bN5S.data,
            ss1x = bN5S.order,
            e4i = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: C4G
                },
                ext: {
                    id: C4G,
                    action: W4a,
                    type: t4x,
                    from: dK6E,
                    data: j4n
                }
            };
        if (W4a != "play" && W4a != "addto" || !t4x)
            return;
        if (window.GRef && GRef == "mail") {
            l4p.RS8K(t4x, C4G, W4a);
            return
        }
        switch (t4x) {
            case 13:
                e4i.key = "track_playlist-" + C4G;
                np0x.nQ0x(e4i);
                if (W4a == "play") {
                    v4z.bp5u("/api/playlist/update/playcount", {
                        query: {
                            id: C4G
                        }
                    })
                }
                break;
            case 17:
                e4i.key = "program";
                e4i.id = C4G;
                BF4J.ZD0x(e4i);
                if (W4a == "play") {
                    v4z.bp5u("/api/dj/program/listen", {
                        query: {
                            id: C4G
                        }
                    })
                }
                break;
            case 18:
                e4i.key = "track";
                e4i.id = C4G;
                np0x.ZD0x(e4i);
                break;
            case 19:
                e4i.key = "track_album-" + C4G;
                np0x.nQ0x(e4i);
                break;
            case 24:
                e4i.key = "track_day";
                np0x.nQ0x(e4i);
                break;
            case 2:
                e4i.key = "track_artist_top-" + C4G;
                np0x.nQ0x(e4i);
                break;
            case 70:
                e4i.key = "program_djradio-" + C4G + "-" + ss1x;
                e4i.data.radioId = C4G;
                e4i.data.asc = ss1x == 2;
                BF4J.nQ0x(e4i);
                break
        }
    }

    function bED7w(i4m) {
        var m4q = [];
        k4o.be5j(i4m, function (r4v) {
            if (r4v.mainSong) {
                r4v.mainSong.program = r4v;
                m4q.push(r4v.mainSong);
                r4v.localupdatetime = +(new Date);
                np0x.cjk3x(r4v.mainSong);
                r4v.mainTrackId = r4v.mainSong.id;
                delete r4v.mainSong
            } else {
                var bEC7v = np0x.eh6b(r4v.mainTrackId);
                bEC7v && m4q.push(bEC7v)
            }
        });
        return m4q
    }

    function RW8O(i4m, e4i) {
        var qI0x = e4i.action == "play" && e4i.type != 17 && e4i.type != 18,
            eW6Q = e4i.action == "play";
        if (!i4m.length)
            return;
        if (e4i.type == 19) {
            i4m = l4p.HW5b(i4m, true, {
                play: true
            }, {
                source: "album",
                sourceid: e4i.id
            })
        } else {
            i4m = l4p.HW5b(i4m, true, {
                play: true
            })
        }
        k4o.be5j(i4m, function (r4v) {
            r4v.source = l4p.bbn0x({
                fid: e4i.from,
                fdata: e4i.data,
                type: e4i.type,
                rid: e4i.id
            }, r4v.id)
        });
        top.player.addTo(i4m, qI0x, eW6Q);
        kz9q.Ko6i({
            rid: e4i.id,
            type: e4i.type,
            hash: l4p.Gx5C(),
            play: eW6Q,
            source: e4i.from,
            sourceid: e4i.data
        })
    }

    function bVR0x(d4h) {
        var i4m = np0x.gN7G(d4h.key);
        RW8O(i4m, d4h.ext)
    }

    function bVN0x(d4h) {
        var i4m = [np0x.eh6b(d4h.id)],
            bf5k = i4m[0],
            oZ0x = l4p.oB0x(bf5k),
            rZ1x = bf5k.privilege || {};
        if (oZ0x == 10) {
            l4p.sv1x(rZ1x.fee || bf5k.fee, bf5k.id, "song", null, rZ1x)
        } else if (oZ0x == 100) {
            l4p.hR8J(null, null, null, true, bf5k)
        } else if (oZ0x == 11) {
            l4p.bJN8F(bf5k.id, 18)
        } else {
            RW8O(i4m, d4h.ext)
        }
    }

    function bVI0x(d4h) {
        var i4m = bED7w(BF4J.gN7G(d4h.key));
        RW8O(i4m, d4h.ext)
    }

    function bVH0x(d4h) {
        var i4m = bED7w([BF4J.eh6b(d4h.id)]);
        RW8O(i4m, d4h.ext)
    }

    function eo6i() {
        top.player.tipPlay("鏃犳硶鎾斁锛岄煶涔愬凡涓嬬嚎")
    }

    function bVB0x(f4j) {
        var t4x = a3x.u4y(f4j, "resType"),
            C4G = a3x.u4y(f4j, "resId"),
            J4N = t4x + "-" + C4G;
        if (bEG7z[J4N])
            return;
        var bEB7u = a3x.x4B("play-count"),
            bio2x = a3x.I4M(f4j.parentNode, "nb"),
            QI7B = null;
        if (bEB7u) {
            QI7B = bEB7u
        } else {
            QI7B = !!bio2x && !!bio2x[0] ? bio2x[0] : null
        }
        if (QI7B) {
            var ct5y = QI7B.innerHTML;
            if (/^\d+$/.test(ct5y)) {
                QI7B.innerText = +ct5y + 1
            }
            bEG7z[J4N] = true
        }
    }

    l4p.bVw0x = function (f4j) {
        h4l.q4u(f4j || document.body, "click", ur2x.g4k(this))
    };
    l4p.bVv0x = function (W4a, t4x, C4G) {
        bEE7x({
            action: W4a,
            type: t4x,
            id: C4G
        })
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        p4t = c4g("nm.d"),
        b4f,
        K4O;
    p4t.eQ6K({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function (m4q, e4i) {
                this.bVq0x(m4q, e4i)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function (m4q, e4i) {
                this.z4D("onshareall", e4i.result)
            },
            onerror: function (m4q, e4i) {
                this.z4D("onshareall", e4i.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function (m4q, e4i) {
                e4i.options.picUrl = m4q.picUrl;
                this.bEy7r(e4i.options, e4i.result)
            },
            onerror: function (m4q, e4i) {
                this.z4D("onshareall", e4i.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function (Q4U, e4i) {
                this.oE0x("vid_info-" + e4i.data.nosKey, Q4U);
                return Q4U
            }
        }
    });
    p4t.biv2x = NEJ.C();
    b4f = p4t.biv2x.O4S(p4t.gZ7S);
    b4f.bVk0x = function () {
        var sB1x = function (Q4U, e4i) {
            e4i.times++;
            if (e4i.times > 10) {
                this.z4D("onvinfoerror", e4i.key, Q4U)
            } else {
                setTimeout(eH6B.g4k(this, e4i), e4i.times * 1e3)
            }
        };
        var wa2x = function (Q4U, e4i) {
            this.z4D("onvinfo", e4i.key, Q4U)
        };
        var eH6B = function (e4i) {
            var V4Z = e4i.url;
            v4z.bp5u(V4Z + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: wa2x.dW6Q(this, e4i),
                onerror: sB1x.dW6Q(this, e4i)
            })
        };
        return function (e4i) {
            e4i.times = 0;
            eH6B.call(this, e4i)
        }
    }
    ();
    b4f.cvg6a = function () {
        var Qx7q;
        var sB1x = function (Q4U, e4i) {
            if (Q4U.code > 0) {
                clearInterval(this.Bz4D);
                this.z4D("onviderror", e4i.data.nosKey)
            }
        };
        var wa2x = function (J4N, Q4U) {
            if (Q4U.vid && Q4U.covers) {
                clearInterval(this.Bz4D);
                this.z4D("onvid", J4N, Q4U)
            }
        };
        var eH6B = function (e4i) {
            if (+(new Date) - Qx7q > 60 * 60 * 1e3) {
                clearInterval(this.Bz4D);
                this.z4D("onviderror", e4i.data.nosKey);
                return
            }
            e4i.onload = wa2x.g4k(this, e4i.data.nosKey);
            e4i.onerror = sB1x.g4k(this);
            this.ck5p("vid-get", e4i)
        };
        return function (e4i) {
            if (!e4i || !e4i.data)
                return;
            Qx7q = +(new Date);
            this.Bz4D = clearInterval(this.Bz4D);
            this.Bz4D = setInterval(eH6B.g4k(this, e4i), 1e4);
            eH6B.apply(this, arguments)
        }
    }
    ();
    b4f.bVh0x = function () {
        this.Bz4D = clearInterval(this.Bz4D)
    };
    b4f.bVq0x = function (m4q, na9R) {
        if (m4q.event && na9R.snsTypes) {
            if (na9R.pics) {
                var bEv7o = [];
                for (var i = 0, len = na9R.pics.length; i < len; i++) {
                    bEv7o[i] = na9R.pics[i].originId
                }
                this.ck5p("share_img_compound", {
                    data: {
                        picIds: bEv7o.join(",")
                    },
                    options: na9R,
                    result: m4q
                })
            } else {
                na9R.picUrl = na9R.picUrl;
                this.bEy7r(na9R, m4q)
            }
        } else {
            this.z4D("onshareall", m4q)
        }
        var xE3x = p4t.hK8C.B4F();
        xE3x.gg7Z(na9R.isPub ? "pubevent" : "shareevent", {
            id: m4q.id
        })
    };
    b4f.bEy7r = function (na9R, m4q) {
        var cm5r = {};
        cm5r.eventid = m4q.event.id;
        cm5r.eventtype = m4q.event.type;
        na9R.picUrl && (cm5r.picUrl = na9R.picUrl);
        cm5r.snsTypes = na9R.snsTypes;
        cm5r.msg = na9R.data.msg || "";
        cm5r.type = na9R.data.type;
        na9R.data.id && (cm5r.id = na9R.data.id);
        this.ck5p("share-sns", {
            data: cm5r,
            result: m4q
        })
    };
    b4f.bVf0x = function (e4i) {
        var j4n = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k4o.mP9G(5)
        };
        j4n = NEJ.EX(j4n, e4i);
        if (!(j4n.id > 0)) {
            delete j4n.id;
            j4n.type = "noresource"
        }
        if (!j4n.threadId) {
            delete j4n.threadId
        }
        if (!j4n.actId) {
            delete j4n.actId
        }
        if (!j4n.pics) {
            delete j4n.pics
        } else {
            j4n.pics = JSON.stringify(j4n.pics)
        }
        this.ck5p("share-all", {
            data: j4n,
            snsTypes: e4i.snsTypes,
            picUrl: e4i.picUrl,
            pics: e4i.pics,
            isPub: e4i.isPub
        })
    };
    b4f.bVc0x = function (e4i) {
        this.ck5p("share-private", e4i)
    };
    b4f.bVa0x = function (e4i) {
        this.ck5p("share-all", e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f,
        K4O;
    var bUX0x = {
        40: !0
    };
    p4t.eQ6K({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function (e4i) {
                e4i.data.getcounts = true;
                e4i.data.pagesize = e4i.data.limit;
                if (e4i.data.offset == 0) {
                    e4i.data.lasttime = -1
                }
                delete e4i.data.offset
            },
            format: function (Q4U, e4i) {
                Q4U.event = l4p.Tx8p(Q4U.event, function (r4v, s4w) {
                    return !bUX0x[r4v.type]
                });
                this.bUT0x(Q4U.event);
                e4i.data.lasttime = Q4U.lasttime;
                if (Q4U.event.length) {
                    Q4U.event.length = e4i.limit
                }
                return {
                    list: Q4U.event,
                    total: Q4U.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function (Q4U, e4i) {
                return {
                    list: Q4U.events,
                    total: Q4U.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function (e4i) {
                e4i.data.pagesize = 20
            },
            format: function (Q4U, e4i) {
                return Q4U.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function (e4i) {
                e4i.data.time = -1;
                e4i.data.getcounts = true
            },
            format: function (Q4U, e4i) {
                Q4U.events.length = e4i.limit;
                return {
                    list: Q4U.events,
                    total: Q4U.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function (m4q, e4i) {
                m4q.conf = e4i.conf;
                return m4q
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function (e4i, bc5h) {
                if (e4i.like) {
                    if (e4i.comment) {
                        bc5h.url = "/api/v1/comment/like"
                    } else {
                        bc5h.url = "/api/resource/like"
                    }
                    bc5h.onload = "oneventlike";
                    bc5h.onerror = "oneventlikeerr"
                } else {
                    if (e4i.comment) {
                        bc5h.url = "/api/v1/comment/unlike"
                    } else {
                        bc5h.url = "/api/resource/unlike"
                    }
                    bc5h.onload = "oneventunlike";
                    bc5h.onerror = "oneventunlikeerr"
                }
            },
            format: function (m4q, e4i) {
                m4q.eid = e4i.eid;
                m4q.origin = e4i.origin;
                m4q.ext = e4i.ext;
                return m4q
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function (m4q, e4i) {
                m4q.id = e4i.data.id;
                return m4q
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function (e4i, bc5h) {
                if (e4i.data.type == "nointer") {
                    bc5h.url = "/api/event/rcmd/reject"
                } else if (e4i.data.transcoding) {
                    bc5h.url = "/api/event/video/transcoding/delete"
                } else {
                    bc5h.url = "/api/event/delete"
                }
            },
            format: function (m4q, e4i) {
                m4q.id = e4i.data.id;
                return m4q
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function (m4q, e4i) {
                m4q.id = e4i.data.id;
                return m4q
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function (e4i) {
                e4i.data.lasttime = e4i.data.lasttime || -1;
                e4i.data.pagesize = e4i.data.limit;
                e4i.data.getcounts = true;
                delete e4i.data.offset
            },
            format: function (Q4U, e4i) {
                e4i.data.lasttime = Q4U.lasttime;
                var i4m = Q4U.events;
                if (Q4U.more)
                    i4m = this.bUS0x(i4m, e4i.data.pagesize);
                return {
                    list: i4m,
                    total: Q4U.size
                }
            },
            onerror: "onlisterror"
        }
    });
    p4t.yn3x = NEJ.C();
    b4f = p4t.yn3x.O4S(p4t.gZ7S);
    b4f.cl5q = function () {
        this.cs5x()
    };
    b4f.biZ2x = function (t4x, cG6A) {
        return t4x + "-" + cG6A
    };
    b4f.cvk6e = function (e4i) {
        this.ck5p("ievent-get", e4i)
    };
    b4f.cvl6f = function (e4i) {
        this.ck5p("ievent-new-get", e4i)
    };
    b4f.cvm6g = function (e4i) {
        this.ck5p("ievent-user-get", e4i)
    };
    b4f.cvn6h = function (t4x, cG6A) {
        return this.qk0x(this.biZ2x(t4x, cG6A))
    };
    b4f.cvo6i = function (Jc6W, e4i) {
        if (!Jc6W || !Jc6W.length)
            return;
        e4i = e4i || {};
        var bv5A = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, DL4P = [], bEj7c = [], j4n; i < Jc6W.length; ++i) {
            j4n = Jc6W[i];
            j4n = this.qk0x(this.biZ2x(j4n.type, j4n.id));
            if (!j4n) {
                DL4P.push(Jc6W[i].id);
                bEj7c.push(bv5A[Jc6W[i].type] || 0)
            }
        }
        if (!DL4P.length) {
            this.z4D("oneventresload", e4i.conf);
            return
        }
        e4i.data = {
            ids: JSON.stringify(DL4P),
            types: JSON.stringify(bEj7c)
        };
        e4i.onload = this.bUE0x.g4k(this);
        this.ck5p("ievent-res-get", e4i)
    };
    b4f.bUE0x = function (m4q) {
        if (m4q.code != 200) {
            this.z4D("oneventreserror", m4q.code);
            return
        }
        var bv5A = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i4m = m4q.results; i < i4m.length; ++i) {
            this.oE0x(this.biZ2x(bv5A[i4m[i].type], i4m[i].id), i4m[i])
        }
        this.z4D("oneventresload", m4q.conf)
    };
    b4f.bEi7b = function (j4n) {
        var J4N = "event-list";
        this.bbR1x(J4N, j4n);
        this.z4D("onitemadd", {
            key: J4N,
            action: "add",
            data: j4n,
            flag: -1
        })
    };
    b4f.uw2x = function (e4i) {
        this.ck5p("ievent-like", e4i)
    };
    b4f.lR9I = function (e4i) {
        this.ck5p("ievent-delete", e4i)
    };
    b4f.bUS0x = function (i4m, fY7R) {
        for (var i = i4m.length; i < fY7R; i++)
            i4m.push(null);
        return i4m
    };
    b4f.bUT0x = function (i4m) {
        var m4q = [];
        if (!i4m || !i4m.length)
            return;
        k4o.be5j(i4m, function (d4h) {
            d4h.biData = this.bEh7a(d4h)
        }, this)
    };
    b4f.bEh7a = function () {
        var bnx3x = {
                32: "comment",
                33: "activity",
                34: "recomment_artist"
            },
            bUy0x = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d4h) {
            var Q4U = {
                id: d4h.id,
                sourceid: d4h.user.userId,
                alg: d4h.rcmdInfo ? d4h.rcmdInfo.alg : null,
                contentType: bnx3x[d4h.type] || (k4o.cV6P(bUy0x, d4h.type) != -1 ? "user_event" : "other")
            };
            return Q4U
        }
    }
    ();
    b4f.Bs4w = function (bUx0x, d4h) {
        var Q4U = this.bEh7a(d4h);
        Q4U.actionType = bUx0x;
        if (window.log)
            log("eventclick", Q4U)
    };
    b4f.cvr6l = function (e4i) {
        this.ck5p("event_latest-list", e4i)
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        bI5N = c4g("nej.ui"),
        l4p = c4g("nm.x"),
        L4P = c4g("nm.w"),
        b4f,
        K4O;
    L4P.Sy8q = NEJ.C();
    b4f = L4P.Sy8q.O4S(bI5N.et6n);
    K4O = L4P.Sy8q.cg5l;
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        var gK7D = e4i.box || Y4c;
        a3x.fz7s(this.o4s, {
            position: "absolute",
            width: gK7D.width + "px",
            height: gK7D.height + "px",
            top: gK7D.top + "px",
            left: gK7D.left + "px"
        });
        window.uploader = this
    };
    b4f.bD5I = function () {
        this.bH5M()
    };
    b4f.lp9g = function (d4h) {
        this.z4D("onselect", d4h);
        console.log("select", d4h)
    };
    b4f.rY1x = function (d4h) {
        this.z4D("onprogress", d4h);
        console.log("progress", d4h)
    };
    b4f.sn1x = function (d4h) {
        if (d4h.code == 200) {
            this.z4D("oncomplete", d4h)
        } else {
            this.eo6i(d4h)
        }
        console.log("complete", d4h)
    };
    b4f.eo6i = function (d4h) {
        this.z4D("onerror", d4h);
        console.log("error", d4h)
    };
    b4f.ga7T = bm5r;
    b4f.bUu0x = bm5r
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        bI5N = c4g("nej.ui"),
        l4p = c4g("nm.x"),
        L4P = c4g("nm.w"),
        ge7X = c4g("cb"),
        b4f,
        K4O;
    L4P.bjE3x = NEJ.C();
    b4f = L4P.bjE3x.O4S(L4P.Sy8q);
    K4O = L4P.bjE3x.cg5l;
    b4f.cl5q = function () {
        this.cs5x()
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        var J4N = k4o.mP9G(8),
            jf8X = "onselect" + J4N,
            jo8g = "onprogress" + J4N,
            bEd7W = "oncomplete" + J4N,
            bQ5V = "onerror" + J4N;
        ge7X[jf8X] = this.lp9g.g4k(this);
        ge7X[jo8g] = this.rY1x.g4k(this);
        ge7X[bEd7W] = this.sn1x.g4k(this);
        ge7X[bQ5V] = this.eo6i.g4k(this);
        var bUk0x = "/style/swf/MusicUpload.swf?v=20150202",
            bv5A = {
                music: "闊抽(*.mp3,*.m4a,*.x-m4a)",
                image: "*.jpg;*.jpeg;*.png;*.gif;"
            },
            ls9j = {
                url: e4i.api,
                token: e4i.token,
                filter: bv5A[e4i.accept] || e4i.accept || e4i.flashAccept || "",
                multiple: e4i.multiple,
                error: "cb." + bQ5V,
                select: "cb." + jf8X,
                progress: "cb." + jo8g,
                complete: "cb." + bEd7W
            };
        this.oK0x = a3x.qd0x({
            src: bUk0x,
            hidden: false,
            parent: this.o4s,
            onready: this.Qk7d.g4k(this),
            width: e4i.box.width,
            height: e4i.box.height,
            params: {
                flashvars: k4o.uS2x(ls9j, "&", false),
                allowscriptaccess: "always",
                wmode: "transparent"
            }
        })
    };
    b4f.bD5I = function () {
        this.bH5M();
        this.o4s.innerHTML = ""
    };
    b4f.Qk7d = function (hb7U) {
        this.oK0x = hb7U
    };
    b4f.ga7T = function (il8d) {
        this.oK0x.upload(il8d)
    };
    b4f.bUu0x = function () {
        this.oK0x.cancle()
    };
    b4f.qa0x = function (Bm4q) {
        this.oK0x.disable(Bm4q)
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        dO6I = c4g("nej.g"),
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        bI5N = c4g("nej.ui"),
        l4p = c4g("nm.x"),
        L4P = c4g("nm.w"),
        b4f,
        K4O;
    var hP8H = a3x.rO1x(".#<uispace>{position:absolute;z-index:100;overflow:hidden;cursor:pointer;}.#<uispace> .hfile{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;opacity:0;filter:Alpha(opacity=0);font-size:12px;font-size:16px;*font-size:15px;}");
    var gc7V = a3x.hM8E('<div class="' + hP8H + '"><form><input multiple="multiple" type="file" name="uploadfile" class="hfile" size="70"></form></div>');
    L4P.bjT3x = NEJ.C();
    b4f = L4P.bjT3x.O4S(L4P.Sy8q);
    K4O = L4P.bjT3x.cg5l;
    b4f.bZ5e = function () {
        this.lb9S = hP8H;
        this.ca5f = gc7V
    };
    b4f.bR5W = function () {
        this.cc5h();
        var bn5s = a3x.cQ6K(this.o4s);
        this.bw5B = bn5s[0];
        h4l.q4u(this.bw5B.uploadfile, "change", this.qg0x.g4k(this))
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.bUb0x = e4i.api || "";
        this.SC8u = e4i.multiple;
        this.bw5B.multiple = this.SC8u ? "coverImgUrl" : "";
        this.bw5B.reset();
        this.SF8x = [];
        this.SH8z = {};
        var bv5A = {
            music: "audio/mp3,audio/x-m4a,audio/m4a",
            image: "image/*"
        };
        if (e4i.accept || e4i.htmlAccept) {
            this.bw5B.uploadfile.accept = bv5A[e4i.accept] || e4i.accept || e4i.htmlAccept
        }
        if (e4i.tipTitle) {
            this.bw5B.uploadfile.title = e4i.tipTitle
        }
    };
    b4f.bD5I = function () {
        this.bH5M();
        this.bkf3x();
        this.bw5B.reset();
        delete this.SF8x;
        delete this.SH8z;
        this.bw5B.uploadfile.accept = "*"
    };
    b4f.qg0x = function (d4h) {
        var bDR6L = this.bw5B.uploadfile.files,
            bDO6I = [];
        if (!this.SC8u) {
            this.SF8x = [];
            this.SH8z = {}
        }
        for (var i = 0, ii = bDR6L.length; i < ii; i++) {
            var SI8A = this.bTR0x(bDR6L[i]);
            this.SF8x.push(SI8A);
            this.SH8z[SI8A.uuid] = SI8A;
            bDO6I.push(SI8A);
            if (!this.SC8u)
                break
        }
        this.lp9g(bDO6I);
        this.bw5B.reset()
    };
    b4f.bkf3x = function () {
        if (this.bDK6E) {
            this.bDJ6D = true;
            v4z.jj8b(this.Fa5f);
            this.bDJ6D = false;
            delete this.bDK6E;
            delete this.Fa5f
        }
    };
    b4f.bTR0x = function (dz6t) {
        return {
            uuid: "file-" + +(new Date) + k4o.mP9G(5),
            name: dz6t.name,
            size: dz6t.size,
            refernce: dz6t
        }
    };
    b4f.ga7T = function (il8d) {
        this.bkf3x();
        var dz6t = this.SC8u ? this.SH8z[il8d] : this.SF8x[0],
            j4n = new FormData,
            ny0x = {};
        if (dz6t) {
            ny0x[dO6I.xj2x] = dO6I.DB4F;
            j4n.append("fileupload", dz6t.refernce);
            this.bDK6E = dz6t;
            this.Fa5f = v4z.bp5u(this.bUb0x, {
                type: "json",
                method: "post",
                headers: ny0x,
                data: j4n,
                timeout: 0,
                onload: this.yL3x.g4k(this, il8d),
                onerror: this.yL3x.g4k(this, il8d),
                onuploading: this.bTI0x.g4k(this, il8d)
            })
        }
    };
    b4f.yL3x = function (il8d, d4h) {
        d4h.uuid = il8d;
        if (d4h.code == 200) {
            this.sn1x(d4h)
        } else {
            if (!this.bDJ6D) {
                this.eo6i(d4h)
            }
        }
    };
    b4f.bTI0x = function (il8d, d4h) {
        d4h.uuid = il8d;
        this.rY1x(d4h)
    };
    b4f.bTG0x = function () {
        this.bkf3x()
    };
    b4f.qa0x = function (Bm4q) {
        if (Bm4q) {
            this.bq5v()
        } else {
            this.N4R()
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        L4P = c4g("nm.w"),
        bTC0x = typeof FormData != "undefined";
    L4P.Bj4n = NEJ.C();
    L4P.Bj4n.O4S(bTC0x ? L4P.bjT3x : L4P.bjE3x)
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        dO6I = c4g("nej.g"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        fh6b = c4g("nej.n"),
        H4L = c4g("nej.ut"),
        bd5i = c4g("nej.ui"),
        D4H = c4g("nm.w"),
        n4r = c4g("nm.l"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        L4P = c4g("nm.x.f"),
        b4f,
        K4O,
        bky3x = {
            0: "",
            "-1": "涓嶈兘娣诲姞閲嶅鍥剧墖",
            "-10": "鏈€澶氬彧鑳芥坊鍔�9寮 ",
            "-3": "璇烽€夋嫨涓嶈秴杩�5M鐨勫浘鐗�"
        },
        bkz3x = 5 * 1024 * 1024,
        cvs6m = 80,
        bTz0x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    D4H.bDG6A = NEJ.C();
    b4f = D4H.bDG6A.O4S(H4L.wh2x);
    b4f.bqM4Q = function () {
        return {
            x: this.zq3x.clientWidth - this.o4s.offsetWidth,
            y: this.zq3x.clientHeight - this.o4s.offsetHeight
        }
    };
    D4H.bkE3x = NEJ.C();
    b4f = D4H.bkE3x.O4S(bd5i.et6n);
    b4f.bZ5e = function () {
        this.ca5f = "m-xwgt-share-upload"
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a3x.I4M(this.o4s, "j-flag");
        this.SO8G = i4m.shift();
        this.Bi4m = i4m.shift();
        this.PW7P = i4m.shift();
        this.bTx0x = {
            onselect: this.bDD6x.dW6Q(this, 0),
            onerror: this.eo6i.g4k(this),
            oncomplete: this.sn1x.g4k(this),
            multiple: true,
            parent: this.Bi4m,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "鍥剧墖(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {
                width: 60,
                height: 60,
                top: 0,
                left: 0
            },
            tipTitle: "涓婁紶鍥剧墖"
        };
        this.bDC6w = {
            onselect: this.bDD6x.dW6Q(this, 1),
            onerror: this.eo6i.g4k(this),
            oncomplete: this.sn1x.g4k(this),
            multiple: true,
            parent: this.Bi4m,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "鍥剧墖(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {
                width: 20,
                height: 20,
                top: 0,
                left: 0
            },
            tipTitle: "涓婁紶鍥剧墖"
        };
        this.bTo0x = D4H.Bj4n.B4F(this.bTx0x)
    };
    b4f.bD5I = function () {
        h4l.iB8t(this.rI1x, "click");
        if (!!this.fm6g) {
            for (var i = this.fm6g.length - 1; i >= 0; i--) {
                a3x.cF6z(this.fm6g[i].element, false);
                if (this.fm6g[i].dragger)
                    this.fm6g[i].dragger.S4W()
            }
        }
        this.fm6g = [];
        this.SR8J = {};
        if (this.yV3x) {
            clearTimeout(this.yV3x)
        }
        this.yV3x = 0;
        this.FA5F && this.FA5F.S4W();
        delete this.FA5F;
        this.bH5M()
    };
    b4f.bDD6x = function (i4m, s4w) {
        if (!i4m)
            return;
        for (var i = 0, len = i4m.length; i < len; i++) {
            if (!bTz0x.test(i4m[i].name)) {
                this.bld3x({
                    path: i4m[i].name,
                    index: s4w,
                    uuid: i4m[i].uuid,
                    status: -4,
                    fail: "杩欎笉鏄�<br>鍥剧墖"
                })
            } else if (i4m[i].size > bkz3x) {
                this.ble3x(-3);
                this.bld3x({
                    path: i4m[i].name,
                    index: s4w,
                    uuid: i4m[i].uuid,
                    status: -3,
                    fail: "涓婁紶<br>澶辫触"
                })
            } else {
                this.bld3x({
                    path: i4m[i].name,
                    index: s4w,
                    uuid: i4m[i].uuid,
                    status: 0
                })
            }
        }
    };
    b4f.eo6i = function (d4h) {
        var dz6t = this.SR8J[d4h.uuid];
        dz6t.status = -4;
        dz6t.fail = "涓婁紶<br>澶辫触";
        this.bDA6u(dz6t);
        this.yX3x()
    };
    b4f.sn1x = function (d4h) {
        var dz6t = this.SR8J[d4h.uuid];
        dz6t.status = 2;
        var bt5y = NEJ.X({}, d4h.picInfo);
        bt5y.originId = bt5y.originIdStr;
        bt5y.squareId = bt5y.squareIdStr;
        bt5y.rectangleId = bt5y.rectangleIdStr;
        bt5y.pcSquareId = bt5y.pcSquareIdStr;
        bt5y.pcRectangleId = bt5y.pcRectangleIdStr;
        bt5y.originJpgId = bt5y.originJpgIdStr || bt5y.originJpgId;
        dz6t.picInfo = bt5y;
        dz6t.picUrl = d4h.picInfo.pcSquareUrl;
        this.bDA6u(dz6t);
        this.yX3x()
    };
    b4f.bld3x = function (dz6t) {
        if (this.fm6g.length >= 9) {
            this.ble3x(-10, 3e3, this.bDz6t.g4k(this));
            return
        }
        this.bTd9U(dz6t);
        this.fm6g.push(dz6t);
        this.SR8J[dz6t.uuid] = dz6t;
        if (!!this.fm6g.length) {
            this.o4s.style.display = ""
        }
        if (this.fm6g.length >= 9) {
            this.Bi4m.style.display = "none"
        } else {
            this.Bi4m.style.display = ""
        }
        this.yX3x()
    };
    b4f.yX3x = function () {
        var blj3x = -1,
            bDw6q = 0;
        for (var i = 0, l = this.fm6g.length; i < l; i++) {
            if (this.fm6g[i].status == 1) {
                return
            }
            if (this.fm6g[i].status == 0 && blj3x < 0) {
                blj3x = i
            }
            if (this.fm6g[i].status == 2 || this.fm6g[i].status < 0) {
                bDw6q++
            }
        }
        var r4v = this.fm6g[blj3x];
        if (r4v) {
            (r4v.index == 0 ? this.bTo0x : this.FA5F).ga7T(r4v.uuid);
            r4v.status = 1;
            this.z4D("onstartupload", {})
        } else if (bDw6q == this.fm6g.length) {
            this.z4D("onfinishupload", {})
        }
    };
    b4f.ble3x = function (s4w, jS9J, ge7X) {
        if (this.PR7K < s4w) {
            return
        }
        if (this.yV3x) {
            clearTimeout(this.yV3x);
            this.yV3x = 0
        }
        if (jS9J) {
            this.PW7P.innerText = bky3x[s4w * 1];
            this.PR7K = s4w;
            this.yV3x = setTimeout(this.SU8M.g4k(this, s4w, ge7X), jS9J)
        } else {
            this.PW7P.innerText = bky3x[s4w];
            this.PR7K = s4w
        }
        this.PW7P.style.display = ""
    };
    b4f.SU8M = function (s4w, ge7X) {
        if (s4w && this.PR7K !== s4w) {
            return
        }
        this.PR7K = 0;
        this.PW7P.innerText = bky3x[0];
        this.PW7P.style.display = "none";
        ge7X && ge7X()
    };
    b4f.bTd9U = function (dz6t) {
        var j4n = {};
        if (dz6t.fail) {
            j4n.fail = dz6t.fail
        }
        var ds6m = a3x.bP5U("m-xwgt-share-upload-preview", j4n);
        dz6t.element = a3x.mT9K(ds6m);
        h4l.q4u(a3x.I4M(dz6t.element, "del")[0], "mousedown", this.bTa9R.g4k(this, dz6t), false);
        this.SO8G.insertBefore(dz6t.element, this.SO8G.lastElementChild);
        dz6t.dragger = D4H.bDG6A.B4F({
            view: this.SO8G.parentNode,
            body: dz6t.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.OI7B.g4k(this, dz6t),
            onchange: this.bSX9O.g4k(this, dz6t),
            ondragend: this.bqh4l.g4k(this, dz6t)
        })
    };
    b4f.bDA6u = function (dz6t) {
        if (!dz6t || !dz6t.element) {
            return false
        }
        var j4n = {};
        if (dz6t.fail) {
            j4n.fail = dz6t.fail
        } else {
            j4n.url = dz6t.picUrl
        }
        a3x.y4C(dz6t.element, "z-fail");
        dz6t.element.firstChild.outerHTML = a3x.bP5U("m-xwgt-share-upload-preview-img", j4n)
    };
    b4f.OI7B = function (r4v, jA9r) {
        a3x.y4C(r4v.element, "z-sel")
    };
    b4f.bSX9O = function (r4v, jA9r) {
        var cvt6n,
            gz7s = this.fm6g.length - 1,
            oy0x;
        for (var i = gz7s; i >= 0; i--) {
            a3x.w4A(this.fm6g[i].element, "z-jump");
            if (this.fm6g[i] == r4v) {
                oy0x = i
            } else {
                a3x.fz7s(this.fm6g[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var PL7E = {
            x: 46 + 92 * (oy0x % 5) + jA9r.left,
            y: 46 + 92 * (oy0x / 5 >> 0) + jA9r.top
        };
        var blz3x = PL7E.x / 92 >> 0,
            blC3x = PL7E.y / 92 >> 0,
            wG2x = Math.max(0, Math.min(gz7s, blC3x * 5 + blz3x));
        if (wG2x == oy0x) {
            return
        }
        var bSJ9A = wG2x < oy0x;
        for (var i = Math.min(wG2x, oy0x); i <= Math.max(wG2x, oy0x); i++) {
            if (i !== oy0x) {
                var bDn6h = i % 5;
                if (bSJ9A) {
                    if (bDn6h == 4) {
                        a3x.fz7s(this.fm6g[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a3x.fz7s(this.fm6g[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bDn6h == 0) {
                        a3x.fz7s(this.fm6g[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a3x.fz7s(this.fm6g[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b4f.bqh4l = function (r4v, jA9r) {
        var cvv6p,
            gz7s = this.fm6g.length - 1,
            oy0x;
        for (var i = gz7s; i >= 0; i--) {
            a3x.fz7s(this.fm6g[i].element, {
                left: "",
                top: ""
            });
            if (this.fm6g[i] == r4v) {
                oy0x = i
            }
        }
        a3x.w4A(r4v.element, "z-sel");
        var PL7E = {
            x: 46 + 92 * (oy0x % 5) + jA9r.left,
            y: 46 + 92 * (oy0x / 5 >> 0) + jA9r.top
        };
        var blz3x = PL7E.x / 92 >> 0,
            blC3x = PL7E.y / 92 >> 0,
            wG2x = Math.max(0, Math.min(gz7s, blC3x * 5 + blz3x));
        if (wG2x == oy0x) {
            return
        }
        this.SO8G.insertBefore(r4v.element, (this.fm6g[wG2x + (wG2x > oy0x ? 1 : 0)] || {}).element || this.Bi4m);
        this.fm6g.splice(oy0x, 1);
        this.fm6g.splice(wG2x, 0, r4v)
    };
    b4f.bTa9R = function (r4v, d4h) {
        a3x.cF6z(r4v.element, false);
        if (r4v.dragger)
            r4v.dragger.S4W();
        delete r4v.dragger;
        var s4w = -1;
        for (var i = this.fm6g.length - 1; i >= 0; i--) {
            if (this.fm6g[i] == r4v) {
                s4w = i;
                break
            }
        }
        this.fm6g.splice(s4w, s4w >= 0 ? 1 : 0);
        delete r4v;
        if (this.fm6g.length >= 9) {
            this.Bi4m.style.display = "none"
        } else {
            this.Bi4m.style.display = ""
        }
        if (!this.fm6g.length) {
            this.o4s.style.display = "none";
            this.SU8M(0)
        } else {
            this.bDz6t()
        }
        this.yX3x()
    };
    b4f.bDz6t = function () {
        var bDm6g = false;
        for (var i = 0, len = this.fm6g.length; i < len; i++) {
            if (this.fm6g[i].status == -3) {
                bDm6g = true
            }
        }
        if (bDm6g) {
            this.ble3x(-3)
        } else {
            this.SU8M(-3)
        }
    };
    b4f.PH7A = function () {
        var eb6V = [];
        for (var i = this.fm6g.length - 1; i >= 0; i--) {
            if (this.fm6g[i].status == 2) {
                eb6V.unshift(this.fm6g[i].picInfo)
            }
        }
        return eb6V
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.bDC6w.parent = e4i.button;
        this.FA5F && this.FA5F.S4W();
        this.FA5F = D4H.Bj4n.B4F(this.bDC6w);
        this.o4s.style.display = "none";
        if (!!this.fm6g) {
            for (var i = this.fm6g.length - 1; i >= 0; i--) {
                a3x.cF6z(this.fm6g[i].element, false);
                if (this.fm6g[i].dragger)
                    this.fm6g[i].dragger.S4W()
            }
        }
        this.fm6g = [];
        this.SR8J = {};
        if (this.yV3x) {
            clearTimeout(this.yV3x)
        }
        this.SU8M(0);
        this.PR7K = 0
    };
    H4L.ft7m.B4F({
        element: D4H.bkE3x,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        eU6O = NEJ.R,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        bd5i = c4g("nej.ui"),
        M4Q = c4g("nej.ut"),
        b4f,
        K4O;
    if (!!M4Q.mI9z)
        return;
    M4Q.mI9z = NEJ.C();
    b4f = M4Q.mI9z.O4S(M4Q.RZ8R);
    K4O = M4Q.mI9z.cg5l;
    b4f.bk5p = function (e4i) {
        this.bSD9u(e4i.more);
        this.Td8V = a3x.x4B(e4i.sbody);
        this.bU5Z([[this.Td8V, "scroll", this.bSC9t.g4k(this)]]);
        var dh6b = e4i.delta;
        if (dh6b == null)
            dh6b = 30;
        this.PC7v = Math.max(0, dh6b);
        var ct5y = parseInt(e4i.count) || 0;
        this.iH8z = Math.max(0, ct5y);
        var fq7j = parseInt(e4i.number) || 0;
        if (fq7j > 1 && fq7j <= ct5y) {
            this.yu3x = fq7j
        }
        this.bl5q(e4i)
    };
    b4f.bD5I = function () {
        this.bH5M();
        delete this.zm3x;
        delete this.Td8V;
        delete this.rk0x;
        delete this.Tf8X
    };
    b4f.zC3x = function (bj5o, bo5t) {
        var bE5J = this.vA2x + (this.iH8z - 1) * this.qB0x,
            fY7R = this.iH8z * this.qB0x;
        return K4O.zC3x.call(this, bE5J, bj5o, fY7R, bo5t)
    };
    b4f.bSD9u = function (Tn8f) {
        this.zm3x = a3x.x4B(Tn8f);
        this.bU5Z([[this.zm3x, "click", this.nq0x.g4k(this)]])
    };
    b4f.bmj3x = function (E4I) {
        E4I = E4I || {};
        if (this.rk0x || !E4I)
            return;
        if (!E4I.scrollHeight)
            E4I = a3x.oq0x();
        var bj5o = a3x.hL8D(this.ia8S),
            dh6b = bj5o.y + this.ia8S.offsetHeight - E4I.scrollTop - E4I.clientHeight,
            bmq3x = E4I.scrollHeight <= E4I.clientHeight;
        if (dh6b <= this.PC7v || bmq3x && !this.rk0x) {
            this.nq0x()
        }
    };
    b4f.bSC9t = function (d4h) {
        if (this.rk0x)
            return;
        this.bmj3x(h4l.U4Y(d4h))
    };
    b4f.zL3x = function (d4h) {
        K4O.zL3x.apply(this, arguments);
        if (!d4h.stopped) {
            this.QO7H();
            var bj5o = 0;
            if (d4h.index > 1) {
                bj5o = this.vA2x + ((d4h.index - 1) * this.iH8z - 1) * this.qB0x
            }
            this.hV8N = bj5o;
            this.nq0x()
        }
    };
    b4f.bFg7Z = function (e4i) {
        if (!!this.yu3x) {
            var dh6b = e4i.offset > 0 ? this.qB0x : this.vA2x,
                fY7R = dh6b + this.qB0x * (this.yu3x - 1);
            this.hV8N = e4i.offset + fY7R;
            e4i.data.limit = fY7R;
            e4i.limit = fY7R;
            delete this.yu3x
        }
        return e4i
    };
    b4f.beX1x = function (e4i) {
        delete this.Tf8X;
        K4O.beX1x.apply(this, arguments);
        this.bDk6e()
    };
    b4f.bfa1x = function (d4h) {
        if (d4h.key != this.iv8n.key)
            return;
        switch (d4h.action) {
            case "refresh":
            case "append":
                delete this.Tf8X;
                break
        }
        K4O.bfa1x.apply(this, arguments)
    };
    b4f.Rb7U = function () {
        this.xs3x("onbeforelistload", "鍒楄〃鍔犺浇涓�...");
        a3x.X4b(this.zm3x, "display", "none")
    };
    b4f.bfE2x = function (i4m, bj5o, fY7R) {
        var bo5t = i4m.length,
            bms3x = i4m.loaded ? bj5o + fY7R >= bo5t : bj5o + fY7R > bo5t;
        this.hV8N = Math.min(this.hV8N, bo5t);
        a3x.X4b(this.zm3x, "display", bms3x ? "none" : "");
        if (bms3x)
            this.rk0x = !0;
        if (this.iH8z > 0) {
            var bt5y = this.zC3x(bj5o, i4m.length);
            if (this.bFf7Y(bt5y.index, bt5y.total))
                return !0;
            var dh6b = this.vA2x - this.qB0x,
                fq7j = this.iH8z * this.qB0x;
            this.rk0x = (bj5o + fY7R - dh6b) % fq7j == 0 || bms3x;
            a3x.X4b(this.zm3x, "display", this.rk0x ? "none" : "");
            this.bfl2x(this.rk0x && bt5y.total > 1 ? "" : "none")
        }
    };
    b4f.bfD2x = function () {
        this.hV8N = 0;
        this.rk0x = !0;
        this.xs3x("onemptylist", "娌℃湁鍒楄〃鏁版嵁锛�")
    };
    b4f.Rf7Y = function (ds6m, jA9r) {
        this.ia8S.insertAdjacentHTML(jA9r || "beforeEnd", ds6m)
    };
    b4f.Rm7f = function (gx7q) {
        this.fd6X = this.fd6X || [];
        if (k4o.el6f(gx7q)) {
            eU6O.push.apply(this.fd6X, gx7q)
        } else {
            this.fd6X.push(gx7q)
        }
    };
    b4f.RR8J = function (d4h) {
        a3x.mc9T(this.ci5n);
        this.Rp8h(d4h, "onafteradd");
        var ey6s = d4h.flag;
        if (d4h.stopped || !ey6s)
            return;
        if (this.iH8z > 0) {
            this.bfo2x();
            return
        }
        this.hV8N += 1;
        ey6s == -1 ? this.bgk2x(d4h.data) : this.bFd7W(d4h.data)
    };
    b4f.RQ8I = function (d4h) {
        this.Rp8h(d4h, "onafterdelete");
        if (d4h.stopped)
            return;
        if (this.iH8z > 0) {
            this.bfo2x();
            return
        }
        var C4G = d4h.data[this.eM6G.pkey];
        if (!!this.fd6X) {
            var r4v = a3x.bLI8A(C4G),
                s4w = k4o.cV6P(this.fd6X, r4v);
            if (s4w >= 0) {
                this.fd6X.splice(s4w, 1);
                this.hV8N -= 1
            }
            if (!!r4v)
                r4v.S4W()
        } else {
            var f4j = a3x.x4B(this.bFk7d(C4G));
            if (!!f4j)
                this.hV8N -= 1;
            a3x.cF6z(f4j)
        }
        if (this.hV8N <= 0)
            this.nq0x()
    };
    b4f.bfW2x = function (bj5o, fY7R) {
        if (bj5o != this.hV8N)
            return;
        if (this.ZK0x()) {
            this.rk0x = !1;
            this.bDk6e()
        }
    };
    b4f.bgc2x = function (bj5o, fY7R) {
        if (bj5o != 0)
            return;
        var HZ5e = this.P4T.gN7G(this.iv8n.key);
        for (var i = fY7R - 1; i >= 0; i--) {
            this.bgk2x(HZ5e[i])
        }
    };
    b4f.bDk6e = function () {
        var E4I = this.Td8V;
        if (!E4I || this.rk0x)
            return;
        this.bmj3x(this.Td8V)
    };
    b4f.fS7L = function () {
        delete this.rk0x;
        K4O.fS7L.apply(this, arguments)
    };
    b4f.nq0x = function () {
        if (!!this.Tf8X)
            return;
        this.Tf8X = !0;
        var bj5o = this.hV8N;
        this.hV8N += bj5o == 0 ? this.vA2x : this.qB0x;
        this.bFh7a(bj5o)
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        cL6F = c4g("nej.x"),
        M4Q = c4g("nej.ut"),
        b4f;
    if (!!M4Q.Bc4g)
        return;
    M4Q.Bc4g = NEJ.C();
    b4f = M4Q.Bc4g.O4S(M4Q.cz5E);
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.ic8U = e4i.event || "click";
        this.jO9F = e4i.selected || "js-selected";
        this.mV9M = e4i.disabled || "js-disabled";
        this.bDj6d = !!e4i.inverse;
        this.bSw9n(e4i.list);
        this.Gw5B(e4i.index || 0)
    };
    b4f.bD5I = function () {
        var bSq9h = function (f4j) {
            this.bmM3x(f4j, !1)
        };
        return function () {
            this.bH5M();
            k4o.be5j(this.bV5a, bSq9h, this);
            delete this.bV5a;
            delete this.ic8U;
            delete this.cn5s;
            delete this.mV9M;
            delete this.jO9F;
            delete this.bDj6d
        }
    }
    ();
    b4f.bSw9n = function () {
        var bdq1x = function (r4v) {
            if (!r4v)
                return;
            this.bV5a.push(r4v);
            var s4w = this.bV5a.length - 1,
                dc6W = this.bmN3x[s4w];
            if (!dc6W) {
                dc6W = this.Gw5B.g4k(this, s4w);
                this.bmN3x[s4w] = dc6W
            }
            this.bU5Z([[r4v, this.ic8U, dc6W]])
        };
        return function (i4m) {
            this.bV5a = [];
            if (!this.bmN3x)
                this.bmN3x = [];
            k4o.be5j(i4m, bdq1x, this)
        }
    }
    ();
    b4f.bmM3x = function (E4I, bSn9e) {
        !!bSn9e && !this.bDj6d ? a3x.y4C(E4I, this.jO9F) : a3x.w4A(E4I, this.jO9F)
    };
    b4f.Gw5B = function (s4w, Pi7b, j4n) {
        var E4I = this.bV5a[s4w];
        if (Pi7b != !0 && (s4w == this.cn5s || !E4I || a3x.by5D(E4I, this.mV9M))) {
            h4l.ce5j(arguments[1]);
            return this
        }
        var d4h = {
            index: s4w,
            last: this.cn5s,
            list: this.nQ0x(),
            data: j4n || a3x.u4y(E4I, "value")
        };
        this.cn5s = s4w;
        E4I = this.bV5a[d4h.last];
        if (!!E4I)
            this.bmM3x(E4I, !1);
        E4I = this.bV5a[this.cn5s];
        this.bmM3x(E4I, !0);
        this.z4D("onchange", d4h);
        if (!d4h.nostop)
            h4l.ce5j(arguments[1]);
        return this
    };
    b4f.ru0x = function () {
        return this.cn5s
    };
    b4f.nQ0x = function () {
        return this.bV5a
    };
    a3x.bSm9d = cL6F.bSm9d = function (bA5F, e4i) {
        var C4G = a3x.kp9g(bA5F);
        if (!C4G)
            return null;
        if (!M4Q.ZI0x(C4G, M4Q.Bc4g)) {
            e4i = e4i || {};
            e4i.list = !e4i.clazz ? a3x.cQ6K(C4G) : a3x.I4M(C4G, e4i.clazz);
            delete e4i.clazz
        }
        return M4Q.ZI0x(C4G, M4Q.Bc4g, e4i || Y4c)
    };
    cL6F.isChange = !0
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        l4p = c4g("nm.x");
    var SETTING_KEY = "player-setting";
    var mh9Y = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    mh9Y = v4z.sX1x(SETTING_KEY) || mh9Y;
    l4p.bmX3x = function () {
        return mh9Y
    };
    l4p.GE5J = function (Ba4e) {
        if (Ba4e) {
            mh9Y = Ba4e;
            v4z.uk2x(SETTING_KEY, Ba4e)
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        l4p = c4g("nm.x"),
        p4t = c4g("nm.d"),
        gO7H = c4g("nm.w.player.log");
    var kz9q = p4t.hK8C.B4F();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var md9U = function (t4x, bF5K, oZ0x) {
        var da6U = l4p.eQ6K("{0} {1} {2}", k4o.iS8K(new Date, "yyyy-MM-dd HH:mm:ss"), t4x, bF5K);
        if (oZ0x == LogLevel.ERROR) {
            kz9q.gg7Z("playerror", {
                message: bF5K
            })
        }
        if (oZ0x >= LogLevel.INFO) {
            kz9q.ciK3x(da6U)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(da6U)
        }
    };
    gO7H.bT5Y = function () {
        md9U("PLAY_ERROR", l4p.eQ6K.apply(null, arguments), LogLevel.ERROR)
    };
    gO7H.op0x = function () {
        md9U("PLAY_INFO", l4p.eQ6K.apply(null, arguments), LogLevel.INFO)
    };
    gO7H.cvw6q = function () {
        md9U("PLAY_DEBUG", l4p.eQ6K.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        k4o = c4g("nej.u"),
        D4H = c4g("nm.w"),
        ge7X = c4g("flash.cb");
    var dI6C = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var AY4c,
        TG8y,
        tS2x;
    D4H.bSk9b = function (t4x, dr6l) {
        if (t4x != "flash") {
            if (!AY4c) {
                AY4c = a3x.cU6O("audio");
                k4o.be5j(dI6C, function (t4x) {
                    h4l.q4u(AY4c, t4x, onMediaCallBack)
                })
            }
            if (AY4c && AY4c.canPlayType && AY4c.canPlayType("audio/mpeg")) {
                dr6l(new MediaWrap("audio"));
                return
            }
        }
        if (!TG8y) {
            a3x.qd0x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function (hb7U) {
                    TG8y = hb7U;
                    k4o.be5j(dI6C, function (t4x) {
                        ge7X[t4x] = onMediaCallBack;
                        TG8y.addCallback(t4x, "flash.cb." + t4x)
                    });
                    dr6l(new MediaWrap("flash"))
                }
                    .g4k(this)
            })
        } else {
            dr6l(new MediaWrap("flash"))
        }
    };
    function MediaWrap(AX4b) {
        var lA9r;
        H4L.ft7m.B4F({
            element: this,
            event: dI6C.concat(["interrupt", "recover"])
        });
        lA9r = AX4b == "audio" ? AY4c : TG8y;
        this.type = AX4b;
        this.destroy = function () {
        };
        this.setSrc = function (V4Z) {
            if (tS2x != this) {
                var gz7s = tS2x;
                if (gz7s) {
                    gz7s.interrupt()
                }
                tS2x = this
            }
            if (AX4b == "flash") {
                lA9r.setSrc(V4Z)
            } else {
                lA9r.src = V4Z
            }
        };
        this.play = function () {
            if (tS2x != this) {
                var gz7s = tS2x;
                if (gz7s) {
                    gz7s.interrupt();
                    tS2x = this;
                    this.recover()
                } else {
                    tS2x = this
                }
            }
            if (AX4b == "flash") {
                lA9r.as_play()
            } else {
                lA9r.play()
            }
        };
        this.pause = function () {
            if (tS2x != this)
                return;
            if (AX4b == "flash") {
                lA9r.as_pause()
            } else {
                lA9r.pause()
            }
        };
        this.load = function () {
            if (tS2x != this)
                return;
            if (AX4b == "flash") {
                lA9r.as_load()
            } else {
                lA9r.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function () {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function () {
            return lA9r
        };
        var nr0x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k4o.be5j(nr0x, function (T4X) {
            var OW7P = "get" + T4X,
                OV7O = "set" + T4X;
            if (AX4b == "flash") {
                if (!this[OW7P]) {
                    this[OW7P] = function () {
                        return lA9r[OW7P]()
                    }
                }
                if (!this[OV7O]) {
                    this[OV7O] = function (value) {
                        lA9r[OV7O](value)
                    }
                }
            } else {
                var bDa6U = T4X.slice(0, 1).toLowerCase() + T4X.slice(1);
                if (!this[OW7P]) {
                    this[OW7P] = function () {
                        return lA9r[bDa6U]
                    }
                }
                if (!this[OV7O]) {
                    this[OV7O] = function (value) {
                        lA9r[bDa6U] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d4h) {
        if (tS2x) {
            h4l.z4D(tS2x, d4h.type, d4h)
        }
    }
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        v4z = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        cK6E = c4g("nej.p"),
        D4H = c4g("nm.w"),
        l4p = c4g("nm.x"),
        gO7H = c4g("nm.w.player.log"),
        b4f;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bCZ6T = false;
    D4H.fn7g = NEJ.C();
    b4f = D4H.fn7g.O4S(H4L.cz5E);
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.cr5w = {};
        this.TN8F(e4i.media);
        v4z.bp5u("/api/cdns", {
            type: "json",
            onload: function (d4h) {
                if (d4h.code) {
                    this.pN0x = d4h.data
                }
            }
                .g4k(this)
        })
    };
    b4f.bD5I = function () {
        this.bH5M();
        delete this.cr5w
    };
    b4f.TT8L = function (bf5k) {
        if (!bf5k)
            return;
        var zI3x = this.cr5w.volume;
        if (this.dC6w) {
            this.dC6w.pause()
        }
        this.cr5w = {
            time: 0,
            id: bf5k.id,
            duration: bf5k.duration / 1e3,
            play: this.cr5w.play,
            stalledRetryCount: 0
        };
        if (zI3x != null) {
            this.cr5w.volume = zI3x
        }
        this.cr5w.loadState = LoadState.LOAD_START;
        this.bCY6S(bf5k.id);
        gO7H.op0x("play song id: {0}", bf5k.id)
    };
    b4f.eN6H = function () {
        if (this.cr5w.error) {
            this.cr5w.error = null;
            if (this.cr5w.error == ErrorType.INFO_GET_ERR || this.bCX6R()) {
                this.bCW6Q()
            } else {
                this.OK7D()
            }
        } else {
            if (this.dC6w) {
                this.dC6w.play()
            }
        }
        this.cr5w.play = true;
        this.oz0x("play")
    };
    b4f.fu7n = function () {
        if (this.dC6w) {
            this.dC6w.pause()
        }
        this.cr5w.play = false;
        this.oz0x("pause")
    };
    b4f.ns0x = function (bB5G) {
        if (this.dC6w) {
            this.dC6w.setCurrentTime(bB5G)
        }
        this.cr5w.time = bB5G;
        gO7H.op0x("seek to: {0}", bB5G)
    };
    b4f.bon3x = function () {
        return this.cr5w.duration || 0
    };
    b4f.vt2x = function () {
        return !!this.cr5w.play
    };
    b4f.lT9K = function (OF7y) {
        this.cr5w.volume = OF7y;
        if (this.dC6w) {
            this.dC6w.setVolume(OF7y)
        }
    };
    b4f.boy3x = function () {
        return this.cr5w.time
    };
    b4f.TN8F = function (t4x) {
        D4H.bSk9b(t4x, function (lA9r) {
            this.dC6w = lA9r;
            gO7H.op0x("media loaded: {0}", lA9r.type);
            this.bU5Z([[this.dC6w, "loadedmetadata", this.bSd9U.g4k(this)], [this.dC6w, "ended", this.bSb9S.g4k(this)], [this.dC6w, "waiting", this.xl3x.g4k(this)], [this.dC6w, "play", this.tg1x.g4k(this)], [this.dC6w, "pause", this.boF4J.g4k(this)], [this.dC6w, "playing", this.OD7w.g4k(this)], [this.dC6w, "timeupdate", this.bRZ9Q.g4k(this)], [this.dC6w, "progress", this.rY1x.g4k(this)], [this.dC6w, "stalled", this.boK4O.g4k(this)], [this.dC6w, "interrupt", this.fu7n.g4k(this)], [this.dC6w, "recover", this.bRX9O.g4k(this)], [this.dC6w, "error", this.eo6i.g4k(this)]]);
            if (this.cr5w) {
                if (this.cr5w.loadState == LoadState.LOAD_START || this.cr5w.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.boO4S();
                    if (this.cr5w.volume != null) {
                        this.dC6w.setVolume(this.cr5w.volume)
                    }
                }
            }
        }
            .g4k(this))
    };
    b4f.bRW9N = function (t4x) {
        this.Ia5f();
        this.dC6w.destroy();
        this.cr5w.loadState = LoadState.IN_SWITCH_MEDIA;
        this.xl3x();
        this.TN8F(t4x);
        gO7H.op0x("switch media")
    };
    b4f.cvx6r = function () {
        return this.dC6w
    };
    b4f.bCY6S = function () {
        this.xl3x();
        v4z.bp5u("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cr5w.id]),
                br: DEFAULT_BR
            },
            onload: this.bCQ6K.g4k(this),
            onerror: this.bCQ6K.g4k(this)
        })
    };
    b4f.bCQ6K = function (d4h) {
        if (d4h.code == 200 && d4h.data && d4h.data.length) {
            var bt5y = d4h.data[0];
            if (!bt5y.url) {
                this.cr5w.error = ErrorType.INFO_GET_ERR;
                this.oz0x("error", {
                    code: this.cr5w.error
                });
                return
            }
            this.cr5w.playUrl = bt5y.url;
            this.cr5w.expireTime = (new Date).getTime() + bt5y.expi * 1e3;
            this.boO4S()
        } else {
            this.cr5w.error = ErrorType.INFO_GET_ERR;
            this.oz0x("error", {
                code: this.cr5w.error
            });
            gO7H.bT5Y("info load error")
        }
    };
    b4f.boO4S = function () {
        if (this.dC6w) {
            var V4Z = this.cr5w.playUrl;
            if (this.cr5w.time > 0 && (this.cr5w.loadState == LoadState.IN_RE_GET_URL || this.cr5w.loadState == LoadState.IN_RE_GET_URL)) {
                V4Z += "#t=" + this.cr5w.time
            }
            this.dC6w.setSrc(V4Z);
            gO7H.op0x("load mp3: {0},loadState: {1}.", V4Z, this.cr5w.loadState)
        }
    };
    b4f.bCM6G = function () {
        if (/#t=(\d+)$/.test(this.dC6w.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b4f.OK7D = function () {
        var bB5G = parseInt(this.cr5w.time) || 0,
            bRO9F = this.bCM6G();
        if (bB5G === bRO9F) {
            this.dC6w.load()
        } else {
            this.dC6w.setSrc(this.cr5w.playUrl + "#t=" + bB5G)
        }
        this.cr5w.loadState = LoadState.IN_RELOAD;
        this.xl3x();
        gO7H.op0x("reload from: {0}", bB5G)
    };
    b4f.bCW6Q = function () {
        this.cr5w.loadState = LoadState.IN_RE_GET_URL;
        this.bCY6S()
    };
    b4f.bCK6E = function () {
        var vp2x = getHost(this.cr5w.playUrl);
        if (vp2x) {
            for (var i = 0; i < this.pN0x.length; i++) {
                var jB9s = this.pN0x[i] || [],
                    s4w = jB9s.indexOf(vp2x);
                if (s4w >= 0 && jB9s.length > 1) {
                    return jB9s[(s4w + 1) % jB9s.length]
                }
            }
        }
        function getHost(V4Z) {
            if (CDN_HOST_REG.test(V4Z))
                return RegExp.$1
        }
    };
    b4f.bRJ9A = function () {
        this.cr5w.playUrl = this.cr5w.playUrl.replace(CDN_HOST_REG, this.bCK6E());
        this.cr5w.loadState = LoadState.IN_SWITCH_CDN;
        this.boO4S();
        this.xl3x()
    };
    b4f.bSd9U = function () {
        if (this.cr5w.loadState == LoadState.LOAD_START) {
            this.cr5w.loadState = LoadState.LOADED_META;
            if (this.dC6w.type == "audio") {
                this.cr5w.duration = this.dC6w.getDuration()
            }
            this.oz0x("loadedmeta", {
                duration: this.cr5w.duration
            })
        } else {
            this.cr5w.loadState = LoadState.LOADED_META
        }
        if (this.cr5w.play) {
            this.dC6w.play()
        } else {
            this.dC6w.pause()
        }
        if (this.cr5w.time && parseInt(this.cr5w.time) != this.bCM6G()) {
            this.dC6w.setCurrentTime(this.cr5w.time)
        }
        this.HR5W();
        this.OD7w();
        bCZ6T = true;
        gO7H.op0x("loaded meta")
    };
    b4f.bSb9S = function () {
        this.cr5w.ended = true;
        this.oz0x("ended")
    };
    b4f.xl3x = function () {
        if (!this.cr5w.waiting) {
            this.cr5w.waiting = true;
            this.cr5w.waitTimestamp = +(new Date);
            this.oz0x("waiting")
        }
    };
    b4f.OD7w = function () {
        this.cr5w.waiting = false;
        this.cr5w.waitTimestamp = 0;
        this.oz0x("playing")
    };
    b4f.tg1x = function () {
        this.oz0x("play")
    };
    b4f.boF4J = function () {
        this.oz0x("pause")
    };
    b4f.bRZ9Q = function () {
        if (this.cr5w.loadState != LoadState.LOADED_META)
            return;
        var bB5G = this.dC6w.getCurrentTime();
        if (this.cr5w.waiting && bB5G > this.cr5w.time) {
            this.OD7w()
        }
        this.cr5w.time = bB5G;
        this.oz0x("timeupdate", {
            time: this.cr5w.time,
            duration: this.cr5w.duration
        })
    };
    b4f.rY1x = function (d4h) {
        if (this.cr5w.loadState != LoadState.LOADED_META)
            return;
        var m4q = {};
        if (d4h.data) {
            m4q.total = d4h.data.total;
            m4q.loaded = d4h.data.loaded
        } else {
            var xx3x = this.dC6w.getBuffered(),
                bB5G = this.dC6w.getCurrentTime(),
                nV0x = 0;
            for (var i = 0; i < xx3x.length; i++) {
                if (bB5G > xx3x.start(i) && bB5G < xx3x.end(i)) {
                    nV0x = xx3x.end(i);
                    break
                }
            }
            m4q.total = this.cr5w.duration;
            m4q.loaded = Math.min(nV0x, m4q.total)
        }
        this.oz0x("progress", m4q)
    };
    b4f.HR5W = function () {
        if (this.cr5w.retry) {
            clearTimeout(this.cr5w.retry.tid);
            this.cr5w.retry = null
        }
    };
    b4f.eo6i = function () {
        var bQ5V = this.dC6w.getError();
        gO7H.bT5Y("media error code: {0}, netState: {1}", bQ5V.code, this.dC6w.getNetworkState());
        if (bQ5V.code == MediaError.MEDIA_ERR_NETWORK || bQ5V.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Ba4e = l4p.bmX3x();
            if (!this.cr5w.retry) {
                this.cr5w.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cr5w.retry.tid)
            }
            if (this.cr5w.retry.level == RetryLevel.NONE) {
                if (this.bCX6R()) {
                    this.cr5w.retry.level = RetryLevel.GET_URL;
                    this.bCW6Q();
                    gO7H.op0x("Url expired, get url.")
                } else {
                    this.cr5w.retry.level = RetryLevel.RELOAD;
                    this.cr5w.retry.tid = setTimeout(this.OK7D.g4k(this), 3e3);
                    gO7H.op0x("Reload mp3 3s later.")
                }
            } else if (this.cr5w.retry.level == RetryLevel.GET_URL) {
                this.cr5w.retry.level = RetryLevel.RELOAD;
                this.cr5w.retry.tid = setTimeout(this.OK7D.g4k(this), 3e3);
                gO7H.op0x("Reload mp3 3s later.")
            } else if (this.cr5w.retry.level == RetryLevel.RELOAD) {
                this.cr5w.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bCK6E()) {
                    this.cr5w.retry.tid = setTimeout(this.bRJ9A.g4k(this), 5e3);
                    gO7H.op0x("Switch CDN 5s later.")
                } else {
                    this.cr5w.retry.tid = setTimeout(this.OK7D.g4k(this), 5e3);
                    gO7H.op0x("Reload mp3 5s later.")
                }
            } else if (!bCZ6T && this.dC6w.type == "audio" && !Ba4e.useFlash && !cK6E.Kh6b.mac && l4p.bbY1x().supported) {
                Ba4e.useFlash = true;
                l4p.GE5J(Ba4e);
                this.bRW9N("flash")
            } else {
                this.HR5W();
                this.fu7n();
                this.cr5w.error = ErrorType.NET_ERR;
                this.oz0x("error", {
                    code: this.cr5w.error
                });
                gO7H.bT5Y("error can not retry.")
            }
        } else {
            this.HR5W();
            this.fu7n();
            this.cr5w.error = ErrorType.UNKNOWN_ERR;
            this.oz0x("error", {
                code: this.cr5w.error
            });
            gO7H.bT5Y("error can not retry.")
        }
    };
    b4f.boK4O = function () {
        var hf7Y = 0,
            bCG6A = 5e3;
        return function () {
            this.xl3x();
            clearTimeout(hf7Y);
            setTimeout(function () {
                var fN7G = +(new Date);
                if (this.cr5w.waiting && fN7G - this.cr5w.waitTimestamp >= bCG6A && this.cr5w.stalledRetryCount < MAX_STALLED_RETRY) {
                    gO7H.op0x("stalled too long retry.");
                    this.cr5w.stalledRetryCount++;
                    this.OK7D()
                }
            }
                .g4k(this), bCG6A);
            gO7H.op0x("stalled")
        }
    }
    ();
    b4f.bCX6R = function () {
        var fN7G = +(new Date);
        return fN7G > this.cr5w.expireTime
    };
    b4f.bRX9O = function () {
        var bB5G = parseInt(this.cr5w.time) || 0;
        this.dC6w.setSrc(this.cr5w.playUrl + "#t=" + bB5G);
        this.cr5w.loadState = LoadState.IN_RELOAD;
        this.xl3x();
        gO7H.op0x("recover from: {0}", bB5G)
    };
    b4f.oz0x = function (W4a, j4n) {
        h4l.z4D(D4H.fn7g, "playaction", {
            action: W4a,
            data: j4n || {}
        })
    };
    H4L.ft7m.B4F({
        element: D4H.fn7g,
        event: ["playaction"]
    })
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        H4L = c4g("nej.ut"),
        D4H = c4g("nm.w"),
        b4f;
    D4H.AM4Q = NEJ.C();
    b4f = D4H.AM4Q.O4S(D4H.fn7g);
    K4O = D4H.AM4Q.cg5l;
    b4f.cl5q = function () {
        this.cs5x()
    };
    b4f.bRH9y = function (bK5P) {
        this.TT8L(bK5P);
        this.eN6H()
    };
    b4f.bpn4r = function () {
        this.fu7n()
    };
    b4f.ur2x = function (d4h) {
        if (d4h.action == "play") {
            this.fu7n()
        }
    };
    b4f.oz0x = function (W4a, j4n) {
        h4l.z4D(D4H.AM4Q, "tmpplayaction", {
            action: W4a,
            data: j4n || {},
            tmp: true
        })
    };
    b4f.sh1x = function () {
        return this.cr5w
    };
    H4L.ft7m.B4F({
        element: D4H.AM4Q,
        event: ["tmpplayaction"]
    })
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        fh6b = c4g("nej.n"),
        v4z = c4g("nej.j"),
        H4L = c4g("nej.ut"),
        bd5i = c4g("nej.ui"),
        D4H = c4g("nm.w"),
        n4r = c4g("nm.l"),
        jC9t = c4g("nm.c"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f,
        K4O,
        Up8h = [{
            item: "m-publish-search-single",
            type: 1
        }, {
            item: "m-publish-search-artist",
            type: 100
        }, {
            item: "m-publish-search-album",
            type: 10
        }, {
            item: "m-publish-search-mv",
            type: 1004
        }, {
            item: "m-publish-search-playlist",
            type: 1e3
        }, {
            item: "m-publish-search-djRadio",
            type: 1009
        }
        ];
    var bpx4B = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    D4H.bpy4C = NEJ.C();
    b4f = D4H.bpy4C.O4S(bd5i.et6n);
    b4f.cl5q = function (e4i) {
        this.cs5x(e4i);
        var i4m = a3x.I4M(this.o4s, "j-flag");
        this.cvz6t = i4m.shift();
        this.bRC9t = i4m.shift();
        this.If5k = i4m.shift();
        this.bpF4J = i4m.shift();
        this.bpI4M = [i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift()];
        this.Ur8j = i4m.shift();
        this.bCC6w = i4m.shift();
        this.qq0x = {
            list: this.bpI4M,
            selected: "z-curr",
            onchange: this.bCA6u.g4k(this)
        };
        h4l.q4u(this.If5k, "input", this.UA8s.g4k(this));
        h4l.q4u(this.If5k, "propertychange", this.UA8s.g4k(this));
        h4l.q4u(this.If5k, "keyup", this.UA8s.g4k(this));
        h4l.q4u(this.bRC9t, "click", this.UA8s.g4k(this));
        h4l.q4u(this.Ur8j, "click", this.cx5C.g4k(this));
        h4l.q4u(this.bCC6w, "click", function () {
            this.z4D("oncancel", {})
        }
            .g4k(this));
        this.P4T = p4t.CM4Q.fV7O();
        this.Ol7e = top.nm.w.AM4Q.fV7O();
        H4L.ft7m.B4F({
            element: top.nm.w.AM4Q,
            event: ["tmpplayaction"]
        });
        this.qW0x = {
            limit: 100,
            offset: 0,
            parent: this.Ur8j,
            onbeforelistload: this.pb0x.g4k(this)
        };
        p4t.sk = "fuck" + a3x.u4y(this.bpF4J, "xname") + "458";
        h4l.q4u(top.nm.w.AM4Q, "tmpplayaction", this.ur2x.g4k(this))
    };
    b4f.bZ5e = function () {
        this.ca5f = "m-xwgt-publish-search"
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        if (!!this.Au3x) {
            this.Au3x.S4W();
            delete this.Au3x
        }
        this.qq0x.index = bpx4B[e4i.type || "song"];
        this.Au3x = H4L.Bc4g.B4F(this.qq0x);
        this.If5k.value = "";
        this.If5k.focus();
        this.sP1x = "";
        this.cxU6O = 0;
        if (e4i.showMV == true) {
            this.bpI4M[bpx4B["mv"]].parentNode.style.display = "";
            a3x.y4C(this.bpF4J, "srchtab-1")
        } else {
            this.bpI4M[bpx4B["mv"]].parentNode.style.display = "none";
            a3x.w4A(this.bpF4J, "srchtab-1")
        }
        if (!!this.dt6n) {
            this.dt6n = this.dt6n.S4W()
        }
        if (e4i.hideBack) {
            a3x.y4C(this.bCC6w.parentNode, "f-hide")
        }
    };
    b4f.bD5I = function () {
        this.Ol7e.bpn4r();
        this.bH5M()
    };
    b4f.UA8s = function () {
        var value = this.If5k.value.trim();
        if (value && value.length) {
            if (value != this.sP1x) {
                this.sP1x = value;
                this.bCA6u({
                    index: this.Au3x.ru0x()
                })
            }
        } else {
            if (this.dt6n) {
                this.dt6n = this.dt6n.S4W()
            }
        }
        this.sP1x = value
    };
    b4f.cx5C = function () {
        var bRt9k = function (E4I) {
                return a3x.by5D(E4I, "sitm") || a3x.by5D(E4I, "itm") || a3x.by5D(E4I, "mv-item")
            },
            bRq9h = function (E4I) {
                return a3x.by5D(E4I, "ply")
            },
            bCw6q = function () {
                n4r.Z4d.N4R({
                    type: 2,
                    tip: "鍥犲悎浣滄柟瑕佹眰锛岃璧勬簮闇€浠樿垂浣跨敤"
                })
            },
            bRo9f = function () {
                n4r.Z4d.N4R({
                    type: 2,
                    tip: "鍥犲悎浣滄柟瑕佹眰锛岃璧勬簮闇€涓嬭浇鍚庢挱鏀�"
                })
            },
            bqy4C = function (bf5k) {
                if (bf5k && bf5k.privilege && bf5k.privilege.toast) {
                    v4z.bp5u("/api/song/toast", {
                        query: {
                            id: bf5k.id
                        },
                        type: "json",
                        onload: Ku6o.g4k(this),
                        onerror: Ku6o.g4k(this)
                    })
                } else {
                    Kt6n()
                }
            },
            Ku6o = function (Q4U) {
                Kt6n((Q4U || Y4c).toast)
            },
            Kt6n = function (bF5K) {
                n4r.Z4d.N4R({
                    type: 2,
                    tip: bF5K || "鍥犲悎浣滄柟瑕佹眰锛岃璧勬簮鏆傛椂涓嬫灦>_<"
                })
            };
        return function (d4h) {
            var AJ4N = h4l.U4Y(d4h, bRq9h),
                i4m = h4l.U4Y(d4h, bRt9k),
                dY6S = this.Ol7e.sh1x();
            if (!!i4m) {
                h4l.bh5m(d4h);
                this.Og7Z = a3x.u4y(i4m, "id");
                this.Oe7X = a3x.u4y(i4m, "type");
                if (this.Oe7X == 18) {
                    var bK5P = this.P4T.eh6b(this.Og7Z),
                        oZ0x = l4p.oB0x(bK5P);
                    if (!AJ4N) {
                        if (oZ0x == 10) {
                            bCw6q();
                            return
                        } else if (oZ0x == 100) {
                            bqy4C(bK5P);
                            return
                        }
                    } else {
                        if (oZ0x == 10) {
                            bCw6q();
                            return
                        } else if (oZ0x == 100) {
                            bqy4C(bK5P);
                            return
                        } else if (oZ0x == 11) {
                            bRo9f();
                            return
                        } else {
                            a3x.w4A(this.AB3x, "z-pause z-loading");
                            if (AJ4N == this.AB3x && dY6S.play && !dY6S.ended) {
                                this.Ol7e.bpn4r()
                            } else {
                                this.AB3x = AJ4N;
                                this.Ol7e.bRH9y(bK5P)
                            }
                            return
                        }
                    }
                } else if (this.Oe7X == 70) {
                    if (a3x.by5D(i4m, "z-noprogram")) {
                        n4r.Z4d.N4R({
                            type: 2,
                            tip: "涓嶈兘鍒嗕韩娌℃湁鑺傜洰鐨勭數鍙�"
                        });
                        return
                    }
                }
                this.bRm9d()
            }
        }
    }
    ();
    b4f.bRm9d = function () {
        var hl7e = this.P4T.eh6b(this.Og7Z),
            rB0x = l4p.bHy7r(this.Oe7X, hl7e);
        rB0x.title = rB0x.title || "";
        rB0x.author = rB0x.author || "";
        rB0x.picUrl = rB0x.picUrl || "";
        rB0x.authors = rB0x.authors || "";
        if (this.Oe7X == 70) {
            this.Og7Z = this.Og7Z.slice(0, -4)
        }
        this.z4D("onfinish", {
            id: this.Og7Z,
            type: this.Oe7X,
            data: rB0x
        })
    };
    b4f.ur2x = function (d4h) {
        var j4n = d4h.data;
        if (!this.AB3x) {
            return
        }
        switch (d4h.action) {
            case "play":
                a3x.ev6p(this.AB3x, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                a3x.w4A(this.AB3x, "z-pause z-loading");
                break;
            case "error":
                n4r.Z4d.N4R({
                    type: 2,
                    tip: "璇曞惉閬囧埌闂锛屾挱鏀惧け璐�"
                });
                a3x.w4A(this.AB3x, "z-pause z-loading");
                break;
            case "playing":
                a3x.ev6p(this.AB3x, "z-loading", "z-pause");
                break;
            case "waiting":
                a3x.ev6p(this.AB3x, "z-pause", "z-loading");
                break
        }
    };
    b4f.bRk9b = function (d4h) {
        if (d4h.result.code == 407) {
            this.Ur8j.innerHTML = '<div class="n-norlt s-fc1">鏍规嵁鐩稿叧娉曞緥娉曡鍜屾斂绛栵紝鎼滅储缁撴灉鏈簣鏄剧ず</div>';
            return
        }
        this.Ur8j.innerHTML = '<div class="n-norlt s-fc1">椤甸潰鍑洪敊锛岃绋嶅悗鍐嶈瘯锛�</div>'
    };
    b4f.bCA6u = function (d4h) {
        if (!this.sP1x || d4h.index < 0 || d4h.index > 5) {
            return
        }
        this.Ol7e.bpn4r();
        var bc5h = Up8h[d4h.index],
            e4i = NEJ.X({}, this.qW0x);
        e4i.cache = {
            klass: p4t.CM4Q,
            clear: true,
            onerror: this.bRk9b.g4k(this)
        };
        e4i.cache.lkey = "search-publish-" + bc5h.type + "-" + this.sP1x;
        e4i.item = {
            klass: bc5h.item,
            getRestrictLevel: l4p.oB0x,
            dur2time: l4p.lN9E
        };
        if (!e4i.cache.data) {
            e4i.cache.data = {}
        }
        e4i.cache.data.s = this.sP1x;
        e4i.cache.data.type = bc5h.type;
        e4i.cache.data.isPub = true;
        if (bc5h.type == 1) {
            e4i.cache.data.hlpretag = '<span class="s-fc7">';
            e4i.cache.data.hlposttag = "</span>"
        }
        e4i.onemptylist = this.bRj9a.g4k(this, this.sP1x);
        if (!!this.AH4L)
            this.P4T.tA1x(this.AH4L);
        if (!!this.dt6n) {
            this.dt6n = this.dt6n.S4W()
        }
        this.dt6n = H4L.mI9z.B4F(e4i);
        this.AH4L = e4i.cache.lkey
    };
    b4f.pb0x = function (d4h) {
        d4h.value = a3x.hX8P("m-publish-search-loading")
    };
    b4f.bRj9a = function (J4N, d4h) {
        a3x.dT6N(d4h.parent, "m-publish-emtpy-message", {
            key: J4N
        });
        d4h.stopped = true
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        cK6E = c4g("nej.p"),
        v4z = c4g("nej.j"),
        ch5m = c4g("nej.ut"),
        bI5N = c4g("nej.ui"),
        D4H = c4g("nm.w"),
        b4f,
        K4O;
    var bRi9Z = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    D4H.CF4J = NEJ.C();
    b4f = D4H.CF4J.O4S(bI5N.et6n);
    var gc7V = a3x.em6g("m-wgt-receiverInput");
    var bRg9X = a3x.em6g("m-wgt-receiverList");
    var hP8H = a3x.rO1x(bRi9Z);
    var bRf9W = a3x.em6g('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="鍒犻櫎">&times;</a></div>');
    b4f.cl5q = function (e4i) {
        this.bb4f = [];
        this.up2x = e4i.receiver || null;
        this.bRe9V = e4i.unique || false;
        this.lZ9Q = e4i.err;
        this.bCs6m(this.bCr6l, e4i.uid);
        this.cs5x(e4i)
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.NT7M();
        this.NO7H();
        this.Vt8l();
        if (e4i.receiver)
            this.bap0x(e4i.receiver.nickname, e4i.receiver.userId);
        a3x.X4b(this.zW3x, "display", "block");
        a3x.X4b(this.baq0x, "cursor", "text");
        a3x.X4b(this.zW3x, "cursor", "text")
    };
    b4f.bZ5e = function () {
        var j4n = this.bCq6k();
        this.ca5f = a3x.hM8E(a3x.bP5U(gc7V, {
            receiver: this.up2x,
            users: j4n
        }));
        this.lb9S = hP8H
    };
    b4f.bR5W = function () {
        this.cc5h();
        var bx5C = a3x.I4M(this.o4s, "j-flag");
        var gx7q = a3x.I4M(this.o4s, "j-item");
        this.baq0x = bx5C[0];
        this.bCp6j = bx5C[1];
        this.dH6B = bx5C[2];
        this.zW3x = bx5C[3];
        this.VH9y = bx5C[4];
        this.baw0x = bx5C[5];
        this.fd6X = gx7q;
        a3x.y4C(this.fd6X[0], "j-selected");
        h4l.q4u(this.dH6B, "keyup", this.bax0x.g4k(this));
        h4l.q4u(this.dH6B, "keydown", this.ND7w.g4k(this));
        h4l.q4u(this.dH6B, "focus", this.ki9Z.g4k(this));
        h4l.q4u(this.VH9y, "click", this.bQZ9Q.g4k(this));
        h4l.q4u(this.baq0x, "click", this.bQW9N.g4k(this));
        h4l.q4u(document.body, "click", this.nu0x.g4k(this));
        h4l.q4u(this.dH6B, "input", this.fl6f.g4k(this));
        h4l.q4u(this.dH6B, "blur", this.oN0x.g4k(this))
    };
    b4f.bD5I = function (e4i) {
        h4l.ms9j(document.body, "click", this.nu0x.g4k(this));
        this.bH5M();
        this.Vt8l();
        this.bQV9M();
        this.nu0x()
    };
    b4f.bax0x = function (d4h) {
        h4l.bh5m(d4h);
        var iP8H = d4h.keyCode || d4h.which;
        var bi5n = this.dH6B.value;
        var bo5t = this.fd6X.length;
        var qS0x = a3x.I4M(this.o4s, "j-selected")[0];
        switch (iP8H) {
            case 13:
                var jX9O = a3x.gl7e(qS0x, "data-username");
                var hs7l = a3x.gl7e(qS0x, "data-userId");
                this.bap0x(jX9O, hs7l);
                this.nu0x();
                this.dH6B.value = "";
                break;
            case 38:
                var s4w = a3x.gl7e(qS0x, "data-index") - 1 < 0 ? bo5t - 1 : a3x.gl7e(qS0x, "data-index") - 1;
                a3x.w4A(qS0x, "j-selected");
                a3x.y4C(this.fd6X[s4w], "j-selected");
                break;
            case 40:
                var s4w = parseInt(a3x.gl7e(qS0x, "data-index")) + 1 >= bo5t ? 0 : parseInt(a3x.gl7e(qS0x, "data-index")) + 1;
                a3x.w4A(qS0x, "j-selected");
                a3x.y4C(this.fd6X[s4w], "j-selected");
                break;
            default:
                this.vb2x()
        }
    };
    b4f.ND7w = function (d4h) {
        var iP8H = d4h.keyCode || d4h.which;
        var bi5n = this.dH6B.value;
        var s4w = a3x.I4M(this.o4s, "j-receiver").length - 1;
        if (iP8H === 8 && bi5n === "")
            this.bQT9K(s4w)
    };
    b4f.fl6f = function (d4h) {
        var bi5n = this.dH6B.value;
        if (bi5n.length > 10) {
            this.dH6B.value = bi5n.substring(0, 10);
            return
        }
        cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "7.0" ? setTimeout(this.baN0x.g4k(this), 0) : this.baN0x();
        this.NO7H()
    };
    b4f.ki9Z = function () {
        if (this.bb4f[0])
            this.vb2x();
        else
            this.bCs6m(this.bQR9I);
        a3x.X4b(this.zW3x, "display", "none")
    };
    b4f.oN0x = function () {
        var bo5t = a3x.I4M(this.o4s, "j-receiver").length;
        if (this.dH6B.value.trim() == "" && bo5t <= 0)
            a3x.X4b(this.zW3x, "display", "block")
    };
    b4f.bap0x = function (jX9O, hs7l) {
        var Jg6a = this.Nu7n();
        if (Jg6a.length >= 10) {
            this.dy6s();
            return
        }
        var bd5i;
        for (bd5i = 0; bd5i < Jg6a.length; bd5i++) {
            if (Jg6a[bd5i] == hs7l) {
                this.nu0x();
                return
            }
        }
        if (!jX9O || !hs7l)
            return;
        var f4j = a3x.dq6k(a3x.hM8E(a3x.bP5U(bRf9W, {
            username: jX9O,
            userId: hs7l
        })));
        var bA5F = this.bCp6j.parentNode;
        if (this.bRe9V) {
            this.Vt8l()
        }
        bA5F.insertBefore(f4j, this.bCp6j);
        this.dH6B.value = "";
        var bo5t = a3x.I4M(this.o4s, "j-receiver").length;
        if (bo5t > 1)
            a3x.X4b(this.zW3x, "display", "none");
        this.baN0x();
        this.NO7H()
    };
    b4f.Vt8l = function () {
        var Ns7l = a3x.I4M(this.o4s, "j-receiver");
        var bd5i;
        if (Ns7l.length > 0) {
            for (bd5i = 0; bd5i < Ns7l.length; bd5i++) {
                a3x.cF6z(Ns7l[bd5i], false)
            }
        }
    };
    b4f.bQV9M = function () {
        this.dH6B.value = ""
    };
    b4f.bQT9K = function (s4w) {
        this.dy6s(!0);
        var Ns7l = a3x.I4M(this.o4s, "j-receiver");
        a3x.cF6z(Ns7l[s4w], false);
        this.NO7H()
    };
    b4f.vb2x = function () {
        var bi5n = this.dH6B.value;
        var bC5H = bi5n.trim().toLowerCase();
        var j4n;
        bC5H = bC5H.replace(/\[/g, "\\[");
        bC5H = bC5H.replace(/\]/g, "\\]");
        j4n = this.bCq6k(bC5H);
        this.bQQ9H(j4n)
    };
    b4f.nu0x = function (d4h) {
        a3x.X4b(this.VH9y, "display", "none")
    };
    b4f.dy6s = function (gu7n) {
        if (gu7n && this.lZ9Q) {
            a3x.X4b(this.lZ9Q, "display", "none");
            return
        }
        if (this.lZ9Q)
            a3x.X4b(this.lZ9Q, "display", "block")
    };
    b4f.bQZ9Q = function (d4h) {
        h4l.ce5j(d4h);
        var dd6X = d4h.target || d4h.srcElement;
        if (a3x.by5D(dd6X, "j-flag"))
            return;
        var bA5F = dd6X.nodeName.toLowerCase() == "a" ? dd6X.parentNode : dd6X.parentNode.parentNode;
        var jX9O = a3x.gl7e(bA5F, "data-username");
        var hs7l = a3x.gl7e(bA5F, "data-userId");
        this.bap0x(jX9O, hs7l);
        this.nu0x();
        a3x.X4b(this.zW3x, "display", "none")
    };
    b4f.bQW9N = function (d4h) {
        h4l.bh5m(d4h);
        var dd6X = d4h.target || d4h.srcElement;
        if (a3x.by5D(dd6X.parentNode, "j-receiver")) {
            a3x.cF6z(dd6X.parentNode, false);
            this.dy6s(!0);
            this.NO7H()
        } else
            this.dH6B.focus()
    };
    b4f.baN0x = function () {
        this.baw0x.innerHTML = this.dH6B.value;
        var dm6g = this.baw0x.offsetWidth + 2;
        a3x.X4b(this.dH6B, "width", dm6g + "px")
    };
    b4f.NO7H = function () {
        var VW9N = a3x.hL8D(this.dH6B, this.o4s).y;
        var bCn6h = Math.floor((VW9N - 8) / 27);
        if (bCn6h < 0)
            return;
        a3x.X4b(this.baq0x, "height", 19 + bCn6h * 29 + "px")
    };
    b4f.NT7M = function () {
        var pL0x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < pL0x.length; i++) {
            a3x.X4b(this.baw0x, pL0x[i], a3x.db6V(this.dH6B, pL0x[i]))
        }
    };
    b4f.bCs6m = function (dr6l, C4G) {
        var cT6N = C4G ? C4G : window.GUser.userId;
        var V4Z = "/api/user/getfollows/" + cT6N;
        var fC7v = v4z.bp5u(V4Z, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dr6l.g4k(this),
            onerror: function (j4n) {
                this.bb4f = []
            },
            onbeforerequest: function (j4n) {
            }
        })
    };
    b4f.bCr6l = function (j4n) {
        this.bb4f = JSON.parse(j4n).follow || [];
        var C4G = GUser.userId;
        for (var i = 0; i < this.bb4f.length; i++) {
            if (this.bb4f[i].userId == C4G) {
                this.bb4f.splice(i, 1);
                continue
            }
            this.bb4f[i].avatarUrl = this.bb4f[i].avatarUrl + "?param=30y30"
        }
    };
    b4f.bQR9I = function (j4n) {
        if (this.bb4f[0])
            return;
        this.bCr6l(j4n);
        this.vb2x()
    };
    b4f.bCq6k = function (bC5H) {
        var bC5H = bC5H ? bC5H : "";
        this.bb4f = this.bb4f[0] ? this.bb4f : [];
        var bo5t = this.bb4f.length;
        var No7h = this.Nu7n();
        var rJ1x = [];
        var Nm7f,
            Nl7e,
            bbf0x;
        if (!this.bb4f[0])
            return rJ1x;
        for (var bd5i = 0; bd5i < bo5t; bd5i++) {
            bbf0x = false;
            for (var v4z = 0; v4z < No7h.length; v4z++) {
                if (this.bb4f[bd5i].userId == No7h[v4z]) {
                    bbf0x = true;
                    break
                }
            }
            if (bbf0x)
                continue;
            Nm7f = this.bb4f[bd5i].nickname.toLowerCase().search(bC5H);
            Nl7e = this.bb4f[bd5i].py ? this.bb4f[bd5i].py.toLowerCase().search(bC5H) : -1;
            if (Nm7f !== -1 || Nl7e != -1)
                rJ1x.push(this.bb4f[bd5i])
        }
        return rJ1x
    };
    b4f.bQQ9H = function (j4n) {
        a3x.dT6N(this.VH9y, bRg9X, {
            users: j4n
        });
        a3x.y4C(a3x.I4M(this.o4s, "j-item")[0], "j-selected");
        this.fd6X = a3x.I4M(this.o4s, "j-item");
        a3x.X4b(this.VH9y, "display", "block")
    };
    b4f.Nu7n = function () {
        var rJ1x = a3x.I4M(this.o4s, "j-receiver") || [];
        var hs7l = [];
        for (var i = 0; i < rJ1x.length; i++) {
            hs7l.push(a3x.gl7e(rJ1x[i], "data-id"))
        }
        return hs7l
    };
    b4f.cvB6v = function () {
        var hs7l = this.Nu7n();
        var rJ1x = [];
        for (var i = 0; i < hs7l.length; i++) {
            for (var j = 0; j < this.bb4f.length; j++) {
                if (hs7l[i] == this.bb4f[j].userId)
                    rJ1x.push(this.bb4f[j])
            }
        }
        return rJ1x
    };
    b4f.bQJ9A = function () {
        this.Vt8l()
    };
    D4H.CF4J.N4R = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n4r.nv0x.N4R({
                title: "鐧诲綍"
            });
            return
        }
        e4i = e4i || {};
        if (e4i.parent === undefined)
            e4i.parent = document.body;
        !!this.eJ6D && this.eJ6D.S4W();
        this.eJ6D = this.B4F(e4i)
    };
    D4H.CF4J.bq5v = function () {
        !!this.eJ6D && this.eJ6D.S4W()
    };
    D4H.CF4J.EL4P = function () {
        return this.nu0x()
    };
    D4H.CF4J.cvE6y = function () {
        return this.vb2x()
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        k4o = c4g("nej.u"),
        h4l = c4g("nej.v"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        b4f,
        K4O;
    n4r.EN4R = NEJ.C();
    b4f = n4r.EN4R.O4S(n4r.blY3x);
    K4O = n4r.EN4R.cg5l;
    b4f.bk5p = function () {
        var Bo4s;
        var bQF9w = function (A4E, J4N) {
            Bo4s = Bo4s || [];
            if (J4N != "18")
                Bo4s.push({
                    key: J4N,
                    value: A4E
                })
        };
        return function (e4i) {
            this.bl5q(e4i);
            if (e4i.upwards) {
                a3x.y4C(this.o4s, "m-emts-up")
            } else {
                a3x.w4A(this.o4s, "m-emts-up")
            }
            if (!Bo4s) {
                var bv5A = l4p.cdZ2x();
                k4o.ed6X(bv5A, bQF9w)
            }
            var bo5t = Bo4s.length;
            Bo4s.splice(bo5t - 2, 0, {
                key: "18",
                value: "186"
            });
            this.Wc9T = Bo4s
        }
    }
    ();
    b4f.bZ5e = function () {
        this.ca5f = "ntp-portrait"
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a3x.I4M(this.o4s, "j-flag");
        this.bG5L = i4m[0];
        this.bQE9v = i4m[1];
        this.bQD9u = i4m[2];
        this.bQC9t = i4m[3];
        h4l.q4u(this.bG5L, "click", this.wf2x.g4k(this));
        h4l.q4u(this.bQE9v, "click", this.Bu4y.g4k(this, 1));
        h4l.q4u(this.bQC9t, "click", this.Bu4y.g4k(this, 2))
    };
    b4f.bbv1x = function (s4w) {
        this.Wf9W = s4w;
        var bj5o = (s4w - 1) * 50;
        var i4m = this.Wc9T.slice(bj5o, Math.min(bj5o + 50, this.Wc9T.length));
        this.bG5L.innerHTML = a3x.bP5U("jst-portrait", {
            plist: i4m
        }, {
            purl: l4p.bIa7T
        });
        this.bQD9u.innerText = s4w + "/" + Math.ceil(this.Wc9T.length / 50)
    };
    b4f.Bu4y = function (s4w) {
        var bQB9s = Math.ceil(this.Wc9T.length / 50);
        if (s4w == 1 && this.Wf9W == 1 || s4w == 2 && this.Wf9W == bQB9s)
            return;
        s4w == 1 ? this.bbv1x(this.Wf9W - 1) : this.bbv1x(this.Wf9W + 1)
    };
    b4f.wf2x = function (d4h) {
        var E4I = h4l.U4Y(d4h, "d:text");
        if (!E4I)
            return;
        var d4h = {
            url: a3x.u4y(E4I, "url"),
            text: a3x.u4y(E4I, "text")
        };
        this.z4D("onselect", d4h);
        if (!d4h.stopped)
            this.bq5v()
    };
    b4f.N4R = function () {
        K4O.N4R.call(this);
        this.bbv1x(1)
    }
})();
(function () {
    var c4g = NEJ.P,
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        cK6E = c4g("nej.p"),
        ba4e = c4g("nej.h"),
        H4L = c4g("nej.ut"),
        jr8j = /^[#?]+/,
        Ct4x = /#(.*?)$/,
        wd2x = window,
        bbB1x = !history.pushState || cK6E.Kh6b.android || !history.auto;
    var Wg9X = function (V4Z, bbD1x) {
        wd2x.history[!bbD1x ? "pushState" : "replaceState"](null, document.title, V4Z)
    };
    var Wh9Y = function () {
        return location.parse(wd2x.location.href)
    };
    Wg9X = Wg9X.ef6Z(function (d4h) {
        if (!bbB1x)
            return;
        var bg5l = d4h.args;
        d4h.stopped = !0;
        V4Z = bg5l[0].replace(jr8j, "");
        !bg5l[1] ? wd2x.location.hash = V4Z : wd2x.location.replace("#" + V4Z)
    });
    Wh9Y = Wh9Y.ef6Z(function (d4h) {
        if (!bbB1x)
            return;
        d4h.stopped = !0;
        var dG6A = Ct4x.test(wd2x.location.href) ? RegExp.$1 : "";
        d4h.value = location.parse(dG6A.replace(jr8j, ""))
    });
    location.redirect = function (V4Z, bbD1x) {
        Wg9X(V4Z, bbD1x);
        return this
    };
    location.active = function () {
        var eZ6T,
            V4Z,
            iM8E,
            cC6w,
            Nc6W;
        var bbH1x = function (iq8i) {
            if (!!cC6w) {
                cC6w = !1;
                return
            }
            var d4h = {
                oldValue: iM8E,
                newValue: Wh9Y()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h4l.z4D(location, "beforeurlchange", d4h);
                if (d4h.stopped) {
                    if (!!iM8E) {
                        cC6w = !0;
                        Wg9X(iM8E.href, !0)
                    }
                    return
                }
            }
            V4Z = wd2x.location.href;
            iM8E = d4h.newValue;
            h4l.z4D(location, "urlchange", iM8E);
            ba4e.bjG3x(iM8E.href)
        };
        var bCj6d = function () {
            if (V4Z != wd2x.location.href)
                bbH1x();
            eZ6T = requestAnimationFrame(bCj6d)
        };
        return function (bL5Q) {
            if (!!Nc6W)
                return this;
            Nc6W = !0;
            wd2x = bL5Q || window;
            if (bbB1x && "onhashchange" in window && cK6E.mq9h.trident2) {
                h4l.q4u(wd2x, "hashchange", bbH1x);
                bbH1x()
            } else if (!eZ6T) {
                eZ6T = requestAnimationFrame(bCj6d)
            }
            return this
        }
    }
    ();
    location.parse = function () {
        var fZ7S = /^https?:\/\/.*?\//i,
            jr8j = /[?#]/;
        return function (V4Z) {
            var m4q = {
                href: V4Z
            };
            V4Z = (V4Z || "").replace(fZ7S, "/").split(jr8j);
            var ct5y = 1;
            if (V4Z[0] == "/" && (V4Z[1] || "").indexOf("/") == 0)
                ct5y = 2;
            m4q.path = V4Z.splice(0, ct5y).join("?");
            m4q.query = k4o.hi7b(V4Z.join("&"));
            return m4q
        }
    }
    ();
    location.same = function (V4Z) {
        return Wh9Y().href == V4Z
    };
    H4L.ft7m.B4F({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        fJ7C = c4g("nm.ut");
    fJ7C.sG1x = function (ez6t) {
        var gp7i = {
            text: "",
            start: 0,
            end: 0
        };
        if (ez6t.setSelectionRange) {
            gp7i.start = ez6t.selectionStart;
            gp7i.end = ez6t.selectionEnd;
            gp7i.text = gp7i.start != gp7i.end ? ez6t.value.substring(gp7i.start, gp7i.end) : ""
        } else if (document.selection) {
            var i,
                Wi9Z = document.selection.createRange(),
                vN2x = document.body.createTextRange();
            vN2x.moveToElementText(ez6t);
            gp7i.text = Wi9Z.text;
            gp7i.bookmark = Wi9Z.getBookmark();
            for (i = 0; vN2x.compareEndPoints("StartToStart", Wi9Z) < 0 && Wi9Z.moveStart("character", -1) !== 0; i++) {
                if (ez6t.value.charAt(i) == "\n") {
                    i++
                }
            }
            gp7i.start = i;
            gp7i.end = gp7i.text.length + gp7i.start
        }
        return gp7i
    };
    fJ7C.Wk9b = function (ez6t, gp7i) {
        var vN2x;
        if (!gp7i) {
            gp7i = {
                text: "",
                start: 0,
                end: 0
            }
        }
        ez6t.focus();
        if (ez6t.setSelectionRange) {
            ez6t.setSelectionRange(gp7i.start, gp7i.end)
        } else if (ez6t.createTextRange) {
            vN2x = ez6t.createTextRange();
            if (ez6t.value.length === gp7i.start) {
                vN2x.collapse(false);
                vN2x.select()
            } else {
                vN2x.moveToBookmark(gp7i.bookmark);
                vN2x.select()
            }
        }
    };
    fJ7C.Fj5o = function (ez6t, gp7i, da6U) {
        var gp7i = gp7i || {
            text: "",
            start: 0,
            end: 0
        };
        var bbV1x,
            bCi6c,
            vN2x,
            MX6R,
            bCh6b,
            bCf6Z,
            BJ4N;
        this.Wk9b(ez6t, gp7i);
        if (ez6t.setSelectionRange) {
            bbV1x = ez6t.value;
            bCi6c = bbV1x.substring(0, gp7i.start) + da6U + bbV1x.substring(gp7i.end);
            bCh6b = bCf6Z = gp7i.start + da6U.length;
            BJ4N = ez6t.scrollTop;
            ez6t.value = bCi6c;
            if (ez6t.scrollTop != BJ4N) {
                ez6t.scrollTop = BJ4N
            }
            ez6t.setSelectionRange(bCh6b, bCf6Z)
        } else if (ez6t.createTextRange) {
            MX6R = document.selection.createRange();
            MX6R.text = da6U;
            MX6R.setEndPoint("StartToEnd", MX6R);
            MX6R.select()
        }
        h4l.z4D(ez6t, "keyup")
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        cK6E = c4g("nej.p"),
        k4o = c4g("nej.u"),
        ch5m = c4g("nej.ut"),
        D4H = c4g("nm.w"),
        fJ7C = c4g("nm.ut"),
        b4f;
    D4H.bCe6Y = NEJ.C();
    b4f = D4H.bCe6Y.O4S(ch5m.cz5E);
    b4f.cl5q = function (e4i) {
        this.cs5x(e4i)
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.fK7D = e4i.txt;
        this.BL4P = e4i.sgtsContainer;
        this.bCd6X = e4i.sgtsList[0];
        this.Wq9h = e4i.sgtsItem;
        this.nw0x = e4i.rangeData;
        this.Fu5z = e4i.atIndex;
        a3x.y4C(this.Wq9h[0], "selected-item");
        this.MS6M()
    };
    b4f.bD5I = function () {
        this.bH5M();
        h4l.ms9j(document.body, "keyup", this.bCb6V.g4k(this));
        h4l.ms9j(document.body, "click", this.bBZ6T.g4k(this))
    };
    b4f.MS6M = function () {
        this.bU5Z([[document.body, "keyup", this.bCb6V.g4k(this)], [document.body, "click", this.bBZ6T.g4k(this)], [this.fK7D, "keydown", this.bBV6P.g4k(this)], [this.fK7D, "keypress", this.bBV6P.g4k(this)], [this.bCd6X, "click", this.bBT6N.g4k(this)], [this.bCd6X, "mouseover", this.BQ4U.g4k(this)]])
    };
    b4f.BQ4U = function (d4h) {
        var dd6X = h4l.U4Y(d4h);
        var r4v = a3x.I4M(this.BL4P, "selected-item");
        if (a3x.by5D(dd6X, "j-sgt")) {
            a3x.w4A(r4v[0], "selected-item");
            a3x.y4C(dd6X, "selected-item")
        }
    };
    b4f.bCb6V = function (d4h) {
        var r4v = a3x.I4M(this.BL4P, "selected-item");
        var bo5t = this.Wq9h.length;
        var iP8H = d4h.keyCode || d4h.which;
        var s4w,
            j4n;
        switch (iP8H) {
            case 38:
                s4w = a3x.gl7e(r4v[0], "data-index") - 1 < 0 ? bo5t - 1 : a3x.gl7e(r4v[0], "data-index") - 1;
                a3x.w4A(r4v[0], "selected-item");
                a3x.y4C(this.Wq9h[s4w], "selected-item");
                break;
            case 40:
                s4w = parseInt(a3x.gl7e(r4v[0], "data-index")) + 1 >= bo5t ? 0 : parseInt(a3x.gl7e(r4v[0], "data-index")) + 1;
                a3x.w4A(r4v[0], "selected-item");
                a3x.y4C(this.Wq9h[s4w], "selected-item");
                break;
            case 13:
                this.bBT6N(d4h);
                break;
            case 27:
                this.nu0x();
                break;
            case 32:
                var bi5n = this.fK7D.value;
                var s4w = fJ7C.sG1x(this.fK7D);
                if (bi5n.charAt(s4w.start - 1) !== " ")
                    return;
                this.nu0x();
                break
        }
    };
    b4f.bBV6P = function (d4h) {
        var iP8H = d4h.keyCode || d4h.which;
        if (iP8H === 13 || iP8H === 38 || iP8H === 40) {
            h4l.ce5j(d4h);
            d4h.keyCode = 0;
            d4h.which = 0;
            d4h.returnvalue = false
        }
    };
    b4f.bBZ6T = function (d4h) {
        var dd6X = d4h.target || d4h.srcElement;
        if (dd6X === this.fK7D)
            return;
        this.nu0x()
    };
    b4f.bBT6N = function (d4h) {
        h4l.bh5m(d4h);
        var r4v = a3x.I4M(this.BL4P, "selected-item")[0];
        var qS0x = d4h.target || d4h.srcElement;
        var t4x = d4h.type;
        if (a3x.by5D(qS0x, "lst"))
            return;
        if (t4x == "click") {
            a3x.w4A(r4v, "selected-item");
            a3x.y4C(qS0x, "selected-item")
        } else
            qS0x = r4v;
        var j4n = qS0x.innerHTML + " ";
        this.nu0x();
        var gp7i = this.nw0x;
        gp7i.start = this.Fu5z + 1;
        if (cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "9.0") {
            this.fK7D.value = this.fK7D.value.substring(0, gp7i.start) + this.fK7D.value.substring(gp7i.end, this.fK7D.value.length);
            gp7i.end = gp7i.start
        }
        fJ7C.Fj5o(this.fK7D, gp7i, j4n);
        h4l.z4D(this.fK7D, "keyup")
    };
    b4f.nu0x = function (d4h) {
        if (!!this.BL4P)
            a3x.X4b(this.BL4P, "display", "none");
        this.S4W()
    };
    b4f.vb2x = function (d4h) {
        if (!!this.BL4P)
            a3x.X4b(this.BL4P, "display", "block")
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        D4H = c4g("nm.w"),
        ch5m = c4g("nej.ut"),
        bI5N = c4g("nej.ui"),
        b4f;
    var bPP9G = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bPN9E = a3x.em6g("m-wgt-atlist");
    var hP8H = a3x.rO1x(bPP9G);
    D4H.bBR6L = NEJ.C();
    b4f = D4H.bBR6L.O4S(bI5N.et6n);
    b4f.cl5q = function (e4i) {
        this.fB7u = {};
        this.cs5x()
    };
    b4f.bk5p = function (e4i) {
        this.fB7u.txt = a3x.x4B(e4i.target);
        this.fB7u.data = e4i.data;
        this.fB7u.offset = e4i.offset;
        this.fB7u.rangeData = e4i.rangeData;
        this.fB7u.atIndex = e4i.atIndex;
        this.bPJ9A(e4i);
        this.bl5q(e4i);
        this.fB7u.sgtsContainer = this.o4s;
        this.fB7u.sgtsList = a3x.I4M(this.o4s, "lst");
        this.fB7u.sgtsItem = a3x.I4M(this.o4s, "f-thide");
        this.Yr9i(e4i);
        this.bPI9z = D4H.bCe6Y.B4F(this.fB7u)
    };
    b4f.bD5I = function (e4i) {
        this.bH5M();
        this.bPI9z.S4W()
    };
    b4f.bZ5e = function () {
        this.lb9S = hP8H
    };
    b4f.bR5W = function () {
        this.cc5h()
    };
    b4f.bPJ9A = function (e4i) {
        this.o4s = a3x.dq6k(a3x.hM8E(a3x.bP5U(bPN9E, e4i.data)))
    };
    b4f.Yr9i = function (e4i) {
        var bBP6J = a3x.I4M(this.o4s, "selected-item")[0];
        if (bBP6J)
            a3x.w4A(bBP6J, "selected-item");
        var cL6F = e4i.offset.x + "px";
        var gE7x = e4i.offset.y + "px";
        a3x.X4b(this.o4s, "left", cL6F);
        a3x.X4b(this.o4s, "top", gE7x)
    }
})();
(function () {
    var c4g = NEJ.P,
        v4z = c4g("nej.j"),
        fJ7C = c4g("nm.ut");
    fJ7C.bBO6I = function (bi5n) {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var cP6J = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var FH5M = bi5n.match(cP6J) || [];
        for (var bd5i = 0; bd5i < FH5M.length; bd5i++) {
            FH5M[bd5i] = FH5M[bd5i].split("@")[1]
        }
        FH5M = FH5M.reverse();
        var hs7l = GUser.userId;
        var bPF9w = v4z.sX1x("mentioners" + hs7l) || [];
        var jb8T = FH5M.concat(bPF9w);
        if (jb8T.length > 10)
            jb8T = jb8T.slice(0, 10);
        v4z.uk2x("mentioners" + hs7l, jb8T)
    };
    fJ7C.bPD9u = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var hs7l = GUser.userId;
        return v4z.sX1x("mentioners" + hs7l) || []
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        cK6E = c4g("nej.p"),
        v4z = c4g("nej.j"),
        k4o = c4g("nej.u"),
        ch5m = c4g("nej.ut"),
        D4H = c4g("nm.w"),
        fJ7C = c4g("nm.ut"),
        b4f;
    D4H.bBM6G = NEJ.C();
    b4f = D4H.bBM6G.O4S(ch5m.cz5E);
    b4f.cl5q = function (e4i) {
        this.cs5x(e4i);
        this.bBL6F()
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.fK7D = e4i.txt;
        this.o4s = e4i.body;
        this.bBK6E = e4i.before;
        this.Qu7n = e4i.flag;
        this.bPo9f = e4i.after;
        this.oU0x = [];
        if (cK6E.cS6M.browser != "ie") {
            setTimeout(function () {
                this.kQ9H()
            }
                .g4k(this), 0)
        }
        this.MS6M()
    };
    b4f.bD5I = function () {
        this.bH5M();
        if (this.tu1x)
            this.tu1x.S4W();
        delete this.tu1x
    };
    b4f.MS6M = function () {
        this.bU5Z([[this.fK7D, "keyup", this.bBG6A.g4k(this, this.fK7D)], [this.fK7D, "click", this.bBG6A.g4k(this, this.fK7D)], [this.fK7D, "focus", this.kQ9H.g4k(this)]])
    };
    b4f.kQ9H = function (d4h) {
        this.nw0x = fJ7C.sG1x(this.fK7D)
    };
    b4f.bBL6F = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var cT6N = window.GUser.userId;
        var V4Z = "/api/user/getfollows/" + cT6N;
        var fC7v = v4z.bp5u(V4Z, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j4n) {
                window.GFollowers = JSON.parse(j4n).follow
            }
                .g4k(this),
            onerror: function (j4n) {
            },
            onbeforerequest: function (j4n) {
            }
        })
    };
    b4f.bBF6z = function (index) {
        var A4E = this.fK7D.value,
            bj5o,
            bda1x,
            bdb1x,
            Mq6k;
        this.bBK6E.innerHTML = k4o.dM6G(A4E.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var oa0x = a3x.I4M(this.bBK6E, "j-test");
        for (var bd5i = 0; bd5i < oa0x.length; bd5i++) {
            oa0x[bd5i].innerText = " "
        }
        this.Qu7n.innerHTML = A4E.charAt(index);
        this.bPo9f.innerHTML = k4o.dM6G(A4E.substr(index + 1, A4E.length));
        Mq6k = parseInt(a3x.db6V(this.fK7D, "lineHeight"));
        a3x.X4b(this.o4s, "display", "block");
        bda1x = a3x.hL8D(this.Qu7n, this.o4s);
        bdb1x = a3x.hL8D(this.fK7D);
        a3x.X4b(this.o4s, "display", "none");
        var cL6F = bda1x.x + bdb1x.x;
        var gE7x = bda1x.y + bdb1x.y + Mq6k;
        bj5o = {
            x: cL6F,
            y: gE7x
        };
        this.bPj9a(bj5o)
    };
    b4f.bBG6A = function (ez6t, d4h) {
        h4l.ce5j(d4h);
        var ez6t = ez6t;
        var A4E = ez6t.value;
        var bo5t = A4E.length;
        var s4w = fJ7C.sG1x(ez6t).start;
        var bBD6x = 0;
        var iP8H = d4h.keyCode || d4h.which;
        var jb8T;
        this.nw0x = fJ7C.sG1x(ez6t);
        var bBC6w = false;
        for (var i = 1; i < 20; i++) {
            jb8T = s4w - i;
            if (A4E.charAt(jb8T) === " ")
                break;
            if (A4E.charAt(jb8T) === "@") {
                bBC6w = true;
                this.Fu5z = bBD6x = jb8T;
                break
            }
        }
        if (bBC6w && d4h.shiftKey === false && iP8H !== 38 && iP8H !== 40) {
            if (iP8H !== 27 && iP8H !== 13) {
                this.tu1x ? this.tu1x.S4W() : null;
                this.bBF6z(bBD6x)
            }
        } else if (iP8H !== 38 && iP8H !== 40 && d4h.keyCode !== 32) {
            this.tu1x ? this.tu1x.S4W() : null
        }
    };
    b4f.bPj9a = function (bj5o) {
        var bj5o = bj5o;
        var j4n = this.FW5b();
        var e4i = {
            parent: document.body,
            offset: bj5o,
            data: j4n,
            target: this.fK7D,
            rangeData: this.nw0x,
            atIndex: this.Fu5z
        };
        this.tu1x ? this.tu1x.S4W() : null;
        this.tu1x = D4H.bBR6L.B4F(e4i)
    };
    b4f.FW5b = function () {
        var bOX9O = fJ7C.sG1x(this.fK7D).start;
        var bOU9L = this.Fu5z + 1;
        var bBw6q = fJ7C.bPD9u() || [];
        var bBv6p = [];
        var bC5H = this.fK7D.value.substring(bOU9L, bOX9O).toLowerCase();
        bC5H = bC5H.replace(/\[/g, "\\[");
        bC5H = bC5H.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.oU0x = window.GFollowers[0] ? window.GFollowers : []
        } else
            this.oU0x = [];
        if (!this.oU0x[0])
            this.bBL6F();
        for (var bd5i = 0; bd5i < bBw6q.length; bd5i++) {
            for (var v4z = 0; v4z < this.oU0x.length; v4z++) {
                if (this.oU0x[v4z].nickname == bBw6q[bd5i])
                    bBv6p.push(this.oU0x[v4z])
            }
        }
        this.oU0x = k4o.ckt3x(this.oU0x, bBv6p, {
            union: true,
            begin: true
        });
        var bOL9C = this.oU0x.length;
        var Xc9T = [];
        var Nm7f,
            Nl7e;
        if (!this.oU0x[0])
            return {
                suggests: Xc9T
            };
        for (var i = 0; i < bOL9C; i++) {
            Nm7f = this.oU0x[i].nickname.toLowerCase().search(bC5H);
            Nl7e = this.oU0x[i].py ? this.oU0x[i].py.toLowerCase().search(bC5H) : -1;
            if (Nm7f !== -1 || Nl7e != -1)
                Xc9T.push(this.oU0x[i]);
            if (Xc9T.length === 10)
                break
        }
        return {
            suggests: Xc9T
        }
    };
    b4f.Md6X = function () {
        var gp7i = this.nw0x || {
            text: "",
            start: 0,
            end: 0
        };
        h4l.z4D(this.fK7D, "focus");
        fJ7C.Fj5o(this.fK7D, gp7i, "@");
        this.nw0x = fJ7C.sG1x(this.fK7D);
        this.Fu5z = gp7i.start;
        this.bBF6z(this.Fu5z)
    };
    b4f.EL4P = function () {
        if (this.tu1x)
            this.tu1x.S4W()
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        v4z = c4g("nej.j"),
        D4H = c4g("nm.w"),
        ch5m = c4g("nej.ut"),
        bI5N = c4g("nej.ui"),
        b4f;
    var bOD9u = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var bOC9t = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gc7V = a3x.hM8E(bOC9t);
    var hP8H = a3x.rO1x(bOD9u);
    D4H.Ma6U = NEJ.C();
    b4f = D4H.Ma6U.O4S(bI5N.et6n);
    b4f.cl5q = function (e4i) {
        this.fB7u = {};
        this.cs5x()
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i);
        this.fB7u.txt = a3x.x4B(e4i.target);
        this.NT7M();
        this.LV6P = D4H.bBM6G.B4F(this.fB7u)
    };
    b4f.bD5I = function (e4i) {
        this.bH5M();
        this.LV6P.S4W()
    };
    b4f.bZ5e = function () {
        this.ca5f = gc7V;
        this.lb9S = hP8H
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a3x.cQ6K(a3x.x4B(this.o4s));
        this.fB7u.body = this.o4s;
        this.fB7u.before = i4m[0];
        this.fB7u.flag = i4m[1];
        this.fB7u.after = i4m[2]
    };
    b4f.NT7M = function () {
        var pL0x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < pL0x.length; i++) {
            if (pL0x[i] === "width" && a3x.db6V(this.fB7u.txt, pL0x[i]) == "100%") {
                a3x.X4b(this.o4s, pL0x[i], this.fB7u.txt.offsetWidth + "px");
                continue
            }
            a3x.X4b(this.o4s, pL0x[i], a3x.db6V(this.fB7u.txt, pL0x[i]))
        }
    };
    b4f.Md6X = function () {
        this.LV6P.Md6X()
    };
    b4f.EL4P = function () {
        this.LV6P.EL4P()
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        eU6O = NEJ.R,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        jC9t = c4g("nm.c"),
        R4V = {},
        b4f;
    if (!!jC9t.bdx1x)
        return;
    jC9t.bdx1x = NEJ.C();
    b4f = jC9t.bdx1x.O4S(H4L.cz5E);
    b4f.cl5q = function () {
        this.cs5x()
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i)
    };
    b4f.bD5I = function () {
        this.bH5M()
    };
    b4f.Gh5m = function (eI6C, dr6l) {
        if (R4V[eI6C]) {
            this.hr7k("register commonJST[" + eI6C + "] duplicate");
            return
        }
        if (!k4o.gf7Y(dr6l)) {
            dr6l = ctl.comJST.bOs9j(eI6C, dr6l)
        }
        R4V[eI6C] = dr6l
    };
    b4f.bOr9i = function (Xl9c) {
        if (k4o.el6f(Xl9c)) {
            k4o.be5j(Xl9c, function (r4v) {
                ctl.comJST.Gh5m.apply(this, r4v)
            }, this)
        } else if (k4o.kg9X(Xl9c)) {
            k4o.ed6X(Xl9c, function (eL6F, J4N) {
                ctl.comJST.Gh5m(J4N, eL6F)
            })
        }
    };
    b4f.bOs9j = function (eI6C, tU2x, bBh6b) {
        tU2x = tU2x || {};
        NEJ.X(tU2x, {
            comJST: this.oX0x
        });
        if (tU2x.resetDataName && !k4o.el6f(tU2x.resetDataName)) {
            tU2x.resetDataName = [tU2x.resetDataName]
        }
        return function () {
            var j4n = arguments[0],
                jd8V = arguments[1];
            if (tU2x.resetDataName) {
                var jb8T = {};
                for (var i = 0, ii = tU2x.resetDataName.length; i < ii; i++) {
                    jb8T[tU2x.resetDataName[i]] = arguments[i]
                }
                j4n = jb8T;
                jd8V = arguments[ii]
            }
            NEJ.X(j4n, tU2x, dE6y);
            if (bBh6b) {
                jd8V = jd8V || {};
                NEJ.X(jd8V, bBh6b)
            }
            return a3x.bP5U(eI6C, j4n, jd8V)
        }
    };
    b4f.oX0x = function (eI6C) {
        if (!R4V[eI6C]) {
            this.hr7k("commonJST[" + eI6C + "] is unregister");
            return ""
        } else {
            return R4V[eI6C].apply(null, eU6O.slice.call(arguments, 1))
        }
    };
    b4f.dump = function () {
        return R4V
    };
    b4f.hr7k = function (bOp9g) {
        if (console && console.log) {
            console.log(bOp9g)
        }
    };
    var dE6y = function (eL6F, J4N) {
        return J4N == "resetDataName"
    };
    c4g("ctl").comJST = jC9t.bdx1x.fV7O()
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        bm5r = NEJ.F,
        eU6O = NEJ.R,
        a3x = c4g("nej.e"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        jC9t = c4g("nm.c"),
        R4V = {},
        b4f;
    if (!!jC9t.bdI1x)
        return;
    jC9t.bdI1x = NEJ.C();
    b4f = jC9t.bdI1x.O4S(H4L.cz5E);
    b4f.cl5q = function () {
        this.cs5x();
        var e4i = {
            "com-mv-artists": function (fo7h, dJ6D, CC4G, bdJ1x) {
                return a3x.bP5U("com-mv-artists", {
                    artists: fo7h,
                    clazz: dJ6D,
                    boxClazz: bdJ1x,
                    mark: CC4G || function (cM6G) {
                        return cM6G
                    },
                    escape: k4o.dM6G,
                    comJST: ctl.comJST.oX0x
                })
            },
            "com-album-artists": function (fo7h, dJ6D, CC4G, bdJ1x) {
                return a3x.bP5U("com-album-artists", {
                    artists: fo7h,
                    clazz: dJ6D,
                    boxClazz: bdJ1x,
                    mark: CC4G || function (cM6G) {
                        return cM6G
                    },
                    escape: k4o.dM6G,
                    comJST: ctl.comJST.oX0x
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k4o.dM6G
            }
        };
        for (var C4G in e4i) {
            ctl.comJST.Gh5m(C4G, e4i[C4G])
        }
    };
    b4f.bk5p = function (e4i) {
        this.bl5q(e4i)
    };
    b4f.bD5I = function () {
        this.bH5M()
    };
    c4g("ctl").comJSTUtil = jC9t.bdI1x.fV7O()
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        a3x = c4g("nej.e"),
        cK6E = c4g("nej.p"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        v4z = c4g("nej.j"),
        D4H = c4g("nm.w"),
        fJ7C = c4g("nm.ut"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        n4r = c4g("nm.l"),
        Xp9g = [2, 3],
        dD6x = ["sn", "db"],
        b4f,
        K4O,
        bOj9a = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video"
        },
        Xq9h = {
            djprogram: "鑺傜洰",
            album: "涓撹緫",
            playlist: "姝屽崟",
            song: "鍗曟洸",
            yunsong: "鍗曟洸",
            artist: "姝屾墜",
            mv: "MV",
            topic: "闊充箰涓撴爮",
            djradio: "鐢靛彴",
            concert: "婕斿嚭",
            video: "瑙嗛"
        },
        bBe6Y = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by "
        },
        bOh9Y = {
            0: 13,
            1: 17,
            3: 19,
            4: 18,
            5: 21,
            6: 24,
            14: 70,
            17: 20
        },
        Co4s = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "绛夌骇杈惧埌Lv.4锛屽嵆鍙坊鍔犲浘鐗�"
        };
    n4r.vU2x = NEJ.C();
    b4f = n4r.vU2x.O4S(n4r.dV6P);
    K4O = n4r.vU2x.cg5l;
    b4f.bk5p = function (e4i) {
        if (e4i.onclose === undefined) {
            e4i.onclose = this.bBd6X.g4k(this)
        }
        this.bl5q(e4i);
        this.AA3x = e4i.isPub;
        this.jD9u = e4i.rid || -1;
        this.es6m = e4i.type || -1;
        this.bdX1x = e4i.purl;
        this.XA9r = e4i.name || "";
        this.LK6E = e4i.author || "";
        this.bea1x = e4i.authors || "";
        this.XI9z = e4i.actId;
        this.XK9B = e4i.actName;
        this.bAZ6T = e4i.title;
        this.XN9E = {};
        this.bNW8O = e4i.mesg || "";
        this.bNV8N = e4i.placeholder || "璇寸偣浠€涔堝惂";
        this.bek1x = e4i.hideTip;
        var i4m,
            fN7G = +(new Date);
        try {
            i4m = top.localCache.x4B("user") || {}
        } catch (e) {
            i4m = {}
        }
        for (var i = 0, i4m = i4m.bindings || [], er6l; i < i4m.length; ++i) {
            er6l = !i4m[i].tokenJsonStr ? null : JSON.parse(i4m[i].tokenJsonStr);
            if (!er6l || er6l.expires_in === undefined)
                continue;
            var XU9L = parseInt(er6l.expires_in),
                XW9N = parseInt(i4m[i].refreshTime),
                bNU8M = (XU9L + XW9N) * 1e3 - 5 * 60 * 1e3;
            if (bNU8M > fN7G)
                this.XN9E[i4m[i].type] = !0
        }
        this.up2x = D4H.CF4J.B4F({
            parent: this.XX9O,
            err: this.bAW6Q
        });
        if (this.hc7V) {
            this.hc7V.S4W()
        }
        this.hc7V = D4H.Ma6U.B4F({
            parent: document.body,
            target: this.eP6J
        });
        if (this.es6m == 24 || this.es6m == 21 || this.sF1x()) {
            this.wg2x.style.display = "none"
        } else {
            this.wg2x.style.display = "";
            this.nx0x = D4H.bkE3x.B4F({
                parent: this.beF1x,
                button: this.wg2x,
                onstartupload: this.bAV6P.g4k(this, true),
                onfinishupload: this.bAV6P.g4k(this, false)
            })
        }
        if (this.sF1x()) {
            this.of0x.innerText = "";
            a3x.y4C(this.of0x, "info-video");
            this.GJ5O = D4H.bAU6O.B4F({
                parent: this.of0x,
                windowBody: this.o4s,
                onstepping: this.bNO8G.g4k(this),
                oncancel: function () {
                    this.bq5v()
                }
                    .g4k(this)
            });
            if (e4i.extError) {
                this.GJ5O.beO1x({
                    agent: e4i.videoUploadAgent,
                    errorCode: -600
                })
            } else {
                this.GJ5O.Gw5B({
                    agent: e4i.videoUploadAgent,
                    fileName: e4i.videoFileName
                })
            }
            a3x.y4C(this.beP1x, "f-hide")
        } else {
            a3x.w4A(this.beP1x, "f-hide")
        }
    };
    b4f.bD5I = function () {
        this.bH5M();
        if (this.up2x) {
            this.up2x.S4W();
            delete this.up2x
        }
        if (this.hc7V) {
            this.hc7V.S4W();
            delete this.hc7V
        }
        if (this.nx0x) {
            this.nx0x.S4W();
            delete this.nx0x
        }
        if (this.lQ9H) {
            this.lQ9H.S4W();
            delete this.lQ9H
        }
    };
    b4f.bZ5e = function () {
        this.ca5f = "m-wgt-sharewin"
    };
    b4f.bR5W = function () {
        this.cc5h();
        this.bAT6N = a3x.cQ6K(this.o4s)[0];
        var bn5s = a3x.I4M(this.o4s, "j-flag");
        this.pl0x = bn5s.shift();
        this.bAW6Q = bn5s.shift();
        this.XX9O = bn5s.shift();
        this.eP6J = bn5s.shift();
        this.of0x = bn5s.shift();
        this.beV1x = bn5s.shift();
        this.bNI8A = bn5s.shift();
        this.wg2x = bn5s.shift();
        this.ci5n = bn5s.shift();
        this.beF1x = bn5s.shift();
        this.yR3x = bn5s.shift();
        this.cwd6X = bn5s.shift();
        this.beP1x = bn5s.shift();
        this.ee6Y = bn5s.shift();
        this.GQ5V = a3x.I4M(this.beP1x, "j-t");
        this.Au3x = H4L.Bc4g.B4F({
            list: a3x.cQ6K(this.pl0x),
            selected: "z-slt",
            onchange: this.bfb1x.g4k(this)
        });
        if (cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "8.0") {
            a3x.X4b(this.XX9O, "position", "relative");
            a3x.X4b(this.XX9O, "zIndex", "10")
        }
        h4l.q4u(window, "snsbind", this.Lm6g.g4k(this));
        h4l.q4u(this.eP6J, "input", this.fl6f.g4k(this));
        h4l.q4u(this.eP6J, "keyup", this.sY1x.g4k(this));
        h4l.q4u(this.o4s, "click", this.cx5C.g4k(this));
        this.P4T = p4t.biv2x.B4F();
        this.P4T.q4u("onshareall", this.Yb9S.g4k(this, 0));
        this.P4T.q4u("onshareerror", this.hO8G.g4k(this));
        this.P4T.q4u("onshareprivate", this.Yb9S.g4k(this, 1));
        this.Ye9V = p4t.yn3x.B4F();
        this.hr7k = p4t.hK8C.B4F();
        try {
            this.Lj6d = top.api.sharePermission
        } catch (e) {
        }
        if (!this.Lj6d) {
            this.Lj6d = Co4s;
            v4z.bp5u("/api/event/user/permission", {
                type: "json",
                onload: function (d4h) {
                    if (d4h.code == 200) {
                        this.Lj6d = NEJ.EX(Co4s, d4h)
                    }
                }
                    .g4k(this)
            })
        }
    };
    b4f.bfb1x = function (d4h) {
        d4h.index == 0 ? a3x.w4A(this.bAT6N, "m-plshare") : a3x.y4C(this.bAT6N, "m-plshare");
        this.XX9O.style.display = d4h.index == 0 ? "none" : "";
        this.bNI8A.style.display = d4h.index == 0 ? "" : "none";
        this.wg2x.style.display = d4h.index == 0 ? "" : "none";
        if (this.es6m == 24 || this.es6m == 21) {
            this.wg2x.style.display = "none"
        }
        this.bAW6Q.style.display = "none";
        this.eP6J.value = "";
        this.bT5Y();
        this.CK4O();
        if (d4h.index == 0) {
            var dm6g = a3x.db6V(this.eP6J, "width");
            if (dm6g == "auto" || !dm6g) {
                return
            } else {
                if (this.hc7V) {
                    this.hc7V.S4W()
                }
                this.hc7V = D4H.Ma6U.B4F({
                    parent: document.body,
                    target: this.eP6J
                })
            }
            this.beF1x.style.display = ""
        } else {
            if (this.hc7V) {
                this.hc7V.S4W();
                delete this.hc7V
            }
            this.beF1x.style.display = "none"
        }
    };
    b4f.cx5C = function (d4h) {
        var f4j = h4l.U4Y(d4h, "d:action");
        if (!f4j)
            return;
        if (a3x.u4y(f4j, "action") == "search") {
            if (!this.sF1x()) {
                h4l.ce5j(d4h)
            }
        } else if (a3x.u4y(f4j, "default") === undefined) {
            h4l.ce5j(d4h)
        }
        switch (a3x.u4y(f4j, "action")) {
            case "txt":
                this.kQ9H();
                break;
            case "search":
                if (this.sF1x()) {
                }
                else if (this.AA3x && this.es6m != 24) {
                    if (this.lQ9H) {
                        this.lQ9H.S4W()
                    }
                    this.lQ9H = D4H.bpy4C.B4F({
                        parent: this.o4s.parentNode,
                        onfinish: this.bfj2x.g4k(this),
                        oncancel: this.bNC8u.g4k(this)
                    });
                    this.bfm2x = true;
                    this.o4s.style.display = "none";
                    this.yf3x(this.jD9u > 0 ? "鏇存崲闊充箰" : "娣诲姞闊充箰")
                }
                break;
            case "at":
                h4l.rD1x(d4h);
                !!this.gQ7J && this.gQ7J.bq5v();
                this.hc7V.Md6X();
                this.fx7q();
                break;
            case "emot":
                h4l.rD1x(d4h);
                !!this.hc7V && this.hc7V.EL4P();
                if (!this.gQ7J) {
                    this.gQ7J = n4r.EN4R.B4F({
                        parent: this.beV1x
                    });
                    this.gQ7J.q4u("onselect", this.wf2x.g4k(this))
                }
                this.gQ7J.N4R();
                break;
            case "upload":
                break;
            case "sns":
                h4l.bh5m(d4h);
                var bfq2x,
                    bC5H,
                    t4x = a3x.u4y(f4j, "type");
                if (!this.XN9E[t4x]) {
                    bfq2x = f4j.href.split("?");
                    bC5H = k4o.hi7b(bfq2x[1]);
                    bC5H["csrf_token"] = v4z.gG7z("__csrf");
                    top.open(bfq2x[0] + "?" + k4o.df6Z(bC5H));
                    return
                }
                var bv5A = {
                    2: "sn",
                    3: "db",
                    4: "rr"
                };
                l4p.Ak3x(f4j, "u-slg-" + bv5A[t4x] + "-gray");
                break;
            case "close":
                !!this.gQ7J && this.gQ7J.bq5v();
                this.bBd6X();
                break;
            case "share":
                h4l.bh5m(d4h);
                if (this.sF1x()) {
                    if (!a3x.by5D(f4j, "u-btn2-2-dis")) {
                        this.csW5b()
                    }
                } else if (a3x.by5D(f4j, "u-btn2-2-dis")) {
                    if (!this.Lj6d.pubEventWithoutResource && !(this.jD9u > 0)) {
                        this.csU5Z()
                    } else {
                    }
                } else if (!(this.jD9u > 0) && !this.eP6J.value && this.nx0x && this.nx0x.PH7A().length == 0) {
                    n4r.Z4d.N4R({
                        type: 2,
                        tip: "璇疯緭鍏ュ唴瀹�"
                    })
                } else {
                    this.csS5X()
                }
                break
        }
    };
    b4f.csU5Z = function () {
        var rV1x = 0,
            bfy2x = function () {
                if (rV1x % 2) {
                    a3x.w4A(this.of0x, "z-show")
                } else {
                    a3x.y4C(this.of0x, "z-show")
                }
                rV1x++;
                if (rV1x > 5) {
                    clearInterval(eZ6T)
                }
            },
            eZ6T;
        return function () {
            rV1x = 0;
            clearInterval(eZ6T);
            eZ6T = setInterval(bfy2x.g4k(this), 200)
        }
    }
    ();
    b4f.Lm6g = function (m4q) {
        m4q = m4q.result;
        this.XN9E[m4q.type] = !0;
        var s4w = k4o.cV6P(Xp9g, m4q.type),
            cd5i = "u-slg-" + dD6x[s4w] + "-gray";
        a3x.w4A(this.GQ5V[s4w], cd5i)
    };
    b4f.bfj2x = function (bt5y) {
        var j4n = bt5y.data;
        this.jD9u = bt5y.id;
        this.es6m = bt5y.type;
        this.o4s.style.display = "";
        this.yf3x(this.bAZ6T);
        this.lQ9H && this.lQ9H.S4W();
        this.bfm2x = false;
        this.bdX1x = j4n.picUrl;
        this.XA9r = j4n.title || "";
        this.LK6E = j4n.author || "";
        this.bea1x = j4n.authors || "";
        this.csL5Q();
        this.Ld6X()
    };
    b4f.bNO8G = function (e4i) {
        this.bdX1x = e4i.coverUrl;
        this.Lc6W = e4i;
        this.Ld6X()
    };
    b4f.bNC8u = function () {
        this.lQ9H && this.lQ9H.S4W();
        this.o4s.style.display = "";
        this.yf3x(this.bAZ6T);
        this.bfm2x = false;
        this.Ld6X()
    };
    b4f.wf2x = function (d4h) {
        var bi5n = "[" + d4h.text + "]";
        fJ7C.Fj5o(this.eP6J, this.nw0x, bi5n);
        this.fx7q()
    };
    b4f.fl6f = function (d4h) {
        cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "7.0" ? setTimeout(this.fx7q.g4k(this), 0) : this.fx7q()
    };
    b4f.sY1x = function (d4h) {
        this.kQ9H();
        if (d4h.keyCode == 8)
            this.fx7q()
    };
    b4f.fx7q = function () {
        this.kQ9H();
        this.CK4O()
    };
    b4f.CK4O = function () {
        var bo5t = Math.ceil(k4o.fi6c(this.eP6J.value.trim()) / 2);
        this.ci5n.innerText = 140 - bo5t;
        bo5t > 140 ? a3x.ev6p(this.ci5n, "s-fc4", "s-fc6") : a3x.ev6p(this.ci5n, "s-fc6", "s-fc4")
    };
    b4f.csS5X = function () {
        if (this.cu5z())
            return;
        if (k4o.fi6c(this.eP6J.value.trim()) > 280) {
            this.bT5Y("瀛楁暟瓒呰繃140涓瓧绗�");
            return
        }
        var t4x = this.Au3x.ru0x(),
            j4n;
        if (t4x == 0) {
            for (var i = 0, xT3x = []; i < this.GQ5V.length; ++i) {
                if (!a3x.by5D(this.GQ5V[i], "u-slg-" + dD6x[i] + "-gray"))
                    xT3x.push(Xp9g[i])
            }
            this.cu5z(!0);
            j4n = {
                id: this.jD9u,
                msg: this.eP6J.value.trim(),
                type: this.Ym9d(this.es6m),
                picUrl: this.bdX1x,
                snsTypes: xT3x.join(","),
                isPub: this.AA3x
            };
            if (this.XI9z > 0) {
                j4n.actId = this.XI9z;
                if (this.XK9B) {
                    j4n.msg = "#" + this.XK9B + "#" + j4n.msg
                }
            }
            var mU9L = this.nx0x && this.nx0x.PH7A();
            if (mU9L && mU9L.length) {
                j4n.pics = mU9L
            }
            this.P4T.bVf0x(j4n)
        } else {
            var rJ1x = this.up2x.Nu7n();
            if (rJ1x.length <= 0) {
                this.bT5Y("璇疯嚦灏戦€夋嫨涓€浣嶅ソ鍙�");
                return
            }
            this.P4T.bVc0x({
                data: {
                    id: this.jD9u,
                    msg: this.eP6J.value.trim(),
                    type: this.Ym9d(this.es6m),
                    userIds: "[" + rJ1x.join(",") + "]"
                }
            })
        }
    };
    b4f.csW5b = function () {
        if (this.cu5z()) {
            return
        }
        this.hr7k.gg7Z("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k4o.fi6c(this.eP6J.value.trim()) > 280) {
            this.bT5Y("瀛楁暟瓒呰繃140涓瓧绗�");
            return
        }
        for (var i = 0, xT3x = []; i < this.GQ5V.length; ++i) {
            if (!a3x.by5D(this.GQ5V[i], "u-slg-" + dD6x[i] + "-gray"))
                xT3x.push(Xp9g[i])
        }
        this.cu5z(!0);
        var vs2x = this.Lc6W.fileInfo,
            j4n = {
                msg: this.eP6J.value.trim(),
                type: "video"
            },
            csJ5O = {
                vid: vs2x.vid,
                coverId: this.Lc6W.coverId,
                nosKey: vs2x.objectKey,
                size: vs2x.size,
                duration: Math.floor(vs2x.duration / 1e3),
                width: vs2x.width,
                height: vs2x.height
            };
        if (this.XI9z > 0) {
            j4n.actId = this.XI9z;
            if (this.XK9B) {
                j4n.msg = "#" + this.XK9B + "#" + j4n.msg
            }
        }
        j4n.videoinfo = JSON.stringify(csJ5O);
        this.P4T.bVa0x({
            data: j4n,
            snsTypes: ""
        })
    };
    b4f.Yb9S = function (t4x, m4q) {
        this.cu5z(!1);
        this.bq5v();
        if (!this.bek1x) {
            if (this.sF1x()) {
                n4r.Z4d.N4R({
                    tip: "瑙嗛灏嗗湪杞爜瀹屾垚鍚庤嚜鍔ㄥ彂鍑�",
                    autoclose: true
                })
            } else {
                n4r.Z4d.N4R({
                    tip: "鍒嗕韩鎴愬姛" + (m4q.point > 0 ? ' 鑾峰緱<em class="s-fc6">' + m4q.point + "绉垎</em>" : ""),
                    autoclose: true
                })
            }
        }
        h4l.z4D(n4r.vU2x, "sharesuccess", {
            isPrivate: t4x,
            rid: this.jD9u,
            rtype: this.es6m,
            data: m4q.event
        });
        this.z4D("onshare")
    };
    b4f.hO8G = function (m4q) {
        this.cu5z(!1);
        var bF5K = "鍒嗕韩澶辫触";
        if (m4q.code) {
            switch (m4q.code) {
                case 404:
                    bF5K = "鍒嗕韩鐨勮祫婧愪笉瀛樺湪";
                    break;
                case 407:
                    bF5K = "杈撳叆鍐呭鍖呭惈鏈夊叧閿瓧";
                    break;
                case 408:
                    bF5K = "鍒嗕韩澶揩浜嗭紝杩囦細鍐嶅垎浜惂";
                    break;
                case 315:
                    bF5K = m4q.message || "鏍规嵁瀵规柟璁剧疆锛屼綘娌℃湁璇ユ搷浣滄潈闄�";
                    break;
                case 329:
                    return l4p.fc6W({
                        clazz: "m-layer-w2",
                        btntxt: "鐭ラ亾浜�",
                        message: "褰撳墠璐﹀彿瀛樺湪杈冨鏈畬鎴愬彂甯冪殑瑙嗛<br>璇风◢鍚庡啀璇�"
                    })
            }
        }
        this.bT5Y(bF5K)
    };
    b4f.kQ9H = function () {
        this.nw0x = fJ7C.sG1x(this.eP6J)
    };
    b4f.bT5Y = function (bF5K) {
        this.dy6s(this.ee6Y, bF5K)
    };
    b4f.cu5z = function (cC6w) {
        return this.dN6H(this.yR3x, cC6w, "鍒嗕韩", "鍒嗕韩涓�...")
    };
    b4f.Ym9d = function (jn8f) {
        return bOj9a[jn8f] || ""
    };
    b4f.csi5n = function () {
        var ez6t,
            sT1x = this.Ym9d(this.es6m);
        this.of0x.style.display = "";
        if (this.jD9u <= 0) {
            this.of0x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">缁欏姩鎬侀厤涓婇煶涔�</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.XA9r) {
                this.of0x.style.display = "none";
                return
            }
            var Yp9g = this.AA3x && this.es6m != 24;
            ez6t = (Xq9h[sT1x] ? Xq9h[sT1x] + "锛�" : "") + this.XA9r + (bBe6Y[sT1x] || " ") + (sT1x == "mv" || sT1x == "album" ? this.bea1x || this.LK6E : this.LK6E);
            a3x.dT6N(this.of0x, "m-xwgt-share-infobar", {
                canChange: Yp9g,
                info: ez6t
            });
            if (Yp9g) {
                a3x.w4A(this.of0x, "z-dis")
            } else {
                a3x.y4C(this.of0x, "z-dis")
            }
        }
        a3x.w4A(this.of0x, "info-video")
    };
    b4f.csL5Q = function () {
        var sT1x = this.Ym9d(this.es6m),
            ez6t = (Xq9h[sT1x] ? Xq9h[sT1x] + "锛�" : "") + this.XA9r + (bBe6Y[sT1x] || " ") + (sT1x == "mv" || sT1x == "album" ? this.bea1x || this.LK6E : this.LK6E);
        Yp9g = this.AA3x && this.es6m != 24;
        if (this.sF1x()) {
            a3x.y4C(this.of0x, "info-video")
        } else {
            a3x.w4A(this.of0x, "info-video");
            a3x.dT6N(this.of0x, "m-xwgt-share-infobar", {
                canChange: Yp9g,
                isPub: this.AA3x,
                info: ez6t
            })
        }
    };
    b4f.bAI6C = function () {
        var Hn5s = this.eP6J.value;
        if (this.AA3x) {
            if (!!this.bfm2x) {
                return !!Hn5s && !!Hn5s.length || !!this.nx0x && this.nx0x.PH7A().length > 0
            } else {
                return this.jD9u > 0 || !!Hn5s && !!Hn5s.length || !!this.nx0x && this.nx0x.PH7A().length > 0
            }
        } else {
            return !!Hn5s && !!Hn5s.length || !!this.nx0x && this.nx0x.PH7A().length > 0
        }
    };
    b4f.Ld6X = function () {
        var bfP2x = false;
        if (this.sF1x()) {
            if (this.Lc6W && this.Lc6W.fileInfo && this.Lc6W.coverId) {
                bfP2x = true
            }
        } else if (!this.AA3x || this.Lj6d.pubEventWithoutResource || this.jD9u > 0) {
            bfP2x = true
        }
        if (bfP2x) {
            a3x.w4A(this.yR3x, "u-btn2-2-dis")
        } else {
            a3x.y4C(this.yR3x, "u-btn2-2-dis")
        }
    };
    b4f.bAV6P = function (bfQ2x) {
        if (bfQ2x) {
            a3x.y4C(this.yR3x, "u-btn2-2-dis")
        } else {
            this.Ld6X()
        }
    };
    b4f.bBd6X = function (d4h) {
        if (d4h) {
            d4h.stopped = true
        }
        if (this.sF1x()) {
            this.hr7k.gg7Z("click", {
                target: d4h ? "cross" : "cancel",
                targetid: "button",
                page: "sharevideo"
            });
            this.GJ5O.crZ5e(this.bAI6C())
        } else if (this.bAI6C()) {
            l4p.gP7I({
                title: "鎻愮ず",
                message: "鏄惁閫€鍑烘湰娆＄紪杈戯紵",
                btnok: "閫€鍑�",
                action: function (W4a) {
                    if (W4a == "ok") {
                        this.bq5v()
                    }
                }
                    .g4k(this)
            })
        } else {
            this.bq5v()
        }
    };
    b4f.yf3x = function (eG6A, ds6m) {
        this.nn9e.yw3x(eG6A, ds6m)
    };
    b4f.Ys9j = function (t4x) {
        this.hr7k.gg7Z("page", {
            type: t4x
        })
    };
    b4f.sF1x = function () {
        return this.es6m == 39
    };
    b4f.N4R = function () {
        var crU5Z = function (r4v, s4w) {
            var cd5i = "u-slg-" + dD6x[s4w] + "-gray";
            !this.XN9E[Xp9g[s4w]] ? a3x.y4C(r4v, cd5i) : a3x.w4A(r4v, cd5i)
        };
        return function () {
            if (this.sF1x()) {
                this.yf3x("娣诲姞瑙嗛")
            }
            K4O.N4R.call(this);
            this.o4s.style.display = "";
            this.bT5Y();
            this.cu5z(!1);
            this.Au3x.Gw5B(0);
            this.eP6J.focus();
            this.eP6J.value = this.bNW8O || "";
            this.eP6J.placeholder = this.bNV8N || "";
            if (!this.sF1x()) {
                this.csi5n()
            }
            this.fx7q();
            this.up2x.bQJ9A();
            k4o.be5j(this.GQ5V, crU5Z, this);
            this.kQ9H();
            if (this.AA3x) {
                this.pl0x.style.display = "none"
            } else {
                this.pl0x.style.display = ""
            }
            this.Ld6X()
        }
    }
    ();
    b4f.bq5v = function (d4h) {
        K4O.bq5v.call(this);
        !!this.gQ7J && this.gQ7J.bq5v();
        if (this.up2x) {
            this.up2x.S4W();
            delete this.up2x
        }
        if (this.hc7V) {
            this.hc7V.S4W();
            delete this.hc7V
        }
        if (this.nx0x) {
            this.nx0x.S4W();
            delete this.nx0x
        }
        if (this.GJ5O) {
            this.GJ5O = this.GJ5O.S4W()
        }
        if (this.lQ9H) {
            this.lQ9H.S4W();
            delete this.lQ9H
        }
    };
    l4p.lP9G = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e4i.title === undefined) {
            e4i.title = "鍒嗕韩"
        }
        if (e4i.actId && e4i.type != 39) {
            var t4x = bOh9Y[e4i.resourceType],
                dw6q = e4i.resourceJson,
                hl7e;
            if (k4o.fe6Y(dw6q)) {
                try {
                    dw6q = JSON.parse(dw6q)
                } catch (e) {
                }
            }
            if (t4x) {
                hl7e = l4p.bHy7r(t4x, dw6q);
                e4i.name = hl7e.title;
                e4i.author = hl7e.author;
                e4i.picUrl = hl7e.picUrl;
                e4i.type = t4x;
                e4i.rid = (dw6q || []).id
            }
        }
        n4r.vU2x.N4R(e4i)
    };
    H4L.ft7m.B4F({
        element: n4r.vU2x,
        event: ["sharesuccess"]
    })
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j"),
        n4r = c4g("nm.l"),
        D4H = c4g("nm.w"),
        bI5N = c4g("nej.ui"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f,
        K4O;
    n4r.Yu9l = NEJ.C();
    b4f = n4r.Yu9l.O4S(n4r.dV6P);
    K4O = n4r.Yu9l.cg5l;
    b4f.cl5q = function () {
        this.cs5x()
    };
    b4f.bR5W = function () {
        this.cc5h();
        var i4m = a3x.I4M(this.o4s, "j-flag");
        h4l.q4u(i4m[0], "click", this.Em4q.g4k(this))
    };
    b4f.bZ5e = function () {
        this.ca5f = "m-import-ok"
    };
    b4f.bk5p = function (e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.title = "姝屾洸鍚屾瀹屾垚";
        this.bl5q(e4i)
    };
    b4f.bD5I = function () {
        this.bH5M()
    };
    b4f.Em4q = function (d4h) {
        this.bq5v();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b4f.zX3x = function () {
        this.bq5v()
    };
    b4f.bEM7F = function (d4h) {
        if (d4h.keyCode == 13)
            this.BM4Q()
    }
})();
(function () {
    var c4g = NEJ.P,
        Y4c = NEJ.O,
        h4l = c4g("nej.v"),
        a3x = c4g("nej.e"),
        v4z = c4g("nej.j"),
        M4Q = c4g("nej.p"),
        k4o = c4g("nej.u"),
        n4r = c4g("nm.l"),
        D4H = c4g("nm.w"),
        bI5N = c4g("nej.ui"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        b4f,
        K4O;
    n4r.bAG6A = NEJ.C();
    b4f = n4r.bAG6A.O4S(n4r.dV6P);
    b4f.bZ5e = function () {
        this.ca5f = "m-programtips-layer"
    };
    b4f.bR5W = function () {
        this.cc5h();
        this.bV5a = a3x.I4M(this.o4s, "j-flag")
    };
    b4f.bk5p = function (e4i) {
        e4i.clazz = " m-layer-programtips";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "浠樿垂鍐呭鎻愮ず";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bl5q(e4i);
        this.gv7o = e4i.id;
        this.crI5N = e4i.radiotype;
        this.kK9B = location.protocol + "//" + (this.crG5L() || "music.163.com") + "/m/" + this.crI5N + "?id=" + this.gv7o;
        this.crE5J()
    };
    b4f.bD5I = function () {
        this.bH5M()
    };
    b4f.zX3x = function () {
        this.bq5v()
    };
    b4f.Em4q = function (d4h) {
        this.z4D("onok", A4E);
        this.bq5v()
    };
    l4p.bAF6z = function (e4i) {
        n4r.bAG6A.B4F(e4i).N4R()
    };
    b4f.crE5J = function () {
        v4z.bp5u("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k4o.df6Z({
                url: this.kK9B,
                size: 180
            }),
            onload: function (j4n) {
                if (j4n.code == 200) {
                    this.crw5B(j4n.qrcodeImageUrl)
                } else {
                    alert("浜岀淮鐮佽幏鍙栧け璐�")
                }
            }
                .g4k(this)
        })
    };
    b4f.crG5L = function () {
        var cru5z = location.host;
        if (cru5z.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b4f.crw5B = function (jR9I) {
        this.bV5a[0].style.backgroundImage = "url(" + jR9I + ")"
    }
})();
(function () {
    var c4g = NEJ.P,
        a3x = c4g("nej.e"),
        cK6E = c4g("nej.p"),
        h4l = c4g("nej.v"),
        k4o = c4g("nej.u"),
        H4L = c4g("nej.ut"),
        v4z = c4g("nej.j"),
        p4t = c4g("nm.d"),
        l4p = c4g("nm.x"),
        F4J = c4g("nm.m"),
        n4r = c4g("nm.l"),
        L4P = c4g("nm.m.f"),
        b4f,
        K4O;
    F4J.cN6H = NEJ.C();
    b4f = F4J.cN6H.O4S(H4L.do6i);
    b4f.bJ5O = function () {
        var oW0x = !1;
        return function () {
            if (oW0x)
                return;
            oW0x = !0;
            this.bM5R();
            if (top == self) {
                return
            }
            this.rG1x = a3x.x4B("g_backtop");
            if (window.GRef != "mail") {
            }
            else {
                this.bAE6y()
            }
            H4L.ft7m.B4F({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bU5Z([[window, "scroll", this.zz3x.g4k(this)], [document, "keyup", this.crj5o.g4k(this)], [document.body, "click", this.sc1x.g4k(this)], [document, "mouseup", this.crc5h.g4k(this)], [this.rG1x, "click", this.KI6C.g4k(this)], [p4t.rP1x, "message", this.pY0x.g4k(this)]]);
            l4p.bVw0x(document.body);
            this.zz3x();
            if (this.yT3x !== false && typeof GUser !== "undefined" && GUser.userId > 0)
                p4t.rP1x.fV7O().tX2x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (cK6E.cS6M.browser == "ie" && parseInt(cK6E.cS6M.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "缃戞槗浜戦煶涔�"
                } else {
                    var gn7g = top.player.getPlaying();
                    if (gn7g && gn7g.track && gn7g.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gn7g.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {
            }
            window.share = this.wE2x.g4k(this);
            this.kd9U = p4t.hK8C.B4F();
            window.log = this.md9U.g4k(this);
            var rN1x = location.search;
            if (rN1x) {
                var bC5H = rN1x.substr(rN1x.indexOf("?") + 1),
                    gd7W = k4o.hi7b(bC5H);
                if (gd7W && gd7W["_hash"])
                    location.hash = gd7W["_hash"]
            }
        }
    }
    ();
    b4f.crj5o = function (d4h) {
        var f4j = h4l.U4Y(d4h);
        try {
            if (d4h.keyCode == 80 && l4p.bHG7z() || ["textarea", "input"].indexOf(f4j.tagName.toLowerCase()) >= 0)
                return;
            h4l.z4D(top.document, "keyup", {
                ctrlKey: d4h.ctrlKey,
                keyCode: d4h.keyCode
            })
        } catch (e) {
        }
    };
    b4f.sc1x = function (d4h) {
        var f4j = h4l.U4Y(d4h);
        if (f4j && f4j.tagName == "INPUT")
            return;
        var f4j = h4l.U4Y(d4h, "d:pid");
        if (f4j) {
            h4l.ce5j(d4h);
            var oe0x = a3x.u4y(f4j, "pid"),
                AE3x = a3x.u4y(f4j, "ptype"),
                W4a = a3x.u4y(f4j, "action") || "play";
            switch (W4a) {
                case "subscribe":
                    l4p.lE9v({
                        tracks: [oe0x]
                    });
                    break
            }
        }
        f4j = h4l.U4Y(d4h, "d:resAction");
        if (f4j && f4j.className.indexOf("-dis") == -1) {
            var cG6A = a3x.u4y(f4j, "resId"),
                t4x = a3x.u4y(f4j, "resType"),
                bgr2x = a3x.u4y(f4j, "resRadiotype"),
                bgs2x = a3x.u4y(f4j, "resRadioid"),
                dK6E = a3x.u4y(f4j, "resFrom"),
                j4n = a3x.u4y(f4j, "resData"),
                W4a = a3x.u4y(f4j, "resAction"),
                bqy4C = a3x.u4y(f4j, "resCopyright"),
                YL9C = a3x.u4y(f4j, "resAuditstatus");
            if (W4a != "log" && W4a != "bilog")
                h4l.ce5j(d4h);
            switch (W4a) {
                case "log":
                    j4n = (j4n || "").split("|");
                    if (!!j4n[0]) {
                        var bc5h = {
                            id: cG6A,
                            alg: j4n[2] || "itembased",
                            scene: j4n[3],
                            position: j4n[1] || 0
                        };
                        if (!!j4n[4])
                            bc5h.srcid = j4n[4];
                        window.log(j4n[0], bc5h)
                    }
                    break;
                case "bilog":
                    var cqF5K = a3x.u4y(f4j, "logAction"),
                        cqC5H = a3x.u4y(f4j, "logJson");
                    window.log(cqF5K, cqC5H);
                    break;
                case "share":
                    if (YL9C && YL9C == 1) {
                        l4p.hR8J("鐢变簬鐗堟潈闂锛岃鑺傜洰鏆傛椂鏃犳硶鍒嗕韩銆�")
                    } else {
                        share(cG6A, t4x, a3x.u4y(f4j, "resPic"), a3x.u4y(f4j, "resName"), a3x.u4y(f4j, "resAuthor"), a3x.u4y(f4j, "resAuthors"))
                    }
                    break;
                case "fav":
                case "subscribe":
                    if (t4x == 18) {
                        var oZ0x = a3x.u4y(f4j, "resLevel"),
                            qp0x = a3x.u4y(f4j, "resFee");
                        if (oZ0x == 10) {
                            l4p.sv1x(qp0x, cG6A, "song");
                            break
                        }
                        l4p.lE9v({
                            tracks: [cG6A]
                        })
                    }
                    break;
                case "download":
                    l4p.Zc0x({
                        id: cG6A,
                        type: t4x
                    });
                    break;
                case "programtips":
                    if (YL9C && YL9C == 1) {
                        l4p.hR8J("鐢变簬鐗堟潈闂锛岃鑺傜洰鏆傛椂鏃犳硶鍒嗕韩銆�")
                    } else {
                        l4p.bAF6z({
                            id: bgs2x,
                            radiotype: bgr2x
                        })
                    }
                    break
            }
        }
        if (top == self)
            return;
        try {
            top.onIframeClick(d4h)
        } catch (e) {
        }
    };
    b4f.crc5h = function (d4h) {
        try {
            h4l.z4D(top.document, "mouseup")
        } catch (e) {
        }
    };
    b4f.zz3x = function () {
        var cqj5o = function () {
            var cp5u = window.innerHeight;
            if (!k4o.uU2x(cp5u))
                cp5u = (document.documentElement || document.body).clientHeight;
            return cp5u
        };
        return function (d4h) {
            if (!this.rG1x)
                return;
            var YS0x = cqj5o(),
                fQ7J = document.documentElement.scrollTop || document.body.scrollTop;
            a3x.X4b(this.rG1x, "display", fQ7J > 0 ? "" : "none");
            if (cK6E.cS6M.browser == "ie" && cK6E.cS6M.version < "7.0") {
                var gi7b = Math.min(document.body.clientHeight, YS0x + fQ7J) - 204;
                a3x.X4b(this.rG1x, "top", gi7b + "px")
            }
        }
    }
    ();
    b4f.KI6C = function (d4h) {
        h4l.ce5j(d4h);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b4f.wE2x = function () {
        var bgy2x = function (d4h) {
            h4l.z4D(window, "share", d4h)
        };
        return function (cG6A, t4x, Dp4t, T4X, Kq6k, Kp6j) {
            l4p.lP9G({
                rid: cG6A,
                type: t4x,
                purl: Dp4t,
                name: T4X,
                author: Kq6k,
                authors: Kp6j,
                onshare: bgy2x.g4k(this)
            })
        }
    }
    ();
    b4f.md9U = function (W4a, bc5h) {
        try {
            top.log(W4a, bc5h)
        } catch (e) {
            switch (W4a) {
                case "play":
                    this.kd9U.eN6H(bc5h);
                    break;
                case "search":
                    this.kd9U.bKb8T(bc5h);
                    break;
                default:
                    this.kd9U.gg7Z(W4a, bc5h)
            }
        }
    };
    b4f.bAE6y = function () {
        var YY0x,
            bgH2x = false,
            bs5x = [45, 60];
        var cqi5n = function (bF5K) {
            if (bF5K.title != "MailBoxImport")
                return;
            var Q4U = JSON.parse(bF5K.content || "null") || Y4c;
            if (Q4U.status == 10) {
                n4r.Yu9l.B4F().N4R();
                window.clearTimeout(YY0x)
            }
        };
        var sQ1x = function (d4h) {
            if (d4h.code == 200) {
                if (d4h.status == 1) {
                    h4l.q4u(p4t.xV3x, "message", cqi5n.g4k(this));
                    p4t.xV3x.B4F().bbC1x();
                    bgH2x = true
                } else {
                    if (bgH2x) {
                        if (d4h.status == 10) {
                            n4r.Yu9l.B4F().N4R();
                            h4l.iB8t(p4t.xV3x, "message");
                            window.clearTimeout(YY0x);
                            bgH2x = false
                        }
                    } else {
                        window.clearTimeout(YY0x)
                    }
                }
            }
        };
        return function () {
            var rb0x = bs5x.shift() * 1e3;
            v4z.bp5u("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: sQ1x.g4k(this)
            });
            if (rb0x) {
                YY0x = window.setTimeout(arguments.callee, rb0x)
            }
        }
    }
    ();
    b4f.pY0x = function (d4h) {
        try {
            top.polling(d4h)
        } catch (e) {
        }
    }
})()

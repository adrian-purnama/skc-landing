(self.webpackChunk = self.webpackChunk || []).push([
    ["362"],
    {
        5487: function () {
            "use strict";
            window.tram = (function (e) {
                function t(e, t) {
                    return new G.Bare().init(e, t);
                }
                function n(e) {
                    var t = parseInt(e.slice(1), 16);
                    return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
                }
                function a(e, t, n) {
                    return "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1);
                }
                function i() {}
                function o(e, t, n) {
                    if ((void 0 !== t && (n = t), void 0 === e)) return n;
                    var a = n;
                    return (
                        $.test(e) || !q.test(e)
                            ? (a = parseInt(e, 10))
                            : q.test(e) && (a = 1e3 * parseFloat(e)),
                        0 > a && (a = 0),
                        a == a ? a : n
                    );
                }
                function r(e) {
                    Q.debug && window && window.console.warn(e);
                }
                var l,
                    c,
                    d,
                    s = (function (e, t, n) {
                        function a(e) {
                            return "object" == typeof e;
                        }
                        function i(e) {
                            return "function" == typeof e;
                        }
                        function o() {}
                        return function r(l, c) {
                            function d() {
                                var e = new s();
                                return i(e.init) && e.init.apply(e, arguments), e;
                            }
                            function s() {}
                            c === n && ((c = l), (l = Object)), (d.Bare = s);
                            var u,
                                f = (o[e] = l[e]),
                                p = (s[e] = d[e] = new o());
                            return (
                                (p.constructor = d),
                                (d.mixin = function (t) {
                                    return (s[e] = d[e] = r(d, t)[e]), d;
                                }),
                                (d.open = function (e) {
                                    if (
                                        ((u = {}),
                                        i(e) ? (u = e.call(d, p, f, d, l)) : a(e) && (u = e),
                                        a(u))
                                    )
                                        for (var n in u) t.call(u, n) && (p[n] = u[n]);
                                    return i(p.init) || (p.init = l), d;
                                }),
                                d.open(c)
                            );
                        };
                    })("prototype", {}.hasOwnProperty),
                    u = {
                        ease: [
                            "ease",
                            function (e, t, n, a) {
                                var i = (e /= a) * e,
                                    o = i * e;
                                return (
                                    t +
                                    n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                                );
                            },
                        ],
                        "ease-in": [
                            "ease-in",
                            function (e, t, n, a) {
                                var i = (e /= a) * e,
                                    o = i * e;
                                return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
                            },
                        ],
                        "ease-out": [
                            "ease-out",
                            function (e, t, n, a) {
                                var i = (e /= a) * e,
                                    o = i * e;
                                return (
                                    t +
                                    n * (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                                );
                            },
                        ],
                        "ease-in-out": [
                            "ease-in-out",
                            function (e, t, n, a) {
                                var i = (e /= a) * e,
                                    o = i * e;
                                return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
                            },
                        ],
                        linear: [
                            "linear",
                            function (e, t, n, a) {
                                return (n * e) / a + t;
                            },
                        ],
                        "ease-in-quad": [
                            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                            function (e, t, n, a) {
                                return n * (e /= a) * e + t;
                            },
                        ],
                        "ease-out-quad": [
                            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                            function (e, t, n, a) {
                                return -n * (e /= a) * (e - 2) + t;
                            },
                        ],
                        "ease-in-out-quad": [
                            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                            function (e, t, n, a) {
                                return (e /= a / 2) < 1
                                    ? (n / 2) * e * e + t
                                    : (-n / 2) * (--e * (e - 2) - 1) + t;
                            },
                        ],
                        "ease-in-cubic": [
                            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                            function (e, t, n, a) {
                                return n * (e /= a) * e * e + t;
                            },
                        ],
                        "ease-out-cubic": [
                            "cubic-bezier(0.215, 0.610, 0.355, 1)",
                            function (e, t, n, a) {
                                return n * ((e = e / a - 1) * e * e + 1) + t;
                            },
                        ],
                        "ease-in-out-cubic": [
                            "cubic-bezier(0.645, 0.045, 0.355, 1)",
                            function (e, t, n, a) {
                                return (e /= a / 2) < 1
                                    ? (n / 2) * e * e * e + t
                                    : (n / 2) * ((e -= 2) * e * e + 2) + t;
                            },
                        ],
                        "ease-in-quart": [
                            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                            function (e, t, n, a) {
                                return n * (e /= a) * e * e * e + t;
                            },
                        ],
                        "ease-out-quart": [
                            "cubic-bezier(0.165, 0.840, 0.440, 1)",
                            function (e, t, n, a) {
                                return -n * ((e = e / a - 1) * e * e * e - 1) + t;
                            },
                        ],
                        "ease-in-out-quart": [
                            "cubic-bezier(0.770, 0, 0.175, 1)",
                            function (e, t, n, a) {
                                return (e /= a / 2) < 1
                                    ? (n / 2) * e * e * e * e + t
                                    : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
                            },
                        ],
                        "ease-in-quint": [
                            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                            function (e, t, n, a) {
                                return n * (e /= a) * e * e * e * e + t;
                            },
                        ],
                        "ease-out-quint": [
                            "cubic-bezier(0.230, 1, 0.320, 1)",
                            function (e, t, n, a) {
                                return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
                            },
                        ],
                        "ease-in-out-quint": [
                            "cubic-bezier(0.860, 0, 0.070, 1)",
                            function (e, t, n, a) {
                                return (e /= a / 2) < 1
                                    ? (n / 2) * e * e * e * e * e + t
                                    : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
                            },
                        ],
                        "ease-in-sine": [
                            "cubic-bezier(0.470, 0, 0.745, 0.715)",
                            function (e, t, n, a) {
                                return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
                            },
                        ],
                        "ease-out-sine": [
                            "cubic-bezier(0.390, 0.575, 0.565, 1)",
                            function (e, t, n, a) {
                                return n * Math.sin((e / a) * (Math.PI / 2)) + t;
                            },
                        ],
                        "ease-in-out-sine": [
                            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                            function (e, t, n, a) {
                                return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
                            },
                        ],
                        "ease-in-expo": [
                            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                            function (e, t, n, a) {
                                return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
                            },
                        ],
                        "ease-out-expo": [
                            "cubic-bezier(0.190, 1, 0.220, 1)",
                            function (e, t, n, a) {
                                return e === a ? t + n : n * (-Math.pow(2, (-10 * e) / a) + 1) + t;
                            },
                        ],
                        "ease-in-out-expo": [
                            "cubic-bezier(1, 0, 0, 1)",
                            function (e, t, n, a) {
                                return 0 === e
                                    ? t
                                    : e === a
                                    ? t + n
                                    : (e /= a / 2) < 1
                                    ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                                    : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
                            },
                        ],
                        "ease-in-circ": [
                            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                            function (e, t, n, a) {
                                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
                            },
                        ],
                        "ease-out-circ": [
                            "cubic-bezier(0.075, 0.820, 0.165, 1)",
                            function (e, t, n, a) {
                                return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
                            },
                        ],
                        "ease-in-out-circ": [
                            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                            function (e, t, n, a) {
                                return (e /= a / 2) < 1
                                    ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                                    : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
                            },
                        ],
                        "ease-in-back": [
                            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                            function (e, t, n, a, i) {
                                return (
                                    void 0 === i && (i = 1.70158),
                                    n * (e /= a) * e * ((i + 1) * e - i) + t
                                );
                            },
                        ],
                        "ease-out-back": [
                            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                            function (e, t, n, a, i) {
                                return (
                                    void 0 === i && (i = 1.70158),
                                    n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                                );
                            },
                        ],
                        "ease-in-out-back": [
                            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                            function (e, t, n, a, i) {
                                return (
                                    void 0 === i && (i = 1.70158),
                                    (e /= a / 2) < 1
                                        ? (n / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                                        : (n / 2) *
                                              ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                                          t
                                );
                            },
                        ],
                    },
                    f = {
                        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
                    },
                    p = window,
                    E = "bkwld-tram",
                    I = /[\-\.0-9]/g,
                    g = /[A-Z]/,
                    y = "number",
                    T = /^(rgb|#)/,
                    m = /(em|cm|mm|in|pt|pc|px)$/,
                    b = /(em|cm|mm|in|pt|pc|px|%)$/,
                    O = /(deg|rad|turn)$/,
                    _ = "unitless",
                    v = /(all|none) 0s ease 0s/,
                    h = /^(width|height)$/,
                    A = document.createElement("a"),
                    S = ["Webkit", "Moz", "O", "ms"],
                    R = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    L = function (e) {
                        if (e in A.style) return { dom: e, css: e };
                        var t,
                            n,
                            a = "",
                            i = e.split("-");
                        for (t = 0; t < i.length; t++)
                            a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                        for (t = 0; t < S.length; t++)
                            if ((n = S[t] + a) in A.style) return { dom: n, css: R[t] + e };
                    },
                    N = (t.support = {
                        bind: Function.prototype.bind,
                        transform: L("transform"),
                        transition: L("transition"),
                        backface: L("backface-visibility"),
                        timing: L("transition-timing-function"),
                    });
                if (N.transition) {
                    var C = N.timing.dom;
                    if (((A.style[C] = u["ease-in-back"][0]), !A.style[C]))
                        for (var M in f) u[M][0] = f[M];
                }
                var P = (t.frame =
                        (l =
                            p.requestAnimationFrame ||
                            p.webkitRequestAnimationFrame ||
                            p.mozRequestAnimationFrame ||
                            p.oRequestAnimationFrame ||
                            p.msRequestAnimationFrame) && N.bind
                            ? l.bind(p)
                            : function (e) {
                                  p.setTimeout(e, 16);
                              }),
                    w = (t.now =
                        (d =
                            (c = p.performance) && (c.now || c.webkitNow || c.msNow || c.mozNow)) &&
                        N.bind
                            ? d.bind(c)
                            : Date.now ||
                              function () {
                                  return +new Date();
                              }),
                    U = s(function (t) {
                        function n(e, t) {
                            var n = (function (e) {
                                    for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                                        var i = e[t];
                                        i && a.push(i);
                                    }
                                    return a;
                                })(("" + e).split(" ")),
                                a = n[0];
                            t = t || {};
                            var i = H[a];
                            if (!i) return r("Unsupported property: " + a);
                            if (!t.weak || !this.props[a]) {
                                var o = i[0],
                                    l = this.props[a];
                                return (
                                    l || (l = this.props[a] = new o.Bare()),
                                    l.init(this.$el, n, i, t),
                                    l
                                );
                            }
                        }
                        function a(e, t, a) {
                            if (e) {
                                var r = typeof e;
                                if (
                                    (t ||
                                        (this.timer && this.timer.destroy(),
                                        (this.queue = []),
                                        (this.active = !1)),
                                    "number" == r && t)
                                )
                                    return (
                                        (this.timer = new B({
                                            duration: e,
                                            context: this,
                                            complete: i,
                                        })),
                                        void (this.active = !0)
                                    );
                                if ("string" == r && t) {
                                    switch (e) {
                                        case "hide":
                                            c.call(this);
                                            break;
                                        case "stop":
                                            l.call(this);
                                            break;
                                        case "redraw":
                                            d.call(this);
                                            break;
                                        default:
                                            n.call(this, e, a && a[1]);
                                    }
                                    return i.call(this);
                                }
                                if ("function" == r) return void e.call(this, this);
                                if ("object" == r) {
                                    var f = 0;
                                    u.call(
                                        this,
                                        e,
                                        function (e, t) {
                                            e.span > f && (f = e.span), e.stop(), e.animate(t);
                                        },
                                        function (e) {
                                            "wait" in e && (f = o(e.wait, 0));
                                        }
                                    ),
                                        s.call(this),
                                        f > 0 &&
                                            ((this.timer = new B({ duration: f, context: this })),
                                            (this.active = !0),
                                            t && (this.timer.complete = i));
                                    var p = this,
                                        E = !1,
                                        I = {};
                                    P(function () {
                                        u.call(p, e, function (e) {
                                            e.active && ((E = !0), (I[e.name] = e.nextStyle));
                                        }),
                                            E && p.$el.css(I);
                                    });
                                }
                            }
                        }
                        function i() {
                            if (
                                (this.timer && this.timer.destroy(),
                                (this.active = !1),
                                this.queue.length)
                            ) {
                                var e = this.queue.shift();
                                a.call(this, e.options, !0, e.args);
                            }
                        }
                        function l(e) {
                            var t;
                            this.timer && this.timer.destroy(),
                                (this.queue = []),
                                (this.active = !1),
                                "string" == typeof e
                                    ? ((t = {})[e] = 1)
                                    : (t = "object" == typeof e && null != e ? e : this.props),
                                u.call(this, t, f),
                                s.call(this);
                        }
                        function c() {
                            l.call(this), (this.el.style.display = "none");
                        }
                        function d() {
                            this.el.offsetHeight;
                        }
                        function s() {
                            var e,
                                t,
                                n = [];
                            for (e in (this.upstream && n.push(this.upstream), this.props))
                                (t = this.props[e]).active && n.push(t.string);
                            (n = n.join(",")),
                                this.style !== n &&
                                    ((this.style = n), (this.el.style[N.transition.dom] = n));
                        }
                        function u(e, t, a) {
                            var i,
                                o,
                                r,
                                l,
                                c = t !== f,
                                d = {};
                            for (i in e)
                                (r = e[i]),
                                    i in Y
                                        ? (d.transform || (d.transform = {}), (d.transform[i] = r))
                                        : (g.test(i) &&
                                              (i = i.replace(/[A-Z]/g, function (e) {
                                                  return "-" + e.toLowerCase();
                                              })),
                                          i in H ? (d[i] = r) : (l || (l = {}), (l[i] = r)));
                            for (i in d) {
                                if (((r = d[i]), !(o = this.props[i]))) {
                                    if (!c) continue;
                                    o = n.call(this, i);
                                }
                                t.call(this, o, r);
                            }
                            a && l && a.call(this, l);
                        }
                        function f(e) {
                            e.stop();
                        }
                        function p(e, t) {
                            e.set(t);
                        }
                        function I(e) {
                            this.$el.css(e);
                        }
                        function y(e, n) {
                            t[e] = function () {
                                return this.children
                                    ? T.call(this, n, arguments)
                                    : (this.el && n.apply(this, arguments), this);
                            };
                        }
                        function T(e, t) {
                            var n,
                                a = this.children.length;
                            for (n = 0; a > n; n++) e.apply(this.children[n], t);
                            return this;
                        }
                        (t.init = function (t) {
                            if (
                                ((this.$el = e(t)),
                                (this.el = this.$el[0]),
                                (this.props = {}),
                                (this.queue = []),
                                (this.style = ""),
                                (this.active = !1),
                                Q.keepInherited && !Q.fallback)
                            ) {
                                var n = W(this.el, "transition");
                                n && !v.test(n) && (this.upstream = n);
                            }
                            N.backface && Q.hideBackface && j(this.el, N.backface.css, "hidden");
                        }),
                            y("add", n),
                            y("start", a),
                            y("wait", function (e) {
                                (e = o(e, 0)),
                                    this.active
                                        ? this.queue.push({ options: e })
                                        : ((this.timer = new B({
                                              duration: e,
                                              context: this,
                                              complete: i,
                                          })),
                                          (this.active = !0));
                            }),
                            y("then", function (e) {
                                return this.active
                                    ? (this.queue.push({ options: e, args: arguments }),
                                      void (this.timer.complete = i))
                                    : r(
                                          "No active transition timer. Use start() or wait() before then()."
                                      );
                            }),
                            y("next", i),
                            y("stop", l),
                            y("set", function (e) {
                                l.call(this, e), u.call(this, e, p, I);
                            }),
                            y("show", function (e) {
                                "string" != typeof e && (e = "block"), (this.el.style.display = e);
                            }),
                            y("hide", c),
                            y("redraw", d),
                            y("destroy", function () {
                                l.call(this), e.removeData(this.el, E), (this.$el = this.el = null);
                            });
                    }),
                    G = s(U, function (t) {
                        function n(t, n) {
                            var a = e.data(t, E) || e.data(t, E, new U.Bare());
                            return a.el || a.init(t), n ? a.start(n) : a;
                        }
                        t.init = function (t, a) {
                            var i = e(t);
                            if (!i.length) return this;
                            if (1 === i.length) return n(i[0], a);
                            var o = [];
                            return (
                                i.each(function (e, t) {
                                    o.push(n(t, a));
                                }),
                                (this.children = o),
                                this
                            );
                        };
                    }),
                    F = s(function (e) {
                        function t() {
                            var e = this.get();
                            this.update("auto");
                            var t = this.get();
                            return this.update(e), t;
                        }
                        (e.init = function (e, t, n, a) {
                            (this.$el = e), (this.el = e[0]);
                            var i,
                                r,
                                l,
                                c = t[0];
                            n[2] && (c = n[2]),
                                z[c] && (c = z[c]),
                                (this.name = c),
                                (this.type = n[1]),
                                (this.duration = o(t[1], this.duration, 500)),
                                (this.ease =
                                    ((i = t[2]),
                                    (r = this.ease),
                                    (l = "ease"),
                                    void 0 !== r && (l = r),
                                    i in u ? i : l)),
                                (this.delay = o(t[3], this.delay, 0)),
                                (this.span = this.duration + this.delay),
                                (this.active = !1),
                                (this.nextStyle = null),
                                (this.auto = h.test(this.name)),
                                (this.unit = a.unit || this.unit || Q.defaultUnit),
                                (this.angle = a.angle || this.angle || Q.defaultAngle),
                                Q.fallback || a.fallback
                                    ? (this.animate = this.fallback)
                                    : ((this.animate = this.transition),
                                      (this.string =
                                          this.name +
                                          " " +
                                          this.duration +
                                          "ms" +
                                          ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                                          (this.delay ? " " + this.delay + "ms" : "")));
                        }),
                            (e.set = function (e) {
                                (e = this.convert(e, this.type)), this.update(e), this.redraw();
                            }),
                            (e.transition = function (e) {
                                (this.active = !0),
                                    (e = this.convert(e, this.type)),
                                    this.auto &&
                                        ("auto" == this.el.style[this.name] &&
                                            (this.update(this.get()), this.redraw()),
                                        "auto" == e && (e = t.call(this))),
                                    (this.nextStyle = e);
                            }),
                            (e.fallback = function (e) {
                                var n =
                                    this.el.style[this.name] || this.convert(this.get(), this.type);
                                (e = this.convert(e, this.type)),
                                    this.auto &&
                                        ("auto" == n && (n = this.convert(this.get(), this.type)),
                                        "auto" == e && (e = t.call(this))),
                                    (this.tween = new D({
                                        from: n,
                                        to: e,
                                        duration: this.duration,
                                        delay: this.delay,
                                        ease: this.ease,
                                        update: this.update,
                                        context: this,
                                    }));
                            }),
                            (e.get = function () {
                                return W(this.el, this.name);
                            }),
                            (e.update = function (e) {
                                j(this.el, this.name, e);
                            }),
                            (e.stop = function () {
                                (this.active || this.nextStyle) &&
                                    ((this.active = !1),
                                    (this.nextStyle = null),
                                    j(this.el, this.name, this.get()));
                                var e = this.tween;
                                e && e.context && e.destroy();
                            }),
                            (e.convert = function (e, t) {
                                if ("auto" == e && this.auto) return e;
                                var n,
                                    i,
                                    o = "number" == typeof e,
                                    l = "string" == typeof e;
                                switch (t) {
                                    case y:
                                        if (o) return e;
                                        if (l && "" === e.replace(I, "")) return +e;
                                        i = "number(unitless)";
                                        break;
                                    case T:
                                        if (l) {
                                            if ("" === e && this.original) return this.original;
                                            if (t.test(e))
                                                return "#" == e.charAt(0) && 7 == e.length
                                                    ? e
                                                    : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(
                                                          e
                                                      ))
                                                          ? a(n[1], n[2], n[3])
                                                          : e
                                                      ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                                        }
                                        i = "hex or rgb string";
                                        break;
                                    case m:
                                        if (o) return e + this.unit;
                                        if (l && t.test(e)) return e;
                                        i = "number(px) or string(unit)";
                                        break;
                                    case b:
                                        if (o) return e + this.unit;
                                        if (l && t.test(e)) return e;
                                        i = "number(px) or string(unit or %)";
                                        break;
                                    case O:
                                        if (o) return e + this.angle;
                                        if (l && t.test(e)) return e;
                                        i = "number(deg) or string(angle)";
                                        break;
                                    case _:
                                        if (o || (l && b.test(e))) return e;
                                        i = "number(unitless) or string(unit or %)";
                                }
                                return (
                                    r(
                                        "Type warning: Expected: [" +
                                            i +
                                            "] Got: [" +
                                            typeof e +
                                            "] " +
                                            e
                                    ),
                                    e
                                );
                            }),
                            (e.redraw = function () {
                                this.el.offsetHeight;
                            });
                    }),
                    V = s(F, function (e, t) {
                        e.init = function () {
                            t.init.apply(this, arguments),
                                this.original || (this.original = this.convert(this.get(), T));
                        };
                    }),
                    x = s(F, function (e, t) {
                        (e.init = function () {
                            t.init.apply(this, arguments), (this.animate = this.fallback);
                        }),
                            (e.get = function () {
                                return this.$el[this.name]();
                            }),
                            (e.update = function (e) {
                                this.$el[this.name](e);
                            });
                    }),
                    k = s(F, function (e, t) {
                        function n(e, t) {
                            var n, a, i, o, r;
                            for (n in e)
                                (i = (o = Y[n])[0]),
                                    (a = o[1] || n),
                                    (r = this.convert(e[n], i)),
                                    t.call(this, a, r, i);
                        }
                        (e.init = function () {
                            t.init.apply(this, arguments),
                                this.current ||
                                    ((this.current = {}),
                                    Y.perspective &&
                                        Q.perspective &&
                                        ((this.current.perspective = Q.perspective),
                                        j(this.el, this.name, this.style(this.current)),
                                        this.redraw()));
                        }),
                            (e.set = function (e) {
                                n.call(this, e, function (e, t) {
                                    this.current[e] = t;
                                }),
                                    j(this.el, this.name, this.style(this.current)),
                                    this.redraw();
                            }),
                            (e.transition = function (e) {
                                var t = this.values(e);
                                this.tween = new X({
                                    current: this.current,
                                    values: t,
                                    duration: this.duration,
                                    delay: this.delay,
                                    ease: this.ease,
                                });
                                var n,
                                    a = {};
                                for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                                (this.active = !0), (this.nextStyle = this.style(a));
                            }),
                            (e.fallback = function (e) {
                                var t = this.values(e);
                                this.tween = new X({
                                    current: this.current,
                                    values: t,
                                    duration: this.duration,
                                    delay: this.delay,
                                    ease: this.ease,
                                    update: this.update,
                                    context: this,
                                });
                            }),
                            (e.update = function () {
                                j(this.el, this.name, this.style(this.current));
                            }),
                            (e.style = function (e) {
                                var t,
                                    n = "";
                                for (t in e) n += t + "(" + e[t] + ") ";
                                return n;
                            }),
                            (e.values = function (e) {
                                var t,
                                    a = {};
                                return (
                                    n.call(this, e, function (e, n, i) {
                                        (a[e] = n),
                                            void 0 === this.current[e] &&
                                                ((t = 0),
                                                ~e.indexOf("scale") && (t = 1),
                                                (this.current[e] = this.convert(t, i)));
                                    }),
                                    a
                                );
                            });
                    }),
                    D = s(function (t) {
                        function o() {
                            var e,
                                t,
                                n,
                                a = c.length;
                            if (a) for (P(o), t = w(), e = a; e--; ) (n = c[e]) && n.render(t);
                        }
                        var l = { ease: u.ease[1], from: 0, to: 1 };
                        (t.init = function (e) {
                            (this.duration = e.duration || 0), (this.delay = e.delay || 0);
                            var t = e.ease || l.ease;
                            u[t] && (t = u[t][1]),
                                "function" != typeof t && (t = l.ease),
                                (this.ease = t),
                                (this.update = e.update || i),
                                (this.complete = e.complete || i),
                                (this.context = e.context || this),
                                (this.name = e.name);
                            var n = e.from,
                                a = e.to;
                            void 0 === n && (n = l.from),
                                void 0 === a && (a = l.to),
                                (this.unit = e.unit || ""),
                                "number" == typeof n && "number" == typeof a
                                    ? ((this.begin = n), (this.change = a - n))
                                    : this.format(a, n),
                                (this.value = this.begin + this.unit),
                                (this.start = w()),
                                !1 !== e.autoplay && this.play();
                        }),
                            (t.play = function () {
                                this.active ||
                                    (this.start || (this.start = w()),
                                    (this.active = !0),
                                    1 === c.push(this) && P(o));
                            }),
                            (t.stop = function () {
                                var t, n;
                                this.active &&
                                    ((this.active = !1),
                                    (n = e.inArray(this, c)) >= 0 &&
                                        ((t = c.slice(n + 1)),
                                        (c.length = n),
                                        t.length && (c = c.concat(t))));
                            }),
                            (t.render = function (e) {
                                var t,
                                    n = e - this.start;
                                if (this.delay) {
                                    if (n <= this.delay) return;
                                    n -= this.delay;
                                }
                                if (n < this.duration) {
                                    var i,
                                        o,
                                        r = this.ease(n, 0, 1, this.duration);
                                    return (
                                        (t = this.startRGB
                                            ? ((i = this.startRGB),
                                              (o = this.endRGB),
                                              a(
                                                  i[0] + r * (o[0] - i[0]),
                                                  i[1] + r * (o[1] - i[1]),
                                                  i[2] + r * (o[2] - i[2])
                                              ))
                                            : Math.round((this.begin + r * this.change) * d) / d),
                                        (this.value = t + this.unit),
                                        void this.update.call(this.context, this.value)
                                    );
                                }
                                (t = this.endHex || this.begin + this.change),
                                    (this.value = t + this.unit),
                                    this.update.call(this.context, this.value),
                                    this.complete.call(this.context),
                                    this.destroy();
                            }),
                            (t.format = function (e, t) {
                                if (((t += ""), "#" == (e += "").charAt(0)))
                                    return (
                                        (this.startRGB = n(t)),
                                        (this.endRGB = n(e)),
                                        (this.endHex = e),
                                        (this.begin = 0),
                                        void (this.change = 1)
                                    );
                                if (!this.unit) {
                                    var a = t.replace(I, "");
                                    a !== e.replace(I, "") &&
                                        r("Units do not match [tween]: " + t + ", " + e),
                                        (this.unit = a);
                                }
                                (t = parseFloat(t)),
                                    (e = parseFloat(e)),
                                    (this.begin = this.value = t),
                                    (this.change = e - t);
                            }),
                            (t.destroy = function () {
                                this.stop(),
                                    (this.context = null),
                                    (this.ease = this.update = this.complete = i);
                            });
                        var c = [],
                            d = 1e3;
                    }),
                    B = s(D, function (e) {
                        (e.init = function (e) {
                            (this.duration = e.duration || 0),
                                (this.complete = e.complete || i),
                                (this.context = e.context),
                                this.play();
                        }),
                            (e.render = function (e) {
                                e - this.start < this.duration ||
                                    (this.complete.call(this.context), this.destroy());
                            });
                    }),
                    X = s(D, function (e, t) {
                        (e.init = function (e) {
                            var t, n;
                            for (t in ((this.context = e.context),
                            (this.update = e.update),
                            (this.tweens = []),
                            (this.current = e.current),
                            e.values))
                                (n = e.values[t]),
                                    this.current[t] !== n &&
                                        this.tweens.push(
                                            new D({
                                                name: t,
                                                from: this.current[t],
                                                to: n,
                                                duration: e.duration,
                                                delay: e.delay,
                                                ease: e.ease,
                                                autoplay: !1,
                                            })
                                        );
                            this.play();
                        }),
                            (e.render = function (e) {
                                var t,
                                    n,
                                    a = this.tweens.length,
                                    i = !1;
                                for (t = a; t--; )
                                    (n = this.tweens[t]).context &&
                                        (n.render(e), (this.current[n.name] = n.value), (i = !0));
                                return i
                                    ? void (this.update && this.update.call(this.context))
                                    : this.destroy();
                            }),
                            (e.destroy = function () {
                                if ((t.destroy.call(this), this.tweens)) {
                                    var e;
                                    for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                                    (this.tweens = null), (this.current = null);
                                }
                            });
                    }),
                    Q = (t.config = {
                        debug: !1,
                        defaultUnit: "px",
                        defaultAngle: "deg",
                        keepInherited: !1,
                        hideBackface: !1,
                        perspective: "",
                        fallback: !N.transition,
                        agentTests: [],
                    });
                (t.fallback = function (e) {
                    if (!N.transition) return (Q.fallback = !0);
                    Q.agentTests.push("(" + e + ")");
                    var t = RegExp(Q.agentTests.join("|"), "i");
                    Q.fallback = t.test(navigator.userAgent);
                }),
                    t.fallback("6.0.[2-5] Safari"),
                    (t.tween = function (e) {
                        return new D(e);
                    }),
                    (t.delay = function (e, t, n) {
                        return new B({ complete: t, duration: e, context: n });
                    }),
                    (e.fn.tram = function (e) {
                        return t.call(null, this, e);
                    });
                var j = e.style,
                    W = e.css,
                    z = { transform: N.transform && N.transform.css },
                    H = {
                        color: [V, T],
                        background: [V, T, "background-color"],
                        "outline-color": [V, T],
                        "border-color": [V, T],
                        "border-top-color": [V, T],
                        "border-right-color": [V, T],
                        "border-bottom-color": [V, T],
                        "border-left-color": [V, T],
                        "border-width": [F, m],
                        "border-top-width": [F, m],
                        "border-right-width": [F, m],
                        "border-bottom-width": [F, m],
                        "border-left-width": [F, m],
                        "border-spacing": [F, m],
                        "letter-spacing": [F, m],
                        margin: [F, m],
                        "margin-top": [F, m],
                        "margin-right": [F, m],
                        "margin-bottom": [F, m],
                        "margin-left": [F, m],
                        padding: [F, m],
                        "padding-top": [F, m],
                        "padding-right": [F, m],
                        "padding-bottom": [F, m],
                        "padding-left": [F, m],
                        "outline-width": [F, m],
                        opacity: [F, y],
                        top: [F, b],
                        right: [F, b],
                        bottom: [F, b],
                        left: [F, b],
                        "font-size": [F, b],
                        "text-indent": [F, b],
                        "word-spacing": [F, b],
                        width: [F, b],
                        "min-width": [F, b],
                        "max-width": [F, b],
                        height: [F, b],
                        "min-height": [F, b],
                        "max-height": [F, b],
                        "line-height": [F, _],
                        "scroll-top": [x, y, "scrollTop"],
                        "scroll-left": [x, y, "scrollLeft"],
                    },
                    Y = {};
                N.transform &&
                    ((H.transform = [k]),
                    (Y = {
                        x: [b, "translateX"],
                        y: [b, "translateY"],
                        rotate: [O],
                        rotateX: [O],
                        rotateY: [O],
                        scale: [y],
                        scaleX: [y],
                        scaleY: [y],
                        skew: [O],
                        skewX: [O],
                        skewY: [O],
                    })),
                    N.transform &&
                        N.backface &&
                        ((Y.z = [b, "translateZ"]),
                        (Y.rotateZ = [O]),
                        (Y.scaleZ = [y]),
                        (Y.perspective = [m]));
                var $ = /ms/,
                    q = /s|\./;
                return (e.tram = t);
            })(window.jQuery);
        },
        5756: function (e, t, n) {
            "use strict";
            var a,
                i,
                o,
                r,
                l,
                c,
                d,
                s,
                u,
                f,
                p,
                E,
                I,
                g,
                y,
                T,
                m,
                b,
                O,
                _,
                v = window.$,
                h = n(5487) && v.tram;
            ((a = {}).VERSION = "1.6.0-Webflow"),
                (i = {}),
                (o = Array.prototype),
                (r = Object.prototype),
                (l = Function.prototype),
                o.push,
                (c = o.slice),
                o.concat,
                r.toString,
                (d = r.hasOwnProperty),
                (s = o.forEach),
                (u = o.map),
                o.reduce,
                o.reduceRight,
                (f = o.filter),
                o.every,
                (p = o.some),
                (E = o.indexOf),
                o.lastIndexOf,
                (I = Object.keys),
                l.bind,
                (g =
                    a.each =
                    a.forEach =
                        function (e, t, n) {
                            if (null == e) return e;
                            if (s && e.forEach === s) e.forEach(t, n);
                            else if (e.length === +e.length) {
                                for (var o = 0, r = e.length; o < r; o++)
                                    if (t.call(n, e[o], o, e) === i) return;
                            } else
                                for (var l = a.keys(e), o = 0, r = l.length; o < r; o++)
                                    if (t.call(n, e[l[o]], l[o], e) === i) return;
                            return e;
                        }),
                (a.map = a.collect =
                    function (e, t, n) {
                        var a = [];
                        return null == e
                            ? a
                            : u && e.map === u
                            ? e.map(t, n)
                            : (g(e, function (e, i, o) {
                                  a.push(t.call(n, e, i, o));
                              }),
                              a);
                    }),
                (a.find = a.detect =
                    function (e, t, n) {
                        var a;
                        return (
                            y(e, function (e, i, o) {
                                if (t.call(n, e, i, o)) return (a = e), !0;
                            }),
                            a
                        );
                    }),
                (a.filter = a.select =
                    function (e, t, n) {
                        var a = [];
                        return null == e
                            ? a
                            : f && e.filter === f
                            ? e.filter(t, n)
                            : (g(e, function (e, i, o) {
                                  t.call(n, e, i, o) && a.push(e);
                              }),
                              a);
                    }),
                (y =
                    a.some =
                    a.any =
                        function (e, t, n) {
                            t || (t = a.identity);
                            var o = !1;
                            return null == e
                                ? o
                                : p && e.some === p
                                ? e.some(t, n)
                                : (g(e, function (e, a, r) {
                                      if (o || (o = t.call(n, e, a, r))) return i;
                                  }),
                                  !!o);
                        }),
                (a.contains = a.include =
                    function (e, t) {
                        return (
                            null != e &&
                            (E && e.indexOf === E
                                ? -1 != e.indexOf(t)
                                : y(e, function (e) {
                                      return e === t;
                                  }))
                        );
                    }),
                (a.delay = function (e, t) {
                    var n = c.call(arguments, 2);
                    return setTimeout(function () {
                        return e.apply(null, n);
                    }, t);
                }),
                (a.defer = function (e) {
                    return a.delay.apply(a, [e, 1].concat(c.call(arguments, 1)));
                }),
                (a.throttle = function (e) {
                    var t, n, a;
                    return function () {
                        t ||
                            ((t = !0),
                            (n = arguments),
                            (a = this),
                            h.frame(function () {
                                (t = !1), e.apply(a, n);
                            }));
                    };
                }),
                (a.debounce = function (e, t, n) {
                    var i,
                        o,
                        r,
                        l,
                        c,
                        d = function () {
                            var s = a.now() - l;
                            s < t
                                ? (i = setTimeout(d, t - s))
                                : ((i = null), n || ((c = e.apply(r, o)), (r = o = null)));
                        };
                    return function () {
                        (r = this), (o = arguments), (l = a.now());
                        var s = n && !i;
                        return (
                            i || (i = setTimeout(d, t)),
                            s && ((c = e.apply(r, o)), (r = o = null)),
                            c
                        );
                    };
                }),
                (a.defaults = function (e) {
                    if (!a.isObject(e)) return e;
                    for (var t = 1, n = arguments.length; t < n; t++) {
                        var i = arguments[t];
                        for (var o in i) void 0 === e[o] && (e[o] = i[o]);
                    }
                    return e;
                }),
                (a.keys = function (e) {
                    if (!a.isObject(e)) return [];
                    if (I) return I(e);
                    var t = [];
                    for (var n in e) a.has(e, n) && t.push(n);
                    return t;
                }),
                (a.has = function (e, t) {
                    return d.call(e, t);
                }),
                (a.isObject = function (e) {
                    return e === Object(e);
                }),
                (a.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    }),
                (a.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g,
                }),
                (T = /(.)^/),
                (m = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029",
                }),
                (b = /\\|'|\r|\n|\u2028|\u2029/g),
                (O = function (e) {
                    return "\\" + m[e];
                }),
                (_ = /^\s*(\w|\$)+\s*$/),
                (a.template = function (e, t, n) {
                    !t && n && (t = n);
                    var i,
                        o = RegExp(
                            [
                                ((t = a.defaults({}, t, a.templateSettings)).escape || T).source,
                                (t.interpolate || T).source,
                                (t.evaluate || T).source,
                            ].join("|") + "|$",
                            "g"
                        ),
                        r = 0,
                        l = "__p+='";
                    e.replace(o, function (t, n, a, i, o) {
                        return (
                            (l += e.slice(r, o).replace(b, O)),
                            (r = o + t.length),
                            n
                                ? (l += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                                : a
                                ? (l += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                                : i && (l += "';\n" + i + "\n__p+='"),
                            t
                        );
                    }),
                        (l += "';\n");
                    var c = t.variable;
                    if (c) {
                        if (!_.test(c)) throw Error("variable is not a bare identifier: " + c);
                    } else (l = "with(obj||{}){\n" + l + "}\n"), (c = "obj");
                    l =
                        "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                        l +
                        "return __p;\n";
                    try {
                        i = Function(t.variable || "obj", "_", l);
                    } catch (e) {
                        throw ((e.source = l), e);
                    }
                    var d = function (e) {
                        return i.call(this, e, a);
                    };
                    return (d.source = "function(" + c + "){\n" + l + "}"), d;
                }),
                (e.exports = a);
        },
        9461: function (e, t, n) {
            "use strict";
            var a = n(3949);
            a.define(
                "brand",
                (e.exports = function (e) {
                    var t,
                        n = {},
                        i = document,
                        o = e("html"),
                        r = e("body"),
                        l = window.location,
                        c = /PhantomJS/i.test(navigator.userAgent),
                        d =
                            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
                    function s() {
                        var n =
                            i.fullScreen ||
                            i.mozFullScreen ||
                            i.webkitIsFullScreen ||
                            i.msFullscreenElement ||
                            !!i.webkitFullscreenElement;
                        e(t).attr("style", n ? "display: none !important;" : "");
                    }
                    // function u() {
                    //     var e = r.children(".w-webflow-badge"),
                    //         n = e.length && e.get(0) === t,
                    //         i = a.env("editor");
                    //     if (n) {
                    //         i && e.remove();
                    //         return;
                    //     }
                    //     e.length && e.remove(), i || r.append(t);
                    // }
                    return (
                        (n.ready = function () {
                            var n,
                                a,
                                r,
                                f = o.attr("data-wf-status"),
                                p = o.attr("data-wf-domain") || "";
                            /\.webflow\.io$/i.test(p) && l.hostname !== p && (f = !0),
                                f &&
                                    !c &&
                                    ((t =
                                        t ||
                                        ((n = e('<a class="w-webflow-badge"></a>').attr(
                                            "href",
                                            "https://webflow.com?utm_campaign=brandjs"
                                        )),
                                        (a = e("<img>")
                                            .attr(
                                                "src",
                                                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                                            )
                                            .attr("alt", "")
                                            .css({ marginRight: "4px", width: "26px" })),
                                        (r = e("<img>")
                                            .attr(
                                                "src",
                                                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                                            )
                                            .attr("alt", "Made in Webflow")),
                                        n.append(a, r),
                                        n[0])),
                                    u(),
                                    setTimeout(u, 500),
                                    e(i).off(d, s).on(d, s));
                        }),
                        n
                    );
                })
            );
        },
        322: function (e, t, n) {
            "use strict";
            var a = n(3949);
            a.define(
                "edit",
                (e.exports = function (e, t, n) {
                    if (
                        ((n = n || {}),
                        (a.env("test") || a.env("frame")) &&
                            !n.fixture &&
                            !(function () {
                                try {
                                    return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                                } catch (e) {
                                    return !1;
                                }
                            })())
                    )
                        return { exit: 1 };
                    var i,
                        o = e(window),
                        r = e(document.documentElement),
                        l = document.location,
                        c = "hashchange",
                        d =
                            n.load ||
                            function () {
                                var t, n, a;
                                (i = !0),
                                    (window.WebflowEditor = !0),
                                    o.off(c, u),
                                    (t = function (t) {
                                        var n;
                                        e.ajax({
                                            url: p(
                                                "https://editor-api.webflow.com/api/editor/view"
                                            ),
                                            data: { siteId: r.attr("data-wf-site") },
                                            xhrFields: { withCredentials: !0 },
                                            dataType: "json",
                                            crossDomain: !0,
                                            success:
                                                ((n = t),
                                                function (t) {
                                                    var a, i, o;
                                                    if (!t)
                                                        return void console.error(
                                                            "Could not load editor data"
                                                        );
                                                    (t.thirdPartyCookiesSupported = n),
                                                        (i =
                                                            (a = t.scriptPath).indexOf("//") >= 0
                                                                ? a
                                                                : p(
                                                                      "https://editor-api.webflow.com" +
                                                                          a
                                                                  )),
                                                        (o = function () {
                                                            window.WebflowEditor(t);
                                                        }),
                                                        e
                                                            .ajax({
                                                                type: "GET",
                                                                url: i,
                                                                dataType: "script",
                                                                cache: !0,
                                                            })
                                                            .then(o, f);
                                                }),
                                        });
                                    }),
                                    ((n = window.document.createElement("iframe")).src =
                                        "https://webflow.com/site/third-party-cookie-check.html"),
                                    (n.style.display = "none"),
                                    (n.sandbox = "allow-scripts allow-same-origin"),
                                    (a = function (e) {
                                        "WF_third_party_cookies_unsupported" === e.data
                                            ? (E(n, a), t(!1))
                                            : "WF_third_party_cookies_supported" === e.data &&
                                              (E(n, a), t(!0));
                                    }),
                                    (n.onerror = function () {
                                        E(n, a), t(!1);
                                    }),
                                    window.addEventListener("message", a, !1),
                                    window.document.body.appendChild(n);
                            },
                        s = !1;
                    try {
                        s =
                            localStorage &&
                            localStorage.getItem &&
                            localStorage.getItem("WebflowEditor");
                    } catch (e) {}
                    function u() {
                        !i && /\?edit/.test(l.hash) && d();
                    }
                    function f(e, t, n) {
                        throw (console.error("Could not load editor script: " + t), n);
                    }
                    function p(e) {
                        return e.replace(/([^:])\/\//g, "$1/");
                    }
                    function E(e, t) {
                        window.removeEventListener("message", t, !1), e.remove();
                    }
                    return (
                        s
                            ? d()
                            : l.search
                            ? (/[?&](edit)(?:[=&?]|$)/.test(l.search) || /\?edit$/.test(l.href)) &&
                              d()
                            : o.on(c, u).triggerHandler(c),
                        {}
                    );
                })
            );
        },
        2338: function (e, t, n) {
            "use strict";
            n(3949).define(
                "focus-visible",
                (e.exports = function () {
                    return {
                        ready: function () {
                            if ("undefined" != typeof document)
                                try {
                                    document.querySelector(":focus-visible");
                                } catch (e) {
                                    !(function (e) {
                                        var t = !0,
                                            n = !1,
                                            a = null,
                                            i = {
                                                text: !0,
                                                search: !0,
                                                url: !0,
                                                tel: !0,
                                                email: !0,
                                                password: !0,
                                                number: !0,
                                                date: !0,
                                                month: !0,
                                                week: !0,
                                                time: !0,
                                                datetime: !0,
                                                "datetime-local": !0,
                                            };
                                        function o(e) {
                                            return (
                                                !!e &&
                                                e !== document &&
                                                "HTML" !== e.nodeName &&
                                                "BODY" !== e.nodeName &&
                                                "classList" in e &&
                                                "contains" in e.classList
                                            );
                                        }
                                        function r(e) {
                                            e.getAttribute("data-wf-focus-visible") ||
                                                e.setAttribute("data-wf-focus-visible", "true");
                                        }
                                        function l() {
                                            t = !1;
                                        }
                                        function c() {
                                            document.addEventListener("mousemove", d),
                                                document.addEventListener("mousedown", d),
                                                document.addEventListener("mouseup", d),
                                                document.addEventListener("pointermove", d),
                                                document.addEventListener("pointerdown", d),
                                                document.addEventListener("pointerup", d),
                                                document.addEventListener("touchmove", d),
                                                document.addEventListener("touchstart", d),
                                                document.addEventListener("touchend", d);
                                        }
                                        function d(e) {
                                            (e.target.nodeName &&
                                                "html" === e.target.nodeName.toLowerCase()) ||
                                                ((t = !1),
                                                document.removeEventListener("mousemove", d),
                                                document.removeEventListener("mousedown", d),
                                                document.removeEventListener("mouseup", d),
                                                document.removeEventListener("pointermove", d),
                                                document.removeEventListener("pointerdown", d),
                                                document.removeEventListener("pointerup", d),
                                                document.removeEventListener("touchmove", d),
                                                document.removeEventListener("touchstart", d),
                                                document.removeEventListener("touchend", d));
                                        }
                                        document.addEventListener(
                                            "keydown",
                                            function (n) {
                                                n.metaKey ||
                                                    n.altKey ||
                                                    n.ctrlKey ||
                                                    (o(e.activeElement) && r(e.activeElement),
                                                    (t = !0));
                                            },
                                            !0
                                        ),
                                            document.addEventListener("mousedown", l, !0),
                                            document.addEventListener("pointerdown", l, !0),
                                            document.addEventListener("touchstart", l, !0),
                                            document.addEventListener(
                                                "visibilitychange",
                                                function () {
                                                    "hidden" === document.visibilityState &&
                                                        (n && (t = !0), c());
                                                },
                                                !0
                                            ),
                                            c(),
                                            e.addEventListener(
                                                "focus",
                                                function (e) {
                                                    if (o(e.target)) {
                                                        var n, a, l;
                                                        (t ||
                                                            ((a = (n = e.target).type),
                                                            ("INPUT" === (l = n.tagName) &&
                                                                i[a] &&
                                                                !n.readOnly) ||
                                                                ("TEXTAREA" === l && !n.readOnly) ||
                                                                n.isContentEditable ||
                                                                0)) &&
                                                            r(e.target);
                                                    }
                                                },
                                                !0
                                            ),
                                            e.addEventListener(
                                                "blur",
                                                function (e) {
                                                    if (
                                                        o(e.target) &&
                                                        e.target.hasAttribute(
                                                            "data-wf-focus-visible"
                                                        )
                                                    ) {
                                                        var t;
                                                        (n = !0),
                                                            window.clearTimeout(a),
                                                            (a = window.setTimeout(function () {
                                                                n = !1;
                                                            }, 100)),
                                                            (t = e.target).getAttribute(
                                                                "data-wf-focus-visible"
                                                            ) &&
                                                                t.removeAttribute(
                                                                    "data-wf-focus-visible"
                                                                );
                                                    }
                                                },
                                                !0
                                            );
                                    })(document);
                                }
                        },
                    };
                })
            );
        },
        8334: function (e, t, n) {
            "use strict";
            var a = n(3949);
            a.define(
                "focus",
                (e.exports = function () {
                    var e = [],
                        t = !1;
                    function n(n) {
                        t &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            n.stopImmediatePropagation(),
                            e.unshift(n));
                    }
                    function i(n) {
                        var a, i;
                        (i = (a = n.target).tagName),
                            ((/^a$/i.test(i) && null != a.href) ||
                                (/^(button|textarea)$/i.test(i) && !0 !== a.disabled) ||
                                (/^input$/i.test(i) &&
                                    /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
                                    !a.disabled) ||
                                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                                    !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                                /^audio$/i.test(i) ||
                                (/^video$/i.test(i) && !0 === a.controls)) &&
                                ((t = !0),
                                setTimeout(() => {
                                    for (t = !1, n.target.focus(); e.length > 0; ) {
                                        var a = e.pop();
                                        a.target.dispatchEvent(new MouseEvent(a.type, a));
                                    }
                                }, 0));
                    }
                    return {
                        ready: function () {
                            "undefined" != typeof document &&
                                document.body.hasAttribute("data-wf-focus-within") &&
                                a.env.safari &&
                                (document.addEventListener("mousedown", i, !0),
                                document.addEventListener("mouseup", n, !0),
                                document.addEventListener("click", n, !0));
                        },
                    };
                })
            );
        },
        7199: function (e) {
            "use strict";
            var t = window.jQuery,
                n = {},
                a = [],
                i = ".w-ix",
                o = {
                    reset: function (e, t) {
                        t.__wf_intro = null;
                    },
                    intro: function (e, a) {
                        a.__wf_intro || ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
                    },
                    outro: function (e, a) {
                        a.__wf_intro && ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
                    },
                };
            (n.triggers = {}),
                (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
                (n.init = function () {
                    for (var e = a.length, i = 0; i < e; i++) {
                        var r = a[i];
                        r[0](0, r[1]);
                    }
                    (a = []), t.extend(n.triggers, o);
                }),
                (n.async = function () {
                    for (var e in o) {
                        var t = o[e];
                        o.hasOwnProperty(e) &&
                            (n.triggers[e] = function (e, n) {
                                a.push([t, n]);
                            });
                    }
                }),
                n.async(),
                (e.exports = n);
        },
        5134: function (e, t, n) {
            "use strict";
            var a = n(7199);
            function i(e, t) {
                var n = document.createEvent("CustomEvent");
                n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
            }
            var o = window.jQuery,
                r = {},
                l = ".w-ix";
            (r.triggers = {}),
                (r.types = { INTRO: "w-ix-intro" + l, OUTRO: "w-ix-outro" + l }),
                o.extend(r.triggers, {
                    reset: function (e, t) {
                        a.triggers.reset(e, t);
                    },
                    intro: function (e, t) {
                        a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
                    },
                    outro: function (e, t) {
                        a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
                    },
                }),
                (e.exports = r);
        },
        941: function (e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(6011);
            i.setEnv(a.env),
                a.define(
                    "ix2",
                    (e.exports = function () {
                        return i;
                    })
                );
        },
        3949: function (e, t, n) {
            "use strict";
            var a,
                i,
                o = {},
                r = {},
                l = [],
                c = window.Webflow || [],
                d = window.jQuery,
                s = d(window),
                u = d(document),
                f = d.isFunction,
                p = (o._ = n(5756)),
                E = (o.tram = n(5487) && d.tram),
                I = !1,
                g = !1;
            function y(e) {
                o.env() &&
                    (f(e.design) && s.on("__wf_design", e.design),
                    f(e.preview) && s.on("__wf_preview", e.preview)),
                    f(e.destroy) && s.on("__wf_destroy", e.destroy),
                    e.ready &&
                        f(e.ready) &&
                        (function (e) {
                            if (I) return e.ready();
                            p.contains(l, e.ready) || l.push(e.ready);
                        })(e);
            }
            function T(e) {
                var t;
                f(e.design) && s.off("__wf_design", e.design),
                    f(e.preview) && s.off("__wf_preview", e.preview),
                    f(e.destroy) && s.off("__wf_destroy", e.destroy),
                    e.ready &&
                        f(e.ready) &&
                        ((t = e),
                        (l = p.filter(l, function (e) {
                            return e !== t.ready;
                        })));
            }
            (E.config.hideBackface = !1),
                (E.config.keepInherited = !0),
                (o.define = function (e, t, n) {
                    r[e] && T(r[e]);
                    var a = (r[e] = t(d, p, n) || {});
                    return y(a), a;
                }),
                (o.require = function (e) {
                    return r[e];
                }),
                (o.push = function (e) {
                    if (I) {
                        f(e) && e();
                        return;
                    }
                    c.push(e);
                }),
                (o.env = function (e) {
                    var t = window.__wf_design,
                        n = void 0 !== t;
                    return e
                        ? "design" === e
                            ? n && t
                            : "preview" === e
                            ? n && !t
                            : "slug" === e
                            ? n && window.__wf_slug
                            : "editor" === e
                            ? window.WebflowEditor
                            : "test" === e
                            ? window.__wf_test
                            : "frame" === e
                            ? window !== window.top
                            : void 0
                        : n;
                });
            var m = navigator.userAgent.toLowerCase(),
                b = (o.env.touch =
                    "ontouchstart" in window ||
                    (window.DocumentTouch && document instanceof window.DocumentTouch)),
                O = (o.env.chrome =
                    /chrome/.test(m) &&
                    /Google/.test(navigator.vendor) &&
                    parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
                _ = (o.env.ios = /(ipod|iphone|ipad)/.test(m));
            (o.env.safari = /safari/.test(m) && !O && !_),
                b &&
                    u.on("touchstart mousedown", function (e) {
                        a = e.target;
                    }),
                (o.validClick = b
                    ? function (e) {
                          return e === a || d.contains(e, a);
                      }
                    : function () {
                          return !0;
                      });
            var v = "resize.webflow orientationchange.webflow load.webflow",
                h = "scroll.webflow " + v;
            function A(e, t) {
                var n = [],
                    a = {};
                return (
                    (a.up = p.throttle(function (e) {
                        p.each(n, function (t) {
                            t(e);
                        });
                    })),
                    e && t && e.on(t, a.up),
                    (a.on = function (e) {
                        "function" == typeof e && (p.contains(n, e) || n.push(e));
                    }),
                    (a.off = function (e) {
                        if (!arguments.length) {
                            n = [];
                            return;
                        }
                        n = p.filter(n, function (t) {
                            return t !== e;
                        });
                    }),
                    a
                );
            }
            function S(e) {
                f(e) && e();
            }
            function R() {
                i && (i.reject(), s.off("load", i.resolve)),
                    (i = new d.Deferred()),
                    s.on("load", i.resolve);
            }
            (o.resize = A(s, v)),
                (o.scroll = A(s, h)),
                (o.redraw = A()),
                (o.location = function (e) {
                    window.location = e;
                }),
                o.env() && (o.location = function () {}),
                (o.ready = function () {
                    (I = !0),
                        g ? ((g = !1), p.each(r, y)) : p.each(l, S),
                        p.each(c, S),
                        o.resize.up();
                }),
                (o.load = function (e) {
                    i.then(e);
                }),
                (o.destroy = function (e) {
                    (e = e || {}),
                        (g = !0),
                        s.triggerHandler("__wf_destroy"),
                        null != e.domready && (I = e.domready),
                        p.each(r, T),
                        o.resize.off(),
                        o.scroll.off(),
                        o.redraw.off(),
                        (l = []),
                        (c = []),
                        "pending" === i.state() && R();
                }),
                d(o.ready),
                R(),
                (e.exports = window.Webflow = o);
        },
        7624: function (e, t, n) {
            "use strict";
            var a = n(3949);
            a.define(
                "links",
                (e.exports = function (e, t) {
                    var n,
                        i,
                        o,
                        r = {},
                        l = e(window),
                        c = a.env(),
                        d = window.location,
                        s = document.createElement("a"),
                        u = "w--current",
                        f = /index\.(html|php)$/,
                        p = /\/$/;
                    function E() {
                        var e = l.scrollTop(),
                            n = l.height();
                        t.each(i, function (t) {
                            if (!t.link.attr("hreflang")) {
                                var a = t.link,
                                    i = t.sec,
                                    o = i.offset().top,
                                    r = i.outerHeight(),
                                    l = 0.5 * n,
                                    c = i.is(":visible") && o + r - l >= e && o + l <= e + n;
                                t.active !== c && ((t.active = c), I(a, u, c));
                            }
                        });
                    }
                    function I(e, t, n) {
                        var a = e.hasClass(t);
                        (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t));
                    }
                    return (
                        (r.ready =
                            r.design =
                            r.preview =
                                function () {
                                    (n = c && a.env("design")),
                                        (o = a.env("slug") || d.pathname || ""),
                                        a.scroll.off(E),
                                        (i = []);
                                    for (var t = document.links, r = 0; r < t.length; ++r)
                                        !(function (t) {
                                            if (!t.getAttribute("hreflang")) {
                                                var a =
                                                    (n && t.getAttribute("href-disabled")) ||
                                                    t.getAttribute("href");
                                                if (((s.href = a), !(a.indexOf(":") >= 0))) {
                                                    var r = e(t);
                                                    if (
                                                        s.hash.length > 1 &&
                                                        s.host + s.pathname === d.host + d.pathname
                                                    ) {
                                                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                                            return;
                                                        var l = e(s.hash);
                                                        l.length &&
                                                            i.push({ link: r, sec: l, active: !1 });
                                                        return;
                                                    }
                                                    "#" !== a &&
                                                        "" !== a &&
                                                        I(
                                                            r,
                                                            u,
                                                            s.href === d.href ||
                                                                a === o ||
                                                                (f.test(a) && p.test(o))
                                                        );
                                                }
                                            }
                                        })(t[r]);
                                    i.length && (a.scroll.on(E), E());
                                }),
                        r
                    );
                })
            );
        },
        286: function (e, t, n) {
            "use strict";
            var a = n(3949);
            a.define(
                "scroll",
                (e.exports = function (e) {
                    var t = {
                            WF_CLICK_EMPTY: "click.wf-empty-link",
                            WF_CLICK_SCROLL: "click.wf-scroll",
                        },
                        n = window.location,
                        i = !(function () {
                            try {
                                return !!window.frameElement;
                            } catch (e) {
                                return !0;
                            }
                        })()
                            ? window.history
                            : null,
                        o = e(window),
                        r = e(document),
                        l = e(document.body),
                        c =
                            window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            function (e) {
                                window.setTimeout(e, 15);
                            },
                        d = a.env("editor") ? ".w-editor-body" : "body",
                        s = "header, " + d + " > .header, " + d + " > .w-nav:not([data-no-scroll])",
                        u = 'a[href="#"]',
                        f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
                        p = document.createElement("style");
                    p.appendChild(
                        document.createTextNode(
                            '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
                        )
                    );
                    var E = /^#[a-zA-Z0-9][\w:.-]*$/;
                    let I =
                        "function" == typeof window.matchMedia &&
                        window.matchMedia("(prefers-reduced-motion: reduce)");
                    function g(e, t) {
                        var n;
                        switch (t) {
                            case "add":
                                (n = e.attr("tabindex"))
                                    ? e.attr("data-wf-tabindex-swap", n)
                                    : e.attr("tabindex", "-1");
                                break;
                            case "remove":
                                (n = e.attr("data-wf-tabindex-swap"))
                                    ? (e.attr("tabindex", n), e.removeAttr("data-wf-tabindex-swap"))
                                    : e.removeAttr("tabindex");
                        }
                        e.toggleClass("wf-force-outline-none", "add" === t);
                    }
                    function y(t) {
                        var r = t.currentTarget;
                        if (
                            !(
                                a.env("design") ||
                                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))
                            )
                        ) {
                            var d =
                                E.test(r.hash) && r.host + r.pathname === n.host + n.pathname
                                    ? r.hash
                                    : "";
                            if ("" !== d) {
                                var u,
                                    f = e(d);
                                f.length &&
                                    (t && (t.preventDefault(), t.stopPropagation()),
                                    (u = d),
                                    n.hash !== u &&
                                        i &&
                                        i.pushState &&
                                        !(a.env.chrome && "file:" === n.protocol) &&
                                        (i.state && i.state.hash) !== u &&
                                        i.pushState({ hash: u }, "", u),
                                    window.setTimeout(function () {
                                        !(function (t, n) {
                                            var a = o.scrollTop(),
                                                i = (function (t) {
                                                    var n = e(s),
                                                        a =
                                                            "fixed" === n.css("position")
                                                                ? n.outerHeight()
                                                                : 0,
                                                        i = t.offset().top - a;
                                                    if ("mid" === t.data("scroll")) {
                                                        var r = o.height() - a,
                                                            l = t.outerHeight();
                                                        l < r && (i -= Math.round((r - l) / 2));
                                                    }
                                                    return i;
                                                })(t);
                                            if (a !== i) {
                                                var r = (function (e, t, n) {
                                                        if (
                                                            "none" ===
                                                                document.body.getAttribute(
                                                                    "data-wf-scroll-motion"
                                                                ) ||
                                                            I.matches
                                                        )
                                                            return 0;
                                                        var a = 1;
                                                        return (
                                                            l.add(e).each(function (e, t) {
                                                                var n = parseFloat(
                                                                    t.getAttribute(
                                                                        "data-scroll-time"
                                                                    )
                                                                );
                                                                !isNaN(n) && n >= 0 && (a = n);
                                                            }),
                                                            (472.143 *
                                                                Math.log(Math.abs(t - n) + 125) -
                                                                2e3) *
                                                                a
                                                        );
                                                    })(t, a, i),
                                                    d = Date.now(),
                                                    u = function () {
                                                        var e,
                                                            t,
                                                            o,
                                                            l,
                                                            s,
                                                            f = Date.now() - d;
                                                        window.scroll(
                                                            0,
                                                            ((e = a),
                                                            (t = i),
                                                            (o = f) > (l = r)
                                                                ? t
                                                                : e +
                                                                  (t - e) *
                                                                      ((s = o / l) < 0.5
                                                                          ? 4 * s * s * s
                                                                          : (s - 1) *
                                                                                (2 * s - 2) *
                                                                                (2 * s - 2) +
                                                                            1))
                                                        ),
                                                            f <= r
                                                                ? c(u)
                                                                : "function" == typeof n && n();
                                                    };
                                                c(u);
                                            }
                                        })(f, function () {
                                            g(f, "add"),
                                                f.get(0).focus({ preventScroll: !0 }),
                                                g(f, "remove");
                                        });
                                    }, 300 * !t));
                            }
                        }
                    }
                    return {
                        ready: function () {
                            var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
                            r.on(n, f, y),
                                r.on(e, u, function (e) {
                                    e.preventDefault();
                                }),
                                document.head.insertBefore(p, document.head.firstChild);
                        },
                    };
                })
            );
        },
        3695: function (e, t, n) {
            "use strict";
            n(3949).define(
                "touch",
                (e.exports = function (e) {
                    var t = {},
                        n = window.getSelection;
                    function a(t) {
                        var a,
                            i,
                            o = !1,
                            r = !1,
                            l = Math.min(Math.round(0.04 * window.innerWidth), 40);
                        function c(e) {
                            var t = e.touches;
                            (t && t.length > 1) ||
                                ((o = !0),
                                t ? ((r = !0), (a = t[0].clientX)) : (a = e.clientX),
                                (i = a));
                        }
                        function d(t) {
                            if (o) {
                                if (r && "mousemove" === t.type) {
                                    t.preventDefault(), t.stopPropagation();
                                    return;
                                }
                                var a,
                                    c,
                                    d,
                                    s,
                                    f = t.touches,
                                    p = f ? f[0].clientX : t.clientX,
                                    E = p - i;
                                (i = p),
                                    Math.abs(E) > l &&
                                        n &&
                                        "" === String(n()) &&
                                        ((a = "swipe"),
                                        (c = t),
                                        (d = { direction: E > 0 ? "right" : "left" }),
                                        (s = e.Event(a, { originalEvent: c })),
                                        e(c.target).trigger(s, d),
                                        u());
                            }
                        }
                        function s(e) {
                            if (o && ((o = !1), r && "mouseup" === e.type)) {
                                e.preventDefault(), e.stopPropagation(), (r = !1);
                                return;
                            }
                        }
                        function u() {
                            o = !1;
                        }
                        t.addEventListener("touchstart", c, !1),
                            t.addEventListener("touchmove", d, !1),
                            t.addEventListener("touchend", s, !1),
                            t.addEventListener("touchcancel", u, !1),
                            t.addEventListener("mousedown", c, !1),
                            t.addEventListener("mousemove", d, !1),
                            t.addEventListener("mouseup", s, !1),
                            t.addEventListener("mouseout", u, !1),
                            (this.destroy = function () {
                                t.removeEventListener("touchstart", c, !1),
                                    t.removeEventListener("touchmove", d, !1),
                                    t.removeEventListener("touchend", s, !1),
                                    t.removeEventListener("touchcancel", u, !1),
                                    t.removeEventListener("mousedown", c, !1),
                                    t.removeEventListener("mousemove", d, !1),
                                    t.removeEventListener("mouseup", s, !1),
                                    t.removeEventListener("mouseout", u, !1),
                                    (t = null);
                            });
                    }
                    return (
                        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
                        (t.init = function (t) {
                            return (t = "string" == typeof t ? e(t).get(0) : t) ? new a(t) : null;
                        }),
                        (t.instance = t.init(document)),
                        t
                    );
                })
            );
        },
        3946: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = {
                actionListPlaybackChanged: function () {
                    return W;
                },
                animationFrameChanged: function () {
                    return k;
                },
                clearRequested: function () {
                    return G;
                },
                elementStateChanged: function () {
                    return j;
                },
                eventListenerAdded: function () {
                    return F;
                },
                eventStateChanged: function () {
                    return x;
                },
                instanceAdded: function () {
                    return B;
                },
                instanceRemoved: function () {
                    return Q;
                },
                instanceStarted: function () {
                    return X;
                },
                mediaQueriesDefined: function () {
                    return H;
                },
                parameterChanged: function () {
                    return D;
                },
                playbackRequested: function () {
                    return w;
                },
                previewRequested: function () {
                    return P;
                },
                rawDataImported: function () {
                    return L;
                },
                sessionInitialized: function () {
                    return N;
                },
                sessionStarted: function () {
                    return C;
                },
                sessionStopped: function () {
                    return M;
                },
                stopRequested: function () {
                    return U;
                },
                testFrameRendered: function () {
                    return V;
                },
                viewportWidthChanged: function () {
                    return z;
                },
            };
            for (var i in a) Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
            let o = n(7087),
                r = n(9468),
                {
                    IX2_RAW_DATA_IMPORTED: l,
                    IX2_SESSION_INITIALIZED: c,
                    IX2_SESSION_STARTED: d,
                    IX2_SESSION_STOPPED: s,
                    IX2_PREVIEW_REQUESTED: u,
                    IX2_PLAYBACK_REQUESTED: f,
                    IX2_STOP_REQUESTED: p,
                    IX2_CLEAR_REQUESTED: E,
                    IX2_EVENT_LISTENER_ADDED: I,
                    IX2_TEST_FRAME_RENDERED: g,
                    IX2_EVENT_STATE_CHANGED: y,
                    IX2_ANIMATION_FRAME_CHANGED: T,
                    IX2_PARAMETER_CHANGED: m,
                    IX2_INSTANCE_ADDED: b,
                    IX2_INSTANCE_STARTED: O,
                    IX2_INSTANCE_REMOVED: _,
                    IX2_ELEMENT_STATE_CHANGED: v,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: h,
                    IX2_VIEWPORT_WIDTH_CHANGED: A,
                    IX2_MEDIA_QUERIES_DEFINED: S,
                } = o.IX2EngineActionTypes,
                { reifyState: R } = r.IX2VanillaUtils,
                L = (e) => ({ type: l, payload: { ...R(e) } }),
                N = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
                    type: c,
                    payload: { hasBoundaryNodes: e, reducedMotion: t },
                }),
                C = () => ({ type: d }),
                M = () => ({ type: s }),
                P = ({ rawData: e, defer: t }) => ({ type: u, payload: { defer: t, rawData: e } }),
                w = ({
                    actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: n,
                    eventId: a,
                    allowEvents: i,
                    immediate: r,
                    testManual: l,
                    verbose: c,
                    rawData: d,
                }) => ({
                    type: f,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: n,
                        testManual: l,
                        eventId: a,
                        allowEvents: i,
                        immediate: r,
                        verbose: c,
                        rawData: d,
                    },
                }),
                U = (e) => ({ type: p, payload: { actionListId: e } }),
                G = () => ({ type: E }),
                F = (e, t) => ({ type: I, payload: { target: e, listenerParams: t } }),
                V = (e = 1) => ({ type: g, payload: { step: e } }),
                x = (e, t) => ({ type: y, payload: { stateKey: e, newState: t } }),
                k = (e, t) => ({ type: T, payload: { now: e, parameters: t } }),
                D = (e, t) => ({ type: m, payload: { key: e, value: t } }),
                B = (e) => ({ type: b, payload: { ...e } }),
                X = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
                Q = (e) => ({ type: _, payload: { instanceId: e } }),
                j = (e, t, n, a) => ({
                    type: v,
                    payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
                }),
                W = ({ actionListId: e, isPlaying: t }) => ({
                    type: h,
                    payload: { actionListId: e, isPlaying: t },
                }),
                z = ({ width: e, mediaQueries: t }) => ({
                    type: A,
                    payload: { width: e, mediaQueries: t },
                }),
                H = () => ({ type: S });
        },
        6011: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a,
                i = {
                    actions: function () {
                        return d;
                    },
                    destroy: function () {
                        return E;
                    },
                    init: function () {
                        return p;
                    },
                    setEnv: function () {
                        return f;
                    },
                    store: function () {
                        return u;
                    },
                };
            for (var o in i) Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
            let r = n(9516),
                l = (a = n(7243)) && a.__esModule ? a : { default: a },
                c = n(1970),
                d = (function (e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e))
                        return { default: e };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : (a[o] = e[o]);
                        }
                    return (a.default = e), n && n.set(e, a), a;
                })(n(3946));
            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap(),
                    n = new WeakMap();
                return (s = function (e) {
                    return e ? n : t;
                })(e);
            }
            let u = (0, r.createStore)(l.default);
            function f(e) {
                e() && (0, c.observeRequests)(u);
            }
            function p(e) {
                E(), (0, c.startEngine)({ store: u, rawData: e, allowEvents: !0 });
            }
            function E() {
                (0, c.stopEngine)(u);
            }
        },
        5012: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = {
                elementContains: function () {
                    return m;
                },
                getChildElements: function () {
                    return O;
                },
                getClosestElement: function () {
                    return v;
                },
                getProperty: function () {
                    return E;
                },
                getQuerySelector: function () {
                    return g;
                },
                getRefType: function () {
                    return h;
                },
                getSiblingElements: function () {
                    return _;
                },
                getStyle: function () {
                    return p;
                },
                getValidDocument: function () {
                    return y;
                },
                isSiblingNode: function () {
                    return b;
                },
                matchSelector: function () {
                    return I;
                },
                queryDocument: function () {
                    return T;
                },
                setStyle: function () {
                    return f;
                },
            };
            for (var i in a) Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
            let o = n(9468),
                r = n(7087),
                { ELEMENT_MATCHES: l } = o.IX2BrowserSupport,
                {
                    IX2_ID_DELIMITER: c,
                    HTML_ELEMENT: d,
                    PLAIN_OBJECT: s,
                    WF_PAGE: u,
                } = r.IX2EngineConstants;
            function f(e, t, n) {
                e.style[t] = n;
            }
            function p(e, t) {
                return t.startsWith("--")
                    ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
                    : e.style instanceof CSSStyleDeclaration
                    ? e.style[t]
                    : void 0;
            }
            function E(e, t) {
                return e[t];
            }
            function I(e) {
                return (t) => t[l](e);
            }
            function g({ id: e, selector: t }) {
                if (e) {
                    let t = e;
                    if (-1 !== e.indexOf(c)) {
                        let n = e.split(c),
                            a = n[0];
                        if (((t = n[1]), a !== document.documentElement.getAttribute(u)))
                            return null;
                    }
                    return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
                }
                return t;
            }
            function y(e) {
                return null == e || e === document.documentElement.getAttribute(u)
                    ? document
                    : null;
            }
            function T(e, t) {
                return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e));
            }
            function m(e, t) {
                return e.contains(t);
            }
            function b(e, t) {
                return e !== t && e.parentNode === t.parentNode;
            }
            function O(e) {
                let t = [];
                for (let n = 0, { length: a } = e || []; n < a; n++) {
                    let { children: a } = e[n],
                        { length: i } = a;
                    if (i) for (let e = 0; e < i; e++) t.push(a[e]);
                }
                return t;
            }
            function _(e = []) {
                let t = [],
                    n = [];
                for (let a = 0, { length: i } = e; a < i; a++) {
                    let { parentNode: i } = e[a];
                    if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i)) continue;
                    n.push(i);
                    let o = i.firstElementChild;
                    for (; null != o; )
                        -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
                }
                return t;
            }
            let v = Element.prototype.closest
                ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
                : (e, t) => {
                      if (!document.documentElement.contains(e)) return null;
                      let n = e;
                      do {
                          if (n[l] && n[l](t)) return n;
                          n = n.parentNode;
                      } while (null != n);
                      return null;
                  };
            function h(e) {
                return null != e && "object" == typeof e ? (e instanceof Element ? d : s) : null;
            }
        },
        1970: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = {
                observeRequests: function () {
                    return K;
                },
                startActionGroup: function () {
                    return eE;
                },
                startEngine: function () {
                    return ea;
                },
                stopActionGroup: function () {
                    return ep;
                },
                stopAllActionGroups: function () {
                    return ef;
                },
                stopEngine: function () {
                    return ei;
                },
            };
            for (var i in a) Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
            let o = T(n(9777)),
                r = T(n(4738)),
                l = T(n(4659)),
                c = T(n(3452)),
                d = T(n(6633)),
                s = T(n(3729)),
                u = T(n(2397)),
                f = T(n(5082)),
                p = n(7087),
                E = n(9468),
                I = n(3946),
                g = (function (e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e))
                        return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : (a[o] = e[o]);
                        }
                    return (a.default = e), n && n.set(e, a), a;
                })(n(5012)),
                y = T(n(8955));
            function T(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap(),
                    n = new WeakMap();
                return (m = function (e) {
                    return e ? n : t;
                })(e);
            }
            let b = Object.keys(p.QuickEffectIds),
                O = (e) => b.includes(e),
                {
                    COLON_DELIMITER: _,
                    BOUNDARY_SELECTOR: v,
                    HTML_ELEMENT: h,
                    RENDER_GENERAL: A,
                    W_MOD_IX: S,
                } = p.IX2EngineConstants,
                {
                    getAffectedElements: R,
                    getElementId: L,
                    getDestinationValues: N,
                    observeStore: C,
                    getInstanceId: M,
                    renderHTMLElement: P,
                    clearAllStyles: w,
                    getMaxDurationItemIndex: U,
                    getComputedStyle: G,
                    getInstanceOrigin: F,
                    reduceListToGroup: V,
                    shouldNamespaceEventParameter: x,
                    getNamespacedParameterId: k,
                    shouldAllowMediaQuery: D,
                    cleanupHTMLElement: B,
                    clearObjectCache: X,
                    stringifyTarget: Q,
                    mediaQueriesEqual: j,
                    shallowEqual: W,
                } = E.IX2VanillaUtils,
                {
                    isPluginType: z,
                    createPluginInstance: H,
                    getPluginDuration: Y,
                } = E.IX2VanillaPlugins,
                $ = navigator.userAgent,
                q = $.match(/iPad/i) || $.match(/iPhone/);
            function K(e) {
                C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
                    C({ store: e, select: ({ ixRequest: e }) => e.playback, onChange: ee }),
                    C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
                    C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
            }
            function Z({ rawData: e, defer: t }, n) {
                let a = () => {
                    ea({ store: n, rawData: e, allowEvents: !0 }), J();
                };
                t ? setTimeout(a, 0) : a();
            }
            function J() {
                document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
            }
            function ee(e, t) {
                let {
                        actionTypeId: n,
                        actionListId: a,
                        actionItemId: i,
                        eventId: o,
                        allowEvents: r,
                        immediate: l,
                        testManual: c,
                        verbose: d = !0,
                    } = e,
                    { rawData: s } = e;
                if (a && i && s && l) {
                    let e = s.actionLists[a];
                    e && (s = V({ actionList: e, actionItemId: i, rawData: s }));
                }
                if (
                    (ea({ store: t, rawData: s, allowEvents: r, testManual: c }),
                    (a && n === p.ActionTypeConsts.GENERAL_START_ACTION) || O(n))
                ) {
                    ep({ store: t, actionListId: a }),
                        eu({ store: t, actionListId: a, eventId: o });
                    let e = eE({ store: t, eventId: o, actionListId: a, immediate: l, verbose: d });
                    d &&
                        e &&
                        t.dispatch(
                            (0, I.actionListPlaybackChanged)({ actionListId: a, isPlaying: !l })
                        );
                }
            }
            function et({ actionListId: e }, t) {
                e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ei(t);
            }
            function en(e, t) {
                ei(t), w({ store: t, elementApi: g });
            }
            function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
                let { ixSession: i } = e.getState();
                if ((t && e.dispatch((0, I.rawDataImported)(t)), !i.active)) {
                    (e.dispatch(
                        (0, I.sessionInitialized)({
                            hasBoundaryNodes: !!document.querySelector(v),
                            reducedMotion:
                                document.body.hasAttribute("data-wf-ix-vacation") &&
                                window.matchMedia("(prefers-reduced-motion)").matches,
                        })
                    ),
                    n) &&
                        ((function (e) {
                            let { ixData: t } = e.getState(),
                                { eventTypeMap: n } = t;
                            el(e),
                                (0, u.default)(n, (t, n) => {
                                    let a = y.default[n];
                                    if (!a)
                                        return void console.warn(
                                            `IX2 event type not configured: ${n}`
                                        );
                                    !(function ({ logic: e, store: t, events: n }) {
                                        !(function (e) {
                                            if (!q) return;
                                            let t = {},
                                                n = "";
                                            for (let a in e) {
                                                let { eventTypeId: i, target: o } = e[a],
                                                    r = g.getQuerySelector(o);
                                                t[r] ||
                                                    ((i === p.EventTypeConsts.MOUSE_CLICK ||
                                                        i ===
                                                            p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                                                        ((t[r] = !0),
                                                        (n +=
                                                            r +
                                                            "{cursor: pointer;touch-action: manipulation;}")));
                                            }
                                            if (n) {
                                                let e = document.createElement("style");
                                                (e.textContent = n), document.body.appendChild(e);
                                            }
                                        })(n);
                                        let { types: a, handler: i } = e,
                                            { ixData: c } = t.getState(),
                                            { actionLists: d } = c,
                                            s = ec(n, es);
                                        if (!(0, l.default)(s)) return;
                                        (0, u.default)(s, (e, a) => {
                                            let i = n[a],
                                                {
                                                    action: l,
                                                    id: s,
                                                    mediaQueries: u = c.mediaQueryKeys,
                                                } = i,
                                                { actionListId: f } = l.config;
                                            j(u, c.mediaQueryKeys) ||
                                                t.dispatch((0, I.mediaQueriesDefined)()),
                                                l.actionTypeId ===
                                                    p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                                                    (Array.isArray(i.config)
                                                        ? i.config
                                                        : [i.config]
                                                    ).forEach((n) => {
                                                        let { continuousParameterGroupId: a } = n,
                                                            i = (0, r.default)(
                                                                d,
                                                                `${f}.continuousParameterGroups`,
                                                                []
                                                            ),
                                                            l = (0, o.default)(
                                                                i,
                                                                ({ id: e }) => e === a
                                                            ),
                                                            c = (n.smoothing || 0) / 100,
                                                            u = (n.restingState || 0) / 100;
                                                        l &&
                                                            e.forEach((e, a) => {
                                                                !(function ({
                                                                    store: e,
                                                                    eventStateKey: t,
                                                                    eventTarget: n,
                                                                    eventId: a,
                                                                    eventConfig: i,
                                                                    actionListId: o,
                                                                    parameterGroup: l,
                                                                    smoothing: c,
                                                                    restingValue: d,
                                                                }) {
                                                                    let {
                                                                            ixData: s,
                                                                            ixSession: u,
                                                                        } = e.getState(),
                                                                        { events: f } = s,
                                                                        E = f[a],
                                                                        { eventTypeId: I } = E,
                                                                        y = {},
                                                                        T = {},
                                                                        m = [],
                                                                        {
                                                                            continuousActionGroups:
                                                                                b,
                                                                        } = l,
                                                                        { id: O } = l;
                                                                    x(I, i) && (O = k(t, O));
                                                                    let h =
                                                                        u.hasBoundaryNodes && n
                                                                            ? g.getClosestElement(
                                                                                  n,
                                                                                  v
                                                                              )
                                                                            : null;
                                                                    b.forEach((e) => {
                                                                        let {
                                                                            keyframe: t,
                                                                            actionItems: a,
                                                                        } = e;
                                                                        a.forEach((e) => {
                                                                            let {
                                                                                    actionTypeId: a,
                                                                                } = e,
                                                                                { target: i } =
                                                                                    e.config;
                                                                            if (!i) return;
                                                                            let o = i.boundaryMode
                                                                                    ? h
                                                                                    : null,
                                                                                r = Q(i) + _ + a;
                                                                            if (
                                                                                ((T[r] = (function (
                                                                                    e = [],
                                                                                    t,
                                                                                    n
                                                                                ) {
                                                                                    let a,
                                                                                        i = [...e];
                                                                                    return (
                                                                                        i.some(
                                                                                            (
                                                                                                e,
                                                                                                n
                                                                                            ) =>
                                                                                                e.keyframe ===
                                                                                                    t &&
                                                                                                ((a =
                                                                                                    n),
                                                                                                !0)
                                                                                        ),
                                                                                        null == a &&
                                                                                            ((a =
                                                                                                i.length),
                                                                                            i.push({
                                                                                                keyframe:
                                                                                                    t,
                                                                                                actionItems:
                                                                                                    [],
                                                                                            })),
                                                                                        i[
                                                                                            a
                                                                                        ].actionItems.push(
                                                                                            n
                                                                                        ),
                                                                                        i
                                                                                    );
                                                                                })(T[r], t, e)),
                                                                                !y[r])
                                                                            ) {
                                                                                y[r] = !0;
                                                                                let { config: t } =
                                                                                    e;
                                                                                R({
                                                                                    config: t,
                                                                                    event: E,
                                                                                    eventTarget: n,
                                                                                    elementRoot: o,
                                                                                    elementApi: g,
                                                                                }).forEach((e) => {
                                                                                    m.push({
                                                                                        element: e,
                                                                                        key: r,
                                                                                    });
                                                                                });
                                                                            }
                                                                        });
                                                                    }),
                                                                        m.forEach(
                                                                            ({
                                                                                element: t,
                                                                                key: n,
                                                                            }) => {
                                                                                let i = T[n],
                                                                                    l = (0,
                                                                                    r.default)(
                                                                                        i,
                                                                                        "[0].actionItems[0]",
                                                                                        {}
                                                                                    ),
                                                                                    {
                                                                                        actionTypeId:
                                                                                            s,
                                                                                    } = l,
                                                                                    u = (
                                                                                        s ===
                                                                                        p
                                                                                            .ActionTypeConsts
                                                                                            .PLUGIN_RIVE
                                                                                            ? 0 ===
                                                                                              (
                                                                                                  l
                                                                                                      .config
                                                                                                      ?.target
                                                                                                      ?.selectorGuids ||
                                                                                                  []
                                                                                              )
                                                                                                  .length
                                                                                            : z(s)
                                                                                    )
                                                                                        ? H(s)?.(
                                                                                              t,
                                                                                              l
                                                                                          )
                                                                                        : null,
                                                                                    f = N(
                                                                                        {
                                                                                            element:
                                                                                                t,
                                                                                            actionItem:
                                                                                                l,
                                                                                            elementApi:
                                                                                                g,
                                                                                        },
                                                                                        u
                                                                                    );
                                                                                eI({
                                                                                    store: e,
                                                                                    element: t,
                                                                                    eventId: a,
                                                                                    actionListId: o,
                                                                                    actionItem: l,
                                                                                    destination: f,
                                                                                    continuous: !0,
                                                                                    parameterId: O,
                                                                                    actionGroups: i,
                                                                                    smoothing: c,
                                                                                    restingValue: d,
                                                                                    pluginInstance:
                                                                                        u,
                                                                                });
                                                                            }
                                                                        );
                                                                })({
                                                                    store: t,
                                                                    eventStateKey: s + _ + a,
                                                                    eventTarget: e,
                                                                    eventId: s,
                                                                    eventConfig: n,
                                                                    actionListId: f,
                                                                    parameterGroup: l,
                                                                    smoothing: c,
                                                                    restingValue: u,
                                                                });
                                                            });
                                                    }),
                                                (l.actionTypeId ===
                                                    p.ActionTypeConsts.GENERAL_START_ACTION ||
                                                    O(l.actionTypeId)) &&
                                                    eu({ store: t, actionListId: f, eventId: s });
                                        });
                                        let E = (e) => {
                                                let { ixSession: a } = t.getState();
                                                ed(s, (o, r, l) => {
                                                    let d = n[r],
                                                        s = a.eventState[l],
                                                        {
                                                            action: u,
                                                            mediaQueries: f = c.mediaQueryKeys,
                                                        } = d;
                                                    if (!D(f, a.mediaQueryKey)) return;
                                                    let E = (n = {}) => {
                                                        let a = i(
                                                            {
                                                                store: t,
                                                                element: o,
                                                                event: d,
                                                                eventConfig: n,
                                                                nativeEvent: e,
                                                                eventStateKey: l,
                                                            },
                                                            s
                                                        );
                                                        W(a, s) ||
                                                            t.dispatch(
                                                                (0, I.eventStateChanged)(l, a)
                                                            );
                                                    };
                                                    u.actionTypeId ===
                                                    p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                                        ? (Array.isArray(d.config)
                                                              ? d.config
                                                              : [d.config]
                                                          ).forEach(E)
                                                        : E();
                                                });
                                            },
                                            y = (0, f.default)(E, 12),
                                            T = ({
                                                target: e = document,
                                                types: n,
                                                throttle: a,
                                            }) => {
                                                n.split(" ")
                                                    .filter(Boolean)
                                                    .forEach((n) => {
                                                        let i = a ? y : E;
                                                        e.addEventListener(n, i),
                                                            t.dispatch(
                                                                (0, I.eventListenerAdded)(e, [n, i])
                                                            );
                                                    });
                                            };
                                        Array.isArray(a)
                                            ? a.forEach(T)
                                            : "string" == typeof a && T(e);
                                    })({ logic: a, store: e, events: t });
                                });
                            let { ixSession: a } = e.getState();
                            a.eventListeners.length &&
                                (function (e) {
                                    let t = () => {
                                        el(e);
                                    };
                                    er.forEach((n) => {
                                        window.addEventListener(n, t),
                                            e.dispatch((0, I.eventListenerAdded)(window, [n, t]));
                                    }),
                                        t();
                                })(e);
                        })(e),
                        (function () {
                            let { documentElement: e } = document;
                            -1 === e.className.indexOf(S) && (e.className += ` ${S}`);
                        })(),
                        e.getState().ixSession.hasDefinedMediaQueries &&
                            C({
                                store: e,
                                select: ({ ixSession: e }) => e.mediaQueryKey,
                                onChange: () => {
                                    ei(e),
                                        w({ store: e, elementApi: g }),
                                        ea({ store: e, allowEvents: !0 }),
                                        J();
                                },
                            }));
                    e.dispatch((0, I.sessionStarted)()),
                        (function (e, t) {
                            let n = (a) => {
                                let { ixSession: i, ixParameters: o } = e.getState();
                                if (i.active)
                                    if ((e.dispatch((0, I.animationFrameChanged)(a, o)), t)) {
                                        let t = C({
                                            store: e,
                                            select: ({ ixSession: e }) => e.tick,
                                            onChange: (e) => {
                                                n(e), t();
                                            },
                                        });
                                    } else requestAnimationFrame(n);
                            };
                            n(window.performance.now());
                        })(e, a);
                }
            }
            function ei(e) {
                let { ixSession: t } = e.getState();
                if (t.active) {
                    let { eventListeners: n } = t;
                    n.forEach(eo), X(), e.dispatch((0, I.sessionStopped)());
                }
            }
            function eo({ target: e, listenerParams: t }) {
                e.removeEventListener.apply(e, t);
            }
            let er = ["resize", "orientationchange"];
            function el(e) {
                let { ixSession: t, ixData: n } = e.getState(),
                    a = window.innerWidth;
                if (a !== t.viewportWidth) {
                    let { mediaQueries: t } = n;
                    e.dispatch((0, I.viewportWidthChanged)({ width: a, mediaQueries: t }));
                }
            }
            let ec = (e, t) => (0, c.default)((0, s.default)(e, t), d.default),
                ed = (e, t) => {
                    (0, u.default)(e, (e, n) => {
                        e.forEach((e, a) => {
                            t(e, n, n + _ + a);
                        });
                    });
                },
                es = (e) => R({ config: { target: e.target, targets: e.targets }, elementApi: g });
            function eu({ store: e, actionListId: t, eventId: n }) {
                let { ixData: a, ixSession: i } = e.getState(),
                    { actionLists: o, events: l } = a,
                    c = l[n],
                    d = o[t];
                if (d && d.useFirstGroupAsInitialState) {
                    let o = (0, r.default)(d, "actionItemGroups[0].actionItems", []);
                    if (!D((0, r.default)(c, "mediaQueries", a.mediaQueryKeys), i.mediaQueryKey))
                        return;
                    o.forEach((a) => {
                        let { config: i, actionTypeId: o } = a,
                            r = R({
                                config:
                                    i?.target?.useEventTarget === !0 && i?.target?.objectId == null
                                        ? { target: c.target, targets: c.targets }
                                        : i,
                                event: c,
                                elementApi: g,
                            }),
                            l = z(o);
                        r.forEach((i) => {
                            let r = l ? H(o)?.(i, a) : null;
                            eI({
                                destination: N({ element: i, actionItem: a, elementApi: g }, r),
                                immediate: !0,
                                store: e,
                                element: i,
                                eventId: n,
                                actionItem: a,
                                actionListId: t,
                                pluginInstance: r,
                            });
                        });
                    });
                }
            }
            function ef({ store: e }) {
                let { ixInstances: t } = e.getState();
                (0, u.default)(t, (t) => {
                    if (!t.continuous) {
                        let { actionListId: n, verbose: a } = t;
                        eg(t, e),
                            a &&
                                e.dispatch(
                                    (0, I.actionListPlaybackChanged)({
                                        actionListId: n,
                                        isPlaying: !1,
                                    })
                                );
                    }
                });
            }
            function ep({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: i,
            }) {
                let { ixInstances: o, ixSession: l } = e.getState(),
                    c = l.hasBoundaryNodes && n ? g.getClosestElement(n, v) : null;
                (0, u.default)(o, (n) => {
                    let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
                        l = !a || n.eventStateKey === a;
                    if (n.actionListId === i && n.eventId === t && l) {
                        if (c && o && !g.elementContains(c, n.element)) return;
                        eg(n, e),
                            n.verbose &&
                                e.dispatch(
                                    (0, I.actionListPlaybackChanged)({
                                        actionListId: i,
                                        isPlaying: !1,
                                    })
                                );
                    }
                });
            }
            function eE({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: i,
                groupIndex: o = 0,
                immediate: l,
                verbose: c,
            }) {
                let { ixData: d, ixSession: s } = e.getState(),
                    { events: u } = d,
                    f = u[t] || {},
                    { mediaQueries: p = d.mediaQueryKeys } = f,
                    { actionItemGroups: E, useFirstGroupAsInitialState: I } = (0, r.default)(
                        d,
                        `actionLists.${i}`,
                        {}
                    );
                if (!E || !E.length) return !1;
                o >= E.length && (0, r.default)(f, "config.loop") && (o = 0), 0 === o && I && o++;
                let y =
                        (0 === o || (1 === o && I)) && O(f.action?.actionTypeId)
                            ? f.config.delay
                            : void 0,
                    T = (0, r.default)(E, [o, "actionItems"], []);
                if (!T.length || !D(p, s.mediaQueryKey)) return !1;
                let m = s.hasBoundaryNodes && n ? g.getClosestElement(n, v) : null,
                    b = U(T),
                    _ = !1;
                return (
                    T.forEach((r, d) => {
                        let { config: s, actionTypeId: u } = r,
                            p = z(u),
                            { target: E } = s;
                        E &&
                            R({
                                config: s,
                                event: f,
                                eventTarget: n,
                                elementRoot: E.boundaryMode ? m : null,
                                elementApi: g,
                            }).forEach((s, f) => {
                                let E = p ? H(u)?.(s, r) : null,
                                    I = p ? Y(u)(s, r) : null;
                                _ = !0;
                                let T = G({ element: s, actionItem: r }),
                                    m = N({ element: s, actionItem: r, elementApi: g }, E);
                                eI({
                                    store: e,
                                    element: s,
                                    actionItem: r,
                                    eventId: t,
                                    eventTarget: n,
                                    eventStateKey: a,
                                    actionListId: i,
                                    groupIndex: o,
                                    isCarrier: b === d && 0 === f,
                                    computedStyle: T,
                                    destination: m,
                                    immediate: l,
                                    verbose: c,
                                    pluginInstance: E,
                                    pluginDuration: I,
                                    instanceDelay: y,
                                });
                            });
                    }),
                    _
                );
            }
            function eI(e) {
                let t,
                    { store: n, computedStyle: a, ...i } = e,
                    {
                        element: o,
                        actionItem: r,
                        immediate: l,
                        pluginInstance: c,
                        continuous: d,
                        restingValue: s,
                        eventId: u,
                    } = i,
                    f = M(),
                    { ixElements: E, ixSession: y, ixData: T } = n.getState(),
                    m = L(E, o),
                    { refState: b } = E[m] || {},
                    O = g.getRefType(o),
                    _ = y.reducedMotion && p.ReducedMotionTypes[r.actionTypeId];
                if (_ && d)
                    switch (T.events[u]?.eventTypeId) {
                        case p.EventTypeConsts.MOUSE_MOVE:
                        case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                            t = s;
                            break;
                        default:
                            t = 0.5;
                    }
                let v = F(o, b, a, r, g, c);
                if (
                    (n.dispatch(
                        (0, I.instanceAdded)({
                            instanceId: f,
                            elementId: m,
                            origin: v,
                            refType: O,
                            skipMotion: _,
                            skipToValue: t,
                            ...i,
                        })
                    ),
                    ey(document.body, "ix2-animation-started", f),
                    l)
                )
                    return void (function (e, t) {
                        let { ixParameters: n } = e.getState();
                        e.dispatch((0, I.instanceStarted)(t, 0)),
                            e.dispatch((0, I.animationFrameChanged)(performance.now(), n));
                        let { ixInstances: a } = e.getState();
                        eT(a[t], e);
                    })(n, f);
                C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eT }),
                    d || n.dispatch((0, I.instanceStarted)(f, y.tick));
            }
            function eg(e, t) {
                ey(document.body, "ix2-animation-stopping", {
                    instanceId: e.id,
                    state: t.getState(),
                });
                let { elementId: n, actionItem: a } = e,
                    { ixElements: i } = t.getState(),
                    { ref: o, refType: r } = i[n] || {};
                r === h && B(o, a, g), t.dispatch((0, I.instanceRemoved)(e.id));
            }
            function ey(e, t, n) {
                let a = document.createEvent("CustomEvent");
                a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a);
            }
            function eT(e, t) {
                let {
                        active: n,
                        continuous: a,
                        complete: i,
                        elementId: o,
                        actionItem: r,
                        actionTypeId: l,
                        renderType: c,
                        current: d,
                        groupIndex: s,
                        eventId: u,
                        eventTarget: f,
                        eventStateKey: p,
                        actionListId: E,
                        isCarrier: y,
                        styleProp: T,
                        verbose: m,
                        pluginInstance: b,
                    } = e,
                    { ixData: O, ixSession: _ } = t.getState(),
                    { events: v } = O,
                    { mediaQueries: S = O.mediaQueryKeys } = v && v[u] ? v[u] : {};
                if (D(S, _.mediaQueryKey) && (a || n || i)) {
                    if (d || (c === A && i)) {
                        t.dispatch((0, I.elementStateChanged)(o, l, d, r));
                        let { ixElements: e } = t.getState(),
                            { ref: n, refType: a, refState: i } = e[o] || {},
                            s = i && i[l];
                        (a === h || z(l)) && P(n, i, s, u, r, T, g, c, b);
                    }
                    if (i) {
                        if (y) {
                            let e = eE({
                                store: t,
                                eventId: u,
                                eventTarget: f,
                                eventStateKey: p,
                                actionListId: E,
                                groupIndex: s + 1,
                                verbose: m,
                            });
                            m &&
                                !e &&
                                t.dispatch(
                                    (0, I.actionListPlaybackChanged)({
                                        actionListId: E,
                                        isPlaying: !1,
                                    })
                                );
                        }
                        eg(e, t);
                    }
                }
            }
        },
        8955: function (e, t, n) {
            "use strict";
            let a;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return ep;
                    },
                });
            let i = u(n(5801)),
                o = u(n(4738)),
                r = u(n(3789)),
                l = n(7087),
                c = n(1970),
                d = n(3946),
                s = n(9468);
            function u(e) {
                return e && e.__esModule ? e : { default: e };
            }
            let {
                    MOUSE_CLICK: f,
                    MOUSE_SECOND_CLICK: p,
                    MOUSE_DOWN: E,
                    MOUSE_UP: I,
                    MOUSE_OVER: g,
                    MOUSE_OUT: y,
                    DROPDOWN_CLOSE: T,
                    DROPDOWN_OPEN: m,
                    SLIDER_ACTIVE: b,
                    SLIDER_INACTIVE: O,
                    TAB_ACTIVE: _,
                    TAB_INACTIVE: v,
                    NAVBAR_CLOSE: h,
                    NAVBAR_OPEN: A,
                    MOUSE_MOVE: S,
                    PAGE_SCROLL_DOWN: R,
                    SCROLL_INTO_VIEW: L,
                    SCROLL_OUT_OF_VIEW: N,
                    PAGE_SCROLL_UP: C,
                    SCROLLING_IN_VIEW: M,
                    PAGE_FINISH: P,
                    ECOMMERCE_CART_CLOSE: w,
                    ECOMMERCE_CART_OPEN: U,
                    PAGE_START: G,
                    PAGE_SCROLL: F,
                } = l.EventTypeConsts,
                V = "COMPONENT_ACTIVE",
                x = "COMPONENT_INACTIVE",
                { COLON_DELIMITER: k } = l.IX2EngineConstants,
                { getNamespacedParameterId: D } = s.IX2VanillaUtils,
                B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
                X = B(({ element: e, nativeEvent: t }) => e === t.target),
                Q = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
                j = (0, i.default)([X, Q]),
                W = (e, t) => {
                    if (t) {
                        let { ixData: n } = e.getState(),
                            { events: a } = n,
                            i = a[t];
                        if (i && !ee[i.eventTypeId]) return i;
                    }
                    return null;
                },
                z = ({ store: e, event: t }) => {
                    let { action: n } = t,
                        { autoStopEventId: a } = n.config;
                    return !!W(e, a);
                },
                H = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
                    let { action: r, id: l } = t,
                        { actionListId: d, autoStopEventId: s } = r.config,
                        u = W(e, s);
                    return (
                        u &&
                            (0, c.stopActionGroup)({
                                store: e,
                                eventId: s,
                                eventTarget: n,
                                eventStateKey: s + k + a.split(k)[1],
                                actionListId: (0, o.default)(u, "action.config.actionListId"),
                            }),
                        (0, c.stopActionGroup)({
                            store: e,
                            eventId: l,
                            eventTarget: n,
                            eventStateKey: a,
                            actionListId: d,
                        }),
                        (0, c.startActionGroup)({
                            store: e,
                            eventId: l,
                            eventTarget: n,
                            eventStateKey: a,
                            actionListId: d,
                        }),
                        i
                    );
                },
                Y = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a,
                $ = { handler: Y(j, H) },
                q = { ...$, types: [V, x].join(" ") },
                K = [
                    { target: window, types: "resize orientationchange", throttle: !0 },
                    {
                        target: document,
                        types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                        throttle: !0,
                    },
                ],
                Z = "mouseover mouseout",
                J = { types: K },
                ee = { PAGE_START: G, PAGE_FINISH: P },
                et = (() => {
                    let e = void 0 !== window.pageXOffset,
                        t =
                            "CSS1Compat" === document.compatMode
                                ? document.documentElement
                                : document.body;
                    return () => ({
                        scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                        scrollTop: e ? window.pageYOffset : t.scrollTop,
                        stiffScrollTop: (0, r.default)(
                            e ? window.pageYOffset : t.scrollTop,
                            0,
                            t.scrollHeight - window.innerHeight
                        ),
                        scrollWidth: t.scrollWidth,
                        scrollHeight: t.scrollHeight,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        innerWidth: window.innerWidth,
                        innerHeight: window.innerHeight,
                    });
                })(),
                en = (e, t) =>
                    !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
                ea = ({ element: e, nativeEvent: t }) => {
                    let { type: n, target: a, relatedTarget: i } = t,
                        o = e.contains(a);
                    if ("mouseover" === n && o) return !0;
                    let r = e.contains(i);
                    return "mouseout" === n && !!o && !!r;
                },
                ei = (e) => {
                    let {
                            element: t,
                            event: { config: n },
                        } = e,
                        { clientWidth: a, clientHeight: i } = et(),
                        o = n.scrollOffsetValue,
                        r = "PX" === n.scrollOffsetUnit ? o : (i * (o || 0)) / 100;
                    return en(t.getBoundingClientRect(), {
                        left: 0,
                        top: r,
                        right: a,
                        bottom: i - r,
                    });
                },
                eo = (e) => (t, n) => {
                    let { type: a } = t.nativeEvent,
                        i = -1 !== [V, x].indexOf(a) ? a === V : n.isActive,
                        o = { ...n, isActive: i };
                    return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
                },
                er = (e) => (t, n) => {
                    let a = { elementHovered: ea(t) };
                    return (
                        ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
                            e(t, a)) ||
                        a
                    );
                },
                el =
                    (e) =>
                    (t, n = {}) => {
                        let a,
                            i,
                            { stiffScrollTop: o, scrollHeight: r, innerHeight: l } = et(),
                            {
                                event: { config: c, eventTypeId: d },
                            } = t,
                            { scrollOffsetValue: s, scrollOffsetUnit: u } = c,
                            f = r - l,
                            p = Number((o / f).toFixed(2));
                        if (n && n.percentTop === p) return n;
                        let E = ("PX" === u ? s : (l * (s || 0)) / 100) / f,
                            I = 0;
                        n &&
                            ((a = p > n.percentTop),
                            (I = (i = n.scrollingDown !== a) ? p : n.anchorTop));
                        let g = d === R ? p >= I + E : p <= I - E,
                            y = {
                                ...n,
                                percentTop: p,
                                inBounds: g,
                                anchorTop: I,
                                scrollingDown: a,
                            };
                        return (n && g && (i || y.inBounds !== n.inBounds) && e(t, y)) || y;
                    },
                ec = (e, t) =>
                    e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
                ed =
                    (e) =>
                    (t, n = { clickCount: 0 }) => {
                        let a = { clickCount: (n.clickCount % 2) + 1 };
                        return (a.clickCount !== n.clickCount && e(t, a)) || a;
                    },
                es = (e = !0) => ({
                    ...q,
                    handler: Y(
                        e ? j : X,
                        eo((e, t) => (t.isActive ? $.handler(e, t) : t))
                    ),
                }),
                eu = (e = !0) => ({
                    ...q,
                    handler: Y(
                        e ? j : X,
                        eo((e, t) => (t.isActive ? t : $.handler(e, t)))
                    ),
                }),
                ef = {
                    ...J,
                    handler:
                        ((a = (e, t) => {
                            let { elementVisible: n } = t,
                                { event: a, store: i } = e,
                                { ixData: o } = i.getState(),
                                { events: r } = o;
                            return !r[a.action.config.autoStopEventId] && t.triggered
                                ? t
                                : (a.eventTypeId === L) === n
                                ? (H(e), { ...t, triggered: !0 })
                                : t;
                        }),
                        (e, t) => {
                            let n = { ...t, elementVisible: ei(e) };
                            return (
                                ((t ? n.elementVisible !== t.elementVisible : n.elementVisible) &&
                                    a(e, n)) ||
                                n
                            );
                        }),
                },
                ep = {
                    [b]: es(),
                    [O]: eu(),
                    [m]: es(),
                    [T]: eu(),
                    [A]: es(!1),
                    [h]: eu(!1),
                    [_]: es(),
                    [v]: eu(),
                    [U]: { types: "ecommerce-cart-open", handler: Y(j, H) },
                    [w]: { types: "ecommerce-cart-close", handler: Y(j, H) },
                    [f]: {
                        types: "click",
                        handler: Y(
                            j,
                            ed((e, { clickCount: t }) => {
                                z(e) ? 1 === t && H(e) : H(e);
                            })
                        ),
                    },
                    [p]: {
                        types: "click",
                        handler: Y(
                            j,
                            ed((e, { clickCount: t }) => {
                                2 === t && H(e);
                            })
                        ),
                    },
                    [E]: { ...$, types: "mousedown" },
                    [I]: { ...$, types: "mouseup" },
                    [g]: {
                        types: Z,
                        handler: Y(
                            j,
                            er((e, t) => {
                                t.elementHovered && H(e);
                            })
                        ),
                    },
                    [y]: {
                        types: Z,
                        handler: Y(
                            j,
                            er((e, t) => {
                                t.elementHovered || H(e);
                            })
                        ),
                    },
                    [S]: {
                        types: "mousemove mouseout scroll",
                        handler: (
                            {
                                store: e,
                                element: t,
                                eventConfig: n,
                                nativeEvent: a,
                                eventStateKey: i,
                            },
                            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
                        ) => {
                            let {
                                    basedOn: r,
                                    selectedAxis: c,
                                    continuousParameterGroupId: s,
                                    reverse: u,
                                    restingState: f = 0,
                                } = n,
                                {
                                    clientX: p = o.clientX,
                                    clientY: E = o.clientY,
                                    pageX: I = o.pageX,
                                    pageY: g = o.pageY,
                                } = a,
                                y = "X_AXIS" === c,
                                T = "mouseout" === a.type,
                                m = f / 100,
                                b = s,
                                O = !1;
                            switch (r) {
                                case l.EventBasedOn.VIEWPORT:
                                    m = y
                                        ? Math.min(p, window.innerWidth) / window.innerWidth
                                        : Math.min(E, window.innerHeight) / window.innerHeight;
                                    break;
                                case l.EventBasedOn.PAGE: {
                                    let {
                                        scrollLeft: e,
                                        scrollTop: t,
                                        scrollWidth: n,
                                        scrollHeight: a,
                                    } = et();
                                    m = y ? Math.min(e + I, n) / n : Math.min(t + g, a) / a;
                                    break;
                                }
                                case l.EventBasedOn.ELEMENT:
                                default: {
                                    b = D(i, s);
                                    let e = 0 === a.type.indexOf("mouse");
                                    if (e && !0 !== j({ element: t, nativeEvent: a })) break;
                                    let n = t.getBoundingClientRect(),
                                        { left: o, top: r, width: l, height: c } = n;
                                    if (!e && !ec({ left: p, top: E }, n)) break;
                                    (O = !0), (m = y ? (p - o) / l : (E - r) / c);
                                }
                            }
                            return (
                                T && (m > 0.95 || m < 0.05) && (m = Math.round(m)),
                                (r !== l.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                                    ((m = u ? 1 - m : m),
                                    e.dispatch((0, d.parameterChanged)(b, m))),
                                { elementHovered: O, clientX: p, clientY: E, pageX: I, pageY: g }
                            );
                        },
                    },
                    [F]: {
                        types: K,
                        handler: ({ store: e, eventConfig: t }) => {
                            let { continuousParameterGroupId: n, reverse: a } = t,
                                { scrollTop: i, scrollHeight: o, clientHeight: r } = et(),
                                l = i / (o - r);
                            (l = a ? 1 - l : l), e.dispatch((0, d.parameterChanged)(n, l));
                        },
                    },
                    [M]: {
                        types: K,
                        handler: (
                            { element: e, store: t, eventConfig: n, eventStateKey: a },
                            i = { scrollPercent: 0 }
                        ) => {
                            let {
                                    scrollLeft: o,
                                    scrollTop: r,
                                    scrollWidth: c,
                                    scrollHeight: s,
                                    clientHeight: u,
                                } = et(),
                                {
                                    basedOn: f,
                                    selectedAxis: p,
                                    continuousParameterGroupId: E,
                                    startsEntering: I,
                                    startsExiting: g,
                                    addEndOffset: y,
                                    addStartOffset: T,
                                    addOffsetValue: m = 0,
                                    endOffsetValue: b = 0,
                                } = n;
                            if (f === l.EventBasedOn.VIEWPORT) {
                                let e = "X_AXIS" === p ? o / c : r / s;
                                return (
                                    e !== i.scrollPercent &&
                                        t.dispatch((0, d.parameterChanged)(E, e)),
                                    { scrollPercent: e }
                                );
                            }
                            {
                                let n = D(a, E),
                                    o = e.getBoundingClientRect(),
                                    r = (T ? m : 0) / 100,
                                    l = (y ? b : 0) / 100;
                                (r = I ? r : 1 - r), (l = g ? l : 1 - l);
                                let c = o.top + Math.min(o.height * r, u),
                                    f = Math.min(u + (o.top + o.height * l - c), s),
                                    p = Math.min(Math.max(0, u - c), f) / f;
                                return (
                                    p !== i.scrollPercent &&
                                        t.dispatch((0, d.parameterChanged)(n, p)),
                                    { scrollPercent: p }
                                );
                            }
                        },
                    },
                    [L]: ef,
                    [N]: ef,
                    [R]: {
                        ...J,
                        handler: el((e, t) => {
                            t.scrollingDown && H(e);
                        }),
                    },
                    [C]: {
                        ...J,
                        handler: el((e, t) => {
                            t.scrollingDown || H(e);
                        }),
                    },
                    [P]: {
                        types: "readystatechange IX2_PAGE_UPDATE",
                        handler: Y(X, (e, t) => {
                            let n = { finished: "complete" === document.readyState };
                            return n.finished && !(t && t.finshed) && H(e), n;
                        }),
                    },
                    [G]: {
                        types: "readystatechange IX2_PAGE_UPDATE",
                        handler: Y(X, (e, t) => (t || H(e), { started: !0 })),
                    },
                };
        },
        4609: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "ixData", {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
            let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
                i = (e = Object.freeze({}), t) =>
                    t.type === a ? t.payload.ixData || Object.freeze({}) : e;
        },
        7718: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "ixInstances", {
                    enumerable: !0,
                    get: function () {
                        return O;
                    },
                });
            let a = n(7087),
                i = n(9468),
                o = n(1185),
                {
                    IX2_RAW_DATA_IMPORTED: r,
                    IX2_SESSION_STOPPED: l,
                    IX2_INSTANCE_ADDED: c,
                    IX2_INSTANCE_STARTED: d,
                    IX2_INSTANCE_REMOVED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u,
                } = a.IX2EngineActionTypes,
                { optimizeFloat: f, applyEasing: p, createBezierEasing: E } = i.IX2EasingUtils,
                { RENDER_GENERAL: I } = a.IX2EngineConstants,
                { getItemConfigByKey: g, getRenderType: y, getStyleProp: T } = i.IX2VanillaUtils,
                m = (e, t) => {
                    let n,
                        a,
                        i,
                        r,
                        {
                            position: l,
                            parameterId: c,
                            actionGroups: d,
                            destinationKeys: s,
                            smoothing: u,
                            restingValue: E,
                            actionTypeId: I,
                            customEasingFn: y,
                            skipMotion: T,
                            skipToValue: m,
                        } = e,
                        { parameters: b } = t.payload,
                        O = Math.max(1 - u, 0.01),
                        _ = b[c];
                    null == _ && ((O = 1), (_ = E));
                    let v = f((Math.max(_, 0) || 0) - l),
                        h = T ? m : f(l + v * O),
                        A = 100 * h;
                    if (h === l && e.current) return e;
                    for (let e = 0, { length: t } = d; e < t; e++) {
                        let { keyframe: t, actionItems: o } = d[e];
                        if ((0 === e && (n = o[0]), A >= t)) {
                            n = o[0];
                            let l = d[e + 1],
                                c = l && A !== t;
                            (a = c ? l.actionItems[0] : null),
                                c && ((i = t / 100), (r = (l.keyframe - t) / 100));
                        }
                    }
                    let S = {};
                    if (n && !a)
                        for (let e = 0, { length: t } = s; e < t; e++) {
                            let t = s[e];
                            S[t] = g(I, t, n.config);
                        }
                    else if (n && a && void 0 !== i && void 0 !== r) {
                        let e = (h - i) / r,
                            t = p(n.config.easing, e, y);
                        for (let e = 0, { length: i } = s; e < i; e++) {
                            let i = s[e],
                                o = g(I, i, n.config),
                                r = (g(I, i, a.config) - o) * t + o;
                            S[i] = r;
                        }
                    }
                    return (0, o.merge)(e, { position: h, current: S });
                },
                b = (e, t) => {
                    let {
                            active: n,
                            origin: a,
                            start: i,
                            immediate: r,
                            renderType: l,
                            verbose: c,
                            actionItem: d,
                            destination: s,
                            destinationKeys: u,
                            pluginDuration: E,
                            instanceDelay: g,
                            customEasingFn: y,
                            skipMotion: T,
                        } = e,
                        m = d.config.easing,
                        { duration: b, delay: O } = d.config;
                    null != E && (b = E),
                        (O = null != g ? g : O),
                        l === I ? (b = 0) : (r || T) && (b = O = 0);
                    let { now: _ } = t.payload;
                    if (n && a) {
                        let t = _ - (i + O);
                        if (c) {
                            let t = b + O,
                                n = f(Math.min(Math.max(0, (_ - i) / t), 1));
                            e = (0, o.set)(e, "verboseTimeElapsed", t * n);
                        }
                        if (t < 0) return e;
                        let n = f(Math.min(Math.max(0, t / b), 1)),
                            r = p(m, n, y),
                            l = {},
                            d = null;
                        return (
                            u.length &&
                                (d = u.reduce((e, t) => {
                                    let n = s[t],
                                        i = parseFloat(a[t]) || 0,
                                        o = parseFloat(n) - i;
                                    return (e[t] = o * r + i), e;
                                }, {})),
                            (l.current = d),
                            (l.position = n),
                            1 === n && ((l.active = !1), (l.complete = !0)),
                            (0, o.merge)(e, l)
                        );
                    }
                    return e;
                },
                O = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case r:
                            return t.payload.ixInstances || Object.freeze({});
                        case l:
                            return Object.freeze({});
                        case c: {
                            let {
                                    instanceId: n,
                                    elementId: a,
                                    actionItem: i,
                                    eventId: r,
                                    eventTarget: l,
                                    eventStateKey: c,
                                    actionListId: d,
                                    groupIndex: s,
                                    isCarrier: u,
                                    origin: f,
                                    destination: p,
                                    immediate: I,
                                    verbose: g,
                                    continuous: m,
                                    parameterId: b,
                                    actionGroups: O,
                                    smoothing: _,
                                    restingValue: v,
                                    pluginInstance: h,
                                    pluginDuration: A,
                                    instanceDelay: S,
                                    skipMotion: R,
                                    skipToValue: L,
                                } = t.payload,
                                { actionTypeId: N } = i,
                                C = y(N),
                                M = T(C, N),
                                P = Object.keys(p).filter(
                                    (e) => null != p[e] && "string" != typeof p[e]
                                ),
                                { easing: w } = i.config;
                            return (0, o.set)(e, n, {
                                id: n,
                                elementId: a,
                                active: !1,
                                position: 0,
                                start: 0,
                                origin: f,
                                destination: p,
                                destinationKeys: P,
                                immediate: I,
                                verbose: g,
                                current: null,
                                actionItem: i,
                                actionTypeId: N,
                                eventId: r,
                                eventTarget: l,
                                eventStateKey: c,
                                actionListId: d,
                                groupIndex: s,
                                renderType: C,
                                isCarrier: u,
                                styleProp: M,
                                continuous: m,
                                parameterId: b,
                                actionGroups: O,
                                smoothing: _,
                                restingValue: v,
                                pluginInstance: h,
                                pluginDuration: A,
                                instanceDelay: S,
                                skipMotion: R,
                                skipToValue: L,
                                customEasingFn: Array.isArray(w) && 4 === w.length ? E(w) : void 0,
                            });
                        }
                        case d: {
                            let { instanceId: n, time: a } = t.payload;
                            return (0, o.mergeIn)(e, [n], { active: !0, complete: !1, start: a });
                        }
                        case s: {
                            let { instanceId: n } = t.payload;
                            if (!e[n]) return e;
                            let a = {},
                                i = Object.keys(e),
                                { length: o } = i;
                            for (let t = 0; t < o; t++) {
                                let o = i[t];
                                o !== n && (a[o] = e[o]);
                            }
                            return a;
                        }
                        case u: {
                            let n = e,
                                a = Object.keys(e),
                                { length: i } = a;
                            for (let r = 0; r < i; r++) {
                                let i = a[r],
                                    l = e[i],
                                    c = l.continuous ? m : b;
                                n = (0, o.set)(n, i, c(l, t));
                            }
                            return n;
                        }
                        default:
                            return e;
                    }
                };
        },
        1540: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "ixParameters", {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let {
                    IX2_RAW_DATA_IMPORTED: a,
                    IX2_SESSION_STOPPED: i,
                    IX2_PARAMETER_CHANGED: o,
                } = n(7087).IX2EngineActionTypes,
                r = (e = {}, t) => {
                    switch (t.type) {
                        case a:
                            return t.payload.ixParameters || {};
                        case i:
                            return {};
                        case o: {
                            let { key: n, value: a } = t.payload;
                            return (e[n] = a), e;
                        }
                        default:
                            return e;
                    }
                };
        },
        7243: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return u;
                    },
                });
            let a = n(9516),
                i = n(4609),
                o = n(628),
                r = n(5862),
                l = n(9468),
                c = n(7718),
                d = n(1540),
                { ixElements: s } = l.IX2ElementsReducer,
                u = (0, a.combineReducers)({
                    ixData: i.ixData,
                    ixRequest: o.ixRequest,
                    ixSession: r.ixSession,
                    ixElements: s,
                    ixInstances: c.ixInstances,
                    ixParameters: d.ixParameters,
                });
        },
        628: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "ixRequest", {
                    enumerable: !0,
                    get: function () {
                        return u;
                    },
                });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_PREVIEW_REQUESTED: o,
                    IX2_PLAYBACK_REQUESTED: r,
                    IX2_STOP_REQUESTED: l,
                    IX2_CLEAR_REQUESTED: c,
                } = a.IX2EngineActionTypes,
                d = { preview: {}, playback: {}, stop: {}, clear: {} },
                s = Object.create(null, {
                    [o]: { value: "preview" },
                    [r]: { value: "playback" },
                    [l]: { value: "stop" },
                    [c]: { value: "clear" },
                }),
                u = (e = d, t) => {
                    if (t.type in s) {
                        let n = [s[t.type]];
                        return (0, i.setIn)(e, [n], { ...t.payload });
                    }
                    return e;
                };
        },
        5862: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "ixSession", {
                    enumerable: !0,
                    get: function () {
                        return g;
                    },
                });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_SESSION_INITIALIZED: o,
                    IX2_SESSION_STARTED: r,
                    IX2_TEST_FRAME_RENDERED: l,
                    IX2_SESSION_STOPPED: c,
                    IX2_EVENT_LISTENER_ADDED: d,
                    IX2_EVENT_STATE_CHANGED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
                    IX2_VIEWPORT_WIDTH_CHANGED: p,
                    IX2_MEDIA_QUERIES_DEFINED: E,
                } = a.IX2EngineActionTypes,
                I = {
                    active: !1,
                    tick: 0,
                    eventListeners: [],
                    eventState: {},
                    playbackState: {},
                    viewportWidth: 0,
                    mediaQueryKey: null,
                    hasBoundaryNodes: !1,
                    hasDefinedMediaQueries: !1,
                    reducedMotion: !1,
                },
                g = (e = I, t) => {
                    switch (t.type) {
                        case o: {
                            let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
                            return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
                        }
                        case r:
                            return (0, i.set)(e, "active", !0);
                        case l: {
                            let {
                                payload: { step: n = 20 },
                            } = t;
                            return (0, i.set)(e, "tick", e.tick + n);
                        }
                        case c:
                            return I;
                        case u: {
                            let {
                                payload: { now: n },
                            } = t;
                            return (0, i.set)(e, "tick", n);
                        }
                        case d: {
                            let n = (0, i.addLast)(e.eventListeners, t.payload);
                            return (0, i.set)(e, "eventListeners", n);
                        }
                        case s: {
                            let { stateKey: n, newState: a } = t.payload;
                            return (0, i.setIn)(e, ["eventState", n], a);
                        }
                        case f: {
                            let { actionListId: n, isPlaying: a } = t.payload;
                            return (0, i.setIn)(e, ["playbackState", n], a);
                        }
                        case p: {
                            let { width: n, mediaQueries: a } = t.payload,
                                o = a.length,
                                r = null;
                            for (let e = 0; e < o; e++) {
                                let { key: t, min: i, max: o } = a[e];
                                if (n >= i && n <= o) {
                                    r = t;
                                    break;
                                }
                            }
                            return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: r });
                        }
                        case E:
                            return (0, i.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e;
                    }
                };
        },
        7377: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = {
                clearPlugin: function () {
                    return s;
                },
                createPluginInstance: function () {
                    return c;
                },
                getPluginConfig: function () {
                    return i;
                },
                getPluginDestination: function () {
                    return l;
                },
                getPluginDuration: function () {
                    return o;
                },
                getPluginOrigin: function () {
                    return r;
                },
                renderPlugin: function () {
                    return d;
                },
            };
            for (var a in n) Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
            let i = (e) => e.value,
                o = (e, t) => {
                    if ("auto" !== t.config.duration) return null;
                    let n = parseFloat(e.getAttribute("data-duration"));
                    return n > 0
                        ? 1e3 * n
                        : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
                },
                r = (e) => e || { value: 0 },
                l = (e) => ({ value: e.value }),
                c = (e) => {
                    let t = window.Webflow.require("lottie");
                    if (!t) return null;
                    let n = t.createInstance(e);
                    return n.stop(), n.setSubframe(!0), n;
                },
                d = (e, t, n) => {
                    if (!e) return;
                    let a = t[n.actionTypeId].value / 100;
                    e.goToFrame(e.frames * a);
                },
                s = (e) => {
                    let t = window.Webflow.require("lottie");
                    t && t.createInstance(e).stop();
                };
        },
        2570: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = {
                clearPlugin: function () {
                    return E;
                },
                createPluginInstance: function () {
                    return f;
                },
                getPluginConfig: function () {
                    return c;
                },
                getPluginDestination: function () {
                    return u;
                },
                getPluginDuration: function () {
                    return d;
                },
                getPluginOrigin: function () {
                    return s;
                },
                renderPlugin: function () {
                    return p;
                },
            };
            for (var a in n) Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
            let i = "--wf-rive-fit",
                o = "--wf-rive-alignment",
                r = (e) => document.querySelector(`[data-w-id="${e}"]`),
                l = () => window.Webflow.require("rive"),
                c = (e, t) => e.value.inputs[t],
                d = () => null,
                s = (e, t) => {
                    if (e) return e;
                    let n = {},
                        { inputs: a = {} } = t.config.value;
                    for (let e in a) null == a[e] && (n[e] = 0);
                    return n;
                },
                u = (e) => e.value.inputs ?? {},
                f = (e, t) => {
                    if ((t.config?.target?.selectorGuids || []).length > 0) return e;
                    let n = t?.config?.target?.pluginElement;
                    return n ? r(n) : null;
                },
                p = (e, { PLUGIN_RIVE: t }, n) => {
                    let a = l();
                    if (!a) return;
                    let r = a.getInstance(e),
                        c = a.rive.StateMachineInputType,
                        { name: d, inputs: s = {} } = n.config.value || {};
                    function u(e) {
                        if (e.loaded) n();
                        else {
                            let t = () => {
                                n(), e?.off("load", t);
                            };
                            e?.on("load", t);
                        }
                        function n() {
                            let n = e.stateMachineInputs(d);
                            if (null != n) {
                                if ((e.isPlaying || e.play(d, !1), i in s || o in s)) {
                                    let t = e.layout,
                                        n = s[i] ?? t.fit,
                                        a = s[o] ?? t.alignment;
                                    (n !== t.fit || a !== t.alignment) &&
                                        (e.layout = t.copyWith({ fit: n, alignment: a }));
                                }
                                for (let e in s) {
                                    if (e === i || e === o) continue;
                                    let a = n.find((t) => t.name === e);
                                    if (null != a)
                                        switch (a.type) {
                                            case c.Boolean:
                                                null != s[e] && (a.value = !!s[e]);
                                                break;
                                            case c.Number: {
                                                let n = t[e];
                                                null != n && (a.value = n);
                                                break;
                                            }
                                            case c.Trigger:
                                                s[e] && a.fire();
                                        }
                                }
                            }
                        }
                    }
                    r?.rive ? u(r.rive) : a.setLoadHandler(e, u);
                },
                E = (e, t) => null;
        },
        2866: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = {
                clearPlugin: function () {
                    return E;
                },
                createPluginInstance: function () {
                    return f;
                },
                getPluginConfig: function () {
                    return l;
                },
                getPluginDestination: function () {
                    return u;
                },
                getPluginDuration: function () {
                    return c;
                },
                getPluginOrigin: function () {
                    return s;
                },
                renderPlugin: function () {
                    return p;
                },
            };
            for (var a in n) Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
            let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
                o = () => window.Webflow.require("spline"),
                r = (e, t) => e.filter((e) => !t.includes(e)),
                l = (e, t) => e.value[t],
                c = () => null,
                d = Object.freeze({
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                }),
                s = (e, t) => {
                    let n = Object.keys(t.config.value);
                    if (e) {
                        let t = r(n, Object.keys(e));
                        return t.length ? t.reduce((e, t) => ((e[t] = d[t]), e), e) : e;
                    }
                    return n.reduce((e, t) => ((e[t] = d[t]), e), {});
                },
                u = (e) => e.value,
                f = (e, t) => {
                    let n = t?.config?.target?.pluginElement;
                    return n ? i(n) : null;
                },
                p = (e, t, n) => {
                    let a = o();
                    if (!a) return;
                    let i = a.getInstance(e),
                        r = n.config.target.objectId,
                        l = (e) => {
                            if (!e) throw Error("Invalid spline app passed to renderSpline");
                            let n = r && e.findObjectById(r);
                            if (!n) return;
                            let { PLUGIN_SPLINE: a } = t;
                            null != a.positionX && (n.position.x = a.positionX),
                                null != a.positionY && (n.position.y = a.positionY),
                                null != a.positionZ && (n.position.z = a.positionZ),
                                null != a.rotationX && (n.rotation.x = a.rotationX),
                                null != a.rotationY && (n.rotation.y = a.rotationY),
                                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                                null != a.scaleX && (n.scale.x = a.scaleX),
                                null != a.scaleY && (n.scale.y = a.scaleY),
                                null != a.scaleZ && (n.scale.z = a.scaleZ);
                        };
                    i ? l(i.spline) : a.setLoadHandler(e, l);
                },
                E = () => null;
        },
        1407: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = {
                clearPlugin: function () {
                    return p;
                },
                createPluginInstance: function () {
                    return s;
                },
                getPluginConfig: function () {
                    return r;
                },
                getPluginDestination: function () {
                    return d;
                },
                getPluginDuration: function () {
                    return l;
                },
                getPluginOrigin: function () {
                    return c;
                },
                renderPlugin: function () {
                    return f;
                },
            };
            for (var i in a) Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
            let o = n(380),
                r = (e, t) => e.value[t],
                l = () => null,
                c = (e, t) => {
                    if (e) return e;
                    let n = t.config.value,
                        a = t.config.target.objectId,
                        i = getComputedStyle(document.documentElement).getPropertyValue(a);
                    return null != n.size
                        ? { size: parseInt(i, 10) }
                        : "%" === n.unit || "-" === n.unit
                        ? { size: parseFloat(i) }
                        : null != n.red && null != n.green && null != n.blue
                        ? (0, o.normalizeColor)(i)
                        : void 0;
                },
                d = (e) => e.value,
                s = () => null,
                u = {
                    color: {
                        match: ({ red: e, green: t, blue: n, alpha: a }) =>
                            [e, t, n, a].every((e) => null != e),
                        getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
                            `rgba(${e}, ${t}, ${n}, ${a})`,
                    },
                    size: {
                        match: ({ size: e }) => null != e,
                        getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
                    },
                },
                f = (e, t, n) => {
                    let {
                            target: { objectId: a },
                            value: { unit: i },
                        } = n.config,
                        o = t.PLUGIN_VARIABLE,
                        r = Object.values(u).find((e) => e.match(o, i));
                    r && document.documentElement.style.setProperty(a, r.getValue(o, i));
                },
                p = (e, t) => {
                    let n = t.config.target.objectId;
                    document.documentElement.style.removeProperty(n);
                };
        },
        3690: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "pluginMethodMap", {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                });
            let a = n(7087),
                i = d(n(7377)),
                o = d(n(2866)),
                r = d(n(2570)),
                l = d(n(1407));
            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap(),
                    n = new WeakMap();
                return (c = function (e) {
                    return e ? n : t;
                })(e);
            }
            function d(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e))
                    return { default: e };
                var n = c(t);
                if (n && n.has(e)) return n.get(e);
                var a = { __proto__: null },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : (a[o] = e[o]);
                    }
                return (a.default = e), n && n.set(e, a), a;
            }
            let s = new Map([
                [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
                [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
                [a.ActionTypeConsts.PLUGIN_RIVE, { ...r }],
                [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...l }],
            ]);
        },
        8023: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = {
                IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
                    return b;
                },
                IX2_ANIMATION_FRAME_CHANGED: function () {
                    return E;
                },
                IX2_CLEAR_REQUESTED: function () {
                    return u;
                },
                IX2_ELEMENT_STATE_CHANGED: function () {
                    return m;
                },
                IX2_EVENT_LISTENER_ADDED: function () {
                    return f;
                },
                IX2_EVENT_STATE_CHANGED: function () {
                    return p;
                },
                IX2_INSTANCE_ADDED: function () {
                    return g;
                },
                IX2_INSTANCE_REMOVED: function () {
                    return T;
                },
                IX2_INSTANCE_STARTED: function () {
                    return y;
                },
                IX2_MEDIA_QUERIES_DEFINED: function () {
                    return _;
                },
                IX2_PARAMETER_CHANGED: function () {
                    return I;
                },
                IX2_PLAYBACK_REQUESTED: function () {
                    return d;
                },
                IX2_PREVIEW_REQUESTED: function () {
                    return c;
                },
                IX2_RAW_DATA_IMPORTED: function () {
                    return i;
                },
                IX2_SESSION_INITIALIZED: function () {
                    return o;
                },
                IX2_SESSION_STARTED: function () {
                    return r;
                },
                IX2_SESSION_STOPPED: function () {
                    return l;
                },
                IX2_STOP_REQUESTED: function () {
                    return s;
                },
                IX2_TEST_FRAME_RENDERED: function () {
                    return v;
                },
                IX2_VIEWPORT_WIDTH_CHANGED: function () {
                    return O;
                },
            };
            for (var a in n) Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
            let i = "IX2_RAW_DATA_IMPORTED",
                o = "IX2_SESSION_INITIALIZED",
                r = "IX2_SESSION_STARTED",
                l = "IX2_SESSION_STOPPED",
                c = "IX2_PREVIEW_REQUESTED",
                d = "IX2_PLAYBACK_REQUESTED",
                s = "IX2_STOP_REQUESTED",
                u = "IX2_CLEAR_REQUESTED",
                f = "IX2_EVENT_LISTENER_ADDED",
                p = "IX2_EVENT_STATE_CHANGED",
                E = "IX2_ANIMATION_FRAME_CHANGED",
                I = "IX2_PARAMETER_CHANGED",
                g = "IX2_INSTANCE_ADDED",
                y = "IX2_INSTANCE_STARTED",
                T = "IX2_INSTANCE_REMOVED",
                m = "IX2_ELEMENT_STATE_CHANGED",
                b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
                O = "IX2_VIEWPORT_WIDTH_CHANGED",
                _ = "IX2_MEDIA_QUERIES_DEFINED",
                v = "IX2_TEST_FRAME_RENDERED";
        },
        2686: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = {
                ABSTRACT_NODE: function () {
                    return et;
                },
                AUTO: function () {
                    return j;
                },
                BACKGROUND: function () {
                    return x;
                },
                BACKGROUND_COLOR: function () {
                    return V;
                },
                BAR_DELIMITER: function () {
                    return H;
                },
                BORDER_COLOR: function () {
                    return k;
                },
                BOUNDARY_SELECTOR: function () {
                    return c;
                },
                CHILDREN: function () {
                    return Y;
                },
                COLON_DELIMITER: function () {
                    return z;
                },
                COLOR: function () {
                    return D;
                },
                COMMA_DELIMITER: function () {
                    return W;
                },
                CONFIG_UNIT: function () {
                    return g;
                },
                CONFIG_VALUE: function () {
                    return f;
                },
                CONFIG_X_UNIT: function () {
                    return p;
                },
                CONFIG_X_VALUE: function () {
                    return d;
                },
                CONFIG_Y_UNIT: function () {
                    return E;
                },
                CONFIG_Y_VALUE: function () {
                    return s;
                },
                CONFIG_Z_UNIT: function () {
                    return I;
                },
                CONFIG_Z_VALUE: function () {
                    return u;
                },
                DISPLAY: function () {
                    return B;
                },
                FILTER: function () {
                    return w;
                },
                FLEX: function () {
                    return X;
                },
                FONT_VARIATION_SETTINGS: function () {
                    return U;
                },
                HEIGHT: function () {
                    return F;
                },
                HTML_ELEMENT: function () {
                    return J;
                },
                IMMEDIATE_CHILDREN: function () {
                    return $;
                },
                IX2_ID_DELIMITER: function () {
                    return i;
                },
                OPACITY: function () {
                    return P;
                },
                PARENT: function () {
                    return K;
                },
                PLAIN_OBJECT: function () {
                    return ee;
                },
                PRESERVE_3D: function () {
                    return Z;
                },
                RENDER_GENERAL: function () {
                    return ea;
                },
                RENDER_PLUGIN: function () {
                    return eo;
                },
                RENDER_STYLE: function () {
                    return ei;
                },
                RENDER_TRANSFORM: function () {
                    return en;
                },
                ROTATE_X: function () {
                    return S;
                },
                ROTATE_Y: function () {
                    return R;
                },
                ROTATE_Z: function () {
                    return L;
                },
                SCALE_3D: function () {
                    return A;
                },
                SCALE_X: function () {
                    return _;
                },
                SCALE_Y: function () {
                    return v;
                },
                SCALE_Z: function () {
                    return h;
                },
                SIBLINGS: function () {
                    return q;
                },
                SKEW: function () {
                    return N;
                },
                SKEW_X: function () {
                    return C;
                },
                SKEW_Y: function () {
                    return M;
                },
                TRANSFORM: function () {
                    return y;
                },
                TRANSLATE_3D: function () {
                    return O;
                },
                TRANSLATE_X: function () {
                    return T;
                },
                TRANSLATE_Y: function () {
                    return m;
                },
                TRANSLATE_Z: function () {
                    return b;
                },
                WF_PAGE: function () {
                    return o;
                },
                WIDTH: function () {
                    return G;
                },
                WILL_CHANGE: function () {
                    return Q;
                },
                W_MOD_IX: function () {
                    return l;
                },
                W_MOD_JS: function () {
                    return r;
                },
            };
            for (var a in n) Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
            let i = "|",
                o = "data-wf-page",
                r = "w-mod-js",
                l = "w-mod-ix",
                c = ".w-dyn-item",
                d = "xValue",
                s = "yValue",
                u = "zValue",
                f = "value",
                p = "xUnit",
                E = "yUnit",
                I = "zUnit",
                g = "unit",
                y = "transform",
                T = "translateX",
                m = "translateY",
                b = "translateZ",
                O = "translate3d",
                _ = "scaleX",
                v = "scaleY",
                h = "scaleZ",
                A = "scale3d",
                S = "rotateX",
                R = "rotateY",
                L = "rotateZ",
                N = "skew",
                C = "skewX",
                M = "skewY",
                P = "opacity",
                w = "filter",
                U = "font-variation-settings",
                G = "width",
                F = "height",
                V = "backgroundColor",
                x = "background",
                k = "borderColor",
                D = "color",
                B = "display",
                X = "flex",
                Q = "willChange",
                j = "AUTO",
                W = ",",
                z = ":",
                H = "|",
                Y = "CHILDREN",
                $ = "IMMEDIATE_CHILDREN",
                q = "SIBLINGS",
                K = "PARENT",
                Z = "preserve-3d",
                J = "HTML_ELEMENT",
                ee = "PLAIN_OBJECT",
                et = "ABSTRACT_NODE",
                en = "RENDER_TRANSFORM",
                ea = "RENDER_GENERAL",
                ei = "RENDER_STYLE",
                eo = "RENDER_PLUGIN";
        },
        262: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = {
                ActionAppliesTo: function () {
                    return o;
                },
                ActionTypeConsts: function () {
                    return i;
                },
            };
            for (var a in n) Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
            let i = {
                    TRANSFORM_MOVE: "TRANSFORM_MOVE",
                    TRANSFORM_SCALE: "TRANSFORM_SCALE",
                    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
                    TRANSFORM_SKEW: "TRANSFORM_SKEW",
                    STYLE_OPACITY: "STYLE_OPACITY",
                    STYLE_SIZE: "STYLE_SIZE",
                    STYLE_FILTER: "STYLE_FILTER",
                    STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
                    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
                    STYLE_BORDER: "STYLE_BORDER",
                    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
                    OBJECT_VALUE: "OBJECT_VALUE",
                    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
                    PLUGIN_SPLINE: "PLUGIN_SPLINE",
                    PLUGIN_RIVE: "PLUGIN_RIVE",
                    PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                    GENERAL_DISPLAY: "GENERAL_DISPLAY",
                    GENERAL_START_ACTION: "GENERAL_START_ACTION",
                    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                    GENERAL_LOOP: "GENERAL_LOOP",
                    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
                },
                o = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
                };
        },
        7087: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = {
                ActionTypeConsts: function () {
                    return r.ActionTypeConsts;
                },
                IX2EngineActionTypes: function () {
                    return l;
                },
                IX2EngineConstants: function () {
                    return c;
                },
                QuickEffectIds: function () {
                    return o.QuickEffectIds;
                },
            };
            for (var i in a) Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
            let o = d(n(1833), t),
                r = d(n(262), t);
            d(n(8704), t), d(n(3213), t);
            let l = u(n(8023)),
                c = u(n(2686));
            function d(e, t) {
                return (
                    Object.keys(e).forEach(function (n) {
                        "default" === n ||
                            Object.prototype.hasOwnProperty.call(t, n) ||
                            Object.defineProperty(t, n, {
                                enumerable: !0,
                                get: function () {
                                    return e[n];
                                },
                            });
                    }),
                    e
                );
            }
            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap(),
                    n = new WeakMap();
                return (s = function (e) {
                    return e ? n : t;
                })(e);
            }
            function u(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e))
                    return { default: e };
                var n = s(t);
                if (n && n.has(e)) return n.get(e);
                var a = { __proto__: null },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : (a[o] = e[o]);
                    }
                return (a.default = e), n && n.set(e, a), a;
            }
        },
        3213: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "ReducedMotionTypes", {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                });
            let {
                    TRANSFORM_MOVE: a,
                    TRANSFORM_SCALE: i,
                    TRANSFORM_ROTATE: o,
                    TRANSFORM_SKEW: r,
                    STYLE_SIZE: l,
                    STYLE_FILTER: c,
                    STYLE_FONT_VARIATION: d,
                } = n(262).ActionTypeConsts,
                s = { [a]: !0, [i]: !0, [o]: !0, [r]: !0, [l]: !0, [c]: !0, [d]: !0 };
        },
        1833: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = {
                EventAppliesTo: function () {
                    return o;
                },
                EventBasedOn: function () {
                    return r;
                },
                EventContinuousMouseAxes: function () {
                    return l;
                },
                EventLimitAffectedElements: function () {
                    return c;
                },
                EventTypeConsts: function () {
                    return i;
                },
                QuickEffectDirectionConsts: function () {
                    return s;
                },
                QuickEffectIds: function () {
                    return d;
                },
            };
            for (var a in n) Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
            let i = {
                    NAVBAR_OPEN: "NAVBAR_OPEN",
                    NAVBAR_CLOSE: "NAVBAR_CLOSE",
                    TAB_ACTIVE: "TAB_ACTIVE",
                    TAB_INACTIVE: "TAB_INACTIVE",
                    SLIDER_ACTIVE: "SLIDER_ACTIVE",
                    SLIDER_INACTIVE: "SLIDER_INACTIVE",
                    DROPDOWN_OPEN: "DROPDOWN_OPEN",
                    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                    MOUSE_CLICK: "MOUSE_CLICK",
                    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                    MOUSE_DOWN: "MOUSE_DOWN",
                    MOUSE_UP: "MOUSE_UP",
                    MOUSE_OVER: "MOUSE_OVER",
                    MOUSE_OUT: "MOUSE_OUT",
                    MOUSE_MOVE: "MOUSE_MOVE",
                    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                    PAGE_START: "PAGE_START",
                    PAGE_FINISH: "PAGE_FINISH",
                    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                    PAGE_SCROLL: "PAGE_SCROLL",
                },
                o = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
                r = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
                l = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
                c = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
                },
                d = {
                    FADE_EFFECT: "FADE_EFFECT",
                    SLIDE_EFFECT: "SLIDE_EFFECT",
                    GROW_EFFECT: "GROW_EFFECT",
                    SHRINK_EFFECT: "SHRINK_EFFECT",
                    SPIN_EFFECT: "SPIN_EFFECT",
                    FLY_EFFECT: "FLY_EFFECT",
                    POP_EFFECT: "POP_EFFECT",
                    FLIP_EFFECT: "FLIP_EFFECT",
                    JIGGLE_EFFECT: "JIGGLE_EFFECT",
                    PULSE_EFFECT: "PULSE_EFFECT",
                    DROP_EFFECT: "DROP_EFFECT",
                    BLINK_EFFECT: "BLINK_EFFECT",
                    BOUNCE_EFFECT: "BOUNCE_EFFECT",
                    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                    JELLO_EFFECT: "JELLO_EFFECT",
                    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
                },
                s = {
                    LEFT: "LEFT",
                    RIGHT: "RIGHT",
                    BOTTOM: "BOTTOM",
                    TOP: "TOP",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_LEFT: "TOP_LEFT",
                    CLOCKWISE: "CLOCKWISE",
                    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
                };
        },
        8704: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "InteractionTypeConsts", {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                });
            let n = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION",
            };
        },
        380: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "normalizeColor", {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let n = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aqua: "#00FFFF",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blue: "#0000FF",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                fuchsia: "#FF00FF",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#ADFF2F",
                grey: "#808080",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgray: "#D3D3D3",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                lime: "#00FF00",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                maroon: "#800000",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                navy: "#000080",
                oldlace: "#FDF5E6",
                olive: "#808000",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#FF0000",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                silver: "#C0C0C0",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                teal: "#008080",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                white: "#FFFFFF",
                whitesmoke: "#F5F5F5",
                yellow: "#FFFF00",
                yellowgreen: "#9ACD32",
            };
            function a(e) {
                let t,
                    a,
                    i,
                    o = 1,
                    r = e.replace(/\s/g, "").toLowerCase(),
                    l = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
                if (l.startsWith("#")) {
                    let e = l.substring(1);
                    3 === e.length || 4 === e.length
                        ? ((t = parseInt(e[0] + e[0], 16)),
                          (a = parseInt(e[1] + e[1], 16)),
                          (i = parseInt(e[2] + e[2], 16)),
                          4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
                        : (6 === e.length || 8 === e.length) &&
                          ((t = parseInt(e.substring(0, 2), 16)),
                          (a = parseInt(e.substring(2, 4), 16)),
                          (i = parseInt(e.substring(4, 6), 16)),
                          8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
                } else if (l.startsWith("rgba")) {
                    let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
                    (t = parseInt(e[0], 10)),
                        (a = parseInt(e[1], 10)),
                        (i = parseInt(e[2], 10)),
                        (o = parseFloat(e[3]));
                } else if (l.startsWith("rgb")) {
                    let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
                    (t = parseInt(e[0], 10)), (a = parseInt(e[1], 10)), (i = parseInt(e[2], 10));
                } else if (l.startsWith("hsla")) {
                    let e,
                        n,
                        r,
                        c = l.match(/hsla\(([^)]+)\)/)[1].split(","),
                        d = parseFloat(c[0]),
                        s = parseFloat(c[1].replace("%", "")) / 100,
                        u = parseFloat(c[2].replace("%", "")) / 100;
                    o = parseFloat(c[3]);
                    let f = (1 - Math.abs(2 * u - 1)) * s,
                        p = f * (1 - Math.abs(((d / 60) % 2) - 1)),
                        E = u - f / 2;
                    d >= 0 && d < 60
                        ? ((e = f), (n = p), (r = 0))
                        : d >= 60 && d < 120
                        ? ((e = p), (n = f), (r = 0))
                        : d >= 120 && d < 180
                        ? ((e = 0), (n = f), (r = p))
                        : d >= 180 && d < 240
                        ? ((e = 0), (n = p), (r = f))
                        : d >= 240 && d < 300
                        ? ((e = p), (n = 0), (r = f))
                        : ((e = f), (n = 0), (r = p)),
                        (t = Math.round((e + E) * 255)),
                        (a = Math.round((n + E) * 255)),
                        (i = Math.round((r + E) * 255));
                } else if (l.startsWith("hsl")) {
                    let e,
                        n,
                        o,
                        r = l.match(/hsl\(([^)]+)\)/)[1].split(","),
                        c = parseFloat(r[0]),
                        d = parseFloat(r[1].replace("%", "")) / 100,
                        s = parseFloat(r[2].replace("%", "")) / 100,
                        u = (1 - Math.abs(2 * s - 1)) * d,
                        f = u * (1 - Math.abs(((c / 60) % 2) - 1)),
                        p = s - u / 2;
                    c >= 0 && c < 60
                        ? ((e = u), (n = f), (o = 0))
                        : c >= 60 && c < 120
                        ? ((e = f), (n = u), (o = 0))
                        : c >= 120 && c < 180
                        ? ((e = 0), (n = u), (o = f))
                        : c >= 180 && c < 240
                        ? ((e = 0), (n = f), (o = u))
                        : c >= 240 && c < 300
                        ? ((e = f), (n = 0), (o = u))
                        : ((e = u), (n = 0), (o = f)),
                        (t = Math.round((e + p) * 255)),
                        (a = Math.round((n + p) * 255)),
                        (i = Math.round((o + p) * 255));
                }
                if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
                    throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
                return { red: t, green: a, blue: i, alpha: o };
            }
        },
        9468: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = {
                IX2BrowserSupport: function () {
                    return o;
                },
                IX2EasingUtils: function () {
                    return l;
                },
                IX2Easings: function () {
                    return r;
                },
                IX2ElementsReducer: function () {
                    return c;
                },
                IX2VanillaPlugins: function () {
                    return d;
                },
                IX2VanillaUtils: function () {
                    return s;
                },
            };
            for (var i in a) Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
            let o = f(n(2662)),
                r = f(n(8686)),
                l = f(n(3767)),
                c = f(n(5861)),
                d = f(n(1799)),
                s = f(n(4124));
            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap(),
                    n = new WeakMap();
                return (u = function (e) {
                    return e ? n : t;
                })(e);
            }
            function f(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || ("object" != typeof e && "function" != typeof e))
                    return { default: e };
                var n = u(t);
                if (n && n.has(e)) return n.get(e);
                var a = { __proto__: null },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : (a[o] = e[o]);
                    }
                return (a.default = e), n && n.set(e, a), a;
            }
        },
        2662: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a,
                i = {
                    ELEMENT_MATCHES: function () {
                        return d;
                    },
                    FLEX_PREFIXED: function () {
                        return s;
                    },
                    IS_BROWSER_ENV: function () {
                        return l;
                    },
                    TRANSFORM_PREFIXED: function () {
                        return u;
                    },
                    TRANSFORM_STYLE_PREFIXED: function () {
                        return p;
                    },
                    withBrowser: function () {
                        return c;
                    },
                };
            for (var o in i) Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
            let r = (a = n(9777)) && a.__esModule ? a : { default: a },
                l = "undefined" != typeof window,
                c = (e, t) => (l ? e() : t),
                d = c(() =>
                    (0, r.default)(
                        [
                            "matches",
                            "matchesSelector",
                            "mozMatchesSelector",
                            "msMatchesSelector",
                            "oMatchesSelector",
                            "webkitMatchesSelector",
                        ],
                        (e) => e in Element.prototype
                    )
                ),
                s = c(() => {
                    let e = document.createElement("i"),
                        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                    try {
                        let { length: n } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a];
                            if (((e.style.display = n), e.style.display === n)) return n;
                        }
                        return "";
                    } catch (e) {
                        return "";
                    }
                }, "flex"),
                u = c(() => {
                    let e = document.createElement("i");
                    if (null == e.style.transform) {
                        let t = ["Webkit", "Moz", "ms"],
                            { length: n } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a] + "Transform";
                            if (void 0 !== e.style[n]) return n;
                        }
                    }
                    return "transform";
                }, "transform"),
                f = u.split("transform")[0],
                p = f ? f + "TransformStyle" : "transformStyle";
        },
        3767: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a,
                i = {
                    applyEasing: function () {
                        return u;
                    },
                    createBezierEasing: function () {
                        return s;
                    },
                    optimizeFloat: function () {
                        return d;
                    },
                };
            for (var o in i) Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
            let r = (function (e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e))
                        return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : (a[o] = e[o]);
                        }
                    return (a.default = e), n && n.set(e, a), a;
                })(n(8686)),
                l = (a = n(1361)) && a.__esModule ? a : { default: a };
            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap(),
                    n = new WeakMap();
                return (c = function (e) {
                    return e ? n : t;
                })(e);
            }
            function d(e, t = 5, n = 10) {
                let a = Math.pow(n, t),
                    i = Number(Math.round(e * a) / a);
                return Math.abs(i) > 1e-4 ? i : 0;
            }
            function s(e) {
                return (0, l.default)(...e);
            }
            function u(e, t, n) {
                return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : n
                    ? d(t > 0 ? n(t) : t)
                    : d(t > 0 && e && r[e] ? r[e](t) : t);
            }
        },
        8686: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a,
                i = {
                    bounce: function () {
                        return X;
                    },
                    bouncePast: function () {
                        return Q;
                    },
                    ease: function () {
                        return l;
                    },
                    easeIn: function () {
                        return c;
                    },
                    easeInOut: function () {
                        return s;
                    },
                    easeOut: function () {
                        return d;
                    },
                    inBack: function () {
                        return w;
                    },
                    inCirc: function () {
                        return N;
                    },
                    inCubic: function () {
                        return E;
                    },
                    inElastic: function () {
                        return F;
                    },
                    inExpo: function () {
                        return S;
                    },
                    inOutBack: function () {
                        return G;
                    },
                    inOutCirc: function () {
                        return M;
                    },
                    inOutCubic: function () {
                        return g;
                    },
                    inOutElastic: function () {
                        return x;
                    },
                    inOutExpo: function () {
                        return L;
                    },
                    inOutQuad: function () {
                        return p;
                    },
                    inOutQuart: function () {
                        return m;
                    },
                    inOutQuint: function () {
                        return _;
                    },
                    inOutSine: function () {
                        return A;
                    },
                    inQuad: function () {
                        return u;
                    },
                    inQuart: function () {
                        return y;
                    },
                    inQuint: function () {
                        return b;
                    },
                    inSine: function () {
                        return v;
                    },
                    outBack: function () {
                        return U;
                    },
                    outBounce: function () {
                        return P;
                    },
                    outCirc: function () {
                        return C;
                    },
                    outCubic: function () {
                        return I;
                    },
                    outElastic: function () {
                        return V;
                    },
                    outExpo: function () {
                        return R;
                    },
                    outQuad: function () {
                        return f;
                    },
                    outQuart: function () {
                        return T;
                    },
                    outQuint: function () {
                        return O;
                    },
                    outSine: function () {
                        return h;
                    },
                    swingFrom: function () {
                        return D;
                    },
                    swingFromTo: function () {
                        return k;
                    },
                    swingTo: function () {
                        return B;
                    },
                };
            for (var o in i) Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
            let r = (a = n(1361)) && a.__esModule ? a : { default: a },
                l = (0, r.default)(0.25, 0.1, 0.25, 1),
                c = (0, r.default)(0.42, 0, 1, 1),
                d = (0, r.default)(0, 0, 0.58, 1),
                s = (0, r.default)(0.42, 0, 0.58, 1);
            function u(e) {
                return Math.pow(e, 2);
            }
            function f(e) {
                return -(Math.pow(e - 1, 2) - 1);
            }
            function p(e) {
                return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
            }
            function E(e) {
                return Math.pow(e, 3);
            }
            function I(e) {
                return Math.pow(e - 1, 3) + 1;
            }
            function g(e) {
                return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
            }
            function y(e) {
                return Math.pow(e, 4);
            }
            function T(e) {
                return -(Math.pow(e - 1, 4) - 1);
            }
            function m(e) {
                return (e /= 0.5) < 1
                    ? 0.5 * Math.pow(e, 4)
                    : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
            }
            function b(e) {
                return Math.pow(e, 5);
            }
            function O(e) {
                return Math.pow(e - 1, 5) + 1;
            }
            function _(e) {
                return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
            }
            function v(e) {
                return -Math.cos((Math.PI / 2) * e) + 1;
            }
            function h(e) {
                return Math.sin((Math.PI / 2) * e);
            }
            function A(e) {
                return -0.5 * (Math.cos(Math.PI * e) - 1);
            }
            function S(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
            }
            function R(e) {
                return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
            }
            function L(e) {
                return 0 === e
                    ? 0
                    : 1 === e
                    ? 1
                    : (e /= 0.5) < 1
                    ? 0.5 * Math.pow(2, 10 * (e - 1))
                    : 0.5 * (-Math.pow(2, -10 * --e) + 2);
            }
            function N(e) {
                return -(Math.sqrt(1 - e * e) - 1);
            }
            function C(e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2));
            }
            function M(e) {
                return (e /= 0.5) < 1
                    ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                    : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
            }
            function P(e) {
                return e < 1 / 2.75
                    ? 7.5625 * e * e
                    : e < 2 / 2.75
                    ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                    : e < 2.5 / 2.75
                    ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                    : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
            }
            function w(e) {
                return e * e * (2.70158 * e - 1.70158);
            }
            function U(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
            }
            function G(e) {
                let t = 1.70158;
                return (e /= 0.5) < 1
                    ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
                    : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
            }
            function F(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e
                    ? 0
                    : 1 === e
                    ? 1
                    : (n || (n = 0.3),
                      a < 1 ? ((a = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
                      -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e - t)) / n)));
            }
            function V(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e
                    ? 0
                    : 1 === e
                    ? 1
                    : (n || (n = 0.3),
                      a < 1 ? ((a = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
                      a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) + 1);
            }
            function x(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e
                    ? 0
                    : 2 == (e /= 0.5)
                    ? 1
                    : (n || (n = 0.3 * 1.5),
                      a < 1 ? ((a = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
                      e < 1)
                    ? -0.5 *
                      (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e - t)) / n))
                    : a *
                          Math.pow(2, -10 * (e -= 1)) *
                          Math.sin((2 * Math.PI * (e - t)) / n) *
                          0.5 +
                      1;
            }
            function k(e) {
                let t = 1.70158;
                return (e /= 0.5) < 1
                    ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
                    : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
            }
            function D(e) {
                return e * e * (2.70158 * e - 1.70158);
            }
            function B(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
            }
            function X(e) {
                return e < 1 / 2.75
                    ? 7.5625 * e * e
                    : e < 2 / 2.75
                    ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                    : e < 2.5 / 2.75
                    ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                    : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
            }
            function Q(e) {
                return e < 1 / 2.75
                    ? 7.5625 * e * e
                    : e < 2 / 2.75
                    ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                    : e < 2.5 / 2.75
                    ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                    : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
            }
        },
        1799: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = {
                clearPlugin: function () {
                    return I;
                },
                createPluginInstance: function () {
                    return p;
                },
                getPluginConfig: function () {
                    return d;
                },
                getPluginDestination: function () {
                    return f;
                },
                getPluginDuration: function () {
                    return u;
                },
                getPluginOrigin: function () {
                    return s;
                },
                isPluginType: function () {
                    return l;
                },
                renderPlugin: function () {
                    return E;
                },
            };
            for (var i in a) Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
            let o = n(2662),
                r = n(3690);
            function l(e) {
                return r.pluginMethodMap.has(e);
            }
            let c = (e) => (t) => {
                    if (!o.IS_BROWSER_ENV) return () => null;
                    let n = r.pluginMethodMap.get(t);
                    if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
                    let a = n[e];
                    if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
                    return a;
                },
                d = c("getPluginConfig"),
                s = c("getPluginOrigin"),
                u = c("getPluginDuration"),
                f = c("getPluginDestination"),
                p = c("createPluginInstance"),
                E = c("renderPlugin"),
                I = c("clearPlugin");
        },
        4124: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = {
                cleanupHTMLElement: function () {
                    return eW;
                },
                clearAllStyles: function () {
                    return eX;
                },
                clearObjectCache: function () {
                    return eu;
                },
                getActionListProgress: function () {
                    return e$;
                },
                getAffectedElements: function () {
                    return eb;
                },
                getComputedStyle: function () {
                    return eO;
                },
                getDestinationValues: function () {
                    return eN;
                },
                getElementId: function () {
                    return eI;
                },
                getInstanceId: function () {
                    return ep;
                },
                getInstanceOrigin: function () {
                    return eA;
                },
                getItemConfigByKey: function () {
                    return eL;
                },
                getMaxDurationItemIndex: function () {
                    return eY;
                },
                getNamespacedParameterId: function () {
                    return eZ;
                },
                getRenderType: function () {
                    return eC;
                },
                getStyleProp: function () {
                    return eM;
                },
                mediaQueriesEqual: function () {
                    return e0;
                },
                observeStore: function () {
                    return eT;
                },
                reduceListToGroup: function () {
                    return eq;
                },
                reifyState: function () {
                    return eg;
                },
                renderHTMLElement: function () {
                    return eP;
                },
                shallowEqual: function () {
                    return s.default;
                },
                shouldAllowMediaQuery: function () {
                    return eJ;
                },
                shouldNamespaceEventParameter: function () {
                    return eK;
                },
                stringifyTarget: function () {
                    return e1;
                },
            };
            for (var i in a) Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
            let o = I(n(4075)),
                r = I(n(1455)),
                l = I(n(5720)),
                c = n(1185),
                d = n(7087),
                s = I(n(7164)),
                u = n(3767),
                f = n(380),
                p = n(1799),
                E = n(2662);
            function I(e) {
                return e && e.__esModule ? e : { default: e };
            }
            let {
                    BACKGROUND: g,
                    TRANSFORM: y,
                    TRANSLATE_3D: T,
                    SCALE_3D: m,
                    ROTATE_X: b,
                    ROTATE_Y: O,
                    ROTATE_Z: _,
                    SKEW: v,
                    PRESERVE_3D: h,
                    FLEX: A,
                    OPACITY: S,
                    FILTER: R,
                    FONT_VARIATION_SETTINGS: L,
                    WIDTH: N,
                    HEIGHT: C,
                    BACKGROUND_COLOR: M,
                    BORDER_COLOR: P,
                    COLOR: w,
                    CHILDREN: U,
                    IMMEDIATE_CHILDREN: G,
                    SIBLINGS: F,
                    PARENT: V,
                    DISPLAY: x,
                    WILL_CHANGE: k,
                    AUTO: D,
                    COMMA_DELIMITER: B,
                    COLON_DELIMITER: X,
                    BAR_DELIMITER: Q,
                    RENDER_TRANSFORM: j,
                    RENDER_GENERAL: W,
                    RENDER_STYLE: z,
                    RENDER_PLUGIN: H,
                } = d.IX2EngineConstants,
                {
                    TRANSFORM_MOVE: Y,
                    TRANSFORM_SCALE: $,
                    TRANSFORM_ROTATE: q,
                    TRANSFORM_SKEW: K,
                    STYLE_OPACITY: Z,
                    STYLE_FILTER: J,
                    STYLE_FONT_VARIATION: ee,
                    STYLE_SIZE: et,
                    STYLE_BACKGROUND_COLOR: en,
                    STYLE_BORDER: ea,
                    STYLE_TEXT_COLOR: ei,
                    GENERAL_DISPLAY: eo,
                    OBJECT_VALUE: er,
                } = d.ActionTypeConsts,
                el = (e) => e.trim(),
                ec = Object.freeze({ [en]: M, [ea]: P, [ei]: w }),
                ed = Object.freeze({
                    [E.TRANSFORM_PREFIXED]: y,
                    [M]: g,
                    [S]: S,
                    [R]: R,
                    [N]: N,
                    [C]: C,
                    [L]: L,
                }),
                es = new Map();
            function eu() {
                es.clear();
            }
            let ef = 1;
            function ep() {
                return "i" + ef++;
            }
            let eE = 1;
            function eI(e, t) {
                for (let n in e) {
                    let a = e[n];
                    if (a && a.ref === t) return a.id;
                }
                return "e" + eE++;
            }
            function eg({ events: e, actionLists: t, site: n } = {}) {
                let a = (0, r.default)(
                        e,
                        (e, t) => {
                            let { eventTypeId: n } = t;
                            return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
                        },
                        {}
                    ),
                    i = n && n.mediaQueries,
                    o = [];
                return (
                    i
                        ? (o = i.map((e) => e.key))
                        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
                    {
                        ixData: {
                            events: e,
                            actionLists: t,
                            eventTypeMap: a,
                            mediaQueries: i,
                            mediaQueryKeys: o,
                        },
                    }
                );
            }
            let ey = (e, t) => e === t;
            function eT({ store: e, select: t, onChange: n, comparator: a = ey }) {
                let { getState: i, subscribe: o } = e,
                    r = o(function () {
                        let o = t(i());
                        if (null == o) return void r();
                        a(o, l) || n((l = o), e);
                    }),
                    l = t(i());
                return r;
            }
            function em(e) {
                let t = typeof e;
                if ("string" === t) return { id: e };
                if (null != e && "object" === t) {
                    let {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: r,
                    } = e;
                    return {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: r,
                    };
                }
                return {};
            }
            function eb({ config: e, event: t, eventTarget: n, elementRoot: a, elementApi: i }) {
                let o, r, l;
                if (!i) throw Error("IX2 missing elementApi");
                let { targets: c } = e;
                if (Array.isArray(c) && c.length > 0)
                    return c.reduce(
                        (e, o) =>
                            e.concat(
                                eb({
                                    config: { target: o },
                                    event: t,
                                    eventTarget: n,
                                    elementRoot: a,
                                    elementApi: i,
                                })
                            ),
                        []
                    );
                let {
                        getValidDocument: s,
                        getQuerySelector: u,
                        queryDocument: f,
                        getChildElements: p,
                        getSiblingElements: I,
                        matchSelector: g,
                        elementContains: y,
                        isSiblingNode: T,
                    } = i,
                    { target: m } = e;
                if (!m) return [];
                let {
                    id: b,
                    objectId: O,
                    selector: _,
                    selectorGuids: v,
                    appliesTo: h,
                    useEventTarget: A,
                } = em(m);
                if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
                if (h === d.EventAppliesTo.PAGE) {
                    let e = s(b);
                    return e ? [e] : [];
                }
                let S = (t?.action?.config?.affectedElements ?? {})[b || _] || {},
                    R = !!(S.id || S.selector),
                    L = t && u(em(t.target));
                if (
                    (R
                        ? ((o = S.limitAffectedElements), (r = L), (l = u(S)))
                        : (r = l = u({ id: b, selector: _, selectorGuids: v })),
                    t && A)
                ) {
                    let e = n && (l || !0 === A) ? [n] : f(L);
                    if (l) {
                        if (A === V) return f(l).filter((t) => e.some((e) => y(t, e)));
                        if (A === U) return f(l).filter((t) => e.some((e) => y(e, t)));
                        if (A === F) return f(l).filter((t) => e.some((e) => T(e, t)));
                    }
                    return e;
                }
                return null == r || null == l
                    ? []
                    : E.IS_BROWSER_ENV && a
                    ? f(l).filter((e) => a.contains(e))
                    : o === U
                    ? f(r, l)
                    : o === G
                    ? p(f(r)).filter(g(l))
                    : o === F
                    ? I(f(r)).filter(g(l))
                    : f(l);
            }
            function eO({ element: e, actionItem: t }) {
                if (!E.IS_BROWSER_ENV) return {};
                let { actionTypeId: n } = t;
                switch (n) {
                    case et:
                    case en:
                    case ea:
                    case ei:
                    case eo:
                        return window.getComputedStyle(e);
                    default:
                        return {};
                }
            }
            let e_ = /px/,
                ev = (e, t) =>
                    t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eU[t.type]), e), e || {}),
                eh = (e, t) =>
                    t.reduce(
                        (e, t) => (
                            null == e[t.type] && (e[t.type] = eG[t.type] || t.defaultValue || 0), e
                        ),
                        e || {}
                    );
            function eA(e, t = {}, n = {}, a, i) {
                let { getStyle: r } = i,
                    { actionTypeId: l } = a;
                if ((0, p.isPluginType)(l)) return (0, p.getPluginOrigin)(l)(t[l], a);
                switch (a.actionTypeId) {
                    case Y:
                    case $:
                    case q:
                    case K:
                        return t[a.actionTypeId] || ew[a.actionTypeId];
                    case J:
                        return ev(t[a.actionTypeId], a.config.filters);
                    case ee:
                        return eh(t[a.actionTypeId], a.config.fontVariations);
                    case Z:
                        return { value: (0, o.default)(parseFloat(r(e, S)), 1) };
                    case et: {
                        let t,
                            i = r(e, N),
                            l = r(e, C);
                        return {
                            widthValue:
                                a.config.widthUnit === D
                                    ? e_.test(i)
                                        ? parseFloat(i)
                                        : parseFloat(n.width)
                                    : (0, o.default)(parseFloat(i), parseFloat(n.width)),
                            heightValue:
                                a.config.heightUnit === D
                                    ? e_.test(l)
                                        ? parseFloat(l)
                                        : parseFloat(n.height)
                                    : (0, o.default)(parseFloat(l), parseFloat(n.height)),
                        };
                    }
                    case en:
                    case ea:
                    case ei:
                        return (function ({
                            element: e,
                            actionTypeId: t,
                            computedStyle: n,
                            getStyle: a,
                        }) {
                            let i = ec[t],
                                r = a(e, i),
                                l = (function (e, t) {
                                    let n = e.exec(t);
                                    return n ? n[1] : "";
                                })(ek, ex.test(r) ? r : n[i]).split(B);
                            return {
                                rValue: (0, o.default)(parseInt(l[0], 10), 255),
                                gValue: (0, o.default)(parseInt(l[1], 10), 255),
                                bValue: (0, o.default)(parseInt(l[2], 10), 255),
                                aValue: (0, o.default)(parseFloat(l[3]), 1),
                            };
                        })({
                            element: e,
                            actionTypeId: a.actionTypeId,
                            computedStyle: n,
                            getStyle: r,
                        });
                    case eo:
                        return { value: (0, o.default)(r(e, x), n.display) };
                    case er:
                        return t[a.actionTypeId] || { value: 0 };
                    default:
                        return;
                }
            }
            let eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eL = (e, t, n) => {
                    if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
                    switch (e) {
                        case J: {
                            let e = (0, l.default)(n.filters, ({ type: e }) => e === t);
                            return e ? e.value : 0;
                        }
                        case ee: {
                            let e = (0, l.default)(n.fontVariations, ({ type: e }) => e === t);
                            return e ? e.value : 0;
                        }
                        default:
                            return n[t];
                    }
                };
            function eN({ element: e, actionItem: t, elementApi: n }) {
                if ((0, p.isPluginType)(t.actionTypeId))
                    return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
                switch (t.actionTypeId) {
                    case Y:
                    case $:
                    case q:
                    case K: {
                        let { xValue: e, yValue: n, zValue: a } = t.config;
                        return { xValue: e, yValue: n, zValue: a };
                    }
                    case et: {
                        let { getStyle: a, setStyle: i, getProperty: o } = n,
                            { widthUnit: r, heightUnit: l } = t.config,
                            { widthValue: c, heightValue: d } = t.config;
                        if (!E.IS_BROWSER_ENV) return { widthValue: c, heightValue: d };
                        if (r === D) {
                            let t = a(e, N);
                            i(e, N, ""), (c = o(e, "offsetWidth")), i(e, N, t);
                        }
                        if (l === D) {
                            let t = a(e, C);
                            i(e, C, ""), (d = o(e, "offsetHeight")), i(e, C, t);
                        }
                        return { widthValue: c, heightValue: d };
                    }
                    case en:
                    case ea:
                    case ei: {
                        let {
                            rValue: a,
                            gValue: i,
                            bValue: o,
                            aValue: r,
                            globalSwatchId: l,
                        } = t.config;
                        if (l && l.startsWith("--")) {
                            let { getStyle: t } = n,
                                a = t(e, l),
                                i = (0, f.normalizeColor)(a);
                            return {
                                rValue: i.red,
                                gValue: i.green,
                                bValue: i.blue,
                                aValue: i.alpha,
                            };
                        }
                        return { rValue: a, gValue: i, bValue: o, aValue: r };
                    }
                    case J:
                        return t.config.filters.reduce(eS, {});
                    case ee:
                        return t.config.fontVariations.reduce(eR, {});
                    default: {
                        let { value: e } = t.config;
                        return { value: e };
                    }
                }
            }
            function eC(e) {
                return /^TRANSFORM_/.test(e)
                    ? j
                    : /^STYLE_/.test(e)
                    ? z
                    : /^GENERAL_/.test(e)
                    ? W
                    : /^PLUGIN_/.test(e)
                    ? H
                    : void 0;
            }
            function eM(e, t) {
                return e === z ? t.replace("STYLE_", "").toLowerCase() : null;
            }
            function eP(e, t, n, a, i, o, l, c, d) {
                switch (c) {
                    case j:
                        var s = e,
                            u = t,
                            f = n,
                            I = i,
                            g = l;
                        let y = eV
                                .map((e) => {
                                    let t = ew[e],
                                        {
                                            xValue: n = t.xValue,
                                            yValue: a = t.yValue,
                                            zValue: i = t.zValue,
                                            xUnit: o = "",
                                            yUnit: r = "",
                                            zUnit: l = "",
                                        } = u[e] || {};
                                    switch (e) {
                                        case Y:
                                            return `${T}(${n}${o}, ${a}${r}, ${i}${l})`;
                                        case $:
                                            return `${m}(${n}${o}, ${a}${r}, ${i}${l})`;
                                        case q:
                                            return `${b}(${n}${o}) ${O}(${a}${r}) ${_}(${i}${l})`;
                                        case K:
                                            return `${v}(${n}${o}, ${a}${r})`;
                                        default:
                                            return "";
                                    }
                                })
                                .join(" "),
                            { setStyle: S } = g;
                        eD(s, E.TRANSFORM_PREFIXED, g),
                            S(s, E.TRANSFORM_PREFIXED, y),
                            (function ({ actionTypeId: e }, { xValue: t, yValue: n, zValue: a }) {
                                return (
                                    (e === Y && void 0 !== a) ||
                                    (e === $ && void 0 !== a) ||
                                    (e === q && (void 0 !== t || void 0 !== n))
                                );
                            })(I, f) && S(s, E.TRANSFORM_STYLE_PREFIXED, h);
                        return;
                    case z:
                        return (function (e, t, n, a, i, o) {
                            let { setStyle: l } = o;
                            switch (a.actionTypeId) {
                                case et: {
                                    let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                                        { widthValue: r, heightValue: c } = n;
                                    void 0 !== r &&
                                        (t === D && (t = "px"), eD(e, N, o), l(e, N, r + t)),
                                        void 0 !== c &&
                                            (i === D && (i = "px"), eD(e, C, o), l(e, C, c + i));
                                    break;
                                }
                                case J:
                                    var c = a.config;
                                    let d = (0, r.default)(
                                            n,
                                            (e, t, n) => `${e} ${n}(${t}${eF(n, c)})`,
                                            ""
                                        ),
                                        { setStyle: s } = o;
                                    eD(e, R, o), s(e, R, d);
                                    break;
                                case ee:
                                    a.config;
                                    let u = (0, r.default)(
                                            n,
                                            (e, t, n) => (e.push(`"${n}" ${t}`), e),
                                            []
                                        ).join(", "),
                                        { setStyle: f } = o;
                                    eD(e, L, o), f(e, L, u);
                                    break;
                                case en:
                                case ea:
                                case ei: {
                                    let t = ec[a.actionTypeId],
                                        i = Math.round(n.rValue),
                                        r = Math.round(n.gValue),
                                        c = Math.round(n.bValue),
                                        d = n.aValue;
                                    eD(e, t, o),
                                        l(
                                            e,
                                            t,
                                            d >= 1
                                                ? `rgb(${i},${r},${c})`
                                                : `rgba(${i},${r},${c},${d})`
                                        );
                                    break;
                                }
                                default: {
                                    let { unit: t = "" } = a.config;
                                    eD(e, i, o), l(e, i, n.value + t);
                                }
                            }
                        })(e, 0, n, i, o, l);
                    case W:
                        var M = e,
                            P = i,
                            w = l;
                        let { setStyle: U } = w;
                        if (P.actionTypeId === eo) {
                            let { value: e } = P.config;
                            U(M, x, e === A && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
                        }
                        return;
                    case H: {
                        let { actionTypeId: e } = i;
                        if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(d, t, i);
                    }
                }
            }
            let ew = {
                    [Y]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
                    [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
                    [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
                    [K]: Object.freeze({ xValue: 0, yValue: 0 }),
                },
                eU = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100,
                }),
                eG = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
                eF = (e, t) => {
                    let n = (0, l.default)(t.filters, ({ type: t }) => t === e);
                    if (n && n.unit) return n.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%";
                    }
                },
                eV = Object.keys(ew),
                ex = /^rgb/,
                ek = RegExp("rgba?\\(([^)]+)\\)");
            function eD(e, t, n) {
                if (!E.IS_BROWSER_ENV) return;
                let a = ed[t];
                if (!a) return;
                let { getStyle: i, setStyle: o } = n,
                    r = i(e, k);
                if (!r) return void o(e, k, a);
                let l = r.split(B).map(el);
                -1 === l.indexOf(a) && o(e, k, l.concat(a).join(B));
            }
            function eB(e, t, n) {
                if (!E.IS_BROWSER_ENV) return;
                let a = ed[t];
                if (!a) return;
                let { getStyle: i, setStyle: o } = n,
                    r = i(e, k);
                r &&
                    -1 !== r.indexOf(a) &&
                    o(
                        e,
                        k,
                        r
                            .split(B)
                            .map(el)
                            .filter((e) => e !== a)
                            .join(B)
                    );
            }
            function eX({ store: e, elementApi: t }) {
                let { ixData: n } = e.getState(),
                    { events: a = {}, actionLists: i = {} } = n;
                Object.keys(a).forEach((e) => {
                    let n = a[e],
                        { config: o } = n.action,
                        { actionListId: r } = o,
                        l = i[r];
                    l && eQ({ actionList: l, event: n, elementApi: t });
                }),
                    Object.keys(i).forEach((e) => {
                        eQ({ actionList: i[e], elementApi: t });
                    });
            }
            function eQ({ actionList: e = {}, event: t, elementApi: n }) {
                let { actionItemGroups: a, continuousParameterGroups: i } = e;
                a &&
                    a.forEach((e) => {
                        ej({ actionGroup: e, event: t, elementApi: n });
                    }),
                    i &&
                        i.forEach((e) => {
                            let { continuousActionGroups: a } = e;
                            a.forEach((e) => {
                                ej({ actionGroup: e, event: t, elementApi: n });
                            });
                        });
            }
            function ej({ actionGroup: e, event: t, elementApi: n }) {
                let { actionItems: a } = e;
                a.forEach((e) => {
                    let a,
                        { actionTypeId: i, config: o } = e;
                    (a = (0, p.isPluginType)(i)
                        ? (t) => (0, p.clearPlugin)(i)(t, e)
                        : ez({ effect: eH, actionTypeId: i, elementApi: n })),
                        eb({ config: o, event: t, elementApi: n }).forEach(a);
                });
            }
            function eW(e, t, n) {
                let { setStyle: a, getStyle: i } = n,
                    { actionTypeId: o } = t;
                if (o === et) {
                    let { config: n } = t;
                    n.widthUnit === D && a(e, N, ""), n.heightUnit === D && a(e, C, "");
                }
                i(e, k) && ez({ effect: eB, actionTypeId: o, elementApi: n })(e);
            }
            let ez =
                ({ effect: e, actionTypeId: t, elementApi: n }) =>
                (a) => {
                    switch (t) {
                        case Y:
                        case $:
                        case q:
                        case K:
                            e(a, E.TRANSFORM_PREFIXED, n);
                            break;
                        case J:
                            e(a, R, n);
                            break;
                        case ee:
                            e(a, L, n);
                            break;
                        case Z:
                            e(a, S, n);
                            break;
                        case et:
                            e(a, N, n), e(a, C, n);
                            break;
                        case en:
                        case ea:
                        case ei:
                            e(a, ec[t], n);
                            break;
                        case eo:
                            e(a, x, n);
                    }
                };
            function eH(e, t, n) {
                let { setStyle: a } = n;
                eB(e, t, n),
                    a(e, t, ""),
                    t === E.TRANSFORM_PREFIXED && a(e, E.TRANSFORM_STYLE_PREFIXED, "");
            }
            function eY(e) {
                let t = 0,
                    n = 0;
                return (
                    e.forEach((e, a) => {
                        let { config: i } = e,
                            o = i.delay + i.duration;
                        o >= t && ((t = o), (n = a));
                    }),
                    n
                );
            }
            function e$(e, t) {
                let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
                    { actionItem: i, verboseTimeElapsed: o = 0 } = t,
                    r = 0,
                    l = 0;
                return (
                    n.forEach((e, t) => {
                        if (a && 0 === t) return;
                        let { actionItems: n } = e,
                            c = n[eY(n)],
                            { config: d, actionTypeId: s } = c;
                        i.id === c.id && (l = r + o);
                        let u = eC(s) === W ? 0 : d.duration;
                        r += d.delay + u;
                    }),
                    r > 0 ? (0, u.optimizeFloat)(l / r) : 0
                );
            }
            function eq({ actionList: e, actionItemId: t, rawData: n }) {
                let { actionItemGroups: a, continuousParameterGroups: i } = e,
                    o = [],
                    r = (e) => (
                        o.push((0, c.mergeIn)(e, ["config"], { delay: 0, duration: 0 })), e.id === t
                    );
                return (
                    a && a.some(({ actionItems: e }) => e.some(r)),
                    i &&
                        i.some((e) => {
                            let { continuousActionGroups: t } = e;
                            return t.some(({ actionItems: e }) => e.some(r));
                        }),
                    (0, c.setIn)(n, ["actionLists"], {
                        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
                    })
                );
            }
            function eK(e, { basedOn: t }) {
                return (
                    (e === d.EventTypeConsts.SCROLLING_IN_VIEW &&
                        (t === d.EventBasedOn.ELEMENT || null == t)) ||
                    (e === d.EventTypeConsts.MOUSE_MOVE && t === d.EventBasedOn.ELEMENT)
                );
            }
            function eZ(e, t) {
                return e + X + t;
            }
            function eJ(e, t) {
                return null == t || -1 !== e.indexOf(t);
            }
            function e0(e, t) {
                return (0, s.default)(e && e.sort(), t && t.sort());
            }
            function e1(e) {
                if ("string" == typeof e) return e;
                if (e.pluginElement && e.objectId) return e.pluginElement + Q + e.objectId;
                if (e.objectId) return e.objectId;
                let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
                return t + Q + n + Q + a;
            }
        },
        7164: function (e, t) {
            "use strict";
            function n(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let a = function (e, t) {
                if (n(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                    return !1;
                let a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (let i = 0; i < a.length; i++)
                    if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
                return !0;
            };
        },
        5861: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = {
                createElementState: function () {
                    return v;
                },
                ixElements: function () {
                    return _;
                },
                mergeActionState: function () {
                    return h;
                },
            };
            for (var i in a) Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
            let o = n(1185),
                r = n(7087),
                {
                    HTML_ELEMENT: l,
                    PLAIN_OBJECT: c,
                    ABSTRACT_NODE: d,
                    CONFIG_X_VALUE: s,
                    CONFIG_Y_VALUE: u,
                    CONFIG_Z_VALUE: f,
                    CONFIG_VALUE: p,
                    CONFIG_X_UNIT: E,
                    CONFIG_Y_UNIT: I,
                    CONFIG_Z_UNIT: g,
                    CONFIG_UNIT: y,
                } = r.IX2EngineConstants,
                {
                    IX2_SESSION_STOPPED: T,
                    IX2_INSTANCE_ADDED: m,
                    IX2_ELEMENT_STATE_CHANGED: b,
                } = r.IX2EngineActionTypes,
                O = {},
                _ = (e = O, t = {}) => {
                    switch (t.type) {
                        case T:
                            return O;
                        case m: {
                            let {
                                    elementId: n,
                                    element: a,
                                    origin: i,
                                    actionItem: r,
                                    refType: l,
                                } = t.payload,
                                { actionTypeId: c } = r,
                                d = e;
                            return (
                                (0, o.getIn)(d, [n, a]) !== a && (d = v(d, a, l, n, r)),
                                h(d, n, c, i, r)
                            );
                        }
                        case b: {
                            let {
                                elementId: n,
                                actionTypeId: a,
                                current: i,
                                actionItem: o,
                            } = t.payload;
                            return h(e, n, a, i, o);
                        }
                        default:
                            return e;
                    }
                };
            function v(e, t, n, a, i) {
                let r = n === c ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
                return (0, o.mergeIn)(e, [a], { id: a, ref: t, refId: r, refType: n });
            }
            function h(e, t, n, a, i) {
                let r = (function (e) {
                    let { config: t } = e;
                    return A.reduce((e, n) => {
                        let a = n[0],
                            i = n[1],
                            o = t[a],
                            r = t[i];
                        return null != o && null != r && (e[i] = r), e;
                    }, {});
                })(i);
                return (0, o.mergeIn)(e, [t, "refState", n], a, r);
            }
            let A = [
                [s, E],
                [u, I],
                [f, g],
                [p, y],
            ];
        },
        2898: function () {
            Webflow.require("ix2").init({
                events: {
                    e: {
                        id: "e",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-211",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            selector: ".styleguide-menu-toggle",
                            originalId:
                                "6370cbe369a5049bb5df6cce|646ae5a2-e8d9-9138-20eb-2e44c2cce8e6",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".styleguide-menu-toggle",
                                originalId:
                                    "6370cbe369a5049bb5df6cce|646ae5a2-e8d9-9138-20eb-2e44c2cce8e6",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18477ec591a,
                    },
                    "e-2": {
                        id: "e-2",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-210",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            selector: ".styleguide-menu-toggle",
                            originalId:
                                "6370cbe369a5049bb5df6cce|646ae5a2-e8d9-9138-20eb-2e44c2cce8e6",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".styleguide-menu-toggle",
                                originalId:
                                    "6370cbe369a5049bb5df6cce|646ae5a2-e8d9-9138-20eb-2e44c2cce8e6",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18477ec591b,
                    },
                    "e-3": {
                        id: "e-3",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-12",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-8",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".nav-item",
                            originalId: "f1e0bcdc-46e9-b1cc-d26d-8781b0eb86c7",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".nav-item",
                                originalId: "f1e0bcdc-46e9-b1cc-d26d-8781b0eb86c7",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1847675449a,
                    },
                    "e-4": {
                        id: "e-4",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1101",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".button-text",
                            originalId: "bfd59f0a-26fe-a4c8-a486-b2077e50515b",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".button-text",
                                originalId: "bfd59f0a-26fe-a4c8-a486-b2077e50515b",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x182a24ff4e4,
                    },
                    "e-5": {
                        id: "e-5",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-53",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".button",
                            originalId: "e0d4cfa6-78f5-5d70-7d0e-32ba325fe00f",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".button",
                                originalId: "e0d4cfa6-78f5-5d70-7d0e-32ba325fe00f",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1842cf8bfb5,
                    },
                    "e-6": {
                        id: "e-6",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-5",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-10",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".label-link",
                            originalId: "f0dc605d-fd1c-6322-da92-7ec8a9809648",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".label-link",
                                originalId: "f0dc605d-fd1c-6322-da92-7ec8a9809648",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18476686ef0,
                    },
                    "e-7": {
                        id: "e-7",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-3",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-59",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".button",
                            originalId: "e0d4cfa6-78f5-5d70-7d0e-32ba325fe00f",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".button",
                                originalId: "e0d4cfa6-78f5-5d70-7d0e-32ba325fe00f",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1842cf8bfb6,
                    },
                    "e-8": {
                        id: "e-8",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-11",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-212",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".nav-item",
                            originalId: "f1e0bcdc-46e9-b1cc-d26d-8781b0eb86c7",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".nav-item",
                                originalId: "f1e0bcdc-46e9-b1cc-d26d-8781b0eb86c7",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18476754499,
                    },
                    "e-9": {
                        id: "e-9",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-8",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-13",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".line",
                            originalId:
                                "6370cbe369a5040bc5df6c8b|dd611e70-6fce-8067-03eb-6b9ea51f2bbe",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".line",
                                originalId:
                                    "6370cbe369a5040bc5df6c8b|dd611e70-6fce-8067-03eb-6b9ea51f2bbe",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1847bf23404,
                    },
                    "e-10": {
                        id: "e-10",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-6",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".label-link",
                            originalId: "f0dc605d-fd1c-6322-da92-7ec8a9809648",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".label-link",
                                originalId: "f0dc605d-fd1c-6322-da92-7ec8a9809648",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18476686ec8,
                    },
                    "e-12": {
                        id: "e-12",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-10",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-14",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".subnav-item",
                            originalId:
                                "6370cbe369a5049bb5df6cce|1b31e377-9fef-25ec-9b6b-449ac9104d5f",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".subnav-item",
                                originalId:
                                    "6370cbe369a5049bb5df6cce|1b31e377-9fef-25ec-9b6b-449ac9104d5f",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18476798852,
                    },
                    "e-14": {
                        id: "e-14",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-4",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-12",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".subnav-item",
                            originalId:
                                "6370cbe369a5049bb5df6cce|1b31e377-9fef-25ec-9b6b-449ac9104d5f",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".subnav-item",
                                originalId:
                                    "6370cbe369a5049bb5df6cce|1b31e377-9fef-25ec-9b6b-449ac9104d5f",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18476798851,
                    },
                    "e-15": {
                        id: "e-15",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-16",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            selector: ".styleguide-navbar-overlay",
                            originalId:
                                "6370cbe369a5049bb5df6cce|11a641cc-a231-194d-adaf-05e8d44ec120",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".styleguide-navbar-overlay",
                                originalId:
                                    "6370cbe369a5049bb5df6cce|11a641cc-a231-194d-adaf-05e8d44ec120",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18477f26114,
                    },
                    "e-39": {
                        id: "e-39",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".image-cover",
                            originalId:
                                "6370cbe369a5040bc5df6c8b|afed07bc-83f3-db0a-2dee-a7bd0e4526e2",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".image-cover",
                                originalId:
                                    "6370cbe369a5040bc5df6c8b|afed07bc-83f3-db0a-2dee-a7bd0e4526e2",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-31-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x184537f8ec9,
                    },
                    "e-40": {
                        id: "e-40",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-32",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-41",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".navbar-menu-item-link",
                            originalId: "2b4034e9-f151-8b0d-9ca1-32395965179e",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".navbar-menu-item-link",
                                originalId: "2b4034e9-f151-8b0d-9ca1-32395965179e",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18499b7ebe3,
                    },
                    "e-41": {
                        id: "e-41",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-33",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-40",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".navbar-menu-item-link",
                            originalId: "2b4034e9-f151-8b0d-9ca1-32395965179e",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".navbar-menu-item-link",
                                originalId: "2b4034e9-f151-8b0d-9ca1-32395965179e",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18499b7ebe5,
                    },
                    "e-50": {
                        id: "e-50",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-35", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".marquee-inner",
                            originalId: "4df2356b-af8d-1061-8066-0c05a213136b",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".marquee-inner",
                                originalId: "4df2356b-af8d-1061-8066-0c05a213136b",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-35-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x184e954ef93,
                    },
                    "e-57": {
                        id: "e-57",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-58",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "a26b06a4-2c02-bc86-9274-74360e531fee",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "a26b06a4-2c02-bc86-9274-74360e531fee",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850a8aad04,
                    },
                    "e-58": {
                        id: "e-58",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-57",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "a26b06a4-2c02-bc86-9274-74360e531fee",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "a26b06a4-2c02-bc86-9274-74360e531fee",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850a8aad04,
                    },
                    "e-63": {
                        id: "e-63",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-64",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|d9727f58-5c6e-504c-caaa-ca562e8b3854",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|d9727f58-5c6e-504c-caaa-ca562e8b3854",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad4e35b,
                    },
                    "e-65": {
                        id: "e-65",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-66",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|c2128974-b55c-8b1c-b238-6f13ce8cc9e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|c2128974-b55c-8b1c-b238-6f13ce8cc9e1",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad5b8b2,
                    },
                    "e-67": {
                        id: "e-67",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-68",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|aa8f88c0-fdd1-f7cd-df6c-703be68b2c75",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|aa8f88c0-fdd1-f7cd-df6c-703be68b2c75",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad5d62e,
                    },
                    "e-69": {
                        id: "e-69",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-70",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|81eab615-7c28-10a6-b95f-bbd718efa8ce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|81eab615-7c28-10a6-b95f-bbd718efa8ce",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad5ea1b,
                    },
                    "e-71": {
                        id: "e-71",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-72",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|d8f1ede3-a268-356c-79a1-531619b6fff8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|d8f1ede3-a268-356c-79a1-531619b6fff8",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad669fe,
                    },
                    "e-73": {
                        id: "e-73",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-74",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|0e41e39a-bd3e-c3b1-1408-8ee35589ef2c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|0e41e39a-bd3e-c3b1-1408-8ee35589ef2c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad6da3a,
                    },
                    "e-75": {
                        id: "e-75",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-76",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|36883bdf-c0b4-e95a-b543-f213306cf653",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|36883bdf-c0b4-e95a-b543-f213306cf653",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad7034d,
                    },
                    "e-77": {
                        id: "e-77",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-78",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|8594e888-237f-762b-f5c4-3b67ec33ae6d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|8594e888-237f-762b-f5c4-3b67ec33ae6d",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad715a4,
                    },
                    "e-79": {
                        id: "e-79",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-80",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|3fd24099-8d6d-f0c3-1adf-02db94126af3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|3fd24099-8d6d-f0c3-1adf-02db94126af3",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad7d736,
                    },
                    "e-81": {
                        id: "e-81",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-82",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|4d20e5c6-94ed-9f8d-71bb-e374f67243a7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|4d20e5c6-94ed-9f8d-71bb-e374f67243a7",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad81b55,
                    },
                    "e-83": {
                        id: "e-83",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-84",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "beb4f325-96f3-f38a-2726-214cc3afe6d4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "beb4f325-96f3-f38a-2726-214cc3afe6d4",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad97ae6,
                    },
                    "e-85": {
                        id: "e-85",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-86",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|e755d7fd-2456-6e45-d16f-f4c9e63f78c1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|e755d7fd-2456-6e45-d16f-f4c9e63f78c1",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ad9f996,
                    },
                    "e-87": {
                        id: "e-87",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-52",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-88",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "30fc7363-35e5-00af-1a6f-8c352a9ea222",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "30fc7363-35e5-00af-1a6f-8c352a9ea222",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850adaad30,
                    },
                    "e-89": {
                        id: "e-89",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-90",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "c3ebfd35-788b-4e4b-368b-61210c6e6201",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "c3ebfd35-788b-4e4b-368b-61210c6e6201",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 25,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850ae2cda8,
                    },
                    "e-93": {
                        id: "e-93",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|f66d2745-b2af-c304-9f47-4c00e707e4ca",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|f66d2745-b2af-c304-9f47-4c00e707e4ca",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-31-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x1850ae6a265,
                    },
                    "e-94": {
                        id: "e-94",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-95",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|8d2131cb-f543-7d1e-61c6-6f14f77b0ea8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|8d2131cb-f543-7d1e-61c6-6f14f77b0ea8",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b1a2880,
                    },
                    "e-96": {
                        id: "e-96",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-97",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|dadfe78e-ae42-8f08-2566-f4b08fde3f2c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|dadfe78e-ae42-8f08-2566-f4b08fde3f2c",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b1a84a0,
                    },
                    "e-98": {
                        id: "e-98",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-99",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|dcb77b85-12aa-c2ba-adfd-2983a7b13c4e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|dcb77b85-12aa-c2ba-adfd-2983a7b13c4e",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b2877ee,
                    },
                    "e-100": {
                        id: "e-100",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-101",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|d20946dc-dfad-35fa-ba66-3015c02fee03",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|d20946dc-dfad-35fa-ba66-3015c02fee03",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b28df7e,
                    },
                    "e-102": {
                        id: "e-102",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-103",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|6d153c66-dfcf-09b0-efee-8aa7d1fa56a0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|6d153c66-dfcf-09b0-efee-8aa7d1fa56a0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b28f53d,
                    },
                    "e-108": {
                        id: "e-108",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e83f1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e83f1",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-31-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x1850b33a829,
                    },
                    "e-109": {
                        id: "e-109",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-110",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e83fc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e83fc",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b33a829,
                    },
                    "e-113": {
                        id: "e-113",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-114",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e8408",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e8408",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b33a829,
                    },
                    "e-117": {
                        id: "e-117",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-118",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e8414",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e8414",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b33a829,
                    },
                    "e-121": {
                        id: "e-121",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-122",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e8420",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e8420",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b33a829,
                    },
                    "e-129": {
                        id: "e-129",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-130",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e8455",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e8455",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b33a829,
                    },
                    "e-131": {
                        id: "e-131",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-132",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e845f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e845f",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b33a829,
                    },
                    "e-133": {
                        id: "e-133",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-134",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e8469",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|a291b8c7-42a7-2d63-fd0d-6c52699e8469",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b33a829,
                    },
                    "e-135": {
                        id: "e-135",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-136",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|cea76153-5f6a-6a07-c612-f5a9a46782d0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|cea76153-5f6a-6a07-c612-f5a9a46782d0",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b37ded0,
                    },
                    "e-137": {
                        id: "e-137",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-138",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|4637818c-c702-e6d6-d5cd-9852fce64b63",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|4637818c-c702-e6d6-d5cd-9852fce64b63",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b388ad7,
                    },
                    "e-139": {
                        id: "e-139",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-140",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|baeab0d2-48bc-84d7-289d-5a6db58e1b49",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|baeab0d2-48bc-84d7-289d-5a6db58e1b49",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b396403,
                    },
                    "e-145": {
                        id: "e-145",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-146",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|04e86fa5-c55e-0c0f-5f4a-aa9504da68a7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|04e86fa5-c55e-0c0f-5f4a-aa9504da68a7",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b3c24fe,
                    },
                    "e-147": {
                        id: "e-147",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-148",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|fb0860a6-9ebc-40ff-4eb7-39a6a23b3d23",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|fb0860a6-9ebc-40ff-4eb7-39a6a23b3d23",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b3f88be,
                    },
                    "e-149": {
                        id: "e-149",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-55",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-150",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "685a7d86568f1c987e04785b|be53a79d-69a3-0c7f-ec78-3e012f846181",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|be53a79d-69a3-0c7f-ec78-3e012f846181",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x184a382408a,
                    },
                    "e-150": {
                        id: "e-150",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-149",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "685a7d86568f1c987e04785b|be53a79d-69a3-0c7f-ec78-3e012f846181",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|be53a79d-69a3-0c7f-ec78-3e012f846181",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x184a382408c,
                    },
                    "e-151": {
                        id: "e-151",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-57",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1101",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".button-text-2",
                            originalId: "bfd59f0a-26fe-a4c8-a486-b2077e50515b",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".button-text-2",
                                originalId: "bfd59f0a-26fe-a4c8-a486-b2077e50515b",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x182a24ff4e4,
                    },
                    "e-152": {
                        id: "e-152",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-55",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-153",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "685a7d86568f1c987e04785b|be53a79d-69a3-0c7f-ec78-3e012f846196",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|be53a79d-69a3-0c7f-ec78-3e012f846196",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x184a3828256,
                    },
                    "e-153": {
                        id: "e-153",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-152",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "685a7d86568f1c987e04785b|be53a79d-69a3-0c7f-ec78-3e012f846196",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|be53a79d-69a3-0c7f-ec78-3e012f846196",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x184a3828259,
                    },
                    "e-154": {
                        id: "e-154",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-155",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|0b22dc89-2c8d-f0e2-bdef-d8ccd99cd015",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|0b22dc89-2c8d-f0e2-bdef-d8ccd99cd015",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b54e816,
                    },
                    "e-156": {
                        id: "e-156",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-157",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|35fef171-5432-2fc3-6f1e-2b5de2d2cab3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|35fef171-5432-2fc3-6f1e-2b5de2d2cab3",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b555780,
                    },
                    "e-158": {
                        id: "e-158",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-159",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b|ae411a54-f3a5-b3a4-4a74-e07752de4728",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b|ae411a54-f3a5-b3a4-4a74-e07752de4728",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b575a92,
                    },
                    "e-160": {
                        id: "e-160",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-161",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b759b15,
                    },
                    "e-161": {
                        id: "e-161",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-160",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b759b17,
                    },
                    "e-162": {
                        id: "e-162",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-163",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047859",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047859",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b762192,
                    },
                    "e-163": {
                        id: "e-163",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-162",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047859",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047859",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b7621ba,
                    },
                    "e-164": {
                        id: "e-164",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-165",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785a",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785a",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b767c95,
                    },
                    "e-165": {
                        id: "e-165",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-164",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785a",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785a",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b767c97,
                    },
                    "e-166": {
                        id: "e-166",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-167",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b76b837,
                    },
                    "e-167": {
                        id: "e-167",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-166",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b76b839,
                    },
                    "e-168": {
                        id: "e-168",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-169",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785c",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785c",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b76f946,
                    },
                    "e-169": {
                        id: "e-169",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-168",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785c",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785c",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b76f947,
                    },
                    "e-170": {
                        id: "e-170",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-57", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854|840588a8-99ad-5d96-7baa-265e0649a678",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|840588a8-99ad-5d96-7baa-265e0649a678",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-57-p",
                                selectedAxis: "X_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 50,
                                restingState: 50,
                            },
                            {
                                continuousParameterGroupId: "a-57-p-2",
                                selectedAxis: "Y_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 50,
                                restingState: 50,
                            },
                        ],
                        createdOn: 0x1850b7a6601,
                    },
                    "e-171": {
                        id: "e-171",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-172",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "685a7d86568f1c987e047854|840588a8-99ad-5d96-7baa-265e0649a678",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|840588a8-99ad-5d96-7baa-265e0649a678",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b7ba0a3,
                    },
                    "e-172": {
                        id: "e-172",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-171",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "685a7d86568f1c987e047854|840588a8-99ad-5d96-7baa-265e0649a678",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854|840588a8-99ad-5d96-7baa-265e0649a678",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850b7ba0c8,
                    },
                    "e-173": {
                        id: "e-173",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-174",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".home-project-image-wrapper",
                            originalId:
                                "685a7d86568f1c987e047854|f2647418-d078-4479-db39-aae88006dbc0",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".home-project-image-wrapper",
                                originalId:
                                    "685a7d86568f1c987e047854|f2647418-d078-4479-db39-aae88006dbc0",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x184e832e0a4,
                    },
                    "e-174": {
                        id: "e-174",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-173",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".home-project-image-wrapper",
                            originalId:
                                "685a7d86568f1c987e047854|f2647418-d078-4479-db39-aae88006dbc0",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".home-project-image-wrapper",
                                originalId:
                                    "685a7d86568f1c987e047854|f2647418-d078-4479-db39-aae88006dbc0",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x184e832e0a6,
                    },
                    "e-175": {
                        id: "e-175",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-60", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".home-project-image-wrapper",
                            originalId:
                                "685a7d86568f1c987e047854|f2647418-d078-4479-db39-aae88006dbc0",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".home-project-image-wrapper",
                                originalId:
                                    "685a7d86568f1c987e047854|f2647418-d078-4479-db39-aae88006dbc0",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-60-p",
                                selectedAxis: "X_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 50,
                                restingState: 50,
                            },
                            {
                                continuousParameterGroupId: "a-60-p-2",
                                selectedAxis: "Y_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 50,
                                restingState: 50,
                            },
                        ],
                        createdOn: 0x184e841bde3,
                    },
                    "e-180": {
                        id: "e-180",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".home-project-image",
                            originalId:
                                "685a7d86568f1c987e047854|f2647418-d078-4479-db39-aae88006dbce",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".home-project-image",
                                originalId:
                                    "685a7d86568f1c987e047854|f2647418-d078-4479-db39-aae88006dbce",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-31-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x184e848c948,
                    },
                    "e-181": {
                        id: "e-181",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-55",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-182",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".image-cover-link",
                            originalId:
                                "6370cbe369a504224cdf6ca7|b3523bb6-97f2-7a1f-1d62-ea6a07b1cb65",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".image-cover-link",
                                originalId:
                                    "6370cbe369a504224cdf6ca7|b3523bb6-97f2-7a1f-1d62-ea6a07b1cb65",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18475790ab3,
                    },
                    "e-182": {
                        id: "e-182",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-181",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".image-cover-link",
                            originalId:
                                "6370cbe369a504224cdf6ca7|b3523bb6-97f2-7a1f-1d62-ea6a07b1cb65",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".image-cover-link",
                                originalId:
                                    "6370cbe369a504224cdf6ca7|b3523bb6-97f2-7a1f-1d62-ea6a07b1cb65",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18475790ab4,
                    },
                    "e-183": {
                        id: "e-183",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-31", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            selector: ".image-cover-link",
                            originalId:
                                "637a6648e6c2120212a65a3c|91a2e5dc-8f5c-c092-29a3-8e684f116069",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".image-cover-link",
                                originalId:
                                    "637a6648e6c2120212a65a3c|91a2e5dc-8f5c-c092-29a3-8e684f116069",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-31-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x1849dd1c32f,
                    },
                    "e-187": {
                        id: "e-187",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-186",
                            },
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "685a7d86568f1c987e047854",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850bfe4e89,
                    },
                    "e-189": {
                        id: "e-189",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-188",
                            },
                        },
                        mediaQueries: ["small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c004e7f,
                    },
                    "e-190": {
                        id: "e-190",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-191",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785d",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785d",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c022fd7,
                    },
                    "e-191": {
                        id: "e-191",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-190",
                            },
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785d",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785d",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "PX",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c022fd7,
                    },
                    "e-195": {
                        id: "e-195",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-194",
                            },
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "685a7d86568f1c987e04785b",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c1e204a,
                    },
                    "e-197": {
                        id: "e-197",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-196",
                            },
                        },
                        mediaQueries: ["small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c1e49e3,
                    },
                    "e-199": {
                        id: "e-199",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-198",
                            },
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "685a7d86568f1c987e047859",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047859",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c1e845b,
                    },
                    "e-201": {
                        id: "e-201",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-200",
                            },
                        },
                        mediaQueries: ["small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047859",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047859",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c1ea4b5,
                    },
                    "e-203": {
                        id: "e-203",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-65",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-202",
                            },
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "685a7d86568f1c987e047854",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c30499e,
                    },
                    "e-205": {
                        id: "e-205",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-204",
                            },
                        },
                        mediaQueries: ["small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c3186ff,
                    },
                    "e-207": {
                        id: "e-207",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-208",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".div-block",
                            originalId:
                                "685a7d86568f1c987e047859|c991ac98-a5a8-30f4-beef-eeb894620b44",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".div-block",
                                originalId:
                                    "685a7d86568f1c987e047859|c991ac98-a5a8-30f4-beef-eeb894620b44",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c4187dd,
                    },
                    "e-208": {
                        id: "e-208",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-207",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".div-block",
                            originalId:
                                "685a7d86568f1c987e047859|c991ac98-a5a8-30f4-beef-eeb894620b44",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".div-block",
                                originalId:
                                    "685a7d86568f1c987e047859|c991ac98-a5a8-30f4-beef-eeb894620b44",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c4187de,
                    },
                    "e-209": {
                        id: "e-209",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-70", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".work-project-link",
                            originalId:
                                "685a7d86568f1c987e047859|6d6768fa-52aa-afc0-a4bb-c529e37cf3b9",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".work-project-link",
                                originalId:
                                    "685a7d86568f1c987e047859|6d6768fa-52aa-afc0-a4bb-c529e37cf3b9",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-70-p",
                                selectedAxis: "X_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 50,
                                restingState: 50,
                            },
                            {
                                continuousParameterGroupId: "a-70-p-2",
                                selectedAxis: "Y_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 50,
                                restingState: 50,
                            },
                        ],
                        createdOn: 0x1850c4758f2,
                    },
                    "e-210": {
                        id: "e-210",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-70", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".work_link",
                            originalId:
                                "685a7d86568f1c987e047859|4d4142b5-539f-3dad-8028-c89d88a12b93",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".work_link",
                                originalId:
                                    "685a7d86568f1c987e047859|4d4142b5-539f-3dad-8028-c89d88a12b93",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-70-p",
                                selectedAxis: "X_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 95,
                                restingState: 50,
                            },
                            {
                                continuousParameterGroupId: "a-70-p-2",
                                selectedAxis: "Y_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 95,
                                restingState: 50,
                            },
                        ],
                        createdOn: 0x181453648cf,
                    },
                    "e-211": {
                        id: "e-211",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-212",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".work_link",
                            originalId:
                                "685a7d86568f1c987e047859|4d4142b5-539f-3dad-8028-c89d88a12b93",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".work_link",
                                originalId:
                                    "685a7d86568f1c987e047859|4d4142b5-539f-3dad-8028-c89d88a12b93",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x181453e7722,
                    },
                    "e-212": {
                        id: "e-212",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-72",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-211",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".work_link",
                            originalId:
                                "685a7d86568f1c987e047859|4d4142b5-539f-3dad-8028-c89d88a12b93",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".work_link",
                                originalId:
                                    "685a7d86568f1c987e047859|4d4142b5-539f-3dad-8028-c89d88a12b93",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x181453e7723,
                    },
                    "e-213": {
                        id: "e-213",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-214",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".work-project-link",
                            originalId:
                                "685a7d86568f1c987e047859|6d6768fa-52aa-afc0-a4bb-c529e37cf3b9",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".work-project-link",
                                originalId:
                                    "685a7d86568f1c987e047859|6d6768fa-52aa-afc0-a4bb-c529e37cf3b9",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c47fa39,
                    },
                    "e-214": {
                        id: "e-214",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-72",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-213",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".work-project-link",
                            originalId:
                                "685a7d86568f1c987e047859|6d6768fa-52aa-afc0-a4bb-c529e37cf3b9",
                            appliesTo: "CLASS",
                        },
                        targets: [
                            {
                                selector: ".work-project-link",
                                originalId:
                                    "685a7d86568f1c987e047859|6d6768fa-52aa-afc0-a4bb-c529e37cf3b9",
                                appliesTo: "CLASS",
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c47fa3a,
                    },
                    "e-215": {
                        id: "e-215",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-216",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "685a7d86568f1c987e047859|89b6de10-a274-3c2d-50c1-cd2403ac97dd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047859|89b6de10-a274-3c2d-50c1-cd2403ac97dd",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c4eed0c,
                    },
                    "e-216": {
                        id: "e-216",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-215",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "685a7d86568f1c987e047859|89b6de10-a274-3c2d-50c1-cd2403ac97dd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047859|89b6de10-a274-3c2d-50c1-cd2403ac97dd",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c4eed0c,
                    },
                    "e-217": {
                        id: "e-217",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-57", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047859|89b6de10-a274-3c2d-50c1-cd2403ac97dd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047859|89b6de10-a274-3c2d-50c1-cd2403ac97dd",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-57-p",
                                selectedAxis: "X_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 50,
                                restingState: 50,
                            },
                            {
                                continuousParameterGroupId: "a-57-p-2",
                                selectedAxis: "Y_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 50,
                                restingState: 50,
                            },
                        ],
                        createdOn: 0x1850c4eed0c,
                    },
                    "e-218": {
                        id: "e-218",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-219",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047859|71e48d28-25f7-e8e7-a940-24aacac27ecc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047859|71e48d28-25f7-e8e7-a940-24aacac27ecc",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c4f3446,
                    },
                    "e-220": {
                        id: "e-220",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-41", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047859",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047859",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-41-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x1850c7790bd,
                    },
                    "e-221": {
                        id: "e-221",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-41", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785a",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785a",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-41-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x1850c77b7c4,
                    },
                    "e-222": {
                        id: "e-222",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-41", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785b",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785b",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-41-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x1850c77de4d,
                    },
                    "e-223": {
                        id: "e-223",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-224",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785c|089ef822-92a2-4f88-15e1-d8063a0c8114",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785c|089ef822-92a2-4f88-15e1-d8063a0c8114",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c782727,
                    },
                    "e-228": {
                        id: "e-228",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-41", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785c",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785c",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-41-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x1850c7853f4,
                    },
                    "e-229": {
                        id: "e-229",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-230",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785c|83f8085e-e74c-2d1b-b7b0-de2cbd3f7456",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785c|83f8085e-e74c-2d1b-b7b0-de2cbd3f7456",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c798db3,
                    },
                    "e-231": {
                        id: "e-231",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-57", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785c|4a6f7c6d-5735-ca6a-85aa-c0dab1f69661",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785c|4a6f7c6d-5735-ca6a-85aa-c0dab1f69661",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-57-p",
                                selectedAxis: "X_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 50,
                                restingState: 50,
                            },
                            {
                                continuousParameterGroupId: "a-57-p-2",
                                selectedAxis: "Y_AXIS",
                                basedOn: "ELEMENT",
                                reverse: !1,
                                smoothing: 50,
                                restingState: 50,
                            },
                        ],
                        createdOn: 0x1850c7b2671,
                    },
                    "e-232": {
                        id: "e-232",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-233",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "685a7d86568f1c987e04785c|4a6f7c6d-5735-ca6a-85aa-c0dab1f69661",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785c|4a6f7c6d-5735-ca6a-85aa-c0dab1f69661",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c7b2671,
                    },
                    "e-233": {
                        id: "e-233",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-232",
                            },
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "685a7d86568f1c987e04785c|4a6f7c6d-5735-ca6a-85aa-c0dab1f69661",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785c|4a6f7c6d-5735-ca6a-85aa-c0dab1f69661",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x1850c7b2671,
                    },
                    "e-234": {
                        id: "e-234",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-41", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e047854",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e047854",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-41-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x1853b7b599e,
                    },
                    "e-235": {
                        id: "e-235",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: { actionListId: "a-41", affectedElements: {}, duration: 0 },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a7d86568f1c987e04785d",
                            appliesTo: "PAGE",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "685a7d86568f1c987e04785d",
                                appliesTo: "PAGE",
                                styleBlockIds: [],
                            },
                        ],
                        config: [
                            {
                                continuousParameterGroupId: "a-41-p",
                                smoothing: 50,
                                startsEntering: !0,
                                addStartOffset: !1,
                                addOffsetValue: 50,
                                startsExiting: !1,
                                addEndOffset: !1,
                                endOffsetValue: 50,
                            },
                        ],
                        createdOn: 0x185c8f3297a,
                    },
                    "e-236": {
                        id: "e-236",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-237",
                            },
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "e755d7fd-2456-6e45-d16f-f4c9e63f78c1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: [],
                        },
                        targets: [
                            {
                                id: "e755d7fd-2456-6e45-d16f-f4c9e63f78c1",
                                appliesTo: "ELEMENT",
                                styleBlockIds: [],
                            },
                        ],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null,
                        },
                        createdOn: 0x18652f44ff5,
                    },
                },
                actionLists: {
                    a: {
                        id: "a",
                        title: "Styleguide Nav [Open]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                selector: ".styleguide-nav-wrapper",
                                                selectorGuids: [
                                                    "dc5b6d2c-306c-5329-013d-0c91d4d9f34f",
                                                ],
                                            },
                                            xValue: 100,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                    {
                                        id: "a-n-2",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                selector: ".styleguide-navbar-overlay",
                                                selectorGuids: [
                                                    "16d646d3-6844-ff2c-ef1a-73fe7b4bfc22",
                                                ],
                                            },
                                            value: "none",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-n-3",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                selector: ".styleguide-navbar-overlay",
                                                selectorGuids: [
                                                    "16d646d3-6844-ff2c-ef1a-73fe7b4bfc22",
                                                ],
                                            },
                                            value: "block",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-n-4",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                selector: ".styleguide-nav-wrapper",
                                                selectorGuids: [
                                                    "dc5b6d2c-306c-5329-013d-0c91d4d9f34f",
                                                ],
                                            },
                                            xValue: 0,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18477ec6b04,
                    },
                    "a-2": {
                        id: "a-2",
                        title: "Styleguide Nav [Close]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-2-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                selector: ".styleguide-nav-wrapper",
                                                selectorGuids: [
                                                    "dc5b6d2c-306c-5329-013d-0c91d4d9f34f",
                                                ],
                                            },
                                            xValue: 100,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-2-n-2",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                selector: ".styleguide-navbar-overlay",
                                                selectorGuids: [
                                                    "16d646d3-6844-ff2c-ef1a-73fe7b4bfc22",
                                                ],
                                            },
                                            value: "none",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x18477ec6b04,
                    },
                    "a-12": {
                        id: "a-12",
                        title: "Nav Item [Out]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-12-n",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".nav-item-line",
                                                selectorGuids: [
                                                    "2a5d0c11-fe79-e3a6-721d-1f87264fdfdb",
                                                ],
                                            },
                                            widthValue: 0,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1847675fae1,
                    },
                    "a-7": {
                        id: "a-7",
                        title: "Button Text Hover [In]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-7-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                selector: ".button-text-line",
                                                selectorGuids: [
                                                    "63d1ea40-4b6c-9163-8445-b6f05cd5bb6a",
                                                ],
                                            },
                                            xValue: 0,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-7-n-2",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 300,
                                            target: {
                                                selector: ".button-text-line",
                                                selectorGuids: [
                                                    "63d1ea40-4b6c-9163-8445-b6f05cd5bb6a",
                                                ],
                                            },
                                            xValue: 100,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-7-n-3",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                selector: ".button-text-line",
                                                selectorGuids: [
                                                    "63d1ea40-4b6c-9163-8445-b6f05cd5bb6a",
                                                ],
                                            },
                                            xValue: -100,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-7-n-4",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                selector: ".button-text-line",
                                                selectorGuids: [
                                                    "63d1ea40-4b6c-9163-8445-b6f05cd5bb6a",
                                                ],
                                            },
                                            xValue: 0,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17dd8cb4135,
                    },
                    "a-9": {
                        id: "a-9",
                        title: "Button Hover [In]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-9-n",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".button-line-left",
                                                selectorGuids: [
                                                    "622507bb-35ff-4e20-2714-51d442b88742",
                                                ],
                                            },
                                            widthValue: 20,
                                            widthUnit: "px",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                    {
                                        id: "a-9-n-3",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".button-line-right",
                                                selectorGuids: [
                                                    "97150c16-70e9-9c93-6f1d-92374347ef03",
                                                ],
                                            },
                                            widthValue: 0,
                                            widthUnit: "px",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-9-n-2",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 300,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".button-line-left",
                                                selectorGuids: [
                                                    "622507bb-35ff-4e20-2714-51d442b88742",
                                                ],
                                            },
                                            widthValue: 0,
                                            widthUnit: "px",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                    {
                                        id: "a-9-n-4",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 300,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".button-line-right",
                                                selectorGuids: [
                                                    "97150c16-70e9-9c93-6f1d-92374347ef03",
                                                ],
                                            },
                                            widthValue: 20,
                                            widthUnit: "px",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17e35977952,
                    },
                    "a-5": {
                        id: "a-5",
                        title: "Label Hover [Out]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-5-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuint",
                                            duration: 500,
                                            target: {},
                                            yValue: 0,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX",
                                        },
                                    },
                                    {
                                        id: "a-5-n-2",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuint",
                                            duration: 500,
                                            target: {},
                                            yValue: 0,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17e35977952,
                    },
                    "a-3": {
                        id: "a-3",
                        title: "Button Hover [Out]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-3-n",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 300,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".button-line-left",
                                                selectorGuids: [
                                                    "622507bb-35ff-4e20-2714-51d442b88742",
                                                ],
                                            },
                                            widthValue: 20,
                                            widthUnit: "px",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                    {
                                        id: "a-3-n-2",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 300,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".button-line-right",
                                                selectorGuids: [
                                                    "97150c16-70e9-9c93-6f1d-92374347ef03",
                                                ],
                                            },
                                            widthValue: 0,
                                            widthUnit: "px",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17e35977952,
                    },
                    "a-11": {
                        id: "a-11",
                        title: "Nav Item [In]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-11-n",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".nav-item-line",
                                                selectorGuids: [
                                                    "2a5d0c11-fe79-e3a6-721d-1f87264fdfdb",
                                                ],
                                            },
                                            widthValue: 0,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-11-n-2",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".nav-item-line",
                                                selectorGuids: [
                                                    "2a5d0c11-fe79-e3a6-721d-1f87264fdfdb",
                                                ],
                                            },
                                            widthValue: 100,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18476755841,
                    },
                    "a-8": {
                        id: "a-8",
                        title: "Line",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-8-n",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: !0,
                                                id: "63661389dd2417d86f0d89d5|b125e5fa-8357-73dc-eda5-dc9977bcbb74",
                                            },
                                            widthValue: 0,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-8-n-2",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "inOutCubic",
                                            duration: 1e3,
                                            target: {
                                                useEventTarget: !0,
                                                id: "63661389dd2417d86f0d89d5|b125e5fa-8357-73dc-eda5-dc9977bcbb74",
                                            },
                                            widthValue: 100,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18457163b61,
                    },
                    "a-6": {
                        id: "a-6",
                        title: "Label Hover [In]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-6-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {},
                                            yValue: 0,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX",
                                        },
                                    },
                                    {
                                        id: "a-6-n-2",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {},
                                            yValue: 0,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-6-n-3",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuint",
                                            duration: 500,
                                            target: {},
                                            yValue: -100,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX",
                                        },
                                    },
                                    {
                                        id: "a-6-n-4",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuint",
                                            duration: 500,
                                            target: {},
                                            yValue: -100,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17e35977952,
                    },
                    "a-10": {
                        id: "a-10",
                        title: "Subnav Item [Out]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-10-n",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".subnav-item-line",
                                                selectorGuids: [
                                                    "2a5d0c11-fe79-e3a6-721d-1f87264fdfe8",
                                                ],
                                            },
                                            widthValue: 0,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x184767a242d,
                    },
                    "a-4": {
                        id: "a-4",
                        title: "Subnav Item [In]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-4-n",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".subnav-item-line",
                                                selectorGuids: [
                                                    "2a5d0c11-fe79-e3a6-721d-1f87264fdfe8",
                                                ],
                                            },
                                            widthValue: 0,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-4-n-2",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".subnav-item-line",
                                                selectorGuids: [
                                                    "2a5d0c11-fe79-e3a6-721d-1f87264fdfe8",
                                                ],
                                            },
                                            widthValue: 100,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1847679aa8e,
                    },
                    "a-31": {
                        id: "a-31",
                        title: "Image Parallax",
                        continuousParameterGroups: [
                            {
                                id: "a-31-p",
                                type: "SCROLL_PROGRESS",
                                parameterLabel: "Scroll",
                                continuousActionGroups: [
                                    {
                                        keyframe: 0,
                                        actionItems: [
                                            {
                                                id: "a-31-n",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        useEventTarget: !0,
                                                        id: "6370cbe369a504224cdf6ca7|ad128f2d-0111-b4ae-6ae3-515bf70feffa",
                                                    },
                                                    yValue: -7,
                                                    xUnit: "PX",
                                                    yUnit: "%",
                                                    zUnit: "PX",
                                                },
                                            },
                                            {
                                                id: "a-31-n-2",
                                                actionTypeId: "TRANSFORM_SCALE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        useEventTarget: !0,
                                                        id: "6370cbe369a504224cdf6ca7|ad128f2d-0111-b4ae-6ae3-515bf70feffa",
                                                    },
                                                    xValue: 1.1,
                                                    yValue: 1.1,
                                                    locked: !0,
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 100,
                                        actionItems: [
                                            {
                                                id: "a-31-n-3",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        useEventTarget: !0,
                                                        id: "6370cbe369a504224cdf6ca7|ad128f2d-0111-b4ae-6ae3-515bf70feffa",
                                                    },
                                                    yValue: 7,
                                                    xUnit: "PX",
                                                    yUnit: "%",
                                                    zUnit: "PX",
                                                },
                                            },
                                            {
                                                id: "a-31-n-4",
                                                actionTypeId: "TRANSFORM_SCALE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        useEventTarget: !0,
                                                        id: "6370cbe369a504224cdf6ca7|ad128f2d-0111-b4ae-6ae3-515bf70feffa",
                                                    },
                                                    xValue: 1.1,
                                                    yValue: 1.1,
                                                    locked: !0,
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                        createdOn: 0x182016623da,
                    },
                    "a-32": {
                        id: "a-32",
                        title: "Navbar Item Hover [In]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-32-n",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".navbar-menu-item-line",
                                                selectorGuids: [
                                                    "56257cc0-0250-2820-6943-c36cc866c084",
                                                ],
                                            },
                                            widthValue: 0,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-32-n-2",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".navbar-menu-item-line",
                                                selectorGuids: [
                                                    "56257cc0-0250-2820-6943-c36cc866c084",
                                                ],
                                            },
                                            widthValue: 100,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18499b80c89,
                    },
                    "a-33": {
                        id: "a-33",
                        title: "Navbar Item Hover [Out]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-33-n",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".navbar-menu-item-line",
                                                selectorGuids: [
                                                    "56257cc0-0250-2820-6943-c36cc866c084",
                                                ],
                                            },
                                            widthValue: 0,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x18499b80c89,
                    },
                    "a-35": {
                        id: "a-35",
                        title: "Marquee Scroll",
                        continuousParameterGroups: [
                            {
                                id: "a-35-p",
                                type: "SCROLL_PROGRESS",
                                parameterLabel: "Scroll",
                                continuousActionGroups: [
                                    {
                                        keyframe: 0,
                                        actionItems: [
                                            {
                                                id: "a-35-n",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        useEventTarget: !0,
                                                        id: "4df2356b-af8d-1061-8066-0c05a213136b",
                                                    },
                                                    xValue: 10,
                                                    xUnit: "vw",
                                                    yUnit: "PX",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 100,
                                        actionItems: [
                                            {
                                                id: "a-35-n-2",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        useEventTarget: !0,
                                                        id: "4df2356b-af8d-1061-8066-0c05a213136b",
                                                    },
                                                    xValue: -10,
                                                    xUnit: "vw",
                                                    yUnit: "PX",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                        createdOn: 0x18499a3bfae,
                    },
                    "a-28": {
                        id: "a-28",
                        title: "Mobile Menu [Open]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-28-n",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                selector: ".mobile-menu",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cede",
                                                ],
                                            },
                                            value: "none",
                                        },
                                    },
                                    {
                                        id: "a-28-n-2",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".mobile-menu-toggle-line._02",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ced7",
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cee9",
                                                ],
                                            },
                                            widthValue: 100,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                    {
                                        id: "a-28-n-3",
                                        actionTypeId: "TRANSFORM_ROTATE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".mobile-menu-toggle-line._01",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ced7",
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ceed",
                                                ],
                                            },
                                            xValue: null,
                                            zValue: 0,
                                            xUnit: "deg",
                                            yUnit: "DEG",
                                            zUnit: "deg",
                                        },
                                    },
                                    {
                                        id: "a-28-n-4",
                                        actionTypeId: "TRANSFORM_ROTATE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".mobile-menu-toggle-line._03",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ced7",
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cee8",
                                                ],
                                            },
                                            zValue: 0,
                                            xUnit: "DEG",
                                            yUnit: "DEG",
                                            zUnit: "deg",
                                        },
                                    },
                                    {
                                        id: "a-28-n-5",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                selector: ".mobile-menu",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cede",
                                                ],
                                            },
                                            value: 0,
                                            unit: "",
                                        },
                                    },
                                    {
                                        id: "a-28-n-6",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                selector: ".mobile-menu",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cede",
                                                ],
                                            },
                                            yValue: 10,
                                            xUnit: "PX",
                                            yUnit: "px",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-28-n-7",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                selector: ".mobile-menu",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cede",
                                                ],
                                            },
                                            value: "block",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-28-n-8",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".mobile-menu-toggle-line._02",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ced7",
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cee9",
                                                ],
                                            },
                                            widthValue: 0,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                    {
                                        id: "a-28-n-9",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 300,
                                            target: {
                                                selector: ".mobile-menu",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cede",
                                                ],
                                            },
                                            value: 1,
                                            unit: "",
                                        },
                                    },
                                    {
                                        id: "a-28-n-10",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                selector: ".mobile-menu",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cede",
                                                ],
                                            },
                                            yValue: 0,
                                            xUnit: "PX",
                                            yUnit: "px",
                                            zUnit: "PX",
                                        },
                                    },
                                    {
                                        id: "a-28-n-11",
                                        actionTypeId: "TRANSFORM_ROTATE",
                                        config: {
                                            delay: 300,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".mobile-menu-toggle-line._01",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ced7",
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ceed",
                                                ],
                                            },
                                            zValue: -39,
                                            xUnit: "DEG",
                                            yUnit: "DEG",
                                            zUnit: "deg",
                                        },
                                    },
                                    {
                                        id: "a-28-n-12",
                                        actionTypeId: "TRANSFORM_ROTATE",
                                        config: {
                                            delay: 300,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".mobile-menu-toggle-line._03",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ced7",
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cee8",
                                                ],
                                            },
                                            zValue: 39,
                                            xUnit: "DEG",
                                            yUnit: "DEG",
                                            zUnit: "deg",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18138ee3be4,
                    },
                    "a-29": {
                        id: "a-29",
                        title: "Mobile Menu [Close]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-29-n",
                                        actionTypeId: "TRANSFORM_ROTATE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".mobile-menu-toggle-line._03",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ced7",
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cee8",
                                                ],
                                            },
                                            zValue: 0,
                                            xUnit: "DEG",
                                            yUnit: "DEG",
                                            zUnit: "deg",
                                        },
                                    },
                                    {
                                        id: "a-29-n-2",
                                        actionTypeId: "TRANSFORM_ROTATE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".mobile-menu-toggle-line._01",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ced7",
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ceed",
                                                ],
                                            },
                                            zValue: 0,
                                            xUnit: "DEG",
                                            yUnit: "DEG",
                                            zUnit: "deg",
                                        },
                                    },
                                    {
                                        id: "a-29-n-3",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 300,
                                            target: {
                                                selector: ".mobile-menu",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cede",
                                                ],
                                            },
                                            value: 0,
                                            unit: "",
                                        },
                                    },
                                    {
                                        id: "a-29-n-4",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 300,
                                            target: {
                                                selector: ".mobile-menu",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cede",
                                                ],
                                            },
                                            yValue: 10,
                                            xUnit: "PX",
                                            yUnit: "px",
                                            zUnit: "PX",
                                        },
                                    },
                                    {
                                        id: "a-29-n-5",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 300,
                                            easing: "outQuart",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".mobile-menu-toggle-line._02",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453ced7",
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cee9",
                                                ],
                                            },
                                            widthValue: 100,
                                            widthUnit: "%",
                                            heightUnit: "PX",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-29-n-6",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                selector: ".mobile-menu",
                                                selectorGuids: [
                                                    "b5b0a364-86eb-e71a-20b7-262b3453cede",
                                                ],
                                            },
                                            value: "none",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x18138ee3be4,
                    },
                    "a-46": {
                        id: "a-46",
                        title: "Move In 100% [In]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-46-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: !0,
                                                id: "620ebe389b783a5cc354a373|048a4b04-9ff6-a763-366d-8d3db6d24bb3",
                                            },
                                            yValue: 100,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX",
                                        },
                                    },
                                    {
                                        id: "a-46-n-2",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: !0,
                                                id: "620ebe389b783a5cc354a373|048a4b04-9ff6-a763-366d-8d3db6d24bb3",
                                            },
                                            value: 0,
                                            unit: "",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-46-n-3",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "inOutQuart",
                                            duration: 1200,
                                            target: {
                                                useEventTarget: !0,
                                                id: "620ebe389b783a5cc354a373|048a4b04-9ff6-a763-366d-8d3db6d24bb3",
                                            },
                                            value: 1,
                                            unit: "",
                                        },
                                    },
                                    {
                                        id: "a-46-n-4",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "inOutQuart",
                                            duration: 1200,
                                            target: {
                                                useEventTarget: !0,
                                                id: "620ebe389b783a5cc354a373|048a4b04-9ff6-a763-366d-8d3db6d24bb3",
                                            },
                                            yValue: 0,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1787986bdfc,
                    },
                    "a-51": {
                        id: "a-51",
                        title: "Move In 100% [Delay 0.2s]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-51-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: !0,
                                                id: "620ebe389b783a5cc354a373|048a4b04-9ff6-a763-366d-8d3db6d24bb3",
                                            },
                                            yValue: 100,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX",
                                        },
                                    },
                                    {
                                        id: "a-51-n-2",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: !0,
                                                id: "620ebe389b783a5cc354a373|048a4b04-9ff6-a763-366d-8d3db6d24bb3",
                                            },
                                            value: 0,
                                            unit: "",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-51-n-3",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 200,
                                            easing: "inOutQuart",
                                            duration: 1200,
                                            target: {
                                                useEventTarget: !0,
                                                id: "620ebe389b783a5cc354a373|048a4b04-9ff6-a763-366d-8d3db6d24bb3",
                                            },
                                            value: 1,
                                            unit: "",
                                        },
                                    },
                                    {
                                        id: "a-51-n-4",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 200,
                                            easing: "inOutQuart",
                                            duration: 1200,
                                            target: {
                                                useEventTarget: !0,
                                                id: "620ebe389b783a5cc354a373|048a4b04-9ff6-a763-366d-8d3db6d24bb3",
                                            },
                                            yValue: 0,
                                            xUnit: "PX",
                                            yUnit: "%",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1787986bdfc,
                    },
                    "a-52": {
                        id: "a-52",
                        title: "Fade In Bottom [Delay 0.4s]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-52-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: !0,
                                                id: "62fa3b4e46f480574e89a70c|a7ab49b1-7e04-4066-b939-5a81af3cd95a",
                                            },
                                            yValue: 20,
                                            xUnit: "PX",
                                            yUnit: "px",
                                            zUnit: "PX",
                                        },
                                    },
                                    {
                                        id: "a-52-n-2",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: !0,
                                                id: "62fa3b4e46f480574e89a70c|a7ab49b1-7e04-4066-b939-5a81af3cd95a",
                                            },
                                            value: 0,
                                            unit: "",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-52-n-3",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 400,
                                            easing: "outQuart",
                                            duration: 1200,
                                            target: {
                                                useEventTarget: !0,
                                                id: "62fa3b4e46f480574e89a70c|a7ab49b1-7e04-4066-b939-5a81af3cd95a",
                                            },
                                            yValue: 0,
                                            xUnit: "PX",
                                            yUnit: "px",
                                            zUnit: "PX",
                                        },
                                    },
                                    {
                                        id: "a-52-n-4",
                                        actionTypeId: "STYLE_OPACITY",
                                        config: {
                                            delay: 400,
                                            easing: "outQuart",
                                            duration: 1200,
                                            target: {
                                                useEventTarget: !0,
                                                id: "62fa3b4e46f480574e89a70c|a7ab49b1-7e04-4066-b939-5a81af3cd95a",
                                            },
                                            value: 1,
                                            unit: "",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17f7d2e31e1,
                    },
                    "a-53": {
                        id: "a-53",
                        title: "Scale In",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-53-n",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: !0,
                                                id: "c3ebfd35-788b-4e4b-368b-61210c6e6201",
                                            },
                                            xValue: 0,
                                            yValue: 0,
                                            locked: !0,
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-53-n-2",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 1200,
                                            target: {
                                                useEventTarget: !0,
                                                id: "c3ebfd35-788b-4e4b-368b-61210c6e6201",
                                            },
                                            xValue: 1,
                                            yValue: 1,
                                            locked: !0,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1850ae2ecec,
                    },
                    "a-55": {
                        id: "a-55",
                        title: "Image Scale [In]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-55-n",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: !0,
                                                id: "6370cbe369a504224cdf6ca7|b3523bb6-97f2-7a1f-1d62-ea6a07b1cb65",
                                            },
                                            xValue: 1,
                                            yValue: 1,
                                            locked: !0,
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-55-n-2",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 700,
                                            target: {
                                                useEventTarget: !0,
                                                id: "6370cbe369a504224cdf6ca7|b3523bb6-97f2-7a1f-1d62-ea6a07b1cb65",
                                            },
                                            xValue: 1.05,
                                            yValue: 1.05,
                                            locked: !0,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18475793aa9,
                    },
                    "a-56": {
                        id: "a-56",
                        title: "Image Scale [Out]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-56-n",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuart",
                                            duration: 700,
                                            target: {
                                                useEventTarget: !0,
                                                id: "6370cbe369a504224cdf6ca7|b3523bb6-97f2-7a1f-1d62-ea6a07b1cb65",
                                            },
                                            xValue: 1,
                                            yValue: 1,
                                            locked: !0,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x18475793aa9,
                    },
                    "a-57": {
                        id: "a-57",
                        title: "View Button Move",
                        continuousParameterGroups: [
                            {
                                id: "a-57-p",
                                type: "MOUSE_X",
                                parameterLabel: "Mouse X",
                                continuousActionGroups: [
                                    {
                                        keyframe: 0,
                                        actionItems: [
                                            {
                                                id: "a-57-n",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        useEventTarget: "CHILDREN",
                                                        selector: ".view-button",
                                                        selectorGuids: [
                                                            "d9232912-d6ce-17f7-fea1-a0fa4311aca9",
                                                        ],
                                                    },
                                                    xValue: -50,
                                                    xUnit: "px",
                                                    yUnit: "PX",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 100,
                                        actionItems: [
                                            {
                                                id: "a-57-n-2",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        useEventTarget: "CHILDREN",
                                                        selector: ".view-button",
                                                        selectorGuids: [
                                                            "d9232912-d6ce-17f7-fea1-a0fa4311aca9",
                                                        ],
                                                    },
                                                    xValue: 50,
                                                    xUnit: "px",
                                                    yUnit: "PX",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: "a-57-p-2",
                                type: "MOUSE_Y",
                                parameterLabel: "Mouse Y",
                                continuousActionGroups: [
                                    {
                                        keyframe: 0,
                                        actionItems: [
                                            {
                                                id: "a-57-n-3",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        useEventTarget: "CHILDREN",
                                                        selector: ".view-button",
                                                        selectorGuids: [
                                                            "d9232912-d6ce-17f7-fea1-a0fa4311aca9",
                                                        ],
                                                    },
                                                    xValue: null,
                                                    yValue: -50,
                                                    xUnit: "px",
                                                    yUnit: "px",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 100,
                                        actionItems: [
                                            {
                                                id: "a-57-n-4",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        useEventTarget: "CHILDREN",
                                                        selector: ".view-button",
                                                        selectorGuids: [
                                                            "d9232912-d6ce-17f7-fea1-a0fa4311aca9",
                                                        ],
                                                    },
                                                    xValue: null,
                                                    yValue: 50,
                                                    xUnit: "px",
                                                    yUnit: "px",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                        createdOn: 0x1850b7a758e,
                    },
                    "a-58": {
                        id: "a-58",
                        title: "View Button [In]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-58-n",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-button",
                                                selectorGuids: [
                                                    "d9232912-d6ce-17f7-fea1-a0fa4311aca9",
                                                ],
                                            },
                                            value: "none",
                                        },
                                    },
                                    {
                                        id: "a-58-n-2",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-button",
                                                selectorGuids: [
                                                    "d9232912-d6ce-17f7-fea1-a0fa4311aca9",
                                                ],
                                            },
                                            xValue: 0,
                                            yValue: 0,
                                            locked: !0,
                                        },
                                    },
                                    {
                                        id: "a-58-n-3",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-button-text",
                                                selectorGuids: [
                                                    "d9232912-d6ce-17f7-fea1-a0fa4311acaa",
                                                ],
                                            },
                                            xValue: 0,
                                            yValue: 0,
                                            locked: !0,
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-58-n-4",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-button",
                                                selectorGuids: [
                                                    "d9232912-d6ce-17f7-fea1-a0fa4311aca9",
                                                ],
                                            },
                                            value: "flex",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-58-n-5",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "outQuint",
                                            duration: 600,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-button",
                                                selectorGuids: [
                                                    "d9232912-d6ce-17f7-fea1-a0fa4311aca9",
                                                ],
                                            },
                                            xValue: 1,
                                            yValue: 1,
                                            locked: !0,
                                        },
                                    },
                                    {
                                        id: "a-58-n-6",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 100,
                                            easing: "outCubic",
                                            duration: 300,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-button-text",
                                                selectorGuids: [
                                                    "d9232912-d6ce-17f7-fea1-a0fa4311acaa",
                                                ],
                                            },
                                            xValue: 1,
                                            yValue: 1,
                                            locked: !0,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17fe7462d40,
                    },
                    "a-59": {
                        id: "a-59",
                        title: "View Button [Out]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-59-n",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "outCubic",
                                            duration: 300,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-button-text",
                                                selectorGuids: [
                                                    "d9232912-d6ce-17f7-fea1-a0fa4311acaa",
                                                ],
                                            },
                                            xValue: 0,
                                            yValue: 0,
                                            locked: !0,
                                        },
                                    },
                                    {
                                        id: "a-59-n-2",
                                        actionTypeId: "TRANSFORM_SCALE",
                                        config: {
                                            delay: 0,
                                            easing: "outCubic",
                                            duration: 400,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-button",
                                                selectorGuids: [
                                                    "d9232912-d6ce-17f7-fea1-a0fa4311aca9",
                                                ],
                                            },
                                            xValue: 0,
                                            yValue: 0,
                                            locked: !0,
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-59-n-3",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".view-button",
                                                selectorGuids: [
                                                    "d9232912-d6ce-17f7-fea1-a0fa4311aca9",
                                                ],
                                            },
                                            value: "none",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17fe7462d40,
                    },
                    "a-60": {
                        id: "a-60",
                        title: "Blur Button Move",
                        continuousParameterGroups: [
                            {
                                id: "a-60-p",
                                type: "MOUSE_X",
                                parameterLabel: "Mouse X",
                                continuousActionGroups: [
                                    {
                                        keyframe: 0,
                                        actionItems: [
                                            {
                                                id: "a-60-n",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {},
                                                    xValue: -50,
                                                    yValue: null,
                                                    xUnit: "px",
                                                    yUnit: "px",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 100,
                                        actionItems: [
                                            {
                                                id: "a-60-n-2",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {},
                                                    xValue: 50,
                                                    yValue: null,
                                                    xUnit: "px",
                                                    yUnit: "px",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: "a-60-p-2",
                                type: "MOUSE_Y",
                                parameterLabel: "Mouse Y",
                                continuousActionGroups: [
                                    {
                                        keyframe: 0,
                                        actionItems: [
                                            {
                                                id: "a-60-n-3",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {},
                                                    yValue: -50,
                                                    xUnit: "PX",
                                                    yUnit: "px",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 100,
                                        actionItems: [
                                            {
                                                id: "a-60-n-4",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {},
                                                    yValue: 50,
                                                    xUnit: "PX",
                                                    yUnit: "px",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                        createdOn: 0x184e84200e4,
                    },
                    "a-63": {
                        id: "a-63",
                        title: "Marquee Secondary Scroll [Desktop]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-63-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                selector: ".marquee-secondary-inner",
                                                selectorGuids: [
                                                    "89259c01-c2ab-103d-fceb-8a6a0c686a62",
                                                ],
                                            },
                                            xValue: 0,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-63-n-2",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 4e4,
                                            target: {
                                                selector: ".marquee-secondary-inner",
                                                selectorGuids: [
                                                    "89259c01-c2ab-103d-fceb-8a6a0c686a62",
                                                ],
                                            },
                                            xValue: -100,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-63-n-3",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                selector: ".marquee-secondary-inner",
                                                selectorGuids: [
                                                    "89259c01-c2ab-103d-fceb-8a6a0c686a62",
                                                ],
                                            },
                                            xValue: 100,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1850bff4184,
                    },
                    "a-64": {
                        id: "a-64",
                        title: "Marquee Secondary Scroll [Mobile]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-64-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                selector: ".marquee-secondary-inner",
                                                selectorGuids: [
                                                    "89259c01-c2ab-103d-fceb-8a6a0c686a62",
                                                ],
                                            },
                                            xValue: 0,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-64-n-2",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 2e4,
                                            target: {
                                                selector: ".marquee-secondary-inner",
                                                selectorGuids: [
                                                    "89259c01-c2ab-103d-fceb-8a6a0c686a62",
                                                ],
                                            },
                                            xValue: -100,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-64-n-3",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                selector: ".marquee-secondary-inner",
                                                selectorGuids: [
                                                    "89259c01-c2ab-103d-fceb-8a6a0c686a62",
                                                ],
                                            },
                                            xValue: 100,
                                            xUnit: "%",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1850bff4184,
                    },
                    "a-65": {
                        id: "a-65",
                        title: "Logo Scroll [Desktop]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-65-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                selector: ".home-clients-logos-grid",
                                                selectorGuids: [
                                                    "738b8163-c73b-e23f-c24d-b812fa35997b",
                                                ],
                                            },
                                            xValue: 0,
                                            xUnit: "px",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-65-n-2",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 15e3,
                                            target: {
                                                selector: ".home-clients-logos-grid",
                                                selectorGuids: [
                                                    "738b8163-c73b-e23f-c24d-b812fa35997b",
                                                ],
                                            },
                                            xValue: -1300,
                                            xUnit: "px",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-65-n-3",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                selector: ".home-clients-logos-grid",
                                                selectorGuids: [
                                                    "738b8163-c73b-e23f-c24d-b812fa35997b",
                                                ],
                                            },
                                            xValue: 0,
                                            xUnit: "px",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1850c3099ca,
                    },
                    "a-66": {
                        id: "a-66",
                        title: "Logo Scroll [Mobile]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-66-n",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {
                                                selector: ".home-clients-logos-grid",
                                                selectorGuids: [
                                                    "738b8163-c73b-e23f-c24d-b812fa35997b",
                                                ],
                                            },
                                            xValue: 0,
                                            xUnit: "px",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-66-n-2",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 1e4,
                                            target: {
                                                selector: ".home-clients-logos-grid",
                                                selectorGuids: [
                                                    "738b8163-c73b-e23f-c24d-b812fa35997b",
                                                ],
                                            },
                                            xValue: -880,
                                            xUnit: "px",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-66-n-3",
                                        actionTypeId: "TRANSFORM_MOVE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {
                                                selector: ".home-clients-logos-grid",
                                                selectorGuids: [
                                                    "738b8163-c73b-e23f-c24d-b812fa35997b",
                                                ],
                                            },
                                            xValue: 0,
                                            xUnit: "px",
                                            yUnit: "PX",
                                            zUnit: "PX",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1850c3099ca,
                    },
                    "a-68": {
                        id: "a-68",
                        title: "Work Hover [In]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-68-n",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {},
                                            value: "none",
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-68-n-2",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {},
                                            value: "flex",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1850c4195c4,
                    },
                    "a-69": {
                        id: "a-69",
                        title: "Work Hover [Out]",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-69-n-2",
                                        actionTypeId: "GENERAL_DISPLAY",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 0,
                                            target: {},
                                            value: "none",
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1850c4195c4,
                    },
                    "a-70": {
                        id: "a-70",
                        title: "Move Image",
                        continuousParameterGroups: [
                            {
                                id: "a-70-p",
                                type: "MOUSE_X",
                                parameterLabel: "Mouse X",
                                continuousActionGroups: [
                                    {
                                        keyframe: 0,
                                        actionItems: [
                                            {
                                                id: "a-70-n",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {},
                                                    xValue: 0,
                                                    xUnit: "%",
                                                    yUnit: "PX",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 25,
                                        actionItems: [
                                            {
                                                id: "a-70-n-2",
                                                actionTypeId: "TRANSFORM_ROTATE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {},
                                                    zValue: -18,
                                                    xUnit: "DEG",
                                                    yUnit: "DEG",
                                                    zUnit: "deg",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 50,
                                        actionItems: [
                                            {
                                                id: "a-70-n-3",
                                                actionTypeId: "TRANSFORM_ROTATE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {},
                                                    zValue: -14,
                                                    xUnit: "DEG",
                                                    yUnit: "DEG",
                                                    zUnit: "deg",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 75,
                                        actionItems: [
                                            {
                                                id: "a-70-n-4",
                                                actionTypeId: "TRANSFORM_ROTATE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {},
                                                    zValue: -18,
                                                    xUnit: "DEG",
                                                    yUnit: "DEG",
                                                    zUnit: "deg",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 100,
                                        actionItems: [
                                            {
                                                id: "a-70-n-5",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {},
                                                    xValue: 100,
                                                    xUnit: "%",
                                                    yUnit: "PX",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: "a-70-p-2",
                                type: "MOUSE_Y",
                                parameterLabel: "Mouse Y",
                                continuousActionGroups: [
                                    {
                                        keyframe: 0,
                                        actionItems: [
                                            {
                                                id: "a-70-n-6",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {},
                                                    yValue: -60,
                                                    xUnit: "PX",
                                                    yUnit: "%",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 100,
                                        actionItems: [
                                            {
                                                id: "a-70-n-7",
                                                actionTypeId: "TRANSFORM_MOVE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {},
                                                    yValue: 60,
                                                    xUnit: "PX",
                                                    yUnit: "%",
                                                    zUnit: "PX",
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                        createdOn: 0x18145368c79,
                    },
                    "a-71": {
                        id: "a-71",
                        title: "Reveal Image",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-71-n",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: "",
                                            duration: 500,
                                            target: {},
                                            widthValue: 100,
                                            heightValue: 0,
                                            widthUnit: "%",
                                            heightUnit: "%",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                            {
                                actionItems: [
                                    {
                                        id: "a-71-n-2",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 200,
                                            easing: [0.77, 0, 0.175, 1],
                                            duration: 500,
                                            target: {},
                                            widthValue: 100,
                                            heightValue: 100,
                                            widthUnit: "%",
                                            heightUnit: "%",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x181453e9136,
                    },
                    "a-72": {
                        id: "a-72",
                        title: "Hide Image",
                        actionItemGroups: [
                            {
                                actionItems: [
                                    {
                                        id: "a-72-n",
                                        actionTypeId: "STYLE_SIZE",
                                        config: {
                                            delay: 0,
                                            easing: [0.455, 0.03, 0.515, 0.955],
                                            duration: 300,
                                            target: {},
                                            widthValue: 100,
                                            heightValue: 0,
                                            widthUnit: "%",
                                            heightUnit: "%",
                                            locked: !1,
                                        },
                                    },
                                ],
                            },
                        ],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x181453e9136,
                    },
                    "a-41": {
                        id: "a-41",
                        title: "Banner Circle Scroll",
                        continuousParameterGroups: [
                            {
                                id: "a-41-p",
                                type: "SCROLL_PROGRESS",
                                parameterLabel: "Scroll",
                                continuousActionGroups: [
                                    {
                                        keyframe: 0,
                                        actionItems: [
                                            {
                                                id: "a-41-n",
                                                actionTypeId: "TRANSFORM_ROTATE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        selector: ".banner-circle-image",
                                                        selectorGuids: [
                                                            "16a33c07-71e6-9651-94a5-26fc1d82b826",
                                                        ],
                                                    },
                                                    zValue: 0,
                                                    xUnit: "DEG",
                                                    yUnit: "DEG",
                                                    zUnit: "deg",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        keyframe: 100,
                                        actionItems: [
                                            {
                                                id: "a-41-n-2",
                                                actionTypeId: "TRANSFORM_ROTATE",
                                                config: {
                                                    delay: 0,
                                                    easing: "",
                                                    duration: 500,
                                                    target: {
                                                        selector: ".banner-circle-image",
                                                        selectorGuids: [
                                                            "16a33c07-71e6-9651-94a5-26fc1d82b826",
                                                        ],
                                                    },
                                                    zValue: 180,
                                                    xUnit: "DEG",
                                                    yUnit: "DEG",
                                                    zUnit: "deg",
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                        createdOn: 0x1850abbd743,
                    },
                },
                site: {
                    mediaQueries: [
                        { key: "main", min: 992, max: 1e4 },
                        { key: "medium", min: 768, max: 991 },
                        { key: "small", min: 480, max: 767 },
                        { key: "tiny", min: 0, max: 479 },
                    ],
                },
            });
        },
    },
]);

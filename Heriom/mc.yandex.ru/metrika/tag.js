﻿(function () {
    try {
                (function () {
                function ef(a, c, b, d) {
                    var e = this;
                    return D(window, "c.i", function () {
                        function f(x) {
                            (x = ff(k, l, "", x)(k, l)) && (T(x.then) ? x.then(g) : g(x));
                            return x
                        }
                        function g(x) {
                            x && (T(x) ? m.push(x) : pa(x) && y(function (F) {
                                var U = F[0];
                                F = F[1];
                                T(F) && ("u" === U ? m.push(F) : h(F, U))
                            }, Oa(x)))
                        }
                        function h(x, F, U) {
                            e[F] = $l(k, l, U || p, F, x)
                        }
                        var k = window;
                        (! k || isNaN(a) && ! a) && de();
                        var l = am(a, gf, c, b, d),
                            m = [],
                            p = [kh, ff, lh];
                        p.unshift(bm);
                        var r = A(O, gb),
                            q = M(l);
                        l.id || Ua(Ic("Invalid Metrika id: " + l.id, !0));
                        var t = ed.C("counters", {});
                        if (t[q]) 
                            return xb(k, q, "Duplicate counter " + q + " initialization"),
                            t[q];
                        
                        t[q] = e;
                        ed.D("counters", t);
                        ed.Ca("counter", e);
                        y(function (x) {
                            x(k, l)
                        }, ee);
                        y(f, fd);
                        f(cm);
                        h(dm(k, l, m), "destruct", [kh, lh]);
                        Qb(k, C([
                            k,
                            r,
                            f,
                            1,
                            "a.i"
                        ], mh));
                        y(f, V)
                    })()
                }
                function em(a, c) {
                    var b = "" + c,
                        d = {
                            id: 1,
                            ca: "0"
                        },
                        e = fm(b);
                    e ? d.id = e : -1 === hb(b, ":") ? (b = Ha(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Ha(b[0]), d.ca = fe(e) ? "1" : "0");
                    return [
                        za(a, d),
                        d
                    ]
                }
                function gm(a, c) {
                    if ("*" === c) 
                        return !0;
                    
                    var b = R(a);
                    return c === b.host + b.pathname
                }
                function hm(a, c) {
                    var b = n(c, "target");
                    b && a(b)
                }
                function im(a, c, b) {
                    var d = n(b, "submitter");
                    d || (b = n(b, "target")) && (d = ge(a, b));
                    d && c(d)
                }
                function jm(a, c, b, d) {
                    var e = he(a, d);
                    e && y(function (f) {
                        var g,
                            h = null;
                        try {
                            var k = n(f, "css_selector"),
                                l = ac(k, a.document);
                            h = nh(l)
                        } catch (q) {}
                        k = null;
                        try {
                            var m = n(f, "xpath"),
                                p = km(m);
                            var r = p ? n(a, "document.evaluate") ? a.document.evaluate(p, a.document, null, a.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : null : null;
                            k = nh(r)
                        } catch (q) {}f = (g =
                            {}, g.s =[
                            k, h
                        ], g.b = e, g);
                        c(f)
                    }, b)
                }
                function nh(a) {
                    return(a = Jb(a)) ? gd(ie(a)) : null
                }
                function km(a) {
                    if (! a) 
                        return "";
                    
                    a = a.match(lm);
                    if (! a || 0 === a.length) 
                        return "";
                    
                    var c = mm();
                    return "//HTML/BODY/" + J(function (b, d) {
                        var e = d[0],
                            f = Ha(d.slice(1));
                        return "/" + c[e] + (f ? "[" + (
                            f + 1
                        ) + "]" : "") + b
                    }, "", a)
                }
                function nm(a) {
                    y(function (c) {
                        var b;
                        if (c.data.auctionId) {
                            var d = c.event,
                                e = c.data;
                            c = e.auctionId;
                            Ia[c] || (Ia[c] =( b =
                                {}, b.auctionId = c, b));
                            b = "auctionInit" === d;
                            if (!Ia[c].startStamp || b) 
                                Ia[c].startStamp = b ? e.auctionStart || e.timestamp : e.auctionStart;
                            
                            if (K(d, om)) {
                                if (b = e.bidderCode) {
                                    Ia[c][d] || (Ia[c][d] =
                                        {});
                                    var f = {};
                                    Ia[c][d][b] = f;
                                    y(function (g) {
                                        var h = e[g];
                                        ja(h) || (f[g] = h)
                                    }, pm);
                                    Ia[c].endStamp && (Ia[c].aa =! 0)
                                }
                            } else 
                                "auctionEnd" === d && (Ia[c].aa =! 0, Ia[c].endStamp = e.auctionEnd || e.timestamp, Ia[c].requestedBidders = ea(function (g, h, k) {
                                    return hf(g, k) === h
                                }, A(P("bidderCode"), e.bidderRequests)))
                            
                        }
                    }, a)
                }
                function qm(a, c) {
                    y(function (b) {
                        b.aa && rm(a, c, b.auctionId)
                    }, oh(Ia))
                }
                function rm(a, c, b) {
                    Ia[b].aa = !1;
                    Ia[b].Ka && ka(a, Ia[b].Ka);
                    Ia[b].Ka = Q(a, function () {
                        var d,
                            e;
                        delete Ia[b].Ka;
                        delete Ia[b].aa;
                        c((d =
                            {}, d.__ym =( e =
                            {}, e.pbjs = Ia[b], e), d));
                        delete Ia[b]
                    }, 2E3)
                }
                function sm(a) {
                    var c = n(a, "featurePolicy");
                    return c ? "browsingTopics" in a && c.allowsFeature("browsing-topics") : !1
                }
                function tm(a, c, b, d) {
                    var e = n(d, "data");
                    if (ma(e)) {
                        var f = e.split("*");
                        e = f[0];
                        var g = f[1];
                        f = f[2];
                        "sc.topics-response" === e ? (g && ("1" === g && f ? (a = yb(a, f), ca(a) && c.D("cta", a)) : c.D("cta.e", g)), b()) : "sc.frame" === e && d.source && d.source.postMessage("sc.topics", "*")
                    }
                }
                function um(a, c) {
                    var b;
                    if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) {
                        var d = c.source,
                            e = (b =
                                {}, b._ym_uid = a, b);
                        d.postMessage(e, "https://oauth.yandex.ru")
                    }
                }
                function ph(a, c) {
                    void 0 === c && (c =! 0);
                    var b = ac("canvas", a.document);
                    if (b && (b = Jc(b))) {
                        var d = je(a) || Kc(a),
                            e = d[0];
                        d = d[1];
                        if (.3 <= qh(a, b, {
                            h: d,
                            w: e
                        }) / (d * e)) {
                            H(a).D("hc", 1);
                            return
                        }
                    }
                    c && Q(a, C([
                        a,
                        !1
                    ], ph), 3E3)
                }
                function rh(a) {
                    return {
                        N: function (c, b) {
                            vm(a).then(function (d) {
                                c.J || (c.J =
                                    {});
                                c.J.uah = d;
                                b()
                            }, b)
                        }
                    }
                }
                function wm(a) {
                    var c = J(function (b, d) {
                        var e = d[1],
                            f = xm(a[d[0]]);
                        f && b.push("" + e + "\n" + f);
                        return b
                    }, [], Oa(zm));
                    return I("\n", c)
                }
                function Am(a) {
                    return "che\n" + a
                }
                function xm(a) {
                    return ma(a) ? a : ca(a) ? I(",", A(function (c) {
                        return '"' + c.brand + '";v="' + c.version + '"'
                    }, a)) : ja(a) ? "" : a ? "?1" : "?0"
                }
                function Bm(a, c) {
                    var b = Cm(a),
                        d = [Dm(a) || Em(a)];
                    sh(a) && d.push(b);
                    var e = ha(a);
                    b = Pa(a);
                    var f = b.C("synced", {});
                    d = ea(function (g) {
                        if (c[g]) {
                            var h = (f[g] || 1) + 1440 < e(qb);
                            h && delete f[g];
                            return h
                        }
                    }, d);
                    b.D("synced", f);
                    return A(function (g) {
                        return {Mi: c[g], Zh: g}
                    }, d)
                }
                function Em(a) {
                    a = Fm(a);
                    return Gm[a] || a
                }
                function Cm(a) {
                    a = th(a);
                    return Hm[a] || "ru"
                }
                function Im(a, c, b, d) {
                    if (! b.K || fe(c.ca)) 
                        d();
                     else {
                        var e = ke(a),
                            f = u(e, Jm),
                            g = Lc(a, ""),
                            h = function () {
                                var r = I(",", A(Km(jf), le(e)));
                                r = "" + r + Lm(r, g);
                                me(b, "gdpr", r);
                                d()
                            };
                        if (c.ej) 
                            f("31"),
                            h();
                         else if (3 === c.id) 
                            h();
                         else {
                            var k = H(a),
                                l = k.C("f1");
                            if (l) 
                                l(h);
                             else if (l = le(e), Ya(oc(jf), l)) 
                                h();
                             else if (g.C("yandex_login")) 
                                f("13"),
                                g.D("gdpr", Mc, 525600),
                                h();
                             else {
                                l = ne(a);
                                var m = R(a);
                                var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                    url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                    version: 2,
                                    qf: Mm,
                                    yf: "_inversed_buttons"
                                } : void 0;
                                l || p ? (l = g.C("gdpr"), K(l, pc) ? (f(l === kf ? "12" : "3"), h()) : lf(a) || Nm(a) ? (f("17"), h()) : Om(a).then(O, E).then(function (r) {
                                    r ? (f("28"), h()) : (uh(h), k.D("f1", uh), (0, mf[0])(a).then(P("params.eu")).then(function (q) {
                                        if (q || bb(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) {
                                            g.D("gdpr_popup", kf);
                                            Pm(a, c);
                                            if (ib(a)) 
                                                return Qm(a, f, c);
                                            
                                            var t = vh(a, e);
                                            if (t) 
                                                return q = Rm(a, f, t, c, p),
                                                q.then(C([
                                                    a, c
                                                ], Sm)),
                                                q
                                            
                                        }
                                        q || f("8");
                                        return L.resolve({
                                            value: Mc,
                                            Md: !0
                                        })
                                    }).then(function (q) {
                                        g.Gb("gdpr_popup");
                                        if (q) {
                                            var t = q.value;
                                            q = q.Md;
                                            K(t, pc) && g.D("gdpr", t, q ? void 0 : 525600)
                                        }
                                        t = bc(wh, ia);
                                        hd(a, t, 20)(Qa(D(a, "gdr"), E));
                                        k.D("f1", ia)
                                    })["catch"](D(a, "gdp.a")))
                                })) : (f("14"), h())
                            }
                        }
                    }
                }
                function Sm(a, c) {
                    if (ne(a)) {
                        var b = ke(a),
                            d = za(a, c);
                        d = d && d.params;
                        b = A(u(Tm, n), le(b));
                        d && b.length && d("gdpr", ua(b))
                    }
                }
                function Qm(a, c, b) {
                    var d = oe(a, b);
                    return new L(function (e) {
                        var f;
                        if (d) {
                            var g = d.$,
                                h = w(u("4", c), u(null, e)),
                                k = Q(a, h, 2E3, "gdp.f.t");
                            d.Sf((f =
                                {}, f.type = "isYandex", f)).then(function (l) {
                                l.isYandex ? (c("5"), g.F(xh, function (m) {
                                    e({
                                        value: yh(m[1].type)
                                    })
                                })) : (c("6"), e(null))
                            })["catch"](h).then(C([
                                a, k
                            ], ka))
                        } else 
                            e({
                                value: kf,
                                Md: !0
                            })
                        
                    })
                }
                function Pm(a, c) {
                    var b = oe(a, c);
                    b && b.$.F(["isYandex"], function () {
                        var d;
                        return d = {
                            type: "isYandex"
                        },
                        d.isYandex = ne(a),
                        d
                    });
                    return b
                }
                function Um(a, c, b) {
                    a = b || th(a);
                    return K(a, c) ? a : "en"
                }
                function yh(a) {
                    if (K(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) 
                        return Mc;
                    
                    a = a.replace("GDPR-ok-view-detailed-", "");
                    return K(a, pc) ? a : Mc
                }
                function zh(a, c, b) {
                    var d = n(a, "AppMetricaInitializer"),
                        e = n(d, "init");
                    if (e) 
                        try {
                            G(e, d)(zb(a, c))
                        }
                     catch (f) {} else 
                        Ah = Q(a, C([
                            a,
                            c,
                            2 * b
                        ], zh), b, "ai.d");
                    
                    return function () {
                        return ka(a, Ah)
                    }
                }
                function Bh(a, c, b, d) {
                    var e,
                        f,
                        g,
                        h = b.Th,
                        k = b.Oh;
                    b = b.isTrusted;
                    a = nf(a, k);
                    k = k.readOnly;
                    d = (e =
                        {}, e.fi = of((f =
                        {}, f.a = h ? 1 : 0, f.b = a, f.c = d || 0, f.d = k ? 1 : null, f)).Ia(), e);
                    ja(b) || (d.ite = Ab(b));
                    c.params((g =
                        {}, g.__ym = d, g))
                }
                function Ch(a) {
                    var c = n(a, "target");
                    if (c) {
                        var b = n(c, "value");
                        if ((b = cb(b)) && !(100 <= Ta(b))) {
                            var d = Rb(b),
                                e = 0 < hb(b, "@"),
                                f = "tel" === n(c, "type") || ! e && Ta(d);
                            if (e || f) {
                                if (f) {
                                    if (Vm(b)) 
                                        return;
                                    
                                    var g = b[0],
                                        h = d[0];
                                    if (g !== h && "+" !== g) 
                                        return;
                                    
                                    var k = b[1];
                                    if ("+" === g && k !== h) 
                                        return;
                                    
                                    b = b[Ta(b) - 1];
                                    g = d[Ta(d) - 1];
                                    if (b !== g) 
                                        return;
                                    
                                    b = d
                                }
                                d = e ? 5 : 11;
                                g = e ? 100 : 16;
                                if (!(Ta(b) < d || Ta(b) > g)) 
                                    return a = n(a, "isTrusted"), {
                                        Oh: c,
                                        Th: e,
                                        Aj: f,
                                        Ph: b,
                                        isTrusted: a
                                    }
                                
                            }
                        }
                    }
                }
                function Dh(a, c, b, d, e) {
                    if (!id(a)) 
                        return E;
                    
                    var f = [],
                        g = fa(a);
                    Kb(a)(Qa(E, function () {
                        var h = jb(c, a.document.body);
                        e && (h = ea(e, h));
                        y(function (l) {
                            f.push(g.F(l, b, d))
                        }, h);
                        if (Da("MutationObserver", a.MutationObserver)) {
                            var k = c.toUpperCase();
                            h = new a.MutationObserver(D(a, "de.m", function (l) {
                                y(function (m) {
                                    var p = m.addedNodes;
                                    m = m.removedNodes;
                                    p && p.length && y(function (r) {
                                        jd(a, r, function (q) {
                                            q.nodeName !== k || e && ! e(q) || f.push(g.F(q, b, d))
                                        }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                    }, p);
                                    m && m.length && y(function (r) {
                                        jd(a, r, function (q) {
                                            q.nodeName !== k || e && ! e(q) || g.xb(q, b, d)
                                        }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                    }, m)
                                }, l)
                            }));
                            h.observe(a.document.body, {
                                childList: !0,
                                subtree: !0
                            });
                            f.push(G(h.disconnect, h))
                        }
                    }));
                    return C([
                        ia, f
                    ], y)
                }
                function Wm(a) {
                    var c = n(a, "speechSynthesis.getVoices");
                    if (c) 
                        return a = G(c, a.speechSynthesis),
                        qc(function (b) {
                            return A(u(b, n), Xm)
                        }, a())
                    
                }
                function Ym(a, c, b) {
                    return I("x", A(w(O, Ea("concat", "" + a), u(b, n)), c))
                }
                function Zm(a, c) {
                    var b = c.Eg;
                    if (!$m(a, b)) 
                        return "";
                    
                    var d = [];
                    a: {
                        var e = an(a, b);
                        try {
                            var f = C(e, w)()();
                            break a
                        } catch (F) {
                            if ("ccf" === F.message) {
                                f = null;
                                break a
                            }
                            Ua(F)
                        }
                        f = void 0
                    }
                    if (Va(f)) 
                        var g = "";
                     else 
                        try {
                            g = f.toDataURL()
                        }
                     catch (F) {
                        g = ""
                    }
                    (f = g) && d.push(f);
                    var h = b.getContextAttributes();
                    try {
                        var k = na(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                    } catch (F) {
                        k = []
                    }
                    k = I(";", k);
                    f = pf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                    e = pf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                    g = b.getParameter(b.ALPHA_BITS);
                    h = h && h.antialias ? "yes" : "no";
                    var l = b.getParameter(b.BLUE_BITS),
                        m = b.getParameter(b.DEPTH_BITS),
                        p = b.getParameter(b.GREEN_BITS),
                        r = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    if (r) {
                        var q = b.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                        0 === q && (q = 2)
                    }
                    q = {
                        qj: k,
                        "webgl aliased line width range": f,
                        "webgl aliased point size range": e,
                        "webgl alpha bits": g,
                        "webgl antialiasing": h,
                        "webgl blue bits": l,
                        "webgl depth bits": m,
                        "webgl green bits": p,
                        "webgl max anisotropy": r ? q : null,
                        "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                        "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                        "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                        "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                        "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                        "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                        "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                        "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                        "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                        "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                        "webgl max viewport dims": pf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                        "webgl red bits": b.getParameter(b.RED_BITS),
                        "webgl renderer": b.getParameter(b.RENDERER),
                        "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                        "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                        "webgl vendor": b.getParameter(b.VENDOR),
                        "webgl version": b.getParameter(b.VERSION)
                    };
                    qf(d, q, ": ");
                    a: {
                        try {
                            var t = b.getExtension("WEBGL_debug_renderer_info");
                            if (t) {
                                var x = {
                                    "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
                                    "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
                                };
                                break a
                            }
                        } catch (F) {}
                        x = {}
                    } qf(d, x);
                    if (! b.getShaderPrecisionFormat) 
                        return I("~", d);
                    
                    qf(d, bn(b));
                    return I("~", d)
                }
                function qf(a, c, b) {
                    void 0 === b && (b = ":");
                    y(function (d) {
                        return a.push("" + d[0] + b + d[1])
                    }, Oa(c))
                }
                function cn(a, c, b, d) {
                    c = d.C("cc");
                    d = C([
                        "cc", ""
                    ], d.D);
                    if (c) {
                        var e = c.split("&");
                        c = e[0];
                        if ((e =( e = e[1]) && Ha(e)) && 1440 < ha(a)(qb) - e) 
                            return d();
                        
                        b.D("cc", c)
                    } else 
                        Aa(0)(c) || d()
                    
                }
                function dn(a, c, b, d) {
                        return qa(c, function (e) {
                            if (!rf(e) && !kd(a)) 
                                if (e = d.C("zzlc"), W(e) || Va(e) || "na" === e) {
                                    var f = db(a);
                                    if (f && (e = cc(a))) {
                                        var g = f("iframe");
                                        z(g.style, {
                                            display: "none",
                                            width: "1px",
                                            height: "1px",
                                            visibility: "hidden"
                                        });
                                        f = sf(a, 68);
                                        var h = tf(a, 79);
                                        g.src = "https://mc.yandex." + (
                                        f || h ? "md" : "ru"
                                    ) + Eh("L21ldHJpa2EvenpsYy5odG1s");
                                        e.appendChild(g);
                                        var k = 0,
                                            l = fa(a).F(a, ["message"], D(a, "zz.m", function (m) {
                                                (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (rc(g), m = m.substr(8), d.D("zzlc", m), b.D("zzlc", m), l(), ka(a, k))
                                            }));
                                        k = Q(a, w(l, u(g, rc)), 3E3)
                                    }
                                 else 
                                    b.D("zzlc", e)
                                
                            
                        }
                    )
                }
                function en(a, c, b) {
                    var d,
                        e;
                    c = rb(u(a, n), fn);
                    c = W(c) ? null : n(a, c);
                    if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                        var f = new c((d =
                            {}, d.iceServers =[], d));
                        a = n(f, "createDataChannel");
                        T(a) && (G(a, f, "y.metrika")(),
                        a = n(f, "createOffer"),
                        T(a) && ! a.length && (a = G(a, f)(),
                        d = n(a, "then"),
                        T(d) && G(d, a, function (g) {
                            var h = n(f, "setLocalDescription");
                            T(h) && G(h, f, g, E, E)()
                        })(),
                        z(f, (e =
                            {}, e.onicecandidate = function () {
                            var g,
                                h = n(f, "close");
                            if (T(h)) {
                                h = G(h, f);
                                try {
                                    var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                                } catch (l) {
                                    f.onicecandidate = E;
                                    "closed" !== f.iceConnectionState && h();
                                    return
                                }
                                k && 0 < k.length && (g = dc(k[1]), b.D("pp", g));
                                f.onicecandidate = E;
                                h()
                            }
                        },
                        e))))
                    }
                }
                function gn(a, c, b) {
                    var d,
                        e = ld(a, c);
                    if (e) {
                        e.$.F(["gpu-get"], function () {
                            var h;
                            return h = {},
                            h.type = "gpu-get",
                            h.pu = b.C("pu"),
                            h
                        });
                        var f = n(a, "opener");
                        if (f) {
                            var g = Q(a, C([
                                a, c, b
                            ], Fh), 200, "pu.m");
                            e.ne(f, (d = {}, d.type = "gpu-get", d), function (h, k) {
                                var l = n(k, "pu");
                                l && (ka(a, g), b.D("pu", l))
                            })
                        } else 
                            Fh(a, c, b)
                        
                    }
                }
                function Fh(a, c, b) {
                    var d = n(a, "location.host");
                    a = md(a, c);
                    b.D("pu", "" + dc(d) + a)
                }
                function Gh(a, c, b) {
                    c = Lc(a, void 0, c);
                    c = Hh(a, c.C("phc_settings") || "");
                    var d = n(c, "clientId"),
                        e = n(c, "orderId"),
                        f = n(c, "service_id"),
                        g = n(c, "phones") || [];
                    return d && e && g && f ? hn(a, b.nc, {dg: jn})(g).then(function (h) {
                        return kn(b, {
                            Db: d,
                            Qb: e,
                            Vf: f
                        }, h.ja, g, h.Aa)
                    })["catch"](E) : L.resolve()
                }
                function jn(a, c, b) {
                    a = ln(b.Tb);
                    if ("href" === b.je) {
                        var d = b.sb;
                        c = d.href;
                        b = c.replace(a, b.bb);
                        if (c !== b) 
                            return d.href = b,
                            !0
                        
                    } else if ((a = null === (d = b.sb.textContent) || void 0 === d ? void 0 : d.replace(a, b.bb)) && a !== b.sb.textContent) 
                        return b.sb.textContent = a,
                        !0;
                    
                    return !1
                }
                function kn(a, c, b, d, e) {
                    var f;
                    c.Db && c.Qb && (c.Db === a.Db && c.Qb === a.Qb || z(a, c, {
                        ja: {},
                        gb: !0
                    }), 0 < e && ra(a.Aa, [e]), y(function (g) {
                        var h,
                            k,
                            l = g[0];
                        g = g[1];
                        var m = + (a.ja[l] && a.ja[l][g] ? a.ja[l][g] : 0);
                        z(a.ja, (h =
                            {}, h[l] =( k =
                            {}, k[g] = m, k), h))
                    }, d), y(function (g) {
                        var h,
                            k,
                            l = g[0];
                        g = g[1];
                        var m = 1 + (a.ja[l] ? a.ja[l][g] : 0);
                        z(a.ja, (h =
                            {}, h[l] =( k =
                            {}, k[g] = m, k), h))
                    }, b), a.mf && (a.gb || b.length) && ((c = za(a.l, a.nc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Db, f.orderId = a.Qb, f.service_id = a.Vf, f.phones = a.ja, f.performance = a.Aa, f)), a.gb =! 1))
                }
                function mn(a) {
                    a = db(a);
                    if (! a) 
                        return "";
                    
                    a = a("video");
                    try {
                        var c = Ea("canPlayType", a),
                            b = qc(function (d) {
                                return A(w(O, Ea("concat", d + "; codecs=")), nn)
                            }, Ih);
                        return A(c, Ih.concat(b))
                    } catch (d) {
                        return "canPlayType"
                    }
                }
                function on(a) {
                    var c = n(a, "matchMedia");
                    if (c && Da("matchMedia", c)) {
                        var b = Ea("matchMedia", a);
                        return J(function (d, e) {
                            d[e] = b("(" + e + ")");
                            return d
                        }, {}, pn)
                    }
                }
                function bn(a) {
                    return J(function (c, b) {
                        var d = b[0],
                            e = b[1];
                        c[d + " precision"] = n(e, "precision") || "n";
                        c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                        c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                        return c
                    }, {}, [
                        [
                            "webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)
                        ],
                        [
                            "webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)
                        ],
                        [
                            "webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)
                        ],
                        [
                            "webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)
                        ],
                        [
                            "webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)
                        ],
                        [
                            "webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)
                        ],
                        [
                            "webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)
                        ],
                        [
                            "webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)
                        ],
                        [
                            "webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)
                        ],
                        [
                            "webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)
                        ],
                        [
                            "webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)
                        ],
                        [
                            "webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)
                        ]
                    ])
                }
                function an(a, c) {
                    return [
                        function () {
                            var b = c.createBuffer();
                            b && c.getParameter && Da("getParameter", c.getParameter) || uf();
                            c.bindBuffer(c.ARRAY_BUFFER, b);
                            var d = new a.Float32Array(qn);
                            c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                            b.Vh = 3;
                            b.hi = 3;
                            d = c.createProgram();
                            var e = c.createShader(c.VERTEX_SHADER);
                            d && e || uf();
                            return {fe: d, dj: e, cj: b}
                        },
                        function (b) {
                            var d = b.fe,
                                e = b.dj;
                            c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                            c.compileShader(e);
                            c.attachShader(d, e);
                            (d = c.createShader(c.FRAGMENT_SHADER)) || uf();
                            return z(b, {kh: d})
                        },
                        function (b) {
                            var d = b.fe,
                                e = b.kh;
                            c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                            c.compileShader(e);
                            c.attachShader(d, e);
                            c.linkProgram(d);
                            c.useProgram(d);
                            return b
                        },
                        function (b) {
                            var d = b.fe;
                            b = b.cj;
                            d.bj = c.getAttribLocation(d, "attrVertex");
                            d.ji = c.getUniformLocation(d, "uniformOffset");
                            c.enableVertexAttribArray(d.Lj);
                            c.vertexAttribPointer(d.bj, b.Vh, c.FLOAT, !1, 0, 0);
                            c.uniform2f(d.ji, 1, 1);
                            c.drawArrays(c.TRIANGLE_STRIP, 0, b.hi);
                            return c.canvas
                        }
                    ]
                }
                function $m(a, c) {
                    if (!T(a.Float32Array)) 
                        return !1;
                    
                    var b = n(c, "canvas");
                    if (! b || !Da("toDataUrl", b.toDataURL)) 
                        return !1;
                    
                    try {
                        c.createBuffer()
                    } catch (d) {
                        return !1
                    }
                    return !0
                }
                function pf(a, c) {
                    c.clearColor(0, 0, 0, 1);
                    c.enable(c.DEPTH_TEST);
                    c.depthFunc(c.LEQUAL);
                    c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                    return "[" + n(a, "0") + ", " + n(a, "1") + "]"
                }
                function rn(a, c) {
                    if (n(c, "settings.ins")) {
                        var b = H(a);
                        if (! b.C("scip")) {
                            var d = Pa(a),
                                e = ha(a)(qb),
                                f = vf(d.C("sci"));
                            if (!(f && 1440 >= e - f)) {
                                f = va(a, "ci");
                                var g = ["sync.cook.int"],
                                    h = function (l) {
                                        l = b.C("scip", "") + l;
                                        b.D("scip", l)
                                    },
                                    k = u("a", h);
                                b.D("scip", "0");
                                return f({
                                    ba: {
                                        ha: g,
                                        Pa: 3E3,
                                        Ab: !0
                                    }
                                }, ["https://an.yandex.ru/sync_cookie"]).then(function (l) {
                                    l = n(l.Sc, "CookieMatchUrls");
                                    if (ca(l) && Ta(l)) {
                                        h("1");
                                        var m = va(a, "c");
                                        l = A(function (p, r) {
                                            return m({
                                                ba: {
                                                    ha: g,
                                                    Pa: 3E3
                                                }
                                            }, ["https://" + p])["catch"](w(u("b", h), u("" + r, h)))
                                        }, ea(ma, l));
                                        return L.all(l)
                                    }
                                    k()
                                }, k).then(function () {
                                    var l = b.C("scip");
                                    ! l || bb(l, "a") || bb(l, "b") || (d.D("sci", e), h("2"))
                                }, E)
                            }
                        }
                    }
                }
                function Jh(a) {
                    return {
                        N: function (c, b) {
                            if (! c.K) 
                                return b();
                            
                            var d = H(a).C("fid");
                            !Kh && d && (me(c, "fid", d), Kh =! 0);
                            return b()
                        }
                    }
                }
                function sn(a, c) {
                    var b = a.document;
                    if (K(b.readyState, ["interactive", "complete"])) 
                        Qb(a, c);
                     else {
                        var d = fa(a),
                            e = d.F,
                            f = d.xb,
                            g = function () {
                                f(b, ["DOMContentLoaded"], g);
                                f(a, ["load"], g);
                                c()
                            };
                        e(b, ["DOMContentLoaded"], g);
                        e(a, ["load"], g)
                    }
                }
                function wf(a) {
                    return {
                        N: function (c, b) {
                            var d = c.K;
                            if (d) {
                                var e = H(a).C("adBlockEnabled");
                                e && d.D("adb", e)
                            }
                            b()
                        }
                    }
                }
                function tn(a) {
                    var c = D(a, "i.clch", un);
                    fa(a).F(a.document, ["click"], u(a, c), {
                        passive: !1
                    });
                    return function (b) {
                        var d = Fa.Ra,
                            e = a.Ya[Fa.kc],
                            f = !! e._informer;
                        e._informer = z({
                            domain: "informer.yandex.ru"
                        }, b);
                        f || sc(a, {
                            src: d + "//informer.yandex.ru/metrika/informer.js"
                        })
                    }
                }
                function vn(a, c) {
                    var b = Pa(a);
                    if ("" === b.C("cc")) {
                        var d = u("cc", b.D);
                        d(0);
                        var e = ha(a),
                            f = H(a);
                        f = w(P(wn({Sc: 1}) + ".c"), nd(function (g) {
                            d(g + "&" + e(qb))
                        }), u("cc", f.D));
                        va(a, "6", c)({
                            ba: {
                                Ab: !0,
                                He: !1
                            }
                        }, ["https://mc.yandex.md/cc"]).then(f)["catch"](w(nd(function () {
                            var g = e(qb);
                            b.D("cc", "&" + g)
                        }), D(a, "cc")))
                    }
                }
                function pe(a, c) {
                    if (! c) 
                        return !1;
                    
                    var b = R(a);
                    return(new RegExp(c)).test("" + b.pathname + b.hash + b.search)
                }
                function xn(a, c) {
                    return qa(c, function (b) {
                        var d = n(b, "settings.dr");
                        return {
                            Sg: yn(a, d),
                            isEnabled: n(b, "settings.auto_goals")
                        }
                    })
                }
                function zn(a, c, b, d, e) {
                    b = xf(a.document.body, b);
                    d = xf(a.document.body, d);
                    K(e.target, [b, d]) && yf(a, c)
                }
                function Lh(a, c, b, d) {
                    (b = An(a, d, b)) && yf(a, c, b)
                }
                function Mh(a, c) {
                    var b = Nh(a, c);
                    return Bn(a, b)
                }
                function Nh(a, c) {
                    var b = xf(a.document.body, c);
                    return b ? Cn(a, b) : ""
                }
                function yf(a, c, b) {
                    if (c = za(a, c)) 
                        a = od([
                            "dr",
                            b || "" + Wa(a, 10, 99)
                        ]),
                        c.params(od(["__ym", a]))
                    
                }
                function xf(a, c) {
                    var b = null;
                    try {
                        b = c ? ac(c, a) : b
                    } catch (d) {}
                    return b
                }
                function Oh(a) {
                    a = Ba(Eh(a));
                    return A(function (c) {
                        c = c.charCodeAt(0).toString(2);
                        return Ph("0", 8, c)
                    }, a)
                }
                function Cn(a, c) {
                    if (! c) 
                        return "";
                    
                    var b = [],
                        d = n(a, "document");
                    jd(a, c, function (e) {
                        if (e.nodeType === d.TEXT_NODE) 
                            var f = e.textContent;
                         else 
                            e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                        
                        (f = f && cb(f)) && b.push(f)
                    });
                    return 0 === b.length ? "" : I(" ", b)
                }
                function Dn(a, c, b) {
                    a = Ja(b);
                    b = a[1];
                    "track" === a[0] && c({version: "0", sc: b})
                }
                function En(a, c, b) {
                    if (b) {
                        var d = b.version;
                        (b = n(Fn, d + "." + b.sc)) && (c && K(b, Gn) || a("ym-" + b + "-" + d))
                    }
                }
                function Hn(a, c, b) {
                    if ("rt" === b) 
                        return "https://" + Qh(a, c) + ".mc.yandex.ru/watch/3/1";
                    
                    if ("mf" === b) {
                        b = R(a);
                        b = qe(b.protocol + "//" + b.hostname + b.pathname);
                        c = md(a, c);
                        var d = "";
                        do 
                            d += Wa(a);
                         while (d.length < c.length);
                        d = d.slice(0, c.length);
                        a = "";
                        for (var e = 0; e < c.length; e += 1) 
                            a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
                        
                        a = [d, a];
                        return "https://adstat.yandex.ru/track?service=metrika&id=" + a[1] + "&mask=" + a[0] + "&ref=" + b
                    }
                }
                function In(a, c, b) {
                    var d,
                        e = zf(c).Sb;
                    return va(a, "pi", c)({
                        K: Ka(
                            (d =
                                {}, d[e] = 1, d)
                        )
                    }, [b])
                }
                function Jn(a, c, b) {
                    return new L(function (d, e) {
                        if (Rh(a, re, "isp")) {
                            var f = E,
                                g = function (h) {
                                    ("1" === h ? d : e)();
                                    f();
                                    Sh(re, "isp")
                                };
                            f = fa(a).F(a, ["message"], C([
                                b, g
                            ], D(a, "isp.stat.m", Kn)));
                            Q(a, g, 1500)
                        } else 
                            e()
                        
                    })
                }
                function Kn(a, c, b) {
                    var d = n(b, "data");
                    if (ma(d)) {
                        var e = d.split("*");
                        d = e[0];
                        var f = e[1];
                        e = e[2];
                        "sc.frame" === d && b.source ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
                    }
                }
                function Ln(a, c) {
                    var b = Pa(a),
                        d = "wv2rf:" + M(c),
                        e = c.ic,
                        f = Af(a),
                        g = b.C(d),
                        h = c.Vi;
                    return W(f) || Va(g) ? Ga(function (k, l) {
                        qa(c, function (m) {
                            var p = !!n(m, "settings.webvisor.forms");
                            p = !n(m, "settings.x3") && p;
                            f = Af(a) || n(m, "settings.eu");
                            b.D(d, Ab(p));
                            l({
                                ic: e,
                                Ld: !! f,
                                Bf: p,
                                fg: h
                            })
                        })
                    }) : Bf({
                        ic: e,
                        Ld: f,
                        Bf: !!Ha(g),
                        fg: h
                    })
                }
                function Mn() {
                    var a = J(function (c, b) {
                        c[b[0]] = {
                            gd: 0,
                            Cg: 1 / b[1]
                        };
                        return c
                    }, {}, [
                        [
                            "blur", .0034
                        ],
                        [
                            "change", .0155
                        ],
                        [
                            "click", .01095
                        ],
                        [
                            "deviceRotation", 2E-4
                        ],
                        [
                            "focus", .0061
                        ],
                        [
                            "mousemove", .5132
                        ],
                        [
                            "scroll", .4795
                        ],
                        [
                            "selection", .0109
                        ],
                        [
                            "touchcancel", 2E-4
                        ],
                        [
                            "touchend", .0265
                        ],
                        [
                            "touchforcechange", .0233
                        ],
                        [
                            "touchmove", .1442
                        ],
                        [
                            "touchstart", .027
                        ],
                        [
                            "zoom", .0014
                        ]
                    ]);
                    return {
                        yg: function (c) {
                            if (c.length) 
                                return {
                                    type: "activity",
                                    data: J(function (b, d) {
                                        var e = a[d];
                                        return Math.round(b + e.gd * e.Cg)
                                    }, 0, da(a))
                                }
                            
                        },
                        ki: function (c) {
                            c && (c = a[c.data.type || c.event]) && (c.gd += 1)
                        }
                    }
                }
                function Nn(a) {
                    return {
                        mh: function () {
                            var c = a.document.querySelector("base[href]");
                            return c ? c.getAttribute("href") : null
                        },
                        oh: function () {
                            if (a.document.doctype) {
                                var c = z({
                                        name: "html",
                                        publicId: "",
                                        systemId: ""
                                    }, a.document.doctype),
                                    b = c.publicId,
                                    d = c.systemId;
                                return "<!DOCTYPE " + I("", [
                                    c.name,
                                    b ? ' PUBLIC "' + b + '"' : "",
                                    ! b && d ? " SYSTEM" : "",
                                    d ? ' "' + d + '"' : ""
                                ]) + ">"
                            }
                            return null
                        }
                    }
                }
                function On(a, c, b) {
                    var d = pd(a),
                        e = fa(a),
                        f = ib(a),
                        g = c.zd(),
                        h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"),
                        k = u(d, O);
                    if (h) {
                        if (! g) 
                            return Q(a, G(d.T, d, "i", {
                                va: !1
                            }), 10), {
                                yd: k,
                                Of: E,
                                stop: E
                            };
                        
                        Ua(Ra())
                    }
                    d.F(["sr"], function (q) {
                        var t,
                            x = Th(a, q.source);
                        x && Cf(a, q.source, (t =
                            {}, t.type = "\u043d", t.frameId = c.sa().Z(x), t))
                    });
                    d.F(["sd"], function (q) {
                        var t = q.data;
                        q = q.source;
                        (a === q || Th(a, q)) && d.T("sdr", {
                            data: t.data,
                            frameId: t.frameId
                        })
                    });
                    if (f && ! g) {
                        var l = !1,
                            m = 0,
                            p = function () {
                                var q;
                                Cf(a, a.parent, (q =
                                    {}, q.type = "sr", q));
                                m = Q(a, p, 100, "if.i")
                            };
                        p();
                        var r = function (q) {
                            d.ga(["\u043d"], r);
                            ka(a, m);
                            var t = Nc(a, q.origin).host;
                            l || q.source !== a.parent || ! q.data.frameId || "about:blank" !== R(a).host && !K(t, b) || (l =! 0, d.T("i", {
                                frameId: q.data.frameId,
                                va: !0
                            }))
                        };
                        d.F(["\u043d"], r);
                        Q(a, function () {
                            d.ga(["\u043d"], r);
                            ka(a, m);
                            l || (l =! 0, d.T("i", {
                                va: !1
                            }))
                        }, 2E3, "if.r")
                    }
                    e = e.F(a, ["message"], function (q) {
                        var t = yb(a, q.data);
                        t && t.type && K(t.type, Pn) && d.T(t.type, {
                            data: t,
                            source: q.source,
                            origin: q.origin
                        })
                    });
                    return {
                        yd: k,
                        Of: function (q) {
                            var t;
                            return Cf(a, a.parent, (t =
                                {}, t.frameId = c.zd(), t.data = q, t.type = "sd", t))
                        },
                        stop: e
                    }
                }
                function Th(a, c) {
                    try {
                        return rb(w(P("contentWindow"), Aa(c)), Ba(a.document.querySelectorAll("iframe")))
                    } catch (b) {
                        return null
                    }
                }
                function Cf(a, c, b) {
                    c || Ua(Ra());
                    a = zb(a, b);
                    c.postMessage(a, "*")
                }
                function Uh() {
                    return ec() + ec() + "-" + ec() + "-" + ec() + "-" + ec() + "-" + ec() + ec() + ec()
                }
                function ec() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                function Qn(a, c) {
                    if (ma(c)) 
                        return c;
                    
                    var b = a.textContent;
                    if (ma(b)) 
                        return b;
                    
                    b = a.data;
                    if (ma(b)) 
                        return b;
                    
                    b = a.nodeValue;
                    return ma(b) ? b : ""
                }
                function Rn(a, c, b, d, e) {
                    void 0 === d && (d =
                        {});
                    void 0 === e && (e = Ma(c));
                    var f = z(J(function (h, k) {
                        h[k.name] = k.value;
                        return h
                    }, {}, Ba(c.attributes)), d);
                    z(f, Sn(c, e, f));
                    var g = (d = J(function (h, k) {
                        var l = k[0],
                            m = se(a, c, l, k[1], b, e),
                            p = m.value;
                        ja(p) ? delete f[l] : f[l] = p;
                        return h || m.pb
                    }, !1, Oa(f))) && Jc(c);
                    g && (f.width = g.width, f.height = g.height);
                    return {pb: d, zg: f}
                }
                function Sn(a, c, b) {
                    var d = {};
                    Df(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                    return d
                }
                function se(a, c, b, d, e, f) {
                    void 0 === f && (f = Ma(c));
                    var g = {
                        pb: !1,
                        value: d
                    };
                    if (Df(c)) 
                        "value" === b ? !ja(d) && "" !== d && (b = e.Ld, f = e.Bf, e = qd(a, c), f ? (b = Oc(a, c, b), a = b.qb, c = b.hb, b = b.Va, g.pb =! c && (e || a)) : (g.pb = e, b =!( c && fc("ym-record-keys", c))), b || e) && (d = "" + d, g.value = 0 < d.length ? Vh("\u2022", d.length) : "") : "checked" === b && K((c.getAttribute("type") || "").toLowerCase(), Tn) ? g.value = c.checked ? "checked" : null : Un.test(b) && Ef(a, c) && (g.value = null);
                     else if ("IMG" === f && "src" === b) 
                        (e = qd(a, c)) ? (g.pb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
                     else if ("A" === f && "href" === b) 
                        g.value = d ? "#" : "";
                     else if (K(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === hb(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && K(b, ["src", "type"])) 
                        g.value = null;
                    
                    return g
                }
                function Ff(a, c, b, d) {
                    void 0 === d && (d = "wv2");
                    return {
                        H: function (e, f) {
                            return D(a, d + "." + b + "." + f, e, void 0, c)
                        }
                    }
                }
                function Vn(a, c, b, d, e) {
                    function f() {
                        l && l.stop()
                    }
                    if (! c.zb) 
                        return L.resolve(E);
                    
                    var g = va(a, "4", c),
                        h = {
                            K: Ka()
                        },
                        k = new Wn(a, b, function (m, p, r) {
                            if (! g) 
                                return L.resolve();
                            
                            var q = "wv-data=" + gd(m, !0),
                                t = D(a, "m.n.m.s");
                            p = {};
                            p["wv-part"] = "" + r;
                            r = m.length;
                            for (var x = 0, F = 255, U = 255, N, la, wa; r;) {
                                N = 21 < r ? 21 : r;
                                r -= N;
                                do 
                                    la = "string" === typeof m ? m.charCodeAt(x) : m[x],
                                    x += 1,
                                    255 < la && (wa = la >> 8, la &= 255, la ^= wa),
                                    F += la,
                                    U += F;
                                 while (-- N);
                                F = (F & 255) + (F >> 8);
                                U = (U & 255) + (U >> 8)
                            }
                            m = (F & 255) + (F >> 8) << 8 | (U & 255) + (U >> 8);
                            return g(z({}, h, {
                                ba: {
                                    da: q
                                },
                                J: (p["wv-check"] = "" + (
                                65535 === m ? 0 : m
                            ), p["wv-type"] = b.type, p)
                            }), c)["catch"](t)
                        }),
                        l = Xn(a, k, d, e);
                    return qa(c, function (m) {
                        m && H(a).D("isEU", n(m, "settings.eu"));
                        H(a).C("oo") || l && Wh(a, m) && l.start();
                        return f
                    })
                }
                function Xn(a, c, b, d) {
                    var e = a.document,
                        f = [],
                        g = fa(a),
                        h = ":submit" + Math.random(),
                        k = [],
                        l = G(c.flush, c),
                        m = sa(function (q, t) {
                            D(a, "hfv." + q, function () {
                                try {
                                    var x = t.type
                                } catch (F) {
                                    return
                                }
                                x = K(x, d);
                                c.push(t, {type: q});
                                x && l()
                            })()
                        }),
                        p = D(a, "sfv", function () {
                            var q = b(a),
                                t = Yn(a);
                            y(function (x) {
                                f.push(g.F(x.target, [x.event], m(x.type)))
                            }, q);
                            y(function (x) {
                                f.push(g.F(x.target, [x.event], D(a, "hff." + x.type + "." + x.event, function (F) {
                                    y(Ga({l: a, qa: F, flush: l}), x.O)
                                })))
                            }, t);
                            k = Xh(a, "form", e);
                            e.attachEvent && (q = Xh(a, "form *", e), y(function (x) {
                                f.push(g.F(x, ["submit"], m("form")))
                            }, k), y(function (x) {
                                Gf(x) && f.push(g.F(x, ["change"], m("formInput")))
                            }, q));
                            y(function (x) {
                                var F = x.submit;
                                if (T(F) || "object" === typeof F && Zn.test("" + F)) 
                                    x[h] = F,
                                    x.submit = D(a, "fv", function () {
                                        var U = {
                                            target: x,
                                            type: "submit"
                                        };
                                        m("document")(U);
                                        return x[h]()
                                    })
                                
                            }, k)
                        }),
                        r = D(a, "ufv", function () {
                            y(ia, f);
                            y(function (q) {
                                q && (q.submit = q[h])
                            }, k);
                            c.flush()
                        });
                    return {start: p, stop: r}
                }
                function $n(a, c) {
                    var b = ea(function (e) {
                            return 0 < e.O.length
                        }, c),
                        d = Yh({target: a.document, type: "document"});
                    return A(w(O, d, ao(a)), b)
                }
                function Zh(a, c) {
                    var b = a.l,
                        d = [],
                        e = c.form;
                    if (! c[Xa] && e) {
                        var f = e.elements;
                        e = e.length;
                        for (var g = 0; g < e; g += 1) {
                            var h = f[g];
                            te(h) && ! h[Xa] && ra(d, tc(b, h))
                        }
                    } else 
                        ra(d, tc(b, c));
                    
                    return d
                }
                function Hf(a) {
                    if (rd) {
                        rd = !1;
                        var c = Bb(a.l),
                            b = [];
                        kb(a.l, b, 15) ? a = [] : (S(b, c), a = b);
                        return a
                    }
                }
                function $h(a) {
                    if (!rd) {
                        rd = !0;
                        a = Bb(a.l);
                        var c = [];
                        Sb(c, 14);
                        S(c, a);
                        return c
                    }
                }
                function bo(a, c, b) {
                    var d = c[Xa];
                    if (d) {
                        a: {
                            var e = Bb(a),
                            f = c[Xa];
                            if (0 < f) {
                                var g = [];
                                c = If(a, c);
                                var h = uc[f],
                                    k = c[0] + "x" + c[1],
                                    l = c[2] + "x" + c[3];
                                if (k !== h.xf) {
                                    h.xf = k;
                                    if (kb(a, g, 9)) {
                                        a = [];
                                        break a
                                    }
                                    S(g, e);
                                    S(g, f);
                                    S(g, c[0]);
                                    S(g, c[1])
                                }
                                if (l !== h.size) {
                                    h.size = l;
                                    if (kb(a, g, 10)) {
                                        a = [];
                                        break a
                                    }
                                    S(g, e);
                                    S(g, f);
                                    S(g, c[2]);
                                    S(g, c[3])
                                }
                                if (g.length) {
                                    a = g;
                                    break a
                                }
                            }
                            a = []
                        }
                        ra(b, a)
                    }
                    return d
                }
                function Oc(a, c, b) {
                    void 0 === b && (b =! 1);
                    if (! c) 
                        return {
                            Va: !1,
                            hb: !1,
                            qb: !1
                        };
                    
                    var d = c.getAttribute("type") || c.type;
                    if ("button" === d) 
                        return {
                            Va: !1,
                            hb: !1,
                            qb: !1
                        };
                    
                    var e = ea(ai, [c.className, c.id, c.name]),
                        f = c && fc("ym-record-keys", c);
                    d = d && K(d, bi) || Ya(eb(co), e);
                    var g;
                    (g = d) || (g = c.placeholder, g = Ya(eb(eo), e) || ai(g) && fo.test(g || ""));
                    e = g;
                    return {
                        Va: ! f && (Jf(a, c) || e && b || e && ! d && ! b),
                        hb: f,
                        qb: e
                    }
                }
                function Jf(a, c) {
                    return Ef(a, c) || sd(a, c) ? !0 : qd(a, c)
                }
                function ai(a) {
                    return !!(a && 2 < a.length)
                }
                function Df(a) {
                    try {
                        var c = Ma(a);
                        if (K(c, Kf)) {
                            if ("INPUT" === c) {
                                var b = a.type;
                                return ! b || K(b.toLocaleLowerCase(), go)
                            }
                            return !0
                        }
                    } catch (d) {}
                    return !1
                }
                function ci(a, c) {
                    return c && fc("(ym-disable-submit|-metrika-noform)", c)
                }
                function ho(a, c) {
                    return I("", A(function (b) {
                        return a.isNaN(b) ? io.test(b) ? (b = b.toUpperCase() === b ? jo : ko, String.fromCharCode(Wa(a, b[0], b[1]))) : b : "" + Wa(a, 0, 9)
                    }, c.split("")))
                }
                function qd(a, c) {
                    if (ja(c)) 
                        return !1;
                    
                    if (Lf(c)) {
                        var b = c.parentNode;
                        return(ja(b) ? 0 : 11 === b.nodeType) ? !1 : qd(a, c.parentNode)
                    }
                    b = di(a);
                    if (!b) 
                        return !1;
                    
                    var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
                    return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
                }
                function Wh(a, c) {
                    var b = vc(a),
                        d = b.C("visorc");
                    K(d, ["w", "b"]) || (d = "");
                    ei(a) && fi(a, ue, "visorc") && !lo.test(lb(a) || "") || (d = "b");
                    var e = n(c, "settings.webvisor.recp");
                    if (! a.isFinite(e) || 0 > e || 1 < e) 
                        d = "w";
                    
                    d || (d = H(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                    b.D("visorc", d, 30);
                    return "w" === d
                }
                function mo(a, c) {
                    return {
                        N: function (b, d) {
                            b.K.Xb("we", Lb(c.zb));
                            gi(a, c, b, "rn");
                            d()
                        }
                    }
                }
                function hi(a, c, b) {
                    if (ii.isEnabled(a)) 
                        return new ii(a, c);
                    
                    if (ji.isEnabled(a)) 
                        return new ji(a, b)
                    
                }
                function ki(a, c) {
                    var b = c[1][3],
                        d = 0,
                        e = new a.Uint8Array(c[0]);
                    return bc([b], function (f, g) {
                        if (! f) 
                            return e;
                        
                        f[0](a, f[2], e, d);
                        d += f[1];
                        g.push(f[3]);
                        return e
                    })
                }
                function li(a, c, b) {
                    a = c(b);
                    c = [E, 0, 0];
                    var d = [0, c, c, void 0];
                    return bc(a, function (e, f) {
                        var g = e[0],
                            h = e[1],
                            k = e[2];
                        if (0 === g) 
                            return k(d, h),
                            d;
                        
                        if (void 0 === h || null === h) 
                            return d;
                        
                        var l = g >> 3;
                        if (g & 1) 
                            wc(d, X(l)),
                            h = k(h),
                            l & 2 && wc(d, X(h[1])),
                            wc(d, h);
                         else if (g & 4) 
                            for (g = h.length - 1; 0 <= g;) {
                                var m = k(h[g]);
                                m.push([0, 0, Mf]);
                                m.push([0, X(l), wc]);
                                m.unshift([0, 0, Nf]);
                                ra(f, m);
                                -- g
                            }
                         else if (g & 2) {
                            k = e[2];
                            var p = e[3],
                                r = e[4],
                                q = e[5],
                                t = da(h);
                            for (g = t.length - 1; 0 <= g;) 
                                m = t[g],
                                m = [
                                    [
                                        0, 0, Nf
                                    ],
                                    [
                                        r, h[m], q
                                    ],
                                    [
                                        k, m, p
                                    ],
                                    [
                                        0, 0, Mf
                                    ],
                                    [
                                        0, X(l), wc
                                    ]
                                ],
                                ra(f, m),
                                -- g
                            
                        } else 
                            m = k(h),
                            m.push([0, 0, Mf]),
                            m.push([0, X(l), wc]),
                            m.unshift([0, 0, Nf]),
                            ra(f, m);
                        
                        return d
                    })
                }
                function Nf(a) {
                    var c = a[1],
                        b = a[0],
                        d = a[2];
                    a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] =[
                        E, 0, 0
                    ], a[2] = a[1]);
                    wc(a, X(b));
                    b && (a[2][3] = c[3],
                    a[2] = d,
                    a[0] += b)
                }
                function Mf(a) {
                    a[3] = [
                        a[0], a[1], a[2], a[3]
                    ];
                    a[1] = [E, 0, 0];
                    a[2] = a[1];
                    a[0] = 0
                }
                function wc(a, c) {
                    a[0] += c[1];
                    a[2][3] = c;
                    a[2] = c
                }
                function mi(a) {
                    return [
                        [
                            1857, a.partsTotal, X
                        ],
                        [
                            1793, a.activity, X
                        ],
                        [
                            1744, a.textChangeMutation, no
                        ],
                        [
                            1680, a.removedNodesMutation, oo
                        ],
                        [
                            1616, a.addedNodesMutation, po
                        ],
                        [
                            1552, a.attributesChangeMutation, qo
                        ],
                        [
                            1488, a.publishersHeader, ro
                        ],
                        [
                            1424, a.articleInfo, so
                        ],
                        [
                            1360, a.focusEvent, to
                        ],
                        [
                            1296, a.fatalErrorEvent, uo
                        ],
                        [
                            1232, a.deviceRotationEvent, vo
                        ],
                        [
                            1168, a.keystrokesEvent, wo
                        ],
                        [
                            1104, a.resizeEvent, xo
                        ],
                        [
                            1040, a.zoomEvent, yo
                        ],
                        [
                            976, a.touchEvent, zo
                        ],
                        [
                            912, a.changeEvent, Ao
                        ],
                        [
                            848, a.selectionEvent, Bo
                        ],
                        [
                            784, a.scrollEvent, Co
                        ],
                        [
                            720, a.mouseEvent, Do
                        ],
                        [
                            656, a.Ij, Eo
                        ],
                        [
                            592, a.page, Fo
                        ],
                        [
                            513, a.end, xc
                        ],
                        [
                            449, a.partNum, X
                        ],
                        [
                            401, a.chunk, Go
                        ],
                        [
                            257, a.frameId, ta
                        ],
                        [
                            193, a.event, X
                        ],
                        [
                            129, a.type, X
                        ],
                        [
                            65, a.stamp, X
                        ]
                    ]
                }
                function Ho(a) {
                    return [[84, a.Ai, mi]]
                }
                function Io(a) {
                    return [
                        [
                            129, a.position, ta
                        ],
                        [
                            81, a.name, ba
                        ]
                    ]
                }
                function Jo(a) {
                    return [[81, a.name, ba]]
                }
                function Ko(a) {
                    return [[81, a.name, ba]]
                }
                function so(a) {
                    return [
                        [
                            593, a.updateDate, ba
                        ],
                        [
                            532, a.rubric, Io
                        ],
                        [
                            449, a.chars, ta
                        ],
                        [
                            401, a.publicationDate, ba
                        ],
                        [
                            340, a.topics, Jo
                        ],
                        [
                            276, a.authors, Ko
                        ],
                        [
                            209, a.pageTitle, ba
                        ],
                        [
                            145, a.pageUrlCanonical, ba
                        ],
                        [
                            65, a.id, X
                        ]
                    ]
                }
                function Lo(a) {
                    return [
                        [
                            513, a.chars, ta
                        ],
                        [
                            489, a.maxScrolled, td
                        ],
                        [
                            385, a.involvedTime, ta
                        ],
                        [
                            321, a.height, ta
                        ],
                        [
                            257, a.width, ta
                        ],
                        [
                            193, a.y, ta
                        ],
                        [
                            129, a.x, ta
                        ],
                        [
                            65, a.id, X
                        ]
                    ]
                }
                function ro(a) {
                    return [
                        [
                            129, a.involvedTime, ta
                        ],
                        [
                            84, a.articleMeta, Lo
                        ]
                    ]
                }
                function to(a) {
                    return [[65, a.target, ta]]
                }
                function uo(a) {
                    return [
                        [
                            209, a.stack, ba
                        ],
                        [
                            145, a.Xg, ba
                        ],
                        [
                            81, a.code, ba
                        ]
                    ]
                }
                function vo(a) {
                    return [
                        [
                            193, a.orientation, ta
                        ],
                        [
                            129, a.height, X
                        ],
                        [
                            65, a.width, X
                        ]
                    ]
                }
                function wo(a) {
                    return [[84, a.keystrokes, Mo]]
                }
                function Mo(a) {
                    return [
                        [
                            273, a.modifier, ba
                        ],
                        [
                            193, a.isMeta, xc
                        ],
                        [
                            145, a.key, ba
                        ],
                        [
                            65, a.id, X
                        ]
                    ]
                }
                function xo(a) {
                    return [
                        [
                            257, a.pageHeight, X
                        ],
                        [
                            193, a.pageWidth, X
                        ],
                        [
                            129, a.height, X
                        ],
                        [
                            65, a.width, X
                        ]
                    ]
                }
                function yo(a) {
                    return [
                        [
                            193, a.y, ta
                        ],
                        [
                            129, a.x, ta
                        ],
                        [
                            105, a.level, td
                        ]
                    ]
                }
                function zo(a) {
                    return [
                        [
                            129, a.target, ta
                        ],
                        [
                            84, a.touches, No
                        ]
                    ]
                }
                function No(a) {
                    return [
                        [
                            297, a.force, td
                        ],
                        [
                            233, a.y, td
                        ],
                        [
                            169, a.x, td
                        ],
                        [
                            81, a.id, ba
                        ]
                    ]
                }
                function Ao(a) {
                    return [
                        [
                            257, a.target, ta
                        ],
                        [
                            193, a.hidden, xc
                        ],
                        [
                            129, a.checked, xc
                        ],
                        [
                            81, a.value, ba
                        ]
                    ]
                }
                function Bo(a) {
                    return [
                        [
                            257, a.endNode, X
                        ],
                        [
                            193, a.startNode, X
                        ],
                        [
                            129, a.end, ta
                        ],
                        [
                            65, a.start, ta
                        ]
                    ]
                }
                function Co(a) {
                    return [
                        [
                            257, a.target, ta
                        ],
                        [
                            193, a.page, xc
                        ],
                        [
                            129, a.y, ta
                        ],
                        [
                            65, a.x, ta
                        ]
                    ]
                }
                function Do(a) {
                    return [
                        [
                            193, a.target, ta
                        ],
                        [
                            129, a.y, X
                        ],
                        [
                            65, a.x, X
                        ]
                    ]
                }
                function Eo(a) {
                    return [
                        [
                            148, a.changes, Oo
                        ],
                        [
                            65, a.target, ta
                        ]
                    ]
                }
                function Oo(a) {
                    return [
                        [
                            193, a.index, X
                        ],
                        [
                            145, a.op, ba
                        ],
                        [
                            81, a.style, ba
                        ]
                    ]
                }
                function no(a) {
                    return [
                        [
                            209, a.value, ba
                        ],
                        [
                            129, a.index, X
                        ],
                        [
                            65, a.target, X
                        ]
                    ]
                }
                function oo(a) {
                    return [
                        [
                            129, a.index, X
                        ],
                        [
                            69, a.nodes, ta
                        ]
                    ]
                }
                function po(a) {
                    return [
                        [
                            129, a.index, X
                        ],
                        [
                            84, a.nodes, ni
                        ]
                    ]
                }
                function qo(a) {
                    return [
                        [
                            210,
                            a.attributes,
                            81,
                            ba,
                            145,
                            ba
                        ],
                        [
                            129, a.index, X
                        ],
                        [
                            65, a.target, X
                        ]
                    ]
                }
                function Fo(a) {
                    return [
                        [
                            852, a.content, ni
                        ],
                        [
                            785, a.tabId, ba
                        ],
                        [
                            705, a.recordStamp, Po
                        ],
                        [
                            656, a.location, Qo
                        ],
                        [
                            592, a.viewport, oi
                        ],
                        [
                            528, a.screen, oi
                        ],
                        [
                            449, a.hasBase, xc
                        ],
                        [
                            401, a.base, ba
                        ],
                        [
                            337, a.referrer, ba
                        ],
                        [
                            273, a.ua, ba
                        ],
                        [
                            209, a.address, ba
                        ],
                        [
                            145, a.title, ba
                        ],
                        [
                            81, a.doctype, ba
                        ]
                    ]
                }
                function Qo(a) {
                    return [
                        [
                            209, a.path, ba
                        ],
                        [
                            145, a.protocol, ba
                        ],
                        [
                            81, a.host, ba
                        ]
                    ]
                }
                function oi(a) {
                    return [
                        [
                            129, a.height, ta
                        ],
                        [
                            65, a.width, ta
                        ]
                    ]
                }
                function ni(a) {
                    return [
                        [
                            513, a.hidden, xc
                        ],
                        [
                            449, a.prev, X
                        ],
                        [
                            385, a.next, X
                        ],
                        [
                            337, a.content, ba
                        ],
                        [
                            257, a.parent, X
                        ],
                        [
                            210,
                            a.attributes,
                            81,
                            ba,
                            145,
                            ba
                        ],
                        [
                            145, a.name, ba
                        ],
                        [
                            65, a.id, X
                        ]
                    ]
                }
                function ba(a) {
                    var c = Ro({}, a, [], 0);
                    return c ? [So, c, a] : [pi, 0, 0]
                }
                function Go(a) {
                    return [To, a.length, a]
                }
                function xc(a) {
                    return [
                        pi,
                        1,
                        a ? 1 : 0
                    ]
                }
                function Po(a) {
                    a = qi(a);
                    var c = a[0],
                        b = a[1],
                        d = (b >>> 28 | c << 4) >>> 0;
                    c >>>= 24;
                    return [
                        ri,
                        0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10,
                        a
                    ]
                }
                function td(a) {
                    return [Uo, 4, a]
                }
                function ta(a) {
                    return 0 > a ? [ri, 10, qi(a)] : X(a)
                }
                function X(a) {
                    return [
                        Vo,
                        128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5,
                        a
                    ]
                }
                function Vo(a, c, b, d) {
                    for (a = c; 127 < a;) 
                        b[d++] = a & 127 | 128,
                        a >>>= 7;
                    
                    b[d] = a
                }
                function pi(a, c, b, d) {
                    b[d] = c
                }
                function To(a, c, b, d) {
                    for (a = 0; a < c.length; ++ a) 
                        b[d + a] = c[a]
                    
                }
                function si(a) {
                    return function (c, b, d, e) {
                        for (var f, g = 0, h = 0; h < b.length; ++ h) 
                            if (c = b.charCodeAt(h), 128 > c) 
                                a ? g += 1 : d[e++] = c;
                            
                        
                     else {
                        if (2048 > c) {
                            if (a) {
                                g += 2;
                                continue
                            }
                            d[e++] = c >> 6 | 192
                        } else {
                            if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                if (a) {
                                    g += 4;
                                    continue
                                }
                                c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                ++ h;
                                d[e++] = c >> 18 | 240;
                                d[e++] = c >> 12 & 63 | 128
                            } else {
                                if (a) {
                                    g += 3;
                                    continue
                                }
                                d[e++] = c >> 12 | 224
                            } d[e++] = c >> 6 & 63 | 128
                        } d[e++] = c & 63 | 128
                    }
                    return a ? g : e
                }
            }
            function Uo(a, c, b, d) {
                return Wo(a)(a, c, b, d)
            }
            function Xo(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = - c);
                if (0 === c) 
                    ud(0 < 1 / c ? 0 : 2147483648, b, d);
                 else if (a.isNaN(c)) 
                    ud(2143289344, b, d);
                 else if (3.4028234663852886E38 < c) 
                    ud((e << 31 | 2139095040) >>> 0, b, d);
                 else if (1.1754943508222875E-38 > c) 
                    ud((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
                 else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    ud((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, - f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }
            function ud(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }
            function ri(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a;) 
                    b[d++] = c & 127 | 128,
                    c = (c >>> 7 | a << 25) >>> 0,
                    a >>>= 7;
                
                for (; 127 < c;) 
                    b[d++] = c & 127 | 128,
                    c >>>= 7;
                
                b[d++] = c
            }
            function qi(a) {
                if (! a) 
                    return [0, 0];
                
                var c = 0 > a;
                c && (a = - a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~ a >>> 0, b = ~ b >>> 0, 4294967295 < ++ b && (b = 0, 4294967295 < ++ a && (a = 0)));
                return [a, b]
            }
            function gi(a, c, b, d) {
                var e,
                    f = b.J;
                f.wmode = "0";
                f["wv-hit"] = f["wv-hit"] || "" + yc(a);
                f["page-url"] = f["page-url"] || R(a).href;
                d && (f[d] = f[d] || "" + Wa(a));
                a = {
                    na: {
                        Ba: "webvisor/" + c.id
                    },
                    ba: z(b.ba || {}, {
                        Za: (e =
                            {}, e["Content-Type"] = "text/plain", e),
                        $c: "POST"
                    }),
                    J: f
                };
                z(b, a)
            }
            function Yo(a, c) {
                return qa(c, function (b) {
                    var d = H(a);
                    M(c);
                    if (! d.C("dSync", !1)) 
                        return d.D("dSync", !0),
                        ti(a, b, {
                            cb: c,
                            Sb: "s",
                            Qd: "ds",
                            Ki: function (e, f, g) {
                                var h = e.Sc;
                                e = e.host;
                                if (n(h, "settings")) 
                                    return Ua(Ra("ds.e"));
                                
                                f = f(Y) - g;
                                g = e[1];
                                var k,
                                    l;
                                h = Ka((k =
                                    {}, k.di = h, k.dit = f, k.dip = g, k));
                                k = (l =
                                    {}, l["page-url"] = R(a).href, l);
                                return va(a, "S", ui)({
                                    K: h,
                                    J: k
                                }, ui)["catch"](D(a, "ds.rs"))
                            }
                        })
                    
                })
            }
            function ti(a, c, b) {
                var d,
                    e = b.cb,
                    f = ha(a),
                    g = Zo(a, c.userData, e),
                    h = $o(a),
                    k = w(vi, C([
                        ap, bp
                    ], vd))(a),
                    l = n(c, "settings.sbp");
                l && (b.data = z({}, l, (d =
                    {}, d.c = e.id, d)));
                return h.length ? cp(a, f, g, c, k, b).then(function () {
                    return dp(a, h, g, f, k, b)
                }, E) : L.resolve()
            }
            function $o(a) {
                var c = wd(a);
                a = w(Of, oc(["iPhone", "iPad"]))(a);
                return c ? ep : a ? fp : []
            }
            function dp(a, c, b, d, e, f) {
                e = f.Ki;
                var g = void 0 === e ? E : e,
                    h = f.Qd,
                    k = d(Y);
                return gp(a, c, f)(Qa(function (l) {
                    y(function (m) {
                        m && ve(a, h + ".s", m)
                    }, l);
                    l = d(qb);
                    b.D(h, l)
                }, function (l) {
                    b.D(h, d(qb));
                    g(l, d, k)
                }))
            }
            function cp(a, c, b, d, e, f) {
                var g = f.Qd,
                    h = f.cb;
                return new L(function (k, l) {
                    var m = b.C(g, 0);
                    m = parseInt("" + m, 10);
                    return c(qb) - m <= e.$f ? l() : hp(a) ? k(void 0) : rf(d) ? l() : k(ip(a, h))
                })
            }
            function gp(a, c, b) {
                var d = b.Sb,
                    e = b.data,
                    f = va(a, d, b.cb);
                a = z({}, wi);
                e && z(a.J, e);
                return jp(A(function (g) {
                    return kp(f(z({
                        ba: {
                            He: !1,
                            ke: !0
                        }
                    }, wi), A(function (h) {
                        var k = h[1],
                            l = h[2];
                        h = I("", A(function (m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" + (
                        l ? "s" : ""
                    ) + "://" + h + ":" + k + "/" + lp[d]
                    }, g)).then(function (h) {
                        return z({}, h, {
                            host: g[h.hg]
                        })
                    }))
                }, c))
            }
            function Zo(a, c, b) {
                var d = c || {},
                    e = va(a, "u", b),
                    f = Pa(a);
                return {
                    C: function (g, h) {
                        return W(d[g]) ? f.C(g, h) : d[g]
                    },
                    D: function (g, h) {
                        var k,
                            l = "" + h;
                        d[g] = l;
                        f.D(g, l);
                        return e({
                            J: (k =
                                {}, k.key = g, k.value = l, k)
                        }, [Fa.Ra + "//" + gc + "/user_storage_set"], {})["catch"](D(a, "u.d.s.s"))
                    }
                }
            }
            function mp(a) {
                return {
                    N: function (c, b) {
                        H(a).C("oo") || b()
                    }
                }
            }
            function np(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function () {
                        return L.resolve()
                    }
                }
                return function (e) {
                    var f,
                        g = (f =
                            {}, f["browser-info"] = op, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = zb(a, e)) ? d(pp, {
                        $a: g,
                        ha: [],
                        da: "site-info=" + qe(e)
                    })["catch"](E) : L.resolve()
                }
            }
            function qp(a, c) {
                if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
                    var b = M(c);
                    delete H(a).C("counters", {})[b];
                    Ua(Ra("oo.e"))
                }
            }
            function rp(a) {
                if (xd(a)) 
                    return null;
                
                var c = sp(a),
                    b = c.Af;
                W(b) && (c.Af = null, tp(a).then(function (d) {
                    c.Af = d
                }));
                return b ? 1 : null
            }
            function up(a, c, b) {
                b = b.J;
                if ((void 0 === b ? {} : b).nohit) 
                    return null;
                
                a = yd(a);
                if (! a) 
                    return null;
                
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = vp);
                if (! b) {
                    var e = n(a, "timing");
                    e && (b = wp, d = e)
                }
                if (! b) 
                    return null;
                
                a = xp(a, d, b);
                c = M(c);
                c = yp(c);
                return(c = zp(c, a)) && I(",", c)
            }
            function zp(a, c) {
                var b = a.length ? A(function (d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                y(w(O, Ea("push", a)), c);
                return ea(Aa(null), b).length === a.length ? null : b
            }
            function xp(a, c, b) {
                return A(function (d) {
                    var e = d[0],
                        f = d[1];
                    if (T(e)) 
                        return e(a, c) || null;
                    
                    if (1 === d.length) 
                        return c[e] ? Math.round(c[e]) : null;
                    
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g =!( xi[d[0]] || xi[g]));
                    if (! g) 
                        return null;
                    
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }
            function we(a, c) {
                try {
                    var b = c.localStorage.getItem(a);
                    return b && gd(ie(b))
                } catch (d) {}
                return null
            }
            function ie(a) {
                for (var c =[], b = 0; b < a.length; b++) {
                    var d = a.charCodeAt(b);
                    128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                }
                return c
            }
            function gd(a, c) {
                void 0 === c && (c =! 1);
                for (var b = a.length, d = b - b % 3, e =[], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63])
                }
                switch (b - d) {
                    case 1: b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
                        break;
                    case 2: b = (a[d] << 10) + (a[d + 1] << 2),
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = I("", e);
                return c ? yi(e, !0) : e
            }
            function Eh(a, c) {
                void 0 === c && (c =! 1);
                var b = a,
                    d = "",
                    e = 0;
                if (! b) 
                    return "";
                
                for (c && (b = yi(b)); b.length % 4;) 
                    b += "=";
                
                do {
                    var f = zc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        g = zc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        h = zc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        k = zc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) 
                        return "";
                    
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }
            function yi(a, c) {
                void 0 === c && (c =! 1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
                    return Ap[b] || b
                }) : ""
            }
            function Bp(a) {
                try {
                    var c = Ta(a) ? a : [];
                    return I(",", [
                        a.name, a.description, w(Ba, ua, Tb(Cp), xe(","))(c)
                    ])
                } catch (b) {
                    return ""
                }
            }
            function Cp(a) {
                return I(",", [a.description, a.suffixes, a.type])
            }
            function Dp(a, c) {
                for (var b = "", d = 0; d < c; d += 1) 
                    b += a;
                
                return b
            }
            function Ep(a, c, b, d, e, f, g, h) {
                var k = b.C(f);
                ja(k) && (b.D(f, g), e(a, c, b, d), k = b.C(f, g));
                W(h) || h.Xb(f, "" + k);
                return k
            }
            function Fp(a, c) {
                if (zd(a)) {
                    var b = lb(a).match(Gp);
                    if (b && b.length) 
                        return b[1] === c
                    
                }
                return !1
            }
            function ye(a, c, b) {
                return function (d) {
                    var e,
                        f,
                        g = za(c, b);
                    g && Hp(a, d, c) && (g = G(g.params, g), (d = Pf({
                        event: a,
                        La: "products",
                        xa: hc,
                        Ch: "goods"
                    }, d)) && g && g((e =
                        {}, e.__ym =( f =
                        {}, f.ecommerce =[d], f), e)))
                }
            }
            function Hp(a, c, b) {
                var d = !1,
                    e = "";
                if (!pa(c)) 
                    return xb(b, "", "Ecommerce data should be an object"),
                    d;
                
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        ca(f) && f.length ? (d = Ip(function (g) {
                            return pa(g) && (ma(g.id) || ze(b, g.id) || ma(g.name))
                        }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                        break;
                    case "purchase":
                        ze(b, c.id) || ma(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                xb(b, "", e);
                return d
            }
            function Ad(a, c) {
                return {
                    N: function (b, d) {
                        Qf(b) ? d() : qa(c, function (e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) 
                                e = (f =
                                    {}, f.hittoken = e, f),
                                b.J = z(b.J || {}, e);
                            
                            d()
                        })
                    }
                }
            }
            function Jp(a, c) {
                function b() {
                    r.hidden ? z(k.style, Bd([
                        "top", "right", "left", "background"
                    ], "initial")) : z(k.style, Bd([
                        "top", "right", "left"
                    ], "0"), {background: "rgba(0, 0, 0, .3)"});
                    x.parentNode || (q.appendChild(p), q.appendChild(x));
                    r.hidden = ! r.hidden;
                    q.hidden = ! q.hidden;
                    t.hidden = ! t.hidden
                }
                function d(N) {
                    var la = g();
                    z(la.style, Ac("2px", "18px"), Pc, {
                        left: "15px",
                        top: "7px",
                        background: "#2f3747",
                        borderRadius: "2px"
                    });
                    la.style.transform = "rotate(" + N + "deg)";
                    return la
                }
                function e(N, la, wa, Cb, Cd) {
                    var Ae = g();
                    z(Ae.style, Ac(la + "px", wa + "px"), Pc, {
                        left: N + "px",
                        bottom: 0,
                        background: Cb,
                        borderTopLeftRadius: Cd
                    });
                    return Ae
                }
                var f = db(a);
                if (! f) 
                    return E;
                
                var g = u("div", f),
                    h = u("iframe", f),
                    k = g();
                k.classList.add("__ym_wv_ign");
                z(k.style, zi, {
                    bottom: "0",
                    width: "100%",
                    maxWidth: "initial",
                    zIndex: "999999999"
                });
                var l = k.attachShadow ? k.attachShadow({mode: "open"}) : k,
                    m = g();
                z(m.style, Ac("24px"), Pc, Rf, {
                    top: "12px",
                    right: "10px",
                    background: "#3367dc",
                    overflow: "hidden"
                });
                var p = g();
                z(p.style, {
                    border: "2px solid transparent",
                    animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear"
                }, Rf, Pc, Ac("48px"), Bd([
                    "top", "left"
                ], "calc(50% - 24px)"), Bd([
                    "borderTopColor", "borderLeftColor"
                ], "#fc0"));
                f = f("style");
                f.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
                p.appendChild(f);
                var r = g();
                r.id = "__ym_wv_ign__opener";
                z(r.style, Ac("46px", "48px"), zi, {
                    right: "0",
                    bottom: "60px",
                    cursor: "pointer",
                    background: "#fff",
                    borderRadius: "16px 0 0 16px",
                    boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)"
                });
                var q = g();
                z(q.style, Pc, Bd([
                    "top", "right", "bottom"
                ], "0"), {
                    width: "600px",
                    background: "#fff"
                });
                var t = g();
                t.id = "__ym_wv_ign__closer";
                z(t.style, Ac("32px"), Pc, Rf, {
                    top: "12px",
                    right: "612px",
                    cursor: "pointer",
                    background: "#fff"
                });
                f = h();
                f.src = "https://metrika.yandex.ru/widget/iframe-check";
                var x = h();
                z(x.style, Ac("100%"), {border: "none"});
                x.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
                q.hidden = !0;
                t.hidden = !0;
                t.appendChild(d(45));
                t.appendChild(d(-45));
                q.appendChild(f);
                m.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"));
                m.appendChild(e(8, 9, 16, "#04acff", "3px"));
                m.appendChild(e(17, 7, 24, "#ffdd13"));
                r.appendChild(m);
                l.appendChild(q);
                l.appendChild(t);
                var F = ["click", "touchstart"];
                h = fa(a);
                m = a.document.body;
                l = [
                    h.F(r, F, b),
                    h.F(t, F, b),
                    h.F(f, ["load"], C([
                        ia,
                        [
                            G(q.removeChild, q, f),
                            G(l.appendChild, l, r)
                        ]
                    ], y)),
                    h.F(x, ["load"], G(q.removeChild, q, p)),
                    G(m.removeChild, m, k)
                ];
                var U = C([
                    ia, l
                ], y);
                l.push(h.F(a, ["securitypolicyviolation"], function (N) {
                    (N = n(N, "blockedURI")) && 0 <= hb(N, "https://metrika.yandex.ru") && U()
                }));
                m.appendChild(k);
                return U
            }
            function Bd(a, c) {
                return J(function (b, d) {
                    b[d] = c;
                    return b
                }, {}, a)
            }
            function Ac(a, c) {
                var b;
                return b = {},
                b.width = a,
                b.height = c || a,
                b
            }
            function Kp(a, c) {
                var b = n(c, "origin"),
                    d;
                if (d = b) 
                    d = Lp.test(b) || Mp.test(b);
                
                d && (b = yb(a, c.data), "appendremote" === n(b, "action") && Np(a, c, b))
            }
            function Ai(a, c, b, d) {
                var e,
                    f,
                    g,
                    h;
                void 0 === b && (b = "");
                void 0 === d && (d = "");
                var k = H(a),
                    l = {};
                l.getCachedTags = Be;
                l.form = (e =
                    {}, e.closest = u(a, Bi), e.select = Op, e.getData = u(a, Ci), e);
                l.button = (f =
                    {}, f.closest = u(a, ge), f.select = Sf, f.getData = u(a, he), f);
                l.phone = (g =
                    {}, g.hidePhones = C([
                    a, null, [d]
                ], Di), g);
                l.status = (h =
                    {}, h.checkStatus = C([
                    a, Ha(b)
                ], Pp), h);
                k.D("_u", l);
                c && sc(a, {src: c})
            }
            function Ei(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ? "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" : d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = I(".", ua(A(w(O, Ha), b.split("."))));
                if (!K(d, Qp) || !K(c, ["ru", "en", "tr"])) 
                    return "";
                
                c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (
                    d + "_" + c + ".js"
                );
                return Fi(c) ? c : ""
            }
            function Rp(a, c) {
                var b = db(a);
                if (b) {
                    var d = b("div"),
                        e = cc(a);
                    if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function () {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            sc(f.contentWindow, {src: c})
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ? g = d.attachShadow({mode: "open"}) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer = f)
                    }
                }
            }
            function Pp(a) {
                var c,
                    b = Gi(a);
                a = H(a).C("getCounters", Dd)();
                a = A(P("id"), a);
                return c = {
                    id: b
                },
                c.counterFound = !! b && K(b, a),
                c
            }
            function Di(a, c, b) {
                var d;
                c = Hi(a, c, {
                    dg: Sp,
                    bi: (d =
                        {}, d.href =! 0, d)
                });
                b = ua(A(function (f) {
                    return "*" === f ? f : Rb(f)
                }, b));
                var e = A(w(O, Ea("concat", [""]), Ii("reverse"), ia), b);
                b = Ed(a);
                d = Ji(a, b, 1E3);
                c = u(e, c);
                d.F(c);
                Tp(a, b);
                Ki(a, b);
                c()
            }
            function Sp(a, c, b) {
                var d = db(a),
                    e = b.sb,
                    f = b.Tb,
                    g = e.parentNode,
                    h = e.textContent;
                if (!("text" === b.je && h && d && g)) 
                    return !1;
                
                b = d("small");
                Li(b);
                var k = Mi(h).length;
                y(Ea("appendChild", b), J(function (l, m) {
                    var p = l.nodes,
                        r = l.kg,
                        q = d("small");
                    q.innerHTML = m;
                    var t = Up.test(m);
                    Li(q);
                    t && (q.style.opacity = "" + (
                        k - r - 1
                    ) / k);
                    p.push(q);
                    return {
                        nodes: p,
                        kg: r + (t ? 1 : 0)
                    }
                }, {
                    nodes: [],
                    kg: 0
                }, h).nodes);
                Vp(a, c, b, f);
                g.insertBefore(b, e);
                e.textContent = "";
                return !0
            }
            function Vp(a, c, b, d) {
                function e() {
                    y(function (l) {
                        l.style && z(l.style, {opacity: ""})
                    }, Ba(b.childNodes));
                    if (c) {
                        var k = za(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = fa(a),
                    g = E,
                    h = E;
                g = f.F(b, ["mouseenter"], function (k) {
                    if (k.target === b) {
                        var l = Q(a, e, 200, "ph.h.e");
                        h();
                        h = f.F(b, ["mouseleave"], function (m) {
                            m.target === b && ka(a, l)
                        })
                    }
                })
            }
            function Ki(a, c) {
                Kb(a)(Qa(E, function () {
                    var b,
                        d = a.document.body,
                        e = (b =
                            {}, b.attributes =! 0, b.childList =! 0, b.subtree =! 0, b);
                    Da("MutationObserver", a.MutationObserver) && (new MutationObserver(c.T)).observe(d, e)
                }))
            }
            function Tp(a, c) {
                return fa(a).F(a, ["load"], c.T)
            }
            function Hi(a, c, b) {
                function d(k) {
                    return f(a, c, k) ? h[k.Tb] && h[k.Tb].Yc : null
                }
                var e,
                    f = b.dg;
                b = b.bi;
                var g = void 0 === b ? (e =
                        {}, e.href =! 0, e.text =! 0, e) : b,
                    h;
                return function (k) {
                    return new L(function (l, m) {
                        k && k.length || m();
                        h = Ni()(k);
                        Kb(a)(Qa(u({
                            ja: [],
                            Aa: 0
                        }, l), function () {
                            var p = ha(a),
                                r = p(Y),
                                q = g.href ? Wp(a, h) : [],
                                t = g.text ? Oi(a, h, a.document.body) : [];
                            l({
                                ja: ea(ca, ua(A(d, q.concat(t)))),
                                Aa: p(Y) - r
                            })
                        }))
                    })
                }
            }
            function Wp(a, c) {
                var b = a.document.body;
                if (! b) 
                    return [];
                
                var d = Pi(c);
                return J(function (e, f) {
                    var g = n(f, "href");
                    try {
                        var h = decodeURI(g || "")
                    } catch (p) {
                        h = ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0],
                            l = k ? Rb(k) : "",
                            m = c[l];
                        W(m) || ! l && "*" !== m.Yc[0] || (e.push({
                            je: "href",
                            sb: f,
                            Tb: l,
                            bb: Qi(k, c[l].bb),
                            Ni: g
                        }), g = Rb(h.slice(4)), l = Ni()([l ? m.Yc : [g, ""]]),
                        ra(e, Oi(a, l, f)))
                    }
                    return e
                }, [], Ba(b.querySelectorAll("a")))
            }
            function Oi(a, c, b) {
                if (! b) 
                    return [];
                
                var d = [],
                    e = Pi(c),
                    f = ["script", "style"];
                jd(a, b, function (g) {
                    var h = n(g, "parentNode.nodeName") || "";
                    g === b || K(h.toLowerCase(), f) || (h = ua(e.exec(g.textContent || "") || []), y(function (k) {
                        var l = Rb(k);
                        W(c[l]) || d.push({
                            je: "text",
                            sb: g,
                            Tb: l,
                            bb: Qi(k, c[l].bb),
                            Ni: g.textContent || ""
                        })
                    }, h))
                }, function (g) {
                    return e.test(g.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }
            function Ni() {
                return Tf(function (a, c) {
                    var b = A(Rb, c),
                        d = b[0];
                    b = b[1];
                    a[d] = {
                        bb: b,
                        Yc: c
                    };
                    var e = Ri(d);
                    e !== d && (a[e] =
                        { bb: Ri(b),
                        Yc: c
                    });
                    return a
                }, {})
            }
            function Qi(a, c) {
                for (var b =[], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return I("", b) + c.slice(f + 1)
            }
            function Ri(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }
            function Pi(a) {
                return new RegExp("(?:" + I("|", A(Si, da(a))) + ")")
            }
            function Ti(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ? jd(a, c, Ea("push", e), d) : ra(e, Ui(a, c, d)));
                    y(b, e)
                }
            }
            function jd(a, c, b, d, e, f) {
                function g(k) {
                    return T(d) ? d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                void 0 === f && (f =! 1);
                var h = g(c);
                if (T(b) && (f || h === a.NodeFilter.FILTER_ACCEPT) && (h && b(c), !Lf(c))) 
                    for (c = a.document.createTreeWalker(c, e, d ? {
                        acceptNode: g
                    } : null, !1); c.nextNode() && !1 !== b(c.currentNode);) 
                    
                }
                function Ui(a, c, b) {
                    var d = [],
                        e = w(O, Ea("push", d));
                    T(b) ? (b = b(c), (ja(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
                    if (c.childNodes && 0 < c.childNodes.length) {
                        c = c.childNodes;
                        b = 0;
                        for (var f = c.length; b < f; b += 1) {
                            var g = Ui(a, c[b]);
                            y(e, g)
                        }
                    }
                    return d
                }
                function Vi(a, c, b) {
                    var d;
                    a = [
                        Wi(a, c, function (e) {
                            d = e;
                            e.za.F(b)
                        }),
                        function () {
                            d && d.unsubscribe()
                        }
                    ];
                    return C([
                        Ce, a
                    ], y)
                }
                function Xp(a, c, b, d) {
                    var e,
                        f,
                        g;
                    if (b) {
                        var h = n(d, "ecommerce") || {};
                        var k = n(d, "event") || "";
                        h = pa(h) && ma(k) ? Pf(k, h) : void 0;
                        if (! h) 
                            a: {
                                var l = d;
                                !ca(d) && ze(a, Ta(d)) && (l = Ja(l));
                                if (ca(l) && (h = l[0], k = l[1], l = l[2], ma(k) && pa(l) && "event" === h)) {
                                    h = Pf(k, l);
                                    break a
                                }
                                h = void 0
                            }
                            if (d = h || Yp(d)) 
                                sb(a, (e =
                                    {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)),
                                b((f =
                                    {}, f.__ym =( g =
                                    {}, g.ecommerce =[d], g), f))
                            
                        
                    }
                }
                function Yp(a) {
                    var c = n(a, "ecommerce");
                    if (pa(c)) 
                        return a = ea(oc(Zp), da(c)),
                        a = J(function (b, d) {
                            b[d] = c[d];
                            return b
                        }, {}, a),
                        0 === da(a).length ? void 0 : a
                    
                }
                function Pf(a, c) {
                    var b,
                        d,
                        e = ma(a) ? $p[a] : a;
                    if (e) {
                        var f = e.event,
                            g = e.La,
                            h = e.Ch,
                            k = void 0 === h ? "items" : h,
                            l = c.purchase || c;
                        if (h = l[k]) {
                            e = A(u(e.xa, aq), h);
                            var m = (b =
                                {}, b[f] = g ? (d =
                                {}, d[g] = e, d) : e, b);
                            b = da(l);
                            g && 1 < b.length && (m[f].actionField = J(function (p, r) {
                                if (r === k) 
                                    return p;
                                
                                if ("currency" === r) 
                                    return m.currencyCode = l.currency,
                                    p;
                                
                                p[bq[r] || Uf[r] || r] = l[r];
                                return p
                            }, {}, b));
                            return m
                        }
                    }
                }
                function aq(a, c) {
                    var b = {};
                    y(function (d) {
                        var e = a[d] || Uf[d] || d;
                        -1 !== hb(d, "item_category") ? (e = Uf.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                    }, da(c));
                    return b
                }
                function cq(a, c, b) {
                    var d,
                        e,
                        f = n(b, "target");
                    if (f && (f = ge(a, f), f = he(a, f))) {
                        f = "?" + Bc(f);
                        var g = Mb(a, c, "Button goal. Counter " + c.id + ". Button: " + f + ".");
                        b = n(b, "isTrusted");
                        b = ja(b) ? void 0 : (d =
                            {}, d.__ym =( e =
                            {}, e.ite = Ab(b), e), d);
                        De(a, c, "btn", g).reachGoal(f, b)
                    }
                }
                function dq(a, c, b, d) {
                    var e = n(d, "target");
                    e && (d = n(d, "isTrusted"), (e = ic("button,input", a, e)) && "submit" === e.type && (e = Bi(a, e))) && (b.push(e), Q(a, C([
                        !1,
                        a,
                        c,
                        b,
                        e,
                        d
                    ], Xi), 300))
                }
                function Xi(a, c, b, d, e, f) {
                    var g,
                        h,
                        k = Nb(c)(e, d),
                        l = -1 !== k;
                    if (a || l) 
                        l && d.splice(k, 1),
                        a = Ci(c, e),
                        a = "?" + Bc(a),
                        d = C([
                            c,
                            b,
                            "Form goal. Counter " + b.id + ". Form: " + a + "."
                        ], Yi),
                        f = ja(f) ? void 0 : (g =
                            {}, g.__ym =( h =
                            {}, h.ite = Ab(f), h), g),
                        De(c, b, "form", d).reachGoal(a, f)
                    
                }
                function Yi(a, c, b) {
                    return eq(a, c).then(w(C([
                        Mb(a, c, b),
                        E
                    ], vd), ia))
                }
                function Ci(a, c, b) {
                    return Zi(a, c, [
                        "i", "n", "p"
                    ], void 0, b)
                }
                function fq(a, c) {
                    var b;
                    a((b =
                        {}, b.clickmap = W(c) ? !0 : c, b))
                }
                function gq(a, c, b, d, e) {
                    var f,
                        g = "clmap/" + e.id;
                    c = (f =
                        {}, f["page-url"] = c, f["pointer-click"] = b, f);
                    f = {
                        K: Ka(),
                        J: c,
                        na: {
                            Ba: g
                        }
                    };
                    d(f, e)["catch"](D(a, "c.s.c"))
                }
                function hq(a, c, b, d, e) {
                    if (Qc(a, "ymDisabledClickmap") || ! c || ! c.element) 
                        return !1;
                    
                    a = Ma(c.element);
                    if (e && ! e(c.element, a) || K(c.button, [2, 3]) && "A" !== a || Ya(Aa(a), d)) 
                        return !1;
                    
                    d = c.element;
                    if (c && b) {
                        if (50 > c.time - b.time) 
                            return !1;
                        
                        e = Math.abs(b.position.x - c.position.x);
                        a = Math.abs(b.position.y - c.position.y);
                        c = c.time - b.time;
                        if (b.element === d && 2 > e && 2 > a && 1E3 > c) 
                            return !1
                        
                    }
                    for (; d;) {
                        if (iq(d)) 
                            return !1;
                        
                        d = d.parentElement
                    }
                    return !0
                }
                function jq(a, c) {
                    var b = null;
                    try {
                        if (b = c.target || c.srcElement) 
                            ! b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                        
                    } catch (d) {}
                    return b
                }
                function kq(a) {
                    var c = a.which;
                    a = a.button;
                    return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
                }
                function $i(a, c) {
                    var b = cc(a),
                        d = Vf(a);
                    return {
                        x: c.pageX || c.clientX + d.x -(b.clientLeft || 0) || 0,
                        y: c.pageY || c.clientY + d.y -(b.clientTop || 0) || 0
                    }
                }
                function Ee(a, c) {
                    return {
                        N: function (b, d) {
                            var e,
                                f = b.K,
                                g = b.Ja,
                                h = b.J,
                                k = b.ba;
                            k = void 0 === k ? {} : k;
                            if (f && h) {
                                var l = ha(a);
                                f.Xb("rqnl", 1);
                                for (var m = Fd(a), p = 1; m[p];) 
                                    p += 1;
                                
                                b.M || (b.M =
                                    {});
                                b.M.Ub = p;
                                m[p] = (e =
                                    {}, e.protocol = Fa.Ra, e.host = gc, e.resource = b.na.Ba, e.postParams = k.da, e.time = l(Y), e.counterType = c.ca, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = yc(a), e);
                                g && (m[p].telemetry = g.l());
                                Wf(a)
                            }
                            d()
                        },
                        Ea: function (b, d) {
                            aj(a, b);
                            d()
                        }
                    }
                }
                function aj(a, c) {
                    var b = Fd(a);
                    c.K && !Va(b) && c.M && (delete b[c.M.Ub], Wf(a))
                }
                function Wf(a) {
                    var c = Fd(a);
                    Pa(a).D("retryReqs", c)
                }
                function lq(a, c) {
                    if (a.Ti()) {
                        var b = bj(c);
                        if (b && !fc("ym-disable-tracklink", b)) {
                            var d = a.l,
                                e = a.Ng,
                                f = a.cb,
                                g = a.sender,
                                h = a.$g,
                                k = f.xc,
                                l = b.href;
                            var m = cb(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                            m || (m =( m = b.querySelector("img")) ? cb(m.getAttribute("title") || m.getAttribute("alt")) : "");
                            m = l === m ? "" : m;
                            var p = n(c, "isTrusted");
                            if (fc("ym-external-link", b)) 
                                Fe(d, f, {
                                    url: l,
                                    ob: !0,
                                    title: m,
                                    Gc: p,
                                    sender: g
                                });
                             else {
                                k = k ? Nc(d, k).hostname : R(d).hostname;
                                h = RegExp("\\.(" + I("|", A(mq, h)) + ")$", "i");
                                var r = b.protocol + "//" + b.hostname + b.pathname;
                                h = cj.test(r) || cj.test(l) || h.test(l) || h.test(r);
                                b = b.hostname;
                                Ge(k) === Ge(b) ? h ? Fe(d, f, {
                                    url: l,
                                    Ec: !0,
                                    Gc: p,
                                    title: m,
                                    sender: g
                                }) : m && e.D("il", cb(m).slice(0, 100)) : l && nq.test(l) || Fe(d, f, {
                                    url: l,
                                    Ic: !0,
                                    ob: !0,
                                    Ec: h,
                                    Gc: p,
                                    title: m,
                                    sender: g
                                })
                            }
                        }
                    }
                }
                function Fe(a, c, b) {
                    var d,
                        e,
                        f,
                        g = Ka();
                    void 0 !== b.Gc && g.D("ite", Ab(b.Gc));
                    b.Ec && g.D("dl", 1);
                    b.ob && g.D("ln", 1);
                    var h = b.jg || {};
                    g = {
                        K: g,
                        M: {
                            title: h.title || b.title,
                            Ic: !! b.Ic,
                            R: h.params
                        },
                        J: (d =
                            {}, d["page-url"] = b.url, d["page-ref"] = c.xc || R(a).href, d)
                    };
                    d = "Link";
                    b.Ec ? d = b.ob ? "Ext link - File" : "File" : b.ob && (d = "Ext link");
                    sb(a, (e =
                        {}, e.counterKey = M(c), e.name = "event", e.data =( f =
                        {}, f.schema = "Link click", f.name =( b.ob ? "external" : "internal") + " url: " + b.url, f), e));
                    c = b.sender(g, c).then(Mb(a, c, d + ". Counter " + c.id + ". Url: " + b.url, b.jg));
                    return Rc(a, "cl.p.s", c, h.callback || E, h.ctx)
                }
                function oq(a, c) {
                    var b,
                        d,
                        e = (b =
                            {}, b.string =! 0, b.object =! 0, b["boolean"] = c, b)[typeof c] || !1;
                    a((d =
                        {}, d.trackLinks = e, d))
                }
                function pq(a, c, b, d) {
                    var e = R(a),
                        f = e.hostname;
                    e = e.href;
                    if (c = Gd(c).url) 
                        a = Nc(a, c),
                        f = a.hostname,
                        e = a.href;
                    
                    return [
                        d + "://" + f + "/" + b,
                        e || ""
                    ]
                }
                function dj(a) {
                    return(a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
                }
                function qq(a, c, b, d) {
                    var e;
                    if (a = za(a, b)) {
                        var f = d.data;
                        b = "" + b.id;
                        var g = d.sended || [];
                        d.sended || (d.sended = g);
                        K(b, g) || ! a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Sf((e =
                            {}, e.type = "params", e.data = f, e)))
                    }
                }
                function vh(a, c, b) {
                    void 0 === b && (b = O);
                    var d = pd(a);
                    b(d);
                    var e = u(d, rq);
                    He(a, c, function (f) {
                        f.za.F(e)
                    });
                    return d
                }
                function rq(a, c) {
                    var b = n(c, "ymetrikaEvent");
                    b && a.T(n(b, "type"), b)
                }
                function He(a, c, b, d) {
                    void 0 === b && (b = E);
                    void 0 === d && (d =! 1);
                    var e = Ed(a);
                    if (c && T(c.push)) {
                        var f = c.push;
                        c.push = function () {
                            var g = Ja(arguments),
                                h = g[0];
                            d && e.T(h);
                            g = f.apply(c, g);
                            d || e.T(h);
                            return g
                        };
                        a = {
                            za: e,
                            unsubscribe: function () {
                                c.push = f
                            }
                        };
                        b(a);
                        y(e.T, c);
                        return a
                    }
                }
                function ke(a) {
                    a = H(a);
                    var c = a.C("dataLayer", []);
                    a.D("dataLayer", c);
                    return c
                }
                function Jm(a, c) {
                    var b,
                        d;
                    K(c, A(P("ymetrikaEvent.type"), a)) || a.push((b =
                        {}, b.ymetrikaEvent =( d =
                        {}, d.type = c, d), b))
                }
                function ej(a, c) {
                    var b = ld(a, c),
                        d = [],
                        e = [];
                    if (! b) 
                        return null;
                    
                    var f = C([
                            a, b.ne
                        ], sq),
                        g = u(f, tq);
                    b.$.F(["initToParent"], function (h) {
                        g(d, b.children[h[1].counterId])
                    }).F(["parentConnect"], function (h) {
                        g(e, b.Ha[h[1].counterId])
                    });
                    return {
                        $: b.$,
                        Hj: function (h, k) {
                            return new L(function (l, m) {
                                b.ne(h, k, function (p, r) {
                                    l([p, r])
                                });
                                Q(a, u(Ra(), m), 5100, "is.o")
                            })
                        },
                        Rf: function (h) {
                            var k = {
                                Uf: [],
                                Ae: [],
                                data: h
                            };
                            d.push(k);
                            return f(b.children, k, h)
                        },
                        Sf: function (h) {
                            var k = {
                                Uf: [],
                                Ae: [],
                                data: h
                            };
                            e.push(k);
                            return f(b.Ha, k, h)
                        }
                    }
                }
                function tq(a, c, b) {
                    c = ea(function (d) {
                        return !K(b.info.counterId, d.Ae)
                    }, c);
                    y(function (d) {
                        var e;
                        b.info.counterId && a((e =
                            {}, e[b.info.counterId] = b, e), d, d.data)
                    }, c)
                }
                function sq(a, c, b, d, e) {
                    return(new L(function (f, g) {
                        var h = da(b),
                            k = w(d.resolve || O, nd(f)),
                            l = w(d.reject || O, nd(g));
                        d.resolve = k;
                        d.reject = l;
                        y(function (m) {
                            var p;
                            d.Ae.push(+ m);
                            var r = b[m],
                                q = Q(a, u(Ra(), l), 5100, "is.m");
                            c(r.window, z(e, (p =
                                {}, p.toCounter = Ha(m), p)), function (t, x) {
                                ka(a, q);
                                d.Uf.push(m);
                                d.resolve && d.resolve(x)
                            })
                        }, h)
                    }))["catch"](D(a, "if.b"))
                }
                function uq(a) {
                    var c = E,
                        b = null,
                        d = a.length;
                    if (0 !== a.length && a[0]) {
                        var e = a.slice(-1)[0];
                        T(e) && (c = e, d = a.length + -1);
                        var f = a.slice(-2)[0];
                        T(f) && (c = f, b = e, d = a.length + -2);
                        d = a.slice(0, d);
                        return {
                            Og: b,
                            dc: c,
                            R: 1 === d.length ? a[0] : od(d)
                        }
                    }
                }
                function Rc(a, c, b, d, e) {
                    var f = C([
                        a, d, e
                    ], Xf);
                    return b.then(f, function (g) {
                        f();
                        ve(a, c, g)
                    })
                }
                function Yf(a, c) {
                    return {
                        N: function (b, d) {
                            var e,
                                f,
                                g = (b.M || {}).R,
                                h = b.ba;
                            h = void 0 === h ? {} : h;
                            if (g && (fj(c, g), ! h.da && b.K && b.J)) {
                                var k = zb(a, g),
                                    l = gj(a),
                                    m = b.K.C("pv");
                                k && ! b.J.nohit && (sb(a, (e =
                                    {}, e.counterKey = M(c), e.name = "params", e.data =( f =
                                    {}, f.val = g, f), e)), m ? encodeURIComponent(k).length > Fa.pg ? l.push([b.K, g]) : b.J["site-info"] = k : (h.da = k, b.ba = h, b.Pc || (b.Pc =
                                    {}), b.Pc.ei =! 0))
                            }
                            d()
                        },
                        Ea: function (b, d) {
                            var e = gj(a),
                                f = za(a, c),
                                g = f && f.params;
                            g && (f = ea(w(Sc, Aa(b.K)), e), y(function (h) {
                                g(h[1]);
                                h = Ie(a)(h, e);
                                e.splice(h, 1)
                            }, f));
                            d()
                        }
                    }
                }
                function Je(a, c) {
                    return function (b) {
                        Zf(a, c, b)
                    }
                }
                function vq(a, c) {
                    $f(a)(function (b) {
                        delete b[c]
                    })
                }
                function Zf(a, c, b) {
                    $f(a)(function (d) {
                        d[c] = z(d[c] || {}, b)
                    })
                }
                function $f(a) {
                    a = H(a);
                    var c = a.C("dsjf") || Ga({});
                    a.Ca("dsjf", c);
                    return c
                }
                function wq(a, c) {
                    return function (b) {
                        var d,
                            e,
                            f = za(a, c);
                        f && (pa(b) ? Ta(da(b)) ? (b = hj(b)) && Ta(b) && f.params((d =
                            {}, d.__ym =( e =
                            {}, e.fpmh = b, e), d)) : Mb(a, c, "First party params error. Empty object.")() : Mb(a, c, "First party params error. Not an object.")())
                    }
                }
                function hj(a) {
                    return J(function (c, b) {
                        var d = b[0],
                            e = b[1],
                            f = pa(e);
                        if (!ma(e) && ! f) 
                            return c;
                        
                        e = f ? hj(e) : e;
                        Ta(e) && c.push([d, e]);
                        return c
                    }, [], Oa(a))
                }
                function ij(a, c, b) {
                    void 0 === b && (b = 0);
                    c = Oa(c);
                    c = J(function (d, e) {
                        var f = e[0],
                            g = e[1],
                            h = pa(g);
                        if (!ma(g) && ! h) 
                            return d;
                        
                        h ? g = ij(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = xq(g) : "email" === f && (g = yq(g)), g = jj(a, g)) : g = L.resolve(g);
                        d.push(g.then(function (k) {
                            return [f, k]
                        }));
                        return d
                    }, [], c);
                    return L.all(c)
                }
                function yq(a) {
                    var c = cb(a).toLowerCase().split("@"),
                        b = c[0];
                    c = c[1];
                    if (! c) 
                        return a;
                    
                    c = c.replace("googlemail.com", "gmail.com");
                    kj(c) && (c = "yandex.ru");
                    "yandex.ru" === c ? b = b.replace(ag, "-") : "gmail.com" === c && (b = b.replace(ag, ""));
                    a = hb(b, "+");
                    -1 !== a && (b = b.slice(0, a));
                    return b + "@" + c
                }
                function xq(a) {
                    a = Rb(a);
                    return "8" === a[0] ? "7" + a.slice(1) : a
                }
                function jj(a, c) {
                    return new L(function (b, d) {
                        var e = (new a.TextEncoder).encode(c);
                        a.crypto.subtle.digest("SHA-256", e).then(function (f) {
                            f = new a.Blob([f], {type: "application/octet-binary"});
                            var g = new a.FileReader;
                            g.onload = function (h) {
                                h = n(h, "target.result") || "";
                                var k = hb(h, ",");
                                -1 !== k ? b(h.substring(k + 1)) : d(Ic("fpm.i"))
                            };
                            g.readAsDataURL(f)
                        }, d)
                    })
                }
                function za(a, c) {
                    var b = H(a).C("counters", {}),
                        d = M(c);
                    return b[d]
                }
                function lj(a, c) {
                    H(a).D("dce:" + c, !0);
                    var b = H(a).C("dclq:" + c);
                    if (b) {
                        var d = Hd(a, c);
                        y(function (e) {
                            d[e[0]].apply(d, e[1])
                        }, b);
                        Id(b)
                    }
                }
                function Mb(a, c, b, d) {
                    return mj(c) ? E : u(C([a, M(c)].concat(d ? [
                        b + ". Params:",
                        d
                    ] : [b]), xb), ia)
                }
                function xb() {
                    var a = Ja(arguments),
                        c = a.slice(2);
                    Hd(a[0], a[1]).log.apply(xb, c)
                }
                function zq(a, c) {
                    return {
                        log: Tc(a, "log", c, E),
                        warn: Tc(a, "log", c, E),
                        error: Tc(a, "log", c, E)
                    }
                }
                function Tc(a, c, b, d) {
                    return function () {
                        var e,
                            f,
                            g = Ja(arguments);
                        sb(a, (e =
                            {}, e.counterKey = b, e.name = "log", e.data =( f =
                            {}, f.args = g, f.type = c, f), e));
                        return d.apply(void 0, g)
                    }
                }
                function qa(a, c) {
                    var b = M(a);
                    return nj()(Aq(b)).then(c)
                }
                function Bq(a, c, b) {
                    var d,
                        e;
                    c = M(c);
                    var f = bg(a);
                    b = z({
                        bh: f(Y)
                    }, b);
                    sb(a, (d =
                        {}, d.counterKey = c, d.name = "counterSettings", d.data =( e =
                        {}, e.settings = b, e), d));
                    return nj()(Cq(c, b))
                }
                function Cq(a, c) {
                    return function (b) {
                        var d = b[a];
                        d ? (d.zi = c, d.Ff =! 0, d.Ef ? d.Ef(c) : d.promise = L.resolve(c)) : b[a] = {
                            promise: L.resolve(c),
                            zi: c,
                            Ff: !0
                        }
                    }
                }
                function cg(a) {
                    return !xd(a) && dg(a)
                }
                function Jd(a) {
                    return db(a) ? u(a, Dq) : !1
                }
                function Db(a) {
                    if (a.fetch) {
                        var c = n(a, "AbortController");
                        return C([
                            a,
                            c ? new c : void 0
                        ], Eq)
                    }
                    return !1
                }
                function dg(a) {
                    var c = n(a, "navigator.sendBeacon");
                    return c && Da("sendBeacon", c) ? C([
                        a, G(c, n(a, "navigator"))
                    ], Fq) : !1
                }
                function Fq(a, c, b, d) {
                    return new L(function (e, f) {
                        var g;
                        if (!n(a, "navigator.onLine")) 
                            return f();
                        
                        var h = z(d.$a, (g =
                            {}, g["force-urlencoded"] = 1, g));
                        g = b + "?" + Bc(h) + (d.da ? "&" + d.da : "");
                        return 2E3 < g.length ? f(Ra("sb.tlq")) : c(g) ? e("") : f()
                    })
                }
                function Dq(a, c, b) {
                    return new L(function (d, e) {
                        var f,
                            g,
                            h = "_ymjsp" + Wa(a),
                            k = z((f =
                                {}, f.callback = h, f), b.$a),
                            l = C([
                                a, h
                            ], Gq);
                        a[h] = function (p) {
                            try {
                                l(),
                                rc(m),
                                d(p)
                            } catch (r) {
                                e(r)
                            }
                        };
                        k.wmode = "5";
                        var m = sc(a, (g =
                            {}, g.src = oj(c, b, k), g));
                        if (! m) 
                            return l(),
                            e(Ic("jp.s"));
                        
                        f = u(m, rc);
                        f = w(f, u(Ra(b.ha), e));
                        g = Kd(a, f, b.Pa || 1E4);
                        g = C([
                            a, g
                        ], ka);
                        m.onload = g;
                        m.onerror = w(l, g, f)
                    })
                }
                function Gq(a, c) {
                    try {
                        delete a[c]
                    } catch (b) {
                        a[c] = void 0
                    }
                }
                function Uc(a) {
                    var c = db(a);
                    return c ? C([
                        a, c
                    ], Hq) : !1
                }
                function Hq(a, c, b, d) {
                    return new L(function (e, f) {
                        var g = cc(a),
                            h = c("img"),
                            k = w(u(h, rc), u(Ra(d.ha), f)),
                            l = Kd(a, k, d.Pa || 3E3);
                        h.onerror = k;
                        h.onload = w(u(h, rc), u(null, e), C([
                            a, l
                        ], ka));
                        k = z({}, d.$a);
                        delete k.wmode;
                        h.src = oj(b, d, k);
                        zd(a) && (z(h.style, {
                            position: "absolute",
                            visibility: "hidden",
                            width: "0px",
                            height: "0px"
                        }), g.appendChild(h))
                    })
                }
                function Eq(a, c, b, d) {
                    var e,
                        f = z(d.Ab ? (e =
                            {}, e.wmode = "7", e) : {}, d.$a),
                        g = c || {
                            signal: void 0,
                            abort: E
                        },
                        h = a.fetch(b + "?" + Bc(f), {
                            method: d.$c,
                            body: d.da,
                            credentials: !1 === d.He ? "omit" : "include",
                            headers: d.Za,
                            signal: g.signal
                        }),
                        k = u(d.ha, Ra);
                    return new L(function (l, m) {
                        d.Pa && Kd(a, function () {
                            try {
                                g.abort()
                            } catch (p) {}m(k())
                        }, d.Pa);
                        return h.then(function (p) {
                            if (! p.ok) {
                                if (d.ke) 
                                    return Ua(pj(p));
                                
                                de(d.ha)
                            }
                            return d.ke ? p.text() : d.Ab ? p.json() : null
                        }).then(l)["catch"](u(k(), m))
                    })
                }
                function Eb(a) {
                    var c;
                    if (c = n(a, "XMLHttpRequest")) 
                        if (c = "withCredentials" in new a.XMLHttpRequest) {
                            a: {
                                if (Iq.test(a.location.host) && a.opera && T(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                    c = !0;
                                    break a
                                }
                                c = !1
                            } c = ! c
                        }
                    
                    return c ? u(a, Jq) : !1
                }
                function Jq(a, c, b) {
                    var d,
                        e = new a.XMLHttpRequest,
                        f = b.da,
                        g = z(b.Ab ? (d =
                            {}, d.wmode = "7", d) : {}, b.$a);
                    return new L(function (h, k) {
                        e.open(b.$c || "GET", c + "?" + Bc(g), !0);
                        e.withCredentials = !1 !== b.He;
                        b.Pa && (e.timeout = b.Pa);
                        Kq(Oa, Tb(function (m) {
                            e.setRequestHeader(m[0], m[1])
                        }))(b.Za);
                        var l = C([
                            a,
                            e,
                            Ra(b.ha),
                            b.Ab,
                            b.ke,
                            h,
                            k
                        ], Lq);
                        e.onreadystatechange = l;
                        try {
                            e.send(f)
                        } catch (m) {}
                    })
                }
                function Lq(a, c, b, d, e, f, g, h) {
                    if (4 === c.readyState) 
                        if (200 === c.status || e || g(b), e) 
                            200 === c.status ? f(c.responseText) : g(pj(c));
                        
                     else {
                        e = null;
                        if (d) 
                            try {
                                (e = yb(a, c.responseText)) || g(b)
                            }
                         catch (k) {
                            g(b)
                        }
                        f(e)
                    }
                    return h
                }
                function oj(a, c, b) {
                    (b = Bc(b)) && (a += "?" + b);
                    c.da && (a +=( b ? "&" : "?") + c.da);
                    return a
                }
                function Mq(a, c, b) {
                    var d = A(Sc, Ub[c] || Vb);
                    y(function (e) {
                        return d.unshift(e)
                    }, Ke);
                    return A(w(Ld([a, b]), ia), d)
                }
                function qj(a, c) {
                    var b = R(a),
                        d = b.href,
                        e = b.host,
                        f = -1;
                    if (!ma(c) || W(c)) 
                        return d;
                    
                    b = c.replace(rj, "");
                    if (-1 !== b.search(Nq)) 
                        return b;
                    
                    var g = b.charAt(0);
                    if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) 
                        return d + b;
                    
                    if (-1 !== f) 
                        return d.substr(0, f) + b;
                    
                    if ("/" === g) {
                        if (f = hb(d, e), -1 !== f) 
                            return d.substr(0, f + e.length) + b
                        
                    } else 
                        return d = d.split("/"),
                        d[d.length - 1] = b,
                        I("/", d);
                    
                    return ""
                }
                function Le(a, c) {
                    return {
                        N: function (b, d) {
                            var e = sj(c);
                            e = C([
                                b, e, d
                            ], Oq);
                            Pq(a, c, e)
                        },
                        Ea: function (b, d) {
                            var e = b.K,
                                f = sj(c);
                            if (e) {
                                var g = f.ta;
                                f.Ve === e && g && (y(ia, g), f.ta = null)
                            }
                            d()
                        }
                    }
                }
                function Oq(a, c, b) {
                    var d = a.K;
                    d ? Qf(a) ? (c.Ve = d, b()) : c.ta ? c.ta.push(b) : b() : b()
                }
                function Qf(a) {
                    return(a = a.K) && a.C("pv") && ! a.C("ar")
                }
                function Pq(a, c, b) {
                    if (Me(a) && ib(a)) {
                        var d = Qq(c);
                        if (! d.Rh) {
                            d.Rh = !0;
                            c = ld(a, c);
                            if (! c) {
                                b();
                                return
                            }
                            d.ta = [];
                            var e = function () {
                                d.ta && (y(ia, d.ta), d.ta = null)
                            };
                            Q(a, e, 3E3);
                            c.$.F(["initToChild"], e)
                        }
                        d.ta ? d.ta.push(b) : b()
                    } else 
                        b()
                    
                }
                function tj(a, c) {
                    return {
                        N: function (b, d) {
                            var e = b.K;
                            if (e && (! c || c.Qf)) {
                                var f = a.document.title;
                                b.M && b.M.title && (f = b.M.title);
                                var g = Cc("getElementsByTagName", a.document);
                                "string" !== typeof f && g && (f = g("title"), f =( f = n(f, "0.innerHtml")) ? f : "");
                                f = f.slice(0, Fa.qg);
                                e.D("t", f)
                            }
                            d()
                        }
                    }
                }
                function Ob(a) {
                    return function (c, b) {
                        return {
                            N: function (d, e) {
                                var f = d.K,
                                    g = d.J;
                                f && g && y(function (h) {
                                    var k = Md[h],
                                        l = "bi",
                                        m = f;
                                    k || (k = eg[h], l = "tel", m = me(d));
                                    k && (k = B(l + ":" + h, k, null)(c, b, d),
                                    m.Xb(h, k))
                                }, a || Rq());
                                e()
                            }
                        }
                    }
                }
                function Sq(a, c) {
                    var b = Nd(a);
                    c.F(["initToParent"], function (d) {
                        var e = d[0];
                        d = d[1];
                        window.window && (b.children[d.counterId] =
                            { info: d,
                            window: e.source
                        })
                    }).F(["initToChild"], function (d) {
                        var e = d[0];
                        d = d[1];
                        e.source === a.parent && c.T("parentConnect", [e, d])
                    }).F(["parentConnect"], function (d) {
                        var e = d[1];
                        e.counterId && (b.Ha[e.counterId] =
                            { info: e,
                            window: d[0].source
                        })
                    })
                }
                function Tq(a) {
                    if (Da("MutationObserver", a.MutationObserver)) {
                        var c = Nd(a).children,
                            b = new a.MutationObserver(function () {
                                y(function (d) {
                                    n(c[d], "window.window") || delete c[d]
                                }, da(c))
                            });
                        Kb(a)(Qa(E, function () {
                            b.observe(a.document.body, {
                                subtree: !0,
                                childList: !0
                            })
                        }))
                    }
                }
                function Uq(a, c) {
                    return function (b, d) {
                        var e,
                            f = {
                                qc: ha(a)(Y),
                                key: a.Math.random(),
                                dir: 0
                            };
                        b.length && (f.qc = Ha(b[0]), f.key = parseFloat(b[1]), f.dir = Ha(b[2]));
                        z(d, c);
                        var g = (e =
                            { data: d
                        }, e.__yminfo = I(":", ["__yminfo", f.qc, f.key, f.dir]), e);
                        return {
                            meta: f,
                            Yf: zb(a, g) || ""
                        }
                    }
                }
                function Kb(a, c) {
                    function b(e) {
                        n(c, d) ? e() : Q(a, u(e, b), 100)
                    }
                    void 0 === c && (c = a);
                    var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                    return Ga(function (e, f) {
                        b(f)
                    })
                }
                function Od(a, c) {
                    var b = c.Rd,
                        d = b || "uid";
                    b = b ? a.location.hostname : void 0;
                    var e = vc(a),
                        f = Pa(a),
                        g = ha(a)(fg),
                        h = uj(a, c),
                        k = h[0];
                    h = h[1];
                    var l = e.C("d");
                    vj(a, c);
                    var m = !1;
                    ! h && k && (h = k, m =! 0);
                    if (! h) 
                        h = I("", [
                            g, Wa(a, 1E6, 999999999)
                        ]),
                        m = !0;
                     else if (! l || 15768E3 < g - Ha(l)) 
                        m = !0;
                    
                    m && ! c.Ta && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
                    f.D(d, h);
                    return h
                }
                function Vq(a, c) {
                    return ! c.Ta && vj(a, c)
                }
                function uj(a, c) {
                    var b = Pa(a),
                        d = vc(a),
                        e = c.Rd || "uid";
                    return [b.C(e), d.C(e)]
                }
                function yc(a) {
                    var c = H(a),
                        b = c.C("hitId");
                    b || (b = Wa(a), c.D("hitId", b));
                    return b
                }
                function he(a, c, b) {
                    var d = Ma(c);
                    return d && Zi(a, c, ua(["p", Wq[d], "c"]), Sf, b)
                }
                function ge(a, c) {
                    var b = ic(gg, a, c);
                    if (! b) {
                        var d = ic("div", a, c);
                        d && (jb(gg + ",div", d).length || (b = d))
                    }
                    return b
                }
                function Zi(a, c, b, d, e) {
                    return J(function (f, g) {
                        var h = null;
                        g in wj ? h = c.getAttribute && c.getAttribute(wj[g]) : g in Vc && (h = "p" === g ? Vc[g](a, c, e) : "c" === g ? Vc[g](a, c, d) : Vc[g](a, c));
                        h && (h = h.slice(0, xj[g] || 100), f[g] = hg[g] ? "" + dc(h) : h);
                        return f
                    }, {}, b)
                }
                function Xh(a, c, b) {
                    if (id(a)) 
                        return Ba(b.querySelectorAll(c));
                    
                    var d = yj(c.split(" "), b);
                    return ea(function (e, f) {
                        return Nb(a)(e, d) === f
                    }, d)
                }
                function yj(a, c) {
                    var b = ra([], a),
                        d = b.shift();
                    if (! d) 
                        return [];
                    
                    d = c.getElementsByTagName(d);
                    return b.length ? qc(u(b, yj), Ba(d)) : Ba(d)
                }
                function ac(a, c) {
                    if (c.querySelector) 
                        return c.querySelector(a);
                    
                    var b = jb(a, c);
                    return b && b.length ? b[0] : null
                }
                function jb(a, c) {
                    if (! c || ! c.querySelectorAll) 
                        return [];
                    
                    var b = c.querySelectorAll(a);
                    return b ? Ba(b) : []
                }
                function bj(a) {
                    var c = null;
                    try {
                        c = a.target || a.srcElement
                    } catch (b) {}
                    if (c) {
                        3 === c.nodeType && (c = c.parentNode);
                        for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || ! c.href && ! c.getAttribute("xlink:href"));) 
                            a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                        
                        return c.href ? c : null
                    }
                    return null
                }
                function sc(a, c) {
                    var b = db(a);
                    if (b) {
                        var d = a.document,
                            e = b("script");
                        e.src = c.src;
                        e.type = c.type || "text/javascript";
                        e.charset = c.charset || "utf-8";
                        e.async = c.async || !0;
                        try {
                            var f = d.getElementsByTagName("head")[0];
                            if (! f) {
                                var g = d.getElementsByTagName("html")[0];
                                f = b("head");
                                g && g.appendChild(f)
                            }
                            f.insertBefore(e, f.firstChild);
                            return e
                        } catch (h) {}
                    }
                }
                function Sh(a, c) {
                    var b = zj(a);
                    K(c, b.rb) && (b.rb = ea(w(Aa(c), Dc), b.rb), b.rb.length || (rc(b.ib), b.ib = null))
                }
                function Rh(a, c, b) {
                            var d = zj(c);
                        K(b, d.rb) || d.rb.push(b);
                        if (Va(d.ib)) {
                            b = db(a);
                            if (! b) 
                                return null;
                            
                            b = b("iframe");
                            z(b.style, {
                                display: "none",
                                width: "1px",
                                height: "1px",
                                visibility: "hidden"
                            });
                            b.src = c;
                            a = cc(a);
                            if (! a) 
                                return null;
                            
                            a.appendChild(b);
                            d.ib = b
                        } else 
                            (a = n(d.ib, "contentWindow")) && a.postMessage("frameReinit", "*");
                            return d.ib
                        }
                        function Xq(a, c) {
                            var b = ca(a) ? a : [a];
                            c = c || document;
                            if (c.querySelectorAll) {
                                var d = I(", ", A(function (e) {
                                    return "." + e
                                }, b));
                                return Ba(c.querySelectorAll(d))
                            }
                            if (c.getElementsByClassName) 
                                return qc(w(Ea("getElementsByClassName", c), Ba), b);
                            
                            d = c.getElementsByTagName("*");
                            b = "(" + I("|", b) + ")";
                            return ea(u(b, fc), Ba(d))
                        }
                        function nf(a, c, b) {
                            for (var d = "", e = Be(), f = Ma(c) || "*"; c && c.parentNode && ! K(f, ["BODY", "HTML"]);) 
                                d += e[f] || "*",
                                d += Aj(a, c, b) || "",
                                c = c.parentElement,
                                f = Ma(c) || "*";
                            
                            return cb(d, 128)
                        }
                        function Aj(a, c, b) {
                            if (a = Ne(a, c)) {
                                a = a.childNodes;
                                for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1) 
                                    if (d === (a[f] && a[f].nodeName)) {
                                        if (c === a[f]) 
                                            return e;
                                        
                                        b && a[f] === b || (e += 1)
                                    }
                                
                            }
                            return 0
                        }
                        function Ne(a, c) {
                            var b = n(a, "document");
                            return c && c !== b.documentElement ? c === Ec(a) ? b.documentElement : n(c, "parentNode") : null
                        }
                        function If(a, c) {
                            var b = ig(a, c),
                                d = b.left;
                            b = b.top;
                            var e = Oe(a, c);
                            return [
                                d, b, e[0], e[1]
                            ]
                        }
                        function Oe(a, c) {
                            var b = n(a, "document");
                            if (c === Ec(a) || c === b.documentElement) {
                                b = cc(a);
                                var d = Kc(a);
                                return [
                                    Math.max(b.scrollWidth, d[0]),
                                    Math.max(b.scrollHeight, d[1])
                                ]
                            }
                            return(b = Jc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
                        }
                        function ig(a, c) {
                            var b = c,
                                d = n(a, "document"),
                                e = Ma(b);
                            if (! b || ! b.ownerDocument || "PARAM" === e || b === Ec(a) || b === d.documentElement) 
                                return {left: 0, top: 0};
                            
                            if (d = Jc(b)) 
                                return b = Vf(a), {
                                    left: Math.round(d.left + b.x),
                                    top: Math.round(d.top + b.y)
                                };
                            
                            for (e = d = 0; b;) 
                                d += b.offsetLeft,
                                e += b.offsetTop,
                                b = b.offsetParent;
                            
                            return {left: d, top: e}
                        }
                        function ic(a, c, b) {
                            if (!(c && c.Element && c.Element.prototype && c.document && b)) 
                                return null;
                            
                            if (c.Element.prototype.closest && Da("closest", c.Element.prototype.closest) && b.closest) 
                                return b.closest(a);
                            
                            var d = di(c);
                            if (d) {
                                for (; b && 1 === b.nodeType && ! d.call(b, a);) 
                                    b = b.parentElement || b.parentNode;
                                
                                return b && 1 === b.nodeType ? b : null
                            }
                            if (id(c)) {
                                for (a = Ba((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Nb(c)(b, a);) 
                                    b = b.parentElement || b.parentNode;
                                
                                return b && 1 === b.nodeType ? b : null
                            }
                            return null
                        }
                        function id(a) {
                            return !(!Da("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || ! a.document.querySelectorAll)
                        }
                        function qh(a, c, b) {
                            var d = c.top,
                                e = c.bottom,
                                f = c.left,
                                g = b.w;
                            b = b.h;
                            a = a.Math;
                            c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
                            return(a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
                        }
                        function Bj(a) {
                            return Pe(a) && ! Ya(Aa(a.type), Yq) ? Qe(a) ? ! a.checked : ! a.value : Zq(a) ? ! a.value : $q(a) ? 0 > a.selectedIndex : !0
                        }
                        function Ma(a) {
                            if (a) 
                                try {
                                    var c = a.nodeName;
                                    if (ma(c)) 
                                        return c;
                                    
                                    c = a.tagName;
                                    if (ma(c)) 
                                        return c
                                    
                                }
                             catch (b) {}
                        }
                        function Cj(a, c) {
                            var b = a.document.getElementsByTagName("form");
                            return Nb(a)(c, Ba(b))
                        }
                        function ar(a, c, b) {
                            b = Cc("dispatchEvent", b || a.document);
                            var d = null,
                                e = n(a, "Event.prototype.constructor");
                            if (e && (Da("(Event|Object|constructor)", e) || jg(a) && "[object Event]" === "" + e)) 
                                try {
                                    d = new a.Event(c)
                                }
                             catch (f) {
                                if ((a = Cc("createEvent", n(a, "document"))) && T(a)) {
                                    try {
                                        d = a(c)
                                    } catch (g) {}d && d.initEvent && d.initEvent(c, !1, !1)
                                }
                            }
                            d && b(d)
                        }
                        function Jc(a) {
                            try {
                                return a.getBoundingClientRect && a.getBoundingClientRect()
                            } catch (c) {
                                return "object" === typeof c && null !== c && 16389 === (c.uf && c.uf & 65535) ? {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0,
                                    right: 0
                                } : null
                            }
                        }
                        function Vf(a) {
                            var c = Ec(a),
                                b = n(a, "document");
                            return {
                                x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                                y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                            }
                        }
                        function Kc(a) {
                            var c = je(a);
                            if (c) {
                                var b = c[2];
                                return [
                                    a.Math.round(c[0] * b),
                                    a.Math.round(c[1] * b)
                                ]
                            }
                            c = cc(a);
                            return [
                                n(c, "clientWidth") || a.innerWidth,
                                n(c, "clientHeight") || a.innerHeight
                            ]
                        }
                        function je(a) {
                            var c = n(a, "visualViewport.width"),
                                b = n(a, "visualViewport.height");
                            a = n(a, "visualViewport.scale");
                            return ja(c) || ja(b) ? null : [Math.floor(c), Math.floor(b), a]
                        }
                        function cc(a) {
                            var c = n(a, "document") || {},
                                b = c.documentElement;
                            return "CSS1Compat" === c.compatMode ? b : Ec(a) || b
                        }
                        function Ec(a) {
                            a = n(a, "document");
                            try {
                                return a.getElementsByTagName("body")[0]
                            } catch (c) {
                                return null
                            }
                        }
                        function fc(a, c) {
                            try {
                                return(new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                            } catch (b) {
                                return !1
                            }
                        }
                        function Fc(a) {
                            var c;
                            try {
                                if (c = a.target || a.srcElement) 
                                    ! c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                                
                            } catch (b) {}
                            return c
                        }
                        function rc(a) {
                            var c = a && a.parentNode;
                            c && c.removeChild(a)
                        }
                        function Jb(a) {
                            return a ? a.innerText || "" : ""
                        }
                        function Lf(a) {
                            if (ja(a)) 
                                return !1;
                            
                            a = a.nodeType;
                            return 3 === a || 8 === a
                        }
                        function Dj(a, c, b) {
                            void 0 === c && (c = "");
                            void 0 === b && (b = "_ym");
                            var d = "" + b + c;
                            d && (d += "_");
                            return {
                                Kd: br(a),
                                C: function (e, f) {
                                    var g = Ej(a, "" + d + e);
                                    return Va(g) && ! W(f) ? f : g
                                },
                                D: function (e, f) {
                                    Fj(a, "" + d + e, f);
                                    return this
                                },
                                Gb: function (e) {
                                    Gj(a, "" + d + e);
                                    return this
                                }
                            }
                        }
                        function Fj(a, c, b) {
                            var d = kg(a);
                            a = zb(a, b);
                            if (! Va(a)) 
                                try {
                                    d.setItem(c, a)
                                }
                             catch (e) {}
                        }
                        function Ej(a, c) {
                            var b = kg(a);
                            try {
                                return yb(a, b.getItem(c))
                            } catch (d) {}
                            return null
                        }
                        function Gj(a, c) {
                            var b = kg(a);
                            try {
                                b.removeItem(c)
                            } catch (d) {}
                        }
                        function kg(a) {
                            try {
                                return a.localStorage
                            } catch (c) {}
                            return null
                        }
                        function zb(a, c, b) {
                            try {
                                return a.JSON.stringify(c, null, b)
                            } catch (d) {
                                return null
                            }
                        }
                        function me(a, c, b) {
                            void 0 === b && (b = null);
                            a.Ja || (a.Ja = of());
                            c && a.Ja.Xb(c, b);
                            return a.Ja
                        }
                        function Re(a) {
                            return {
                                N: function (c, b) {
                                    var d = a.document,
                                        e = c.K;
                                    if (e && lg(a)) {
                                        var f = fa(a),
                                            g = function (h) {
                                                lg(a) || (f.xb(d, Hj, g), b());
                                                return h
                                            };
                                        f.F(d, Hj, g);
                                        e.D("pr", "1")
                                    } else 
                                        b()
                                    
                                }
                            }
                        }
                        function Pd(a) {
                            return function (c, b, d) {
                                return function (e, f) {
                                    var g = A(w(Sc, Ld([c, f]), ia), Ij[a] || []);
                                    g = ra(g, d);
                                    return Jj(c, b, g)(e)
                                }
                            }
                        }
                        function Jj(a, c, b) {
                            var d = Wb(a, c);
                            return function (e) {
                                return Kj(b, e, !0).then(function () {
                                    var f = e.na || {},
                                        g = f.Jh,
                                        h = void 0 === g ? "" : g;
                                    g = f.Ba;
                                    var k = void 0 === g ? "" : g;
                                    f = f.Kh;
                                    f = A(function (l) {
                                        return Fa.Ra + "//" + (
                                            "" + h + l || gc
                                        ) + "/" + k
                                    }, void 0 === f ? [gc] : f);
                                    return d(e, f)
                                }).then(function (f) {
                                    var g = f.Sc;
                                    f = f.hg;
                                    e.Ci = g;
                                    e.Gj = f;
                                    return Kj(b, e).then(u(g, O))
                                })
                            }
                        }
                        function Wb(a, c) {
                            return function (b, d) {
                                return Lj(a, c, d, b)
                            }
                        }
                        function Lj(a, c, b, d, e, f) {
                            var g;
                            void 0 === e && (e = 0);
                            void 0 === f && (f = 0);
                            var h = z({
                                    ha: []
                                }, d.ba),
                                k = c[f],
                                l = k[0];
                            k = k[1];
                            var m = b[e];
                            h.Za && h.Za["Content-Type"] || ! h.da || (h.Za = z({}, h.Za, (g =
                                {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.da = "site-info=" + qe(h.da));
                            h.$c = h.da ? "POST" : "GET";
                            h.$a = cr(a, d, l);
                            h.Ba = (d.na || {}).Ba;
                            h.ha.push(l);
                            z(d.ba, h);
                            g = "" + m + (d.Pc && d.Pc.ei ? "/1" : "");
                            var p = 0;
                            p = dr(a, g, h);
                            return k(g, h).then(function (r) {
                                var q = p,
                                    t,
                                    x;
                                sb(a, (t =
                                    {}, t.name = "requestSuccess", t.data =( x =
                                    {}, x.body = r, x.requestId = q, x), t));
                                return {Sc: r, hg: e}
                            })["catch"](function (r) {
                                var q = p,
                                    t,
                                    x;
                                sb(a, (t =
                                    {}, t.name = "requestFail", t.data =( x =
                                    {}, x.error = r, x.requestId = q, x), t));
                                q = f + 1 >= c.length;
                                t = e + 1 >= b.length;
                                q && t && Ua(r);
                                return Lj(a, c, b, d, ! t && q ? e + 1 : e, q ? 0 : f + 1)
                            })
                        }
                        function cr(a, c, b) {
                            var d = z({}, c.J);
                            a = ha(a);
                            c.K && (d["browser-info"] = Ka(c.K.l()).D("st", a(fg)).Ia());
                            ! d.t && (c = c.Ja) && (c.D("ti", b), d.t = c.Ia());
                            return d
                        }
                        function dr(a, c, b) {
                            var d,
                                e,
                                f,
                                g = Wa(a),
                                h = b.ha,
                                k = b.da,
                                l = b.Za,
                                m = b.$a;
                            b = b.$c;
                            sb(a, (d =
                                {}, d.name = "request", d.data =( e =
                                {}, e.url = c, e.requestId = g, e.senderParams =( f =
                                {}, f.rBody = k, f.debugStack = h, f.rHeaders = l, f.rQuery = m, f.verb = b, f), e), d));
                            return g
                        }
                        function Mj(a, c, b, d) {
                            a[c] || (a[c] =[]);
                            b && ! ja(d) && Nj(a[c], b, d)
                        }
                        function Nj(a, c, b) {
                            for (var d =[
                                c, b
                            ], e = -1E4, f = 0; f < a.length; f += 1) {
                                var g = a[f],
                                    h = g[0];
                                g = g[1];
                                if (b === g && h === c) 
                                    return;
                                
                                if (b < g && b >= e) {
                                    a.splice(f, 0, d);
                                    return
                                }
                                e = g
                            }
                            a.push(d)
                        }
                        function Kj(a, c, b) {
                            void 0 === b && (b =! 1);
                            return new L(function (d, e) {
                                function f(k, l) {
                                    l();
                                    d()
                                }
                                var g = a.slice();
                                g.push({N: f, Ea: f});
                                var h = bc(g, function (k, l) {
                                    var m = b ? k.N : k.Ea;
                                    if (m) 
                                        try {
                                            m(c, l)
                                        }
                                     catch (p) {
                                        h(er),
                                        e(p)
                                    } else 
                                        l()
                                    
                                });
                                h(Oj)
                            })
                        }
                        function Qb(a, c, b) {
                            var d = b || "as";
                            if (a.postMessage && ! a.attachEvent) {
                                b = fa(a);
                                var e = "__ym__promise_" + Wa(a) + "_" + Wa(a),
                                    f = E;
                                d = D(a, d, function (g) {
                                    try {
                                        var h = g.data
                                    } catch (k) {
                                        return
                                    }
                                    h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
                                });
                                f = b.F(a, ["message"], d);
                                a.postMessage(e, "*")
                            } else 
                                Q(a, c, 0, d)
                            
                        }
                        function mh(a, c, b, d, e) {
                            void 0 === d && (d = 1);
                            void 0 === e && (e = "itc");
                            c = bc(c, b);
                            hd(a, c, d)(Qa(D(a, e), E))
                        }
                        function hd(a, c, b, d) {
                            void 0 === b && (b = 1);
                            void 0 === d && (d = Pj);
                            mg = Infinity === b;
                            return Ga(function (e, f) {
                                function g() {
                                    try {
                                        var k = c(d(a, b));
                                        h = h.concat(k)
                                    } catch (l) {
                                        return e(l)
                                    }
                                    c(fr);
                                    if (c(Qd)) 
                                        return f(h),
                                        Qj(a);
                                    
                                    mg ? (c(d(a, 1E4)), f(h), Qj(a)) : Q(a, g, 100)
                                }
                                var h = [];
                                gr(g)
                            })
                        }
                        function Qj(a) {
                            if (ng.length) {
                                var c = ng.shift();
                                mg ? c() : Q(a, c, 100)
                            } else 
                                og = !1
                            
                        }
                        function gr(a) {
                            og ? ng.push(a) : (og =! 0, a())
                        }
                        function Bf(a) {
                            return Ga(function (c, b) {
                                b(a)
                            })
                        }
                        function kp(a) {
                            return Ga(function (c, b) {
                                a.then(b, c)
                            })
                        }
                        function hr(a) {
                            var c = [],
                                b = 0;
                            return Ga(function (d, e) {
                                y(function (f, g) {
                                    f(Qa(d, function (h) {
                                        try {
                                            c[g] = h,
                                            b += 1,
                                            b === a.length && e(c)
                                        } catch (k) {
                                            d(k)
                                        }
                                    }))
                                }, a)
                            })
                        }
                        function jp(a) {
                            var c = [],
                                b = !1;
                            return Ga(function (d, e) {
                                function f(g) {
                                    c.push(g) === a.length && d(c)
                                }
                                y(function (g) {
                                    g(Qa(f, function (h) {
                                        if (! b) 
                                            try {
                                                e(h),
                                                b = !0
                                            }
                                         catch (k) {
                                            f(k)
                                        }
                                    }))
                                }, a)
                            })
                        }
                        function Qa(a, c) {
                            return function (b) {
                                return b(a, c)
                            }
                        }
                        function bc(a, c) {
                            return Ga({
                                Sa: a,
                                Nd: c || O,
                                ue: !1,
                                wa: 0
                            })
                        }
                        function Oj(a) {
                            function c() {
                                function d() {
                                    b = !0;
                                    a.wa += 1
                                }
                                b = !1;
                                a.Nd(a.Sa[a.wa], function () {
                                    d()
                                });
                                b || (a.wa += 1, d = u(a, Oj))
                            }
                            for (var b =! 0; !Qd(a) && b;) 
                                c()
                            
                        }
                        function Pj(a, c) {
                            return function (b) {
                                var d = ha(a),
                                    e = d(Y);
                                return Rj(function (f, g) {
                                    d(Y) - e >= c && g(Sj)
                                })(b)
                            }
                        }
                        function pg(a, c) {
                            return function (b) {
                                var d = ha(a),
                                    e = d(Y);
                                return qg(function (f) {
                                    d(Y) - e >= c && Sj(f)
                                })(b)
                            }
                        }
                        function qg(a) {
                            return function (c) {
                                for (var b; c.Sa.length && !Qd(c);) 
                                    b = c.Sa.pop(),
                                    b = c.Nd(b, c.Sa),
                                    a(c);
                                
                                return b
                            }
                        }
                        function ir(a) {
                            Qd(a) && Ua(Ic("i"));
                            var c = a.Nd(a.Sa[a.wa]);
                            a.wa += 1;
                            return c
                        }
                        function fr(a) {
                            a.ue = !1
                        }
                        function Sj(a) {
                            a.ue = !0
                        }
                        function er(a) {
                            a.wa = a.Sa.length
                        }
                        function Qd(a) {
                            return a.ue || a.Sa.length <= a.wa
                        }
                        function Bb(a) {
                            a = ha(a);
                            return Math.round(a(Tj) / 50)
                        }
                        function Tj(a) {
                            var c = a.Aa,
                                b = c[1];
                            a = c[0] && b ? b() : Y(a) - a.Lh;
                            return Math.round(a)
                        }
                        function fg(a) {
                            return Math.round(Y(a) / 1E3)
                        }
                        function qb(a) {
                            return Math.floor(Y(a) / 1E3 / 60)
                        }
                        function Y(a) {
                            var c = a.Ce;
                            return 0 !== c ? c : rg(a.l, a.Aa)
                        }
                        function bg(a) {
                            var c = fa(a),
                                b = Uj(a),
                                d = {
                                    l: a,
                                    Ce: 0,
                                    Aa: b,
                                    Lh: rg(a, b)
                                },
                                e = b[1];
                            b[0] && e || c.F(a, [
                                "beforeunload", "unload"
                            ], function () {
                                0 === d.Ce && (d.Ce = rg(a, d.Aa))
                            });
                            return Ga(d)
                        }
                        function jr(a) {
                            return(10 > a ? "0" : "") + a
                        }
                        function Ji(a, c, b) {
                            function d() {
                                f = 0;
                                g && (g =! 1, f = Q(a, d, b), e.T(h))
                            }
                            var e = Ed(a),
                                f,
                                g = !1,
                                h;
                            c.F(function (k) {
                                g = !0;
                                h = k;
                                f || d();
                                return E
                            });
                            return e
                        }
                        function kr(a, c) {
                            return a.clearInterval(c)
                        }
                        function lr(a, c, b, d) {
                            return a.setInterval(D(a, "i.err." + (
                                d || "def"
                            ), c), b)
                        }
                        function Q(a, c, b, d) {
                            return Kd(a, D(a, "d.err." + (
                                d || "def"
                            ), c), b)
                        }
                        function pd(a) {
                            var c = {};
                            return {
                                F: function (b, d) {
                                    y(function (e) {
                                        n(c, e) || (c[e] = Ed(a));
                                        c[e].F(d)
                                    }, b);
                                    return this
                                },
                                ga: function (b, d) {
                                    y(function (e) {
                                        n(c, e) && c[e].ga(d)
                                    }, b);
                                    return this
                                },
                                T: function (b, d) {
                                    return n(c, b) ? D(a, "e." + d, c[b].T)(d) : []
                                }
                            }
                        }
                        function Ed(a) {
                            var c = [],
                                b = {};
                            b.Bj = c;
                            b.F = w(Ea("push", c), u(b, O));
                            b.ga = w(tb(Nb(a))(c), tb(Ea("splice", c))(1), u(b, O));
                            b.T = w(O, tb(ia), mr(c));
                            return b
                        }
                        function Vj(a, c, b, d, e, f) {
                            a = nr(a);
                            var g = a.F,
                                h = a.ga;
                            f = f ? h : g;
                            if (c[f]) 
                                if (a.Li) 
                                    c[f](b, d, e);
                                
                             else 
                                c[f]("on" + b, d)
                            
                        }
                        function B(a, c, b) {
                            return function () {
                                return D(arguments[0], a, c, b).apply(this, arguments)
                            }
                        }
                        function D(a, c, b, d, e) {
                            var f = Ua,
                                g = b || f;
                            return function () {
                                var h = d;
                                try {
                                    h = g.apply(e || null, arguments)
                                } catch (k) {
                                    ve(a, c, k)
                                }
                                return h
                            }
                        }
                        function rg(a, c) {
                            var b = c || Uj(a),
                                d = b[0];
                            b = b[1];
                            return !isNaN(d) && T(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
                        }
                        function Uj(a) {
                            a = yd(a);
                            var c = n(a, "timing.navigationStart"),
                                b = n(a, "now");
                            b && (b = G(b, a));
                            return [c, b]
                        }
                        function yd(a) {
                            return n(a, "performance") || n(a, "webkitPerformance")
                        }
                        function ve(a, c, b) {
                            var d = "u.a.e",
                                e = "";
                            b && ("object" === typeof b ? (b.unk && Ua(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
                            or(d) || Ya(u(d, bb), pr) || qr(d) && .1 <= a.Math.random() || y(w(O, Ld(["jserrs", d, c, e]), ia), Wj)
                        }
                        function de() {
                            var a = Ja(arguments);
                            return Ua(Ra(a))
                        }
                        function Ra(a) {
                            var c = "";
                            ca(a) ? c = I(".", a) : ma(a) && (c = a);
                            return Ic("err.kn(" + Fa.cc + ")" + c)
                        }
                        function pj(a) {
                            return Ic("http." + a.status + ".st." + a.statusText + ".rt." + (
                                "" + a.responseText
                            ).substring(0, 50))
                        }
                        function rr(a) {
                            this.message = a
                        }
                        function sb(a, c) {
                            if (Se(a)) {
                                var b = c.oa;
                                if (b) {
                                    var d = b.split(":");
                                    b = d[1];
                                    d = Xj(vf(d[0]));
                                    if ("1" === b || d) 
                                        return
                                    
                                }
                                b = sr(a);
                                1E3 === b.length && b.shift();
                                b.push(c)
                            }
                        }
                        function Te(a, c) {
                            return -1 < zc(R(a).href, "_ym_debug=" + c)
                        }
                        function ei(a, c, b) {
                            sg(a, "metrika_enabled", "1", 0, c, b, !0);
                            var d = Yj(a);
                            (d = d && d.metrika_enabled) && Zj(a, "metrika_enabled", c, b, !0);
                            return !! d
                        }
                        function sg(a, c, b, d, e, f, g) {
                            void 0 === g && (g =! 1);
                            if (fi(a, ue, c)) {
                                var h = c + "=" + encodeURIComponent(b) + ";";
                                h += "" + tr(a);
                                if (d) {
                                    var k = new Date;
                                    k.setTime(k.getTime() + 6E4 * d);
                                    h += "expires=" + k.toUTCString() + ";"
                                }
                                e && (d = e.replace(ur, ""), h += "domain=" + d + ";");
                                try {
                                    a.document.cookie = h + ("path=" + (
                                        f || "/"
                                    )),
                                    g || (ak(a)[c] = b)
                                } catch (l) {}
                            }
                        }
                        function ue(a, c) {
                            var b = ak(a);
                            return b ? b[c] || null : null
                        }
                        function Yj(a) {
                            try {
                                var c = a.document.cookie;
                                if (!ja(c)) {
                                    var b = {};
                                    y(function (d) {
                                        d = d.split("=");
                                        var e = d[1];
                                        b[cb(d[0])] = cb(bk(e))
                                    }, (c || "").split(";"));
                                    return b
                                }
                            } catch (d) {}
                            return null
                        }
                        function fi(a, c, b) {
                            return ! tg.length || K(b, Rd) ? !0 : J(function (d, e) {
                                return d && e(a, c, b)
                            }, !0, tg)
                        }
                        function Bc(a) {
                            return a ? w(Oa, Tf(function (c, b) {
                                var d = b[0],
                                    e = b[1];
                                W(e) || ja(e) || c.push(d + "=" + qe(e));
                                return c
                            }, []), xe("&"))(a) : ""
                        }
                        function vr(a) {
                            return a ? w(Tb(function (c) {
                                c = c.split("=");
                                var b = c[1];
                                return [
                                    c[0],
                                    ja(b) ? void 0 : bk(b)
                                ]
                            }), Tf(function (c, b) {
                                c[b[0]] = b[1];
                                return c
                            }, {}))(a.split("&")) : {}
                        }
                        function bk(a) {
                            var c = "";
                            try {
                                c = decodeURIComponent(a)
                            } catch (b) {}
                            return c
                        }
                        function qe(a) {
                            try {
                                return encodeURIComponent(a)
                            } catch (c) {}a = I("", ea(function (c) {
                                return 55296 >= c.charCodeAt(0)
                            }, a.split("")));
                            return encodeURIComponent(a)
                        }
                        function cb(a, c) {
                            if (a) {
                                var b = ck ? ck.call(a) : ("" + a).replace(rj, "");
                                return c && b.length > c ? b.substring(0, c) : b
                            }
                            return ""
                        }
                        function kj(a) {
                            var c = a.match(dk);
                            if (c) {
                                a = c[1];
                                if (c = c[2]) 
                                    return K(c, ug) ? c : !1;
                                
                                if (a) 
                                    return ug[0]
                                
                            }
                            return !1
                        }
                        function R(a) {
                            return J(function (c, b) {
                                var d = n(a, "location." + b);
                                c[b] = d ? "" + d : "";
                                return c
                            }, {}, wr)
                        }
                        function ek(a) {
                            return J(function (c, b) {
                                c[gf[b[0]].ea] = b[1];
                                return c
                            }, {}, Oa(a))
                        }
                        function jc(a) {
                            y(function (c) {
                                var b = c[1];
                                gf[c[0]] = {
                                    ea: b.ea,
                                    Ua: b.Ua
                                }
                            }, Oa(a))
                        }
                        function am(a, c, b, d, e) {
                            var f = "object" === typeof a ? a : {
                                id: a,
                                ca: d,
                                lc: e,
                                R: b
                            };
                            a = J(function (g, h) {
                                var k = h[1],
                                    l = k.Ua;
                                k = f[k.ea];
                                g[h[0]] = l ? l(k) : k;
                                return g
                            }, {}, Oa(c));
                            fj(a, a.R || {});
                            return a
                        }
                        function xr(a) {
                            a = M(a);
                            return kc[a] && kc[a].Si || null
                        }
                        function fk(a) {
                            a = M(a);
                            return kc[a] && kc[a].Ri
                        }
                        function fj(a, c) {
                            var b = M(a),
                                d = n(c, "__ym.turbo_page"),
                                e = n(c, "__ym.turbo_page_id");
                            kc[b] || (kc[b] =
                                {});
                            if (d || e) 
                                kc[b].Ri = d,
                                kc[b].Si = e
                            
                        }
                        function gk(a) {
                            return Ue(a) || wd(a) || /mobile/i.test(lb(a)) || ! W(n(a, "orientation"))
                        }
                        function sf(a, c) {
                            if (Sd(a) && c) {
                                var b = lb(a).match(vg);
                                if (b && b.length) 
                                    return + b[1] >= c
                                
                            }
                            return !1
                        }
                        function tf(a, c) {
                            var b = lb(a);
                            return b && (b = b.match(yr)) && 1 < b.length ? Ha(b[1]) >= c : !1
                        }
                        function lg(a) {
                            return K("prerender", A(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
                        }
                        function Wa(a, c, b) {
                            var d = W(b);
                            W(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                            return a.Math.floor(a.Math.random() * (c - d)) + d
                        }
                        function zr() {
                            var a = Ja(arguments),
                                c = a[0];
                            for (a = a.slice(1); a.length;) {
                                var b = a.shift(),
                                    d;
                                for (d in b) 
                                    Qc(b, d) && (c[d] = b[d]);
                                
                                Qc(b, "toString") && (c.toString = b.toString)
                            }
                            return c
                        }
                        function Ar(a) {
                            return function (c) {
                                return c ? a(c) : []
                            }
                        }
                        function hk(a) {
                            return W(a) ? [] : wg(function (c, b) {
                                c.push([
                                    b, a[b]
                                ]);
                                return c
                            }, [], ik(a))
                        }
                        function ik(a) {
                            var c = [],
                                b;
                            for (b in a) 
                                Qc(a, b) && c.push(b);
                            
                            return c
                        }
                        function vf(a) {
                            try {
                                return parseInt(a, 10)
                            } catch (c) {
                                return null
                            }
                        }
                        function ze(a, c) {
                            return a.isFinite(c) && ! a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c)
                        }
                        function Br(a) {
                            for (var c =[], b = a.length - 1; 0 <= b; -- b) 
                                c[a.length - 1 - b] = a[b];
                            
                            return c
                        }
                        function ra(a, c) {
                            y(w(O, Ea("push", a)), c);
                            return a
                        }
                        function xg(a, c) {
                            return Array.prototype.sort.call(c, a)
                        }
                        function Id(a) {
                            return a.splice(0, a.length)
                        }
                        function Ba(a) {
                            return a ? ca(a) ? a : Ve ? Ve(a) : "number" === typeof a.length && 0 <= a.length ? jk(a) : [] : []
                        }
                        function Cr(a, c) {
                            for (var b = 0; b < c.length; b += 1) 
                                if (b in c && a.call(c, c[b], b)) 
                                    return !0;
                                
                            
                            return !1
                        }
                        function Dr(a, c) {
                            return J(function (b, d, e) {
                                d = a(d, e);
                                return b.concat(ca(d) ? d : [d])
                            }, [], c)
                        }
                        function kk(a, c) {
                            return J(function (b, d, e) {
                                b.push(a(d, e));
                                return b
                            }, [], c)
                        }
                        function Er(a, c) {
                            if (! Sd(a)) 
                                return !0;
                            
                            try {
                                c.call({
                                    0: !0,
                                    length: -Math.pow(2, 32) + 1
                                }, function () {
                                    throw 1;
                                })
                            } catch (b) {
                                return !1
                            }
                            return !0
                        }
                        function Fr(a, c) {
                            for (var b = "", d = 0; d < c.length; d += 1) 
                                b += "" + (
                                d ? a : ""
                            ) + c[d];
                            
                            return b
                        }
                        function Gr(a, c) {
                            return 1 <= lk(Aa(a), c).length
                        }
                        function Hr(a, c) {
                            for (var b = 0; b < c.length; b += 1) 
                                if (a.call(c, c[b], b)) 
                                    return c[b]
                                
                            
                        }
                        function lk(a, c) {
                            return wg(function (b, d, e) {
                                a(d, e) && b.push(d);
                                return b
                            }, [], c)
                        }
                        function vd(a, c, b) {
                            return b ? a : c
                        }
                        function Ir(a, c) {
                            return J(function (b, d, e) {
                                return b ? !! a(d, e) : !1
                            }, !0, c)
                        }
                        function Xf(a, c, b) {
                            try {
                                if (T(c)) {
                                    var d = Ja(arguments).slice(3);
                                    ja(b) ? c.apply(null, d) : c.apply(b, d)
                                }
                            } catch (e) {
                                Kd(a, u(e, Ua), 0)
                            }
                        }
                        function Ua(a) {
                            throw a;
                        }
                        function Kd(a, c, b) {
                            return Cc("setTimeout", a)(c, b)
                        }
                        function ka(a, c) {
                            return Cc("clearTimeout", a)(c)
                        }
                        function Dd() {
                            return []
                        }
                        function Gc() {
                            return {}
                        }
                        function Cc(a, c) {
                            var b = n(c, a),
                                d = n(c, "constructor.prototype." + a) || b;
                            try {
                                if (d && d.apply) 
                                    return function () {
                                        return d.apply(c, arguments)
                                    }
                                
                            } catch (e) {
                                return b
                            }
                            return d
                        }
                        function mb(a, c, b) {
                            return function () {
                                var d = H(arguments[0]),
                                    e = b ? "global" : "m1261",
                                    f = d.C(e, {}),
                                    g = n(f, a);
                                g || (g = v(c), f[a] = g, d.D(e, f));
                                return g.apply(null, arguments)
                            }
                        }
                        function od(a, c) {
                            void 0 === c && (c =
                                {});
                            if (! a || 1 > a.length) 
                                return c;
                            
                            J(function (b, d, e) {
                                if (e === a.length - 1) 
                                    return b;
                                
                                e === a.length - 2 ? b[d] = a[e + 1] : Qc(b, d) || (b[d] =
                                    {});
                                return b[d]
                            }, c, a);
                            return c
                        }
                        function Td(a) {
                            a = a.Ya = a.Ya || {};
                            var c = a._metrika = a._metrika || {};
                            return {
                                Ca: function (b, d) {
                                    yg.call(c, b) || (c[b] = d);
                                    return this
                                },
                                D: function (b, d) {
                                    c[b] = d;
                                    return this
                                },
                                C: function (b, d) {
                                    var e = c[b];
                                    return yg.call(c, b) || W(d) ? e : d
                                }
                            }
                        }
                        function Qc(a, c) {
                            return ja(a) ? !1 : yg.call(a, c)
                        }
                        function v(a, c) {
                            var b = [],
                                d = [];
                            var e = c ? c : O;
                            return function () {
                                var f = Ja(arguments),
                                    g = e.apply(void 0, f),
                                    h = hf(g, d);
                                if (-1 !== h) 
                                    return b[h];
                                
                                f = a.apply(void 0, f);
                                b.push(f);
                                d.push(g);
                                return f
                            }
                        }
                        function Nb(a) {
                            if (zg) 
                                return zg;
                            
                            var c = !1;
                            try {
                                c = [].indexOf && 0 === [void 0].indexOf(void 0)
                            } catch (d) {}
                            var b = a.Array && a.Array.prototype && na(a.Array.prototype.indexOf, "indexOf");
                            a = void 0;
                            return zg = a = c && b ? function (d, e) {
                                return b.call(e, d)
                            } : Jr
                        }
                        function Jr(a, c) {
                            for (var b = 0; b < c.length; b += 1) 
                                if (c[b] === a) 
                                    return b;
                                
                            
                            return -1
                        }
                        function ia(a, c) {
                            return c ? a(c) : a()
                        }
                        function w() {
                            var a = Ja(arguments),
                                c = a.shift();
                            return function () {
                                var b = c.apply(void 0, arguments);
                                return J(mk, b, a)
                            }
                        }
                        function Tf(a, c) {
                            return C([
                                a, c
                            ], J)
                        }
                        function wg(a, c, b) {
                            for (var d = 0, e = b.length; d < e;) 
                                c = a(c, b[d], d),
                                d += 1;
                            
                            return c
                        }
                        function eb(a) {
                            return Ea("test", a)
                        }
                        function Ea(a, c) {
                            return G(c[a], c)
                        }
                        function u(a, c) {
                            return G(c, null, a)
                        }
                        function C(a, c) {
                            return G.apply(void 0, Ag([
                                c, null
                            ], a))
                        }
                        function Kr(a) {
                            return function () {
                                var c = Ja(arguments);
                                return a.apply(c[0], [c[1]].concat(c.slice(2)))
                            }
                        }
                        function Lr() {
                            var a = Ja(arguments),
                                c = a[0],
                                b = a[1],
                                d = a.slice(2);
                            return function () {
                                var e = Ag(d, Ja(arguments));
                                if (Function.prototype.call) 
                                    return Function.prototype.call.apply(c, Ag([b], e));
                                
                                if (b) {
                                    for (var f = "_b"; b[f];) 
                                        f += "_" + f.length;
                                    
                                    b[f] = c;
                                    e = b[f] && nk(f, e, b);
                                    delete b[f];
                                    return e
                                }
                                return nk(c, e)
                            }
                        }
                        function nk(a, c, b) {
                            void 0 === c && (c =[]);
                            b = b || {};
                            var d = c.length,
                                e = a;
                            T(e) && (e = "d", b[e] = a);
                            var f;
                            d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                            return f
                        }
                        function Ja(a) {
                            if (Ve) 
                                try {
                                    return Ve(a)
                                }
                             catch (c) {}
                            return jk(a)
                        }
                        function jk(a) {
                            for (var c = a.length, b =[], d = 0; d < c; d += 1) 
                                b.push(a[d]);
                            
                            return b
                        }
                        function pa(a) {
                            return ! Va(a) && ! W(a) && "[object Object]" === Object.prototype.toString.call(a)
                        }
                        function ja(a) {
                            return W(a) || Va(a)
                        }
                        function T(a) {
                            return "function" === typeof a
                        }
                        function tb(a) {
                            return function (c) {
                                return function (b) {
                                    return a(b, c)
                                }
                            }
                        }
                        function sa(a) {
                            return function (c) {
                                return function (b) {
                                    return a(c, b)
                                }
                            }
                        }
                        function mk(a, c) {
                            return c(a)
                        }
                        function mq(a) {
                            return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(ag, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
                        }
                        function Mr(a) {
                            return "" + a
                        }
                        function bb(a, c) {
                            return !(! a || -1 === hb(a, c))
                        }
                        function zc(a, c) {
                            return hb(a, c)
                        }
                        function Nr(a, c) {
                            for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
                                b = a[e] === c[b] ? b + 1 : 0;
                                if (b === c.length) 
                                    return e - c.length + 1;
                                
                                if (! b && e > d) 
                                    break
                                
                            }
                            return -1
                        }
                        function ma(a) {
                            return "string" === typeof a
                        }
                        function na(a, c) {
                            return Da(c, a) && a
                        }
                        function Da(a, c) {
                            var b = We(a, c);
                            c && ! b && Bg.push([a, c]);
                            return b
                        }
                        function We(a, c) {
                            if (! c || "function" !== typeof c) 
                                return !1;
                            
                            try {
                                var b = "" + c
                            } catch (h) {
                                return !1
                            }
                            var d = b.length;
                            if (d > 35 + a.length) 
                                return !1;
                            
                            for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                                f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                                if (12 === f) 
                                    return !0;
                                
                                if (! f && g > e) 
                                    break
                                
                            }
                            return !1
                        }
                        function E() {}
                        function Cg(a, c) {
                            Cg = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function (b, d) {
                                b.__proto__ = d
                            } || function (b, d) {
                                for (var e in d) 
                                    d.hasOwnProperty(e) && (b[e] = d[e])
                                
                            };
                            return Cg(a, c)
                        }
                        function Dc(a) {
                            return ! a
                        }
                        function Za(a, c) {
                            return c
                        }
                        function O(a) {
                            return a
                        }
                        function Na(a, c) {
                            function b() {
                                this.constructor = a
                            }
                            Cg(a, c);
                            a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
                        }
                        function Ag() {
                            for (var a = 0, c = 0, b = arguments.length; c < b; c++) 
                                a += arguments[c].length;
                            
                            a = Array(a);
                            var d = 0;
                            for (c = 0; c < b; c++) 
                                for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d ++) 
                                    a[d] = e[f];
                                
                            
                            return a
                        }
                        function n(a, c) {
                            return a ? J(function (b, d) {
                                if (ja(b)) 
                                    return b;
                                
                                try {
                                    return b[d]
                                } catch (e) {}
                                return null
                            }, a, c.split(".")) : null
                        }
                        function Or(a) {
                            return "[object Array]" === Object.prototype.toString.call(a)
                        }
                        function Pr() {}
                        function Qr(a, c) {
                            return function () {
                                a.apply(c, arguments)
                            }
                        }
                        function La(a) {
                            if (!(this instanceof La)) 
                                throw new TypeError("Promises must be constructed via new");
                            
                            if ("function" !== typeof a) 
                                throw new TypeError("not a function");
                            
                            this.Ma = 0;
                            this.Ie = !1;
                            this.Qa = void 0;
                            this.Bb = [];
                            ok(a, this)
                        }
                        function pk(a, c) {
                            for (; 3 === a.Ma;) 
                                a = a.Qa;
                            
                            0 === a.Ma ? a.Bb.push(c) : (a.Ie =! 0, La.Je(function () {
                                var b = 1 === a.Ma ? c.li : c.ri;
                                if (null === b) 
                                    (1 === a.Ma ? Dg : Ud)(c.promise, a.Qa);
                                 else {
                                    try {
                                        var d = b(a.Qa)
                                    } catch (e) {
                                        Ud(c.promise, e);
                                        return
                                    }
                                    Dg(c.promise, d)
                                }
                            }))
                        }
                        function Dg(a, c) {
                            try {
                                if (c === a) 
                                    throw new TypeError("A promise cannot be resolved with itself.");
                                
                                if (c && ("object" === typeof c || "function" === typeof c)) {
                                    var b = c.then;
                                    if (c instanceof La) {
                                        a.Ma = 3;
                                        a.Qa = c;
                                        Eg(a);
                                        return
                                    }
                                    if ("function" === typeof b) {
                                        ok(Qr(b, c), a);
                                        return
                                    }
                                }
                                a.Ma = 1;
                                a.Qa = c;
                                Eg(a)
                            } catch (d) {
                                Ud(a, d)
                            }
                        }
                        function Ud(a, c) {
                            a.Ma = 2;
                            a.Qa = c;
                            Eg(a)
                        }
                        function Eg(a) {
                            2 === a.Ma && 0 === a.Bb.length && La.Je(function () {
                                a.Ie || La.xg(a.Qa)
                            });
                            for (var c = 0, b = a.Bb.length; c < b; c++) 
                                pk(a, a.Bb[c]);
                            
                            a.Bb = null
                        }
                        function Rr(a, c, b) {
                            this.li = "function" === typeof a ? a : null;
                            this.ri = "function" === typeof c ? c : null;
                            this.promise = b
                        }
                        function ok(a, c) {
                            var b = !1;
                            try {
                                a(function (d) {
                                    b || (b =! 0, Dg(c, d))
                                }, function (d) {
                                    b || (b =! 0, Ud(c, d))
                                })
                            } catch (d) {
                                b || (b =! 0, Ud(c, d))
                            }
                        }
                        function Zj(a, c, b, d, e) {
                            void 0 === e && (e =! 1);
                            return sg(a, c, "", -100, b, d, e)
                        }
                        function Lc(a, c, b) {
                            void 0 === c && (c = "_ym_");
                            void 0 === b && (b = "");
                            var d = Sr(a),
                                e = 1 === (d || "").split(".").length ? d : "." + d,
                                f = b ? "_" + b : "";
                            return {
                                Gb: function (g, h, k) {
                                    Zj(a, "" + c + g + f, h || e, k);
                                    return this
                                },
                                C: function (g) {
                                    return ue(a, "" + c + g + f)
                                },
                                D: function (g, h, k, l, m) {
                                    sg(a, "" + c + g + f, h, k, l || e, m);
                                    return this
                                }
                            }
                        }
                        function yb(a, c) {
                            if (! c) 
                                return null;
                            
                            try {
                                return a.JSON.parse(c)
                            } catch (b) {
                                return null
                            }
                        }
                        function dc(a) {
                            a = "" + a;
                            for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) 
                                c ^= a.charCodeAt(d),
                                c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                            
                            return c >>> 0
                        }
                        function bm(a, c, b, d) {
                            var e = qk[b];
                            return e ? function () {
                                var f = Ja(arguments);
                                try {
                                    var g = d.apply(void 0, f);
                                    var h = H(a);
                                    h.Ca("mt", {});
                                    var k = h.C("mt"),
                                        l = k[e];
                                    k[e] = l ? l + 1 : 1
                                } catch (m) {
                                    Ua(m)
                                }
                                return g
                            } : d
                        }
                        function Nc(a, c) {
                            var b = Tr(a);
                            return b ? (b.href = c, {
                                protocol: b.protocol,
                                host: b.host,
                                port: b.port,
                                hostname: b.hostname,
                                hash: b.hash,
                                search: b.search,
                                query: b.search.replace(/^\?/, ""),
                                pathname: b.pathname || "/",
                                path: (b.pathname || "/") + b.search,
                                href: b.href
                            }) : {}
                        }
                        function rk(a) {
                            return(a = R(a).hash.split("#")[1]) ? a.split("?")[0] : ""
                        }
                        function Ur(a, c) {
                            var b = rk(a);
                            sk = lr(a, function () {
                                var d = rk(a);
                                d !== b && (c(), b = d)
                            }, 200, "t.h");
                            return G(kr, null, a, sk)
                        }
                        function Vr(a, c, b, d) {
                            var e,
                                f,
                                g = c.ca,
                                h = c.Fe,
                                k = c.xc,
                                l = H(a),
                                m = Ka((e =
                                    {}, e.wh = 1, e.pv = 1, e));
                            e = n(d, "isTrusted");
                            d && ! ja(e) && m.D("ite", Ab(e));
                            fe(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
                            h && m.D("ut", "1");
                            g = l.C("lastReferrer");
                            d = R(a).href;
                            k = {
                                J: (f =
                                    {}, f["page-url"] = k || d, f["page-ref"] = g, f),
                                K: m
                            };
                            b(k, c)["catch"](D(a, "g.s"));
                            l.D("lastReferrer", d)
                        }
                        function Wr(a, c, b) {
                            function d() {
                                q || (r =! 0, t =! 1, q =! 0, f())
                            }
                            function e() {
                                m = !0;
                                k(!1);
                                c()
                            }
                            function f() {
                                ka(a, l);
                                if (m) 
                                    k(!1);
                                 else {
                                    var N = Math.max(0, b - (t ? x : x + p(Y) - F));
                                    N ? l = Q(a, e, N, "u.t.d.c") : e()
                                }
                            }
                            function g() {
                                t = r = q = !0;
                                x += p(Y) - F;
                                F = p(Y);
                                f()
                            }
                            function h() {
                                r || q || (x = 0);
                                F = p(Y);
                                r = q = !0;
                                t = !1;
                                f()
                            }
                            function k(N) {
                                N = N ? U.F : U.xb;
                                N(a, ["blur"], g);
                                N(a, ["focus"], h);
                                N(a.document, [
                                    "click", "mousemove", "keydown", "scroll"
                                ], d)
                            }
                            var l = 0,
                                m = !1;
                            if (jg(a)) 
                                return l = Q(a, c, b, "u.t.d"),
                                C([
                                    a, l
                                ], ka);
                            
                            var p = ha(a),
                                r = !1,
                                q = !1,
                                t = !0,
                                x = 0,
                                F = p(Y),
                                U = fa(a);
                            k(!0);
                            f();
                            return function () {
                                ka(a, l);
                                k(!1)
                            }
                        }
                        function ff(a, c, b, d) {
                            return function () {
                                if (za(a, c)) {
                                    var e = Ja(arguments);
                                    return d.apply(void 0, e)
                                }
                            }
                        }
                        function ub(a, c) {
                            a = [
                                a[0] >>> 16,
                                a[0] & 65535,
                                a[1] >>> 16,
                                a[1] & 65535
                            ];
                            c = [
                                c[0] >>> 16,
                                c[0] & 65535,
                                c[1] >>> 16,
                                c[1] & 65535
                            ];
                            var b = [0, 0, 0, 0];
                            b[3] += a[3] * c[3];
                            b[2] += b[3] >>> 16;
                            b[3] &= 65535;
                            b[2] += a[2] * c[3];
                            b[1] += b[2] >>> 16;
                            b[2] &= 65535;
                            b[2] += a[3] * c[2];
                            b[1] += b[2] >>> 16;
                            b[2] &= 65535;
                            b[1] += a[1] * c[3];
                            b[0] += b[1] >>> 16;
                            b[1] &= 65535;
                            b[1] += a[2] * c[2];
                            b[0] += b[1] >>> 16;
                            b[1] &= 65535;
                            b[1] += a[3] * c[1];
                            b[0] += b[1] >>> 16;
                            b[1] &= 65535;
                            b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                            b[0] &= 65535;
                            return [
                                b[0] << 16 | b[1],
                                b[2] << 16 | b[3]
                            ]
                        }
                        function lc(a, c) {
                            a = [
                                a[0] >>> 16,
                                a[0] & 65535,
                                a[1] >>> 16,
                                a[1] & 65535
                            ];
                            c = [
                                c[0] >>> 16,
                                c[0] & 65535,
                                c[1] >>> 16,
                                c[1] & 65535
                            ];
                            var b = [0, 0, 0, 0];
                            b[3] += a[3] + c[3];
                            b[2] += b[3] >>> 16;
                            b[3] &= 65535;
                            b[2] += a[2] + c[2];
                            b[1] += b[2] >>> 16;
                            b[2] &= 65535;
                            b[1] += a[1] + c[1];
                            b[0] += b[1] >>> 16;
                            b[1] &= 65535;
                            b[0] += a[0] + c[0];
                            b[0] &= 65535;
                            return [
                                b[0] << 16 | b[1],
                                b[2] << 16 | b[3]
                            ]
                        }
                        function Wc(a, c) {
                            c %= 64;
                            if (32 === c) 
                                return [
                                    a[1], a[0]
                                ];
                            
                            if (32 > c) 
                                return [
                                    a[0] << c | a[1] >>> 32 - c,
                                    a[1] << c | a[0] >>> 32 - c
                                ];
                            
                            c -= 32;
                            return [
                                a[1] << c | a[0] >>> 32 - c,
                                a[0] << c | a[1] >>> 32 - c
                            ]
                        }
                        function nb(a, c) {
                            c %= 64;
                            return 0 === c ? a : 32 > c ? [
                                a[0] << c | a[1] >>> 32 - c,
                                a[1] << c
                            ] : [
                                a[1] << c - 32,
                                0
                            ]
                        }
                        function xa(a, c) {
                            return [
                                a[0] ^ c[0],
                                a[1] ^ c[1]
                            ]
                        }
                        function tk(a) {
                            a = xa(a, [
                                0, a[0] >>> 1
                            ]);
                            a = ub(a, [4283543511, 3981806797]);
                            a = xa(a, [
                                0, a[0] >>> 1
                            ]);
                            a = ub(a, [3301882366, 444984403]);
                            return a = xa(a, [
                                0, a[0] >>> 1
                            ])
                        }
                        function Xr(a, c) {
                            void 0 === c && (c = 210);
                            var b = a || "",
                                d = c || 0,
                                e = b.length - b.length % 16;
                            d = {
                                V: [
                                    0, d
                                ],
                                X: [0, d]
                            };
                            for (var f = 0; f < e; f += 16) {
                                var g = d,
                                    h = [
                                        a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24,
                                        a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24
                                    ],
                                    k = [
                                        a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24,
                                        a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24
                                    ];
                                h = ub(h, Xe);
                                h = Wc(h, 31);
                                h = ub(h, Ye);
                                g.V = xa(g.V, h);
                                g.V = Wc(g.V, 27);
                                g.V = lc(g.V, g.X);
                                g.V = lc(ub(g.V, [0, 5]), [0, 1390208809]);
                                k = ub(k, Ye);
                                k = Wc(k, 33);
                                k = ub(k, Xe);
                                g.X = xa(g.X, k);
                                g.X = Wc(g.X, 31);
                                g.X = lc(g.X, g.V);
                                g.X = lc(ub(g.X, [0, 5]), [0, 944331445])
                            }
                            e = b.length % 16;
                            f = b.length - e;
                            g = [0, 0];
                            h = [0, 0];
                            switch (e) {
                                case 15:
                                    h = xa(h, nb([
                                        0, b.charCodeAt(f + 14)
                                    ], 48));
                                case 14:
                                    h = xa(h, nb([
                                        0, b.charCodeAt(f + 13)
                                    ], 40));
                                case 13:
                                    h = xa(h, nb([
                                        0, b.charCodeAt(f + 12)
                                    ], 32));
                                case 12:
                                    h = xa(h, nb([
                                        0, b.charCodeAt(f + 11)
                                    ], 24));
                                case 11:
                                    h = xa(h, nb([
                                        0, b.charCodeAt(f + 10)
                                    ], 16));
                                case 10:
                                    h = xa(h, nb([
                                        0, b.charCodeAt(f + 9)
                                    ], 8));
                                case 9:
                                    h = xa(h, [
                                        0, b.charCodeAt(f + 8)
                                    ]),
                                    h = ub(h, Ye),
                                    h = Wc(h, 33),
                                    h = ub(h, Xe),
                                    d.X = xa(d.X, h);
                                case 8:
                                    g = xa(g, nb([
                                        0, b.charCodeAt(f + 7)
                                    ], 56));
                                case 7:
                                    g = xa(g, nb([
                                        0, b.charCodeAt(f + 6)
                                    ], 48));
                                case 6:
                                    g = xa(g, nb([
                                        0, b.charCodeAt(f + 5)
                                    ], 40));
                                case 5:
                                    g = xa(g, nb([
                                        0, b.charCodeAt(f + 4)
                                    ], 32));
                                case 4:
                                    g = xa(g, nb([
                                        0, b.charCodeAt(f + 3)
                                    ], 24));
                                case 3:
                                    g = xa(g, nb([
                                        0, b.charCodeAt(f + 2)
                                    ], 16));
                                case 2:
                                    g = xa(g, nb([
                                        0, b.charCodeAt(f + 1)
                                    ], 8));
                                case 1:
                                    g = xa(g, [0, b.charCodeAt(f)]),
                                    g = ub(g, Xe),
                                    g = Wc(g, 31),
                                    g = ub(g, Ye),
                                    d.V = xa(d.V, g)
                            }
                            d.V = xa(d.V, [0, b.length]);
                            d.X = xa(d.X, [0, b.length]);
                            d.V = lc(d.V, d.X);
                            d.X = lc(d.X, d.V);
                            d.V = tk(d.V);
                            d.X = tk(d.X);
                            d.V = lc(d.V, d.X);
                            d.X = lc(d.X, d.V);
                            return("00000000" + (
                                d.V[0] >>> 0
                            ).toString(16)).slice(-8) + ("00000000" + (
                                d.V[1] >>> 0
                            ).toString(16)).slice(-8) + ("00000000" + (
                                d.X[0] >>> 0
                            ).toString(16)).slice(-8) + ("00000000" + (
                                d.X[1] >>> 0
                            ).toString(16)).slice(-8)
                        }
                        function Vd(a, c, b) {
                            var d = c.getAttribute("itemtype");
                            b = jb('[itemprop~="' + b + '"]', c);
                            return d ? ea(function (e) {
                                return e.parentNode && ic("[itemtype]", a, e.parentNode) === c
                            }, b) : b
                        }
                        function fb(a, c, b) {
                            return(a = Vd(a, c, b)) && a.length ? a[0] : null
                        }
                        function $a(a) {
                            if (! a) 
                                return "";
                            
                            a = ca(a) ? a : [a];
                            return a.length ? a[0].getAttribute("content") || Jb(a[0]) : ""
                        }
                        function uk(a) {
                            return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : $a(a) : ""
                        }
                        function sd(a, c, b) {
                            a = c && (bb(c.className, "ym-disable-keys") || bb(c.className, "-metrika-nokeys"));
                            return b && c ? a || !! Xq([
                                "ym-disable-keys", "-metrika-nokeys"
                            ], c).length : a
                        }
                        function Ef(a, c) {
                            return Pe(c) ? "password" === c.type || c.name && K(c.name.toLowerCase(), vk) || c.id && K(c.id.toLowerCase(), vk) : !1
                        }
                        function wk(a, c) {
                            var b = Math.max(0, Math.min(c, 65535));
                            ra(a, [
                                b >> 8,
                                b & 255
                            ])
                        }
                        function Sb(a, c) {
                            ra(a, [c & 255])
                        }
                        function kb(a, c, b) {
                            return -1 !== Nb(a)(b, Yr) ? (Sb(c, b), !1) : !0
                        }
                        function S(a, c) {
                            for (var b = Math.max(0, c | 0); 127 < b;) 
                                ra(a, [b & 127 | 128]),
                                b >>= 7;
                            
                            ra(a, [b])
                        }
                        function Fg(a, c) {
                            S(a, c.length);
                            for (var b = 0; b < c.length; b += 1) 
                                S(a, c.charCodeAt(b))
                            
                        }
                        function Gg(a, c) {
                            var b = c;
                            255 < b.length && (b = b.substr(0, 255));
                            a.push(b.length);
                            for (var d = 0; d < b.length; d += 1) 
                                wk(a, b.charCodeAt(d))
                            
                        }
                        function Zr(a, c) {
                            var b = [];
                            if (kb(a, b, 27)) 
                                return [];
                            
                            S(b, c);
                            return b
                        }
                        function $r(a, c) {
                            var b = Ma(c);
                            if (! b) 
                                return c[Xa] = -1,
                                null;
                            
                            var d = + c[Xa];
                            if (!isFinite(d) || 0 >= d) 
                                return null;
                            
                            if (c.attributes) 
                                for (var e = c; e;) {
                                    if (e.attributes.lj) 
                                        return null;
                                    
                                    e = e.parentElement
                                }
                            
                            e = 64;
                            var f = Ne(a, c),
                                g = f && f[Xa] ? f[Xa] : 0;
                            0 > g && (g = 0);
                            b = (b || "").toUpperCase();
                            var h = as()[b];
                            h || (e |= 2);
                            var k = Aj(a, c);
                            k || (e |= 4);
                            var l = If(a, c);
                            (f = f ? If(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                            uc[d].xf = l[0] + "x" + l[1];
                            uc[d].size = l[2] + "x" + l[3];
                            c.id && "string" === typeof c.id && (e |= 32);
                            f = [];
                            if (kb(a, f, 1)) 
                                return null;
                            
                            S(f, d);
                            Sb(f, e);
                            S(f, g);
                            h ? Sb(f, h) : Gg(f, b);
                            k && S(f, k);
                            e & 8 || (S(f, l[0]), S(f, l[1]), S(f, l[2]), S(f, l[3]));
                            e & 32 && Gg(f, c.id);
                            Sb(f, 0);
                            return f
                        }
                        function bs(a, c) {
                            var b = c[Xa];
                            if (! b || 0 > b || ! Gf(c) || ! c.form || ci(a, c.form)) 
                                return [];
                            
                            var d = Cj(a, c.form);
                            if (0 > d) 
                                return [];
                            
                            if (Pe(c)) {
                                var e = {
                                    text: 0,
                                    color: 0,
                                    qc: 0,
                                    pj: 0,
                                    "datetime-local": 0,
                                    email: 0,
                                    uf: 0,
                                    Fj: 0,
                                    search: 0,
                                    Kj: 0,
                                    time: 0,
                                    url: 0,
                                    month: 0,
                                    Mj: 0,
                                    password: 2,
                                    Ej: 3,
                                    nj: 4,
                                    file: 6,
                                    image: 7
                                };
                                e = e[c.type]
                            } else {
                                e = {
                                    ij: 1,
                                    jj: 5
                                };
                                var f = Ma(c);
                                e = W(f) ? "" : e[f]
                            }
                            if ("number" !== typeof e) 
                                return [];
                            
                            f = -1;
                            for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1) 
                                if (g[k].name === c.name) {
                                    if (g[k] === c) {
                                        f = l;
                                        break
                                    }
                                    l += 1
                                }
                            
                            if (0 > f) 
                                return [];
                            
                            g = [];
                            if (kb(a, g, 7)) 
                                return [];
                            
                            S(g, b);
                            S(g, d);
                            S(g, e);
                            Fg(g, c.name || "");
                            S(g, f);
                            return g
                        }
                        function tc(a, c, b) {
                            void 0 === b && (b =[]);
                            for (var d =[]; c && ! bo(a, c, b); c = Ne(a, c)) 
                                d.push(c);
                            
                            y(function (e) {
                                uc.counter += 1;
                                var f = uc.counter;
                                e[Xa] = f;
                                uc[f] = {};
                                f = $r(a, e);
                                e = bs(a, e);
                                f && e && (ra(b, f), ra(b, e))
                            }, cs(d));
                            return b
                        }
                        function ds(a) {
                            var c = a.qa;
                            if (! rd || c && ! c.fromElement) 
                                return $h(a)
                            
                        }
                        function es(a) {
                            var c = a.qa;
                            if (c && ! c.toElement) 
                                return Hf(a)
                            
                        }
                        function xk(a) {
                            var c = Fc(a.qa);
                            if (c && te(c)) {
                                var b = Zh(a, c),
                                    d = b.concat;
                                var e = Bb(a.l),
                                    f = [];
                                kb(a.l, f, 17) ? a = [] : (S(f, e), S(f, c[Xa]), a = f);
                                return d.call(b, a)
                            }
                        }
                        function yk(a) {
                            var c = a.l,
                                b = a.qa.target;
                            if (b && te(b)) {
                                c = tc(c, b);
                                var d = c.concat;
                                var e = Bb(a.l),
                                    f = [];
                                kb(a.l, f, 18) ? a = [] : (S(f, e), S(f, b[Xa]), a = f);
                                return d.call(c, a)
                            }
                        }
                        function zk(a) {
                            var c = a.l,
                                b = Fc(a.qa);
                            if (! b || Ef(c, b) || sd(c, b)) 
                                return [];
                            
                            if (Gf(b)) {
                                var d = H(c).C("isEU"),
                                    e = Oc(c, b, d),
                                    f = e.Va;
                                d = e.qb;
                                e = e.hb;
                                if (Qe(b)) 
                                    var g = b.checked;
                                 else 
                                    g = b.value,
                                    g = f ? I("", Ak(g.split(""))) : g;
                                 c = tc(c, b);
                                f = c.concat;
                                var h = Bb(a.l);
                                d = d && ! e;
                                e = [];
                                kb(a.l, e, 39) ? a = [] : (S(e, h), S(e, b[Xa]), Gg(e, String(g)), Sb(e, d ? 1 : 0), a = e);
                                return f.call(c, a)
                            }
                        }
                        function Ze(a) {
                            var c = a.l,
                                b = a.qa,
                                d = Fc(b);
                            if (! d || "SCROLLBAR" === d.nodeName) 
                                return [];
                            
                            var e = [],
                                f = u(e, ra);
                            d && te(d) ? f(Zh(a, d)) : f(tc(c, d));
                            var g = $i(c, b);
                            f = e.concat;
                            a = Bb(a.l);
                            var h = b.type,
                                k = [g.x, g.y];
                            g = b.which;
                            b = b.button;
                            var l;
                            var m = Oe(c, d);
                            var p = m[0];
                            for (m = m[1]; d && (! p || ! m);) 
                                if (d = Ne(c, d)) 
                                    m = Oe(c, d),
                                    p = m[0],
                                    m = m[1];
                                
                            
                            d ? (p = d[Xa], ! p || 0 > p ? c =[] : (m =( l =
                                {}, l.mousemove = 2, l.click = 32, l.dblclick = 33, l.mousedown = 4, l.mouseup = 30, l.touch = 12, l)[h]) ? (l =[], d = ig(c, d), kb(c, l, m) ? c =[] : (S(l, a), S(l, p), S(l, Math.max(0, k[0] - d.left)), S(l, Math.max(0, k[1] - d.top)), /^mouse(up|down)|click$/.test(h) && (c = g || b, Sb(l, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = l)) : c =[]) : c = [];
                            return f.call(e, c)
                        }
                        function fs(a) {
                            var c = null,
                                b = a.l,
                                d = b.document;
                            if (b.getSelection) {
                                d = void 0;
                                try {
                                    d = b.getSelection()
                                } catch (g) {
                                    return []
                                }
                                if (Va(d)) 
                                    return [];
                                
                                var e = "" + d;
                                c = d.anchorNode
                            } else 
                                d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                            
                            if ("string" !== typeof e) 
                                return [];
                            
                            try {
                                for (; c && 1 !== c.nodeType;) 
                                    c = c.parentNode
                                
                            } catch (g) {
                                return []
                            }
                            if (! c) 
                                return [];
                            
                            d = Oc(b, c).Va || sd(b, c, !0);
                            c = c.getElementsByTagName("*");
                            for (var f = 0; f < c.length && ! d;) 
                                d = c[f],
                                d = Oc(b, d).Va || sd(b, d, !0),
                                f += 1;
                            
                            if (e !== Hg) 
                                return Hg = e,
                                d = d ? I("", Ak(e.split(""))) : e,
                                e = Bb(a.l),
                                0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)),
                                c = [],
                                kb(a.l, c, 29) ? a = [] : (S(c, e), Fg(c, b), Fg(c, d), a = c),
                                a
                            
                        }
                        function gs(a) {
                            return Ze(a).concat(fs(a) || [])
                        }
                        function Bk(a) {
                            return(a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
                        }
                        function Ck(a) {
                            var c = [];
                            Ig || (Ig =! 0, Hg && ra(c, Zr(a.l, Bb(a.l))), Qb(a.l, function () {
                                Ig = !1
                            }, "fv.c"));
                            return c
                        }
                        function Dk(a, c, b, d) {
                            c = Fc(c);
                            if (! c || Jf(a, c)) 
                                return [];
                            
                            var e = Oc(a, c),
                                f = e.qb,
                                g = e.hb;
                            e = e.Va;
                            var h = H(a);
                            if (! g && (f && h.C("isEU") || sd(a, c))) 
                                a = [];
                             else {
                                f = tc(a, c);
                                g = f.concat;
                                var k = Bb(a);
                                h = [];
                                if (kb(a, h, 38)) 
                                    a = [];
                                 else {
                                    S(h, k);
                                    wk(h, b);
                                    Sb(h, d);
                                    a = c[Xa];
                                    if (! a || 0 > a) 
                                        a = 0;
                                    
                                    S(h, a);
                                    Sb(h, e ? 1 : 0);
                                    a = h
                                } a = g.call(f, a)
                            }
                            return a
                        }
                        function hs(a) {
                            var c = a.l,
                                b = a.qa,
                                d = b.keyCode,
                                e = Bk(b),
                                f = [],
                                g = u(f, ra);
                            if ({
                                3: 1,
                                8: 1,
                                9: 1,
                                13: 1,
                                16: 1,
                                17: 1,
                                18: 1,
                                19: 1,
                                20: 1,
                                27: 1,
                                33: 1,
                                34: 1,
                                35: 1,
                                36: 1,
                                37: 1,
                                38: 1,
                                39: 1,
                                40: 1,
                                45: 1,
                                46: 1,
                                91: 1,
                                92: 1,
                                93: 1,
                                106: 1,
                                110: 1,
                                111: 1,
                                144: 1,
                                145: 1
                            }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 
                                19 === d && 4 === (e & -17) && (d = 144),
                                g(Dk(c, b, d, e | 16)),
                                Jg = !1,
                                Qb(c, function () {
                                    Jg = !0
                                }, "fv.kd"),
                                !(67 === d && e & 4) || e & 1 || e & 2 || g(Ck(a));
                            
                            return f
                        }
                        function is(a) {
                            var c = a.l;
                            a = a.qa;
                            var b = [];
                            Jg && ! Kg && 0 !== a.which && (ra(b, Dk(c, a, a.charCode || a.keyCode, Bk(a))), Kg =! 0, Qb(c, function () {
                                Kg = !1
                            }, "fv.kp"));
                            return b
                        }
                        function Ek(a) {
                            var c = a.l,
                                b = Fc(a.qa);
                            if (! b || ci(c, b)) 
                                return [];
                            
                            var d = [];
                            if ("FORM" === b.nodeName) {
                                for (var e = b.elements, f = 0; f < e.length; f += 1) 
                                    Bj(e[f]) || ra(d, tc(c, e[f]));
                                
                                a = Bb(a.l);
                                e = Cj(c, b);
                                if (0 > e) 
                                    c = [];
                                 else {
                                    f = b.elements;
                                    var g = f.length;
                                    b = [];
                                    for (var h = 0; h < g; h += 1) 
                                        if (! Bj(f[h])) {
                                            var k = f[h][Xa];
                                            k && 0 < k && b.push(k)
                                        }
                                    
                                    f = [];
                                    if (kb(c, f, 11)) 
                                        c = [];
                                     else {
                                        S(f, a);
                                        S(f, e);
                                        S(f, b.length);
                                        for (c = 0; c < b.length; c += 1) 
                                            S(f, b[c]);
                                        
                                        c = f
                                    }
                                } ra(d, c)
                            }
                            return d
                        }
                        function js(a) {
                            var c = a.flush;
                            a = Fc(a.qa);
                            "BODY" === Ma(a) && c()
                        }
                        function un(a, c) {
                            var b,
                                d = Fc(c),
                                e = Fa.kc,
                                f = Td(a);
                            if (d && fc("ym-advanced-informer", d)) {
                                var g = f.C("ifc", 0) + 1;
                                f.D("ifc", g);
                                g = d.getAttribute("data-lang");
                                var h = Ha(d.getAttribute("data-cid") || "");
                                if (h || 0 === h) 
                                    (e = n(a, "Ya." + e + ".informer")) ? e((b =
                                        {}, b.i = d, b.id = h, b.lang = g, b)) : f.D("ib", !0),
                                    b = c || window.event,
                                    b.preventDefault ? b.preventDefault() : b.returnValue = !1
                                
                            }
                        }
                        function lh(a, c, b, d) {
                            return function () {
                                var e = Ja(arguments);
                                e = d.apply(void 0, e);
                                return W(e) ? za(a, c) : e
                            }
                        }
                        function kh(a, c, b, d) {
                            return D(a, "cm." + b, d)
                        }
                        function $l(a, c, b, d, e) {
                            return b.length && e ? C(J(function (f, g, h) {
                                return b[h] ? f.concat(C([
                                    a, c, d
                                ], g)) : f
                            }, [], b), w)()(e) : e
                        }
                        var Xc = {
                                construct: "Metrika2",
                                callbackPostfix: "2",
                                version: "qfujqr3o4ekpu96fyam058f3",
                                host: "mc.yandex.ru"
                            },
                            Bg = [],
                            ag = /\./g,
                            Fk = na(String.prototype.indexOf, "indexOf"),
                            hb = Fk ? function (a, c) {
                                return Fk.call(a, c)
                            } : Nr,
                            Aa = sa(function (a, c) {
                                return a === c
                            }),
                            nd = sa(function (a, c) {
                                a(c);
                                return c
                            }),
                            Ga = sa(mk),
                            Va = Aa(null),
                            W = Aa(void 0),
                            Ve = na(Array.from, "from"),
                            Gk = na(Function.prototype.bind, "bind"),
                            G = Gk ? Kr(Gk) : Lr,
                            Hk = na(Array.prototype.reduce, "reduce"),
                            J = Hk ? function (a, c, b) {
                                return Hk.call(b, a, c)
                            } : wg,
                            Kq = w,
                            Ce = w(O, ia),
                            zg,
                            hf = Nb(window),
                            Km = tb(hf),
                            yg = Object.prototype.hasOwnProperty,
                            H = v(Td),
                            P = tb(n),
                            Ta = P("length"),
                            Ld = sa(C),
                            Ii = sa(Ea),
                            Ik = na(Array.prototype.every, "every"),
                            Ip = Ik ? function (a, c) {
                                return Ik.call(c, a)
                            } : Ir,
                            Lb = C([
                                1, null
                            ], vd),
                            Ab = C([
                                1, 0
                            ], vd),
                            Fb = Boolean,
                            Jk = na(Array.prototype.filter, "filter"),
                            ea = Jk ? function (a, c) {
                                return Jk.call(c, a)
                            } : lk,
                            ua = u(Fb, ea),
                            ks = sa(ea),
                            Kk = na(Array.prototype.find, "find"),
                            rb = Kk ? function (a, c) {
                                return Kk.call(c, a)
                            } : Hr,
                            Lk = na(Array.prototype.includes, "includes"),
                            K = Lk ? function (a, c, b) {
                                return Lk.call(c, a, b)
                            } : Gr,
                            oc = tb(K),
                            Mk = na(Array.prototype.join, "join"),
                            I = Mk ? function (a, c) {
                                return Mk.call(c, a)
                            } : Fr,
                            xe = sa(I),
                            Nk = v(function (a) {
                                var c = n(a, "navigator") || {};
                                a = n(c, "userAgent") || "";
                                c = n(c, "vendor") || "";
                                return {
                                    lf: -1 < hb(c, "Apple"),
                                    ig: a
                                }
                            }),
                            lb = v(P("navigator.userAgent")),
                            vg = /Firefox\/([0-9]+)/i,
                            Sd = v(function (a) {
                                var c = n(a, "document.documentElement.style"),
                                    b = n(a, "InstallTrigger");
                                a = -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(vg);
                                vg.lastIndex = 0;
                                return !(!(c && "MozAppearance" in c) || ja(b)) || a
                            }),
                            Ok = na(Array.isArray, "isArray"),
                            ca = Ok ? function (a) {
                                return Ok(a)
                            } : Or,
                            Pk = na(Array.prototype.map, "map"),
                            A = Pk && Er(window, Array.prototype.map) ? function (a, c) {
                                return c && 0 < c.length ? Pk.call(c, a) : []
                            } : kk,
                            y = A,
                            Qk = na(Array.prototype.flatMap, "flatMap"),
                            qc = Qk ? function (a, c) {
                                return Qk.call(c, a)
                            } : Dr,
                            Tb = sa(A),
                            mr = tb(A),
                            Rk = na(Array.prototype.some, "some"),
                            Ya = Rk ? function (a, c) {
                                return Rk.call(c, a)
                            } : Cr,
                            Ie = v(Nb),
                            Sc = P("0"),
                            ls = sa(xg),
                            Sk = na(Array.prototype.reverse, "reverse"),
                            cs = Sk ? function (a) {
                                return Sk.call(a)
                            } : Br,
                            Tk = tb(parseInt),
                            Ha = Tk(10),
                            Lg = Tk(2),
                            Uk = na(Object.keys, "keys"),
                            Vk = na(Object.entries, "entries"),
                            Oa = Vk ? Ar(Vk) : hk,
                            da = Uk ? function (a) {
                                return Uk(a)
                            } : ik,
                            Wk = na(Object.values, "values"),
                            ms = w(hk, u(P("1"), kk)),
                            oh = Wk ? function (a) {
                                return Wk(a)
                            } : ms,
                            z = Object.assign || zr,
                            Yh = sa(function (a, c) {
                                return z({}, a, c)
                            }),
                            kd = v(w(P("String.fromCharCode"), u("fromCharCode", Da), Dc)),
                            Ue = v(w(lb, eb(/ipad|iphone|ipod/i))),
                            Of = v(function (a) {
                                return n(a, "navigator.platform") || ""
                            }),
                            zd = v(function (a) {
                                a = Nk(a);
                                var c = a.ig;
                                return a.lf && ! c.match("CriOS")
                            }),
                            ns = eb(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                            os = eb(/; wv\)/),
                            xd = v(function (a) {
                                a = lb(a);
                                return os(a) || ns(a)
                            }),
                            ps = /Chrome\/(\d+)\./,
                            qs = v(function (a) {
                                return(a = (n(a, "navigator.userAgent") || "").match(ps)) && a.length ? 76 <= Ha(a[1]) : !1
                            }),
                            wd = v(function (a) {
                                var c = (lb(a) || "").toLowerCase();
                                a = Of(a);
                                return bb(c, "android") && bb(c, "mobile") && /^android|linux armv/i.test(a)
                            }),
                            rs = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                            ss = v(function (a) {
                                var c = n(a, "navigator.connection.type");
                                if (W(c)) 
                                    return null;
                                
                                a = Ie(a)(c, rs);
                                return -1 === a ? c : "" + a
                            }),
                            jg = v(w(P("document.addEventListener"), Dc)),
                            Xk = v(function (a) {
                                var c = n(a, "navigator") || {};
                                return J(function (b, d) {
                                    return b || n(c, d)
                                }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                            }),
                            th = v(function (a) {
                                var c = n(a, "navigator") || {};
                                a = Xk(a);
                                ma(a) || (a = "", c = n(c, "languages.0"), ma(c) && (a = c));
                                return a.toLowerCase().split("-")[0]
                            }),
                            ib = v(function (a) {
                                return(n(a, "top") || a) !== a
                            }),
                            ts = v(P("top.contentWindow")),
                            us = v(function (a) {
                                var c = !1;
                                try {
                                    c = a.navigator.javaEnabled()
                                } catch (b) {}
                                return c
                            }),
                            vs = v(function (a) {
                                var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                                    b = n(a, "external");
                                b = n(b, "toString") ? "" + b.toString() : "";
                                b = -1 !== hb(b, "Sequentum");
                                var d = n(a, "document.documentElement"),
                                    e = ["selenium", "webdriver", "driver"];
                                return !!(Ya(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Ya(u(n(a, "document"), n), c) || b || d && Ya(G(d.getAttribute, d), e))
                            }),
                            ws = v(function (a) {
                                return !!(Ya(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(lb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && ! n(a, "chrome"))
                            }),
                            xs = v(function (a) {
                                return !(! n(a, "ia_document.shareURL") || ! n(a, "ia_document.referrer"))
                            }),
                            Wd = v(function (a) {
                                var c = lb(a) || "",
                                    b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                                b = b ? [
                                    + b[1], + b[2]
                                ] : [0, 0];
                                c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                                return 14 <= (c ? + c[1] : 0) ? !0 : (Ue(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && zd(a)
                            }),
                            yr = /Edg\/(\d+)\./,
                            Me = v(function (a) {
                                return Wd(a) || sf(a, 68) || tf(a, 79)
                            }),
                            ys = Xc.construct,
                            gc = Xc.host,
                            Mg = jg(window),
                            Fa = {
                                sg: 24226447,
                                mg: 26302566,
                                wg: 51533966,
                                gj: 65446441,
                                Ra: "https:",
                                cc: "1261",
                                kc: ys,
                                rg: Mg ? 512 : 2048,
                                pg: Mg ? 512 : 2048,
                                qg: Mg ? 100 : 400,
                                hj: 100,
                                ug: "noindex"
                            },
                            Xd = [],
                            M = v(function (a) {
                                return a.id + ":" + a.ca
                            }),
                            kc = {},
                            fe = Aa("1"),
                            zs = setTimeout;
                        La.prototype["catch"] = function (a) {
                            return this.then(null, a)
                        };
                        La.prototype.then = function (a, c) {
                            var b = new this.constructor(Pr);
                            pk(this, new Rr(a, c, b));
                            return b
                        };
                        La.prototype["finally"] = function (a) {
                            var c = this.constructor;
                            return this.then(function (b) {
                                return c.resolve(a()).then(function () {
                                    return b
                                })
                            }, function (b) {
                                return c.resolve(a()).then(function () {
                                    return c.reject(b)
                                })
                            })
                        };
                        La.all = function (a) {
                            return new La(function (c, b) {
                                function d(h, k) {
                                    try {
                                        if (k && ("object" === typeof k || "function" === typeof k)) {
                                            var l = k.then;
                                            if ("function" === typeof l) {
                                                l.call(k, function (m) {
                                                    d(h, m)
                                                }, b);
                                                return
                                            }
                                        }
                                        e[h] = k;
                                        0 === -- f && c(e)
                                    } catch (m) {
                                        b(m)
                                    }
                                }
                                if (! a || "undefined" === typeof a.length) 
                                    return b(new TypeError("Promise.all accepts an array"));
                                
                                var e = Array.prototype.slice.call(a);
                                if (0 === e.length) 
                                    return c([]);
                                
                                for (var f = e.length, g = 0; g < e.length; g++) 
                                    d(g, e[g])
                                
                            })
                        };
                        La.resolve = function (a) {
                            return a && "object" === typeof a && a.constructor === La ? a : new La(function (c) {
                                c(a)
                            })
                        };
                        La.reject = function (a) {
                            return new La(function (c, b) {
                                b(a)
                            })
                        };
                        La.race = function (a) {
                            return new La(function (c, b) {
                                if (! a || "undefined" === typeof a.length) 
                                    return b(new TypeError("Promise.race accepts an array"));
                                
                                for (var d = 0, e = a.length; d < e; d++) 
                                    La.resolve(a[d]).then(c, b)
                                
                            })
                        };
                        La.Je = "function" === typeof setImmediate && function (a) {
                            setImmediate(a)
                        } || function (a) {
                            zs(a, 0)
                        };
                        La.xg = function (a) {
                            "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
                        };
                        var L = window.Promise,
                            As = na(L, "Promise"),
                            Yk = na(n(L, "resolve"), "resolve"),
                            Zk = na(n(L, "reject"), "reject"),
                            $k = na(n(L, "all"), "all");
                        if (As && Yk && Zk && $k) {
                            var $e = function (a) {
                                return new Promise(a)
                            };
                            $e.resolve = G(Yk, L);
                            $e.reject = G(Zk, L);
                            $e.all = G($k, L);
                            L = $e
                        } else 
                            L = La;
                        
                        var ee = [],
                            fd = [],
                            V = [],
                            gb = [],
                            Ng = [],
                            mc = [],
                            Xj = oc([26812653]),
                            mj = v(w(P("id"), Xj), M),
                            Xb = {
                                id: "id",
                                Fe: "ut",
                                ca: "type",
                                Rd: "ldc",
                                Ta: "nck",
                                xc: "url",
                                jh: "referrer"
                            },
                            Bs = /^\d+$/,
                            Yc = {
                                id: function (a) {
                                    a = "" + (
                                        a || "0"
                                    );
                                    Bs.test(a) || (a = "0");
                                    try {
                                        var c = Ha(a)
                                    } catch (b) {
                                        c = 0
                                    }
                                    return c
                                },
                                ca: function (a) {
                                    return "" + (
                                    a || 0 === a ? a : "0"
                                )
                                },
                                Ta: Fb,
                                Fe: Fb
                            };
                        Xb.lc = "defer";
                        Yc.lc = Fb;
                        Xb.R = "params";
                        Yc.R = function (a) {
                            return pa(a) || ca(a) ? a : null
                        };
                        Xb.Ee = "userParams";
                        Xb.eg = "triggerEvent";
                        Yc.eg = Fb;
                        Xb.Qf = "sendTitle";
                        Yc.Qf = function (a) {
                            return !! a || W(a)
                        };
                        Xb.ze = "trackHash";
                        Yc.ze = Fb;
                        Xb.cg = "trackLinks";
                        Xb.Tg = "enableAll";
                        var gf = J(function (a, c) {
                                var b = c[0];
                                a[b] = {
                                    ea: c[1],
                                    Ua: Yc[b]
                                };
                                return a
                            }, {}, Oa(Xb)),
                            wr = "hash host hostname href pathname port protocol search".split(" "),
                            ug = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "),
                            dk = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                            Ge = v(function (a) {
                                return(a ? a.replace(/^www\./, "") : "").toLowerCase()
                            }),
                            vi = v(function (a) {
                                a = R(a).hostname;
                                var c = !1;
                                a && (c = -1 !== a.search(dk));
                                return c
                            }),
                            al = w(R, P("protocol"), Aa("https:")),
                            tr = v(function (a) {
                                return qs(a) && al(a) ? "SameSite=None;Secure;" : ""
                            }),
                            rj = /^\s+|\s+$/g,
                            ck = na(String.prototype.trim, "trim"),
                            bl = sa(function (a, c) {
                                return c.replace(a, "")
                            }),
                            Mi = bl(/\s/g),
                            Rb = bl(/\D/g),
                            Rd = ["metrika_enabled"],
                            tg = [],
                            ak = mb("gsc", Yj),
                            ur = /:\d+$/,
                            Sr = v(function (a) {
                                var c = (R(a).host || "").split(".");
                                return 1 === c.length ? c[0] : J(function (b, d, e) {
                                    e += 1;
                                    2 <= e && ! b && (e = I(".", c.slice(- e)), ei(a, e) && (b = e));
                                    return b
                                }, "", c)
                            }),
                            vc = v(Lc),
                            Se = v(function (a) {
                                var c = vc(a),
                                    b = "1" === c.C("debug"),
                                    d = Te(a, "1") || Te(a, "2"),
                                    e = a._ym_debug;
                                ! e && ! d || b || (a = R(a), c.D("debug", "1", void 0, a.host));
                                return !!(b || e || d)
                            }),
                            sr = mb("debuggerEvents", Dd, !0),
                            pr = [
                                "http.0.st..rt.",
                                "network error occurred",
                                "send beacon",
                                "Content Security Policy",
                                "DOM Exception 18"
                            ],
                            Yd,
                            Ic = function (a) {
                                return function (c, b) {
                                    void 0 === b && (b =! 1);
                                    if (Yd) 
                                        var d = new Yd(c);
                                     else 
                                        Da("Error", a.Error) ? (Yd = a.Error, d = new a.Error(c)) : (Yd = rr, d = new Yd(c));
                                     b && (d.unk =! 0);
                                    return d
                                }
                            }(window),
                            qr = eb(/^http./),
                            or = eb(/^err.kn/),
                            Wj = [],
                            nr = v(function (a) {
                                a = !(! a.addEventListener || ! a.removeEventListener);
                                return {
                                    Li: a,
                                    F: a ? "addEventListener" : "attachEvent",
                                    ga: a ? "removeEventListener" : "detachEvent"
                                }
                            }),
                            Cs = v(function (a) {
                                var c = !1;
                                if (! a.addEventListener) 
                                    return c;
                                
                                try {
                                    var b = Object.defineProperty({}, "passive", {
                                        get: function () {
                                            c = !0;
                                            return 1
                                        }
                                    });
                                    a.addEventListener("test", E, b)
                                } catch (d) {}
                                return c
                            }),
                            Ds = sa(function (a, c) {
                                return a ? z({
                                    capture: !0,
                                    passive: !0
                                }, c || {}) : !! c
                            }),
                            fa = v(function (a) {
                                var c = Cs(a),
                                    b = Ds(c),
                                    d = {};
                                return z(d, {
                                    F: function (e, f, g, h) {
                                        y(function (k) {
                                            var l = b(h);
                                            Vj(a, e, k, g, l, !1)
                                        }, f);
                                        return G(d.xb, d, e, f, g, h)
                                    },
                                    xb: function (e, f, g, h) {
                                        y(function (k) {
                                            var l = b(h);
                                            Vj(a, e, k, g, l, !0)
                                        }, f)
                                    }
                                })
                            }),
                            ha = v(bg),
                            Rj = sa(function (a, c) {
                                for (var b =[]; ! Qd(c);) {
                                    var d = ir(c);
                                    a(d, function (e) {
                                        return e(c)
                                    });
                                    b.push(d)
                                }
                                return b
                            }),
                            cl = sa(function (a, c) {
                                return Ga(function (b, d) {
                                    return c(b, function (e) {
                                        try {
                                            d(a(e))
                                        } catch (f) {
                                            b(f)
                                        }
                                    })
                                })
                            }),
                            Og = sa(function (a, c) {
                                return Ga(function (b, d) {
                                    return c(b, function (e) {
                                        try {
                                            a(e)(Qa(b, d))
                                        } catch (f) {
                                            b(f)
                                        }
                                    })
                                })
                            }),
                            ng = [],
                            og = !1,
                            mg = !1,
                            dl = sa(function (a, c) {
                                var b = c || {};
                                return {
                                    l: u(b, O),
                                    C: function (d, e) {
                                        var f = b[d];
                                        return W(f) && ! W(e) ? e : f
                                    },
                                    D: function (d, e) {
                                        b[d] = e;
                                        return this
                                    },
                                    Xb: function (d, e) {
                                        return "" === e || ja(e) ? this : this.D(d, e)
                                    },
                                    Ia: u(b, a)
                                }
                            }),
                            Ka = dl(function (a) {
                                var c = "";
                                a = J(function (b, d) {
                                    var e = d[0],
                                        f = "" + e + ":" + d[1];
                                    "t" === e ? c = f : b.push(f);
                                    return b
                                }, [], Oa(a));
                                c && a.push(c);
                                return I(":", a)
                            }),
                            Pg,
                            Ij = (Pg =
                                {}, Pg.w =[
                                [
                                    function (a, c) {
                                        return {
                                            N: function (b, d) {
                                                var e,
                                                    f = b.J;
                                                f = (e =
                                                    {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                                                "0" !== c.ca && (f["cnt-class"] = c.ca);
                                                b.K || (b.K = Ka());
                                                e = b.K;
                                                var g = b.ba;
                                                f = {
                                                    na: {
                                                        Ba: "watch/" + c.id
                                                    },
                                                    ba: z(void 0 === g ? {} : g, {
                                                        Ab: !! e.C("pv") && ! e.C("ar") && ! e.C("wh")
                                                    }),
                                                    J: z(b.J || {}, f)
                                                };
                                                z(b, f);
                                                d()
                                            }
                                        }
                                    },
                                    1
                                ]
                            ], Pg),
                            Qg = u(Ij, Mj),
                            ob = Pd("w"),
                            Hj = [
                                "webkitvisibilitychange", "visibilitychange"
                            ],
                            of = dl(function (a) {
                                a = Oa(a);
                                return I("", A(function (c) {
                                    var b = c[0];
                                    c = c[1];
                                    return Va(c) ? "" : b + "(" + c + ")"
                                }, a))
                            }),
                            el = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                            nq = /^\s*(data|javascript):/i,
                            cj = new RegExp(I("", ["\\.(" + I("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                            Sa,
                            qk = (Sa =
                                {}, Sa.hit = "h", Sa.params = "p", Sa.reachGoal = "g", Sa.userParams = "up", Sa.trackHash = "th", Sa.accurateTrackBounce = "atb", Sa.notBounce = "nb", Sa.addFileExtension = "fe", Sa.extLink = "el", Sa.file = "fc", Sa.trackLinks = "tl", Sa.destruct = "d", Sa.setUserID = "ui", Sa.getClientID = "ci", Sa.clickmap = "cm", Sa.enableAll = "ea", Sa),
                            Es = v(function () {
                                var a = 0;
                                return function () {
                                    return a += 1
                                }
                            }),
                            Fs = w(M, Es, ia),
                            eg = {
                                mc: function (a) {
                                    a = Td(a).C("mt", {});
                                    a = Oa(a);
                                    return a.length ? J(function (c, b, d) {
                                        return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                                    }, "", a) : null
                                },
                                clc: function (a) {
                                    var c = H(a).C("cls", {
                                            jc: 0,
                                            x: 0,
                                            y: 0
                                        }),
                                        b = c.jc,
                                        d = c.x;
                                    c = c.y;
                                    return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                                },
                                rqnt: function (a, c, b) {
                                    a = b.J;
                                    return ! a || a.nohit ? null : Fs(c)
                                }
                            },
                            br = v(function (a) {
                                Fj(a, "_ymBRC", "1");
                                var c = "1" !== Ej(a, "_ymBRC");
                                c || Gj(a, "_ymBRC");
                                return c
                            }),
                            Pa = v(Dj),
                            Zc = v(Dj, function (a, c, b) {
                                return "" + c + b
                            }),
                            Gs = v(P("document.documentElement")),
                            Hs = v(function (a) {
                                a = n(a, "document") || {};
                                return("" + (
                                    a.characterSet || a.charset || ""
                                )).toLowerCase()
                            }),
                            db = v(w(P("document"), u("createElement", Cc))),
                            di = v(function (a) {
                                var c = n(a, "Element.prototype");
                                return c ? (a = rb(function (b) {
                                    var d = c[b];
                                    return !! d && Da(b, d)
                                }, [
                                    "matches",
                                    "webkitMatchesSelector",
                                    "mozMatchesSelector",
                                    "msMatchesSelector",
                                    "oMatchesSelector"
                                ])) ? c[a] : null : null
                            }),
                            Is = Aa("INPUT"),
                            Pe = w(Ma, Is),
                            Js = Aa("TEXTAREA"),
                            Zq = w(Ma, Js),
                            Ks = Aa("SELECT"),
                            $q = w(Ma, Ks),
                            Qe = w(P("type"), eb(/^(checkbox|radio)$/)),
                            Gf = w(Ma, eb(/^INPUT|SELECT|TEXTAREA$/)),
                            te = w(Ma, eb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                            Kf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                            Yq = [
                                "submit", "image", "hidden"
                            ],
                            Be = v(function () {
                                for (var a = 59, c =
                                    {}, b = 0; b < el.length; b += 1) 
                                    c[el[b]] = String.fromCharCode(a),
                                    a += 1;
                                
                                return c
                            }),
                            zj = v(function (a) {
                                return {sj: a, ib: null, rb: []}
                            }),
                            xj = {},
                            hg = {};
                        xj.p = 500;
                        var wj = {
                            i: "id",
                            n: "name",
                            h: "href",
                            ty: "type"
                        };
                        hg.h = !0;
                        hg.c = !0;
                        var Vc = {};
                        Vc.p = nf;
                        Vc.c = function (a, c, b) {
                            (a = cb(n(c, "textContent"))) && b && (b = b(c), b.length && Ya(w(P("textContent"), cb, Aa(a)), b) && (a = ""));
                            Pe(c) && (a = cb(c.getAttribute && c.getAttribute("value") || a));
                            return a
                        };
                        var $c,
                            gg = "button," + I(",", A(function (a) {
                                return 'input[type="' + a + '"]'
                            }, ["button", "submit", "reset", "file"])) + ",a",
                            Sf = u(gg, jb),
                            Wq = ($c =
                                {}, $c.A = "h", $c.BUTTON = "i", $c.DIV = "i", $c.INPUT = "ty", $c),
                            fl = /\/$/,
                            vj = mb("r", function (a, c) {
                                var b = uj(a, c),
                                    d = b[0];
                                return ! b[1] && d
                            }),
                            Nd = v(function () {
                                return {Ha: {}, pending: {}, children: {}}
                            }),
                            Rg = P("postMessage"),
                            Ls = B("s.f", function (a, c, b, d, e) {
                                c = c(d);
                                var f = Nd(a),
                                    g = I(":", [c.meta.qc, c.meta.key]);
                                if (Rg(b)) {
                                    f.pending[g] = e;
                                    try {
                                        b.postMessage(c.Yf, "*")
                                    } catch (h) {
                                        delete f.pending[g];
                                        return
                                    }
                                    Q(a, function () {
                                        delete f.pending[g]
                                    }, 5E3, "if.s")
                                }
                            }),
                            Ms = B("s.fh", function (a, c, b, d, e, f) {
                                var g = null,
                                    h = null,
                                    k = Nd(a),
                                    l = null;
                                try {
                                    g = yb(a, f.data),
                                    h = g.__yminfo,
                                    l = g.data
                                } catch (m) {
                                    return
                                }
                                if (! ja(h) && h.substring && "__yminfo" === h.substring(0, 8) && ! ja(l) && (g = h.split(":"), 4 === g.length)) 
                                    if (h = c.id, c = g[1], a = g[2], g = g[3], ! ca(l) && l.type && "0" === g && l.counterId) {
                                        if (! l.toCounter || l.toCounter == h) {
                                            k = null;
                                            try {
                                                k = f.source
                                            } catch (m) {}
                                            ! Va(k) && Rg(k) && (f = d.T(l.type, [f, l]), e = A(w(O, Yh(e)), f.concat([{}])), l = b([
                                                c, a, l.counterId
                                            ], e), k.postMessage(l.Yf, "*"))
                                        }
                                     else 
                                        g === "" + h && ca(l) && ea(function (m) {
                                            return !(! m.hid || ! m.counterId)
                                        }, l).length === l.length && (b = k.pending[I(":", [c, a])]) && b.apply(null, [f].concat(l))
                                    
                                
                            }
                        ),
                        ld = v(function (a, c) {
                            var b,
                                d = Cc("getElementsByTagName", n(a, "document")),
                                e = Nd(a),
                                f = Rg(a),
                                g = pd(a),
                                h = fa(a);
                            if (! d || ! f) 
                                return null;
                            
                            d = d.call(a.document, "iframe");
                            f = (b =
                                {}, b.counterId = c.id, b.hid = "" + yc(a), b);
                            Me(a) && (f.duid = Od(a, c));
                            Sq(a, g);
                            Tq(a);
                            b = Uq(a, f);
                            var k = C([
                                a, u([], b)
                            ], Ls);
                            y(function (l) {
                                var m = null;
                                try {
                                    m = l.contentWindow
                                } catch (p) {}m && k(m, {
                                    type: "initToChild"
                                }, function (p, r) {
                                    g.T("initToParent", [p, r])
                                })
                            }, d);
                            ib(a) && k(a.parent, {
                                type: "initToParent"
                            }, function (l, m) {
                                g.T("parentConnect", [l, m])
                            });
                            h.F(a, ["message"], C([
                                a,
                                c,
                                b,
                                g,
                                f
                            ], Ms));
                            return {$: g, Ha: e.Ha, children: e.children, ne: k}
                        }, w(Za, M)),
                        md = v(function (a, c) {
                            if (! Me(a) || ! ib(a)) 
                                return Od(a, c);
                            
                            var b = ld(a, c);
                            return b && b.Ha[c.id] ? b.Ha[c.id].info.duid || Od(a, c) : Od(a, c)
                        }, function (a, c) {
                            return "{" + c.Rd + c.Ta
                        }),
                        Ns = v(w(ha, Ga(function (a) {
                            return -(new a.l.Date).getTimezoneOffset()
                        }))),
                        Os = w(ha, Ga(function (a) {
                            a = new a.l.Date;
                            return I("", A(jr, [
                                a.getFullYear(),
                                a.getMonth() + 1,
                                a.getDate(),
                                a.getHours(),
                                a.getMinutes(),
                                a.getSeconds()
                            ]))
                        })),
                        Ps = w(ha, Ga(fg)),
                        gl = v(w(ha, Ga(function (a) {
                            return a.Aa[0]
                        }))),
                        Qs = v(function (a) {
                            a = H(a);
                            var c = a.C("counterNum", 0) + 1;
                            a.D("counterNum", c);
                            return c
                        }, w(Za, M)),
                        oa,
                        Md = (oa =
                            {}, oa.vf = u(Xc.version, O), oa.nt = ss, oa.fu = function (a, c, b) {
                            var d = b.J;
                            if (! d) 
                                return null;
                            
                            c = (n(a, "document.referrer") || "").replace(fl, "");
                            b = (d["page-ref"] || "").replace(fl, "");
                            d = d["page-url"];
                            a = R(a).href !== d;
                            c = c !== b;
                            b = 0;
                            a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                            return b
                        },
                        oa.en = Hs,
                        oa.la = Xk,
                        oa.ut = function (a, c, b) {
                            var d = b.M;
                            b = b.J;
                            d = d && d.Ic;
                            b && (vi(a) || c.Fe || d) && (b.ut = Fa.ug);
                            return null
                        },
                        oa.v = u(Fa.cc, O),
                        oa.cn = Qs,
                        oa.dp = function (a) {
                            var c = H(a),
                                b = c.C("bt", {});
                            if (W(c.C("bt"))) {
                                var d = n(a, "navigator.getBattery");
                                try {
                                    b.p = d && d.call(a.navigator)
                                } catch (e) {}c.D("bt", b);
                                b.p && b.p.then && b.p.then(D(a, "bi:dp.p", function (e) {
                                    b.$i = n(e, "charging") && 0 === n(e, "chargingTime")
                                }))
                            }
                            return Ab(b.$i)
                        },
                        oa.ls = v(function (a, c) {
                            var b = Zc(a, c.id),
                                d = ha(a),
                                e = b.C("lsid");
                            return + e ? e : (d = Wa(a, 0, d(Y)), b.D("lsid", d), d)
                        }, Za),
                        oa.hid = yc,
                        oa.phid = function (a, c) {
                            if (! ib(a)) 
                                return null;
                            
                            var b = ld(a, c);
                            if (! b) 
                                return null;
                            
                            var d = da(b.Ha);
                            return d.length ? b.Ha[d[0]].info.hid : null
                        },
                        oa.z = Ns,
                        oa.i = Os,
                        oa.et = Ps,
                        oa.c = w(P("navigator.cookieEnabled"), Lb),
                        oa.rn = w(O, Wa),
                        oa.rqn = function (a, c, b) {
                            b = b.J;
                            if (! b || b.nohit) 
                                return null;
                            
                            c = M(c);
                            a = Zc(a, c);
                            c = (a.C("reqNum", 0) || 0) + 1;
                            a.D("reqNum", c);
                            if (a.C("reqNum") === c) 
                                return c;
                            
                            a.Gb("reqNum");
                            return null
                        },
                        oa.u = md,
                        oa.w = function (a) {
                            a = Kc(a);
                            return a[0] + "x" + a[1]
                        },
                        oa.s = function (a) {
                            var c = n(a, "screen");
                            if (c) {
                                a = n(c, "width");
                                var b = n(c, "height");
                                c = n(c, "colorDepth") || n(c, "pixelDepth");
                                return I("x", [a, b, c])
                            }
                            return null
                        },
                        oa.sk = P("devicePixelRatio"),
                        oa.ifr = w(ib, Lb),
                        oa.j = w(us, Lb),
                        oa.sti = function (a) {
                            return ib(a) && ts(a) ? "1" : null
                        },
                        oa),
                        Rq = v(function () {
                            return ra(da(Md), da(eg))
                        }),
                        Qq = v(Gc, M),
                        sj = v(function () {
                            return {Ve: null, ta: []}
                        }, M),
                        Nq = /^[a-z][\w.+-]+:/i,
                        Sg,
                        Vb = [
                            [
                                Re, 1
                            ],
                            [
                                Le, 2
                            ],
                            [
                                Ob(), 3
                            ],
                            [
                                tj, 4
                            ]
                        ],
                        Ke = [],
                        vb = u(Vb, Nj),
                        Ub = (Sg =
                            {}, Sg.h = Vb, Sg),
                        Z = u(Ub, Mj);
                    vb(function (a) {
                        return {
                            N: function (c, b) {
                                var d = c.J;
                                if (! c.K || ! d) 
                                    return b();
                                
                                var e = d["page-ref"],
                                    f = d["page-url"];
                                e && f !== e ? d["page-ref"] = qj(a, e) : delete d["page-ref"];
                                d["page-url"] = qj(a, f).slice(0, Fa.rg);
                                return b()
                            }
                        }
                    }, -100);
                    var Iq = /[^a-z0-9.:-]/,
                        Tg,
                        Ug = {},
                        hl = ua([
                            cg && [
                                cg, 0
                            ],
                            Db && [
                                Db, 1
                            ],
                            [
                                Eb, 2
                            ],
                            Jd && [
                                Jd, 3
                            ],
                            [
                                Uc, 4
                            ]
                        ]),
                        nc = ua([
                            cg,
                            Db,
                            Eb,
                            Jd,
                            Uc
                        ]),
                        Vg = [Eb];
                    Vg.unshift(Db);
                    Vg.push(Jd);
                    var il = ua(Vg),
                        ad = ua([Uc]);
                    ua([Db, Eb]);
                    var Rs = ua([Db, Uc]),
                        jl = ua([Db, Eb, Jd, Uc]),
                        ya = (Tg =
                            {}, Tg.h = il, Tg),
                        Wg = v(function (a, c) {
                            var b = Ug["*"] ? Ug["*"] : c && Ug[c];
                            b || (b = c ? ya[c] || [] : nc);
                            b = J(function (d, e) {
                                var f = e(a);
                                if (f) {
                                    var g = rb(w(Sc, Aa(e)), hl);
                                    g && d.push([g[1], f])
                                }
                                return d
                            }, [], b);
                            b.length || de();
                            return b
                        }, Za),
                        Xg,
                        Ss = G(L.reject, L, Ra()),
                        Ca = (Xg =
                            {}, Xg.h = ob, Xg),
                        va = B("g.sen", function (a, c, b) {
                            var d = Wg(a, c);
                            b = b ? Mq(a, c, b) : [];
                            var e = Ca[c],
                                f = e ? e(a, d, b) : ob(a, d, b);
                            return function () {
                                var g = Ja(arguments),
                                    h = g[0];
                                g = g.slice(1);
                                var k = h.ba;
                                h = z(h, {
                                    ba: z(void 0 === k ? {} : k, {ha: [c]})
                                });
                                return f.apply(null, [h].concat(g))
                            }
                        }, Ss),
                        Aq = sa(function (a, c) {
                            if (! c[a]) {
                                var b,
                                    d = new L(function (e) {
                                        b = e
                                    });
                                c[a] = {
                                    Ef: b,
                                    promise: d,
                                    Ff: !1
                                }
                            }
                            return c[a].promise
                        }),
                        nj = v(w(Gc, Ga)),
                        Zd = v(function (a, c) {
                            var b = n(a, "console"),
                                d = n(b, "log");
                            d = We("log", d) ? G(d, b) : E;
                            var e = n(b, "warn");
                            e = We("warn", e) ? G(e, b) : d;
                            var f = n(b, "error");
                            b = We("error", f) ? G(f, b) : d;
                            return {
                                log: Tc(a, "log", c, d),
                                error: Tc(a, "error", c, b),
                                warn: Tc(a, "warn", c, e)
                            }
                        }, Za),
                        Ts = B("dc.init", function (a, c) {
                            function b(e) {
                                for (var f =[], g = 1; g < arguments.length; g++) 
                                    f[g - 1] = arguments[g];
                                
                                H(a).C("dce:" + c, !1) && d[e].apply(d, f);
                                H(a).C("dclq:" + c).push([e, f])
                            }
                            var d = Zd(a, c);
                            H(a).Ca("dclq:" + c, []);
                            return Se(a) ? {
                                log: u("log", b),
                                warn: u("warn", b),
                                error: u("error", b)
                            } : zq(a, c)
                        }),
                        Hd = v(Ts, Za),
                        Us = B("p.dc", function (a, c) {
                            var b = M(c);
                            lj(a, "");
                            lj(a, b)
                        }),
                        cm = B("h.p", function (a, c) {
                            var b,
                                d,
                                e = va(a, "h", c),
                                f = c.xc || "" + R(a).href,
                                g = c.jh || a.document.referrer,
                                h = {
                                    K: Ka(
                                        (b =
                                            {}, b.pv = 1, b)
                                    ),
                                    J: (d =
                                        {}, d["page-url"] = f, d["page-ref"] = g, d),
                                    M: {}
                                };
                            h.M.R = c.R;
                            h.M.Ee = c.Ee;
                            c.lc && h.J && (h.J.nohit = "1");
                            return e(h, c).then(function (k) {
                                k && (c.lc || Mb(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.R)(),
                                Qb(a, C([
                                    a, c, k
                                ], Bq)))
                            })["catch"](D(a, "h.g.s"))
                        }),
                        Yg = [
                            "yandex_metrika_callback" + Xc.callbackPostfix,
                            "yandex_metrika_callbacks" + Xc.callbackPostfix
                        ],
                        Vs = B("cb.i", function (a) {
                            var c = Yg[0],
                                b = Yg[1];
                            if (T(a[c])) 
                                a[c]();
                            
                            "object" === typeof a[b] && y(function (d, e) {
                                a[b][e] = null;
                                Xf(a, d)
                            }, a[b]);
                            y(function (d) {
                                try {
                                    delete a[d]
                                } catch (e) {
                                    a[d] = void 0
                                }
                            }, Yg)
                        }),
                        kl = v(function (a) {
                            return !! n(a, "crypto.subtle.digest") && !! n(a, "TextEncoder") && !! n(a, "FileReader") && !! n(a, "Blob")
                        }),
                        Ws = B("fpm", function (a, c) {
                            if (! al(a)) 
                                return E;
                            
                            var b = M(c);
                            if (! kl(a)) 
                                return xb(a, b, "Not supported"),
                                E;
                            
                            var d = za(a, c);
                            return d ? function (e) {
                                return(new L(function (f, g) {
                                    return pa(e) ? da(e).length ? f(ij(a, e).then(function (h) {
                                        var k,
                                            l;
                                        h && h.length && d.params((k =
                                            {}, k.__ym =( l =
                                            {}, l.fpp = h, l), k))
                                    }, E)) : g(Ra("fpm.l")) : g(Ra("fpm.o"))
                                }))["catch"](D(a, "fpm.en"))
                            } : E
                        }),
                        af = sa(function (a, c) {
                            var b = {};
                            $f(a)(function (d) {
                                b = d[c] || {}
                            });
                            return b
                        }),
                        Xs = B("c.c.cc", function (a) {
                            var c = H(a),
                                b = w(af(a), function (d) {
                                    var e,
                                        f = (e =
                                            {}, e.clickmap =!! d.clickmap, e);
                                    return z({}, d, f)
                                });
                            return D(a, "g.c.cc", w(G(c.C, c, "counters", {}), da, Tb(b)))
                        }),
                        Ys = B("gt.c.rs", function (a, c) {
                            var b,
                                d = M(c),
                                e = c.id,
                                f = c.ca,
                                g = c.Jg,
                                h = c.ze,
                                k = C([
                                    a, d
                                ], vq);
                            Zf(a, d, (b =
                                {}, b.id = e, b.type = + f, b.clickmap = g, b.trackHash =!! h, b));
                            return k
                        }),
                        gj = v(Dd),
                        Gd = v(Gc, M),
                        Zs = B("pa.int", function (a, c) {
                            var b;
                            return b = {},
                            b.params = function () {
                                var d,
                                    e,
                                    f = Ja(arguments),
                                    g = uq(f);
                                if (! g) 
                                    return null;
                                
                                f = g.Og;
                                var h = g.R;
                                g = g.dc;
                                if (! pa(h) && ! ca(h)) 
                                    return null;
                                
                                var k = va(a, "1", c),
                                    l = Gd(c).url,
                                    m = ! mj(c),
                                    p = "arams. Counter " + c.id,
                                    r = "P" + p,
                                    q = h,
                                    t = "";
                                (t = n(h, "__ym.user_id")) && (r = "Set user id " + t);
                                K("__ymu", da(h)) && (r = "User p" + p);
                                q.__ym && (q = z({}, h), q.__ym = J(function (x, F) {
                                    var U = n(h, "__ym." + F);
                                    U && (x[F] = U);
                                    return x
                                }, {}, Xd), da(q.__ym).length || delete q.__ym, m =!! da(q).length);
                                q = t ? void 0 : JSON.stringify(q);
                                p = Mb(a, c, r, q);
                                k = k({
                                    M: {
                                        R: h
                                    },
                                    K: Ka(
                                        (d =
                                            {}, d.pa = 1, d.ar = 1, d)
                                    ),
                                    J: (e =
                                        {}, e["page-url"] = l || R(a).href, e)
                                }, c).then(m ? p : E);
                                return Rc(a, "p.s", k, g, f)
                            },
                            b
                        }),
                        oe = v(ej, w(Za, M)),
                        $s = B("y.p", function (a, c) {
                            var b = ej(a, c);
                            if (b) {
                                var d = ke(a),
                                    e = C([
                                        a, b, c
                                    ], qq);
                                vh(a, d, function (f) {
                                    f.F(["params"], e)
                                });
                                b.$.F(["params"], w(P("1"), e))
                            }
                        }),
                        Tr = v(function (a) {
                            if (a = db(a)) 
                                return a("a")
                            
                        }),
                        ll = {
                            wj: eb(/[/&=?#]/)
                        },
                        De = B("go.in", function (a, c, b, d) {
                            var e;
                            void 0 === b && (b = "goal");
                            return e = {},
                            e.reachGoal = function (f, g, h, k) {
                                var l,
                                    m;
                                if (! f || ll[b] && ll[b](f)) 
                                    return null;
                                
                                var p = g,
                                    r = h || E;
                                T(g) && (r = g, p = void 0, k = h);
                                var q = Mb(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + f, p),
                                    t = "goal" === b;
                                g = va(a, "g", c);
                                var x = pq(a, c, f, b);
                                h = x[0];
                                x = x[1];
                                p = g({
                                    M: {
                                        R: p
                                    },
                                    K: Ka(
                                        (l =
                                            {}, l.ar = 1, l)
                                    ),
                                    J: (m =
                                        {}, m["page-url"] = h, m["page-ref"] = x, m)
                                }, c).then(function () {
                                    var F,
                                        U;
                                    t && q();
                                    sb(a, (F =
                                        {}, F.counterKey = M(c), F.name = "event", F.data =( U =
                                        {}, U.schema = b, U.name = f, U), F));
                                    d && d()
                                });
                                return Rc(a, "g.s", p, r, k)
                            },
                            e
                        }),
                        at = B("guid.int", function (a, c) {
                            var b;
                            return b = {},
                            b.getClientID = function (d) {
                                var e = Od(a, c);
                                d && Xf(a, d, null, e);
                                return e
                            },
                            b
                        }),
                        sk,
                        bt = B("th.e", function (a, c) {
                            function b() {
                                g || (k = Qc(a, "onhashchange") ? fa(a).F(a, ["hashchange"], h) : Ur(a, h))
                            }
                            var d,
                                e = va(a, "t", c),
                                f = Je(a, M(c)),
                                g = !1,
                                h = D(a, "h.h.ch", G(Vr, null, a, c, e)),
                                k = E;
                            c.ze && (b(), g =! 0);
                            e = D(a, "tr.hs.h", function (l) {
                                var m;
                                l ? b() : k();
                                g = !! l;
                                f((m =
                                    {}, m.trackHash = g, m))
                            });
                            return d = {},
                            d.trackHash = e,
                            d.u = k,
                            d
                        }),
                        ct = sa(function (a, c) {
                            ma(c) ? a.push(c) : y(w(O, Ea("push", a)), c)
                        }),
                        Fd = mb("retryReqs", function (a) {
                            var c = Pa(a),
                                b = c.C("retryReqs", {}),
                                d = ha(a)(Y);
                            y(function (e) {
                                var f = e[0];
                                e = e[1];
                                (! e || ! e.time || e.time + 864E5 < d) && delete b[f]
                            }, Oa(b));
                            c.D("retryReqs", b);
                            return b
                        }, !0),
                        ml = w(zc, Aa(0)),
                        nl = tb(ml),
                        dt = [
                            nl("watch"), nl("clmap")
                        ],
                        et = B("g.r", function (a) {
                            var c = ha(a),
                                b = Fd(a),
                                d = c(Y),
                                e = yc(a);
                            return J(function (f, g) {
                                var h = g[0],
                                    k = g[1];
                                k && Ya(Ga(k.resource), dt) && ! k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h =
                                    {
                                    protocol: k.protocol,
                                    host: k.host,
                                    Ba: k.resource,
                                    xi: k.postParams,
                                    R: k.params,
                                    Bg: k.browserInfo,
                                    uj: k.ghid,
                                    time: k.time,
                                    Ub: Ha(h),
                                    Mg: k.counterId,
                                    ca: k.counterType
                                }, k.telemetry && (h.Ja = k.telemetry), f.push(h));
                                return f
                            }, [], Oa(b))
                        }),
                        ft = B("nb.p", function (a, c) {
                            function b(F) {
                                l() || (F = "number" === typeof F ? F : 15E3, x = Wr(a, d(!1), F), m())
                            }
                            function d(F) {
                                return function (U) {
                                    var N,
                                        la,
                                        wa;
                                    void 0 === U && (U =( N =
                                        {}, N.ctx =
                                        {}, N.callback = E, N));
                                    if (F || ! q && ! k.Kd) {
                                        q = !0;
                                        m();
                                        x && x();
                                        var Cb = p(Y);
                                        N = (Ha(k.C("lastHit")) || 0) < Cb - 18E5;
                                        var Cd = .1 > Math.random();
                                        k.D("lastHit", Cb);
                                        Cb = Ka((la =
                                            {}, la.nb = 1, la.cl = t, la.ar = 1, la));
                                        la = Gd(c);
                                        la = {
                                            J: (wa =
                                                {}, wa["page-url"] = la.url || R(a).href, wa),
                                            K: Cb,
                                            M: {
                                                force: F
                                            }
                                        };
                                        wa = Zd(a, M(c)).warn;
                                        ! U.callback && U.ctx && wa('"callback" argument missing');
                                        (wa = F || N || Cd) || (wa = a.location.href, N = a.document.referrer, wa =!( wa && N ? dj(wa) === dj(N) : ! wa && ! N));
                                        if (wa) 
                                            return wa = g(la, c),
                                            Rc(a, "l.o.l", wa, U.callback, U.ctx)
                                        
                                    }
                                    return null
                                }
                            }
                            var e,
                                f,
                                g = va(a, "n", c),
                                h = M(c),
                                k = Zc(a, c.id),
                                l = u(u(h, af(a)), w(ia, P("accurateTrackBounce"))),
                                m = u((e =
                                    {}, e.accurateTrackBounce =! 0, e), Je(a, h)),
                                p = ha(a),
                                r = p(Y),
                                q = !1,
                                t = 0,
                                x;
                            qa(c, function (F) {
                                t = F.bh - r
                            });
                            c.Ke && b(c.Ke);
                            e = (f =
                                {}, f.notBounce = d(!0), f.u = x, f);
                            e.accurateTrackBounce = b;
                            return e
                        }),
                        iq = sa(fc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                        gt = B("clm.p", function (a, c) {
                            if (kd(a)) 
                                return E;
                            
                            var b = va(a, "m", c),
                                d = M(c),
                                e = ha(a),
                                f = e(Y),
                                g = u(u(d, af(a)), w(ia, P("clickmap"))),
                                h,
                                k = null;
                            d = D(a, "clm.p.c", function (l) {
                                var m = g();
                                if (m) {
                                    var p = H(a),
                                        r = p.C("cls", {
                                            jc: 0,
                                            x: 0,
                                            y: 0
                                        });
                                    p.D("cls", {
                                        jc: r.jc + 1,
                                        x: r.x + l.clientX,
                                        y: r.y + l.clientY
                                    });
                                    p = "object" === typeof m ? m : {};
                                    r = p.filter;
                                    m = p.isTrackHash || !1;
                                    var q = A(function (x) {
                                        return("" + x).toUpperCase()
                                    }, p.ignoreTags || []);
                                    W(h) && (h = p.quota || null);
                                    var t = !! p.quota;
                                    l = {
                                        element: jq(a, l),
                                        position: $i(a, l),
                                        button: kq(l),
                                        time: e(Y)
                                    };
                                    p = R(a).href;
                                    if (hq(a, l, k, q, r)) {
                                        if (t) {
                                            if (! h) 
                                                return;
                                            
                                            -- h
                                        }
                                        q = Oe(a, l.element);
                                        r = q[0];
                                        q = q[1];
                                        t = ig(a, l.element);
                                        r = [
                                            "rn",
                                            Wa(a),
                                            "x",
                                            Math.floor(65535 * (l.position.x - t.left) / (r || 1)),
                                            "y",
                                            Math.floor(65535 * (l.position.y - t.top) / (q || 1)),
                                            "t",
                                            Math.floor(
                                                (l.time - f) / 100
                                            ),
                                            "p",
                                            nf(a, l.element),
                                            "X",
                                            l.position.x,
                                            "Y",
                                            l.position.y
                                        ];
                                        r = I(":", r);
                                        m && (r += ":wh:1");
                                        gq(a, p, r, b, c);
                                        k = l
                                    }
                                }
                            });
                            return fa(a).F(n(a, "document"), ["click"], d)
                        }),
                        ht = B("trigger.in", function (a, c) {
                            c.eg && Qb(a, C([
                                a,
                                "yacounter" + c.id + "inited"
                            ], ar), "t.i")
                        }),
                        it = B("c.m.p", function (a, c) {
                            var b,
                                d = M(c);
                            return b = {},
                            b.clickmap = u(Je(a, d), fq),
                            b
                        }),
                        Bi = u("form", ic),
                        Op = u("form", jb),
                        eq = v(w(Za, tb(qa)(P("settings.form_goals"))), Za),
                        jt = B("s.f.i", function (a, c) {
                            var b = [],
                                d = [],
                                e = fa(a);
                            b.push(e.F(a, ["click"], D(a, "s.f.c", C([
                                a, c, d
                            ], dq))));
                            b.push(e.F(a, ["submit"], D(a, "s.f.e", function (f) {
                                var g = n(f, "target");
                                f = n(f, "isTrusted");
                                Xi(!0, a, c, d, g, f)
                            })));
                            Yi(a, c, "Form goal. Counter " + c.id + ". Init.");
                            return C([
                                Ce, b
                            ], y)
                        }),
                        kt = B("s.f.i", function (a, c) {
                            return qa(c, function (b) {
                                if (n(b, "settings.button_goals")) 
                                    return b = fa(a).F(a, ["click"], D(a, "c.t.c", w(C([
                                        a, c
                                    ], ff(a, c, "", cq))))),
                                    Mb(a, c, "Button goal. Counter " + c.id + ". Init.")(),
                                    b
                                
                            })
                        }),
                        Yb,
                        $d,
                        Zg,
                        bd,
                        Gb,
                        Uf = (Yb =
                            {}, Yb.transaction_id = "id", Yb.item_brand = "brand", Yb.index = "position", Yb.item_variant = "variant", Yb.value = "revenue", Yb.item_category = "category", Yb.item_list_name = "list", Yb),
                        hc = ($d =
                            {}, $d.item_id = "id", $d.item_name = "name", $d.promotion_name = "coupon", $d),
                        bq = (Zg =
                            {}, Zg.promotion_name = "name", Zg),
                        ol = (bd =
                            {}, bd.promotion_name = "name", bd.promotion_id = "id", bd.item_id = "product_id", bd.item_name = "product_name", bd),
                        Zp = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "),
                        $p = (Gb =
                            {}, Gb.view_item =
                            { event: "detail",
                            xa: hc,
                            La: "products"
                        }, Gb.add_to_cart =
                            { event: "add",
                            xa: hc,
                            La: "products"
                        }, Gb.remove_from_cart =
                            { event: "remove",
                            xa: hc,
                            La: "products"
                        }, Gb.begin_checkout =
                            { event: "checkout",
                            xa: hc,
                            La: "products"
                        }, Gb.purchase =
                            { event: "purchase",
                            xa: hc,
                            La: "products"
                        }, Gb.view_item_list =
                            { event: "impressions",
                            xa: hc
                        }, Gb.select_item =
                            { event: "click",
                            La: "products",
                            xa: hc
                        }, Gb.view_promotion =
                            { event: "promoView",
                            La: "promotions",
                            xa: ol
                        }, Gb.select_promotion =
                            { event: "promoClick",
                            La: "promotions",
                            xa: ol
                        }, Gb),
                        Wi = B("dl.w", function (a, c, b) {
                            function d() {
                                var g = n(a, c);
                                (e = ca(g) && He(a, g, b)) || (f = Q(a, d, 1E3, "ec.dl"))
                            }
                            var e,
                                f = 0;
                            d();
                            return function () {
                                return ka(a, f)
                            }
                        }),
                        lt = B("p.e", function (a, c) {
                            var b = za(a, c);
                            if (b) {
                                var d = H(a);
                                b = b.params;
                                var e = D(a, "h.ee", C([
                                    a, M(c), b
                                ], Xp));
                                return c.rd ? (d.D("ecs", 0), Vi(a, c.rd, e)) : qa(c, function (f) {
                                    if ((f = n(f, "settings.ecommerce")) && ma(f)) 
                                        return d.D("ecs", 1),
                                        Vi(a, f, e)
                                    
                                })
                            }
                        }),
                        Si = v(function (a) {
                            return I("[^\\d<>]*", a.split(""))
                        }),
                        ln = v(function (a) {
                            return new RegExp(Si(a), "g")
                        }),
                        Up = /\S/,
                        Li = u([
                            "style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"
                        ], od),
                        pl = v(function (a) {
                            return kd(a) || ! id(a)
                        }),
                        mt = B("phc.h", function (a, c) {
                            if (! gk(a) && ! pl(a)) 
                                return qa(c, function (b) {
                                    if (! n(b, "settings.phchange")) {
                                        var d = Pa(a),
                                            e = bb(R(a).search, "_ym_hide_phones=1") || d.C("_ym_hide_phones", 0);
                                        b = n(b, "settings.phhide");
                                        e && ! b && (b =["*"], d.D("_ym_hide_phones", 1));
                                        b && Di(a, c, b)
                                    }
                                })["catch"](D(a, "phc.hs"))
                            
                        }),
                        ql = v(function (a) {
                            a = R(a);
                            a = vr(a.search.substring(1));
                            a["_ym_status-check"] = a["_ym_status-check"] || "";
                            a._ym_lang = a._ym_lang || "ru";
                            return a
                        }),
                        Gi = w(ql, P("_ym_status-check"), Ha),
                        nt = w(ql, P("_ym_lang")),
                        Lp = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
                        Mp = /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/,
                        Fi = eb(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                        Qp = [
                            "form", "button", "phone", "status"
                        ],
                        $g = [],
                        Np = v(function (a, c, b) {
                            y(w(Ld([a, c, b]), ia), $g);
                            if (b.inline) {
                                c = Ei(b);
                                var d = b.data;
                                b = b.id;
                                Ai(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d)
                            } else 
                                b.resource && Fi(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, Rp(a, b.resource))
                            
                        }, function (a, c, b) {
                            return b.id
                        }),
                        ot = B("cs.init", function (a, c) {
                            var b,
                                d = Gi(a);
                            if (d && c.id === d && "0" === c.ca) {
                                var e = Ei((b =
                                    {}, b.lang = nt(a), b.fileId = "status", b));
                                Q(a, C([
                                    a,
                                    e,
                                    "" + d
                                ], Ai), 0, "cs")
                            }
                        }),
                        pt = B("suid.int", function (a, c) {
                            var b;
                            return b = {},
                            b.setUserID = function (d, e, f) {
                                if (ma(d) || ze(a, d)) {
                                    var g = za(a, c);
                                    d = od(["__ym", "user_id", d]);
                                    g.params(d, e || E, f)
                                } else 
                                    Zd(a, M(c)).error("Incorrect user ID")
                                
                            },
                            b
                        }),
                        Pc = {
                            position: "absolute"
                        },
                        zi = {
                            position: "fixed"
                        },
                        Rf = {
                            borderRadius: "50%"
                        },
                        qt = mb("siteStatistics", function (a, c) {
                            if (! gk(a)) 
                                return Kb(a)(Qa(E, C([
                                    c, w(P("settings.sm"), Aa(1), C([
                                        C(
                                            [
                                                a, c.id
                                            ],
                                            Jp
                                        ),
                                        E
                                    ], vd), ia)
                                ], qa)))
                            
                        }),
                        rt = B("up.int", function (a, c) {
                            var b;
                            return b = {},
                            b.userParams = D(a, "up.c", function (d, e, f) {
                                var g,
                                    h = za(a, c),
                                    k = Hd(a, M(c)).warn;
                                h ? pa(d) ? (d =( g =
                                    {}, g.__ymu = d, g), (g = h.params) && g(d, e || E, f)) : k("Wrong user params") : k("No counter instance found")
                            }),
                            b
                        }),
                        st = /[\*\.\?\(\)]/g,
                        tt = v(function (a, c, b) {
                            try {
                                var d = b.replace("\\s", " ").replace(st, "");
                                Hd(a, "").warn('Function "' + d + '" has been overridden, this may cause issues with Metrika counter')
                            } catch (e) {}
                        }, Za),
                        ut = B("r.nn", function (a) {
                            Se(a) && He(a, Bg, function (c) {
                                c.za.F(function (b) {
                                    tt(a, b[1], b[0]);
                                    Bg.splice(100)
                                })
                            })
                        }),
                        vt = B("e.a.p", function (a, c) {
                            var b,
                                d = za(a, c);
                            d = C([
                                w(O, Ga(!0)),
                                ua(A(u(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))
                            ], A);
                            c.Tg && d();
                            return b = {},
                            b.enableAll = d,
                            b
                        }),
                        wt = v(Gc, M),
                        xt = B("fpi", function (a) {
                            var c = yd(a);
                            if (c && ! a.document.hidden) {
                                var b = H(a).Ca;
                                b("fpe", 1);
                                var d = fa(a).F(a, [
                                    "visibilitychange", "webkitvisibilitychange"
                                ], function () {
                                    a.document.hidden && (b("fht", c.now()), d())
                                })
                            }
                        }),
                        yt = u("add", ye),
                        zt = u("remove", ye),
                        At = u("detail", ye),
                        Bt = u("purchase", ye),
                        Ct = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                        lf = v(function (a) {
                            var c = Nk(a);
                            a = c.ig;
                            if (! c.lf) 
                                return !1;
                            
                            c = Ea("indexOf", a);
                            c = Ya(w(c, Aa(-1), Dc), Ct);
                            var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                                d = /YaBrowser\/[\d.]+/.test(a),
                                e = /Mobile/.test(a);
                            return c || b || d && e || !/Safari/.test(a) && e
                        }),
                        Nm = v(function (a) {
                            var c = lb(a);
                            return c ? bb(c, "YangoEats") || xd(a) : !1
                        }),
                        Gp = /([0-9\\.]+) Safari/,
                        Dt = /\sYptp\/\d\.(\d+)\s/,
                        rl = v(function (a) {
                            var c;
                            a: {
                                if (
                                    (c = lb(a)) && (c = Dt.exec(c)) && 1 < c.length
                                ) {
                                    c = Ha(c[1]);
                                    break a
                                }
                                c = 0
                            }
                            return 50 <= c && 99 >= c || tf(a, 79) ? !1 : ! Wd(a) || lf(a)
                        }),
                        sl = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                        Et = v(function (a) {
                            a = db(a)("canvas");
                            var c = n(a, "getContext");
                            if (! c) 
                                return null;
                            
                            try {
                                var b = G(c, a)("2d");
                                b.font = "72px mmmmmmmmmmlli";
                                var d = b.measureText("mmmmmmmmmmlli").width;
                                return function (e) {
                                    b.font = "72px " + e;
                                    return b.measureText("mmmmmmmmmmlli").width === d
                                }
                            } catch (e) {
                                return null
                            }
                        }),
                        tl = na(String.prototype.repeat, "repeat"),
                        Vh = tl ? function (a, c) {
                            return tl.call(a, c)
                        } : Dp,
                        Ph = u(!0, function (a, c, b, d) {
                            b = c.length && (b - d.length) / c.length;
                            if (0 >= b) 
                                return d;
                            
                            c = Vh(c, b);
                            return a ? c + d : d + c
                        }),
                        Xe = [
                            2277735313, 289559509
                        ],
                        Ye = [
                            1291169091, 658871167
                        ],
                        Ft = B("p.cd", function (a, c) {
                            if (wd(a) || Ue(a)) {
                                var b = Pa(a);
                                if (ja(b.C("jn"))) {
                                    b.D("jn", !1);
                                    var d = a.chrome || zd(a) ? function () {} : /./,
                                        e = Zd(a, M(c));
                                    d.toString = function () {
                                        b.D("jn", !0);
                                        return "Yandex.Metrika counter is initialized"
                                    };
                                    e.log("%c%s", "color: inherit", d)
                                }
                            }
                        }),
                        Gt = v(function (a) {
                            a = n(a, "navigator.plugins");
                            return !!(a && Ta(a) && Ya(w(P("name"), eb(/Chrome PDF Viewer/)), a))
                        }),
                        Zb = sa(function (a, c) {
                            return H(c).C(a, null)
                        }),
                        Ap = {
                            "*": "+",
                            "-": "/",
                            kj: "=",
                            "+": "*",
                            "/": "-",
                            "=": "_"
                        },
                        Ht = v(function (a) {
                            return T(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
                        }),
                        It = v(u("panoramaId", we)),
                        Jt = v(function (a) {
                            return we("pubcid.org", a) || we("_pubCommonId", a)
                        }),
                        Kt = v(u("_sharedid", we)),
                        Lt = v(function (a, c) {
                            if (c.Ta) 
                                return null;
                            
                            var b = Lc(a, "").C("_ga");
                            return b && gd(ie(b))
                        }, w(Za, M)),
                        wp = [
                            [
                                "domainLookupEnd", "domainLookupStart"
                            ],
                            [
                                "connectEnd", "connectStart"
                            ],
                            [
                                "responseStart", "requestStart"
                            ],
                            [
                                "responseEnd", "responseStart"
                            ],
                            [
                                "fetchStart", "navigationStart"
                            ],
                            [
                                "redirectEnd", "redirectStart"
                            ],
                            [
                                function (a, c) {
                                    return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                                }
                            ],
                            [
                                "domInteractive", "domLoading"
                            ],
                            [
                                "domContentLoadedEventEnd", "domContentLoadedEventStart"
                            ],
                            [
                                "domComplete", "navigationStart"
                            ],
                            [
                                "loadEventStart", "navigationStart"
                            ],
                            [
                                "loadEventEnd", "loadEventStart"
                            ],
                            [
                                "domContentLoadedEventStart", "navigationStart"
                            ]
                        ],
                        wb,
                        vp = [
                            [
                                "domainLookupEnd", "domainLookupStart"
                            ],
                            [
                                "connectEnd", "connectStart"
                            ],
                            [
                                "responseStart", "requestStart"
                            ],
                            [
                                "responseEnd", "responseStart"
                            ],
                            ["fetchStart"],
                            [
                                "redirectEnd", "redirectStart"
                            ],
                            ["redirectCount"],
                            [
                                "domInteractive", "responseEnd"
                            ],
                            [
                                "domContentLoadedEventEnd", "domContentLoadedEventStart"
                            ],
                            ["domComplete"],
                            ["loadEventStart"],
                            [
                                "loadEventEnd", "loadEventStart"
                            ],
                            ["domContentLoadedEventStart"]
                        ],
                        xi = (wb =
                            {}, wb.responseEnd = 1, wb.domInteractive = 1, wb.domContentLoadedEventStart = 1, wb.domContentLoadedEventEnd = 1, wb.domComplete = 1, wb.loadEventStart = 1, wb.loadEventEnd = 1, wb.unloadEventStart = 1, wb.unloadEventEnd = 1, wb.secureConnectionStart = 1, wb),
                        yp = v(Dd),
                        sp = v(Gc),
                        tp = v(function (a) {
                            var c = n(a, "webkitRequestFileSystem");
                            if (T(c) && ! wd(a)) 
                                return(new L(G(c, a, 0, 0))).then(function () {
                                    var d = n(a, "navigator.storage") || {};
                                    return d.estimate ? d.estimate() : {}
                                }).then(function (d) {
                                    return(d = d.quota) && 12E7 > d ? !0 : !1
                                })["catch"](u(!0, O));
                            
                            if (Sd(a)) 
                                return c = n(a, "navigator.serviceWorker"),
                                L.resolve(W(c));
                            
                            c = n(a, "openDatabase");
                            if (zd(a) && T(c)) {
                                var b = !1;
                                try {
                                    c(null, null, null, null)
                                } catch (d) {
                                    b = !0
                                }
                                return L.resolve(b)
                            }
                            return L.resolve(! n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                        }),
                        Mt = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                        Nt = v(function (a, c) {
                            var b = vc(a),
                                d = R(a).search.match(Mt);
                            return d && 2 <= d.length ? (d = d[2], c.Ta || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
                        }),
                        Ot = B("pa.plgn", function (a, c) {
                            var b = oe(a, c);
                            b && b.$.F(["pluginInfo"], D(a, "c.plgn", function () {
                                var d = H(a);
                                d.D("cmc", d.C("cmc", 0) + 1);
                                return ek(c)
                            }))
                        }),
                        Pb,
                        pb,
                        Gm = (Pb =
                            {}, Pb.am = "com.am", Pb.tr = "com.tr", Pb.ge = "com.ge", Pb.il = "co.il", Pb["\u0440\u0444"] = "ru", Pb["xn--p1ai"] = "ru", Pb["\u0431\u0435\u043b"] = "by", Pb["xn--90ais"] = "by", Pb),
                        ul = {
                            "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                            "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                            "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                        },
                        Hm = (pb =
                            {}, pb.ka = "ge", pb.ro = "md", pb.tg = "tj", pb.tk = "tm", pb.et = "ee", pb.hy = "com.am", pb.he = "co.li", pb.ky = "kg", pb.be = "by", pb.tr = "com.tr", pb.kk = "kz", pb),
                        vl = /^https?:\/\//,
                        Pt = {
                            1882689622: 1,
                            2318205080: 1,
                            3115871109: 1,
                            3604875100: 1,
                            339366994: 1,
                            2890452365: 1,
                            849340123: 1,
                            173872646: 1,
                            2343947156: 1,
                            655012937: 1,
                            3724710748: 1,
                            3364370932: 1,
                            1996539654: 1,
                            2065498185: 1,
                            823651274: 1,
                            12282461: 1,
                            1555719328: 1,
                            1417229093: 1,
                            138396985: 1,
                            3015043526: 1
                        },
                        wl = v(function () {
                            return J(function (a, c) {
                                var b = dc(c + "/tag.js");
                                a[b] = 1;
                                return a
                            }, {}, ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                        }),
                        Qt = v(function (a) {
                            a = yd(a);
                            if (! a || ! T(a.getEntriesByType)) 
                                return null;
                            
                            a = a.getEntriesByType("resource");
                            var c = wl();
                            return(a = rb(function (b) {
                                b = b.name.replace(vl, "").split("?")[0];
                                b = dc(b);
                                return c[b]
                            }, a)) ? Ab(a.transferSize) : null
                        }),
                        op = "ar:1:pv:1:v:" + Fa.cc + ":vf:" + Xc.version,
                        pp = Fa.Ra + "//" + gc + "/watch/" + Fa.mg,
                        xl = {},
                        Rt = B("exps.int", function (a, c) {
                            var b;
                            return b = {},
                            b.experiments = function (d, e, f) {
                                var g,
                                    h;
                                void 0 === e && (e = E);
                                if (d && 0 < d.length) {
                                    var k = va(a, "e", c),
                                        l = Gd(c).url;
                                    d = k({
                                        K: Ka(
                                            (g =
                                                {}, g.ex = 1, g.ar = 1, g)
                                        ),
                                        J: (h =
                                            {}, h["page-url"] = l || R(a).href, h.exp = d, h)
                                    }, c);
                                    return Rc(a, "exps.s", d, e, f)
                                }
                            },
                            b
                        }),
                        mf = [],
                        St = B("p.fh", function (a, c) {
                            var b,
                                d;
                            void 0 === c && (c =! 0);
                            var e = Pa(a),
                                f = ha(a),
                                g = e.C("wasSynced"),
                                h = {
                                    id: 3,
                                    ca: "0"
                                };
                            return c && g && g.time + 864E5 > f(Y) ? L.resolve(g) : va(a, "f", h)({
                                K: Ka(
                                    (b =
                                        {}, b.pv = 1, b)
                                ),
                                J: (d =
                                    {}, d["page-url"] = R(a).href, d["page-ref"] = a.document.referrer, d)
                            }, h).then(function (k) {
                                var l;
                                k = (l =
                                    {}, l.time = f(Y), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
                                e.D("wasSynced", k);
                                return k
                            })["catch"](D(a, "f.h"))
                        }),
                        Tt = sa(function (a, c) {
                            0 === parseFloat(n(c, "settings.c_recp")) && (a.Sd.D("ymoo" + a.oa, a.bg(qb)), a.md && a.md.destruct && a.md.destruct())
                        }),
                        rf = w(P("settings.pcs"), Aa("1")),
                        ep = [
                            [
                                [
                                    "'(-$&$&$'", 30102, 0
                                ],
                                [
                                    "'(-$&$&$'", 29009, 0
                                ]
                            ],
                            [
                                [
                                    "oWdZ[nc[jh_YW$Yec", 30103, 1
                                ],
                                [
                                    "oWdZ[nc[jh_YW$Yec", 29010, 1
                                ]
                            ]
                        ],
                        fp = [
                            [
                                ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                            ],
                            [
                                ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                            ]
                        ],
                        wi = {
                            J: {
                                t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                            }
                        },
                        bp = {
                            $f: 60,
                            error: 15
                        },
                        ap = {
                            $f: 5,
                            error: 1
                        },
                        ui = {
                            id: 42822899,
                            ca: "0"
                        },
                        yl = gc.split("."),
                        Ut = yl.pop(),
                        zl = I(".", yl),
                        Fm = v(function (a) {
                            a = R(a).hostname.split(".");
                            return a[a.length - 1]
                        }),
                        sh = v(function (a) {
                            return -1 !== R(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                        }),
                        Vt = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech)$/,
                        ne = v(function (a) {
                            a = R(a).hostname;
                            var c = !1;
                            a && (c = -1 !== a.search(Vt));
                            return c
                        }),
                        Wt = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                        hp = v(function (a) {
                            a = R(a).hostname;
                            var c = !1;
                            a && (c = -1 !== a.search(Wt));
                            return c
                        }),
                        Al = Fa.Ra + "//" + gc + "/metrika",
                        re = Al + "/metrika_match.html",
                        bf,
                        lp = (bf =
                            {}, bf.s = "p", bf["8"] = "i", bf),
                        ip = mb("csp", function (a, c) {
                            return va(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                        }),
                        ah = "et w v z i u vf".split(" "),
                        Bl = Pd("wv"),
                        Xt = Pd("pub"),
                        ji = function () {
                            function a(c, b) {
                                this.l = c;
                                this.type = b
                            }
                            a.isEnabled = function (c) {
                                return !! c.JSON
                            };
                            a.prototype.Ia = function (c) {
                                return Bf(zb(this.l, c))
                            };
                            a.prototype.ub = function (c) {
                                var b = c.data;
                                "string" !== typeof b && (b = zb(this.l, c.data));
                                return b
                            };
                            a.prototype.lb = function (c) {
                                return encodeURIComponent(c).length
                            };
                            a.prototype.qe = function (c, b) {
                                for (var d = Math.ceil(c.length / b), e =[], f = 0; f < b; f += 1) 
                                    e.push(c.slice(f * d, d * (f + 1)));
                                
                                return e
                            };
                            return a
                        }(),
                        Wo = v(function (a) {
                            function c(f, g, h, k) {
                                d[0] = g;
                                h[k] = e[3];
                                h[k + 1] = e[2];
                                h[k + 2] = e[1];
                                h[k + 3] = e[0]
                            }
                            function b(f, g, h, k) {
                                d[0] = g;
                                h[k] = e[0];
                                h[k + 1] = e[1];
                                h[k + 2] = e[2];
                                h[k + 3] = e[3]
                            }
                            if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) 
                                return Xo;
                            
                            var d = new Float32Array([-0]),
                                e = new Uint8Array(d.buffer);
                            return 128 === e[3] ? b : c
                        }),
                        So = si(!1),
                        Ro = si(!0),
                        aa,
                        Hc,
                        Cl = (aa =
                            {}, aa.mousemove = 0, aa.mouseup = 1, aa.mousedown = 2, aa.click = 3, aa.scroll = 4, aa.windowblur = 5, aa.windowfocus = 6, aa.focus = 7, aa.blur = 8, aa.eof = 9, aa.selection = 10, aa.change = 11, aa.input = 12, aa.touchmove = 13, aa.touchstart = 14, aa.touchend = 15, aa.touchcancel = 16, aa.touchforcechange = 17, aa.zoom = 18, aa.resize = 19, aa.keystroke = 20, aa.deviceRotation = 21, aa.fatalError = 22, aa.hashchange = 23, aa.stylechange = 24, aa.articleInfo = 25, aa.publishersHeader = 26, aa.pageData = 27, aa.mutationAdd = 28, aa.mutationRemove = 29, aa.mutationTextChange = 30, aa.mutationAttributesChange = 31, aa),
                        Dl = (Hc =
                            {}, Hc.page = 0, Hc.event = 1, Hc.mutation = 2, Hc.publishers = 3, Hc.activity = 4, Hc),
                        ii = function () {
                            function a(c, b) {
                                var d,
                                    e,
                                    f = this;
                                this.isSync = !1;
                                this.Fb = [];
                                this.Vg = (d =
                                    {}, d.ad = "mutationAdd", d.re = "mutationRemove", d.tc = "mutationTextChange", d.ac = "mutationAttributesChange", d.page = "pageData", d);
                                this.Qg = (e =
                                    {}, e.ad = "addedNodesMutation", e.re = "removedNodesMutation", e.tc = "textChangeMutation", e.ac = "attributesChangeMutation", e.touchmove = "touchEvent", e.touchstart = "touchEvent", e.touchend = "touchEvent", e.touchforcechange = "touchEvent", e.touchcancel = "touchEvent", e.resize = "resizeEvent", e.scroll = "scrollEvent", e.change = "changeEvent", e.mousemove = "mouseEvent", e.mousedown = "mouseEvent", e.mouseup = "mouseEvent", e.click = "mouseEvent", e.focus = "focusEvent", e.blur = "focusEvent", e.deviceRotation = "deviceRotationEvent", e.zoom = "zoomEvent", e.keystroke = "keystrokesEvent", e.selection = "selectionEvent", e.stylechange = "stylechangeEvent", e.fatalError = "fatalErrorEvent", e.pageData = "page", e);
                                this.qh = function (g) {
                                    var h = g.type;
                                    return g.event || "publishersHeader" !== h && "articleInfo" !== h ? {
                                        type: Dl[h],
                                        event: Cl[f.Vg[g.event] || g.event]
                                    } : {
                                        type: Dl.publishers,
                                        event: Cl[h]
                                    }
                                };
                                this.tf = function (g) {
                                    var h = ! W(g.partNum),
                                        k = f.qh(g);
                                    k = {
                                        stamp: g.stamp,
                                        type: k.type,
                                        event: k.event,
                                        frameId: g.frameId,
                                        chunk: h ? g.data : void 0,
                                        partNum: g.partNum,
                                        end: g.end
                                    };
                                    ! h && g.data && (h = f.Qg[g.event] || g.event || g.type) && (k[h] = g.data);
                                    return k
                                };
                                this.l = c;
                                this.type = b
                            }
                            a.prototype.Ia = function (c, b) {
                                var d = this;
                                void 0 === b && (b =! 1);
                                var e = bc(c, this.tf),
                                    f = this.isSync || b ? Infinity : 10;
                                e = hd(this.l, e, f);
                                var g = [e];
                                this.Fb.push(e);
                                return e(Og(function (h) {
                                    h = li(d.l, Ho, {Ai: h});
                                    h = hd(d.l, h, f, pg);
                                    g.push(h);
                                    d.Fb.push(h);
                                    return h
                                }))(Og(function (h) {
                                    h = ki(d.l, h.slice(-4));
                                    h = hd(d.l, h, f, pg);
                                    g.push(h);
                                    d.Fb.push(h);
                                    return h
                                }))(cl(function (h) {
                                    h = h[h.length - 1];
                                    y(function (k) {
                                        k = Ie(d.l)(k, d.Fb);
                                        d.Fb.splice(k, 1)
                                    }, g);
                                    return h
                                }))
                            };
                            a.prototype.ub = function (c) {
                                return li(this.l, mi, this.tf(c))(qg(E))
                            };
                            a.prototype.lb = function (c) {
                                return c[0]
                            };
                            a.prototype.qe = function (c, b) {
                                for (var d = ki(this.l, c)(qg(E)),
                                e = Math.ceil(d.length / b),
                                f =[],
                                g = 0; g < b; g += 1) 
                                    f.push(d.slice(g * e, e * (g + 1)));
                                
                                return f
                            };
                            a.isEnabled = function (c) {
                                var b = Se(c),
                                    d = !1;
                                try {
                                    d = (d = 2 === (new c.Blob(["\u00e4"])).size) && 2 === (new c.Blob([new c.Uint8Array(
                                            [1, 2]
                                        )])).size
                                } catch (e) {}
                                return ! b && d && !(! c.Uint8Array || ! n(c, "Uint8Array.prototype.slice"))
                            };
                            return a
                        }(),
                        El = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                        Yt = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                        Zt = function () {
                            function a(c, b, d, e, f) {
                                var g = this;
                                this.Fc = !1;
                                this.meta = {};
                                this.scroll = {
                                    x: 0,
                                    y: 0
                                };
                                this.involvedTime = this.rf = 0;
                                this.Td = this.zf = "";
                                this.fa = [];
                                this.oe = this.Ka = 0;
                                this.yb = {
                                    h: 0,
                                    w: 0
                                };
                                this.buffer = [];
                                this.ng = Yt;
                                this.flush = function () {
                                    g.oe = Q(g.l, g.flush, 2500);
                                    var h = g.Bd();
                                    if (g.buffer.length || h) {
                                        var k = Id(g.buffer);
                                        h && k.push(h);
                                        g.zf = g.Td;
                                        g.ma.Ia(k)(Qa(D(g.l, "p.b.st"), function (l) {
                                            l && g.Wb(l)
                                        }))
                                    }
                                };
                                this.Wb = e;
                                this.ma = d;
                                this.bc = G(this.bc, this);
                                this.Bd = G(this.Bd, this);
                                this.flush = G(this.flush, this);
                                this.l = c;
                                this.oa = f;
                                this.Tc = b;
                                this.Od = "pai" + b.id;
                                this.Kb();
                                this.Re = fa(this.l);
                                this.time = ha(this.l);
                                this.gg();
                                this.Ed = H(this.l);
                                this.De = null
                            }
                            a.prototype.start = function () {
                                this.oe = Q(this.l, this.flush, 2500);
                                if (!this.Fc) {
                                    this.Ji();
                                    var c = this.Ed.C(this.Od, []),
                                        b = ! c.length;
                                    c.push(G(this.Wh, this));
                                    this.Ed.Ca(this.Od, c);
                                    b && this.If();
                                    this.De = fa(this.l).F(this.l, ["click"], G(this.Hi, this));
                                    this.bc({type: "page", target: this.l})
                                }
                            };
                            a.prototype.stop = function () {
                                this.Xi();
                                this.Fc = !0;
                                this.flush();
                                ka(this.l, this.oe)
                            };
                            a.prototype.nf = function (c) {
                                return ic("html", this.l, c) !== this.l.document.documentElement
                            };
                            a.prototype.If = function () {
                                var c = this;
                                D(this.l, "p.ic" + this.Tc.id, function () {
                                    if (! c.Fc) {
                                        var b = c.Ed.C(c.Od),
                                            d = c.Tc.ah();
                                        y(function (e) {
                                            var f = A(function (g) {
                                                return z({}, g)
                                            }, d);
                                            T(e) && e(f)
                                        }, b);
                                        c.Ka = Q(c.l, G(c.If, c), 1E3, "p")
                                    }
                                })()
                            };
                            a.prototype.Wh = function (c) {
                                this.Fc || (this.Yi(c), this.Zi(), this.Fg())
                            };
                            a.prototype.Kg = function (c, b) {
                                return(c.le || 0) <= (b.le || 0) ? b : c
                            };
                            a.prototype.Hi = function (c) {
                                if (this.fa.length) {
                                    c = bj(c);
                                    var b = R(this.l).hostname,
                                        d;
                                    if (d = c) 
                                        d = Ge(c.hostname) === Ge(b);
                                    
                                    d && (c = J(this.Kg, this.fa[0], this.fa).id, b = yc(this.l), Zc(this.l, this.oa.split(":")[0]).D("pai", c + "-" + b))
                                }
                            };
                            a.prototype.bc = function (c) {
                                var b = this;
                                D(this.l, "p.ec." + this.Tc.id, function () {
                                    var d,
                                        e;
                                    try {
                                        var f = c.type;
                                        var g = c.target
                                    } catch (p) {
                                        return
                                    }
                                    var h = "page" === f;
                                    if ("scroll" === f || h) {
                                        var k = [
                                            b.l, b.l.document, b.l.document.documentElement, Ec(b.l)
                                        ];
                                        K(g, k) && b.Kb()
                                    }
                                    ("resize" === f || h) && b.gg();
                                    f = b.time(Y);
                                    var l = Math.min(f - b.rf, 5E3);
                                    b.involvedTime += Math.round(l);
                                    b.rf = f;
                                    if (b.meta && b.scroll && b.yb) {
                                        var m = b.yb.h * b.yb.w;
                                        b.fa = A(function (p) {
                                            var r = z({}, p),
                                                q = b.meta[r.id],
                                                t = Jc(p.Eb);
                                            if (! q || b.nf(r.element) || ! t) 
                                                return r;
                                            
                                            p = b.l.Math;
                                            q = p.max((b.scroll.y + b.yb.h - q.y) / q.height, 0);
                                            var x = t.height * t.width;
                                            t = qh(b.l, t, b.yb);
                                            r.le = t / m;
                                            r.visibility = t / x;
                                            if (.9 <= r.visibility || .1 <= r.le) 
                                                r.involvedTime += l;
                                            
                                            r.maxScrolled = p.round(1E4 * q) / 1E4;
                                            return r
                                        }, b.fa);
                                        sb(b.l, (d =
                                            {}, d.name = "publishers", d.counterKey = b.oa, d.data =( e =
                                            {}, e.involvedTime = b.involvedTime, e.contentItems = A(function (p) {
                                            var r;
                                            return z((r =
                                                {}, r.contentElement = p.Eb, r), p)
                                        }, b.fa), e), d))
                                    }
                                })()
                            };
                            a.prototype.Yi = function (c) {
                                var b = A(function (d) {
                                    return d.id
                                }, this.fa);
                                this.fa = this.fa.concat(ea(function (d) {
                                    return ! K(d.id, b)
                                }, c))
                            };
                            a.prototype.gg = function () {
                                var c = je(this.l) || Kc(this.l);
                                this.yb = {
                                    w: c[0],
                                    h: c[1]
                                }
                            };
                            a.prototype.Zi = function () {
                                var c = this;
                                D(this.l, "p.um." + this.Tc.id, function () {
                                    var b = [];
                                    c.Kb();
                                    c.meta = J(function (d, e) {
                                        var f;
                                        if (c.nf(e.element)) 
                                            b.push(e),
                                            delete d[e.id];
                                         else {
                                            var g = (f =
                                                {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                            e.Eb && (f = Jc(e.Eb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                            d[e.id] = g
                                        }
                                        return d
                                    }, {}, c.fa);
                                    y(function (d) {
                                        d = Ie(c.l)(d, c.fa);
                                        c.fa.splice(d, 1)
                                    }, b)
                                })()
                            };
                            a.prototype.Bd = function () {
                                var c,
                                    b,
                                    d = A(u(this.meta, n), da(this.meta));
                                return d.length && (this.Td = zb(this.l, d), this.zf !== this.Td) ? (c =
                                    {}, c.type = "publishersHeader", c.data =( b =
                                    {}, b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null
                            };
                            a.prototype.Fg = function () {
                                var c = this;
                                if (this.fa.length) {
                                    var b = A(function (d) {
                                        var e,
                                            f = J(function (g, h) {
                                                d[h] && (g[h] = d[h]);
                                                return g
                                            }, {}, c.ng);
                                        d.Tf = !0;
                                        return e = {},
                                        e.type = "articleInfo",
                                        e.stamp = f.stamp,
                                        e.data = f,
                                        e
                                    }, ea(function (d) {
                                        return ! d.Tf
                                    }, this.fa));
                                    b.length && (this.buffer = this.buffer.concat(b), xb(this.l, this.oa, "Publisher content info found: ", b))
                                }
                            };
                            a.prototype.Ji = function () {
                                this.Re.F(this.l, El, this.bc)
                            };
                            a.prototype.Xi = function () {
                                this.De && this.De();
                                this.Re.xb(this.l, El, this.bc)
                            };
                            a.prototype.Kb = function () {
                                this.scroll = {
                                    x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                                    y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                                }
                            };
                            return a
                        }(),
                        ae,
                        bh = (ae =
                            {}, ae[1] = 500, ae[2] = 500, ae[3] = 0, ae),
                        $t = [
                            "topics", "rubric", "authors"
                        ],
                        ch = function () {
                            function a(c, b) {
                                var d,
                                    e = this;
                                this.id = "a";
                                this.Jd = !1;
                                this.Hb = {};
                                this.tb = {
                                    "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                                    wf: ["article"]
                                };
                                this.Be = (d =
                                    {}, d.Answer = 3, d.Review = 2, d);
                                this.Ue = v(function (f, g, h) {
                                    xb(e.l, e.oa, "Warning: invalid value " + h + " in " + g + " in field " + f + ", this item will be ignored")
                                }, function (f, g, h) {
                                    return "" + f + g + h
                                });
                                this.aj = function (f) {
                                    $t.forEach(function (g) {
                                        f[g] && (f[g] = f[g].reduce(function (h, k) {
                                            var l = k.name,
                                                m = k.position;
                                            if (! l) 
                                                return e.Ue(g, "name", l),
                                                h;
                                            
                                            if ("string" === typeof m) {
                                                l = vf(m);
                                                if (null === l || e.l.isNaN(l)) 
                                                    return e.Ue(g, "position", m),
                                                    h;
                                                
                                                k.position = l
                                            }
                                            h.push(k);
                                            return h
                                        }, []))
                                    });
                                    return f
                                };
                                this.Lg = v(function (f, g) {
                                    xb(e.l, e.oa, "Warning: content has only " + g.chars + " chars. Required " + bh[g.type], g)
                                });
                                this.l = c;
                                this.root = cc(c);
                                this.oa = b
                            }
                            a.prototype.Na = function (c) {
                                return c.element
                            };
                            a.prototype.af = function (c, b) {
                                var d = this,
                                    e;
                                D(this.l, "P.s." + b, function () {
                                    e = d.Hb[b].call(d, c)
                                })();
                                return e
                            };
                            a.prototype.yi = function (c) {
                                var b = z({}, c);
                                this.Jd && ! b.id && K(c.type, [3, 2]) && (c = I(", ", A(P("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                                b.pageTitle || (b.pageTitle = this.Ah(b.Eb));
                                b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical =( "string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.yh());
                                b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                                return b
                            };
                            a.prototype.Fa = function (c) {
                                var b = this,
                                    d = {},
                                    e = this.Na(c);
                                if (! e) 
                                    return null;
                                
                                d.type = c.type;
                                y(function (g) {
                                    d[g] = b.af(c, g)
                                }, da(this.Hb));
                                var f = ha(this.l);
                                d.stamp = f(Tj);
                                d.element = c.element;
                                d.Eb = e;
                                d = this.aj(this.yi(d));
                                d.id = d.id ? dc(d.id) : 1;
                                d.update = function (g) {
                                    return b.Na(c) ? b.af(c, g) : void 0
                                };
                                return d
                            };
                            a.prototype.Ah = function (c) {
                                for (var b = 1; 5 >= b; b += 1) {
                                    var d = $a(ac("h" + b, c));
                                    if (d) 
                                        return d
                                    
                                }
                            };
                            a.prototype.yh = function () {
                                var c = ac('[rel="canonical"]', this.root);
                                if (c) 
                                    return c.href
                                
                            };
                            a.prototype.ff = function () {
                                return 1
                            };
                            a.prototype.wc = function () {
                                return []
                            };
                            a.prototype.ah = function () {
                                var c = this,
                                    b = this.wc(),
                                    d = 1;
                                return J(function (e, f) {
                                    var g = c.Fa({element: f, type: c.ff(f)}) || [];
                                    ca(g) || (g =[g]);
                                    g = J(function (h, k) {
                                        var l = h.values,
                                            m = h.hf;
                                        k && k.chars > bh[k.type] && ! K(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= bh[k.type] && c.Lg(k.id, k);
                                        return {values: l, hf: m}
                                    }, {
                                        values: [],
                                        hf: A(P("id"), e)
                                    }, g).values;
                                    return e.concat(A(function (h) {
                                        var k;
                                        h = z((k =
                                            { index: d,
                                            Tf: !1
                                        }, k.involvedTime = 0, k), h);
                                        d += 1;
                                        return h
                                    }, g))
                                }, [], b)
                            };
                            return a
                        }(),
                        Fl = function (a) {
                            function c() {
                                var b,
                                    d = null !== a && a.apply(this, arguments) || this;
                                d.id = "j";
                                d.Jd = !0;
                                d.Oe = I(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                                d.Hb = (b =
                                    {}, b.id = function (e) {
                                    var f = e.data["@id"];
                                    e = e.data.mainEntity || e.data.mainEntityOfPage;
                                    ! f && pa(e) && (f = e["@id"]);
                                    return f
                                },
                                b.chars = function (e) {
                                    var f = e.data;
                                    return ma(f.text) ? f.text.length : Jb(this.Na(e)).length
                                },
                                b.authors = function (e) {
                                    e = e.data;
                                    var f = [];
                                    f = f.concat(this.vc(e, "author"));
                                    f = f.concat(this.vc(e.mainEntity, "author"));
                                    return f.concat(this.vc(e.mainEntityOfPage, "author"))
                                },
                                b.pageTitle = function (e) {
                                    var f = e.data,
                                        g = f.headline || "";
                                    f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                                    "" === g && (f.name ? g = f.name : f.itemReviewed && (g = f.itemReviewed));
                                    3 === e.type && pa(f.parentItem) && (g = f.parentItem.text);
                                    return g
                                },
                                b.updateDate = function (e) {
                                    return e.data.dateModified || ""
                                },
                                b.publicationDate = function (e) {
                                    return e.data.datePublished || ""
                                },
                                b.pageUrlCanonical = function (e) {
                                    return e.data.url
                                },
                                b.topics = function (e) {
                                    return this.vc(e.data, "about", ["name", "alternateName"])
                                },
                                b.rubric = function (e) {
                                    var f = this,
                                        g = this.Na(e);
                                    e = ua(A(function (h) {
                                        h = yb(f.l, Jb(h));
                                        if (pa(h) || ca(h)) {
                                            var k = f.bf(h);
                                            if (k) 
                                                return J(function (l, m) {
                                                    return l ? l : pa(m) && "BreadcrumbList" === m["@type"] ? m : l
                                                }, null, k);
                                            
                                            if ("BreadcrumbList" === h["@type"]) 
                                                return h
                                            
                                        }
                                        return null
                                    }, [e.element].concat(jb(this.Oe, document.body === g ? document.documentElement : g))));
                                    return e.length && (e = e[0].itemListElement, ca(e)) ? ua(A(function (h) {
                                        return pa(h) && h.item && pa(h.item) && ! f.l.isNaN(h.position) ? {
                                            name: h.item.name || h.name,
                                            position: h.position
                                        } : null
                                    }, e)) : []
                                },
                                b);
                                return d
                            }
                            Na(c, a);
                            c.prototype.vc = function (b, d, e) {
                                void 0 === e && (e =["name"]);
                                if (! b || ! b[d]) 
                                    return [];
                                
                                b = ca(b[d]) ? b[d] : [b[d]];
                                b = ua(A(function (f) {
                                    return f ? "string" === typeof f ? f : J(function (g, h) {
                                        return g || "" + f[h]
                                    }, "", e) : null
                                }, b));
                                return A(function (f) {
                                    var g;
                                    return g = {},
                                    g.name = f,
                                    g
                                }, b)
                            };
                            c.prototype.Na = function (b) {
                                var d = b.element,
                                    e = b.data || {};
                                b = e["@id"];
                                var f = e.url;
                                e = null;
                                f && ma(f) && (e = this.Te(f));
                                ! e && b && ma(b) && (e = this.Te(b));
                                e || (e = b = d.parentNode, ! ic("head", this.l, d) && b && 0 !== Jb(b).length) || (e = this.l.document.body);
                                return e
                            };
                            c.prototype.Te = function (b) {
                                try {
                                    var d = Nc(this.l, b).hash;
                                    if (d) {
                                        var e = ac(d, this.l.document.body);
                                        if (e) 
                                            return e
                                        
                                    }
                                } catch (f) {}
                                return null
                            };
                            c.prototype.Zd = function (b) {
                                return this.Be[b["@type"]] || 1
                            };
                            c.prototype.Fa = function (b) {
                                var d = this,
                                    e = b.element,
                                    f = b.data;
                                if (! f && (f = yb(this.l, Jb(e)), ! f || !/schema\.org/.test(f["@context"]) && ! ca(f))) 
                                    return null;
                                
                                var g = this.bf(f);
                                if (g) 
                                    return A(function (k) {
                                        return pa(k) && K(k["@type"], d.tb["schema.org"]) ? a.prototype.Fa.call(d, {
                                            element: e,
                                            data: k,
                                            type: d.Zd(k)
                                        }) : null
                                    }, g);
                                
                                b.data = f;
                                if ("QAPage" === b.data["@type"]) {
                                    var h = b.data.mainEntity || b.data.mainEntityOfPage;
                                    if (! h) 
                                        return null
                                    
                                }
                                "Question" === b.data["@type"] && (h = b.data);
                                return h ? (b = qc(u(h, n), ["acceptedAnswer", "suggestedAnswer"]), A(function (k) {
                                    var l;
                                    if (! pa(k) || ! K(k["@type"], d.tb["schema.org"])) 
                                        return null;
                                    
                                    k = {
                                        element: e,
                                        type: d.Zd(k),
                                        data: z(
                                            (l =
                                                {}, l.parentItem = h, l),
                                            k
                                        )
                                    };
                                    return a.prototype.Fa.call(d, k)
                                }, b)) : K(b.data["@type"], this.tb["schema.org"]) ? a.prototype.Fa.call(this, z(b, {
                                    type: this.Zd(b.data)
                                })) : null
                            };
                            c.prototype.wc = function () {
                                return jb(this.Oe, this.root)
                            };
                            c.prototype.bf = function (b) {
                                if (ca(b)) 
                                    return b;
                                
                                if (b && ca(b["@graph"])) 
                                    return b["@graph"]
                                
                            };
                            return c
                        }(ch),
                        dh = function (a) {
                            function c() {
                                var b,
                                    d = null !== a && a.apply(this, arguments) || this;
                                d.id = "s";
                                d.Jd = !0;
                                d.Wi = Ea("exec", new RegExp("schema.org\\/(" + I("|", da(d.Be)) + ")$"));
                                d.Hb = (b =
                                    {}, b.id = function (e) {
                                    e = e.element;
                                    var f = fb(this.l, e, "identifier");
                                    return f ? $a(f) : (f = fb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                                },
                                b.chars = function (e) {
                                    var f = 0;
                                    e = e.element;
                                    for (var g =[
                                        "articleBody",
                                        "reviewBody",
                                        "recipeInstructions",
                                        "description",
                                        "text"
                                    ], h = 0; h < g.length; h += 1) {
                                        var k = fb(this.l, e, g[h]);
                                        if (k) {
                                            f = $a(k).length;
                                            break
                                        }
                                    }
                                    e = Jb(e);
                                    0 === f && e && (f += e.length);
                                    return f
                                },
                                b.topics = function (e) {
                                    var f = this,
                                        g = Vd(this.l, e.element, "about");
                                    return A(function (h) {
                                        var k = {
                                            name: $a(h)
                                        };
                                        if (g = fb(f.l, h, "name")) 
                                            k.name = $a(g);
                                        
                                        return k
                                    }, g)
                                },
                                b.rubric = function (e) {
                                    var f = this;
                                    (e = ac('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = ac('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                                    return e ? A(function (g) {
                                        return {
                                            name: $a(fb(f.l, g, "name")),
                                            position: $a(fb(f.l, g, "position"))
                                        }
                                    }, Vd(this.l, e, "itemListElement")) : []
                                },
                                b.updateDate = function (e) {
                                    return(e = fb(this.l, e.element, "dateModified")) ? uk(e) : ""
                                },
                                b.publicationDate = function (e) {
                                    return(e = fb(this.l, e.element, "datePublished")) ? uk(e) : ""
                                },
                                b.pageUrlCanonical = function (e) {
                                    e = Vd(this.l, e.element, "url");
                                    if (e.length) {
                                        var f = e[0];
                                        return f.href ? f.href : $a(e)
                                    }
                                    return null
                                },
                                b.pageTitle = function (e) {
                                    var f = "",
                                        g = e.element,
                                        h = fb(this.l, g, "headline");
                                    h && (f += $a(h));
                                    (h = fb(this.l, g, "alternativeHeadline")) && (f += " " + $a(h));
                                    "" === f && ((h = fb(this.l, g, "name")) || (h = fb(this.l, g, "itemReviewed")), h && (f += $a(h)));
                                    3 === e.type && (e = ic('[itemtype$="schema.org/Question"]', this.l, g)) && (e = fb(this.l, e, "text")) && (f += $a(e));
                                    return f
                                },
                                b.authors = function (e) {
                                    var f = this;
                                    e = Vd(this.l, e.element, "author");
                                    return A(function (g) {
                                        var h,
                                            k = (h =
                                                {}, h.name = "", h);
                                        /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = fb(f.l, g, "name")) && (k.name = $a(h));
                                        k.name || (k.name = g.getAttribute("content") || Jb(g) || g.getAttribute("href"));
                                        return k
                                    }, e)
                                },
                                b);
                                return d
                            }
                            Na(c, a);
                            c.prototype.ff = function (b) {
                                b = b.getAttribute("itemtype") || "";
                                return(b = this.Wi(b)) ? this.Be[b[1]] : 1
                            };
                            c.prototype.Fa = function (b) {
                                return b.element && Jb(b.element).length ? a.prototype.Fa.call(this, b) : null
                            };
                            c.prototype.wc = function () {
                                var b = I(",", A(function (d) {
                                    return '[itemtype$="schema.org/' + d + '"]'
                                }, this.tb["schema.org"]));
                                return jb(b, this.root)
                            };
                            return c
                        }(ch),
                        Gl = function (a) {
                            function c(b, d) {
                                var e,
                                    f = a.call(this, b, d) || this;
                                f.id = "o";
                                f.Hb = (e =
                                    {}, e.chars = function (g) {
                                    g = this.Na(g);
                                    return Jb(g).length
                                },
                                e.authors = function (g) {
                                    return this.xd(g.data.author)
                                },
                                e.pageTitle = function (g) {
                                    return this.Ac(g.data.title) || ""
                                },
                                e.updateDate = function (g) {
                                    return this.Ac(g.data.modified_time)
                                },
                                e.publicationDate = function (g) {
                                    return this.Ac(g.data.published_time)
                                },
                                e.pageUrlCanonical = function (g) {
                                    return this.Ac(g.data.url)
                                },
                                e.rubric = function (g) {
                                    return this.xd(g.data.section)
                                },
                                e.topics = function (g) {
                                    return this.xd(g.data.tag)
                                },
                                e);
                                f.Ug = new RegExp("^(og:)?((" + I("|", f.tb.wf) + "):)?");
                                return f
                            }
                            Na(c, a);
                            c.prototype.xd = function (b) {
                                var d;
                                return b ? ca(b) ? A(function (e) {
                                    var f;
                                    return f = {},
                                    f.name = e ? "" + e : null,
                                    f
                                }, b) : [(d =
                                        {}, d.name = b ? "" + b : null, d)] : []
                            };
                            c.prototype.Ac = function (b) {
                                return ca(b) ? b.length ? "" + b[0] : null : b ? "" + b : null
                            };
                            c.prototype.wc = function () {
                                var b = jb('meta[property="og:type"]', this.l.document.body);
                                return [this.l.document.head].concat(b)
                            };
                            c.prototype.ph = function (b) {
                                var d = this,
                                    e = b.element,
                                    f = {},
                                    g = this.Na(b);
                                e = jb("meta[property]", e === this.l.document.head ? e : g);
                                if (e.length) 
                                    y(function (h) {
                                        try {
                                            if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                                var k = h.getAttribute("property").replace(d.Ug, ""),
                                                    l = $a(h);
                                                f[k] ? ca(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                            }
                                        } catch (m) {
                                            ve(d.l, "og.ed", m)
                                        }
                                    }, e);
                                 else 
                                    return null;
                                
                                return K(f.type, this.tb.wf) ? z(b, {data: f}) : null
                            };
                            c.prototype.Na = function (b) {
                                b = b.element;
                                var d = this.l.document;
                                return b === d.head ? d.body : b.parentNode
                            };
                            c.prototype.Fa = function (b) {
                                return(b = this.ph(b)) ? a.prototype.Fa.call(this, b) : null
                            };
                            return c
                        }(ch),
                        be = {};
                    Fl && (be.json_ld = Fl);
                    dh && (be.schema = dh, be.microdata = dh);
                    Gl && (be.opengraph = Gl);
                    var au = B("p.p", function (a, c) {
                            function b(m) {
                                var p = z({}, l);
                                p.ba.da = m;
                                return f(p, c)["catch"](D(a, "s.ww.p"))
                            }
                            var d,
                                e = hi(a, "9", "8");
                            if (! Da("querySelectorAll", a.document.querySelectorAll) || ! e) 
                                return L.resolve();
                            
                            var f = va(a, "p", c),
                                g = Ka(),
                                h = Zc(a, c.id),
                                k = h.C("pai");
                            k && (h.Gb("pai"), g.D("pai", k));
                            var l = {
                                J: (d =
                                    {}, d["wv-type"] = e.type, d),
                                K: g,
                                ba: {}
                            };
                            return qa(c, D(a, "ps.s", function (m) {
                                if (m = n(m, "settings.publisher.schema")) {
                                    fk(c) && (m = "microdata");
                                    var p = be[m];
                                    if (p && e) {
                                        var r = M(c);
                                        p = new p(a, r);
                                        p = new Zt(a, p, e, b, r);
                                        p.start();
                                        xb(a, r, 'Publishers analytics schema "' + m + '"');
                                        return G(p.stop, p)
                                    }
                                }
                            }))
                        }),
                        bu = function () {
                            function a(c, b) {
                                this.type = "0";
                                this.l = c;
                                this.nh = b
                            }
                            a.prototype.Ia = function (c) {
                                return Bf(qc(G(this.ub, this), c))
                            };
                            a.prototype.ub = function (c, b) {
                                var d = this,
                                    e = [],
                                    f = this.nh(this.l, b && b.type, c.type);
                                f && (e = qc(function (g) {
                                    return g({l: d.l, qa: c}) || []
                                }, f));
                                return e
                            };
                            a.prototype.lb = function (c) {
                                return c.length
                            };
                            a.prototype.qe = function (c) {
                                return [c]
                            };
                            a.prototype.isEnabled = function () {
                                return !0
                            };
                            return a
                        }(),
                        Hl = function () {
                            function a(c, b, d) {
                                this.Pe = 0;
                                this.$d = 1;
                                this.bd = 5E3;
                                this.l = c;
                                this.ma = b;
                                this.Wb = d
                            }
                            a.prototype.Wc = function () {
                                this.Pe = Q(this.l, w(G(this.flush, this), G(this.Wc, this)), this.bd, "b.f")
                            };
                            a.prototype.send = function (c, b) {
                                var d = this.Wb(c, b || [], this.$d);
                                this.$d += 1;
                                return d
                            };
                            a.prototype.push = function () {};
                            a.prototype.flush = function () {};
                            return a
                        }(),
                        Wn = function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this;
                                b.buffer = [];
                                b.og = 7500;
                                b.bd = 3E4;
                                b.Wc();
                                return b
                            }
                            Na(c, a);
                            c.prototype.push = function (b, d) {
                                var e = this.ma.ub(b, d);
                                ra(this.buffer, e);
                                this.ma.lb(this.buffer) > this.og && this.flush()
                            };
                            c.prototype.flush = function () {
                                var b = this.buffer;
                                b.length && (this.send(b), this.buffer =[])
                            };
                            return c
                        }(Hl),
                        lo = /opera mini/i,
                        bi = [
                            "phone", "email"
                        ],
                        Il = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                        io = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                        jo = [
                            65, 90
                        ],
                        ko = [
                            97, 122
                        ],
                        go = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                        eo = new RegExp("(" + I("|", Il) + ")", "i"),
                        co = new RegExp("(" + I("|", bi) + ")", "i"),
                        vk = [
                            "password", "passwd", "pswd"
                        ],
                        fo = new RegExp("(" + I("|", Il.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) + ")", "i"),
                        Xa = "metrikaId_" + Math.random(),
                        uc = {
                            counter: 0
                        },
                        as = v(function () {
                            var a;
                            return a = {},
                            a.A = 1,
                            a.ABBR = 2,
                            a.ACRONYM = 3,
                            a.ADDRESS = 4,
                            a.APPLET = 5,
                            a.AREA = 6,
                            a.B = 7,
                            a.BASE = 8,
                            a.BASEFONT = 9,
                            a.BDO = 10,
                            a.BIG = 11,
                            a.BLOCKQUOTE = 12,
                            a.BODY = 13,
                            a.BR = 14,
                            a.BUTTON = 15,
                            a.CAPTION = 16,
                            a.CENTER = 17,
                            a.CITE = 18,
                            a.CODE = 19,
                            a.COL = 20,
                            a.COLGROUP = 21,
                            a.DD = 22,
                            a.DEL = 23,
                            a.DFN = 24,
                            a.DIR = 25,
                            a.DIV = 26,
                            a.DL = 27,
                            a.DT = 28,
                            a.EM = 29,
                            a.FIELDSET = 30,
                            a.FONT = 31,
                            a.FORM = 32,
                            a.FRAME = 33,
                            a.FRAMESET = 34,
                            a.H1 = 35,
                            a.H2 = 36,
                            a.H3 = 37,
                            a.H4 = 38,
                            a.H5 = 39,
                            a.H6 = 40,
                            a.HEAD = 41,
                            a.HR = 42,
                            a.HTML = 43,
                            a.I = 44,
                            a.IFRAME = 45,
                            a.IMG = 46,
                            a.INPUT = 47,
                            a.INS = 48,
                            a.ISINDEX = 49,
                            a.KBD = 50,
                            a.LABEL = 51,
                            a.LEGEND = 52,
                            a.LI = 53,
                            a.LINK = 54,
                            a.MAP = 55,
                            a.MENU = 56,
                            a.META = 57,
                            a.NOFRAMES = 58,
                            a.NOSCRIPT = 59,
                            a.OBJECT = 60,
                            a.OL = 61,
                            a.OPTGROUP = 62,
                            a.OPTION = 63,
                            a.P = 64,
                            a.PARAM = 65,
                            a.PRE = 66,
                            a.Q = 67,
                            a.S = 68,
                            a.SAMP = 69,
                            a.SCRIPT = 70,
                            a.SELECT = 71,
                            a.SMALL = 72,
                            a.SPAN = 73,
                            a.STRIKE = 74,
                            a.STRONG = 75,
                            a.STYLE = 76,
                            a.SUB = 77,
                            a.SUP = 78,
                            a.TABLE = 79,
                            a.TBODY = 80,
                            a.TD = 81,
                            a.TEXTAREA = 82,
                            a.TFOOT = 83,
                            a.TH = 84,
                            a.THEAD = 85,
                            a.TITLE = 86,
                            a.TR = 87,
                            a.TT = 88,
                            a.U = 89,
                            a.UL = 90,
                            a.VAR = 91,
                            a.NOINDEX = 100,
                            a
                        }),
                        Yr = [
                            17,
                            18,
                            38,
                            32,
                            39,
                            15,
                            11,
                            7,
                            1
                        ],
                        cu = function () {
                            var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                            return {
                                tj: new RegExp("(" + I("|", a) + ")", "i"),
                                Dj: new RegExp("(" + I("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) + ")", "i"),
                                rj: /ym-record-keys/i,
                                ii: "\u2022",
                                Cj: 88
                            }
                        }(),
                        Ak = Tb(u(cu.ii, O)),
                        rd = !0,
                        Hg = "",
                        Ig = !1,
                        Jg = !0,
                        Kg = !1,
                        ao = sa(function (a, c) {
                            var b = C([
                                a,
                                "efv." + c.event
                            ], D);
                            c.O = A(w(O, b), c.O);
                            return c
                        }),
                        Jl = v(function (a) {
                            var c = [],
                                b = [],
                                d = [];
                            a.document.attachEvent && ! a.opera && (c.push(Hf), b.push(ds), b.push(es));
                            a.document.addEventListener ? c.push(yk) : (b.push(xk), d.push(yk));
                            return $n(a, [
                                {
                                    target: a,
                                    type: "window",
                                    event: "beforeunload",
                                    O: [E]
                                },
                                {
                                    target: a,
                                    type: "window",
                                    event: "unload",
                                    O: [E]
                                },
                                {
                                    event: "click",
                                    O: [Ze]
                                },
                                {
                                    event: "dblclick",
                                    O: [Ze]
                                }, {
                                    event: "mousedown",
                                    O: [Ze]
                                }, {
                                    event: "mouseup",
                                    O: [gs]
                                }, {
                                    event: "keydown",
                                    O: [hs]
                                }, {
                                    event: "keypress",
                                    O: [is]
                                }, {
                                    event: "copy",
                                    O: [Ck]
                                }, {
                                    event: "blur",
                                    O: c
                                }, {
                                    event: "focusin",
                                    O: b
                                }, {
                                    event: "focusout",
                                    O: d
                                }
                            ].concat(! a.document.attachEvent || a.opera ? [
                                {
                                    target: a,
                                    type: "window",
                                    event: "focus",
                                    O: [$h]
                                }, {
                                    target: a,
                                    type: "window",
                                    event: "blur",
                                    O: [Hf]
                                }
                            ] : []).concat(a.document.addEventListener ? [
                                {
                                    event: "focus",
                                    O: [xk]
                                }, {
                                    event: "change",
                                    O: [zk]
                                }, {
                                    event: "submit",
                                    O: [Ek]
                                }
                            ] : [
                                {
                                    type: "formInput",
                                    event: "change",
                                    O: [zk]
                                }, {
                                    type: "form",
                                    event: "submit",
                                    O: [Ek]
                                }
                            ]))
                        }),
                        Yn = v(function (a) {
                            return Ec(a) ? [{
                                    target: a,
                                    type: "document",
                                    event: "mouseleave",
                                    O: [js]
                                }] : []
                        }),
                        du = [
                            "submit", "beforeunload", "unload"
                        ],
                        eu = v(function (a, c) {
                            var b = c(a);
                            return J(function (d, e) {
                                d[e.type + ":" + e.event] = e.O;
                                return d
                            }, {}, b)
                        }),
                        fu = u(Jl, function (a, c, b, d) {
                            return eu(c, a)[b + ":" + d] || []
                        }),
                        Zn = /^\s*function submit\(\)/,
                        gu = B("fw.p", function (a, c) {
                            var b;
                            if (!(b = c.Rg || ! c.zb)) {
                                var d = H(a),
                                    e = !1;
                                b = d.C("hitParam", {});
                                var f = M(c);
                                b[f] && (d = d.C("counters", {}), e = fe(c.ca) && ! d[f]);
                                b[f] = 1;
                                b = e
                            }
                            if (b) 
                                return L.resolve(E);
                            
                            b = new bu(a, fu);
                            return Vn(a, c, b, Jl, du)
                        }),
                        eh,
                        Kl = (eh = function (a) {
                            function c(b, d, e, f) {
                                void 0 === f && (f = 0);
                                d = a.call(this, b, d, e) || this;
                                d.ye = 0;
                                d.Cb = 0;
                                d.xe = 0;
                                d.buffer = [];
                                d.bd = 2E3;
                                d.$ = pd(b);
                                d.Wc();
                                d.xe = f;
                                return d
                            }
                            Na(c, a);
                            c.prototype.Ze = function (b) {
                                return ua(this.$.T("ag", b))
                            };
                            c.prototype.Ye = function (b, d) {
                                var e = this;
                                b(Qa(D(this.l, "wv2.b.st"), function (f) {
                                    e.send(f, d)
                                }))
                            };
                            c.prototype.Ii = function (b, d) {
                                var e = this;
                                ka(this.l, this.Pe);
                                var f = Math.ceil(this.ma.lb(d) / 63E4),
                                    g = this.ma.qe(d, f);
                                y(function (h, k) {
                                    var l,
                                        m = z({}, b, (l =
                                            {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l.partsTotal = g.length, l));
                                    l = e.ma.Ia([m], !1);
                                    e.Ye(l, [m])
                                }, g);
                                this.Wc()
                            };
                            c.prototype.send = function (b, d) {
                                var e = this;
                                this.$.T("se", d);
                                return a.prototype.send.call(this, b, d).then(O, function () {
                                    e.$.T("see", d)
                                })
                            };
                            c.$e = function (b, d, e, f, g) {
                                c.ed["" + b + d] || (this.ed[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                                return this.ed[d]
                            };
                            c.prototype.Uh = function () {
                                return this.xe && this.ye >= this.xe
                            };
                            c.prototype.push = function (b) {
                                var d = this;
                                if (!this.Uh()) {
                                    this.$.T("p", b);
                                    var e = this.ma.ub(b),
                                        f = this.ma.lb(e);
                                    7E5 < f ? this.Ii(b, e) : (e = this.Ze(this.buffer.concat([b])), e = J(function (g, h) {
                                        return g + d.ma.lb(d.ma.ub(h))
                                    }, 0, e), this.Cb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Cb += f)
                                }
                            };
                            c.prototype.F = function (b, d) {
                                this.$.F([b], d)
                            };
                            c.prototype.ga = function (b, d) {
                                this.$.ga([b], d)
                            };
                            c.prototype.flush = function (b) {
                                var d = this.buffer.concat(this.Ze(this.buffer));
                                d.length && (this.buffer =[], this.ye += this.Cb, this.Cb = 0, b = this.ma.Ia(d, b), this.Ye(b, d))
                            };
                            return c
                        }(Hl),
                        eh.ed =
                            {},
                        eh),
                        ab = function () {
                            function a(c, b, d) {
                                this.Yh = "wv2.c";
                                this.Pb = [];
                                this.ia = [];
                                this.l = c;
                                this.L = Ff(c, this, d, this.Yh);
                                this.G = b;
                                this.eb = this.G.sh();
                                this.start = this.L.H(this.start, "st");
                                this.stop = this.L.H(this.stop, "sp")
                            }
                            a.prototype.start = function () {
                                var c = this;
                                this.Pb = A(function (b) {
                                    var d = b[0],
                                        e = b[2];
                                    b = G(c.L.H(b[1], d[0]), c);
                                    return c.eb.F(e || c.l, d, b)
                                }, this.ia)
                            };
                            a.prototype.stop = function () {
                                y(ia, this.Pb)
                            };
                            a.prototype.Z = function (c) {
                                return this.G.sa().Z(c)
                            };
                            return a
                        }(),
                        Tn = [
                            "checkbox", "radio"
                        ],
                        Un = /pwd|value|password/i,
                        fh = P("location.href"),
                        hu = function (a) {
                            function c(b, d, e) {
                                d = a.call(this, b, d, e) || this;
                                d.ra = {
                                    elements: [],
                                    attributes: []
                                };
                                d.index = 0;
                                d.Vd = d.L.H(d.Vd, "o");
                                d.nd = d.L.H(d.nd, "io");
                                d.cd = d.L.H(d.cd, "ao");
                                d.de = d.L.H(d.de, "a");
                                d.ae = d.L.H(d.ae, "at");
                                d.ee = d.L.H(d.ee, "r");
                                d.ce = d.L.H(d.ce, "c");
                                d.za = new b.MutationObserver(d.Vd);
                                return d
                            }
                            Na(c, a);
                            c.prototype.start = function () {
                                this.za.observe(this.l.document.documentElement, {
                                    attributes: !0,
                                    characterData: !0,
                                    childList: !0,
                                    subtree: !0,
                                    attributeOldValue: !0,
                                    characterDataOldValue: !0
                                })
                            };
                            c.prototype.stop = function () {
                                this.za.disconnect()
                            };
                            c.prototype.cd = function (b) {
                                var d = b.target;
                                b = b.attributeName;
                                var e = Nb(this.l)(d, this.ra.elements);
                                -1 === e && (e = this.ra.elements.push(d) - 1, this.ra.attributes[e] =
                                    {});
                                this.ra.attributes[e] || (this.ra.attributes[e] =
                                    {});
                                e = this.ra.attributes[e];
                                var f = d.getAttribute(b);
                                e[b] = se(this.l, d, b, f, this.G.Jb()).value
                            };
                            c.prototype.nd = function (b) {
                                function d(k) {
                                    var l = Nb(e.l)(k, f);
                                    return -1 === l ? (f.push(k), k =
                                        { vd: {}
                                    }, g.push(k), k) : g[l]
                                }
                                var e = this,
                                    f = [],
                                    g = [];
                                y(function (k) {
                                    var l = k.attributeName,
                                        m = k.removedNodes,
                                        p = k.oldValue,
                                        r = k.target,
                                        q = k.nextSibling,
                                        t = k.previousSibling;
                                    switch (k.type) {
                                        case "attributes": e.cd(k);
                                            var x = d(r);
                                            x.vd[l] || (x.vd[l] = se(e.l, r, l, p, e.G.Jb()).value);
                                            break;
                                        case "childList": m && y(function (F) {
                                                x = d(F);
                                                x.We || z(x, {
                                                    We: r,
                                                    hh: q ? q : void 0,
                                                    ih: t ? t : void 0
                                                })
                                            }, Ba(m));
                                            break;
                                        case "characterData": x = d(r),
                                            x.Xe || (x.Xe = p)
                                    }
                                }, b);
                                var h = this.G.sa();
                                y(function (k, l) {
                                    h.pe(k, g[l])
                                }, f)
                            };
                            c.prototype.Vd = function (b) {
                                var d = this;
                                if (fh(this.l)) {
                                    var e = this.G.stamp();
                                    this.nd(b);
                                    y(function (f) {
                                        var g = f.addedNodes,
                                            h = f.removedNodes,
                                            k = f.target;
                                        switch (f.type) {
                                            case "childList": h && h.length && d.ee(Ba(h), e);
                                                g && g.length && d.de(Ba(g), e);
                                                break;
                                            case "characterData": d.ce(k, e)
                                        }
                                    }, b);
                                    this.ae(e)
                                } else 
                                    this.stop()
                                
                            };
                            c.prototype.ae = function (b) {
                                var d = this;
                                y(function (e, f) {
                                    var g = d.yc();
                                    d.G.Y("mutation", {
                                        index: g,
                                        attributes: d.ra.attributes[f],
                                        target: d.Z(e)
                                    }, "ac", b)
                                }, this.ra.elements);
                                this.ra.elements = [];
                                this.ra.attributes = []
                            };
                            c.prototype.de = function (b, d) {
                                var e = this,
                                    f = this.yc();
                                this.G.sa().Cc({
                                    nodes: b,
                                    Vc: function (g) {
                                        g = A(function (h) {
                                            h.node = void 0;
                                            return h
                                        }, g);
                                        e.G.Y("mutation", {
                                            index: f,
                                            nodes: g
                                        }, "ad", d)
                                    }
                                })
                            };
                            c.prototype.ee = function (b, d) {
                                var e = this,
                                    f = this.yc(),
                                    g = this.G.sa(),
                                    h = A(function (k) {
                                        var l = g.removeNode(k);
                                        Ti(e.l, k, function (m) {
                                            g.removeNode(m)
                                        });
                                        return l
                                    }, b);
                                this.G.Y("mutation", {
                                    index: f,
                                    nodes: h
                                }, "re", d)
                            };
                            c.prototype.ce = function (b, d) {
                                var e = this.yc();
                                this.G.Y("mutation", {
                                    value: b.textContent,
                                    target: this.Z(b),
                                    index: e
                                }, "tc", d)
                            };
                            c.prototype.yc = function () {
                                var b = this.index;
                                this.index += 1;
                                return b
                            };
                            return c
                        }(ab),
                        iu = function () {
                            function a(c, b) {
                                var d = this;
                                this.uc = [];
                                this.fb = [];
                                this.Ud = 1;
                                this.Me = this.Pf = 0;
                                this.ya = {};
                                this.Nb = {};
                                this.Ib = [];
                                this.Gd = function (f) {
                                    return d.fb.length ? K(f, d.fb) : !1
                                };
                                this.removeNode = function (f) {
                                    var g = d.Z(f),
                                        h = Ma(f);
                                    if (h) 
                                        return h = "NR:" + h.toLowerCase(),
                                        d.Gd(h) && d.$.T(h, {
                                            data: {
                                                node: f,
                                                id: g
                                            }
                                        }),
                                        g
                                    
                                };
                                this.kb = function (f) {
                                    var g = Ma(f);
                                    if (g) {
                                        var h = f.__ym_indexer;
                                        return h ? h : (h = d.Ud, f.__ym_indexer = h, d.Ud += 1, g = "NA:" + g.toLowerCase(), d.Gd(g) && d.$.T(g, {
                                            data: {
                                                node: f,
                                                id: h
                                            }
                                        }), h)
                                    }
                                    return null
                                };
                                this.Jf = function () {
                                    d.Pf = Q(d.l, w(G(d.aa, d, !1), d.Jf), 50, "i.s")
                                };
                                this.Hf = function () {
                                    d.Me = Q(d.l, w(G(d.hd, d, !1), d.Hf), 50, "i.g")
                                };
                                this.Bi = function (f) {
                                    null === d.ya[f] && delete d.ya[f]
                                };
                                this.l = c;
                                var e = Ff(c, this, "i");
                                this.$ = pd(c);
                                this.options = b;
                                this.start = e.H(this.start, "st");
                                this.stop = e.H(this.stop, "sp");
                                this.Z = e.H(this.Z, "i");
                                this.pe = e.H(this.pe, "o");
                                this.Cc = e.H(this.Cc, "a");
                                this.removeNode = e.H(this.removeNode, "r");
                                this.aa = e.H(this.aa, "s");
                                this.hd = e.H(this.hd, "g")
                            }
                            a.prototype.pe = function (c, b) {
                                var d = this.kb(c);
                                Va(d) || (this.Nb[d] && this.Z(c), this.Nb[d] = b)
                            };
                            a.prototype.F = function (c, b, d) {
                                c = "" + b + c;
                                this.fb.push(c);
                                this.Gd(c) || this.fb.push(c);
                                this.$.F([c], d)
                            };
                            a.prototype.ga = function (c, b, d) {
                                var e = "" + b + c;
                                this.fb = ea(function (f) {
                                    return f !== e
                                }, this.fb);
                                this.$.ga([e], d)
                            };
                            a.prototype.start = function () {
                                this.Jf();
                                this.Hf()
                            };
                            a.prototype.stop = function () {
                                this.flush();
                                ka(this.l, this.Me);
                                ka(this.l, this.Pf);
                                this.uc = [];
                                this.Ib = [];
                                this.ya = {};
                                this.Nb = {}
                            };
                            a.prototype.Cc = function (c) {
                                var b = this,
                                    d = [],
                                    e = 0,
                                    f = {
                                        Vc: c.Vc,
                                        result: [],
                                        Dc: 0,
                                        nodes: d
                                    };
                                this.uc.push(f);
                                y(function (g) {
                                    Ti(b.l, g, function (h) {
                                        var k = b.kb(h);
                                        Va(k) || (d.push(h), b.ya[k] && b.Z(h), b.ya[k] =
                                            { node: h,
                                            event: f,
                                            Ui: e
                                        }, e += 1)
                                    })
                                }, c.nodes)
                            };
                            a.prototype.Z = function (c) {
                                if (c === this.l) 
                                    return 0;
                                
                                var b = this.kb(c),
                                    d = this.ya[b],
                                    e = this.lh(b),
                                    f = e.We,
                                    g = e.vd,
                                    h = e.Xe,
                                    k = e.hh,
                                    l = e.ih;
                                if (d) {
                                    e = d.event;
                                    d = d.Ui;
                                    var m = Gs(this.l) === c;
                                    k = k || c.nextSibling;
                                    var p = l || c.previousSibling;
                                    l = ! m && k ? this.kb(k) : null;
                                    p = ! m && p ? this.kb(p) : null;
                                    m = this.l;
                                    k = this.options;
                                    f = this.kb(f || c.parentNode || c.parentElement) || 0;
                                    var r = g,
                                        q = void 0;
                                    void 0 === p && (p = null);
                                    void 0 === l && (l = null);
                                    void 0 === r && (r =
                                        {});
                                    void 0 === q && (q = Ma(c));
                                    if (W(q)) 
                                        c = void 0;
                                     else {
                                        g = {
                                            id: b,
                                            prev: p !== f ? p : null,
                                            next: l !== f ? l : null,
                                            parent: f,
                                            name: q.toLowerCase(),
                                            node: c
                                        };
                                        if (Lf(c)) {
                                            if (h = Qn(c, h), g.attributes =
                                                {}, g.content = h) 
                                                if (c = qd(m, c)) 
                                                    g.content = "" !== cb(h) ? ho(m, h) : h,
                                                    g.hidden = c
                                                
                                            
                                        } else 
                                            h = Rn(m, c, k, r, q),
                                            m = h.pb,
                                            g.attributes = h.zg,
                                            m && (g.hidden = m),
                                            c.namespaceURI && bb(c.namespaceURI, "svg") && (g.namespace = c.namespaceURI);
                                         c = g
                                    }
                                    if (W(c)) 
                                        return;
                                    
                                    this.ya[b] = null;
                                    this.Ib.push(b);
                                    e.result[d] = c;
                                    e.Dc += 1;
                                    e.nodes.length === e.Dc && e.Vc(e.result)
                                }
                                return b
                            };
                            a.prototype.flush = function () {
                                this.aa(!0)
                            };
                            a.prototype.hd = function () {
                                if (this.Ib.length) {
                                    var c = bc(this.Ib, this.Bi),
                                        b = pg(this.l, 30);
                                    c(b)
                                }
                            };
                            a.prototype.aa = function (c) {
                                var b = this;
                                if (fh(this.l)) {
                                    var d = da(this.ya);
                                    d = J(function (e, f) {
                                        b.ya[f] && e.push(b.ya[f].node);
                                        return e
                                    }, [], d);
                                    d = bc(d, this.Z);
                                    c = c ? Rj(E) : Pj(this.l, 20);
                                    d(c);
                                    this.uc = ea(function (e) {
                                        return e.Dc !== e.result.length
                                    }, this.uc)
                                }
                            };
                            a.prototype.lh = function (c) {
                                if (Va(c)) 
                                    return {};
                                
                                var b = this.Nb[c];
                                return b ? (this.Nb[c] = null, this.Ib.push(c), b) : {}
                            };
                            return a
                        }(),
                        ju = [
                            "input",
                            "change",
                            "keyup",
                            "paste",
                            "cut"
                        ],
                        ku = function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this;
                                b.inputs = {};
                                b.qd = !1;
                                b.Kc = b.L.H(b.Kc, "ii");
                                b.Lc = b.L.H(b.Lc, "ir");
                                b.Qc = b.L.H(b.Qc, "ri");
                                b.Zc = b.L.H(b.Zc, "ur");
                                b.Fd = b.L.H(b.Fd, "ce");
                                b.Bc = b.L.H(b.Bc, "vc");
                                return b
                            }
                            Na(c, a);
                            c.prototype.start = function () {
                                var b = this,
                                    d = this.G.sa();
                                this.qd = this.Gg();
                                y(function (e) {
                                    e = e.toLowerCase();
                                    d.F(e, "NA:", G(b.Kc, b));
                                    d.F(e, "NR:", G(b.Lc, b))
                                }, Kf);
                                this.Pb = [
                                    this.eb.F(this.l.document, ju, G(this.Fd, this)),
                                    function () {
                                        y(function (e) {
                                            e = e.toLowerCase();
                                            d.ga(e, "NA:", b.Kc);
                                            d.ga(e, "NR:", b.Lc)
                                        }, Kf);
                                        y(b.Zc, da(b.inputs))
                                    }
                                ]
                            };
                            c.prototype.Zc = function (b) {
                                var d = this.inputs[b];
                                if (d) {
                                    if (this.qd) {
                                        var e = d.vi;
                                        d = d.element;
                                        e && this.l.Object.defineProperty(d, this.zc(d), e)
                                    }
                                    delete this.inputs[b]
                                }
                            };
                            c.prototype.Lc = function (b) {
                                b && this.Zc(b.data.id)
                            };
                            c.prototype.Kc = function (b) {
                                b && (b = b.data, this.Qc(b.node, b.id))
                            };
                            c.prototype.zc = function (b) {
                                return Qe(b) ? "checked" : "value"
                            };
                            c.prototype.Fd = function (b) {
                                if (b = b.target) {
                                    var d = this.zc(b);
                                    this.Bc(b[d], b)
                                }
                            };
                            c.prototype.Bc = function (b, d) {
                                var e = this.Z(d),
                                    f = this.inputs[e];
                                if (! f && (f = this.Qc(f, e), ! f)) 
                                    return;
                                
                                e = f.Ig;
                                var g = f.value,
                                    h = this.zc(d),
                                    k = ! b || K(typeof b, ["string", "boolean", "number"]),
                                    l = this.G.Jb().Ld;
                                k && b !== g && (g = se(this.l, d, h, b, this.G.Jb()).value, e ? this.G.Y("event", {
                                    target: this.Z(d),
                                    checked: !! b
                                }, "change") : (e = Oc(this.l, d, l), l = e.hb, this.G.Y("event", {
                                    value: g,
                                    hidden: e.qb && ! l,
                                    target: this.Z(d)
                                }, "change")), f.value = b)
                            };
                            c.prototype.Qc = function (b, d) {
                                var e = this;
                                if (! Df(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) 
                                    return null;
                                
                                var f = Qe(b),
                                    g = this.zc(b),
                                    h = {
                                        element: b,
                                        Ig: f,
                                        value: b[g]
                                    };
                                this.inputs[d] = h;
                                this.qd && Qb(this.l, function () {
                                    var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                        l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                                        m = z({}, k, l);
                                    if (Da("((set)?(\\s?" + g + ")?)?", m.set)) {
                                        try {
                                            e.l.Object.defineProperty(b, g, z({}, m, {
                                                configurable: !0,
                                                set: function (p) {
                                                    e.Bc(p, this);
                                                    return m.set.call(this, p)
                                                }
                                            }))
                                        } catch (p) {}h.vi = m
                                    }
                                });
                                return h
                            };
                            c.prototype.Gg = function () {
                                var b = !0,
                                    d = db(this.l)("input");
                                try {
                                    d = db(this.l)("input");
                                    d.value = "INPUT_VALUE";
                                    d.style.setProperty("display", "none", "important");
                                    d.setAttribute("type", "text");
                                    d.setAttribute("class", "__ym_input_override_test");
                                    var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                        f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                                        g = z({}, e, f);
                                    this.l.Object.defineProperty(d, "value", z({}, g, {
                                        configurable: !0,
                                        set: function (h) {
                                            return g.set.call(d, h)
                                        }
                                    }));
                                    "INPUT_VALUE" !== d.value && (b =! 1);
                                    d.value = "INPUT_TEST";
                                    "INPUT_TEST" !== d.value && (b =! 1)
                                } catch (h) {
                                    b = !1
                                }
                                return b
                            };
                            return c
                        }(ab),
                        lu = function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this;
                                b.Xa = {
                                    width: 0,
                                    height: 0,
                                    pageHeight: 0,
                                    pageWidth: 0,
                                    orientation: 0
                                };
                                b.ia.push([["resize"], b.ti]);
                                b.ia.push([["orientationchange"], b.oi]);
                                return b
                            }
                            Na(c, a);
                            c.prototype.start = function () {
                                a.prototype.start.call(this);
                                this.Mf()
                            };
                            c.prototype.ti = function () {
                                var b = this.Dd();
                                this.Ih(b) && (this.Xa = b, this.Nf(b))
                            };
                            c.prototype.oi = function () {
                                var b = this.Dd();
                                this.Xa.orientation !== b.orientation && (this.Xa = b, this.Ei(b))
                            };
                            c.prototype.pf = function (b) {
                                return ! b.height || ! b.width || ! b.pageWidth || ! b.pageHeight
                            };
                            c.prototype.Ih = function (b) {
                                return b.height !== this.Xa.height || b.width !== this.Xa.width
                            };
                            c.prototype.Dd = function () {
                                var b = this.G.jb(),
                                    d = Kc(this.l),
                                    e = d[0];
                                d = d[1];
                                b = b.Cd();
                                return {
                                    width: e,
                                    height: d,
                                    pageWidth: b ? b.scrollWidth : 0,
                                    pageHeight: b ? b.scrollHeight : 0,
                                    orientation: this.G.jb().uh()
                                }
                            };
                            c.prototype.Ei = function (b) {
                                var d;
                                void 0 === d && (d = this.G.stamp());
                                this.G.Y("event", {
                                    width: b.width,
                                    height: b.height,
                                    orientation: b.orientation
                                }, "deviceRotation", d)
                            };
                            c.prototype.Nf = function (b, d) {
                                void 0 === d && (d = this.G.stamp());
                                this.G.Y("event", {
                                    width: b.width,
                                    height: b.height,
                                    pageWidth: b.pageWidth,
                                    pageHeight: b.pageHeight
                                }, "resize", d)
                            };
                            c.prototype.Mf = function () {
                                var b = this.Dd();
                                this.pf(b) ? Q(this.l, G(this.Mf, this), 300) : (this.pf(this.Xa) && (this.Xa = b), this.Nf(b, 0))
                            };
                            return c
                        }(ab),
                        cf = function () {
                            function a(c) {
                                this.index = 0;
                                this.wb = {};
                                this.l = c
                            }
                            a.prototype.pc = function (c, b, d) {
                                void 0 === d && (d =
                                    {});
                                var e = ha(this.l),
                                    f = this.index;
                                this.index += 1;
                                this.wb[f] = {
                                    Ka: 0,
                                    Vb: !1,
                                    fh: c,
                                    dd: [],
                                    Pd: e(Y)
                                };
                                var g = this;
                                return function () {
                                    var h = Ja(arguments),
                                        k = d.gb && ! g.wb[f].Vb,
                                        l = g.wb[f];
                                    ka(g.l, l.Ka);
                                    l.dd = h;
                                    l.Vb = !0;
                                    var m = e(Y);
                                    if (k || m - l.Pd >= b) 
                                        c.apply(void 0, h),
                                        l.Pd = m;
                                    
                                    l.Ka = Q(g.l, function () {
                                        k || (c.apply(void 0, h), l.Pd = e(Y));
                                        l.Vb = !1;
                                        l.dd = []
                                    }, b, "th")
                                }
                            };
                            a.prototype.flush = function () {
                                var c = this;
                                y(function (b) {
                                    var d = c.wb[b],
                                        e = d.Ka,
                                        f = d.fh,
                                        g = d.dd;
                                    d.Vb && (c.wb[b].Vb =! 1, f.apply(void 0, g), ka(c.l, e))
                                }, da(this.wb))
                            };
                            return a
                        }(),
                        mu = function (a) {
                            function c(b, d, e) {
                                d = a.call(this, b, d, e) || this;
                                d.ag = [];
                                d.Ge = {
                                    x: 0,
                                    y: 0
                                };
                                d.Da = new cf(b);
                                d.Oc = d.L.H(d.Oc, "o");
                                d.ia.push([["scroll"], d.ui]);
                                return d
                            }
                            Na(c, a);
                            c.prototype.start = function () {
                                a.prototype.start.call(this);
                                this.G.Y("event", {
                                    x: Math.max(this.l.scrollX, 0),
                                    y: Math.max(this.l.scrollY, 0),
                                    page: !0,
                                    target: -1
                                }, "scroll", 0)
                            };
                            c.prototype.stop = function () {
                                a.prototype.stop.call(this);
                                this.Da.flush()
                            };
                            c.prototype.ui = function (b) {
                                if (this.G.jb().kf()) 
                                    this.Oc(b);
                                 else {
                                    var d = b.target,
                                        e = ea(function (f) {
                                            return f[0] === d
                                        }, this.ag).pop();
                                    e ? e = e[1] : (e = this.Da.pc(G(this.Oc, this), 100, {
                                        gb: !0
                                    }), this.ag.push([d, e]));
                                    e(b)
                                }
                            };
                            c.prototype.Oc = function (b) {
                                var d = this.G.jb().Cd();
                                b = b.target;
                                var e = this.Kb(b);
                                d = d === b || this.l === b || this.l.document === b;
                                var f = Math.max(e.left, 0);
                                e = Math.max(e.top, 0);
                                if (d) {
                                    if (this.Ge.x === f && this.Ge.y === e) 
                                        return;
                                    
                                    this.Ge = {
                                        x: f,
                                        y: e
                                    }
                                }
                                this.G.Y("event", {
                                    x: f,
                                    y: e,
                                    page: d,
                                    target: d ? -1 : this.Z(b)
                                }, "scroll")
                            };
                            c.prototype.Kb = function (b) {
                                var d = {
                                    left: 0,
                                    top: 0
                                };
                                if (! b) 
                                    return d;
                                
                                if (b.window === b) 
                                    return {
                                        top: b.scrollY || 0,
                                        left: b.scrollX || 0
                                    };
                                
                                var e = b.ownerDocument || b,
                                    f = b.documentElement,
                                    g = e.defaultView || e.parentWindow,
                                    h = e.body;
                                return b !== e || (b = this.G.jb().Cd(), b) ? K(b, [f, h]) ? {
                                    top: b.scrollTop || g.scrollY,
                                    left: b.scrollLeft || g.scrollX
                                } : {
                                    top: b.scrollTop || 0,
                                    left: b.scrollLeft || 0
                                } : d
                            };
                            return c
                        }(ab),
                        nu = [
                            "mousemove", "mousedown", "mouseup", "click"
                        ],
                        ou = function (a) {
                            function c(b, d, e) {
                                d = a.call(this, b, d, e) || this;
                                d.ia.push([nu, d.ni]);
                                d.Da = new cf(b);
                                d.Jc = d.L.H(d.Jc, "n");
                                d.Oi = d.L.H(d.Da.pc(G(d.Jc, d), 100), "t");
                                return d
                            }
                            Na(c, a);
                            c.prototype.stop = function () {
                                a.prototype.stop.call(this);
                                this.Da.flush()
                            };
                            c.prototype.ni = function (b) {
                                var d = null;
                                try {
                                    d = b.type
                                } catch (e) {
                                    return
                                }
                                "mousemove" === d ? this.Oi(b) : this.Jc(b)
                            };
                            c.prototype.Jc = function (b) {
                                var d = b.type,
                                    e = b.clientX;
                                e = void 0 === e ? null : e;
                                var f = b.clientY;
                                f = void 0 === f ? null : f;
                                b = b.target || this.l.document.elementFromPoint(e, f);
                                this.G.Y("event", {
                                    x: e || 0,
                                    y: f || 0,
                                    target: this.Z(b)
                                }, d)
                            };
                            return c
                        }(ab),
                        pu = [
                            "focus", "blur"
                        ],
                        qu = function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this;
                                b.ia.push([pu, b.gh]);
                                return b
                            }
                            Na(c, a);
                            c.prototype.gh = function (b) {
                                var d = b.target;
                                b = b.type;
                                this.G.Y("event", {
                                    target: this.Z(d === this.l ? this.l.document.documentElement : d)
                                }, b)
                            };
                            return c
                        }(ab),
                        ru = v(function (a) {
                            var c = na(a.getSelection, "getSelection");
                            return c ? G(c, a) : E
                        }),
                        su = w(ru, ia),
                        tu = [
                            "mousemove",
                            "touchmove",
                            "mousedown",
                            "touchdown",
                            "select"
                        ],
                        uu = /text|search|password|tel|url/,
                        vu = function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this;
                                b.Hd = !1;
                                b.ia.push([tu, b.Gh]);
                                return b
                            }
                            Na(c, a);
                            c.prototype.Gh = function (b) {
                                var d = this.G,
                                    e = b.type,
                                    f = b.which;
                                b = b.target;
                                if ("mousemove" !== e || 1 === f) 
                                    (e = "select" === e ? this.zh(b) : this.xh()) && e.start !== e.end ? (this.Hd =! 0, d.Y("event", e, "selection")) : this.Hd && (this.Hd =! 1, d.Y("event", {
                                        start: 0,
                                        end: 0
                                    }, "selection"))
                                
                            };
                            c.prototype.xh = function () {
                                var b = su(this.l);
                                if (b && 0 < b.rangeCount) {
                                    b = b.getRangeAt(0) || this.l.document.createRange();
                                    var d = this.Z(b.startContainer),
                                        e = this.Z(b.endContainer);
                                    if (! W(d) && ! W(e)) 
                                        return {start: b.startOffset, end: b.endOffset, startNode: d, endNode: e}
                                    
                                }
                            };
                            c.prototype.zh = function (b) {
                                if (uu.test(b.type || "")) {
                                    var d = this.Z(b);
                                    if (! W(d)) 
                                        return {start: b.selectionStart, end: b.selectionEnd, target: d}
                                    
                                }
                            };
                            return c
                        }(ab),
                        wu = {
                            focus: "windowfocus",
                            blur: "windowblur"
                        },
                        xu = function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this;
                                b.visibility = null;
                                W(b.l.document.hidden) ? W(b.l.document.msHidden) ? W(b.l.document.webkitHidden) || (b.visibility =
                                    { hidden: "webkitHidden",
                                    event: "webkitvisibilitychange"
                                }) : b.visibility = {
                                    hidden: "msHidden",
                                    event: "msvisibilitychange"
                                } : b.visibility = {
                                    hidden: "hidden",
                                    event: "visibilitychange"
                                };
                                b.handleEvent = b.L.H(b.handleEvent, "e");
                                return b
                            }
                            Na(c, a);
                            c.prototype.start = function () {
                                this.Pb = [this.eb.F(this.l, this.visibility ? [this.visibility.event] : [
                                        "focus", "blur"
                                    ], G(this.handleEvent, this))]
                            };
                            c.prototype.handleEvent = function (b) {
                                this.G.Y("event", {}, wu[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                            };
                            return c
                        }(ab),
                        yu = [
                            "touchmove",
                            "touchstart",
                            "touchend",
                            "touchcancel",
                            "touchforcechange"
                        ],
                        zu = function (a) {
                            function c(b, d, e) {
                                d = a.call(this, b, d, e) || this;
                                d.Xc = {};
                                d.scrolling = !1;
                                d.Kf = 0;
                                d.ia.push([["scroll"], d.Di, d.l.document]);
                                d.ia.push([yu, d.Qi, d.l.document]);
                                d.Da = new cf(b);
                                d.Ob = d.L.H(d.Ob, "nh");
                                d.Pi = d.L.H(d.Da.pc(d.Ob, d.G.jb().kf() ? 0 : 50, {
                                    gb: !0
                                }), "th");
                                return d
                            }
                            Na(c, a);
                            c.prototype.Di = function () {
                                var b = this;
                                this.scrolling = !0;
                                ka(this.l, this.Kf);
                                this.Kf = Q(this.l, function () {
                                    b.scrolling = !1
                                }, 150)
                            };
                            c.prototype.Qi = function (b) {
                                var d = this,
                                    e = "touchcancel" === b.type || "touchend" === b.type;
                                b.changedTouches && 0 < b.changedTouches.length && y(function (f) {
                                    var g = d.Bh(f);
                                    f.__ym_touch_id = g;
                                    e && delete d.Xc[f.identifier]
                                }, Ba(b.changedTouches));
                                "touchmove" === b.type ? this.scrolling ? this.Ob(b) : this.Pi(b, this.G.stamp()) : this.Ob(b)
                            };
                            c.prototype.Bh = function (b) {
                                this.Xc[b.identifier] || (this.Xc[b.identifier] = Uh());
                                return this.Xc[b.identifier]
                            };
                            c.prototype.Ob = function (b, d) {
                                void 0 === d && (d = this.G.stamp());
                                var e = b.type,
                                    f = A(function (g) {
                                        return {
                                            id: g.__ym_touch_id,
                                            x: Math.round(g.clientX),
                                            y: Math.round(g.clientY),
                                            force: g.force
                                        }
                                    }, Ba(b.changedTouches));
                                0 < f.length && this.G.Y("event", {
                                    touches: f,
                                    target: this.Z(b.target)
                                }, e, d)
                            };
                            return c
                        }(ab),
                        Au = function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this;
                                b.ia.push([["load"], b.mi, b.l.document]);
                                return b
                            }
                            Na(c, a);
                            c.prototype.mi = function (b) {
                                b = b.target;
                                "IMG" === Ma(b) && b.getAttribute("srcset") && this.G.Y("mutation", {
                                    target: this.Z(b),
                                    attributes: {
                                        src: b.currentSrc
                                    }
                                }, "ac")
                            };
                            return c
                        }(ab),
                        Bu = function (a) {
                            function c(b, d, e) {
                                d = a.call(this, b, d, e) || this;
                                d.lg = 1;
                                d.Da = new cf(b);
                                d.fc = d.L.H(d.fc, "z");
                                return d
                            }
                            Na(c, a);
                            c.prototype.start = function () {
                                if (this.gf()) {
                                    a.prototype.start.call(this);
                                    this.fc();
                                    var b = this.eb.F(n(this.l, "visualViewport"), ["resize"], this.Da.pc(this.fc, 10));
                                    this.Pb.push(b)
                                }
                            };
                            c.prototype.stop = function () {
                                a.prototype.stop.call(this);
                                this.Da.flush()
                            };
                            c.prototype.fc = function () {
                                var b = this.gf();
                                b && b !== this.lg && (this.lg = b, this.Fi(b))
                            };
                            c.prototype.gf = function () {
                                var b = je(this.l);
                                return b ? b[2] : null
                            };
                            c.prototype.Fi = function (b) {
                                var d = Vf(this.l);
                                this.G.Y("event", {
                                    x: d.x,
                                    y: d.y,
                                    level: b
                                }, "zoom")
                            };
                            return c
                        }(ab),
                        ce,
                        df = {
                            91: "super",
                            93: "super",
                            224: "super",
                            18: "alt",
                            17: "ctrl",
                            16: "shift",
                            9: "tab",
                            8: "backspace",
                            46: "delete"
                        },
                        Ll = {
                            "super": 1,
                            oj: 2,
                            alt: 3,
                            shift: 4,
                            Jj: 5,
                            "delete": 6,
                            mj: 6
                        },
                        Cu = [
                            4,
                            9,
                            8,
                            32,
                            37,
                            38,
                            39,
                            40,
                            46
                        ],
                        Ml = (ce =
                            {}, ce["1"] =
                            {
                            91: "&#8984;",
                            93: "&#8984;",
                            224: "&#8984;",
                            18: "&#8997;",
                            17: "&#8963;",
                            16: "&#8679;",
                            9: "&#8677;",
                            8: "&#9003;",
                            46: "&#9003;"
                        }, ce["2"] =
                            {
                            91: "&#xff;",
                            93: "&#xff;",
                            224: "&#xff;",
                            18: "Alt",
                            17: "Ctrl",
                            16: "Shift",
                            9: "Tab",
                            8: "Backspace",
                            46: "Delete"
                        }, ce.$h =
                            {
                            32: "SPACEBAR",
                            37: "&larr;",
                            38: "&uarr;",
                            39: "&rarr;",
                            40: "&darr;",
                            13: "Enter"
                        }, ce),
                        Du = /flash/,
                        Eu = /ym-disable-keys/,
                        Fu = /^&#/,
                        Gu = function (a) {
                            function c(b, d, e) {
                                d = a.call(this, b, d, e) || this;
                                d.mb = {};
                                d.Oa = 0;
                                d.Ga = [];
                                d.Zf = [];
                                d.rc = 0;
                                d.Df = 0;
                                d.ia.push([["keydown"], d.Dh]);
                                d.ia.push([["keyup"], d.Eh]);
                                d.vg = -1 !== zc(n(b, "navigator.appVersion") || "", "Mac") ? "1" : "2";
                                d.Hc = d.L.H(d.Hc, "v");
                                d.sd = d.L.H(d.sd, "ec");
                                d.Uc = d.L.H(d.Uc, "sk");
                                d.Ad = d.L.H(d.Ad, "gk");
                                d.se = d.L.H(d.se, "sc");
                                d.ec = d.L.H(d.ec, "cc");
                                d.reset = d.L.H(d.reset, "r");
                                d.Rc = d.L.H(d.Rc, "rs");
                                return d
                            }
                            Na(c, a);
                            c.prototype.Dh = function (b) {
                                if (this.Hc(b) && !this.Sh(b)) {
                                    var d = b.keyCode;
                                    b.repeat || this.mb[d] || (this.mb[b.keyCode] =! 0, df[b.keyCode] && !this.Oa ? (this.Oa += 1, this.se(b), this.reset(300)) : this.Oa ? (this.Dg(), this.ie(b), this.sd()) : (this.reset(), this.ie(b)))
                                }
                            };
                            c.prototype.Eh = function (b) {
                                if (this.Hc(b)) {
                                    var d = b.keyCode,
                                        e = df[b.keyCode];
                                    this.mb[b.keyCode] && (this.mb[d] =! 1);
                                    e && this.Oa && (this.Oa = 0, this.mb =
                                        {});
                                    1 === this.Ga.length && (b = this.Ga[0], K(b.keyCode, Cu) && (this.Uc([b], !0), this.reset()));
                                    this.Ga = ea(w(P("keyCode"), Aa(d), Dc), this.Ga);
                                    ka(this.l, this.rc)
                                }
                            };
                            c.prototype.Hc = function (b) {
                                var d = this.l.document.activeElement;
                                d = d && "OBJECT" === d.nodeName && Du.test(d.getAttribute("type") || "");
                                b = b.target;
                                if (! b) 
                                    return ! d;
                                
                                b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && Eu.test(b.className);
                                return ! d && ! b
                            };
                            c.prototype.sd = function () {
                                this.Zf = this.Ga.slice(0);
                                ka(this.l, this.rc);
                                this.rc = Q(this.l, u(this.Zf, G(this.Uc, this)), 0, "e.c")
                            };
                            c.prototype.Uc = function (b, d) {
                                void 0 === d && (d =! 1);
                                if (1 < b.length || d) {
                                    var e = this.Ad(b);
                                    this.G.Y("event", {
                                        keystrokes: e
                                    }, "keystroke")
                                }
                            };
                            c.prototype.Ad = function (b) {
                                var d = this;
                                b = A(function (e) {
                                    e = e.keyCode;
                                    var f = df[e],
                                        g = d.th(e);
                                    return {
                                        id: e,
                                        key: g,
                                        isMeta: !! f && Fu.test(g),
                                        modifier: f
                                    }
                                }, b);
                                return xg(function (e, f) {
                                    return(Ll[e.modifier] || 100) - (Ll[f.modifier] || 100)
                                }, b)
                            };
                            c.prototype.th = function (b) {
                                return Ml[this.vg][b] || Ml.$h[b] || String.fromCharCode(b)
                            };
                            c.prototype.ie = function (b) {
                                K(b, this.Ga) || this.Ga.push(b)
                            };
                            c.prototype.se = function (b) {
                                this.ie(b);
                                this.ec()
                            };
                            c.prototype.ec = function () {
                                this.Oa ? Q(this.l, this.ec, 100) : this.Ga = []
                            };
                            c.prototype.Dg = function () {
                                ka(this.l, this.Df)
                            };
                            c.prototype.reset = function (b) {
                                b ? this.Df = Q(this.l, G(this.Rc, this), b) : this.Rc()
                            };
                            c.prototype.Rc = function () {
                                this.Oa = 0;
                                this.Ga = [];
                                this.mb = {};
                                ka(this.l, this.rc)
                            };
                            c.prototype.Sh = function (b) {
                                return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === df[b.keyCode] : !1
                            };
                            return c
                        }(ab),
                        Pn = [
                            "sr", "sd", "\u043d"
                        ],
                        Hu = /allow-same-origin/,
                        Iu = function (a) {
                            function c(b, d, e) {
                                d = a.call(this, b, d, e) || this;
                                d.Yb = [];
                                d.wd = {};
                                d.Wd = d.L.H(d.Wd, "fi");
                                d.Xd = d.L.H(d.Xd, "sd");
                                d.Yd = d.L.H(d.Yd, "src");
                                d.za = new b.MutationObserver(d.Yd);
                                return d
                            }
                            Na(c, a);
                            c.prototype.start = function () {
                                a.prototype.start.call(this);
                                this.G.Jb().ic && this.G.sa().F("iframe", "NA:", G(this.Wd, this));
                                this.G.cf().yd().F(["sdr"], G(this.Xd, this))
                            };
                            c.prototype.stop = function () {
                                a.prototype.stop.call(this);
                                y(function (b) {
                                    b.G.stop()
                                }, this.Yb)
                            };
                            c.prototype.Yd = function (b) {
                                var d = b.pop().target;
                                if (b = rb(function (f) {
                                    return f.jf === d
                                }, this.Yb)) {
                                    this.Yb = ea(function (f) {
                                        return f.jf !== d
                                    }, this.Yb);
                                    var e = b.G.zd();
                                    try {
                                        b.G.stop()
                                    } catch (f) {}
                                    this.oc(d, e)
                                }
                            };
                            c.prototype.Wd = function (b) {
                                if (b) {
                                    var d = b.data.node;
                                    this.za.observe(d, {
                                        attributes: !0,
                                        attributeFilter: ["src"]
                                    });
                                    this.oc(d, b.data.id)
                                }
                            };
                            c.prototype.oc = function (b, d) {
                                var e = this;
                                this.Qh(b) && Kb(this.l, b)(Qa(E, function () {
                                    var f = e.G.oc(b.contentWindow, d);
                                    e.Yb.push({G: f, jf: b})
                                }))
                            };
                            c.prototype.Xd = function (b) {
                                var d = this,
                                    e = b.frameId;
                                b = b.data;
                                this.wd[e] || (this.wd[e] =
                                    { data: []
                                });
                                var f = this.wd[e];
                                f.data = f.data.concat(b);
                                this.l.isNaN(f.pd) && y(function (g) {
                                    "page" === g.type && (f.pd = g.data.recordStamp - d.G.df())
                                }, f.data);
                                this.l.isNaN(f.pd) || (this.G.aa(A(function (g) {
                                    g.stamp += f.pd;
                                    g.stamp = d.l.Math.max(0, g.stamp);
                                    return g
                                }, f.data)), f.data =[])
                            };
                            c.prototype.Qh = function (b) {
                                var d = b.getAttribute("src"),
                                    e = b.getAttribute("sandbox");
                                return b.getAttribute("_ym_ignore") || e && ! e.match(Hu) || d && "about:blank" !== d && (d = Nc(this.l, d).host) && R(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
                            };
                            return c
                        }(ab),
                        Ju = v(function (a) {
                            var c = n(a, "sessionStorage");
                            if (! c) 
                                return null;
                            
                            try {
                                var b = c.getItem("__ym_tab_guid");
                                c = !1;
                                var d = n(a, "opener.sessionStorage");
                                try {
                                    c = !! d && b === d.getItem("__ym_tab_guid")
                                } catch (e) {
                                    c = !0
                                }
                                if (! b || c) 
                                    b = Uh(),
                                    a.sessionStorage.setItem("__ym_tab_guid", b);
                                
                                return b
                            } catch (e) {
                                return null
                            }
                        }),
                        Ku = function (a) {
                            function c(b, d, e) {
                                b = a.call(this, b, d, e) || this;
                                b.me = b.L.H(b.me, "ps");
                                return b
                            }
                            Na(c, a);
                            c.prototype.start = function () {
                                this.G.sa().Cc({
                                    nodes: [this.l.document.documentElement],
                                    Vc: this.me
                                })
                            };
                            c.prototype.me = function (b) {
                                var d = this.G.vh(),
                                    e = d.mh(),
                                    f = R(this.l),
                                    g = f.host,
                                    h = f.protocol;
                                f = f.pathname;
                                var k = Kc(this.l),
                                    l = k[0];
                                k = k[1];
                                this.G.Y("page", {
                                    content: A(function (m) {
                                        m.node = void 0;
                                        return m
                                    }, b),
                                    base: e || "",
                                    hasBase: !! e,
                                    viewport: {
                                        width: l,
                                        height: k
                                    },
                                    title: this.l.document.title,
                                    doctype: d.oh() || "",
                                    address: this.l.location.href,
                                    ua: this.l.navigator.userAgent,
                                    referrer: this.l.document.referrer,
                                    screen: {
                                        width: this.l.screen.width,
                                        height: this.l.screen.height
                                    },
                                    location: {
                                        host: g,
                                        protocol: h,
                                        path: f
                                    },
                                    recordStamp: this.G.df(),
                                    tabId: Ju(this.l)
                                }, "page", 0)
                            };
                            return c
                        }(ab),
                        Lu = [
                            "addRule", "removeRule", "insertRule", "deleteRule"
                        ],
                        gh = [
                            [
                                function (a) {
                                    function c(b, d, e) {
                                        b = a.call(this, b, d, e) || this;
                                        b.ab = {};
                                        b.Zb = {};
                                        b.Le = 0;
                                        b.Mc = b.L.H(b.Mc, "a");
                                        b.vb = b.L.H(b.vb, "sr");
                                        b.Nc = b.L.H(b.Nc, "r");
                                        b.aa = b.L.H(b.aa, "d");
                                        return b
                                    }
                                    Na(c, a);
                                    c.prototype.start = function () {
                                        var b = this.G.sa();
                                        b.F("style", "NA:", this.Mc);
                                        b.F("style", "NR:", this.Nc);
                                        this.aa()
                                    };
                                    c.prototype.stop = function () {
                                        var b = this;
                                        a.prototype.stop.call(this);
                                        var d = this.G.sa();
                                        d.ga("style", "NA:", this.Mc);
                                        d.ga("style", "NR:", this.Nc);
                                        this.aa();
                                        ka(this.l, this.Le);
                                        y(function (e) {
                                            b.ab[e].sheet && b.Gf(b.ab[e].sheet)
                                        }, da(this.ab));
                                        this.ab = {}
                                    };
                                    c.prototype.aa = function () {
                                        var b = this;
                                        y(function (d) {
                                            var e = d[0];
                                            d = d[1];
                                            if (d.length) {
                                                for (var f =[], g = d[0].stamp, h =[], k = 0; k < d.length; k += 1) {
                                                    var l = d[k],
                                                        m = l.stamp;
                                                    delete l.stamp;
                                                    m <= g + 50 ? f.push(l) : (h.push(f), g = m, f =[l])
                                                }
                                                f.length && h.push(f);
                                                h.length && y(function (p) {
                                                    b.G.Y("event", {
                                                        target: Ha(e),
                                                        changes: p
                                                    }, "stylechange", g)
                                                }, h);
                                                delete b.Zb[e]
                                            }
                                        }, Oa(this.Zb));
                                        this.Le = Q(this.l, this.aa, 100)
                                    };
                                    c.prototype.vb = function (b, d, e, f, g) {
                                        void 0 === f && (f = "");
                                        void 0 === g && (g = -1);
                                        this.Zb[b] || (this.Zb[b] =[]);
                                        this.Zb[b].push({op: d, style: f, index: g, stamp: e})
                                    };
                                    c.prototype.wi = function (b, d) {
                                        var e = this,
                                            f = b.addRule,
                                            g = b.removeRule,
                                            h = b.insertRule,
                                            k = b.deleteRule;
                                        T(f) && (b.addRule = function (l, m, p) {
                                            e.vb(d, "a", e.G.stamp(), l + "{" + m + "}", p);
                                            return f.call(b, l, m, p)
                                        });
                                        T(g) && (b.removeRule = function (l) {
                                            e.vb(d, "r", e.G.stamp(), "", l);
                                            return g.call(b, l)
                                        });
                                        T(h) && (b.insertRule = function (l, m) {
                                            e.vb(d, "a", e.G.stamp(), l, m);
                                            return h.call(b, l, m)
                                        });
                                        T(k) && (b.deleteRule = function (l) {
                                            e.vb(d, "r", e.G.stamp(), "", l);
                                            return k.call(b, l)
                                        })
                                    };
                                    c.prototype.Gf = function (b) {
                                        var d = this;
                                        y(function (e) {
                                            var f = d.l.CSSStyleSheet.prototype[e];
                                            T(f) && (b[e] = G(f, b))
                                        }, Lu)
                                    };
                                    c.prototype.Yg = function (b) {
                                        try {
                                            return b.cssRules || b.rules
                                        } catch (d) {
                                            return null
                                        }
                                    };
                                    c.prototype.Mc = function (b) {
                                        var d = b.data;
                                        b = d.id;
                                        d = d.node;
                                        if (d.sheet && ! d.getAttribute("src") && ! d.innerText) {
                                            var e = d.sheet,
                                                f = this.Yg(e);
                                            if (f && f.length) {
                                                for (var g =[], h = 0; h < f.length; h += 1) 
                                                    g.push({style: f[h].cssText, index: h, op: "a"});
                                                
                                                this.G.Y("event", {
                                                    changes: g,
                                                    target: b
                                                }, "stylechange")
                                            }
                                            this.wi(e, b);
                                            this.ab[b] = d
                                        }
                                    };
                                    c.prototype.Nc = function (b) {
                                        b = b.data.id;
                                        var d = this.ab[b];
                                        d && (delete this.ab[b], d.sheet && this.Gf(d.sheet))
                                    };
                                    return c
                                }(ab),
                                "ss"
                            ],
                            [
                                ku, "in"
                            ],
                            [
                                hu, "mu"
                            ],
                            [
                                lu, "r"
                            ],
                            [
                                mu, "sc"
                            ],
                            [
                                ou, "mo"
                            ],
                            [
                                qu, "f"
                            ],
                            [
                                vu, "se"
                            ],
                            [
                                xu, "wf"
                            ],
                            [
                                zu, "t"
                            ],
                            [
                                Au, "src"
                            ],
                            [
                                Bu, "z"
                            ],
                            [
                                Gu, "ks"
                            ]
                        ];
                    gh.push([Iu, "if"]);
                    gh.push([Ku, "pa"]);
                    var Mu = v(function (a) {
                            var c = a.document;
                            return {
                                Cd: function () {
                                    if (c.scrollingElement) 
                                        return c.scrollingElement;
                                    
                                    var b = 0 === hb(c.compatMode, "CSS1") ? c.documentElement : c.body;
                                    return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                                },
                                uh: function () {
                                    var b = a.screen;
                                    if (! b) 
                                        return 0;
                                    
                                    var d = rb(u(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                                    return n(b, d + ".angle") || 0
                                },
                                zj: u(a, ib),
                                kf: u(a, wd),
                                yj: u(a, Ue)
                            }
                        }),
                        Nu = function () {
                            function a(c, b) {
                                var d = this;
                                this.Mb = 0;
                                this.od = [];
                                this.Lb = null;
                                this.va = this.$b = this.Xf = !1;
                                this.recordStamp = 0;
                                this.vh = function () {
                                    return d.page
                                };
                                this.zd = function () {
                                    return d.Mb
                                };
                                this.df = function () {
                                    return d.recordStamp
                                };
                                this.sh = function () {
                                    return d.eb
                                };
                                this.cf = function () {
                                    return d.Lb
                                };
                                this.sa = function () {
                                    return d.Id
                                };
                                this.stamp = function () {
                                    return d.we ? d.l.Math.max(d.we(Y) - d.recordStamp, 0) : 0
                                };
                                this.Jb = function () {
                                    return d.options
                                };
                                this.jb = function () {
                                    return d.Ag
                                };
                                this.Y = function (f, g, h, k) {
                                    void 0 === k && (k = d.stamp());
                                    f = d.rh(f, g, h, k);
                                    d.aa(f)
                                };
                                this.rh = function (f, g, h, k) {
                                    void 0 === k && (k = d.stamp());
                                    return {
                                        type: f,
                                        data: g,
                                        stamp: k,
                                        frameId: d.Mb,
                                        event: h
                                    }
                                };
                                this.aa = function (f) {
                                    f = ca(f) ? f : [f];
                                    d.Xf && ! d.$b ? d.va ? (f = A(function (g) {
                                        return g.frameId ? g : z(g, {frameId: d.Mb})
                                    }, f), d.cf().Of(f)) : d.Wb(f) : d.od = d.od.concat(f)
                                };
                                this.l = c;
                                var e = Ff(c, this, "R");
                                this.te = e.H(this.te, "s");
                                this.aa = e.H(this.aa, "sd");
                                e = H(c);
                                e.C("wv2e") && de();
                                e.D("wv2e", !0);
                                this.options = b;
                                this.eb = fa(c);
                                this.Id = new iu(this.l, b);
                                this.Ag = Mu(c);
                                this.Ne = A(function (f) {
                                    return new f[0](c, d, f[1])
                                }, gh);
                                this.Nh();
                                this.page = Nn(this.l);
                                this.te()
                            }
                            a.prototype.start = function (c) {
                                this.Xf = !0;
                                this.Wb = c;
                                this.Lf()
                            };
                            a.prototype.stop = function () {
                                fh(this.l) && (y(function (c) {
                                    return c.stop()
                                }, this.Ne), this.Id.stop(), this.Lb && this.Lb.stop(), this.va || this.Y("event", {}, "eof"))
                            };
                            a.prototype.oc = function (c, b) {
                                var d = new a(c, z({}, this.options, {frameId: b}));
                                d.start(E);
                                return d
                            };
                            a.prototype.Nh = function () {
                                var c = this;
                                this.va = !!this.options.frameId;
                                this.Mb = this.options.frameId || 0;
                                this.$b = !this.va;
                                var b = this.options.fg || [];
                                b.push(R(this.l).host);
                                this.Lb = On(this.l, this, b);
                                b = this.Lb.yd();
                                ib(this.l) ? this.$b && b.F(["i"], function (d) {
                                    c.va = d.va;
                                    c.$b = !1;
                                    d.frameId && (c.Mb = d.frameId);
                                    c.Lf()
                                }) : this.$b = this.va = !1
                            };
                            a.prototype.Lf = function () {
                                var c = Id(this.od);
                                this.aa(c)
                            };
                            a.prototype.te = function () {
                                this.we = bg(this.l);
                                this.recordStamp = this.we(Y);
                                y(function (c) {
                                    c.start()
                                }, this.Ne);
                                this.Id.start()
                            };
                            return a
                        }(),
                        Ou = function () {
                            return function (a, c, b) {
                                var d = this;
                                this.fd = this.Rb = !1;
                                this.Wa = [];
                                this.sf = [];
                                this.Qe = [];
                                this.send = function (e, f, g) {
                                    e = d.sender(e, d.nc);
                                    f && g && e.then(f, g);
                                    return e
                                };
                                this.ve = function (e, f, g) {
                                    return new L(function (h, k) {
                                        e.push([f, h, k, g])
                                    })
                                };
                                this.Hh = function () {
                                    d.Wa = xg(function (g, h) {
                                        return g[3].partNum - h[3].partNum
                                    }, d.Wa);
                                    var e = J(function (g, h, k) {
                                            h = h[3];
                                            return g && k + 1 === h.partNum
                                        }, !0, d.Wa),
                                        f = !! d.Wa[d.Wa.length - 1][3].end;
                                    return e && f
                                };
                                this.ud = function (e) {
                                    mh(d.l, e.slice(), function (f) {
                                        d.send(f[0], f[1], f[2])
                                    }, 20, "s.w2.sf.fes");
                                    Id(e)
                                };
                                this.eh = function () {
                                    d.fd || (d.fd =! 0, d.ud(d.sf), d.ud(d.Qe))
                                };
                                this.Hg = function (e) {
                                    return J(function (f, g) {
                                        var h = "page" === g.type && ! g.frameId,
                                            k = "eof" === g.data.type || "eof" === g.event,
                                            l = h && !! g.partNum;
                                        return {
                                            ld: f.ld || l,
                                            kd: f.kd || h,
                                            jd: f.jd || k
                                        }
                                    }, {
                                        kd: !1,
                                        jd: !1,
                                        ld: !1
                                    }, e)
                                };
                                this.Fh = function (e, f, g) {
                                    g ? (e = d.ve(d.Wa, e, f[0]), d.Hh() && (d.ud(d.Wa), d.Rb =! 0)) : (d.Rb =! 0, e = d.send(e));
                                    return e
                                };
                                this.ef = function (e, f, g) {
                                    var h;
                                    f = {
                                        J: (h =
                                            {}, h["wv-part"] = "" + g, h["wv-type"] = d.Gi, h),
                                        K: Ka(),
                                        ba: {
                                            da: f
                                        }
                                    };
                                    e && f.K.D("bt", 1);
                                    return f
                                };
                                this.Wg = function (e, f, g) {
                                    e = d.ef(!1, e, g);
                                    return d.Rb ? d.send(e) : d.ve(d.Qe, e, f)
                                };
                                this.ai = function (e, f, g) {
                                    e = d.ef(!0, e, g);
                                    if (d.Rb) 
                                        return d.send(e);
                                    
                                    var h = d.Hg(f);
                                    g = h.kd;
                                    var k = h.jd;
                                    h = h.ld;
                                    var l;
                                    g && (l = d.Fh(e, f, h));
                                    d.fd ? g || (l = d.send(e)) : (g || (l = d.ve(d.sf, e, f)), (d.Rb || k) && d.eh());
                                    return l
                                };
                                this.l = a;
                                this.Gi = b;
                                this.sender = va(a, "W", c);
                                this.nc = c
                            }
                        }(),
                        Nl = v(function (a) {
                            var c = H(a),
                                b = c.C("isEU");
                            if (W(b)) {
                                var d = Ha(ue(a, "is_gdpr") || "");
                                if (K(d, [0, 1])) 
                                    c.D("isEU", d),
                                    b = !! d;
                                 else if (a = Pa(a).C("wasSynced"), a = n(a, "params.eu")) 
                                    c.D("isEU", a),
                                    b = !! a
                                
                            }
                            return b
                        }, function (a) {
                            return H(a).C("isEU")
                        }),
                        Af = B("i.e", Nl),
                        Pu = B("i.ep", function (a) {
                            Nl(a)
                        }),
                        Qu = B("w2", function (a, c) {
                            function b() {
                                h = !0
                            }
                            var d = H(a),
                                e = M(c);
                            if (! c.zb || kd(a) || ! a.MutationObserver || ! Da("Element", a.Element)) 
                                return E;
                            
                            Da("MutationObserver", a.MutationObserver) || Hd(a, e).warn("MutationObserver is overridden, webvisor is not guaranteed to work in this environment");
                            var f = Ga(function (k, l) {
                                    qa(c, l)["catch"](k)
                                }),
                                g = Kb(a)(Og(C([
                                    a, c
                                ], Ln)))(cl(function (k) {
                                    return new Nu(a, k)
                                })),
                                h = !1;
                            hr([g, f])(Qa(D(a, "wv2.R.c"), function (k) {
                                var l = k[0];
                                k = k[1];
                                if (! h) {
                                    b = function () {
                                        h || (h =! 0, l && l.stop())
                                    };
                                    var m = d.C("wv2Counter");
                                    if (! Wh(a, k) || m) 
                                        b();
                                     else if (fa(a).F(a, [
                                        "beforeunload", "unload"
                                    ], b), d.D("wv2Counter", e), d.D("stopRecorder", b), k = hi(a, "7", "6")) {
                                        m = new Ou(a, c, k.type);
                                        var p = Kl.$e(e, "m", G(m.ai, m), k, a),
                                            r = Kl.$e(e, "e", G(m.Wg, m), k, a);
                                        k = Mn();
                                        m = k.ki;
                                        r.F("ag", k.yg);
                                        r.F("p", m);
                                        p.F("see", function (t) {
                                            var x = !1;
                                            y(function (F) {
                                                "page" === F.type && (x =! 0)
                                            }, t);
                                            x && (h || r.push({
                                                type: "event",
                                                event: "fatalError",
                                                data: {
                                                    code: "invalid-snapshot",
                                                    Xg: "p.s.f",
                                                    stack: ""
                                                }
                                            }), b())
                                        });
                                        var q = Tb(function (t) {
                                            "eof" === n(t, "data.type") || "eof" === t.event ? (r.push(t), p.push(t), r.flush(!0), p.flush(!0)) : ("event" === t.type ? r : p).push(t)
                                        });
                                        Q(a, b, 864E5);
                                        Qb(a, function () {
                                            var t,
                                                x;
                                            sb(a, (t =
                                                {}, t.counterKey = e, t.name = "webvisor", t.data =( x =
                                                {}, x.version = 2, x), t));
                                            l.start(q)
                                        })
                                    }
                                }
                            }));
                            return function () {
                                return b()
                            }
                        }),
                        Ru = B("w2.cs", function (a, c) {
                            var b,
                                d = M(c);
                            Zf(a, d, (b =
                                {}, b.webvisor =!! c.zb, b))
                        }),
                        Su = [
                            "rt", "mf"
                        ],
                        zf = v(Gc, M),
                        Qh = w(md, dc),
                        Tu = mb("isp", function (a, c) {
                            qa(c, function (b) {
                                var d = rb(function (h) {
                                    return n(b, "settings." + h)
                                }, Su);
                                if (d && Wd(a)) {
                                    var e = rf(b) && ! ne(a),
                                        f = zf(c);
                                    z(f, {
                                        Sb: d,
                                        status: e ? 3 : 4
                                    });
                                    if (! e) {
                                        e = Hn(a, c, d);
                                        var g = function (h) {
                                            f.status = h
                                        };
                                        return("mf" === d ? Jn : In)(a, c, e).then(u(1, g))["catch"](u(2, g))
                                    }
                                }
                            })["catch"](D(a, "l.isp"))
                        }),
                        Ol = B("fbq.o", function (a, c, b) {
                            var d = n(a, "fbq");
                            if (d && d.callMethod) {
                                var e = function () {
                                    var g = Ja(arguments),
                                        h = d.apply(void 0, g);
                                    c(g);
                                    return h
                                };
                                z(e, d);
                                b && y(c, b);
                                a.fbq = e
                            } else 
                                var f = Q(a, C([a, c].concat(Ba(d && d.queue)), Ol), 1E3, "fbq.d");
                            
                            return G(ka, null, a, f)
                        }),
                        cd,
                        Hb,
                        dd,
                        hh = (cd =
                            {}, cd.add_to_wishlist = "add-to-wishlist", cd.begin_checkout = "begin-checkout", cd.generate_lead = "submit-lead", cd.add_payment_info = "add-payment-info", cd),
                        ih = (Hb =
                            {}, Hb.AddToCart = "add-to-cart", Hb.Lead = "submit-lead", Hb.InitiateCheckout = "begin-checkout", Hb.Purchase = "purchase", Hb.CompleteRegistration = "register", Hb.Contact = "submit-contact", Hb.AddPaymentInfo = "add-payment-info", Hb.AddToWishlist = "add-to-wishlist", Hb.Subscribe = "subscribe", Hb),
                        Fn = (dd =
                            {}, dd["1"] = hh, dd["2"] = hh, dd["3"] = hh, dd["0"] = ih, dd),
                        Gn = [
                            ih.AddToCart, ih.Purchase
                        ],
                        Uu = sa(function (a, c) {
                            var b = n(c, "ecommerce"),
                                d = n(c, "event") || "";
                            if (!(b = b && d && {
                                version: "3",
                                sc: d
                            })) 
                                a: {
                                    if (ca(c) || Ta(c)) 
                                        if (b = Ja(c), d = b[1], "event" === b[0] && d) {
                                            b = {
                                                version: "2",
                                                sc: d
                                            };
                                            break a
                                        }
                                    
                                    b = void 0
                                } b || (b =( b = n(c, "ecommerce")) && {
                                    version: "1",
                                    sc: I(",", da(b))
                                });
                            
                            b && a(b)
                        }),
                        Vu = B("ag.e", function (a, c) {
                            if ("0" === c.ca) {
                                var b = [],
                                    d = D(a, "ag.s", C([
                                        ia, b
                                    ], y));
                                qa(c, function (e) {
                                    if (n(e, "settings.auto_goals") && za(a, c) && (e = De(a, c, "autogoal").reachGoal)) {
                                        e = C([
                                            e, c.rd
                                        ], En);
                                        var f = Uu(e);
                                        e = C([
                                            a, e
                                        ], Dn);
                                        b.push(Ol(a, e));
                                        b.push(Wi(a, "dataLayer", function (g) {
                                            g.za.F(f)
                                        }))
                                    }
                                });
                                return d
                            }
                        }),
                        Wu = /[^\d.,]/g,
                        Xu = /[.,]$/,
                        Bn = B("ep.pp", function (a, c) {
                            if (! c) 
                                return 0;
                            
                            a: {
                                var b = c.replace(Wu, "").replace(Xu, "");
                                var d = "0" === b[b.length - 1];
                                for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); -- e) {
                                    var f = b[e - 1];
                                    if (K(f, [",", "."])) {
                                        d = f;
                                        break a
                                    }
                                }
                                d = ""
                            } b = d ? c.split(d) : [c];
                            d = d ? b[1] : "00";
                            b = parseFloat(Rb(b[0]) + "." + Rb(d));
                            d = Math.pow(10, 8) - .01;
                            a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                            return b
                        }),
                        Yu = [
                            [
                                [
                                    "EUR", "\u20ac"
                                ],
                                "978"
                            ],
                            [
                                [
                                    "USD", "\u0423\\.\u0415\\.", "\\$"
                                ],
                                "840"
                            ],
                            [
                                [
                                    "UAH", "\u0413\u0420\u041d", "\u20b4"
                                ],
                                "980"
                            ],
                            [
                                "\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"
                            ],
                            [
                                [
                                    "GBP", "\u00a3", "UKL"
                                ],
                                "826"
                            ],
                            [
                                "RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"
                            ]
                        ],
                        Zu = v(function (a) {
                            return new RegExp(I("|", a), "i")
                        }),
                        $u = B("ep.cp", function (a) {
                            if (! a) 
                                return "643";
                            
                            var c = Mi(a);
                            return(a = rb(function (b) {
                                return Zu(b[0]).test(c)
                            }, Yu)) ? a[1] : "643"
                        }),
                        av = v(function () {
                            function a() {
                                var k = h + "0",
                                    l = h + "1";
                                f[k] ? f[l] ? (h = h.slice(0, -1), -- g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                            }
                            function c() {
                                var k = h + "1";
                                f[h + "0"] ? f[k] ? (h = h.slice(0, -1), -- g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                            }
                            function b(k) {
                                void 0 === k && (k = 1);
                                var l = d.slice(g, g + k);
                                g += k;
                                return l
                            }
                            for (var d = I("", Oh("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")), e =
                                {}, f =
                                {}, g = 1, h = ""; g < d.length - 1;) 
                                ("0" === b() ? c : a)();
                            
                            return e
                        }),
                        yn = B("ep.dec", function (a, c) {
                            if (! c || kd(a)) 
                                return [];
                            
                            var b = Oh(c),
                                d = b[1],
                                e = b[2],
                                f = b.slice(3);
                            if (2 !== Lg(b[0])) 
                                return [];
                            
                            b = av();
                            f = I("", f);
                            e = Lg(d + e);
                            var g = "";
                            d = "";
                            for (var h = 0; d.length < e && f[h];) 
                                g += f[h],
                                b[g] && (d += String.fromCharCode(Lg(b[g])), g = ""),
                                h += 1;
                            
                            b = "";
                            for (f = 0; f < d.length;) 
                                e = d.charCodeAt(f),
                                128 > e ? (b += String.fromCharCode(e), f ++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                            
                            d = yb(a, b);
                            return ca(d) ? A(Mr, d) : []
                        }),
                        An = B("ep.ent", function (a, c, b) {
                            a = "" + Wa(a, 10, 99);
                            b = "" + 100 * c + b + a;
                            if (16 < Ta(b)) 
                                return "";
                            
                            b = Ph("0", 16, b);
                            c = b.slice(0, 8);
                            b = b.slice(-8);
                            c = (+ c ^ 92844).toString(35);
                            b = (+ b ^ 92844).toString(35);
                            return "" + c + "z" + b
                        }),
                        Pl = w(Nh, $u),
                        Ql = B("ep.ctp", function (a, c, b, d) {
                            var e = Pl(a, b),
                                f = Mh(a, d);
                            Lh(a, c, e, f);
                            Da("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function () {
                                var g = Pl(a, b),
                                    h = Mh(a, d);
                                if (e !== g || f !== h) 
                                    e = g,
                                    f = h,
                                    Lh(a, c, e, f)
                                
                            })).observe(a.document.body, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0,
                                characterData: !0
                            })
                        }),
                        bv = B("ep.chp", function (a, c, b, d, e) {
                            b && yf(a, c);
                            return d || e ? fa(a).F(a.document, ["click"], D(a, "ep.chp.cl", C([
                                a, c, d, e
                            ], zn))) : E
                        }),
                        fv = B("ep.i", function (a, c) {
                            if (id(a)) 
                                return xn(a, c).then(function (b) {
                                    var d = b.Sg,
                                        e = d[0],
                                        f = d[1],
                                        g = d[2],
                                        h = d[3],
                                        k = d[4],
                                        l = d[5],
                                        m = d[6],
                                        p = d[7],
                                        r = d[8],
                                        q = d[9],
                                        t = d[10],
                                        x = d[11],
                                        F = d[12],
                                        U = d[13],
                                        N = d[14],
                                        la = d[15];
                                    if (! b.isEnabled) 
                                        return L.resolve(E);
                                    
                                    var wa = pe(a, e),
                                        Cb = pe(a, h),
                                        Cd = pe(a, m),
                                        Ae = pe(a, r),
                                        cv = "" + e + f + g === "" + h + k + l;
                                    return new L(function (dv, ev) {
                                        Kb(a)(Qa(ev, function () {
                                            wa && Ql(a, c, f, g, t, x, F);
                                            Cb && ! cv && Ql(a, c, k, l, U, N, la);
                                            dv(bv(a, c, Cd || Ae, p, q))
                                        }))
                                    })
                                })
                            
                        }),
                        fn = [
                            "RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"
                        ],
                        wn = w(da, Sc),
                        gv = B("cc.i", function (a, c) {
                            var b = C([
                                a, c
                            ], vn);
                            b = C([
                                a, b, 300, void 0
                            ], Q);
                            qa(c, b)
                        }),
                        hv = u("9-d5ve+.r%7", O),
                        iv = B("ad", function (a, c) {
                            if (! c.Ta) {
                                var b = H(a);
                                if (! b.C("adBlockEnabled")) {
                                    var d = function (m) {
                                            K(m, ["2", "1"]) && b.D("adBlockEnabled", m)
                                        },
                                        e = vc(a),
                                        f = e.C("isad");
                                    if (f) 
                                        d(f);
                                     else {
                                        var g = u("adStatus", b.D),
                                            h = function (m) {
                                                m = m ? "1" : "2";
                                                d(m);
                                                g("complete");
                                                e.D("isad", m, 1200);
                                                return m
                                            },
                                            k = va(a, "adb", c);
                                        if (! b.C("adStatus")) {
                                            g("process");
                                            var l = "metrika/a" + hv().replace(/[^a-v]+/g, "") + "t.gif";
                                            sn(a, function () {
                                                return k({
                                                    na: {
                                                        Ba: l
                                                    }
                                                }).then(u(!1, h))["catch"](u(!0, h))
                                            })
                                        }
                                    }
                                }
                            }
                        }),
                        jv = B("pr.p", function (a, c) {
                            var b,
                                d;
                            if (lg(a)) {
                                var e = va(a, "5", c),
                                    f = Ka((b =
                                        {}, b.pq = 1, b.ar = 1, b));
                                e({
                                    K: f,
                                    J: (d =
                                        {}, d["page-url"] = R(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                                }, c)["catch"](D(a, "pr.p.s"))
                            }
                        }),
                        Kh = !1,
                        kv = B("fid", function (a) {
                            var c,
                                b = E;
                            if (! T(a.PerformanceObserver)) 
                                return b;
                            
                            var d = H(a);
                            if (d.C("fido")) 
                                return b;
                            
                            d.D("fido", !0);
                            var e = new a.PerformanceObserver(D(a, "fid", function (f) {
                                f = f.getEntries()[0];
                                d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                                b()
                            }));
                            b = function () {
                                return e.disconnect()
                            };
                            try {
                                e.observe((c =
                                    {}, c.type = "first-input", c.buffered =! 0, c))
                            } catch (f) {}
                            return b
                        }),
                        lv = B("lt.p", mb("lt.p", function (a) {
                            var c;
                            if (Da("PerformanceObserver", a.PerformanceObserver)) {
                                var b = 0,
                                    d = new a.PerformanceObserver(D(a, "lt.o", function (e) {
                                        e && e.getEntries && (e = e.getEntries(), b = J(function (f, g) {
                                            return f + g.duration
                                        }, b, e), Td(a).D("lt", b))
                                    }));
                                try {
                                    d.observe((c =
                                        {}, c.type = "longtask", c.buffered =! 0, c))
                                } catch (e) {
                                    return
                                }
                                return function () {
                                    return d.disconnect()
                                }
                            }
                        })),
                        mv = v(w(P("performance.memory.jsHeapSizeLimit"), Ea("concat", ""))),
                        nv = [
                            "availWidth", "availHeight", "availTop"
                        ],
                        ov = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                        pv = [
                            "webgl", "experimental-webgl"
                        ],
                        qn = [
                            -.2,
                            -.9,
                            0,
                            .4,
                            -.26,
                            0,
                            0,
                            .732134444,
                            0
                        ],
                        uf = u(Ra("ccf"), Ua),
                        pn = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                        Ih = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                        nn = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                        hn = v(Hi),
                        Hh = v(yb, Za),
                        qv = B("phc.p", function (a, c) {
                            if (! pl(a)) 
                                return qa(c, function (b) {
                                    var d = c.id,
                                        e = Lc(a, void 0, d),
                                        f = e.C("phc_settings") || "";
                                    if (b = n(b, "settings.phchange")) {
                                        var g = zb(a, b) || "";
                                        g !== f && e.D("phc_settings", g)
                                    } else 
                                        f && (b = Hh(a, f));
                                     e = n(b, "clientId");
                                    f = n(b, "orderId");
                                    b = n(b, "phones") || [];
                                    e && f && b.length && (f =
                                        {
                                        Db: "",
                                        Qb: "",
                                        Vf: 0,
                                        ja: {},
                                        Aa: [],
                                        mf: !1,
                                        gb: !0,
                                        l: a,
                                        nc: c
                                    }, z(f, {
                                        mf: !0
                                    }), Gh(a, d, f), b = Ed(a), e = Ji(a, b, 1E3), d = G(Gh, null, a, d, f), e.F(d), Ki(a, b))
                                })
                            
                        }),
                        jh = v(function (a, c) {
                            var b = H(a),
                                d = Pa(a),
                                e = [],
                                f = C([
                                    a, c, b, d
                                ], Ep);
                            xd(a) || Fp(a, "14.1") || e.push(C([
                                en, "pp", ""
                            ], f));
                            var g = ! rl(a) || sf(a, 68);
                            g && e.push(C([
                                gn, "pu", ""
                            ], f));
                            ! g || d.Kd || Wd(a) || (e.push(C([
                                dn, "zzlc", "na"
                            ], f)), e.push(C([
                                cn, "cc", ""
                            ], f)));
                            return e.length ? {
                                Ea: function (h, k) {
                                    if (0 === b.C("isEU")) 
                                        try {
                                            y(Ce, e)
                                        }
                                     catch (l) {}k()
                                },
                                N: function (h, k) {
                                    var l = h.K;
                                    if (l && 0 === b.C("isEU")) 
                                        try {
                                            y(Ga(l), e)
                                        }
                                     catch (m) {}k()
                                }
                            } : {}
                        }, w(Za, M)),
                        rv = w(function (a) {
                            return(a = n(a, "navigator.plugins")) && Ta(a) ? w(Ba, ua, ls(function (c, b) {
                                return c.name > b.name ? 1 : 2
                            }), Tb(Bp))(a) : ""
                        }, xe(",")),
                        sv = function (a) {
                            return function (c) {
                                var b = db(c);
                                if (! b) 
                                    return "";
                                
                                b = b("canvas");
                                var d = [],
                                    e = a(),
                                    f = e.Zg;
                                e = e.Pg;
                                try {
                                    var g = Ea("getContext", b);
                                    d = A(w(O, g), e)
                                } catch (h) {
                                    return ""
                                }
                                return(g = rb(O, d)) ? f(c, {
                                    canvas: b,
                                    Eg: g
                                }) : ""
                            }
                        }(function () {
                            return {Pg: pv, Zg: Zm}
                        }),
                        Xm = [
                            "name",
                            "lang",
                            "localService",
                            "voiceURI",
                            "default"
                        ],
                        tv = B("p.tfs", function (a) {
                            var c = H(a);
                            if (! c.C("tfs")) {
                                c.D("tfs", !0);
                                c = fa(a);
                                var b = E;
                                b = c.F(a, ["message"], function (d) {
                                    var e = n(d, "origin");
                                    if ("https://iframe-toloka.com" === e || "https://iframe-tasks.yandex" === e) 
                                        if (d = yb(a, d.data), pa(d) && "appendremote" === d.action) 
                                            if (d = Pa(a), d.C("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                                d.D("tfsc", 1);
                                                var f,
                                                    g;
                                                H(a).D("_u", (f = {}, f.getCachedTags = Be, f.button = (g =
                                                    {}, g.closest = u(a, ge), g.select = Sf, g.getData = u(a, he), g), f));
                                                sc(a, {src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js"});
                                                b()
                                            }
                                        
                                     else 
                                        a.close()
                                    
                                })
                            }
                        }),
                        Vm = eb(/[a-z\u0430-\u044f\u0451,.]/gi),
                        uv = B("ice", function (a, c, b) {
                            (c = za(a, c)) && (b = Ch(b)) && Bh(a, c, b)
                        }),
                        vv = B("ice", function (a, c, b) {
                            (c = za(a, c)) && (b = Ch(b)) && jj(a, b.Ph).then(C([
                                a, c, b
                            ], Bh), D(a, "ice.s"))
                        }),
                        wv = [
                            "text", "email", "tel"
                        ],
                        xv = [
                            "cc-", "name", "shipping"
                        ],
                        yv = B("icei", function (a, c) {
                            if (kl(a)) {
                                var b = !1,
                                    d = E,
                                    e = E;
                                qa(c, function (f) {
                                    if (!(Af(a) || n(f, "settings.eu") || b)) {
                                        f = n(f, "settings.cf") ? vv : uv;
                                        var g = C([
                                                a, c
                                            ], f),
                                            h = function (k) {
                                                return Jf(a, k) || ! K(k.type, wv) || Ya(Fb, A(u(k.autocomplete, bb), xv)) ? !1 : !0
                                            };
                                        d = Dh(a, "input", ["blur"], g, h);
                                        e = Dh(a, "form", ["submit"], function (k) {
                                            var l = k.target;
                                            l && (l = jb("input", l), y(function (m) {
                                                h(m) && g({target: m, isTrusted: k.isTrusted})
                                            }, l))
                                        })
                                    }
                                });
                                return function () {
                                    b = !0;
                                    d();
                                    e()
                                }
                            }
                        }),
                        Ah,
                        zv = B("p.ai", function (a, c) {
                            if (xd(a) || lf(a)) 
                                return qa(c, function (b) {
                                    var d;
                                    if (b = n(b, "settings.sbp")) 
                                        return zh(a, z({}, b, (d =
                                            {}, d.c = c.id, d)), 10)
                                    
                                })
                            
                        }),
                        Av = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "),
                        Rl = mb("uah", function (a) {
                            if (! Da("getHighEntropyValues", n(a, "navigator.userAgentData.getHighEntropyValues"))) 
                                return L.reject("0");
                            
                            try {
                                return a.navigator.userAgentData.getHighEntropyValues(Av).then(function (c) {
                                    if (! pa(c)) 
                                        throw "2";
                                    
                                    return c
                                }, function () {
                                    throw "1";
                                })
                            } catch (c) {
                                return L.reject("3")
                            }
                        }),
                        Sl = new RegExp(I("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")),
                        Om = v(function (a) {
                            var c = lb(a);
                            return(c = Sl.test(c)) ? L.resolve(c) : Rl(a).then(function (b) {
                                try {
                                    return J(function (d, e) {
                                        return d || Sl.test(e.brand)
                                    }, !1, b.brands)
                                } catch (d) {
                                    return !1
                                }
                            }, u(!1, O))
                        }),
                        pc = [
                            "0", "1", "2", "3"
                        ],
                        Mc = pc[0],
                        kf = pc[1],
                        Bv = pc[2],
                        Tl = [
                            "GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"
                        ],
                        xh = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(Tl),
                        jf = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(Tl).concat(["28", "29", "30", "31"]),
                        Cv = "3 13 14 15 16 17 28".split(" "),
                        le = w(Tb(P("ymetrikaEvent.type")), ks(oc(jf))),
                        Dv = {
                            Xh: !0,
                            url: "https://yastatic.net/s3/gdpr/v3/gdpr",
                            yf: "",
                            qf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
                        },
                        Rm = mb("gdpr", function (a, c, b, d, e) {
                            function f(p) {
                                c("10");
                                b.F(xh, function (r) {
                                    var q;
                                    r = r.type;
                                    l.Rf((q =
                                        {}, q.type = r, q));
                                    p({value: yh(r)})
                                })
                            }
                            var g = void 0 === e ? Dv : e;
                            e = g.url;
                            var h = g.yf,
                                k = g.Xh;
                            g = Um(a, g.qf, d.fj);
                            var l = oe(a, d);
                            if (! l) 
                                return L.resolve({
                                    value: Mc,
                                    Md: !0
                                });
                            
                            if (a._yaGdprLoaded) 
                                return new L(function (p) {
                                    c("7");
                                    f(p)
                                });
                            
                            var m = sc(a, {
                                src: "" + e + (k ? "" : g) + h + ".js"
                            });
                            return new L(function (p, r) {
                                m ? (c("7"), m.onerror = function () {
                                    var q;
                                    c("9");
                                    l.Rf((q =
                                        {}, q.type = "GDPR-ok-view-default", q));
                                    p(null)
                                },
                                m.onload = u(p, f)) : (c("9"), r(Ra("gdp.e")))
                            })
                        }),
                        $b,
                        Tm = ($b =
                            {}, $b["GDPR-ok"] = "ok", $b["GDPR-ok-view-default"] = "ok-default", $b["GDPR-ok-view-detailed"] = "ok-detailed", $b["GDPR-ok-view-detailed-0"] = "ok-detailed-all", $b["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", $b["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", $b["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", $b),
                        Mm = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "),
                        wh = [],
                        uh = Ea("push", wh),
                        Lm = v(function (a, c) {
                            var b = c.C("gdpr");
                            return K(b, pc) ? "-" + b : ""
                        }),
                        Ul = v(Dd),
                        Ev = v(function () {
                            var a = J(function (c, b) {
                                "ru" !== b && (c[b] = zl + "." + b);
                                return c
                            }, {}, ug);
                            y(function (c) {
                                a[c] = c
                            }, da(ul));
                            return a
                        }),
                        Dm = v(function (a) {
                            a = R(a).hostname;
                            return(a = rb(w(P("1"), Ii("test"), tb(ia)(a)), Oa(ul))) && a[0]
                        }),
                        Vl = function (a, c) {
                            return function (b, d) {
                                var e = M(d);
                                e = Ev(e);
                                var f = Bm(b, e),
                                    g = H(b),
                                    h = ib(b);
                                return Wd(b) || Sd(b) ? {} : {
                                    N: function (k, l) {
                                        var m = k.K,
                                            p = sh(b);
                                        m = !(m && m.C("pv"));
                                        if (! p || h || m || ! f.length) 
                                            return l();
                                        
                                        if (g.C("startSync")) 
                                            Ul(b).push(l);
                                         else {
                                            g.D("startSync", !0);
                                            p = C([
                                                b,
                                                f,
                                                E,
                                                !1
                                            ], a);
                                            m = mf[0];
                                            if (! m) 
                                                return l();
                                            
                                            m(b).then(p).then(l, w(nd(l), D(b, c)))["catch"](E)
                                        }
                                    }
                                }
                            }
                        }(function (a, c, b, d) {
                            var e = ha(a),
                                f = H(a),
                                g = Pa(a);
                            b = Wg(a, "c");
                            var h = Wb(a, b);
                            return J(function (k, l) {
                                function m() {
                                    var q = g.C("synced");
                                    f.D("startSync", !1);
                                    q && (q[l.Zh] = p, g.D("synced", q));
                                    q = Ul(a);
                                    y(ia, q);
                                    Id(q)
                                }
                                var p,
                                    r = h({
                                        ba: {
                                            ha: ["sync.cook"],
                                            Pa: 1500
                                        }
                                    }, [Fa.Ra + "//" + l.Mi + "/sync_cookie_image_check" + (
                                        d ? "_secondary" : ""
                                    )]).then(function () {
                                        p = e(qb);
                                        m()
                                    })["catch"](function () {
                                        p = e(qb) - 1435;
                                        m()
                                    });
                                r = u(r, O);
                                return k.then(r)
                            }, L.resolve(), c)["catch"](D(a, "ctl"))
                        }, "sy.c"),
                        Ib,
                        zm = (Ib =
                            {}, Ib.brands = "chu", Ib.architecture = "cha", Ib.bitness = "chb", Ib.uaFullVersion = "chf", Ib.fullVersionList = "chl", Ib.mobile = "chm", Ib.model = "cho", Ib.platform = "chp", Ib.platformVersion = "chv", Ib),
                        vm = v(function (a) {
                            return Rl(a).then(wm, Am)
                        }),
                        Fv = mb("ot", function (a, c) {
                            if (Me(a)) {
                                var b = fa(a);
                                return qa(c, D(a, "ot.s", function (d) {
                                    if (n(d, "settings.oauth")) {
                                        var e = [],
                                            f = md(a, c);
                                        e.push(b.F(a, ["message"], D(a, "ot.m", u(f, um))));
                                        Kb(a)(Qa(E, D(a, "ot.b", function () {
                                            function g(r) {
                                                var q,
                                                    t = r.href;
                                                t && ml(t, "https://oauth.yandex.ru/") && ! bb(t, "_ym_uid=") && (t = bb(t, "?") ? "&" : "?", r.href += "" + t + Bc((q =
                                                    {}, q._ym_uid = f, q.mc = "v", q)), b.F(r, ["click"], D(a, "ot.click", function () {
                                                    var x = "et=" + l(Y);
                                                    r.href += "&" + x
                                                })))
                                            }
                                            var h,
                                                k = a.document.body,
                                                l = ha(a),
                                                m = jb("a", k);
                                            y(g, m);
                                            if (Da("MutationObserver", a.MutationObserver)) {
                                                m = new a.MutationObserver(D(a, "ot.m", u(function (r) {
                                                    r = r.addedNodes;
                                                    for (var q = 0; q < r.length; q += 1) {
                                                        var t = r[q];
                                                        "A" === t.nodeName && g(t)
                                                    }
                                                }, y)));
                                                var p = (h =
                                                    {}, h.childList =! 0, h.subtree =! 0, h);
                                                m.observe(k, p);
                                                e.push(G(m.disconnect, m))
                                            }
                                        })));
                                        return C([
                                            Ce, e
                                        ], y)
                                    }
                                }))
                            }
                        }),
                        Gv = B("p.cta", function (a) {
                            Kb(a)(Qa(E, function () {
                                var c = H(a);
                                if (sm(a.document)) {
                                    var b = 0;
                                    if (Rh(a, re, "cta")) {
                                        var d = E,
                                            e = function () {
                                                Sh(re, "cta");
                                                d();
                                                ka(a, b)
                                            };
                                        d = fa(a).F(a, ["message"], B("p.cta.o", C([
                                            a, c, e
                                        ], tm)));
                                        b = Q(a, e, 1500)
                                    } else 
                                        c.D("cta.e", "if")
                                    
                                } else 
                                    c.D("cta.e", "ns")
                                
                            }))
                        }),
                        om = [
                            "bidResponse", "bidAdjustment", "bidWon"
                        ],
                        pm = [
                            "cpm",
                            "currency",
                            "netRevenue",
                            "requestTimestamp",
                            "responseTimestamp"
                        ],
                        Ia = {},
                        Hv = B("pj", function (a, c) {
                            var b,
                                d = za(a, c),
                                e = d && d.params;
                            return e ? (b =
                                {}, b.pbjs = function (f) {
                                ca(f) && (f = ea(Fb, A(function (g) {
                                    if (pa(g) && g.data && g.event && pa(g.data)) {
                                        var h = n(g, "data.args");
                                        return h ? {
                                            event: g.event,
                                            data: h
                                        } : g
                                    }
                                }, f)), nm(f), qm(a, e))
                            },
                            b) : E
                        }),
                        lm = /(\D\d*)/g,
                        mm = v(function () {
                            var a = Be();
                            return J(function (c, b) {
                                c[a[b]] = b;
                                return c
                            }, {}, da(a))
                        }),
                        Iv = B("g.v.e", function (a, c) {
                            return qa(c, D(a, "g.v.t", function (b) {
                                var d = za(a, c);
                                if (d && (b = n(b, "settings.goal_values"))) {
                                    var e = ea(w(P("url"), u(a, gm)), b);
                                    if (0 !== e.length) {
                                        b = fa(a);
                                        var f = [];
                                        e = C([
                                            a, function (g) {
                                                var h,
                                                    k;
                                                return d.params((h =
                                                    {}, h.__ym =( k =
                                                    {}, k.goal_values = g, k), h))
                                            },
                                            e
                                        ], jm);
                                        f.push(b.F(a, ["click"], D(a, "g.v.c", C([e], hm))));
                                        f.push(b.F(a, ["submit"], D(a, "g.v.s", C([
                                            a, e
                                        ], im))));
                                        return C([
                                            w(O, ia),
                                            f
                                        ], y)
                                    }
                                }
                            }))
                        }),
                        Wl = {},
                        Xl = v(Gc),
                        fm = w(Ea("exec", /counterID=(\d+)/), P("1")),
                        Yl = sa(function (a, c) {
                            var b = Xl(a),
                                d = Ba(c),
                                e = d[0],
                                f = d[1],
                                g = d.slice(2);
                            if (f) {
                                d = em(a, e);
                                var h = d[0],
                                    k = d[1];
                                d = M(k);
                                b[d] || (b[d] =
                                    {});
                                b = b[d];
                                c.Se || Wl[f] && J(function (l, m) {
                                    return l || !! m(a, k, g, h)
                                }, !1, Wl[f]) || ("init" === f ? (c.Se =! 0, h ? xb(a, "" + e, "Duplicate counter " + e + " initialization") : a["yaCounter" + k.id] = new a.Ya[Fa.kc](z({}, g[0], k))) : h && h[f] && b.Mh ? (h[f].apply(h, g), c.Se =! 0) : (d = b.Wf, d || (d =[], b.Wf = d), d.push(ra([
                                    e, f
                                ], g))))
                            }
                        }),
                        Jv = mb("is", function (a) {
                            if (! ib(a)) {
                                var c = vc(a);
                                if (Te(a, "0")) 
                                    c.Gb("sup_debug");
                                 else {
                                    var b = Te(a, "2"),
                                        d = !! c.C("sup_debug");
                                    if (b || d) 
                                        return a._ym_debug = !0,
                                        c.D("sup_debug", "1", 1440),
                                        sc(a, {
                                            src: Al + "/tag_debug.js"
                                        })
                                    
                                }
                            }
                        }),
                        dm = B("destruct.e", function (a, c, b) {
                            return function () {
                                var d = H(a),
                                    e = c.id;
                                y(function (f, g) {
                                    return T(f) && D(a, "dest.fr." + g, f)()
                                }, b);
                                delete d.C("counters")[M(c)];
                                delete a["yaCounter" + e]
                            }
                        }),
                        ed = H(window);
                    ed.Ca("hitParam", {});
                    ed.Ca("lastReferrer", window.location.href);
                    (function () {
                        V.push(function (a, c) {
                            var b;
                            return b = {},
                            b.firstPartyParams = Ws(a, c),
                            b.firstPartyParamsHashed = wq(a, c),
                            b
                        });
                        Xd.push("fpp");
                        Xd.push("fpmh")
                    })();
                    (function () {
                        var a = H(window);
                        a.Ca("getCounters", Xs(window));
                        fd.push(Ys);
                        Ng.push(function (c, b) {
                            b.counters = a.C("getCounters")
                        })
                    })();
                    (function () {
                        V.push(function (a, c) {
                            var b;
                            sb(a, (b =
                                {}, b.counterKey = M(c), b.name = "counter", b.data = ek(c), b))
                        })
                    })();
                    Ca["1"] = ob;
                    V.push(Zs);
                    ya["1"] = nc;
                    vb(Yf, -1);
                    Ub["1"] = [
                        [
                            Yf, -1
                        ],
                        [
                            Re, 1
                        ],
                        [
                            Le, 2
                        ],
                        [
                            Ob(), 3
                        ]
                    ];
                    V.push($s);
                    V.push(B("p.ar", function (a, c) {
                        var b,
                            d = va(a, "a", c);
                        return b = {},
                        b.hit = function (e, f, g, h, k, l) {
                            var m,
                                p,
                                r = {
                                    J: {},
                                    K: Ka(
                                        (m =
                                            {}, m.pv = 1, m.ar = 1, m)
                                    )
                                };
                            f = pa(f) ? {
                                title: f.title,
                                Cf: f.referer,
                                R: f.params,
                                dc: f.callback,
                                l: f.ctx
                            } : {
                                title: f,
                                Cf: g,
                                R: h,
                                dc: k,
                                l: l
                            };
                            h = Gd(c);
                            g = e || R(a).href;
                            h.url !== g && (h.ref = h.url, h.url = e);
                            e = f.Cf || h.ref || a.document.referrer;
                            h = Mb(a, c, "PageView. Counter " + c.id + ". URL: " + g + ". Referrer: " + e, f.R);
                            k = z(r.M || {}, {
                                R: f.R,
                                title: f.title
                            });
                            r = d(z(r, {
                                M: k,
                                J: z(r.J || {}, (p =
                                    {}, p["page-url"] = g, p["page-ref"] = e, p))
                            }), c).then(h);
                            return Rc(a, "p.ar.s", r, f.dc || E, f.l)
                        },
                        b
                    }));
                    Ca.a = ob;
                    Ub.a = Vb;
                    ya.a = jl;
                    V.push(De);
                    Ca.g = ob;
                    ya.g = nc;
                    Ub.g = Vb;
                    V.push(at);
                    V.push(bt);
                    Ub.t = Vb;
                    Ca.t = ob;
                    ya.t = nc;
                    V.push(B("cl.p", function (a, c) {
                        function b(p, r, q, t) {
                            void 0 === t && (t =
                                {});
                            q ? Fe(a, c, {
                                url: q,
                                ob: !0,
                                Ec: p,
                                Ic: r,
                                sender: e,
                                jg: t
                            }) : g.warn("Empty link")
                        }
                        var d,
                            e = va(a, "2", c),
                            f = [],
                            g = Zd(a, M(c)),
                            h = M(c),
                            k = D(a, "s.s.tr", u(Je(a, h), oq));
                        h = {
                            l: a,
                            cb: c,
                            $g: f,
                            sender: e,
                            vj: H(a),
                            Ng: Zc(a, c.id),
                            xj: yc(a),
                            Ti: u(u(h, af(a)), w(ia, P("trackLinks")))
                        };
                        h = D(a, "cl.p.c", u(h, lq));
                        h = fa(a).F(a, ["click"], h);
                        c.cg && k(c.cg);
                        var l = D(a, "file.clc", C([
                                !0,
                                !1
                            ], b)),
                            m = D(a, "e.l.l.clc", C([
                                !1,
                                !0
                            ], b));
                        f = D(a, "add.f.e.clc", ct(f));
                        return d = {},
                        d.file = l,
                        d.extLink = m,
                        d.addFileExtension = f,
                        d.trackLinks = k,
                        d.u = h,
                        d
                    }));
                    Ub["2"] = Vb;
                    Ca["2"] = ob;
                    ya["2"] = nc;
                    Ca.r = Pd("r");
                    ya.r = jl;
                    gb.push(B("p.r", function (a, c) {
                        var b = et(a),
                            d = va(a, "r", c),
                            e = D(a, "rts.p");
                        return qa(c, C([
                            function (f, g) {
                                var h = {
                                        id: g.Mg,
                                        ca: g.ca
                                    },
                                    k = {
                                        ba: {
                                            da: g.xi
                                        },
                                        K: Ka(g.Bg),
                                        J: g.R,
                                        M: {
                                            Ub: g.Ub
                                        },
                                        na: {
                                            Ba: g.Ba
                                        }
                                    };
                                g.Ja && (k.Ja = of(g.Ja));
                                h = d(k, h)["catch"](e);
                                return f.then(u(h, O))
                            },
                            L.resolve(),
                            b
                        ], J))["catch"](e)
                    }));
                    Z("r", function (a) {
                        return {
                            N: function (c, b) {
                                var d = c.K,
                                    e = void 0 === d ? Ka() : d,
                                    f = c.M.Ub,
                                    g = Fd(a);
                                d = e.C("rqnl", 0) + 1;
                                e.D("rqnl", d);
                                if (e = n(g, I(".", [f, "browserInfo"]))) 
                                    e.rqnl = d,
                                    Wf(a);
                                
                                b()
                            },
                            Ea: function (c, b) {
                                aj(a, c);
                                b()
                            }
                        }
                    }, 1);
                    vb(Ee, 100);
                    Z("1", Ee, 100);
                    V.push(ft);
                    Z("n", Re, 1);
                    Z("n", Le, 2);
                    Z("n", Ob(), 3);
                    Z("n", Ee, 100);
                    Ca.n = ob;
                    ya.n = nc;
                    jc({
                        Ke: {
                            ea: "accurateTrackBounce"
                        }
                    });
                    V.push(gt);
                    Ca.m = Pd("cm");
                    ya.m = Rs;
                    Z("m", Ob(["u", "v", "vf"]), 1);
                    Z("m", Ee, 2);
                    jc({
                        Jg: {
                            ea: "clickmap"
                        }
                    });
                    V.push(ht);
                    V.push(it);
                    V.push(jt);
                    V.push(kt);
                    (function () {
                        V.push(lt);
                        Xd.push("ecommerce");
                        jc({
                            rd: {
                                ea: "ecommerce",
                                Ua: function (a) {
                                    if (a) 
                                        return !0 === a ? "dataLayer" : "" + a
                                    
                                }
                            }
                        })
                    })();
                    V.push(mt);
                    gb.push(ot);
                    V.push(pt);
                    Xd.push("user_id");
                    gb.push(B("p.st", qt));
                    V.push(rt);
                    vb(function (a, c) {
                        return {
                            Ea: function (b, d) {
                                var e = za(a, c);
                                e = e && e.userParams;
                                var f = (b.M || {}).Ee;
                                e && f && e(f);
                                d()
                            }
                        }
                    }, 0);
                    ee.push(Us);
                    mc.unshift(ut);
                    Rd.push("_ym_debug");
                    V.push(vt);
                    mc.push(function (a) {
                        var c = H(a);
                        c.C("i") || (c.D("i", !0), fa(a).F(a, ["message"], u(a, Kp)))
                    });
                    (function () {
                        var a,
                            c = (a =
                                {}, a.tp = w(Za, fk, Lb), a.tpid = w(Za, xr), a);
                        z(Md, c)
                    })();
                    vb(Ad, 20);
                    Z("n", Ad, 20);
                    Z("1", Ad, 20);
                    mc.unshift(xt);
                    Md.fp = function (a, c, b) {
                        if (b.J && b.J.nohit) 
                            return null;
                        
                        b = H(a).C;
                        if (! b("fpe")) 
                            return null;
                        
                        c = wt(c);
                        if (c.dh) 
                            return null;
                        
                        b = b("fht", Infinity);
                        a: {
                            var d = n(a, "performance.getEntriesByType");
                            if (T(d)) {
                                if (a = ea(w(O, P("name"), Aa("first-contentful-paint")), d.call(a.performance, "paint")), a.length) {
                                    a = a[0].startTime;
                                    break a
                                }
                            } else {
                                var e = n(a, "chrome.loadTimes");
                                d = gl(a);
                                if (T(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                                    a = 1E3 * e - d;
                                    break a
                                }
                                if (a = n(a, "performance.timing.msFirstPaint")) {
                                    a -= d;
                                    break a
                                }
                            } a = void 0
                        }
                        return a && b > a ? (c.dh = a, Math.round(a)) : null
                    };
                    V.push(function (a, c) {
                        var b;
                        return b = {},
                        b.ecommerceAdd = B("ecm.a", yt(a, c)),
                        b.ecommerceRemove = B("ecm.r", zt(a, c)),
                        b.ecommerceDetail = B("ecm.d", At(a, c)),
                        b.ecommercePurchase = B("ecm.p", Bt(a, c)),
                        b
                    });
                    (function () {
                        var a,
                            c = {};
                        c.bu = Ht;
                        c.pri = rp;
                        c.wv = u(2, O);
                        c.ds = up;
                        c.co = function (b) {
                            return Ab(H(b).C("jn"))
                        };
                        c.td = Nt;
                        z(c, (a =
                            {}, a.iss = w(vs, Lb), a.hdl = w(ws, Lb), a.iia = w(xs, Lb), a.cpf = w(Gt, Lb), a.ntf = v(function (b) {
                            b = n(b, "Notification.permission");
                            b = "denied" === b ? !1 : "granted" === b ? !0 : null;
                            return Va(b) ? null : b ? 2 : 1
                        }), a.eu = Zb("isEU"), a.ns = gl, a.np = function (b) {
                            return Wa(b, 0, 100) ? null : gd(ie(cb(Of(b), 100)))
                        },
                        a));
                        c.pani = It;
                        c.pci = Jt;
                        c.si = Kt;
                        c.gi = Lt;
                        z(Md, c)
                    })();
                    (function () {
                        var a = {};
                        a.hc = Zb("hc");
                        a.oo = Zb("oo");
                        a.pmc = Zb("cmc");
                        a.lt = function (c) {
                            var b = Td(c).C("lt", null);
                            return b ? c.Math.round(100 * b) : b
                        };
                        a.re = w(Vq, Lb);
                        a.aw = function (c) {
                            c = rb(w(ja, Dc), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                            return ja(c) ? null : Ab(! c)
                        };
                        a.rcm = Qt;
                        a.yu = function (c) {
                            return(c = Lc(c, "").C("yandexuid")) && c.substring(0, 25)
                        };
                        a.ifc = Zb("ifc");
                        a.ifb = Zb("ifb");
                        a.ecs = Zb("ecs");
                        a.csi = Zb("scip");
                        a.cdl = Zb("cdl");
                        z(eg, a)
                    })();
                    ya.er = ad;
                    (function (a) {
                        try {
                            var c = Wg(a, "er"),
                                b = np(a, c);
                            Wj.push(function (d, e, f, g) {
                                var h,
                                    k,
                                    l,
                                    m,
                                    p;
                                .01 >= a.Math.random() || b((h =
                                    {}, h[d] =( k =
                                    {}, k[Fa.cc] =( l =
                                    {}, l[e] =( m =
                                    {}, m[f] = g ? (p =
                                    {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                            })
                        } catch (d) {}
                    })(window);
                    (function () {
                        ee.push(qp);
                        Ke.unshift(mp);
                        $g.push(function (a) {
                            var c = void 0;
                            void 0 === c && (c =! 0);
                            H(a).D("oo", c)
                        })
                    })();
                    vb(function (a, c) {
                        return {
                            N: function (b, d) {
                                var e = b.J,
                                    f = b.K;
                                ! xl[c.id] && f.C("pv") && c.exp && ! e.nohit && (e.exp = c.exp, xl[c.id] =! 0);
                                d()
                            }
                        }
                    }, -99);
                    V.push(Rt);
                    Ub.e = Vb;
                    Ca.e = ob;
                    ya.e = nc;
                    jc({
                        exp: {
                            ea: "experiments"
                        }
                    });
                    qk.experiments = "ex";
                    (function () {
                        var a;
                        mf.push(St);
                        Ca.f = ob;
                        z(ya, (a =
                            {}, a.f = il, a));
                        Z("f", Ob(), 1);
                        Z("f", tj, 2);
                        Z("f", Ad, 20)
                    })();
                    ee.push(function (a, c) {
                        var b = {
                                oa: M(c),
                                md: za(a, c),
                                bg: ha(a),
                                Sd: Pa(a)
                            },
                            d = b.bg(qb);
                        if (! b.Sd.Kd) {
                            var e = b.Sd.C("ymoo" + b.oa);
                            if (e && 30 > d - e) 
                                b = b.oa,
                                delete H(a).C("counters", {})[b],
                                Ua(Ra("uws"));
                             else 
                                qa(c, Tt(b))["catch"](D(a, "d.f"))
                            
                        }
                    });
                    (function () {
                        var a,
                            c,
                            b = [Eb];
                        z(ya, (a =
                            {}, a.s = b, a.S = b, a.u = ad, a));
                        z(Ca, (c =
                            {}, c.s = Wb, c.S = ob, c.u = Wb, c));
                        Z("s");
                        Z("u");
                        Z("S", Ob([
                            "v",
                            "hid",
                            "u",
                            "vf",
                            "rn"
                        ]), 1);
                        V.push(B("s", Yo))
                    })();
                    Ca["8"] = Wb;
                    ya["8"] = [dg];
                    hl.push([dg, 0]);
                    V.push(B("p.us", function (a, c) {
                        return qa(c, function (b) {
                            if (n(b, "settings.sbp")) 
                                return ti(a, b, {
                                    cb: c,
                                    Sb: "8",
                                    Qd: "cs"
                                })
                            
                        })
                    }));
                    Z("p", Ob(ah), 1);
                    Qg("pub", function (a, c) {
                        return {
                            N: function (b, d) {
                                gi(a, c, b);
                                d()
                            }
                        }
                    }, 1);
                    Ca.p = Xt;
                    ya.p = ua([Db, Eb]);
                    gb.push(au);
                    jc({
                        zb: {
                            ea: "webvisor",
                            Ua: Fb
                        },
                        Rg: {
                            ea: "disableFormAnalytics",
                            Ua: Fb
                        }
                    });
                    Z("4", Ob(ah), 1);
                    Ca["4"] = Bl;
                    ya["4"] = ua([Db, Eb, Uc]);
                    gb.push(gu);
                    (function () {
                        Z("W", Ob(ah), 1);
                        Qg("wv", mo, 1);
                        ya.W = ua([Db, Eb]);
                        Ca.W = Bl;
                        gb.push(Qu);
                        V.push(Ru);
                        jc({
                            zb: {
                                ea: "webvisor"
                            }
                        });
                        jc({
                            Vi: {
                                ea: "trustedDomains"
                            },
                            ic: {
                                ea: "childIframe",
                                Ua: Fb
                            }
                        });
                        $g.push(function (a) {
                            H(a).C("stopRecorder", E)()
                        })
                    })();
                    V.push(Tu);
                    Z("pi");
                    Ca.pi = Wb;
                    ya.pi = ad;
                    Qg("w", function (a, c) {
                        return {
                            N: function (b, d) {
                                if (b.K) {
                                    var e = zf(c),
                                        f = e.status;
                                    "rt" === e.Sb && f && (b.K.D("rt", f), b.na || (b.na =
                                        {}), b.na.Jh = 1 === f ? Qh(a, c) + "." : "")
                                }
                                d()
                            }
                        }
                    }, 2);
                    V.push(Vu);
                    V.push(fv);
                    ya["6"] = ua([Db, Eb]);
                    Ca["6"] = Wb;
                    V.push(gv);
                    V.push(Ot);
                    (function () {
                        Ng.push(function (a, c) {
                            c.informer = tn(a)
                        })
                    })();
                    vb(wf, 6);
                    Z("1", wf, 6);
                    Z("adb");
                    Z("n", wf, 4);
                    ya.adb = ad;
                    Ca.adb = Jj;
                    fd.push(iv);
                    ya["5"] = nc;
                    Ca["5"] = ob;
                    Ub["5"] = ea(w(Sc, oc([Re, Le]), Dc), Vb);
                    V.push(jv);
                    Z("5", Ad, 20);
                    vb(Jh, 7);
                    Z("n", Jh, 6);
                    gb.push(kv);
                    Ca.d = ob;
                    Z("d", Ob(["hid", "u", "v", "vf"]), 1);
                    ya.d = ad;
                    Z("n", function (a, c) {
                        return {
                            Ea: function (b, d) {
                                if (! b.M || ! b.M.force) {
                                    var e = .002,
                                        f = c.id === Fa.sg ? 1 : .002,
                                        g,
                                        h,
                                        k,
                                        l,
                                        m;
                                    void 0 === e && (e = 1);
                                    void 0 === f && (f = 1);
                                    var p = yd(a);
                                    if (p && T(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, ! e || ! f)) {
                                        p = p.getEntriesByType("resource");
                                        for (var r =
                                            {}, q =
                                            {}, t =
                                            {}, x = wl(), F = R(a).href, U = 0; U < p.length; U += 1) {
                                            var N = p[U],
                                                la = N.name.replace(vl, "").split("?")[0],
                                                wa = dc(la),
                                                Cb = (g =
                                                    {}, g.dns = Math.round(N.domainLookupEnd - N.domainLookupStart), g.tcp = Math.round(N.connectEnd - N.connectStart), g.duration = Math.round(N.duration), g.response = Math.round(N.responseEnd - N.requestStart), g);
                                            "script" !== N.initiatorType || e || (q[la] = z(Cb, (h =
                                                {}, h.name = N.name, h.decodedBodySize = N.decodedBodySize, h.transferSize = Math.round(N.transferSize), h)));
                                            ! Pt[wa] && ! x[wa] || r[la] || f || (r[la] = z(Cb, (k =
                                                {}, k.pages = F, k)))
                                        }
                                        da(r).length && (t.timings8 = r);
                                        da(q).length && (t.scripts = q);
                                        if (da(t).length) 
                                            va(a, "d", c)({
                                                K: Ka(
                                                    (l =
                                                        {}, l.ar = 1, l.pv = 1, l)
                                                ),
                                                ba: {
                                                    da: zb(a, t) || void 0
                                                },
                                                J: (m =
                                                    {}, m["page-url"] = F, m)
                                            }, {
                                                id: Fa.wg,
                                                ca: "0"
                                            })["catch"](D(a, "r.tim.ng2"))
                                        
                                    }
                                }
                                d()
                            }
                        }
                    }, 7);
                    ya.ci = [Eb];
                    Ca.ci = Wb;
                    gb.push(B("p.sci", function (a, c) {
                        return qa(c, u(a, rn))["catch"](D(a, "ins.cs"))
                    }));
                    V.push(lv);
                    gb.push(Ft);
                    V.push(qv);
                    vb(jh, 8);
                    Z("f", jh, 3);
                    Z("n", jh, 5);
                    fd.push(function (a) {
                        return B("fip", function (c) {
                            if (! rl(c) || Sd(c)) {
                                var b = Pa(c);
                                if (! b.C("fip")) {
                                    var d = w(Tb(w(function (e, f) {
                                        return B("fip." + f, e)(c)
                                    }, G(Xr, null))), xe("-"))(a);
                                    b.D("fip", d)
                                }
                            }
                        })
                    }([
                        sv,
                        rv,
                        function (a) {
                            var c = n(a, "ApplePaySession"),
                                b = R(a).protocol;
                            a = c && "https:" === b && ! ib(a) ? c : void 0;
                            c = "";
                            if (! a) 
                                return c;
                            
                            try {
                                c = "" + a.canMakePayments();
                                b = "";
                                var d = a.supportsVersion;
                                if (T(d)) 
                                    for (var e = 1; 20 >= e; e += 1) 
                                        b += d.call(a, e) ? "" + e : "0";
                                    
                                
                                return b + c
                            } catch (f) {
                                return c
                            }
                        },
                        function (a) {
                            a = n(a, "navigator") || {};
                            return a.doNotTrack || a.msDoNotTrack || "unknown"
                        },
                        function (a) {
                            if (a = Et(a)) 
                                try {
                                    for (var c =[], b = 0; b < sl.length; b += 1) {
                                        var d = a(sl[b]);
                                        c.push(d)
                                    }
                                    var e = c
                                }
                             catch (f) {
                                e = []
                            } else 
                                e = [];
                            
                            return e ? I("x", e) : ""
                        },
                        function (a) {
                            var c = void 0;
                            void 0 === c && (c = ov);
                            var b = n(a, "navigator") || {};
                            c = A(u(b, n), c);
                            c = I("x", c);
                            try {
                                var d = n(a, "navigator.getGamepads");
                                var e = na(d, "getGamepads") && a.navigator.getGamepads() || []
                            } catch (f) {
                                e = []
                            }
                            return c + "x" + Ta(e)
                        },
                        mv,
                        function (a) {
                            a = n(a, "screen") || {};
                            return I("x", A(u(a, n), nv))
                        },
                        function (a) {
                            return I("x", Wm(a) || [])
                        },
                        function (a) {
                            a = mn(a);
                            return ca(a) ? I("x", a) : a
                        },
                        function (a) {
                            return(a = on(a)) ? I("x", A(C([
                                "",
                                [
                                    "matches", "media"
                                ]
                            ], Ym), ua(oh(a)))) : ""
                        }
                    ]));
                    vb(function (a) {
                        return {
                            N: function (c, b) {
                                var d = c.K,
                                    e = Pa(a).C("fip");
                                e && d && (d.D("fip", e), me(c, "fip", Ab(e)));
                                b()
                            }
                        }
                    }, 9);
                    Z("h", function (a) {
                        return {
                            Ea: function (c, b) {
                                var d = c.Ci;
                                Qf(c) && d && H(a).D("isEU", n(d, "settings.eu"));
                                b()
                            }
                        }
                    }, 3);
                    fd.push(Pu);
                    mc.push(tv);
                    gb.push(yv);
                    V.push(zv);
                    jc({
                        ej: {
                            ea: "yaDisableGDPR"
                        },
                        fj: {
                            ea: "yaGDPRLang"
                        }
                    });
                    Ke.push(function (a, c) {
                        return {
                            N: C(
                                [
                                    a, c
                                ],
                                Im
                            )
                        }
                    });
                    Rd.push("gdpr");
                    Rd.push("gdpr_popup");
                    tg.push(function (a, c) {
                        var b = ke(a);
                        b = le(b);
                        if (ea(oc(Cv), b).length) 
                            return !0;
                        
                        b = c(a, "gdpr");
                        return K(b, [Mc, Bv])
                    });
                    Ke.push(function (a) {
                        return {
                            N: function (c, b) {
                                var d = c.na || {},
                                    e;
                                (e = n(a, "document.referrer")) ? (e = Nc(a, e).host, e = kj(e), e = zl + "." + (
                                    e || Ut
                                )) : e = gc;
                                c.na = z(d, {Kh: [e]});
                                b()
                            }
                        }
                    });
                    vb(Vl, 5);
                    Z("1", Vl, 6);
                    ya.c = ad;
                    Ca.c = Wb;
                    Z("1", rh, 7);
                    vb(rh, 7);
                    mc.push(B("hcp", ph));
                    gb.push(B("p.ot", Fv));
                    gb.push(mb("cta", Gv, !0));
                    Z("n", function (a) {
                        var c = H(a);
                        return {
                            N: function (b, d) {
                                var e = b.M || {},
                                    f = c.C("cta"),
                                    g = c.C("cta.e");
                                if (f || g) {
                                    e.R || (e.R =
                                        {});
                                    e.R.__ym || (e.R.__ym =
                                        {});
                                    var h = {};
                                    f ? (f = A(function (k) {
                                        var l,
                                            m = n(k, "topic");
                                        k = n(k, "version");
                                        return l = {},
                                        l.topic = m,
                                        l.version = k,
                                        l
                                    }, f), h.ct = f) : g && (h["ct.e"] = g);
                                    z(e.R.__ym, h);
                                    b.M = z(b.M || {}, e)
                                }
                                d()
                            }
                        }
                    }, 7);
                    Z("n", Yf, 8);
                    V.push(Hv);
                    V.push(Iv);
                    mc.push(B("cdl", function (a) {
                        var c = H(a).Ca;
                        if (a = n(a, "navigator.cookieDeprecationLabel")) 
                            try {
                                a.getValue().then(u("cdl", c), C([
                                    "cdl", "e"
                                ], c))
                            }
                         catch (b) {
                            c("cdl", "d")
                        } else 
                            c("cdl", "na")
                        
                    }));
                    V.push(function (a, c) {
                        var b = Xl(a),
                            d = M(c),
                            e = b[d];
                        e || (e =
                            {}, b[d] = e);
                        e.Mh = !0;
                        if (b = e.Wf) 
                            d = Yl(a),
                            y(d, b)
                        
                    });
                    Rd.push("_ym_sup_debug");
                    mc.unshift(Jv);
                    y(tb(ia)(window), mc);
                    if (window.Ya && ef) {
                        var Zl = Fa.kc;
                        window.Ya[Zl] = ef;
                        Vs(window);
                        y(w(Ld([
                            window, window.Ya[Zl]
                        ]), ia), Ng)
                    }
                    (function (a) {
                        var c = n(a, "ym");
                        if (c) {
                            var b = n(c, "a");
                            b || (c.a =[], b = c.a);
                            var d = Yl(a);
                            He(a, b, function (e) {
                                e.za.F(d)
                            }, !0)
                        }
                    })(window)
                }
            )()
        } catch (ef) {};
    }).call(this)

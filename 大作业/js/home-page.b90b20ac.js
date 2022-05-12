"use strict";
(window["volcano-engine-web"] = window["volcano-engine-web"] || []).push([
    [9223], {
        33396: function(t, e, n) {
            n.r(e);
            var i, o = n(2784);

            function r() {
                return r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                }, r.apply(this, arguments)
            }
            e.default = function(t) {
                return o.createElement("svg", r({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 7 11",
                    fill: "none"
                }, t), i || (i = o.createElement("path", {
                    d: "M.207 9.707L4.406 5.5.207 1.293 1.5 0 7 5.5 1.5 11 .208 9.707z",
                    fill: "#1664FF"
                })))
            }
        },
        21025: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return C
                }
            });
            var i = n(33028),
                o = n(2784),
                r = n(23405),
                c = n(4517),
                l = n(63037),
                a = n(35513),
                d = n(52034),
                s = n.n(d),
                u = n(58488),
                p = n(74929),
                f = n(98127),
                v = n(69841),
                h = n(47729),
                m = n(8393),
                g = n(2867),
                T = n(29844),
                k = n(67763),
                _ = n(77810);
            var E = function() {
                    var t = (0, o.useState)(!0),
                        e = (0, g.Z)(t, 2),
                        n = e[0],
                        i = e[1],
                        r = (0, o.useState)(!0),
                        c = (0, g.Z)(r, 2),
                        l = c[0],
                        a = c[1];
                    return (0, o.useEffect)((function() {
                        function t() {
                            var t = window.innerWidth > 600;
                            i(t), a(!t)
                        }
                        return t(), window.addEventListener("resize", t),
                            function() {
                                window.removeEventListener("resize", t)
                            }
                    }), []), o.createElement(o.Fragment, null, o.createElement(T.Z, {
                        pc: n && o.createElement(k.Z, null),
                        mobile: l && o.createElement(_.Z, null)
                    }))
                },
                b = (n(97833), n(12112), n(34209), n(65340), (0, p.Z)(E, {
                    appbar: {
                        enabled: !1
                    },
                    sideMenuBar: {
                        enabled: !1
                    },
                    footer: {
                        enabled: !1
                    },
                    style: {
                        overflow: "visible"
                    }
                })),
                y = function() {
                    var t = (0, r.I0)(),
                        e = (0, l.useRuntimeContext)().context,
                        n = (0, c.useLocation)();
                    return (0, o.useEffect)((function() {
                        var o, r, c, l = document.location.host.slice(document.location.host.indexOf(".") + 1);
                        if (!s().get("utm") && null !== (o = window) && void 0 !== o && null !== (r = o.location) && void 0 !== r && r.search) {
                            var d, u, p, f, v = (0, i.Z)((0, i.Z)({}, (0, m.W)(null === (d = window) || void 0 === d || null === (u = d.location) || void 0 === u ? void 0 : u.search)), {}, {
                                landing_page_url: null === (p = window) || void 0 === p || null === (f = p.location) || void 0 === f ? void 0 : f.href
                            });
                            for (var g in v)
                                if (g.startsWith("utm_")) {
                                    s().set("utm", v, {
                                        domain: l
                                    });
                                    break
                                }
                        }
                        var T = function() {
                            s().set("referrer_title", document.title, {
                                expires: 90,
                                domain: l
                            })
                        };
                        if (T(), null === (c = window) || void 0 === c || c.addEventListener("visibilitychange", T), (0, h.PR)()(t).then((function(t) {
                                var i;
                                (0, a.Aq)(Boolean(s().get("isIntranet") && parseInt(s().get("isIntranet"), 10) > 0), t, (0, m.W)(n.search, null === e || void 0 === e || null === (i = e.request) || void 0 === i ? void 0 : i.cookie))
                            })), !s().get("isIntranet")) {
                            var k = new Image,
                                _ = !1;
                            k.src = "//tosv.byted.org/obj/volcfe/test/ping.gif?t=" + Date.now() + "R" + Math.floor(999 * Math.random()), k.onload = function() {
                                _ = !0, s().set("isIntranet", "1", {
                                    expires: 90,
                                    domain: l
                                })
                            }, k.onerror = function() {
                                _ = !0, s().set("isIntranet", "-1", {
                                    expires: 7,
                                    domain: l
                                })
                            }, setTimeout((function() {
                                _ || (_ = !1, s().set("isIntranet", "-2", {
                                    expires: 7,
                                    domain: l
                                }))
                            }), 1500)
                        }
                        return function() {
                            var t;
                            null === (t = window) || void 0 === t || t.removeEventListener("visibilitychange", T)
                        }
                    }), []), o.createElement(o.Fragment, null, o.createElement(v.S, null, o.createElement(f.Z, {
                        theme: "light"
                    })), o.createElement(b, null))
                };
            y.config = {
                features: {
                    state: {
                        Provider: r.zt,
                        reducers: u.Z
                    }
                }
            };
            var C = y
        },
        79030: function(t, e, n) {
            n.d(e, {
                bo: function() {
                    return o
                },
                BG: function() {
                    return r
                },
                jf: function() {
                    return c
                },
                CG: function() {
                    return l
                },
                W$: function() {
                    return a
                }
            });
            n(77162);
            var i = n(32145),
                o = (n(1108), (0, i.createAction)("SET_DOCUMENT")()),
                r = (0, i.createAction)("SET_CATEGORY_LIST")(),
                c = (0, i.createAction)("SET_SEARCH_DATA")(),
                l = (0, i.createAction)("SET_DOC_DETAIL")(),
                a = (0, i.createAction)("SET_DOC_FEEDBACK")()
        },
        47729: function(t, e, n) {
            n.d(e, {
                x4: function() {
                    return u
                },
                av: function() {
                    return p
                },
                RG: function() {
                    return f
                },
                PR: function() {
                    return v
                }
            });
            var i = n(33028),
                o = n(34795),
                r = n(45455),
                c = n.n(r),
                l = n(77162),
                a = n.n(l),
                d = n(32145),
                s = n(35513),
                u = (n(72581), (0, d.createAction)("LOGIN")()),
                p = (0, d.createAction)("SET_USER")(),
                f = (0, d.createAction)("SET_PROFILE")(),
                v = function(t) {
                    return void 0 === t && (t = {}),
                        function() {
                            var e = (0, o.Z)(a().mark((function e(n) {
                                var o, r, l, d, u, f, v, h, m;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (o = c()(t), r = (0, s.t6)("/api/common/passport/getUser"), l = {
                                                    headers: {},
                                                    isBrowser: !0
                                                }, o || (u = (d = t).request.headers, f = d.isBrowser, Object.assign(l, {
                                                    headers: u,
                                                    isBrowser: f
                                                })), !l.isBrowser) {
                                                e.next = 16;
                                                break
                                            }
                                            return n(p({
                                                fetching: !0
                                            })), e.next = 8, (0, s.WY)({
                                                method: "GET",
                                                url: "https:" + r,
                                                withCredentials: !0,
                                                headers: {
                                                    accept: "application/json, text/plain, */*",
                                                    "content-type": "application/json; charset=UTF-8",
                                                    Cookie: l.headers.cookie
                                                }
                                            }, !1);
                                        case 8:
                                            if (null === (h = e.sent) || void 0 === h || null === (v = h.Result) || void 0 === v || !v.IsLogin) {
                                                e.next = 15;
                                                break
                                            }
                                            return m = h.Result.CurUser.Account.Id, n(p((0, i.Z)((0, i.Z)({}, h.Result), {}, {
                                                fetching: !1,
                                                IsLogin: !0,
                                                Id: m
                                            }))), e.abrupt("return", m);
                                        case 15:
                                            n(p({
                                                fetching: !1,
                                                Id: -1,
                                                IsLogin: !1
                                            }));
                                        case 16:
                                            return e.abrupt("return", -1);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                }
        },
        2556: function(t, e, n) {
            n.d(e, {
                Mc: function() {
                    return l
                }
            });
            var i = n(34795),
                o = n(77162),
                r = n.n(o),
                c = (n(48926), n(35513)),
                l = function() {
                    var t = (0, i.Z)(r().mark((function t(e, n) {
                        var i, o, l, a, d, s;
                        return r().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return i = "/api/bee/getJson", e || (o = n.host, l = n["x-forwarded-host"], d = (a = l || o || "").includes("localhost") ? "http" : "https", i = d + "://" + a + i), t.next = 4, (0, c.WY)({
                                        url: i,
                                        params: {
                                            key: "firstScreenBanner"
                                        }
                                    }, !1);
                                case 4:
                                    return s = t.sent, t.abrupt("return", null === s || void 0 === s ? void 0 : s.firstScreenBanners);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }()
        },
        53997: function(t, e, n) {
            n(86152), n(77162), n(56642), n(35513)
        },
        77184: function(t, e, n) {
            n.d(e, {
                z: function() {
                    return l
                }
            });
            var i = n(33028),
                o = n(48926),
                r = n(40117),
                c = {};
            0 === Object.keys(c).length && Object.keys(r.n).forEach((function(t) {
                var e = r.n[t];
                e.__path && (c[t] = e.__path)
            }));
            var l = (0, i.Z)((0, i.Z)({}, c), {}, {
                CKA: "/training/cka",
                CKA_ADVISORY: "/contact/cka",
                HOME: "/",
                ABOUT: "/about",
                DOCS: "/docs",
                CONTENT: "/content",
                PARTNERS: "" + o.gL.partnerDomain,
                NOTICE: "/notice",
                CV_CAMPAIGN: "/contact/activity/cvcampaign",
                CLOUD_APPLY: "/event/cloud/apply",
                TECH_VIDEO_CLOUD: "/contact/tech-video-cloud",
                VEFC_APPLY: "/event/force/apply",
                V_TECH: "/contact/activity/VTech",
                PARTNERS_ADVISORY: "/contact/partners",
                PARTNER_CORPLINK: "/contact/partner_corplink",
                CONTACT: "/product/contact",
                CONTACT_PRODUCT: "/contact/product",
                CONTACT_HANDBOOK: "/contact/handbook",
                CONTACT_ADVISORY: "/contact/advisory",
                CONTACT_ACTIVITY: "/contact/activity/data1",
                ACTIVITY_OVERVIEW: "/activity/overview",
                ACTIVITY_OVERVIEW_INDUSTRY: "/activity/industry-overview",
                ACTIVITY_OVERVIEW_DEVELOPERS: "/activity/developers-overview",
                ACTIVITY: "/activity/data1",
                ACTIVITY_VOD: "/activity/vod1",
                ACTIVITY_MEETUP: "/activity/meetup",
                ACTIVITY_TECHTALK: "/activity/techtalk",
                ACTIVITY_PREHEAT: "/event/techforgrowth",
                ACTIVITY_2021_12_02_MAIN: "/event/cloud",
                ACTIVITY_2021_12_02_BRANCH: "/event/cloud/:confName",
                ACTIVITY_VIDEO_CLOUD: "/activity/tech-video-cloud",
                LIVE_VIDEO_CLOUD: "/activities/live/tech-video-cloud",
                SEM_HOME: "/embed",
                SEM_LIVESAAS: "/embed/product/live-saas",
                SEM_LIVESAAS_B: "/embed/product/live-saas/B",
                SEM_LIVESAAS_C: "/embed/product/live-saas/C",
                SEM_EFFECT_STICKER: "/embed/product/effect-sticker",
                SEM_EFFECT_BEAUTY: "/embed/product/effect-beauty",
                SEM_EFFECT_GESTURE: "/embed/product/effect-gesture",
                SEM_EFFECT_BODY: "/embed/product/effect-body",
                SEM_EFFECT_FUSION: "/embed/product/effect-fusion",
                SEM_EFFECT_FUSION_EXP: "/embed/experience/effect-fusion",
                SEM_CONTACT: "/embed/contact",
                EXPERIENCE: "/experience",
                EXPERIENCE_EFFECT_FUSION: "/experience/effect-fusion",
                EXPERIENCE_VOD: "/experience/vod",
                JOBS: "/jobs",
                JOBS_DETAIL: "/jobs-detail/:id",
                OCEANENGINE: "https://ec.oceanengine.com/index.html#/partner",
                RECOMMEND: "/referral",
                INTELLIGENT_IMAGE_DERIVATION: "/products/Image-derivation",
                COOPERATE_APPLY: "/cooperate/apply/:id",
                PUBLIC_BETA_INVITE: "/public_beta_invite",
                PUBLIC_BETA_LIST: "/public_beta_list",
                PRICING: "/pricing"
            })
        },
        50611: function(t, e, n) {
            var i = n(77325),
                o = n(80753),
                r = n(81665),
                c = n(2784),
                l = n(34149),
                a = n(35513),
                d = n(81592),
                s = n(2183),
                u = n.n(s),
                p = n(53911),
                f = n(32596),
                v = n(25599),
                h = u().bind(v.Z),
                m = (0, l.default)(d.ZT).withConfig({
                    displayName: "Anchor__StyledTypography",
                    componentId: "sc-ydsjkr-0"
                })(["", " @media screen and (max-width:600px){font-size:13px;color:", ";}"], (function(t) {
                    return t.actived && "color: var(--color-primary);"
                }), (function(t) {
                    return t.actived ? "var(--color-primary)" : "var(--color-text-primary)"
                })),
                g = l.default.div.withConfig({
                    displayName: "Anchor__ScrollBar",
                    componentId: "sc-ydsjkr-1"
                })(["width:30px;height:100%;display:flex;align-items:center;justify-content:center;background:var(--color-primary);position:absolute;top:0;color:#fff;box-shadow:-1px 0 1px 0 rgba(0,0,0,0.13);opacity:1;transform:translateY(0);transition:all ease 0.3s;", " ", ""], (function(t) {
                    return t.hidden && "\n    opacity: 0;\n    point-evnets: none;\n  "
                }), (function(t) {
                    return t.up && "\n    transform: translateY(60px);\n  "
                })),
                T = (0, l.default)(g).withConfig({
                    displayName: "Anchor__ScrollLeft",
                    componentId: "sc-ydsjkr-2"
                })(["left:0;box-shadow:1px 0 1px 0 rgba(0,0,0,0.13);"]),
                k = (0, l.default)(g).withConfig({
                    displayName: "Anchor__ScrollRight",
                    componentId: "sc-ydsjkr-3"
                })(["right:0;"]),
                _ = function(t) {
                    function e(n) {
                        var r;
                        return (r = t.call(this, n) || this).prevTop = -1, r.ref = void 0, r.scrollEvent = function() {
                            var t = (0, a.c6)(),
                                n = r.props.anchor;
                            e.isAffix() ? r.setState({
                                affix: !0
                            }) : r.setState({
                                affix: !1
                            }), r.prevTop >= 0 && r.prevTop < t && !e.stop && r.setState({
                                hidden: !1
                            }), r.prevTop >= 0 && r.prevTop > t && !e.stop && r.setState({
                                hidden: !0
                            }), r.prevTop = t;
                            var o = n.map((function(t) {
                                    var e = document.getElementById(t.href.replace("#", ""));
                                    if (e) {
                                        var n = (0, a.U4)(e);
                                        return {
                                            top: n,
                                            bottom: n + e.clientHeight,
                                            title: t.title
                                        }
                                    }
                                    return {
                                        top: 0,
                                        bottom: 0,
                                        title: ""
                                    }
                                })),
                                c = function() {
                                    var e, n, r = document.documentElement,
                                        c = r.scrollHeight;
                                    if (r.clientHeight + t >= c - 10) return null === (n = o[o.length - 1]) || void 0 === n ? void 0 : n.title;
                                    for (var l, a = (0, i.Z)(o); !(l = a()).done;) {
                                        var d = l.value;
                                        if (t + 120 >= d.top && t + 120 < d.bottom) return d.title
                                    }
                                    return null === (e = o[0]) || void 0 === e ? void 0 : e.title
                                }();
                            r.setState({
                                actived: c
                            })
                        }, r.state = {
                            isScrollLeft: !0,
                            isScrollRight: !1,
                            hidden: !0,
                            affix: !1,
                            actived: ""
                        }, r.ref = c.createRef(), r.onContainerScroll = r.onContainerScroll.bind((0, o.Z)(r)), r.scrollLeft = r.scrollLeft.bind((0, o.Z)(r)), r.scrollRight = r.scrollRight.bind((0, o.Z)(r)), r
                    }(0, r.Z)(e, t);
                    var n = e.prototype;
                    return n.onContainerScroll = function() {
                        var t = this.ref.current;
                        if (t) {
                            var e = t.scrollLeft <= 0,
                                n = t.scrollLeft >= t.scrollWidth - t.offsetWidth;
                            e !== this.state.isScrollLeft && this.setState({
                                isScrollLeft: e
                            }), n !== this.state.isScrollRight && this.setState({
                                isScrollRight: n
                            })
                        }
                    }, n.componentDidMount = function() {
                        a.J8 && window.addEventListener("scroll", this.scrollEvent, !1), this.scrollEvent();
                        var t = this.ref.current;
                        t && (t.addEventListener("scroll", this.onContainerScroll), this.onContainerScroll())
                    }, n.componentWillUnmount = function() {
                        a.J8 && window.removeEventListener("scroll", this.scrollEvent);
                        var t = this.ref.current;
                        t && t.removeEventListener("scroll", this.onContainerScroll)
                    }, n.scrollLeft = function() {
                        var t = this.ref.current;
                        if (t) {
                            var e = t.scrollLeft,
                                n = t.clientWidth;
                            t.scrollTo({
                                left: e - n,
                                behavior: "smooth"
                            })
                        }
                    }, n.scrollRight = function() {
                        var t = this.ref.current;
                        if (t) {
                            var e = t.scrollLeft,
                                n = t.clientWidth;
                            t.scrollTo({
                                left: e + n,
                                behavior: "smooth"
                            })
                        }
                    }, n.render = function() {
                        var t = this.props.children;
                        return c.createElement("div", {
                            id: "navigation-bar",
                            className: h("anchor-container")
                        }, c.createElement("div", {
                            className: h("anchor-content", "anchor-content-affix")
                        }, c.createElement("div", {
                            ref: this.ref,
                            className: h("anchor-affix-content", (this.state.hidden || !this.state.affix) && "anchor-affix-hidden")
                        }, c.createElement(E.Provider, {
                            value: {
                                currentLink: this.state.actived,
                                containerRef: this.ref
                            }
                        }, t)), c.createElement(T, {
                            up: this.state.hidden || !this.state.affix,
                            hidden: this.state.isScrollLeft,
                            onClick: this.scrollLeft
                        }, c.createElement(p.IconLeft, null)), c.createElement(k, {
                            up: this.state.hidden || !this.state.affix,
                            hidden: this.state.isScrollRight,
                            onClick: this.scrollRight
                        }, c.createElement(p.IconRight, null))))
                    }, e
                }(c.PureComponent);
            _.stop = !1, _.isAffix = function() {
                var t = (0, a.c6)(),
                    e = document.getElementById("navigation-bar");
                return e ? t + 60 > (0, a.U4)(e) : null
            };
            var E = (0, c.createContext)({
                currentLink: ""
            });
            c.PureComponent;
            e.ZP = _
        },
        67154: function(t, e, n) {
            n(2784), n(32596), n(57124)
        },
        86175: function(t, e, n) {
            n.d(e, {
                re: function() {
                    return f
                }
            });
            var i = n(59740),
                o = n(77325),
                r = n(72779),
                c = n.n(r),
                l = n(2784),
                a = n(34149),
                d = n(85206),
                s = ["className", "children", "component", "variant", "color", "align", "noWrap", "fontWeight", "xsVariant"],
                u = [100, 200, 300, 400, 500, 900],
                p = function(t) {
                    for (var e, n = (0, o.Z)(u); !(e = n()).done;) {
                        var i = e.value;
                        if (("string" === typeof t ? parseInt(t, 10) : "number" === typeof t ? t : 400) <= i) return i
                    }
                    return 400
                },
                f = "$wrap$",
                v = (a.default.br.withConfig({
                    displayName: "Typography__XsWrap",
                    componentId: "sc-18olnhp-0"
                })(["display:none;@media screen and (max-width:600px){display:block;}"]), a.default.br.withConfig({
                    displayName: "Typography__XsUpWrap",
                    componentId: "sc-18olnhp-1"
                })(["@media screen and (max-width:600px){display:none;}"]), l.forwardRef((function(t, e) {
                    var n = t.className,
                        o = t.children,
                        r = t.component,
                        a = t.variant,
                        u = void 0 === a ? "body1" : a,
                        v = t.color,
                        h = void 0 === v ? "inherit" : v,
                        m = t.align,
                        g = void 0 === m ? "inherit" : m,
                        T = t.noWrap,
                        k = void 0 !== T && T,
                        _ = t.fontWeight,
                        E = t.xsVariant,
                        b = (0, i.Z)(t, s),
                        y = function(t, e) {
                            if (t) return t;
                            switch (e) {
                                case "body1":
                                case "body2":
                                case "caption":
                                    return "p";
                                default:
                                    return e
                            }
                        }(r, u);
                    return l.createElement(y, Object.assign({}, b, {
                        className: c()(d.Z.typography, d.Z["typography-" + u], d.Z["typography-color-" + h], d.Z["typography-align-" + g], d.Z["typography-font-size-" + p(_)], k && d.Z["typography-noWarp"], E && d.Z["typography-sm-" + E], n),
                        ref: e
                    }), function(t) {
                        return l.Children.map(t, (function(t) {
                            return "string" !== typeof t ? t : "" === t ? l.createElement("br", null) : t.split(f).reduce((function(t, e, n) {
                                return 0 === t.length ? [e] : [].concat(t, [l.createElement("br", {
                                    key: n
                                }), e])
                            }), [])
                        }))
                    }(o))
                })));
            e.ZP = v
        },
        81592: function(t, e, n) {
            n.d(e, {
                ee: function() {
                    return f.ZP
                },
                zx: function() {
                    return i.Z
                },
                HY: function() {
                    return o.Z
                },
                Q5: function() {
                    return r.Z
                },
                JO: function() {
                    return c.Z
                },
                A: function() {
                    return l.Z
                },
                rU: function() {
                    return a.Z
                },
                dw: function() {
                    return h.Z
                },
                ZT: function() {
                    return d.ZP
                }
            });
            var i = n(3941),
                o = (n(72779), n(2784), n(14602)),
                r = n(15022),
                c = n(41069),
                l = n(25292),
                a = n(32596),
                d = (n(67154), n(86175)),
                s = n(2183),
                u = n.n(s),
                p = n(76918),
                f = (u().bind(p.Z), n(50611)),
                v = n(34149),
                h = ((0, v.default)(d.ZP).withConfig({
                    displayName: "Title__TitleName",
                    componentId: "sc-gtmmno-0"
                })(["font-size:28px;@media screen and (max-width:600px){font-size:16px;font-family:var(--font-family-500);line-height:22px;font-weight:500;}"]), n(54485)),
                m = (n(31925), n(54073), n(61310)),
                g = (v.default.div.withConfig({
                    displayName: "ScrollView__Content",
                    componentId: "sc-6olic-0"
                })(["position:relative;display:flex;flex-wrap:nowrap;overflow-x:", ";", ";"], (function(t) {
                    return t.subsection ? "hidden" : "auto"
                }), m.Q6), v.default.div.withConfig({
                    displayName: "ScrollView__Container",
                    componentId: "sc-6olic-1"
                })(["position:relative;"]), v.default.div.withConfig({
                    displayName: "ScrollView__Item",
                    componentId: "sc-6olic-2"
                })(["width:100%;flex:0 0 100%;"]), v.default.div.withConfig({
                    displayName: "ScrollView__Space",
                    componentId: "sc-6olic-3"
                })(["width:", ";flex:0 0 ", ";"], (function(t) {
                    return t.width
                }), (function(t) {
                    return t.width
                })), v.default.div.withConfig({
                    displayName: "ScrollView__NavigationContainer",
                    componentId: "sc-6olic-4"
                })(["position:absolute;bottom:-25px;left:50%;transform:translateX(-50%);display:flex;"]), v.default.div.withConfig({
                    displayName: "ScrollView__NavigationPoint",
                    componentId: "sc-6olic-5"
                })(["width:5px;height:5px;border-radius:50%;margin:0 6px;transition:all ease 0.3s;background:", ";"], (function(t) {
                    return t.actived ? "var(--color-primary)" : "#e6eaf0"
                })), n(77162), n(52034), n(28909)),
                T = (n(53911), n(53997), n(65811));
            u().bind(T.Z), v.default.form.withConfig({
                displayName: "SearchBar__StyledForm",
                componentId: "sc-1a4ukf3-0"
            })(["width:100%;"]), (0, v.default)(g.Z).withConfig({
                displayName: "SearchBar__StyledInput",
                componentId: "sc-1a4ukf3-1"
            })(["& .addafter.addafter{border:0;padding:0;}& .byte-input-group .byte-input-inner-wrapper .byte-input{height:40px;border-radius:0;background:#f2f3f5;border-color:#f2f3f5;-webkit-appearance:none;-moz-appearance:none;appearance:none;}& .byte-input-group .byte-input-inner-wrapper .byte-input::-webkit-search-cancel-button{-webkit-appearance:none;display:none;}@media screen and (max-width:600px){& .byte-input-group .byte-input-inner-wrapper .byte-input{font-size:12px;line-height:14px;height:36px;}}"]), n(48282)
        },
        69841: function(t, e, n) {
            n.d(e, {
                S: function() {
                    return s
                }
            });
            var i = n(81665),
                o = n(2784),
                r = n(81592),
                c = n(92359),
                l = n(92041),
                a = n(75459),
                d = function(t) {
                    var e = function(t) {
                        return "500" === t ? {
                            image: l,
                            title: "\u672a\u77e5\u9519\u8bef",
                            subtitle: o.createElement(o.Fragment, null, "\u8bf7\u770b\u5230\u8fd9\u4e2a\u9875\u9762\u7684\u60a8\uff0c\u70b9\u51fb", o.createElement(r.rU, {
                                color: "primary",
                                href: "/contact/advisory"
                            }, " \u5efa\u8bae\u53cd\u9988 "), "\u544a\u77e5\u6211\u4eec\uff0c\u6216\u8005", o.createElement(r.rU, {
                                color: "primary",
                                onClick: function() {
                                    window.location.reload()
                                }
                            }, " \u5237\u65b0\u9875\u9762 "))
                        } : {
                            image: c,
                            title: "\u9875\u9762\u672a\u627e\u5230",
                            subtitle: "\u60a8\u53ef\u5c1d\u8bd5\u5237\u65b0\u9875\u9762\u6216\u8fd4\u56de\u4e0a\u4e00\u7ea7\u54e6",
                            actions: [o.createElement(r.zx, {
                                className: a.Z.button,
                                key: "1",
                                type: "primary",
                                onClick: function() {
                                    window.location.reload()
                                }
                            }, "\u5237\u65b0"), o.createElement(r.zx, {
                                className: a.Z.button,
                                key: "2",
                                onClick: function() {
                                    window.history.length ? window.history.back() : location.href = document.referrer
                                }
                            }, "\u8fd4\u56de")]
                        }
                    }(t.code);
                    return o.createElement("div", {
                        className: a.Z.container
                    }, o.createElement(r.HY, {
                        height: "120px"
                    }), o.createElement(r.A, {
                        src: e.image
                    }, o.createElement(r.HY, {
                        height: "225px",
                        width: "500px"
                    })), o.createElement(r.HY, {
                        height: "12px"
                    }), o.createElement(r.ZT, {
                        variant: "h6",
                        color: "textPrimary"
                    }, e.title), o.createElement(r.HY, {
                        height: "8px"
                    }), o.createElement(r.ZT, {
                        variant: "caption",
                        color: "textSecondary"
                    }, e.subtitle), e.actions && o.createElement(o.Fragment, null, o.createElement(r.HY, {
                        height: "24px"
                    }), o.createElement("div", {
                        className: a.Z.actions
                    }, e.actions)), o.createElement(r.HY, {
                        height: "120px"
                    }))
                },
                s = function(t) {
                    function e() {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)) || this).state = {
                            hasError: !1
                        }, e
                    }
                    return (0, i.Z)(e, t), e.getDerivedStateFromError = function() {
                        return {
                            hasError: !0
                        }
                    }, e.prototype.render = function() {
                        return this.state.hasError ? o.createElement(d, {
                            code: "500"
                        }) : this.props.children
                    }, e
                }(o.Component)
        },
        19700: function(t, e, n) {
            var i = n(77325),
                o = n(81665),
                r = n(12436),
                c = n.n(r),
                l = n(2784),
                a = n(81592),
                d = n(35513),
                s = n(2183),
                u = n.n(s),
                p = n(32596),
                f = n(91355),
                v = n(89557),
                h = u().bind(v.Z),
                m = function(t) {
                    function e(n) {
                        var o;
                        return (o = t.call(this, n) || this).prevTop = -1, o.anchorInfoBefore = f.Uu[0].title, o.ref = void 0, o.scrollEvent = function() {
                            var t = (0, d.c6)(),
                                n = o.props.anchor;
                            e.isAffix() ? o.setState({
                                affix: !0
                            }) : o.setState({
                                affix: !1
                            }), o.prevTop >= 0 && o.prevTop < t && !e.stop && o.setState({
                                hidden: !1
                            }), o.prevTop >= 0 && o.prevTop > t && !e.stop && o.setState({
                                hidden: !0
                            }), o.prevTop = t;
                            var r = n.map((function(t) {
                                    var e = document.getElementById(t.href.replace("#", ""));
                                    if (e) {
                                        var n = (0, d.U4)(e);
                                        return {
                                            top: n,
                                            bottom: n + e.clientHeight,
                                            title: t.title
                                        }
                                    }
                                    return {
                                        top: 0,
                                        bottom: 0,
                                        title: ""
                                    }
                                })),
                                l = c()((function() {
                                    var e, n, c = document.documentElement,
                                        l = c.scrollHeight;
                                    if (c.clientHeight + t >= l - 10) return o.anchorInfoBefore = null === (e = r[r.length - 1]) || void 0 === e ? void 0 : e.title, null === (n = r[r.length - 1]) || void 0 === n ? void 0 : n.title;
                                    for (var a, d = (0, i.Z)(r); !(a = d()).done;) {
                                        var s = a.value;
                                        if (t + 120 >= s.top && t + 120 < s.bottom) return o.anchorInfoBefore = s.title, s.title
                                    }
                                    return o.anchorInfoBefore
                                }), 50)();
                            o.setState({
                                actived: l
                            });
                            var a = document.getElementById("product-list-highlight-line"),
                                s = document.getElementById("product-list-anchor-container"),
                                u = 0;
                            if (f.Uu.map((function(t, e) {
                                    return u = t.title === l ? e : u
                                })), a && s) {
                                var p = s.childNodes[u];
                                a.style.width = p.offsetWidth + "px", a.style.left = p.offsetLeft + "px"
                            }
                        }, o.state = {
                            hidden: !0,
                            affix: !1,
                            actived: ""
                        }, o.ref = l.createRef(), o
                    }(0, o.Z)(e, t);
                    var n = e.prototype;
                    return n.componentDidMount = function() {
                        d.J8 && window.addEventListener("scroll", this.scrollEvent, !1), this.scrollEvent()
                    }, n.componentWillUnmount = function() {
                        d.J8 && window.removeEventListener("scroll", this.scrollEvent)
                    }, n.render = function() {
                        var t = this.props,
                            e = t.children,
                            n = t.inPage,
                            i = void 0 !== n && n,
                            o = this.state,
                            r = o.actived,
                            c = o.hidden,
                            a = o.affix;
                        return l.createElement(l.Fragment, null, i ? l.createElement(g.Provider, {
                            value: {
                                currentLink: r,
                                containerRef: this.ref
                            }
                        }, e) : l.createElement("div", {
                            id: "navigation-bar",
                            className: h("anchor-container")
                        }, l.createElement("div", {
                            className: h("anchor-content", "anchor-content-affix")
                        }, l.createElement("div", {
                            ref: this.ref,
                            className: h("anchor-affix-content", (c || !a) && "anchor-affix-hidden")
                        }, l.createElement(g.Provider, {
                            value: {
                                currentLink: r,
                                containerRef: this.ref
                            }
                        }, e)))))
                    }, e
                }(l.PureComponent);
            m.stop = !1, m.isAffix = function() {
                var t = (0, d.c6)(),
                    e = document.getElementById("navigation-bar");
                return e ? t + 60 > (0, d.U4)(e) : null
            };
            var g = (0, l.createContext)({
                currentLink: ""
            });
            l.PureComponent;
            e.ZP = m
        },
        91355: function(t, e, n) {
            n.d(e, {
                Uu: function() {
                    return o
                }
            });
            var i = n(95360),
                o = ((0, i.SU)("productList/banner.png"), [{
                    title: "\u4e91\u57fa\u7840",
                    description: "\u4e91\u539f\u751f\u9a71\u52a8\u7684\u65b0\u4e00\u4ee3\u9ad8\u6027\u80fd\u4e91\u57fa\u7840\u8bbe\u65bd",
                    iconNav: "icon-product-list-cloud",
                    iconTab: "icon-product-list-cloud-tab",
                    tabBg: (0, i.SU)("productList/\u4e91\u57fa\u7840.png"),
                    secondLevel: [{
                        title: "\u5f39\u6027\u8ba1\u7b97",
                        icon: "icon-product-list-tanxinjisuan",
                        thirdLevel: [{
                            title: "\u4e91\u670d\u52a1\u5668",
                            products: [{
                                title: "\u4e91\u670d\u52a1\u5668",
                                enTitle: "ecs",
                                des: "\u63d0\u4f9b\u7a33\u5b9a\u7684\u5f39\u6027\u8ba1\u7b97\u670d\u52a1\u3002\u901a\u8fc7\u5b9e\u65f6\u589e\u51cf\u8ba1\u7b97\u8d44\u6e90\uff0c\u9002\u5e94\u4e1a\u52a1\u53d8\u52a8\uff0c\u964d\u4f4e\u7ef4\u62a4\u6210\u672c",
                                link: "/product/ecs",
                                tag: {
                                    text: "HOT",
                                    type: "HOT"
                                }
                            }, {
                                title: "\u5f39\u6027\u88f8\u91d1\u5c5e",
                                enTitle: "ebm",
                                des: "\u5f39\u6027\u88f8\u91d1\u5c5e\u63d0\u4f9b\u9ad8\u6027\u80fd\u7b97\u529b\u670d\u52a1\u3001\u5b89\u5168\u7269\u7406\u9694\u79bb\u80fd\u529b\u3002\u53ef\u901a\u8fc7\u5feb\u901f\u4ea4\u4ed8\u52a9\u529b\u4e1a\u52a1\u589e\u957f",
                                link: "/product/ebm"
                            }, {
                                title: "GPU\u4e91\u670d\u52a1\u5668",
                                enTitle: "gpu",
                                des: "GPU\u4e91\u670d\u52a1\u5668\u662f\u63d0\u4f9b GPU \u7b97\u529b\u7684\u5f39\u6027\u8ba1\u7b97\u670d\u52a1\uff0c\u9002\u7528\u4e8e\u673a\u5668\u5b66\u4e60\u3001\u89c6\u89c9\u5904\u7406\u7b49\u591a\u79cd\u573a\u666f",
                                link: "/product/gpu",
                                tag: {
                                    text: "HOT",
                                    type: "HOT"
                                }
                            }]
                        }, {
                            title: "\u64cd\u4f5c\u7cfb\u7edf",
                            products: [{
                                title: "veLinux",
                                enTitle: "velinux",
                                des: "\u9488\u5bf9\u706b\u5c71\u5f15\u64ce\u516c\u6709\u4e91\u73af\u5883\u8fdb\u884c\u6df1\u5ea6\u5b9a\u5236\u4e0e\u4f18\u5316\u7684\u81ea\u7814\u64cd\u4f5c\u7cfb\u7edf\uff0c\u63d0\u4f9b\u4e86\u66f4\u5b89\u5168\u9ad8\u6548\u7684\u7cfb\u7edf\u670d\u52a1\u548c\u73af\u5883",
                                link: "/product/velinux"
                            }]
                        }]
                    }, {
                        title: "\u5b58\u50a8",
                        icon: "icon-product-list-chunchu",
                        products: [{
                            title: "\u5f39\u6027\u5757\u5b58\u50a8",
                            enTitle: "ebs",
                            des: "\u5f39\u6027\u5757\u5b58\u50a8EBS\u662f\u706b\u5c71\u5f15\u64ce\u63d0\u4f9b\u7684\u9ad8\u53ef\u7528\u3001\u9ad8\u53ef\u9760\u3001\u9ad8\u6027\u80fd\u7684\u5757\u5b58\u50a8\u8bbe\u5907",
                            link: "/product/ebs"
                        }, {
                            title: "\u5bf9\u8c61\u5b58\u50a8",
                            enTitle: "tos",
                            des: "\u6d77\u91cf\u3001\u5b89\u5168\u3001\u4f4e\u6210\u672c\u3001\u6613\u7528\u3001\u9ad8\u53ef\u9760\u3001\u9ad8\u53ef\u7528\u7684\u5206\u5e03\u5f0f\u4e91\u5b58\u50a8\u670d\u52a1",
                            link: "/product/tos",
                            tag: {
                                text: "HOT",
                                type: "HOT"
                            }
                        }]
                    }, {
                        title: "\u7f51\u7edc",
                        icon: "icon-product-list-\u7f51\u7edc",
                        products: [{
                            title: "\u79c1\u6709\u7f51\u7edc",
                            enTitle: "vpc",
                            des: "\u4e3a\u4e91\u4e0a\u8d44\u6e90\u6784\u5efa\u9694\u79bb\u7684\u865a\u62df\u7f51\u7edc\u73af\u5883\uff0c\u4fbf\u4e8e\u60a8\u81ea\u4e3b\u89c4\u5212\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u4e91\u4e0a\u7f51\u7edc",
                            link: "/product/vpc"
                        }, {
                            title: "\u8d1f\u8f7d\u5747\u8861",
                            enTitle: "clb",
                            des: "\u4e00\u79cd\u5c06\u8bbf\u95ee\u6d41\u91cf\u6309\u7b56\u7565\u5206\u53d1\u7ed9\u591a\u53f0\u540e\u7aef\u670d\u52a1\u5668\u7684\u670d\u52a1\uff0c\u53ef\u4ee5\u63d0\u9ad8\u7cfb\u7edf\u7684\u6574\u4f53\u53ef\u7528\u6027",
                            link: "/product/clb",
                            tag: {
                                text: "HOT",
                                type: "HOT"
                            }
                        }, {
                            title: "NAT\u7f51\u5173",
                            enTitle: "nat",
                            des: "\u4e3a\u79c1\u6709\u7f51\u7edc\u5185\u7684\u4e91\u670d\u52a1\u5668\u5b9e\u4f8b\u63d0\u4f9b\u7f51\u7edc\u5730\u5740\u8f6c\u6362\u80fd\u529b\uff0c\u4f7f\u5b50\u7f51\u5185\u7684\u591a\u4e2a\u4e91\u670d\u52a1\u5668\u53ef\u4ee5\u5171\u4eab\u516c\u7f51IP\u8bbf\u95ee\u516c\u7f51",
                            link: "/product/nat"
                        }, {
                            title: "\u516c\u7f51IP",
                            enTitle: "eip",
                            des: "\u4e00\u79cd\u53ef\u4ee5\u72ec\u7acb\u8d2d\u4e70\u548c\u6301\u6709\u7684\u516c\u7f51IP\u5730\u5740\u8d44\u6e90\u3002\u901a\u8fc7\u548c\u4e91\u8d44\u6e90\u7ed1\u5b9a\uff0c\u5b9e\u73b0\u4e91\u8d44\u6e90\u4e0e\u516c\u7f51\u7684\u8fde\u63a5",
                            link: "/product/eip"
                        }, {
                            title: "\u4e91\u4f01\u4e1a\u7f51",
                            enTitle: "cen",
                            des: "\u901a\u8fc7\u81ea\u52a8\u8def\u7531\u5206\u53d1\u5b66\u4e60\uff0c\u63d0\u4f9b\u4e91\u4e0a\u7f51\u7edc\u5b9e\u4f8b\u4e4b\u95f4\u9ad8\u901f\u7a33\u5b9a\u7684\u7f51\u7edc\u4e92\u901a\u80fd\u529b",
                            link: "/product/cen"
                        }]
                    }, {
                        title: "\u6570\u636e\u5e93",
                        icon: "icon-product-list-\u6570\u636e\u5e93",
                        products: [{
                            title: "\u4e91\u6570\u636e\u5e93 MySQL \u7248",
                            enTitle: "rds-mysql",
                            des: "\u57fa\u4e8e\u4e91\u5e73\u53f0\u7684\u5373\u5f00\u5373\u7528\u3001\u7a33\u5b9a\u53ef\u9760\u3001\u7075\u6d3b\u5f39\u6027\u3001\u6613\u4e8e\u4f7f\u7528\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u670d\u52a1",
                            link: "/product/rds-mysql",
                            tag: {
                                text: "HOT",
                                type: "HOT"
                            }
                        }, {
                            title: "\u4e91\u6570\u636e\u5e93 PostgreSQL \u7248",
                            enTitle: "rds-pg",
                            des: "\u4e91\u6570\u636e\u5e93 PostgreSQL \u7248\u662f\u4e00\u79cd\u57fa\u4e8e\u4e91\u5e73\u53f0\u7684\u5373\u5f00\u5373\u7528\u3001\u7a33\u5b9a\u53ef\u9760\u3001\u7075\u6d3b\u5f39\u6027\u3001\u6613\u4e8e\u4f7f\u7528\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u670d\u52a1\uff0cRDS for PostgreSQL\u5b8c\u5168\u517c\u5bb9\u539f\u751fPostgreSQL",
                            link: "/product/rds-pg"
                        }, {
                            title: "\u7f13\u5b58\u6570\u636e\u5e93 Redis \u7248",
                            enTitle: "rds-mysql",
                            des: "\u4e0eRedis\u517c\u5bb9\u7684\u5168\u6258\u7ba1\u7f13\u5b58\u548c\u5b58\u50a8\u670d\u52a1\uff0c\u4ee5\u5176\u8d85\u9ad8\u8bfb\u5199\u6027\u80fd\u4e3a\u4f01\u4e1a\u5e94\u7528\u8d4b\u80fd",
                            link: "/product/redis"
                        }, {
                            title: "\u6570\u636e\u5e93\u4f20\u8f93\u670d\u52a1",
                            enTitle: "dts",
                            des: "\u63d0\u4f9b\u4e00\u4f53\u5316\u6570\u636e\u5e93\u6570\u636e\u4f20\u8f93\u7ba1\u7406\u670d\u52a1\uff0c\u964d\u4f4e\u6570\u636e\u5e93\u4e4b\u95f4\u6570\u636e\u6d41\u901a\u590d\u6742\u6027\uff0c\u53ef\u5e2e\u52a9\u7528\u6237\u5728\u4e1a\u52a1\u4e0d\u505c\u670d\u7684\u524d\u63d0\u4e0b\u8f7b\u677e\u5b8c\u6210\u6570\u636e\u5e93\u8fc1\u79fb\u4e0a\u4e91",
                            link: "/product/dts"
                        }, {
                            title: "\u6587\u6863\u6570\u636e\u5e93 MongoDB \u7248",
                            enTitle: "\u6587\u6863\u6570\u636e\u5e93 MongoDB \u7248",
                            des: "\u5f00\u7bb1\u5373\u7528\u3001\u7a33\u5b9a\u53ef\u9760\u3001\u7075\u6d3b\u5f39\u6027\u7684\u4e91\u6570\u636e\u5e93\u670d\u52a1\uff0c\u5b8c\u5168\u517c\u5bb9\u539f\u751f MongoDB",
                            link: "/product/mongodb"
                        }]
                    }, {
                        title: "\u5b89\u5168",
                        icon: "icon-product-list-\u5b89\u5168",
                        products: [{
                            title: "DDoS\u9ad8\u9632",
                            enTitle: "AntiDDoS-pro",
                            des: "\u9762\u5411DDoS \u653b\u51fb\u98ce\u9669\u7684\u4e92\u8054\u7f51\u670d\u52a1\u63d0\u4f9b\u7cbe\u51c6\u9632\u62a4",
                            link: "/product/AntiDDoS-pro"
                        }, {
                            title: "DDoS\u57fa\u7840\u9632\u62a4",
                            enTitle: "AntiDDoS-basic",
                            des: "\u901a\u8fc7\u5145\u8db3\u3001\u4f18\u8d28\u7684\u539f\u751f\u7f51\u7edc\uff0c\u4e3a\u4e91\u5185\u516c\u7f51IP\u63d0\u4f9b DDoS \u9632\u62a4\u80fd\u529b\uff0c\u5b9e\u65f6\u5e94\u5bf9 DDoS \u653b\u51fb\u95ee\u9898\uff0c\u4fdd\u969c\u7528\u6237\u4e1a\u52a1\u7684\u7a33\u5b9a\u3001\u5b89\u5168\u8fd0\u884c",
                            link: "/product/AntiDDoS-basic"
                        }, {
                            title: "Web\u5e94\u7528\u9632\u706b\u5899",
                            enTitle: "waf",
                            des: "\u6709\u6548\u9632\u5fa1\u6076\u610f\u5165\u4fb5\u548c\u653b\u51fb\uff0c\u89e3\u51b3\u6570\u636e\u6cc4\u9732\u4ee5\u53ca\u5408\u89c4\u3001\u9690\u79c1\u4fdd\u62a4\u7b49\u95ee\u9898\uff0c\u4ece\u800c\u4fdd\u969c\u6570\u636e\u5b89\u5168\u6027\u548c\u5e94\u7528\u7a0b\u5e8f\u53ef\u7528\u6027",
                            link: "/product/waf"
                        }, {
                            title: "\u5bc6\u94a5\u7ba1\u7406\u7cfb\u7edf",
                            enTitle: "kms",
                            des: "\u4e00\u7ad9\u5f0f\u7684\u3001\u5168\u6258\u7ba1\u7684\u5bc6\u94a5\u7ba1\u7406\u548c\u6570\u636e\u52a0\u5bc6\u670d\u52a1\u5e73\u53f0",
                            link: "/product/kms"
                        }, {
                            title: "\u6e17\u900f\u6d4b\u8bd5\u670d\u52a1",
                            enTitle: "pt",
                            des: "\u5b89\u5168\u670d\u52a1\u4e13\u5bb6\u91c7\u7528\u5b89\u5168\u6280\u672f\u624b\u6bb5\uff0c\u5e2e\u52a9\u4f01\u4e1a\u53d1\u73b0\u5b89\u5168\u98ce\u9669\u3001\u63d0\u5347\u5e94\u7528\u5b89\u5168\u7b49\u7ea7\u3001\u9884\u9632\u6076\u610f\u653b\u51fb",
                            link: "/product/pt"
                        }, {
                            title: "\u7ea2\u84dd\u5bf9\u6297\u670d\u52a1",
                            enTitle: "red-blue",
                            des: "\u6a21\u62df\u9ed1\u5ba2\u89c6\u89d2\uff0c\u9488\u5bf9\u4f01\u4e1a\u5f00\u5c55\u5168\u65b9\u9762\u201c\u653b\u51fb\u201d\uff0c\u66b4\u9732\u4f01\u4e1a\u7684\u5b89\u5168\u4f53\u7cfb\u7684\u77ed\u677f",
                            link: "/product/red-blue"
                        }, {
                            title: "\u9ad8\u7ea7\u7f51\u7edc\u5a01\u80c1\u68c0\u6d4b\u7cfb\u7edf",
                            enTitle: "nta",
                            des: "\u9ad8\u7ea7\u7f51\u7edc\u5a01\u80c1\u68c0\u6d4b\u7cfb\u7edf\u4f7f\u7528\u884c\u4e3a\u5206\u6790\u3001\u7279\u5f81\u68c0\u6d4b\u3001\u5173\u8054\u5206\u6790\u7b49\u6280\u672f\u68c0\u6d4b\u7f51\u7edc\u5a01\u80c1",
                            link: "/product/nta"
                        }, {
                            title: "\u4e91\u9632\u706b\u5899",
                            enTitle: "cloudfirewall",
                            des: "\u57fa\u4e8e\u516c\u6709\u4e91\u73af\u5883\u4e0b\u7684 SaaS \u5316\u9632\u706b\u5899\uff0c\u4e3a\u60a8\u7684\u4e91\u4e0a\u8d44\u4ea7\u63d0\u4f9b\u8bbf\u95ee\u63a7\u5236\u3001\u6d41\u91cf\u53ef\u89c6\u5316\u548c\u65e5\u5fd7\u5ba1\u8ba1\u7b49\u529f\u80fd",
                            link: "/product/cloudfirewall"
                        }, {
                            title: "\u4e91\u5b89\u5168\u4e2d\u5fc3",
                            enTitle: "security-center",
                            des: "\u4e91\u5b89\u5168\u4e2d\u5fc3\u662f\u4e00\u4e2a\u96c6\u8d44\u4ea7\u7ba1\u7406\u3001\u5a01\u80c1\u68c0\u6d4b\u3001\u667a\u80fd\u5206\u6790\u3001\u534f\u540c\u54cd\u5e94\u4e8e\u4e00\u4f53\u7684\u4e91\u5b89\u5168\u8fd0\u8425\u5e73\u53f0",
                            link: "/product/security-center"
                        }]
                    }, {
                        title: "\u4e2d\u95f4\u4ef6",
                        icon: "icon-product-list-middleware",
                        products: [{
                            title: "\u6d88\u606f\u961f\u5217 Kafka\u7248",
                            enTitle: "Kafka",
                            des: "\u57fa\u4e8e Apache Kafka \u6784\u5efa\uff0c\u63d0\u4f9b\u9ad8\u53ef\u7528\u3001\u9ad8\u541e\u5410\u91cf\u7684\u5206\u5e03\u5f0f\u6d88\u606f\u961f\u5217\u670d\u52a1",
                            link: "/product/Message-Queue-for-Kafka"
                        }, {
                            title: "\u6d88\u606f\u961f\u5217 RocketMQ\u7248",
                            enTitle: "RocketMQ",
                            des: "\u57fa\u4e8e Apache RocketMQ \u6784\u5efa\u7684\u4f4e\u5ef6\u8fdf\u3001\u9ad8\u5e76\u53d1\u3001\u9ad8\u53ef\u7528\u7684\u5206\u5e03\u5f0f\u6d88\u606f\u4e2d\u95f4\u4ef6",
                            link: "/product/Message-Queue-for-RocketMQ"
                        }, {
                            title: "\u6d88\u606f\u961f\u5217 RabbitMQ\u7248",
                            link: "/product/Message-Queue-for-RabbitMQ",
                            enTitle: "RabbitMQ",
                            des: "\u6d88\u606f\u961f\u5217 RabbitMQ\u7248\u517c\u5bb9\u5f00\u6e90 RabbitMQ\uff0c\u63d0\u4f9b\u9ad8\u53ef\u7528\u3001\u4f4e\u5ef6\u8fdf\u3001\u9ad8\u5e76\u53d1\u7684\u6d88\u606f\u670d\u52a1"
                        }]
                    }, {
                        title: "\u5bb9\u5668",
                        icon: "icon-product-list-\u5bb9\u5668",
                        products: [{
                            title: "\u955c\u50cf\u4ed3\u5e93",
                            enTitle: "cr",
                            des: "\u63d0\u4f9b\u5b89\u5168\u9ad8\u53ef\u7528\u7684\u5bb9\u5668\u955c\u50cf\u6258\u7ba1\u670d\u52a1\uff0c\u65b9\u4fbf\u7528\u6237\u5bf9\u5bb9\u5668\u955c\u50cf\u8fdb\u884c\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406",
                            link: "/product/cr"
                        }, {
                            title: "\u5bb9\u5668\u670d\u52a1",
                            enTitle: "vke",
                            des: "\u901a\u8fc7\u6df1\u5ea6\u878d\u5408\u65b0\u4e00\u4ee3\u4e91\u539f\u751f\u6280\u672f\uff0c\u63d0\u4f9b\u4ee5\u5bb9\u5668\u4e3a\u6838\u5fc3\u7684\u9ad8\u6027\u80fd Kubernetes \u5bb9\u5668\u96c6\u7fa4\u7ba1\u7406\u670d\u52a1",
                            link: "/product/vke"
                        }]
                    }, {
                        title: "\u57df\u540d\u4e0e\u7f51\u7ad9",
                        icon: "icon-product-list-\u57df\u540d",
                        products: [{
                            title: "\u57df\u540d\u670d\u52a1",
                            enTitle: "domain-service",
                            des: "\u57df\u540d\u670d\u52a1\u63d0\u4f9b\u57df\u540d\u67e5\u8be2\u3001\u6ce8\u518c\u3001\u7eed\u8d39\u3001\u8f6c\u5165\u3001\u8d4e\u56de\u3001\u5b89\u5168\u9501\u3001\u7ba1\u7406\u7b49\u529f\u80fd",
                            link: "/product/domain-service"
                        }, {
                            title: "\u8bc1\u4e66\u4e2d\u5fc3",
                            enTitle: "certificate-center",
                            des: "\u8bc1\u4e66\u4e2d\u5fc3\u662f\u4e00\u6b3e\u6570\u5b57\u8bc1\u4e66\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406\u5e73\u53f0\uff0c\u4e3a\u7f51\u7ad9\u3001\u5e94\u7528\u548c\u5c0f\u7a0b\u5e8f\u63d0\u4f9b HTTPS \u5b89\u5168\u89e3\u51b3\u65b9\u6848",
                            link: "/product/certificate-center"
                        }, {
                            title: "TrafficRoute",
                            enTitle: "trafficroute",
                            des: "TrafficRoute\u662f\u4e00\u6b3e DNS \u89e3\u6790\u4e0e\u8c03\u5ea6\u4ea7\u54c1\u96c6\u5408\uff0c\u63d0\u4f9b\u6743\u5a01 DNS\u3001\u9012\u5f52 DNS \u53ca\u5168\u5c40\u6d41\u91cf\u7ba1\u7406\u7b49\u670d\u52a1",
                            link: "/product/trafficroute"
                        }]
                    }]
                }, {
                    title: "\u89c6\u9891\u4e0e\u5185\u5bb9\u5206\u53d1",
                    description: "\u9762\u5411\u4f53\u9a8c\u7684\u89c6\u9891\u4e91",
                    iconNav: "icon-product-list-videoAndContent",
                    iconTab: "icon-product-list-videoAndContent-tab",
                    tabBg: (0, i.SU)("productList/\u5185\u5bb9\u4e0e\u5206\u53d1.png"),
                    secondLevel: [{
                        title: "\u89c6\u9891\u4e91",
                        icon: "icon-product-list-\u89c6\u9891\u4e91",
                        products: [{
                            title: "\u89c6\u9891\u70b9\u64ad",
                            enTitle: "vod",
                            des: "\u89c6\u9891\u70b9\u64ad\u5305\u542b\u5a92\u8d44\u4e0a\u4f20\u3001\u7ba1\u7406\u3001\u5904\u7406\u3001\u97f3\u89c6\u9891\u5206\u53d1\u64ad\u653e\u7684\u5168\u94fe\u8def\u80fd\u529b",
                            link: "/product/vod",
                            tag: {
                                text: "HOT",
                                type: "HOT"
                            }
                        }, {
                            title: "\u89c6\u9891\u76f4\u64ad",
                            enTitle: "live",
                            des: "\u4e3a\u4f01\u4e1a\u548c\u4e2a\u4eba\u63d0\u4f9b\u5b89\u5168\u3001\u7a33\u5b9a\u3001\u4e13\u4e1a\u7684\u4e91\u7aef\u76f4\u64ad\u670d\u52a1",
                            link: "/product/live"
                        }, {
                            title: "\u4f01\u4e1a\u76f4\u64ad",
                            enTitle: "livesaas",
                            des: "0\u5f00\u53d1\u62e5\u6709\u5b9a\u5236\u76f4\u64ad\u95f4\uff0c\u5343\u4e07\u5e76\u53d1\u6d41\u7545\u4f53\u9a8c",
                            link: "/product/live-saas"
                        }, {
                            title: "\u5b9e\u65f6\u97f3\u89c6\u9891",
                            enTitle: "veRTC",
                            des: "\u4ebf\u7ea7 DAU \u4ea7\u54c1\u9a8c\u8bc1\u6253\u78e8\uff0c\u63d0\u4f9b\u5168\u7403\u8303\u56f4\u5185\u9ad8\u8d28\u91cf\u3001\u4f4e\u5ef6\u65f6\u7684\u5b9e\u65f6\u97f3\u89c6\u9891\u901a\u4fe1\u80fd\u529b",
                            link: "/product/veRTC"
                        }, {
                            title: "veImageX",
                            enTitle: "imagex",
                            des: "\u7075\u6d3b\u3001\u9ad8\u6548\u7684\u56fe\u50cf\u3001\u6587\u6863\u7b49\u5404\u7c7b\u7d20\u6750\u4e0a\u4f20\u3001\u6258\u7ba1\u3001\u667a\u80fd\u5904\u7406\u548c\u5206\u53d1\u4e00\u7ad9\u5f0f\u89e3\u51b3\u65b9\u6848",
                            link: "/product/imagex",
                            tag: {
                                text: "HOT",
                                type: "HOT"
                            }
                        }, {
                            title: "\u667a\u80fd\u5904\u7406",
                            enTitle: "imp",
                            des: "\u5f39\u6027\u7a33\u5b9a\u667a\u80fd\u7684\u591a\u5a92\u4f53\u5904\u7406\u670d\u52a1\uff0c\u52a9\u529b\u4f01\u4e1a\u63d0\u5347\u97f3\u89c6\u9891\u5904\u7406\u6548\u7387\u548c\u8d28\u91cf",
                            link: "/product/imp"
                        }, {
                            title: "\u89c6\u8054\u7f51",
                            enTitle: "AIoTVideo",
                            des: "\u96c6\u6210\u89c6\u9891\u63a5\u5165\u3001\u5206\u53d1\u3001\u5b58\u50a8\u3001\u68c0\u7d22\u3001\u56de\u653e\u548c\u667a\u80fd\u5206\u6790\u7684\u4e00\u7ad9\u5f0f\u7269\u8054\u7f51\u667a\u80fd\u89c6\u9891\u670d\u52a1",
                            link: "/product/AIoTVideo"
                        }, {
                            title: " \u8046\u955c\u89c6\u9891\u76f4\u64ad\u4e00\u4f53\u673a",
                            enTitle: "lingjing",
                            link: "/product/lingjing",
                            des: "\u76f4\u64ad\u4e00\u4f53\u673a\u662f\u96c6\u6210\u97f3\u89c6\u9891\u91c7\u96c6\u3001\u667a\u80fd\u5904\u7406\u3001\u7f51\u7edc\u4f20\u8f93\u4e00\u4f53\u5316\u7684\u76f4\u64ad\u4e13\u7528\u8bbe\u5907"
                        }]
                    }, {
                        title: "CDN\u4e0e\u52a0\u901f",
                        icon: "icon-product-list-CDN\u4e0e\u52a0\u901f",
                        products: [{
                            title: "\u5185\u5bb9\u5206\u53d1\u7f51\u7edc",
                            enTitle: "CDN",
                            des: "\u667a\u80fd\u3001\u53ef\u9760\u7684\u5185\u5bb9\u5206\u53d1\u7f51\u7edc\uff0c\u8ba9\u8bbf\u95ee\u66f4\u5feb\u6377",
                            link: "/product/CDN",
                            tag: {
                                text: "HOT",
                                type: "HOT"
                            }
                        }, {
                            title: "\u5168\u7ad9\u52a0\u901f",
                            enTitle: "dcdn",
                            des: "\u5168\u7ad9\u52a0\u901fDCDN \u5728CDN\u9759\u6001\u5185\u5bb9\u52a0\u901f\u670d\u52a1\u7684\u57fa\u7840\u4e0a\uff0c\u63d0\u4f9b\u4e86\u5b89\u5168\u3001\u7a33\u5b9a\u7684\u7eaf\u52a8\u6001\u53ca\u52a8\u9759\u6001\u6df7\u5408\u5185\u5bb9\u7684\u52a0\u901f\u670d\u52a1",
                            link: "/product/dcdn"
                        }]
                    }, {
                        title: "\u8fb9\u7f18\u8ba1\u7b97",
                        icon: "icon-product-list-\u8fb9\u7f18\u8ba1\u7b97",
                        products: [{
                            title: "\u8fb9\u7f18\u8ba1\u7b97\u8282\u70b9",
                            enTitle: "veen",
                            des: "\u57fa\u4e8e\u5168\u9762\u5206\u5e03\u7684\u8fb9\u7f18\u8282\u70b9\u63d0\u4f9b\u4f4e\u65f6\u5ef6\u8ba1\u7b97\u670d\u52a1\uff0c\u652f\u6491\u9760\u8fd1\u7528\u6237\u90e8\u7f72\u4f4e\u65f6\u5ef6\u654f\u611f\u4e1a\u52a1",
                            link: "/product/veen"
                        }, {
                            title: "\u8fb9\u7f18\u6e32\u67d3\u519c\u573a",
                            enTitle: "veRender",
                            des: "\u5206\u5e03\u5f0f\u5e76\u884c\u96c6\u7fa4\u8ba1\u7b97\u5e73\u53f0\uff0c\u80fd\u591f\u6781\u5927\u63d0\u5347\u6e32\u67d3\u6548\u7387",
                            link: "/product/veRender"
                        }]
                    }, {
                        title: "\u4e91\u901a\u4fe1",
                        icon: "icon-product-list-\u4e91\u901a\u4fe1",
                        products: [{
                            title: "\u77ed\u4fe1\u670d\u52a1",
                            enTitle: "cloud-sms",
                            des: "\u63d0\u4f9b\u5b89\u5168\u53ef\u9760\u3001\u4fbf\u6377\u9ad8\u6548\u7684\u5168\u7403\u77ed\u4fe1\u670d\u52a1\uff0c\u670d\u52a1\u8303\u56f4\u8986\u76d6\u56fd\u5185\u5916230\u591a\u4e2a\u56fd\u5bb6\u548c\u5730\u533a\uff0c\u9002\u7528\u4e8e\u63a8\u5e7f\u77ed\u4fe1\u3001\u901a\u77e5\u77ed\u4fe1\u3001\u9a8c\u8bc1\u7801\u77ed\u4fe1\u7b49\u591a\u79cd\u573a\u666f\uff0c\u7a33\u5b9a\u89e6\u8fbe\u5ba2\u6237",
                            link: "/product/cloud-sms"
                        }, {
                            title: "\u8bed\u97f3\u670d\u52a1",
                            enTitle: "cloud-vms",
                            des: "\u4e3a\u4f01\u4e1a\u63d0\u4f9b\u4e13\u4e1a\u7684\u8bed\u97f3\u670d\u52a1\uff0c\u652f\u6301\u8bed\u97f3SIP\u3001\u8bed\u97f3\u901a\u77e5\u3001\u8bed\u97f3\u9a8c\u8bc1\u7801\u3001\u9690\u79c1\u53f7\u7b49\u4ea7\u54c1",
                            link: "/product/cloud-vms"
                        }]
                    }, {
                        title: "\u4e91\u6e32\u67d3\u4e0e\u6d41\u5316\u5e73\u53f0",
                        icon: "icon-product-list-yunshouji",
                        products: [{
                            title: "\u4e91\u624b\u673a",
                            enTitle: "ACEP",
                            des: "\u9ad8\u6027\u80fd\u591a\u573a\u666f\u4e91\u624b\u673a\u670d\u52a1\u53ca\u89e3\u51b3\u65b9\u6848",
                            link: "/product/ACEP"
                        }, {
                            title: "\u4e91\u6e38\u620f",
                            enTitle: "veGame",
                            des: "\u7ed3\u5408\u4e91\u8ba1\u7b97\u548c\u8d85\u4f4e\u5ef6\u8fdf\u97f3\u89c6\u9891\u4f20\u8f93\u6280\u672f\u7684\u591a\u573a\u666f\u4e91\u6e38\u620f\u89e3\u51b3\u65b9\u6848",
                            link: "/product/veGame"
                        }]
                    }]
                }, {
                    title: "\u5927\u6570\u636e",
                    description: "\u4e3a\u589e\u957f\u800c\u751f\u7684\u654f\u6377\u6570\u667a\u5f15\u64ce",
                    iconNav: "icon-product-list-data",
                    iconTab: "icon-product-list-data-tab",
                    tabBg: (0, i.SU)("productList/\u6cdb\u6570\u636e\u670d\u52a1.png"),
                    secondLevel: [{
                        title: "\u589e\u957f\u8425\u9500\u5957\u4ef6",
                        icon: "icon-product-list-zhinengyinxiao",
                        products: [{
                            title: "\u589e\u957f\u5206\u6790",
                            enTitle: "datafinder",
                            des: "\u63d0\u4f9b\u5feb\u901f\u3001\u7a33\u5b9a\u7684\u7528\u6237\u884c\u4e3a\u5206\u6790\u670d\u52a1\u53ca\u89e3\u51b3\u65b9\u6848\uff0c\u5e2e\u52a9\u4f01\u4e1a\u5b9e\u73b0\u957f\u671f\u589e\u957f\uff0c\u662f\u4e2d\u5927\u578b\u4f01\u4e1a\u7684\u5927\u6570\u636e\u5206\u6790\u9996\u9009\u89e3\u51b3\u65b9\u6848\u670d\u52a1\u5546",
                            link: "/product/datafinder",
                            tag: {
                                text: "HOT",
                                type: "HOT"
                            }
                        }, {
                            title: "A/B\u6d4b\u8bd5",
                            enTitle: "veGame",
                            des: "\u6446\u8131\u731c\u6d4b\uff0c\u7528\u79d1\u5b66\u7684\u5b9e\u9a8c\u8861\u91cf\u51b3\u7b56\u6536\u76ca\uff0c\u8ba9\u4e1a\u52a1\u7684\u6bcf\u4e00\u6b65\u90fd\u901a\u5f80\u589e\u957f",
                            link: "/product/datatester"
                        }, {
                            title: "\u5ba2\u6237\u6570\u636e\u5e73\u53f0",
                            enTitle: "veCDP",
                            des: "\u9762\u5411\u4e1a\u52a1\u589e\u957f\u7684\u5ba2\u6237\u5168\u57df\u6570\u636e\u4e2d\u53f0\uff0c\u5e2e\u52a9\u4f01\u4e1a\u6253\u7834\u6570\u636e\u5b64\u5c9b\uff0c\u5efa\u7acb\u7edf\u4e00\u7684\u4eba\u3001\u7269\u6863\u6848\uff0c\u4ee5\u6570\u636e\u9a71\u52a8\u589e\u957f",
                            link: "/product/veCDP",
                            tag: {
                                text: "HOT",
                                type: "HOT"
                            }
                        }, {
                            title: "\u589e\u957f\u8425\u9500\u5e73\u53f0",
                            enTitle: "gmp",
                            des: "\u63d0\u4f9b\u5168\u7ec8\u7aef\u89e6\u8fbe\u65b9\u5f0f\uff0c\u7ed3\u5408\u4eba\u7fa4\u5708\u9009\u3001\u7b97\u6cd5\u63a8\u8350\u3001\u8425\u9500\u81ea\u52a8\u5316\u3001\u6d3b\u52a8\u6548\u679c\u5206\u6790\u7b49\u7cbe\u7ec6\u5316\u8fd0\u8425\u80fd\u529b\uff0c\u5b9e\u73b0\u964d\u672c\u589e\u6548\u53ca\u4e1a\u52a1\u6301\u7eed\u589e\u957f",
                            link: "/product/gmp"
                        }]
                    }, {
                        title: "\u6570\u636e\u4e2d\u53f0",
                        icon: "icon-product-list-shujuzhongtai",
                        products: [{
                            title: "\u667a\u80fd\u6570\u636e\u6d1e\u5bdf",
                            enTitle: "datawind",
                            des: "\u4e00\u6b3e\u652f\u6301\u5927\u6570\u636e\u660e\u7ec6\u7ea7\u522b\u81ea\u52a9\u5206\u6790\u7684\u589e\u5f3a\u578bABI\u5e73\u53f0",
                            link: "/product/datawind"
                        }, {
                            title: "\u5927\u6570\u636e\u7814\u53d1\u6cbb\u7406\u5957\u4ef6",
                            enTitle: "dataleap",
                            des: "\u6570\u636e\u91c7\u96c6\u3001\u5f00\u53d1\u3001\u8fd0\u7ef4\u3001\u6cbb\u7406\u3001\u8d44\u4ea7\u3001\u5b89\u5168\u7b49\u4e00\u7ad9\u5f0f\u5927\u6570\u636e\u4e2d\u53f0\u89e3\u51b3\u65b9\u6848",
                            link: "/product/dataleap"
                        }, {
                            title: "ByteHouse\uff08\u4f01\u4e1a\u7248\uff09",
                            enTitle: "bytehouse-enterprise",
                            des: "\u57fa\u4e8e\u5f00\u6e90ClickHouse\u7684\u4f01\u4e1a\u7ea7\u5206\u6790\u578b\u6570\u636e\u5e93\uff0c\u52a9\u529b\u4f01\u4e1a\u5b9e\u73b0\u5927\u6570\u636e\u6d1e\u5bdf",
                            link: "/product/bytehouse-enterprise"
                        }, {
                            title: "ByteHouse\uff08\u4e91\u6570\u4ed3\u7248\uff09",
                            enTitle: "bytehouse-cloud",
                            des: "\u4e91\u539f\u751f\u6570\u636e\u5206\u6790\u5e73\u53f0\uff0c\u5b58\u7b97\u5206\u79bb\u6709\u6548\u964d\u4f4e\u4f01\u4e1a\u5927\u6570\u636e\u5206\u6790 TCO",
                            link: "/product/bytehouse-cloud"
                        }, {
                            title: "E-MapReduce",
                            enTitle: "emr",
                            des: "\u4e00\u952e\u6784\u5efa\u5f00\u6e90Hadoop\u4f01\u4e1a\u7ea7\u5927\u6570\u636e\u5e73\u53f0\uff0c\u96c6\u6210\u7aef\u5230\u7aef\u6570\u636e\u63a5\u5165/\u5206\u6790/\u6316\u6398\u80fd\u529b",
                            link: "/product/emr"
                        }, {
                            title: "\u6e56\u4ed3\u4e00\u4f53\u5206\u6790\u670d\u52a1 LAS",
                            enTitle: "las",
                            des: "Serverless \u6e56\u4ed3\u4e00\u4f53\u5206\u6790\u670d\u52a1 LAS\uff0c\u5b8c\u5168\u517c\u5bb9 Spark\u3001Presto\u3001Flink\uff0c\u652f\u6301\u4f01\u4e1a\u6784\u5efa\u4e91\u539f\u751f\u6e56\u4ed3\u5206\u6790\u5e73\u53f0",
                            link: "/product/las"
                        }, {
                            title: "\u6d41\u5f0f\u8ba1\u7b97 Flink \u7248",
                            link: "/product/flink",
                            enTitle: "flink",
                            des: "\u5168\u6258\u7ba1\u6d41\u5f0f\u8ba1\u7b97\u5f15\u64ce\uff0c\u4f01\u4e1a\u7ea7\u529f\u80fd\u589e\u5f3a \uff0c\u6781\u81f4\u5f39\u6027 \uff0c\u5f00\u7bb1\u5373\u7528\u514d\u8fd0\u7ef4"
                        }, {
                            title: "\u6279\u5f0f\u8ba1\u7b97 Spark \u7248",
                            link: "/product/spark",
                            enTitle: "spark",
                            des: "\u5168\u6258\u7ba1\u5927\u6570\u636e\u6279\u5f0f\u8ba1\u7b97\u5f15\u64ce\uff0c\u79df\u6237\u7ea7\u9694\u79bb\uff0cServerless\u6781\u81f4\u5f39\u6027 \uff0c\u5f00\u7bb1\u5373\u7528"
                        }]
                    }]
                }, {
                    title: "\u667a\u80fd\u5e94\u7528",
                    description: "\u5f00\u542f\u7528\u6237\u589e\u957f\u7684\u667a\u4eab\u65b0\u4f53\u9a8c",
                    iconNav: "icon-product-list-intelligentApplication",
                    iconTab: "icon-product-list-intelligentApplication-tab",
                    tabBg: (0, i.SU)("productList/\u667a\u80fd\u8fd0\u7528.png"),
                    secondLevel: [{
                        title: "\u667a\u80fd\u5185\u5bb9",
                        icon: "icon-product-list-zhinengneirong",
                        products: [{
                            title: "\u5185\u5bb9\u5b9a\u5236",
                            enTitle: "content-customization",
                            des: "\u5e2e\u52a9\u5ba2\u6237\u5feb\u901f\u6784\u5efa\u5185\u5bb9\u4fe1\u606f\u6d41\u7684SAAS\u4ea7\u54c1",
                            link: "/product/content-customization"
                        }, {
                            title: "\u5185\u5bb9\u7ba1\u7406\u5e73\u53f0",
                            enTitle: "cms",
                            des: "\u63d0\u4f9b\u5185\u5bb9\u5f15\u5165\u3001\u8d28\u68c0\u3001\u7406\u89e3\u3001\u5206\u53d1\u3001\u6570\u636e\u7684\u5168\u94fe\u8def\u4e00\u7ad9\u5f0f\u7ba1\u7406\u5de5\u5177\uff0c\u4e3a\u4f01\u4e1a\u5185\u5bb9\u7cbe\u7ec6\u5316\u8fd0\u8425\u8d4b\u80fd",
                            link: "/product/cms"
                        }]
                    }, {
                        title: "\u4e2a\u6027\u5316\u7b97\u6cd5",
                        icon: "icon-product-list-arithmetic",
                        products: [{
                            title: "\u667a\u80fd\u63a8\u8350\u5e73\u53f0",
                            enTitle: "rec",
                            des: "\u4e3a\u5ba2\u6237\u63d0\u4f9b\u7aef\u5230\u7aef\u7684\u4e00\u7ad9\u5f0f\u63a8\u8350\u670d\u52a1\u80fd\u529b\u642d\u5efa\u7684\u5e73\u53f0",
                            link: "/product/rec"
                        }]
                    }, {
                        title: "\u667a\u80fd\u521b\u610f",
                        icon: "icon-product-list-\u667a\u80fd\u521b\u610f",
                        products: [{
                            title: "\u667a\u80fd\u521b\u610f",
                            enTitle: "CMP",
                            des: "\u667a\u80fd\u521b\u610f\u63d0\u4f9b\u521b\u610f\u6807\u7b7e\u5efa\u8bbe\u3001\u521b\u610f\u81ea\u52a8\u5316\u751f\u6210\u3001\u5168\u5458\u8425\u9500\u7684\u89e3\u51b3\u65b9\u6848",
                            link: "/product/CMP"
                        }]
                    }, {
                        title: "\u4eba\u5de5\u667a\u80fd",
                        icon: "icon-product-list-\u4eba\u5de5\u667a\u80fd",
                        thirdLevel: [{
                            title: "\u667a\u80fd\u4f53\u9a8c",
                            products: [{
                                title: "\u667a\u80fd\u7f8e\u5316\u7279\u6548",
                                enTitle: "intelligent-interactive-effects",
                                des: "\u63d0\u4f9b\u56fe\u50cf\u89c6\u9891\u7f8e\u5316\u548c\u8ba1\u7b97\u673a\u89c6\u89c9\u7b97\u6cd5\u80fd\u529b\uff0c\u652f\u6301\u79fb\u52a8\u7aef\u3001PC\u7aef\u7b49\u8de8\u5e73\u53f0\u4f7f\u7528",
                                link: "/product/intelligent-interactive-effects"
                            }, {
                                title: "\u667a\u80fd\u89c6\u9891\u521b\u4f5cSDK",
                                enTitle: "CK",
                                des: "\u706b\u5c71\u5f15\u64ce\u81ea\u4e3b\u7814\u53d1\u7684\u591a\u8f68\u9053\u97f3\u89c6\u9891\u526a\u8f91SDK\uff0c\u878d\u5408\u526a\u540c\u6b3e\u3001\u4e00\u952e\u6210\u7247\u7b49AI\u526a\u8f91\u80fd\u529b",
                                link: "/product/CK"
                            }, {
                                title: "AR\u4e92\u52a8\u521b\u610f",
                                enTitle: "AR",
                                des: "\u63d0\u4f9b\u5168\u573a\u666f\u6c89\u6d78\u5f0f\u7684AR\u4e92\u52a8\u4f53\u9a8c\uff0c\u4fc3\u8fdb\u7528\u6237\u4f53\u9a8c\u5347\u7ea7\u548c\u5546\u4e1a\u4ef7\u503c\u8f6c\u5316\u63d0\u5347\uff0c\u6253\u9020\u8eab\u4e34\u5176\u5883\u7684\u4ea4\u4e92\u4f53\u9a8c",
                                link: "/product/AR"
                            }]
                        }, {
                            title: "\u5185\u5bb9\u521b\u4f5c",
                            products: [{
                                title: "\u667a\u80fd\u521b\u4f5c\u4e91",
                                enTitle: "ICC",
                                des: "\u4e3a\u4f01\u4e1a\u548c\u5a92\u4f53\u63a8\u51fa\u7684\u667a\u80fd\u5185\u5bb9\u751f\u4ea7\u5e73\u53f0",
                                link: "/product/ICC"
                            }]
                        }, {
                            title: "AI\u5f00\u653e\u5e73\u53f0",
                            products: [{
                                title: "\u4eba\u50cf\u4eba\u4f53",
                                enTitle: "Human-body",
                                des: "\u57fa\u4e8e\u6df1\u5ea6\u5b66\u4e60\u7b97\u6cd5\uff0c\u5bf9\u5305\u542b\u4eba\u50cf\u4eba\u4f53\u5185\u5bb9\u7684\u56fe\u50cf\u8fdb\u884c\u667a\u80fd\u7f16\u8f91\u4e0e\u5904\u7406\uff0c\u5305\u62ec\u4eba\u50cf\u7279\u6548\u3001\u4eba\u50cf\u62a0\u56fe\u3001\u4eba\u50cf\u7578\u53d8\u77eb\u6b63\u7b49\u529f\u80fd\uff0c\u53ef\u6ee1\u8db3\u7528\u6237\u5bf9\u4e8e\u4eba\u50cf\u4eba\u4f53\u7f16\u8f91\u7684\u591a\u5143\u5316\u9700\u6c42",
                                link: "/product/Human-body"
                            }, {
                                title: "\u56fe\u50cf\u6280\u672f",
                                enTitle: "imagetech",
                                des: "\u91c7\u7528AI\u6280\u672f\u5bf9\u56fe\u50cf\u8fdb\u884c\u5904\u7406\uff0c\u8986\u76d6\u8f66\u8f86\u56fe\u50cf\u5206\u6790\u3001\u56fe\u50cf\u7f16\u8f91\u3001\u5206\u5272\u62a0\u56fe\u3001\u56fe\u50cf\u8d28\u91cf\u4f18\u5316\u3001\u56fe\u50cf\u8bc6\u522b\u3001\u89c6\u89c9\u641c\u7d22\u7b49\u591a\u9879\u80fd\u529b\u3002\u5e94\u7528\u4e8e\u56fe\u50cf\u7f8e\u5316\u3001\u7269\u4f53\u68c0\u6d4b\u3001\u5e7f\u544a\u6295\u653e\u7b49\u591a\u9879\u573a\u5408",
                                link: "/product/imagetech"
                            }, {
                                title: "\u89c6\u9891\u6280\u672f",
                                enTitle: "video-tech",
                                des: "\u5229\u7528AI\u6280\u672f\u548c\u7f8e\u5b66\u5206\u6790\uff0c\u9488\u5bf9\u89c6\u9891\u8fdb\u884c\u5904\u7406\u3002\u6d89\u53ca\u89c6\u9891\u9ed1\u767d\u4e0a\u8272\u3001\u8d85\u5206\u8fa8\u7387\u3001\u5185\u5bb9\u6458\u8981\u3001\u5c01\u9762\u9009\u53d6\u3001\u5c3a\u5bf8\u8f6c\u5316\u3001Logo\u906e\u7f69\u7b49\u591a\u9879\u80fd\u529b",
                                link: "/product/video-tech"
                            }, {
                                title: "\u6587\u5b57\u8bc6\u522b",
                                enTitle: "OCR",
                                des: "\u5bf9\u56fe\u7247\u3001\u89c6\u9891\u4e2d\u7684\u6587\u5b57\u8fdb\u884c\u68c0\u6d4b\u548c\u8bc6\u522b\uff0c\u5305\u62ec\u901a\u7528\u6587\u5b57\u8bc6\u522b\u3001\u5404\u7c7b\u5361\u8bc1\u3001\u7968\u636e\u3001\u6267\u7167\u7b49\u8bc6\u522b",
                                link: "/product/OCR"
                            }, {
                                title: "\u8bed\u97f3\u6280\u672f",
                                enTitle: "voice-tech",
                                des: "\u57fa\u4e8e\u8bed\u97f3\u8bc6\u522b\u3001\u8bed\u97f3\u5408\u6210\u3001\u81ea\u7136\u8bed\u8a00\u7406\u89e3\u7b49\u6280\u672f\uff0c\u9002\u7528\u4e8e\u7535\u8bdd\u5ba2\u670d\u3001\u9605\u8bfb\u3001\u4f1a\u8bae\u7eaa\u8981\u3001\u89c6\u9891\u5b57\u5e55\u7b49\u573a\u666f\uff0c\u8ba9\u60a8\u7684\u4ea7\u54c1\u80fd\u201c\u542c\u201d\u4f1a\u201c\u8bf4\u201d",
                                link: "/product/voice-tech"
                            }, {
                                title: "\u81ea\u7136\u8bed\u8a00\u5904\u7406",
                                enTitle: "text-analysis",
                                des: "\u57fa\u4e8e\u4e1a\u5185\u5148\u8fdb\u7684NLP\u6280\u672f\uff0c\u63d0\u4f9b\u4e30\u5bcc\u7684\u6587\u672c\u5206\u6790\u80fd\u529b",
                                link: "/product/text-analysis"
                            }, {
                                title: "\u97f3\u9891\u6280\u672f",
                                enTitle: "speech-audio-music-Intelligence",
                                des: "\u81f4\u529b\u4e8e\u8bed\u97f3\u5408\u6210\u3001\u97f3\u9891\u7406\u89e3\u4e0e\u5904\u7406\u3001\u97f3\u4e50\u7406\u89e3\u4e0e\u7f16\u8f91\u3001\u97f3\u4e50\u751f\u6210\u7b49\u6280\u672f\u7684\u5e94\u7528",
                                link: "/product/speech-audio-music-Intelligence"
                            }, {
                                title: "\u673a\u5668\u7ffb\u8bd1",
                                enTitle: "machine_translation",
                                des: "\u57fa\u4e8e\u706b\u5c71\u5f15\u64ce\u79ef\u7d2f\u591a\u5e74\u7684\u6280\u672f\u81ea\u4e3b\u7814\u53d1\u7684\u673a\u5668\u7ffb\u8bd1\uff0c\u63d0\u4f9b\u901a\u7528\u673a\u5668\u7ffb\u8bd1\u3001\u89c6\u9891\u7ffb\u8bd1\u548c\u667a\u80fd\u540c\u4f20\u7b49\u80fd\u529b",
                                link: "/product/machine_translation"
                            }]
                        }, {
                            title: "AI\u5f00\u53d1\u5e73\u53f0",
                            products: [{
                                title: "\u673a\u5668\u5b66\u4e60\u5e73\u53f0",
                                enTitle: "ml-platform",
                                des: "\u57fa\u4e8e\u706b\u5c71\u5f15\u64ce\u79ef\u7d2f\u591a\u5e74\u7684\u6280\u672f\u81ea\u4e3b\u7814\u53d1\u7684\u673a\u5668\u7ffb\u8bd1\uff0c\u63d0\u4f9b\u901a\u7528\u673a\u5668\u7ffb\u8bd1\u3001\u89c6\u9891\u7ffb\u8bd1\u548c\u667a\u80fd\u540c\u4f20\u7b49\u80fd\u529b",
                                link: "/product/ml-platform"
                            }]
                        }, {
                            title: "\u667a\u80fd\u8fd0\u8425",
                            products: [{
                                title: "\u667a\u80fd\u5916\u547c",
                                enTitle: "smart-outbound",
                                des: "\u57fa\u4e8e\u8bed\u97f3\u5bf9\u8bdd\u80fd\u529b\uff0c\u7ed3\u5408\u5916\u547c\u573a\u666f\u6784\u5efa\u7684\u4ea4\u4e92\u771f\u5b9e\uff0c\u5e94\u7b54\u667a\u80fd\u7684\u5916\u547c\u7cfb\u7edf",
                                link: "/products/smart-outbound"
                            }]
                        }, {
                            title: "\u4e1a\u52a1\u5b89\u5168",
                            products: [{
                                title: "\u4e1a\u52a1\u98ce\u9669\u8bc6\u522b",
                                enTitle: "business-security",
                                des: "\u7cbe\u51c6\u8bc6\u522b\u5404\u7c7b\u573a\u666f\u9ed1\u7070\u4ea7\u98ce\u9669\uff0c\u6301\u7eed\u5b88\u62a4\u4e1a\u52a1\u7684\u5065\u5eb7\u589e\u957f",
                                link: "/product/business-security"
                            }]
                        }]
                    }]
                }, {
                    title: "\u5f00\u53d1\u4e0e\u8fd0\u7ef4",
                    description: "\u201c\u5f00\u7bb1\u5373\u7528\u201d\u7684\u4e00\u7ad9\u5f0f\u5e94\u7528\u5f00\u53d1\u4e0e\u7ba1\u7406\u670d\u52a1",
                    iconNav: "icon-product-list-development",
                    iconTab: "icon-product-list-development-tab",
                    tabBg: (0, i.SU)("productList/\u5f00\u53d1\u4e0e\u8fd0\u7ef4.png"),
                    secondLevel: [{
                        title: "\u5e94\u7528\u5f00\u53d1\u5957\u4ef6 MARS",
                        icon: "icon-product-list-\u79fb\u52a8\u5f00\u53d1\u5e73\u53f0MARS",
                        products: [{
                            title: "\u5e94\u7528\u5f00\u53d1\u5957\u4ef6 MARS",
                            enTitle: "vemars",
                            des: "\u9762\u5411\u5ba2\u6237\u7aef\u5f00\u53d1\u3001\u524d\u7aef\u5f00\u53d1\u3001QA\u3001 \u8fd0\u7ef4\u3001\u4ea7\u54c1\u7ecf\u7406\u3001\u9879\u76ee\u7ecf\u7406\u4ee5\u53ca\u8fd0\u8425\u89d2\u8272\uff0c\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u6574\u4f53\u7814\u53d1\u89e3\u51b3\u65b9\u6848",
                            link: "/product/vemars"
                        }, {
                            title: "\u5e94\u7528\u6027\u80fd\u76d1\u63a7\u5168\u94fe\u8def\u7248",
                            enTitle: "apmplus",
                            des: "\u4f9b\u9488\u5bf9\u5e94\u7528\u670d\u52a1\u7684\u54c1\u8d28\u3001\u6027\u80fd\u4ee5\u53ca\u81ea\u5b9a\u4e49\u57cb\u70b9\u7684APM\u670d\u52a1",
                            link: "/product/apmplus"
                        }, {
                            title: "\u79fb\u52a8\u7814\u53d1\u5e73\u53f0",
                            enTitle: "mars-mobile",
                            des: "\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u79fb\u52a8\u7814\u53d1\u89e3\u51b3\u65b9\u6848\uff0c\u964d\u4f4e\u4f01\u4e1a\u79fb\u52a8\u7814\u53d1\u7efc\u5408\u6210\u672c",
                            link: "/product/mars-mobile"
                        }]
                    }, {
                        title: "\u7814\u53d1\u4e2d\u53f0",
                        icon: "icon-product-list-\u7814\u53d1\u4e2d\u53f0",
                        products: [{
                            title: "\u6301\u7eed\u4ea4\u4ed8",
                            enTitle: "cp",
                            des: "\u901a\u8fc7\u4e00\u7ad9\u5f0f\u6d41\u6c34\u7ebf\u6253\u901a\u7814\u53d1\u8fd0\u7ef4\u5de5\u7a0b\u7684\u5404\u4e2a\u73af\u8282\uff0c\u63d0\u4f9b\u7075\u6d3b\u6613\u7528\u7684\u6301\u7eed\u96c6\u6210\u3001\u6301\u7eed\u9a8c\u8bc1\u548c\u6301\u7eed\u53d1\u5e03\u7b49\u529f\u80fd\uff0c\u5e2e\u52a9\u4f01\u4e1a\u9ad8\u8d28\u91cf\u3001\u9ad8\u6548\u7387\u4ea4\u4ed8\u4e1a\u52a1",
                            link: "/product/cp"
                        }, {
                            title: "veCompass",
                            enTitle: "compass",
                            des: "\u4e3a\u7528\u6237\u63d0\u4f9b\u4ee5\u591a\u96c6\u7fa4\u3001\u591a\u79df\u6237\u4e3a\u6838\u5fc3\u7684\u8d44\u6e90\u7ba1\u7406\u80fd\u529b\uff0c\u4ee5\u5e94\u7528\u5546\u5e97\u3001\u53ef\u89c6\u5316\u7f16\u6392\u4e3a\u6838\u5fc3\u7684\u5e94\u7528\u90e8\u7f72\u80fd\u529b",
                            link: "/product/compass"
                        }]
                    }, {
                        title: "\u76d1\u63a7",
                        icon: "icon-product-list-\u76d1\u63a7",
                        products: [{
                            title: "\u4e91\u76d1\u63a7",
                            enTitle: "cloudmonitor",
                            des: "\u76d1\u63a7\u4e91\u4e0a\u8d44\u6e90\u5065\u5eb7\u72b6\u6001\uff0c\u5e76\u53ca\u65f6\u5bf9\u5f02\u5e38\u8d44\u6e90\u544a\u8b66\uff0c\u786e\u4fdd\u4e91\u4e0a\u4e1a\u52a1\u53ca\u8d44\u6e90\u987a\u7545\u8fd0\u884c",
                            link: "/product/cloudmonitor"
                        }]
                    }, {
                        title: "\u529e\u516c\u5b89\u5168",
                        icon: "icon-nav-others",
                        products: [{
                            title: "\u98de\u8fde",
                            enTitle: "feilian",
                            des: "\u4f01\u4e1a\u7ea7\u6570\u5b57\u5316\u529e\u516c\u5e73\u53f0\uff0c\u5e2e\u52a9\u5458\u5de5\u968f\u65f6\u968f\u5730\uff0c\u5b89\u5168\u8fde\u63a5\u5185\u90e8\u7f51\u7edc\u4e0e\u5e94\u7528",
                            link: "/products/feilian"
                        }]
                    }]
                }]),
                r = [];
            o.map((function(t) {
                return t.secondLevel.map((function(t) {
                    return null !== t && void 0 !== t && t.products ? r.push.apply(r, t.products) : null === t || void 0 === t ? void 0 : t.thirdLevel.map((function(t) {
                        return (null === t || void 0 === t ? void 0 : t.products) && r.push.apply(r, t.products)
                    }))
                }))
            }))
        },
        34956: function(t, e, n) {
            var i, o, r, c, l, a, d, s, u, p;
            n.d(e, {
                    M7: function() {
                        return u
                    }
                }),
                function(t) {
                    t.PRIVATE = "private", t.PUBLIC = "public"
                }(i || (i = {})),
                function(t) {
                    t[t.NOT_LOCKED = 0] = "NOT_LOCKED", t[t.LOCKED = 1] = "LOCKED"
                }(o || (o = {})),
                function(t) {
                    t[t.NOT_MODIFIED = 0] = "NOT_MODIFIED", t[t.MODIFIED = 1] = "MODIFIED"
                }(r || (r = {})),
                function(t) {
                    t[t.DOC = 0] = "DOC", t[t.DIR = 1] = "DIR", t[t.MAP = 2] = "MAP"
                }(c || (c = {})),
                function(t) {
                    t.MARKDOWN = "Markdown", t.RICHTEXT = "RichText"
                }(l || (l = {})),
                function(t) {
                    t[t.ONLINE = 1] = "ONLINE", t[t.OFFLINE = 0] = "OFFLINE"
                }(a || (a = {})),
                function(t) {
                    t.PRIVATE = "private", t.PUBLIC = "public"
                }(d || (d = {})),
                function(t) {
                    t[t.ONLINE = 1] = "ONLINE", t[t.OFFLINE = 0] = "OFFLINE"
                }(s || (s = {})),
                function(t) {
                    t.ALL = "all", t.DOC = "doc", t.WEB = "web"
                }(u || (u = {})),
                function(t) {
                    t.DOC = "doc", t.WEB = "web", t.CARD = "product_card"
                }(p || (p = {}))
        },
        57557: function(t, e, n) {
            n.d(e, {
                t6: function() {
                    return a
                },
                tq: function() {
                    return d
                },
                b1: function() {
                    return s
                },
                sG: function() {
                    return u
                },
                dD: function() {
                    return p
                },
                xN: function() {
                    return f
                }
            });
            var i = n(72579),
                o = n.n(i),
                r = n(52034),
                c = n.n(r),
                l = n(46858),
                a = function(t) {
                    void 0 === t && (t = "");
                    var e = (0, l.b)().getState().env;
                    return "" + o()(e, "service.console.host", "") + t
                },
                d = function() {
                    if ("undefined" !== typeof window) return /(iphone|ipod|ipad|android|mobile)/gi.test(navigator.userAgent);
                    var t = (0, l.b)().getState().env;
                    return /(iphone|ipod|ipad|android|mobile)/gi.test(null === t || void 0 === t ? void 0 : t["x-ua"])
                },
                s = function() {
                    if ("undefined" !== typeof window) return /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/gi.test(navigator.userAgent);
                    var t = (0, l.b)().getState().env;
                    return /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/gi.test(null === t || void 0 === t ? void 0 : t["x-ua"])
                },
                u = function() {
                    if ("undefined" !== typeof window) return navigator.userAgent;
                    var t = (0, l.b)().getState().env;
                    return (null === t || void 0 === t ? void 0 : t["x-ua"]) || ""
                },
                p = function() {
                    return d()
                },
                f = function() {
                    var t = {
                        utm_source: "",
                        utm_medium: "",
                        utm_term: "",
                        utm_campaign: "",
                        utm_content: "",
                        landing_page_url: ""
                    };
                    try {
                        var e = JSON.parse(c().get("utm") || "{}");
                        Object.assign(t, e)
                    } catch (n) {}
                    return t
                }
        },
        35513: function(t, e, n) {
            n.d(e, {
                qj: function() {
                    return l.qj
                },
                J8: function() {
                    return i.J8
                },
                t6: function() {
                    return o.t6
                },
                c6: function() {
                    return i.c6
                },
                U4: function() {
                    return i.U4
                },
                xN: function() {
                    return o.xN
                },
                gp: function() {
                    return i.gp
                },
                Aq: function() {
                    return l.Aq
                },
                tq: function() {
                    return o.tq
                },
                bi: function() {
                    return c.bi
                },
                gE: function() {
                    return l.gE
                },
                WY: function() {
                    return r.W
                },
                X5: function() {
                    return i.X5
                },
                sG: function() {
                    return o.sG
                }
            });
            var i = n(57124),
                o = n(57557),
                r = n(1108),
                c = n(87702),
                l = (n(46858), n(13768));
            n(95360), n(97352), n(77162)
        },
        46858: function(t, e, n) {
            n.d(e, {
                b: function() {
                    return d
                }
            });
            var i = n(43292),
                o = n(18717),
                r = n(58488),
                c = n(48926),
                l = null,
                a = {
                    env: c.gL,
                    document: {},
                    profile: {}
                };

            function d(t) {
                if (!l || t) {
                    var e, n, c = {};
                    if ("object" === typeof window) c = (null === (e = window._SSR_DATA) || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.storeState) || a;
                    l = (0, o.MT)((0, o.UY)(r.Z), t || c, (0, o.md)(i.Z))
                }
                return l
            }
        },
        13768: function(t, e, n) {
            n.d(e, {
                Aq: function() {
                    return o
                },
                qj: function() {
                    return r
                },
                gE: function() {
                    return c
                }
            });
            var i = n(33028),
                o = function(t, e, n) {
                    if ("undefined" !== typeof window) {
                        var o = !1;
                        window.collectEvent("init", {
                            app_id: 3569,
                            channel: "cn",
                            autotrack: {
                                custom: "tea"
                            },
                            log: o,
                            enable_ab_test: !0,
                            cross_subdomain: !0,
                            cookie_domain: "volcengine.com",
                            ab_channel_domain: "https://abtestvm.bytedance.com"
                        }), window.collectEvent("config", (0, i.Z)({
                            _staging_flag: 0,
                            is_intranet: t.toString(),
                            enable_et_test: o,
                            evtParams: {
                                host: window.location.host
                            },
                            user_unique_id: e && -1 !== e ? String(e) : ""
                        }, n)), window.collectEvent("start");
                        var r = document.createElement("script");
                        r.src = "//lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/collect-autotrack.js", document.body.appendChild(r)
                    }
                },
                r = {
                    ClickProductlist: "click_productlist",
                    ClickProductClass: "click_product_class",
                    ClickNavbar: "click_navbar",
                    ProductSearch: "product_search",
                    ClickBannerAction: "click_banner_action",
                    AccountBanner: "account_banner",
                    ClickBannerChange: "click_banner_change",
                    ClickFooter: "click_footer",
                    AdvisoryFooter: "advisory_footer",
                    ClickContactButton: "click_contact_button",
                    ModuleTime: "module_time",
                    ClickOperation: "click_operation",
                    ClickGuide: "click_guide",
                    ClickProductGuide: "click_productguide",
                    ClickGuideMove: "click_guidemove",
                    ClickProduct: "click_product",
                    ClickActivity: "click_activity",
                    ClickAppintelligent: "click_appintelligent",
                    ClickTech: "click_tech",
                    ClickBase: "click_base",
                    ClickSolution: "click_solution",
                    ClickCompany: "click_company",
                    ClickPartners: "click_partners",
                    ClickCommunity: "click_community",
                    ClickQuickEntry: "click_quick_entry",
                    ClickDocsSearch: "click_docs_search",
                    ClickDocsSearchInner: "click_docs_search_inner",
                    DocsCateFilterFocus: "docs_cate_filter_focus",
                    DocsCateFilterChange: "docs_cate_filter_change",
                    DocsSearchRes: "docs_search_res",
                    ClickDocsResItem: "click_docs_res_item",
                    ClickContact: "click_contact",
                    ClickCurtainAction: "click_curtain_action",
                    AdvisorySubmit: "advisory_submit",
                    AdvisoryFieldBlur: "advisory_field_blur",
                    ClickPartnersSystem: "click_partners_system",
                    PartnersSubmit: "partners_submit",
                    PartnersFieldBlur: "partners_field_blur",
                    ClickNotice: "click_notice",
                    SuggestionSubmit: "suggestion_submit",
                    SuggestionFieldBlur: "suggestion_field_blur",
                    JobsFilter: "jobs_filter",
                    JobsDeliveryClick: "jobs_delivery_click",
                    JobsDeliveryChoose: "jobs_delievery_choose",
                    SearchResultClick: "search_result_click",
                    SearchResultShow: "search_result_show",
                    ClickSearchButton: "click_search_button",
                    SearchDetailStay: "search_detail_stay",
                    ClickHelpDetail: "click_help_detail",
                    ClickRegulationRegion: "click_regulation_region",
                    ClickRegulationType: "click_regulation_type",
                    ClickRegulationCommon: "click_regulation_common"
                },
                c = function(t, e) {
                    if (void 0 === e && (e = {}), "undefined" !== typeof window) {
                        var n = {
                            account_id: (window.AccountInfo || {}).Id
                        };
                        window.location && (n.url = window.location.href, n.url_path = window.location.pathname, n.host = window.location.host), document && (n.title = document.title), window.collectEvent && "function" === typeof window.collectEvent && window.collectEvent(t, (0, i.Z)((0, i.Z)({}, n), e))
                    }
                }
        }
    },
    function(t) {
        var e = function(e) {
            return t(t.s = e)
        };
        t.O(0, [3552, 1827, 6305, 7237], (function() {
            return e(1939), e(4082)
        }));
        t.O()
    }
]);

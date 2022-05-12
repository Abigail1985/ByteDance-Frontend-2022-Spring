"use strict";
(window["volcano-engine-web"] = window["volcano-engine-web"] || []).push([
    [7237], {
        6974: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var i = n(33028),
                o = n(72779),
                r = n.n(o),
                l = n(2784),
                a = n(13768),
                c = "index-module__arrows--ryllP",
                d = "index-module__moreWrapper--fj4sG",
                u = (0, l.memo)((function(e) {
                    var t = e.fill;
                    return l.createElement("svg", {
                        width: "8",
                        height: "14",
                        viewBox: "0 0 8 8",
                        fill: "white",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, l.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.81041 3.83593L2.05767 1.08319L2.78759 0.353271L6.27025 3.83593L2.45941 7.64677L1.72949 6.91685L4.81041 3.83593Z",
                        fill: t || "#1664FF"
                    }))
                })),
                s = (0, l.memo)((function(e) {
                    var t = e.children,
                        n = e.color,
                        o = e.href,
                        s = e.target,
                        m = void 0 === s ? "_blank" : s,
                        p = e.className,
                        _ = e.style,
                        g = e.text,
                        v = void 0 === g ? "\u67e5\u770b\u66f4\u591a" : g,
                        h = e.reportTea;
                    return void 0 === o ? l.createElement("span", {
                        className: r()(d, p),
                        style: (0, i.Z)((0, i.Z)({}, _), {}, {
                            color: n
                        })
                    }, null !== t && void 0 !== t ? t : v, l.createElement("span", {
                        className: c
                    }, l.createElement(u, {
                        fill: n
                    }))) : l.createElement("a", {
                        className: r()(d, p),
                        style: (0, i.Z)((0, i.Z)({}, _), {}, {
                            color: n
                        }),
                        onClick: function() {
                            var e;
                            h && (0, a.gE)(h.entName, null !== (e = h.entData) && void 0 !== e ? e : {
                                link: o,
                                text: v,
                                target: "_blank"
                            });
                            window.open(o, "_blank")
                        },
                        target: m
                    }, null !== t && void 0 !== t ? t : v, l.createElement("span", {
                        className: c
                    }, l.createElement(u, {
                        fill: n
                    })))
                }))
        },
        56917: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var i = n(33028),
                o = n(72779),
                r = n.n(o),
                l = n(2784),
                a = n(81592),
                c = n(13768),
                d = "index-module__moreWrapper--lr5CJ",
                u = "index-module__arrows_text--M15M_",
                s = (0, l.memo)((function(e) {
                    var t = e.children,
                        n = e.color,
                        o = e.href,
                        s = e.target,
                        m = void 0 === s ? "_blank" : s,
                        p = e.iconClassName,
                        _ = e.className,
                        g = e.style,
                        v = e.iconStyle,
                        h = e.iconWidth,
                        x = void 0 === h ? "8px" : h,
                        f = e.iconHeight,
                        b = void 0 === f ? "8px" : f,
                        E = e.text,
                        k = void 0 === E ? "\u67e5\u770b\u66f4\u591a" : E,
                        w = e.hoverMoreClassName,
                        y = void 0 === w ? "" : w,
                        N = e.reportTea;
                    return void 0 === o ? l.createElement("span", {
                        className: r()(d, y),
                        style: y ? (0, i.Z)({}, g) : (0, i.Z)((0, i.Z)({}, g), {}, {
                            color: n
                        })
                    }, l.createElement("span", {
                        className: r()(u)
                    }, null !== t && void 0 !== t ? t : k), l.createElement(a.JO, {
                        className: p,
                        name: "icon_right_arrows",
                        style: y ? (0, i.Z)({}, v) : (0, i.Z)((0, i.Z)({}, v), {}, {
                            color: n
                        }),
                        width: x,
                        height: b
                    })) : l.createElement("a", {
                        className: r()(d, y),
                        style: y ? (0, i.Z)({}, g) : (0, i.Z)((0, i.Z)({}, g), {}, {
                            color: n
                        }),
                        onClick: function() {
                            var e;
                            void 0 !== N && void 0 !== o && (0, c.gE)(N.entName, null !== (e = N.entData) && void 0 !== e ? e : {
                                link: o,
                                text: k,
                                target: "_blank"
                            });
                            void 0 !== o && window.open(o, "_blank")
                        },
                        target: m
                    }, l.createElement("span", {
                        className: r()(u, y && _)
                    }, null !== t && void 0 !== t ? t : k), l.createElement(a.JO, {
                        className: p,
                        name: "icon_right_arrows",
                        style: y ? (0, i.Z)({}, v) : (0, i.Z)((0, i.Z)({}, v), {}, {
                            color: n
                        }),
                        width: x,
                        height: b
                    }))
                }))
        },
        64287: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var i = n(33028),
                o = n(2784),
                r = n(72779),
                l = n.n(r),
                a = {
                    screen: "index-module__screen--wO8s9",
                    darkScreen: "index-module__darkScreen--Y3xRX",
                    lightScreen: "index-module__lightScreen--J2fAg",
                    darkBackground: "index-module__darkBackground--vW0yq",
                    lightBackground: "index-module__lightBackground--pbjbl",
                    fixedScreen: "index-module__fixedScreen--bcxRR",
                    bottom: "index-module__bottom--YKUbj"
                },
                c = (0, o.forwardRef)((function(e, t) {
                    var n, r, c, d = e.children,
                        u = e.className,
                        s = e.id,
                        m = e.style,
                        p = void 0 === m ? {} : m,
                        _ = e.theme,
                        g = e.height,
                        v = e.width,
                        h = e.fixed,
                        x = e.fadeIn,
                        f = e.themeBackground;
                    return o.createElement("div", {
                        className: l()(a.screen, _ ? a[_ + "Screen"] : void 0, _ && f ? a[_ + "Background"] : void 0, (n = {}, n[a.fixedScreen] = void 0 !== h && !1 !== h, n), (r = {}, r[a.bottom] = "bottom" === h, r), (c = {}, c[a.fadeInit] = x, c), u),
                        id: s,
                        style: (0, i.Z)({
                            height: g,
                            width: v
                        }, p),
                        ref: t
                    }, x ? o.createElement("div", {
                        className: a.contentWrapper
                    }, d) : d)
                })),
                d = (0, o.memo)(c)
        },
        39536: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var i = n(59740),
                o = n(72779),
                r = n.n(o),
                l = n(2784),
                a = "index-module__title_box--Ovmie",
                c = "index-module__light--_cLIp",
                d = "index-module__mobile--JI4FG",
                u = ["title", "subTitle", "reverse", "theme", "className", "style", "id", "port"],
                s = (0, l.memo)((function(e) {
                    var t, n, o = e.title,
                        s = e.subTitle,
                        m = e.reverse,
                        p = e.theme,
                        _ = void 0 === p ? "light" : p,
                        g = e.className,
                        v = e.style,
                        h = e.id,
                        x = e.port,
                        f = (0, i.Z)(e, u);
                    return l.createElement("div", Object.assign({
                        id: h,
                        className: r()(a, (t = {}, t[c] = "light" === _, t), (n = {}, n[d] = "mobile" === x, n), g),
                        style: v
                    }, f), m ? l.createElement(l.Fragment, null, s && l.createElement("h2", {
                        title: s
                    }, s), l.createElement("h1", {
                        title: o
                    }, o)) : l.createElement(l.Fragment, null, l.createElement("h1", {
                        title: o
                    }, o), s && l.createElement("h2", {
                        title: s
                    }, s)))
                }))
        },
        6241: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return o
                }
            });
            var i = n(86249),
                o = {
                    title: {
                        title: "\u706b\u5c71\u5f15\u64ce\u6570\u5b57\u751f\u6001",
                        subTitle: "\u6211\u4eec\u4e00\u540c\u63a2\u7d22\u521b\u65b0",
                        reverse: !0
                    },
                    cooperationDataList: [{
                        video: i.X + "/cooperation_wonderful3",
                        BGImg: {
                            pcClass: "coop-left",
                            pcImg: i.X + "/pc_cooper_wonderful5-min.jpg",
                            mboileImg: i.X + "/m_cooper_wonderful3-min.jpg"
                        },
                        coverText: {
                            top: {
                                text: "\u751f\u6001\u4e0e\u5408\u4f5c",
                                title: "\u4e0e\u5408\u4f5c\u4f19\u4f34\u5171\u521b",
                                subTitle: "\u5171\u8d62\u751f\u6001"
                            },
                            bot: {
                                text: "\u751f\u6001\u4e0e\u5408\u4f5c",
                                title: "\u52a0\u5165\u751f\u6001\u4f53\u7cfb",
                                subTitle: "\u8ba9\u6211\u4eec\u643a\u624b\u5171\u8d62\u6570\u667a\u65f6\u4ee3"
                            }
                        },
                        link: "https://partner.volcengine.com/",
                        target: "_self",
                        text: "\u5408\u4f5c\u4e0e\u751f\u6001",
                        evtName: "ClickPartners"
                    }, {
                        video: i.X + "/cooperation_dev2",
                        BGImg: {
                            pcClass: "coop-right",
                            pcImg: i.X + "/pc_cooper_dev3-min.jpg",
                            mboileImg: i.X + "/m_cooper_dev3-min.jpg"
                        },
                        coverText: {
                            top: {
                                img: "icon_develop_community",
                                title: "\u4e0e\u5927\u5496\u9762\u5bf9\u9762",
                                subTitle: "\u73a9\u8f6c\u4e91\u539f\u751f"
                            },
                            bot: {
                                img: "icon_develop_community",
                                title: "\u4e0e\u5927\u5496\u9762\u5bf9\u9762",
                                subTitle: "\u73a9\u8f6c\u4e91\u539f\u751f"
                            }
                        },
                        link: "https://developer.volcengine.com",
                        target: "_self",
                        text: "\u5f00\u53d1\u8005\u793e\u533a",
                        evtName: "ClickCommunity"
                    }]
                }
        },
        58486: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return ne
                },
                Z: function() {
                    return ie
                }
            });
            var i = n(77325),
                o = (n(34795), n(2867)),
                r = (n(77162), n(2784)),
                l = n(57124),
                a = n(63037),
                c = n(2556),
                d = n(18671),
                u = n(35513),
                s = n(33028),
                m = n(59740),
                p = n(23405),
                _ = n(72779),
                g = n.n(_),
                v = n(81592),
                h = n(28909),
                x = n(75932),
                f = n(29844),
                b = n(48926),
                E = n(48282),
                k = "index-module__video--UnMgV",
                w = "index-module__svg--EBVey",
                y = "index-module__icon-wrap--ThlXv",
                N = function(e) {
                    var t = e.video;
                    return r.createElement(r.Fragment, null, r.createElement(E.E.Consumer, null, (function(e) {
                        var n = e.onPlay;
                        return r.createElement("div", {
                            className: k,
                            onClick: function() {
                                n(t.vid)
                            }
                        }, r.createElement("span", {
                            className: y
                        }, r.createElement(v.JO, {
                            className: w,
                            name: "ic_video_play",
                            width: "11",
                            height: "14"
                        })))
                    })))
                },
                S = {
                    container: "index-module__container--ZpMWL",
                    hidden: "index-module__hidden--PSgZ6",
                    titleBox: "index-module__titleBox--VNZpg",
                    titleTag: "index-module__titleTag--ZEGf2",
                    primaryTheme: "index-module__primaryTheme--y9sSL",
                    hotTheme: "index-module__hotTheme--pJwLl",
                    titleText: "index-module__titleText--F9Tb7",
                    blackTheme: "index-module__blackTheme--ToPYK",
                    titleSepr: "index-module__titleSepr--oWtr5",
                    whiteTheme: "index-module__whiteTheme--R520v",
                    subtitleText: "index-module__subtitleText--CEZH3",
                    fullscreen: "index-module__fullscreen--Nnt3g",
                    background: "index-module__background--luenv",
                    "background-image": "index-module__background-image--yrhcV",
                    backgroundImage: "index-module__background-image--yrhcV",
                    "background-video": "index-module__background-video--ucB_7",
                    backgroundVideo: "index-module__background-video--ucB_7",
                    "start-video": "index-module__start-video--MLbxQ",
                    startVideo: "index-module__start-video--MLbxQ",
                    "loop-video": "index-module__loop-video--cKVe1",
                    loopVideo: "index-module__loop-video--cKVe1",
                    "cover-right": "index-module__cover-right--kfF2X",
                    coverRight: "index-module__cover-right--kfF2X",
                    "background-cover-top": "index-module__background-cover-top--EVEnT",
                    backgroundCoverTop: "index-module__background-cover-top--EVEnT",
                    "background-cover-bottom": "index-module__background-cover-bottom--TAxL6",
                    backgroundCoverBottom: "index-module__background-cover-bottom--TAxL6",
                    "cover-left": "index-module__cover-left--_7peY",
                    coverLeft: "index-module__cover-left--_7peY",
                    "cover-top": "index-module__cover-top--JP4Bs",
                    coverTop: "index-module__cover-top--JP4Bs",
                    "cover-bottom": "index-module__cover-bottom--AapU_",
                    coverBottom: "index-module__cover-bottom--AapU_",
                    videoButton: "index-module__videoButton--yJ6Et",
                    fadeInit: "index-module__fadeInit--fYxaP",
                    fadeIn: "index-module__fadeIn--JibwY",
                    wordCover: "index-module__wordCover--OlyhY",
                    nofadeInit: "index-module__nofadeInit--NERHe",
                    word_cover_left: "index-module__word_cover_left--HNf_O",
                    wordCoverLeft: "index-module__word_cover_left--HNf_O",
                    "input-box": "index-module__input-box--tOqOP",
                    inputBox: "index-module__input-box--tOqOP",
                    "input-container": "index-module__input-container--uANqC",
                    inputContainer: "index-module__input-container--uANqC",
                    input: "index-module__input--bZLxG",
                    "actions-button": "index-module__actions-button--zswRI",
                    actionsButton: "index-module__actions-button--zswRI",
                    "input-box-show": "index-module__input-box-show--MAf0X",
                    inputBoxShow: "index-module__input-box-show--MAf0X",
                    widthmove: "index-module__widthmove--SKQhw",
                    "input-container-show": "index-module__input-container-show--ZYHz2",
                    inputContainerShow: "index-module__input-container-show--ZYHz2",
                    "action-button": "index-module__action-button--rPhYo",
                    actionButton: "index-module__action-button--rPhYo",
                    "primary-shadow": "index-module__primary-shadow--K80tF",
                    primaryShadow: "index-module__primary-shadow--K80tF",
                    translucent: "index-module__translucent--IO1Uw",
                    white: "index-module__white--meKNT",
                    title: "index-module__title--PaY_Q",
                    subtitle: "index-module__subtitle--TFbnz",
                    "action-button-wrap": "index-module__action-button-wrap--oMYCo",
                    actionButtonWrap: "index-module__action-button-wrap--oMYCo"
                },
                T = ["platform"];

            function C(e, t) {
                if (e) {
                    var n = e.filter((function(e) {
                        return t && "pc" !== e.platform || !t && "mobile" !== e.platform
                    }))[0];
                    if (void 0 !== n) {
                        n.platform;
                        return (0, m.Z)(n, T)
                    }
                }
            }

            function I(e) {
                if (void 0 !== e && 0 !== e.length) {
                    var t = e.filter((function(e) {
                            return void 0 === e.env || "prod" === e.env
                        }))[0],
                        n = null === t || void 0 === t ? void 0 : t.template,
                        i = b.gL.consoleDomain,
                        o = b.gL.partnerDomain,
                        r = b.gL.marketDomain,
                        l = b.gL.webDomain;
                    return null === n || void 0 === n ? void 0 : n.replaceAll("$$console$$", i).replaceAll("$$partner$$", o).replaceAll("$$market$$", r).replaceAll("$$web$$", l)
                }
            }
            var Z = {
                    importance: "high"
                },
                L = (0, r.memo)((function(e) {
                    var t = e.imageSrcPc,
                        n = e.imageSrcMobile,
                        i = e.isActive,
                        l = e.bgVideoPc,
                        a = e.bgVideoMobile,
                        c = (0, r.useRef)(),
                        d = (0, r.useState)(!1),
                        u = (0, o.Z)(d, 2),
                        s = u[0],
                        m = u[1];
                    (0, r.useEffect)((function() {
                        i && m(!0), c.current && (i ? c.current.play().catch((function() {})) : c.current.pause())
                    }), [i]);
                    var p = i || s;
                    return p ? r.createElement("div", {
                        className: S.background
                    }, p && r.createElement(f.Z, {
                        pc: (null === l || void 0 === l ? void 0 : l.src) && r.createElement("video", {
                            ref: function(e) {
                                return c.current = e
                            },
                            className: g()(S["background-video"], S["start-video"]),
                            poster: l.posterImg,
                            muted: !0,
                            autoPlay: !1,
                            loop: !1,
                            onEnded: function() {
                                var e = c.current;
                                "undefined" !== typeof l.loopFrom && e && (c.current.currentTime = l.loopFrom, c.current.play().catch((function() {})))
                            }
                        }, r.createElement("source", {
                            src: l.src + ".webm",
                            type: "video/webm"
                        }), r.createElement("source", {
                            src: l.src + ".mp4",
                            type: "video/mp4"
                        })),
                        mobile: (null === a || void 0 === a ? void 0 : a.src) && r.createElement("video", {
                            ref: function(e) {
                                return c.current = e
                            },
                            className: g()(S["background-video"], S["start-video"]),
                            poster: a.posterImg,
                            muted: !0,
                            autoPlay: !1,
                            loop: !1,
                            onEnded: function() {
                                var e = c.current;
                                "undefined" !== typeof a.loopFrom && e && (c.current.currentTime = a.loopFrom, c.current.play().catch((function() {})))
                            }
                        }, r.createElement("source", {
                            src: a.src + ".webm",
                            type: "video/webm"
                        }), r.createElement("source", {
                            src: a.src + ".mp4",
                            type: "video/mp4"
                        }))
                    }), p && r.createElement(f.Z, {
                        pc: t && r.createElement("img", Object.assign({}, Z, {
                            className: g()(S["background-image"]),
                            src: t
                        })),
                        mobile: n && r.createElement("img", Object.assign({}, Z, {
                            className: g()(S["background-image"]),
                            src: n
                        }))
                    })) : null
                })),
                B = (0, r.memo)((function(e) {
                    var t, n, i, l, a, c, d, m, p, _ = e.prefixTitle,
                        b = e.title,
                        E = e.subtitle,
                        k = e.actions,
                        w = e.action,
                        y = e.backgroundImage,
                        T = e.backgroundVideo,
                        Z = e.hasFadeInEffect,
                        B = e.isActive,
                        A = e.isLogin,
                        D = e.tag,
                        M = e.carouselTitle,
                        O = e.align,
                        j = void 0 === O ? "center" : O,
                        H = e.changeAutoPlay;
                    (0, r.useEffect)((function() {
                        P(!1)
                    }), [B]);
                    var X = (0, r.useState)(!1),
                        R = (0, o.Z)(X, 2),
                        F = R[0],
                        P = R[1],
                        q = (0, r.useState)(""),
                        W = (0, o.Z)(q, 2),
                        G = W[0],
                        Y = W[1],
                        z = (0, r.useMemo)((function() {
                            return null === w || void 0 === w ? void 0 : w.map((function(e) {
                                return (0, s.Z)((0, s.Z)({}, e), {}, {
                                    href: I(e.href)
                                })
                            }))
                        }), [k]),
                        V = (0, r.useMemo)((function() {
                            return null === z || void 0 === z ? void 0 : z.filter((function(e) {
                                return A && e.signIn || !A && !e.signIn
                            }))[0]
                        }), [A]),
                        K = (0, r.useMemo)((function() {
                            return null === k || void 0 === k ? void 0 : k.map((function(e) {
                                return (0, s.Z)((0, s.Z)({}, e), {}, {
                                    href: I(e.href)
                                })
                            }))
                        }), [k]),
                        J = (0, r.useRef)(null),
                        U = (0, r.useCallback)((function() {
                            H(!0)
                        }), []),
                        Q = C(T, !1),
                        $ = C(T, !0),
                        ee = C(y, !1),
                        te = C(y, !0),
                        ne = C(b, !1),
                        ie = C(b, !0),
                        oe = C(E, !1),
                        re = C(E, !0),
                        le = function(e) {
                            return Array.isArray(e) ? e.map((function(e, t) {
                                return r.createElement(r.Fragment, {
                                    key: t
                                }, 0 !== t && r.createElement("br", null), e)
                            })) : e
                        };
                    return r.createElement("div", {
                        id: "banner",
                        className: g()(S.container, S.fullscreen)
                    }, r.createElement(L, {
                        isActive: B,
                        bgVideoPc: Q,
                        bgVideoMobile: $,
                        imageSrcPc: null === ee || void 0 === ee ? void 0 : ee.src,
                        imageSrcMobile: null === te || void 0 === te ? void 0 : te.src
                    }), r.createElement("div", {
                        className: g()((t = {}, t[S.fadeInit] = Z, t[S.nofadeInit] = !Z, t), S.wordCover, (n = {}, n[S.fadeIn] = B && Z, n), S["word_cover_" + j])
                    }, r.createElement("div", {
                        className: S.titleBox
                    }, r.createElement(f.Z, {
                        pc: D && r.createElement("div", {
                            className: g()(S.titleTag, S[(null !== (i = D.theme) && void 0 !== i ? i : "primary") + "Theme"])
                        }, D.text)
                    }), r.createElement(f.Z, {
                        pc: ne && ("image" === ne.type ? r.createElement("img", {
                            style: {
                                width: ne.imgWidth,
                                height: ne.imgHeight,
                                objectFit: "contain"
                            },
                            src: ne.src
                        }) : r.createElement("h1", {
                            style: {
                                textShadow: ne.noShadow && "none"
                            }
                        }, _ ? r.createElement(r.Fragment, null, r.createElement("span", {
                            className: g()(S.titleText, S[(null !== (l = ne.theme) && void 0 !== l ? l : "white") + "Theme"])
                        }, _.text), r.createElement("span", {
                            className: g()(S.titleSepr, S[(null !== (a = ne.theme) && void 0 !== a ? a : "white") + "Theme"])
                        })) : null, r.createElement("span", {
                            className: g()(S.titleText, S[(null !== (c = ne.theme) && void 0 !== c ? c : "white") + "Theme"])
                        }, le(ne.text)))),
                        mobile: ie && ("image" === ie.type ? r.createElement("img", {
                            style: {
                                width: ie.imgWidth,
                                height: ie.imgHeight,
                                objectFit: "contain"
                            },
                            src: ie.src
                        }) : r.createElement("h1", {
                            style: {
                                textShadow: ie.noShadow && "none"
                            }
                        }, r.createElement("span", {
                            className: g()(S.titleText, S[(null !== (d = ie.theme) && void 0 !== d ? d : "white") + "Theme"])
                        }, le(ie.text))))
                    }), r.createElement(f.Z, {
                        pc: oe && r.createElement("h2", {
                            style: {
                                textShadow: oe.noShadow && "none"
                            }
                        }, r.createElement("span", {
                            className: g()(S.subtitleText, S[(null !== (m = oe.theme) && void 0 !== m ? m : "white") + "Theme"])
                        }, le(oe.text))),
                        mobile: re && r.createElement("h2", {
                            style: {
                                textShadow: re.noShadow && "none"
                            }
                        }, r.createElement("span", {
                            className: g()(S.subtitleText, S[(null !== (p = re.theme) && void 0 !== p ? p : "white") + "Theme"])
                        }, le(re.text)))
                    }), V && r.createElement(r.Fragment, null, r.createElement(f.Z, {
                        pc: r.createElement("div", {
                            className: g()(S["input-box"], F && S["input-box-show"])
                        }, r.createElement("div", {
                            className: g()(S["input-container"], F && S["input-container-show"])
                        }, r.createElement(h.Z, {
                            className: S.input,
                            placeholder: V.placeholder,
                            value: G,
                            ref: J,
                            onBlur: U,
                            onChange: Y
                        })), r.createElement(v.rU, null, r.createElement(x.Z, {
                            className: g()(S["action-button"], S["primary-shadow"]),
                            onClick: function() {
                                if (F || (0, u.tq)()) {
                                    (0, u.gE)(u.qj.AccountBanner, {
                                        link: V.href,
                                        tel: G ? "int" : "",
                                        text: V.text,
                                        target: (null === V || void 0 === V ? void 0 : V.target) || "_self"
                                    });
                                    var e = V.href && (G.length > 0 ? V.href + "?Tel=" + G : V.href);
                                    window.open(e, V.target)
                                } else {
                                    var t;
                                    (0, u.gE)(u.qj.ClickBannerAction, {
                                        link: V.href,
                                        tel: G ? "int" : "",
                                        text: V.text,
                                        target: (null === V || void 0 === V ? void 0 : V.target) || "_self"
                                    }), H(!1), P(!0), null === (t = J.current) || void 0 === t || t.focus()
                                }
                            }
                        }, V.text))),
                        mobile: r.createElement("div", {
                            className: g()(S["input-box"], F && S["input-box-show"])
                        }, r.createElement(v.rU, null, r.createElement(x.Z, {
                            className: g()(S["action-button"], S["primary-shadow"]),
                            onClick: function() {
                                if (F || (0, u.tq)()) {
                                    (0, u.gE)(u.qj.AccountBanner, {
                                        link: V.href,
                                        tel: G ? "int" : "",
                                        text: V.text,
                                        target: (null === V || void 0 === V ? void 0 : V.target) || "_self"
                                    });
                                    var e = V.href && (G.length > 0 ? V.href + "?Tel=" + G : V.href);
                                    window.open(e, V.target)
                                } else {
                                    var t;
                                    (0, u.gE)(u.qj.ClickBannerAction, {
                                        link: V.href,
                                        tel: G ? "int" : "",
                                        text: V.text,
                                        target: (null === V || void 0 === V ? void 0 : V.target) || "_self"
                                    }), H(!1), P(!0), null === (t = J.current) || void 0 === t || t.focus()
                                }
                            }
                        }, V.text)))
                    })), r.createElement("div", {
                        className: S[(null === K || void 0 === K ? void 0 : K.length) > 1 ? "action-button-wrap" : ""],
                        style: {
                            marginTop: "24px"
                        }
                    }, null === K || void 0 === K ? void 0 : K.map((function(e, t) {
                        return "video" === e.type ? r.createElement(f.Z, {
                            pcWrapStyle: {
                                display: "inline"
                            },
                            key: t,
                            pc: r.createElement(N, {
                                video: {
                                    vid: e.src
                                }
                            })
                        }) : r.createElement(r.Fragment, {
                            key: t
                        }, e.href ? r.createElement(v.rU, {
                            href: e.href,
                            key: t,
                            onClick: function() {
                                (0, u.gE)(u.qj.ClickBannerAction, {
                                    href: null === e || void 0 === e ? void 0 : e.href,
                                    text: null === e || void 0 === e ? void 0 : e.text,
                                    title: M || "",
                                    target: (null === e || void 0 === e ? void 0 : e.target) || "_self"
                                })
                            },
                            target: e.target,
                            style: {
                                marginRight: "10px"
                            }
                        }, r.createElement(x.Z, {
                            className: g()(S["action-button"], S[e.type])
                        }, e.text)) : r.createElement(x.Z, {
                            onClick: function() {
                                (0, u.gE)(u.qj.ClickBannerAction, {
                                    href: (null === e || void 0 === e ? void 0 : e.href) || "",
                                    text: (null === e || void 0 === e ? void 0 : e.text) || "",
                                    title: M || "",
                                    target: (null === e || void 0 === e ? void 0 : e.target) || "_self"
                                })
                            },
                            className: g()(S["action-button"], S[e.type])
                        }, e.text))
                    }))))))
                })),
                A = (0, p.$j)((function(e) {
                    return {
                        isLogin: e.profile.IsLogin
                    }
                }))(B);
            var D, M, O, j, H, X, R = n(54073),
                F = n.n(R),
                P = "index-module__carousel-wrapper--AQwyn",
                q = "index-module__carousel-slides--AhA4l",
                W = "index-module__carousel-slide--j_rpZ",
                G = "index-module__carousel-controls--HFLQN",
                Y = "index-module__dot--IHLG2",
                z = "index-module__dot-actived--ANAAI",
                V = "index-module__dot-span--OlpJn",
                K = "index-module__dot-span-actived--UqID5",
                J = "index-module__carousel-control--I_ubR",
                U = "index-module__dark-theme--Y2VKi",
                Q = (0, r.memo)((function(e) {
                    var t = e.children,
                        n = e.autoPlay,
                        i = e.autoplayInterval,
                        l = e.onChangeSlide,
                        a = e.controlTexts,
                        c = e.controlThemes,
                        d = null !== i && void 0 !== i ? i : 7e3,
                        u = (0, r.useState)(0),
                        s = (0, o.Z)(u, 2),
                        m = s[0],
                        p = s[1],
                        _ = (0, r.useState)(n ? "start" : "stop"),
                        v = (0, o.Z)(_, 2),
                        h = v[0],
                        x = v[1],
                        b = (0, r.useState)(!1),
                        E = (0, o.Z)(b, 2),
                        k = E[0],
                        w = E[1],
                        y = (0, r.useRef)(!0),
                        N = function(e, t) {
                            e !== t && (p(t), l(e, t))
                        },
                        S = r.Children.count(t);
                    ! function(e, t, n, i) {
                        var o = (0, r.useRef)(),
                            l = (0, r.useRef)(),
                            a = (0, r.useRef)(),
                            c = (0, r.useRef)(),
                            d = (0, r.useRef)(),
                            u = (0, r.useRef)(),
                            s = (0, r.useRef)();

                        function m() {
                            a.current = (new Date).valueOf(), o.current()
                        }(0, r.useEffect)((function() {
                            o.current = e
                        }), [e]), (0, r.useEffect)((function() {
                            return clearInterval(l.current), l.current = window.setInterval(m, t),
                                function() {
                                    return clearInterval(l.current)
                                }
                        }), [t]), (0, r.useEffect)((function() {
                            "reset" === d.current && "reset" === n && (clearInterval(l.current), a.current = (new Date).valueOf(), s.current && (l.current = window.setInterval(m, t)))
                        }), [i]);
                        var p = function() {
                            a.current = (new Date).valueOf(), c.current = t, l.current = window.setInterval(m, t), s.current = !0
                        };
                        (0, r.useEffect)((function() {
                            switch (clearInterval(l.current), n) {
                                case "start":
                                    p();
                                    break;
                                case "stop":
                                    s.current = !1;
                                    break;
                                case "pause":
                                    c.current -= (new Date).valueOf() - a.current, s.current = !1;
                                    break;
                                case "resume":
                                    "pause" === d.current ? (a.current = (new Date).valueOf(), l.current = window.setTimeout((function() {
                                        m(), a.current = (new Date).valueOf(), l.current = window.setInterval(m, t)
                                    }), c.current), s.current = !0) : "reset" === d.current && "pause" === u.current && p();
                                    break;
                                case "reset":
                                    s.current && (a.current = (new Date).valueOf(), c.current = t, l.current = window.setInterval(m, t))
                            }
                            u.current = d.current, d.current = n
                        }), [n])
                    }((function() {
                        N(m, (m + 1) % S)
                    }), d, h, k), (0, r.useEffect)((function() {
                        y.current || x(n ? "resume" : "pause")
                    }), [n]), (0, r.useEffect)((function() {
                        y.current = !1
                    }), []);
                    var T = (0, r.useMemo)((function() {
                            return c.map((function(e, t) {
                                return "dark" === e ? t : void 0
                            })).filter((function(e) {
                                return void 0 !== e
                            }))
                        }), [c]),
                        C = function(e) {
                            D = e.touches[0].pageX, M = e.touches[0].pageY
                        },
                        I = function(e) {
                            O = e.touches[0].pageX, j = e.touches[0].pageY, Math.abs(D - O) > Math.abs(M - j) && e.preventDefault()
                        },
                        Z = F()((function() {
                            var e;
                            Math.abs(O - D) > Math.abs(j - M) && (new Date).getTime() - B.current > 300 && ((e = O - D) < 0 && A(), e > 0 && H(), B.current = (new Date).getTime())
                        }), 50),
                        L = (0, r.useRef)(null),
                        B = (0, r.useRef)((new Date).getTime());
                    (0, r.useEffect)((function() {
                        var e = L.current;
                        return e.addEventListener("touchstart", C), e.addEventListener("touchmove", I, {
                                passive: !1
                            }), e.addEventListener("touchend", Z),
                            function() {
                                e.removeEventListener("touchstart", C), e.removeEventListener("touchmove", I), e.removeEventListener("touchend", Z)
                            }
                    }), [m]);
                    var A = function() {
                            N(m, (m + 1 + S) % S)
                        },
                        H = function() {
                            N(m, (m - 1 + S) % S)
                        };
                    return r.createElement("div", {
                        ref: L,
                        className: P
                    }, r.createElement("ul", {
                        className: q
                    }, r.Children.map(t, (function(e, t) {
                        return r.createElement("li", {
                            className: W,
                            style: {
                                visibility: m === t ? "visible" : "hidden",
                                opacity: m === t ? 1 : 0
                            }
                        }, e)
                    }))), r.createElement("ul", {
                        className: g()(G, T.includes(m) && U)
                    }, r.Children.map(t, (function(e, t) {
                        var i, o, l;
                        return r.createElement("li", {
                            className: g()(J),
                            onClick: function() {
                                m !== t && (x("reset"), w(!k), N(m, t))
                            }
                        }, r.createElement("div", {
                            className: g()(Y, (i = {}, i[z] = m === t, i))
                        }, r.createElement(f.Z, {
                            pc: null !== (o = null === a || void 0 === a ? void 0 : a[t]) && void 0 !== o ? o : t
                        }), r.createElement("span", {
                            className: g()(V, (l = {}, l[K] = m === t, l)),
                            style: {
                                animationDuration: d + "ms",
                                animationPlayState: n ? "running" : "paused"
                            }
                        })))
                    }))))
                })),
                $ = Q,
                ee = {
                    themeList: ["light", "light", "light", "dark"]
                };
            var te = 0,
                ne = function(e) {
                    var t, n, i, o, r, l, a, c;
                    switch (void 0 === e && (e = te), ee.themeList[e]) {
                        case "dark":
                            null === (t = H) || void 0 === t || t.classList.remove("appbar-light", "appbar-light-b"), null === (n = H) || void 0 === n || n.classList.add("appbar-dark");
                            break;
                        case "light":
                            null === (i = H) || void 0 === i || i.classList.remove("appbar-dark"), null === (o = H) || void 0 === o || o.classList.add("appbar-light", "appbar-light-b");
                            break;
                        case "lightblue":
                            null === (r = H) || void 0 === r || r.classList.remove("appbar-dark"), null === (l = H) || void 0 === l || l.classList.add("appbar-light", "appbar-light-b");
                            break;
                        default:
                            null === (a = H) || void 0 === a || a.classList.remove("appbar-dark"), null === (c = H) || void 0 === c || c.classList.add("appbar-light", "appbar-light-b")
                    }
                },
                ie = (0, r.memo)((function() {
                    var e, t, n = (0, r.useState)(0),
                        s = (0, o.Z)(n, 2),
                        m = s[0],
                        p = s[1],
                        _ = (0, r.useState)(!0),
                        g = (0, o.Z)(_, 2),
                        v = g[0],
                        h = g[1];
                    (0, r.useEffect)((function() {
                        p(0)
                    }), []), (0, r.useEffect)((function() {
                        H || (H = document.getElementById("appbar-wrap")), X || (X = document.getElementById("volc-engine-sidebar-wrap")), ne(0)
                    }), []);
                    var x = (0, r.useCallback)((function(e, t) {
                            (0, l.c6)() <= (0, l.gp)() && ne(t), m !== t && (p(t), te = t)
                        }), [m]),
                        f = (0, a.useRuntimeContext)().context,
                        b = f.isBrowser,
                        E = (f.request || {}).headers,
                        k = void 0 === E ? {} : E,
                        w = (0, r.useState)([]),
                        y = (0, o.Z)(w, 2);
                    y[0], y[1];
                    (0, r.useEffect)((function() {
                        0
                    }), []);
                    var N = (0, a.useStaticLoader)((function() {
                            return (0, c.Mc)(b, k)
                        }), []),
                        S = N.data,
                        T = N.error,
                        C = N.loading,
                        I = S;
                    if ((0, r.useEffect)((function() {
                            if ("undefined" !== typeof PerformanceObserver) try {
                                var e, t, n = new Set;
                                ((null === (e = I[0]) || void 0 === e ? void 0 : e.backgroundImage) || (null === (t = I[0]) || void 0 === t ? void 0 : t.backgroundVideo) || []).forEach((function(e) {
                                    var t = e.src;
                                    t && n.add(t.split("//")[1])
                                }));
                                var o = new PerformanceObserver((function(e) {
                                    for (var t, r = e.getEntries(), l = (0, i.Z)(r); !(t = l()).done;) {
                                        var a, c = t.value;
                                        if (n.has(null === (a = c.url) || void 0 === a ? void 0 : a.split("//")[1])) {
                                            (0, u.bi)({
                                                name: "custom_lcp",
                                                value: c.startTime
                                            }), o.disconnect();
                                            break
                                        }
                                    }
                                }));
                                o.observe({
                                    type: "largest-contentful-paint",
                                    buffered: !0
                                })
                            } catch (r) {}
                        }), []), C) return r.createElement("div", null, "loading");
                    if (T) throw new Error("SSG\u9884\u53d6FirstScreenBanners\u6570\u636e\u5931\u8d25");
                    return r.createElement(r.Fragment, null, r.createElement(d.Helmet, null, null === (e = I[0].backgroundImage) || void 0 === e ? void 0 : e.map((function(e) {
                        return r.createElement("link", {
                            rel: "preload",
                            as: "image",
                            href: e.src,
                            key: e.src
                        })
                    })), null === (t = I[0].backgroundVideo) || void 0 === t ? void 0 : t.map((function(e) {
                        return r.createElement("link", {
                            rel: "preload",
                            as: "video",
                            href: e.src,
                            key: e.src
                        })
                    }))), r.createElement($, {
                        controlTexts: I.map((function(e) {
                            return e.carouselTitle
                        })),
                        controlThemes: I.map((function(e) {
                            return e.carouselControlTheme
                        })),
                        autoPlay: v,
                        autoplayInterval: 4e3,
                        onChangeSlide: x
                    }, I.map((function(e, t) {
                        return r.createElement(A, Object.assign({
                            key: t
                        }, e, {
                            isActive: m === t,
                            changeAutoPlay: h
                        }))
                    }))))
                }))
        },
        77810: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return ie
                }
            });
            var i = n(59740),
                o = n(34795),
                r = n(12436),
                l = n.n(r),
                a = n(77162),
                c = n.n(a),
                d = n(2784),
                u = n(57124),
                s = n(57557),
                m = n(35132),
                p = n(6424),
                _ = n(97571),
                g = n(23405),
                v = n(63037),
                h = n(88698),
                x = n(81516),
                f = n(64287),
                b = n(58486),
                E = n(81452),
                k = n(2867),
                w = n(39536),
                y = n(72779),
                N = n.n(y),
                S = n(81592),
                T = n(22713),
                C = n(35513),
                I = n(6241),
                Z = n(56917),
                L = {
                    container: "index-module__container--foIT1",
                    title_wrap: "index-module__title_wrap--owX7G",
                    titleWrap: "index-module__title_wrap--owX7G",
                    content: "index-module__content--oASXh",
                    content_box_a: "index-module__content_box_a--vszwO",
                    contentBoxA: "index-module__content_box_a--vszwO",
                    content_box: "index-module__content_box--jPs7L",
                    contentBox: "index-module__content_box--jPs7L",
                    video_text_start: "index-module__video_text_start--BZiOZ",
                    videoTextStart: "index-module__video_text_start--BZiOZ",
                    opachange: "index-module__opachange--krcre",
                    title_img: "index-module__title_img--qkxtm",
                    titleImg: "index-module__title_img--qkxtm",
                    video_text_end: "index-module__video_text_end--gjrMC",
                    videoTextEnd: "index-module__video_text_end--gjrMC",
                    video_cover_top: "index-module__video_cover_top--F8Lyr",
                    videoCoverTop: "index-module__video_cover_top--F8Lyr",
                    video_cover_bot: "index-module__video_cover_bot--Dwju5",
                    videoCoverBot: "index-module__video_cover_bot--Dwju5",
                    play_none: "index-module__play_none--iKJTc",
                    playNone: "index-module__play_none--iKJTc"
                },
                B = function(e) {
                    var t = e.coverTextData;
                    return d.createElement(d.Fragment, null, (null === t || void 0 === t ? void 0 : t.img) && d.createElement(S.JO, {
                        name: t.img,
                        width: "71px",
                        height: "14px"
                    }), (null === t || void 0 === t ? void 0 : t.text) && d.createElement("h3", {
                        style: {
                            fontSize: "14px",
                            color: "#1664FF",
                            fontWeight: 600,
                            margin: 0
                        }
                    }, t.text))
                },
                A = function(e) {
                    var t = e.videoData,
                        n = (0, d.useState)(!1),
                        i = (0, k.Z)(n, 2),
                        o = i[0],
                        r = i[1],
                        l = (0, d.useState)(!1),
                        a = (0, k.Z)(l, 2),
                        c = a[0],
                        u = a[1],
                        s = (0, d.useState)(!1),
                        m = (0, k.Z)(s, 2),
                        p = m[0],
                        _ = m[1],
                        g = (0, d.useRef)(null),
                        v = function(e) {
                            e.stopPropagation(), e.preventDefault(), g.current.play().catch((function() {}))
                        };
                    return d.createElement(S.rU, {
                        href: t.link,
                        onClick: function() {
                            (0, C.gE)(C.qj[t.evtName], {
                                link: t.link,
                                text: t.text,
                                target: t.target
                            })
                        }
                    }, d.createElement("div", {
                        className: L.content_box
                    }, "\u4e0e\u5408\u4f5c\u4f19\u4f34\u5171\u521b" === t.coverText.top.title ? d.createElement(d.Fragment, null, d.createElement("div", {
                        className: N()(L.video_text_start, c && L.video_cover_top, p && L.play_none)
                    }, d.createElement("div", {
                        style: {
                            marginTop: "32px",
                            marginBottom: "16px"
                        }
                    }, d.createElement(B, {
                        coverTextData: t.coverText.top
                    })), d.createElement("h1", {
                        style: {
                            fontSize: "24px",
                            lineHeight: "32px",
                            fontWeight: 500
                        }
                    }, t.coverText.top.title), d.createElement("h3", {
                        style: {
                            fontSize: "14px",
                            margin: "4px 0 8px 0",
                            lineHeight: "22px"
                        }
                    }, t.coverText.top.subTitle), d.createElement(Z.Z, {
                        text: "\u4e86\u89e3\u66f4\u591a",
                        color: "#181818",
                        style: {
                            fontSize: "12px",
                            fontWeight: 500,
                            lineHeight: "20px"
                        }
                    }), d.createElement("div", {
                        onClick: function(e) {
                            return v(e)
                        },
                        style: {
                            backgroundImage: "url(" + T + ")",
                            backgroundSize: "100%",
                            width: "22px",
                            height: "22px",
                            position: "absolute",
                            right: "18px",
                            bottom: "15px"
                        }
                    })), d.createElement("div", {
                        className: N()(L.video_text_end, !c && L.video_cover_bot, p && L.play_none),
                        style: {
                            padding: 0
                        }
                    }, d.createElement("div", {
                        style: {
                            marginTop: "70px",
                            textAlign: "center",
                            marginBottom: "7px"
                        }
                    }, d.createElement(B, {
                        coverTextData: t.coverText.bot
                    })), d.createElement("h1", {
                        style: {
                            fontSize: "24px",
                            textAlign: "center"
                        }
                    }, t.coverText.bot.title), d.createElement("h3", {
                        style: {
                            fontSize: "14px",
                            textAlign: "center"
                        }
                    }, t.coverText.bot.subTitle), d.createElement("div", {
                        onClick: function(e) {
                            return v(e)
                        },
                        style: {
                            backgroundImage: "url(" + T + ")",
                            backgroundSize: "100%",
                            width: "22px",
                            height: "22px",
                            float: "right",
                            position: "absolute",
                            right: "18px",
                            bottom: "15px"
                        }
                    }))) : d.createElement(d.Fragment, null, d.createElement("div", {
                        className: N()(L.video_text_start, c && L.video_cover_top, p && L.play_none)
                    }, d.createElement("div", {
                        style: {
                            width: "100%",
                            marginTop: "45px"
                        }
                    }, d.createElement(B, {
                        coverTextData: t.coverText.top
                    })), d.createElement("h1", {
                        style: {
                            fontSize: "24px",
                            lineHeight: "32px",
                            fontWeight: 500,
                            marginTop: "11px"
                        }
                    }, t.coverText.top.title), d.createElement("h3", {
                        style: {
                            fontSize: "14px",
                            lineHeight: "22px",
                            margin: "4px 0 8px 0"
                        }
                    }, t.coverText.top.subTitle), d.createElement(Z.Z, {
                        text: "\u4e86\u89e3\u66f4\u591a",
                        color: "#181818",
                        style: {
                            fontSize: "12px",
                            fontWeight: 500,
                            lineHeight: "20px"
                        }
                    }), d.createElement("div", {
                        onClick: function(e) {
                            return v(e)
                        },
                        style: {
                            backgroundImage: "url(" + T + ")",
                            backgroundSize: "100%",
                            width: "22px",
                            height: "22px",
                            position: "absolute",
                            right: "18px",
                            bottom: "15px"
                        }
                    })), d.createElement("div", {
                        className: N()(L.video_text_end, !c && L.video_cover_top, p && L.play_none)
                    }, d.createElement("div", {
                        style: {
                            width: "100%",
                            marginTop: "45px"
                        }
                    }, d.createElement(B, {
                        coverTextData: t.coverText.bot
                    })), d.createElement("h1", {
                        style: {
                            fontSize: "24px",
                            lineHeight: "32px",
                            fontWeight: 500,
                            marginTop: "11px"
                        }
                    }, t.coverText.top.title), d.createElement("h3", {
                        style: {
                            fontSize: "14px",
                            lineHeight: "22px",
                            margin: "4px 0 8px 0"
                        }
                    }, t.coverText.top.subTitle), d.createElement(Z.Z, {
                        text: "\u4e86\u89e3\u66f4\u591a",
                        style: {
                            fontSize: "12px",
                            fontWeight: 500,
                            lineHeight: "20px",
                            color: "#181818"
                        }
                    }), d.createElement("div", {
                        onClick: function(e) {
                            return v(e)
                        },
                        style: {
                            backgroundImage: "url(" + T + ")",
                            backgroundSize: "100%",
                            width: "22px",
                            height: "22px",
                            position: "absolute",
                            right: "18px",
                            bottom: "15px"
                        }
                    }))), d.createElement("video", {
                        className: N()(L.no_ready, o && L.video_ready),
                        ref: g,
                        poster: t.BGImg.mboileImg,
                        style: {
                            width: "100%",
                            display: "block"
                        },
                        onEnded: function() {
                            u(!0), _(!1)
                        },
                        muted: !0,
                        onPlaying: function() {
                            return _(!0)
                        },
                        onPlay: function() {
                            r(!0)
                        },
                        onCanPlayThrough: function() {
                            r(!0)
                        }
                    }, d.createElement("source", {
                        src: t.video + ".webm",
                        type: "video/webm"
                    }), d.createElement("source", {
                        src: t.video + ".mp4",
                        type: "video/mp4"
                    }))))
                },
                D = (0, d.memo)((function() {
                    var e;
                    return d.createElement("div", {
                        className: L.container
                    }, d.createElement("div", {
                        className: L.title_wrap
                    }, d.createElement(w.Z, {
                        subTitle: I.D.title.subTitle,
                        title: I.D.title.title,
                        reverse: I.D.title.reverse,
                        port: "mobile",
                        theme: "dark"
                    })), d.createElement("div", {
                        className: L.content
                    }, null === I.D || void 0 === I.D || null === (e = I.D.cooperationDataList) || void 0 === e ? void 0 : e.map((function(e, t) {
                        return d.createElement(A, {
                            key: t,
                            videoData: e
                        })
                    }))))
                })),
                M = n(34149),
                O = n(96813),
                j = {
                    container: "index-module__container--xOIYT",
                    title_wrap: "index-module__title_wrap--nKJ67",
                    titleWrap: "index-module__title_wrap--nKJ67",
                    title_sub: "index-module__title_sub--ZKvBK",
                    titleSub: "index-module__title_sub--ZKvBK",
                    title_title: "index-module__title_title--ona4j",
                    titleTitle: "index-module__title_title--ona4j",
                    item_box_link: "index-module__item_box_link--sB2eY",
                    itemBoxLink: "index-module__item_box_link--sB2eY",
                    item_box: "index-module__item_box--GAlxk",
                    itemBox: "index-module__item_box--GAlxk",
                    text_title: "index-module__text_title--DxO14",
                    textTitle: "index-module__text_title--DxO14"
                },
                H = M.default.div.withConfig({
                    displayName: "MobileRender__ItemWrap",
                    componentId: "sc-9ra7qf-0"
                })(["width:100%;height:", "px;display:flex;flex-wrap:wrap;justify-content:space-between;align-content:space-between;"], (function(e) {
                    return 169 * e.num
                })),
                X = (0, d.memo)((function() {
                    var e;
                    return d.createElement("div", {
                        className: j.container
                    }, d.createElement("div", {
                        className: j.title_wrap
                    }, d.createElement(w.Z, {
                        theme: "dark",
                        title: O.h.title.title,
                        subTitle: O.h.title.subTitle,
                        reverse: !0,
                        port: "mobile"
                    })), d.createElement(H, {
                        num: Math.ceil(O.h.solutionListData.length / 2)
                    }, null === O.h || void 0 === O.h || null === (e = O.h.solutionListData) || void 0 === e ? void 0 : e.map((function(e, t) {
                        var n;
                        return (null === O.h || void 0 === O.h || null === (n = O.h.solutionListData) || void 0 === n ? void 0 : n.length) - 1 !== t ? d.createElement(S.rU, {
                            href: e.link,
                            key: t,
                            className: j.item_box_link,
                            target: "_blank",
                            onClick: function() {
                                (0, C.gE)(C.qj.ClickSolution, {
                                    link: e.link,
                                    text: e.title,
                                    target: "_blank"
                                })
                            }
                        }, d.createElement("div", {
                            className: j.item_box
                        }, d.createElement(S.JO, {
                            name: e.icon,
                            width: "36px",
                            height: "36px",
                            color: "textPrimary-reverse"
                        }), d.createElement("p", {
                            className: j.text_title
                        }, e.title), d.createElement("div", {
                            className: j.text_link
                        }, d.createElement(Z.Z, {
                            text: "\u4e86\u89e3\u66f4\u591a",
                            color: "#1664FF"
                        })))) : d.createElement(S.rU, {
                            href: e.link,
                            key: t,
                            className: j.item_box_link
                        }, d.createElement("div", {
                            className: j.item_box
                        }, d.createElement(S.JO, {
                            name: e.icon,
                            width: "36px",
                            height: "36px",
                            color: "textPrimary-reverse"
                        }), d.createElement("p", {
                            className: j.text_title,
                            style: {
                                opacity: "0.4"
                            }
                        }, e.title), d.createElement("div", {
                            className: j.text_link
                        }, d.createElement("span", {
                            style: {
                                height: "22px",
                                display: "block"
                            }
                        }))))
                    }))))
                })),
                R = n(2183),
                F = n.n(R),
                P = n(13768),
                q = n(86249),
                W = F().bind({
                    title_wrap: "index-module__title_wrap--hDVkM",
                    titleWrap: "index-module__title_wrap--hDVkM",
                    m_carousel: "index-module__m_carousel--xaeOz",
                    mCarousel: "index-module__m_carousel--xaeOz",
                    "carousel-item": "index-module__carousel-item--G8Oqc",
                    carouselItem: "index-module__carousel_item--DwQ4P",
                    carousel_item: "index-module__carousel_item--DwQ4P",
                    "carousel-index": "index-module__carousel-index--hYhsg",
                    carouselIndex: "index-module__carousel-index--hYhsg",
                    carousel_btn_box: "index-module__carousel_btn_box--uq3DS",
                    carouselBtnBox: "index-module__carousel_btn_box--uq3DS",
                    carousel_btn: "index-module__carousel_btn--Ny102",
                    carouselBtn: "index-module__carousel_btn--Ny102",
                    carousel_btn_active: "index-module__carousel_btn_active--GudrK",
                    carouselBtnActive: "index-module__carousel_btn_active--GudrK",
                    marquee: "index-module__marquee--cm0wr",
                    "marquee-inner": "index-module__marquee-inner--fCG51",
                    marqueeInner: "index-module__marquee-inner--fCG51",
                    img: "index-module__img--VlS55",
                    img_box: "index-module__img_box--Fluyh",
                    imgBox: "index-module__img_box--Fluyh",
                    old: "index-module__old--Sp2Sl",
                    even: "index-module__even--ELU0z",
                    "img-1": "index-module__img-1--PGzb1",
                    img1: "index-module__img-1--PGzb1",
                    "img-2": "index-module__img-2--FDDUZ",
                    img2: "index-module__img-2--FDDUZ",
                    "img-3": "index-module__img-3--kIcaF",
                    img3: "index-module__img-3--kIcaF",
                    "img-4": "index-module__img-4--IOyCK",
                    img4: "index-module__img-4--IOyCK",
                    "img-5": "index-module__img-5--CByYs",
                    img5: "index-module__img-5--CByYs",
                    "marquee-img": "index-module__marquee-img--LyFCz",
                    marqueeImg: "index-module__marquee-img--LyFCz"
                }),
                G = [{
                    title_icon: {
                        icon: "icon_m_growth_1",
                        height: "52px",
                        width: "46px"
                    },
                    img: q.X + "/growth-lab/m_banner11-min.jpg",
                    title: "\u706b\u5c71\u5f15\u64ce\u8363\u83b7DNV\u4e94\u9879ISO\u8ba4\u8bc1",
                    desc: "\u4ea7\u54c1\u53ca\u670d\u52a1\u5df2\u7b26\u5408\u56fd\u9645\u6807\u51c6",
                    link: "https://www.volcengine.com/docs/6359/75112"
                }, {
                    title_icon: {
                        icon: "icon_m_growth_2",
                        height: "32px",
                        width: "111px"
                    },
                    img: q.X + "/growth-lab/m_banner22-min.jpg",
                    title: "\u706b\u5c71\u5f15\u64ce\u52a0\u5165\u4e91\u539f\u751f\u57fa\u91d1\u4f1a",
                    desc: "\u6b63\u5f0f\u6210\u4e3a CNCF \u767d\u91d1\u4f1a\u5458",
                    link: "https://www.volcengine.com/docs/6359/66696"
                }, {
                    title_icon: {
                        icon: "icon_m_growth_3",
                        height: "52px",
                        width: "80px"
                    },
                    img: q.X + "/growth-lab/m_banner33-min.jpg",
                    title: "\u524d\u4e24\u5929\uff0c\u706b\u5c71\u5f15\u64ce\u62ff\u4e86\u4e24\u4e2a\u5956",
                    desc: "\u5e2e\u52a9\u96f6\u552e\u9886\u57df\u5ba2\u6237\u4ef7\u503c\u6700\u5927\u5316",
                    link: "https://www.volcengine.com/docs/6359/68707"
                }],
                Y = [{
                    img: q.X + "/growth-lab/11-min.png",
                    title: "\u53ef\u4fe1\u4e91\u5bb9\u5668\u8ba4\u8bc1",
                    link: "https://www.volcengine.com/docs/6359/74982"
                }, {
                    img: q.X + "/growth-lab/22-min.png",
                    title: "\u4fe1\u901a\u9662\u6d4b\u8bc4\u8ba4\u8bc1",
                    link: "https://www.volcengine.com/docs/6359/75115"
                }, {
                    img: q.X + "/growth-lab/33-min.png",
                    title: "LiveVideoStackCon",
                    link: "https://www.volcengine.com/docs/6359/68796"
                }, {
                    img: q.X + "/growth-lab/44-min.png",
                    title: "ACL\u6700\u4f73\u8bba\u6587",
                    link: "https://www.volcengine.com/docs/6359/75171"
                }, {
                    img: q.X + "/growth-lab/55-min.png",
                    title: "\u5e7f\u6c7d\u57c3\u5b89\u521b\u65b0\u5956",
                    link: "https://www.volcengine.com/docs/6359/68708"
                }],
                z = function() {
                    var e = (0, d.useState)(0),
                        t = (0, k.Z)(e, 2),
                        n = t[0],
                        i = t[1],
                        o = (0, d.useRef)(0),
                        r = (0, d.useRef)(0),
                        l = (0, d.useRef)(0),
                        a = (0, d.useRef)(null),
                        c = (0, d.useRef)(null),
                        u = function(e) {
                            var t = e.touches[0];
                            o.current = (null === t || void 0 === t ? void 0 : t.clientX) || 0
                        },
                        s = function(e) {
                            var t = e.changedTouches[0];
                            l.current = (null === t || void 0 === t ? void 0 : t.clientX) || 0, l.current - o.current > 10 && (r.current >= (null === G || void 0 === G ? void 0 : G.length) - 1 ? r.current = 0 : r.current++, clearTimeout(a.current), i(r.current % (null === G || void 0 === G ? void 0 : G.length))), l.current - o.current < 10 && (r.current <= 0 ? r.current = (null === G || void 0 === G ? void 0 : G.length) - 1 : r.current--, clearTimeout(a.current), i(Math.abs(r.current) % (null === G || void 0 === G ? void 0 : G.length)))
                        };
                    return (0, d.useEffect)((function() {
                        return clearTimeout(a.current), a.current = setTimeout((function() {
                                r.current = n + 1, i(r.current % (null === G || void 0 === G ? void 0 : G.length))
                            }), 2300),
                            function() {
                                clearTimeout(a.current)
                            }
                    }), [n]), (0, d.useEffect)((function() {
                        return c.current.addEventListener("touchstart", u), c.current.addEventListener("touchend", s),
                            function() {
                                c.current.removeEventListener("touchend", s), c.current.removeEventListener("touchstart", u)
                            }
                    }), []), d.createElement("div", {
                        ref: function(e) {
                            return c.current = e
                        },
                        className: W("m_carousel")
                    }, d.createElement("div", {
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    }, G.map((function(e, t) {
                        return d.createElement("div", {
                            onClick: function() {
                                (0, P.gE)(P.qj.ClickActivity, {
                                    link: e.link,
                                    text: e.title,
                                    target: "_self"
                                }), location.href = e.link
                            },
                            key: t,
                            style: {
                                backgroundImage: "url(" + e.img + ")"
                            },
                            className: W("carousel-item", n === t ? "carousel_item" : "")
                        }, d.createElement(S.JO, {
                            style: {
                                display: "block",
                                margin: "35px auto 0"
                            },
                            name: e.title_icon.icon,
                            width: "120px",
                            height: "30px"
                        }), d.createElement("h6", null, e.title), d.createElement("p", null, e.desc))
                    }))), d.createElement("div", {
                        className: W("carousel-index")
                    }, d.createElement("span", null, "0", n + 1, " / "), "0", G.length), d.createElement("div", {
                        className: W("carousel_btn_box")
                    }, G.map((function(e, t) {
                        return d.createElement("span", {
                            className: W("carousel_btn", t === n ? "carousel_btn_active" : ""),
                            onClick: function() {
                                return i(t)
                            },
                            key: t
                        })
                    }))))
                },
                V = (0, d.memo)((function() {
                    return d.createElement(d.Fragment, null, d.createElement("div", {
                        className: W("title_wrap")
                    }, d.createElement(w.Z, {
                        theme: "light",
                        title: "\u76ee\u5149\u6240\u53ca\u7684\u6545\u4e8b",
                        subTitle: "\u6e90\u81ea\u4e8e\u706b\u5c71\u5f15\u64ce",
                        reverse: !0,
                        port: "mobile"
                    }), d.createElement(Z.Z, {
                        style: {
                            display: "block"
                        },
                        href: "/content",
                        target: "_blank",
                        color: "#1664FF"
                    }, "\u67e5\u770b\u66f4\u591a")), d.createElement("div", {
                        className: W("carousel")
                    }, d.createElement(z, null)), d.createElement("div", {
                        className: W("marquee")
                    }, d.createElement("div", {
                        className: W("marquee-inner")
                    }, null === Y || void 0 === Y ? void 0 : Y.map((function(e, t) {
                        return d.createElement("div", {
                            key: t,
                            className: W("img_box", "img", t % 2 === 0 ? "old" : "even"),
                            onClick: function() {
                                (0, P.gE)(P.qj.ClickActivity, {
                                    link: e.link,
                                    text: e.title,
                                    target: "_self"
                                }), location.href = e.link
                            }
                        }, d.createElement("div", {
                            className: N()(W("img-" + (t + 1), "marquee-img"))
                        }), d.createElement("p", null, e.title))
                    })))))
                })),
                K = n(59939),
                J = n(62498),
                U = ["children", "theme"],
                Q = 0,
                $ = 0,
                ee = 0,
                te = 0,
                ne = 0,
                ie = function() {
                    var e = (0, d.useRef)(null),
                        t = (0, d.useRef)([]),
                        n = (0, d.useRef)([]),
                        r = (0, d.useRef)({
                            curIndex: 0,
                            wheelMutex: !1
                        }),
                        a = (0, g.I0)(),
                        k = function(t, n) {
                            return new Promise((function(i) {
                                r.current.wheelMutex && i(!1);
                                var o = t > n ? "down" : "up";
                                r.current.wheelMutex = !0, r.current.curIndex = t, a((0, _.o)({
                                    direction: o,
                                    from: n,
                                    to: t,
                                    status: "start"
                                })), e.current.style.transform = "translate3d(0px, " + -100 * r.current.curIndex + "vh, 0px)", setTimeout((function() {
                                    r.current.wheelMutex = !1, a((0, _.o)({
                                        direction: o,
                                        from: n,
                                        to: t,
                                        status: "end"
                                    })), i(!0)
                                }), 700)
                            }))
                        },
                        w = [
                            [{
                                children: d.createElement(b.Z, null),
                                theme: "light",
                                height: "100vh"
                            }],
                            [{
                                children: d.createElement(v.NoSSR, null, d.createElement(E.Z, {
                                    data: h.Z
                                })),
                                theme: "dark"
                            }, {
                                children: d.createElement(v.NoSSR, null, d.createElement(X, null)),
                                theme: "light"
                            }, {
                                children: d.createElement(v.NoSSR, null, d.createElement(V, null)),
                                theme: "dark"
                            }, {
                                children: d.createElement(v.NoSSR, null, d.createElement(D, null)),
                                theme: "light"
                            }, {
                                children: d.createElement(v.NoSSR, null, d.createElement(p.b, null, d.createElement(m.Z, null))),
                                theme: "light",
                                style: {
                                    marginBottom: "60px"
                                }
                            }]
                        ],
                        y = (0, d.useRef)({
                            offsetTopArr: [],
                            screenInitHeightArr: [],
                            csIndex: 0,
                            curBottomIndex: 0
                        }),
                        N = (0, d.useRef)(null),
                        S = (0, d.useRef)([]);
                    return (0, d.useEffect)((function() {
                        var i, a, d = new x.x(n.current, ["\u9996\u9875banner", "\u4ea7\u54c1", "\u89e3\u51b3\u65b9\u6848", "\u706b\u5c71\u5f15\u64ce\u6545\u4e8b", "\u751f\u6001", "\u5e95\u90e8\u5bfc\u822a"], 52, !0, 600);
                        window.onbeforeunload = function() {
                            d.beforeunload()
                        }, window.addEventListener("scroll", l()((function() {
                            d.checkStatus()
                        }), 200));
                        document.onreadystatechange = function() {
                            i = S.current.map((function(e) {
                                return (null === e || void 0 === e ? void 0 : e.offsetHeight) || 0
                            })), y.current.screenInitHeightArr = i, a = h(i), y.current.offsetTopArr = a
                        };
                        var m = function(e) {
                                if ((0, u.TY)(e)) {
                                    var t = (0, u.d5)(e);
                                    Q = t.y, ee = t.x
                                }
                            },
                            p = function(e) {
                                var n = r.current,
                                    i = n.curIndex;
                                if (!n.wheelMutex) {
                                    if ((0, u.TY)(e)) {
                                        var o = (0, u.d5)(e);
                                        if ($ = o.y, te = o.x, Math.abs(ee - te) > Math.abs(Q - $)) return;
                                        Math.abs(Q - $) > window.innerHeight / 100 * 5 && (Q > $ ? i < t.current.length - 1 && (N.current.classList.add("content-hidden"), k(i + 1, i), "dark" === w[i + 1][0].theme ? (N.current.classList.remove("appbar-light-b"), N.current.classList.replace("appbar-light", "appbar-dark")) : N.current.classList.replace("appbar-dark", "appbar-light")) : $ > Q && i > 0 && (i - 1 !== 0 && ("dark" === w[i - 1][0].theme ? (N.current.classList.remove("appbar-light-b"), N.current.classList.replace("appbar-light", "appbar-dark")) : N.current.classList.replace("appbar-dark", "appbar-light")), N.current.classList.remove("content-hidden"), k(i - 1, i)))
                                    }
                                    d.checkStatus()
                                }
                            },
                            _ = function() {
                                var e = (0, o.Z)(c().mark((function e(n) {
                                    var i, o, l;
                                    return c().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (i = r.current, o = i.wheelMutex, l = i.curIndex, !(o || l < 0 || l > t.current.length - 1)) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 3:
                                                if (!(n.wheelDeltaY < 0 && l < t.current.length - 1)) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return e.next = 6, k(l + 1, l);
                                            case 6:
                                                e.next = 11;
                                                break;
                                            case 8:
                                                if (!(n.wheelDeltaY > 0 && l > 0)) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.next = 11, k(l - 1, l);
                                            case 11:
                                                d.checkStatus();
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            g = l()((function() {
                                var e = t.current[1].scrollTop;
                                ! function(e) {
                                    ne >= 0 && ne - e > 1 && N.current.classList.remove("content-hidden"), ne >= 0 && ne - e < -1 && N.current.classList.add("content-hidden")
                                }(e), ne = e, d.checkStatus()
                            }), 500, {
                                trailing: !0
                            }),
                            v = function(e) {
                                for (var n = y.current.offsetTopArr, i = void 0 === n ? [] : n, o = t.current[1].scrollTop, r = null !== e && void 0 !== e ? e : 0; r < i.length - 1 && !(o <= i[r + 1]); r++);
                                return r
                            },
                            h = function(e) {
                                var t = [0],
                                    n = 0;
                                return e.forEach((function(e) {
                                    n += e, t.push(n)
                                })), t
                            },
                            f = l()((function() {
                                0 === t.current[1].scrollTop ? r.current.wheelMutex = !1 : r.current.wheelMutex = !0;
                                var e = y.current.csIndex,
                                    n = v();
                                n !== e && n < w[1].length && (y.current.csIndex = n, "dark" === w[1][n].theme ? N.current.classList.replace("appbar-light", "appbar-dark") : N.current.classList.replace("appbar-dark", "appbar-light")), d.checkStatus()
                            }), 1e3 / 60),
                            b = l()(_, 1e3, {
                                trailing: !1
                            }),
                            E = (0, u.mE)(),
                            T = E.touchstart,
                            C = E.touchmove;
                        return N.current = document.getElementById("appbar-wrap"), y.current.screenInitHeightArr = i, y.current.offsetTopArr = a, window.innerWidth <= 600 && (t.current[1].addEventListener("scroll", f), t.current[1].addEventListener("scroll", g), (0, s.b1)() || (0, u.T)() ? (e.current.addEventListener(T, m, {
                                passive: !0
                            }), e.current.addEventListener(C, p, {
                                passive: !0
                            }), e.current.addEventListener("touchend", (function() {
                                setTimeout((function() {
                                    d.checkStatus(1500)
                                }), 1500)
                            }), {
                                passive: !0
                            })) : e.current.addEventListener("wheel", b, {
                                passive: !0
                            })),
                            function() {
                                t.current[1].removeEventListener("scroll", f), t.current[1].removeEventListener("scroll", g), e.current.removeEventListener("wheel", b), e.current.removeEventListener(T, m), e.current.removeEventListener(C, p)
                            }
                    }), []), d.createElement("div", {
                        className: J.Z.screensContainer
                    }, d.createElement("div", {
                        ref: e,
                        className: J.Z.screensWrapper
                    }, w.map((function(e, o) {
                        return d.createElement("div", {
                            ref: function(e) {
                                return t.current[o] = e
                            },
                            id: "screen-" + o,
                            key: o,
                            className: J.Z.fixedScreenWrapper
                        }, e.map((function(e, t) {
                            var r = e.children,
                                l = e.theme,
                                a = (0, i.Z)(e, U);
                            return d.createElement(f.Z, Object.assign({
                                key: t
                            }, a, {
                                id: "screen-" + o + "-" + t,
                                ref: function(e) {
                                    !n.current.includes(e) && n.current.push(e), 1 === o && (S.current[t] = e)
                                },
                                theme: l,
                                themeBackground: !0
                            }), r)
                        })))
                    }))), d.createElement(K.Z, null))
                }
        },
        67763: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return Ce
                }
            });
            var i = n(33028),
                o = n(59740),
                r = n(2867),
                l = n(2784),
                a = n(63037),
                c = n(58486),
                d = n(13768),
                u = n(39536),
                s = n(2183),
                m = n.n(s),
                p = (n(29844), n(62498)),
                _ = n(6974),
                g = n(88698),
                v = {
                    productCard: "index-module__productCard--WjdUI",
                    bgMove: "index-module__bgMove--iiZ1M",
                    inline: "index-module__inline--F4LD1",
                    mobile: "index-module__mobile--Kmeag",
                    productContainer: "index-module__productContainer--ajMYe",
                    badgeContainer: "index-module__badgeContainer--a7yr9",
                    productBadge: "index-module__productBadge--wtPV7",
                    productTag: "index-module__productTag--tQ3gw",
                    hoverMore: "index-module__hoverMore--zhqGe",
                    moreSpan: "index-module__moreSpan--SdIoi"
                },
                h = (n(81452), m().bind(v)),
                x = {
                    columnGap: "32px",
                    rowGap: "32px",
                    badgeColorMap: {
                        NEW: {
                            r: 12,
                            g: 204,
                            b: 202
                        },
                        HOT: {
                            r: 255,
                            g: 102,
                            b: 102
                        }
                    },
                    columnNum: 5,
                    rowNum: 5,
                    badges: [],
                    tags: [],
                    background: {
                        cottonCandies: [],
                        imgs: []
                    }
                },
                f = (0, l.memo)((function(e) {
                    var t, n = e.isTopBadge,
                        i = void 0 !== n && n,
                        o = e.badges,
                        r = e.name,
                        a = e.h1Style,
                        c = e.desc,
                        d = e.h2Style,
                        u = e.tags,
                        s = e.tagStyle,
                        m = e.badgeColorMap,
                        g = e.moreHoverEffect,
                        f = e.isMoreMoving;
                    return l.createElement(l.Fragment, null, l.createElement("h1", {
                        title: r,
                        className: p.Z.oneLineEllipsis + " " + h("inline"),
                        style: null !== a && void 0 !== a ? a : {}
                    }, l.createElement("div", {
                        className: h("badgeContainer", !i && "inline")
                    }, (null !== o && void 0 !== o ? o : x.badges).map((function(e) {
                        return l.createElement(b, {
                            key: e,
                            badge: e,
                            badgeColorMap: m
                        })
                    }))), r), l.createElement("h2", {
                        title: c,
                        className: h((t = {}, t[p.Z.oneLineEllipsis] = !i, t)),
                        style: d
                    }, c), (null !== u && void 0 !== u ? u : x.tags).map((function(e) {
                        return l.createElement(E, {
                            key: e,
                            tag: e,
                            style: s
                        })
                    })), g && i && l.createElement("div", {
                        className: v.hoverMore
                    }, l.createElement(_.Z, {
                        text: "",
                        className: v.moreSpan,
                        color: "#fff",
                        isMoving: f
                    })))
                })),
                b = (0, l.memo)((function(e) {
                    var t = e.badge,
                        n = e.badgeColorMap,
                        i = (null !== n && void 0 !== n ? n : x.badgeColorMap)[t],
                        o = i.r,
                        r = i.g,
                        a = i.b;
                    return l.createElement("div", {
                        className: v.productBadge,
                        style: {
                            color: "rgb(" + o + "," + r + "," + a + ")",
                            backgroundColor: "rgba(" + o + "," + r + "," + a + ",.1)"
                        }
                    }, l.createElement("span", null, t))
                })),
                E = (0, l.memo)((function(e) {
                    var t = e.tag,
                        n = e.style;
                    return l.createElement("div", {
                        className: v.productTag
                    }, l.createElement("span", {
                        style: n
                    }, t))
                })),
                k = n(72779),
                w = n.n(k),
                y = {
                    "data-aos": "fade-up",
                    "data-aos-duration": "300",
                    "data-aos-delay": "0"
                },
                N = function(e) {
                    var t, n = e.gridAreas,
                        o = e.columnNum,
                        a = e.rowNum,
                        c = e.columnGap,
                        d = e.rowGap,
                        u = e.childenData,
                        s = e.bgData,
                        m = e.clickData,
                        p = e.onClickGrid,
                        _ = e.genChild,
                        g = e.containerClassName,
                        v = e.gridClassName,
                        h = e.containerStyle,
                        x = e.gridStyle,
                        f = e.genGridStyle,
                        b = e.width,
                        E = e.maxWidth,
                        k = e.height,
                        N = e.aosSetting,
                        S = e.children;
                    if (n.length > o * a) throw new Error("gridAreas:\u8d85\u51fa\u6805\u683c\u6700\u5927\u4e2a\u6570(" + o * a + ")");
                    if (void 0 !== u && n.length !== u.length) throw new Error("gridAreas(" + n.length + "):\u548cchildenData\u4e2a\u6570(" + u.length + ")\u4e0d\u5339\u914d");
                    if (void 0 !== s && n.length !== s.length) throw new Error("gridAreas(" + n.length + "):\u548cbgData\u4e2a\u6570(" + s.length + ")\u4e0d\u5339\u914d");
                    if (void 0 === u && (void 0 !== _ || void 0 !== f)) throw new Error("\u4f7f\u7528genChild\u6216genGridStyle\u5fc5\u987b\u4f20childenData");
                    var T = (0, l.useState)(void 0),
                        C = (0, r.Z)(T, 2),
                        I = C[0],
                        Z = C[1],
                        L = function() {
                            Z(void 0)
                        };
                    return l.createElement("div", Object.assign({
                        className: w()("volc-engine-gridContainer", g),
                        style: (0, i.Z)({
                            gridTemplateColumns: "repeat(" + (null !== o && void 0 !== o ? o : 5) + ", 1fr)",
                            columnGap: null !== c && void 0 !== c ? c : "32px",
                            gridTemplateRows: "repeat(" + (null !== a && void 0 !== a ? a : 5) + ", 1fr)",
                            rowGap: null !== d && void 0 !== d ? d : "32px",
                            width: b,
                            maxWidth: E,
                            height: k
                        }, null !== h && void 0 !== h ? h : {})
                    }, "container" === (null === N || void 0 === N ? void 0 : N.effectOn) ? null !== (t = null === N || void 0 === N ? void 0 : N.setting) && void 0 !== t ? t : y : {}), n.map((function(e, t) {
                        var n, o, r, a, c, d, g, h, b = (0, i.Z)({
                            gridArea: e
                        }, null !== (n = null !== (o = null === f || void 0 === f ? void 0 : f(null === u || void 0 === u ? void 0 : u[t])) && void 0 !== o ? o : x) && void 0 !== n ? n : {});
                        null !== s && void 0 !== s && null !== (r = s[t]) && void 0 !== r && r.img && (b.backgroundImage = null === s || void 0 === s || null === (h = s[t]) || void 0 === h ? void 0 : h.img);
                        var E = I === t,
                            k = void 0 !== (null === m || void 0 === m ? void 0 : m[t].href);
                        return l.createElement("div", Object.assign({
                            onClick: function() {
                                null === p || void 0 === p || p(null === u || void 0 === u ? void 0 : u[t], {
                                    hover: E,
                                    click: !0,
                                    index: t
                                }), !p && k && window.open(null === m || void 0 === m ? void 0 : m[t].href, null === m || void 0 === m ? void 0 : m[t].target)
                            },
                            key: t,
                            className: w()("volc-engine-gridItem", v),
                            onMouseEnter: function() {
                                return function(e) {
                                    Z(e)
                                }(t)
                            },
                            onMouseLeave: L,
                            style: b
                        }, "item" === (null === N || void 0 === N ? void 0 : N.effectOn) ? null !== (a = null === N || void 0 === N ? void 0 : N.setting) && void 0 !== a ? a : y : {}), l.createElement(l.Fragment, null, l.createElement("div", {
                            className: "volc-engine-gridContent",
                            style: {
                                cursor: k ? "pointer" : "inherit"
                            }
                        }, null !== (c = null === _ || void 0 === _ ? void 0 : _(null === u || void 0 === u ? void 0 : u[t], {
                            hover: E,
                            click: !0,
                            index: t
                        })) && void 0 !== c ? c : S), null === s || void 0 === s || null === (d = s[t]) || void 0 === d || null === (g = d.imgs) || void 0 === g ? void 0 : g.map((function(e, t) {
                            var n = e.width,
                                o = e.height,
                                r = e.top,
                                a = e.left,
                                c = e.url,
                                d = e.style;
                            return l.createElement("img", {
                                loading: "lazy",
                                src: c,
                                key: t,
                                className: "volc-engine-imgBG",
                                style: (0, i.Z)({
                                    top: r,
                                    left: a,
                                    width: n,
                                    height: o,
                                    backgroundImage: "url('" + c + "')"
                                }, null !== d && void 0 !== d ? d : {})
                            })
                        }))))
                    })))
                },
                S = n(56917),
                T = ["children", "active", "videoRef", "backupImage", "onActiveChange"],
                C = (0, l.memo)((function(e) {
                    var t = e.children,
                        n = e.active,
                        i = e.videoRef,
                        r = e.backupImage,
                        a = e.onActiveChange,
                        c = (0, o.Z)(e, T);
                    return (0, l.useEffect)((function() {
                        null === a || void 0 === a || a(n);
                        var e = null === i || void 0 === i ? void 0 : i.current;
                        e && (n ? e.play().catch((function() {})) : (e.currentTime = 0, e.pause()))
                    }), [n]), n ? l.createElement("video", Object.assign({
                        ref: function(e) {
                            i && (i.current = e)
                        }
                    }, c), t) : r || null
                })),
                I = {
                    cateContainer: "index-module__cateContainer--xwyUR",
                    cate_line: "index-module__cate_line--Gav1x",
                    cateLine: "index-module__cate_line--Gav1x",
                    cateBox: "index-module__cateBox--qEiIJ",
                    cateIcon: "index-module__cateIcon--mWZdx",
                    cateVideo: "index-module__cateVideo--APoK0",
                    line: "index-module__line--kvkGV",
                    see_all_product: "index-module__see_all_product--Bk1dJ",
                    seeAllProduct: "index-module__see_all_product--Bk1dJ",
                    "data-poster": "index-module__data-poster--ramZl",
                    dataPoster: "index-module__data-poster--ramZl",
                    "app-poster": "index-module__app-poster--qZ2B1",
                    appPoster: "index-module__app-poster--qZ2B1",
                    "cloud-poster": "index-module__cloud-poster--IgXv2",
                    cloudPoster: "index-module__cloud-poster--IgXv2",
                    "devops-poster": "index-module__devops-poster--Q6Um0",
                    devopsPoster: "index-module__devops-poster--Q6Um0",
                    "video-poster": "index-module__video-poster--jxWou",
                    videoPoster: "index-module__video-poster--jxWou",
                    "hot-poster": "index-module__hot-poster--eUoYa",
                    hotPoster: "index-module__hot-poster--eUoYa"
                },
                Z = ["width", "height"],
                L = m().bind(I),
                B = (0, l.memo)((function(e) {
                    var t = e.index,
                        n = e.onClick,
                        a = e.activeIndex,
                        c = e.main,
                        d = e.videoStyle,
                        u = void 0 === d ? {} : d,
                        s = e.video,
                        m = e.iconClass,
                        p = a === t,
                        _ = (0, l.useRef)(),
                        g = (0, l.useState)(!1),
                        v = (0, r.Z)(g, 2),
                        h = v[0],
                        x = v[1],
                        f = (u.width, u.height, (0, o.Z)(u, Z)),
                        b = h || p;
                    return l.createElement("div", {
                        key: c,
                        className: w()(I.cateBox, {
                            active: p
                        }),
                        onMouseEnter: function() {
                            x(!0)
                        },
                        onMouseLeave: function() {
                            x(!1)
                        },
                        onClick: function() {
                            return n(t)
                        }
                    }, l.createElement("div", {
                        className: I.cateVideo
                    }, l.createElement(C, {
                        style: (0, i.Z)((0, i.Z)({}, u), {}, {
                            display: b ? "block" : "none"
                        }),
                        active: b,
                        videoRef: _,
                        backupImage: l.createElement("div", {
                            className: w()(I.cateIcon, L("" + m)),
                            style: (0, i.Z)((0, i.Z)({}, f), {}, {
                                display: b ? "none" : "block"
                            })
                        }),
                        muted: !0,
                        loop: !0,
                        disablePictureInPicture: !0,
                        controlsList: "nodownload"
                    }, l.createElement("source", {
                        src: s + ".mp4",
                        type: "video/mp4"
                    }))), l.createElement("span", null, c))
                })),
                A = (0, l.memo)((function(e) {
                    var t, n, i = e.onClick,
                        o = e.currentIndex,
                        r = (0, l.useRef)([]),
                        a = (0, l.useRef)([]);
                    return (0, l.useEffect)((function() {
                        var e, t;
                        null === (e = r.current) || void 0 === e || null === (t = e.forEach) || void 0 === t || t.call(e, (function(e, t) {
                            a.current[t] = {
                                width: e.offsetWidth,
                                left: e.offsetLeft
                            }
                        }))
                    }), []), l.createElement("div", {
                        className: I.cateContainer
                    }, l.createElement("div", {
                        className: I.cate_line,
                        style: {
                            transform: "translateX(" + (null === (t = a.current[o]) || void 0 === t ? void 0 : t.left) + "px)",
                            width: (null === (n = a.current[o]) || void 0 === n ? void 0 : n.width) + "px"
                        }
                    }), g.Z.product.map((function(e, t) {
                        return l.createElement("div", {
                            key: e.main,
                            ref: function(e) {
                                return r.current[t] = e
                            }
                        }, l.createElement(B, Object.assign({
                            index: t,
                            activeIndex: o
                        }, e, {
                            onClick: i
                        })))
                    })))
                })),
                D = (0, l.memo)((function(e) {
                    var t, n = e.data,
                        i = (0, l.useState)(0),
                        o = (0, r.Z)(i, 2),
                        a = o[0],
                        c = o[1],
                        s = (0, l.useCallback)((function(e) {
                            (0, d.gE)(d.qj.ClickProductGuide, {
                                theme: n.product[e].main
                            }), c(e)
                        }), []),
                        m = (0, l.useCallback)((function(e, t) {
                            var i = t.index;
                            (0, d.gE)(d.qj.ClickProduct, {
                                theme: n.product[a].main,
                                link: n.product[a].products[i].link,
                                text: n.product[a].products[i].name,
                                target: "_blank"
                            }), window.open(n.product[a].products[i].link, "_blank")
                        }), [a]),
                        p = (0, l.useMemo)((function() {
                            return {
                                entName: d.qj.ClickProduct,
                                entData: {
                                    theme: "\u67e5\u770b\u5168\u90e8\u4ea7\u54c1",
                                    link: n.product[a].moreLink,
                                    text: "",
                                    target: "_blank"
                                }
                            }
                        }), [a]);
                    return l.createElement(l.Fragment, null, l.createElement(u.Z, {
                        style: {
                            marginTop: "80px",
                            marginBottom: "16px"
                        },
                        title: "\u5f3a\u5927\u3001\u5b89\u5168\u3001\u7a33\u5b9a\u7684\u4ea7\u54c1\u53ca\u670d\u52a1"
                    }), l.createElement("div", null, l.createElement("p", {
                        style: {
                            fontSize: "16px",
                            lineHeight: "22px",
                            fontWeight: 500,
                            textAlign: "center",
                            marginBottom: "42px"
                        }
                    }, l.createElement(S.Z, {
                        hoverMoreClassName: I.see_all_product,
                        href: null !== (t = n.product[a].moreLink) && void 0 !== t ? t : "/product/list",
                        target: "_blank",
                        reportTea: p
                    }, "\u67e5\u770b\u5168\u90e8\u4ea7\u54c1"))), l.createElement(A, {
                        onClick: s,
                        currentIndex: a
                    }), l.createElement("div", {
                        className: I.line
                    }), l.createElement(N, Object.assign({
                        childenData: n.product[a].products
                    }, n.product[a].grid, {
                        bgData: n.product[a].products.map((function(e) {
                            return e.background
                        })),
                        onClickGrid: m,
                        containerClassName: v.productContainer,
                        gridClassName: v.productCard,
                        genChild: function(e, t) {
                            var i = t.index,
                                o = t.hover;
                            return l.createElement(f, Object.assign({}, e, {
                                badgeColorMap: n.badgeColorMap,
                                moreHoverEffect: 0 === i,
                                isMoreMoving: o
                            }))
                        }
                    })))
                })),
                M = n(81592),
                O = n(35513),
                j = n(96813),
                H = "index-module__itemBox--vmmvo",
                X = "index-module__item--oGL98",
                R = "index-module__content--YCuWa",
                F = "index-module__icon_box--vbyDj",
                P = "index-module__icon_no_hover--Bsyqi",
                q = "index-module__icon_yes_hover--QEilx",
                W = "index-module__text_title--t02wG",
                G = "index-module__text_description--bNBxg",
                Y = "index-module__text_link--pr3b7",
                z = "index-module__item_last--nCLMw",
                V = (0, l.memo)((function(e) {
                    var t = e.icon,
                        n = e.iconHover,
                        i = e.title,
                        o = e.description,
                        r = e.link;
                    return o ? l.createElement("div", {
                        className: X
                    }, l.createElement(M.rU, {
                        href: r,
                        target: "_blank",
                        onClick: function() {
                            (0, O.gE)(O.qj.ClickSolution, {
                                link: r,
                                text: i,
                                target: "_blank"
                            })
                        }
                    }, l.createElement("div", {
                        className: R
                    }, l.createElement("div", {
                        className: F
                    }, l.createElement(M.JO, {
                        className: P,
                        name: t,
                        width: "60px",
                        height: "60px",
                        color: "textPrimary-reverse"
                    }), n && l.createElement(M.JO, {
                        className: q,
                        name: n,
                        width: "60px",
                        height: "60px",
                        color: "textPrimary-reverse"
                    })), l.createElement("h3", {
                        className: W
                    }, i), l.createElement("span", {
                        className: G
                    }, o)), l.createElement("div", {
                        className: Y
                    }, l.createElement(_.Z, {
                        text: "\u4e86\u89e3\u66f4\u591a"
                    })))) : l.createElement("div", {
                        className: z
                    }, l.createElement(M.JO, {
                        name: t,
                        width: "60px",
                        height: "60px",
                        color: "textPrimary-reverse"
                    }), l.createElement("h2", null, i))
                })),
                K = (0, l.memo)((function() {
                    var e;
                    return l.createElement(l.Fragment, null, l.createElement(u.Z, {
                        style: {
                            padding: "80px 0"
                        },
                        title: j.h.title.title,
                        subTitle: j.h.title.subTitle,
                        reverse: j.h.title.reverse,
                        theme: "dark",
                        "data-aos": "fade-up",
                        "data-aos-duration": "300",
                        "data-aos-delay": "0"
                    }), l.createElement("div", {
                        className: H,
                        "data-aos": "fade-up",
                        "data-aos-duration": "300",
                        "data-aos-delay": "0"
                    }, null === (e = j.h.solutionListData) || void 0 === e ? void 0 : e.map((function(e, t) {
                        return l.createElement(V, Object.assign({}, e, {
                            key: t
                        }))
                    }))))
                })),
                J = n(26048),
                U = n(86249),
                Q = {
                    paper: "index-module__paper--grv7R",
                    header: "index-module__header--k2j0v",
                    "header-small": "index-module__header-small--wYM_3",
                    headerSmall: "index-module__header-small--wYM_3",
                    "header-big": "index-module__header-big--mymGr",
                    headerBig: "index-module__header-big--mymGr",
                    "header-more": "index-module__header-more--app4j",
                    headerMore: "index-module__header-more--app4j",
                    section: "index-module__section--CPc3d",
                    "section-top": "index-module__section-top--Si8VK",
                    sectionTop: "index-module__section-top--Si8VK",
                    carousel: "index-module__carousel--vQLeY",
                    "link-box-wrap": "index-module__link-box-wrap--gmdqH",
                    linkBoxWrap: "index-module__link-box-wrap--gmdqH",
                    "link-box": "index-module__link-box--sqGJd",
                    linkBox: "index-module__link-box--sqGJd",
                    "link-title": "index-module__link-title--XFkq6",
                    linkTitle: "index-module__link-title--XFkq6",
                    "link-desc": "index-module__link-desc--piOAI",
                    linkDesc: "index-module__link-desc--piOAI",
                    "link-more": "index-module__link-more--ldxX6",
                    linkMore: "index-module__link-more--ldxX6",
                    "carousel-index": "index-module__carousel-index--gBEMm",
                    carouselIndex: "index-module__carousel-index--gBEMm",
                    "carousel-item": "index-module__carousel-item--XvzMO",
                    carouselItem: "index-module__carousel-item--XvzMO",
                    "carousel-title": "index-module__carousel-title--jM5Ex",
                    carouselTitle: "index-module__carousel-title--jM5Ex",
                    "carousel-desc": "index-module__carousel-desc--k4up3",
                    carouselDesc: "index-module__carousel-desc--k4up3",
                    "carousel-more": "index-module__carousel-more--Gpg5e",
                    carouselMore: "index-module__carousel-more--Gpg5e",
                    "marquee-box": "index-module__marquee-box--oYz4e",
                    marqueeBox: "index-module__marquee-box--oYz4e",
                    "marquee-list": "index-module__marquee-list--RmG4z",
                    marqueeList: "index-module__marquee-list--RmG4z",
                    "marquee-item": "index-module__marquee-item--yWURv",
                    marqueeItem: "index-module__marquee-item--yWURv",
                    odd: "index-module__odd--hJE3h",
                    even: "index-module__even--DY9_M",
                    desc_text: "index-module__desc_text--QlGOr",
                    descText: "index-module__desc_text--QlGOr",
                    "marquee-title": "index-module__marquee-title--PGdS3",
                    marqueeTitle: "index-module__marquee-title--PGdS3",
                    marquee_img_box: "index-module__marquee_img_box--GocK_",
                    marqueeImgBox: "index-module__marquee_img_box--GocK_",
                    growth_see_more: "index-module__growth_see_more--YQ0nQ",
                    growthSeeMore: "index-module__growth_see_more--YQ0nQ",
                    "img-1": "index-module__img-1--SJCyN",
                    img1: "index-module__img-1--SJCyN",
                    "img-2": "index-module__img-2--MyzZD",
                    img2: "index-module__img-2--MyzZD",
                    "img-3": "index-module__img-3--g7ohu",
                    img3: "index-module__img-3--g7ohu",
                    "img-4": "index-module__img-4--ZmNju",
                    img4: "index-module__img-4--ZmNju",
                    "img-5": "index-module__img-5--OtrYF",
                    img5: "index-module__img-5--OtrYF",
                    "banner-1": "index-module__banner-1--kbR_h",
                    banner1: "index-module__banner-1--kbR_h",
                    "banner-2": "index-module__banner-2--h7biX",
                    banner2: "index-module__banner-2--h7biX",
                    "banner-3": "index-module__banner-3--cVH67",
                    banner3: "index-module__banner-3--cVH67"
                },
                $ = m().bind(Q),
                ee = [{
                    title_icon: {
                        icon: "icon_growth_1"
                    },
                    img: U.X + "/growth-lab/growth-lab-1.jpg",
                    title: "\u706b\u5c71\u5f15\u64ce\u8363\u83b7DNV\u4e94\u9879ISO\u8ba4\u8bc1",
                    desc: "\u4ea7\u54c1\u53ca\u670d\u52a1\u5df2\u7b26\u5408\u56fd\u9645\u6807\u51c6",
                    link: "https://www.volcengine.com/docs/6359/75112"
                }, {
                    title_icon: {
                        icon: "icon_growth_2"
                    },
                    img: U.X + "/growth-lab/growth-lab-2.jpg",
                    title: "\u706b\u5c71\u5f15\u64ce\u52a0\u5165\u4e91\u539f\u751f\u57fa\u91d1\u4f1a",
                    desc: "\u6b63\u5f0f\u6210\u4e3a CNCF \u767d\u91d1\u4f1a\u5458",
                    link: "https://www.volcengine.com/docs/6359/66696"
                }, {
                    title_icon: {
                        icon: "icon_growth_3"
                    },
                    img: U.X + "/growth-lab/growth-lab-3.jpg",
                    title: "\u524d\u4e24\u5929\uff0c\u706b\u5c71\u5f15\u64ce\u62ff\u4e86\u4e24\u4e2a\u5956",
                    desc: "\u5e2e\u52a9\u96f6\u552e\u9886\u57df\u5ba2\u6237\u4ef7\u503c\u6700\u5927\u5316",
                    link: "https://www.volcengine.com/docs/6359/68707"
                }],
                te = [{
                    img: U.X + "/growth-lab/11-min.png",
                    title: "\u53ef\u4fe1\u4e91\u5bb9\u5668\u89e3\u51b3\u65b9\u6848\u8ba4\u8bc1",
                    link: "https://www.volcengine.com/docs/6359/74982"
                }, {
                    img: U.X + "/growth-lab/22-min.png",
                    title: "\u4e13\u9879\u6d4b\u8bc4\u8bc1\u4e66",
                    link: "https://www.volcengine.com/docs/6359/75115"
                }, {
                    img: U.X + "/growth-lab/33-min.png",
                    title: "LiveVideoStackCon",
                    link: "https://www.volcengine.com/docs/6359/68796"
                }, {
                    img: U.X + "/growth-lab/44-min.png",
                    title: "ACL\u6700\u4f73\u8bba\u6587\u6842\u51a0",
                    link: "https://www.volcengine.com/docs/6359/75171"
                }, {
                    img: U.X + "/growth-lab/55-min.png",
                    title: "2020\u521b\u65b0\u8d21\u732e\u5956",
                    link: "https://www.volcengine.com/docs/6359/68708"
                }],
                ne = function() {
                    return l.createElement("div", {
                        className: $("header"),
                        "data-aos": "fade-up",
                        "data-aos-duration": "300",
                        "data-aos-delay": "0"
                    }, l.createElement(u.Z, {
                        theme: "light",
                        subTitle: "\u76ee\u5149\u6240\u53ca\u7684\u6545\u4e8b",
                        title: "\u6e90\u81ea\u4e8e\u706b\u5c71\u5f15\u64ce",
                        reverse: !0
                    }), l.createElement(S.Z, {
                        hoverMoreClassName: $("growth_see_more"),
                        style: {
                            marginTop: "16px"
                        },
                        href: "/content",
                        target: "_blank",
                        reportTea: {
                            entName: d.qj.ClickActivity
                        }
                    }, "\u67e5\u770b\u66f4\u591a"))
                },
                ie = function() {
                    return l.createElement("div", {
                        className: $("link-box-wrap")
                    }, l.createElement("div", {
                        className: $("link-box")
                    }, l.createElement("div", {
                        className: $("link-title")
                    }, "\u706b\u5c71\u52a8\u5411"), l.createElement("div", {
                        className: $("link-desc")
                    }, "\u706b\u5c71\u5f15\u64ce\u5386\u6765\u53ca\u53d1\u5c55\u6700\u65b0\u8baf\u606f"), l.createElement(S.Z, {
                        href: "/content",
                        target: "_blank",
                        color: "#181818",
                        reportTea: {
                            entName: d.qj.ClickActivity
                        }
                    }, "\u67e5\u770b\u66f4\u591a")))
                },
                oe = (0, l.memo)((function(e) {
                    var t, n = e.title,
                        i = e.title_icon,
                        o = e.desc,
                        r = e.link,
                        a = e.style,
                        c = e.className,
                        u = void 0 === c ? "" : c,
                        s = e.index;
                    return l.createElement("div", {
                        onClick: function() {
                            (0, d.gE)(d.qj.ClickActivity, {
                                link: r,
                                text: "\u4e86\u89e3\u66f4\u591a",
                                target: "_blank"
                            }), window.open(r, "_blank")
                        },
                        style: a,
                        className: w()($("carousel-item", "banner-" + (s + 1)), (t = {}, t[u] = Boolean(u), t))
                    }, l.createElement(M.JO, {
                        name: i.icon,
                        width: "120px",
                        height: "52px",
                        style: {
                            marginBottom: "24px"
                        }
                    }), l.createElement("div", {
                        className: $("carousel-title")
                    }, n), l.createElement("div", {
                        className: $("carousel-desc")
                    }, o), l.createElement("div", {
                        className: $("carousel-more")
                    }, l.createElement(S.Z, {
                        color: "#fff",
                        hoverMoreClassName: $("growth_see_more")
                    }, "\u4e86\u89e3\u66f4\u591a")))
                })),
                re = function() {
                    var e = (0, l.useState)(0),
                        t = (0, r.Z)(e, 2),
                        n = t[0],
                        i = t[1],
                        o = (0, l.useRef)(null),
                        a = (0, l.useState)(!1),
                        c = (0, r.Z)(a, 2),
                        d = c[0],
                        u = c[1];
                    return (0, l.useEffect)((function() {
                        o.current && new IntersectionObserver((function(e) {
                            e[0].isIntersecting ? u(!0) : u(!1)
                        }), {
                            rootMargin: "0px 60px"
                        }).observe(o.current)
                    }), []), l.createElement("div", {
                        className: $("carousel"),
                        ref: o
                    }, l.createElement(J.Z, {
                        animation: "fade",
                        onChange: i,
                        showArrow: "never",
                        autoPlay: d,
                        moveSpeed: 1e3,
                        indicatorType: "line",
                        style: {
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        }
                    }, ee.map((function(e, t) {
                        return l.createElement(oe, Object.assign({}, e, {
                            index: t,
                            key: t
                        }))
                    }))), l.createElement("div", {
                        className: $("carousel-index")
                    }, l.createElement("span", null, "0", n + 1, " / "), "0", ee.length))
                },
                le = function() {
                    return l.createElement("div", {
                        className: $("marquee-box")
                    }, l.createElement("div", {
                        className: $("marquee-list")
                    }, te.map((function(e, t) {
                        return l.createElement("div", {
                            onClick: function() {
                                (0, d.gE)(d.qj.ClickActivity, {
                                    link: e.link,
                                    text: e.title,
                                    target: "_blank"
                                }), window.open(e.link, "_blank")
                            },
                            className: $("marquee-item", t % 2 === 0 ? "odd" : "even"),
                            key: e.title
                        }, l.createElement("div", {
                            className: $("marquee-title")
                        }, l.createElement("div", {
                            className: w()(Q.marquee_img_box, $("img-" + (t + 1)))
                        }), l.createElement("span", {
                            className: $("desc_text")
                        }, e.title)))
                    }))))
                },
                ae = (0, l.memo)((function() {
                    return l.createElement("div", {
                        className: $("paper")
                    }, l.createElement(ne, null), l.createElement("div", {
                        className: $("section"),
                        "data-aos": "fade-up",
                        "data-aos-duration": "300",
                        "data-aos-delay": "0"
                    }, l.createElement("div", {
                        className: $("section-top")
                    }, l.createElement(re, null), l.createElement(ie, null)), l.createElement(le, null)))
                })),
                ce = n(6241),
                de = {
                    content: "index-module__content--YeNG7",
                    content_right: "index-module__content_right--oTlNc",
                    contentRight: "index-module__content_right--oTlNc",
                    video_text_start: "index-module__video_text_start--MxrlO",
                    videoTextStart: "index-module__video_text_start--MxrlO",
                    title_img: "index-module__title_img--GHWfg",
                    titleImg: "index-module__title_img--GHWfg",
                    play_none: "index-module__play_none--Y_l9Y",
                    playNone: "index-module__play_none--Y_l9Y",
                    "coop-left": "index-module__coop-left--mpsEF",
                    coopLeft: "index-module__coop-left--mpsEF",
                    "coop-right": "index-module__coop-right--dU59_",
                    coopRight: "index-module__coop-right--dU59_"
                },
                ue = m().bind(de),
                se = function(e) {
                    var t = e.coverTextData;
                    return l.createElement(l.Fragment, null, (null === t || void 0 === t ? void 0 : t.img) && l.createElement(M.JO, {
                        name: t.img,
                        width: "130px",
                        height: "26px"
                    }), (null === t || void 0 === t ? void 0 : t.text) && l.createElement("h3", {
                        style: {
                            fontSize: "30px",
                            color: "#1664FF",
                            fontWeight: 600,
                            margin: 0
                        }
                    }, t.text))
                },
                me = (0, l.memo)((function(e) {
                    var t = e.videoData,
                        n = e.active,
                        i = e.index,
                        o = e.setActiveIndex,
                        a = (0, l.useState)(!1),
                        c = (0, r.Z)(a, 2),
                        d = c[0],
                        u = c[1],
                        s = (0, l.useCallback)((function() {
                            o(-1)
                        }), []),
                        m = (0, l.useCallback)((function() {
                            o(i)
                        }), [i]),
                        p = (0, l.useRef)(null);
                    return l.createElement(M.rU, {
                        href: t.link,
                        onClick: function() {
                            (0, O.gE)(O.qj[t.evtName], {
                                link: t.link,
                                text: t.text,
                                target: t.target
                            })
                        }
                    }, l.createElement("div", {
                        className: w()(de.content_right, ue(t.BGImg.pcClass)),
                        onMouseLeave: s,
                        onMouseEnter: m
                    }, l.createElement("div", {
                        className: w()(de.video_text_start, n && de.play_none)
                    }, l.createElement("div", {
                        className: de.title_img
                    }, l.createElement(se, {
                        coverTextData: t.coverText.top
                    })), l.createElement("h1", {
                        style: {
                            fontSize: "40px"
                        }
                    }, t.coverText.top.title), l.createElement("h3", {
                        style: {
                            fontSize: "24px",
                            margin: "12px 0 10px 0"
                        }
                    }, t.coverText.top.subTitle), l.createElement(_.Z, {
                        text: "\u4e86\u89e3\u66f4\u591a",
                        color: "#181818",
                        style: {
                            textAlign: "left"
                        }
                    })), l.createElement(C, {
                        videoRef: p,
                        active: n,
                        className: w()(de.no_ready, d && de.video_ready),
                        style: {
                            width: "100%",
                            maxWidth: "600px",
                            maxHeight: "500px",
                            position: "absolute",
                            top: 0,
                            left: 0
                        },
                        poster: t.BGImg.pcImg,
                        onEnded: function() {
                            o(-1)
                        },
                        muted: !0,
                        onPlay: function() {
                            u(!0)
                        },
                        onCanPlayThrough: function() {
                            u(!0)
                        }
                    }, l.createElement("source", {
                        src: t.video + ".webm",
                        type: "video/webm"
                    }), l.createElement("source", {
                        src: t.video + ".mp4",
                        type: "video/mp4"
                    }))))
                })),
                pe = (0, l.memo)((function() {
                    var e, t = (0, l.useState)(-1),
                        n = (0, r.Z)(t, 2),
                        i = n[0],
                        o = n[1],
                        a = (0, l.useRef)();
                    return l.createElement(l.Fragment, null, l.createElement("div", {
                        className: de.title_wrap,
                        style: {
                            padding: "80px 0"
                        }
                    }, l.createElement(u.Z, {
                        subTitle: ce.D.title.subTitle,
                        title: ce.D.title.title,
                        reverse: ce.D.title.reverse,
                        theme: "dark",
                        "data-aos": "fade-up",
                        "data-aos-duration": "300",
                        "data-aos-delay": "0"
                    })), l.createElement("div", {
                        className: de.content,
                        ref: function(e) {
                            a.current = e
                        },
                        "data-aos": "fade-up",
                        "data-aos-duration": "300",
                        "data-aos-delay": "0"
                    }, null === ce.D || void 0 === ce.D || null === (e = ce.D.cooperationDataList) || void 0 === e ? void 0 : e.map((function(e, t) {
                        return l.createElement(me, {
                            key: t,
                            index: t,
                            active: t === i,
                            setActiveIndex: o,
                            videoData: e
                        })
                    }))))
                })),
                _e = n(79121),
                ge = n(79265),
                ve = n(6424),
                he = n(52025),
                xe = n(64287),
                fe = n(317),
                be = n(12436),
                Ee = n.n(be),
                ke = n(54073),
                we = n.n(ke),
                ye = n(81516),
                Ne = ["children", "style", "fadeIn"],
                Se = 0,
                Te = O.c6;
            var Ce = function() {
                var e = (0, l.useRef)([]),
                    t = (0, l.useRef)(null),
                    n = (0, l.useRef)({
                        offsetTopArr: [],
                        screenInitHeightArr: [],
                        csIndex: 0,
                        curBottomIndex: 0,
                        curScrollTopButtonIndex: 0,
                        curSidebarTopIndex: 0
                    }),
                    d = (0, l.useMemo)((function() {
                        return [{
                            children: l.createElement(c.Z, null),
                            theme: "light",
                            themeBackground: !0,
                            height: "calc(100vh - 1px)"
                        }, {
                            children: l.createElement(a.NoSSR, null, l.createElement(D, {
                                data: g.Z
                            })),
                            theme: "dark",
                            height: "1102px",
                            fadeIn: !0,
                            themeBackground: !0
                        }, {
                            children: l.createElement(a.NoSSR, null, l.createElement(K, null)),
                            theme: "light",
                            fadeIn: !0,
                            height: "1064px",
                            themeBackground: !0
                        }, {
                            children: l.createElement(a.NoSSR, null, l.createElement(ae, null)),
                            theme: "dark",
                            fadeIn: !0,
                            height: "1075px",
                            themeBackground: !0
                        }, {
                            children: l.createElement(a.NoSSR, null, l.createElement(pe, null)),
                            theme: "light",
                            fadeIn: !0,
                            height: "953px",
                            themeBackground: !0
                        }, {
                            children: l.createElement(a.NoSSR, null, l.createElement(_e.Z, null)),
                            theme: "light",
                            themeBackground: !0,
                            height: "346px"
                        }, {
                            children: l.createElement(a.NoSSR, null, l.createElement(ve.b, null, l.createElement(ge.Z, null))),
                            theme: "light",
                            themeBackground: !0,
                            height: "514px"
                        }]
                    }), []),
                    u = (0, l.useCallback)((function() {
                        return e.current.map((function(e) {
                            return e.offsetHeight
                        }))
                    }), []);
                (0, l.useEffect)((function() {
                    var i = new ye.x(e.current, ["\u9996\u9875banner", "\u4ea7\u54c1", "\u89e3\u51b3\u65b9\u6848", "\u706b\u5c71\u5f15\u64ce\u6545\u4e8b", "\u751f\u6001", "\u7559\u8d44", "\u5e95\u90e8\u5bfc\u822a"], 112);
                    window.onbeforeunload = function() {
                        i.beforeunload()
                    };
                    t.current = document.getElementById("appbar-wrap");
                    var o = we()((function() {
                            var e = function(e) {
                                    for (var t = [], i = n.current.offsetTopArr, o = Te(), r = 0, l = 0; l < i.length - 1;) {
                                        var a = o + e[r];
                                        if (a >= i[l] && a < i[l + 1]) {
                                            if (t[r] = l, ++r === e.length) break
                                        } else l++
                                    }
                                    for (; r < e.length;) t[r] = i.length - 2, r++;
                                    return t
                                }([0, (0, O.gp)() - 308, (0, O.gp)() - 116, (0, O.gp)() - 24]),
                                i = (0, r.Z)(e, 1)[0];
                            if (i !== n.current.csIndex) {
                                if (n.current.csIndex = i, 0 === i) return void(0, c.C)();
                                "dark" === d[i].theme ? t.current.classList.replace("appbar-light", "appbar-dark") : (t.current.classList.remove("appbar-light-b"), t.current.classList.replace("appbar-dark", "appbar-light"))
                            }
                        }), 200),
                        l = Ee()((function() {
                            var e = Te();
                            ! function(e) {
                                Se >= 0 && Se - e > 1 && t.current.classList.remove("content-hidden"), Se >= 0 && Se - e < -1 && t.current.classList.add("content-hidden"), Se = e
                            }(e), i.checkStatus(), document.dispatchEvent(new CustomEvent("HomePcScroll", {
                                detail: {
                                    position: e
                                }
                            }))
                        }), 200),
                        a = u();
                    return n.current.screenInitHeightArr = a, n.current.offsetTopArr = function(e) {
                            var t = [0],
                                n = 0;
                            return e.forEach((function(e) {
                                n += e, t.push(n)
                            })), t
                        }(a), window.innerWidth > 600 && (window.addEventListener("beforeunload", (function() {
                            v(!0)
                        })), window.addEventListener("pageshow", (function(e) {
                            e.persisted && v(!1)
                        })), window.addEventListener("unload", (function() {
                            v(!1)
                        })), window.addEventListener("scroll", l), window.addEventListener("scroll", o)),
                        function() {
                            window.removeEventListener("scroll", l), window.removeEventListener("scroll", o)
                        }
                }), []);
                var s = (0, l.useState)(!1),
                    m = (0, r.Z)(s, 2),
                    _ = m[0],
                    v = m[1];
                return l.createElement(l.Fragment, null, _ && l.createElement(he.q, null, l.createElement("style", null, "video {visibility: hidden !important;}")), l.createElement("div", {
                    className: p.Z.scrollScreensWrapper
                }, d.map((function(t, n) {
                    var r = t.children,
                        a = t.style,
                        c = t.fadeIn,
                        d = (0, o.Z)(t, Ne);
                    return l.createElement(xe.Z, Object.assign({
                        ref: function(t) {
                            return e.current[n] = t
                        },
                        key: n
                    }, d, {
                        style: (0, i.Z)({
                            zIndex: n + 1,
                            minWidth: "1024px"
                        }, a),
                        fadeIn: c
                    }), r)
                }))), l.createElement(fe.Z, null))
            }
        },
        81452: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return _
                }
            });
            var i = n(2867),
                o = n(2784),
                r = n(2183),
                l = n.n(r),
                a = n(56917),
                c = n(13768),
                d = l().bind({
                    "collapse-wrap": "index-module__collapse-wrap--dbGkg",
                    collapseWrap: "index-module__collapse-wrap--dbGkg",
                    "product-big-title": "index-module__product-big-title--L1dW4",
                    productBigTitle: "index-module__product-big-title--L1dW4",
                    hot: "index-module__hot--bgQ2A",
                    cloud: "index-module__cloud--PM2ZP",
                    data: "index-module__data--_yvDr",
                    vid: "index-module__vid--HFD6b",
                    dev: "index-module__dev--dpF5e",
                    in: "index-module__in--V9DTk",
                    "collapse-expand-icon": "index-module__collapse-expand-icon--rSM5D",
                    collapseExpandIcon: "index-module__collapse-expand-icon--rSM5D",
                    "collapse-head": "index-module__collapse-head--u25qP",
                    collapseHead: "index-module__collapse-head--u25qP",
                    active: "index-module__active--GzR9K",
                    "collapse-content": "index-module__collapse-content--F7V_m",
                    collapseContent: "index-module__collapse-content--F7V_m",
                    product: "index-module__product--RcK5f",
                    "product-badge-hot": "index-module__product-badge-hot--Ou028",
                    productBadgeHot: "index-module__product-badge-hot--Ou028",
                    "product-name": "index-module__product-name--gc2lY",
                    productName: "index-module__product-name--gc2lY",
                    "product-desc": "index-module__product-desc--jsDgW",
                    productDesc: "index-module__product-desc--jsDgW",
                    "product-tag": "index-module__product-tag--_QBWL",
                    productTag: "index-module__product-tag--_QBWL",
                    more_arrow: "index-module__more_arrow--rQQ72",
                    moreArrow: "index-module__more_arrow--rQQ72"
                }),
                u = {
                    "\u70ed\u95e8\u4ea7\u54c1": "hot",
                    "\u4e91\u57fa\u7840": "cloud",
                    "\u5927\u6570\u636e": "data",
                    "\u89c6\u9891\u4e0e\u5185\u5bb9\u5206\u53d1": "vid",
                    "\u5f00\u53d1\u4e0e\u8fd0\u7ef4": "dev",
                    "\u667a\u80fd\u5e94\u7528": "in"
                },
                s = function(e) {
                    e.style.height = "0"
                },
                m = function(e) {
                    e.style.height = e.scrollHeight + "px"
                },
                p = function(e) {
                    var t = e.data,
                        n = e.children,
                        r = e.onClick,
                        l = (0, o.useState)(0 === t.index),
                        a = (0, i.Z)(l, 2),
                        c = a[0],
                        u = a[1],
                        p = (0, o.useRef)();
                    return (0, o.useEffect)((function() {
                        var e = p.current;
                        c ? m(e) : s(e)
                    }), [c]), o.createElement("div", {
                        className: d("collapse-wrap", c && "active")
                    }, o.createElement("div", {
                        className: d("collapse-head"),
                        onClick: function() {
                            null === r || void 0 === r || r(c), c ? s(p.current) : m(p.current), u(!c)
                        }
                    }, o.createElement("div", {
                        className: d("collapse-title")
                    }, t.title), o.createElement("div", {
                        className: d("collapse-expand-icon")
                    })), o.createElement("div", {
                        className: d("collapse-content"),
                        ref: p
                    }, n))
                },
                _ = function(e) {
                    var t = e.data.product;
                    return o.createElement("div", {
                        style: {
                            marginTop: "48px"
                        }
                    }, t.map((function(e, t) {
                        return o.createElement(p, {
                            onClick: function(t) {
                                t || (0, c.gE)(c.qj.ClickProductGuide, {
                                    theme: e.main
                                })
                            },
                            key: e.main + t,
                            data: {
                                index: t,
                                title: o.createElement("div", {
                                    className: d("product-big-title", u[e.main])
                                }, e.main)
                            }
                        }, e.products.map((function(t, n) {
                            return o.createElement("div", {
                                className: d("product"),
                                key: n,
                                onClick: function() {
                                    (0, c.gE)(c.qj.ClickProduct, {
                                        theme: e.main,
                                        link: t.link,
                                        text: t.name,
                                        target: "_self"
                                    }), location.href = t.link
                                }
                            }, t.badges && o.createElement("div", {
                                className: d("product-badge")
                            }, t.badges.map((function(e) {
                                return o.createElement("div", {
                                    key: e,
                                    className: d("product-badge-" + e.toLocaleLowerCase())
                                })
                            }))), o.createElement("div", {
                                className: d("product-name")
                            }, t.name), o.createElement("div", {
                                className: d("product-desc")
                            }, t.desc), t.tags && o.createElement("div", {
                                className: d("product-tag")
                            }, t.tags.map((function(e) {
                                return o.createElement("div", {
                                    key: e
                                }, e)
                            }))))
                        })))
                    })), o.createElement("div", null, o.createElement("p", {
                        style: {
                            fontSize: "12px",
                            lineHeight: "20px",
                            fontWeight: 500,
                            color: "#1664FF",
                            textAlign: "center",
                            margin: "40px auto"
                        }
                    }, o.createElement(a.Z, {
                        href: "/product/list",
                        reportTea: {
                            entName: c.qj.ClickProduct,
                            entData: {
                                theme: "\u67e5\u770b\u5168\u90e8\u4ea7\u54c1",
                                link: "/product/list",
                                text: "",
                                target: "_blank"
                            }
                        },
                        target: "_blank",
                        color: "#1664FF"
                    }, "\u67e5\u770b\u5168\u90e8\u4ea7\u54c1\uff0870+\uff09"))))
                }
        },
        88698: function(e, t, n) {
            var i = n(86249),
                o = {
                    product: [{
                        moreLink: "/product/list",
                        main: "\u70ed\u95e8\u4ea7\u54c1",
                        face: {
                            main: "\u70ed\u95e8\u4ea7\u54c1",
                            submain: "",
                            video: i.X + "/ca-66-v",
                            posterImgClass: "s2-6",
                            posterImg: i.X + "/s2/s2-6.jpg",
                            image: i.X + "/s2/s2-6-mobile.jpg"
                        },
                        showcase: {
                            title: "\u4e86\u89e3\u706b\u5c71\u5f15\u64ce\u5168\u90e8\u4ea7\u54c1",
                            subTitle: "\u4e86\u89e3\u5168\u90e8",
                            href: "/product/list"
                        },
                        iconClass: "hot-poster",
                        icon: i.X + "/s3/hot-poster.png",
                        video: i.X + "/hot-active",
                        videoStyle: {
                            width: "100px",
                            height: "100px",
                            position: "relative",
                            top: "-1px",
                            left: "-20px"
                        },
                        grid: {
                            maxWidth: "1318px",
                            height: "568px",
                            columnNum: 3,
                            rowNum: 3,
                            gridAreas: ["1 / 1 / 3 / 2", "1 / 2 / 2 / 3", "1 / 3 / 2 / 4", "2 / 2 / 3 / 3", "2 / 3 / 3 / 4", "3 / 1 / 4 / 2", "3 / 2 / 4 / 3", "3 / 3 / 4 / 4"]
                        },
                        products: [{
                            isTopBadge: !0,
                            badges: ["HOT"],
                            link: "/product/ecs",
                            name: "\u4e91\u670d\u52a1\u5668",
                            desc: "\u4e91\u670d\u52a1\u5668\u63d0\u4f9b\u5f39\u6027\u4f38\u7f29\u7684\u8ba1\u7b97\u670d\u52a1",
                            tags: ["\u7075\u6d3b\u53d6\u7528", "\u9ad8\u6548\u7a33\u5b9a"],
                            h1Style: {
                                opacity: 1
                            },
                            h2Style: {
                                opacity: 1
                            },
                            tagStyle: {
                                color: "rgba(255, 255, 255, 0.8)"
                            },
                            background: {
                                color: "#1751bc",
                                img: i.X + "/productDtailBg-min.jpg",
                                imgs: [{
                                    width: "460px",
                                    height: "460px",
                                    left: "109px",
                                    top: "108px",
                                    url: i.X + "/cube_1123_1-min.png",
                                    style: {
                                        mixBlendMode: "color-burn"
                                    }
                                }]
                            }
                        }, {
                            badges: ["HOT"],
                            link: "/product/tos",
                            name: "\u5bf9\u8c61\u5b58\u50a8",
                            desc: "\u6d77\u91cf\u3001\u9ad8\u53ef\u9760\u3001\u9ad8\u53ef\u7528\u7684\u5206\u5e03\u5f0f\u5b58\u50a8",
                            tags: ["\u9ad8\u53ef\u9760", "\u9ad8\u53ef\u7528"]
                        }, {
                            badges: ["HOT"],
                            link: "/product/clb",
                            name: "\u8d1f\u8f7d\u5747\u8861",
                            desc: "\u5411\u591a\u53f0\u670d\u52a1\u5668\u5206\u53d1\u8bbf\u95ee\u6d41\u91cf\uff0c\u63d0\u9ad8\u7cfb\u7edf\u7684\u6574\u4f53\u53ef\u7528\u6027",
                            tags: ["\u9ad8\u53ef\u7528", "\u9ad8\u5e76\u53d1"]
                        }, {
                            badges: ["HOT"],
                            link: "/product/rds-mysql",
                            name: "\u4e91\u6570\u636e\u5e93 MySQL \u7248",
                            desc: "\u57fa\u4e8e\u4e91\u5e73\u53f0\u7684\u5373\u5f00\u5373\u7528\u3001\u7a33\u5b9a\u53ef\u9760\u3001\u7075\u6d3b\u5f39\u6027\u3001\u6613\u4e8e\u4f7f\u7528\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u670d\u52a1",
                            tags: ["\u5373\u5f00\u5373\u7528", "\u7a33\u5b9a\u53ef\u9760"]
                        }, {
                            badges: ["HOT"],
                            link: "/product/veCDP",
                            name: "\u5ba2\u6237\u6570\u636e\u5e73\u53f0",
                            desc: "\u9762\u5411\u4e1a\u52a1\u589e\u957f\u7684\u5ba2\u6237\u5168\u57df\u6570\u636e\u4e2d\u53f0",
                            tags: ["\u7cbe\u7ec6\u5316\u8fd0\u8425"]
                        }, {
                            badges: ["HOT"],
                            link: "/product/datafinder",
                            name: "\u589e\u957f\u5206\u6790",
                            desc: "\u4e00\u7ad9\u5f0f\u7528\u6237\u5206\u6790\u4e0e\u8fd0\u8425\u5e73\u53f0\uff0c\u52a9\u529b\u4f01\u4e1a\u6570\u5b57\u5316\u8fd0\u8425\u63d0\u6548",
                            tags: ["\u667a\u80fd\u8fd0\u8425", "\u8425\u9500\u81ea\u52a8\u5316"]
                        }, {
                            badges: ["HOT"],
                            link: "/product/vod",
                            name: "\u89c6\u9891\u70b9\u64ad",
                            desc: "\u63d0\u4f9b\u89c6\u9891\u70b9\u64ad\u7684\u4e00\u7ad9\u5f0f\u89e3\u51b3\u65b9\u6848",
                            tags: ["\u654f\u6377\u9ad8\u6548"]
                        }, {
                            badges: ["HOT"],
                            link: "/product/CDN",
                            name: "\u5185\u5bb9\u5206\u53d1\u7f51\u7edc",
                            desc: "\u667a\u80fd\u3001\u53ef\u9760\u7684\u5185\u5bb9\u5206\u53d1\u7f51\u7edc\uff0c\u8ba9\u8bbf\u95ee\u66f4\u5feb\u6377",
                            tags: ["\u591a\u7aef\u52a0\u901f"]
                        }]
                    }, {
                        moreLink: "/product/list#\u4e91\u57fa\u7840",
                        main: "\u4e91\u57fa\u7840",
                        face: {
                            main: "\u4e91\u57fa\u7840",
                            submain: "\u4e91\u539f\u751f\u9a71\u52a8\u7684\u65b0\u4e00\u4ee3\u9ad8\u6027\u80fd\u4e91\u57fa\u7840\u8bbe\u65bd",
                            video: i.X + "/ca-44-v",
                            posterImgClass: "s2-4",
                            posterImg: i.X + "/s2/s2-4.jpg",
                            image: i.X + "/s2/s2-4-mobile.jpg"
                        },
                        showcase: {
                            title: "\u5feb\u901f\u4e86\u89e3\u706b\u5c71\u5f15\u64ce\u4e91\u57fa\u7840\u4ea7\u54c1",
                            subTitle: "\u67e5\u770b\u66f4\u591a",
                            href: "/product/list#\u4e91\u57fa\u7840"
                        },
                        iconClass: "cloud-poster",
                        icon: i.X + "/s3/cloud-poster.png",
                        video: i.X + "/cloud-active",
                        videoStyle: {
                            width: "100px",
                            height: "100px",
                            position: "relative",
                            top: "-8px",
                            left: "-20px"
                        },
                        grid: {
                            maxWidth: "1318px",
                            height: "568px",
                            columnNum: 3,
                            rowNum: 3,
                            gridAreas: ["1 / 1 / 3 / 2", "1 / 2 / 2 / 3", "1 / 3 / 2 / 4", "2 / 2 / 3 / 3", "2 / 3 / 3 / 4", "3 / 1 / 4 / 2", "3 / 2 / 4 / 3", "3 / 3 / 4 / 4"]
                        },
                        products: [{
                            isTopBadge: !0,
                            badges: ["HOT"],
                            link: "/product/ecs",
                            name: "\u4e91\u670d\u52a1\u5668",
                            desc: "\u4e91\u670d\u52a1\u5668\u63d0\u4f9b\u5f39\u6027\u4f38\u7f29\u7684\u8ba1\u7b97\u670d\u52a1",
                            tags: ["\u7075\u6d3b\u53d6\u7528", "\u9ad8\u6548\u7a33\u5b9a"],
                            h1Style: {
                                opacity: 1
                            },
                            h2Style: {
                                opacity: 1
                            },
                            tagStyle: {
                                color: "rgba(255, 255, 255, 0.8)"
                            },
                            background: {
                                color: "#1751bc",
                                img: i.X + "/productDtailBg-min.jpg",
                                imgs: [{
                                    width: "460px",
                                    height: "460px",
                                    left: "109px",
                                    top: "108px",
                                    url: i.X + "/cube_1123_2-min.jpg",
                                    style: {
                                        mixBlendMode: "color-burn"
                                    }
                                }]
                            }
                        }, {
                            badges: ["HOT"],
                            link: "/product/tos",
                            name: "\u5bf9\u8c61\u5b58\u50a8",
                            desc: "\u6d77\u91cf\u3001\u9ad8\u53ef\u9760\u3001\u9ad8\u53ef\u7528\u7684\u5206\u5e03\u5f0f\u5b58\u50a8",
                            tags: ["\u9ad8\u53ef\u9760", "\u9ad8\u53ef\u7528"]
                        }, {
                            link: "/product/ebs",
                            name: "\u5f39\u6027\u5757\u5b58\u50a8",
                            desc: "\u9ad8\u53ef\u7528\u3001\u9ad8\u53ef\u9760\u3001\u9ad8\u6027\u80fd\u7684\u5757\u5b58\u50a8\u8bbe\u5907",
                            tags: ["\u9ad8\u53ef\u9760", "\u9ad8\u6027\u80fd"]
                        }, {
                            link: "/product/vpc",
                            name: "\u79c1\u6709\u7f51\u7edc",
                            desc: "\u79c1\u6709\u7f51\u7edcVPC\u63d0\u4f9b\u57fa\u4e8e\u4e91\u5e73\u53f0\u7684\u865a\u62df\u7f51\u7edc\u73af\u5883",
                            tags: ["\u4e13\u6709\u7f51\u7edc", "\u81ea\u4e3b\u914d\u7f6e"]
                        }, {
                            badges: ["HOT"],
                            link: "/product/clb",
                            name: "\u8d1f\u8f7d\u5747\u8861",
                            desc: "\u5411\u591a\u53f0\u670d\u52a1\u5668\u5206\u53d1\u8bbf\u95ee\u6d41\u91cf\uff0c\u63d0\u9ad8\u7cfb\u7edf\u7684\u6574\u4f53\u53ef\u7528\u6027",
                            tags: ["\u9ad8\u53ef\u7528", "\u9ad8\u5e76\u53d1"]
                        }, {
                            badges: ["HOT"],
                            link: "/product/rds-mysql",
                            name: "\u4e91\u6570\u636e\u5e93 MySQL \u7248",
                            desc: "\u57fa\u4e8e\u4e91\u5e73\u53f0\u7684\u5373\u5f00\u5373\u7528\u3001\u7a33\u5b9a\u53ef\u9760\u3001\u7075\u6d3b\u5f39\u6027\u3001\u6613\u4e8e\u4f7f\u7528\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u670d\u52a1",
                            tags: ["\u5373\u5f00\u5373\u7528", "\u7a33\u5b9a\u53ef\u9760"]
                        }, {
                            link: "/product/redis",
                            name: "\u7f13\u5b58\u6570\u636e\u5e93 Redis \u7248",
                            desc: "\u517c\u5bb9Redis\u534f\u8bae\u7684\u7f13\u5b58\u6570\u636e\u5e93\u670d\u52a1",
                            tags: ["\u8d85\u9ad8\u8bfb\u5199\u6027\u80fd"]
                        }, {
                            link: "/product/AntiDDoS-pro",
                            name: "DDOS\u9ad8\u9632",
                            desc: "\u8d85\u5927\u9632\u62a4\u8d44\u6e90\uff0c\u7cbe\u51c6\u9632\u62a4\u80fd\u529b",
                            tags: ["\u5168\u9762", "\u9ad8\u6548"]
                        }]
                    }, {
                        moreLink: "/product/list#\u89c6\u9891\u4e0e\u5185\u5bb9\u5206\u53d1",
                        main: "\u89c6\u9891\u4e0e\u5185\u5bb9\u5206\u53d1",
                        face: {
                            main: "\u89c6\u9891\u4e0e\u5185\u5bb9\u5206\u53d1",
                            submain: "\u9762\u5411\u4f53\u9a8c\u7684\u89c6\u9891\u4e91",
                            video: i.X + "/ca-55-v",
                            posterImgClass: "s2-5",
                            posterImg: i.X + "/s2/s2-5.jpg",
                            image: i.X + "/s2/s2-5-mobile.jpg"
                        },
                        showcase: {
                            title: "\u706b\u5c71\u5f15\u64ce\u643a\u624b\u822a\u65c5\u7eb5\u6a2a",
                            subTitle: "\u5171\u5efa\u673a\u573a\u670d\u52a1\u65b0\u5546\u4e1a",
                            href: "https://www.volcengine.com/docs/6281/68810"
                        },
                        iconClass: "video-poster",
                        icon: i.X + "/s3/video-poster.png",
                        video: i.X + "/video-active",
                        videoStyle: {
                            width: "120px",
                            height: "120px",
                            position: "relative",
                            top: "-8px",
                            left: "-26px"
                        },
                        grid: {
                            maxWidth: "1318px",
                            height: "368px",
                            columnNum: 3,
                            rowNum: 2,
                            gridAreas: ["1 / 1 / 3 / 2", "1 / 2 / 2 / 3", "1 / 3 / 2 / 4", "2 / 2 / 3 / 3", "2 / 3 / 3 / 4"]
                        },
                        products: [{
                            isTopBadge: !0,
                            badges: ["HOT"],
                            link: "/product/vod",
                            name: "\u89c6\u9891\u70b9\u64ad",
                            desc: "\u63d0\u4f9b\u89c6\u9891\u70b9\u64ad\u7684\u4e00\u7ad9\u5f0f\u89e3\u51b3\u65b9\u6848",
                            tags: ["\u654f\u6377\u9ad8\u6548"],
                            h1Style: {
                                opacity: 1
                            },
                            h2Style: {
                                opacity: 1
                            },
                            tagStyle: {
                                color: "rgba(255, 255, 255, 0.8)"
                            },
                            background: {
                                color: "#1751bc",
                                img: i.X + "/productDtailBg-min.jpg",
                                imgs: [{
                                    width: "460px",
                                    height: "460px",
                                    left: "109px",
                                    top: "108px",
                                    url: i.X + "/cube_1123_4-min.png",
                                    style: {
                                        mixBlendMode: "color-burn"
                                    }
                                }]
                            }
                        }, {
                            link: "/product/veRTC",
                            name: "\u5b9e\u65f6\u97f3\u89c6\u9891",
                            desc: "\u5168\u7403\u8303\u56f4\u5185\u9ad8\u8d28\u91cf\u3001\u4f4e\u5ef6\u65f6\u7684\u5b9e\u65f6\u901a\u4fe1"
                        }, {
                            badges: ["HOT"],
                            link: "/product/CDN",
                            name: "\u5185\u5bb9\u5206\u53d1\u7f51\u7edc",
                            desc: "\u4e91\u667a\u80fd\u3001\u53ef\u9760\u7684\u5185\u5bb9\u5206\u53d1\u7f51\u7edc\uff0c\u8ba9\u8bbf\u95ee\u66f4\u5feb\u6377",
                            tags: ["\u591a\u7aef\u52a0\u901f"]
                        }, {
                            link: "/product/live-saas",
                            name: "\u4f01\u4e1a\u76f4\u64ad",
                            desc: "\u4f01\u4e1a\u7ea7\u76f4\u64ad\u4e92\u52a8\u5e73\u53f0",
                            tags: ["\u5343\u4e07\u5e76\u53d1\u6d41\u7545\u4f53\u9a8c"]
                        }, {
                            badges: ["HOT"],
                            link: "/product/imagex",
                            name: "veImageX",
                            desc: "\u4e00\u7ad9\u5f0f\u7d20\u6750\u6258\u7ba1\u3001\u5904\u7406\u548c\u5206\u53d1\u5e73\u53f0",
                            tags: ["\u7075\u6d3b", "\u9ad8\u6548"]
                        }]
                    }, {
                        moreLink: "/product/list#\u5927\u6570\u636e",
                        main: "\u5927\u6570\u636e",
                        face: {
                            main: "\u5927\u6570\u636e",
                            submain: "\u4e3a\u589e\u957f\u800c\u751f\u7684\u654f\u6377\u6570\u667a\u5f15\u64ce",
                            video: i.X + "/ca-11-v",
                            posterImgClass: "s2-1",
                            posterImg: i.X + "/s2/s2-1.jpg",
                            image: i.X + "/s2/s2-1-mobile.jpg"
                        },
                        showcase: {
                            title: "\u6570\u636e\u9a71\u52a8\u4e1a\u52a1\u589e\u957f",
                            subTitle: "\u8ddd\u79bb\u4f60\u7684\u4f01\u4e1a\u53ef\u4ee5\u6709\u591a\u8fd1\uff1f",
                            href: "https://www.volcengine.com/docs/6281/68676"
                        },
                        iconClass: "data-poster",
                        icon: i.X + "/s3/data-poster.png",
                        video: i.X + "/data-active",
                        videoStyle: {
                            width: "100px",
                            height: "100px",
                            position: "relative",
                            top: "3px",
                            left: "-24px"
                        },
                        grid: {
                            maxWidth: "1318px",
                            height: "368px",
                            columnNum: 3,
                            rowNum: 2,
                            gridAreas: ["1 / 1 / 2 / 2", "1 / 2 / 2 / 3", "1 / 3 / 2 / 4", "2 / 1 / 3 / 2", "2 / 2 / 3 / 3", "2 / 3 / 3 / 4"]
                        },
                        products: [{
                            isTopBadge: !1,
                            badges: ["HOT"],
                            link: "/product/veCDP",
                            name: "\u5ba2\u6237\u6570\u636e\u5e73\u53f0",
                            desc: "\u9762\u5411\u4e1a\u52a1\u589e\u957f\u7684\u5ba2\u6237\u5168\u57df\u6570\u636e\u4e2d\u53f0",
                            tags: ["\u7cbe\u7ec6\u5316\u8fd0\u8425"],
                            h1Style: {
                                opacity: 1
                            },
                            h2Style: {
                                opacity: 1
                            },
                            tagStyle: {
                                color: "rgba(255, 255, 255, 0.8)"
                            },
                            background: {
                                color: "#1751bc",
                                img: i.X + "/productDtailBg-min.jpg",
                                imgs: [{
                                    width: "460px",
                                    height: "460px",
                                    left: "109px",
                                    top: "108px",
                                    url: i.X + "/cube_1123_3-min.png",
                                    style: {
                                        mixBlendMode: "color-burn"
                                    }
                                }]
                            }
                        }, {
                            badges: ["HOT"],
                            link: "/product/datafinder",
                            name: "\u589e\u957f\u5206\u6790",
                            desc: "\u4e00\u7ad9\u5f0f\u7528\u6237\u5206\u6790\u4e0e\u8fd0\u8425\u5e73\u53f0\uff0c\u52a9\u529b\u4f01\u4e1a\u6570\u5b57\u5316\u8fd0\u8425\u63d0\u6548",
                            tags: ["\u667a\u80fd\u8fd0\u8425", "\u8425\u9500\u81ea\u52a8\u5316"]
                        }, {
                            link: "/product/bytehouse-enterprise",
                            name: "ByteHouse\uff08\u4e91\u6570\u4ed3\u7248\uff09",
                            desc: "\u5b58\u7b97\u5206\u79bb\u67b6\u6784\u7684\u4e91\u539f\u751f\u6570\u636e\u5206\u6790\u5e73\u53f0",
                            tags: ["ByteHouse\uff08\u4e91\u6570\u4ed3\u7248\uff09"]
                        }, {
                            link: "/product/las",
                            name: "\u6e56\u4ed3\u4e00\u4f53\u5206\u6790\u670d\u52a1 LAS",
                            desc: "Serverless \u6e56\u4ed3\u4e00\u4f53\u5206\u6790\u670d\u52a1\uff0c\u4f01\u4e1a\u7ea7\u6807\u51c6\u6784\u5efa\u6e56\u4ed3\u5206\u6790\u5e73\u53f0",
                            tags: ["\u4f4e\u95e8\u69db", "\u9ad8\u53ef\u9760"]
                        }, {
                            link: "/product/emr",
                            name: "E-MapReduce",
                            desc: "\u4e00\u952e\u6784\u5efa\u5f00\u6e90Hadoop\u4f01\u4e1a\u7ea7\u5927\u6570\u636e\u5206\u6790\u5e73\u53f0",
                            tags: ["\u517c\u5bb9\u5f00\u6e90"]
                        }, {
                            link: "/product/datatester",
                            name: "A/B\u6d4b\u8bd5",
                            desc: "\u6446\u8131\u731c\u6d4b\uff0c\u7528\u79d1\u5b66\u7684\u5b9e\u9a8c\u8861\u91cf\u51b3\u7b56\u6536\u76ca",
                            tags: ["\u79d1\u5b66\u51b3\u7b56"]
                        }]
                    }, {
                        moreLink: "/product/list#\u667a\u80fd\u5e94\u7528",
                        main: "\u667a\u80fd\u5e94\u7528",
                        face: {
                            main: "\u667a\u80fd\u5e94\u7528",
                            submain: "\u5f00\u542f\u7528\u6237\u589e\u957f\u7684\u667a\u4eab\u65b0\u4f53\u9a8c",
                            video: i.X + "/ca-22-v",
                            posterImgClass: "s2-2",
                            posterImg: i.X + "/s2/s2-2.jpg",
                            image: i.X + "/s2/s2-2-mobile.jpg"
                        },
                        showcase: {
                            title: "\u4e00\u4e2a\u7535\u5546\u65b0\u73a9\u6cd5",
                            subTitle: "\u8ba9\u8d2d\u4e70\u8f6c\u5316\u7387\u63d0\u5347\u8d85\u8fc712%",
                            href: "https://www.volcengine.com/docs/6281/66795"
                        },
                        iconClass: "app-poster",
                        icon: i.X + "/s3/app-poster.png",
                        video: i.X + "/application-active",
                        videoStyle: {
                            width: "100px",
                            height: "100px",
                            position: "relative",
                            top: "2px",
                            left: "-26px"
                        },
                        grid: {
                            maxWidth: "1318px",
                            height: "568px",
                            columnNum: 3,
                            rowNum: 3,
                            gridAreas: ["1 / 1 / 3 / 2", "1 / 2 / 2 / 3", "1 / 3 / 2 / 4", "2 / 2 / 3 / 3", "2 / 3 / 3 / 4", "3 / 1 / 4 / 2", "3 / 2 / 4 / 3", "3 / 3 / 4 / 4"]
                        },
                        products: [{
                            isTopBadge: !0,
                            badges: ["HOT"],
                            link: "/product/content-customization",
                            name: "\u5185\u5bb9\u5b9a\u5236",
                            desc: "\u5feb\u901f\u6784\u5efa\u5185\u5bb9\u4fe1\u606f\u6d41\u7684SAAS\u4ea7\u54c1",
                            tags: ["\u667a\u80fd\u7b97\u6cd5"],
                            h1Style: {
                                opacity: 1
                            },
                            h2Style: {
                                opacity: 1
                            },
                            tagStyle: {
                                color: "rgba(255, 255, 255, 0.8)"
                            },
                            background: {
                                color: "#1751bc",
                                img: i.X + "/productDtailBg-min.jpg",
                                imgs: [{
                                    width: "460px",
                                    height: "460px",
                                    left: "109px",
                                    top: "108px",
                                    url: i.X + "/cube_1123_6-min.png",
                                    style: {
                                        mixBlendMode: "color-burn"
                                    }
                                }]
                            }
                        }, {
                            link: "/product/rec",
                            name: "\u667a\u80fd\u63a8\u8350\u5e73\u53f0",
                            desc: "\u4e00\u7ad9\u5f0f\u63a8\u8350\u670d\u52a1\u80fd\u529b\u642d\u5efa\u7684\u5e73\u53f0",
                            tags: ["\u667a\u80fd\u63a8\u8350"]
                        }, {
                            link: "/product/CMP",
                            name: "\u667a\u80fd\u521b\u610f",
                            desc: "\u667a\u80fd\u521b\u610f\u805a\u7126\u4f18\u5316\u521b\u610f\u7684\u5168\u751f\u547d\u5468\u671f",
                            tags: ["\u5168\u5458\u8425\u9500"]
                        }, {
                            link: "/product/ICC",
                            name: "\u667a\u80fd\u521b\u4f5c\u4e91",
                            desc: "\u5404\u7c7bAI\u8d4b\u80fd\u521b\u4f5c\u5de5\u5177\u3001\u7f16\u8f91\u6280\u672f\u3001\u6b63\u7248\u7d20\u6750\u548c\u521b\u4f5c\u5185\u5bb9\u3001\u6d41\u7a0b\u7ba1\u7406",
                            tags: ["\u5de5\u5177\u667a\u80fd", "\u7d20\u6750\u6d77\u91cf"]
                        }, {
                            link: "/product/Human-body",
                            name: "\u4eba\u50cf\u4eba\u4f53",
                            desc: "\u5bf9\u5305\u542b\u4eba\u50cf\u4eba\u4f53\u5185\u5bb9\u7684\u56fe\u50cf\u667a\u80fd\u7f16\u8f91\u4e0e\u5904\u7406",
                            tags: ["\u80fd\u529b\u591a\u5143"]
                        }, {
                            link: "/product/machine_translation",
                            name: "\u673a\u5668\u7ffb\u8bd1",
                            desc: "\u63d0\u4f9b\u901a\u7528\u673a\u5668\u7ffb\u8bd1\u3001\u89c6\u9891\u7ffb\u8bd1\u548c\u667a\u80fd\u540c\u4f20\u7b49\u80fd\u529b",
                            tags: ["\u591a\u5e74\u7ecf\u9a8c"]
                        }, {
                            link: "/product/ml-platform",
                            name: "\u673a\u5668\u5b66\u4e60\u5e73\u53f0",
                            desc: "\u4f01\u4e1a\u7ea7\u4e91\u539f\u751f\u673a\u5668\u5b66\u4e60\u5e73\u53f0",
                            tags: ["\u5927\u89c4\u6a21\u8bad\u7ec3", "\u9ad8\u6027\u80fd\u63a8\u7406"]
                        }, {
                            link: "/products/smart-outbound",
                            name: "\u667a\u80fd\u5916\u547c",
                            desc: "\u771f\u5b9e\u4e92\u52a8\u8bed\u97f3\u5916\u547c\u673a\u5668\u4eba",
                            tags: ["\u591a\u9886\u57df", "\u5b9a\u5236\u5316"]
                        }]
                    }, {
                        moreLink: "/product/list#\u5f00\u53d1\u4e0e\u8fd0\u7ef4",
                        main: "\u5f00\u53d1\u4e0e\u8fd0\u7ef4",
                        face: {
                            main: "\u5f00\u53d1\u4e0e\u8fd0\u7ef4",
                            submain: "\u201c\u5f00\u7bb1\u5373\u7528\u201d\u7684\u4e00\u7ad9\u5f0f\u5e94\u7528\u5f00\u53d1\u4e0e\u7ba1\u7406\u670d\u52a1",
                            video: i.X + "/ca-33-v",
                            posterImgClass: "s2-3",
                            posterImg: i.X + "/s2/s2-3.jpg",
                            image: i.X + "/s2/s2-3-mobile.jpg"
                        },
                        showcase: {
                            title: "\u98de\u4e00\u6837\u7684\u529e\u516c\u6548\u7387\uff0c\u66f4\u7f8e\uff01",
                            subTitle: "\u98de\u8fde\uff0c\u8ba9\u529e\u516c\u5b89\u5168\u66f4\u7b80\u5355\uff0c\u66f4\u9ad8\u6548",
                            href: "https://www.volcengine.com/docs/6281/68809"
                        },
                        iconClass: "devops-poster",
                        icon: i.X + "/s3/devops-poster.png",
                        video: i.X + "/devops-active",
                        videoStyle: {
                            width: "90px",
                            height: "90px",
                            position: "relative",
                            top: "2px",
                            left: "-18px"
                        },
                        grid: {
                            maxWidth: "1318px",
                            height: "368px",
                            columnNum: 3,
                            rowNum: 2,
                            gridAreas: ["1 / 1 / 3 / 2", "1 / 2 / 2 / 3", "1 / 3 / 2 / 4", "2 / 2 / 3 / 3", "2 / 3 / 3 / 4"]
                        },
                        products: [{
                            isTopBadge: !0,
                            badges: ["HOT"],
                            link: "/product/compass",
                            name: "veCompass",
                            desc: "\u63d0\u4f9b\u8d44\u6e90\u7ba1\u7406\u80fd\u529b\u548c\u5e94\u7528\u90e8\u7f72\u80fd\u529b\uff0c\u9002\u5408\u4f01\u4e1a\u591a\u96c6\u7fa4\u3001\u591a\u79df\u6237\u3001\u591a\u7f51\u7edc\u3001\u591a\u5e94\u7528\u7684\u590d\u6742\u7ba1\u7406",
                            tags: ["\u6df1\u5ea6\u6574\u5408"],
                            h1Style: {
                                opacity: 1
                            },
                            h2Style: {
                                opacity: 1
                            },
                            tagStyle: {
                                color: "rgba(255, 255, 255, 0.8)"
                            },
                            background: {
                                color: "#1751bc",
                                img: i.X + "/productDtailBg-min.jpg",
                                imgs: [{
                                    width: "460px",
                                    height: "460px",
                                    left: "109px",
                                    top: "108px",
                                    url: i.X + "/cube_1123_5-min.png",
                                    style: {
                                        mixBlendMode: "color-burn"
                                    }
                                }]
                            }
                        }, {
                            link: "/product/vemars",
                            name: "\u5e94\u7528\u5f00\u53d1\u5957\u4ef6 MARS",
                            desc: "\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u6574\u4f53\u7814\u53d1\u89e3\u51b3\u65b9\u6848\uff0c\u52a9\u529b\u4f01\u4e1a\u7814\u53d1\u6a21\u5f0f\u5347\u7ea7",
                            tags: ["\u6280\u672f\u4e2d\u53f0"]
                        }, {
                            link: "/product/apmplus",
                            name: "\u5e94\u7528\u6027\u80fd\u76d1\u63a7\u5168\u94fe\u8def\u7248",
                            desc: "\u4e3a\u4f01\u4e1a\u63d0\u4f9b\u5168\u94fe\u8def\u7684\u5e94\u7528\u6027\u80fd\u76d1\u63a7\u670d\u52a1",
                            tags: ["\u5168\u94fe\u8def\u76d1\u63a7"]
                        }, {
                            link: "/products/feilian",
                            name: "\u98de\u8fde",
                            desc: "\u5b89\u5168\u3001\u4fbf\u6377\u7684\u6570\u5b57\u5316\u529e\u516c\u5e73\u53f0"
                        }, {
                            link: "/product/mars-mobile",
                            name: "\u79fb\u52a8\u7814\u53d1\u5e73\u53f0",
                            desc: "\u9762\u5411\u5ba2\u6237\u7aef\u7814\u53d1\uff0c\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u79fb\u52a8\u7814\u53d1\u89e3\u51b3\u65b9\u6848",
                            tags: ["\u4f4e\u6210\u672c", "\u4e00\u7ad9\u5f0f"]
                        }]
                    }]
                };
            t.Z = o
        },
        96813: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return i
                }
            });
            var i = {
                title: {
                    title: "\u5168\u9762\u6210\u719f\u7684\u89e3\u51b3\u65b9\u6848",
                    subTitle: "\u63d0\u4f9b\u591a\u5143\u573a\u666f\u4e92\u8054",
                    reverse: !0
                },
                solutionListData: [{
                    icon: "solution_financial",
                    iconHover: "hover_solution_financial",
                    title: "\u91d1\u878d",
                    description: "\u56f4\u7ed5\u8425\u9500\u548c\u4f53\u9a8c\u4e24\u5927\u573a\u666f\uff0c\u4e3a\u91d1\u878d\u673a\u6784\u63d0\u4f9b\u4ece\u5e95\u5c42\u8bbe\u65bd\u5230\u4e0a\u5c42\u5e94\u7528\u7684\u5168\u6808\u89e3\u51b3\u65b9\u6848\uff0c\u4f7f\u80fd\u4e1a\u52a1\u589e\u957f",
                    link: "/solutions/finance"
                }, {
                    icon: "solution_game",
                    iconHover: "hover_solution_game",
                    title: "\u6e38\u620f",
                    description: "\u9762\u5411\u6e38\u620f\u4ea7\u54c1\u7684\u5168\u751f\u547d\u5468\u671f\uff0c\u4e3a\u6e38\u620f\u4f01\u4e1a\u63d0\u4f9b\u5168\u94fe\u8def\u89e3\u51b3\u65b9\u6848\uff0c\u52a9\u529b\u6e38\u620f\u4ea7\u4e1a\u964d\u672c\u589e\u6548",
                    link: "/solutions/game"
                }, {
                    icon: "solution_consumption",
                    iconHover: "hover_solution_consumption",
                    title: "\u5927\u6d88\u8d39",
                    description: "\u56f4\u7ed5\u4eba\u8d27\u573a\uff0c\u4e3a\u5927\u6d88\u8d39\u884c\u4e1a\u4f01\u4e1a\u63d0\u4f9b\u516c\u57df\u6295\u653e\u3001\u79c1\u57df\u8fd0\u8425\u3001\u5168\u5458\u8425\u9500\u3001\u65b0\u54c1\u4e0a\u5e02\u7b49\u89e3\u51b3\u65b9\u6848\uff0c\u52a9\u529b\u751f\u610f\u589e\u957f",
                    link: "/solutions/GeneralConsumption"
                }, {
                    icon: "solution_smart_media",
                    iconHover: "hover_solution_smart_media",
                    title: "\u4f20\u5a92",
                    description: "\u57fa\u4e8e\u5b57\u8282\u8df3\u52a8\u4e1a\u52a1\u5b9e\u8df5\uff0c\u4e3a\u5a92\u4f53\u5ba2\u6237\u63d0\u4f9b\u5185\u5bb9\u751f\u4ea7\u3001\u4f20\u64ad\u3001\u8fd0\u8425\u7b49\u7efc\u5408\u89e3\u51b3\u65b9\u6848\uff0c\u5b9e\u73b0\u5168\u5c40\u5316\u3001\u4e92\u52a8\u5316\u3001\u667a\u80fd\u5316\u7684\u5a92\u4f53\u8fd0\u8425",
                    link: "/solutions/smart-media"
                }, {
                    icon: "solution_travel",
                    iconHover: "hover_solution_travel",
                    title: "\u6587\u65c5",
                    description: "\u56f4\u7ed5\u8fd0\u8425\u548c\u8425\u9500\u4e24\u5927\u4e3b\u9898\uff0c\u4e3a\u666f\u533a\u63d0\u4f9b\u7ebf\u4e0a+\u7ebf\u4e0b\u7684\u5168\u94fe\u8def\u8fd0\u8425\u89e3\u51b3\u65b9\u6848\uff0c\u63d0\u5347\u4f53\u9a8c\u52a9\u529b\u589e\u957f",
                    link: "/solutions/tourism"
                }, {
                    icon: "solution_car",
                    iconHover: "hover_solution_car",
                    title: "\u6c7d\u8f66",
                    description: "\u57fa\u4e8e\u667a\u80fd\u589e\u957f\u6280\u672f\uff0c\u4e3a\u8f66\u4f01\u63d0\u4f9b\u6570\u5b57\u5316\u8f6c\u578b\u5168\u57df\u65b9\u6848\uff0c\u8ba9\u6570\u636e\u667a\u80fd\u6210\u4e3a\u6c7d\u8f66\u884c\u4e1a\u8fdb\u6b65\u7684\u52a8\u529b",
                    link: "/solutions/automotive"
                }, {
                    icon: "solution_yule",
                    iconHover: "hover_solution_yule",
                    title: "\u5a31\u4e50\u793e\u4ea4\u4e00\u4f53\u5316",
                    description: "\u4f9d\u6258\u4e30\u5bcc\u7684\u751f\u6001\u8d44\u6e90\u4e0e\u89e3\u51b3\u65b9\u6848\u80fd\u529b\uff0c\u52a9\u529b\u4e92\u5a31\u8d44\u8baf\u5ba2\u6237\u6269\u5927\u7528\u6237\u89e6\u70b9\u3001\u9a71\u52a8\u4ea4\u4e92\u521b\u65b0\u3001\u4f18\u5316\u5e94\u7528\u4f53\u9a8c\uff0c\u5b9e\u73b0\u4e1a\u52a1\u589e\u957f",
                    link: "/solutions/social"
                }, {
                    icon: "solution_hope",
                    title: "\u671f\u5f85\u66f4\u591a",
                    link: ""
                }]
            }
        },
        81516: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return o
                }
            });
            var i = n(13768),
                o = function() {
                    function e(e, t, n, i, o) {
                        void 0 === n && (n = 0), void 0 === i && (i = !1), void 0 === o && (o = 1 / 0), this.type = void 0, this.baseline = void 0, this.resolution = void 0, this.elementStatus = void 0, this.enterTime = void 0, this.elements = void 0, this.topicList = void 0, this.baseline = n, this.type = i, this.elementStatus = new Array(e.length).fill(!1), this.enterTime = new Array(e.length).fill(-1), this.elements = e, this.topicList = t, this.resolution = o, this.elements.length > 0 && (this.elementStatus[0] = !0, this.enterTime[0] = Date.now() - 0)
                    }
                    var t = e.prototype;
                    return t.isInViewPort = function(e) {
                        var t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                        return !!e && (this.type ? e.getBoundingClientRect().y + e.offsetHeight >= this.baseline && e.getBoundingClientRect().y + this.baseline < t : Math.abs(e.offsetTop - document.documentElement.scrollTop) <= t)
                    }, t.checkStatus = function(e) {
                        if (void 0 === e && (e = 0), !(window.innerWidth > this.resolution))
                            for (var t = 0; t < this.elements.length; t++) {
                                var n = this.elements[t];
                                if (n) {
                                    var o = this.isInViewPort(n);
                                    o !== this.elementStatus[t] && (this.elementStatus[t] = o, o ? this.enterTime[t] = Date.now() - 0 : (0, i.gE)("module_time", {
                                        topic: this.topicList[t],
                                        time_on_module: (Date.now() - this.enterTime[t] - e) / 1e3,
                                        size_of_module: n.offsetHeight
                                    }))
                                }
                            }
                    }, t.beforeunload = function() {
                        if (!(window.innerWidth > this.resolution))
                            for (var e = 0; e < this.elements.length; e++) this.elementStatus[e] && (0, i.gE)("module_time", {
                                topic: this.topicList[e],
                                time_on_module: (Date.now() - this.enterTime[e]) / 1e3,
                                size_of_module: this.elements[e].offsetHeight
                            })
                    }, e
                }()
        },
        62498: function(e, t) {
            t.Z = {
                oneLineEllipsis: "index-module__oneLineEllipsis--eR6YH",
                twoLineEllipsis: "index-module__twoLineEllipsis--IOSnU",
                fixed: "index-module__fixed--M5xXy",
                fixedScreenWrapper: "index-module__fixedScreenWrapper--HDtpJ",
                screensContainer: "index-module__screensContainer--mHrcH",
                screensWrapper: "index-module__screensWrapper--SEExw",
                scrollScreensWrapper: "index-module__scrollScreensWrapper--_P7NA"
            }
        },
        22713: function(e) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKmSURBVHgB1ZldSuNQFMdPa1GUKQiCokxhnuz77GMWMOuYBQzuwhXou7gN33xREAKCX6gISkWx1P+/ubemadKbm5yb1B8c28ak/Hpycj9FvhktUWI0Gi3hZQWxjFgyh4cmBq1WaygKlBY2guuILuKHxLLzoPAz4omv+AHvUgJvYYgyg1uIDfnKZBkeGBB/9rmosLDJaE9iUU2Y8cuiGS8kDNlNvOxItYy6uIL0teskpzBkf0pcAnUwQFzMy3ausCmBPmJV6oWyZ3nSmcINylpypds5F/yS5mQJW6K+SdwUM8I4aVvi9rVpKN1LH5wSNm3sjiwOG3CaakbTGe7L4tFLlsZE2PySZVk8KLtpPyQzXLYUeN1/xK6EY8tmeSyMDxzAlM3ub8QfxIHE4iGeAcqOa9lmWGt8QPF9xF/RZ9xyWeGu6MEM/0MciW6ZdFkWbfxhBxHiYaO4dpmsM8NrEhbNMlmlcB1dsFaZrFDYNbXRpGqZrFE45KA8D1sm3g97W5rFW7gj9cNJ56EJrwkoofCb6LbD8zhB7CGupBwfFFZZ4HBAQYqeSDWGFH6VcFS6/RkMOkpflEXV25/FS4cTPXTPLAut5k3r9mcxsK3EvVRfe9C+/TPfz+SOp/lmPFy2y+S1HCcci+7tTxNB+GGyLgHpXamvefPlDbKnfJPs6ZzrWg3yaN9MhM2yZ6gWowrs2G7th/RYIpJ6OhIfrpOr91PCZi0r5IPjyx0ftOSBmdEaTriTeHW8abgvcpk+mDm8xImRNFvPrNuLrH+41odDbBG4oOy51/pwEohzKrMt9cD9jmjeFlnRPQ5mmdKh5n8fiBuI3rpO9NlFskux2iXCZyVS3UVKkhAvspmYBzPK3usp2D5dFmbQxIxzbcO1IMOH6UXMbmjZrdxPxjHIpsJ1l04AAAAASUVORK5CYII="
        }
    }
]);

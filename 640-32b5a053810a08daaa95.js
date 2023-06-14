"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [640], {
        9890: function(t, e, n) {
            n.d(e, {
                w: function() {
                    return s
                }
            });
            var o = n(5671),
                a = n(3144),
                r = n(9669),
                c = n.n(r),
                s = new(function() {
                    function t() {
                        (0, o.Z)(this, t), this.baseURL = "".concat("https://translate.googleapis.com"), this._noAuth = null
                    }
                    return (0, a.Z)(t, [{
                        key: "noAuth",
                        get: function() {
                            return this._noAuth || (this._noAuth = c().create({
                                baseURL: this.baseURL
                            })), this._noAuth
                        }
                    }, {
                        key: "parse",
                        value: function(t) {
                            try {
                                var e = t.data,
                                    n = t.status,
                                    o = t.statusText;
                                switch (n) {
                                    case 201:
                                    case 200:
                                    case 204:
                                        return {
                                            data: e,
                                            status: n,
                                            error: null
                                        };
                                    case 401:
                                    case 400:
                                    case 404:
                                        return {
                                            data: null,
                                            status: n,
                                            error: e
                                        };
                                    default:
                                        return {
                                            data: null,
                                            status: n,
                                            error: o
                                        }
                                }
                            } catch (a) {
                                return console.error(a), {
                                    data: null,
                                    status: null,
                                    error: "Oops, something went wrong, please try again"
                                }
                            }
                        }
                    }, {
                        key: "parseAndAutoHandleIssues",
                        value: function(t) {
                            var e = this.parse(t),
                                n = e.data,
                                o = e.error,
                                a = e.status;
                            return 401 === a || 400 === a || 404 === a ? o : (o && (n = null), n)
                        }
                    }]), t
                }())
        },
        1282: function(t, e, n) {
            n.d(e, {
                WF: function() {
                    return l
                },
                CR: function() {
                    return u
                }
            });
            var o = n(4942),
                a = n(3254),
                r = n(7294),
                c = n(5893);

            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach((function(e) {
                        (0, o.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function l(t) {
                var e = t.slotId,
                    n = t.classes;
                return (0, r.useEffect)((function() {
                    window.adsbygoogle = window.adsbygoogle || [], window.adsbygoogle.push({})
                }), []), (0, c.jsx)("aside", {
                    children: (0, c.jsx)("ins", {
                        className: "adsbygoogle ".concat(n || ""),
                        style: {
                            display: "block",
                            textAlign: "center"
                        },
                        "data-ad-layout": "in-article",
                        "data-ad-format": "fluid",
                        "data-ad-client": a.Nv,
                        "data-ad-slot": e
                    })
                })
            }

            function u(t) {
                var e = t.slotId,
                    n = t.classes,
                    o = t.style;
                return (0, r.useEffect)((function() {
                    window.adsbygoogle = window.adsbygoogle || [], window.adsbygoogle.push({})
                }), []), (0, c.jsx)("aside", {
                    children: (0, c.jsx)("ins", {
                        className: "adsbygoogle ".concat(n || ""),
                        style: i({
                            display: "inline-block"
                        }, o),
                        "data-ad-client": a.Nv,
                        "data-ad-slot": e
                    })
                })
            }
        },
        4635: function(t, e, n) {
            var o = n(9008),
                a = (n(7294), n(3254)),
                r = n(5893);

            function c(t) {
                var e = t.fromDisplayName,
                    n = t.toDisplayName,
                    o = t.link,
                    a = {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [{
                            "@type": "Question",
                            name: "How to translate ".concat(e, " to ").concat(n, " text?"),
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: "<ul>\n                    <li><strong>Click on this </strong><a href=".concat(o, " target='_blank'>link</a></li>\n                    <li>Paste your word, text, sentence, a paragraph in the text area.</li>\n                    <li>Click on translate button.</li>\n                    <li>Copy your translated text by clicking copy button.</li>\n                </ul>")
                            }
                        }, {
                            "@type": "Question",
                            name: "Can I type in ".concat(n, " with ").concat(e, " Keyboard?"),
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: "<div >Yes, it is very easy to use this feature using our <a href=".concat(o, " target='_blank'> ").concat(e, " to ").concat(n, " translation </a> online tool</div>")
                            }
                        }, {
                            "@type": "Question",
                            name: "Can I download translated text ?",
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: "<div>Yes, There is an option to<strong> download the translated text as word and text file. </strong></div>"
                            }
                        }]
                    };
                return (0, r.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(a)
                    }
                })
            }
            e.Z = function(t) {
                var e = t.title,
                    n = t.metaDescription,
                    s = t.link,
                    i = t.keyWord,
                    l = t.isIndexing,
                    u = t.fromDisplayName,
                    d = t.toDisplayName,
                    m = t.isShowingRichSnipet;
                return (0, r.jsxs)(o.default, {
                    children: [(0, r.jsx)("title", {
                        children: e
                    }), (0, r.jsx)("meta", {
                        name: "title",
                        content: e
                    }), (0, r.jsx)("meta", {
                        name: "description",
                        content: n
                    }), (0, r.jsx)("meta", {
                        name: "keywords",
                        content: i
                    }), (0, r.jsx)("meta", {
                        property: "og:url",
                        content: s
                    }), (0, r.jsx)("meta", {
                        property: "og:site_name",
                        content: a._U
                    }), (0, r.jsx)("meta", {
                        property: "og:title",
                        content: e
                    }), (0, r.jsx)("meta", {
                        property: "og:description",
                        content: n
                    }), (0, r.jsx)("meta", {
                        property: "og:image",
                        content: "".concat(a.FH, "/linkPreviewImg.png")
                    }), (0, r.jsx)("meta", {
                        name: "twitter:image",
                        content: "".concat(a.FH, "/linkPreviewImg.png")
                    }), (0, r.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, r.jsx)("meta", {
                        name: "twitter:title",
                        content: e
                    }), (0, r.jsx)("meta", {
                        name: "twitter:description",
                        content: n
                    }), (0, r.jsx)("link", {
                        rel: "canonical",
                        href: s
                    }), (0, r.jsx)("meta", {
                        name: "url",
                        content: s
                    }), (0, r.jsx)("meta", {
                        name: "robots",
                        content: "".concat(l ? "index" : "noindex", ", follow")
                    }), m && (0, r.jsx)(c, {
                        fromDisplayName: u,
                        toDisplayName: d,
                        link: s
                    })]
                })
            }
        },
        97: function(t, e, n) {
            n.d(e, {
                wp: function() {
                    return a
                },
                OV: function() {
                    return r
                },
                i6: function() {
                    return c
                },
                Mw: function() {
                    return s
                }
            });
            n(7294);
            var o = n(6710);
            n(3254), n(5893), Object.keys(o.S);

            function a(t) {
                var e = t.text,
                    n = t.inputId,
                    o = document.createElement("input");
                document.body.appendChild(o), o.setAttribute("id", "copy_share_link"), document.getElementById("copy_share_link").value = e, o.select(), n && document.getElementById("".concat(n)).select(), document.execCommand("copy"), document.body.removeChild(o)
            }

            function r(t) {
                var e = t.message,
                    n = (t.text, t.cb),
                    o = t.timeout;
                n && n();
                var a = document.getElementById("custom-snackbar");
                a.innerHTML = e, a.className = "show-snackbar custom-snackbar", setTimeout((function() {
                    a && (a.className = a.className.replace("show-snackbar custom-snackbar", "hidden"))
                }), o || 2e3)
            }

            function c(t) {
                var e = t.text,
                    n = t.file_name,
                    o = new Blob([e], {
                        type: "application/msword"
                    }),
                    a = window.URL.createObjectURL(o);
                null !== document.getElementById("download_as_doc") && document.body.removeChild(document.getElementById("download"));
                var r = document.createElement("a");
                r.setAttribute("id", "download_as_doc"), r.setAttribute("href", a), r.setAttribute("download", "".concat(n)), r.textContent = e, document.body.appendChild(r), r.click(), document.body.removeChild(r)
            }

            function s(t) {
                var e = t.text,
                    n = t.file_name,
                    o = document.createElement("a");
                o.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(e)), o.setAttribute("download", "".concat(n, ".txt")), o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o)
            }
        },
        4857: function(t, e, n) {
            n.d(e, {
                Q: function() {
                    return c
                },
                B: function() {
                    return s
                }
            });
            var o = n(5861),
                a = n(7757),
                r = n.n(a);

            function c() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = t;
                document.querySelectorAll(".input-text-box").forEach((function(t) {
                    t.style.height = "auto", e || (e = t.scrollHeight), t.style.height = e + "px"
                }))
            }

            function s() {
                return i.apply(this, arguments)
            }

            function i() {
                return (i = (0, o.Z)(r().mark((function t() {
                    return r().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                document.querySelectorAll("#fromInputText").forEach((function(t) {
                                    document.querySelector("#fromInputText").addEventListener("keyup", (function() {
                                        c()
                                    }))
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        }
    }
]);
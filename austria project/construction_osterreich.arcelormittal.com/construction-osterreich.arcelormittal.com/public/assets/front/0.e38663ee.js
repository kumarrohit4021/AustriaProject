(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        EVdn: function(e, t, n) {
            var r;
            ! function(t, n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e)
                } : n(t)
            }("undefined" != typeof window ? window : this, (function(n, i) {
                "use strict";
                var o = [],
                    a = Object.getPrototypeOf,
                    s = o.slice,
                    u = o.flat ? function(e) {
                        return o.flat.call(e)
                    } : function(e) {
                        return o.concat.apply([], e)
                    },
                    l = o.push,
                    c = o.indexOf,
                    f = {},
                    p = f.toString,
                    d = f.hasOwnProperty,
                    h = d.toString,
                    g = h.call(Object),
                    v = {},
                    y = function(e) {
                        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                    },
                    m = function(e) {
                        return null != e && e === e.window
                    },
                    x = n.document,
                    b = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };

                function w(e, t, n) {
                    var r, i, o = (n = n || x).createElement("script");
                    if (o.text = e, t)
                        for (r in b)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                    n.head.appendChild(o).parentNode.removeChild(o)
                }

                function T(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
                }
                var C = /HTML$/i,
                    S = function(e, t) {
                        return new S.fn.init(e, t)
                    };

                function k(e) {
                    var t = !!e && "length" in e && e.length,
                        n = T(e);
                    return !y(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }

                function E(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                S.fn = S.prototype = {
                    jquery: "3.7.1",
                    constructor: S,
                    length: 0,
                    toArray: function() {
                        return s.call(this)
                    },
                    get: function(e) {
                        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = S.merge(this.constructor(), e);
                        return t.prevObject = this, t
                    },
                    each: function(e) {
                        return S.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(S.map(this, (function(t, n) {
                            return e.call(t, n, t)
                        })))
                    },
                    slice: function() {
                        return this.pushStack(s.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(S.grep(this, (function(e, t) {
                            return (t + 1) % 2
                        })))
                    },
                    odd: function() {
                        return this.pushStack(S.grep(this, (function(e, t) {
                            return t % 2
                        })))
                    },
                    eq: function(e) {
                        var t = this.length,
                            n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: l,
                    sort: o.sort,
                    splice: o.splice
                }, S.extend = S.fn.extend = function() {
                    var e, t, n, r, i, o, a = arguments[0] || {},
                        s = 1,
                        u = arguments.length,
                        l = !1;
                    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                        if (null != (e = arguments[s]))
                            for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                    return a
                }, S.extend({
                    expando: "jQuery" + ("3.7.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== p.call(e)) && (!(t = a(e)) || "function" == typeof(n = d.call(t, "constructor") && t.constructor) && h.call(n) === g)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        w(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (k(e))
                            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                        else
                            for (r in e)
                                if (!1 === t.call(e[r], r, e[r])) break;
                        return e
                    },
                    text: function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (!i)
                            for (; t = e[r++];) n += S.text(t);
                        return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (k(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : c.call(t, e, n)
                    },
                    isXMLDoc: function(e) {
                        var t = e && e.namespaceURI,
                            n = e && (e.ownerDocument || e).documentElement;
                        return !C.test(t || n && n.nodeName || "HTML")
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                        return e.length = i, e
                    },
                    grep: function(e, t, n) {
                        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                        return r
                    },
                    map: function(e, t, n) {
                        var r, i, o = 0,
                            a = [];
                        if (k(e))
                            for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                        else
                            for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                        return u(a)
                    },
                    guid: 1,
                    support: v
                }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = o[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    f["[object " + t + "]"] = t.toLowerCase()
                }));
                var j = o.pop,
                    A = o.sort,
                    D = o.splice,
                    N = "[\\x20\\t\\r\\n\\f]",
                    q = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g");
                S.contains = function(e, t) {
                    var n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                };
                var L = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

                function H(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }
                S.escapeSelector = function(e) {
                    return (e + "").replace(L, H)
                };
                var O = x,
                    P = l;
                ! function() {
                    var e, t, r, i, a, u, l, f, p, h, g = P,
                        y = S.expando,
                        m = 0,
                        x = 0,
                        b = ee(),
                        w = ee(),
                        T = ee(),
                        C = ee(),
                        k = function(e, t) {
                            return e === t && (a = !0), 0
                        },
                        L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        H = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        M = "\\[" + N + "*(" + H + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + N + "*\\]",
                        R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                        I = new RegExp(N + "+", "g"),
                        W = new RegExp("^" + N + "*," + N + "*"),
                        F = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
                        $ = new RegExp(N + "|>"),
                        B = new RegExp(R),
                        _ = new RegExp("^" + H + "$"),
                        z = {
                            ID: new RegExp("^#(" + H + ")"),
                            CLASS: new RegExp("^\\.(" + H + ")"),
                            TAG: new RegExp("^(" + H + "|[*])"),
                            ATTR: new RegExp("^" + M),
                            PSEUDO: new RegExp("^" + R),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + L + ")$", "i"),
                            needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
                        },
                        X = /^(?:input|select|textarea|button)$/i,
                        U = /^h\d$/i,
                        V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        G = /[+~]/,
                        Y = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])", "g"),
                        J = function(e, t) {
                            var n = "0x" + e.slice(1) - 65536;
                            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                        },
                        Q = function() {
                            ue()
                        },
                        K = pe((function(e) {
                            return !0 === e.disabled && E(e, "fieldset")
                        }), {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        g.apply(o = s.call(O.childNodes), O.childNodes), o[O.childNodes.length].nodeType
                    } catch (e) {
                        g = {
                            apply: function(e, t) {
                                P.apply(e, s.call(t))
                            },
                            call: function(e) {
                                P.apply(e, s.call(arguments, 1))
                            }
                        }
                    }

                    function Z(e, t, n, r) {
                        var i, o, a, s, l, c, d, h = t && t.ownerDocument,
                            m = t ? t.nodeType : 9;
                        if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                        if (!r && (ue(t), t = t || u, f)) {
                            if (11 !== m && (l = V.exec(e)))
                                if (i = l[1]) {
                                    if (9 === m) {
                                        if (!(a = t.getElementById(i))) return n;
                                        if (a.id === i) return g.call(n, a), n
                                    } else if (h && (a = h.getElementById(i)) && Z.contains(t, a) && a.id === i) return g.call(n, a), n
                                } else {
                                    if (l[2]) return g.apply(n, t.getElementsByTagName(e)), n;
                                    if ((i = l[3]) && t.getElementsByClassName) return g.apply(n, t.getElementsByClassName(i)), n
                                }
                            if (!(C[e + " "] || p && p.test(e))) {
                                if (d = e, h = t, 1 === m && ($.test(e) || F.test(e))) {
                                    for ((h = G.test(e) && se(t.parentNode) || t) == t && v.scope || ((s = t.getAttribute("id")) ? s = S.escapeSelector(s) : t.setAttribute("id", s = y)), o = (c = ce(e)).length; o--;) c[o] = (s ? "#" + s : ":scope") + " " + fe(c[o]);
                                    d = c.join(",")
                                }
                                try {
                                    return g.apply(n, h.querySelectorAll(d)), n
                                } catch (t) {
                                    C(e, !0)
                                } finally {
                                    s === y && t.removeAttribute("id")
                                }
                            }
                        }
                        return me(e.replace(q, "$1"), t, n, r)
                    }

                    function ee() {
                        var e = [];
                        return function n(r, i) {
                            return e.push(r + " ") > t.cacheLength && delete n[e.shift()], n[r + " "] = i
                        }
                    }

                    function te(e) {
                        return e[y] = !0, e
                    }

                    function ne(e) {
                        var t = u.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function re(e) {
                        return function(t) {
                            return E(t, "input") && t.type === e
                        }
                    }

                    function ie(e) {
                        return function(t) {
                            return (E(t, "input") || E(t, "button")) && t.type === e
                        }
                    }

                    function oe(e) {
                        return function(t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && K(t) === e : t.disabled === e : "label" in t && t.disabled === e
                        }
                    }

                    function ae(e) {
                        return te((function(t) {
                            return t = +t, te((function(n, r) {
                                for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                            }))
                        }))
                    }

                    function se(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }

                    function ue(e) {
                        var n, r = e ? e.ownerDocument || e : O;
                        return r != u && 9 === r.nodeType && r.documentElement ? (l = (u = r).documentElement, f = !S.isXMLDoc(u), h = l.matches || l.webkitMatchesSelector || l.msMatchesSelector, l.msMatchesSelector && O != u && (n = u.defaultView) && n.top !== n && n.addEventListener("unload", Q), v.getById = ne((function(e) {
                            return l.appendChild(e).id = S.expando, !u.getElementsByName || !u.getElementsByName(S.expando).length
                        })), v.disconnectedMatch = ne((function(e) {
                            return h.call(e, "*")
                        })), v.scope = ne((function() {
                            return u.querySelectorAll(":scope")
                        })), v.cssHas = ne((function() {
                            try {
                                return u.querySelector(":has(*,:jqfake)"), !1
                            } catch (e) {
                                return !0
                            }
                        })), v.getById ? (t.filter.ID = function(e) {
                            var t = e.replace(Y, J);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, t.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && f) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (t.filter.ID = function(e) {
                            var t = e.replace(Y, J);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, t.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && f) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), t.find.TAG = function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
                        }, t.find.CLASS = function(e, t) {
                            if (void 0 !== t.getElementsByClassName && f) return t.getElementsByClassName(e)
                        }, p = [], ne((function(e) {
                            var t;
                            l.appendChild(e).innerHTML = "<a id='" + y + "' href='' disabled='disabled'></a><select id='" + y + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || p.push("\\[" + N + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + y + "-]").length || p.push("~="), e.querySelectorAll("a#" + y + "+*").length || p.push(".#.+[+~]"), e.querySelectorAll(":checked").length || p.push(":checked"), (t = u.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), l.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), (t = u.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")")
                        })), v.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), k = function(e, t) {
                            if (e === t) return a = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument == O && Z.contains(O, e) ? -1 : t === u || t.ownerDocument == O && Z.contains(O, t) ? 1 : i ? c.call(i, e) - c.call(i, t) : 0 : 4 & n ? -1 : 1)
                        }, u) : u
                    }
                    for (e in Z.matches = function(e, t) {
                            return Z(e, null, null, t)
                        }, Z.matchesSelector = function(e, t) {
                            if (ue(e), f && !C[t + " "] && (!p || !p.test(t))) try {
                                var n = h.call(e, t);
                                if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                            } catch (e) {
                                C(t, !0)
                            }
                            return Z(t, u, null, [e]).length > 0
                        }, Z.contains = function(e, t) {
                            return (e.ownerDocument || e) != u && ue(e), S.contains(e, t)
                        }, Z.attr = function(e, n) {
                            (e.ownerDocument || e) != u && ue(e);
                            var r = t.attrHandle[n.toLowerCase()],
                                i = r && d.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !f) : void 0;
                            return void 0 !== i ? i : e.getAttribute(n)
                        }, Z.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }, S.uniqueSort = function(e) {
                            var t, n = [],
                                r = 0,
                                o = 0;
                            if (a = !v.sortStable, i = !v.sortStable && s.call(e, 0), A.call(e, k), a) {
                                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                                for (; r--;) D.call(e, n[r], 1)
                            }
                            return i = null, e
                        }, S.fn.uniqueSort = function() {
                            return this.pushStack(S.uniqueSort(s.apply(this)))
                        }, (t = S.expr = {
                            cacheLength: 50,
                            createPseudo: te,
                            match: z,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(Y, J), e[3] = (e[3] || e[4] || e[5] || "").replace(Y, J), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Z.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Z.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[6] && e[2];
                                    return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && B.test(n) && (t = ce(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(Y, J).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    } : function(e) {
                                        return E(e, t)
                                    }
                                },
                                CLASS: function(e) {
                                    var t = b[e + " "];
                                    return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && b(e, (function(e) {
                                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                    }))
                                },
                                ATTR: function(e, t, n) {
                                    return function(r) {
                                        var i = Z.attr(r, e);
                                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(e, t, n, r, i) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === r && 0 === i ? function(e) {
                                        return !!e.parentNode
                                    } : function(t, n, u) {
                                        var l, c, f, p, d, h = o !== a ? "nextSibling" : "previousSibling",
                                            g = t.parentNode,
                                            v = s && t.nodeName.toLowerCase(),
                                            x = !u && !s,
                                            b = !1;
                                        if (g) {
                                            if (o) {
                                                for (; h;) {
                                                    for (f = t; f = f[h];)
                                                        if (s ? E(f, v) : 1 === f.nodeType) return !1;
                                                    d = h = "only" === e && !d && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (d = [a ? g.firstChild : g.lastChild], a && x) {
                                                for (b = (p = (l = (c = g[y] || (g[y] = {}))[e] || [])[0] === m && l[1]) && l[2], f = p && g.childNodes[p]; f = ++p && f && f[h] || (b = p = 0) || d.pop();)
                                                    if (1 === f.nodeType && ++b && f === t) {
                                                        c[e] = [m, p, b];
                                                        break
                                                    }
                                            } else if (x && (b = p = (l = (c = t[y] || (t[y] = {}))[e] || [])[0] === m && l[1]), !1 === b)
                                                for (;
                                                    (f = ++p && f && f[h] || (b = p = 0) || d.pop()) && (!(s ? E(f, v) : 1 === f.nodeType) || !++b || (x && ((c = f[y] || (f[y] = {}))[e] = [m, b]), f !== t)););
                                            return (b -= i) === r || b % r == 0 && b / r >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, n) {
                                    var r, i = t.pseudos[e] || t.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                                    return i[y] ? i(n) : i.length > 1 ? (r = [e, e, "", n], t.setFilters.hasOwnProperty(e.toLowerCase()) ? te((function(e, t) {
                                        for (var r, o = i(e, n), a = o.length; a--;) e[r = c.call(e, o[a])] = !(t[r] = o[a])
                                    })) : function(e) {
                                        return i(e, 0, r)
                                    }) : i
                                }
                            },
                            pseudos: {
                                not: te((function(e) {
                                    var t = [],
                                        n = [],
                                        r = ye(e.replace(q, "$1"));
                                    return r[y] ? te((function(e, t, n, i) {
                                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                    })) : function(e, i, o) {
                                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                    }
                                })),
                                has: te((function(e) {
                                    return function(t) {
                                        return Z(e, t).length > 0
                                    }
                                })),
                                contains: te((function(e) {
                                    return e = e.replace(Y, J),
                                        function(t) {
                                            return (t.textContent || S.text(t)).indexOf(e) > -1
                                        }
                                })),
                                lang: te((function(e) {
                                    return _.test(e || "") || Z.error("unsupported lang: " + e), e = e.replace(Y, J).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do {
                                                if (n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                })),
                                target: function(e) {
                                    var t = n.location && n.location.hash;
                                    return t && t.slice(1) === e.id
                                },
                                root: function(e) {
                                    return e === l
                                },
                                focus: function(e) {
                                    return e === function() {
                                        try {
                                            return u.activeElement
                                        } catch (e) {}
                                    }() && u.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: oe(!1),
                                disabled: oe(!0),
                                checked: function(e) {
                                    return E(e, "input") && !!e.checked || E(e, "option") && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !t.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return U.test(e.nodeName)
                                },
                                input: function(e) {
                                    return X.test(e.nodeName)
                                },
                                button: function(e) {
                                    return E(e, "input") && "button" === e.type || E(e, "button")
                                },
                                text: function(e) {
                                    var t;
                                    return E(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: ae((function() {
                                    return [0]
                                })),
                                last: ae((function(e, t) {
                                    return [t - 1]
                                })),
                                eq: ae((function(e, t, n) {
                                    return [n < 0 ? n + t : n]
                                })),
                                even: ae((function(e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e
                                })),
                                odd: ae((function(e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e
                                })),
                                lt: ae((function(e, t, n) {
                                    var r;
                                    for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                    return e
                                })),
                                gt: ae((function(e, t, n) {
                                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                    return e
                                }))
                            }
                        }).pseudos.nth = t.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) t.pseudos[e] = re(e);
                    for (e in {
                            submit: !0,
                            reset: !0
                        }) t.pseudos[e] = ie(e);

                    function le() {}

                    function ce(e, n) {
                        var r, i, o, a, s, u, l, c = w[e + " "];
                        if (c) return n ? 0 : c.slice(0);
                        for (s = e, u = [], l = t.preFilter; s;) {
                            for (a in r && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = F.exec(s)) && (r = i.shift(), o.push({
                                    value: r,
                                    type: i[0].replace(q, " ")
                                }), s = s.slice(r.length)), t.filter) !(i = z[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                                value: r,
                                type: a,
                                matches: i
                            }), s = s.slice(r.length));
                            if (!r) break
                        }
                        return n ? s.length : s ? Z.error(e) : w(e, u).slice(0)
                    }

                    function fe(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r
                    }

                    function pe(e, t, n) {
                        var r = t.dir,
                            i = t.next,
                            o = i || r,
                            a = n && "parentNode" === o,
                            s = x++;
                        return t.first ? function(t, n, i) {
                            for (; t = t[r];)
                                if (1 === t.nodeType || a) return e(t, n, i);
                            return !1
                        } : function(t, n, u) {
                            var l, c, f = [m, s];
                            if (u) {
                                for (; t = t[r];)
                                    if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                            } else
                                for (; t = t[r];)
                                    if (1 === t.nodeType || a)
                                        if (c = t[y] || (t[y] = {}), i && E(t, i)) t = t[r] || t;
                                        else {
                                            if ((l = c[o]) && l[0] === m && l[1] === s) return f[2] = l[2];
                                            if (c[o] = f, f[2] = e(t, n, u)) return !0
                                        } return !1
                        }
                    }

                    function de(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var i = e.length; i--;)
                                if (!e[i](t, n, r)) return !1;
                            return !0
                        } : e[0]
                    }

                    function he(e, t, n, r, i) {
                        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                        return a
                    }

                    function ge(e, t, n, r, i, o) {
                        return r && !r[y] && (r = ge(r)), i && !i[y] && (i = ge(i, o)), te((function(o, a, s, u) {
                            var l, f, p, d, h = [],
                                v = [],
                                y = a.length,
                                m = o || function(e, t, n) {
                                    for (var r = 0, i = t.length; r < i; r++) Z(e, t[r], n);
                                    return n
                                }(t || "*", s.nodeType ? [s] : s, []),
                                x = !e || !o && t ? m : he(m, h, e, s, u);
                            if (n ? n(x, d = i || (o ? e : y || r) ? [] : a, s, u) : d = x, r)
                                for (l = he(d, v), r(l, [], s, u), f = l.length; f--;)(p = l[f]) && (d[v[f]] = !(x[v[f]] = p));
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        for (l = [], f = d.length; f--;)(p = d[f]) && l.push(x[f] = p);
                                        i(null, d = [], l, u)
                                    }
                                    for (f = d.length; f--;)(p = d[f]) && (l = i ? c.call(o, p) : h[f]) > -1 && (o[l] = !(a[l] = p))
                                }
                            } else d = he(d === a ? d.splice(y, d.length) : d), i ? i(null, a, d, u) : g.apply(a, d)
                        }))
                    }

                    function ve(e) {
                        for (var n, i, o, a = e.length, s = t.relative[e[0].type], u = s || t.relative[" "], l = s ? 1 : 0, f = pe((function(e) {
                                return e === n
                            }), u, !0), p = pe((function(e) {
                                return c.call(n, e) > -1
                            }), u, !0), d = [function(e, t, i) {
                                var o = !s && (i || t != r) || ((n = t).nodeType ? f(e, t, i) : p(e, t, i));
                                return n = null, o
                            }]; l < a; l++)
                            if (i = t.relative[e[l].type]) d = [pe(de(d), i)];
                            else {
                                if ((i = t.filter[e[l].type].apply(null, e[l].matches))[y]) {
                                    for (o = ++l; o < a && !t.relative[e[o].type]; o++);
                                    return ge(l > 1 && de(d), l > 1 && fe(e.slice(0, l - 1).concat({
                                        value: " " === e[l - 2].type ? "*" : ""
                                    })).replace(q, "$1"), i, l < o && ve(e.slice(l, o)), o < a && ve(e = e.slice(o)), o < a && fe(e))
                                }
                                d.push(i)
                            }
                        return de(d)
                    }

                    function ye(e, n) {
                        var i, o = [],
                            a = [],
                            s = T[e + " "];
                        if (!s) {
                            for (n || (n = ce(e)), i = n.length; i--;)(s = ve(n[i]))[y] ? o.push(s) : a.push(s);
                            (s = T(e, function(e, n) {
                                var i = n.length > 0,
                                    o = e.length > 0,
                                    a = function(a, s, l, c, p) {
                                        var d, h, v, y = 0,
                                            x = "0",
                                            b = a && [],
                                            w = [],
                                            T = r,
                                            C = a || o && t.find.TAG("*", p),
                                            k = m += null == T ? 1 : Math.random() || .1,
                                            E = C.length;
                                        for (p && (r = s == u || s || p); x !== E && null != (d = C[x]); x++) {
                                            if (o && d) {
                                                for (h = 0, s || d.ownerDocument == u || (ue(d), l = !f); v = e[h++];)
                                                    if (v(d, s || u, l)) {
                                                        g.call(c, d);
                                                        break
                                                    }
                                                p && (m = k)
                                            }
                                            i && ((d = !v && d) && y--, a && b.push(d))
                                        }
                                        if (y += x, i && x !== y) {
                                            for (h = 0; v = n[h++];) v(b, w, s, l);
                                            if (a) {
                                                if (y > 0)
                                                    for (; x--;) b[x] || w[x] || (w[x] = j.call(c));
                                                w = he(w)
                                            }
                                            g.apply(c, w), p && !a && w.length > 0 && y + n.length > 1 && S.uniqueSort(c)
                                        }
                                        return p && (m = k, r = T), b
                                    };
                                return i ? te(a) : a
                            }(a, o))).selector = e
                        }
                        return s
                    }

                    function me(e, n, r, i) {
                        var o, a, s, u, l, c = "function" == typeof e && e,
                            p = !i && ce(e = c.selector || e);
                        if (r = r || [], 1 === p.length) {
                            if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === n.nodeType && f && t.relative[a[1].type]) {
                                if (!(n = (t.find.ID(s.matches[0].replace(Y, J), n) || [])[0])) return r;
                                c && (n = n.parentNode), e = e.slice(a.shift().value.length)
                            }
                            for (o = z.needsContext.test(e) ? 0 : a.length; o-- && (s = a[o], !t.relative[u = s.type]);)
                                if ((l = t.find[u]) && (i = l(s.matches[0].replace(Y, J), G.test(a[0].type) && se(n.parentNode) || n))) {
                                    if (a.splice(o, 1), !(e = i.length && fe(a))) return g.apply(r, i), r;
                                    break
                                }
                        }
                        return (c || ye(e, p))(i, n, !f, r, !n || G.test(e) && se(n.parentNode) || n), r
                    }
                    le.prototype = t.filters = t.pseudos, t.setFilters = new le, v.sortStable = y.split("").sort(k).join("") === y, ue(), v.sortDetached = ne((function(e) {
                        return 1 & e.compareDocumentPosition(u.createElement("fieldset"))
                    })), S.find = Z, S.expr[":"] = S.expr.pseudos, S.unique = S.uniqueSort, Z.compile = ye, Z.select = me, Z.setDocument = ue, Z.tokenize = ce, Z.escape = S.escapeSelector, Z.getText = S.text, Z.isXML = S.isXMLDoc, Z.selectors = S.expr, Z.support = S.support, Z.uniqueSort = S.uniqueSort
                }();
                var M = function(e, t, n) {
                        for (var r = [], i = void 0 !== n;
                            (e = e[t]) && 9 !== e.nodeType;)
                            if (1 === e.nodeType) {
                                if (i && S(e).is(n)) break;
                                r.push(e)
                            }
                        return r
                    },
                    R = function(e, t) {
                        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                        return n
                    },
                    I = S.expr.match.needsContext,
                    W = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function F(e, t, n) {
                    return y(t) ? S.grep(e, (function(e, r) {
                        return !!t.call(e, r, e) !== n
                    })) : t.nodeType ? S.grep(e, (function(e) {
                        return e === t !== n
                    })) : "string" != typeof t ? S.grep(e, (function(e) {
                        return c.call(t, e) > -1 !== n
                    })) : S.filter(t, e, n)
                }
                S.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, (function(e) {
                        return 1 === e.nodeType
                    })))
                }, S.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length,
                            i = this;
                        if ("string" != typeof e) return this.pushStack(S(e).filter((function() {
                            for (t = 0; t < r; t++)
                                if (S.contains(i[t], this)) return !0
                        })));
                        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
                        return r > 1 ? S.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(F(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(F(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!F(this, "string" == typeof e && I.test(e) ? S(e) : e || [], !1).length
                    }
                });
                var $, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (S.fn.init = function(e, t, n) {
                    var r, i;
                    if (!e) return this;
                    if (n = n || $, "string" == typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : B.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), W.test(r[1]) && S.isPlainObject(t))
                                for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return (i = x.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
                }).prototype = S.fn, $ = S(x);
                var _ = /^(?:parents|prev(?:Until|All))/,
                    z = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };

                function X(e, t) {
                    for (;
                        (e = e[t]) && 1 !== e.nodeType;);
                    return e
                }
                S.fn.extend({
                    has: function(e) {
                        var t = S(e, this),
                            n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++)
                                if (S.contains(this, t[e])) return !0
                        }))
                    },
                    closest: function(e, t) {
                        var n, r = 0,
                            i = this.length,
                            o = [],
                            a = "string" != typeof e && S(e);
                        if (!I.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? c.call(S(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }), S.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return M(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return M(e, "parentNode", n)
                    },
                    next: function(e) {
                        return X(e, "nextSibling")
                    },
                    prev: function(e) {
                        return X(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return M(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return M(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return M(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return M(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return R((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return R(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
                    }
                }, (function(e, t) {
                    S.fn[e] = function(n, r) {
                        var i = S.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = S.filter(r, i)), this.length > 1 && (z[e] || S.uniqueSort(i), _.test(e) && i.reverse()), this.pushStack(i)
                    }
                }));
                var U = /[^\x20\t\r\n\f]+/g;

                function V(e) {
                    return e
                }

                function G(e) {
                    throw e
                }

                function Y(e, t, n, r) {
                    var i;
                    try {
                        e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                S.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return S.each(e.match(U) || [], (function(e, n) {
                            t[n] = !0
                        })), t
                    }(e) : S.extend({}, e);
                    var t, n, r, i, o = [],
                        a = [],
                        s = -1,
                        u = function() {
                            for (i = i || e.once, r = t = !0; a.length; s = -1)
                                for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                        },
                        l = {
                            add: function() {
                                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                    S.each(n, (function(n, r) {
                                        y(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r)
                                    }))
                                }(arguments), n && !t && u()), this
                            },
                            remove: function() {
                                return S.each(arguments, (function(e, t) {
                                    for (var n;
                                        (n = S.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                                })), this
                            },
                            has: function(e) {
                                return e ? S.inArray(e, o) > -1 : o.length > 0
                            },
                            empty: function() {
                                return o && (o = []), this
                            },
                            disable: function() {
                                return i = a = [], o = n = "", this
                            },
                            disabled: function() {
                                return !o
                            },
                            lock: function() {
                                return i = a = [], n || t || (o = n = ""), this
                            },
                            locked: function() {
                                return !!i
                            },
                            fireWith: function(e, n) {
                                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                            },
                            fire: function() {
                                return l.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!r
                            }
                        };
                    return l
                }, S.extend({
                    Deferred: function(e) {
                        var t = [
                                ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                                ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                            ],
                            r = "pending",
                            i = {
                                state: function() {
                                    return r
                                },
                                always: function() {
                                    return o.done(arguments).fail(arguments), this
                                },
                                catch: function(e) {
                                    return i.then(null, e)
                                },
                                pipe: function() {
                                    var e = arguments;
                                    return S.Deferred((function(n) {
                                        S.each(t, (function(t, r) {
                                            var i = y(e[r[4]]) && e[r[4]];
                                            o[r[1]]((function() {
                                                var e = i && i.apply(this, arguments);
                                                e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                            }))
                                        })), e = null
                                    })).promise()
                                },
                                then: function(e, r, i) {
                                    var o = 0;

                                    function a(e, t, r, i) {
                                        return function() {
                                            var s = this,
                                                u = arguments,
                                                l = function() {
                                                    var n, l;
                                                    if (!(e < o)) {
                                                        if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        l = n && ("object" == typeof n || "function" == typeof n) && n.then, y(l) ? i ? l.call(n, a(o, t, V, i), a(o, t, G, i)) : (o++, l.call(n, a(o, t, V, i), a(o, t, G, i), a(o, t, V, t.notifyWith))) : (r !== V && (s = void 0, u = [n]), (i || t.resolveWith)(s, u))
                                                    }
                                                },
                                                c = i ? l : function() {
                                                    try {
                                                        l()
                                                    } catch (n) {
                                                        S.Deferred.exceptionHook && S.Deferred.exceptionHook(n, c.error), e + 1 >= o && (r !== G && (s = void 0, u = [n]), t.rejectWith(s, u))
                                                    }
                                                };
                                            e ? c() : (S.Deferred.getErrorHook ? c.error = S.Deferred.getErrorHook() : S.Deferred.getStackHook && (c.error = S.Deferred.getStackHook()), n.setTimeout(c))
                                        }
                                    }
                                    return S.Deferred((function(n) {
                                        t[0][3].add(a(0, n, y(i) ? i : V, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : V)), t[2][3].add(a(0, n, y(r) ? r : G))
                                    })).promise()
                                },
                                promise: function(e) {
                                    return null != e ? S.extend(e, i) : i
                                }
                            },
                            o = {};
                        return S.each(t, (function(e, n) {
                            var a = n[2],
                                s = n[5];
                            i[n[1]] = a.add, s && a.add((function() {
                                r = s
                            }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function() {
                                return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                            }, o[n[0] + "With"] = a.fireWith
                        })), i.promise(o), e && e.call(o, o), o
                    },
                    when: function(e) {
                        var t = arguments.length,
                            n = t,
                            r = Array(n),
                            i = s.call(arguments),
                            o = S.Deferred(),
                            a = function(e) {
                                return function(n) {
                                    r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i)
                                }
                            };
                        if (t <= 1 && (Y(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || y(i[n] && i[n].then))) return o.then();
                        for (; n--;) Y(i[n], a(n), o.reject);
                        return o.promise()
                    }
                });
                var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                S.Deferred.exceptionHook = function(e, t) {
                    n.console && n.console.warn && e && J.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }, S.readyException = function(e) {
                    n.setTimeout((function() {
                        throw e
                    }))
                };
                var Q = S.Deferred();

                function K() {
                    x.removeEventListener("DOMContentLoaded", K), n.removeEventListener("load", K), S.ready()
                }
                S.fn.ready = function(e) {
                    return Q.then(e).catch((function(e) {
                        S.readyException(e)
                    })), this
                }, S.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0, !0 !== e && --S.readyWait > 0 || Q.resolveWith(x, [S]))
                    }
                }), S.ready.then = Q.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? n.setTimeout(S.ready) : (x.addEventListener("DOMContentLoaded", K), n.addEventListener("load", K));
                var Z = function(e, t, n, r, i, o, a) {
                        var s = 0,
                            u = e.length,
                            l = null == n;
                        if ("object" === T(n))
                            for (s in i = !0, n) Z(e, t, s, n[s], !0, o, a);
                        else if (void 0 !== r && (i = !0, y(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                                return l.call(S(e), n)
                            })), t))
                            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                    },
                    ee = /^-ms-/,
                    te = /-([a-z])/g;

                function ne(e, t) {
                    return t.toUpperCase()
                }

                function re(e) {
                    return e.replace(ee, "ms-").replace(te, ne)
                }
                var ie = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };

                function oe() {
                    this.expando = S.expando + oe.uid++
                }
                oe.uid = 1, oe.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {}, ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t
                    },
                    set: function(e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" == typeof t) i[re(t)] = n;
                        else
                            for (r in t) i[re(r)] = t[r];
                        return i
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][re(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(re) : (t = re(t)) in r ? [t] : t.match(U) || []).length;
                                for (; n--;) delete r[t[n]]
                            }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !S.isEmptyObject(t)
                    }
                };
                var ae = new oe,
                    se = new oe,
                    ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    le = /[A-Z]/g;

                function ce(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(le, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                            try {
                                n = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ue.test(e) ? JSON.parse(e) : e)
                                }(n)
                            } catch (e) {}
                            se.set(e, t, n)
                        } else n = void 0;
                    return n
                }
                S.extend({
                    hasData: function(e) {
                        return se.hasData(e) || ae.hasData(e)
                    },
                    data: function(e, t, n) {
                        return se.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        se.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return ae.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        ae.remove(e, t)
                    }
                }), S.fn.extend({
                    data: function(e, t) {
                        var n, r, i, o = this[0],
                            a = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = se.get(o), 1 === o.nodeType && !ae.get(o, "hasDataAttrs"))) {
                                for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = re(r.slice(5)), ce(o, r, i[r]));
                                ae.set(o, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each((function() {
                            se.set(this, e)
                        })) : Z(this, (function(t) {
                            var n;
                            if (o && void 0 === t) return void 0 !== (n = se.get(o, e)) || void 0 !== (n = ce(o, e)) ? n : void 0;
                            this.each((function() {
                                se.set(this, e, t)
                            }))
                        }), null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            se.remove(this, e)
                        }))
                    }
                }), S.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e) return t = (t || "fx") + "queue", r = ae.get(e, t), n && (!r || Array.isArray(n) ? r = ae.access(e, t, S.makeArray(n)) : r.push(n)), r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = S.queue(e, t),
                            r = n.length,
                            i = n.shift(),
                            o = S._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                            S.dequeue(e, t)
                        }), o)), !r && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return ae.get(e, n) || ae.access(e, n, {
                            empty: S.Callbacks("once memory").add((function() {
                                ae.remove(e, [t + "queue", n])
                            }))
                        })
                    }
                }), S.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? S.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = S.queue(this, e, t);
                            S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e)
                        }))
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            S.dequeue(this, e)
                        }))
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1,
                            i = S.Deferred(),
                            o = this,
                            a = this.length,
                            s = function() {
                                --r || i.resolveWith(o, [o])
                            };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = ae.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                        return s(), i.promise(t)
                    }
                });
                var fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    pe = new RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"),
                    de = ["Top", "Right", "Bottom", "Left"],
                    he = x.documentElement,
                    ge = function(e) {
                        return S.contains(e.ownerDocument, e)
                    },
                    ve = {
                        composed: !0
                    };
                he.getRootNode && (ge = function(e) {
                    return S.contains(e.ownerDocument, e) || e.getRootNode(ve) === e.ownerDocument
                });
                var ye = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && ge(e) && "none" === S.css(e, "display")
                };

                function me(e, t, n, r) {
                    var i, o, a = 20,
                        s = r ? function() {
                            return r.cur()
                        } : function() {
                            return S.css(e, t, "")
                        },
                        u = s(),
                        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && pe.exec(S.css(e, t));
                    if (c && c[3] !== l) {
                        for (u /= 2, l = l || c[3], c = +u || 1; a--;) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                        c *= 2, S.style(e, t, c + l), n = n || []
                    }
                    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
                }
                var xe = {};

                function be(e) {
                    var t, n = e.ownerDocument,
                        r = e.nodeName,
                        i = xe[r];
                    return i || (t = n.body.appendChild(n.createElement(r)), i = S.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), xe[r] = i, i)
                }

                function we(e, t) {
                    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = ae.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ye(r) && (i[o] = be(r))) : "none" !== n && (i[o] = "none", ae.set(r, "display", n)));
                    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                    return e
                }
                S.fn.extend({
                    show: function() {
                        return we(this, !0)
                    },
                    hide: function() {
                        return we(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            ye(this) ? S(this).show() : S(this).hide()
                        }))
                    }
                });
                var Te, Ce, Se = /^(?:checkbox|radio)$/i,
                    ke = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    Ee = /^$|^module$|\/(?:java|ecma)script/i;
                Te = x.createDocumentFragment().appendChild(x.createElement("div")), (Ce = x.createElement("input")).setAttribute("type", "radio"), Ce.setAttribute("checked", "checked"), Ce.setAttribute("name", "t"), Te.appendChild(Ce), v.checkClone = Te.cloneNode(!0).cloneNode(!0).lastChild.checked, Te.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!Te.cloneNode(!0).lastChild.defaultValue, Te.innerHTML = "<option></option>", v.option = !!Te.lastChild;
                var je = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

                function Ae(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? S.merge([e], n) : n
                }

                function De(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) ae.set(e[n], "globalEval", !t || ae.get(t[n], "globalEval"))
                }
                je.tbody = je.tfoot = je.colgroup = je.caption = je.thead, je.th = je.td, v.option || (je.optgroup = je.option = [1, "<select multiple='multiple'>", "</select>"]);
                var Ne = /<|&#?\w+;/;

                function qe(e, t, n, r, i) {
                    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                        if ((o = e[d]) || 0 === o)
                            if ("object" === T(o)) S.merge(p, o.nodeType ? [o] : o);
                            else if (Ne.test(o)) {
                        for (a = a || f.appendChild(t.createElement("div")), s = (ke.exec(o) || ["", ""])[1].toLowerCase(), u = je[s] || je._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                        S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                    } else p.push(t.createTextNode(o));
                    for (f.textContent = "", d = 0; o = p[d++];)
                        if (r && S.inArray(o, r) > -1) i && i.push(o);
                        else if (l = ge(o), a = Ae(f.appendChild(o), "script"), l && De(a), n)
                        for (c = 0; o = a[c++];) Ee.test(o.type || "") && n.push(o);
                    return f
                }
                var Le = /^([^.]*)(?:\.(.+)|)/;

                function He() {
                    return !0
                }

                function Oe() {
                    return !1
                }

                function Pe(e, t, n, r, i, o) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof n && (r = r || n, n = void 0), t) Pe(e, s, n, r, t[s], o);
                        return e
                    }
                    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Oe;
                    else if (!i) return e;
                    return 1 === o && (a = i, (i = function(e) {
                        return S().off(e), a.apply(this, arguments)
                    }).guid = a.guid || (a.guid = S.guid++)), e.each((function() {
                        S.event.add(this, t, i, r, n)
                    }))
                }

                function Me(e, t, n) {
                    n ? (ae.set(e, t, !1), S.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var n, r = ae.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (r)(S.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (r = s.call(arguments), ae.set(this, t, r), this[t](), n = ae.get(this, t), ae.set(this, t, !1), r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n
                            } else r && (ae.set(this, t, S.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = He)
                        }
                    })) : void 0 === ae.get(e, t) && S.event.add(e, t, He)
                }
                S.event = {
                    global: {},
                    add: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, p, d, h, g, v = ae.get(e);
                        if (ie(e))
                            for (n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(he, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(t) {
                                    return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                                }), l = (t = (t || "").match(U) || [""]).length; l--;) d = g = (s = Le.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                                type: d,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && S.expr.match.needsContext.test(i),
                                namespace: h.join(".")
                            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
                    },
                    remove: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, p, d, h, g, v = ae.hasData(e) && ae.get(e);
                        if (v && (u = v.events)) {
                            for (l = (t = (t || "").match(U) || [""]).length; l--;)
                                if (d = g = (s = Le.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                                    for (f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                                } else
                                    for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                            S.isEmptyObject(u) && ae.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, i, o, a, s = new Array(arguments.length),
                            u = S.event.fix(e),
                            l = (ae.get(this, "events") || Object.create(null))[u.type] || [],
                            c = S.event.special[u.type] || {};
                        for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                        if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                            for (a = S.event.handlers.call(this, u, l), t = 0;
                                (i = a[t++]) && !u.isPropagationStopped();)
                                for (u.currentTarget = i.elem, n = 0;
                                    (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, u), u.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, i, o, a, s = [],
                            u = t.delegateCount,
                            l = e.target;
                        if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                            for (; l !== this; l = l.parentNode || this)
                                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                    for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? S(i, this).index(l) > -1 : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                                    o.length && s.push({
                                        elem: l,
                                        handlers: o
                                    })
                                }
                        return l = this, u < t.length && s.push({
                            elem: l,
                            handlers: t.slice(u)
                        }), s
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(S.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: y(t) ? function() {
                                if (this.originalEvent) return t(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e]
                            },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[S.expando] ? e : new S.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return Se.test(t.type) && t.click && E(t, "input") && Me(t, "click", !0), !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return Se.test(t.type) && t.click && E(t, "input") && Me(t, "click"), !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return Se.test(t.type) && t.click && E(t, "input") && ae.get(t, "click") || E(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                }, S.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }, S.Event = function(e, t) {
                    if (!(this instanceof S.Event)) return new S.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? He : Oe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
                }, S.Event.prototype = {
                    constructor: S.Event,
                    isDefaultPrevented: Oe,
                    isPropagationStopped: Oe,
                    isImmediatePropagationStopped: Oe,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = He, e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = He, e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = He, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, S.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, S.event.addProp), S.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    function n(e) {
                        if (x.documentMode) {
                            var n = ae.get(this, "handle"),
                                r = S.event.fix(e);
                            r.type = "focusin" === e.type ? "focus" : "blur", r.isSimulated = !0, n(e), r.target === r.currentTarget && n(r)
                        } else S.event.simulate(t, e.target, S.event.fix(e))
                    }
                    S.event.special[e] = {
                        setup: function() {
                            var r;
                            if (Me(this, e, !0), !x.documentMode) return !1;
                            (r = ae.get(this, t)) || this.addEventListener(t, n), ae.set(this, t, (r || 0) + 1)
                        },
                        trigger: function() {
                            return Me(this, e), !0
                        },
                        teardown: function() {
                            var e;
                            if (!x.documentMode) return !1;
                            (e = ae.get(this, t) - 1) ? ae.set(this, t, e): (this.removeEventListener(t, n), ae.remove(this, t))
                        },
                        _default: function(t) {
                            return ae.get(t.target, e)
                        },
                        delegateType: t
                    }, S.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this.document || this,
                                i = x.documentMode ? this : r,
                                o = ae.get(i, t);
                            o || (x.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), ae.set(i, t, (o || 0) + 1)
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this.document || this,
                                i = x.documentMode ? this : r,
                                o = ae.get(i, t) - 1;
                            o ? ae.set(i, t, o) : (x.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), ae.remove(i, t))
                        }
                    }
                })), S.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    S.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = this,
                                i = e.relatedTarget,
                                o = e.handleObj;
                            return i && (i === r || S.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                })), S.fn.extend({
                    on: function(e, t, n, r) {
                        return Pe(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return Pe(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" == typeof e) {
                            for (i in e) this.off(i, t, e[i]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Oe), this.each((function() {
                            S.event.remove(this, e, n, t)
                        }))
                    }
                });
                var Re = /<script|<style|<link/i,
                    Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    We = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

                function Fe(e, t) {
                    return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
                }

                function $e(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                }

                function Be(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                }

                function _e(e, t) {
                    var n, r, i, o, a, s;
                    if (1 === t.nodeType) {
                        if (ae.hasData(e) && (s = ae.get(e).events))
                            for (i in ae.remove(t, "handle events"), s)
                                for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
                        se.hasData(e) && (o = se.access(e), a = S.extend({}, o), se.set(t, a))
                    }
                }

                function ze(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && Se.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }

                function Xe(e, t, n, r) {
                    t = u(t);
                    var i, o, a, s, l, c, f = 0,
                        p = e.length,
                        d = p - 1,
                        h = t[0],
                        g = y(h);
                    if (g || p > 1 && "string" == typeof h && !v.checkClone && Ie.test(h)) return e.each((function(i) {
                        var o = e.eq(i);
                        g && (t[0] = h.call(this, i, o.html())), Xe(o, t, n, r)
                    }));
                    if (p && (o = (i = qe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                        for (s = (a = S.map(Ae(i, "script"), $e)).length; f < p; f++) l = i, f !== d && (l = S.clone(l, !0, !0), s && S.merge(a, Ae(l, "script"))), n.call(e[f], l, f);
                        if (s)
                            for (c = a[a.length - 1].ownerDocument, S.map(a, Be), f = 0; f < s; f++) l = a[f], Ee.test(l.type || "") && !ae.access(l, "globalEval") && S.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && !l.noModule && S._evalUrl(l.src, {
                                nonce: l.nonce || l.getAttribute("nonce")
                            }, c) : w(l.textContent.replace(We, ""), l, c))
                    }
                    return e
                }

                function Ue(e, t, n) {
                    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(Ae(r)), r.parentNode && (n && ge(r) && De(Ae(r, "script")), r.parentNode.removeChild(r));
                    return e
                }
                S.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var r, i, o, a, s = e.cloneNode(!0),
                            u = ge(e);
                        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                            for (a = Ae(s), r = 0, i = (o = Ae(e)).length; r < i; r++) ze(o[r], a[r]);
                        if (t)
                            if (n)
                                for (o = o || Ae(e), a = a || Ae(s), r = 0, i = o.length; r < i; r++) _e(o[r], a[r]);
                            else _e(e, s);
                        return (a = Ae(s, "script")).length > 0 && De(a, !u && Ae(e, "script")), s
                    },
                    cleanData: function(e) {
                        for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (ie(n)) {
                                if (t = n[ae.expando]) {
                                    if (t.events)
                                        for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                                    n[ae.expando] = void 0
                                }
                                n[se.expando] && (n[se.expando] = void 0)
                            }
                    }
                }), S.fn.extend({
                    detach: function(e) {
                        return Ue(this, e, !0)
                    },
                    remove: function(e) {
                        return Ue(this, e)
                    },
                    text: function(e) {
                        return Z(this, (function(e) {
                            return void 0 === e ? S.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            }))
                        }), null, e, arguments.length)
                    },
                    append: function() {
                        return Xe(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Fe(this, e).appendChild(e)
                        }))
                    },
                    prepend: function() {
                        return Xe(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Fe(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        }))
                    },
                    before: function() {
                        return Xe(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        }))
                    },
                    after: function() {
                        return Xe(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        }))
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(Ae(e, !1)), e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map((function() {
                            return S.clone(this, e, t)
                        }))
                    },
                    html: function(e) {
                        return Z(this, (function(e) {
                            var t = this[0] || {},
                                n = 0,
                                r = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !Re.test(e) && !je[(ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = S.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(Ae(t, !1)), t.innerHTML = e);
                                    t = 0
                                } catch (e) {}
                            }
                            t && this.empty().append(e)
                        }), null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return Xe(this, arguments, (function(t) {
                            var n = this.parentNode;
                            S.inArray(this, e) < 0 && (S.cleanData(Ae(this)), n && n.replaceChild(t, this))
                        }), e)
                    }
                }), S.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    S.fn[e] = function(e) {
                        for (var n, r = [], i = S(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), S(i[a])[t](n), l.apply(r, n.get());
                        return this.pushStack(r)
                    }
                }));
                var Ve = new RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"),
                    Ge = /^--/,
                    Ye = function(e) {
                        var t = e.ownerDocument.defaultView;
                        return t && t.opener || (t = n), t.getComputedStyle(e)
                    },
                    Je = function(e, t, n) {
                        var r, i, o = {};
                        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                        for (i in r = n.call(e), t) e.style[i] = o[i];
                        return r
                    },
                    Qe = new RegExp(de.join("|"), "i");

                function Ke(e, t, n) {
                    var r, i, o, a, s = Ge.test(t),
                        u = e.style;
                    return (n = n || Ye(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(q, "$1") || void 0), "" !== a || ge(e) || (a = S.style(e, t)), !v.pixelBoxStyles() && Ve.test(a) && Qe.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
                }

                function Ze(e, t) {
                    return {
                        get: function() {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }! function() {
                    function e() {
                        if (c) {
                            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", he.appendChild(l).appendChild(c);
                            var e = n.getComputedStyle(c);
                            r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), he.removeChild(l), c = null
                        }
                    }

                    function t(e) {
                        return Math.round(parseFloat(e))
                    }
                    var r, i, o, a, s, u, l = x.createElement("div"),
                        c = x.createElement("div");
                    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, S.extend(v, {
                        boxSizingReliable: function() {
                            return e(), i
                        },
                        pixelBoxStyles: function() {
                            return e(), a
                        },
                        pixelPosition: function() {
                            return e(), r
                        },
                        reliableMarginLeft: function() {
                            return e(), u
                        },
                        scrollboxSize: function() {
                            return e(), o
                        },
                        reliableTrDimensions: function() {
                            var e, t, r, i;
                            return null == s && (e = x.createElement("table"), t = x.createElement("tr"), r = x.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", he.appendChild(e).appendChild(t).appendChild(r), i = n.getComputedStyle(t), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, he.removeChild(e)), s
                        }
                    }))
                }();
                var et = ["Webkit", "Moz", "ms"],
                    tt = x.createElement("div").style,
                    nt = {};

                function rt(e) {
                    var t = S.cssProps[e] || nt[e];
                    return t || (e in tt ? e : nt[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
                            if ((e = et[n] + t) in tt) return e
                    }(e) || e)
                }
                var it = /^(none|table(?!-c[ea]).+)/,
                    ot = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    at = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };

                function st(e, t, n) {
                    var r = pe.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }

                function ut(e, t, n, r, i, o) {
                    var a = "width" === t ? 1 : 0,
                        s = 0,
                        u = 0,
                        l = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (; a < 4; a += 2) "margin" === n && (l += S.css(e, n + de[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + de[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + de[a] + "Width", !0, i))) : (u += S.css(e, "padding" + de[a], !0, i), "padding" !== n ? u += S.css(e, "border" + de[a] + "Width", !0, i) : s += S.css(e, "border" + de[a] + "Width", !0, i));
                    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l
                }

                function lt(e, t, n) {
                    var r = Ye(e),
                        i = (!v.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
                        o = i,
                        a = Ke(e, t, r),
                        s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Ve.test(a)) {
                        if (!n) return a;
                        a = "auto"
                    }
                    return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && E(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ut(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                }

                function ct(e, t, n, r, i) {
                    return new ct.prototype.init(e, t, n, r, i)
                }
                S.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = Ke(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageSlice: !0,
                        columnCount: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        scale: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i, o, a, s = re(t),
                                u = Ge.test(t),
                                l = e.style;
                            if (u || (t = rt(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                            "string" === (o = typeof n) && (i = pe.exec(n)) && i[1] && (n = me(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                        }
                    },
                    css: function(e, t, n, r) {
                        var i, o, a, s = re(t);
                        return Ge.test(t) || (t = rt(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ke(e, t, r)), "normal" === i && t in at && (i = at[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                    }
                }), S.each(["height", "width"], (function(e, t) {
                    S.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n) return !it.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? lt(e, t, r) : Je(e, ot, (function() {
                                return lt(e, t, r)
                            }))
                        },
                        set: function(e, n, r) {
                            var i, o = Ye(e),
                                a = !v.scrollboxSize() && "absolute" === o.position,
                                s = (a || r) && "border-box" === S.css(e, "boxSizing", !1, o),
                                u = r ? ut(e, t, r, s, o) : 0;
                            return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - ut(e, t, "border", !1, o) - .5)), u && (i = pe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = S.css(e, t)), st(0, n, u)
                        }
                    }
                })), S.cssHooks.marginLeft = Ze(v.reliableMarginLeft, (function(e, t) {
                    if (t) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
                        marginLeft: 0
                    }, (function() {
                        return e.getBoundingClientRect().left
                    }))) + "px"
                })), S.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    S.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + de[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    }, "margin" !== e && (S.cssHooks[e + t].set = st)
                })), S.fn.extend({
                    css: function(e, t) {
                        return Z(this, (function(e, t, n) {
                            var r, i, o = {},
                                a = 0;
                            if (Array.isArray(t)) {
                                for (r = Ye(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                                return o
                            }
                            return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                        }), e, t, arguments.length > 1)
                    }
                }), S.Tween = ct, ct.prototype = {
                    constructor: ct,
                    init: function(e, t, n, r, i, o) {
                        this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = ct.propHooks[this.prop];
                        return e && e.get ? e.get(this) : ct.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = ct.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ct.propHooks._default.set(this), this
                    }
                }, ct.prototype.init.prototype = ct.prototype, ct.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                }, ct.propHooks.scrollTop = ct.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                }, S.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                }, S.fx = ct.prototype.init, S.fx.step = {};
                var ft, pt, dt = /^(?:toggle|show|hide)$/,
                    ht = /queueHooks$/;

                function gt() {
                    pt && (!1 === x.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(gt) : n.setTimeout(gt, S.fx.interval), S.fx.tick())
                }

                function vt() {
                    return n.setTimeout((function() {
                        ft = void 0
                    })), ft = Date.now()
                }

                function yt(e, t) {
                    var n, r = 0,
                        i = {
                            height: e
                        };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = de[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e), i
                }

                function mt(e, t, n) {
                    for (var r, i = (xt.tweeners[t] || []).concat(xt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                        if (r = i[o].call(n, t, e)) return r
                }

                function xt(e, t, n) {
                    var r, i, o = 0,
                        a = xt.prefilters.length,
                        s = S.Deferred().always((function() {
                            delete u.elem
                        })),
                        u = function() {
                            if (i) return !1;
                            for (var t = ft || vt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                        },
                        l = s.promise({
                            elem: e,
                            props: S.extend({}, t),
                            opts: S.extend(!0, {
                                specialEasing: {},
                                easing: S.easing._default
                            }, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: ft || vt(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(t, n) {
                                var r = S.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                return l.tweens.push(r), r
                            },
                            stop: function(t) {
                                var n = 0,
                                    r = t ? l.tweens.length : 0;
                                if (i) return this;
                                for (i = !0; n < r; n++) l.tweens[n].run(1);
                                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                            }
                        }),
                        c = l.props;
                    for (! function(e, t) {
                            var n, r, i, o, a;
                            for (n in e)
                                if (i = t[r = re(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                                    for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                                else t[r] = i
                        }(c, l.opts.specialEasing); o < a; o++)
                        if (r = xt.prefilters[o].call(l, e, c, l.opts)) return y(r.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                    return S.map(c, mt, l), y(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })), l
                }
                S.Animation = S.extend(xt, {
                        tweeners: {
                            "*": [function(e, t) {
                                var n = this.createTween(e, t);
                                return me(n.elem, e, pe.exec(t), n), n
                            }]
                        },
                        tweener: function(e, t) {
                            y(e) ? (t = e, e = ["*"]) : e = e.match(U);
                            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], xt.tweeners[n] = xt.tweeners[n] || [], xt.tweeners[n].unshift(t)
                        },
                        prefilters: [function(e, t, n) {
                            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                                p = this,
                                d = {},
                                h = e.style,
                                g = e.nodeType && ye(e),
                                v = ae.get(e, "fxshow");
                            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                    a.unqueued || s()
                                }), a.unqueued++, p.always((function() {
                                    p.always((function() {
                                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                                    }))
                                }))), t)
                                if (i = t[r], dt.test(i)) {
                                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                        if ("show" !== i || !v || void 0 === v[r]) continue;
                                        g = !0
                                    }
                                    d[r] = v && v[r] || S.style(e, r)
                                }
                            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = ae.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (we([e], !0), l = e.style.display || l, c = S.css(e, "display"), we([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done((function() {
                                        h.display = l
                                    })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                    }))), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = ae.access(e, "fxshow", {
                                    display: l
                                }), o && (v.hidden = !g), g && we([e], !0), p.done((function() {
                                    for (r in g || we([e]), ae.remove(e, "fxshow"), d) S.style(e, r, d[r])
                                }))), u = mt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
                        }],
                        prefilter: function(e, t) {
                            t ? xt.prefilters.unshift(e) : xt.prefilters.push(e)
                        }
                    }), S.speed = function(e, t, n) {
                        var r = e && "object" == typeof e ? S.extend({}, e) : {
                            complete: n || !n && t || y(e) && e,
                            duration: e,
                            easing: n && t || t && !y(t) && t
                        };
                        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                            y(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
                        }, r
                    }, S.fn.extend({
                        fadeTo: function(e, t, n, r) {
                            return this.filter(ye).css("opacity", 0).show().end().animate({
                                opacity: t
                            }, e, n, r)
                        },
                        animate: function(e, t, n, r) {
                            var i = S.isEmptyObject(e),
                                o = S.speed(t, n, r),
                                a = function() {
                                    var t = xt(this, S.extend({}, e), o);
                                    (i || ae.get(this, "finish")) && t.stop(!0)
                                };
                            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                        },
                        stop: function(e, t, n) {
                            var r = function(e) {
                                var t = e.stop;
                                delete e.stop, t(n)
                            };
                            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                                var t = !0,
                                    i = null != e && e + "queueHooks",
                                    o = S.timers,
                                    a = ae.get(this);
                                if (i) a[i] && a[i].stop && r(a[i]);
                                else
                                    for (i in a) a[i] && a[i].stop && ht.test(i) && r(a[i]);
                                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                                !t && n || S.dequeue(this, e)
                            }))
                        },
                        finish: function(e) {
                            return !1 !== e && (e = e || "fx"), this.each((function() {
                                var t, n = ae.get(this),
                                    r = n[e + "queue"],
                                    i = n[e + "queueHooks"],
                                    o = S.timers,
                                    a = r ? r.length : 0;
                                for (n.finish = !0, S.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                delete n.finish
                            }))
                        }
                    }), S.each(["toggle", "show", "hide"], (function(e, t) {
                        var n = S.fn[t];
                        S.fn[t] = function(e, r, i) {
                            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(yt(t, !0), e, r, i)
                        }
                    })), S.each({
                        slideDown: yt("show"),
                        slideUp: yt("hide"),
                        slideToggle: yt("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, (function(e, t) {
                        S.fn[e] = function(e, n, r) {
                            return this.animate(t, e, n, r)
                        }
                    })), S.timers = [], S.fx.tick = function() {
                        var e, t = 0,
                            n = S.timers;
                        for (ft = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                        n.length || S.fx.stop(), ft = void 0
                    }, S.fx.timer = function(e) {
                        S.timers.push(e), S.fx.start()
                    }, S.fx.interval = 13, S.fx.start = function() {
                        pt || (pt = !0, gt())
                    }, S.fx.stop = function() {
                        pt = null
                    }, S.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    }, S.fn.delay = function(e, t) {
                        return e = S.fx && S.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                            var i = n.setTimeout(t, e);
                            r.stop = function() {
                                n.clearTimeout(i)
                            }
                        }))
                    },
                    function() {
                        var e = x.createElement("input"),
                            t = x.createElement("select").appendChild(x.createElement("option"));
                        e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = x.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
                    }();
                var bt, wt = S.expr.attrHandle;
                S.fn.extend({
                    attr: function(e, t) {
                        return Z(this, S.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            S.removeAttr(this, e)
                        }))
                    }
                }), S.extend({
                    attr: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!v.radioValue && "radio" === t && E(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0,
                            i = t && t.match(U);
                        if (i && 1 === e.nodeType)
                            for (; n = i[r++];) e.removeAttribute(n)
                    }
                }), bt = {
                    set: function(e, t, n) {
                        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
                    }
                }, S.each(S.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = wt[t] || S.find.attr;
                    wt[t] = function(e, t, r) {
                        var i, o, a = t.toLowerCase();
                        return r || (o = wt[a], wt[a] = i, i = null != n(e, t, r) ? a : null, wt[a] = o), i
                    }
                }));
                var Tt = /^(?:input|select|textarea|button)$/i,
                    Ct = /^(?:a|area)$/i;

                function St(e) {
                    return (e.match(U) || []).join(" ")
                }

                function kt(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }

                function Et(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(U) || []
                }
                S.fn.extend({
                    prop: function(e, t) {
                        return Z(this, S.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[S.propFix[e] || e]
                        }))
                    }
                }), S.extend({
                    prop: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = S.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Tt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), v.optSelected || (S.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                    }
                }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    S.propFix[this.toLowerCase()] = this
                })), S.fn.extend({
                    addClass: function(e) {
                        var t, n, r, i, o, a;
                        return y(e) ? this.each((function(t) {
                            S(this).addClass(e.call(this, t, kt(this)))
                        })) : (t = Et(e)).length ? this.each((function() {
                            if (r = kt(this), n = 1 === this.nodeType && " " + St(r) + " ") {
                                for (o = 0; o < t.length; o++) i = t[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                                a = St(n), r !== a && this.setAttribute("class", a)
                            }
                        })) : this
                    },
                    removeClass: function(e) {
                        var t, n, r, i, o, a;
                        return y(e) ? this.each((function(t) {
                            S(this).removeClass(e.call(this, t, kt(this)))
                        })) : arguments.length ? (t = Et(e)).length ? this.each((function() {
                            if (r = kt(this), n = 1 === this.nodeType && " " + St(r) + " ") {
                                for (o = 0; o < t.length; o++)
                                    for (i = t[o]; n.indexOf(" " + i + " ") > -1;) n = n.replace(" " + i + " ", " ");
                                a = St(n), r !== a && this.setAttribute("class", a)
                            }
                        })) : this : this.attr("class", "")
                    },
                    toggleClass: function(e, t) {
                        var n, r, i, o, a = typeof e,
                            s = "string" === a || Array.isArray(e);
                        return y(e) ? this.each((function(n) {
                            S(this).toggleClass(e.call(this, n, kt(this), t), t)
                        })) : "boolean" == typeof t && s ? t ? this.addClass(e) : this.removeClass(e) : (n = Et(e), this.each((function() {
                            if (s)
                                for (o = S(this), i = 0; i < n.length; i++) r = n[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                            else void 0 !== e && "boolean" !== a || ((r = kt(this)) && ae.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : ae.get(this, "__className__") || ""))
                        })))
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++];)
                            if (1 === n.nodeType && (" " + St(kt(n)) + " ").indexOf(t) > -1) return !0;
                        return !1
                    }
                });
                var jt = /\r/g;
                S.fn.extend({
                    val: function(e) {
                        var t, n, r, i = this[0];
                        return arguments.length ? (r = y(e), this.each((function(n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, S(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = S.map(i, (function(e) {
                                return null == e ? "" : e + ""
                            }))), (t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        }))) : i ? (t = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(jt, "") : null == n ? "" : n : void 0
                    }
                }), S.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = S.find.attr(e, "value");
                                return null != t ? t : St(S.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, i = e.options,
                                    o = e.selectedIndex,
                                    a = "select-one" === e.type,
                                    s = a ? null : [],
                                    u = a ? o + 1 : i.length;
                                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                    if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                        if (t = S(n).val(), a) return t;
                                        s.push(t)
                                    }
                                return s
                            },
                            set: function(e, t) {
                                for (var n, r, i = e.options, o = S.makeArray(t), a = i.length; a--;)((r = i[a]).selected = S.inArray(S.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), o
                            }
                        }
                    }
                }), S.each(["radio", "checkbox"], (function() {
                    S.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t)) return e.checked = S.inArray(S(e).val(), t) > -1
                        }
                    }, v.checkOn || (S.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    })
                }));
                var At = n.location,
                    Dt = {
                        guid: Date.now()
                    },
                    Nt = /\?/;
                S.parseXML = function(e) {
                    var t, r;
                    if (!e || "string" != typeof e) return null;
                    try {
                        t = (new n.DOMParser).parseFromString(e, "text/xml")
                    } catch (e) {}
                    return r = t && t.getElementsByTagName("parsererror")[0], t && !r || S.error("Invalid XML: " + (r ? S.map(r.childNodes, (function(e) {
                        return e.textContent
                    })).join("\n") : e)), t
                };
                var qt = /^(?:focusinfocus|focusoutblur)$/,
                    Lt = function(e) {
                        e.stopPropagation()
                    };
                S.extend(S.event, {
                    trigger: function(e, t, r, i) {
                        var o, a, s, u, l, c, f, p, h = [r || x],
                            g = d.call(e, "type") ? e.type : e,
                            v = d.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (a = p = s = r = r || x, 3 !== r.nodeType && 8 !== r.nodeType && !qt.test(g + S.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), l = g.indexOf(":") < 0 && "on" + g, (e = e[S.expando] ? e : new S.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : S.makeArray(t, [e]), f = S.event.special[g] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                            if (!i && !f.noBubble && !m(r)) {
                                for (u = f.delegateType || g, qt.test(u + g) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                                s === (r.ownerDocument || x) && h.push(s.defaultView || s.parentWindow || n)
                            }
                            for (o = 0;
                                (a = h[o++]) && !e.isPropagationStopped();) p = a, e.type = o > 1 ? u : f.bindType || g, (c = (ae.get(a, "events") || Object.create(null))[e.type] && ae.get(a, "handle")) && c.apply(a, t), (c = l && a[l]) && c.apply && ie(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                            return e.type = g, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !ie(r) || l && y(r[g]) && !m(r) && ((s = r[l]) && (r[l] = null), S.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, Lt), r[g](), e.isPropagationStopped() && p.removeEventListener(g, Lt), S.event.triggered = void 0, s && (r[l] = s)), e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = S.extend(new S.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        S.event.trigger(r, null, t)
                    }
                }), S.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            S.event.trigger(e, t, this)
                        }))
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return S.event.trigger(e, t, n, !0)
                    }
                });
                var Ht = /\[\]$/,
                    Ot = /\r?\n/g,
                    Pt = /^(?:submit|button|image|reset|file)$/i,
                    Mt = /^(?:input|select|textarea|keygen)/i;

                function Rt(e, t, n, r) {
                    var i;
                    if (Array.isArray(t)) S.each(t, (function(t, i) {
                        n || Ht.test(e) ? r(e, i) : Rt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                    }));
                    else if (n || "object" !== T(t)) r(e, t);
                    else
                        for (i in t) Rt(e + "[" + i + "]", t[i], n, r)
                }
                S.param = function(e, t) {
                    var n, r = [],
                        i = function(e, t) {
                            var n = y(t) ? t() : t;
                            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, (function() {
                        i(this.name, this.value)
                    }));
                    else
                        for (n in e) Rt(n, e[n], t, i);
                    return r.join("&")
                }, S.fn.extend({
                    serialize: function() {
                        return S.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = S.prop(this, "elements");
                            return e ? S.makeArray(e) : this
                        })).filter((function() {
                            var e = this.type;
                            return this.name && !S(this).is(":disabled") && Mt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Se.test(e))
                        })).map((function(e, t) {
                            var n = S(this).val();
                            return null == n ? null : Array.isArray(n) ? S.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Ot, "\r\n")
                                }
                            })) : {
                                name: t.name,
                                value: n.replace(Ot, "\r\n")
                            }
                        })).get()
                    }
                });
                var It = /%20/g,
                    Wt = /#.*$/,
                    Ft = /([?&])_=[^&]*/,
                    $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    Bt = /^(?:GET|HEAD)$/,
                    _t = /^\/\//,
                    zt = {},
                    Xt = {},
                    Ut = "*/".concat("*"),
                    Vt = x.createElement("a");

                function Gt(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var r, i = 0,
                            o = t.toLowerCase().match(U) || [];
                        if (y(n))
                            for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }

                function Yt(e, t, n, r) {
                    var i = {},
                        o = e === Xt;

                    function a(s) {
                        var u;
                        return i[s] = !0, S.each(e[s] || [], (function(e, s) {
                            var l = s(t, n, r);
                            return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                        })), u
                    }
                    return a(t.dataTypes[0]) || !i["*"] && a("*")
                }

                function Jt(e, t) {
                    var n, r, i = S.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && S.extend(!0, e, r), e
                }
                Vt.href = At.href, S.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: At.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Ut,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": S.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Jt(Jt(e, S.ajaxSettings), t) : Jt(S.ajaxSettings, e)
                    },
                    ajaxPrefilter: Gt(zt),
                    ajaxTransport: Gt(Xt),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e, e = void 0), t = t || {};
                        var r, i, o, a, s, u, l, c, f, p, d = S.ajaxSetup({}, t),
                            h = d.context || d,
                            g = d.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                            v = S.Deferred(),
                            y = S.Callbacks("once memory"),
                            m = d.statusCode || {},
                            b = {},
                            w = {},
                            T = "canceled",
                            C = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (l) {
                                        if (!a)
                                            for (a = {}; t = $t.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = a[e.toLowerCase() + " "]
                                    }
                                    return null == t ? null : t.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return l ? o : null
                                },
                                setRequestHeader: function(e, t) {
                                    return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                                },
                                overrideMimeType: function(e) {
                                    return null == l && (d.mimeType = e), this
                                },
                                statusCode: function(e) {
                                    var t;
                                    if (e)
                                        if (l) C.always(e[C.status]);
                                        else
                                            for (t in e) m[t] = [m[t], e[t]];
                                    return this
                                },
                                abort: function(e) {
                                    var t = e || T;
                                    return r && r.abort(t), k(0, t), this
                                }
                            };
                        if (v.promise(C), d.url = ((e || d.url || At.href) + "").replace(_t, At.protocol + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(U) || [""], null == d.crossDomain) {
                            u = x.createElement("a");
                            try {
                                u.href = d.url, u.href = u.href, d.crossDomain = Vt.protocol + "//" + Vt.host != u.protocol + "//" + u.host
                            } catch (e) {
                                d.crossDomain = !0
                            }
                        }
                        if (d.data && d.processData && "string" != typeof d.data && (d.data = S.param(d.data, d.traditional)), Yt(zt, d, t, C), l) return C;
                        for (f in (c = S.event && d.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Bt.test(d.type), i = d.url.replace(Wt, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(It, "+")) : (p = d.url.slice(i.length), d.data && (d.processData || "string" == typeof d.data) && (i += (Nt.test(i) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (i = i.replace(Ft, "$1"), p = (Nt.test(i) ? "&" : "?") + "_=" + Dt.guid++ + p), d.url = i + p), d.ifModified && (S.lastModified[i] && C.setRequestHeader("If-Modified-Since", S.lastModified[i]), S.etag[i] && C.setRequestHeader("If-None-Match", S.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : d.accepts["*"]), d.headers) C.setRequestHeader(f, d.headers[f]);
                        if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l)) return C.abort();
                        if (T = "abort", y.add(d.complete), C.done(d.success), C.fail(d.error), r = Yt(Xt, d, t, C)) {
                            if (C.readyState = 1, c && g.trigger("ajaxSend", [C, d]), l) return C;
                            d.async && d.timeout > 0 && (s = n.setTimeout((function() {
                                C.abort("timeout")
                            }), d.timeout));
                            try {
                                l = !1, r.send(b, k)
                            } catch (e) {
                                if (l) throw e;
                                k(-1, e)
                            }
                        } else k(-1, "No Transport");

                        function k(e, t, a, u) {
                            var f, p, x, b, w, T = t;
                            l || (l = !0, s && n.clearTimeout(s), r = void 0, o = u || "", C.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, a && (b = function(e, t, n) {
                                for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                    "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break
                                        }
                                        a || (a = i)
                                    }
                                    o = o || a
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o]
                            }(d, C, a)), !f && S.inArray("script", d.dataTypes) > -1 && S.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}), b = function(e, t, n, r) {
                                var i, o, a, s, u, l = {},
                                    c = e.dataTypes.slice();
                                if (c[1])
                                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                for (o = c.shift(); o;)
                                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                        if ("*" === o) o = u;
                                        else if ("*" !== u && u !== o) {
                                    if (!(a = l[u + " " + o] || l["* " + o]))
                                        for (i in l)
                                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws) t = a(t);
                                        else try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                                }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(d, b, C, f), f ? (d.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (S.lastModified[i] = w), (w = C.getResponseHeader("etag")) && (S.etag[i] = w)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, f = !(x = b.error))) : (x = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", f ? v.resolveWith(h, [p, T, C]) : v.rejectWith(h, [C, T, x]), C.statusCode(m), m = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, d, f ? p : x]), y.fireWith(h, [C, T]), c && (g.trigger("ajaxComplete", [C, d]), --S.active || S.event.trigger("ajaxStop")))
                        }
                        return C
                    },
                    getJSON: function(e, t, n) {
                        return S.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return S.get(e, void 0, t, "script")
                    }
                }), S.each(["get", "post"], (function(e, t) {
                    S[t] = function(e, n, r, i) {
                        return y(n) && (i = i || r, r = n, n = void 0), S.ajax(S.extend({
                            url: e,
                            type: t,
                            dataType: i,
                            data: n,
                            success: r
                        }, S.isPlainObject(e) && e))
                    }
                })), S.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                })), S._evalUrl = function(e, t, n) {
                    return S.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            S.globalEval(e, t, n)
                        }
                    })
                }, S.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (y(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e
                        })).append(this)), this
                    },
                    wrapInner: function(e) {
                        return y(e) ? this.each((function(t) {
                            S(this).wrapInner(e.call(this, t))
                        })) : this.each((function() {
                            var t = S(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        }))
                    },
                    wrap: function(e) {
                        var t = y(e);
                        return this.each((function(n) {
                            S(this).wrapAll(t ? e.call(this, n) : e)
                        }))
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            S(this).replaceWith(this.childNodes)
                        })), this
                    }
                }), S.expr.pseudos.hidden = function(e) {
                    return !S.expr.pseudos.visible(e)
                }, S.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }, S.ajaxSettings.xhr = function() {
                    try {
                        return new n.XMLHttpRequest
                    } catch (e) {}
                };
                var Qt = {
                        0: 200,
                        1223: 204
                    },
                    Kt = S.ajaxSettings.xhr();
                v.cors = !!Kt && "withCredentials" in Kt, v.ajax = Kt = !!Kt, S.ajaxTransport((function(e) {
                    var t, r;
                    if (v.cors || Kt && !e.crossDomain) return {
                        send: function(i, o) {
                            var a, s = e.xhr();
                            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (a in e.xhrFields) s[a] = e.xhrFields[a];
                            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                            t = function(e) {
                                return function() {
                                    t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Qt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                                }
                            }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                4 === s.readyState && n.setTimeout((function() {
                                    t && r()
                                }))
                            }, t = t("abort");
                            try {
                                s.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t) throw e
                            }
                        },
                        abort: function() {
                            t && t()
                        }
                    }
                })), S.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1)
                })), S.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return S.globalEval(e), e
                        }
                    }
                }), S.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                })), S.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs) return {
                        send: function(r, i) {
                            t = S("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), x.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }));
                var Zt, en = [],
                    tn = /(=)\?(?=&|$)|\?\?/;
                S.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = en.pop() || S.expando + "_" + Dt.guid++;
                        return this[e] = !0, e
                    }
                }), S.ajaxPrefilter("json jsonp", (function(e, t, r) {
                    var i, o, a, s = !1 !== e.jsonp && (tn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(tn, "$1" + i) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                        return a || S.error(i + " was not called"), a[0]
                    }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                        a = arguments
                    }, r.always((function() {
                        void 0 === o ? S(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, en.push(i)), a && y(o) && o(a[0]), a = o = void 0
                    })), "script"
                })), v.createHTMLDocument = ((Zt = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Zt.childNodes.length), S.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, t.head.appendChild(r)) : t = x), o = !n && [], (i = W.exec(e)) ? [t.createElement(i[1])] : (i = qe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
                    var r, i, o
                }, S.fn.load = function(e, t, n) {
                    var r, i, o, a = this,
                        s = e.indexOf(" ");
                    return s > -1 && (r = St(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && S.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
                    })).always(n && function(e, t) {
                        a.each((function() {
                            n.apply(this, o || [e.responseText, t, e])
                        }))
                    }), this
                }, S.expr.pseudos.animated = function(e) {
                    return S.grep(S.timers, (function(t) {
                        return e === t.elem
                    })).length
                }, S.offset = {
                    setOffset: function(e, t, n) {
                        var r, i, o, a, s, u, l = S.css(e, "position"),
                            c = S(e),
                            f = {};
                        "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), y(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
                    }
                }, S.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                            S.offset.setOffset(this, e, t)
                        }));
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0],
                                i = {
                                    top: 0,
                                    left: 0
                                };
                            if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - i.top - S.css(r, "marginTop", !0),
                                left: t.left - i.left - S.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                            return e || he
                        }))
                    }
                }), S.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    S.fn[e] = function(r) {
                        return Z(this, (function(e, r, i) {
                            var o;
                            if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                        }), e, r, arguments.length)
                    }
                })), S.each(["top", "left"], (function(e, t) {
                    S.cssHooks[t] = Ze(v.pixelPosition, (function(e, n) {
                        if (n) return n = Ke(e, t), Ve.test(n) ? S(e).position()[t] + "px" : n
                    }))
                })), S.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    S.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, r) {
                        S.fn[r] = function(i, o) {
                            var a = arguments.length && (n || "boolean" != typeof i),
                                s = n || (!0 === i || !0 === o ? "margin" : "border");
                            return Z(this, (function(t, n, i) {
                                var o;
                                return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? S.css(t, n, s) : S.style(t, n, i, s)
                            }), t, a ? i : void 0, a)
                        }
                    }))
                })), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                    S.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                })), S.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.on("mouseenter", e).on("mouseleave", t || e)
                    }
                }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    S.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }));
                var nn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                S.proxy = function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (i = function() {
                        return e.apply(t || this, r.concat(s.call(arguments)))
                    }).guid = e.guid = e.guid || S.guid++, i
                }, S.holdReady = function(e) {
                    e ? S.readyWait++ : S.ready(!0)
                }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = E, S.isFunction = y, S.isWindow = m, S.camelCase = re, S.type = T, S.now = Date.now, S.isNumeric = function(e) {
                    var t = S.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }, S.trim = function(e) {
                    return null == e ? "" : (e + "").replace(nn, "$1")
                }, void 0 === (r = function() {
                    return S
                }.apply(t, [])) || (e.exports = r);
                var rn = n.jQuery,
                    on = n.$;
                return S.noConflict = function(e) {
                    return n.$ === S && (n.$ = on), e && n.jQuery === S && (n.jQuery = rn), S
                }, void 0 === i && (n.jQuery = n.$ = S), S
            }))
        }
    }
]);
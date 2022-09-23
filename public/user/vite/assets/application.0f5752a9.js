var cn = Object.defineProperty,
    dn = Object.defineProperties;
var gn = Object.getOwnPropertyDescriptors;
var G = Object.getOwnPropertySymbols;
var Ne = Object.prototype.hasOwnProperty,
    Ee = Object.prototype.propertyIsEnumerable;
var ae = (n, e, r) => e in n ? cn(n, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : n[e] = r,
    k = (n, e) => {
        for (var r in e || (e = {})) Ne.call(e, r) && ae(n, r, e[r]);
        if (G)
            for (var r of G(e)) Ee.call(e, r) && ae(n, r, e[r]);
        return n
    },
    x = (n, e) => dn(n, gn(e));
var M = (n, e) => {
    var r = {};
    for (var t in n) Ne.call(n, t) && e.indexOf(t) < 0 && (r[t] = n[t]);
    if (n != null && G)
        for (var t of G(n)) e.indexOf(t) < 0 && Ee.call(n, t) && (r[t] = n[t]);
    return r
};
var p = (n, e, r) => (ae(n, typeof e != "symbol" ? e + "" : e, r), r);
import {
    C as O,
    a as oe,
    j as se,
    r as s,
    I as Ae,
    u as ue,
    b as Z,
    v as pn,
    R as qe,
    c as B,
    Q as Te,
    d as Ie,
    E as _n,
    m as q,
    e as mn,
    f as hn,
    A as yn,
    g as bn
} from "./vendor.00351ea5.js";
class Re extends O {
    toggle(e) {
        const r = this.hiddenElementTargets,
            t = this.triggerTargets,
            i = e.currentTarget;
        if (i.getAttribute("style")) {
            i.removeAttribute("style"), r.forEach(a => a.removeAttribute("style"));
            return
        }
        t.forEach(a => a.removeAttribute("style")), i.style.color = "black", r.forEach(a => {
            if (a.removeAttribute("style"), a.dataset.accordion === i.dataset.accordion) {
                const o = a.scrollHeight;
                a.style.opacity = 100, a.style.height = o + "px", a.style.cursor = "auto", a.style.pointerEvents = "auto"
            }
        })
    }
}
p(Re, "targets", ["trigger", "hiddenElement"]);
var vn = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    default: Re
});
class Le extends O {
    constructor() {
        super(...arguments);
        p(this, "connect", () => {
            this.mobileMenuTarget.querySelectorAll("a").forEach(t => {
                t.addEventListener("click", () => {
                    this.toggle()
                })
            })
        })
    }
    toggle() {
        this.hamburgerTarget.classList.toggle("active"), this.mobileMenuTarget.classList.toggle("active"), this.navTarget.classList.toggle("active"), this.element.classList.toggle("active")
    }
}
p(Le, "targets", ["hamburger", "mobileMenu", "nav"]);
var fn = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    default: Le
});
const $e = 50,
    kn = ["rentola.fi", "staging.rentola.fi"],
    Q = () => kn.some(n => n === window.location.hostname);
class wn extends O {
    constructor() {
        super(...arguments);
        p(this, "connect", () => {
            const e = this.element,
                r = this.getId(),
                i = (window.ezstandalone.placeholders || []).some(a => a === r);
            r && !i && (console.log("loaded placeholder id:", r), window.ezstandalone.cmd.push(function() {
                Q() && window.ezstandalone.isEzoicUser($e) === !0 || !Q() ? (console.log("loaded ad visible"), window.ezstandalone.displayMore(r)) : (console.log("loaded ad not visible"), e.parentElement.classList.add("!hidden"))
            }))
        })
    }
    getId() {
        const e = this.element,
            r = e.id.split("-"),
            t = Number(r[r.length - 1]);
        return e.offsetParent ? t : null
    }
}
var xn = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    default: wn
});
class Ve extends O {
    constructor() {
        super(...arguments);
        p(this, "connect", () => {
            const {
                placeholders: e,
                validIds: r
            } = this.getValidIds();
            window.ezstandalone = window.ezstandalone || {}, window.ezstandalone.cmd = window.ezstandalone.cmd || [], window.ezstandalone.cmd.push(function() {
                Q() && window.ezstandalone.isEzoicUser($e) === !0 || !Q() ? (console.log("ads visible"), window.ezstandalone.define(r), window.ezstandalone.enabled ? window.ezstandalone.refresh() : (window.ezstandalone.enable(), window.ezstandalone.display())) : (console.log("ads not visible"), e.forEach(t => {
                    t.parentElement.classList.add("!hidden")
                }))
            })
        })
    }
    getValidIds() {
        const e = this.placeholderTargets,
            r = e.map(i => {
                const a = i.id.split("-"),
                    o = Number(a[a.length - 1]);
                return i.offsetParent ? o : null
            });
        console.log(e);
        const t = r.filter(i => typeof i == "number" && !isNaN(i));
        return console.log(t), {
            placeholders: e,
            validIds: t
        }
    }
}
p(Ve, "targets", ["placeholder"]);
var jn = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    default: Ve
});
class Sn extends O {
    constructor() {
        super(...arguments);
        p(this, "connect", () => {});
        p(this, "validateFirstName", e => {
            this.validateInputByRegexp(e, new XRegExp("^[\\p{L}\\p{M}' ]+$"))
        });
        p(this, "validateMaxRent", e => {
            this.validateInputByRegexp(e, /[0-9\/]+/)
        });
        p(this, "validateInputByRegexp", (e, r) => {
            r.test(e.key) || e.preventDefault()
        })
    }
}
var Cn = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    default: Sn
});
class ce extends O {
    constructor() {
        super(...arguments);
        p(this, "connect", () => {
            const e = oe.get("search-agent-popup-closed"),
                r = localStorage.getItem("contact-landlord-clicked"),
                t = oe.get("search-agent-popup-invalid-data"),
                i = localStorage.getItem("search-agent-created-via-popup");
            e === void 0 && r === null && t === void 0 && i === null && document.addEventListener("DOMContentLoaded", a => {
                var o = parseInt(sessionStorage.getItem("sa-popup-timer"));
                (!o || o <= 0) && (o = 55), this.intervalId = setInterval(() => {
                    o--, sessionStorage.setItem("sa-popup-timer", o), o === 0 && (this.togglePopup(), this.observeModalClose(), clearInterval(this.intervalId))
                }, 1e3)
            })
        });
        p(this, "disconnect", () => {
            $("#search-agent-modal").off("hidden.bs.modal")
        });
        p(this, "togglePopup", () => {
            $("#newAbuseModal").modal("hide"), $("#search-agent-modal").modal("toggle")
        });
        p(this, "observeModalClose", () => {
            $("#search-agent-modal").on("hidden.bs.modal", e => {
                oe.set("search-agent-popup-closed", 1, {
                    expires: 7
                })
            })
        })
    }
}
p(ce, "targets", []), p(ce, "intervalId");
var Pn = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    default: ce
});
class zn {
    constructor(e, r) {
        p(this, "element");
        p(this, "started");
        p(this, "delegate");
        p(this, "elements");
        p(this, "mutationObserver");
        p(this, "mutationObserverInit", {
            attributes: !0,
            childList: !0,
            subtree: !0
        });
        this.element = e, this.started = !1, this.delegate = r, this.elements = new Set, this.mutationObserver = new MutationObserver(t => this.processMutations(t))
    }
    start() {
        this.started || (this.started = !0, this.mutationObserver.observe(this.element, this.mutationObserverInit), this.refresh())
    }
    pause(e) {
        this.started && (this.mutationObserver.disconnect(), this.started = !1), e(), this.started || (this.mutationObserver.observe(this.element, this.mutationObserverInit), this.started = !0)
    }
    stop() {
        this.started && (this.mutationObserver.takeRecords(), this.mutationObserver.disconnect(), this.started = !1)
    }
    refresh() {
        if (this.started) {
            const e = new Set(this.matchElementsInTree());
            for (const r of Array.from(this.elements)) e.has(r) || this.removeElement(r);
            for (const r of Array.from(e)) this.addElement(r)
        }
    }
    processMutations(e) {
        if (this.started)
            for (const r of e) this.processMutation(r)
    }
    processMutation(e) {
        e.type == "attributes" ? this.processAttributeChange(e.target, e.attributeName) : e.type == "childList" && (this.processRemovedNodes(e.removedNodes), this.processAddedNodes(e.addedNodes))
    }
    processAttributeChange(e, r) {
        const t = e;
        this.elements.has(t) ? this.delegate.elementAttributeChanged && this.matchElement(t) ? this.delegate.elementAttributeChanged(t, r) : this.removeElement(t) : this.matchElement(t) && this.addElement(t)
    }
    processRemovedNodes(e) {
        for (const r of Array.from(e)) {
            const t = this.elementFromNode(r);
            t && this.processTree(t, this.removeElement)
        }
    }
    processAddedNodes(e) {
        for (const r of Array.from(e)) {
            const t = this.elementFromNode(r);
            t && this.elementIsActive(t) && this.processTree(t, this.addElement)
        }
    }
    matchElement(e) {
        return this.delegate.matchElement(e)
    }
    matchElementsInTree(e = this.element) {
        return this.delegate.matchElementsInTree(e)
    }
    processTree(e, r) {
        for (const t of this.matchElementsInTree(e)) r.call(this, t)
    }
    elementFromNode(e) {
        if (e.nodeType == Node.ELEMENT_NODE) return e
    }
    elementIsActive(e) {
        return e.isConnected != this.element.isConnected ? !1 : this.element.contains(e)
    }
    addElement(e) {
        this.elements.has(e) || this.elementIsActive(e) && (this.elements.add(e), this.delegate.elementMatched && this.delegate.elementMatched(e))
    }
    removeElement(e) {
        this.elements.has(e) && (this.elements.delete(e), this.delegate.elementUnmatched && this.delegate.elementUnmatched(e))
    }
}
class Nn {
    constructor(e, r, t) {
        p(this, "attributeName");
        p(this, "delegate");
        p(this, "elementObserver");
        this.attributeName = r, this.delegate = t, this.elementObserver = new zn(e, this)
    }
    get element() {
        return this.elementObserver.element
    }
    get selector() {
        return `[${this.attributeName}]`
    }
    start() {
        this.elementObserver.start()
    }
    pause(e) {
        this.elementObserver.pause(e)
    }
    stop() {
        this.elementObserver.stop()
    }
    refresh() {
        this.elementObserver.refresh()
    }
    get started() {
        return this.elementObserver.started
    }
    matchElement(e) {
        return e.hasAttribute(this.attributeName)
    }
    matchElementsInTree(e) {
        const r = this.matchElement(e) ? [e] : [],
            t = Array.from(e.querySelectorAll(this.selector));
        return r.concat(t)
    }
    elementMatched(e) {
        this.delegate.elementMatchedAttribute && this.delegate.elementMatchedAttribute(e, this.attributeName)
    }
    elementUnmatched(e) {
        this.delegate.elementUnmatchedAttribute && this.delegate.elementUnmatchedAttribute(e, this.attributeName)
    }
    elementAttributeChanged(e, r) {
        this.delegate.elementAttributeValueChanged && this.attributeName == r && this.delegate.elementAttributeValueChanged(e, r)
    }
}
const En = "_button_qytcj_1";
var An = {
    button: En
};
const l = se.exports.jsx,
    d = se.exports.jsxs,
    j = se.exports.Fragment,
    qn = r => {
        var t = r,
            {
                text: n
            } = t,
            e = M(t, ["text"]);
        return l("button", x(k({
            type: "button"
        }, e), {
            className: An.button,
            children: n
        }))
    },
    Tn = ({
        text: n
    }) => {
        const [e, r] = s.exports.useState(0);
        return d("div", {
            className: "App",
            children: [l(qn, {
                text: "hello",
                onClick: () => console.log("hello")
            }), d("header", {
                className: "App-header",
                children: [l("p", {
                    children: "Hello Vite + React!"
                }), l("p", {
                    children: n
                }), l("p", {
                    children: d("button", {
                        type: "button",
                        onClick: () => r(t => t + 1),
                        children: ["count is: ", e]
                    })
                }), d("p", {
                    children: ["Edit ", l("code", {
                        children: "components/SampleApp/index.tsx"
                    }), " and save to test HMR updates."]
                }), d("p", {
                    children: [l("a", {
                        className: "App-link",
                        href: "https://reactjs.org",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Learn React"
                    }), " | ", l("a", {
                        className: "App-link",
                        href: "https://vitejs.dev/guide/features.html",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Vite Docs"
                    })]
                })]
            })]
        })
    },
    In = {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    Rn = {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    Ln = {
        javascript: {
            buckaroo: {
                testkey_error: "\u039F \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2."
            },
            old_payment_flow: {
                error: "\u039A\u03AC\u03C4\u03B9 \u03C0\u03AE\u03B3\u03B5 \u03C3\u03C4\u03C1\u03B1\u03B2\u03AC! \u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03B2\u03B5\u03B2\u03B1\u03B9\u03C9\u03B8\u03B5\u03AF\u03C4\u03B5 \u03CC\u03C4\u03B9 \u03B5\u03AF\u03C3\u03C4\u03B5 \u03C3\u03C5\u03BD\u03B4\u03B5\u03B4\u03B5\u03BC\u03AD\u03BD\u03BF\u03B9 \u03C3\u03C4\u03BF \u03B4\u03B9\u03B1\u03B4\u03AF\u03BA\u03C4\u03C5\u03BF \u03BA\u03B1\u03B9 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC"
            },
            rebilly: {
                subscription: {
                    back: "\u0395\u03C0\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03AE",
                    error_abandoned: "\u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B5\u03B3\u03BA\u03B1\u03C4\u03B1\u03BB\u03B5\u03AF\u03C6\u03B8\u03B7\u03BA\u03B5, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03AE \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7.",
                    error_authentication_required: "\u0391\u03C0\u03B1\u03B9\u03C4\u03B5\u03AF\u03C4\u03B1\u03B9 \u03AD\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03C4\u03B1\u03C5\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03AE \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7.",
                    error_canceled: "\u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B1\u03BA\u03C5\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03AE \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7.",
                    error_cvc_declined: "\u03A4\u03BF CVC \u03B1\u03C0\u03BF\u03C1\u03C1\u03AF\u03C6\u03B8\u03B7\u03BA\u03B5, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03AE \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7.",
                    error_declined: "\u0397 \u03C3\u03C5\u03BD\u03B1\u03BB\u03BB\u03B1\u03B3\u03AE \u03B1\u03C0\u03BF\u03C1\u03C1\u03AF\u03C6\u03B8\u03B7\u03BA\u03B5, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03AE \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7.",
                    error_invalid_card: "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1 \u03BA\u03AC\u03C1\u03C4\u03B1\u03C2.",
                    error_payment_generic: "\u0394\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03C5\u03BD\u03B1\u03C4\u03AE \u03B7 \u03B5\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u03C4\u03B7\u03C2 \u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE\u03C2 \u03C3\u03B1\u03C2, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03AE \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7.",
                    error_refused: "\u0397 \u03BA\u03AC\u03C1\u03C4\u03B1 \u03B1\u03C0\u03BF\u03C1\u03C1\u03AF\u03C6\u03B8\u03B7\u03BA\u03B5, \u03C0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03AE \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7.",
                    first_name: "\u038C\u03BD\u03BF\u03BC\u03B1",
                    last_name: "\u0395\u03C0\u03AF\u03B8\u03B5\u03C4\u03BF",
                    paying_with_card: "\u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE \u03BC\u03B5 \u03BA\u03AC\u03C1\u03C4\u03B1",
                    paying_with_paypal: "\u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE \u03BC\u03B5 PayPal",
                    paying_with_wallet: "\u03A0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE \u03BC\u03B5 \u03C8\u03B7\u03C6\u03B9\u03B1\u03BA\u03CC \u03C0\u03BF\u03C1\u03C4\u03BF\u03C6\u03CC\u03BB\u03B9",
                    start_trial: "\u0388\u03BD\u03B1\u03C1\u03BE\u03B7 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AE\u03C2 %{trial_days} \u03B7\u03BC\u03B5\u03C1\u03CE\u03BD \u03BC\u03B5 %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "\u0394\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7",
                    city: "\u03A0\u03CC\u03BB\u03B7",
                    country: "\u03A7\u03CE\u03C1\u03B1",
                    district: "\u03A0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE",
                    neighborhood: "\u0393\u03B5\u03B9\u03C4\u03BF\u03BD\u03B9\u03AC",
                    postal_code: "\u03A4\u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B9\u03BA\u03CC\u03C2 \u039A\u03CE\u03B4\u03B9\u03BA\u03B1\u03C2",
                    region: "\u03A0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE"
                },
                input_placeholder: "\u03A4\u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B9\u03BA\u03CC\u03C2 \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1\u03C2, \u03C0\u03CC\u03BB\u03B7, \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7, \u03C0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE, \u03C0\u03B5\u03C1\u03B9\u03C6\u03AD\u03C1\u03B5\u03B9\u03B1 \u03AE \u03B3\u03B5\u03B9\u03C4\u03BF\u03BD\u03B9\u03AC",
                no_results: {
                    first_suggestion: "\u0392\u03B5\u03B2\u03B1\u03B9\u03C9\u03B8\u03B5\u03AF\u03C4\u03B5 \u03CC\u03C4\u03B9 \u03CC\u03BB\u03B5\u03C2 \u03BF\u03B9 \u03BB\u03AD\u03BE\u03B5\u03B9\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B3\u03C1\u03B1\u03BC\u03BC\u03AD\u03BD\u03B5\u03C2 \u03C3\u03C9\u03C3\u03C4\u03AC",
                    info: "\u039B\u03C5\u03C0\u03BF\u03CD\u03BC\u03B1\u03C3\u03C4\u03B5, \u03B4\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1 \u03B3\u03B9\u03B1",
                    second_suggestion: "\u0394\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03AC\u03BB\u03BB\u03B5\u03C2 \u03B1\u03BD\u03B1\u03B6\u03B7\u03C4\u03AE\u03C3\u03B5\u03B9\u03C2",
                    suggestions: "\u03A0\u03C1\u03BF\u03C4\u03AC\u03C3\u03B5\u03B9\u03C2"
                },
                query_error: "\u039A\u03AC\u03C4\u03B9 \u03C0\u03AE\u03B3\u03B5 \u03C3\u03C4\u03C1\u03B1\u03B2\u03AC! \u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03AE \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "\u0388\u03B3\u03BA\u03BB\u03B7\u03BC\u03B1",
                        education: "\u0395\u03BA\u03C0\u03B1\u03AF\u03B4\u03B5\u03C5\u03C3\u03B7",
                        environment: "\u03A0\u03B5\u03C1\u03B9\u03B2\u03AC\u03BB\u03BB\u03BF\u03BD",
                        equality: "\u0399\u03C3\u03CC\u03C4\u03B7\u03C4\u03B1",
                        health: "\u03A5\u03B3\u03B5\u03AF\u03B1",
                        housing: "\u03A3\u03C4\u03AD\u03B3\u03B1\u03C3\u03B7",
                        income: "\u0395\u03B9\u03C3\u03CC\u03B4\u03B7\u03BC\u03B1",
                        labour: "\u0395\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1"
                    },
                    index: "\u0394\u03B5\u03AF\u03BA\u03C4\u03B7\u03C2",
                    rank: "\u039A\u03B1\u03C4\u03AC\u03C4\u03B1\u03BE\u03B7",
                    region: "\u039C\u03B7\u03C4\u03C1\u03BF\u03C0\u03BF\u03BB\u03B9\u03C4\u03B9\u03BA\u03AE \u03C0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE"
                },
                fr: {
                    categories: {
                        aging: "\u0397\u03BB\u03B9\u03BA\u03AF\u03B1",
                        agriculture: "\u0393\u03B5\u03C9\u03C1\u03B3\u03AF\u03B1",
                        crime: "\u0388\u03B3\u03BA\u03BB\u03B7\u03BC\u03B1",
                        education: "\u0395\u03BA\u03C0\u03B1\u03AF\u03B4\u03B5\u03C5\u03C3\u03B7",
                        housing: "\u03A3\u03C4\u03AD\u03B3\u03B1\u03C3\u03B7",
                        living_standard: "\u0392\u03B9\u03C9\u03C4\u03B9\u03BA\u03CC \u03B5\u03C0\u03AF\u03C0\u03B5\u03B4\u03BF",
                        sport: "\u0386\u03B8\u03BB\u03B7\u03BC\u03B1"
                    },
                    index: "\u0394\u03B5\u03AF\u03BA\u03C4\u03B7\u03C2",
                    rank: "\u039A\u03B1\u03C4\u03AC\u03C4\u03B1\u03BE\u03B7",
                    region: "\u0394\u03B9\u03B1\u03BC\u03B5\u03C1\u03AF\u03C3\u03BC\u03B1\u03C4\u03B1"
                },
                nl: {
                    categories: {
                        crime: "\u0388\u03B3\u03BA\u03BB\u03B7\u03BC\u03B1",
                        economy: "\u039F\u03B9\u03BA\u03BF\u03BD\u03BF\u03BC\u03AF\u03B1",
                        education: "\u0395\u03BA\u03C0\u03B1\u03AF\u03B4\u03B5\u03C5\u03C3\u03B7",
                        health: "\u03A5\u03B3\u03B5\u03AF\u03B1",
                        housing: "\u03A3\u03C4\u03AD\u03B3\u03B1\u03C3\u03B7",
                        leisure: "\u0391\u03BD\u03B1\u03C8\u03C5\u03C7\u03AE \u03BA\u03B1\u03B9 \u03C0\u03BF\u03BB\u03B9\u03C4\u03B9\u03C3\u03BC\u03CC\u03C2",
                        new_arrivals: "\u039D\u03AD\u03B5\u03C2 \u03B1\u03C6\u03AF\u03BE\u03B5\u03B9\u03C2"
                    },
                    index: "\u0394\u03B5\u03AF\u03BA\u03C4\u03B7\u03C2",
                    rank: "\u039A\u03B1\u03C4\u03AC\u03C4\u03B1\u03BE\u03B7",
                    region: "\u0395\u03C0\u03B1\u03C1\u03C7\u03AF\u03B5\u03C2"
                }
            }
        }
    },
    $n = {
        javascript: {
            buckaroo: {
                testkey_error: "This is an invalid account number"
            },
            old_payment_flow: {
                error: "Something went wrong! Please make sure you are connected to the internet and try again"
            },
            rebilly: {
                subscription: {
                    back: "back",
                    error_abandoned: "Transaction abandoned, please try again or contact the support.",
                    error_authentication_required: "Authentication required, please try again or contact the support.",
                    error_canceled: "Transaction canceled, please try again or contact the support.",
                    error_cvc_declined: "CVC declined, please try again or contact the support.",
                    error_declined: "Transaction declined, please try again or contact the support.",
                    error_invalid_card: "Invalid card details.",
                    error_payment_generic: "Unable to process your payment, please try again or contact the support.",
                    error_refused: "Card refused, please try again or contact the support.",
                    first_name: "First Name",
                    last_name: "Last Name",
                    paying_with_card: "Paying with card",
                    paying_with_paypal: "Paying with PayPal",
                    paying_with_wallet: "Paying with digital wallet",
                    start_trial: "Start %{trial_days} days trial for %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Address",
                    city: "City",
                    country: "Country",
                    district: "District",
                    neighborhood: "Neighborhood",
                    postal_code: "Postal Code",
                    region: "Region"
                },
                input_placeholder: "Zip code, city, address, region, district or neighborhood",
                no_results: {
                    first_suggestion: "Make sure that all words are spelled correctly",
                    info: "Sorry, there are no results for",
                    second_suggestion: "Try other searches",
                    suggestions: "Suggestions"
                },
                query_error: "Something went wrong! Please try again or contact the support"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Crime",
                        education: "Education",
                        environment: "Environment",
                        equality: "Equality",
                        health: "Health",
                        housing: "Housing",
                        income: "Income",
                        labour: "Labour"
                    },
                    index: "Index",
                    rank: "Rank",
                    region: "Metropolitan area"
                },
                fr: {
                    categories: {
                        aging: "Aging",
                        agriculture: "Agriculture",
                        crime: "Crime",
                        education: "Education",
                        housing: "Housing",
                        living_standard: "Living Standard",
                        sport: "Sport"
                    },
                    index: "Index",
                    rank: "Rank",
                    region: "Departements"
                },
                nl: {
                    categories: {
                        crime: "Crime",
                        economy: "Economy",
                        education: "Education",
                        health: "Health",
                        housing: "Housing",
                        leisure: "Leisure and culture",
                        new_arrivals: "New Arrivals"
                    },
                    index: "Index",
                    rank: "Rank",
                    region: "Provinces"
                }
            }
        }
    },
    Vn = {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    Dn = {
        javascript: {
            buckaroo: {
                testkey_error: "Virheellinen tilinumero"
            },
            old_payment_flow: {
                error: "Jokin meni pieleen! Varmista, ett\xE4 olet yhteydess\xE4 internetiin, ja yrit\xE4 uudelleen"
            },
            rebilly: {
                subscription: {
                    back: "takaisin",
                    error_abandoned: "Tapahtuma hyl\xE4tty, yrit\xE4 uudelleen tai ota yhteys tukeen.",
                    error_authentication_required: "Todennus vaaditaan, yrit\xE4 uudelleen tai ota yhteytt\xE4 tukeen.",
                    error_canceled: "Tapahtuma hyl\xE4tty, yrit\xE4 uudelleen tai ota yhteys tukeen.",
                    error_cvc_declined: "CVC hyl\xE4tty, yrit\xE4 uudelleen tai ota yhteytt\xE4 tukeen.",
                    error_declined: "Tapahtuma hyl\xE4tty, yrit\xE4 uudelleen tai ota yhteys tukeen.",
                    error_invalid_card: "V\xE4\xE4r\xE4t korttitiedot",
                    error_payment_generic: "Emme pystyneet k\xE4sittelem\xE4\xE4n maksuasi, yrit\xE4 uudelleen tai ota yhteys tukeen",
                    error_refused: "Korttia ei hyv\xE4ksytty, yrit\xE4 uudelleen tai ota yhteytt\xE4 tukeen.",
                    first_name: "Etunimi",
                    last_name: "Sukunimi",
                    paying_with_card: "Kortilla maksaminen",
                    paying_with_paypal: "Maksaminen PayPalilla",
                    paying_with_wallet: "Maksaminen nettilompakolla",
                    start_trial: "Aloita %{trial_days} p\xE4iv\xE4n kokeilujakso hintaan %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Osoite",
                    city: "Kaupunki",
                    country: "Maa",
                    district: "Alue",
                    neighborhood: "Naapurusto",
                    postal_code: "Postinumero",
                    region: "Maakunta"
                },
                input_placeholder: "Postinumero, kaupunki, osoite, maakunta, alue tai naapurusto",
                no_results: {
                    first_suggestion: "Varmista, ett\xE4 kaikki sanat ovat kirjoitettu oikein",
                    info: "Valitettavasti tuloksia ei ole haulle",
                    second_suggestion: "Yrit\xE4 muita hakuja",
                    suggestions: "Ehdotuksia"
                },
                query_error: "Jokin meni pieleen! Yrit\xE4 uudelleen tai ota yhteys tukeen"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Rikollisuus",
                        education: "Koulutus",
                        environment: "Ymp\xE4rist\xF6",
                        equality: "Tasa-arvo",
                        health: "Terveys",
                        housing: "Asuminen",
                        income: "Tulo",
                        labour: "Ty\xF6"
                    },
                    index: "Indeksi",
                    rank: "Sijoitus",
                    region: "P\xE4\xE4kaupunkiseutu"
                },
                fr: {
                    categories: {
                        aging: "Ik\xE4\xE4ntyminen",
                        agriculture: "Maatalous",
                        crime: "Rikollisuus",
                        education: "Koulutus",
                        housing: "Asuminen",
                        living_standard: "Elintaso",
                        sport: "Urheilu"
                    },
                    index: "Indeksi",
                    rank: "Sijoitus",
                    region: "Osastot"
                },
                nl: {
                    categories: {
                        crime: "Rikollisuus",
                        economy: "Talous",
                        education: "Koulutus",
                        health: "Terveys",
                        housing: "Asuminen",
                        leisure: "Vapaa-aika ja kulttuuri",
                        new_arrivals: "Uutuudet"
                    },
                    index: "Indeksi",
                    rank: "Sijoitus",
                    region: "Maakunnat"
                }
            }
        }
    },
    Mn = {
        javascript: {
            buckaroo: {
                testkey_error: "Ovo je neva\u017Ee\u0107i broj ra\u010Duna"
            },
            old_payment_flow: {
                error: "Ne\u0161to je po\u0161lo po zlu! Provjerite jeste li povezani na internet i poku\u0161ajte ponovo"
            },
            rebilly: {
                subscription: {
                    back: "povratak",
                    error_abandoned: "Transakcija je prekinuta, poku\u0161ajte ponovo ili kontaktirajte podr\u0161ku",
                    error_authentication_required: "Potrebna je provjera autenti\u010Dnosti, poku\u0161ajte ponovo ili kontaktirajte podr\u0161ku",
                    error_canceled: "Transakcija je otkazana, poku\u0161ajte ponovo ili kontaktirajte podr\u0161ku",
                    error_cvc_declined: "CVC je odbijen, poku\u0161ajte ponovno ili kontaktirajte podr\u0161ku",
                    error_declined: "Transakcija je odbijena, poku\u0161ajte ponovo ili kontaktirajte podr\u0161ku",
                    error_invalid_card: "Neva\u017Ee\u0107i podaci o kartici",
                    error_payment_generic: "Nije mogu\u0107e obraditi va\u0161e pla\u0107anje, poku\u0161ajte ponovno ili kontaktirajte podr\u0161ku",
                    error_refused: "Kartica je odbijena, poku\u0161ajte ponovo ili kontaktirajte podr\u0161ku",
                    first_name: "Ime",
                    last_name: "Prezime",
                    paying_with_card: "Pla\u0107anje karticom",
                    paying_with_paypal: "Pla\u0107anje putem PayPala",
                    paying_with_wallet: "Pla\u0107anje digitalnim nov\u010Danikom",
                    start_trial: "Zapo\u010Dni %{trial_days} -dnevno probno razdoblje za %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Adresa",
                    city: "Grad",
                    country: "Dr\u017Eava",
                    district: "Op\u0107ina",
                    neighborhood: "Susjedstvo",
                    postal_code: "Po\u0161tanski broj",
                    region: "Regija"
                },
                input_placeholder: "Po\u0161tanski broj, grad, adresa, regija, okrug ili susjedstvo",
                no_results: {
                    first_suggestion: "Provjerite jesu li sve rije\u010Di ispravno napisane",
                    info: "\u017Dao nam je, nema rezultata za",
                    second_suggestion: "Poku\u0161ajte s drugim pretragama",
                    suggestions: "Prijedlozi"
                },
                query_error: "Ne\u0161to je po\u0161lo po zlu! Poku\u0161ajte ponovno ili kontaktirajte podr\u0161ku"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Zlo\u010Din",
                        education: "Obrazovanje",
                        environment: "Okolina",
                        equality: "Jednakost",
                        health: "Zdravlje",
                        housing: "Stanovanje",
                        income: "Prihod",
                        labour: "Rad"
                    },
                    index: "Indeks",
                    rank: "Rang",
                    region: "Metropolitansko podru\u010Dje"
                },
                fr: {
                    categories: {
                        aging: "Starenje",
                        agriculture: "Poljoprivreda",
                        crime: "Zlo\u010Din",
                        education: "Obrazovanje",
                        housing: "Stanovanje",
                        living_standard: "\u017Divotni standard",
                        sport: "Sport"
                    },
                    index: "Indeks",
                    rank: "Rang",
                    region: "Odjeli"
                },
                nl: {
                    categories: {
                        crime: "Zlo\u010Din",
                        economy: "Ekonomija",
                        education: "Obrazovanje",
                        health: "Zdravlje",
                        housing: "Stanovanje",
                        leisure: "Slobodno vrijeme i kultura",
                        new_arrivals: "Novi dolasci"
                    },
                    index: "Indeks",
                    rank: "Rang",
                    region: "Provincije"
                }
            }
        }
    },
    On = {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    Wn = {
        javascript: {
            buckaroo: {
                testkey_error: "Numero di conto non valido"
            },
            old_payment_flow: {
                error: "Ops, si \xE8 verificato un errore! Assicurati di avere la connessione ad internet e riprova"
            },
            rebilly: {
                subscription: {
                    back: "indietro",
                    error_abandoned: "Transazione annullata, si prega di riprovare o contattare l'assistenza",
                    error_authentication_required: "Autenticazione richiesta, si prega di riprovare o contattare l'assistenza",
                    error_canceled: "Transazione cancellata, si prega di riprovare o contattare l'assistenza",
                    error_cvc_declined: "CVC rifiutato, si prega di riprovare o contattare l'assistenza",
                    error_declined: "Transazione rifiutata, si prega di riprovare o contattare l'assistenza",
                    error_invalid_card: "Dettagli carta non validi",
                    error_payment_generic: "Non \xE8 stato possibile processare il pagamento, si prega di riprovare o contattare l'assistenza.",
                    error_refused: "Carta di credito rifiutata, si prega di riprovare o contattare l'assistenza",
                    first_name: "Nome",
                    last_name: "Cognome",
                    paying_with_card: "Pagamento tramite carta",
                    paying_with_paypal: "Pagamento tramite Paypal",
                    paying_with_wallet: "Pagamento tramite portafoglio digitale",
                    start_trial: "Inizia %{trial_days} giorni di prova per %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Indirizzo",
                    city: "Citt\xE0",
                    country: "Paese",
                    district: "Zona distretto",
                    neighborhood: "Quartiere",
                    postal_code: "Codice postale",
                    region: "Regione"
                },
                input_placeholder: "Codice zip, citt\xE0, indirizzo, regione, distretto o quartiere",
                no_results: {
                    first_suggestion: "Assicurati che tutte le parole siano corrette",
                    info: "Spiacente, nessun risultato per",
                    second_suggestion: "Prova altre ricerche",
                    suggestions: "Suggerimenti"
                },
                query_error: "Ops, si \xE8 verificato un errore! Si prega di riprovare o contattare il servizio clienti"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Crimine",
                        education: "Titolo di studio",
                        environment: "Ambiente",
                        equality: "Uguaglianza",
                        health: `Salute
`,
                        housing: "Abitazione",
                        income: "Reddito",
                        labour: "Chi siamo"
                    },
                    index: "Indice",
                    rank: "Rango",
                    region: "Area metropolitana"
                },
                fr: {
                    categories: {
                        aging: "Et\xE0",
                        agriculture: "Agricoltura",
                        crime: "Crimine",
                        education: "Titolo di studio",
                        housing: "Abitazione",
                        living_standard: "Standard di vita",
                        sport: "Sport"
                    },
                    index: "Indice",
                    rank: "Rango",
                    region: "Dipartimenti"
                },
                nl: {
                    categories: {
                        crime: "Crimine",
                        economy: "Economia",
                        education: "Titolo di studio",
                        health: "Salute",
                        housing: "Abitazione",
                        leisure: "Svago e cultura",
                        new_arrivals: "Nuovi arrivi"
                    },
                    index: "Indice",
                    rank: "Rango",
                    region: "Province"
                }
            }
        }
    },
    Bn = {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    Fn = {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    Un = {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    Hn = {
        javascript: {
            buckaroo: {
                testkey_error: "To jest nieprawid\u0142owy numer konta"
            },
            old_payment_flow: {
                error: "Co\u015B posz\u0142o nie tak! Upewnij si\u0119, \u017Ce masz po\u0142\u0105czenie z internetem i spr\xF3buj ponownie"
            },
            rebilly: {
                subscription: {
                    back: "Powr\xF3t",
                    error_abandoned: "Nie mo\u017Cna przetworzy\u0107 p\u0142atno\u015Bci, prosz\u0119 spr\xF3bowa\u0107 ponownie lub skontaktowa\u0107 si\u0119 z obs\u0142ug\u0105.",
                    error_authentication_required: "Wymagane uwierzytelnienie, spr\xF3buj ponownie lub skontaktuj si\u0119 z obs\u0142ug\u0105",
                    error_canceled: "Transakcja anulowana, spr\xF3buj ponownie lub skontaktuj si\u0119 z obs\u0142ug\u0105",
                    error_cvc_declined: "CVC odrzucone, spr\xF3buj ponownie lub skontaktuj si\u0119 z obs\u0142ug\u0105",
                    error_declined: "Transakcja odrzucona, spr\xF3buj ponownie lub skontaktuj si\u0119 z obs\u0142ug\u0105",
                    error_invalid_card: "Nieprawid\u0142owe dane karty",
                    error_payment_generic: "Nie mo\u017Cna przetworzy\u0107 p\u0142atno\u015Bci, prosz\u0119 spr\xF3bowa\u0107 ponownie lub skontaktowa\u0107 si\u0119 z obs\u0142ug\u0105.",
                    error_refused: "Karta odrzucona, spr\xF3buj ponownie lub skontaktuj si\u0119 z obs\u0142ug\u0105",
                    first_name: "Imi\u0119",
                    last_name: "Nazwisko",
                    paying_with_card: "P\u0142atno\u015B\u0107 kart\u0105",
                    paying_with_paypal: "P\u0142atno\u015B\u0107 przez PayPal",
                    paying_with_wallet: "P\u0142acenie cyfrowym portfelem",
                    start_trial: "Rozpocznij %{trial_days}-dniowy okres pr\xF3bny dla %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Adres",
                    city: "Miasto",
                    country: "Kraj",
                    district: "Dzielnica",
                    neighborhood: "S\u0105siedztwo",
                    postal_code: "kod pocztowy",
                    region: "Region"
                },
                input_placeholder: "Kod pocztowy, miasto, adres, region, dzielnica lub okolica",
                no_results: {
                    first_suggestion: "Upewnij si\u0119, \u017Ce wszystkie s\u0142owa s\u0105 napisane poprawnie",
                    info: "Przepraszamy, nie ma wynik\xF3w dla",
                    second_suggestion: "Zobacz inne wyszukiwania",
                    suggestions: "Propozycje"
                },
                query_error: "Co\u015B posz\u0142o nie tak! Upewnij si\u0119, \u017Ce masz po\u0142\u0105czenie z internetem i spr\xF3buj ponownie"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Wykroczenia",
                        education: "Edukacja",
                        environment: "\u015Arodowisko",
                        equality: "R\xF3wno\u015B\u0107",
                        health: "Zdrowie",
                        housing: "Mieszkania",
                        income: "Doch\xF3d",
                        labour: "Praca"
                    },
                    index: "Indeks",
                    rank: "Ranga",
                    region: "obszar Metropolitalny"
                },
                fr: {
                    categories: {
                        aging: "Starzenie si\u0119",
                        agriculture: "Rolnictwo",
                        crime: "Wykroczenia",
                        education: "Edukacja",
                        housing: "Mieszkania",
                        living_standard: "Standard \u017Cycia",
                        sport: "Sport"
                    },
                    index: "Indeks",
                    rank: "Ranga",
                    region: "Departamenty"
                },
                nl: {
                    categories: {
                        crime: "Wykroczenia",
                        economy: "Gospodarka",
                        education: "Edukacja",
                        health: "Zdrowie",
                        housing: "Mieszkania",
                        leisure: "Wypoczynek i kultura",
                        new_arrivals: "Nowo\u015Bci"
                    },
                    index: "Indeks",
                    rank: "Ranga",
                    region: "Prowincje"
                }
            }
        }
    },
    Kn = {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    Gn = {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    Zn = {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    Qn = {
        javascript: {
            buckaroo: {
                testkey_error: "Bu ge\xE7ersiz bir hesap numaras\u0131d\u0131r"
            },
            old_payment_flow: {
                error: "Bir \u015Feyler yanl\u0131\u015F gitti! L\xFCtfen internete ba\u011Fl\u0131 oldu\u011Funuzdan emin olun ve tekrar deneyin"
            },
            rebilly: {
                subscription: {
                    back: "geri",
                    error_abandoned: `\u0130\u015Flem yar\u0131da kesildi, l\xFCtfen tekrar deneyin veya m\xFC\u015Fteri hizmetlerine ba\u015Fvurun.
`,
                    error_authentication_required: "Kimlik do\u011Frulama gerekli, l\xFCtfen tekrar deneyin veya m\xFC\u015Fteri hizmetlerine ba\u015Fvurun.",
                    error_canceled: "\u0130\u015Flem iptal edildi, l\xFCtfen tekrar deneyin veya m\xFC\u015Fteri hizmetlerine ba\u015Fvurun.",
                    error_cvc_declined: "CVC reddedildi, l\xFCtfen tekrar deneyin veya m\xFC\u015Fteri hizmetlerine ba\u015Fvurun.",
                    error_declined: "\u0130\u015Flem reddedildi, l\xFCtfen tekrar deneyin veya m\xFC\u015Fteri hizmetlerine ba\u015Fvurun.",
                    error_invalid_card: "Ge\xE7ersiz kart ayr\u0131nt\u0131lar\u0131.",
                    error_payment_generic: "\xD6demeniz i\u015Flenemiyor, l\xFCtfen tekrar deneyin veya m\xFC\u015Fteri hizmetleriyle ileti\u015Fime ge\xE7in.",
                    error_refused: "Kart reddedildi, l\xFCtfen tekrar deneyin veya m\xFC\u015Fteri hizmetlerine ba\u015Fvurun.",
                    first_name: "\u0130sim",
                    last_name: "Soyad\u0131",
                    paying_with_card: "Kartla \xF6deme",
                    paying_with_paypal: "PayPal ile \xF6deme",
                    paying_with_wallet: "Dijital c\xFCzdan ile \xF6deme",
                    start_trial: "%{trial_price} kar\u015F\u0131l\u0131\u011F\u0131nda %{trial_days} g\xFCnl\xFCk deneme s\xFCrenizi ba\u015Flat\u0131n"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Adres",
                    city: "\u015Eehir",
                    country: "\xDClke",
                    district: "\u0130l\xE7e",
                    neighborhood: "Mahalle",
                    postal_code: "Posta Kodu",
                    region: "B\xF6lge"
                },
                input_placeholder: "Posta kodu, \u015Fehir, adres, b\xF6lge, il\xE7e veya mahalle",
                no_results: {
                    first_suggestion: "T\xFCm kelimelerin d\xFCzg\xFCn bir \u015Fekilde yaz\u0131ld\u0131\u011F\u0131ndan emin olun",
                    info: "\xDCzg\xFCn\xFCz, araman\u0131z i\xE7in hi\xE7bir sonu\xE7 bulunamad\u0131",
                    second_suggestion: "Di\u011Fer aramalar\u0131 deneyin",
                    suggestions: "\xD6neriler"
                },
                query_error: "Bir \u015Feyler yanl\u0131\u015F gitti! L\xFCtfen tekrar deneyin veya destek i\xE7in ileti\u015Fime ge\xE7in"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Su\xE7",
                        education: "E\u011Fitim",
                        environment: "\xC7evre",
                        equality: "E\u015Fitlik",
                        health: "Sa\u011Fl\u0131k",
                        housing: "Konut",
                        income: "Gelir",
                        labour: "\u0130\u015F g\xFCc\xFC"
                    },
                    index: "Dizin",
                    rank: "S\u0131ra",
                    region: "Metropol alan\u0131"
                },
                fr: {
                    categories: {
                        aging: "Eskime",
                        agriculture: "Tar\u0131m",
                        crime: "Su\xE7",
                        education: "E\u011Fitim",
                        housing: "Konut",
                        living_standard: "Ya\u015Fam Standard\u0131",
                        sport: "Spor"
                    },
                    index: "Dizin",
                    rank: "S\u0131ra",
                    region: "B\xF6l\xFCmler"
                },
                nl: {
                    categories: {
                        crime: "Su\xE7",
                        economy: "Ekonomi",
                        education: "E\u011Fitim",
                        health: "Sa\u011Fl\u0131k",
                        housing: "Konut",
                        leisure: "Serbest zaman ve k\xFClt\xFCr",
                        new_arrivals: "Yeni Gelenler"
                    },
                    index: "Dizin",
                    rank: "S\u0131ra",
                    region: "\u0130ller"
                }
            }
        }
    };
var De = {
    bg: In,
    cs: Rn,
    "de-AT": {
        javascript: {
            buckaroo: {
                testkey_error: "Dies ist eine ung\xFCltige Kontonummer"
            },
            old_payment_flow: {
                error: "Etwas ist schief gelaufen! Bitte vergewissern Sie sich, dass Sie mit dem Internet verbunden sind, und versuchen Sie es erneut"
            },
            rebilly: {
                subscription: {
                    back: "Zur\xFCck",
                    error_abandoned: "Transaktion abgebrochen, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    error_authentication_required: "Authentifizierung erforderlich, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    error_canceled: "Transaktion abgebrochen, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    error_cvc_declined: "CVC abgelehnt, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    error_declined: "Transaktion abgelehnt, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    error_invalid_card: "Ung\xFCltige Kartendaten",
                    error_payment_generic: "Ihre Zahlung kann nicht verarbeitet werden. Bitte versuchen Sie es erneut oder wenden Sie sich an den Support",
                    error_refused: "Karte abgelehnt, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    first_name: "Vorname",
                    last_name: "Nachname",
                    paying_with_card: "Bezahlen mit Karte",
                    paying_with_paypal: "Bezahlen mit PayPal",
                    paying_with_wallet: "Bezahlen mit digitaler Geldb\xF6rse",
                    start_trial: "Testversion f\xFCr %{trial_price} %{trial_days} Tage starten"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Adresse",
                    city: "Stadt",
                    country: "Land",
                    district: "Bezirk",
                    neighborhood: "Gegend",
                    postal_code: "Postleitzahl",
                    region: "Region"
                },
                input_placeholder: "Postleitzahl, Stadt, Adresse, Region, Bezirk oder Nachbarschaft",
                no_results: {
                    first_suggestion: "Achte darauf, dass alle W\xF6rter richtig geschrieben sind",
                    info: "Entschuldigung, es gibt keine Ergebnisse f\xFCr",
                    second_suggestion: "Probieren Sie andere Suchen aus",
                    suggestions: "Vorschl\xE4ge"
                },
                query_error: "Etwas ist schief gelaufen! Bitte versuchen Sie es erneut oder wenden Sie sich an den Support"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Verbrechen",
                        education: "Bildung",
                        environment: "Umgebung",
                        equality: "Gleichberechtigung",
                        health: "Die Gesundheit",
                        housing: "Unterkunft",
                        income: "Einkommen",
                        labour: "Arbeit"
                    },
                    index: "Index",
                    rank: "Rang",
                    region: "Metropolregion"
                },
                fr: {
                    categories: {
                        aging: "Altern",
                        agriculture: "Landwirtschaft",
                        crime: "Verbrechen",
                        education: "Bildung",
                        housing: "Unterkunft",
                        living_standard: "Lebensstandard",
                        sport: "Sport"
                    },
                    index: "Index",
                    rank: "Rang",
                    region: "Abteilungen"
                },
                nl: {
                    categories: {
                        crime: "Verbrechen",
                        economy: "Wirtschaft",
                        education: "Bildung",
                        health: "Gesundheit",
                        housing: "Unterkunft",
                        leisure: "Freizeit und Kultur",
                        new_arrivals: "Neue Ank\xFCnfte"
                    },
                    index: "Index",
                    rank: "Rang",
                    region: "Provinzen"
                }
            }
        }
    },
    "de-DE": {
        javascript: {
            buckaroo: {
                testkey_error: "Dies ist eine ung\xFCltige Kontonummer"
            },
            old_payment_flow: {
                error: "Etwas ist schief gelaufen! Bitte vergewissern Sie sich, dass Sie mit dem Internet verbunden sind, und versuchen Sie es erneut"
            },
            rebilly: {
                subscription: {
                    back: "zur\xFCck",
                    error_abandoned: "Transaktion abgebrochen, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    error_authentication_required: "Authentifizierung erforderlich, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    error_canceled: "Transaktion abgebrochen, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    error_cvc_declined: "CVC abgelehnt, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    error_declined: "Transaktion abgelehnt, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    error_invalid_card: "Ung\xFCltige Kartendaten",
                    error_payment_generic: "Ihre Zahlung kann nicht verarbeitet werden. Bitte versuchen Sie es erneut oder wenden Sie sich an den Support",
                    error_refused: "Karte abgelehnt, bitte versuchen Sie es erneut oder wenden Sie sich an den Support.",
                    first_name: "Vorname",
                    last_name: "Nachname",
                    paying_with_card: "Bezahlen mit Karte",
                    paying_with_paypal: "Bezahlen mit PayPal",
                    paying_with_wallet: "Bezahlen mit digitaler Geldb\xF6rse",
                    start_trial: "%{trial_days}-Tage-Testversion f\xFCr %{trial_price} starten"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Die Anschrift",
                    city: "Stadt",
                    country: "Land",
                    district: "Bezirk",
                    neighborhood: "Gegend",
                    postal_code: "Postleitzahl",
                    region: "Region"
                },
                input_placeholder: "Postleitzahl, Stadt, Adresse, Region, Bezirk oder Nachbarschaft",
                no_results: {
                    first_suggestion: "Achte darauf, dass alle W\xF6rter richtig geschrieben sind",
                    info: "Entschuldigung, es gibt keine Ergebnisse f\xFCr",
                    second_suggestion: "Beliebte Suchanfragen",
                    suggestions: "Anregungen"
                },
                query_error: "Etwas ist schief gelaufen! Bitte versuchen Sie es erneut oder wenden Sie sich an den Support"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Verbrechen",
                        education: "Ausbildung",
                        environment: "Umfeld",
                        equality: "Gleichberechtigung",
                        health: "Die Gesundheit",
                        housing: "Unterkunft",
                        income: "Einkommen",
                        labour: "Arbeit"
                    },
                    index: "Index",
                    rank: "Rang",
                    region: "Metropolregion"
                },
                fr: {
                    categories: {
                        aging: "Altern",
                        agriculture: "Landwirtschaft",
                        crime: "Verbrechen",
                        education: "Ausbildung",
                        housing: "Unterkunft",
                        living_standard: "Lebensstandard",
                        sport: "Sport"
                    },
                    index: "Index",
                    rank: "Rang",
                    region: "Abteilungen"
                },
                nl: {
                    categories: {
                        crime: "Verbrechen",
                        economy: "Wirtschaft",
                        education: "Ausbildung",
                        health: "Gesundheit",
                        housing: "Unterkunft",
                        leisure: "Freizeit und Kultur",
                        new_arrivals: "Neue Ank\xFCnfte"
                    },
                    index: "Index",
                    rank: "Rang",
                    region: "Provinzen"
                }
            }
        }
    },
    el: Ln,
    "en-AU": {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    "en-CA": {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    "en-GB": {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    "en-IE": {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    en: $n,
    "es-AR": {
        javascript: {
            buckaroo: {
                testkey_error: "Este es un n\xFAmero de cuenta inv\xE1lido"
            },
            old_payment_flow: {
                error: "\xA1Algo sali\xF3 mal! Asg\xFArese de estar conectado a Internet e int\xE9ntelo de nuevo."
            },
            rebilly: {
                subscription: {
                    back: "atr\xE1s",
                    error_abandoned: "Transacci\xF3n abandonada, intente nuevamente o comun\xEDquese con el soporte.",
                    error_authentication_required: "Se requiere autenticaci\xF3n, intente nuevamente o comun\xEDquese con el soporte.",
                    error_canceled: "Transacci\xF3n cancelada, intente nuevamente o comun\xEDquese con el soporte.",
                    error_cvc_declined: "CVC rechazado, intente nuevamente o comun\xEDquese con el soporte.",
                    error_declined: "Transacci\xF3n rechazada, intente nuevamente o comun\xEDquese con el soporte.",
                    error_invalid_card: "Detalles de la tarjeta no v\xE1lidos",
                    error_payment_generic: "No se pudo procesar su pago, intente nuevamente o comun\xEDquese con el soporte",
                    error_refused: "Tarjeta rechazada, intente nuevamente o comun\xEDquese con el soporte.",
                    first_name: "Primer Nombre",
                    last_name: "Apellido",
                    paying_with_card: "Paga con tarjeta",
                    paying_with_paypal: "Paga con PayPal",
                    paying_with_wallet: "Paga con monedero digital",
                    start_trial: "Iniciar %{trial_days} d\xEDas de prueba para %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Direcci\xF3n",
                    city: "Ciudad",
                    country: "Pa\xEDs",
                    district: "Distrito",
                    neighborhood: "Vecindario",
                    postal_code: "C\xF3digo postal",
                    region: "Regi\xF3n"
                },
                input_placeholder: "C\xF3digo postal, ciudad, direcci\xF3n, regi\xF3n, distrito o barrio",
                no_results: {
                    first_suggestion: "Aseg\xFArese de que todas las palabras est\xE9n escritas correctamente",
                    info: "Lo sentimos, no hay resultados para",
                    second_suggestion: "Intentar otras b\xFAsquedas",
                    suggestions: "Sugerencias"
                },
                query_error: "\xA1Algo sali\xF3 mal! Vuelva a intentarlo o p\xF3ngase en contacto con el soporte."
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Delito",
                        education: "Educaci\xF3n",
                        environment: "Ambiente",
                        equality: "Igualdad",
                        health: "Salud",
                        housing: "Alojamiento",
                        income: "Ingreso",
                        labour: "Mano de obra"
                    },
                    index: "\xCDndice",
                    rank: "Rango",
                    region: "\xC1rea metropolitana"
                },
                fr: {
                    categories: {
                        aging: "Envejecimiento",
                        agriculture: "Agricultura",
                        crime: "Delito",
                        education: "Educaci\xF3n",
                        housing: "Alojamiento",
                        living_standard: "Est\xE1ndar de vida",
                        sport: "Deporte"
                    },
                    index: "\xCDndice",
                    rank: "Rango",
                    region: "Departamentos"
                },
                nl: {
                    categories: {
                        crime: "Delito",
                        economy: "Econom\xEDa",
                        education: "Educaci\xF3n",
                        health: "Salud",
                        housing: "Alojamiento",
                        leisure: "Ocio y cultura",
                        new_arrivals: "Nuevos"
                    },
                    index: "\xCDndice",
                    rank: "Rango",
                    region: "Provincias"
                }
            }
        }
    },
    "es-ES": {
        javascript: {
            buckaroo: {
                testkey_error: "Este es un n\xFAmero de cuenta inv\xE1lido"
            },
            old_payment_flow: {
                error: "\xA1Algo sali\xF3 mal! Aseg\xFArese de estar conectado a Internet e int\xE9ntalo de nuevo."
            },
            rebilly: {
                subscription: {
                    back: "Atr\xE1s",
                    error_abandoned: "\xA1Algo sali\xF3 mal! por favor int\xE9ntelo de nuevo o contacte a atenci\xF3n al cliente",
                    error_authentication_required: "Se requiere autenticaci\xF3n, int\xE9ntelo nuevamente o comun\xEDquese con el atenci\xF3n al cliente",
                    error_canceled: "\xA1Algo sali\xF3 mal! por favor, int\xE9ntelo de nuevo o contacte con atenci\xF3n al cliente",
                    error_cvc_declined: "CVC rechazado, por favor, int\xE9ntelo de nuevo o p\xF3ngase en contacto con atenci\xF3n al cliente",
                    error_declined: "\xA1Algo sali\xF3 mal! por favor int\xE9ntelo de nuevo o contacte a atenci\xF3n al cliente",
                    error_invalid_card: "Informaci\xF3n de la tarjeta no v\xE1lida",
                    error_payment_generic: "No se pudo procesar su pago, int\xE9ntelo nuevamente o comun\xEDquese con atenci\xF3n al cliente",
                    error_refused: "Se ha rechazado la tarjeta, int\xE9ntelo de nuevo o p\xF3ngase en contacto con atenci\xF3n al cliente",
                    first_name: "Nombre",
                    last_name: "Apellido",
                    paying_with_card: "Pago con tarjeta",
                    paying_with_paypal: "Pago con PayPal",
                    paying_with_wallet: "Pago con monedero digital",
                    start_trial: "Empiece %{free_trial_days} d\xEDas de prueba %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Direcci\xF3n",
                    city: "Ciudad",
                    country: "Pa\xEDs",
                    district: "Distrito",
                    neighborhood: "Barrio",
                    postal_code: "C\xF3digo postal",
                    region: "Regi\xF3n"
                },
                input_placeholder: "C\xF3digo postal, ciudad, direcci\xF3n, regi\xF3n, distrito o barrio",
                no_results: {
                    first_suggestion: "Aseg\xFArese de que todas las palabras est\xE9n escritas correctamente",
                    info: "Lo sentimos, no hay resultados para",
                    second_suggestion: "Probar otras b\xFAsquedas",
                    suggestions: "Sugerencias"
                },
                query_error: "\xA1Algo sali\xF3 mal! Aseg\xFArese de estar conectado a Internet e int\xE9ntelo de nuevo."
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Delito",
                        education: "Educaci\xF3n",
                        environment: "Medio ambiente",
                        equality: "Igualdad",
                        health: "Salud",
                        housing: "Vivienda",
                        income: "Salario",
                        labour: "Trabajo"
                    },
                    index: "\xCDndice",
                    rank: "Rango",
                    region: "\xC1rea metropolitana"
                },
                fr: {
                    categories: {
                        aging: "Envejecimiento",
                        agriculture: "Agricultura",
                        crime: "Delito",
                        education: "Educaci\xF3n",
                        housing: "Vivienda",
                        living_standard: "Nivel de Vida",
                        sport: "Deporte"
                    },
                    index: "\xCDndice",
                    rank: "Rango",
                    region: "Departamentos"
                },
                nl: {
                    categories: {
                        crime: "Delito",
                        economy: "Econom\xEDa",
                        education: "Educaci\xF3n",
                        health: "Salud",
                        housing: "Vivienda",
                        leisure: "Ocio y cultura",
                        new_arrivals: "Novedades"
                    },
                    index: "\xCDndice",
                    rank: "Rango",
                    region: "Provincias"
                }
            }
        }
    },
    es: Vn,
    "et-EE": {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    fi: Dn,
    "fr-BE": {
        javascript: {
            buckaroo: {
                testkey_error: "Num\xE9ro de compte invalide"
            },
            old_payment_flow: {
                error: "Quelque chose s'est mal pass\xE9\xA0! Assurez-vous d'\xEAtre connect\xE9 \xE0 Internet et r\xE9essayez"
            },
            rebilly: {
                subscription: {
                    back: "retour",
                    error_abandoned: "Transaction abandonn\xE9e, veuillez r\xE9essayer ou contacter le support",
                    error_authentication_required: "Authentification requise, veuillez r\xE9essayer ou contacter le support",
                    error_canceled: "Transaction annul\xE9e, veuillez r\xE9essayer ou contacter le support",
                    error_cvc_declined: "CVC refus\xE9, veuillez r\xE9essayer ou contacter le support",
                    error_declined: "Transaction refus\xE9e, veuillez r\xE9essayer ou contacter le support",
                    error_invalid_card: "D\xE9tails de carte invalides",
                    error_payment_generic: "Impossible de traiter votre paiement, veuillez r\xE9essayer ou contacter le support",
                    error_refused: "Carte refus\xE9e, veuillez r\xE9essayer ou contacter le support",
                    first_name: "Pr\xE9nom",
                    last_name: "Nom",
                    paying_with_card: "Paiement par carte",
                    paying_with_paypal: "Payer avec PayPal",
                    paying_with_wallet: "Payer avec un portefeuille num\xE9rique",
                    start_trial: "Commencez %{trial_days}\xA0jours d'essai pour %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Adresse",
                    city: "Ville",
                    country: "Pays",
                    district: "Arrondissement",
                    neighborhood: "Quartier",
                    postal_code: "Code postal",
                    region: "R\xE9gion"
                },
                input_placeholder: "Code postal, ville, adresse, r\xE9gion, arrondissement ou quartier",
                no_results: {
                    first_suggestion: "Assurez-vous que tous les mots sont correctement orthographi\xE9s",
                    info: "D\xE9sol\xE9, il n'y a pas de r\xE9sultats pour",
                    second_suggestion: "Essayez d'autres recherches",
                    suggestions: "Suggestions"
                },
                query_error: "Quelque chose s'est mal pass\xE9\xA0! Veuillez r\xE9essayer ou contacter le support"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Criminalit\xE9 ",
                        education: "\xC9ducation",
                        environment: "Environnement",
                        equality: "\xC9galit\xE9",
                        health: "Sant\xE9",
                        housing: "Logement",
                        income: "Revenu",
                        labour: "Emploi"
                    },
                    index: "Indice",
                    rank: "Classement",
                    region: "Zone m\xE9tropolitaine"
                },
                fr: {
                    categories: {
                        aging: "Vieillissement",
                        agriculture: "Agriculture",
                        crime: "Criminalit\xE9",
                        education: "\xC9ducation",
                        housing: "Logement",
                        living_standard: "Niveau de vie",
                        sport: "Sport"
                    },
                    index: "Indice",
                    rank: "Classement",
                    region: "D\xE9partements"
                },
                nl: {
                    categories: {
                        crime: "Criminalit\xE9",
                        economy: "\xC9conomie",
                        education: "\xC9ducation",
                        health: "Sant\xE9",
                        housing: "Logement",
                        leisure: "Loisirs et culture",
                        new_arrivals: "Nouveaux arrivants"
                    },
                    index: "Indice",
                    rank: "Classement",
                    region: "Provinces"
                }
            }
        }
    },
    "fr-CA": {
        javascript: {
            buckaroo: {
                testkey_error: "Num\xE9ro de compte invalide"
            },
            old_payment_flow: {
                error: "Quelque chose s'est mal pass\xE9\xA0! Assurez-vous d'\xEAtre connect\xE9 \xE0 Internet et r\xE9essayez"
            },
            rebilly: {
                subscription: {
                    back: "retour",
                    error_abandoned: "Transaction abandonn\xE9e, veuillez r\xE9essayer ou contacter le support.",
                    error_authentication_required: "Authentification requise, veuillez r\xE9essayer ou contacter le support.",
                    error_canceled: "Transaction annul\xE9e, veuillez r\xE9essayer ou contacter le support.",
                    error_cvc_declined: "CVC refus\xE9, veuillez r\xE9essayer ou contacter le support.",
                    error_declined: "Transaction refus\xE9e, veuillez r\xE9essayer ou contacter le support.",
                    error_invalid_card: "Les d\xE9tails de la carte ne sont pas valides.",
                    error_payment_generic: "Impossible de traiter votre paiement, veuillez r\xE9essayer ou contacter le support.",
                    error_refused: "Carte refus\xE9e, veuillez r\xE9essayer ou contacter le support.",
                    first_name: "Pr\xE9nom",
                    last_name: "Nom",
                    paying_with_card: "Payer par carte",
                    paying_with_paypal: "Payer via PayPal",
                    paying_with_wallet: "Payer via un portefeuille num\xE9rique",
                    start_trial: "Commencez %{trial_days}\xA0jours d'essai pour %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Adresse",
                    city: "Ville",
                    country: "Pays",
                    district: "District",
                    neighborhood: "Quartier",
                    postal_code: "Code postal",
                    region: "R\xE9gion"
                },
                input_placeholder: "Code postal, ville, adresse, r\xE9gion, district ou quartier",
                no_results: {
                    first_suggestion: "Assurez-vous que tous les mots sont correctement orthographi\xE9s",
                    info: "D\xE9sol\xE9, il n'y a pas de r\xE9sultats pour",
                    second_suggestion: "Essayez d'autres recherches",
                    suggestions: "Suggestions"
                },
                query_error: "Quelque chose s'est mal pass\xE9\xA0! Veuillez r\xE9essayer ou contacter le support"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Criminalit\xE9",
                        education: "\xC9ducation",
                        environment: "Environnement",
                        equality: "\xC9galit\xE9",
                        health: "Sant\xE9",
                        housing: "Logement",
                        income: "Revenu",
                        labour: "Emploi"
                    },
                    index: "Indice",
                    rank: "Classement",
                    region: "Zone m\xE9tropolitaine"
                },
                fr: {
                    categories: {
                        aging: "Vieillissement",
                        agriculture: "Agriculture",
                        crime: "Criminalit\xE9",
                        education: "\xC9ducation",
                        housing: "Logement",
                        living_standard: "Niveau de vie",
                        sport: "Sport"
                    },
                    index: "Indice",
                    rank: "Classement",
                    region: "D\xE9partements"
                },
                nl: {
                    categories: {
                        crime: "Criminalit\xE9",
                        economy: "\xC9conomie",
                        education: "\xC9ducation",
                        health: "Sant\xE9",
                        housing: "Logement",
                        leisure: "Loisirs et culture",
                        new_arrivals: "Nouveaux arrivants "
                    },
                    index: "Indice",
                    rank: "Classement",
                    region: "Provinces"
                }
            }
        }
    },
    "fr-FR": {
        javascript: {
            buckaroo: {
                testkey_error: "Num\xE9ro de compte invalide"
            },
            old_payment_flow: {
                error: "Quelque chose s'est mal pass\xE9\xA0! Assurez-vous d'\xEAtre connect\xE9 \xE0 Internet et r\xE9essayez"
            },
            rebilly: {
                subscription: {
                    back: "Retour",
                    error_abandoned: "Transaction abandonn\xE9e, veuillez r\xE9essayer ou contacter le support",
                    error_authentication_required: "Authentification requise, veuillez r\xE9essayer ou contacter le support.",
                    error_canceled: "Transaction annul\xE9e, veuillez r\xE9essayer ou contacter le support.",
                    error_cvc_declined: "CVC refus\xE9, veuillez r\xE9essayer ou contacter le support.",
                    error_declined: "Transaction refus\xE9e, veuillez r\xE9essayer ou contacter le support.",
                    error_invalid_card: "D\xE9tails de carte invalides.",
                    error_payment_generic: "Impossible de traiter votre paiement, veuillez r\xE9essayer ou contacter le support.",
                    error_refused: "Carte refus\xE9e, veuillez r\xE9essayer ou contacter le support.",
                    first_name: "Pr\xE9nom",
                    last_name: "Nom",
                    paying_with_card: "Payer par carte",
                    paying_with_paypal: "Payer via PayPal",
                    paying_with_wallet: "Payer via un portefeuille num\xE9rique",
                    start_trial: "Commencez %{trial_days}\xA0jours d'essai pour %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Adresse",
                    city: "Ville",
                    country: "Pays",
                    district: "Arrondissement",
                    neighborhood: "Quartier",
                    postal_code: "Code postal",
                    region: "R\xE9gion"
                },
                input_placeholder: "Code postal, ville, adresse, r\xE9gion, arrondissement ou quartier",
                no_results: {
                    first_suggestion: "Assurez-vous que tous les mots sont correctement orthographi\xE9s",
                    info: "D\xE9sol\xE9, il n'y a pas de r\xE9sultats pour",
                    second_suggestion: "Essayez d'autres recherches",
                    suggestions: "Suggestions"
                },
                query_error: "Quelque chose s'est mal pass\xE9\xA0! Veuillez r\xE9essayer ou contacter le support"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Criminalit\xE9",
                        education: "\xC9ducation",
                        environment: "Environnement",
                        equality: "\xC9galit\xE9",
                        health: "Sant\xE9",
                        housing: "Logement",
                        income: "Revenu",
                        labour: "Emploi"
                    },
                    index: "Indice",
                    rank: "Classement",
                    region: "Agglom\xE9rations"
                },
                fr: {
                    categories: {
                        aging: "Vieillissement",
                        agriculture: "Agriculture",
                        crime: "Criminalit\xE9",
                        education: "\xC9ducation",
                        housing: "Logement",
                        living_standard: "Niveau de vie",
                        sport: "Sport"
                    },
                    index: "Indice",
                    rank: "Classement",
                    region: "D\xE9partements"
                },
                nl: {
                    categories: {
                        crime: "Criminalit\xE9",
                        economy: "\xC9conomie",
                        education: "\xC9ducation",
                        health: "Sant\xE9",
                        housing: "Logement",
                        leisure: "Loisirs et culture",
                        new_arrivals: "Nouveaux arrivants "
                    },
                    index: "Indice",
                    rank: "Classement",
                    region: "Provinces"
                }
            }
        }
    },
    "hi-IN": {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    hr: Mn,
    hu: On,
    it: Wn,
    ja: Bn,
    lt: Fn,
    lv: Un,
    "nb-NO": {
        javascript: {
            buckaroo: {
                testkey_error: "Dette er et ugyldig kontonummer"
            },
            old_payment_flow: {
                error: "Noe gikk galt! S\xF8rg for at du er koblet til internett og pr\xF8v igjen"
            },
            rebilly: {
                subscription: {
                    back: "tilbake",
                    error_abandoned: "Transaksjonen er avbrutt, pr\xF8v igjen eller kontakt brukerst\xF8tten.",
                    error_authentication_required: "Autentisering kreves, pr\xF8v igjen eller kontakt brukerst\xF8tten.",
                    error_canceled: "Transaksjon kansellert, pr\xF8v igjen eller kontakt brukerst\xF8tten.",
                    error_cvc_declined: "CVC avvist, pr\xF8v igjen eller kontakt brukerst\xF8tten.",
                    error_declined: "Kortet ble avvist, pr\xF8v igjen eller kontakt kundesupport.",
                    error_invalid_card: "Ugyldige kortdetaljer.",
                    error_payment_generic: "Vi klarte ikke \xE5 prosessere betalingen din, vennligst pr\xF8v igjen eller kontakt kundesupport.",
                    error_refused: "Kortet ble avvist, pr\xF8v igjen eller kontakt kundesupport.",
                    first_name: "Fornavn",
                    last_name: "Etternavn",
                    paying_with_card: "Betal med kort",
                    paying_with_paypal: "Betal med PayPal",
                    paying_with_wallet: "Betal med digital lommebok",
                    start_trial: "Start %{trial_days} dagers pr\xF8veversjon for %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Adresse",
                    city: "By",
                    country: "Land",
                    district: "Distrikt",
                    neighborhood: "Nabolag",
                    postal_code: "Postnummer",
                    region: "Region"
                },
                input_placeholder: "Postnummer, by, adresse, region, distrikt eller nabolag",
                no_results: {
                    first_suggestion: "Pass p\xE5 at alle ord er stavet riktig",
                    info: "Beklager, det er ingen resultater for",
                    second_suggestion: "Pr\xF8v andre s\xF8k",
                    suggestions: "Forslag"
                },
                query_error: "Noe gikk galt! Vennligst pr\xF8v igjen eller kontakt kundesupport"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    "nl-BE": {
        javascript: {
            buckaroo: {
                testkey_error: "Dit is een ongeldig rekeningnummer"
            },
            old_payment_flow: {
                error: "Er is iets fout gegaan! Zorg ervoor dat u verbonden bent met het internet en probeer het opnieuw"
            },
            rebilly: {
                subscription: {
                    back: "Terug",
                    error_abandoned: "Transactie afgebroken, probeer het opnieuw of neem contact op met de klantendienst.",
                    error_authentication_required: "Verificatie vereist, probeer het opnieuw of neem contact op met de klantendienst.",
                    error_canceled: "Transactie geannuleerd, probeer het opnieuw of neem contact op met de klantendienst.",
                    error_cvc_declined: "CVC is geweigerd, probeer het opnieuw of neem contact op met de klantendienst.",
                    error_declined: "Transactie geweigerd, probeer het opnieuw of neem contact op met de klantendienst.",
                    error_invalid_card: "Ongeldige kaartgegevens",
                    error_payment_generic: "Uw betaling kon niet worden uitgevoerd. Probeer het opnieuw of neem contact op met onze klantendienst.",
                    error_refused: "Kaart geweigerd, probeer het opnieuw of neem contact op met de klantendienst.",
                    first_name: "Voornaam",
                    last_name: "Naam",
                    paying_with_card: "Betalen met kaart",
                    paying_with_paypal: "Betalen met PayPal",
                    paying_with_wallet: "Betalen met digital wallet",
                    start_trial: "Start een proefperiode van %{trial_days} dagen voor %{trial_price}%{currency}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Adres",
                    city: "Stad",
                    country: "Land",
                    district: "District",
                    neighborhood: "Buurt",
                    postal_code: "Postcode",
                    region: "Regio"
                },
                input_placeholder: "Postcode, stad, adres, regio, district of buurt",
                no_results: {
                    first_suggestion: "Zorg ervoor dat alle woorden correct zijn gespeld",
                    info: "Sorry, er zijn geen resultaten voor",
                    second_suggestion: "Probeer andere zoekopdrachten",
                    suggestions: "Suggesties"
                },
                query_error: "Er is iets fout gegaan! Probeer het opnieuw of neem contact op met de klantendienst"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Misdaad",
                        education: "Onderwijs",
                        environment: "Milieu",
                        equality: "Gelijkwaardigheid",
                        health: "Gezondheid",
                        housing: "Huisvesting",
                        income: "Inkomen",
                        labour: "Arbeid"
                    },
                    index: "Inhoudsopgave",
                    rank: "Rangschikking",
                    region: "Grootstedelijk gebied"
                },
                fr: {
                    categories: {
                        aging: "Veroudering",
                        agriculture: "Landbouw",
                        crime: "Misdaad",
                        education: "Onderwijs",
                        housing: "Huisvesting",
                        living_standard: "Levensstandaard",
                        sport: "Sport"
                    },
                    index: "Inhoudsopgave",
                    rank: "Rangschikking",
                    region: "Departementen"
                },
                nl: {
                    categories: {
                        crime: "Misdaad",
                        economy: "Economie",
                        education: "Onderwijs",
                        health: "Gezondheid",
                        housing: "Huisvesting",
                        leisure: "Vrije tijd en cultuur",
                        new_arrivals: "Nieuwtjes"
                    },
                    index: "Inhoudsopgave",
                    rank: "Rangschikking",
                    region: "Provincies"
                }
            }
        }
    },
    "nl-NL": {
        javascript: {
            buckaroo: {
                testkey_error: "Dit is een ongeldig rekeningnummer"
            },
            old_payment_flow: {
                error: "Er is iets fout gegaan! Zorg ervoor dat u verbonden bent met het internet en probeer het opnieuw."
            },
            rebilly: {
                subscription: {
                    back: "terug",
                    error_abandoned: "Transactie afgebroken, probeer het opnieuw of neem contact op met de klantendienst",
                    error_authentication_required: "Verificatie vereist, probeer het opnieuw of neem contact op met de klantendienst",
                    error_canceled: "Transactie geannuleerd, probeer het opnieuw of neem contact op met de klantendienst",
                    error_cvc_declined: "CVC geweigerd, probeer het opnieuw of neem contact op met de klantendienst",
                    error_declined: "Transactie geweigerd, probeer het opnieuw of neem contact op met de klantendienst",
                    error_invalid_card: "Ongeldige kaartgegevens",
                    error_payment_generic: "Uw betaling kan niet worden verwerkt, probeer opnieuw of neem contact op met onze klantendienst",
                    error_refused: "Kaart geweigerd, probeer het opnieuw of neem contact op met de klantendienst",
                    first_name: "Voornaam",
                    last_name: "Achternaam",
                    paying_with_card: "Betalen met kaart",
                    paying_with_paypal: "Betalen met PayPal",
                    paying_with_wallet: "Betalen met digitale wallet",
                    start_trial: "Start een proefperiode van %{trial_days} dagen voor %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Adres",
                    city: "Stad",
                    country: "Land",
                    district: "Wijk",
                    neighborhood: "Buurt",
                    postal_code: "Postcode",
                    region: "Regio"
                },
                input_placeholder: "Postcode, plaats, adres, regio, wijk of buurt",
                no_results: {
                    first_suggestion: "Zorg ervoor dat alle woorden correct zijn gespeld",
                    info: "Sorry, er zijn geen resultaten voor",
                    second_suggestion: "Probeer andere zoekopdrachten",
                    suggestions: "Suggesties"
                },
                query_error: "Er is iets fout gegaan! Probeer het opnieuw of neem contact op met de klantendienst."
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Criminaliteit",
                        education: "Opleiding",
                        environment: "Omgeving",
                        equality: "Gelijkwaardigheid",
                        health: "Gezondheid",
                        housing: "Huisvesting",
                        income: "Inkomen",
                        labour: "Werk"
                    },
                    index: "Index",
                    rank: "Rang",
                    region: "Metropool"
                },
                fr: {
                    categories: {
                        aging: "Ouderdom",
                        agriculture: "Landbouw",
                        crime: "Criminaliteit",
                        education: "Opleiding",
                        housing: "Huisvesting",
                        living_standard: "Levensstandaard",
                        sport: "Sport"
                    },
                    index: "Index",
                    rank: "Rang",
                    region: "Departementen"
                },
                nl: {
                    categories: {
                        crime: "Criminaliteit",
                        economy: "Economie",
                        education: "Onderwijs",
                        health: "Gezondheid",
                        housing: "Huisvestingskosten",
                        leisure: "Vrije tijd en cultuur",
                        new_arrivals: "Nieuwe Aankomsten"
                    },
                    index: "Index",
                    rank: "Rang",
                    region: "Provincies"
                }
            }
        }
    },
    pl: Hn,
    "pt-BR": {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    "pt-PT": {
        javascript: {
            buckaroo: {
                testkey_error: "Este \xE9 um n\xFAmero de conta inv\xE1lido"
            },
            old_payment_flow: {
                error: "Algo correu mal! Por favor, certifique-se de que est\xE1 ligado \xE0 Internet e tente novamente"
            },
            rebilly: {
                subscription: {
                    back: "voltar",
                    error_abandoned: "Transa\xE7\xE3o abandonada, por favor tente novamente ou contacte o apoio",
                    error_authentication_required: "Autentica\xE7\xE3o necess\xE1ria, por favor tente novamente ou contacte o apoio",
                    error_canceled: "Transa\xE7\xE3o cancelada, por favor tente novamente ou contacte o apoio",
                    error_cvc_declined: "CVC recusado, por favor tente novamente ou contacte o apoio",
                    error_declined: "A transa\xE7\xE3o recusada, por favor tente novamente ou contacte o apoio",
                    error_invalid_card: "Detalhes do cart\xE3o inv\xE1lidos",
                    error_payment_generic: "Incapaz de processar o seu pagamento, por favor tente novamente ou contacte o suporte",
                    error_refused: "Cart\xE3o recusado, por favor tente novamente ou contacte o apoio",
                    first_name: "Primeiro nome",
                    last_name: "Apelido",
                    paying_with_card: "Pagar com cart\xE3o",
                    paying_with_paypal: "Pagar com PayPal",
                    paying_with_wallet: "Pagar com carteira digital",
                    start_trial: "Iniciar avalia\xE7\xE3o de %{trial_days} dias para %{trial_price}"
                }
            },
            search_box: {
                dropdown_titles: {
                    address: "Morada",
                    city: "Cidade",
                    country: "Pa\xEDs",
                    district: "Distrito",
                    neighborhood: "Bairro",
                    postal_code: "C\xF3digo Postal",
                    region: "Regi\xE3o"
                },
                input_placeholder: "C\xF3digo postal, cidade, morada, regi\xE3o, distrito ou bairro",
                no_results: {
                    first_suggestion: "Certifique-se de que todas as palavras s\xE3o soletradas corretamente",
                    info: "Lamentamos, n\xE3o h\xE1 resultados para",
                    second_suggestion: "Tente outras pesquisas",
                    suggestions: "Sugest\xF5es"
                },
                query_error: "Algo correu mal! Por favor tente novamente ou contacte o apoio"
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: "Crime",
                        education: "Educa\xE7\xE3o",
                        environment: "Ambiente",
                        equality: "Igualdade",
                        health: "Sa\xFAde",
                        housing: "Habita\xE7\xE3o",
                        income: "Rendimento",
                        labour: "Trabalho"
                    },
                    index: "\xCDndice",
                    rank: "Classifica\xE7\xE3o",
                    region: "\xC1rea Metropolitana"
                },
                fr: {
                    categories: {
                        aging: "Envelhecimento",
                        agriculture: "Agricultura",
                        crime: "Crime",
                        education: "Educa\xE7\xE3o",
                        housing: "Habita\xE7\xE3o",
                        living_standard: "N\xEDvel de Vida",
                        sport: "Desporto"
                    },
                    index: "\xCDndice",
                    rank: "Classifica\xE7\xE3o",
                    region: "Departamentos"
                },
                nl: {
                    categories: {
                        crime: "Crime",
                        economy: "Economia",
                        education: "Educa\xE7\xE3o",
                        health: "Sa\xFAde",
                        housing: "Habita\xE7\xE3o",
                        leisure: "Lazer e cultura",
                        new_arrivals: "Novas Chegadas"
                    },
                    index: "\xCDndice",
                    rank: "Classifica\xE7\xE3o",
                    region: "Prov\xEDncias"
                }
            }
        }
    },
    ro: Kn,
    "ru-RU": {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    },
    sk: Gn,
    sl: Zn,
    tr: Qn,
    "zh-CN": {
        javascript: {
            buckaroo: {
                testkey_error: null
            },
            old_payment_flow: {
                error: null
            },
            rebilly: {
                subscription: {
                    back: null,
                    error_abandoned: null,
                    error_authentication_required: null,
                    error_canceled: null,
                    error_cvc_declined: null,
                    error_declined: null,
                    error_invalid_card: null,
                    error_payment_generic: null,
                    error_refused: null,
                    first_name: null,
                    last_name: null,
                    paying_with_card: null,
                    paying_with_paypal: null,
                    paying_with_wallet: null,
                    start_trial: null
                }
            },
            search_box: {
                dropdown_titles: {
                    address: null,
                    city: null,
                    country: null,
                    district: null,
                    neighborhood: null,
                    postal_code: null,
                    region: null
                },
                input_placeholder: null,
                no_results: {
                    first_suggestion: null,
                    info: null,
                    second_suggestion: null,
                    suggestions: null
                },
                query_error: null
            },
            seo_campaign: {
                ca: {
                    categories: {
                        crime: null,
                        education: null,
                        environment: null,
                        equality: null,
                        health: null,
                        housing: null,
                        income: null,
                        labour: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                fr: {
                    categories: {
                        aging: null,
                        agriculture: null,
                        crime: null,
                        education: null,
                        housing: null,
                        living_standard: null,
                        sport: null
                    },
                    index: null,
                    rank: null,
                    region: null
                },
                nl: {
                    categories: {
                        crime: null,
                        economy: null,
                        education: null,
                        health: null,
                        housing: null,
                        leisure: null,
                        new_arrivals: null
                    },
                    index: null,
                    rank: null,
                    region: null
                }
            }
        }
    }
};
const Jn = () => {
        const n = s.exports.useMemo(() => new Ae(De), []),
            e = document.querySelector("html"),
            r = (e == null ? void 0 : e.lang) || "en";
        return n.locale = r, n.enableFallback = !0, {
            i18n: n
        }
    },
    Me = s.exports.createContext(void 0),
    de = ({
        children: n
    }) => l(Me.Provider, {
        value: Jn(),
        children: n
    }),
    b = () => {
        const n = s.exports.useContext(Me);
        if (n === void 0) throw new Error("useTranslationContext must be within TranslationContextProvider");
        return n
    },
    Yn = async () => {
        const {
            data: n
        } = await Z.post("/api/v1/rebilly/orders");
        return n
    },
    Xn = () => ue(Yn, {
        retry: 1
    }),
    er = async ({
        tokenId: n
    }) => {
        const e = `; ${document.cookie}`.split("; rebilly_request_id=").pop().split(";")[0] || pn(),
            r = new Date;
        r.setTime(r.getTime() + 5 * 60 * 1e3), document.cookie = `rebilly_request_id=${e}; expires=${r.toGMTString()}`;
        const {
            data: t
        } = await Z.post("/api/v1/rebilly/orders/pay", {
            token: n
        });
        return t
    },
    Oe = () => ue(er),
    nr = async () => {
        const {
            data: n
        } = await Z.post("/api/v1/rebilly/orders/finalize");
        return n
    },
    We = () => ue(nr),
    ge = r => {
        var t = r,
            {
                children: n
            } = t,
            e = M(t, ["children"]);
        return l("button", x(k({
            type: "button"
        }, e), {
            children: n
        }))
    },
    rr = "_wrapper_16ohe_1",
    tr = "_btn_16ohe_14",
    lr = "_caption_16ohe_31";
var pe = {
        wrapper: rr,
        btn: tr,
        caption: lr
    },
    ir = "/vite/assets/cards.d3acfab9.png",
    ar = "/vite/assets/paypal.c41d1e9c.png",
    or = "/vite/assets/wallets.cf33f5ed.png";
const Be = ({
        kind: n,
        caption: e,
        onClick: r
    }) => {
        const t = () => {
                switch (n) {
                    case "cards":
                        return ir;
                    case "paypal":
                        return ar;
                    case "digitalWallet":
                        return or;
                    default:
                        throw new Error(`Unexpected value: ${n}. Should have been never.`)
                }
            },
            i = () => {
                switch (n) {
                    case "cards":
                        return "Cards";
                    case "paypal":
                        return "PayPal";
                    case "digitalWallet":
                        return "Digital Wallet";
                    default:
                        throw new Error(`Unexpected value: ${n}. Should have been never.`)
                }
            };
        return d("div", {
            className: `${pe.wrapper} margin-top-lg`,
            children: [l(ge, {
                onClick: r,
                className: pe.btn,
                children: l("img", {
                    src: t(),
                    alt: i()
                })
            }), l("h4", {
                className: pe.caption,
                children: e
            })]
        })
    },
    sr = "_backButtonWrapper_2cjay_1",
    ur = "_backButton_2cjay_1",
    cr = "_isLoading_2cjay_19";
var _e = {
    backButtonWrapper: sr,
    backButton: ur,
    isLoading: cr
};
const me = ({
        onClick: n,
        disabled: e = !1
    }) => {
        const {
            i18n: r
        } = b();
        return l("div", {
            className: _e.backButtonWrapper,
            children: d(ge, {
                onClick: n,
                className: `${_e.backButton} ${e?_e.isLoading:""}`,
                disabled: e,
                children: [l("i", {
                    className: "fa fa-long-arrow-left margin-right-sm",
                    "aria-hidden": "true"
                }), l("span", {
                    className: "uppercase",
                    children: r.t("javascript.rebilly.subscription.back")
                })]
            })
        })
    },
    dr = e => {
        var n = M(e, []);
        return l("input", k({
            type: "text"
        }, n))
    },
    J = r => {
        var t = r,
            {
                children: n
            } = t,
            e = M(t, ["children"]);
        return l("button", x(k({
            type: "button"
        }, e), {
            children: n
        }))
    },
    gr = "_loader_13xoa_9",
    pr = "_spin_13xoa_1",
    _r = "_bigger_13xoa_24";
var Fe = {
    loader: gr,
    spin: pr,
    bigger: _r
};
const T = ({
        color: n,
        wrapperClassName: e,
        className: r,
        isBig: t = !1
    }) => {
        const i = e ? ` ${e}` : "",
            a = () => {
                switch (n) {
                    case "black":
                        return "border-black";
                    case "grey":
                        return "border-grey-3";
                    default:
                        return "border-white"
                }
            };
        return l("span", {
            className: `flex${i}`,
            children: l("div", {
                className: `${Fe.loader}${r?` ${r}`:""}${t?` ${Fe.bigger}`:""} ${a()}`
            })
        })
    },
    mr = "_isLoading_1y4n9_1",
    hr = "_spinner_1y4n9_8";
var Ue = {
    isLoading: mr,
    spinner: hr
};
const yr = ({
        isLoading: n,
        className: e = "",
        children: r
    }) => l(ge, {
        type: "submit",
        disabled: n,
        className: `${e} ${n?Ue.isLoading:""}`,
        children: n ? l(T, {
            color: "white",
            wrapperClassName: Ue.spinner,
            isBig: !0
        }) : r
    }),
    br = "_input_wp8av_1";
var vr = {
    input: br
};
const He = r => {
        var t = r,
            {
                className: n = ""
            } = t,
            e = M(t, ["className"]);
        return l("input", x(k({
            type: "text"
        }, e), {
            className: `${n} ${vr.input}`
        }))
    },
    fr = "_form_hi2qc_1";
var kr = {
    form: fr
};
const wr = ({
        handleSubmit: n,
        formRef: e,
        children: r
    }) => l("form", {
        className: kr.form,
        onSubmit: n,
        ref: e,
        children: r
    }),
    xr = "_iframe_19gmb_1";
var jr = {
    iframe: xr
};
const he = ({
        sourceUrl: n,
        title: e
    }) => {
        const r = document.querySelector(".modal-content");
        return window.localStorage.setItem("rebilly-redirect-back", window.location), l(j, {
            children: r && qe.createPortal(l("iframe", {
                src: n,
                title: e,
                className: jr.iframe
            }), r)
        })
    },
    Sr = "_alertSuccess_1njtt_1",
    Cr = "_alertInfo_1njtt_6";
var Ke = {
    alertSuccess: Sr,
    alertInfo: Cr
};
const ye = () => d("div", {
        className: `alert alert-success ${Ke.alertSuccess}`,
        children: [l("h4", {
            children: "Congratulations!"
        }), l("span", {
            className: Ke.alertInfo,
            children: "Payment succeeded."
        })]
    }),
    Y = ({
        errorMsg: n,
        className: e
    }) => l("div", {
        className: `alert alert-danger ${e||""}`,
        children: n
    }),
    Pr = "_inputWrapper_8sbmp_1",
    zr = "_notReady_8sbmp_13",
    Nr = "_cardWrapper_8sbmp_17",
    Er = "_cardNumber_8sbmp_24",
    Ar = "_cardExpiry_8sbmp_30",
    qr = "_cardCVV_8sbmp_35";
var y = {
    inputWrapper: Pr,
    notReady: zr,
    cardWrapper: Nr,
    cardNumber: Er,
    cardExpiry: Ar,
    cardCVV: qr
};
const Tr = "_spinnerWrapper_1nkge_1";
var Ir = {
    spinnerWrapper: Tr
};
const be = ({
        wrapperClassName: n
    }) => l("div", {
        className: `${y.inputWrapper} ${n}`,
        children: l("div", {
            className: Ir.spinnerWrapper,
            children: l(T, {
                color: "grey"
            })
        })
    }),
    Rr = ({
        CardNumberElement: n,
        CardExpiryElement: e,
        CardCvvElement: r,
        isCardReady: t,
        setIsCardReady: i,
        setCardDetailsComplete: a
    }) => d("div", {
        className: y.cardWrapper,
        children: [!t.cardNumber && l(be, {
            wrapperClassName: y.cardNumber
        }), l("div", {
            className: `${y.inputWrapper} ${y.cardNumber} ${t.cardNumber?"":y.notReady}`,
            children: l(n, {
                onReady: () => i(o => x(k({}, o), {
                    cardNumber: !0
                })),
                onChange: o => {
                    a(u => x(k({}, u), {
                        cardNumber: o.completed
                    }))
                }
            })
        }), !t.expiry && l(be, {
            wrapperClassName: y.cardExpiry
        }), l("div", {
            className: `${y.inputWrapper} ${y.cardExpiry} ${t.expiry?"":y.notReady}`,
            children: l(e, {
                onReady: () => i(o => x(k({}, o), {
                    expiry: !0
                })),
                onChange: o => {
                    a(u => x(k({}, u), {
                        expiry: o.completed
                    }))
                }
            })
        }), !t.cvv && l(be, {
            wrapperClassName: y.cardCVV
        }), l("div", {
            className: `${y.inputWrapper} ${y.cardCVV} ${t.cvv?"":y.notReady}`,
            children: l(r, {
                onReady: () => i(o => x(k({}, o), {
                    cvv: !0
                })),
                onChange: o => {
                    a(u => x(k({}, u), {
                        cvv: o.completed
                    }))
                }
            })
        })]
    }),
    Lr = B.withFramePayCardComponent(Rr),
    Ge = 400,
    Ze = (n, e) => {
        const r = document.querySelector(".modal-content");
        r && r instanceof HTMLElement && ([...r.children].forEach(i => {
            i instanceof HTMLElement && i.tagName.toLowerCase() !== "iframe" && (i.style.display = "none")
        }), r.style.overflow = "hidden", r.style.margin = "0 auto", r.style.border = "none", r.style.boxShadow = "none", r.animate([{
            height: `${n}px`,
            maxWidth: `${e}px`
        }, {
            height: "600px",
            maxWidth: "400px"
        }], {
            duration: Ge,
            fill: "forwards"
        }))
    },
    $r = (n, e) => {
        const r = document.querySelector(".modal-content");
        if (r && r instanceof HTMLElement) {
            const t = r.animate([{
                height: "600px",
                maxWidth: "400px"
            }, {
                height: `${n}px`,
                maxWidth: `${e}px`
            }], {
                duration: Ge,
                fill: "forwards"
            });
            t.onfinish = () => {
                [...r.children].forEach(a => {
                    a instanceof HTMLElement && a.tagName.toLowerCase() !== "iframe" && a.removeAttribute("style")
                }), r.removeAttribute("style"), r.animate([{
                    height: "auto"
                }], {
                    duration: 0,
                    delay: 0,
                    fill: "forwards"
                })
            }
        }
    },
    Vr = n => ($(".modal.in").modal("hide"), $(".modal, .modal-backdrop").remove(), $("body").append(n), $("#user_contact_details_modal").modal("show")),
    X = 100,
    Qe = ({
        trackingData: n
    }) => {
        const [e, r] = s.exports.useState(!1), [t, i] = s.exports.useState(""), [a, o] = s.exports.useState(""), [u, c] = s.exports.useState(!1), [g, _] = s.exports.useState(""), m = Oe(), {
            i18n: f
        } = b(), {
            modalDimensions: S
        } = Je(), w = N => {
            if (!N.id) {
                console.error(N), o(f.t("javascript.rebilly.subscription.error_payment_generic"));
                return
            }
            m.mutate({
                tokenId: N.id
            }, {
                onSuccess: P => {
                    const {
                        status: E,
                        result: h,
                        approvalUrl: A,
                        rebillyError: z,
                        modal: L
                    } = P;
                    if (document.cookie = "rebilly_request_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;", z) {
                        o(f.t("javascript.rebilly.subscription.error_payment_generic")), console.error(z);
                        return
                    }
                    if (h === "abandoned" || h === "canceled" || h === "declined") {
                        o(f.t("javascript.rebilly.subscription.error_payment_generic"));
                        return
                    }
                    E === "waiting-approval" && (A && i(A), Ze(S.height, S.width), r(!0)), E === "completed" && h === "approved" && (L && _(L), window.dataLayer.push({
                        event: "premium_signup",
                        currency: n.currency,
                        price: n.price / X
                    }), c(!0))
                },
                onError: P => {
                    console.error(P), o(f.t("javascript.rebilly.subscription.error_payment_generic"))
                }
            })
        };
        return Xe({
            setIsIframeVisible: r,
            setUserDetailsModalMarkup: _,
            setIsPaymentSucceeded: c,
            setErrorMsg: o,
            modalDimensions: S,
            trackingData: n
        }), Ye(u, g), {
            errorMsg: a,
            onTokenReady: w,
            isLoading: m.isLoading,
            isPaymentSucceeded: u,
            isIframeVisible: e,
            urlToOffsiteFlow: t
        }
    },
    Je = () => {
        const [n, e] = s.exports.useState({
            width: 0,
            height: 0
        });
        return s.exports.useEffect(() => {
            const r = document.querySelector(".modal-content");
            if (r && r instanceof HTMLElement) {
                const {
                    height: t,
                    width: i
                } = r.getBoundingClientRect();
                e({
                    width: i,
                    height: t
                })
            }
        }, []), {
            modalDimensions: n
        }
    },
    Ye = (n, e) => {
        s.exports.useEffect(() => {
            let r;
            return n && e && (r = setTimeout(() => {
                Vr(e)
            }, 2e3)), () => clearTimeout(r)
        }, [n, e])
    },
    Xe = ({
        setIsIframeVisible: n,
        setUserDetailsModalMarkup: e,
        setIsPaymentSucceeded: r,
        setErrorMsg: t,
        modalDimensions: i,
        trackingData: {
            currency: a,
            price: o
        }
    }) => {
        const u = We(),
            {
                i18n: c
            } = b();
        s.exports.useEffect(() => {
            const g = _ => {
                _.data === "3DS-authentication-complete" && (n(!1), $r(i.height, i.width), u.mutate(void 0, {
                    onSuccess: m => {
                        m.status === "active" ? (m.modal && e(m.modal), window.dataLayer.push({
                            event: "premium_signup",
                            currency: a,
                            price: o / X
                        }), r(!0)) : t(c.t("javascript.rebilly.subscription.error_payment_generic"))
                    },
                    onError: m => {
                        t(c.t("javascript.rebilly.subscription.error_payment_generic")), console.error(m)
                    }
                }))
            };
            return window.addEventListener("message", g), () => window.removeEventListener("message", g)
        }, [i.height, i.width, u])
    },
    Dr = ({
        formRef: n,
        Rebilly: e,
        attribution: r,
        currency: t,
        price: i
    }) => {
        const [a, o] = s.exports.useState(""), [u, c] = s.exports.useState(""), [g, _] = s.exports.useState({
            cardNumber: !1,
            expiry: !1,
            cvv: !1
        }), [m, f] = s.exports.useState(!1), [S, w] = s.exports.useState(!1), [N, P] = s.exports.useState(""), [E, h] = s.exports.useState(""), [A, z] = s.exports.useState(!1), [L, U] = s.exports.useState(""), V = Oe(), ln = We(), {
            i18n: C
        } = b(), {
            modalDimensions: le
        } = Je(), an = async on => {
            on.preventDefault(), h("");
            const H = D => {
                switch (D) {
                    case "Refused":
                        return C.t("javascript.rebilly.subscription.error_refused");
                    case "CVC Declined":
                        return C.t("javascript.rebilly.subscription.error_cvc_declined");
                    case "Authentication required":
                        return C.t("javascript.rebilly.subscription.error_authentication_required");
                    case "Invalid":
                        return C.t("javascript.rebilly.subscription.error_invalid_card");
                    case "abandoned":
                        return C.t("javascript.rebilly.subscription.error_abandoned");
                    case "canceled":
                        return C.t("javascript.rebilly.subscription.error_canceled");
                    case "declined":
                        return C.t("javascript.rebilly.subscription.error_declined");
                    default:
                        return C.t("javascript.rebilly.subscription.error_payment_generic")
                }
            };
            if (!n.current) return;
            if (!g.cardNumber || !g.expiry || !g.cvv) {
                h(C.t("javascript.rebilly.subscription.error_invalid_card"));
                return
            }
            const sn = {
                    firstName: a.trim(),
                    lastName: u.trim()
                },
                un = {
                    medium: r.utmMedium,
                    source: r.utmSource,
                    campaign: r.utmCampaign,
                    term: r.utmTerm,
                    content: r.utmContent,
                    referer: r.refererDomain
                };
            try {
                f(!0);
                const D = await e.createToken(n.current, {
                    billingAddress: sn,
                    leadSource: un
                });
                f(!1), V.mutate({
                    tokenId: D.id
                }, {
                    onSuccess: K => {
                        const {
                            status: Ce,
                            result: W,
                            approvalUrl: Pe,
                            rebillyError: ie,
                            modal: ze
                        } = K;
                        if (document.cookie = "rebilly_request_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;", ie) {
                            h(H(ie)), console.error(ie);
                            return
                        }
                        if (W === "abandoned" || W === "canceled" || W === "declined") {
                            h(H(W));
                            return
                        }
                        Ce === "waiting-approval" && (Pe && P(Pe), Ze(le.height, le.width), w(!0)), Ce === "completed" && W === "approved" && (ze && U(ze), window.dataLayer.push({
                            event: "premium_signup",
                            currency: t,
                            price: i / X
                        }), z(!0))
                    },
                    onError: K => {
                        h(H(K)), console.error(K)
                    }
                })
            } catch (D) {
                console.error(D), h(H(D)), f(!1)
            }
        };
        return Xe({
            setIsIframeVisible: w,
            setUserDetailsModalMarkup: U,
            setIsPaymentSucceeded: z,
            setErrorMsg: h,
            modalDimensions: le,
            trackingData: {
                currency: t,
                price: i
            }
        }), Ye(A, L), {
            firstName: a,
            setFirstName: o,
            lastName: u,
            setLastName: c,
            setCardDetailsComplete: _,
            isLoading: m || V.isLoading || ln.isLoading,
            errorMsg: E,
            handleSubmit: an,
            isIframeVisible: S,
            urlToOffsiteFlow: N,
            isPaymentSucceeded: A
        }
    },
    Mr = "_inputWrapper_1pf25_1",
    Or = "_firstName_1pf25_7",
    Wr = "_lastName_1pf25_14",
    Br = "_submitButton_1pf25_20";
var F = {
    inputWrapper: Mr,
    firstName: Or,
    lastName: Wr,
    submitButton: Br
};
const Fr = ({
        Rebilly: n,
        setCurrentView: e,
        paymentData: {
            trialDays: r,
            trialPriceFormatted: t,
            currency: i,
            trialPrice: a
        },
        attribution: o
    }) => {
        const [u, c] = s.exports.useState({
            cardNumber: !1,
            expiry: !1,
            cvv: !1
        }), {
            i18n: g
        } = b(), _ = s.exports.useRef(null), {
            firstName: m,
            setFirstName: f,
            lastName: S,
            setLastName: w,
            setCardDetailsComplete: N,
            isLoading: P,
            errorMsg: E,
            handleSubmit: h,
            isIframeVisible: A,
            urlToOffsiteFlow: z,
            isPaymentSucceeded: L
        } = Dr({
            formRef: _,
            Rebilly: n,
            currency: i,
            attribution: o,
            price: a
        }), U = !u.cardNumber && !u.expiry && !u.cvv;
        return d("div", {
            className: "margin-top-lg",
            children: [L ? l(ye, {}) : d(j, {
                children: [l(me, {
                    onClick: () => e("buttons"),
                    disabled: P || U
                }), E && l(Y, {
                    errorMsg: E
                }), d(wr, {
                    handleSubmit: h,
                    formRef: _,
                    children: [l("div", {
                        className: `${F.inputWrapper} ${F.firstName}`,
                        children: l(He, {
                            value: m,
                            placeholder: g.t("javascript.rebilly.subscription.first_name"),
                            onChange: V => f(V.target.value)
                        })
                    }), l("div", {
                        className: `${F.inputWrapper} ${F.lastName}`,
                        children: l(He, {
                            value: S,
                            placeholder: g.t("javascript.rebilly.subscription.last_name"),
                            onChange: V => w(V.target.value)
                        })
                    }), l(Lr, {
                        isCardReady: u,
                        setIsCardReady: c,
                        setCardDetailsComplete: N
                    }), l(yr, {
                        isLoading: P,
                        className: F.submitButton,
                        children: l("strong", {
                            children: g.t("javascript.rebilly.subscription.start_trial", {
                                trial_days: r,
                                trial_price: t
                            })
                        })
                    })]
                })]
            }), A && z && l(he, {
                sourceUrl: z,
                title: "Offsite payment flow"
            })]
        })
    },
    Ur = B.withFramePay(Fr),
    Hr = "_inputWrapper_5ahwg_1",
    Kr = "_loadingTextWrapper_5ahwg_7",
    Gr = "_hide_5ahwg_13";
var ve = {
    inputWrapper: Hr,
    loadingTextWrapper: Kr,
    hide: Gr
};
const Zr = ({
        PaypalElement: n,
        setCurrentView: e,
        trackingData: r
    }) => {
        const {
            errorMsg: t,
            onTokenReady: i,
            isLoading: a,
            isPaymentSucceeded: o,
            isIframeVisible: u,
            urlToOffsiteFlow: c
        } = Qe({
            trackingData: r
        });
        return a ? d("div", {
            className: `margin-top-lg ${ve.loadingTextWrapper}`,
            children: [l("div", {
                className: "margin-bottom-md",
                children: "Transaction in progress..."
            }), l(T, {
                color: "black",
                isBig: !0
            })]
        }) : d(j, {
            children: [o && l("div", {
                className: "margin-top-lg",
                children: l(ye, {})
            }), d("div", {
                className: `margin-top-lg ${o?ve.hide:""}`,
                children: [l(me, {
                    onClick: () => e("buttons"),
                    disabled: a
                }), t && l(Y, {
                    errorMsg: t
                }), l("div", {
                    className: ve.inputWrapper,
                    children: l(n, {
                        onTokenReady: i
                    })
                })]
            }), u && c && l(he, {
                sourceUrl: c,
                title: "Offsite payment flow"
            })]
        })
    },
    Qr = B.withFramePay(Zr),
    Jr = "_buttonsWrapper_wuyre_1";
var Yr = {
    buttonsWrapper: Jr
};
const Xr = ({
        setCurrentView: n,
        paymentMethods: e
    }) => {
        const {
            i18n: r
        } = b(), t = i => e.some(a => a === i);
        return d("div", {
            className: Yr.buttonsWrapper,
            children: [t("payment-card") && l(Be, {
                kind: "cards",
                caption: r.t("javascript.rebilly.subscription.paying_with_card"),
                onClick: () => n("cardForm")
            }), t("digital-wallet") && l(Be, {
                kind: "digitalWallet",
                caption: r.t("javascript.rebilly.subscription.paying_with_wallet"),
                onClick: () => n("wallets")
            })]
        })
    },
    et = "_inputWrapper_10cx0_1",
    nt = "_loadingTextWrapper_10cx0_18",
    rt = "_hide_10cx0_24";
var ee = {
    inputWrapper: et,
    loadingTextWrapper: nt,
    hide: rt
};
const tt = ({
        ApplePayElement: n,
        GooglePayElement: e,
        setCurrentView: r,
        trackingData: t
    }) => {
        const [i, a] = s.exports.useState(!1);
        s.exports.useEffect(() => {
            window.ApplePaySession && window.ApplePaySession.canMakePayments() && a(!0)
        }, []);
        const {
            errorMsg: o,
            onTokenReady: u,
            isLoading: c,
            isPaymentSucceeded: g,
            isIframeVisible: _,
            urlToOffsiteFlow: m
        } = Qe({
            trackingData: t
        });
        return c ? d("div", {
            className: `margin-top-lg ${ee.loadingTextWrapper}`,
            children: [l("div", {
                className: "margin-bottom-md",
                children: "Transaction in progress..."
            }), l(T, {
                color: "black",
                isBig: !0
            })]
        }) : d(j, {
            children: [g && l("div", {
                className: "margin-top-lg",
                children: l(ye, {})
            }), d("div", {
                className: `margin-top-lg ${g?ee.hide:""}`,
                children: [l(me, {
                    onClick: () => r("buttons"),
                    disabled: c
                }), o && l(Y, {
                    errorMsg: o
                }), l("div", {
                    className: ee.inputWrapper,
                    children: l(e, {
                        onTokenReady: u
                    })
                }), i && l("div", {
                    className: ee.inputWrapper,
                    children: l(n, {
                        onTokenReady: u
                    })
                })]
            }), _ && m && l(he, {
                sourceUrl: m,
                title: "Offsite payment flow"
            })]
        })
    },
    lt = B.withFramePay(tt),
    it = "_framePayWrapper_lveaj_1",
    at = "_spinnerWrapper_lveaj_6",
    ot = "_alert_lveaj_10";
var fe = {
    framePayWrapper: it,
    spinnerWrapper: at,
    alert: ot
};
const st = ({
        rebillyConfig: {
            organizationId: n,
            publishableKey: e,
            websiteId: r,
            attribution: t
        }
    }) => {
        const [i, a] = s.exports.useState("buttons"), o = Xn();
        return s.exports.useEffect(() => {
            o.mutate()
        }, []), l(j, {
            children: (() => {
                switch (o.status) {
                    case "idle":
                    case "loading":
                        return l(T, {
                            wrapperClassName: `margin-top-lg ${fe.spinnerWrapper}`,
                            color: "black",
                            isBig: !0
                        });
                    case "success":
                        {
                            const {
                                data: {
                                    plan: c
                                }
                            } = o;
                            return d(B.FramePayProvider, {
                                injectStyle: !0,
                                websiteId: r,
                                organizationId: n,
                                publishableKey: e,
                                transactionData: {
                                    currency: c.currency.toUpperCase(),
                                    amount: c.trialPrice / X,
                                    label: c.label
                                },
                                googlePay: {
                                    buttonType: "short"
                                },
                                paypal: {
                                    buttonHeight: 44
                                },
                                onError: g => {
                                    console.error("FramePayProvider.onError", g)
                                },
                                placeholders: {
                                    card: {
                                        number: "1234 1234 1234 1234"
                                    }
                                },
                                classes: {
                                    base: fe.framePayWrapper
                                },
                                style: {
                                    base: {
                                        fontFamily: "Nunito, Helvetica, sans-serif",
                                        color: "#555",
                                        fontSize: "14px",
                                        "::placeholder": {
                                            color: "#9d9d9d"
                                        }
                                    }
                                },
                                icon: {
                                    color: "#9d9d9d"
                                },
                                children: [i === "buttons" && l(Xr, {
                                    setCurrentView: a,
                                    paymentMethods: o.data.methods
                                }), i === "cardForm" && l(Ur, {
                                    setCurrentView: a,
                                    paymentData: c,
                                    attribution: t
                                }), i === "paypal" && l(Qr, {
                                    setCurrentView: a,
                                    trackingData: {
                                        currency: c.currency,
                                        price: c.trialPrice
                                    }
                                }), i === "wallets" && l(lt, {
                                    setCurrentView: a,
                                    trackingData: {
                                        currency: c.currency,
                                        price: c.trialPrice
                                    }
                                })]
                            })
                        }
                    case "error":
                    default:
                        return console.error(o.error), l(Y, {
                            errorMsg: "Something went wrong. Please try again later.",
                            className: `margin-top-lg ${fe.alert}`
                        })
                }
            })()
        })
    },
    ut = new Te;

function ct({
    error: n,
    resetErrorBoundary: e
}) {
    return s.exports.useEffect(() => {
        n.message === "Cannot read properties of undefined (reading 'destroy')" && e()
    }, []), null
}
const dt = n => {
        console.error("Error caught by ErrorBoundry:", n)
    },
    gt = n => l(Ie, {
        client: ut,
        children: l(de, {
            children: l(_n, {
                FallbackComponent: ct,
                onError: dt,
                children: l(st, {
                    rebillyConfig: n
                })
            })
        })
    }),
    pt = ({
        defaultUrl: n
    }) => (window.top == window.self ? window.location.replace(window.localStorage.getItem("rebilly-redirect-back") || n) : window.parent.postMessage("3DS-authentication-complete", "*"), l(j, {}));
var ke;
(function(n) {
    n.SearchResults = "SearchResults"
})(ke || (ke = {}));
const _t = q.object({
        text: q.string(),
        magicKey: q.string(),
        isCollection: q.boolean()
    }),
    I = q.object({
        suggestions: q.array(_t)
    }),
    mt = q.object({
        cities: I,
        postal_codes: I,
        addresses: I,
        countries: I,
        regions: I,
        districts: I,
        neighborhoods: I
    }),
    ht = async n => {
        const {
            data: e
        } = await Z.get(`/api/v1/geo/search?q=${n}`), r = mt.safeParse(e);
        if (!r.success) throw console.error(r.error), Error("Data validation error!");
        return r.data
    },
    yt = n => mn([ke.SearchResults, {
        searchText: n
    }], () => ht(n), {
        enabled: !!n,
        keepPreviousData: !!n,
        staleTime: 6e4
    }),
    bt = n => n.addresses.suggestions.length === 0 && n.cities.suggestions.length === 0 && n.countries.suggestions.length === 0 && n.districts.suggestions.length === 0 && n.neighborhoods.suggestions.length === 0 && n.postal_codes.suggestions.length === 0 && n.regions.suggestions.length === 0,
    vt = (n, e) => {
        const [r, t] = s.exports.useState(n);
        return s.exports.useEffect(() => {
            const i = setTimeout(() => {
                t(n)
            }, e);
            return () => {
                clearTimeout(i)
            }
        }, [n, e]), r
    },
    ft = n => {
        const e = i => window.matchMedia(i).matches,
            [r, t] = s.exports.useState(e(n));
        return s.exports.useEffect(() => {
            const i = window.matchMedia(n),
                a = () => {
                    t(e(n))
                };
            try {
                i.addEventListener("change", a)
            } catch {
                i.addListener(a)
            }
            return () => {
                try {
                    i.removeEventListener("change", a)
                } catch {
                    i.removeListener(a)
                }
            }
        }, [n]), [r]
    },
    kt = "modulepreload",
    en = {},
    wt = "/vite/",
    v = function(e, r) {
        return !r || r.length === 0 ? e() : Promise.all(r.map(t => {
            if (t = `${wt}${t}`, t in en) return;
            en[t] = !0;
            const i = t.endsWith(".css"),
                a = i ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${t}"]${a}`)) return;
            const o = document.createElement("link");
            if (o.rel = i ? "stylesheet" : kt, i || (o.as = "script", o.crossOrigin = ""), o.href = t, document.head.appendChild(o), i) return new Promise((u, c) => {
                o.addEventListener("load", u), o.addEventListener("error", c)
            })
        })).then(() => e())
    };

function xt(n) {
    switch (n) {
        case "../../../images/seo_campaigns/icons/aging.png":
            return v(() =>
                import ("./aging.970d7a82.js"), []);
        case "../../../images/seo_campaigns/icons/agriculture.png":
            return v(() =>
                import ("./agriculture.e79d1b23.js"), []);
        case "../../../images/seo_campaigns/icons/crime.png":
            return v(() =>
                import ("./crime.e43144c5.js"), []);
        case "../../../images/seo_campaigns/icons/culture.png":
            return v(() =>
                import ("./culture.f9b3add6.js"), []);
        case "../../../images/seo_campaigns/icons/economy.png":
            return v(() =>
                import ("./economy.67c0910f.js"), []);
        case "../../../images/seo_campaigns/icons/education.png":
            return v(() =>
                import ("./education.63daa3e6.js"), []);
        case "../../../images/seo_campaigns/icons/environment.png":
            return v(() =>
                import ("./environment.0768a1d2.js"), []);
        case "../../../images/seo_campaigns/icons/equality.png":
            return v(() =>
                import ("./equality.28e5128a.js"), []);
        case "../../../images/seo_campaigns/icons/health.png":
            return v(() =>
                import ("./health.4f624f63.js"), []);
        case "../../../images/seo_campaigns/icons/housing.png":
            return v(() =>
                import ("./housing.1f6c0abb.js"), []);
        case "../../../images/seo_campaigns/icons/income.png":
            return v(() =>
                import ("./income.c4323f01.js"), []);
        case "../../../images/seo_campaigns/icons/labour.png":
            return v(() =>
                import ("./labour.c8ad4160.js"), []);
        case "../../../images/seo_campaigns/icons/physical_exercise.png":
            return v(() =>
                import ("./physical_exercise.ac1a1ac4.js"), []);
        default:
            return new Promise(function(e, r) {
                (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + n)))
            })
    }
}
const jt = (n, e) => {
        const [r, t] = s.exports.useState(!0), [i, a] = s.exports.useState("");
        return s.exports.useEffect(() => {
            let o = !1;
            return (async () => {
                try {
                    const c = await xt(`../../../images/seo_campaigns/icons/${n}.${e}`);
                    o || (t(!1), a(c.default))
                } catch (c) {
                    t(!1), a(""), console.error(c)
                }
            })(), () => {
                o = !0
            }
        }, [n, e]), {
            imagePath: i,
            isLoading: r
        }
    },
    St = "_wrapper_8eajl_1";
var Ct = {
    wrapper: St
};
const R = ({
        title: n,
        suggestions: e,
        searchText: r,
        searchBaseUrl: t
    }) => {
        const i = a => {
            if (a.toLowerCase().startsWith(r.toLowerCase())) {
                const o = a.slice(0, r.length),
                    u = a.slice(r.length);
                return d(j, {
                    children: [l("span", {
                        className: "text-[#333]",
                        children: o
                    }), l("span", {
                        children: u
                    })]
                })
            }
            return a
        };
        return d("div", {
            className: `${Ct.wrapper} space-y-3`,
            children: [l("h4", {
                className: "text-xl font-semibold m-0",
                children: n
            }), l("ul", {
                children: e.map(a => l("li", {
                    children: l("a", {
                        href: `${window.location.origin}${t}?id=${a.magicKey}`,
                        className: "block text-base text-grey-3 font-medium px-2 py-1 hover:bg-grey-9/20 focus:bg-grey-9/20 focus:no-underline",
                        children: i(a.text)
                    })
                }, a.magicKey))
            })]
        })
    },
    Pt = ({
        data: n,
        searchText: e,
        searchBaseUrl: r
    }) => {
        const {
            i18n: t
        } = b();
        return d("div", {
            className: "flex flex-col divide-y divide-grey-9",
            children: [n.cities.suggestions.length > 0 && l(R, {
                title: t.t("javascript.search_box.dropdown_titles.city"),
                suggestions: n.cities.suggestions,
                searchText: e,
                searchBaseUrl: r
            }), n.postal_codes.suggestions.length > 0 && l(R, {
                title: t.t("javascript.search_box.dropdown_titles.postal_code"),
                suggestions: n.postal_codes.suggestions,
                searchText: e,
                searchBaseUrl: r
            }), n.addresses.suggestions.length > 0 && l(R, {
                title: t.t("javascript.search_box.dropdown_titles.address"),
                suggestions: n.addresses.suggestions,
                searchText: e,
                searchBaseUrl: r
            }), n.countries.suggestions.length > 0 && l(R, {
                title: t.t("javascript.search_box.dropdown_titles.country"),
                suggestions: n.countries.suggestions,
                searchText: e,
                searchBaseUrl: r
            }), n.regions.suggestions.length > 0 && l(R, {
                title: t.t("javascript.search_box.dropdown_titles.region"),
                suggestions: n.regions.suggestions,
                searchText: e,
                searchBaseUrl: r
            }), n.districts.suggestions.length > 0 && l(R, {
                title: t.t("javascript.search_box.dropdown_titles.district"),
                suggestions: n.districts.suggestions,
                searchText: e,
                searchBaseUrl: r
            }), n.neighborhoods.suggestions.length > 0 && l(R, {
                title: t.t("javascript.search_box.dropdown_titles.neighborhood"),
                suggestions: n.neighborhoods.suggestions,
                searchText: e,
                searchBaseUrl: r
            })]
        })
    },
    zt = "_dropdown_13x4o_1";
var Nt = {
    dropdown: zt
};
const Et = ({
    isRequestError: n,
    data: e,
    searchText: r,
    searchBaseUrl: t
}) => {
    const {
        i18n: i
    } = b(), a = () => n ? l("span", {
        className: "text-red-1",
        children: i.t("javascript.search_box.query_error")
    }) : e ? bt(e) ? d("div", {
        className: "flex flex-col space-y-4",
        children: [d("span", {
            className: "text-base",
            children: [i.t("javascript.search_box.no_results.info"), ":", " ", l("strong", {
                children: r
            })]
        }), d("span", {
            className: "text-base font-bold",
            children: [i.t("javascript.search_box.no_results.suggestions"), ":"]
        }), d("ul", {
            className: "list-disc pl-5 space-y-2",
            children: [l("li", {
                children: i.t("javascript.search_box.no_results.first_suggestion")
            }), l("li", {
                children: i.t("javascript.search_box.no_results.second_suggestion")
            })]
        })]
    }) : l(Pt, {
        data: e,
        searchText: r,
        searchBaseUrl: t
    }) : "Logic error! Should not reach that point";
    return l("div", {
        className: `${Nt.dropdown} absolute left-0 right-0 max-h-[40vh] bg-white rounded overflow-y-auto z-10 !mx-0 p-4`,
        children: a()
    })
};
var At = "/vite/assets/search-icon.f6d7255c.svg";
const qt = "_boxHeight_lhzbv_1";
var Tt = {
    boxHeight: qt
};
const It = ({
    searchBaseUrl: n
}) => {
    const [e, r] = s.exports.useState(""), t = vt(e, 400), i = yt(t.toLowerCase()), {
        i18n: a
    } = b(), o = u => {
        r(u.target.value)
    };
    return l("div", {
        className: "max-w-[650px] mx-auto",
        children: d("div", {
            className: `${Tt.boxHeight} flex items-center relative bg-white rounded py-2 pr-2 pl-4 space-x-4`,
            children: [l("div", {
                className: "flex justify-center items-center w-[30px] h-[30px]",
                children: i.isFetching ? l(T, {
                    isBig: !0,
                    color: "grey"
                }) : l("img", {
                    src: At,
                    alt: "Search icon",
                    className: "w-full h-full"
                })
            }), l(dr, {
                className: "flex-1 h-full text-base bg-transparent outline-none placeholder:text-sm",
                onChange: o,
                placeholder: a.t("javascript.search_box.input_placeholder")
            }), (i.isError || i.isSuccess) && l(Et, {
                isRequestError: i.isError,
                data: i.data,
                searchText: e,
                searchBaseUrl: n
            })]
        })
    })
};
const Rt = new Te,
    Lt = ({
        defaultUrl: n
    }) => l(Ie, {
        client: Rt,
        children: l(de, {
            children: l(It, {
                searchBaseUrl: n
            })
        })
    }),
    $t = () => {
        const [n, e] = s.exports.useState(0), r = s.exports.useCallback(t => e(t), []);
        return {
            cellWidth: n,
            getCellWidth: r
        }
    },
    nn = s.exports.createContext(void 0),
    Vt = ({
        children: n
    }) => l(nn.Provider, {
        value: $t(),
        children: n
    }),
    ne = () => {
        const n = s.exports.useContext(nn);
        if (n === void 0) throw new Error("useCellWidthContext must be within CellWidthContextProvider");
        return n
    },
    re = ({
        children: n,
        width: e
    }) => l("span", {
        className: "flex justify-center items-center text-center text-sm text-dark-1 px-2",
        style: {
            width: `${e}%`
        },
        children: n
    }),
    te = ({
        children: n,
        width: e
    }) => l("div", {
        className: "flex justify-center items-center min-h-[40px] text-center text-sm text-dark-1 font-bold px-2",
        style: {
            width: `${e}%`
        },
        children: n
    }),
    we = ({
        iconName: n
    }) => {
        const {
            isLoading: e,
            imagePath: r
        } = jt(n, "png");
        return l("div", {
            className: "flex justify-center items-center w-[32px] h-[32px]",
            children: e ? l(T, {
                color: "black"
            }) : l("img", {
                src: r,
                alt: n,
                className: "w-full h-full"
            })
        })
    },
    xe = n => {
        switch (n) {
            case "new_arrivals":
                return "income";
            case "leisure":
                return "culture";
            case "living_standard":
                return "income";
            case "sport":
                return "physical_exercise";
            default:
                return n
        }
    },
    Dt = ({
        sortCategoryElement: n,
        isActive: e,
        setSortCategory: r,
        currentCountry: t
    }) => {
        const {
            i18n: i
        } = b(), a = () => {
            r(n)
        };
        return l(j, {
            children: n === "index" ? l(J, {
                className: "text-dark-1 mx-4",
                onClick: a,
                children: i.t(`javascript.seo_campaign.${t}.index`)
            }) : l(J, {
                className: `shrink-0 mx-4 p-2${e?" bg-grey-10 rounded":""}`,
                onClick: a,
                children: l(we, {
                    iconName: xe(n)
                })
            })
        })
    },
    Mt = ({
        sortCategoriesList: n,
        sortCategory: e,
        setSortCategory: r,
        currentCountry: t
    }) => l("div", {
        className: "flex items-center space-evenly py-6 overflow-x-auto",
        children: n.map(i => l(Dt, {
            sortCategoryElement: i,
            isActive: i === e,
            setSortCategory: r,
            currentCountry: t
        }, i))
    }),
    Ot = ({
        sortOrder: n,
        setSortOrder: e,
        sortCategory: r,
        currentCountry: t
    }) => {
        const {
            cellWidth: i
        } = ne(), {
            i18n: a
        } = b();
        return l(te, {
            width: i,
            children: d(J, {
                className: "flex items-center px-2 py-1 space-x-3",
                onClick: () => {
                    e(n === "asc" ? "desc" : "asc")
                },
                children: [r === "index" ? l("span", {
                    children: a.t(`javascript.seo_campaign.${t}.index`)
                }) : l(we, {
                    iconName: xe(r)
                }), l("span", {
                    className: `caret transition-transform${n==="asc"?" rotate-180":""}`
                })]
            })
        })
    },
    Wt = () => {
        const [n, e] = s.exports.useState(!1), [r, t] = s.exports.useState({
            right: 0,
            top: 0
        }), [i, a] = s.exports.useState(null);
        return {
            isVisible: n,
            position: r,
            handleMouseOver: (c, g) => {
                const {
                    height: _
                } = c.currentTarget.getBoundingClientRect();
                t({
                    right: 0,
                    top: _ + 5
                }), e(!0), a(g)
            },
            handleMouseOut: () => {
                t({
                    right: 0,
                    top: 0
                }), e(!1), a(null)
            },
            hoveredSortCategory: i
        }
    },
    Bt = ({
        sortCategoryElement: n,
        sortOrder: e,
        setSortOrder: r,
        isActive: t,
        setSortCategory: i,
        currentCountry: a
    }) => {
        const {
            i18n: o
        } = b(), {
            isVisible: u,
            position: c,
            handleMouseOver: g,
            handleMouseOut: _,
            hoveredSortCategory: m
        } = Wt(), f = () => {
            i(n), r(t ? e === "asc" ? "desc" : "asc" : "desc")
        }, S = () => {
            let w = "caret transition-transform";
            return e === "asc" && t && (w += " rotate-180"), w
        };
        return d(J, {
            className: `flex items-center relative px-2 py-1 space-x-1${t?" bg-grey-10 rounded":""}`,
            onClick: f,
            onMouseOver: w => g(w, n),
            onMouseOut: _,
            children: [n === "index" ? l("span", {
                children: o.t(`javascript.seo_campaign.${a}.index`)
            }) : d(j, {
                children: [l(we, {
                    iconName: xe(n)
                }), u && m === n && l("div", {
                    className: "absolute text-sm bg-dark-1 text-white rounded px-3 py-1",
                    style: {
                        right: c.right,
                        top: c.top
                    },
                    children: o.t(`javascript.seo_campaign.${a}.categories.${n}`)
                })]
            }), l("span", {
                className: S()
            })]
        })
    },
    Ft = ({
        sortOrder: n,
        setSortOrder: e,
        sortCategoriesList: r,
        sortCategory: t,
        setSortCategory: i,
        currentCountry: a
    }) => {
        const {
            cellWidth: o
        } = ne();
        return l(j, {
            children: r.map(u => l(te, {
                width: o,
                children: l(Bt, {
                    sortCategoryElement: u,
                    sortOrder: n,
                    setSortOrder: e,
                    isActive: u === t,
                    setSortCategory: i,
                    currentCountry: a
                })
            }, u))
        })
    },
    Ut = ({
        sortOrder: n,
        setSortOrder: e,
        sortCategoriesList: r,
        sortCategory: t,
        setSortCategory: i,
        isMobile: a,
        currentCountry: o
    }) => {
        const {
            getCellWidth: u,
            cellWidth: c
        } = ne(), {
            i18n: g
        } = b(), _ = s.exports.useRef(null);
        return s.exports.useEffect(() => {
            if (_.current) {
                const m = [..._.current.children];
                u(100 / m.length)
            }
        }, [a]), d("div", {
            className: "flex sticky top-nav bg-white py-6",
            ref: _,
            children: [l(te, {
                width: c,
                children: g.t(`javascript.seo_campaign.${o}.rank`)
            }), l(te, {
                width: a ? c : 2 * c,
                children: g.t(`javascript.seo_campaign.${o}.region`)
            }), a ? l(Ot, {
                sortOrder: n,
                setSortOrder: e,
                sortCategory: t,
                currentCountry: o
            }) : l(Ft, {
                sortOrder: n,
                setSortOrder: e,
                sortCategoriesList: r,
                sortCategory: t,
                setSortCategory: i,
                currentCountry: o
            })]
        })
    },
    Ht = ({
        item: n,
        rank: e,
        sortCategory: r,
        isMobile: t
    }) => {
        const {
            cellWidth: i
        } = ne();
        return d("div", {
            className: "flex py-4",
            children: [l(re, {
                width: i,
                children: e
            }), l(re, {
                width: t ? i : 2 * i,
                children: n.city
            }), t ? l(re, {
                width: i,
                children: n.indexesValues[r] || "-"
            }) : l(j, {
                children: Object.values(n.indexesValues).map((a, o) => l(re, {
                    width: i,
                    children: a || "-"
                }, o))
            })]
        })
    },
    Kt = "_tableContent_1ihlf_1",
    Gt = "_fr_1ihlf_5";
var je = {
    tableContent: Kt,
    fr: Gt
};
const Zt = ({
        sortedData: n,
        sortOrder: e,
        sortCategory: r,
        isMobile: t,
        currentCountry: i
    }) => {
        const a = s.exports.useCallback((u, c) => e === "desc" ? u + 1 : c - u, [e]);
        return l("div", {
            className: (() => {
                switch (i) {
                    case "fr":
                        return `${je.tableContent} ${je.fr}`;
                    default:
                        return je.tableContent
                }
            })(),
            children: n.map((u, c) => l(Ht, {
                item: u,
                rank: a(c, n.length),
                sortCategory: r,
                isMobile: t
            }, u.id))
        })
    },
    Qt = ({
        data: n,
        sortCategory: e,
        sortOrder: r
    }) => {
        const t = s.exports.useMemo(() => {
                const o = n.sort((u, c) => {
                    const g = u.indexesValues[e],
                        _ = c.indexesValues[e];
                    return g === null ? -1 : _ === null ? 1 : Number(g) - Number(_)
                });
                return r === "desc" ? o.reverse() : o
            }, [e, r]),
            i = s.exports.useMemo(() => t[0].indexesValues, [t]),
            a = s.exports.useMemo(() => Object.keys(i), [i]);
        return {
            sortedData: t,
            sortCategoriesList: a
        }
    },
    Jt = 1024,
    Yt = ({
        data: n,
        currentCountry: e
    }) => {
        const [r, t] = s.exports.useState("index"), [i, a] = s.exports.useState("desc"), [o] = ft(`(max-width: ${Jt}px)`), {
            sortedData: u,
            sortCategoriesList: c
        } = Qt({
            data: [...n],
            sortCategory: r,
            sortOrder: i
        });
        return d(de, {
            children: [o && l(Mt, {
                sortCategoriesList: c,
                sortCategory: r,
                setSortCategory: t,
                currentCountry: e
            }), l(Vt, {
                children: d("div", {
                    children: [l(Ut, {
                        sortOrder: i,
                        setSortOrder: a,
                        sortCategoriesList: c,
                        sortCategory: r,
                        setSortCategory: t,
                        isMobile: o,
                        currentCountry: e
                    }), l(Zt, {
                        sortedData: u,
                        sortOrder: i,
                        sortCategory: r,
                        isMobile: o,
                        currentCountry: e
                    })]
                })
            })]
        })
    },
    Xt = {
        SampleApp: Tn,
        SubscriptionCheckout: gt,
        CheckoutRedirect: pt,
        SearchBox: Lt,
        CampaignTable: Yt
    },
    rn = n => {
        if (n.textContent) {
            const e = JSON.parse(n.textContent),
                r = n.getAttribute("data-react-app-name"),
                t = document.getElementById(n.getAttribute("data-react-app-mountpoint-id")),
                i = Xt[r];
            qe.render(hn.createElement(i, e, null), t)
        }
    },
    tn = new Nn(document.querySelector("html"), "data-react-app-name", {
        elementMatchedAttribute: (n, e) => {
            rn(n)
        }
    });
document.addEventListener("DOMContentLoaded", () => {
    for (const n of document.body.querySelectorAll(tn.selector)) rn(n);
    tn.start()
}, !1);
window.i18n = new Ae(De);
const Se = document.querySelector("html"),
    el = (Se == null ? void 0 : Se.lang) || "en";
window.i18n.locale = el;
window.i18n.enableFallback = !0;
console.log("Vite \u26A1\uFE0F Rails");
const nl = yn.start(),
    rl = {
        "../controllers/accordion_controller.js": vn,
        "../controllers/navigation_controller.js": fn,
        "../controllers/ezoic/loaded_placeholder_controller.js": xn,
        "../controllers/ezoic/main_controller.js": jn,
        "../controllers/search_agent/form_controller.js": Cn,
        "../controllers/search_agent/popup_controller.js": Pn
    };
bn(nl, rl);
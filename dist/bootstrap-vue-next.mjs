var No = Object.defineProperty;
var zo = (e, t, l) => t in e ? No(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var Ce = (e, t, l) => (zo(e, typeof t != "symbol" ? t + "" : t, l), l);
import { unref as s, computed as d, ref as z, shallowRef as El, watch as ve, getCurrentScope as Ya, onScopeDispose as Ja, shallowReadonly as vt, watchEffect as xe, readonly as jt, isRef as wt, getCurrentInstance as Il, onMounted as Ne, nextTick as Ie, reactive as ut, inject as Ge, toRef as u, onActivated as Za, defineComponent as R, onBeforeUnmount as Qa, openBlock as g, createElementBlock as T, Fragment as ue, createElementVNode as U, renderSlot as _, normalizeProps as $e, guardReactiveProps as Ae, createBlock as j, Teleport as Fl, mergeProps as Q, normalizeClass as M, normalizeStyle as Fe, createTextVNode as se, toDisplayString as K, createCommentVNode as Y, createApp as Ro, h as re, provide as at, resolveDynamicComponent as le, withCtx as q, createVNode as ye, Transition as en, useSlots as Oe, resolveComponent as tn, withModifiers as dt, renderList as Be, withKeys as Vt, withDirectives as nt, vShow as nl, isReactive as Ho, onUnmounted as Ll, useAttrs as ln, vModelCheckbox as Mo, vModelRadio as Do, vModelSelect as jo, createSlots as an } from "vue";
const qo = (e) => typeof e == "boolean" || e === "" || e === "true" || e === "false", nn = (e) => typeof e == "boolean" ? e : e === "" ? !0 : e === "true";
class Xe {
  constructor(t, l = {}) {
    Ce(this, "cancelable", !0);
    Ce(this, "componentId", null);
    Ce(this, "_defaultPrevented", !1);
    Ce(this, "eventType", "");
    Ce(this, "nativeEvent", null);
    Ce(this, "_preventDefault");
    Ce(this, "relatedTarget", null);
    Ce(this, "target", null);
    if (!t)
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    Object.assign(this, Xe.Defaults, l, { eventType: t }), this._preventDefault = function() {
      this.cancelable && (this.defaultPrevented = !0);
    };
  }
  // Readable by everyone,
  // But only overwritten by inherrited constructors
  get defaultPrevented() {
    return this._defaultPrevented;
  }
  set defaultPrevented(t) {
    this._defaultPrevented = t;
  }
  // I think this is right
  // We want to be able to have it callable to everyone,
  // But only overwritten by inherrited constructors
  get preventDefault() {
    return this._preventDefault;
  }
  // This may not be correct, because it doesn't get correct type inferences in children
  // Ex overwrite this.preventDefault = () => true is valid. Could be a TS issue
  set preventDefault(t) {
    this._preventDefault = t;
  }
  static get Defaults() {
    return {
      cancelable: !0,
      componentId: null,
      eventType: "",
      nativeEvent: null,
      relatedTarget: null,
      target: null
    };
  }
}
class Et extends Xe {
  constructor(l, a = {}) {
    super(l, a);
    Ce(this, "trigger", null);
    Object.assign(this, Xe.Defaults, a, { eventType: l });
  }
  static get Defaults() {
    return {
      ...super.Defaults,
      trigger: null
    };
  }
}
class on extends Xe {
  constructor(l, a) {
    super(l, a);
    Ce(this, "from");
    Ce(this, "to");
    Ce(this, "direction");
    Object.assign(this, Xe.Defaults, a, { eventType: l });
    const { from: n, direction: o, to: i } = a;
    this.from = n, this.to = i, this.direction = o;
  }
  static get Defaults() {
    return {
      ...super.Defaults
    };
  }
}
const gl = (e) => e !== null && typeof e == "object", sn = (e) => /^[0-9]*\.?[0-9]+$/.test(String(e)), Go = (e) => Object.prototype.toString.call(e) === "[object Object]", rn = /_/g, un = /([a-z])([A-Z])/g, Wo = /(\s|^)(\w)/g, Uo = /(\s|^)(\w)/, Mt = /\s+/, Xo = /^#/, Ko = /^#[A-Za-z]+[\w\-:.]*$/, Yo = /-u-.+/, qt = (e, t = 2) => typeof e == "string" ? e : e == null ? "" : Array.isArray(e) || Go(e) && e.toString === Object.prototype.toString ? JSON.stringify(e, null, t) : String(e), Zl = (e) => e.replace(rn, " ").replace(un, (t, l, a) => `${l} ${a}`).replace(Uo, (t, l, a) => l + a.toUpperCase()), Ql = (e) => e.replace(rn, " ").replace(un, (t, l, a) => `${l} ${a}`).replace(Wo, (t, l, a) => l + a.toUpperCase()), Jo = (e) => {
  const t = e.trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}, vl = (e) => `\\${e}`, Zo = (e) => {
  const t = qt(e), { length: l } = t, a = t.charCodeAt(0);
  return t.split("").reduce((n, o, i) => {
    const r = t.charCodeAt(i);
    return r === 0 ? `${n}�` : (
      // ... is U+007F OR
      r === 127 || // ... is in the range [\1-\1F] (U+0001 to U+001F) OR ...
      r >= 1 && r <= 31 || // ... is the first character and is in the range [0-9] (U+0030 to U+0039) OR ...
      i === 0 && r >= 48 && r <= 57 || // ... is the second character and is in the range [0-9] (U+0030 to U+0039)
      // and the first character is a `-` (U+002D) ...
      i === 1 && r >= 48 && r <= 57 && a === 45 ? n + vl(`${r.toString(16)} `) : (
        // ... is the first character AND ...
        i === 0 && // ... is a `-` (U+002D) AND ...
        r === 45 && // ... there is no second character ...
        l === 1 ? n + vl(o) : (
          // ... is greater than or equal to U+0080 OR ...
          r >= 128 || // ... is `-` (U+002D) OR ...
          r === 45 || // ... is `_` (U+005F) OR ...
          r === 95 || // ... is in the range [0-9] (U+0030 to U+0039) OR ...
          r >= 48 && r <= 57 || // ... is in the range [A-Z] (U+0041 to U+005A) OR ...
          r >= 65 && r <= 90 || // ... is in the range [a-z] (U+0061 to U+007A) ...
          r >= 97 && r <= 122 ? n + o : n + vl(o)
        )
      )
    );
  }, "");
}, dn = typeof window < "u", cn = typeof document < "u", Qo = typeof Element < "u", fn = typeof navigator < "u", ol = dn && cn && fn, it = dn ? window : {}, sl = cn ? document : {}, vn = fn ? navigator : {}, es = (vn.userAgent || "").toLowerCase();
es.indexOf("jsdom") > 0;
(() => {
  let e = !1;
  if (ol)
    try {
      const t = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          return e = !0, e;
        }
      };
      it.addEventListener("test", t, t), it.removeEventListener("test", t, t);
    } catch {
      e = !1;
    }
  return e;
})();
ol && ("ontouchstart" in sl.documentElement || vn.maxTouchPoints > 0);
ol && (it.PointerEvent || it.MSPointerEvent);
ol && "IntersectionObserver" in it && "IntersectionObserverEntry" in it && // Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use `intersectionRatio > 0` instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
"intersectionRatio" in it.IntersectionObserverEntry.prototype;
const Nl = typeof window < "u", ts = typeof document < "u", ls = typeof navigator < "u", zl = Nl && ts && ls, ea = Nl ? window : {}, as = (() => {
  let e = !1;
  if (zl)
    try {
      const t = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          e = !0;
        }
      };
      ea.addEventListener("test", t, t), ea.removeEventListener("test", t, t);
    } catch {
      e = !1;
    }
  return e;
})(), Re = Qo ? Element.prototype : void 0, ns = (Re == null ? void 0 : Re.matches) || (Re == null ? void 0 : Re.msMatchesSelector) || (Re == null ? void 0 : Re.webkitMatchesSelector), Ke = (e) => !!(e && e.nodeType === Node.ELEMENT_NODE), os = (e) => Ke(e) ? e.getBoundingClientRect() : null, ss = (e = []) => {
  const { activeElement: t } = document;
  return t && !e.some((l) => l === t) ? t : null;
}, rs = (e) => Ke(e) && e === ss(), is = (e, t = {}) => {
  try {
    e.focus(t);
  } catch (l) {
    console.error(l);
  }
  return rs(e);
}, us = (e, t) => t && Ke(e) && e.getAttribute(t) || null, ds = (e) => {
  if (us(e, "display") === "none")
    return !1;
  const t = os(e);
  return !!(t && t.height > 0 && t.width > 0);
}, Ve = (e) => ((e == null ? void 0 : e()) ?? []).length === 0, mn = (e, t) => (Ke(t) ? t : sl).querySelector(e) || null, cs = (e, t) => Array.from([(Ke(t) ? t : sl).querySelectorAll(e)]), Rl = (e, t) => t && Ke(e) ? e.getAttribute(t) : null, fs = (e) => sl.getElementById(/^#/.test(e) ? e.slice(1) : e) || null, vs = (e, t, l) => {
  t && Ke(e) && e.setAttribute(t, l);
}, ms = (e, t) => {
  t && Ke(e) && e.removeAttribute(t);
}, ps = (e, t) => qt(e).toLowerCase() === qt(t).toLowerCase(), Nt = Nl ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || // Fallback, but not a true polyfill
// Only needed for Opera Mini
((e) => setTimeout(e, 16)) : (e) => setTimeout(e, 0), pn = (e, t) => Ke(e) ? ns.call(e, t) : !1, gs = (Re == null ? void 0 : Re.closest) || function(e) {
  let t = this;
  if (!t)
    return null;
  do {
    if (pn(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === Node.ELEMENT_NODE);
  return null;
}, ta = (e, t, l = !1) => {
  if (!Ke(t))
    return null;
  const a = gs.call(t, e);
  return l ? a : a === t ? null : a;
}, rl = (e, t, l) => t.concat(["sm", "md", "lg", "xl", "xxl"]).reduce((a, n) => (a[e ? `${e}${n.charAt(0).toUpperCase() + n.slice(1)}` : n] = l, a), /* @__PURE__ */ Object.create(null)), gn = (e, t, l, a = l) => Object.keys(t).reduce((n, o) => (e[o] && n.push(
  [a, o.replace(l, ""), e[o]].filter((i) => i && typeof i != "boolean").join("-").toLowerCase()
), n), []), Qe = (e = "") => `__BVID__${Math.random().toString().slice(2, 8)}___BV_${e}__`, Ot = (e) => !!(e.href || e.to), Me = (e, t = {}, l = {}) => {
  const a = [e];
  let n;
  for (let o = 0; o < a.length && !n; o++) {
    const i = a[o];
    n = l[i];
  }
  return n && typeof n == "function" ? n(t) : n;
}, et = (e, t = NaN) => Number.isInteger(e) ? e : t, bs = (e, t = NaN) => {
  const l = Number.parseInt(e, 10);
  return Number.isNaN(l) ? t : l;
}, _t = (e, t = NaN) => {
  const l = Number.parseFloat(e.toString());
  return Number.isNaN(l) ? t : l;
}, It = (e, t) => Object.keys(e).filter((l) => !t.includes(l)).reduce((l, a) => ({ ...l, [a]: e[a] }), {}), Gt = (e) => Array.isArray(e) ? e.map((t) => Gt(t)) : e instanceof Date ? new Date(e.getTime()) : e && typeof e == "object" ? Object.getOwnPropertyNames(e).reduce((t, l) => (Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(e, l) ?? {}), t[l] = Gt(e[l]), t), Object.create(Object.getPrototypeOf(e))) : e, bl = (e) => new Promise((t) => t(Gt(e))), la = (e, t) => t + (e ? Jo(e) : ""), Hl = (e, t) => (Array.isArray(t) ? t.slice() : Object.keys(t)).reduce(
  (l, a) => (l[a] = e[a], l),
  {}
), il = (e, t) => e === !0 || e === "true" || e === "" ? "true" : e === "grammar" || e === "spelling" ? e : t === !1 ? "true" : e === !1 || e === "false" ? "false" : void 0, bn = Symbol("carousel"), hn = Symbol("tabs"), yn = Symbol("breadcrumb"), Bn = Symbol("progress"), $n = Symbol("listGroup"), wn = Symbol("avatarGroup"), kn = Symbol("accordion"), Sn = Symbol("checkboxGroup"), Cn = Symbol("radioGroup"), hl = (e, t) => ((e == null ? void 0 : e()) ?? []).reduce((l, a) => (typeof a.type == "symbol" ? l = l.concat(a.children) : l.push(a), l), []).filter((l) => {
  var a;
  return ((a = l.type) == null ? void 0 : a.__name) === t;
});
function Ft(e) {
  return e.split("-")[1];
}
function Ml(e) {
  return e === "y" ? "height" : "width";
}
function Je(e) {
  return e.split("-")[0];
}
function kt(e) {
  return ["top", "bottom"].includes(Je(e)) ? "x" : "y";
}
function aa(e, t, l) {
  let { reference: a, floating: n } = e;
  const o = a.x + a.width / 2 - n.width / 2, i = a.y + a.height / 2 - n.height / 2, r = kt(t), v = Ml(r), p = a[v] / 2 - n[v] / 2, B = r === "x";
  let b;
  switch (Je(t)) {
    case "top":
      b = { x: o, y: a.y - n.height };
      break;
    case "bottom":
      b = { x: o, y: a.y + a.height };
      break;
    case "right":
      b = { x: a.x + a.width, y: i };
      break;
    case "left":
      b = { x: a.x - n.width, y: i };
      break;
    default:
      b = { x: a.x, y: a.y };
  }
  switch (Ft(t)) {
    case "start":
      b[r] -= p * (l && B ? -1 : 1);
      break;
    case "end":
      b[r] += p * (l && B ? -1 : 1);
  }
  return b;
}
const hs = async (e, t, l) => {
  const { placement: a = "bottom", strategy: n = "absolute", middleware: o = [], platform: i } = l, r = o.filter(Boolean), v = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let p = await i.getElementRects({ reference: e, floating: t, strategy: n }), { x: B, y: b } = aa(p, a, v), m = a, h = {}, $ = 0;
  for (let f = 0; f < r.length; f++) {
    const { name: k, fn: w } = r[f], { x: y, y: V, data: O, reset: x } = await w({ x: B, y: b, initialPlacement: a, placement: m, strategy: n, middlewareData: h, rects: p, platform: i, elements: { reference: e, floating: t } });
    B = y ?? B, b = V ?? b, h = { ...h, [k]: { ...h[k], ...O } }, x && $ <= 50 && ($++, typeof x == "object" && (x.placement && (m = x.placement), x.rects && (p = x.rects === !0 ? await i.getElementRects({ reference: e, floating: t, strategy: n }) : x.rects), { x: B, y: b } = aa(p, m, v)), f = -1);
  }
  return { x: B, y: b, placement: m, strategy: n, middlewareData: h };
};
function Dl(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Bt(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Wt(e, t) {
  var l;
  t === void 0 && (t = {});
  const { x: a, y: n, platform: o, rects: i, elements: r, strategy: v } = e, { boundary: p = "clippingAncestors", rootBoundary: B = "viewport", elementContext: b = "floating", altBoundary: m = !1, padding: h = 0 } = t, $ = Dl(h), f = r[m ? b === "floating" ? "reference" : "floating" : b], k = Bt(await o.getClippingRect({ element: (l = await (o.isElement == null ? void 0 : o.isElement(f))) == null || l ? f : f.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(r.floating)), boundary: p, rootBoundary: B, strategy: v })), w = b === "floating" ? { ...i.floating, x: a, y: n } : i.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(r.floating)), V = await (o.isElement == null ? void 0 : o.isElement(y)) && await (o.getScale == null ? void 0 : o.getScale(y)) || { x: 1, y: 1 }, O = Bt(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: y, strategy: v }) : w);
  return { top: (k.top - O.top + $.top) / V.y, bottom: (O.bottom - k.bottom + $.bottom) / V.y, left: (k.left - O.left + $.left) / V.x, right: (O.right - k.right + $.right) / V.x };
}
const Ut = Math.min, Xt = Math.max;
function yl(e, t, l) {
  return Xt(e, Ut(t, l));
}
const ys = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: l, padding: a = 0 } = e || {}, { x: n, y: o, placement: i, rects: r, platform: v, elements: p } = t;
  if (l == null)
    return {};
  const B = Dl(a), b = { x: n, y: o }, m = kt(i), h = Ml(m), $ = await v.getDimensions(l), f = m === "y", k = f ? "top" : "left", w = f ? "bottom" : "right", y = f ? "clientHeight" : "clientWidth", V = r.reference[h] + r.reference[m] - b[m] - r.floating[h], O = b[m] - r.reference[m], x = await (v.getOffsetParent == null ? void 0 : v.getOffsetParent(l));
  let S = x ? x[y] : 0;
  S && await (v.isElement == null ? void 0 : v.isElement(x)) || (S = p.floating[y] || r.floating[h]);
  const A = V / 2 - O / 2, F = B[k], C = S - $[h] - B[w], I = S / 2 - $[h] / 2 + A, E = yl(F, I, C), W = Ft(i) != null && I != E && r.reference[h] / 2 - (I < F ? B[k] : B[w]) - $[h] / 2 < 0;
  return { [m]: b[m] - (W ? I < F ? F - I : C - I : 0), data: { [m]: E, centerOffset: I - E } };
} }), Tn = ["top", "right", "bottom", "left"];
Tn.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Bs = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Kt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bs[t]);
}
function $s(e, t, l) {
  l === void 0 && (l = !1);
  const a = Ft(e), n = kt(e), o = Ml(n);
  let i = n === "x" ? a === (l ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = Kt(i)), { main: i, cross: Kt(i) };
}
const ws = { start: "end", end: "start" };
function ml(e) {
  return e.replace(/start|end/g, (t) => ws[t]);
}
const _n = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var l;
    const { placement: a, middlewareData: n, rects: o, initialPlacement: i, platform: r, elements: v } = t, { mainAxis: p = !0, crossAxis: B = !0, fallbackPlacements: b, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: h = "none", flipAlignment: $ = !0, ...f } = e, k = Je(a), w = Je(i) === i, y = await (r.isRTL == null ? void 0 : r.isRTL(v.floating)), V = b || (w || !$ ? [Kt(i)] : function(E) {
      const W = Kt(E);
      return [ml(E), W, ml(W)];
    }(i));
    b || h === "none" || V.push(...function(E, W, D, J) {
      const ae = Ft(E);
      let Z = function(te, ce, pe) {
        const be = ["left", "right"], ne = ["right", "left"], de = ["top", "bottom"], L = ["bottom", "top"];
        switch (te) {
          case "top":
          case "bottom":
            return pe ? ce ? ne : be : ce ? be : ne;
          case "left":
          case "right":
            return ce ? de : L;
          default:
            return [];
        }
      }(Je(E), D === "start", J);
      return ae && (Z = Z.map((te) => te + "-" + ae), W && (Z = Z.concat(Z.map(ml)))), Z;
    }(i, $, h, y));
    const O = [i, ...V], x = await Wt(t, f), S = [];
    let A = ((l = n.flip) == null ? void 0 : l.overflows) || [];
    if (p && S.push(x[k]), B) {
      const { main: E, cross: W } = $s(a, o, y);
      S.push(x[E], x[W]);
    }
    if (A = [...A, { placement: a, overflows: S }], !S.every((E) => E <= 0)) {
      var F, C;
      const E = (((F = n.flip) == null ? void 0 : F.index) || 0) + 1, W = O[E];
      if (W)
        return { data: { index: E, overflows: A }, reset: { placement: W } };
      let D = (C = A.filter((J) => J.overflows[0] <= 0).sort((J, ae) => J.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : C.placement;
      if (!D)
        switch (m) {
          case "bestFit": {
            var I;
            const J = (I = A.map((ae) => [ae.placement, ae.overflows.filter((Z) => Z > 0).reduce((Z, te) => Z + te, 0)]).sort((ae, Z) => ae[1] - Z[1])[0]) == null ? void 0 : I[0];
            J && (D = J);
            break;
          }
          case "initialPlacement":
            D = i;
        }
      if (a !== D)
        return { reset: { placement: D } };
    }
    return {};
  } };
};
function na(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function oa(e) {
  return Tn.some((t) => e[t] >= 0);
}
const ks = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { strategy: l = "referenceHidden", ...a } = e, { rects: n } = t;
    switch (l) {
      case "referenceHidden": {
        const o = na(await Wt(t, { ...a, elementContext: "reference" }), n.reference);
        return { data: { referenceHiddenOffsets: o, referenceHidden: oa(o) } };
      }
      case "escaped": {
        const o = na(await Wt(t, { ...a, altBoundary: !0 }), n.floating);
        return { data: { escapedOffsets: o, escaped: oa(o) } };
      }
      default:
        return {};
    }
  } };
};
function sa(e) {
  const t = Ut(...e.map((a) => a.left)), l = Ut(...e.map((a) => a.top));
  return { x: t, y: l, width: Xt(...e.map((a) => a.right)) - t, height: Xt(...e.map((a) => a.bottom)) - l };
}
const Ss = function(e) {
  return e === void 0 && (e = {}), { name: "inline", options: e, async fn(t) {
    const { placement: l, elements: a, rects: n, platform: o, strategy: i } = t, { padding: r = 2, x: v, y: p } = e, B = Array.from(await (o.getClientRects == null ? void 0 : o.getClientRects(a.reference)) || []), b = function(f) {
      const k = f.slice().sort((V, O) => V.y - O.y), w = [];
      let y = null;
      for (let V = 0; V < k.length; V++) {
        const O = k[V];
        !y || O.y - y.y > y.height / 2 ? w.push([O]) : w[w.length - 1].push(O), y = O;
      }
      return w.map((V) => Bt(sa(V)));
    }(B), m = Bt(sa(B)), h = Dl(r), $ = await o.getElementRects({ reference: { getBoundingClientRect: function() {
      if (b.length === 2 && b[0].left > b[1].right && v != null && p != null)
        return b.find((f) => v > f.left - h.left && v < f.right + h.right && p > f.top - h.top && p < f.bottom + h.bottom) || m;
      if (b.length >= 2) {
        if (kt(l) === "x") {
          const x = b[0], S = b[b.length - 1], A = Je(l) === "top", F = x.top, C = S.bottom, I = A ? x.left : S.left, E = A ? x.right : S.right;
          return { top: F, bottom: C, left: I, right: E, width: E - I, height: C - F, x: I, y: F };
        }
        const f = Je(l) === "left", k = Xt(...b.map((x) => x.right)), w = Ut(...b.map((x) => x.left)), y = b.filter((x) => f ? x.left === w : x.right === k), V = y[0].top, O = y[y.length - 1].bottom;
        return { top: V, bottom: O, left: w, right: k, width: k - w, height: O - V, x: w, y: V };
      }
      return m;
    } }, floating: a.floating, strategy: i });
    return n.reference.x !== $.reference.x || n.reference.y !== $.reference.y || n.reference.width !== $.reference.width || n.reference.height !== $.reference.height ? { reset: { rects: $ } } : {};
  } };
}, xn = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: l, y: a } = t, n = await async function(o, i) {
      const { placement: r, platform: v, elements: p } = o, B = await (v.isRTL == null ? void 0 : v.isRTL(p.floating)), b = Je(r), m = Ft(r), h = kt(r) === "x", $ = ["left", "top"].includes(b) ? -1 : 1, f = B && h ? -1 : 1, k = typeof i == "function" ? i(o) : i;
      let { mainAxis: w, crossAxis: y, alignmentAxis: V } = typeof k == "number" ? { mainAxis: k, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...k };
      return m && typeof V == "number" && (y = m === "end" ? -1 * V : V), h ? { x: y * f, y: w * $ } : { x: w * $, y: y * f };
    }(t, e);
    return { x: l + n.x, y: a + n.y, data: n };
  } };
};
function Cs(e) {
  return e === "x" ? "y" : "x";
}
const An = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: l, y: a, placement: n } = t, { mainAxis: o = !0, crossAxis: i = !1, limiter: r = { fn: (k) => {
      let { x: w, y } = k;
      return { x: w, y };
    } }, ...v } = e, p = { x: l, y: a }, B = await Wt(t, v), b = kt(Je(n)), m = Cs(b);
    let h = p[b], $ = p[m];
    if (o) {
      const k = b === "y" ? "bottom" : "right";
      h = yl(h + B[b === "y" ? "top" : "left"], h, h - B[k]);
    }
    if (i) {
      const k = m === "y" ? "bottom" : "right";
      $ = yl($ + B[m === "y" ? "top" : "left"], $, $ - B[k]);
    }
    const f = r.fn({ ...t, [b]: h, [m]: $ });
    return { ...f, data: { x: f.x - l, y: f.y - a } };
  } };
};
function Ee(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ue(e) {
  return Ee(e).getComputedStyle(e);
}
function Vn(e) {
  return e instanceof Ee(e).Node;
}
function lt(e) {
  return Vn(e) ? (e.nodeName || "").toLowerCase() : "";
}
let zt;
function On() {
  if (zt)
    return zt;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (zt = e.brands.map((t) => t.brand + "/" + t.version).join(" "), zt) : navigator.userAgent;
}
function qe(e) {
  return e instanceof Ee(e).HTMLElement;
}
function je(e) {
  return e instanceof Ee(e).Element;
}
function ra(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Ee(e).ShadowRoot || e instanceof ShadowRoot;
}
function ul(e) {
  const { overflow: t, overflowX: l, overflowY: a, display: n } = Ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + l) && !["inline", "contents"].includes(n);
}
function Ts(e) {
  return ["table", "td", "th"].includes(lt(e));
}
function Bl(e) {
  const t = /firefox/i.test(On()), l = Ue(e), a = l.backdropFilter || l.WebkitBackdropFilter;
  return l.transform !== "none" || l.perspective !== "none" || !!a && a !== "none" || t && l.willChange === "filter" || t && !!l.filter && l.filter !== "none" || ["transform", "perspective"].some((n) => l.willChange.includes(n)) || ["paint", "layout", "strict", "content"].some((n) => {
    const o = l.contain;
    return o != null && o.includes(n);
  });
}
function $l() {
  return /^((?!chrome|android).)*safari/i.test(On());
}
function jl(e) {
  return ["html", "body", "#document"].includes(lt(e));
}
const ia = Math.min, xt = Math.max, Yt = Math.round;
function Pn(e) {
  const t = Ue(e);
  let l = parseFloat(t.width), a = parseFloat(t.height);
  const n = qe(e), o = n ? e.offsetWidth : l, i = n ? e.offsetHeight : a, r = Yt(l) !== o || Yt(a) !== i;
  return r && (l = o, a = i), { width: l, height: a, fallback: r };
}
function En(e) {
  return je(e) ? e : e.contextElement;
}
const In = { x: 1, y: 1 };
function yt(e) {
  const t = En(e);
  if (!qe(t))
    return In;
  const l = t.getBoundingClientRect(), { width: a, height: n, fallback: o } = Pn(t);
  let i = (o ? Yt(l.width) : l.width) / a, r = (o ? Yt(l.height) : l.height) / n;
  return i && Number.isFinite(i) || (i = 1), r && Number.isFinite(r) || (r = 1), { x: i, y: r };
}
function ct(e, t, l, a) {
  var n, o;
  t === void 0 && (t = !1), l === void 0 && (l = !1);
  const i = e.getBoundingClientRect(), r = En(e);
  let v = In;
  t && (a ? je(a) && (v = yt(a)) : v = yt(e));
  const p = r ? Ee(r) : window, B = $l() && l;
  let b = (i.left + (B && ((n = p.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / v.x, m = (i.top + (B && ((o = p.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / v.y, h = i.width / v.x, $ = i.height / v.y;
  if (r) {
    const f = Ee(r), k = a && je(a) ? Ee(a) : a;
    let w = f.frameElement;
    for (; w && a && k !== f; ) {
      const y = yt(w), V = w.getBoundingClientRect(), O = getComputedStyle(w);
      V.x += (w.clientLeft + parseFloat(O.paddingLeft)) * y.x, V.y += (w.clientTop + parseFloat(O.paddingTop)) * y.y, b *= y.x, m *= y.y, h *= y.x, $ *= y.y, b += V.x, m += V.y, w = Ee(w).frameElement;
    }
  }
  return Bt({ width: h, height: $, x: b, y: m });
}
function tt(e) {
  return ((Vn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function dl(e) {
  return je(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Fn(e) {
  return ct(tt(e)).left + dl(e).scrollLeft;
}
function Pt(e) {
  if (lt(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || ra(e) && e.host || tt(e);
  return ra(t) ? t.host : t;
}
function Ln(e) {
  const t = Pt(e);
  return jl(t) ? t.ownerDocument.body : qe(t) && ul(t) ? t : Ln(t);
}
function At(e, t) {
  var l;
  t === void 0 && (t = []);
  const a = Ln(e), n = a === ((l = e.ownerDocument) == null ? void 0 : l.body), o = Ee(a);
  return n ? t.concat(o, o.visualViewport || [], ul(a) ? a : []) : t.concat(a, At(a));
}
function ua(e, t, l) {
  let a;
  if (t === "viewport")
    a = function(i, r) {
      const v = Ee(i), p = tt(i), B = v.visualViewport;
      let b = p.clientWidth, m = p.clientHeight, h = 0, $ = 0;
      if (B) {
        b = B.width, m = B.height;
        const f = $l();
        (!f || f && r === "fixed") && (h = B.offsetLeft, $ = B.offsetTop);
      }
      return { width: b, height: m, x: h, y: $ };
    }(e, l);
  else if (t === "document")
    a = function(i) {
      const r = tt(i), v = dl(i), p = i.ownerDocument.body, B = xt(r.scrollWidth, r.clientWidth, p.scrollWidth, p.clientWidth), b = xt(r.scrollHeight, r.clientHeight, p.scrollHeight, p.clientHeight);
      let m = -v.scrollLeft + Fn(i);
      const h = -v.scrollTop;
      return Ue(p).direction === "rtl" && (m += xt(r.clientWidth, p.clientWidth) - B), { width: B, height: b, x: m, y: h };
    }(tt(e));
  else if (je(t))
    a = function(i, r) {
      const v = ct(i, !0, r === "fixed"), p = v.top + i.clientTop, B = v.left + i.clientLeft, b = qe(i) ? yt(i) : { x: 1, y: 1 };
      return { width: i.clientWidth * b.x, height: i.clientHeight * b.y, x: B * b.x, y: p * b.y };
    }(t, l);
  else {
    const i = { ...t };
    if ($l()) {
      var n, o;
      const r = Ee(e);
      i.x -= ((n = r.visualViewport) == null ? void 0 : n.offsetLeft) || 0, i.y -= ((o = r.visualViewport) == null ? void 0 : o.offsetTop) || 0;
    }
    a = i;
  }
  return Bt(a);
}
function da(e, t) {
  return qe(e) && Ue(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function ca(e, t) {
  const l = Ee(e);
  if (!qe(e))
    return l;
  let a = da(e, t);
  for (; a && Ts(a) && Ue(a).position === "static"; )
    a = da(a, t);
  return a && (lt(a) === "html" || lt(a) === "body" && Ue(a).position === "static" && !Bl(a)) ? l : a || function(n) {
    let o = Pt(n);
    for (; qe(o) && !jl(o); ) {
      if (Bl(o))
        return o;
      o = Pt(o);
    }
    return null;
  }(e) || l;
}
function _s(e, t, l) {
  const a = qe(t), n = tt(t), o = ct(e, !0, l === "fixed", t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const r = { x: 0, y: 0 };
  if (a || !a && l !== "fixed")
    if ((lt(t) !== "body" || ul(n)) && (i = dl(t)), qe(t)) {
      const v = ct(t, !0);
      r.x = v.x + t.clientLeft, r.y = v.y + t.clientTop;
    } else
      n && (r.x = Fn(n));
  return { x: o.left + i.scrollLeft - r.x, y: o.top + i.scrollTop - r.y, width: o.width, height: o.height };
}
const xs = { getClippingRect: function(e) {
  let { element: t, boundary: l, rootBoundary: a, strategy: n } = e;
  const o = l === "clippingAncestors" ? function(p, B) {
    const b = B.get(p);
    if (b)
      return b;
    let m = At(p).filter((k) => je(k) && lt(k) !== "body"), h = null;
    const $ = Ue(p).position === "fixed";
    let f = $ ? Pt(p) : p;
    for (; je(f) && !jl(f); ) {
      const k = Ue(f), w = Bl(f);
      k.position === "fixed" ? h = null : ($ ? w || h : w || k.position !== "static" || !h || !["absolute", "fixed"].includes(h.position)) ? h = k : m = m.filter((y) => y !== f), f = Pt(f);
    }
    return B.set(p, m), m;
  }(t, this._c) : [].concat(l), i = [...o, a], r = i[0], v = i.reduce((p, B) => {
    const b = ua(t, B, n);
    return p.top = xt(b.top, p.top), p.right = ia(b.right, p.right), p.bottom = ia(b.bottom, p.bottom), p.left = xt(b.left, p.left), p;
  }, ua(t, r, n));
  return { width: v.right - v.left, height: v.bottom - v.top, x: v.left, y: v.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: l, strategy: a } = e;
  const n = qe(l), o = tt(l);
  if (l === o)
    return t;
  let i = { scrollLeft: 0, scrollTop: 0 }, r = { x: 1, y: 1 };
  const v = { x: 0, y: 0 };
  if ((n || !n && a !== "fixed") && ((lt(l) !== "body" || ul(o)) && (i = dl(l)), qe(l))) {
    const p = ct(l);
    r = yt(l), v.x = p.x + l.clientLeft, v.y = p.y + l.clientTop;
  }
  return { width: t.width * r.x, height: t.height * r.y, x: t.x * r.x - i.scrollLeft * r.x + v.x, y: t.y * r.y - i.scrollTop * r.y + v.y };
}, isElement: je, getDimensions: function(e) {
  return Pn(e);
}, getOffsetParent: ca, getDocumentElement: tt, getScale: yt, async getElementRects(e) {
  let { reference: t, floating: l, strategy: a } = e;
  const n = this.getOffsetParent || ca, o = this.getDimensions;
  return { reference: _s(t, await n(l), a), floating: { x: 0, y: 0, ...await o(l) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Ue(e).direction === "rtl" };
function As(e, t, l, a) {
  a === void 0 && (a = {});
  const { ancestorScroll: n = !0, ancestorResize: o = !0, elementResize: i = !0, animationFrame: r = !1 } = a, v = n && !r, p = v || o ? [...je(e) ? At(e) : e.contextElement ? At(e.contextElement) : [], ...At(t)] : [];
  p.forEach((h) => {
    v && h.addEventListener("scroll", l, { passive: !0 }), o && h.addEventListener("resize", l);
  });
  let B, b = null;
  i && (b = new ResizeObserver(() => {
    l();
  }), je(e) && !r && b.observe(e), je(e) || !e.contextElement || r || b.observe(e.contextElement), b.observe(t));
  let m = r ? ct(e) : null;
  return r && function h() {
    const $ = ct(e);
    !m || $.x === m.x && $.y === m.y && $.width === m.width && $.height === m.height || l(), m = $, B = requestAnimationFrame(h);
  }(), l(), () => {
    var h;
    p.forEach(($) => {
      v && $.removeEventListener("scroll", l), o && $.removeEventListener("resize", l);
    }), (h = b) == null || h.disconnect(), b = null, r && cancelAnimationFrame(B);
  };
}
const Vs = (e, t, l) => {
  const a = /* @__PURE__ */ new Map(), n = { platform: xs, ...l }, o = { ...n.platform, _c: a };
  return hs(e, t, { ...n, platform: o });
};
function wl(e) {
  var t;
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
function Os(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const l = wl(s(e.element));
      return l == null ? {} : ys({
        element: l,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Nn(e, t, l) {
  l === void 0 && (l = {});
  const a = l.whileElementsMounted, n = d(() => {
    var x;
    return (x = s(l.open)) != null ? x : !0;
  }), o = d(() => s(l.middleware)), i = d(() => {
    var x;
    return (x = s(l.placement)) != null ? x : "bottom";
  }), r = d(() => {
    var x;
    return (x = s(l.strategy)) != null ? x : "absolute";
  }), v = d(() => wl(e.value)), p = d(() => wl(t.value)), B = z(null), b = z(null), m = z(r.value), h = z(i.value), $ = El({}), f = z(!1);
  let k;
  function w() {
    v.value == null || p.value == null || Vs(v.value, p.value, {
      middleware: o.value,
      placement: i.value,
      strategy: r.value
    }).then((x) => {
      B.value = x.x, b.value = x.y, m.value = x.strategy, h.value = x.placement, $.value = x.middlewareData, f.value = !0;
    });
  }
  function y() {
    typeof k == "function" && (k(), k = void 0);
  }
  function V() {
    if (y(), a === void 0) {
      w();
      return;
    }
    if (v.value != null && p.value != null) {
      k = a(v.value, p.value, w);
      return;
    }
  }
  function O() {
    n.value || (f.value = !1);
  }
  return ve([o, i, r], w, {
    flush: "sync"
  }), ve([v, p], V, {
    flush: "sync"
  }), ve(n, O, {
    flush: "sync"
  }), Ya() && Ja(y), {
    x: vt(B),
    y: vt(b),
    strategy: vt(m),
    placement: vt(h),
    middlewareData: vt($),
    isPositioned: vt(f),
    update: w
  };
}
const Ps = /* @__PURE__ */ new Set([
  "background",
  "cite",
  "href",
  "itemtype",
  "longdesc",
  "poster",
  "src",
  "xlink:href"
]), Es = /^aria-[\w-]*$/i, Is = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Fs = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ls = (e, t) => {
  const l = e.nodeName.toLowerCase();
  return t.includes(l) ? Ps.has(l) ? !!(Is.test(e.nodeValue || "") || Fs.test(e.nodeValue || "")) : !0 : t.filter((a) => a instanceof RegExp).some((a) => a.test(l));
}, gt = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", Es],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}, bt = (e, t, l) => {
  if (!e.length)
    return e;
  if (l && typeof l == "function")
    return l(e);
  const n = new window.DOMParser().parseFromString(e, "text/html"), o = n.body.querySelectorAll("*");
  for (const i of o) {
    const r = i.nodeName.toLowerCase();
    if (!Object.keys(t).includes(r)) {
      i.remove();
      continue;
    }
    const v = i.attributes, p = [...t["*"] || [], ...t[r] || []];
    for (const B of v)
      Ls(B, p) || i.removeAttribute(B.nodeName);
  }
  return n.body.innerHTML;
};
var Ns = Object.defineProperty, zs = Object.defineProperties, Rs = Object.getOwnPropertyDescriptors, fa = Object.getOwnPropertySymbols, Hs = Object.prototype.hasOwnProperty, Ms = Object.prototype.propertyIsEnumerable, va = (e, t, l) => t in e ? Ns(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Ds = (e, t) => {
  for (var l in t || (t = {}))
    Hs.call(t, l) && va(e, l, t[l]);
  if (fa)
    for (var l of fa(t))
      Ms.call(t, l) && va(e, l, t[l]);
  return e;
}, js = (e, t) => zs(e, Rs(t));
function zn(e, t) {
  var l;
  const a = El();
  return xe(() => {
    a.value = e();
  }, js(Ds({}, t), {
    flush: (l = t == null ? void 0 : t.flush) != null ? l : "sync"
  })), jt(a);
}
var ma;
const Jt = typeof window < "u", qs = (e) => typeof e < "u", ql = (e) => typeof e == "function", Gs = (e) => typeof e == "string", Zt = () => {
}, Ws = Jt && ((ma = window == null ? void 0 : window.navigator) == null ? void 0 : ma.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Se(e) {
  return typeof e == "function" ? e() : s(e);
}
function Us(e, t) {
  function l(...a) {
    return new Promise((n, o) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(n).catch(o);
    });
  }
  return l;
}
const Rn = (e) => e();
function Xs(e = Rn) {
  const t = z(!0);
  function l() {
    t.value = !1;
  }
  function a() {
    t.value = !0;
  }
  const n = (...o) => {
    t.value && e(...o);
  };
  return { isActive: jt(t), pause: l, resume: a, eventFilter: n };
}
function Ks(e) {
  return e;
}
function Qt(e) {
  return Ya() ? (Ja(e), !0) : !1;
}
function Ys(e) {
  return typeof e == "function" ? d(e) : z(e);
}
function Hn(e, t = !0) {
  Il() ? Ne(e) : t ? e() : Ie(e);
}
function Mn(e, t = 1e3, l = {}) {
  const {
    immediate: a = !0,
    immediateCallback: n = !1
  } = l;
  let o = null;
  const i = z(!1);
  function r() {
    o && (clearInterval(o), o = null);
  }
  function v() {
    i.value = !1, r();
  }
  function p() {
    const B = Se(t);
    B <= 0 || (i.value = !0, n && e(), r(), o = setInterval(e, B));
  }
  if (a && Jt && p(), wt(t) || ql(t)) {
    const B = ve(t, () => {
      i.value && Jt && p();
    });
    Qt(B);
  }
  return Qt(v), {
    isActive: i,
    pause: v,
    resume: p
  };
}
function ht(e, t = {}) {
  const {
    method: l = "parseFloat",
    radix: a,
    nanToZero: n
  } = t;
  return d(() => {
    let o = Se(e);
    return typeof o == "string" && (o = Number[l](o, a)), n && isNaN(o) && (o = 0), o;
  });
}
var pa = Object.getOwnPropertySymbols, Js = Object.prototype.hasOwnProperty, Zs = Object.prototype.propertyIsEnumerable, Qs = (e, t) => {
  var l = {};
  for (var a in e)
    Js.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
  if (e != null && pa)
    for (var a of pa(e))
      t.indexOf(a) < 0 && Zs.call(e, a) && (l[a] = e[a]);
  return l;
};
function er(e, t, l = {}) {
  const a = l, {
    eventFilter: n = Rn
  } = a, o = Qs(a, [
    "eventFilter"
  ]);
  return ve(e, Us(n, t), o);
}
var tr = Object.defineProperty, lr = Object.defineProperties, ar = Object.getOwnPropertyDescriptors, el = Object.getOwnPropertySymbols, Dn = Object.prototype.hasOwnProperty, jn = Object.prototype.propertyIsEnumerable, ga = (e, t, l) => t in e ? tr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, nr = (e, t) => {
  for (var l in t || (t = {}))
    Dn.call(t, l) && ga(e, l, t[l]);
  if (el)
    for (var l of el(t))
      jn.call(t, l) && ga(e, l, t[l]);
  return e;
}, or = (e, t) => lr(e, ar(t)), sr = (e, t) => {
  var l = {};
  for (var a in e)
    Dn.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
  if (e != null && el)
    for (var a of el(e))
      t.indexOf(a) < 0 && jn.call(e, a) && (l[a] = e[a]);
  return l;
};
function rr(e, t, l = {}) {
  const a = l, {
    eventFilter: n
  } = a, o = sr(a, [
    "eventFilter"
  ]), { eventFilter: i, pause: r, resume: v, isActive: p } = Xs(n);
  return { stop: er(e, t, or(nr({}, o), {
    eventFilter: i
  })), pause: r, resume: v, isActive: p };
}
function rt(e) {
  var t;
  const l = Se(e);
  return (t = l == null ? void 0 : l.$el) != null ? t : l;
}
const Ze = Jt ? window : void 0;
function we(...e) {
  let t, l, a, n;
  if (Gs(e[0]) || Array.isArray(e[0]) ? ([l, a, n] = e, t = Ze) : [t, l, a, n] = e, !t)
    return Zt;
  Array.isArray(l) || (l = [l]), Array.isArray(a) || (a = [a]);
  const o = [], i = () => {
    o.forEach((B) => B()), o.length = 0;
  }, r = (B, b, m, h) => (B.addEventListener(b, m, h), () => B.removeEventListener(b, m, h)), v = ve(() => [rt(t), Se(n)], ([B, b]) => {
    i(), B && o.push(...l.flatMap((m) => a.map((h) => r(B, m, h, b))));
  }, { immediate: !0, flush: "post" }), p = () => {
    v(), i();
  };
  return Qt(p), p;
}
let ba = !1;
function qn(e, t, l = {}) {
  const { window: a = Ze, ignore: n = [], capture: o = !0, detectIframe: i = !1 } = l;
  if (!a)
    return;
  Ws && !ba && (ba = !0, Array.from(a.document.body.children).forEach((m) => m.addEventListener("click", Zt)));
  let r = !0;
  const v = (m) => n.some((h) => {
    if (typeof h == "string")
      return Array.from(a.document.querySelectorAll(h)).some(($) => $ === m.target || m.composedPath().includes($));
    {
      const $ = rt(h);
      return $ && (m.target === $ || m.composedPath().includes($));
    }
  }), B = [
    we(a, "click", (m) => {
      const h = rt(e);
      if (!(!h || h === m.target || m.composedPath().includes(h))) {
        if (m.detail === 0 && (r = !v(m)), !r) {
          r = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: o }),
    we(a, "pointerdown", (m) => {
      const h = rt(e);
      h && (r = !m.composedPath().includes(h) && !v(m));
    }, { passive: !0 }),
    i && we(a, "blur", (m) => {
      var h;
      const $ = rt(e);
      ((h = a.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !($ != null && $.contains(a.document.activeElement)) && t(m);
    })
  ].filter(Boolean);
  return () => B.forEach((m) => m());
}
function ir(e, t = !1) {
  const l = z(), a = () => l.value = !!e();
  return a(), Hn(a, t), l;
}
function ur(e, t = {}) {
  const { window: l = Ze } = t, a = ir(() => l && "matchMedia" in l && typeof l.matchMedia == "function");
  let n;
  const o = z(!1), i = () => {
    n && ("removeEventListener" in n ? n.removeEventListener("change", r) : n.removeListener(r));
  }, r = () => {
    a.value && (i(), n = l.matchMedia(Ys(e).value), o.value = n.matches, "addEventListener" in n ? n.addEventListener("change", r) : n.addListener(r));
  };
  return xe(r), Qt(() => i()), o;
}
function dr(e) {
  return JSON.parse(JSON.stringify(e));
}
const kl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Sl = "__vueuse_ssr_handlers__";
kl[Sl] = kl[Sl] || {};
const cr = kl[Sl];
function Gn(e, t) {
  return cr[e] || t;
}
function fr(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var vr = Object.defineProperty, ha = Object.getOwnPropertySymbols, mr = Object.prototype.hasOwnProperty, pr = Object.prototype.propertyIsEnumerable, ya = (e, t, l) => t in e ? vr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Ba = (e, t) => {
  for (var l in t || (t = {}))
    mr.call(t, l) && ya(e, l, t[l]);
  if (ha)
    for (var l of ha(t))
      pr.call(t, l) && ya(e, l, t[l]);
  return e;
};
const gr = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, $a = "vueuse-storage";
function br(e, t, l, a = {}) {
  var n;
  const {
    flush: o = "pre",
    deep: i = !0,
    listenToStorageChanges: r = !0,
    writeDefaults: v = !0,
    mergeDefaults: p = !1,
    shallow: B,
    window: b = Ze,
    eventFilter: m,
    onError: h = (F) => {
      console.error(F);
    }
  } = a, $ = (B ? El : z)(t);
  if (!l)
    try {
      l = Gn("getDefaultStorage", () => {
        var F;
        return (F = Ze) == null ? void 0 : F.localStorage;
      })();
    } catch (F) {
      h(F);
    }
  if (!l)
    return $;
  const f = Se(t), k = fr(f), w = (n = a.serializer) != null ? n : gr[k], { pause: y, resume: V } = rr($, () => O($.value), { flush: o, deep: i, eventFilter: m });
  return b && r && (we(b, "storage", A), we(b, $a, S)), A(), $;
  function O(F) {
    try {
      if (F == null)
        l.removeItem(e);
      else {
        const C = w.write(F), I = l.getItem(e);
        I !== C && (l.setItem(e, C), b && b.dispatchEvent(new CustomEvent($a, {
          detail: {
            key: e,
            oldValue: I,
            newValue: C,
            storageArea: l
          }
        })));
      }
    } catch (C) {
      h(C);
    }
  }
  function x(F) {
    const C = F ? F.newValue : l.getItem(e);
    if (C == null)
      return v && f !== null && l.setItem(e, w.write(f)), f;
    if (!F && p) {
      const I = w.read(C);
      return ql(p) ? p(I, f) : k === "object" && !Array.isArray(I) ? Ba(Ba({}, f), I) : I;
    } else
      return typeof C != "string" ? C : w.read(C);
  }
  function S(F) {
    A(F.detail);
  }
  function A(F) {
    if (!(F && F.storageArea !== l)) {
      if (F && F.key == null) {
        $.value = f;
        return;
      }
      if (!(F && F.key !== e)) {
        y();
        try {
          $.value = x(F);
        } catch (C) {
          h(C);
        } finally {
          F ? Ie(V) : V();
        }
      }
    }
  }
}
function hr(e) {
  return ur("(prefers-color-scheme: dark)", e);
}
var yr = Object.defineProperty, wa = Object.getOwnPropertySymbols, Br = Object.prototype.hasOwnProperty, $r = Object.prototype.propertyIsEnumerable, ka = (e, t, l) => t in e ? yr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, wr = (e, t) => {
  for (var l in t || (t = {}))
    Br.call(t, l) && ka(e, l, t[l]);
  if (wa)
    for (var l of wa(t))
      $r.call(t, l) && ka(e, l, t[l]);
  return e;
};
function kr(e = {}) {
  const {
    selector: t = "html",
    attribute: l = "class",
    initialValue: a = "auto",
    window: n = Ze,
    storage: o,
    storageKey: i = "vueuse-color-scheme",
    listenToStorageChanges: r = !0,
    storageRef: v,
    emitAuto: p
  } = e, B = wr({
    auto: "",
    light: "light",
    dark: "dark"
  }, e.modes || {}), b = hr({ window: n }), m = d(() => b.value ? "dark" : "light"), h = v || (i == null ? z(a) : br(i, a, o, { window: n, listenToStorageChanges: r })), $ = d({
    get() {
      return h.value === "auto" && !p ? m.value : h.value;
    },
    set(y) {
      h.value = y;
    }
  }), f = Gn("updateHTMLAttrs", (y, V, O) => {
    const x = n == null ? void 0 : n.document.querySelector(y);
    if (x)
      if (V === "class") {
        const S = O.split(/\s/g);
        Object.values(B).flatMap((A) => (A || "").split(/\s/g)).filter(Boolean).forEach((A) => {
          S.includes(A) ? x.classList.add(A) : x.classList.remove(A);
        });
      } else
        x.setAttribute(V, O);
  });
  function k(y) {
    var V;
    const O = y === "auto" ? m.value : y;
    f(t, l, (V = B[O]) != null ? V : O);
  }
  function w(y) {
    e.onChanged ? e.onChanged(y, k) : k(y);
  }
  return ve($, w, { flush: "post", immediate: !0 }), p && ve(m, () => w($.value), { flush: "post" }), Hn(() => w($.value)), $;
}
function Ye(e, t = {}) {
  const { initialValue: l = !1 } = t, a = z(!1), n = d(() => rt(e));
  we(n, "focus", () => a.value = !0), we(n, "blur", () => a.value = !1);
  const o = d({
    get: () => a.value,
    set(i) {
      var r, v;
      !i && a.value ? (r = n.value) == null || r.blur() : i && !a.value && ((v = n.value) == null || v.focus());
    }
  });
  return ve(n, () => {
    o.value = l;
  }, { immediate: !0, flush: "post" }), { focused: o };
}
function Sr(e = {}) {
  const {
    type: t = "page",
    touch: l = !0,
    resetOnTouchEnds: a = !1,
    initialValue: n = { x: 0, y: 0 },
    window: o = Ze,
    eventFilter: i
  } = e, r = z(n.x), v = z(n.y), p = z(null), B = (f) => {
    t === "page" ? (r.value = f.pageX, v.value = f.pageY) : t === "client" ? (r.value = f.clientX, v.value = f.clientY) : t === "movement" && (r.value = f.movementX, v.value = f.movementY), p.value = "mouse";
  }, b = () => {
    r.value = n.x, v.value = n.y;
  }, m = (f) => {
    if (f.touches.length > 0) {
      const k = f.touches[0];
      t === "page" ? (r.value = k.pageX, v.value = k.pageY) : t === "client" && (r.value = k.clientX, v.value = k.clientY), p.value = "touch";
    }
  }, h = (f) => i === void 0 ? B(f) : i(() => B(f), {}), $ = (f) => i === void 0 ? m(f) : i(() => m(f), {});
  return o && (we(o, "mousemove", h, { passive: !0 }), we(o, "dragover", h, { passive: !0 }), l && t !== "movement" && (we(o, "touchstart", $, { passive: !0 }), we(o, "touchmove", $, { passive: !0 }), a && we(o, "touchend", b, { passive: !0 }))), {
    x: r,
    y: v,
    sourceType: p
  };
}
function Sa(e, t = {}) {
  const {
    handleOutside: l = !0,
    window: a = Ze
  } = t, { x: n, y: o, sourceType: i } = Sr(t), r = z(e ?? (a == null ? void 0 : a.document.body)), v = z(0), p = z(0), B = z(0), b = z(0), m = z(0), h = z(0), $ = z(!0);
  let f = () => {
  };
  return a && (f = ve([r, n, o], () => {
    const k = rt(r);
    if (!k)
      return;
    const {
      left: w,
      top: y,
      width: V,
      height: O
    } = k.getBoundingClientRect();
    B.value = w + a.pageXOffset, b.value = y + a.pageYOffset, m.value = O, h.value = V;
    const x = n.value - B.value, S = o.value - b.value;
    $.value = V === 0 || O === 0 || x < 0 || S < 0 || x > V || S > O, (l || !$.value) && (v.value = x, p.value = S);
  }, { immediate: !0 }), we(document, "mouseleave", () => {
    $.value = !0;
  })), {
    x: n,
    y: o,
    sourceType: i,
    elementX: v,
    elementY: p,
    elementPositionX: B,
    elementPositionY: b,
    elementHeight: m,
    elementWidth: h,
    isOutside: $,
    stop: f
  };
}
var st;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(st || (st = {}));
function Cr(e, t = {}) {
  const {
    threshold: l = 50,
    onSwipe: a,
    onSwipeEnd: n,
    onSwipeStart: o,
    passive: i = !0,
    window: r = Ze
  } = t, v = ut({ x: 0, y: 0 }), p = ut({ x: 0, y: 0 }), B = d(() => v.x - p.x), b = d(() => v.y - p.y), { max: m, abs: h } = Math, $ = d(() => m(h(B.value), h(b.value)) >= l), f = z(!1), k = d(() => $.value ? h(B.value) > h(b.value) ? B.value > 0 ? st.LEFT : st.RIGHT : b.value > 0 ? st.UP : st.DOWN : st.NONE), w = (C) => [C.touches[0].clientX, C.touches[0].clientY], y = (C, I) => {
    v.x = C, v.y = I;
  }, V = (C, I) => {
    p.x = C, p.y = I;
  };
  let O;
  const x = Tr(r == null ? void 0 : r.document);
  i ? O = x ? { passive: !0 } : { capture: !1 } : O = x ? { passive: !1, capture: !0 } : { capture: !0 };
  const S = (C) => {
    f.value && (n == null || n(C, k.value)), f.value = !1;
  }, A = [
    we(e, "touchstart", (C) => {
      O.capture && !O.passive && C.preventDefault();
      const [I, E] = w(C);
      y(I, E), V(I, E), o == null || o(C);
    }, O),
    we(e, "touchmove", (C) => {
      const [I, E] = w(C);
      V(I, E), !f.value && $.value && (f.value = !0), f.value && (a == null || a(C));
    }, O),
    we(e, "touchend", S, O),
    we(e, "touchcancel", S, O)
  ];
  return {
    isPassiveEventSupported: x,
    isSwiping: f,
    direction: k,
    coordsStart: v,
    coordsEnd: p,
    lengthX: B,
    lengthY: b,
    stop: () => A.forEach((C) => C())
  };
}
function Tr(e) {
  if (!e)
    return !1;
  let t = !1;
  const l = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", Zt, l), e.removeEventListener("x", Zt), t;
}
var _r = Object.defineProperty, Ca = Object.getOwnPropertySymbols, xr = Object.prototype.hasOwnProperty, Ar = Object.prototype.propertyIsEnumerable, Ta = (e, t, l) => t in e ? _r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Vr = (e, t) => {
  for (var l in t || (t = {}))
    xr.call(t, l) && Ta(e, l, t[l]);
  if (Ca)
    for (var l of Ca(t))
      Ar.call(t, l) && Ta(e, l, t[l]);
  return e;
};
const Or = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Vr({
  linear: Ks
}, Or);
function Te(e, t, l, a = {}) {
  var n, o, i;
  const {
    clone: r = !1,
    passive: v = !1,
    eventName: p,
    deep: B = !1,
    defaultValue: b
  } = a, m = Il(), h = l || (m == null ? void 0 : m.emit) || ((n = m == null ? void 0 : m.$emit) == null ? void 0 : n.bind(m)) || ((i = (o = m == null ? void 0 : m.proxy) == null ? void 0 : o.$emit) == null ? void 0 : i.bind(m == null ? void 0 : m.proxy));
  let $ = p;
  t || (t = "modelValue"), $ = p || $ || `update:${t.toString()}`;
  const f = (w) => r ? ql(r) ? r(w) : dr(w) : w, k = () => qs(e[t]) ? f(e[t]) : b;
  if (v) {
    const w = k(), y = z(w);
    return ve(() => e[t], (V) => y.value = f(V)), ve(y, (V) => {
      (V !== e[t] || B) && h($, V);
    }, { deep: B }), y;
  } else
    return d({
      get() {
        return k();
      },
      set(w) {
        h($, w);
      }
    });
}
const Lt = (e) => zn(() => e.value ? `justify-content-${e.value}` : "");
function c(e) {
  return zn(
    () => e.value === void 0 || e.value === null ? e.value : nn(e.value)
  );
}
const Wn = {
  items: ut([]),
  reset() {
    this.items = ut([]);
  }
}, Un = (e) => {
  e.provide(yn, Wn);
}, Xn = () => Ge(yn, null) ?? Wn, Pr = (e = {}) => {
  const t = "data-bs-theme", l = "body";
  return kr({
    attribute: t,
    selector: l,
    storageKey: e.persist === !0 ? `${e.attribute ?? t}-${e.selector ?? l}` : null,
    ...e
  });
}, Er = (e, t = z(1e3), l = {}) => {
  const a = z(!1), n = z(0), o = z(Se(e)), i = z(Se(t)), r = d(() => Math.ceil(o.value / i.value)), v = d(
    () => b.value || a.value ? Math.round(o.value - n.value * i.value) : 0
  ), { pause: p, resume: B, isActive: b } = Mn(
    () => n.value = n.value + 1,
    t,
    l
  ), m = () => {
    a.value = !1, n.value = 0, B();
  }, h = () => {
    a.value = !1, n.value = r.value;
  };
  xe(() => {
    const k = Se(e), w = o.value;
    k !== w && (o.value = k, h(), m());
  }), xe(() => {
    const k = Se(t), w = i.value;
    k !== w && (i.value = k, h(), m());
  }), xe(() => {
    n.value > r.value && (n.value = r.value), n.value === r.value && p();
  });
  const $ = () => {
    b.value !== !1 && (a.value = !0, p());
  }, f = () => {
    n.value !== r.value && (a.value = !1, B());
  };
  return {
    isActive: jt(b),
    isPaused: jt(a),
    restart: m,
    stop: h,
    pause: $,
    resume: f,
    value: v
  };
}, Kn = (e) => {
  const t = z(Se(e));
  return xe(() => {
    const l = Se(e), a = t.value;
    l !== a && (t.value = l);
  }), d(() => ({
    "form-check": t.value.plain === !1 && t.value.button === !1,
    "form-check-inline": t.value.inline === !0,
    "form-switch": t.value.switch === !0,
    [`form-control-${t.value.size}`]: t.value.size !== void 0 && t.value.size !== "md"
  }));
}, Yn = (e) => {
  const t = z(Se(e));
  return xe(() => {
    const l = Se(e), a = t.value;
    l !== a && (t.value = l);
  }), d(() => ({
    "form-check-input": t.value.plain === !1 && t.value.button === !1,
    "is-valid": t.value.state === !0,
    "is-invalid": t.value.state === !1,
    "btn-check": t.value.button === !0
  }));
}, Jn = (e) => {
  const t = z(Se(e));
  return xe(() => {
    const l = Se(e), a = t.value;
    l !== a && (t.value = l);
  }), d(() => ({
    "form-check-label": t.value.plain === !1 && t.value.button === !1,
    btn: t.value.button === !0,
    [`btn-${t.value.buttonVariant}`]: t.value.button === !0 && t.value.buttonVariant !== void 0,
    [`btn-${t.value.size}`]: t.value.button && t.value.size && t.value.size !== "md"
  }));
}, Zn = (e) => {
  const t = z(Se(e));
  return xe(() => {
    const l = Se(e), a = t.value;
    l !== a && (t.value = l);
  }), d(() => ({
    "aria-invalid": il(t.value.ariaInvalid, t.value.state),
    "aria-required": t.value.required === !0 ? !0 : void 0
  }));
}, Qn = (e) => {
  const t = z(Se(e));
  return xe(() => {
    const l = Se(e), a = t.value;
    l !== a && (t.value = l);
  }), d(() => ({
    "was-validated": t.value.validated === !0,
    "btn-group": t.value.buttons === !0 && t.value.stacked === !1,
    "btn-group-vertical": t.value.stacked === !0,
    // Does this need items.buttons?
    [`btn-group-${t.value.size}`]: t.value.size !== void 0
  }));
}, ke = (e, t) => d(() => (e == null ? void 0 : e.value) || Qe(t)), eo = {
  ariaInvalid: {
    type: [Boolean, String],
    default: void 0
  },
  autocomplete: { type: String, required: !1 },
  autofocus: { type: Boolean, default: !1 },
  disabled: { type: Boolean, default: !1 },
  form: { type: String, required: !1 },
  formatter: { type: Function, required: !1 },
  id: { type: String, required: !1 },
  lazy: { type: Boolean, default: !1 },
  lazyFormatter: { type: Boolean, default: !1 },
  list: { type: String, required: !1 },
  modelValue: { type: [String, Number], default: "" },
  name: { type: String, required: !1 },
  number: { type: Boolean, default: !1 },
  placeholder: { type: String, required: !1 },
  plaintext: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  required: { type: Boolean, default: !1 },
  size: { type: String, required: !1 },
  state: { type: Boolean, default: null },
  trim: { type: Boolean, default: !1 }
}, to = (e, t) => {
  const l = z();
  let a = null, n = !0;
  const o = ke(u(e, "id"), "input"), i = (f, k, w = !1) => (f = String(f), typeof e.formatter == "function" && (!e.lazyFormatter || w) ? (n = !1, e.formatter(f, k)) : f), r = (f) => e.trim ? f.trim() : e.number ? Number.parseFloat(f) : f, v = () => {
    var f;
    e.autofocus && ((f = l.value) == null || f.focus());
  };
  Ne(() => {
    l.value && (l.value.value = e.modelValue), Ie(() => {
      v();
    });
  }), Za(() => {
    Ie(() => {
    });
  });
  const p = d(
    () => il(e.ariaInvalid, e.state ?? void 0)
  ), B = (f) => {
    const { value: k } = f.target, w = i(k, f);
    if (w === !1 || f.defaultPrevented) {
      f.preventDefault();
      return;
    }
    if (e.lazy)
      return;
    const y = r(w);
    e.modelValue !== y && (a = k, t("update:modelValue", y)), t("input", w);
  }, b = (f) => {
    const { value: k } = f.target, w = i(k, f);
    if (w === !1 || f.defaultPrevented) {
      f.preventDefault();
      return;
    }
    if (!e.lazy)
      return;
    a = k, t("update:modelValue", w);
    const y = r(w);
    e.modelValue !== y && t("change", w);
  }, m = (f) => {
    if (t("blur", f), !e.lazy && !e.lazyFormatter)
      return;
    const { value: k } = f.target, w = i(k, f, !0);
    a = k, t("update:modelValue", w);
  }, h = () => {
    var f;
    e.disabled || (f = l.value) == null || f.focus();
  }, $ = () => {
    var f;
    e.disabled || (f = l.value) == null || f.blur();
  };
  return ve(
    () => e.modelValue,
    (f) => {
      l.value && (l.value.value = a && n ? a : f, a = null, n = !0);
    }
  ), {
    input: l,
    computedId: o,
    computedAriaInvalid: p,
    onInput: B,
    onChange: b,
    onBlur: m,
    focus: h,
    blur: $
  };
}, pt = (e, t) => {
  if (!e)
    return e;
  if (t in e)
    return e[t];
  const l = t.split(".");
  return pt(e[l[0]], l.splice(1).join("."));
}, pl = (e, t = null, l, a) => {
  if (Object.prototype.toString.call(e) === "[object Object]") {
    const n = pt(e, a.valueField), o = pt(e, a.textField), i = pt(e, a.htmlField), r = pt(e, a.disabledField), v = e[a.optionsField] || null;
    return v !== null ? {
      label: String(pt(e, a.labelField) || o),
      options: Gl(v, l, a)
    } : {
      value: typeof n > "u" ? t || o : n,
      text: String(typeof o > "u" ? t : o),
      html: i,
      disabled: !!r
    };
  }
  return {
    value: t || e,
    text: String(e),
    disabled: !1
  };
}, Gl = (e, t, l) => Array.isArray(e) ? e.map((a) => pl(a, null, t, l)) : Object.prototype.toString.call(e) === "[object Object]" ? (console.warn(
  `[BootstrapVue warn]: ${t} - Setting prop "options" to an object is deprecated. Use the array format instead.`
), Object.keys(e).map((a) => {
  const n = e[a];
  switch (typeof n) {
    case "object":
      return pl(n.text, String(n.value), t, l);
    default:
      return pl(n, String(a), t, l);
  }
})) : [], Ir = ["id"], Fr = ["innerHTML"], Lr = ["innerHTML"], Nr = ["id"], zr = ["innerHTML"], Rr = ["innerHTML"], Hr = {
  inheritAttrs: !1
}, Wl = /* @__PURE__ */ R({
  ...Hr,
  __name: "BPopover",
  props: {
    modelValue: { default: !1 },
    container: { default: null },
    target: { type: [Function, String, null], default: null },
    reference: { type: [Function, String, null], default: null },
    content: null,
    id: null,
    title: null,
    delay: { default: () => ({ show: 100, hide: 300 }) },
    click: { default: !1 },
    manual: { default: !1 },
    variant: { default: void 0 },
    offset: { default: null },
    customClass: { default: "" },
    placement: { default: "top" },
    strategy: { default: "absolute" },
    floatingMiddleware: null,
    noFlip: { default: !1 },
    noShift: { default: !1 },
    noFade: { default: !1 },
    noAutoClose: { default: !1 },
    hide: { default: !0 },
    realtime: { default: !1 },
    inline: { default: !1 },
    tooltip: { default: !1 },
    html: { default: !1 }
  },
  emits: ["show", "shown", "hide", "hidden", "hide-prevented", "show-prevented", "update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, a = c(u(l, "modelValue")), n = z(a.value);
    xe(() => {
      t("update:modelValue", n.value);
    }), ve(a, () => {
      a.value !== n.value && (a.value ? ee() : oe(new Event("update:modelValue")));
    });
    const o = ke(u(l, "id"), "popover"), i = c(u(l, "click")), r = c(u(l, "manual")), v = c(u(l, "noShift")), p = c(u(l, "noFlip")), B = c(u(l, "noFade")), b = c(u(l, "noAutoClose")), m = c(u(l, "hide")), h = c(u(l, "realtime")), $ = c(u(l, "inline")), f = c(u(l, "tooltip")), k = c(u(l, "html")), w = z(!1), y = z(null), V = z(null), O = z(null), x = z(null), S = z(null), A = (G) => {
      if (typeof G == "string" || G instanceof HTMLElement)
        return G;
      if (typeof G == "function")
        return G().$el ? G().$el : G();
      if (typeof G < "u")
        return G.$el;
    }, F = (G) => {
      if (G) {
        if (typeof G == "string") {
          const ie = document.getElementById(G);
          return ie || void 0;
        }
        return G;
      }
    }, C = d(
      () => l.title ? bt(l.title, gt) : ""
    ), I = d(
      () => l.content ? bt(l.content, gt) : ""
    ), E = d(() => {
      if (l.floatingMiddleware !== void 0)
        return l.floatingMiddleware;
      const G = l.offset ? l.offset : f.value ? 0 : 10, ie = [xn(G)];
      return p.value === !1 && ie.push(_n()), v.value === !1 && ie.push(An()), m.value === !0 && ie.push(ks({ padding: 10 })), $.value === !0 && ie.push(Ss()), ie.push(Os({ element: O, padding: 10 })), ie;
    }), W = d(() => l.placement), { x: D, y: J, strategy: ae, middlewareData: Z, placement: te, update: ce } = Nn(V, y, {
      placement: W,
      middleware: E,
      strategy: l.strategy,
      whileElementsMounted: (...G) => As(...G, { animationFrame: h.value })
    }), pe = z({ position: "absolute" });
    ve(Z, () => {
      var G;
      if (m.value === !0 && ((G = Z.value.hide) != null && G.referenceHidden ? w.value = !0 : w.value = !1), Z.value.arrow) {
        const { x: ie, y: De } = Z.value.arrow;
        pe.value = {
          position: "absolute",
          top: De ? `${De}px` : "",
          left: ie ? `${ie}px` : ""
        };
      }
    });
    const be = d(() => {
      const G = f.value ? "tooltip" : "popover";
      return [
        G,
        `b-${G}`,
        {
          [`b-${G}-${l.variant}`]: l.variant !== void 0,
          show: n.value && !w.value,
          ["pe-none"]: !n.value,
          fade: !B.value,
          ["d-none"]: !n.value && B.value,
          [`${l.customClass}`]: l.customClass !== void 0,
          [`bs-${G}-${Dr(te.value)}`]: te.value !== void 0
        }
      ];
    }), { isOutside: ne } = Sa(y), { isOutside: de } = Sa(x), L = (G) => {
      const ie = G ?? new Event("click");
      n.value ? oe(ie) : ee();
    }, N = (G, ie = {}) => new Et(G, {
      cancelable: !1,
      target: y.value || null,
      relatedTarget: null,
      trigger: null,
      ...ie,
      componentId: o.value
    }), ee = () => {
      var ie;
      const G = N("show", { cancelable: !0 });
      if (t("show", G), G.defaultPrevented) {
        t("show-prevented");
        return;
      }
      setTimeout(
        () => {
          ce(), n.value = !0, Ie(() => {
            t("shown", N("shown"));
          });
        },
        typeof l.delay == "number" ? l.delay : ((ie = l.delay) == null ? void 0 : ie.show) || 0
      );
    }, oe = (G) => {
      var Pe;
      const ie = N("hide", { cancelable: !0 });
      if (t("hide", ie), ie.defaultPrevented) {
        t("hide-prevented");
        return;
      }
      const De = typeof l.delay == "number" ? l.delay : ((Pe = l.delay) == null ? void 0 : Pe.hide) || 100;
      setTimeout(() => {
        var P;
        (G == null ? void 0 : G.type) === "click" || ne.value && de.value && !((P = y.value) != null && P.contains(document == null ? void 0 : document.activeElement)) ? (n.value = !1, Ie(() => {
          t("hidden", N("hidden"));
        })) : setTimeout(() => {
          oe(G);
        }, De);
      }, De);
    }, he = () => {
      var G;
      if (l.target) {
        const ie = F(A(l.target));
        ie ? x.value = ie : console.warn("Target element not found", l.target);
      } else
        x.value = (G = S.value) == null ? void 0 : G.nextElementSibling;
      if (l.reference) {
        const ie = F(A(l.reference));
        ie ? V.value = ie : console.warn("Reference element not found", l.reference);
      } else
        V.value = x.value;
      !x.value || r.value || zl && (i.value && x.value.addEventListener("click", L), !i.value && x.value.addEventListener("pointerenter", ee), !i.value && x.value.addEventListener("pointerleave", oe), !i.value && x.value.addEventListener("focus", ee), !i.value && x.value.addEventListener("blur", oe));
    }, _e = () => {
      x.value && (x.value.removeEventListener("click", L), x.value.removeEventListener("pointerenter", ee), x.value.removeEventListener("pointerleave", oe), x.value.removeEventListener("focus", ee), x.value.removeEventListener("blur", oe));
    };
    return qn(
      y,
      () => {
        n.value && i.value && !b.value && !r.value && oe(new Event("clickOutside"));
      },
      { ignore: [x] }
    ), ve(
      () => [l.click, l.target, l.reference],
      () => {
        _e(), he();
      }
    ), Ne(he), Qa(_e), (G, ie) => (g(), T(ue, null, [
      U("span", {
        ref_key: "placeholder",
        ref: S
      }, null, 512),
      _(G.$slots, "target", $e(Ae({ show: ee, hide: oe, toggle: L, showState: n.value }))),
      e.container ? (g(), j(Fl, {
        key: 0,
        to: e.container
      }, [
        U("div", Q({ id: e.id }, G.$attrs, {
          ref_key: "element",
          ref: y,
          class: s(be),
          role: "tooltip",
          tabindex: "-1",
          style: {
            position: s(ae),
            top: `${s(J) ?? 0}px`,
            left: `${s(D) ?? 0}px`,
            width: "max-content"
          }
        }), [
          U("div", {
            ref_key: "arrow",
            ref: O,
            class: M(`${s(f) ? "tooltip" : "popover"}-arrow`),
            style: Fe(pe.value),
            "data-popper-arrow": ""
          }, null, 6),
          e.title || G.$slots.title ? (g(), T(ue, { key: 0 }, [
            s(k) ? (g(), T("div", {
              key: 1,
              class: M(s(f) ? "tooltip-inner" : "popover-header"),
              innerHTML: s(C)
            }, null, 10, Fr)) : (g(), T("div", {
              key: 0,
              class: M(s(f) ? "tooltip-inner" : "popover-header")
            }, [
              _(G.$slots, "title", {}, () => [
                se(K(e.title), 1)
              ])
            ], 2))
          ], 64)) : Y("", !0),
          s(f) && !G.$slots.title && !e.title || !s(f) ? (g(), T(ue, { key: 1 }, [
            s(k) ? (g(), T("div", {
              key: 1,
              class: M(s(f) ? "tooltip-inner" : "popover-body"),
              innerHTML: s(I)
            }, null, 10, Lr)) : (g(), T("div", {
              key: 0,
              class: M(s(f) ? "tooltip-inner" : "popover-body")
            }, [
              _(G.$slots, "default", {}, () => [
                se(K(e.content), 1)
              ])
            ], 2))
          ], 64)) : Y("", !0)
        ], 16, Ir)
      ], 8, ["to"])) : (g(), T("div", Q({
        key: 1,
        id: e.id
      }, G.$attrs, {
        ref_key: "element",
        ref: y,
        class: s(be),
        role: "tooltip",
        tabindex: "-1",
        style: {
          position: s(ae),
          top: `${s(J) ?? 0}px`,
          left: `${s(D) ?? 0}px`,
          width: "max-content"
        }
      }), [
        U("div", {
          ref_key: "arrow",
          ref: O,
          class: M(`${s(f) ? "tooltip" : "popover"}-arrow`),
          style: Fe(pe.value),
          "data-popper-arrow": ""
        }, null, 6),
        e.title || G.$slots.title ? (g(), T(ue, { key: 0 }, [
          s(k) ? (g(), T("div", {
            key: 1,
            class: M(s(f) ? "tooltip-inner" : "popover-header"),
            innerHTML: s(C)
          }, null, 10, zr)) : (g(), T("div", {
            key: 0,
            class: M(s(f) ? "tooltip-inner" : "popover-header")
          }, [
            _(G.$slots, "title", {}, () => [
              se(K(e.title), 1)
            ])
          ], 2))
        ], 64)) : Y("", !0),
        s(f) && !G.$slots.title && !e.title || !s(f) ? (g(), T(ue, { key: 1 }, [
          s(k) ? (g(), T("div", {
            key: 1,
            class: M(s(f) ? "tooltip-inner" : "popover-body"),
            innerHTML: s(I)
          }, null, 10, Rr)) : (g(), T("div", {
            key: 0,
            class: M(s(f) ? "tooltip-inner" : "popover-body")
          }, [
            _(G.$slots, "default", {}, () => [
              se(K(e.content), 1)
            ])
          ], 2))
        ], 64)) : Y("", !0)
      ], 16, Nr))
    ], 64));
  }
}), Mr = ({
  top: e,
  end: t,
  start: l,
  alignCenter: a,
  alignEnd: n
}) => {
  const o = e ? "top" : l ? "left" : t ? "right" : "bottom", i = n ? "end" : a ? null : "start";
  return `${o}${i ? `-${i}` : ""}`;
}, Dr = (e) => {
  const [t] = e.split("-");
  switch (t) {
    case "left":
      return "start";
    case "right":
      return "end";
    default:
      return t;
  }
}, tl = (e, t) => {
  if ((typeof e > "u" || typeof e == "object" && !(e != null && e.title) && !(e != null && e.content)) && !t.getAttribute("title"))
    return console.warn(
      "Review tooltip directive usage. Some uses are not defining a title in root component or a value like `v-b-tooltip='{title: \"my title\"}'` nor `v-b-tooltip=\"'my title'\"` to define a title"
    ), {};
  if ((typeof e > "u" || typeof e == "object" && !(e != null && e.title) && !(e != null && e.content)) && (t.getAttribute("title") || t.getAttribute("data-original-title"))) {
    const l = t.getAttribute("title") ?? t.getAttribute("data-original-title");
    if (l && l !== "")
      return t.removeAttribute("title"), t.setAttribute("data-original-title", l), {
        content: bt(l, gt)
      };
  }
  return typeof e == "string" ? {
    content: bt(e, gt)
  } : {
    title: e != null && e.title ? bt(e == null ? void 0 : e.title, gt) : void 0,
    content: e != null && e.content ? bt(e == null ? void 0 : e.content, gt) : void 0
  };
}, ll = (e, t) => ({
  target: () => t,
  modelValue: e.modifiers.show,
  inline: e.modifiers.inline,
  click: e.modifiers.click,
  realtime: e.modifiers.realtime,
  placement: e.modifiers.left ? "left" : e.modifiers.right ? "right" : e.modifiers.bottom ? "bottom" : e.modifiers.top ? "top" : void 0,
  html: !0,
  ...typeof e.value == "object" ? e.value : {},
  title: null,
  content: null
}), lo = (e, t) => {
  var a;
  const l = document.createElement("span");
  t.modifiers.body ? document.body.appendChild(l) : t.modifiers.child ? e.appendChild(l) : (a = e.parentNode) == null || a.insertBefore(l, e.nextSibling), e.$__app = Ro({ render: () => {
    var n;
    return re(Wl, { ...(n = e.$__state) == null ? void 0 : n.value });
  } }), e.$__app.mount(l), e.$__element = l;
}, ao = (e) => {
  var t, l;
  (t = e.$__app) == null || t.unmount(), delete e.$__app, delete e.$__state, (l = e.$__element) == null || l.remove(), delete e.$__element;
}, jr = ["id"], qr = /* @__PURE__ */ R({
  __name: "BAccordion",
  props: {
    flush: { default: !1 },
    free: { default: !1 },
    id: null
  },
  setup(e) {
    const t = e, l = ke(u(t, "id"), "accordion"), a = c(u(t, "flush")), n = c(u(t, "free")), o = d(() => ({
      "accordion-flush": a.value
    }));
    return n.value || at(kn, {
      id: l
    }), (i, r) => (g(), T("div", {
      id: s(l),
      class: M(["accordion", s(o)])
    }, [
      _(i.$slots, "default")
    ], 10, jr));
  }
}), Gr = {
  inheritAttrs: !1
}, no = /* @__PURE__ */ R({
  ...Gr,
  __name: "BCollapse",
  props: {
    accordion: null,
    id: null,
    modelValue: { default: !1 },
    tag: { default: "div" },
    toggle: { default: !1 },
    horizontal: { default: !1 },
    visible: { default: !1 },
    isNav: { default: !1 }
  },
  emits: ["show", "shown", "hide", "hidden", "hide-prevented", "show-prevented", "update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const a = e, n = (S, A = {}) => new Et(S, {
      cancelable: !1,
      target: m.value || null,
      relatedTarget: null,
      trigger: null,
      ...A,
      componentId: b.value
    }), o = Te(a, "modelValue", l, { passive: !0 }), i = c(o), r = c(u(a, "toggle")), v = c(u(a, "horizontal")), p = c(u(a, "isNav")), B = c(u(a, "visible")), b = ke(u(a, "id"), "collapse"), m = z(null), h = z(!1), $ = z(i.value), f = d(() => ({
      show: $.value,
      "navbar-collapse": p.value,
      collapsing: h.value,
      closing: $.value && !i.value,
      "collapse-horizontal": v.value
    })), k = () => o.value = !1, w = () => o.value = !0, y = () => o.value = !i.value, V = () => {
      $.value = !0, h.value = !0;
      const S = n("show", { cancelable: !0 });
      if (l("show", S), S.defaultPrevented) {
        l("show-prevented");
        return;
      }
      Ie(() => {
        m.value !== null && (v.value ? m.value.style.width = `${m.value.scrollWidth}px` : m.value.style.height = `${m.value.scrollHeight}px`, setTimeout(() => {
          h.value = !1, l("shown", n("shown")), m.value !== null && (m.value.style.height = "", m.value.style.width = "");
        }, x(m.value)));
      });
    }, O = () => {
      const S = n("hide", { cancelable: !0 });
      if (l("hide", S), S.defaultPrevented) {
        l("hide-prevented");
        return;
      }
      m.value !== null && (v.value ? m.value.style.width = `${m.value.scrollWidth}px` : m.value.style.height = `${m.value.scrollHeight}px`, m.value.offsetHeight, h.value = !0, Ie(() => {
        m.value !== null && (m.value.style.height = "", m.value.style.width = "", setTimeout(() => {
          $.value = !1, h.value = !1, l("hidden", n("hidden"));
        }, x(m.value)));
      }));
    };
    xe(() => {
      if (i.value === !0) {
        if ($.value)
          return;
        V();
        return;
      }
      O();
    });
    const x = (S) => {
      const A = window.getComputedStyle(S), F = A.transitionDelay.split(",")[0] || "", C = A.transitionDuration.split(",")[0] || "", I = Number(F.slice(0, -1)) * 1e3, E = Number(C.slice(0, -1)) * 1e3;
      return I + E;
    };
    return Ne(() => {
      m.value !== null && !i.value && r.value && Ie(() => {
        o.value = !0;
      });
    }), B.value && (o.value = !0, $.value = !0), xe(() => {
      B.value ? w() : k();
    }), we(m, "bv-toggle", () => {
      o.value = !i.value;
    }), t({
      close: k,
      open: w,
      toggle: y,
      visible: $.value
    }), (S, A) => (g(), T(ue, null, [
      _(S.$slots, "header", $e(Ae({ visible: s(i), toggle: y, open: w, close: k, id: s(b) }))),
      (g(), j(le(e.tag), Q({
        id: s(b),
        ref_key: "element",
        ref: m,
        class: ["collapse", s(f)],
        "is-nav": s(p)
      }, S.$attrs), {
        default: q(() => [
          _(S.$slots, "default", $e(Ae({ visible: s(i), toggle: y, open: w, close: k })))
        ]),
        _: 3
      }, 16, ["id", "class", "is-nav"])),
      _(S.$slots, "footer", $e(Ae({ visible: s(i), toggle: y, open: w, close: k, id: s(b) })))
    ], 64));
  }
}), Wr = { class: "accordion-item" }, Ur = ["aria-expanded", "aria-controls", "onClick"], Xr = { class: "accordion-body" }, Kr = /* @__PURE__ */ R({
  __name: "BAccordionItem",
  props: {
    id: null,
    title: null,
    modelValue: null,
    visible: null,
    headerTag: { default: "h2" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, a = Te(l, "modelValue", t, { passive: !0 }), n = c(u(l, "visible"));
    Ne(() => {
      n.value && (a.value = !0);
    }), xe(() => a.value = n.value);
    const o = Ge(kn, null), i = ke(u(l, "id"), "accordion_item");
    return (r, v) => {
      var p;
      return g(), T("div", Wr, [
        ye(no, {
          id: s(i),
          modelValue: s(a),
          "onUpdate:modelValue": v[0] || (v[0] = (B) => wt(a) ? a.value = B : null),
          class: "accordion-collapse",
          visible: e.visible,
          accordion: ((p = s(o)) == null ? void 0 : p.id.value) ?? void 0,
          "aria-labelledby": `heading${s(i)}`
        }, {
          header: q(({ visible: B, toggle: b }) => [
            (g(), j(le(e.headerTag), {
              id: `heading${s(i)}`,
              class: "accordion-header"
            }, {
              default: q(() => [
                U("button", {
                  class: M(["accordion-button", { collapsed: !B }]),
                  type: "button",
                  "aria-expanded": B ? "true" : "false",
                  "aria-controls": s(i),
                  onClick: b
                }, [
                  _(r.$slots, "title", {}, () => [
                    se(K(e.title), 1)
                  ])
                ], 10, Ur)
              ]),
              _: 2
            }, 1032, ["id"]))
          ]),
          default: q(() => [
            U("div", Xr, [
              _(r.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["id", "modelValue", "visible", "accordion", "aria-labelledby"])
      ]);
    };
  }
}), St = /* @__PURE__ */ R({
  __name: "BTransition",
  props: {
    appear: { default: !1 },
    mode: null,
    noFade: { default: !1 },
    transProps: null
  },
  setup(e) {
    const t = e, l = c(u(t, "appear")), a = c(u(t, "noFade")), n = d(() => {
      const r = {
        name: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveActiveClass: "",
        leaveToClass: "showing",
        enterFromClass: "showing",
        leaveFromClass: ""
      }, v = {
        ...r,
        enterActiveClass: "fade showing",
        leaveActiveClass: "fade showing"
      };
      return a.value ? r : v;
    }), o = d(() => ({ mode: t.mode, css: !0, ...n.value })), i = d(
      () => t.transProps !== void 0 ? {
        // Order matters here since the props.transProps would get overwritten if it came first
        // But the goal of props.transProps is to overwrite base properties
        ...o.value,
        ...t.transProps
      } : l.value ? {
        ...o.value,
        appear: !0,
        appearActiveClass: n.value.enterActiveClass,
        appearToClass: n.value.enterToClass
      } : o.value
    );
    return (r, v) => (g(), j(en, $e(Ae(s(i))), {
      default: q(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yr = ["type", "disabled", "aria-label"], Ct = /* @__PURE__ */ R({
  __name: "BCloseButton",
  props: {
    ariaLabel: { default: "Close" },
    disabled: { default: !1 },
    white: { default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const l = e, a = c(u(l, "disabled")), n = c(u(l, "white")), o = d(() => ({
      "btn-close-white": n.value
    }));
    return (i, r) => (g(), T("button", {
      type: e.type,
      class: M(["btn-close", s(o)]),
      disabled: s(a),
      "aria-label": e.ariaLabel,
      onClick: r[0] || (r[0] = (v) => t("click", v))
    }, null, 10, Yr));
  }
}), Jr = {
  key: 0,
  class: "visually-hidden"
}, cl = /* @__PURE__ */ R({
  __name: "BSpinner",
  props: {
    label: null,
    role: { default: "status" },
    small: { default: !1 },
    tag: { default: "span" },
    type: { default: "border" },
    variant: null
  },
  setup(e) {
    const t = e, l = Oe(), a = c(u(t, "small")), n = d(() => ({
      "spinner-border": t.type === "border",
      "spinner-border-sm": t.type === "border" && a.value,
      "spinner-grow": t.type === "grow",
      "spinner-grow-sm": t.type === "grow" && a.value,
      [`text-${t.variant}`]: t.variant !== void 0
    })), o = d(() => !Ve(l.label));
    return (i, r) => (g(), j(le(e.tag), {
      class: M(s(n)),
      role: e.label || s(o) ? e.role : null,
      "aria-hidden": e.label || s(o) ? null : !0
    }, {
      default: q(() => [
        e.label || s(o) ? (g(), T("span", Jr, [
          _(i.$slots, "label", {}, () => [
            se(K(e.label), 1)
          ])
        ])) : Y("", !0)
      ]),
      _: 3
    }, 8, ["class", "role", "aria-hidden"]));
  }
}), ft = {
  active: { type: [Boolean, String, void 0], default: void 0 },
  activeClass: { type: String, default: "router-link-active" },
  append: { type: [Boolean, String], default: !1 },
  disabled: { type: [Boolean, String], default: !1 },
  event: { type: [String, Array], default: "click" },
  href: { type: String },
  // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
  rel: { type: String, default: null },
  replace: { type: [Boolean, String], default: !1 },
  routerComponentName: { type: String, default: "router-link" },
  routerTag: { type: String, default: "a" },
  target: { type: String, default: "_self" },
  to: { type: [String, Object], default: null }
}, Zr = R({
  props: ft,
  emits: ["click"],
  setup(e, { emit: t, attrs: l }) {
    const a = c(u(e, "active")), n = c(u(e, "append")), o = c(u(e, "disabled")), i = c(u(e, "replace")), r = Il(), v = z(null), p = d(() => {
      const $ = e.routerComponentName.split("-").map((k) => k.charAt(0).toUpperCase() + k.slice(1)).join("");
      return !((r == null ? void 0 : r.appContext.app.component($)) !== void 0) || o.value || !e.to ? "a" : e.routerComponentName;
    }), B = d(() => {
      const $ = "#";
      if (e.href)
        return e.href;
      if (typeof e.to == "string")
        return e.to || $;
      const f = e.to;
      if (Object.prototype.toString.call(f) === "[object Object]" && (f.path || f.query || f.hash)) {
        const k = f.path || "", w = f.query ? `?${Object.keys(f.query).map((V) => `${V}=${f.query[V]}`).join("=")}` : "", y = !f.hash || f.hash.charAt(0) === "#" ? f.hash || "" : `#${f.hash}`;
        return `${k}${w}${y}` || $;
      }
      return $;
    }), b = d(() => ({
      to: e.to,
      href: B.value,
      target: e.target,
      rel: e.target === "_blank" && e.rel === null ? "noopener" : e.rel || null,
      tabindex: o.value ? "-1" : typeof l.tabindex > "u" ? null : l.tabindex,
      "aria-disabled": o.value ? !0 : null
    }));
    return {
      computedLinkClasses: d(() => ({
        active: a.value,
        disabled: o.value
      })),
      tag: p,
      routerAttr: b,
      link: v,
      clicked: ($) => {
        if (o.value) {
          $.preventDefault(), $.stopImmediatePropagation();
          return;
        }
        t("click", $);
      },
      activeBoolean: a,
      appendBoolean: n,
      disabledBoolean: o,
      replaceBoolean: i
    };
  }
}), ze = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [a, n] of t)
    l[a] = n;
  return l;
};
function Qr(e, t, l, a, n, o) {
  return e.tag === "router-link" ? (g(), j(le(e.tag), Q({ key: 0 }, e.routerAttr, { custom: "" }), {
    default: q(({ href: i, navigate: r, isActive: v }) => [
      (g(), j(le(e.routerTag), Q({
        ref: "link",
        href: i,
        class: [(e.activeBoolean ?? v) && e.activeClass]
      }, e.$attrs, { onClick: r }), {
        default: q(() => [
          _(e.$slots, "default")
        ]),
        _: 2
      }, 1040, ["href", "class", "onClick"]))
    ]),
    _: 3
  }, 16)) : (g(), j(le(e.tag), Q({
    key: 1,
    ref: "link",
    class: e.computedLinkClasses
  }, e.routerAttr, { onClick: e.clicked }), {
    default: q(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "onClick"]));
}
const Le = /* @__PURE__ */ ze(Zr, [["render", Qr]]), ei = R({
  components: { BLink: Le, BSpinner: cl },
  props: {
    ...ft,
    active: { type: [Boolean, String], default: !1 },
    disabled: { type: [Boolean, String], default: !1 },
    href: { type: String, required: !1 },
    pill: { type: [Boolean, String], default: !1 },
    pressed: { type: [Boolean, String], default: null },
    rel: { type: String, default: void 0 },
    size: { type: String, default: "md" },
    squared: { type: [Boolean, String], default: !1 },
    tag: { type: String, default: "button" },
    target: { type: String, default: "_self" },
    type: { type: String, default: "button" },
    variant: { type: String, default: "secondary" },
    loading: { type: [Boolean, String], default: !1 },
    loadingMode: { type: String, default: "inline" }
  },
  emits: ["click", "update:pressed"],
  setup(e, { emit: t }) {
    const l = Te(e, "pressed", t), a = c(u(e, "active")), n = c(u(e, "disabled")), o = c(u(e, "pill")), i = c(u(e, "pressed")), r = c(u(e, "squared")), v = c(u(e, "loading")), p = d(() => typeof i.value == "boolean"), B = d(
      () => e.tag === "button" && e.href === void 0 && e.to === null
    ), b = d(() => Ot(e)), m = d(() => e.to !== null), h = d(
      () => e.href !== void 0 ? !1 : !B.value
    ), $ = d(() => [
      [`btn-${e.variant}`],
      [`btn-${e.size}`],
      {
        active: a.value || i.value,
        "rounded-pill": o.value,
        "rounded-0": r.value,
        disabled: n.value
      }
    ]), f = d(() => ({
      "aria-disabled": h.value ? n.value : null,
      "aria-pressed": p.value ? i.value : null,
      autocomplete: p.value ? "off" : null,
      disabled: B.value ? n.value : null,
      href: e.href,
      rel: b.value ? e.rel : null,
      role: h.value || b.value ? "button" : null,
      target: b.value ? e.target : null,
      type: B.value ? e.type : null,
      to: B.value ? null : e.to,
      append: b.value ? e.append : null,
      activeClass: m.value ? e.activeClass : null,
      event: m.value ? e.event : null,
      replace: m.value ? e.replace : null,
      routerComponentName: m.value ? e.routerComponentName : null,
      routerTag: m.value ? e.routerTag : null
    })), k = d(
      () => m.value ? Le : e.href ? "a" : e.tag
    );
    return {
      computedClasses: $,
      computedAttrs: f,
      computedTag: k,
      clicked: (y) => {
        if (n.value) {
          y.preventDefault(), y.stopPropagation();
          return;
        }
        t("click", y), p.value && (l.value = !i.value);
      },
      loadingBoolean: v
    };
  }
});
function ti(e, t, l, a, n, o) {
  const i = tn("b-spinner");
  return g(), j(le(e.computedTag), Q({
    class: ["btn", e.computedClasses]
  }, e.computedAttrs, { onClick: e.clicked }), {
    default: q(() => [
      e.loadingBoolean ? (g(), T("div", {
        key: 0,
        class: M(["btn-loading", { "mode-fill": e.loadingMode === "fill", "mode-inline": e.loadingMode === "inline" }])
      }, [
        _(e.$slots, "loading", {}, () => [
          ye(i, {
            class: "btn-spinner",
            small: e.size !== "lg"
          }, null, 8, ["small"])
        ])
      ], 2)) : Y("", !0),
      U("div", {
        class: M(["btn-content", { "btn-loading-fill": e.loadingBoolean && e.loadingMode === "fill" }])
      }, [
        _(e.$slots, "default")
      ], 2)
    ]),
    _: 3
  }, 16, ["class", "onClick"]);
}
const $t = /* @__PURE__ */ ze(ei, [["render", ti]]), li = ["onMouseenter"], ai = /* @__PURE__ */ R({
  __name: "BAlert",
  props: {
    noHoverPause: { default: !1 },
    dismissLabel: { default: "Close" },
    dismissible: { default: !1 },
    fade: { default: !1 },
    modelValue: { type: [Boolean, Number], default: !1 },
    variant: { default: "info" },
    closeContent: null,
    immediate: { default: !0 },
    interval: { default: 1e3 },
    showOnPause: { default: !0 }
  },
  emits: ["closed", "close-countdown", "update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const a = e, n = Oe(), o = Te(a, "modelValue", l), i = c(u(a, "dismissible")), r = c(u(a, "fade")), v = c(u(a, "immediate")), p = c(u(a, "showOnPause")), B = c(u(a, "noHoverPause")), b = d(() => !Ve(n.close)), m = d(
      () => typeof o.value == "boolean" ? 0 : o.value
    ), h = d(() => [
      [`alert-${a.variant}`],
      {
        "alert-dismissible": i.value
      }
    ]), {
      isActive: $,
      pause: f,
      restart: k,
      resume: w,
      stop: y,
      isPaused: V,
      value: O
    } = Er(m, u(a, "interval"), {
      immediate: typeof o.value == "number" && v.value
    }), x = d(
      () => typeof o.value == "boolean" ? o.value : $.value || p.value && V.value
    );
    xe(() => l("close-countdown", O.value));
    const S = () => {
      typeof o.value == "boolean" ? o.value = !1 : (o.value = 0, y()), l("closed");
    }, A = () => {
      B.value || f();
    };
    return Qa(y), t({ pause: f, resume: w, restart: k, stop: y }), (F, C) => (g(), j(St, {
      "no-fade": !s(r),
      "trans-props": { enterToClass: "show" }
    }, {
      default: q(() => [
        s(x) ? (g(), T("div", {
          key: 0,
          class: M(["alert", s(h)]),
          role: "alert",
          "aria-live": "polite",
          "aria-atomic": "true",
          onMouseenter: dt(A, ["stop"]),
          onMouseleave: C[0] || (C[0] = dt(
            //@ts-ignore
            (...I) => s(w) && s(w)(...I),
            ["stop"]
          ))
        }, [
          _(F.$slots, "default"),
          s(i) ? (g(), T(ue, { key: 0 }, [
            s(b) || e.closeContent ? (g(), j($t, {
              key: 0,
              type: "button",
              onClick: S
            }, {
              default: q(() => [
                _(F.$slots, "close", {}, () => [
                  se(K(e.closeContent), 1)
                ])
              ]),
              _: 3
            })) : (g(), j(Ct, {
              key: 1,
              "aria-label": e.dismissLabel,
              onClick: S
            }, null, 8, ["aria-label"]))
          ], 64)) : Y("", !0)
        ], 42, li)) : Y("", !0)
      ]),
      _: 3
    }, 8, ["no-fade"]));
  }
}), ni = {
  key: 0,
  class: "b-avatar-custom"
}, oi = {
  key: 1,
  class: "b-avatar-img"
}, si = ["src", "alt"], Cl = (e) => {
  const t = typeof e == "string" && sn(e) ? _t(e, 0) : e;
  return typeof t == "number" ? `${t}px` : t || null;
}, ri = /* @__PURE__ */ R({
  __name: "BAvatar",
  props: {
    alt: { default: "avatar" },
    ariaLabel: null,
    badge: { type: [Boolean, String], default: !1 },
    badgeLeft: { default: !1 },
    badgeOffset: null,
    badgeTop: { default: !1 },
    badgeVariant: { default: "primary" },
    button: { default: !1 },
    buttonType: { default: "button" },
    disabled: { default: !1 },
    icon: null,
    rounded: { type: [Boolean, String], default: "circle" },
    size: null,
    square: { default: !1 },
    src: null,
    text: null,
    textVariant: null,
    variant: { default: "secondary" }
  },
  emits: ["click", "img-error"],
  setup(e, { emit: t }) {
    const l = e, a = Oe(), n = Ge(wn, null), o = ["sm", null, "lg"], i = 0.4, r = i * 0.7, v = c(u(l, "badgeLeft")), p = c(u(l, "badgeTop")), B = c(u(l, "button")), b = c(u(l, "disabled")), m = c(u(l, "square")), h = d(() => !Ve(a.default)), $ = d(() => !Ve(a.badge)), f = d(() => !!l.badge || l.badge === "" || $.value), k = d(
      () => (n == null ? void 0 : n.size.value) ?? Cl(l.size)
    ), w = d(() => (n == null ? void 0 : n.variant.value) ?? l.variant), y = d(() => (n == null ? void 0 : n.rounded.value) ?? l.rounded), V = d(() => ({
      type: B.value ? l.buttonType : void 0,
      "aria-label": l.ariaLabel || null,
      disabled: b.value || null
    })), O = d(() => [`bg-${l.badgeVariant}`]), x = d(() => l.badge === !0 ? "" : l.badge), S = d(() => [[`text-${J(l.badgeVariant)}`]]), A = d(() => ({
      [`b-avatar-${l.size}`]: !!l.size && o.indexOf(Cl(l.size)) !== -1,
      [`bg-${w.value}`]: !!w.value,
      badge: !B.value && w.value && h.value,
      rounded: y.value === "" || y.value === !0,
      ["rounded-circle"]: !m.value && y.value === "circle",
      ["rounded-0"]: m.value || y.value === "0",
      ["rounded-1"]: !m.value && y.value === "sm",
      ["rounded-3"]: !m.value && y.value === "lg",
      ["rounded-top"]: !m.value && y.value === "top",
      ["rounded-bottom"]: !m.value && y.value === "bottom",
      ["rounded-start"]: !m.value && y.value === "left",
      ["rounded-end"]: !m.value && y.value === "right",
      btn: B.value,
      [`btn-${w.value}`]: B.value ? !!w.value : !1
    })), F = d(() => [
      [`text-${l.textVariant || J(w.value)}`]
    ]), C = d(() => {
      const te = l.badgeOffset || "0px";
      return {
        fontSize: (o.indexOf(k.value || null) === -1 ? `calc(${k.value} * ${r})` : "") || "",
        top: p.value ? te : "",
        bottom: p.value ? "" : te,
        left: v.value ? te : "",
        right: v.value ? "" : te
      };
    }), I = d(() => {
      const te = o.indexOf(k.value || null) === -1 ? `calc(${k.value} * ${i})` : null;
      return te ? { fontSize: te } : {};
    }), E = d(() => {
      var pe;
      const te = ((pe = n == null ? void 0 : n.overlapScale) == null ? void 0 : pe.value) || 0, ce = k.value && te ? `calc(${k.value} * -${te})` : null;
      return ce ? { marginLeft: ce, marginRight: ce } : {};
    }), W = d(() => B.value ? "button" : "span"), D = d(() => ({
      ...E.value,
      width: k.value ?? void 0,
      height: k.value ?? void 0
    })), J = (te) => te === "light" || te === "warning" ? "dark" : "light", ae = (te) => {
      !b.value && B.value && t("click", te);
    }, Z = (te) => t("img-error", te);
    return (te, ce) => (g(), j(le(s(W)), Q({
      class: ["b-avatar", s(A)],
      style: s(D)
    }, s(V), { onClick: ae }), {
      default: q(() => [
        s(h) ? (g(), T("span", ni, [
          _(te.$slots, "default")
        ])) : e.src ? (g(), T("span", oi, [
          U("img", {
            src: e.src,
            alt: e.alt,
            onError: Z
          }, null, 40, si)
        ])) : e.text ? (g(), T("span", {
          key: 2,
          class: M(["b-avatar-text", s(F)]),
          style: Fe(s(I))
        }, K(e.text), 7)) : Y("", !0),
        s(f) ? (g(), T("span", {
          key: 3,
          class: M(["b-avatar-badge", s(O)]),
          style: Fe(s(C))
        }, [
          s($) ? _(te.$slots, "badge", { key: 0 }) : (g(), T("span", {
            key: 1,
            class: M(s(S))
          }, K(s(x)), 3))
        ], 6)) : Y("", !0)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
}), ii = /* @__PURE__ */ R({
  __name: "BAvatarGroup",
  props: {
    overlap: { default: 0.3 },
    rounded: { type: [Boolean, String], default: !1 },
    size: null,
    square: { default: !1 },
    tag: { default: "div" },
    variant: null
  },
  setup(e) {
    const t = e, l = c(u(t, "square")), a = d(() => Cl(t.size)), n = d(
      () => Math.min(Math.max(i(t.overlap), 0), 1) / 2
    ), o = d(() => {
      const r = a.value ? `calc(${a.value} * ${n.value})` : null;
      return r ? { paddingLeft: r, paddingRight: r } : {};
    }), i = (r) => typeof r == "string" && sn(r) ? _t(r, 0) : r || 0;
    return at(wn, {
      overlapScale: n,
      size: u(t, "size"),
      square: l,
      rounded: u(t, "rounded"),
      variant: u(t, "variant")
    }), (r, v) => (g(), j(le(e.tag), {
      class: "b-avatar-group",
      role: "group"
    }, {
      default: q(() => [
        U("div", {
          class: "b-avatar-group-inner",
          style: Fe(s(o))
        }, [
          _(r.$slots, "default")
        ], 4)
      ]),
      _: 3
    }));
  }
}), _a = It(ft, ["event", "routerTag"]), ui = R({
  components: { BLink: Le },
  props: {
    pill: { type: [Boolean, String], default: !1 },
    tag: { type: String, default: "span" },
    variant: { type: String, default: "secondary" },
    textIndicator: { type: [Boolean, String], default: !1 },
    dotIndicator: { type: [Boolean, String], default: !1 },
    ..._a
  },
  setup(e) {
    const t = c(u(e, "pill")), l = c(u(e, "textIndicator")), a = c(u(e, "dotIndicator")), n = c(u(e, "active")), o = c(u(e, "disabled")), i = d(() => Ot(e)), r = d(
      () => i.value ? Le : e.tag
    ), v = d(() => [
      [`bg-${e.variant}`],
      {
        active: n.value,
        disabled: o.value,
        "text-dark": ["warning", "info", "light"].includes(e.variant),
        "rounded-pill": t.value,
        "position-absolute top-0 start-100 translate-middle": l.value || a.value,
        "p-2 border border-light rounded-circle": a.value,
        "text-decoration-none": i.value
      }
    ]), p = d(
      () => i.value ? Hl(e, _a) : {}
    );
    return {
      computedClasses: v,
      computedLinkProps: p,
      computedTag: r
    };
  }
});
function di(e, t, l, a, n, o) {
  return g(), j(le(e.computedTag), Q({
    class: ["badge", e.computedClasses]
  }, e.computedLinkProps), {
    default: q(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const ci = /* @__PURE__ */ ze(ui, [["render", di]]), xa = It(ft, ["event", "routerTag"]), fi = R({
  components: { BLink: Le },
  props: {
    ...xa,
    active: { type: [Boolean, String], default: !1 },
    ariaCurrent: { type: String, default: "location" },
    disabled: { type: [Boolean, String], default: !1 },
    text: { type: String, required: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const l = c(u(e, "active")), a = c(u(e, "disabled")), n = d(() => ({
      active: l.value
    })), o = d(
      () => l.value ? "span" : Le
    ), i = d(
      () => l.value ? e.ariaCurrent : void 0
    );
    return {
      computedLinkProps: d(
        () => o.value !== "span" ? Hl(e, xa) : {}
      ),
      computedClasses: n,
      computedTag: o,
      computedAriaCurrent: i,
      clicked: (p) => {
        if (a.value || l.value) {
          p.preventDefault(), p.stopImmediatePropagation();
          return;
        }
        a.value || t("click", p);
      }
    };
  }
});
function vi(e, t, l, a, n, o) {
  return g(), T("li", {
    class: M(["breadcrumb-item", e.computedClasses])
  }, [
    (g(), j(le(e.computedTag), Q({ "aria-current": e.computedAriaCurrent }, e.computedLinkProps, { onClick: e.clicked }), {
      default: q(() => [
        _(e.$slots, "default", {}, () => [
          se(K(e.text), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-current", "onClick"]))
  ], 2);
}
const oo = /* @__PURE__ */ ze(fi, [["render", vi]]), mi = { "aria-label": "breadcrumb" }, pi = { class: "breadcrumb" }, gi = /* @__PURE__ */ R({
  __name: "BBreadcrumb",
  props: {
    items: null
  },
  setup(e) {
    const t = e, l = Xn(), a = d(() => {
      const n = t.items || (l == null ? void 0 : l.items) || [];
      let o = !1;
      return n.map((r, v) => (typeof r == "string" && (r = { text: r }, v < n.length - 1 && (r.href = "#")), r.active && (o = !0), !r.active && !o && (r.active = v + 1 === n.length), r));
    });
    return (n, o) => (g(), T("nav", mi, [
      U("ol", pi, [
        _(n.$slots, "prepend"),
        (g(!0), T(ue, null, Be(s(a), (i, r) => (g(), j(oo, Q({ key: r }, i), {
          default: q(() => [
            se(K(i.text), 1)
          ]),
          _: 2
        }, 1040))), 128)),
        _(n.$slots, "default"),
        _(n.$slots, "append")
      ])
    ]));
  }
}), bi = /* @__PURE__ */ R({
  __name: "BButtonGroup",
  props: {
    ariaLabel: { default: "Group" },
    size: null,
    tag: { default: "div" },
    vertical: { default: !1 }
  },
  setup(e) {
    const t = e, l = c(u(t, "vertical")), a = d(() => ({
      "btn-group": !l.value,
      [`btn-group-${t.size}`]: t.size !== void 0,
      "btn-group-vertical": l.value
    }));
    return (n, o) => (g(), j(le(e.tag), {
      class: M(s(a)),
      role: "group",
      "aria-label": e.ariaLabel
    }, {
      default: q(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "aria-label"]));
  }
}), hi = ["role", "aria-label"], yi = /* @__PURE__ */ R({
  __name: "BButtonToolbar",
  props: {
    ariaLabel: { default: "Group" },
    justify: { default: !1 },
    role: { default: "toolbar" }
  },
  setup(e) {
    const l = c(u(e, "justify")), a = d(() => ({
      "justify-content-between": l.value
    }));
    return (n, o) => (g(), T("div", {
      class: M([s(a), "btn-toolbar"]),
      role: e.role,
      "aria-label": e.ariaLabel
    }, [
      _(n.$slots, "default")
    ], 10, hi));
  }
}), Ul = /* @__PURE__ */ R({
  __name: "BImg",
  props: {
    alt: null,
    blank: { default: !1 },
    blankColor: { default: "transparent" },
    block: { default: !1 },
    center: { default: !1 },
    fluid: { default: !1 },
    lazy: { default: !1 },
    fluidGrow: { default: !1 },
    height: null,
    start: { default: !1 },
    end: { default: !1 },
    rounded: { type: [Boolean, String], default: !1 },
    sizes: null,
    src: null,
    srcset: null,
    thumbnail: { default: !1 },
    width: null
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const l = e, a = '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>', n = c(u(l, "lazy")), o = c(u(l, "blank")), i = c(u(l, "block")), r = c(u(l, "center")), v = c(u(l, "fluid")), p = c(u(l, "fluidGrow")), B = c(u(l, "start")), b = c(u(l, "end")), m = c(u(l, "thumbnail")), h = d(
      () => typeof l.srcset == "string" ? l.srcset.split(",").filter((x) => x).join(",") : Array.isArray(l.srcset) ? l.srcset.filter((x) => x).join(",") : void 0
    ), $ = d(
      () => typeof l.sizes == "string" ? l.sizes.split(",").filter((x) => x).join(",") : Array.isArray(l.sizes) ? l.sizes.filter((x) => x).join(",") : void 0
    ), f = d(() => {
      const x = (F) => F === void 0 ? void 0 : typeof F == "number" ? F : Number.parseInt(F, 10) || void 0, S = x(l.width), A = x(l.height);
      if (o.value) {
        if (S !== void 0 && A === void 0)
          return { height: S, width: S };
        if (S === void 0 && A !== void 0)
          return { height: A, width: A };
        if (S === void 0 && A === void 0)
          return { height: 1, width: 1 };
      }
      return {
        width: S,
        height: A
      };
    }), k = d(
      () => O(f.value.width, f.value.height, l.blankColor)
    ), w = d(() => ({
      src: o.value ? k.value : l.src,
      alt: l.alt,
      width: f.value.width || void 0,
      height: f.value.height || void 0,
      srcset: o.value ? void 0 : h.value,
      sizes: o.value ? void 0 : $.value,
      loading: n.value ? "lazy" : "eager"
    })), y = d(
      () => B.value ? "float-start" : b.value ? "float-end" : r.value ? "mx-auto" : void 0
    ), V = d(() => ({
      "img-thumbnail": m.value,
      "img-fluid": v.value || p.value,
      "w-100": p.value,
      rounded: l.rounded === "" || l.rounded === !0,
      [`rounded-${l.rounded}`]: typeof l.rounded == "string" && l.rounded !== "",
      [`${y.value}`]: y.value !== void 0,
      "d-block": i.value || r.value
    })), O = (x, S, A) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      a.replace("%{w}", String(x)).replace("%{h}", String(S)).replace("%{f}", A)
    )}`;
    return (x, S) => (g(), T("img", Q({ class: s(V) }, s(w), {
      onLoad: S[0] || (S[0] = (A) => t("load", A))
    }), null, 16));
  }
}), al = /* @__PURE__ */ R({
  __name: "BCardImg",
  props: {
    alt: null,
    blank: { default: !1 },
    blankColor: null,
    bottom: { default: !1 },
    lazy: { default: !1 },
    height: null,
    start: { default: !1 },
    end: { default: !1 },
    sizes: null,
    src: null,
    srcset: null,
    top: { default: !1 },
    width: null
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const l = e, a = c(u(l, "bottom")), n = c(u(l, "end")), o = c(u(l, "start")), i = c(u(l, "top")), r = d(
      () => i.value ? "card-img-top" : n.value ? "card-img-right" : a.value ? "card-img-bottom" : o.value ? "card-img-left" : "card-img"
    ), v = d(() => ({
      alt: l.alt,
      height: l.height,
      src: l.src,
      lazy: l.lazy,
      width: l.width,
      blank: l.blank,
      blankColor: l.blankColor,
      sizes: l.sizes,
      srcset: l.srcset
    }));
    return (p, B) => (g(), j(Ul, Q({ class: s(r) }, s(v), {
      onLoad: B[0] || (B[0] = (b) => t("load", b))
    }), null, 16, ["class"]));
  }
}), Bi = ["innerHTML"], so = /* @__PURE__ */ R({
  __name: "BCardHeadFoot",
  props: {
    text: null,
    bgVariant: null,
    borderVariant: null,
    html: null,
    tag: { default: "div" },
    textVariant: null
  },
  setup(e) {
    const t = e, l = d(() => ({
      [`text-${t.textVariant}`]: t.textVariant !== void 0,
      [`bg-${t.bgVariant}`]: t.bgVariant !== void 0,
      [`border-${t.borderVariant}`]: t.borderVariant !== void 0
    }));
    return (a, n) => (g(), j(le(e.tag), {
      class: M(s(l))
    }, {
      default: q(() => [
        e.html ? (g(), T("div", {
          key: 0,
          innerHTML: e.html
        }, null, 8, Bi)) : _(a.$slots, "default", { key: 1 }, () => [
          se(K(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ro = /* @__PURE__ */ R({
  __name: "BCardHeader",
  props: {
    text: null,
    bgVariant: null,
    borderVariant: null,
    html: null,
    tag: { default: "div" },
    textVariant: null
  },
  setup(e) {
    const t = e;
    return (l, a) => (g(), j(so, Q({ class: "card-header" }, t), {
      default: q(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), io = /* @__PURE__ */ R({
  __name: "BCardTitle",
  props: {
    text: null,
    tag: { default: "h4" }
  },
  setup(e) {
    return (t, l) => (g(), j(le(e.tag), { class: "card-title" }, {
      default: q(() => [
        _(t.$slots, "default", {}, () => [
          se(K(e.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), uo = /* @__PURE__ */ R({
  __name: "BCardSubtitle",
  props: {
    text: null,
    tag: { default: "h6" },
    textVariant: { default: "muted" }
  },
  setup(e) {
    const t = e, l = d(() => [`text-${t.textVariant}`]);
    return (a, n) => (g(), j(le(e.tag), {
      class: M(["card-subtitle mb-2", s(l)])
    }, {
      default: q(() => [
        _(a.$slots, "default", {}, () => [
          se(K(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), co = /* @__PURE__ */ R({
  __name: "BCardBody",
  props: {
    bodyBgVariant: null,
    bodyTag: { default: "div" },
    bodyTextVariant: null,
    overlay: { default: !1 },
    subtitle: null,
    subtitleTag: { default: "h4" },
    subtitleTextVariant: null,
    title: null,
    titleTag: { default: "h4" },
    text: null
  },
  setup(e) {
    const t = e, l = Oe(), a = c(u(t, "overlay")), n = d(() => !Ve(l.title)), o = d(() => !Ve(l.subtitle)), i = d(() => ({
      "card-img-overlay": a.value,
      [`text-${t.bodyTextVariant}`]: t.bodyTextVariant !== void 0,
      [`bg-${t.bodyBgVariant}`]: t.bodyBgVariant !== void 0
    }));
    return (r, v) => (g(), j(le(e.bodyTag), {
      class: M(["card-body", s(i)])
    }, {
      default: q(() => [
        e.title || s(n) ? (g(), j(io, {
          key: 0,
          tag: e.titleTag
        }, {
          default: q(() => [
            _(r.$slots, "title", {}, () => [
              se(K(e.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag"])) : Y("", !0),
        e.subtitle || s(o) ? (g(), j(uo, {
          key: 1,
          tag: e.subtitleTag,
          "text-variant": e.subtitleTextVariant
        }, {
          default: q(() => [
            _(r.$slots, "subtitle", {}, () => [
              se(K(e.subtitle), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag", "text-variant"])) : Y("", !0),
        _(r.$slots, "default", {}, () => [
          se(K(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fo = /* @__PURE__ */ R({
  __name: "BCardFooter",
  props: {
    text: null,
    bgVariant: null,
    borderVariant: null,
    html: null,
    tag: { default: "div" },
    textVariant: null
  },
  setup(e) {
    const t = e;
    return (l, a) => (g(), j(so, Q({ class: "card-footer" }, t), {
      default: q(() => [
        _(l.$slots, "default", {}, () => [
          se(K(e.text), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), vo = /* @__PURE__ */ R({
  __name: "BCard",
  props: {
    align: null,
    bgVariant: null,
    bodyBgVariant: null,
    bodyClass: null,
    bodyTag: { default: "div" },
    bodyTextVariant: null,
    borderVariant: null,
    footer: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerClass: null,
    footerHtml: { default: "" },
    footerTag: { default: "div" },
    footerTextVariant: null,
    header: null,
    headerBgVariant: null,
    headerBorderVariant: null,
    headerClass: null,
    headerHtml: { default: "" },
    headerTag: { default: "div" },
    headerTextVariant: null,
    imgAlt: null,
    imgBottom: { default: !1 },
    imgEnd: { default: !1 },
    imgHeight: null,
    imgSrc: null,
    imgStart: { default: !1 },
    imgTop: { default: !1 },
    imgWidth: null,
    noBody: { default: !1 },
    overlay: { default: !1 },
    subtitle: null,
    subtitleTag: { default: "h6" },
    subtitleTextVariant: { default: "muted" },
    tag: { default: "div" },
    textVariant: null,
    title: null,
    titleTag: { default: "h4" },
    bodyText: { default: "" }
  },
  setup(e) {
    const t = e, l = Oe(), a = c(u(t, "imgBottom")), n = c(u(t, "imgEnd")), o = c(u(t, "imgStart")), i = c(u(t, "noBody")), r = d(() => !Ve(l.header)), v = d(() => !Ve(l.footer)), p = d(() => ({
      [`text-${t.align}`]: t.align !== void 0,
      [`text-${t.textVariant}`]: t.textVariant !== void 0,
      [`bg-${t.bgVariant}`]: t.bgVariant !== void 0,
      [`border-${t.borderVariant}`]: t.borderVariant !== void 0,
      "flex-row": o.value,
      "flex-row-reverse": n.value
    })), B = d(() => ({
      bgVariant: t.headerBgVariant,
      borderVariant: t.headerBorderVariant,
      html: t.headerHtml,
      tag: t.headerTag,
      textVariant: t.headerTextVariant
    })), b = d(() => ({
      overlay: t.overlay,
      bodyBgVariant: t.bodyBgVariant,
      bodyTag: t.bodyTag,
      bodyTextVariant: t.bodyTextVariant,
      subtitle: t.subtitle,
      subtitleTag: t.subtitleTag,
      subtitleTextVariant: t.subtitleTextVariant,
      title: t.title,
      titleTag: t.titleTag
    })), m = d(() => ({
      bgVariant: t.footerBgVariant,
      borderVariant: t.footerBorderVariant,
      html: t.footerHtml,
      tag: t.footerTag,
      textVariant: t.footerTextVariant
    })), h = d(() => ({
      src: t.imgSrc,
      alt: t.imgAlt,
      height: t.imgHeight,
      width: t.imgWidth,
      bottom: t.imgBottom,
      end: t.imgEnd,
      start: t.imgStart,
      top: t.imgTop
    }));
    return ($, f) => (g(), j(le(e.tag), {
      class: M(["card", s(p)])
    }, {
      default: q(() => [
        s(a) ? Y("", !0) : _($.$slots, "img", { key: 0 }, () => [
          e.imgSrc ? (g(), j(al, $e(Q({ key: 0 }, s(h))), null, 16)) : Y("", !0)
        ]),
        e.header || s(r) || e.headerHtml ? (g(), j(ro, Q({ key: 1 }, s(B), { class: e.headerClass }), {
          default: q(() => [
            _($.$slots, "header", {}, () => [
              se(K(e.header), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])) : Y("", !0),
        s(i) ? _($.$slots, "default", { key: 3 }, () => [
          se(K(e.bodyText), 1)
        ]) : (g(), j(co, Q({ key: 2 }, s(b), { class: e.bodyClass }), {
          default: q(() => [
            _($.$slots, "default", {}, () => [
              se(K(e.bodyText), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])),
        e.footer || s(v) || e.footerHtml ? (g(), j(fo, Q({ key: 4 }, s(m), { class: e.footerClass }), {
          default: q(() => [
            _($.$slots, "footer", {}, () => [
              se(K(e.footer), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])) : Y("", !0),
        s(a) ? _($.$slots, "img", { key: 5 }, () => [
          e.imgSrc ? (g(), j(al, $e(Q({ key: 0 }, s(h))), null, 16)) : Y("", !0)
        ]) : Y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $i = /* @__PURE__ */ R({
  __name: "BCardGroup",
  props: {
    columns: { default: !1 },
    deck: { default: !1 },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, l = c(u(t, "columns")), a = c(u(t, "deck")), n = d(
      () => a.value ? "card-deck" : l.value ? "card-columns" : "card-group"
    ), o = d(() => [n.value]);
    return (i, r) => (g(), j(le(e.tag), {
      class: M(s(o))
    }, {
      default: q(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wi = /* @__PURE__ */ R({
  __name: "BCardText",
  props: {
    text: null,
    tag: { default: "p" }
  },
  setup(e) {
    return (t, l) => (g(), j(le(e.tag), { class: "card-text" }, {
      default: q(() => [
        _(t.$slots, "default", {}, () => [
          se(K(e.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), ki = ["id", "onMouseenter", "onMouseleave"], Si = {
  key: 0,
  class: "carousel-indicators"
}, Ci = ["aria-current", "aria-label", "onClick"], Ti = { class: "carousel-inner" }, _i = /* @__PURE__ */ U("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1), xi = { class: "visually-hidden" }, Ai = /* @__PURE__ */ U("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1), Vi = { class: "visually-hidden" }, Oi = /* @__PURE__ */ R({
  __name: "BCarousel",
  props: {
    ride: { type: [Boolean, String], default: !1 },
    noHoverPause: { default: !1 },
    rideReverse: { default: !1 },
    fade: { default: !1 },
    id: null,
    imgHeight: null,
    imgWidth: null,
    background: null,
    modelValue: { default: 0 },
    controls: { default: !1 },
    indicators: { default: !1 },
    interval: { default: 5e3 },
    noTouch: { default: !1 },
    noWrap: { default: !1 },
    controlsPrevText: { default: "Previous" },
    controlsNextText: { default: "Next" },
    indicatorsButtonLabel: { default: "Slide" },
    keyboard: { default: !0 },
    touchThreshold: { default: 50 }
  },
  emits: ["slid", "slide", "update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const a = e, n = Oe(), o = ke(u(a, "id"), "carousel"), i = Te(a, "modelValue", l, { passive: !0 }), r = c(u(a, "keyboard")), v = c(u(a, "rideReverse")), p = c(u(a, "noHoverPause")), B = c(u(a, "fade")), b = c(u(a, "controls")), m = c(u(a, "indicators")), h = c(u(a, "noTouch")), $ = c(u(a, "noWrap")), f = ht(u(a, "touchThreshold"), {
      nanToZero: !0,
      method: "parseInt"
    }), k = z(!1), w = z(!1), y = z(!0), V = z(null), O = z(null), x = d(
      () => qo(a.ride) ? nn(a.ride) : a.ride
    ), { pause: S, resume: A } = Mn(
      () => {
        v.value ? D() : J();
      },
      u(a, "interval"),
      { immediate: x.value === "carousel" }
    ), F = d(
      () => x.value === !0 && w.value === !0 || x.value === "carousel"
    ), C = d(() => hl(n.default, "BCarouselSlide")), I = d(() => [
      "carousel",
      "slide",
      "pointer-event",
      { "carousel-fade": B.value }
    ]), E = (ne, de) => {
      var L;
      return new on(ne, {
        componentId: o.value,
        cancelable: !1,
        target: O.value,
        direction: y.value ? "right" : "left",
        from: de,
        to: i.value,
        relatedTarget: ((L = V.value) == null ? void 0 : L.children[i.value]) ?? null
      });
    }, W = (ne) => {
      if (k.value !== !0) {
        if (x.value === !0 && (w.value = !0), F.value === !0 && A(), y.value = !(ne < i.value), ne >= C.value.length) {
          if ($.value)
            return;
          i.value = 0;
          return;
        }
        if (ne < 0) {
          if ($.value)
            return;
          i.value = C.value.length - 1;
          return;
        }
        i.value = ne;
      }
    }, D = () => W(i.value - 1), J = () => W(i.value + 1), ae = (ne) => {
      r.value !== !1 && ne();
    }, Z = () => {
      p.value || S();
    }, te = () => {
      F.value && A();
    }, { lengthX: ce } = Cr(O, {
      passive: !0,
      onSwipeStart() {
        h.value !== !0 && S();
      },
      onSwipeEnd() {
        if (h.value === !0)
          return;
        const ne = () => {
          F.value !== !1 && A();
        };
        if (ce.value >= f.value) {
          J(), ne();
          return;
        }
        ce.value <= -f.value && (D(), ne());
      }
    }), pe = (ne) => {
      l("slide", E("slide", ne)), k.value = !0;
    }, be = (ne) => {
      l("slid", E("slid", ne)), k.value = !1;
    };
    return ve(
      () => a.ride,
      () => w.value = !1
    ), t({ pause: S, resume: A, prev: D, next: J }), at(bn, {
      background: u(a, "background"),
      width: u(a, "imgWidth"),
      height: u(a, "imgHeight")
    }), (ne, de) => (g(), T("div", {
      id: s(o),
      ref_key: "target",
      ref: O,
      class: M(s(I)),
      onKeydown: [
        de[0] || (de[0] = Vt((L) => ae(D), ["left"])),
        de[1] || (de[1] = Vt((L) => ae(J), ["right"]))
      ],
      onMouseenter: dt(Z, ["stop"]),
      onMouseleave: dt(te, ["stop"])
    }, [
      s(m) ? (g(), T("div", Si, [
        (g(!0), T(ue, null, Be(s(C).length, (L, N) => (g(), T("button", {
          key: N,
          type: "button",
          "data-bs-target": "",
          class: M(N === s(i) ? "active" : ""),
          "aria-current": N === s(i) ? !0 : void 0,
          "aria-label": `${e.indicatorsButtonLabel} ${N}`,
          onClick: (ee) => W(N)
        }, null, 10, Ci))), 128))
      ])) : Y("", !0),
      U("div", {
        ref_key: "relatedTarget",
        ref: V,
        class: "carousel-inner"
      }, [
        (g(!0), T(ue, null, Be(s(C), (L, N) => (g(), j(en, {
          key: N,
          "enter-from-class": `carousel-item-next carousel-item-${y.value ? "end" : "start"}`,
          "leave-active-class": "active",
          "leave-to-class": `carousel-item-prev carousel-item-${y.value ? "start" : "end"}`,
          onBeforeLeave: pe,
          onAfterLeave: be
        }, {
          default: q(() => [
            nt((g(), j(le(L), {
              class: M({ active: N === s(i) })
            }, null, 8, ["class"])), [
              [nl, N === s(i)]
            ])
          ]),
          _: 2
        }, 1032, ["enter-from-class", "leave-to-class"]))), 128))
      ], 512),
      U("div", Ti, [
        _(ne.$slots, "default")
      ]),
      s(b) ? (g(), T(ue, { key: 1 }, [
        U("button", {
          class: "carousel-control-prev",
          type: "button",
          onClick: D
        }, [
          _i,
          U("span", xi, K(e.controlsPrevText), 1)
        ]),
        U("button", {
          class: "carousel-control-next",
          type: "button",
          onClick: J
        }, [
          Ai,
          U("span", Vi, K(e.controlsNextText), 1)
        ])
      ], 64)) : Y("", !0)
    ], 42, ki));
  }
}), Pi = ["innerHTML"], Ei = { key: 1 }, Ii = ["innerHTML"], Fi = { key: 1 }, Li = /* @__PURE__ */ R({
  __name: "BCarouselSlide",
  props: {
    imgSrc: null,
    imgHeight: null,
    imgWidth: null,
    interval: null,
    background: null,
    caption: null,
    captionHtml: null,
    captionTag: { default: "h3" },
    contentTag: { default: "div" },
    contentVisibleUp: null,
    id: null,
    imgAlt: null,
    imgBlank: { default: !1 },
    imgBlankColor: { default: "transparent" },
    text: null,
    textHtml: null,
    textTag: { default: "p" }
  },
  setup(e) {
    const t = e, l = Oe(), a = Ge(bn, null), n = d(() => t.text || t.textHtml || !Ve(l.text)), o = d(() => t.caption || t.captionHtml || !Ve(l.caption)), i = d(() => n.value || o.value || !Ve(l.default)), r = d(() => ({
      background: `${t.background || (a == null ? void 0 : a.background.value) || "rgb(171, 171, 171)"} none repeat scroll 0% 0%`
    })), v = d(() => ({
      "d-none": t.contentVisibleUp !== void 0,
      [`d-${t.contentVisibleUp}-block`]: t.contentVisibleUp !== void 0
    }));
    return (p, B) => (g(), T("div", {
      class: "carousel-item",
      style: Fe(s(r))
    }, [
      _(p.$slots, "img", {}, () => {
        var b, m;
        return [
          ye(Ul, {
            class: "d-block w-100",
            alt: e.imgAlt,
            src: e.imgSrc,
            width: e.imgWidth || ((b = s(a)) == null ? void 0 : b.width.value),
            height: e.imgHeight || ((m = s(a)) == null ? void 0 : m.height.value),
            blank: e.imgBlank,
            "blank-color": e.imgBlankColor
          }, null, 8, ["alt", "src", "width", "height", "blank", "blank-color"])
        ];
      }),
      s(i) ? (g(), j(le(e.contentTag), {
        key: 0,
        class: M(["carousel-caption", s(v)])
      }, {
        default: q(() => [
          s(o) ? (g(), j(le(e.captionTag), { key: 0 }, {
            default: q(() => [
              _(p.$slots, "caption", {}, () => [
                e.captionHtml ? (g(), T("span", {
                  key: 0,
                  innerHTML: e.captionHtml
                }, null, 8, Pi)) : (g(), T("span", Ei, K(e.caption), 1))
              ])
            ]),
            _: 3
          })) : Y("", !0),
          s(n) ? (g(), j(le(e.textTag), { key: 1 }, {
            default: q(() => [
              _(p.$slots, "text", {}, () => [
                e.textHtml ? (g(), T("span", {
                  key: 0,
                  innerHTML: e.textHtml
                }, null, 8, Ii)) : (g(), T("span", Fi, K(e.text), 1))
              ])
            ]),
            _: 3
          })) : Y("", !0),
          _(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])) : Y("", !0)
    ], 4));
  }
}), Aa = rl("", [], { type: [Boolean, String, Number], default: !1 }), Va = rl("offset", [""], { type: [String, Number], default: null }), Oa = rl("order", [""], { type: [String, Number], default: null }), Ni = R({
  name: "BCol",
  props: {
    col: { type: [Boolean, String], default: !1 },
    // Generic flexbox .col (xs)
    cols: { type: [String, Number], default: null },
    // .col-[1-12]|auto (xs)
    ...Aa,
    offset: { type: [String, Number], default: null },
    ...Va,
    order: { type: [String, Number], default: null },
    ...Oa,
    alignSelf: { type: String, default: null },
    tag: { type: String, default: "div" }
  },
  setup(e) {
    const t = [
      { content: Aa, propPrefix: "cols", classPrefix: "col" },
      { content: Va, propPrefix: "offset" },
      { content: Oa, propPrefix: "order" }
    ], l = c(u(e, "col")), a = d(
      () => t.flatMap((o) => gn(e, o.content, o.propPrefix, o.classPrefix))
    );
    return {
      computedClasses: d(() => [
        a.value,
        {
          col: l.value || !a.value.some((o) => /^col-/.test(o)) && !e.cols,
          [`col-${e.cols}`]: !!e.cols,
          [`offset-${e.offset}`]: !!e.offset,
          [`order-${e.order}`]: !!e.order,
          [`align-self-${e.alignSelf}`]: !!e.alignSelf
        }
      ])
    };
  }
});
function zi(e, t, l, a, n, o) {
  return g(), j(le(e.tag), {
    class: M(e.computedClasses)
  }, {
    default: q(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Tt = /* @__PURE__ */ ze(Ni, [["render", zi]]), mt = {
  autoHide: !0,
  delay: 5e3,
  noCloseButton: !1,
  pos: "top-right",
  value: !0
};
class Pa {
  constructor(t) {
    Ce(this, "vm");
    Ce(this, "containerPositions");
    Ho(t) ? this.vm = t : this.vm = ut(t), this.containerPositions = d(() => {
      const l = /* @__PURE__ */ new Set([]);
      return this.vm.toasts.map((a) => {
        a.options.pos && l.add(a.options.pos);
      }), l;
    });
  }
  toasts(t) {
    return t ? d(
      () => this.vm.toasts.filter((l) => {
        if (l.options.pos === t && l.options.value)
          return l;
      })
    ) : d(() => this.vm.toasts);
  }
  remove(...t) {
    this.vm.toasts = this.vm.toasts.filter((l) => {
      if (l.options.id && !t.includes(l.options.id))
        return l;
    });
  }
  isRoot() {
    return this.vm.root ?? !1;
  }
  show(t, l = mt) {
    const a = { id: Qe(), ...mt, ...l }, n = {
      options: ut(a),
      content: t
    };
    return this.vm.toasts.push(n), n;
  }
  info(t, l = mt) {
    return this.show(t, { variant: "info", ...l });
  }
  danger(t, l = mt) {
    return this.show(t, { variant: "danger", ...l });
  }
  warning(t, l = mt) {
    return this.show(t, { variant: "warning", ...l });
  }
  success(t, l = mt) {
    return this.show(t, { variant: "success", ...l });
  }
  hide() {
  }
}
class Ri {
  constructor() {
    Ce(this, "vms");
    Ce(this, "rootInstance");
    Ce(this, "useToast", po);
    this.vms = {};
  }
  getOrCreateViewModel(t) {
    if (!t) {
      if (this.rootInstance)
        return this.vms[this.rootInstance];
      const l = { root: !0, toasts: [], container: void 0, id: Symbol("toast") };
      return this.rootInstance = l.id, this.vms[l.id] = l, l;
    }
    if (t.root) {
      if (this.rootInstance)
        return this.vms[this.rootInstance];
      this.rootInstance = t.id;
    }
    return this.vms[t.id] = t, t;
  }
  getVM(t) {
    if (!t && this.rootInstance)
      return this.vms[this.rootInstance];
    if (t)
      return this.vms[t];
  }
}
const Tl = Symbol("toast"), mo = Symbol("toastFetch"), Hi = {
  container: void 0,
  toasts: [],
  root: !1
};
function Mi() {
  return Ge(mo);
}
function po(e, t = Tl) {
  const l = Ge(Mi());
  if (!e)
    return new Pa(l.getOrCreateViewModel());
  const a = { id: Symbol("toastInstance") }, n = { ...Hi, ...a, ...e }, o = l.getOrCreateViewModel(n);
  return new Pa(o);
}
const Di = {
  install: (e, t = {}) => {
    var l, a;
    e.provide(mo, ((l = t == null ? void 0 : t.BToast) == null ? void 0 : l.injectkey) ?? Tl), e.provide(((a = t == null ? void 0 : t.BToast) == null ? void 0 : a.injectkey) ?? Tl, new Ri());
  }
}, ji = "toast-title", Ea = 1e3, go = R({
  components: { BLink: Le },
  props: {
    ...ft,
    delay: { type: Number, default: 5e3 },
    bodyClass: { type: String },
    body: { type: [Object, String] },
    headerClass: { type: String },
    headerTag: { type: String, default: "div" },
    animation: { type: [Boolean, String], default: !0 },
    id: { type: String },
    // Switches role to 'status' and aria-live to 'polite'
    isStatus: { type: [Boolean, String], default: !1 },
    autoHide: { type: [Boolean, String], default: !0 },
    noCloseButton: { type: [Boolean, String], default: !1 },
    noFade: { type: [Boolean, String], default: !1 },
    noHoverPause: { type: [Boolean, String], default: !1 },
    solid: { type: [Boolean, String], default: !1 },
    // Render the toast in place, rather than in a portal-target
    static: { type: [Boolean, String], default: !1 },
    title: { type: String },
    modelValue: { type: [Boolean, String], default: !1 },
    toastClass: { type: Array },
    variant: { type: String }
  },
  emits: ["destroyed", "update:modelValue"],
  setup(e, { emit: t, slots: l }) {
    c(u(e, "animation"));
    const a = c(u(e, "isStatus")), n = c(u(e, "autoHide")), o = c(u(e, "noCloseButton")), i = c(u(e, "noFade")), r = c(u(e, "noHoverPause"));
    c(u(e, "solid")), c(u(e, "static"));
    const v = c(u(e, "modelValue")), p = z(!1), B = z(!1), b = z(!1), m = d(() => ({
      [`b-toast-${e.variant}`]: e.variant !== void 0,
      show: b.value || p.value
    }));
    let h, $, f;
    const k = () => {
      typeof h > "u" || (clearTimeout(h), h = void 0);
    }, w = d(
      () => (
        // Minimum supported duration is 1 second
        Math.max(et(e.delay, 0), Ea)
      )
    ), y = () => {
      v.value && ($ = f = 0, k(), B.value = !0, Nt(() => {
        b.value = !1;
      }));
    }, V = () => {
      k(), t("update:modelValue", !0), $ = f = 0, B.value = !1, Ie(() => {
        Nt(() => {
          b.value = !0;
        });
      });
    }, O = () => {
      if (!n.value || r.value || !h || f)
        return;
      const W = Date.now() - $;
      W > 0 && (k(), f = Math.max(w.value - W, Ea));
    }, x = () => {
      (!n.value || r.value || !f) && (f = $ = 0), S();
    };
    ve(v, (W) => {
      W ? V() : y();
    });
    const S = () => {
      k(), n.value && (h = setTimeout(y, f || w.value), $ = Date.now(), f = 0);
    }, A = () => {
      p.value = !0, t("update:modelValue", !0);
    }, F = () => {
      p.value = !1, S();
    }, C = () => {
      p.value = !0;
    }, I = () => {
      p.value = !1, f = $ = 0, t("update:modelValue", !1);
    };
    Ll(() => {
      k(), n.value && t("destroyed", e.id);
    }), Ne(() => {
      Ie(() => {
        v.value && Nt(() => {
          V();
        });
      });
    });
    const E = () => {
      Ie(() => {
        Nt(() => {
          y();
        });
      });
    };
    return () => {
      const W = () => {
        const D = [], J = Me(ji, { hide: y }, l);
        J ? D.push(re(J)) : e.title && D.push(re("strong", { class: "me-auto" }, e.title)), !o.value && D.length !== 0 && D.push(
          re(Ct, {
            class: ["btn-close"],
            onClick: () => {
              y();
            }
          })
        );
        const ae = [];
        if (D.length > 0 && ae.push(
          re(
            e.headerTag,
            {
              class: "toast-header"
            },
            { default: () => D }
          )
        ), Me("default", { hide: y }, l) || e.body) {
          const Z = re(
            Ot(e) ? "b-link" : "div",
            {
              class: ["toast-body", e.bodyClass],
              onClick: Ot(e) ? { click: E } : {}
            },
            Me("default", { hide: y }, l) || e.body
          );
          ae.push(Z);
        }
        return re(
          "div",
          {
            class: ["toast", e.toastClass, m.value],
            tabindex: "0"
          },
          ae
        );
      };
      return re(
        "div",
        {
          class: ["b-toast"],
          id: e.id,
          role: B.value ? null : a.value ? "status" : "alert",
          "aria-live": B.value ? null : a.value ? "polite" : "assertive",
          "aria-atomic": B.value ? null : !0,
          onmouseenter: O,
          onmouseleave: x
        },
        [
          re(
            St,
            {
              noFade: i.value,
              onAfterEnter: F,
              onBeforeEnter: A,
              onAfterLeave: I,
              onBeforeLeave: C
            },
            () => [b.value ? W() : ""]
          )
        ]
      );
    };
  }
}), _l = /* @__PURE__ */ R({
  __name: "BToaster",
  props: {
    position: { default: "top-right" },
    instance: null
  },
  setup(e) {
    const t = e, l = {
      "top-left": "top-0 start-0",
      "top-center": "top-0 start-50 translate-middle-x",
      "top-right": "top-0 end-0",
      "middle-left": "top-50 start-0 translate-middle-y",
      "middle-center": "top-50 start-50 translate-middle",
      "middle-right": "top-50 end-0 translate-middle-y",
      "bottom-left": "bottom-0 start-0",
      "bottom-center": "bottom-0 start-50 translate-middle-x",
      "bottom-right": "bottom-0 end-0"
    }, a = d(() => l[t.position]), n = (o) => {
      var i;
      (i = t.instance) == null || i.remove(o);
    };
    return (o, i) => {
      var r;
      return g(), T("div", {
        class: M([[s(a)], "b-toaster position-fixed p-3"]),
        style: { "z-index": "11" }
      }, [
        (g(!0), T(ue, null, Be((r = e.instance) == null ? void 0 : r.toasts(e.position).value, (v) => (g(), j(go, {
          id: v.options.id,
          key: v.options.id,
          modelValue: v.options.value,
          "onUpdate:modelValue": (p) => v.options.value = p,
          "auto-hide": v.options.autoHide,
          delay: v.options.delay,
          "no-close-button": v.options.noCloseButton,
          title: v.content.title,
          body: v.content.body,
          component: v.content.body,
          variant: v.options.variant,
          onDestroyed: n
        }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "auto-hide", "delay", "no-close-button", "title", "body", "component", "variant"]))), 128))
      ], 2);
    };
  }
}), qi = R({
  props: {
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    fluid: { type: [Boolean, String], default: !1 },
    toast: { type: Object },
    position: { type: String, required: !1 }
  },
  setup(e, { slots: t, expose: l }) {
    const a = z();
    let n;
    const o = d(() => ({
      container: !e.fluid,
      ["container-fluid"]: typeof e.fluid == "boolean" && e.fluid,
      [`container-${e.fluid}`]: typeof e.fluid == "string",
      [`gx-${e.gutterX}`]: e.gutterX !== null,
      [`gy-${e.gutterY}`]: e.gutterY !== null
    }));
    return Ne(() => {
      e.toast;
    }), e.toast && (n = po({ container: a, root: e.toast.root }), l({
      // ...toastInstance?.useMethods,
    })), () => {
      var r;
      const i = [];
      return n == null || n.containerPositions.value.forEach((v) => {
        i.push(re(_l, { key: v, instance: n, position: v }));
      }), re("div", { class: [o.value, e.position], ref: a }, [
        ...i,
        (r = t.default) == null ? void 0 : r.call(t)
      ]);
    };
  },
  methods: {}
}), Gi = { class: "visually-hidden" }, Wi = ["aria-labelledby", "role"], bo = /* @__PURE__ */ R({
  __name: "BDropdown",
  props: {
    id: null,
    menuClass: null,
    size: null,
    splitClass: null,
    splitVariant: null,
    text: null,
    toggleClass: null,
    autoClose: { type: [Boolean, String], default: !0 },
    block: { default: !1 },
    dark: { default: !1 },
    disabled: { default: !1 },
    isNav: { default: !1 },
    dropup: { default: !1 },
    dropend: { default: !1 },
    dropstart: { default: !1 },
    center: { default: !1 },
    end: { default: !1 },
    noFlip: { default: !1 },
    noShift: { default: !1 },
    offset: { default: 0 },
    role: { default: "menu" },
    split: { default: !1 },
    splitButtonType: { default: "button" },
    splitHref: { default: void 0 },
    splitDisabled: null,
    noCaret: { default: !1 },
    toggleText: { default: "Toggle dropdown" },
    variant: { default: "secondary" },
    modelValue: { default: !1 },
    lazy: { default: !1 },
    strategy: { default: "absolute" },
    floatingMiddleware: null,
    splitTo: null
  },
  emits: ["show", "shown", "hide", "hidden", "hide-prevented", "show-prevented", "click", "toggle", "update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, a = ke(u(l, "id"), "dropdown"), n = Te(l, "modelValue", t, { passive: !0 }), o = c(n), i = c(u(l, "block")), r = c(u(l, "dark")), v = c(u(l, "dropup")), p = c(u(l, "dropend")), B = c(u(l, "isNav")), b = c(u(l, "dropstart")), m = c(u(l, "center")), h = c(u(l, "end")), $ = c(u(l, "split")), f = c(u(l, "noCaret")), k = c(u(l, "noFlip")), w = c(u(l, "noShift")), y = c(u(l, "lazy")), V = c(u(l, "splitDisabled")), O = d(
      () => typeof l.offset == "string" || typeof l.offset == "number" ? l.offset : NaN
    ), x = ht(O, { method: "parseInt", nanToZero: !0 }), S = z(null), A = z(null), F = z(null), C = d(() => $.value ? A.value : F.value), I = d(
      () => Mr({
        top: v.value,
        start: b.value,
        end: p.value,
        alignCenter: m.value,
        alignEnd: h.value
      })
    ), E = d(() => {
      if (l.floatingMiddleware !== void 0)
        return l.floatingMiddleware;
      const L = typeof l.offset == "string" || typeof l.offset == "number" ? x.value : l.offset, N = [xn(L)];
      return k.value === !1 && N.push(_n()), w.value === !1 && N.push(An()), N;
    }), { x: W, y: D, strategy: J, update: ae } = Nn(C, S, {
      placement: I,
      middleware: E,
      strategy: l.strategy
    }), Z = d(() => ({
      "d-grid": i.value,
      dropup: v.value,
      dropend: p.value,
      dropstart: b.value,
      "d-flex": i.value && $.value
    })), te = d(() => [
      $.value ? l.splitClass : l.toggleClass,
      {
        "nav-link": B.value,
        "dropdown-toggle": !$.value,
        "dropdown-toggle-no-caret": f.value && !$.value,
        "w-100": $.value && i.value
      }
    ]), ce = d(() => [
      l.menuClass,
      {
        "dropdown-menu-dark": r.value
      }
    ]), pe = d(() => ({
      "aria-expanded": $.value ? void 0 : !1,
      href: $.value ? l.splitHref : void 0,
      to: $.value && l.splitTo ? l.splitTo : void 0
    })), be = () => {
      t("toggle");
      const L = o.value, N = new Xe(L ? "hide" : "show");
      if (t(L ? "hide" : "show", N), N.defaultPrevented) {
        t(L ? "hide-prevented" : "show-prevented");
        return;
      }
      n.value = !L, t(L ? "hidden" : "shown");
    }, ne = (L) => {
      $.value ? t("click", L) : be();
    };
    qn(
      S,
      () => {
        o.value && (l.autoClose === !0 || l.autoClose === "outside") && (n.value = !o.value);
      },
      { ignore: [A, F] }
    );
    const de = () => {
      o.value && (l.autoClose === !0 || l.autoClose === "inside") && (n.value = !o.value);
    };
    return ve(o, ae), (L, N) => (g(), T("div", {
      class: M([s(Z), "btn-group"])
    }, [
      ye($t, Q({
        id: s(a),
        ref_key: "splitButton",
        ref: F,
        variant: e.splitVariant || e.variant,
        size: e.size,
        class: s(te),
        disabled: s(V) || e.disabled,
        type: e.splitButtonType
      }, s(pe), {
        onClick: ne,
        onKeydown: N[0] || (N[0] = Vt((ee) => n.value = !s(o), ["esc"]))
      }), {
        default: q(() => [
          _(L.$slots, "button-content", {}, () => [
            se(K(e.text), 1)
          ])
        ]),
        _: 3
      }, 16, ["id", "variant", "size", "class", "disabled", "type"]),
      s($) ? (g(), j($t, {
        key: 0,
        ref_key: "button",
        ref: A,
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        class: M([e.toggleClass, "dropdown-toggle-split dropdown-toggle"]),
        "aria-expanded": "false",
        onClick: be
      }, {
        default: q(() => [
          U("span", Gi, [
            _(L.$slots, "toggle-text", {}, () => [
              se(K(e.toggleText), 1)
            ])
          ])
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled", "class"])) : Y("", !0),
      !s(y) || s(o) ? nt((g(), T("ul", {
        key: 1,
        ref_key: "floating",
        ref: S,
        style: Fe({
          position: s(J),
          top: `${s(D) ?? 0}px`,
          left: `${s(W) ?? 0}px`,
          width: "max-content"
        }),
        class: M(["dropdown-menu show", s(ce)]),
        "aria-labelledby": s(a),
        role: e.role,
        onClick: de
      }, [
        _(L.$slots, "default")
      ], 14, Wi)), [
        [nl, s(y) || s(o)]
      ]) : Y("", !0)
    ], 2));
  }
}), Ui = { role: "presentation" }, Xi = /* @__PURE__ */ R({
  __name: "BDropdownDivider",
  props: {
    tag: { default: "hr" }
  },
  setup(e) {
    return (t, l) => (g(), T("li", Ui, [
      (g(), j(le(e.tag), {
        class: "dropdown-divider",
        role: "separator",
        "aria-orientation": "horizontal"
      }))
    ]));
  }
}), Ki = {}, Yi = { role: "presentation" }, Ji = { class: "px-4 py-3" };
function Zi(e, t) {
  return g(), T("li", Yi, [
    U("form", Ji, [
      _(e.$slots, "default")
    ])
  ]);
}
const Qi = /* @__PURE__ */ ze(Ki, [["render", Zi]]), eu = { role: "presentation" }, tu = ["id", "aria-describedby"], lu = {
  inheritAttrs: !1
}, au = /* @__PURE__ */ R({
  ...lu,
  __name: "BDropdownGroup",
  props: {
    id: null,
    ariaDescribedby: null,
    header: null,
    headerClass: null,
    headerTag: { default: "header" },
    headerVariant: null
  },
  setup(e) {
    const t = e, l = d(
      () => t.id ? `${t.id}_group_dd_header` : void 0
    ), a = d(
      () => t.headerTag === "header" ? void 0 : "heading"
    ), n = d(() => [
      t.headerClass,
      {
        [`text-${t.headerVariant}`]: t.headerVariant !== void 0
      }
    ]);
    return (o, i) => (g(), T("li", eu, [
      (g(), j(le(e.headerTag), {
        id: s(l),
        class: M(["dropdown-header", s(n)]),
        role: s(a)
      }, {
        default: q(() => [
          _(o.$slots, "header", {}, () => [
            se(K(e.header), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "class", "role"])),
      U("ul", Q({
        id: e.id,
        role: "group",
        class: "list-unstyled"
      }, o.$attrs, {
        "aria-describedby": e.ariaDescribedby || s(l)
      }), [
        _(o.$slots, "default")
      ], 16, tu)
    ]));
  }
}), nu = {}, ou = { class: "dropdown-header" };
function su(e, t) {
  return g(), T("li", null, [
    U("h6", ou, [
      _(e.$slots, "default")
    ])
  ]);
}
const ru = /* @__PURE__ */ ze(nu, [["render", su]]), iu = {
  inheritAttrs: !1
}, uu = /* @__PURE__ */ R({
  ...iu,
  __name: "BDropdownItem",
  props: {
    href: null,
    linkClass: null,
    active: { default: !1 },
    disabled: { default: !1 },
    rel: { default: void 0 },
    target: { default: "_self" },
    variant: null
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const l = e, a = c(u(l, "active")), n = c(u(l, "disabled")), o = ln(), i = d(() => [
      l.linkClass,
      {
        active: a.value,
        disabled: n.value,
        [`text-${l.variant}`]: l.variant !== void 0
      }
    ]), r = d(
      () => l.href ? "a" : o.to ? Le : "button"
    ), v = d(() => ({
      disabled: n.value,
      "aria-current": a.value ? !0 : null,
      href: r.value === "a" ? l.href : null,
      rel: l.rel,
      type: r.value === "button" ? "button" : null,
      target: l.target,
      ...o.to ? { activeClass: "active", ...o } : {}
    })), p = (B) => t("click", B);
    return (B, b) => (g(), T("li", {
      role: "presentation",
      class: M(B.$attrs.class)
    }, [
      (g(), j(le(s(r)), Q({
        class: ["dropdown-item", s(i)]
      }, s(v), { onClick: p }), {
        default: q(() => [
          _(B.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ], 2));
  }
}), du = ["disabled"], cu = {
  inheritAttrs: !1
}, fu = /* @__PURE__ */ R({
  ...cu,
  __name: "BDropdownItemButton",
  props: {
    buttonClass: null,
    active: { default: !1 },
    activeClass: { default: "active" },
    disabled: { default: !1 },
    variant: null
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const l = e, a = c(u(l, "active")), n = c(u(l, "disabled")), o = d(() => [
      l.buttonClass,
      {
        [l.activeClass]: a.value,
        disabled: n.value,
        [`text-${l.variant}`]: l.variant !== void 0
      }
    ]), i = (r) => t("click", r);
    return (r, v) => (g(), T("li", {
      role: "presentation",
      class: M(r.$attrs.class)
    }, [
      U("button", {
        role: "menu",
        type: "button",
        class: M(["dropdown-item", s(o)]),
        disabled: s(n),
        onClick: i
      }, [
        _(r.$slots, "default")
      ], 10, du)
    ], 2));
  }
}), vu = { role: "presentation" }, mu = { class: "px-4 py-1 mb-0 text-muted" }, pu = /* @__PURE__ */ R({
  __name: "BDropdownText",
  props: {
    text: { default: "" }
  },
  setup(e) {
    return (t, l) => (g(), T("li", vu, [
      U("p", mu, [
        _(t.$slots, "default", {}, () => [
          se(K(e.text), 1)
        ])
      ])
    ]));
  }
}), gu = ["id", "novalidate", "onSubmit"], ho = /* @__PURE__ */ R({
  __name: "BForm",
  props: {
    id: null,
    floating: { default: !1 },
    novalidate: { default: !1 },
    validated: { default: !1 }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const l = e, a = c(u(l, "floating")), n = c(u(l, "novalidate")), o = c(u(l, "validated")), i = d(() => ({
      "form-floating": a.value,
      "was-validated": o.value
    })), r = (v) => t("submit", v);
    return (v, p) => (g(), T("form", {
      id: e.id,
      novalidate: s(n),
      class: M(s(i)),
      onSubmit: dt(r, ["prevent"])
    }, [
      _(v.$slots, "default")
    ], 42, gu));
  }
}), bu = { class: "form-floating" }, hu = ["for"], yu = /* @__PURE__ */ R({
  __name: "BFormFloatingLabel",
  props: {
    labelFor: null,
    label: null,
    text: null
  },
  setup(e) {
    return (t, l) => (g(), T("div", bu, [
      _(t.$slots, "default", {}, () => [
        se(K(e.text), 1)
      ]),
      U("label", { for: e.labelFor }, [
        _(t.$slots, "label", {}, () => [
          se(K(e.label), 1)
        ])
      ], 8, hu)
    ]));
  }
}), xl = /* @__PURE__ */ R({
  __name: "BFormInvalidFeedback",
  props: {
    ariaLive: null,
    forceShow: { default: !1 },
    id: null,
    text: null,
    role: null,
    state: { default: void 0 },
    tag: { default: "div" },
    tooltip: { default: !1 }
  },
  setup(e) {
    const t = e, l = c(u(t, "forceShow")), a = c(u(t, "state")), n = c(u(t, "tooltip")), o = d(
      () => l.value === !0 || a.value === !1
    ), i = d(() => ({
      "d-block": o.value,
      "invalid-feedback": !n.value,
      "invalid-tooltip": n.value
    })), r = d(() => ({
      id: t.id,
      role: t.role,
      "aria-live": t.ariaLive,
      "aria-atomic": t.ariaLive ? !0 : void 0
    }));
    return (v, p) => (g(), j(le(e.tag), Q({ class: s(i) }, s(r)), {
      default: q(() => [
        _(v.$slots, "default", {}, () => [
          se(K(e.text), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dt = /* @__PURE__ */ R({
  __name: "BFormRow",
  props: {
    tag: { default: "div" }
  },
  setup(e) {
    return (t, l) => (g(), j(le(e.tag), { class: "row d-flex flex-wrap" }, {
      default: q(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Al = /* @__PURE__ */ R({
  __name: "BFormText",
  props: {
    id: null,
    inline: { default: !1 },
    tag: { default: "small" },
    text: null,
    textVariant: { default: "muted" }
  },
  setup(e) {
    const t = e, l = c(u(t, "inline")), a = d(() => [
      [`text-${t.textVariant}`],
      {
        "form-text": !l.value
      }
    ]);
    return (n, o) => (g(), j(le(e.tag), {
      id: e.id,
      class: M(s(a))
    }, {
      default: q(() => [
        _(n.$slots, "default", {}, () => [
          se(K(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Vl = /* @__PURE__ */ R({
  __name: "BFormValidFeedback",
  props: {
    ariaLive: null,
    forceShow: { default: !1 },
    id: null,
    role: null,
    text: null,
    state: { default: void 0 },
    tag: { default: "div" },
    tooltip: { default: !1 }
  },
  setup(e) {
    const t = e, l = c(u(t, "forceShow")), a = c(u(t, "state")), n = c(u(t, "tooltip")), o = d(
      () => l.value === !0 || a.value === !0
    ), i = d(() => ({
      "d-block": o.value,
      "valid-feedback": !n.value,
      "valid-tooltip": n.value
    })), r = d(() => t.ariaLive ? !0 : void 0);
    return (v, p) => (g(), j(le(e.tag), {
      id: e.id,
      role: e.role,
      "aria-live": e.ariaLive,
      "aria-atomic": s(r),
      class: M(s(i))
    }, {
      default: q(() => [
        _(v.$slots, "default", {}, () => [
          se(K(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]));
  }
}), Bu = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "indeterminate"], $u = ["for"], wu = {
  inheritAttrs: !1
}, yo = /* @__PURE__ */ R({
  ...wu,
  __name: "BFormCheckbox",
  props: {
    ariaLabel: null,
    ariaLabelledBy: null,
    form: null,
    indeterminate: null,
    name: null,
    id: { default: void 0 },
    autofocus: { default: !1 },
    plain: { default: !1 },
    button: { default: !1 },
    switch: { default: !1 },
    disabled: { default: !1 },
    buttonVariant: { default: "secondary" },
    inline: { default: !1 },
    required: { default: void 0 },
    size: { default: "md" },
    state: { default: void 0 },
    uncheckedValue: { type: [Array, Set, Boolean, String, Object, Number], default: !1 },
    value: { type: [Array, Set, Boolean, String, Object, Number], default: !0 },
    modelValue: { type: [Array, Set, Boolean, String, Object, Number], default: void 0 }
  },
  emits: ["update:modelValue", "input", "change"],
  setup(e, { emit: t }) {
    const l = e, a = Oe(), n = Te(l, "modelValue", t, { passive: !0 }), o = ke(u(l, "id"), "form-check"), i = c(u(l, "indeterminate")), r = c(u(l, "autofocus")), v = c(u(l, "plain")), p = c(u(l, "button")), B = c(u(l, "switch")), b = c(u(l, "disabled")), m = c(u(l, "inline")), h = c(u(l, "required")), $ = c(u(l, "state")), f = Ge(Sn, null), k = z(null);
    Ye(k, {
      initialValue: r.value
    });
    const w = d(() => !Ve(a.default)), y = d({
      get: () => {
        if (f !== null) {
          const F = f.modelValue.value.map((I) => JSON.stringify(I)), C = JSON.stringify(l.value);
          return F.includes(C);
        }
        return JSON.stringify(n.value) === JSON.stringify(l.value);
      },
      set: (F) => {
        const C = F ? l.value : l.uncheckedValue;
        if (t("input", C), n.value = C, t("change", C), f !== null) {
          if (!F) {
            f.remove(l.value);
            return;
          }
          f.set(l.value);
        }
      }
    }), V = d(
      () => !!(l.name ?? (f == null ? void 0 : f.name.value)) && (h.value || (f == null ? void 0 : f.required.value))
    ), O = d(() => ({
      plain: v.value || ((f == null ? void 0 : f.plain.value) ?? !1),
      button: p.value || ((f == null ? void 0 : f.buttons.value) ?? !1),
      inline: m.value || ((f == null ? void 0 : f.inline.value) ?? !1),
      switch: B.value || ((f == null ? void 0 : f.switch.value) ?? !1),
      size: l.size || (f == null ? void 0 : f.size.value),
      // TODO some of these values will be weirdly incorrect since they arent falsy
      state: $.value || (f == null ? void 0 : f.state.value),
      buttonVariant: l.buttonVariant || (f == null ? void 0 : f.buttonVariant.value)
      // Above
    })), x = Kn(O), S = Yn(O), A = Jn(O);
    return Ll(() => {
      f !== null && y.value === !0 && f.remove(l.value);
    }), (F, C) => {
      var I, E, W;
      return g(), T("div", {
        class: M(s(x))
      }, [
        nt(U("input", Q({ id: s(o) }, F.$attrs, {
          ref_key: "input",
          ref: k,
          "onUpdate:modelValue": C[0] || (C[0] = (D) => wt(y) ? y.value = D : null),
          class: s(S),
          type: "checkbox",
          disabled: s(b) || ((I = s(f)) == null ? void 0 : I.disabled.value),
          required: s(V) ? !0 : void 0,
          name: e.name || ((E = s(f)) == null ? void 0 : E.name.value),
          form: e.form || ((W = s(f)) == null ? void 0 : W.form.value),
          "aria-label": e.ariaLabel,
          "aria-labelledby": e.ariaLabelledBy,
          "aria-required": s(V) ? !0 : void 0,
          value: e.value,
          indeterminate: s(i)
        }), null, 16, Bu), [
          [Mo, s(y)]
        ]),
        s(w) || s(v) === !1 ? (g(), T("label", {
          key: 0,
          for: s(o),
          class: M(s(A))
        }, [
          _(F.$slots, "default")
        ], 10, $u)) : Y("", !0)
      ], 2);
    };
  }
}), ku = ["id"], Su = ["innerHTML"], Cu = ["textContent"], Tu = /* @__PURE__ */ R({
  __name: "BFormCheckboxGroup",
  props: {
    id: null,
    form: null,
    modelValue: { default: () => [] },
    ariaInvalid: { default: void 0 },
    autofocus: { default: !1 },
    buttonVariant: { default: "secondary" },
    buttons: { default: !1 },
    disabled: { default: !1 },
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    name: null,
    options: { default: () => [] },
    plain: { default: !1 },
    required: { default: !1 },
    size: null,
    stacked: { default: !1 },
    state: { default: void 0 },
    switches: { default: !1 },
    textField: { default: "text" },
    validated: { default: !1 },
    valueField: { default: "value" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(e, { emit: t }) {
    const l = e, a = Te(l, "modelValue", t), n = ke(u(l, "id"), "checkbox"), o = ke(u(l, "name"), "checkbox"), i = c(u(l, "autofocus")), r = c(u(l, "buttons")), v = c(u(l, "disabled")), p = c(u(l, "plain")), B = c(u(l, "required")), b = c(u(l, "stacked")), m = c(u(l, "state")), h = c(u(l, "switches")), $ = c(u(l, "validated")), f = z(null);
    Ye(f, {
      initialValue: i.value
    });
    const k = z(a.value);
    at(Sn, {
      set: (x) => {
        k.value.push(x);
      },
      remove: (x) => {
        k.value.splice(k.value.indexOf(x), 1);
      },
      modelValue: a,
      switch: h,
      buttonVariant: u(l, "buttonVariant"),
      form: u(l, "form"),
      name: o,
      state: m,
      plain: p,
      size: u(l, "size"),
      inline: d(() => !b.value),
      required: B,
      buttons: r,
      disabled: v
    }), xe(() => a.value = k.value);
    const w = d(
      () => l.options.map(
        (x, S) => typeof x == "string" ? {
          props: {
            value: x,
            disabled: v.value
          },
          text: x,
          html: void 0,
          self: Symbol(`checkboxGroupOptionItem${S}`)
        } : {
          props: {
            value: x[l.valueField],
            disabled: x[l.disabledField],
            ...x.props ? x.props : {}
          },
          text: x[l.textField],
          html: x[l.htmlField],
          self: Symbol(`checkboxGroupOptionItem${S}`)
        }
      )
    ), y = d(() => ({
      required: B.value,
      ariaInvalid: l.ariaInvalid,
      state: m.value,
      validated: $.value,
      buttons: r.value,
      stacked: b.value,
      size: l.size
    })), V = Zn(y), O = Qn(y);
    return (x, S) => (g(), T("div", Q(s(V), {
      id: s(n),
      ref_key: "element",
      ref: f,
      role: "group",
      class: [s(O), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      _(x.$slots, "first"),
      (g(!0), T(ue, null, Be(s(w), (A) => (g(), j(yo, Q({
        key: A.self
      }, A.props), {
        default: q(() => [
          A.html ? (g(), T("span", {
            key: 0,
            innerHTML: A.html
          }, null, 8, Su)) : (g(), T("span", {
            key: 1,
            textContent: K(A.text)
          }, null, 8, Cu))
        ]),
        _: 2
      }, 1040))), 128)),
      _(x.$slots, "default")
    ], 16, ku));
  }
}), Bo = ["input", "select", "textarea"], _u = Bo.map((e) => `${e}:not([disabled])`).join(), xu = [...Bo, "a", "button", "label"], Au = "label", Vu = "invalid-feedback", Ou = "valid-feedback", Pu = "description", Eu = "default", Iu = R({
  components: { BCol: Tt, BFormInvalidFeedback: xl, BFormRow: Dt, BFormText: Al, BFormValidFeedback: Vl },
  props: {
    contentCols: { type: [Boolean, String, Number], required: !1 },
    contentColsLg: { type: [Boolean, String, Number], required: !1 },
    contentColsMd: { type: [Boolean, String, Number], required: !1 },
    contentColsSm: { type: [Boolean, String, Number], required: !1 },
    contentColsXl: { type: [Boolean, String, Number], required: !1 },
    description: { type: [String], required: !1 },
    disabled: { type: [Boolean, String], default: !1 },
    feedbackAriaLive: { type: String, default: "assertive" },
    id: { type: String, required: !1 },
    invalidFeedback: { type: String, required: !1 },
    label: { type: String, required: !1 },
    labelAlign: { type: [Boolean, String, Number], required: !1 },
    labelAlignLg: { type: [Boolean, String, Number], required: !1 },
    labelAlignMd: { type: [Boolean, String, Number], required: !1 },
    labelAlignSm: { type: [Boolean, String, Number], required: !1 },
    labelAlignXl: { type: [Boolean, String, Number], required: !1 },
    labelClass: { type: [Array, Object, String], required: !1 },
    labelCols: { type: [Boolean, String, Number], required: !1 },
    labelColsLg: { type: [Boolean, String, Number], required: !1 },
    labelColsMd: { type: [Boolean, String, Number], required: !1 },
    labelColsSm: { type: [Boolean, String, Number], required: !1 },
    labelColsXl: { type: [Boolean, String, Number], required: !1 },
    labelFor: { type: String, required: !1 },
    labelSize: { type: String, required: !1 },
    labelSrOnly: { type: [Boolean, String], default: !1 },
    state: { type: [Boolean, String], default: null },
    tooltip: { type: [Boolean, String], default: !1 },
    validFeedback: { type: String, required: !1 },
    validated: { type: [Boolean, String], default: !1 },
    floating: { type: [Boolean, String], default: !1 }
  },
  setup(e, { attrs: t }) {
    const l = c(u(e, "disabled")), a = c(u(e, "labelSrOnly")), n = c(u(e, "state")), o = c(u(e, "tooltip")), i = c(u(e, "validated")), r = c(u(e, "floating")), v = null, p = ["xs", "sm", "md", "lg", "xl"], B = (S, A) => p.reduce((F, C) => {
      const I = la(C === "xs" ? "" : C, `${A}Align`), E = S[I] || null;
      return E && (C === "xs" ? F.push(`text-${E}`) : F.push(`text-${C}-${E}`)), F;
    }, []), b = (S, A) => p.reduce((F, C) => {
      const I = la(C === "xs" ? "" : C, `${A}Cols`);
      let E = S[I];
      return E = E === "" ? !0 : E || !1, typeof E != "boolean" && E !== "auto" && (E = bs(E, 0), E = E > 0 ? E : !1), E && (C === "xs" ? F[typeof E == "boolean" ? "col" : "cols"] = E : F[C || (typeof E == "boolean" ? "col" : "cols")] = E), F;
    }, {}), m = z(), h = (S, A = null) => {
      if (zl && e.labelFor) {
        const F = mn(`#${Zo(e.labelFor)}`, m);
        if (F) {
          const C = "aria-describedby", I = (S || "").split(Mt), E = (A || "").split(Mt), W = (Rl(F, C) || "").split(Mt).filter((D) => !E.includes(D)).concat(I).filter((D, J, ae) => ae.indexOf(D) === J).filter((D) => D).join(" ").trim();
          W ? vs(F, C, W) : ms(F, C);
        }
      }
    }, $ = d(() => b(e, "content")), f = d(() => B(e, "label")), k = d(() => b(e, "label")), w = d(
      () => (
        // Determine if the form group will be rendered horizontal
        // based on the existence of 'content-col' or 'label-col' props
        Object.keys($.value).length > 0 || Object.keys(k.value).length > 0
      )
    ), y = d(
      () => (
        // If not a boolean, ensure that value is null
        typeof n.value == "boolean" ? n.value : null
      )
    ), V = d(() => {
      const S = y.value;
      return S === !0 ? "is-valid" : S === !1 ? "is-invalid" : null;
    }), O = d(
      () => il(t.ariaInvalid, n.value)
    );
    return ve(
      () => v,
      (S, A) => {
        S !== A && h(S, A);
      }
    ), Ne(() => {
      Ie(() => {
        h(v);
      });
    }), {
      disabledBoolean: l,
      labelSrOnlyBoolean: a,
      stateBoolean: n,
      tooltipBoolean: o,
      validatedBoolean: i,
      floatingBoolean: r,
      ariaDescribedby: v,
      computedAriaInvalid: O,
      contentColProps: $,
      isHorizontal: w,
      labelAlignClasses: f,
      labelColProps: k,
      onLegendClick: (S) => {
        if (e.labelFor)
          return;
        const { target: A } = S, F = A ? A.tagName : "";
        if (xu.indexOf(F) !== -1)
          return;
        const C = cs(_u, m).filter(ds);
        C.length === 1 && is(C[0]);
      },
      stateClass: V
    };
  },
  render() {
    const e = this.$props, t = this.$slots, l = ke(), a = !e.labelFor;
    let n = null;
    const o = Me(Au, {}, t) || e.label, i = o ? Qe("_BV_label_") : null;
    if (o || this.isHorizontal) {
      const O = a ? "legend" : "label";
      if (this.labelSrOnlyBoolean)
        o && (n = re(
          O,
          {
            class: "visually-hidden",
            id: i,
            for: e.labelFor || null
          },
          o
        )), this.isHorizontal ? n = re(Tt, this.labelColProps, { default: () => n }) : n = re("div", {}, [n]);
      else {
        const x = {
          onClick: a ? this.onLegendClick : null,
          ...this.isHorizontal ? this.labelColProps : {},
          tag: this.isHorizontal ? O : null,
          id: i,
          for: e.labelFor || null,
          tabIndex: a ? "-1" : null,
          class: [
            this.isHorizontal ? "col-form-label" : "form-label",
            {
              "bv-no-focus-ring": a,
              "col-form-label": this.isHorizontal || a,
              "pt-0": !this.isHorizontal && a,
              "d-block": !this.isHorizontal && !a,
              [`col-form-label-${e.labelSize}`]: !!e.labelSize
            },
            this.labelAlignClasses,
            e.labelClass
          ]
        };
        this.isHorizontal ? n = re(Tt, x, { default: () => o }) : n = re(O, x, o);
      }
    }
    let r = null;
    const v = Me(Vu, {}, t) || this.invalidFeedback, p = v ? Qe("_BV_feedback_invalid_") : void 0;
    v && (r = re(
      xl,
      {
        ariaLive: e.feedbackAriaLive,
        id: p,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => v }
    ));
    let B = null;
    const b = Me(Ou, {}, t) || this.validFeedback, m = b ? Qe("_BV_feedback_valid_") : void 0;
    b && (B = re(
      Vl,
      {
        ariaLive: e.feedbackAriaLive,
        id: m,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => b }
      // validFeedbackContent
    ));
    let h = null;
    const $ = Me(Pu, {}, t) || this.description, f = $ ? Qe("_BV_description_") : void 0;
    $ && (h = re(
      Al,
      {
        id: f
      },
      { default: () => $ }
    ));
    const k = this.ariaDescribedby = [
      f,
      this.stateBoolean === !1 ? p : null,
      this.stateBoolean === !0 ? m : null
    ].filter((O) => O).join(" ") || null, w = [
      Me(Eu, { ariaDescribedby: k, descriptionId: f, id: l, labelId: i }, t) || "",
      r,
      B,
      h
    ];
    !this.isHorizontal && this.floatingBoolean && w.push(n);
    let y = re(
      "div",
      {
        ref: "content",
        class: [
          {
            "form-floating": !this.isHorizontal && this.floatingBoolean
          }
        ]
      },
      w
    );
    this.isHorizontal && (y = re(Tt, { ref: "content", ...this.contentColProps }, { default: () => w }));
    const V = {
      class: [
        // TODO consider removing this static class when refactored to <template> syntax
        "mb-3",
        this.stateClass,
        {
          "was-validated": this.validatedBoolean
        }
      ],
      id: ke(u(e, "id")).value,
      disabled: a ? this.disabledBoolean : null,
      role: a ? null : "group",
      "aria-invalid": this.computedAriaInvalid,
      // Only apply `aria-labelledby` if we are a horizontal fieldset
      // as the legend is no longer a direct child of fieldset
      "aria-labelledby": a && this.isHorizontal ? i : null
    };
    return this.isHorizontal && !a ? re(Dt, V, { default: () => [n, y] }) : re(
      a ? "fieldset" : "div",
      V,
      this.isHorizontal && a ? [re(Dt, null, { default: () => [n, y] })] : this.isHorizontal || !this.floatingBoolean ? [n, y] : [y]
    );
  }
}), Ia = [
  "text",
  "number",
  "email",
  "password",
  "search",
  "url",
  "tel",
  "date",
  "time",
  "range",
  "color",
  "datetime",
  "datetime-local",
  "month",
  "week"
], Fu = R({
  props: {
    ...eo,
    // debounce: {type: [String, Number], default: 0}, TODO: not implemented yet
    max: { type: [String, Number], required: !1 },
    min: { type: [String, Number], required: !1 },
    // noWheel: {type: [Boolean, String] as PropType<Booleanish>, default: false}, TODO: not implemented yet
    step: { type: [String, Number], required: !1 },
    type: {
      type: String,
      default: "text",
      validator: (e) => Ia.includes(e)
    }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(e, { emit: t }) {
    const { input: l, computedId: a, computedAriaInvalid: n, onInput: o, onChange: i, onBlur: r, focus: v, blur: p } = to(e, t), B = z(!1), b = d(() => {
      const $ = e.type === "range", f = e.type === "color";
      return {
        "form-control-highlighted": B.value,
        "form-range": $,
        "form-control": f || !e.plaintext && !$,
        "form-control-color": f,
        "form-control-plaintext": e.plaintext && !$ && !f,
        [`form-control-${e.size}`]: !!e.size,
        "is-valid": e.state === !0,
        "is-invalid": e.state === !1
      };
    }), m = d(
      () => Ia.includes(e.type) ? e.type : "text"
    );
    return {
      computedClasses: b,
      localType: m,
      input: l,
      computedId: a,
      computedAriaInvalid: n,
      onInput: o,
      onChange: i,
      onBlur: r,
      focus: v,
      blur: p,
      highlight: () => {
        B.value !== !0 && (B.value = !0, setTimeout(() => {
          B.value = !1;
        }, 2e3));
      }
    };
  }
}), Lu = ["id", "name", "form", "type", "disabled", "placeholder", "required", "autocomplete", "readonly", "min", "max", "step", "list", "aria-required", "aria-invalid"];
function Nu(e, t, l, a, n, o) {
  return g(), T("input", Q({
    id: e.computedId,
    ref: "input",
    class: e.computedClasses,
    name: e.name || void 0,
    form: e.form || void 0,
    type: e.localType,
    disabled: e.disabled,
    placeholder: e.placeholder,
    required: e.required,
    autocomplete: e.autocomplete || void 0,
    readonly: e.readonly || e.plaintext,
    min: e.min,
    max: e.max,
    step: e.step,
    list: e.type !== "password" ? e.list : void 0,
    "aria-required": e.required ? !0 : void 0,
    "aria-invalid": e.computedAriaInvalid
  }, e.$attrs, {
    onInput: t[0] || (t[0] = (i) => e.onInput(i)),
    onChange: t[1] || (t[1] = (i) => e.onChange(i)),
    onBlur: t[2] || (t[2] = (i) => e.onBlur(i))
  }), null, 16, Lu);
}
const zu = /* @__PURE__ */ ze(Fu, [["render", Nu]]), Ru = ["id", "checked", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "aria-required"], Hu = ["for"], $o = /* @__PURE__ */ R({
  __name: "BFormRadio",
  props: {
    ariaLabel: null,
    ariaLabelledby: null,
    form: null,
    id: null,
    name: null,
    size: null,
    autofocus: { default: !1 },
    modelValue: { type: [Boolean, String, Array, Object, Number], default: void 0 },
    plain: { default: !1 },
    button: { default: !1 },
    disabled: { default: !1 },
    buttonVariant: { default: "secondary" },
    inline: { default: !1 },
    required: { default: !1 },
    state: { default: void 0 },
    value: { type: [String, Boolean, Object, Number], default: !0 }
  },
  emits: ["input", "change", "update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, a = Oe(), n = Te(l, "modelValue", t, { passive: !0 }), o = ke(u(l, "id"), "form-check"), i = c(u(l, "autofocus")), r = c(u(l, "plain")), v = c(u(l, "button")), p = c(u(l, "disabled")), B = c(u(l, "inline")), b = c(u(l, "required")), m = c(u(l, "state")), h = Ge(Cn, null), $ = z(null);
    Ye($, {
      initialValue: i.value
    });
    const f = d(() => !Ve(a.default)), k = d({
      get: () => h !== null ? JSON.stringify(h.modelValue.value) === JSON.stringify(l.value) : JSON.stringify(n.value) === JSON.stringify(l.value),
      set: (S) => {
        const A = S ? l.value : !1;
        t("input", A), n.value = A, t("change", A), !(h === null || A === !1) && h.set(l.value);
      }
    }), w = d(
      () => !!(l.name ?? (h == null ? void 0 : h.name.value)) && (b.value || (h == null ? void 0 : h.required.value))
    ), y = d(() => ({
      plain: r.value || ((h == null ? void 0 : h.plain.value) ?? !1),
      button: v.value || ((h == null ? void 0 : h.button.value) ?? !1),
      inline: B.value || ((h == null ? void 0 : h.inline.value) ?? !1),
      size: l.size || (h == null ? void 0 : h.size.value),
      // TODO some of these values will be weirdly incorrect since they arent falsy
      state: m.value || (h == null ? void 0 : h.state.value),
      buttonVariant: l.buttonVariant || (h == null ? void 0 : h.buttonVariant.value)
      // Above
    })), V = Kn(y), O = Yn(y), x = Jn(y);
    return Ll(() => {
      h !== null && k.value === !0 && h.set("");
    }), (S, A) => {
      var F, C, I;
      return g(), T("div", {
        class: M(s(V))
      }, [
        nt(U("input", Q({ id: s(o) }, S.$attrs, {
          ref_key: "input",
          ref: $,
          "onUpdate:modelValue": A[0] || (A[0] = (E) => wt(k) ? k.value = E : null),
          checked: s(k),
          class: s(O),
          type: "radio",
          disabled: s(p) || ((F = s(h)) == null ? void 0 : F.disabled.value),
          required: s(w) ? !0 : void 0,
          name: e.name || ((C = s(h)) == null ? void 0 : C.name.value),
          form: e.form || ((I = s(h)) == null ? void 0 : I.form.value),
          "aria-label": e.ariaLabel,
          "aria-labelledby": e.ariaLabelledby,
          value: e.value,
          "aria-required": s(w) ? !0 : void 0
        }), null, 16, Ru), [
          [Do, s(k)]
        ]),
        s(f) || s(r) === !1 ? (g(), T("label", {
          key: 0,
          for: s(o),
          class: M(s(x))
        }, [
          _(S.$slots, "default")
        ], 10, Hu)) : Y("", !0)
      ], 2);
    };
  }
}), Mu = ["id"], Du = ["innerHTML"], ju = ["textContent"], qu = /* @__PURE__ */ R({
  __name: "BFormRadioGroup",
  props: {
    size: null,
    form: null,
    id: null,
    name: null,
    modelValue: { type: [String, Boolean, Array, Object, Number], default: "" },
    ariaInvalid: { default: void 0 },
    autofocus: { default: !1 },
    buttonVariant: { default: "secondary" },
    buttons: { default: !1 },
    disabled: { default: !1 },
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    options: { default: () => [] },
    plain: { default: !1 },
    required: { default: !1 },
    stacked: { default: !1 },
    state: { default: void 0 },
    textField: { default: "text" },
    validated: { default: !1 },
    valueField: { default: "value" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(e, { emit: t }) {
    const l = e, a = Te(l, "modelValue", t), n = ke(u(l, "id"), "radio"), o = ke(u(l, "name"), "checkbox"), i = c(u(l, "autofocus")), r = c(u(l, "buttons")), v = c(u(l, "disabled")), p = c(u(l, "plain")), B = c(u(l, "required")), b = c(u(l, "stacked")), m = c(u(l, "state")), h = c(u(l, "validated")), $ = z(null);
    Ye($, {
      initialValue: i.value
    });
    const f = z(
      a.value
    );
    at(Cn, {
      set: (O) => {
        f.value = O;
      },
      modelValue: a,
      buttonVariant: u(l, "buttonVariant"),
      form: u(l, "form"),
      name: o,
      // 'id': `${computedId.value}_option_${idx}`,
      button: r,
      state: m,
      plain: p,
      size: u(l, "size"),
      inline: d(() => !b.value),
      required: B,
      disabled: v
    }), xe(() => a.value = f.value);
    const k = d(
      () => l.options.map(
        (O, x) => typeof O == "string" ? {
          props: {
            value: O,
            disabled: v.value
          },
          text: O,
          html: void 0,
          self: Symbol(`radioGroupOptionItem${x}`)
        } : {
          props: {
            value: O[l.valueField],
            disabled: O[l.disabledField],
            ...O.props ? O.props : {}
          },
          text: O[l.textField],
          html: O[l.htmlField],
          self: Symbol(`radioGroupOptionItem${x}`)
        }
      )
    ), w = d(() => ({
      required: B.value,
      ariaInvalid: l.ariaInvalid,
      state: m.value,
      validated: h.value,
      buttons: r.value,
      stacked: b.value,
      size: l.size
    })), y = Zn(w), V = Qn(w);
    return (O, x) => (g(), T("div", Q(s(y), {
      id: s(n),
      ref_key: "element",
      ref: $,
      role: "radiogroup",
      class: [s(V), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      _(O.$slots, "first"),
      (g(!0), T(ue, null, Be(s(k), (S) => (g(), j($o, Q({
        key: S.self
      }, S.props), {
        default: q(() => [
          S.html ? (g(), T("span", {
            key: 0,
            innerHTML: S.html
          }, null, 8, Du)) : (g(), T("span", {
            key: 1,
            textContent: K(S.text)
          }, null, 8, ju))
        ]),
        _: 2
      }, 1040))), 128)),
      _(O.$slots, "default")
    ], 16, Mu));
  }
}), Gu = ["value", "disabled"], Xl = /* @__PURE__ */ R({
  __name: "BFormSelectOption",
  props: {
    value: null,
    disabled: { default: !1 }
  },
  setup(e) {
    const l = c(u(e, "disabled"));
    return (a, n) => (g(), T("option", {
      value: e.value,
      disabled: s(l)
    }, [
      _(a.$slots, "default")
    ], 8, Gu));
  }
}), Wu = ["label"], wo = /* @__PURE__ */ R({
  __name: "BFormSelectOptionGroup",
  props: {
    label: null,
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    options: { default: () => [] },
    textField: { default: "text" },
    valueField: { default: "value" }
  },
  setup(e) {
    const t = e, l = d(
      () => Gl(t.options, "BFormSelectOptionGroup", t)
    );
    return (a, n) => (g(), T("optgroup", { label: e.label }, [
      _(a.$slots, "first"),
      (g(!0), T(ue, null, Be(s(l), (o, i) => (g(), j(Xl, Q({
        key: i,
        value: o.value,
        disabled: o.disabled
      }, a.$attrs, {
        innerHTML: o.html || o.text
      }), null, 16, ["value", "disabled", "innerHTML"]))), 128)),
      _(a.$slots, "default")
    ], 8, Wu));
  }
}), Uu = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid"], Xu = /* @__PURE__ */ R({
  __name: "BFormSelect",
  props: {
    ariaInvalid: { default: void 0 },
    autofocus: { default: !1 },
    disabled: { default: !1 },
    disabledField: { default: "disabled" },
    form: null,
    htmlField: { default: "html" },
    id: null,
    labelField: { default: "label" },
    multiple: { default: !1 },
    name: null,
    options: { default: () => [] },
    optionsField: { default: "options" },
    plain: { default: !1 },
    required: { default: !1 },
    selectSize: { default: 0 },
    size: null,
    state: { default: void 0 },
    textField: { default: "text" },
    valueField: { default: "value" },
    modelValue: { default: "" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(e, { emit: t }) {
    const l = e, a = Te(l, "modelValue", t), n = ke(u(l, "id"), "input"), o = c(u(l, "autofocus")), i = c(u(l, "disabled")), r = c(u(l, "multiple")), v = c(u(l, "plain")), p = c(u(l, "required")), B = c(u(l, "state")), b = z();
    Ye(b, {
      initialValue: o.value
    });
    const m = d(() => ({
      "form-control": v.value,
      [`form-control-${l.size}`]: l.size && v.value,
      "form-select": !v.value,
      [`form-select-${l.size}`]: l.size && !v.value,
      "is-valid": B.value === !0,
      "is-invalid": B.value === !1
    })), h = d(() => {
      if (l.selectSize || v.value)
        return l.selectSize;
    }), $ = d(
      () => il(l.ariaInvalid, B.value)
    ), f = d(() => Gl(l.options, "BFormSelect", l)), k = d({
      get: () => a.value,
      set: (w) => {
        t("change", w), a.value = w, t("input", w);
      }
    });
    return (w, y) => nt((g(), T("select", Q({
      id: s(n),
      ref_key: "input",
      ref: b
    }, w.$attrs, {
      "onUpdate:modelValue": y[0] || (y[0] = (V) => wt(k) ? k.value = V : null),
      class: s(m),
      name: e.name,
      form: e.form || void 0,
      multiple: s(r) || void 0,
      size: s(h),
      disabled: s(i),
      required: s(p),
      "aria-required": s(p) ? !0 : void 0,
      "aria-invalid": s($)
    }), [
      _(w.$slots, "first"),
      (g(!0), T(ue, null, Be(s(f), (V, O) => (g(), T(ue, { key: O }, [
        Array.isArray(V.options) ? (g(), j(wo, {
          key: 0,
          label: V.label,
          options: V.options
        }, null, 8, ["label", "options"])) : (g(), j(Xl, {
          key: 1,
          value: V.value,
          disabled: V.disabled,
          innerHTML: V.html || V.text
        }, null, 8, ["value", "disabled", "innerHTML"]))
      ], 64))), 128)),
      _(w.$slots, "default")
    ], 16, Uu)), [
      [jo, s(k)]
    ]);
  }
}), Ku = ["id"], ko = /* @__PURE__ */ R({
  __name: "BFormTag",
  props: {
    id: null,
    title: null,
    disabled: { default: !1 },
    noRemove: { default: !1 },
    pill: { default: !1 },
    removeLabel: { default: "Remove tag" },
    tag: { default: "span" },
    variant: { default: "secondary" }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const l = e, a = Oe(), n = ke(u(l, "id")), o = c(u(l, "disabled")), i = c(u(l, "noRemove")), r = c(u(l, "pill")), v = d(
      () => {
        var b;
        return ((((b = a.default) == null ? void 0 : b.call(a)[0].children) ?? "").toString() || l.title) ?? "";
      }
    ), p = d(() => `${n.value}taglabel__`), B = d(() => [
      `bg-${l.variant}`,
      {
        "text-dark": ["warning", "info", "light"].includes(l.variant),
        "rounded-pill": r.value,
        disabled: o.value
      }
    ]);
    return (b, m) => (g(), j(le(e.tag), {
      id: s(n),
      title: s(v),
      class: M(["badge b-form-tag d-inline-flex align-items-center mw-100", s(B)]),
      "aria-labelledby": s(p)
    }, {
      default: q(() => [
        U("span", {
          id: s(p),
          class: "b-form-tag-content flex-grow-1 text-truncate"
        }, [
          _(b.$slots, "default", {}, () => [
            se(K(s(v)), 1)
          ])
        ], 8, Ku),
        !s(o) && !s(i) ? (g(), j(Ct, {
          key: 0,
          "aria-keyshortcuts": "Delete",
          "aria-label": e.removeLabel,
          class: "b-form-tag-remove",
          white: !["warning", "info", "light"].includes(e.variant),
          "aria-describedby": s(p),
          "aria-controls": e.id,
          onClick: m[0] || (m[0] = (h) => t("remove", s(v)))
        }, null, 8, ["aria-label", "white", "aria-describedby", "aria-controls"])) : Y("", !0)
      ]),
      _: 3
    }, 8, ["id", "title", "class", "aria-labelledby"]));
  }
}), Yu = ["id"], Ju = ["id", "for", "aria-live"], Zu = ["id", "aria-live"], Qu = ["id"], ed = ["aria-controls"], td = {
  role: "group",
  class: "d-flex"
}, ld = ["id", "disabled", "value", "type", "placeholder", "form", "required"], ad = ["disabled"], nd = {
  "aria-live": "polite",
  "aria-atomic": "true"
}, od = {
  key: 0,
  class: "d-block invalid-feedback"
}, sd = {
  key: 1,
  class: "form-text text-muted"
}, rd = {
  key: 2,
  class: "form-text text-muted"
}, id = ["name", "value"], ud = /* @__PURE__ */ R({
  __name: "BFormTags",
  props: {
    addButtonText: { default: "Add" },
    addButtonVariant: { default: "outline-secondary" },
    addOnChange: { default: !1 },
    autofocus: { default: !1 },
    disabled: { default: !1 },
    duplicateTagText: { default: "Duplicate tag(s)" },
    inputAttrs: null,
    inputClass: null,
    inputId: null,
    inputType: { default: "text" },
    invalidTagText: { default: "Invalid tag(s)" },
    form: null,
    limit: null,
    limitTagsText: { default: "Tag limit reached" },
    modelValue: { default: () => [] },
    name: null,
    noAddOnEnter: { default: !1 },
    noOuterFocus: { default: !1 },
    noTagRemove: { default: !1 },
    placeholder: { default: "Add tag..." },
    removeOnDelete: { default: !1 },
    required: { default: !1 },
    separator: null,
    state: { default: void 0 },
    size: null,
    tagClass: null,
    tagPills: { default: !1 },
    tagRemoveLabel: null,
    tagRemovedLabel: { default: "Tag removed" },
    tagValidator: { type: Function, default: () => !0 },
    tagVariant: { default: "secondary" }
  },
  emits: ["update:modelValue", "input", "tag-state", "focus", "focusin", "focusout", "blur"],
  setup(e, { emit: t }) {
    const l = e, a = Te(l, "modelValue", t), n = ke(), o = c(u(l, "addOnChange")), i = c(u(l, "autofocus")), r = c(u(l, "disabled")), v = c(u(l, "noAddOnEnter")), p = c(u(l, "noOuterFocus")), B = c(u(l, "noTagRemove")), b = c(u(l, "removeOnDelete")), m = c(u(l, "required")), h = c(u(l, "state")), $ = c(u(l, "tagPills")), f = z(null), k = d(() => l.inputId || `${n.value}input__`), w = z(a.value), y = z(""), V = z(!1), O = z(!1), x = z(""), S = z([]), A = z([]), F = z([]), C = d(() => ({
      [`form-control-${l.size}`]: l.size !== void 0,
      disabled: r.value,
      focus: O.value,
      "is-invalid": h.value === !1,
      "is-valid": h.value === !0
    })), I = d(() => w.value.includes(y.value)), E = d(
      () => y.value === "" ? !1 : !l.tagValidator(y.value)
    ), W = d(() => w.value.length === l.limit), D = d(() => !E.value && !I.value), J = d(() => ({
      addButtonText: l.addButtonText,
      addButtonVariant: l.addButtonVariant,
      addTag: de,
      disableAddButton: D.value,
      disabled: r.value,
      duplicateTagText: l.duplicateTagText,
      duplicateTags: F.value,
      form: l.form,
      inputAttrs: {
        ...l.inputAttrs,
        disabled: r.value,
        form: l.form,
        id: k,
        value: y
      },
      inputHandlers: {
        input: pe,
        keydown: ne,
        change: be
      },
      inputId: k,
      inputType: l.inputType,
      invalidTagText: l.invalidTagText,
      invalidTags: A.value,
      isDuplicate: I.value,
      isInvalid: E.value,
      isLimitReached: W.value,
      limitTagsText: l.limitTagsText,
      limit: l.limit,
      noTagRemove: B.value,
      placeholder: l.placeholder,
      removeTag: L,
      required: m.value,
      separator: l.separator,
      size: l.size,
      state: h.value,
      tagClass: l.tagClass,
      tagPills: $.value,
      tagRemoveLabel: l.tagRemoveLabel,
      tagVariant: l.tagVariant,
      tags: w.value
    }));
    ve(a, (N) => {
      w.value = N;
    });
    const ae = () => {
      var N;
      i.value && ((N = f.value) == null || N.focus());
    }, Z = (N) => {
      if (r.value) {
        N.target.blur();
        return;
      }
      t("focusin", N);
    }, te = (N) => {
      r.value || p.value || (O.value = !0, t("focus", N));
    }, ce = (N) => {
      O.value = !1, t("blur", N);
    }, pe = (N) => {
      var oe, he;
      const ee = typeof N == "string" ? N : N.target.value;
      if (V.value = !1, (oe = l.separator) != null && oe.includes(ee.charAt(0)) && ee.length > 0) {
        f.value && (f.value.value = "");
        return;
      }
      if (y.value = ee, (he = l.separator) != null && he.includes(ee.charAt(ee.length - 1))) {
        de(ee.slice(0, ee.length - 1));
        return;
      }
      S.value = l.tagValidator(ee) && !I.value ? [ee] : [], A.value = l.tagValidator(ee) ? [] : [ee], F.value = I.value ? [ee] : [], t("tag-state", S.value, A.value, F.value);
    }, be = (N) => {
      o.value && (pe(N), I.value || de(y.value));
    }, ne = (N) => {
      if (N.key === "Enter" && !v.value) {
        de(y.value);
        return;
      }
      (N.key === "Backspace" || N.key === "Delete") && b.value && y.value === "" && V.value && w.value.length > 0 ? L(w.value[w.value.length - 1]) : V.value = !0;
    }, de = (N) => {
      var oe;
      if (N = (N || y.value).trim(), N === "" || I.value || !l.tagValidator(N) || l.limit && W.value)
        return;
      const ee = [...a.value, N];
      y.value = "", V.value = !0, a.value = ee, t("input", ee), (oe = f.value) == null || oe.focus();
    }, L = (N) => {
      const ee = w.value.indexOf((N == null ? void 0 : N.toString()) ?? "");
      x.value = w.value.splice(ee, 1).toString(), a.value = w.value;
    };
    return Ne(() => {
      ae(), a.value.length > 0 && (V.value = !0);
    }), Za(ae), (N, ee) => (g(), T("div", {
      id: s(n),
      class: M(["b-form-tags form-control h-auto", s(C)]),
      role: "group",
      tabindex: "-1",
      onFocusin: Z,
      onFocusout: ee[1] || (ee[1] = (oe) => t("focusout", oe))
    }, [
      U("output", {
        id: `${s(n)}selected_tags__`,
        class: "visually-hidden",
        for: s(k),
        "aria-live": O.value ? "polite" : "off",
        "aria-atomic": "true",
        "aria-relevant": "additions text"
      }, K(w.value.join(", ")), 9, Ju),
      U("div", {
        id: `${s(n)}removed_tags__`,
        role: "status",
        "aria-live": O.value ? "assertive" : "off",
        "aria-atomic": "true",
        class: "visually-hidden"
      }, " (" + K(e.tagRemovedLabel) + ") " + K(x.value), 9, Zu),
      _(N.$slots, "default", $e(Ae(s(J))), () => [
        U("ul", {
          id: `${s(n)}tag_list__`,
          class: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
        }, [
          (g(!0), T(ue, null, Be(w.value, (oe, he) => _(N.$slots, "tag", $e(Q({ key: he }, { tag: oe, tagClass: e.tagClass, tagVariant: e.tagVariant, tagPills: s($), removeTag: L })), () => [
            (g(), j(ko, {
              key: oe,
              class: M(e.tagClass),
              tag: "li",
              variant: e.tagVariant,
              pill: e.tagPills,
              onRemove: L
            }, {
              default: q(() => [
                se(K(oe), 1)
              ]),
              _: 2
            }, 1032, ["class", "variant", "pill"]))
          ])), 128)),
          U("li", {
            role: "none",
            "aria-live": "off",
            class: "b-from-tags-field flex-grow-1",
            "aria-controls": `${s(n)}tag_list__`
          }, [
            U("div", td, [
              U("input", Q({
                id: s(k),
                ref_key: "input",
                ref: f,
                disabled: s(r),
                value: y.value,
                type: e.inputType,
                placeholder: e.placeholder,
                class: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
                style: { outline: "currentcolor none 0px", "min-width": "5rem" }
              }, e.inputAttrs, {
                form: e.form,
                required: s(m),
                onInput: pe,
                onChange: be,
                onKeydown: ne,
                onFocus: te,
                onBlur: ce
              }), null, 16, ld),
              s(D) ? (g(), T("button", {
                key: 0,
                type: "button",
                class: M(["btn b-form-tags-button py-0", [
                  `btn-${e.addButtonVariant}`,
                  {
                    "disabled invisible": y.value.length === 0
                  },
                  e.inputClass
                ]]),
                style: { "font-size": "90%" },
                disabled: s(r) || y.value.length === 0 || s(W),
                onClick: ee[0] || (ee[0] = (oe) => de(y.value))
              }, [
                _(N.$slots, "add-button-text", {}, () => [
                  se(K(e.addButtonText), 1)
                ])
              ], 10, ad)) : Y("", !0)
            ])
          ], 8, ed)
        ], 8, Qu),
        U("div", nd, [
          s(E) ? (g(), T("div", od, K(e.invalidTagText) + ": " + K(y.value), 1)) : Y("", !0),
          s(I) ? (g(), T("small", sd, K(e.duplicateTagText) + ": " + K(y.value), 1)) : Y("", !0),
          w.value.length === e.limit ? (g(), T("small", rd, "Tag limit reached")) : Y("", !0)
        ])
      ]),
      e.name ? (g(!0), T(ue, { key: 0 }, Be(w.value, (oe, he) => (g(), T("input", {
        key: he,
        type: "hidden",
        name: e.name,
        value: oe
      }, null, 8, id))), 128)) : Y("", !0)
    ], 42, Yu));
  }
}), dd = R({
  props: {
    ...eo,
    noResize: { type: [Boolean, String], default: !1 },
    rows: { type: [String, Number], required: !1, default: 2 },
    wrap: { type: String, default: "soft" }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(e, { emit: t }) {
    const { input: l, computedId: a, computedAriaInvalid: n, onInput: o, onChange: i, onBlur: r, focus: v, blur: p } = to(e, t), B = c(u(e, "noResize")), b = d(() => ({
      "form-control": !e.plaintext,
      "form-control-plaintext": e.plaintext,
      [`form-control-${e.size}`]: !!e.size,
      "is-valid": e.state === !0,
      "is-invalid": e.state === !1
    })), m = d(() => ({
      resize: B.value ? "none" : void 0
    }));
    return {
      input: l,
      computedId: a,
      computedAriaInvalid: n,
      onInput: o,
      onChange: i,
      onBlur: r,
      focus: v,
      blur: p,
      computedClasses: b,
      computedStyles: m
    };
  }
}), cd = ["id", "name", "form", "disabled", "placeholder", "required", "autocomplete", "readonly", "aria-required", "aria-invalid", "rows", "wrap"];
function fd(e, t, l, a, n, o) {
  return g(), T("textarea", Q({
    id: e.computedId,
    ref: "input",
    class: e.computedClasses,
    name: e.name || void 0,
    form: e.form || void 0,
    disabled: e.disabled,
    placeholder: e.placeholder,
    required: e.required,
    autocomplete: e.autocomplete || void 0,
    readonly: e.readonly || e.plaintext,
    "aria-required": e.required ? !0 : void 0,
    "aria-invalid": e.computedAriaInvalid,
    rows: e.rows,
    style: e.computedStyles,
    wrap: e.wrap || void 0
  }, e.$attrs, {
    onInput: t[0] || (t[0] = (i) => e.onInput(i)),
    onChange: t[1] || (t[1] = (i) => e.onChange(i)),
    onBlur: t[2] || (t[2] = (i) => e.onBlur(i))
  }), null, 16, cd);
}
const vd = /* @__PURE__ */ ze(dd, [["render", fd]]), md = {
  key: 0,
  class: "input-group-text"
}, pd = ["innerHTML"], gd = { key: 1 }, bd = {
  key: 0,
  class: "input-group-text"
}, hd = ["innerHTML"], yd = { key: 1 }, Bd = /* @__PURE__ */ R({
  __name: "BInputGroup",
  props: {
    append: null,
    appendHtml: null,
    id: null,
    prepend: null,
    prependHtml: null,
    size: null,
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, l = d(() => ({
      "input-group-sm": t.size === "sm",
      "input-group-lg": t.size === "lg"
    })), a = d(() => !!t.append || !!t.appendHtml), n = d(() => !!t.prepend || !!t.prependHtml);
    return (o, i) => (g(), j(le(e.tag), {
      id: e.id,
      class: M(["input-group", s(l)]),
      role: "group"
    }, {
      default: q(() => [
        _(o.$slots, "prepend", {}, () => [
          s(n) ? (g(), T("span", md, [
            e.prependHtml ? (g(), T("span", {
              key: 0,
              innerHTML: e.prependHtml
            }, null, 8, pd)) : (g(), T("span", gd, K(e.prepend), 1))
          ])) : Y("", !0)
        ]),
        _(o.$slots, "default"),
        _(o.$slots, "append", {}, () => [
          s(a) ? (g(), T("span", bd, [
            e.appendHtml ? (g(), T("span", {
              key: 0,
              innerHTML: e.appendHtml
            }, null, 8, hd)) : (g(), T("span", yd, K(e.append), 1))
          ])) : Y("", !0)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), So = /* @__PURE__ */ R({
  __name: "BInputGroupText",
  props: {
    tag: { default: "div" },
    text: null
  },
  setup(e) {
    return (t, l) => (g(), j(le(e.tag), { class: "input-group-text" }, {
      default: q(() => [
        _(t.$slots, "default", {}, () => [
          se(K(e.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), Kl = /* @__PURE__ */ R({
  __name: "BInputGroupAddon",
  props: {
    isText: { default: !1 }
  },
  setup(e) {
    const l = c(u(e, "isText"));
    return (a, n) => s(l) ? (g(), j(So, { key: 0 }, {
      default: q(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    })) : _(a.$slots, "default", { key: 1 });
  }
}), $d = /* @__PURE__ */ R({
  __name: "BInputGroupAppend",
  props: {
    isText: { default: !1 }
  },
  setup(e) {
    return (t, l) => (g(), j(Kl, { "is-text": e.isText }, {
      default: q(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["is-text"]));
  }
}), wd = /* @__PURE__ */ R({
  __name: "BInputGroupPrepend",
  props: {
    isText: { default: !1 }
  },
  setup(e) {
    return (t, l) => (g(), j(Kl, { "is-text": e.isText }, {
      default: q(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["is-text"]));
  }
}), kd = /* @__PURE__ */ R({
  __name: "BListGroup",
  props: {
    flush: { default: !1 },
    horizontal: { type: [Boolean, String], default: !1 },
    numbered: { default: !1 },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, l = c(u(t, "flush")), a = c(u(t, "numbered")), n = d(() => {
      const i = l.value ? !1 : t.horizontal;
      return {
        "list-group-flush": l.value,
        "list-group-horizontal": i === !0,
        [`list-group-horizontal-${i}`]: typeof i == "string",
        "list-group-numbered": a.value
      };
    }), o = d(() => a.value === !0 ? "ol" : t.tag);
    return at($n, {
      numbered: a
    }), (i, r) => (g(), j(le(s(o)), {
      class: M(["list-group", s(n)])
    }, {
      default: q(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Sd = /* @__PURE__ */ R({
  __name: "BListGroupItem",
  props: {
    action: { default: !1 },
    active: { default: !1 },
    button: { default: !1 },
    disabled: { default: !1 },
    href: null,
    tag: { default: "div" },
    target: { default: "_self" },
    to: null,
    variant: null
  },
  setup(e) {
    const t = e, l = ln(), a = Ge($n, null), n = c(u(t, "action")), o = c(u(t, "active")), i = c(u(t, "button")), r = c(u(t, "disabled")), v = d(() => !i.value && (!!t.href || !!t.to)), p = d(
      () => a != null && a.numbered.value ? "li" : i.value ? "button" : v.value ? Le : t.tag
    ), B = d(
      () => n.value || v.value || i.value || ["a", "router-link", "button", "b-link"].includes(t.tag)
    ), b = d(() => ({
      [`list-group-item-${t.variant}`]: t.variant !== void 0,
      "list-group-item-action": B.value,
      active: o.value,
      disabled: r.value
    })), m = d(() => {
      const h = {};
      return i.value && ((!l || !l.type) && (h.type = "button"), r.value && (h.disabled = !0)), h;
    });
    return (h, $) => (g(), j(le(s(p)), Q({
      class: ["list-group-item", s(b)],
      "aria-current": s(o) ? !0 : void 0,
      "aria-disabled": s(r) ? !0 : void 0,
      target: s(v) ? e.target : void 0,
      href: s(i) ? void 0 : e.href,
      to: s(i) ? void 0 : e.to
    }, s(m)), {
      default: q(() => [
        _(h.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "aria-current", "aria-disabled", "target", "href", "to"]));
  }
}), Cd = ["id", "aria-labelledby", "aria-describedby"], Td = ["id"], _d = {
  inheritAttrs: !1
}, xd = /* @__PURE__ */ R({
  ..._d,
  __name: "BModal",
  props: {
    bodyBgVariant: null,
    bodyClass: null,
    bodyTextVariant: null,
    busy: { default: !1 },
    lazy: { default: !1 },
    buttonSize: { default: "md" },
    cancelDisabled: { default: !1 },
    cancelTitle: { default: "Cancel" },
    cancelVariant: { default: "secondary" },
    centered: { default: !1 },
    contentClass: null,
    dialogClass: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerClass: null,
    footerTextVariant: null,
    fullscreen: { type: [Boolean, String], default: !1 },
    headerBgVariant: null,
    headerBorderVariant: null,
    headerClass: null,
    headerCloseLabel: { default: "Close" },
    headerCloseWhite: { default: !1 },
    headerTextVariant: null,
    hideBackdrop: { default: !1 },
    hideFooter: { default: !1 },
    hideHeader: { default: !1 },
    hideHeaderClose: { default: !1 },
    id: null,
    modalClass: null,
    modelValue: { default: !1 },
    noCloseOnBackdrop: { default: !1 },
    noCloseOnEsc: { default: !1 },
    noFade: { default: !1 },
    autoFocus: { default: !0 },
    okDisabled: { default: !1 },
    okOnly: { default: !1 },
    okTitle: { default: "Ok" },
    okVariant: { default: "primary" },
    scrollable: { default: !1 },
    show: { default: !1 },
    size: null,
    title: null,
    titleClass: null,
    titleSrOnly: { default: !1 },
    titleTag: { default: "h5" },
    static: { default: !1 },
    autoFocusButton: null
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden", "hide-prevented", "show-prevented", "ok", "cancel", "close"],
  setup(e, { emit: t }) {
    const l = e, a = Oe(), n = ke(u(l, "id"), "modal"), o = Te(l, "modelValue", t), i = c(u(l, "busy")), r = c(u(l, "lazy")), v = c(u(l, "cancelDisabled")), p = c(u(l, "centered")), B = c(u(l, "hideBackdrop")), b = c(u(l, "hideFooter")), m = c(u(l, "hideHeader")), h = c(u(l, "hideHeaderClose")), $ = c(o), f = c(u(l, "noCloseOnBackdrop")), k = c(u(l, "noCloseOnEsc")), w = c(u(l, "noFade")), y = c(u(l, "autoFocus")), V = c(u(l, "okDisabled")), O = c(u(l, "okOnly")), x = c(u(l, "scrollable")), S = c(u(l, "titleSrOnly")), A = c(u(l, "static")), F = z(null), C = z(null), I = z(null), E = z(null), W = z(!1), D = z(!1), { focused: J } = Ye(F), { focused: ae } = Ye(C), { focused: Z } = Ye(I), { focused: te } = Ye(E), ce = d(() => [
      l.modalClass,
      {
        fade: !w.value,
        show: W.value
      }
    ]), pe = d(
      () => r.value === !1 || r.value === !0 && D.value === !0 || r.value === !0 && $.value === !0
    ), be = d(() => !Ve(a["header-close"])), ne = d(() => [
      l.dialogClass,
      {
        "modal-fullscreen": l.fullscreen === !0,
        [`modal-fullscreen-${l.fullscreen}-down`]: typeof l.fullscreen == "string",
        [`modal-${l.size}`]: l.size !== void 0,
        "modal-dialog-centered": p.value,
        "modal-dialog-scrollable": x.value
      }
    ]), de = d(() => [
      l.bodyClass,
      {
        [`bg-${l.bodyBgVariant}`]: l.bodyBgVariant !== void 0,
        [`text-${l.bodyTextVariant}`]: l.bodyTextVariant !== void 0
      }
    ]), L = d(() => [
      l.headerClass,
      {
        [`bg-${l.headerBgVariant}`]: l.headerBgVariant !== void 0,
        [`border-${l.headerBorderVariant}`]: l.headerBorderVariant !== void 0,
        [`text-${l.headerTextVariant}`]: l.headerTextVariant !== void 0
      }
    ]), N = d(() => [
      l.footerClass,
      {
        [`bg-${l.footerBgVariant}`]: l.footerBgVariant !== void 0,
        [`border-${l.footerBorderVariant}`]: l.footerBorderVariant !== void 0,
        [`text-${l.footerTextVariant}`]: l.footerTextVariant !== void 0
      }
    ]), ee = d(() => [
      l.titleClass,
      {
        ["visually-hidden"]: S.value
      }
    ]), oe = d(() => v.value || i.value), he = d(() => V.value || i.value), _e = (H, fe = {}) => new Et(H, {
      cancelable: !1,
      target: F.value || null,
      relatedTarget: null,
      trigger: null,
      ...fe,
      componentId: n.value
    }), G = (H = "") => {
      const fe = _e("hide", { cancelable: H !== "", trigger: H });
      if (H === "ok" && t(H, fe), H === "cancel" && t(H, fe), H === "close" && t(H, fe), t("hide", fe), fe.defaultPrevented || H === "backdrop" && f.value || H === "esc" && k.value) {
        t("hide-prevented");
        return;
      }
      o.value = !1;
    }, ie = () => {
      const H = _e("show", { cancelable: !0 });
      if (t("show", H), H.defaultPrevented) {
        o.value = !1, t("show-prevented");
        return;
      }
      o.value = !0;
    }, De = () => {
      y.value !== !1 && (l.autoFocusButton === "ok" ? ae.value = !0 : l.autoFocusButton === "close" ? te.value = !0 : l.autoFocusButton === "cancel" ? Z.value = !0 : J.value = !0);
    }, Pe = () => ie(), P = () => {
      W.value = !0, De(), t("shown", _e("shown")), r.value === !0 && (D.value = !0);
    }, X = () => W.value = !1, ge = () => {
      t("hidden", _e("hidden")), r.value === !0 && (D.value = !1);
    };
    return Ne(() => {
      $.value === !0 && (W.value = !0);
    }), we(F, "bv-toggle", () => {
      $.value ? G() : ie();
    }), (H, fe) => (g(), j(Fl, {
      to: "body",
      disabled: s(A)
    }, [
      ye(St, {
        "no-fade": !0,
        "trans-props": { enterToClass: "show" },
        onBeforeEnter: Pe,
        onAfterEnter: P,
        onLeave: X,
        onAfterLeave: ge
      }, {
        default: q(() => [
          nt(U("div", Q({
            id: s(n),
            ref_key: "element",
            ref: F,
            class: ["modal", s(ce)],
            role: "dialog",
            "aria-labelledby": `${s(n)}-label`,
            "aria-describedby": `${s(n)}-body`,
            tabindex: "-1"
          }, H.$attrs, {
            onKeyup: fe[5] || (fe[5] = Vt((me) => G("esc"), ["esc"]))
          }), [
            U("div", {
              class: M(["modal-dialog", s(ne)])
            }, [
              s(pe) ? (g(), T("div", {
                key: 0,
                class: M(["modal-content", e.contentClass])
              }, [
                s(m) ? Y("", !0) : (g(), T("div", {
                  key: 0,
                  class: M(["modal-header", s(L)])
                }, [
                  _(H.$slots, "header", {}, () => [
                    (g(), j(le(e.titleTag), {
                      id: `${s(n)}-label`,
                      class: M(["modal-title", s(ee)])
                    }, {
                      default: q(() => [
                        _(H.$slots, "title", {}, () => [
                          se(K(e.title), 1)
                        ], !0)
                      ]),
                      _: 3
                    }, 8, ["id", "class"])),
                    s(h) ? Y("", !0) : (g(), T(ue, { key: 0 }, [
                      s(be) ? (g(), T("button", {
                        key: 0,
                        type: "button",
                        onClick: fe[0] || (fe[0] = (me) => G("close"))
                      }, [
                        _(H.$slots, "header-close", {}, void 0, !0)
                      ])) : (g(), j(Ct, {
                        key: 1,
                        ref_key: "closeButton",
                        ref: E,
                        "aria-label": e.headerCloseLabel,
                        white: e.headerCloseWhite,
                        onClick: fe[1] || (fe[1] = (me) => G("close"))
                      }, null, 8, ["aria-label", "white"]))
                    ], 64))
                  ], !0)
                ], 2)),
                U("div", {
                  id: `${s(n)}-body`,
                  class: M(["modal-body", s(de)])
                }, [
                  _(H.$slots, "default", {}, void 0, !0)
                ], 10, Td),
                s(b) ? Y("", !0) : (g(), T("div", {
                  key: 1,
                  class: M(["modal-footer", s(N)])
                }, [
                  _(H.$slots, "footer", {}, () => [
                    _(H.$slots, "cancel", {}, () => [
                      s(O) ? Y("", !0) : (g(), j($t, {
                        key: 0,
                        ref_key: "cancelButton",
                        ref: I,
                        type: "button",
                        class: "btn",
                        disabled: s(oe),
                        size: e.buttonSize,
                        variant: e.cancelVariant,
                        onClick: fe[2] || (fe[2] = (me) => G("cancel"))
                      }, {
                        default: q(() => [
                          se(K(e.cancelTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"]))
                    ], !0),
                    _(H.$slots, "ok", {}, () => [
                      ye($t, {
                        ref_key: "okButton",
                        ref: C,
                        type: "button",
                        class: "btn",
                        disabled: s(he),
                        size: e.buttonSize,
                        variant: e.okVariant,
                        onClick: fe[3] || (fe[3] = (me) => G("ok"))
                      }, {
                        default: q(() => [
                          se(K(e.okTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"])
                    ], !0)
                  ], !0)
                ], 2))
              ], 2)) : Y("", !0)
            ], 2),
            s(B) ? Y("", !0) : _(H.$slots, "backdrop", { key: 0 }, () => [
              U("div", {
                class: "modal-backdrop fade show",
                onClick: fe[4] || (fe[4] = (me) => G("backdrop"))
              })
            ], !0)
          ], 16, Cd), [
            [nl, s($)]
          ])
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
});
const Ad = /* @__PURE__ */ ze(xd, [["__scopeId", "data-v-db863238"]]), Vd = /* @__PURE__ */ R({
  __name: "BNav",
  props: {
    align: null,
    cardHeader: { default: !1 },
    fill: { default: !1 },
    justified: { default: !1 },
    pills: { default: !1 },
    small: { default: !1 },
    tabs: { default: !1 },
    tag: { default: "ul" },
    vertical: { default: !1 }
  },
  setup(e) {
    const t = e, l = c(u(t, "cardHeader")), a = c(u(t, "fill")), n = c(u(t, "justified")), o = c(u(t, "pills")), i = c(u(t, "small")), r = c(u(t, "tabs")), v = c(u(t, "vertical")), p = Lt(u(t, "align")), B = d(() => ({
      "nav-tabs": r.value,
      "nav-pills": o.value && !r.value,
      "card-header-tabs": !v.value && l.value && r.value,
      "card-header-pills": !v.value && l.value && o.value && !r.value,
      "flex-column": v.value,
      "nav-fill": !v.value && a.value,
      "nav-justified": !v.value && n.value,
      [p.value]: !v.value && t.align !== void 0,
      small: i.value
    }));
    return (b, m) => (g(), j(le(e.tag), {
      class: M(["nav", s(B)])
    }, {
      default: q(() => [
        _(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Od = /* @__PURE__ */ R({
  __name: "BNavForm",
  props: {
    role: null,
    id: null,
    floating: { default: !1 },
    novalidate: { default: !1 },
    validated: { default: !1 }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const l = e, a = d(() => ({
      floating: l.floating,
      role: l.role,
      id: l.id,
      novalidate: l.novalidate,
      validated: l.validated
    })), n = (o) => t("submit", o);
    return (o, i) => (g(), j(ho, Q(s(a), {
      class: "d-flex",
      onSubmit: dt(n, ["prevent"])
    }), {
      default: q(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["onSubmit"]));
  }
}), Pd = R({
  components: { BLink: Le },
  props: {
    ...It(ft, ["event", "routerTag"])
  },
  setup(e) {
    return { disabledBoolean: c(u(e, "disabled")) };
  }
}), Ed = { class: "nav-item" };
function Id(e, t, l, a, n, o) {
  const i = tn("b-link");
  return g(), T("li", Ed, [
    ye(i, Q({ class: "nav-link" }, e.$props, {
      "active-class": "active",
      tabindex: e.disabledBoolean ? -1 : void 0,
      "aria-disabled": e.disabledBoolean ? !0 : void 0
    }), {
      default: q(() => [
        _(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["tabindex", "aria-disabled"])
  ]);
}
const Fd = /* @__PURE__ */ ze(Pd, [["render", Id]]), Ld = { class: "nav-item dropdown" }, Nd = /* @__PURE__ */ R({
  __name: "BNavItemDropdown",
  props: {
    id: null,
    text: null,
    toggleClass: null,
    size: null,
    offset: null,
    autoClose: { type: [Boolean, String] },
    dark: null,
    splitVariant: null,
    noCaret: null,
    variant: { default: "link" },
    modelValue: { default: !1 },
    lazy: null,
    strategy: null,
    floatingMiddleware: null,
    noFlip: null,
    noShift: null,
    dropup: null,
    dropend: null,
    dropstart: null,
    alignStart: null,
    alignEnd: null,
    menuClass: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, a = Te(l, "modelValue", t), n = c(a), o = d({
      get: () => n.value,
      set: (r) => a.value = r
    }), i = d(() => It(l, ["modelValue"]));
    return (r, v) => (g(), T("li", Ld, [
      ye(bo, Q({
        modelValue: s(o),
        "onUpdate:modelValue": v[0] || (v[0] = (p) => wt(o) ? o.value = p : null)
      }, s(i), { "is-nav": "" }), {
        "button-content": q(() => [
          _(r.$slots, "button-content")
        ]),
        "toggle-text": q(() => [
          _(r.$slots, "toggle-text")
        ]),
        default: q(() => [
          _(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["modelValue"])
    ]));
  }
}), zd = { class: "navbar-text" }, Rd = /* @__PURE__ */ R({
  __name: "BNavText",
  props: {
    text: null
  },
  setup(e) {
    return (t, l) => (g(), T("li", zd, [
      _(t.$slots, "default", {}, () => [
        se(K(e.text), 1)
      ])
    ]));
  }
}), Hd = /* @__PURE__ */ R({
  __name: "BNavbar",
  props: {
    fixed: null,
    print: { default: !1 },
    sticky: null,
    tag: { default: "nav" },
    toggleable: { type: [Boolean, String], default: !1 },
    dark: { default: !1 },
    variant: null,
    container: { type: [String, Boolean], default: "fluid" }
  },
  setup(e) {
    const t = e, l = c(u(t, "print")), a = c(u(t, "dark")), n = d(
      () => t.tag === "nav" ? void 0 : "navigation"
    ), o = d(
      () => typeof t.toggleable == "string" ? `navbar-expand-${t.toggleable}` : t.toggleable === !1 ? "navbar-expand" : void 0
    ), i = d(
      () => t.container === !0 ? "container" : "container-fluid"
    ), r = d(() => ({
      "d-print": l.value,
      [`sticky-${t.sticky}`]: t.sticky !== void 0,
      "navbar-dark": a.value,
      [`bg-${t.variant}`]: t.variant !== void 0,
      [`fixed-${t.fixed}`]: t.fixed !== void 0,
      [`${o.value}`]: o.value !== void 0
    }));
    return (v, p) => (g(), j(le(e.tag), {
      class: M(["navbar", s(r)]),
      role: s(n)
    }, {
      default: q(() => [
        e.container !== !1 ? (g(), T("div", {
          key: 0,
          class: M(s(i))
        }, [
          _(v.$slots, "default")
        ], 2)) : _(v.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class", "role"]));
  }
}), Fa = It(ft, ["event", "routerTag"]), Md = R({
  components: {
    BLink: Le
  },
  props: {
    tag: { type: String, default: "div" },
    ...Fa
  },
  setup(e) {
    const t = d(() => Ot(e)), l = d(
      () => t.value ? Le : e.tag
    );
    return {
      computedLinkProps: d(
        () => t.value ? Hl(e, Fa) : {}
      ),
      computedTag: l
    };
  }
});
function Dd(e, t, l, a, n, o) {
  return g(), j(le(e.computedTag), Q({ class: "navbar-brand" }, e.computedLinkProps), {
    default: q(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const jd = /* @__PURE__ */ ze(Md, [["render", Dd]]), qd = /* @__PURE__ */ R({
  __name: "BNavbarNav",
  props: {
    align: null,
    fill: { default: !1 },
    justified: { default: !1 },
    small: { default: !1 },
    tag: { default: "ul" }
  },
  setup(e) {
    const t = e, l = c(u(t, "fill")), a = c(u(t, "justified")), n = c(u(t, "small")), o = Lt(u(t, "align")), i = d(() => ({
      "nav-fill": l.value,
      "nav-justified": a.value,
      [o.value]: t.align !== void 0,
      small: n.value
    }));
    return (r, v) => (g(), T("ul", {
      class: M(["navbar-nav", s(i)])
    }, [
      _(r.$slots, "default")
    ], 2));
  }
}), La = (e, t) => e.setAttribute("data-bs-theme", t), Gd = {
  mounted(e, t) {
    La(e, t.value);
  },
  updated(e, t) {
    La(e, t.value);
  }
}, Yl = (e, t) => {
  const { modifiers: l, arg: a, value: n } = e, o = Object.keys(l || {}), i = typeof n == "string" ? n.split(Mt) : n;
  if (ps(t.tagName, "a")) {
    const r = Rl(t, "href") || "";
    Ko.test(r) && o.push(r.replace(Xo, ""));
  }
  return Array.prototype.concat.apply([], [a, i]).forEach((r) => typeof r == "string" && o.push(r)), o.filter((r, v, p) => r && p.indexOf(r) === v);
}, Wd = (e, t) => {
  Yl(e, t).forEach((a) => {
    const n = document.getElementById(a);
    n !== null && n.dispatchEvent(new Event("bv-toggle"));
  }), setTimeout(() => Co(e, t), 50);
}, Co = (e, t) => {
  const l = Yl(e, t);
  let a = !1;
  l.forEach((n) => {
    const o = document.getElementById(n);
    o != null && o.classList.contains("show") && (a = !0), o != null && o.classList.contains("closing") && (a = !1);
  }), t.setAttribute("aria-expanded", a ? "true" : "false");
}, To = {
  mounted(e, t) {
    e.__toggle = () => Wd(t, e), e.addEventListener("click", e.__toggle), Co(t, e), e.setAttribute("aria-controls", Yl(t, e).join(" "));
  },
  unmounted(e) {
    e.removeEventListener("click", e.__toggle), e.removeAttribute("aria-controls"), e.removeAttribute("aria-expanded");
  }
}, Ud = {
  mounted(e, t) {
    const l = tl(t.value, e);
    e.$__state = z({
      ...ll(t, e),
      ...l
    }), lo(e, t);
  },
  updated(e, t) {
    const l = tl(t.value, e);
    e.$__state && (e.$__state.value = {
      ...ll(t, e),
      ...l
    });
  },
  beforeUnmount(e) {
    ao(e);
  }
}, Xd = {
  mounted(e, t) {
    const l = tl(t.value, e);
    e.$__state = z({
      ...ll(t, e),
      title: l.title ?? l.content ?? "",
      tooltip: !0
    }), lo(e, t);
  },
  updated(e, t) {
    const l = tl(t.value, e);
    e.$__state && (e.$__state.value = {
      ...ll(t, e),
      title: l.title ?? l.content ?? "",
      tooltip: !0
    });
  },
  beforeUnmount(e) {
    ao(e);
  }
}, Kd = /* @__PURE__ */ U("span", { class: "navbar-toggler-icon" }, null, -1), Yd = /* @__PURE__ */ R({
  __name: "BNavbarToggle",
  props: {
    disabled: { default: !1 },
    label: { default: "Toggle navigation" },
    target: null
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const l = e, a = c(u(l, "disabled")), n = d(() => ({
      disabled: a.value,
      "aria-label": l.label
    })), o = d(() => ({
      disabled: a.value
    })), i = (r) => {
      a.value || t("click", r);
    };
    return (r, v) => nt((g(), T("button", Q({
      class: ["navbar-toggler", s(o)],
      type: "button"
    }, s(n), { onClick: i }), [
      _(r.$slots, "default", {}, () => [
        Kd
      ])
    ], 16)), [
      [s(To), s(a) ? void 0 : e.target]
    ]);
  }
}), _o = /* @__PURE__ */ R({
  __name: "BOverlay",
  props: {
    bgColor: null,
    blur: { default: "2px" },
    fixed: { default: !1 },
    noCenter: { default: !1 },
    noFade: { default: !1 },
    noWrap: { default: !1 },
    opacity: { default: 0.85 },
    overlayTag: { default: "div" },
    rounded: { type: [Boolean, String], default: !1 },
    show: { default: !1 },
    spinnerSmall: { default: !1 },
    spinnerType: { default: "border" },
    spinnerVariant: null,
    noSpinner: { default: !1 },
    variant: { default: "light" },
    wrapTag: { default: "div" },
    zIndex: { default: 10 }
  },
  emits: ["click", "hidden", "shown"],
  setup(e, { emit: t }) {
    const l = e, a = { top: 0, left: 0, bottom: 0, right: 0 }, n = c(u(l, "fixed")), o = c(u(l, "noSpinner")), i = c(u(l, "noCenter")), r = c(u(l, "noWrap")), v = c(u(l, "show")), p = c(u(l, "spinnerSmall")), B = d(
      () => l.rounded === !0 || l.rounded === "" ? "rounded" : l.rounded === !1 ? "" : `rounded-${l.rounded}`
    ), b = d(
      () => l.variant && !l.bgColor ? `bg-${l.variant}` : ""
    ), m = d(() => v.value ? !0 : null), h = d(() => ({
      type: l.spinnerType || void 0,
      variant: l.spinnerVariant || void 0,
      small: p.value
    })), $ = d(() => ({
      ...a,
      zIndex: l.zIndex || 10
    })), f = d(() => [
      "b-overlay",
      {
        "position-absolute": !r.value || !n.value,
        "position-fixed": r.value && n.value
      }
    ]), k = d(() => [b.value, B.value]), w = d(() => ({
      ...a,
      opacity: l.opacity,
      backgroundColor: l.bgColor || void 0,
      backdropFilter: blur ? `blur(${blur})` : void 0
    })), y = d(
      () => i.value ? a : {
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)"
      }
    );
    return (V, O) => (g(), j(le(e.wrapTag), {
      class: "b-overlay-wrap position-relative",
      "aria-busy": s(m)
    }, {
      default: q(() => [
        _(V.$slots, "default"),
        ye(St, {
          "no-fade": e.noFade,
          "trans-props": { enterToClass: "show" },
          name: "fade",
          onOnAfterEnter: O[1] || (O[1] = (x) => t("shown")),
          onOnAfterLeave: O[2] || (O[2] = (x) => t("hidden"))
        }, {
          default: q(() => [
            s(v) ? (g(), j(le(e.overlayTag), {
              key: 0,
              class: M(s(f)),
              style: Fe(s($)),
              onClick: O[0] || (O[0] = (x) => t("click", x))
            }, {
              default: q(() => [
                U("div", {
                  class: M(["position-absolute", s(k)]),
                  style: Fe(s(w))
                }, null, 6),
                U("div", {
                  class: "position-absolute",
                  style: Fe(s(y))
                }, [
                  _(V.$slots, "overlay", $e(Ae(s(h))), () => [
                    s(o) ? Y("", !0) : (g(), j(cl, $e(Q({ key: 0 }, s(h))), null, 16))
                  ])
                ], 4)
              ]),
              _: 3
            }, 8, ["class", "style"])) : Y("", !0)
          ]),
          _: 3
        }, 8, ["no-fade"])
      ]),
      _: 3
    }, 8, ["aria-busy"]));
  }
}), Jd = {
  key: 0,
  class: "offcanvas-header"
}, Zd = {
  id: "offcanvasLabel",
  class: "offcanvas-title"
}, Qd = { class: "offcanvas-body" }, ec = { key: 1 }, tc = {
  inheritAttrs: !1
}, lc = /* @__PURE__ */ R({
  ...tc,
  __name: "BOffcanvas",
  props: {
    dismissLabel: { default: "Close" },
    modelValue: { default: !1 },
    bodyScrolling: { default: !1 },
    backdrop: { default: !0 },
    noCloseOnBackdrop: { default: !1 },
    noCloseOnEsc: { default: !1 },
    placement: { default: "start" },
    title: null,
    noHeaderClose: { default: !1 },
    noHeader: { default: !1 },
    lazy: { default: !1 },
    id: null,
    noFocus: { default: !1 },
    static: { default: !1 },
    backdropVariant: { default: "dark" }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden", "hide-prevented", "show-prevented", "esc", "close"],
  setup(e, { emit: t }) {
    const l = e, a = Oe(), n = Te(l, "modelValue", t), o = c(n);
    c(u(l, "bodyScrolling"));
    const i = c(u(l, "backdrop")), r = c(u(l, "noHeaderClose")), v = c(u(l, "noHeader")), p = c(u(l, "noFocus")), B = c(u(l, "noCloseOnBackdrop")), b = c(u(l, "noCloseOnEsc")), m = c(u(l, "lazy")), h = c(u(l, "static")), $ = ke(u(l, "id"), "offcanvas"), f = z(!1), k = z(null), w = z(!1), y = d(
      () => i.value === !0 && o.value === !0
    ), V = d(
      () => m.value === !1 || m.value === !0 && w.value === !0 || m.value === !0 && o.value === !0
    ), O = d(() => !Ve(a.footer)), x = d(() => [
      // props.responsive === undefined ? 'offcanvas' : `offcanvas-${props.responsive}`,
      "offcanvas",
      // Remove when above check is fixed
      `offcanvas-${l.placement}`,
      {
        show: o.value && f.value === !0
      }
    ]), S = (D, J = {}) => new Et(D, {
      cancelable: !1,
      target: k.value || null,
      relatedTarget: null,
      trigger: null,
      ...J,
      componentId: $.value
    }), A = (D = "") => {
      const J = S("hide", { cancelable: D !== "", trigger: D });
      if (D === "close" && t(D, J), D === "esc" && t(D, J), t("hide", J), J.defaultPrevented || D === "backdrop" && B.value || D === "esc" && b.value) {
        t("hide-prevented");
        return;
      }
      n.value = !1;
    }, F = () => {
      const D = S("show", { cancelable: !0 });
      if (t("show", D), D.defaultPrevented) {
        n.value = !1, t("show-prevented");
        return;
      }
      n.value = !0;
    }, C = () => F(), I = () => {
      f.value = !0, t("shown", S("shown")), m.value === !0 && (w.value = !0);
    }, E = () => f.value = !1, W = () => {
      t("hidden", S("hidden")), m.value === !0 && (w.value = !1);
    };
    return Ne(() => {
      o.value === !0 && (f.value = !0);
    }), ve(
      o,
      (D) => {
        D === !0 && !p.value && k.value !== null && k.value.focus();
      },
      { flush: "post" }
    ), we(k, "bv-toggle", () => {
      o.value ? A() : F();
    }), (D, J) => (g(), j(Fl, {
      to: "body",
      disabled: s(h)
    }, [
      ye(St, {
        "no-fade": !0,
        "trans-props": {
          enterToClass: "showing",
          enterFromClass: "",
          leaveToClass: "hiding show",
          leaveFromClass: "show"
        },
        onBeforeEnter: C,
        onAfterEnter: I,
        onLeave: E,
        onAfterLeave: W
      }, {
        default: q(() => [
          nt(U("div", Q({
            ref_key: "element",
            ref: k,
            "aria-modal": "true",
            role: "dialog",
            class: s(x),
            tabindex: "-1",
            "aria-labelledby": "offcanvasLabel",
            "data-bs-backdrop": "false"
          }, D.$attrs, {
            onKeyup: J[1] || (J[1] = Vt((ae) => A("esc"), ["esc"]))
          }), [
            s(V) ? (g(), T(ue, { key: 0 }, [
              s(v) ? Y("", !0) : (g(), T("div", Jd, [
                _(D.$slots, "header", $e(Ae({ visible: s(o), placement: e.placement, hide: A })), () => [
                  U("h5", Zd, [
                    _(D.$slots, "title", {}, () => [
                      se(K(e.title), 1)
                    ])
                  ]),
                  s(r) ? Y("", !0) : (g(), j(Ct, {
                    key: 0,
                    class: "text-reset",
                    "aria-label": e.dismissLabel,
                    onClick: J[0] || (J[0] = (ae) => A("close"))
                  }, null, 8, ["aria-label"]))
                ])
              ])),
              U("div", Qd, [
                _(D.$slots, "default")
              ]),
              s(O) ? (g(), T("div", ec, [
                _(D.$slots, "footer", $e(Ae({ visible: s(o), placement: e.placement, hide: A })))
              ])) : Y("", !0)
            ], 64)) : Y("", !0)
          ], 16), [
            [nl, s(n)]
          ])
        ]),
        _: 3
      }),
      ye(_o, {
        variant: e.backdropVariant,
        show: s(y),
        fixed: !0,
        "no-wrap": "",
        "no-spinner": !0,
        onClick: J[2] || (J[2] = (ae) => A("backdrop"))
      }, null, 8, ["variant", "show"])
    ], 8, ["disabled"]));
  }
}), ac = 5, xo = 20, Ao = 0, We = 3, nc = "ellipsis-text", oc = "first-text", sc = "last-text", rc = "next-text", ic = "page", uc = "prev-text", Na = (e) => Math.max(et(e) || xo, 1), za = (e) => Math.max(et(e) || Ao, 0), dc = (e, t) => {
  const l = et(e) || 1;
  return l > t ? t : l < 1 ? 1 : l;
}, cc = R({
  name: "BPagination",
  props: {
    align: { type: String, default: "start" },
    ariaControls: { type: String, required: !1 },
    ariaLabel: { type: String, default: "Pagination" },
    disabled: { type: [Boolean, String], default: !1 },
    ellipsisClass: { type: [Array, String], default: () => [] },
    ellipsisText: { type: String, default: "…" },
    firstClass: { type: [Array, String], default: () => [] },
    firstNumber: { type: [Boolean, String], default: !1 },
    firstText: { type: String, default: "«" },
    hideEllipsis: { type: [Boolean, String], default: !1 },
    hideGotoEndButtons: { type: [Boolean, String], default: !1 },
    labelFirstPage: { type: String, default: "Go to first page" },
    labelLastPage: { type: String, default: "Go to last page" },
    labelNextPage: { type: String, default: "Go to next page" },
    labelPage: { type: String, default: "Go to page" },
    labelPrevPage: { type: String, default: "Go to previous page" },
    lastClass: { type: [Array, String], default: () => [] },
    lastNumber: { type: [Boolean, String], default: !1 },
    lastText: { type: String, default: "»" },
    limit: { type: Number, default: ac },
    modelValue: { type: Number, default: 1 },
    // V-model prop
    nextClass: { type: [Array, String], default: () => [] },
    nextText: { type: String, default: "›" },
    pageClass: { type: [Array, String], default: () => [] },
    perPage: { type: Number, default: xo },
    pills: { type: [Boolean, String], default: !1 },
    prevClass: { type: [Array, String], default: () => [] },
    prevText: { type: String, default: "‹" },
    size: { type: String, required: !1 },
    totalRows: { type: Number, default: Ao }
  },
  emits: ["update:modelValue", "page-click"],
  setup(e, { emit: t, slots: l }) {
    const a = Te(e, "modelValue", t), n = c(u(e, "disabled")), o = c(u(e, "firstNumber")), i = c(u(e, "hideEllipsis")), r = c(u(e, "hideGotoEndButtons")), v = c(u(e, "lastNumber")), p = c(u(e, "pills")), B = d(
      () => e.align === "fill" ? "start" : e.align
    ), b = Lt(u(B, "value")), m = d(
      () => Math.ceil(za(e.totalRows) / Na(e.perPage))
    ), h = d(() => {
      let S;
      return m.value - a.value + 2 < e.limit && e.limit > We ? S = m.value - f.value + 1 : S = a.value - Math.floor(f.value / 2), S < 1 ? S = 1 : S > m.value - f.value && (S = m.value - f.value + 1), e.limit <= We && v.value && m.value === S + f.value - 1 && (S = Math.max(S - 1, 1)), S;
    }), $ = d(() => {
      const S = m.value - a.value;
      let A = !1;
      return S + 2 < e.limit && e.limit > We ? e.limit > We && (A = !0) : e.limit > We && (A = !!(!i.value || o.value)), h.value <= 1 && (A = !1), A && o.value && h.value < 4 && (A = !1), A;
    }), f = d(() => {
      let S = e.limit;
      return m.value <= e.limit ? S = m.value : a.value < e.limit - 1 && e.limit > We ? ((!i.value || v.value) && (S = e.limit - (o.value ? 0 : 1)), S = Math.min(S, e.limit)) : m.value - a.value + 2 < e.limit && e.limit > We ? (!i.value || o.value) && (S = e.limit - (v.value ? 0 : 1)) : e.limit > We && (S = e.limit - (i.value ? 0 : 2)), S;
    }), k = d(() => {
      const S = m.value - f.value;
      let A = !1;
      a.value < e.limit - 1 && e.limit > We ? (!i.value || v.value) && (A = !0) : e.limit > We && (A = !!(!i.value || v.value)), h.value > S && (A = !1);
      const F = h.value + f.value - 1;
      return A && v.value && F > m.value - 3 && (A = !1), A;
    }), w = ut({
      pageSize: Na(e.perPage),
      totalRows: za(e.totalRows),
      numberOfPages: m.value
    }), y = (S, A) => {
      if (A === a.value)
        return;
      const { target: F } = S, C = new Xe("page-click", {
        cancelable: !0,
        target: F
      });
      t("page-click", C, A), !C.defaultPrevented && (a.value = A);
    }, V = d(() => e.size ? `pagination-${e.size}` : ""), O = d(() => p.value ? "b-pagination-pills" : "");
    ve(a, (S) => {
      const A = dc(S, m.value);
      A !== a.value && (a.value = A);
    }), ve(w, (S, A) => {
      S != null && (A.pageSize !== S.pageSize && A.totalRows === S.totalRows || A.numberOfPages !== S.numberOfPages && a.value > A.numberOfPages) && (a.value = 1);
    });
    const x = d(() => {
      const S = [];
      for (let A = 0; A < f.value; A++)
        S.push({ number: h.value + A, classes: null });
      return S;
    });
    return () => {
      const S = [], A = x.value.map((Z) => Z.number), F = (Z) => Z === a.value, C = a.value < 1, I = e.align === "fill", E = (Z, te, ce, pe, be, ne) => {
        const de = n.value || F(ne) || C || Z < 1 || Z > m.value, L = Z < 1 ? 1 : Z > m.value ? m.value : Z, N = { disabled: de, page: L, index: L - 1 }, ee = Me(ce, N, l) || pe || "";
        return re(
          "li",
          {
            class: [
              "page-item",
              {
                disabled: de,
                "flex-fill": I,
                "d-flex": I && !de
              },
              be
            ]
          },
          // render inner content
          re(
            de ? "span" : "button",
            {
              class: ["page-link", { "flex-grow-1": !de && I }],
              "aria-label": te,
              "aria-controls": e.ariaControls || null,
              "aria-disabled": de ? !0 : null,
              role: "menuitem",
              type: de ? null : "button",
              tabindex: de ? null : "-1",
              onClick: (oe) => {
                de || y(oe, L);
              }
            },
            ee
          )
        );
      }, W = (Z) => re(
        "li",
        {
          class: [
            "page-item",
            "disabled",
            "bv-d-xs-down-none",
            I ? "flex-fill" : "",
            e.ellipsisClass
          ],
          role: "separator",
          key: `ellipsis-${Z ? "last" : "first"}`
        },
        [
          re(
            "span",
            { class: ["page-link"] },
            Me(nc, {}, l) || e.ellipsisText || "..."
          )
        ]
      ), D = (Z, te) => {
        const ce = F(Z.number) && !C, pe = n.value ? null : ce || C && te === 0 ? "0" : "-1", be = {
          active: ce,
          disabled: n.value,
          page: Z.number,
          index: Z.number - 1,
          content: Z.number
        }, ne = Me(ic, be, l) || Z.number, de = re(
          n.value ? "span" : "button",
          {
            class: ["page-link", { "flex-grow-1": !n.value && I }],
            "aria-controls": e.ariaControls || null,
            "aria-disabled": n.value ? !0 : null,
            "aria-label": e.labelPage ? `${e.labelPage} ${Z.number}` : null,
            role: "menuitemradio",
            type: n.value ? null : "button",
            tabindex: pe,
            onClick: (L) => {
              n.value || y(L, Z.number);
            }
          },
          ne
        );
        return re(
          "li",
          {
            class: [
              "page-item",
              {
                disabled: n.value,
                active: ce,
                "flex-fill": I,
                "d-flex": I && !n.value
              },
              e.pageClass
            ],
            role: "presentation",
            key: `page-${Z.number}`
          },
          de
        );
      };
      if (!r.value && !o.value) {
        const Z = E(
          1,
          e.labelFirstPage,
          oc,
          e.firstText,
          e.firstClass,
          1
        );
        S.push(Z);
      }
      const J = E(
        a.value - 1,
        e.labelFirstPage,
        uc,
        e.prevText,
        e.prevClass,
        1
      );
      S.push(J), o.value && A[0] !== 1 && S.push(D({ number: 1 }, 0)), $.value && S.push(W(!1)), x.value.forEach((Z, te) => {
        const ce = $.value && o.value && A[0] !== 1 ? 1 : 0;
        S.push(D(Z, te + ce));
      }), k.value && S.push(W(!0)), v.value && A[A.length - 1] !== m.value && S.push(D({ number: m.value }, -1));
      const ae = E(
        a.value + 1,
        e.labelNextPage,
        rc,
        e.nextText,
        e.nextClass,
        m.value
      );
      if (S.push(ae), !v.value && !r.value) {
        const Z = E(
          m.value,
          e.labelLastPage,
          sc,
          e.lastText,
          e.lastClass,
          m.value
        );
        S.push(Z);
      }
      return re(
        "ul",
        {
          class: ["pagination", V.value, b.value, O.value],
          role: "menubar",
          "aria-disabled": n.value,
          "aria-label": e.ariaLabel || null
        },
        S
      );
    };
  }
}), fc = {
  inheritAttrs: !1
}, He = /* @__PURE__ */ R({
  ...fc,
  __name: "BPlaceholder",
  props: {
    tag: { default: "span" },
    wrapperTag: { default: "span" },
    width: null,
    cols: { default: 12 },
    variant: null,
    size: null,
    animation: null
  },
  setup(e) {
    const t = e, l = d(
      () => t.width === void 0 ? void 0 : typeof t.width == "number" ? t.width.toString() : t.width.replace("%", "")
    ), a = d(
      () => t.cols === void 0 ? void 0 : typeof t.cols == "number" ? t.cols.toString() : t.cols
    ), n = d(() => ({
      [`col-${a.value}`]: a.value !== void 0 && l.value === void 0,
      [`bg-${t.variant}`]: t.variant !== void 0,
      [`placeholder-${t.size}`]: t.size !== void 0
    })), o = d(() => ({
      [`placeholder-${t.animation}`]: t.animation !== void 0
    })), i = d(() => ({
      width: l.value === void 0 ? void 0 : `${l.value}%`
    }));
    return (r, v) => (g(), j(le(e.wrapperTag), {
      class: M(s(o))
    }, {
      default: q(() => [
        (g(), j(le(e.tag), Q(r.$attrs, {
          class: ["placeholder", s(n)],
          style: s(i)
        }), null, 16, ["class", "style"]))
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Vo = /* @__PURE__ */ R({
  __name: "BPlaceholderButton",
  props: {
    tag: { default: "div" },
    width: null,
    cols: null,
    variant: { default: "primary" },
    animation: null
  },
  setup(e) {
    const t = e, l = d(() => ["btn", `btn-${t.variant}`, "disabled"]), a = d(() => ({
      animation: t.animation,
      width: t.width,
      cols: t.cols,
      tag: t.tag
    }));
    return (n, o) => (g(), j(He, Q({ class: s(l) }, s(a)), null, 16, ["class"]));
  }
}), vc = /* @__PURE__ */ R({
  __name: "BPlaceholderCard",
  props: {
    noHeader: { default: !1 },
    headerWidth: { default: 100 },
    headerVariant: null,
    headerAnimation: null,
    headerSize: null,
    noFooter: { default: !1 },
    footerWidth: { default: 100 },
    footerVariant: null,
    footerAnimation: null,
    footerSize: null,
    animation: null,
    size: null,
    variant: null,
    noButton: { default: !1 },
    imgBottom: { default: !1 },
    imgSrc: null,
    imgBlankColor: { default: "#868e96" },
    imgHeight: { default: 100 },
    noImg: { default: !1 }
  },
  setup(e) {
    const t = e, l = c(u(t, "noButton")), a = c(u(t, "noHeader")), n = c(u(t, "noFooter")), o = c(u(t, "noImg")), i = d(() => ({
      width: t.headerWidth,
      variant: t.headerVariant,
      animation: t.headerAnimation,
      size: t.headerSize
    })), r = d(() => ({
      width: t.footerWidth,
      animation: t.footerAnimation,
      size: l.value ? t.footerSize : void 0,
      variant: t.footerVariant
    })), v = d(() => ({
      animation: t.animation,
      size: t.size,
      variant: t.variant
    })), p = d(() => ({
      blank: !t.imgSrc,
      blankColor: t.imgBlankColor,
      height: t.imgSrc ? void 0 : t.imgHeight,
      src: t.imgSrc,
      top: !t.imgBottom,
      bottom: t.imgBottom
    }));
    return (B, b) => (g(), j(vo, { "img-bottom": e.imgBottom }, an({
      default: q(() => [
        _(B.$slots, "default", {}, () => [
          ye(He, Q({ cols: "7" }, s(v)), null, 16),
          ye(He, Q({ cols: "4" }, s(v)), null, 16),
          ye(He, Q({ cols: "4" }, s(v)), null, 16),
          ye(He, Q({ cols: "6" }, s(v)), null, 16),
          ye(He, Q({ cols: "8" }, s(v)), null, 16)
        ])
      ]),
      _: 2
    }, [
      s(o) ? void 0 : {
        name: "img",
        fn: q(() => [
          _(B.$slots, "img", {}, () => [
            ye(al, $e(Ae(s(p))), null, 16)
          ])
        ]),
        key: "0"
      },
      s(a) ? void 0 : {
        name: "header",
        fn: q(() => [
          _(B.$slots, "header", {}, () => [
            ye(He, $e(Ae(s(i))), null, 16)
          ])
        ]),
        key: "1"
      },
      s(n) ? void 0 : {
        name: "footer",
        fn: q(() => [
          _(B.$slots, "footer", {}, () => [
            s(l) ? (g(), j(He, $e(Q({ key: 1 }, s(r))), null, 16)) : (g(), j(Vo, $e(Q({ key: 0 }, s(r))), null, 16))
          ])
        ]),
        key: "2"
      }
    ]), 1032, ["img-bottom"]));
  }
}), Jl = /* @__PURE__ */ R({
  __name: "BTableSimple",
  props: {
    bordered: { default: !1 },
    borderless: { default: !1 },
    borderVariant: null,
    captionTop: { default: !1 },
    dark: { default: !1 },
    hover: { default: !1 },
    responsive: { type: [Boolean, String], default: !1 },
    stacked: { type: [Boolean, String], default: !1 },
    striped: { default: !1 },
    small: { default: !1 },
    tableClass: null,
    tableVariant: null,
    stickyHeader: { type: [null, String, Boolean], default: !1 }
  },
  setup(e) {
    const t = e, l = c(u(t, "captionTop")), a = c(u(t, "borderless")), n = c(u(t, "bordered")), o = c(u(t, "dark")), i = c(u(t, "hover")), r = c(u(t, "small")), v = c(u(t, "striped")), p = u(t, "stickyHeader"), B = d(() => [
      "table",
      "b-table",
      {
        "table-bordered": n.value,
        "table-borderless": a.value,
        [`border-${t.borderVariant}`]: t.borderVariant !== void 0,
        "caption-top": l.value,
        "table-dark": o.value,
        "table-hover": i.value,
        "b-table-stacked": typeof t.stacked == "boolean" && t.stacked,
        [`b-table-stacked-${t.stacked}`]: typeof t.stacked == "string",
        "table-striped": v.value,
        "table-sm": r.value,
        [`table-${t.tableVariant}`]: t.tableVariant !== void 0
      },
      t.tableClass
    ]), b = d(() => typeof p.value == "boolean" && p.value === !0 ? [{ "max-height": "300px" }] : p.value !== "" ? [{ "max-height": `${p.value}` }] : [{ "max-height": "300px" }]), m = d(() => [
      {
        "table-responsive": t.responsive === !0,
        [`table-responsive-${t.responsive}`]: typeof t.responsive == "string",
        "b-table-sticky-header": p.value !== !1
      }
    ]);
    return (h, $) => e.responsive ? (g(), T("div", {
      key: 1,
      class: M(s(m)),
      style: Fe(s(b))
    }, [
      U("table", {
        class: M(s(B))
      }, [
        _(h.$slots, "default")
      ], 2)
    ], 6)) : (g(), T("table", {
      key: 0,
      class: M(s(B))
    }, [
      _(h.$slots, "default")
    ], 2));
  }
}), mc = /* @__PURE__ */ R({
  __name: "BPlaceholderTable",
  props: {
    rows: { default: 3 },
    columns: { default: 5 },
    cellWidth: { default: 100 },
    size: null,
    animation: null,
    variant: null,
    headerColumns: null,
    hideHeader: { default: !1 },
    headerCellWidth: { default: 100 },
    headerSize: null,
    headerAnimation: null,
    headerVariant: null,
    footerColumns: null,
    showFooter: { default: !1 },
    footerCellWidth: { default: 100 },
    footerSize: null,
    footerAnimation: null,
    footerVariant: null
  },
  setup(e) {
    const t = e, l = ht(u(t, "columns"), { nanToZero: !0, method: "parseInt" }), a = ht(u(t, "rows"), { nanToZero: !0, method: "parseInt" }), n = d(() => t.headerColumns ?? NaN), o = d(() => t.footerColumns ?? NaN), i = ht(n, {
      nanToZero: !0,
      method: "parseInt"
    }), r = ht(o, {
      nanToZero: !0,
      method: "parseInt"
    }), v = d(() => l.value || 5), p = d(() => a.value || 3), B = d(
      () => t.headerColumns === void 0 ? v.value : i.value
    ), b = d(
      () => t.footerColumns === void 0 ? v.value : r.value
    ), m = d(() => ({
      size: t.size,
      variant: t.variant,
      animation: t.animation,
      width: t.cellWidth
    })), h = d(() => ({
      size: t.headerSize,
      variant: t.headerVariant,
      animation: t.headerAnimation,
      width: t.headerCellWidth
    })), $ = d(() => ({
      size: t.footerSize,
      variant: t.footerVariant,
      animation: t.footerAnimation,
      width: t.footerCellWidth
    })), f = c(u(t, "hideHeader")), k = c(u(t, "showFooter"));
    return (w, y) => (g(), j(Jl, null, {
      default: q(() => [
        s(f) ? Y("", !0) : _(w.$slots, "thead", { key: 0 }, () => [
          U("thead", null, [
            U("tr", null, [
              (g(!0), T(ue, null, Be(s(B), (V, O) => (g(), T("th", { key: O }, [
                ye(He, $e(Ae(s(h))), null, 16)
              ]))), 128))
            ])
          ])
        ]),
        _(w.$slots, "default", {}, () => [
          U("tbody", null, [
            (g(!0), T(ue, null, Be(s(p), (V, O) => (g(), T("tr", { key: O }, [
              (g(!0), T(ue, null, Be(s(v), (x, S) => (g(), T("td", { key: S }, [
                ye(He, $e(Ae(s(m))), null, 16)
              ]))), 128))
            ]))), 128))
          ])
        ]),
        s(k) ? _(w.$slots, "tfoot", { key: 1 }, () => [
          U("tfoot", null, [
            U("tr", null, [
              (g(!0), T(ue, null, Be(s(b), (V, O) => (g(), T("th", { key: O }, [
                ye(He, $e(Ae(s($))), null, 16)
              ]))), 128))
            ])
          ])
        ]) : Y("", !0)
      ]),
      _: 3
    }));
  }
}), pc = /* @__PURE__ */ R({
  __name: "BPlaceholderWrapper",
  props: {
    loading: { default: !1 }
  },
  setup(e) {
    const l = c(u(e, "loading"));
    return (a, n) => s(l) ? _(a.$slots, "loading", { key: 0 }) : _(a.$slots, "default", { key: 1 });
  }
}), gc = ["aria-valuenow", "aria-valuemax"], Oo = /* @__PURE__ */ R({
  __name: "BProgressBar",
  props: {
    animated: { default: !1 },
    label: null,
    labelHtml: null,
    max: null,
    precision: { default: 0 },
    showProgress: { default: !1 },
    showValue: { default: !1 },
    striped: { default: !1 },
    value: { default: 0 },
    variant: null
  },
  setup(e) {
    const t = e, l = Ge(Bn, null), a = c(u(t, "animated")), n = c(u(t, "showProgress")), o = c(u(t, "showValue")), i = c(u(t, "striped")), r = d(() => ({
      "progress-bar-animated": a.value || (l == null ? void 0 : l.animated.value),
      "progress-bar-striped": i.value || (l == null ? void 0 : l.striped.value) || a.value || (l == null ? void 0 : l.animated.value),
      [`bg-${t.variant}`]: t.variant !== void 0
    })), v = d(
      () => typeof t.precision == "number" ? t.precision : Number.parseFloat(t.precision)
    ), p = d(
      () => typeof t.value == "number" ? t.value : Number.parseFloat(t.value)
    ), B = d(
      () => typeof t.max == "number" ? t.max : t.max === void 0 ? void 0 : Number.parseFloat(t.max)
    ), b = d(
      () => t.labelHtml !== void 0 ? t.labelHtml : o.value || l != null && l.showValue.value ? p.value.toFixed(v.value) : n.value || l != null && l.showProgress.value ? (p.value * 100 / (B.value || 100)).toFixed(v.value) : t.label !== void 0 ? t.label : ""
    ), m = d(
      () => l != null && l.max.value ? `${p.value * 100 / (typeof l.max.value == "number" ? l.max.value : Number.parseInt(l.max.value))}%` : t.max ? `${p.value * 100 / (typeof t.max == "number" ? t.max : Number.parseInt(t.max))}%` : typeof t.value == "string" ? t.value : `${t.value}%`
    );
    return (h, $) => (g(), T("div", {
      class: M(["progress-bar", s(r)]),
      role: "progressbar",
      "aria-valuenow": e.value,
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      style: Fe({ width: s(m) })
    }, [
      _(h.$slots, "default", {}, () => [
        se(K(s(b)), 1)
      ])
    ], 14, gc));
  }
}), bc = /* @__PURE__ */ R({
  __name: "BProgress",
  props: {
    variant: null,
    max: null,
    height: null,
    animated: { default: !1 },
    precision: { default: 0 },
    showProgress: { default: !1 },
    showValue: { default: !1 },
    striped: { default: !1 },
    value: { default: 0 }
  },
  setup(e) {
    const t = e, l = c(u(t, "animated")), a = c(u(t, "showProgress")), n = c(u(t, "showValue")), o = c(u(t, "striped")), i = d(() => ({
      animated: t.animated,
      max: t.max,
      precision: t.precision,
      showProgress: t.showProgress,
      showValue: t.showValue,
      striped: t.striped,
      value: t.value,
      variant: t.variant
    }));
    return at(Bn, {
      animated: l,
      max: u(t, "max"),
      showProgress: a,
      showValue: n,
      striped: o
    }), (r, v) => (g(), T("div", {
      class: "progress",
      style: Fe({ height: e.height })
    }, [
      _(r.$slots, "default", {}, () => [
        ye(Oo, $e(Ae(s(i))), null, 16)
      ])
    ], 4));
  }
}), Ra = rl("cols", [""], { type: [String, Number], default: null }), hc = R({
  name: "BRow",
  props: {
    tag: { type: String, default: "div" },
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    noGutters: { type: [Boolean, String], default: !1 },
    alignV: { type: String, default: null },
    alignH: { type: String, default: null },
    alignContent: { type: String, default: null },
    ...Ra
  },
  setup(e) {
    const t = c(u(e, "noGutters")), l = Lt(u(e, "alignH")), a = d(() => gn(e, Ra, "cols", "row-cols"));
    return {
      computedClasses: d(() => [
        a.value,
        {
          [`gx-${e.gutterX}`]: e.gutterX !== null,
          [`gy-${e.gutterY}`]: e.gutterY !== null,
          "g-0": t.value,
          [`align-items-${e.alignV}`]: e.alignV !== null,
          [l.value]: e.alignH !== null,
          [`align-content-${e.alignContent}`]: e.alignContent !== null
        }
      ])
    };
  }
});
function yc(e, t, l, a, n, o) {
  return g(), j(le(e.tag), {
    class: M(["row", e.computedClasses])
  }, {
    default: q(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Bc = /* @__PURE__ */ ze(hc, [["render", yc]]), Ha = [
  "ar",
  "az",
  "ckb",
  "fa",
  "he",
  "ks",
  "lrc",
  "mzn",
  "ps",
  "sd",
  "te",
  "ug",
  "ur",
  "yi"
].map((e) => e.toLowerCase()), $c = (e) => {
  const t = qt(e).toLowerCase().replace(Yo, "").split("-"), l = t.slice(0, 2).join("-"), a = t[0];
  return Ha.includes(l) || Ha.includes(a);
}, wc = (e) => as ? gl(e) ? e : { capture: !!e || !1 } : !!(gl(e) ? e.capture : e), kc = (e, t, l, a) => {
  e && e.addEventListener && e.addEventListener(t, l, wc(a));
}, Sc = (e, t, l, a) => {
  e && e.removeEventListener && e.removeEventListener(t, l, a);
}, Ma = (e, t) => {
  (e ? kc : Sc)(...t);
}, Rt = (e, { preventDefault: t = !0, propagation: l = !0, immediatePropagation: a = !1 } = {}) => {
  t && e.preventDefault(), l && e.stopPropagation(), a && e.stopImmediatePropagation();
}, Ol = "ArrowDown", Po = "End", Eo = "Home", Io = "PageDown", Fo = "PageUp", Pl = "ArrowUp", Da = 1, ja = 100, qa = 1, Ga = 500, Wa = 100, Ua = 10, Xa = 4, Ka = [Pl, Ol, Eo, Po, Fo, Io], Cc = R({
  props: {
    ariaControls: { type: String, required: !1 },
    ariaLabel: { type: String, required: !1 },
    labelIncrement: { type: String, default: "Increment" },
    labelDecrement: { type: String, default: "Decrement" },
    modelValue: { type: Number, default: null },
    // V-model prop
    name: { type: String, default: "BFormSpinbutton" },
    disabled: { type: [Boolean, String], default: !1 },
    placeholder: { type: String, required: !1 },
    locale: { type: String, default: "locale" },
    form: { type: String, required: !1 },
    inline: { type: Boolean, default: !1 },
    size: { type: String, required: !1 },
    formatterFn: {
      type: Function
    },
    readonly: { type: Boolean, default: !1 },
    vertical: { type: Boolean, default: !1 },
    repeatDelay: {
      type: [String, Number],
      default: Ga
    },
    repeatInterval: {
      type: [String, Number],
      default: Wa
    },
    repeatStepMultiplier: {
      type: [String, Number],
      default: Xa
    },
    repeatThreshold: {
      type: [String, Number],
      default: Ua
    },
    required: { type: [Boolean, String], default: !1 },
    step: { type: [String, Number], default: qa },
    min: { type: [String, Number], default: Da },
    max: { type: [String, Number], default: ja },
    wrap: { type: Boolean, default: !1 },
    state: { type: [Boolean, String], default: null }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const l = Te(e, "modelValue", t), a = z(!1), n = d(() => 1), o = () => {
      t("change", r.value);
    }, i = z(null), r = d({
      get: () => l.value === null ? i.value : l.value,
      set: (L) => {
        l.value === null ? i.value = L : l.value = L;
      }
    });
    let v, p, B = !1;
    const b = d(() => _t(e.step, qa)), m = d(() => _t(e.min, Da)), h = d(() => {
      const L = _t(e.max, ja), N = b.value, ee = m.value;
      return Math.floor((L - ee) / N) * N + ee;
    }), $ = d(() => {
      const L = et(e.repeatDelay, 0);
      return L > 0 ? L : Ga;
    }), f = d(() => {
      const L = et(e.repeatInterval, 0);
      return L > 0 ? L : Wa;
    }), k = d(
      () => Math.max(et(e.repeatThreshold, Ua), 1)
    ), w = d(
      () => Math.max(et(e.repeatStepMultiplier, Xa), 1)
    ), y = d(() => {
      const L = b.value;
      return Math.floor(L) === L ? 0 : (L.toString().split(".")[1] || "").length;
    }), V = d(() => Math.pow(10, y.value || 0)), O = d(() => {
      const { value: L } = r;
      return L === null ? "" : L.toFixed(y.value);
    }), x = d(() => {
      const L = [e.locale];
      return new Intl.NumberFormat(L).resolvedOptions().locale;
    }), S = d(
      () => (
        //todo
        $c(x.value)
      )
    ), A = () => {
      const L = y.value;
      return new Intl.NumberFormat(x.value, {
        style: "decimal",
        useGrouping: !1,
        minimumIntegerDigits: 1,
        minimumFractionDigits: L,
        maximumFractionDigits: L,
        notation: "standard"
      }).format;
    }, F = d(
      () => e.formatterFn ? e.formatterFn : A()
    ), C = d(() => ({
      role: "group",
      lang: x.value,
      tabindex: e.disabled ? null : "-1",
      title: e.ariaLabel
    })), I = d(() => l.value !== null || i.value !== null), E = d(() => ({
      dir: S.value,
      spinId: n.value,
      tabindex: e.disabled ? null : "0",
      role: "spinbutton",
      "aria-live": "off",
      "aria-label": e.ariaLabel || null,
      "aria-controls": e.ariaControls || null,
      "aria-invalid": e.state === !1 || !I.value && e.required ? !0 : null,
      "aria-required": e.required ? !0 : null,
      "aria-valuemin": m.value,
      "aria-valuemax": h.value,
      "aria-valuenow": r.value !== null ? r.value : null,
      "aria-valuetext": r.value !== null ? F.value(r.value) : null
    })), W = (L) => {
      let { value: N } = r;
      if (!e.disabled && N !== null) {
        const ee = b.value * L, oe = m.value, he = h.value, _e = V.value, { wrap: G } = e;
        N = Math.round((N - oe) / ee) * ee + oe + ee, N = Math.round(N * _e) / _e, r.value = N > he ? G ? oe : he : N < oe ? G ? he : oe : N;
      }
    }, D = (L = 1) => {
      r.value === null ? r.value = m.value : W(1 * L);
    }, J = (L = 1) => {
      r.value === null ? r.value = e.wrap ? h.value : m.value : W(-1 * L);
    }, ae = (L) => {
      const { code: N, altKey: ee, ctrlKey: oe, metaKey: he } = L;
      if (!(e.disabled || e.readonly || ee || oe || he) && Ka.includes(N)) {
        if (Rt(L, { propagation: !1 }), B)
          return;
        ne(), [Pl, Ol].includes(N) ? (B = !0, N === Pl ? te(L, D) : N === Ol && te(L, J)) : N === Fo ? D(w.value) : N === Io ? J(w.value) : N === Eo ? r.value = m.value : N === Po && (r.value = h.value);
      }
    }, Z = (L) => {
      const { code: N, altKey: ee, ctrlKey: oe, metaKey: he } = L;
      e.disabled || e.readonly || ee || oe || he || Ka.includes(N) && (Rt(L, { propagation: !1 }), ne(), B = !1, o());
    }, te = (L, N) => {
      const { type: ee } = L || {};
      if (!e.disabled && !e.readonly) {
        if (ce(L) && ee === "mousedown" && L.button)
          return;
        ne(), N(1);
        const oe = k.value, he = w.value, _e = $.value, G = f.value;
        v = setTimeout(() => {
          let ie = 0;
          p = setInterval(() => {
            N(ie < oe ? 1 : he), ie++;
          }, G);
        }, _e);
      }
    };
    function ce(L) {
      return L.type === "mouseup" || L.type === "mousedown";
    }
    const pe = (L) => {
      ce(L) && L.type === "mouseup" && L.button || (Rt(L, { propagation: !1 }), ne(), be(!1), o());
    }, be = (L) => {
      try {
        Ma(L, [document.body, "mouseup", pe, !1]), Ma(L, [document.body, "touchend", pe, !1]);
      } catch {
        return 0;
      }
    }, ne = () => {
      clearTimeout(v), clearInterval(p), v = void 0, p = void 0;
    }, de = (L, N, ee, oe, he, _e, G) => {
      const ie = re(ee, {
        props: { scale: a.value ? 1.5 : 1.25 },
        attrs: { "aria-hidden": !0 }
      }), De = { hasFocus: a.value }, Pe = (P) => {
        !e.disabled && !e.readonly && (Rt(P, { propagation: !1 }), be(!0), te(P, L));
      };
      return re(
        "button",
        {
          class: [{ "py-0": !e.vertical }, "btn", "btn-sm", "border-0", "rounded-0"],
          tabindex: "-1",
          type: "button",
          disabled: e.disabled || e.readonly || _e,
          "aria-disabled": e.disabled || e.readonly || _e ? !0 : null,
          "aria-controls": n.value,
          "aria-label": N || null,
          "aria-keyshortcuts": he || null,
          onmousedown: Pe,
          ontouchstart: Pe
          // 'ref': keyRef,
        },
        [Me(G, De) || ie]
      );
    };
    return () => {
      const L = de(
        D,
        e.labelIncrement,
        re(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            class: "bi bi-plus",
            viewBox: "0 0 16 16"
          },
          re("path", {
            d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          })
        ),
        "inc",
        "ArrowUp",
        !1,
        "increment"
      ), N = de(
        J,
        e.labelDecrement,
        re(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            class: "bi bi-dash",
            viewBox: "0 0 16 16"
          },
          re("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" })
        ),
        "dec",
        "ArrowDown",
        !1,
        "decrement"
      ), ee = [];
      e.name && !e.disabled && ee.push(
        re("input", {
          type: "hidden",
          name: e.name,
          form: e.form || null,
          // TODO: Should this be set to '' if value is out of range?
          value: O.value,
          key: "hidden"
        })
      );
      const oe = re(
        // We use 'output' element to make this accept a `<label for="id">` (Except IE)
        "output",
        {
          class: [
            { "d-flex": e.vertical },
            { "align-self-center": !e.vertical },
            { "align-items-center": e.vertical },
            { "border-top": e.vertical },
            { "border-bottom": e.vertical },
            { "border-start": !e.vertical },
            { "border-end": !e.vertical },
            "flex-grow-1"
          ],
          ...E.value,
          key: "output"
          // ref: 'spinner',
        },
        [
          re(
            "bdi",
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore How can we narrow this type down
            I.value ? F.value(r.value) : e.placeholder || ""
          )
        ]
      );
      return re(
        "div",
        {
          class: [
            "b-form-spinbutton form-control",
            { disabled: e.disabled },
            { readonly: e.readonly },
            { focus: a },
            { "d-inline-flex": e.inline || e.vertical },
            { "d-flex": !e.inline && !e.vertical },
            { "align-items-stretch": !e.vertical },
            { "flex-column": e.vertical },
            e.size ? `form-control-${e.size}` : null
            // this.stateClass //TODO
          ],
          ...C.value,
          onkeydown: ae,
          onkeyup: Z
          // We use capture phase (`!` prefix) since focus and blur do not bubble
          // 'focus': onFocusBlur, //TODO
          // 'blur': onFocusBlur, //TODO
        },
        e.vertical ? [L, ee, oe, N] : [N, ee, oe, L]
      );
    };
  }
}), Tc = ["TD", "TH", "TR"], _c = [
  "a",
  "a *",
  // Include content inside links
  "button",
  "button *",
  // Include content inside buttons
  "input:not(.disabled):not([disabled])",
  "select:not(.disabled):not([disabled])",
  "textarea:not(.disabled):not([disabled])",
  '[role="link"]',
  '[role="link"] *',
  '[role="button"]',
  '[role="button"] *',
  "[tabindex]:not(.disabled):not([disabled])"
].join(","), Ht = (e) => {
  if (!e || !e.target)
    return !1;
  const t = e.target;
  if ("disabled" in t && t.disabled || Tc.indexOf(t.tagName) !== -1)
    return !1;
  if (ta(".dropdown-menu", t))
    return !0;
  const l = t.tagName === "LABEL" ? t : ta("label", t);
  if (l) {
    const a = Rl(l, "for"), n = a ? fs(a) : mn("input, select, textarea", l);
    if (n && !n.disabled)
      return !0;
  }
  return pn(t, _c);
}, xc = () => {
  const e = (p, B) => {
    const b = [];
    return !(p != null && p.length) && (B != null && B.length) ? (Object.keys(B[0]).forEach((m) => b.push({ key: m, label: Zl(m) })), b) : (Array.isArray(p) && p.forEach((m) => {
      typeof m == "string" ? b.push({ key: m, label: Zl(m) }) : gl(m) && m.key && typeof m.key == "string" && b.push({ ...m });
    }), b);
  }, t = z([]), l = (p, B, b, m) => (t.value = Gt(B), "isFilterableTable" in m && m.isFilterableTable.value === !0 && b.filter && (t.value = o(t.value, b.filter, b.filterable)), "isSortable" in m && m.isSortable.value === !0 && (t.value = n(
    p,
    t.value,
    {
      key: b.sortBy,
      desc: m.sortDescBoolean.value
    },
    b.sortCompare
  )), t.value), a = z(void 0), n = (p, B, b, m) => {
    if (!b || !b.key)
      return B;
    const h = b.key;
    return B.sort(($, f) => {
      if (m !== void 0)
        return m($, f, b.key, b.desc);
      const k = (V) => typeof V == "object" ? JSON.stringify(V) : V;
      return k($[h]) > k(f[h]) ? b.desc ? -1 : 1 : k(f[h]) > k($[h]) ? b.desc ? 1 : -1 : 0;
    });
  }, o = (p, B, b) => p.filter(
    (m) => Object.entries(m).filter((h) => {
      const [$, f] = h;
      return !f || $[0] === "_" || b.length > 0 && !b.includes($) ? !1 : (typeof f == "object" ? JSON.stringify(Object.values(f)) : typeof f == "string" ? f : f.toString()).toLowerCase().includes(B.toLowerCase());
    }).length > 0
  );
  return {
    normaliseFields: e,
    mapItems: l,
    internalItems: t,
    updateInternalItems: async (p) => {
      try {
        return t.value = await bl(p), t.value;
      } catch {
        return;
      }
    },
    filterEvent: a,
    notifyFilteredItems: () => {
      a.value && a.value(t.value);
    },
    formatItem: (p, B) => {
      const b = p[B.key];
      return B.formatter && typeof B.formatter == "function" ? B.formatter(b, B.key, p) : p[B.key];
    }
  };
}, Ac = ["title", "abbr", "onClick"], Vc = { class: "d-inline-flex flex-nowrap align-items-center gap-1" }, Oc = { key: 1 }, Pc = ["onClick", "onDblclick", "onMouseenter", "onMouseleave"], Ec = {
  key: 0,
  class: "b-table-stacked-label"
}, Ic = ["colspan"], Fc = ["colspan"], Lc = { class: "d-flex align-items-center justify-content-center gap-2" }, Nc = /* @__PURE__ */ U("strong", null, "Loading...", -1), zc = {
  key: 1,
  class: "b-table-empty-slot"
}, Rc = ["colspan"], Hc = { key: 0 }, Mc = ["title", "abbr", "onClick"], Dc = { key: 1 }, jc = { key: 2 }, qc = { key: 3 }, Gc = /* @__PURE__ */ R({
  __name: "BTable",
  props: {
    align: null,
    caption: null,
    captionTop: { default: !1 },
    borderless: { default: !1 },
    bordered: { default: !1 },
    borderVariant: null,
    dark: { default: !1 },
    fields: { default: () => [] },
    footClone: { default: !1 },
    hover: { default: !1 },
    items: { default: () => [] },
    provider: null,
    sortCompare: null,
    noProvider: null,
    noProviderPaging: null,
    noProviderSorting: null,
    noProviderFiltering: null,
    responsive: { type: [Boolean, String], default: !1 },
    small: { default: !1 },
    striped: { default: !1 },
    stacked: { type: [Boolean, String], default: !1 },
    labelStacked: { type: Boolean, default: !1 },
    variant: null,
    sortBy: null,
    sortDesc: { default: !1 },
    sortInternal: { default: !0 },
    selectable: { default: !1 },
    stickySelect: { default: !1 },
    selectHead: { type: [Boolean, String], default: !0 },
    selectMode: { default: "single" },
    selectionVariant: { default: "primary" },
    stickyHeader: { type: [null, String, Boolean], default: !1 },
    busy: { default: !1 },
    showEmpty: { default: !1 },
    perPage: null,
    currentPage: { default: 1 },
    filter: null,
    filterable: null,
    emptyText: { default: "There are no records to show" },
    emptyFilteredText: { default: "There are no records matching your request" }
  },
  emits: ["headClicked", "rowClicked", "rowDblClicked", "rowHovered", "rowUnhovered", "rowSelected", "rowUnselected", "selection", "update:busy", "update:sortBy", "update:sortDesc", "sorted", "filtered"],
  setup(e, { expose: t, emit: l }) {
    const a = e, n = Oe(), o = xc(), i = c(u(a, "footClone")), r = c(u(a, "sortDesc")), v = c(u(a, "sortInternal")), p = c(u(a, "selectable")), B = c(u(a, "stickySelect")), b = c(u(a, "labelStacked")), m = c(u(a, "busy")), h = c(u(a, "showEmpty")), $ = c(u(a, "noProviderPaging")), f = c(u(a, "noProviderSorting")), k = c(u(a, "noProviderFiltering")), w = z(m.value);
    o.filterEvent.value = async (P) => {
      if (C.value) {
        await L();
        return;
      }
      const X = await bl(P);
      l("filtered", X);
    };
    const y = z(/* @__PURE__ */ new Set([])), V = d(() => y.value.size > 0), O = d(() => ({
      [`align-${a.align}`]: a.align !== void 0,
      "b-table-selectable": p.value,
      [`b-table-select-${a.selectMode}`]: p.value,
      "b-table-selecting user-select-none": p.value && V.value,
      "b-table-busy": w.value,
      "b-table-sortable": E.value,
      "b-table-sort-desc": E.value && r.value === !0,
      "b-table-sort-asc": E.value && r.value === !1
    })), x = d(() => ({
      bordered: a.bordered,
      borderless: a.borderless,
      borderVariant: a.borderVariant,
      captionTop: a.captionTop,
      dark: a.dark,
      hover: a.hover,
      responsive: a.responsive,
      striped: a.striped,
      stacked: a.stacked,
      small: a.small,
      tableClass: O.value,
      tableVariant: a.variant,
      stickyHeader: a.stickyHeader
    })), S = d(() => o.normaliseFields(a.fields, a.items)), A = d(
      () => S.value.length + (p.value ? 1 : 0)
    ), F = d(() => a.filter !== void 0 && a.filter !== ""), C = d(() => a.provider !== void 0), I = d(
      () => p.value && (!!a.selectHead || n.selectHead !== void 0)
    ), E = d(
      () => a.fields.filter((P) => typeof P == "string" ? !1 : P.sortable).length > 0
    ), W = d(() => E.value && v.value === !0), D = d(() => {
      const P = C.value ? o.internalItems.value : W.value ? o.mapItems(a.fields, a.items, a, {
        isSortable: E,
        isFilterableTable: F,
        sortDescBoolean: r
      }) : a.items;
      if (a.perPage !== void 0) {
        const X = (a.currentPage - 1) * a.perPage;
        return P.splice(X, a.perPage);
      }
      return P;
    }), J = (P) => typeof P == "string" ? Ql(P) : P.label !== void 0 ? P.label : typeof P.key == "string" ? Ql(P.key) : P.key, ae = (P, X, ge = !1) => {
      const H = typeof P == "string" ? P : P.key;
      l("headClicked", H, P, X, ge), be(P);
    }, Z = (P, X, ge) => {
      l("rowClicked", P, X, ge), de(P, X, ge.shiftKey);
    }, te = (P, X, ge) => l("rowDblClicked", P, X, ge), ce = (P, X, ge) => l("rowHovered", P, X, ge), pe = (P, X, ge) => l("rowUnhovered", P, X, ge), be = (P) => {
      if (!E.value)
        return;
      const X = typeof P == "string" ? P : P.key, ge = typeof P == "string" ? !1 : P.sortable;
      if (E.value === !0 && ge === !0) {
        const H = !r.value;
        X !== a.sortBy && l("update:sortBy", X), l("update:sortDesc", H), l("sorted", X, H);
      }
    }, ne = () => {
      p.value && l("selection", Array.from(y.value));
    }, de = (P, X, ge = !1) => {
      if (p.value) {
        if (y.value.has(P))
          y.value.delete(P), l("rowUnselected", P);
        else if (a.selectMode === "single" && y.value.size > 0 && (y.value.forEach((H) => l("rowUnselected", H)), y.value.clear()), a.selectMode === "range" && y.value.size > 0 && ge) {
          const H = Array.from(y.value).pop(), fe = D.value.findIndex((ot) => ot === H), me = Math.min(fe, X), fl = Math.max(fe, X);
          D.value.slice(me, fl + 1).forEach((ot) => {
            y.value.has(ot) || (y.value.add(ot), l("rowSelected", ot));
          });
        } else
          y.value.add(P), l("rowSelected", P);
        ne();
      }
    }, L = async () => {
      if (!C.value || !a.provider || w.value)
        return;
      w.value = !0;
      const P = new Proxy(
        {
          currentPage: a.currentPage,
          filter: a.filter,
          sortBy: a.sortBy,
          sortDesc: a.sortDesc,
          perPage: a.perPage
        },
        {
          get: (ge, H) => H in ge ? ge[H] : void 0,
          set: () => (console.error("BTable provider context is a read-only object."), !0)
        }
      ), X = a.provider(P, o.updateInternalItems);
      if (X !== void 0) {
        if (X instanceof Promise)
          try {
            const ge = await X;
            return Array.isArray(ge) ? await o.updateInternalItems(ge) : void 0;
          } finally {
            w.value && (w.value = !1);
          }
        try {
          return await o.updateInternalItems(X);
        } finally {
          w.value && (w.value = !1);
        }
      }
    }, N = (P) => {
      P._showDetails = !P._showDetails;
    }, ee = (P) => [
      P.class,
      P.thClass,
      P.variant ? `table-${P.variant}` : void 0,
      {
        "b-table-sortable-column": E.value && P.sortable,
        "b-table-sticky-column": P.stickyColumn
      }
    ], oe = (P, X) => [
      P.class,
      P.tdClass,
      P.variant ? `table-${P.variant}` : void 0,
      X != null && X._cellVariants && (X != null && X._cellVariants[P.key]) ? `table-${X == null ? void 0 : X._cellVariants[P.key]}` : void 0,
      {
        "b-table-sticky-column": P.stickyColumn
      }
    ], he = (P) => [
      P._rowVariant ? `table-${P._rowVariant}` : null,
      P._rowVariant ? `table-${P._rowVariant}` : null,
      p.value && y.value.has(P) ? `selected table-${a.selectionVariant}` : null
    ], _e = () => {
      if (!p.value)
        return;
      const P = y.value.size > 0 ? Array.from(y.value) : [];
      y.value = /* @__PURE__ */ new Set([...D.value]), y.value.forEach((X) => {
        P.includes(X) || l("rowSelected", X);
      }), ne();
    }, G = () => {
      p.value && (y.value.forEach((P) => {
        l("rowUnselected", P);
      }), y.value = /* @__PURE__ */ new Set([]), ne());
    }, ie = (P) => {
      if (!p.value)
        return;
      const X = D.value[P];
      !X || y.value.has(X) || (y.value.add(X), l("rowSelected", X), ne());
    }, De = (P) => {
      if (!p.value)
        return;
      const X = D.value[P];
      !X || !y.value.has(X) || (y.value.delete(X), l("rowUnselected", X), ne());
    }, Pe = async (P, X, ge) => {
      if (X === ge)
        return;
      const H = (Lo) => a.noProvider && a.noProvider.includes(Lo), fe = !["currentPage", "perPage"].includes(P), me = ["currentPage", "perPage"].includes(P) && (H("paging") || $.value === !0), fl = ["filter"].includes(P) && (H("filtering") || k.value === !0), ot = ["sortBy", "sortDesc"].includes(P) && (H("sorting") || f.value === !0);
      me || fl || ot || (await L(), fe && o.notifyFilteredItems());
    };
    return ve(
      () => a.filter,
      (P, X) => {
        P === X || C.value || P || bl(a.items).then((ge) => l("filtered", ge));
      }
    ), ve(
      w,
      () => w.value !== m.value && l("update:busy", w.value)
    ), ve(
      m,
      () => w.value !== m.value && (w.value = m.value)
    ), ve(
      () => a.filter,
      (P, X) => Pe("filter", P, X)
    ), ve(
      () => a.currentPage,
      (P, X) => Pe("currentPage", P, X)
    ), ve(
      () => a.perPage,
      (P, X) => Pe("perPage", P, X)
    ), ve(
      () => a.sortBy,
      (P, X) => Pe("sortBy", P, X)
    ), ve(
      () => a.sortDesc,
      (P, X) => Pe("sortDesc", P, X)
    ), Ne(() => {
      C.value && L();
    }), t({
      selectAllRows: _e,
      clearSelected: G,
      selectRow: ie,
      unselectRow: De
    }), (P, X) => (g(), j(Jl, $e(Ae(s(x))), {
      default: q(() => {
        var ge;
        return [
          U("thead", null, [
            P.$slots["thead-top"] ? _(P.$slots, "thead-top", { key: 0 }) : Y("", !0),
            U("tr", null, [
              s(I) ? (g(), T("th", {
                key: 0,
                class: M(["b-table-selection-column", {
                  "b-table-sticky-column": s(B)
                }])
              }, [
                _(P.$slots, "select-head", {}, () => [
                  se(K(typeof e.selectHead == "boolean" ? "Selected" : e.selectHead), 1)
                ])
              ], 2)) : Y("", !0),
              (g(!0), T(ue, null, Be(s(S), (H) => (g(), T("th", Q({
                key: H.key,
                scope: "col",
                class: ee(H),
                title: H.headerTitle,
                abbr: H.headerAbbr,
                style: H.thStyle
              }, H.thAttr, {
                onClick: (fe) => ae(H, fe)
              }), [
                U("div", Vc, [
                  _(P.$slots, "sort-icon", {
                    field: H,
                    sortBy: e.sortBy,
                    selected: H.key === e.sortBy,
                    isDesc: s(r),
                    direction: s(r) ? "desc" : "asc"
                  }, () => [
                    s(E) && H.sortable ? (g(), T("span", {
                      key: 0,
                      class: M(["b-table-sort-icon", {
                        sorted: H.key === e.sortBy,
                        [`sorted-${s(r) ? "desc" : "asc"}`]: H.key === e.sortBy
                      }])
                    }, null, 2)) : Y("", !0)
                  ]),
                  U("div", null, [
                    P.$slots["head(" + H.key + ")"] || P.$slots["head()"] ? _(P.$slots, P.$slots["head(" + H.key + ")"] ? "head(" + H.key + ")" : "head()", {
                      key: 0,
                      label: H.label
                    }) : (g(), T(ue, { key: 1 }, [
                      se(K(J(H)), 1)
                    ], 64))
                  ])
                ])
              ], 16, Ac))), 128))
            ]),
            P.$slots["thead-sub"] ? (g(), T("tr", Oc, [
              (g(!0), T(ue, null, Be(s(S), (H) => (g(), T("td", {
                key: H.key,
                scope: "col",
                class: M([H.class, H.thClass, H.variant ? `table-${H.variant}` : ""])
              }, [
                P.$slots["thead-sub"] ? _(P.$slots, "thead-sub", Q({
                  key: 0,
                  items: s(S)
                }, H)) : (g(), T(ue, { key: 1 }, [
                  se(K(H.label), 1)
                ], 64))
              ], 2))), 128))
            ])) : Y("", !0)
          ]),
          U("tbody", null, [
            (g(!0), T(ue, null, Be(s(D), (H, fe) => (g(), T(ue, { key: fe }, [
              U("tr", {
                class: M(he(H)),
                onClick: (me) => !s(Ht)(me) && Z(H, fe, me),
                onDblclick: (me) => !s(Ht)(me) && te(H, fe, me),
                onMouseenter: (me) => !s(Ht)(me) && ce(H, fe, me),
                onMouseleave: (me) => !s(Ht)(me) && pe(H, fe, me)
              }, [
                s(I) ? (g(), T("td", {
                  key: 0,
                  class: M(["b-table-selection-column", {
                    "b-table-sticky-column": s(B)
                  }])
                }, [
                  _(P.$slots, "select-cell", {}, () => [
                    U("span", {
                      class: M(y.value.has(H) ? "text-primary" : "")
                    }, "🗹", 2)
                  ])
                ], 2)) : Y("", !0),
                (g(!0), T(ue, null, Be(s(S), (me) => (g(), T("td", Q({
                  key: me.key
                }, me.tdAttr, {
                  class: oe(me, H)
                }), [
                  e.stacked && s(b) ? (g(), T("label", Ec, K(J(me)), 1)) : Y("", !0),
                  P.$slots["cell(" + me.key + ")"] || P.$slots["cell()"] ? _(P.$slots, P.$slots["cell(" + me.key + ")"] ? "cell(" + me.key + ")" : "cell()", {
                    key: 1,
                    value: H[me.key],
                    index: fe,
                    item: H,
                    field: me,
                    items: e.items,
                    toggleDetails: () => N(H),
                    detailsShowing: H._showDetails
                  }) : (g(), T(ue, { key: 2 }, [
                    se(K(s(o).formatItem(H, me)), 1)
                  ], 64))
                ], 16))), 128))
              ], 42, Pc),
              H._showDetails === !0 && P.$slots["row-details"] ? (g(), T("tr", {
                key: 0,
                class: M(he(H))
              }, [
                U("td", { colspan: s(A) }, [
                  _(P.$slots, "row-details", {
                    item: H,
                    toggleDetails: () => N(H)
                  })
                ], 8, Ic)
              ], 2)) : Y("", !0)
            ], 64))), 128)),
            w.value ? (g(), T("tr", {
              key: 0,
              class: M(["b-table-busy-slot", { "b-table-static-busy": s(D).length === 0 }])
            }, [
              U("td", { colspan: s(A) }, [
                _(P.$slots, "table-busy", {}, () => [
                  U("div", Lc, [
                    ye(cl, { class: "align-middle" }),
                    Nc
                  ])
                ])
              ], 8, Fc)
            ], 2)) : Y("", !0),
            s(h) && s(D).length === 0 ? (g(), T("tr", zc, [
              U("td", { colspan: s(A) }, [
                _(P.$slots, "empty", {
                  items: s(D),
                  filtered: s(F)
                }, () => [
                  se(K(s(F) ? e.emptyFilteredText : e.emptyText), 1)
                ])
              ], 8, Rc)
            ])) : Y("", !0)
          ]),
          s(i) ? (g(), T("tfoot", Hc, [
            U("tr", null, [
              (g(!0), T(ue, null, Be(s(S), (H) => (g(), T("th", Q({
                key: H.key
              }, H.thAttr, {
                scope: "col",
                class: [H.class, H.thClass, H.variant ? `table-${H.variant}` : ""],
                title: H.headerTitle,
                abbr: H.headerAbbr,
                style: H.thStyle,
                onClick: (fe) => ae(H, fe, !0)
              }), K(H.label), 17, Mc))), 128))
            ])
          ])) : P.$slots["custom-foot"] ? (g(), T("tfoot", Dc, [
            _(P.$slots, "custom-foot", {
              fields: s(S),
              items: e.items,
              columns: (ge = s(S)) == null ? void 0 : ge.length
            })
          ])) : Y("", !0),
          P.$slots["table-caption"] ? (g(), T("caption", jc, [
            _(P.$slots, "table-caption")
          ])) : e.caption ? (g(), T("caption", qc, K(e.caption), 1)) : Y("", !0)
        ];
      }),
      _: 3
    }, 16));
  }
}), Wc = /* @__PURE__ */ R({
  __name: "BTbody",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, l = d(() => ({
      [`thead-${t.variant}`]: t.variant !== void 0
    }));
    return (a, n) => (g(), T("tbody", {
      class: M(s(l))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Uc = ["scope", "colspan", "rowspan", "data-label"], Xc = { key: 0 }, Kc = /* @__PURE__ */ R({
  __name: "BTd",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: !1 },
    variant: null
  },
  setup(e) {
    const t = e, l = c(u(t, "stickyColumn")), a = d(() => ({
      [`table-${t.variant}`]: t.variant !== void 0,
      "b-table-sticky-column": l.value,
      "table-b-table-default": l.value && t.variant === void 0
    })), n = d(() => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
    return (o, i) => (g(), T("td", {
      scope: s(n),
      class: M(s(a)),
      colspan: e.colspan,
      rowspan: e.rowspan,
      "data-label": e.stackedHeading
    }, [
      e.stackedHeading ? (g(), T("div", Xc, [
        _(o.$slots, "default")
      ])) : _(o.$slots, "default", { key: 1 })
    ], 10, Uc));
  }
}), Yc = /* @__PURE__ */ R({
  __name: "BTfoot",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, l = d(() => ({
      [`table-${t.variant}`]: t.variant !== void 0
    }));
    return (a, n) => (g(), T("tfoot", {
      class: M(s(l))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Jc = ["scope", "colspan", "rowspan", "data-label"], Zc = { key: 0 }, Qc = /* @__PURE__ */ R({
  __name: "BTh",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: !1 },
    variant: null
  },
  setup(e) {
    const t = e, l = c(u(t, "stickyColumn")), a = d(() => ({
      [`table-${t.variant}`]: t.variant !== void 0,
      "b-table-sticky-column": l.value,
      "table-b-table-default": l.value && t.variant === void 0
    })), n = d(() => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
    return (o, i) => (g(), T("th", {
      scope: s(n),
      class: M(s(a)),
      colspan: e.colspan,
      rowspan: e.rowspan,
      "data-label": e.stackedHeading
    }, [
      e.stackedHeading !== void 0 ? (g(), T("div", Zc, [
        _(o.$slots, "default")
      ])) : _(o.$slots, "default", { key: 1 })
    ], 10, Jc));
  }
}), ef = /* @__PURE__ */ R({
  __name: "BThead",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, l = d(() => ({
      [`table-${t.variant}`]: t.variant !== void 0
    }));
    return (a, n) => (g(), T("thead", {
      class: M(s(l))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), tf = /* @__PURE__ */ R({
  __name: "BTr",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, l = d(() => ({
      [`table-${t.variant}`]: t.variant !== void 0
    }));
    return (a, n) => (g(), T("tr", {
      class: M(s(l))
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), lf = /* @__PURE__ */ R({
  __name: "BTab",
  props: {
    id: null,
    title: null,
    active: { default: !1 },
    buttonId: { default: void 0 },
    disabled: { default: !1 },
    lazy: { default: void 0 },
    lazyOnce: { default: void 0 },
    noBody: { type: [Boolean, String], default: !1 },
    tag: { default: "div" },
    titleItemClass: null,
    titleLinkAttributes: { default: void 0 },
    titleLinkClass: null
  },
  setup(e) {
    const t = e, l = Ge(hn, null), a = c(u(t, "active")), n = c(u(t, "disabled")), o = c(u(t, t.lazyOnce !== void 0 ? "lazyOnce" : "lazy")), i = z(!1), r = d(() => !!(l != null && l.lazy.value || o.value)), v = d(() => t.lazyOnce !== void 0), p = d(() => a.value && !n.value), B = d(() => {
      const m = r.value && v.value && i.value;
      return p.value || !r.value || m;
    }), b = d(() => ({
      active: a.value,
      show: a.value,
      "card-body": (l == null ? void 0 : l.card.value) && t.noBody === !1
    }));
    return ve(B, (m) => {
      m && !i.value && (i.value = !0);
    }), (m, h) => (g(), j(le(e.tag), {
      id: e.id,
      class: M(["tab-pane", s(b)]),
      role: "tabpanel",
      "aria-labelledby": "profile-tab"
    }, {
      default: q(() => [
        s(B) ? _(m.$slots, "default", { key: 0 }) : Y("", !0)
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), af = ["id", "data-bs-target", "aria-controls", "aria-selected", "onClick"], nf = /* @__PURE__ */ R({
  __name: "BTabs",
  props: {
    activeNavItemClass: null,
    activeTabClass: null,
    align: null,
    card: { default: !1 },
    contentClass: null,
    end: { default: !1 },
    fill: { default: !1 },
    id: null,
    justified: { default: !1 },
    lazy: { default: !1 },
    navClass: null,
    navWrapperClass: null,
    noFade: { default: !1 },
    noNavStyle: { default: !1 },
    pills: { default: !1 },
    small: { default: !1 },
    tag: { default: "div" },
    vertical: { default: !1 },
    modelValue: { default: -1 }
  },
  emits: ["update:modelValue", "activate-tab", "click"],
  setup(e, { emit: t }) {
    const l = e, a = Te(l, "modelValue", t), n = Oe(), o = c(u(l, "card")), i = c(u(l, "end")), r = c(u(l, "fill")), v = c(u(l, "justified")), p = c(u(l, "lazy")), B = c(u(l, "noFade")), b = c(u(l, "noNavStyle")), m = c(u(l, "pills")), h = c(u(l, "small")), $ = c(u(l, "vertical")), f = z(a.value), k = z(""), w = d({
      get: () => f.value,
      set: (C) => {
        f.value = C, y.value.length > 0 && C >= 0 && C < y.value.length ? k.value = y.value[C].buttonId : k.value = "", a.value = C;
      }
    }), y = d(
      () => n.default === void 0 ? [] : hl(n.default, "BTab").map((C, I) => {
        C.props || (C.props = {});
        const E = C.props["button-id"] || Qe("tab"), W = C.props.id || Qe(), D = w.value > -1 ? I === w.value : C.props.active === "", J = C.props["title-item-class"], ae = C.props["title-link-attributes"];
        return {
          buttonId: E,
          contentId: W,
          active: D,
          disabled: C.props.disabled === "" || C.props.disabled === !0,
          navItemClasses: [
            {
              active: D,
              disabled: C.props.disabled === "" || C.props.disabled === !0
            },
            D && l.activeNavItemClass ? l.activeNavItemClass : null,
            C.props["title-link-class"]
          ],
          tabClasses: [
            {
              fade: !B.value
            },
            D && l.activeTabClass ? l.activeTabClass : null
          ],
          target: `#${W}`,
          title: C.props.title,
          titleItemClass: J,
          titleLinkAttributes: ae,
          onClick: C.props.onClick,
          tab: C,
          //TODO remove this in future since the mapped value does not provide a direct reference to the actual slot component.
          tabComponent: () => hl(n.default, "BTab")[I]
        };
      })
    ), V = d(() => !(y != null && y.value && y.value.length > 0)), O = d(() => ({
      "d-flex": $.value,
      "align-items-start": $.value
    })), x = Lt(u(l, "align")), S = d(() => ({
      "nav-pills": m.value,
      "flex-column me-3": $.value,
      [x.value]: l.align !== void 0,
      "nav-fill": r.value,
      "card-header-tabs": o.value,
      "nav-justified": v.value,
      "nav-tabs": !b.value && !m.value,
      small: h.value
    })), A = (C) => {
      let I = !1;
      if (C !== void 0 && C > -1 && C < y.value.length && !y.value[C].disabled && (w.value < 0 || y.value[C].buttonId !== k.value)) {
        const E = new Xe("activate-tab", { cancelable: !0 });
        t("activate-tab", C, w.value, E), E.defaultPrevented || (w.value = C, I = !0);
      }
      return !I && a.value !== w.value && (a.value = w.value), I;
    }, F = (C, I) => {
      var E;
      A(I), I >= 0 && !y.value[I].disabled && ((E = y.value[I]) != null && E.onClick) && typeof y.value[I].onClick == "function" && y.value[I].onClick(C);
    };
    return A(f.value), ve(a, (C, I) => {
      if (C === I)
        return;
      if (C = Math.max(C, -1), I = Math.max(I, -1), y.value.length <= 0) {
        w.value = -1;
        return;
      }
      const E = C > I;
      let W = C;
      const D = y.value.length - 1;
      for (; W >= 0 && W <= D && y.value[W].disabled; )
        W += E ? 1 : -1;
      if (W < 0) {
        A(0);
        return;
      }
      if (W >= y.value.length) {
        A(y.value.length - 1);
        return;
      }
      A(W);
    }), ve(y, () => {
      let C = y.value.map((I) => I.active && !I.disabled).lastIndexOf(!0);
      C < 0 && (w.value >= y.value.length ? C = y.value.map((I) => !I.disabled).lastIndexOf(!0) : y.value[w.value] && !y.value[w.value].disabled && (C = w.value)), C < 0 && (C = y.value.map((I) => !I.disabled).indexOf(!0)), y.value.forEach((I, E) => I.active = E === C), A(C);
    }), Ne(() => {
      if (w.value < 0 && y.value.length > 0 && !y.value.some((C) => C.active)) {
        const C = y.value.map((I) => !I.disabled).indexOf(!0);
        A(C >= 0 ? C : -1);
      }
    }), at(hn, {
      lazy: p,
      card: o
    }), (C, I) => (g(), j(le(e.tag), {
      id: e.id,
      class: M(["tabs", s(O)])
    }, {
      default: q(() => [
        s(i) ? (g(), T("div", {
          key: 0,
          class: M(["tab-content", e.contentClass])
        }, [
          (g(!0), T(ue, null, Be(s(y), ({ tabComponent: E, contentId: W, tabClasses: D, active: J }, ae) => (g(), j(le(E()), {
            id: W,
            key: ae,
            class: M(D),
            active: J
          }, null, 8, ["id", "class", "active"]))), 128)),
          s(V) ? (g(), T("div", {
            key: "bv-empty-tab",
            class: M(["tab-pane active", { "card-body": s(o) }])
          }, [
            _(C.$slots, "empty")
          ], 2)) : Y("", !0)
        ], 2)) : Y("", !0),
        U("div", {
          class: M([e.navWrapperClass, { "card-header": s(o), "ms-auto": e.vertical && s(i) }])
        }, [
          U("ul", {
            class: M(["nav", [s(S), e.navClass]]),
            role: "tablist"
          }, [
            _(C.$slots, "tabs-start"),
            (g(!0), T(ue, null, Be(s(y), ({ tab: E, buttonId: W, contentId: D, navItemClasses: J, active: ae, target: Z }, te) => {
              var ce, pe, be;
              return g(), T("li", {
                key: te,
                class: M(["nav-item", (ce = E == null ? void 0 : E.props) == null ? void 0 : ce["title-item-class"]]),
                role: "presentation"
              }, [
                U("button", Q({
                  id: W,
                  class: ["nav-link", J],
                  "data-bs-toggle": "tab",
                  "data-bs-target": Z,
                  role: "tab",
                  "aria-controls": D,
                  "aria-selected": ae
                }, (pe = E == null ? void 0 : E.props) == null ? void 0 : pe["title-link-attributes"], {
                  onClick: dt((ne) => F(ne, te), ["stop", "prevent"])
                }), [
                  E.children && E.children.title ? (g(), j(le(E.children.title), { key: 0 })) : (g(), T(ue, { key: 1 }, [
                    se(K((be = E == null ? void 0 : E.props) == null ? void 0 : be.title), 1)
                  ], 64))
                ], 16, af)
              ], 2);
            }), 128)),
            _(C.$slots, "tabs-end")
          ], 2)
        ], 2),
        s(i) ? Y("", !0) : (g(), T("div", {
          key: 1,
          class: M(["tab-content", e.contentClass])
        }, [
          (g(!0), T(ue, null, Be(s(y), ({ tabComponent: E, contentId: W, tabClasses: D, active: J }, ae) => (g(), j(le(E()), {
            id: W,
            key: ae,
            class: M(D),
            active: J
          }, null, 8, ["id", "class", "active"]))), 128)),
          s(V) ? (g(), T("div", {
            key: "bv-empty-tab",
            class: M(["tab-pane active", { "card-body": s(o) }])
          }, [
            _(C.$slots, "empty")
          ], 2)) : Y("", !0)
        ], 2))
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), of = /* @__PURE__ */ R({
  __name: "BTooltip",
  setup(e) {
    return (t, l) => (g(), j(Wl, { tooltip: "" }, an({ _: 2 }, [
      Be(t.$slots, (a, n) => ({
        name: n,
        fn: q((o) => [
          _(t.$slots, n, $e(Ae(o)))
        ])
      }))
    ]), 1024));
  }
}), sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BAccordion: qr,
  BAccordionItem: Kr,
  BAlert: ai,
  BAvatar: ri,
  BAvatarGroup: ii,
  BBadge: ci,
  BBreadcrumb: gi,
  BBreadcrumbItem: oo,
  BButton: $t,
  BButtonGroup: bi,
  BButtonToolbar: yi,
  BCard: vo,
  BCardBody: co,
  BCardFooter: fo,
  BCardGroup: $i,
  BCardHeader: ro,
  BCardImg: al,
  BCardSubtitle: uo,
  BCardText: wi,
  BCardTitle: io,
  BCarousel: Oi,
  BCarouselSlide: Li,
  BCloseButton: Ct,
  BCol: Tt,
  BCollapse: no,
  BContainer: qi,
  BDropdown: bo,
  BDropdownDivider: Xi,
  BDropdownForm: Qi,
  BDropdownGroup: au,
  BDropdownHeader: ru,
  BDropdownItem: uu,
  BDropdownItemButton: fu,
  BDropdownText: pu,
  BForm: ho,
  BFormCheckbox: yo,
  BFormCheckboxGroup: Tu,
  BFormFloatingLabel: yu,
  BFormGroup: Iu,
  BFormInput: zu,
  BFormInvalidFeedback: xl,
  BFormRadio: $o,
  BFormRadioGroup: qu,
  BFormRow: Dt,
  BFormSelect: Xu,
  BFormSelectOption: Xl,
  BFormSelectOptionGroup: wo,
  BFormSpinButton: Cc,
  BFormTag: ko,
  BFormTags: ud,
  BFormText: Al,
  BFormTextarea: vd,
  BFormValidFeedback: Vl,
  BImg: Ul,
  BInputGroup: Bd,
  BInputGroupAddon: Kl,
  BInputGroupAppend: $d,
  BInputGroupPrepend: wd,
  BInputGroupText: So,
  BLink: Le,
  BListGroup: kd,
  BListGroupItem: Sd,
  BModal: Ad,
  BNav: Vd,
  BNavForm: Od,
  BNavItem: Fd,
  BNavItemDropdown: Nd,
  BNavText: Rd,
  BNavbar: Hd,
  BNavbarBrand: jd,
  BNavbarNav: qd,
  BNavbarToggle: Yd,
  BOffcanvas: lc,
  BOverlay: _o,
  BPagination: cc,
  BPlaceholder: He,
  BPlaceholderButton: Vo,
  BPlaceholderCard: vc,
  BPlaceholderTable: mc,
  BPlaceholderWrapper: pc,
  BPopover: Wl,
  BProgress: bc,
  BProgressBar: Oo,
  BRow: Bc,
  BSpinner: cl,
  BTab: lf,
  BTable: Gc,
  BTableSimple: Jl,
  BTabs: nf,
  BTbody: Wc,
  BTd: Kc,
  BTfoot: Yc,
  BTh: Qc,
  BThead: ef,
  BToast: go,
  BToastContainer: _l,
  BToastPlugin: Di,
  BToaster: _l,
  BTooltip: of,
  BTr: tf,
  BTransition: St
}, Symbol.toStringTag, { value: "Module" })), rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  vBColorMode: Gd,
  vBPopover: Ud,
  vBToggle: To,
  vBTooltip: Xd
}, Symbol.toStringTag, { value: "Module" })), cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createBreadcrumb: Un,
  useBreadcrumb: Xn,
  useColorMode: Pr
}, Symbol.toStringTag, { value: "Module" })), ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BvCarouselEvent: on,
  BvEvent: Xe,
  BvTriggerableEvent: Et
}, Symbol.toStringTag, { value: "Module" })), vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), mf = {
  // TODO: use options in the future
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install(e, t = {}) {
    Object.entries(sf).forEach(([l, a]) => {
      e.component(l, a);
    }), Object.entries(rf).forEach(([l, a]) => {
      l.toLowerCase().startsWith("v") ? e.directive(l.slice(1), a) : e.directive(l, a);
    }), Un(e);
  }
};
export {
  qr as BAccordion,
  Kr as BAccordionItem,
  ai as BAlert,
  ri as BAvatar,
  ii as BAvatarGroup,
  ci as BBadge,
  gi as BBreadcrumb,
  oo as BBreadcrumbItem,
  $t as BButton,
  bi as BButtonGroup,
  yi as BButtonToolbar,
  vo as BCard,
  co as BCardBody,
  fo as BCardFooter,
  $i as BCardGroup,
  ro as BCardHeader,
  al as BCardImg,
  uo as BCardSubtitle,
  wi as BCardText,
  io as BCardTitle,
  Oi as BCarousel,
  Li as BCarouselSlide,
  Ct as BCloseButton,
  Tt as BCol,
  no as BCollapse,
  qi as BContainer,
  bo as BDropdown,
  Xi as BDropdownDivider,
  Qi as BDropdownForm,
  au as BDropdownGroup,
  ru as BDropdownHeader,
  uu as BDropdownItem,
  fu as BDropdownItemButton,
  pu as BDropdownText,
  ho as BForm,
  yo as BFormCheckbox,
  Tu as BFormCheckboxGroup,
  yu as BFormFloatingLabel,
  Iu as BFormGroup,
  zu as BFormInput,
  xl as BFormInvalidFeedback,
  $o as BFormRadio,
  qu as BFormRadioGroup,
  Dt as BFormRow,
  Xu as BFormSelect,
  Xl as BFormSelectOption,
  wo as BFormSelectOptionGroup,
  Cc as BFormSpinButton,
  ko as BFormTag,
  ud as BFormTags,
  Al as BFormText,
  vd as BFormTextarea,
  Vl as BFormValidFeedback,
  Ul as BImg,
  Bd as BInputGroup,
  Kl as BInputGroupAddon,
  $d as BInputGroupAppend,
  wd as BInputGroupPrepend,
  So as BInputGroupText,
  Le as BLink,
  kd as BListGroup,
  Sd as BListGroupItem,
  Ad as BModal,
  Vd as BNav,
  Od as BNavForm,
  Fd as BNavItem,
  Nd as BNavItemDropdown,
  Rd as BNavText,
  Hd as BNavbar,
  jd as BNavbarBrand,
  qd as BNavbarNav,
  Yd as BNavbarToggle,
  lc as BOffcanvas,
  _o as BOverlay,
  cc as BPagination,
  He as BPlaceholder,
  Vo as BPlaceholderButton,
  vc as BPlaceholderCard,
  mc as BPlaceholderTable,
  pc as BPlaceholderWrapper,
  Wl as BPopover,
  bc as BProgress,
  Oo as BProgressBar,
  Bc as BRow,
  cl as BSpinner,
  lf as BTab,
  Gc as BTable,
  Jl as BTableSimple,
  nf as BTabs,
  Wc as BTbody,
  Kc as BTd,
  Yc as BTfoot,
  Qc as BTh,
  ef as BThead,
  go as BToast,
  _l as BToastContainer,
  Di as BToastPlugin,
  _l as BToaster,
  of as BTooltip,
  tf as BTr,
  St as BTransition,
  mf as BootstrapVueNext,
  on as BvCarouselEvent,
  Xe as BvEvent,
  Et as BvTriggerableEvent,
  sf as Components,
  cf as Composables,
  rf as Directives,
  vf as Types,
  ff as Utils,
  Un as createBreadcrumb,
  mf as default,
  Xn as useBreadcrumb,
  Pr as useColorMode,
  po as useToast,
  Gd as vBColorMode,
  Ud as vBPopover,
  To as vBToggle,
  Xd as vBTooltip
};
//# sourceMappingURL=bootstrap-vue-next.mjs.map

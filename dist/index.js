var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// build/_snowpack/env.js
var env_exports = {};
__export(env_exports, {
  MODE: () => MODE,
  NODE_ENV: () => NODE_ENV,
  SSR: () => SSR
});
var MODE = "production";
var NODE_ENV = "production";
var SSR = false;

// build/_snowpack/pkg/common/index-210ebed7.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n4) {
      return test2[n4];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var react_production_min = createCommonjsModule(function(module, exports) {
  var n4 = 60103, p5 = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q4 = 60109, r4 = 60110, t3 = 60112;
  exports.Suspense = 60113;
  var u2 = 60115, v4 = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w5 = Symbol.for;
    n4 = w5("react.element");
    p5 = w5("react.portal");
    exports.Fragment = w5("react.fragment");
    exports.StrictMode = w5("react.strict_mode");
    exports.Profiler = w5("react.profiler");
    q4 = w5("react.provider");
    r4 = w5("react.context");
    t3 = w5("react.forward_ref");
    exports.Suspense = w5("react.suspense");
    u2 = w5("react.memo");
    v4 = w5("react.lazy");
  }
  var x3 = typeof Symbol === "function" && Symbol.iterator;
  function y5(a) {
    if (a === null || typeof a !== "object")
      return null;
    a = x3 && a[x3] || a["@@iterator"];
    return typeof a === "function" ? a : null;
  }
  function z4(a) {
    for (var b4 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c4 = 1; c4 < arguments.length; c4++)
      b4 += "&args[]=" + encodeURIComponent(arguments[c4]);
    return "Minified React error #" + a + "; visit " + b4 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A4 = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, B3 = {};
  function C2(a, b4, c4) {
    this.props = a;
    this.context = b4;
    this.refs = B3;
    this.updater = c4 || A4;
  }
  C2.prototype.isReactComponent = {};
  C2.prototype.setState = function(a, b4) {
    if (typeof a !== "object" && typeof a !== "function" && a != null)
      throw Error(z4(85));
    this.updater.enqueueSetState(this, a, b4, "setState");
  };
  C2.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function D3() {
  }
  D3.prototype = C2.prototype;
  function E2(a, b4, c4) {
    this.props = a;
    this.context = b4;
    this.refs = B3;
    this.updater = c4 || A4;
  }
  var F3 = E2.prototype = new D3();
  F3.constructor = E2;
  objectAssign(F3, C2.prototype);
  F3.isPureReactComponent = true;
  var G3 = {current: null}, H3 = Object.prototype.hasOwnProperty, I3 = {key: true, ref: true, __self: true, __source: true};
  function J2(a, b4, c4) {
    var e4, d4 = {}, k4 = null, h4 = null;
    if (b4 != null)
      for (e4 in b4.ref !== void 0 && (h4 = b4.ref), b4.key !== void 0 && (k4 = "" + b4.key), b4)
        H3.call(b4, e4) && !I3.hasOwnProperty(e4) && (d4[e4] = b4[e4]);
    var g4 = arguments.length - 2;
    if (g4 === 1)
      d4.children = c4;
    else if (1 < g4) {
      for (var f4 = Array(g4), m4 = 0; m4 < g4; m4++)
        f4[m4] = arguments[m4 + 2];
      d4.children = f4;
    }
    if (a && a.defaultProps)
      for (e4 in g4 = a.defaultProps, g4)
        d4[e4] === void 0 && (d4[e4] = g4[e4]);
    return {$$typeof: n4, type: a, key: k4, ref: h4, props: d4, _owner: G3.current};
  }
  function K2(a, b4) {
    return {$$typeof: n4, type: a.type, key: b4, ref: a.ref, props: a.props, _owner: a._owner};
  }
  function L2(a) {
    return typeof a === "object" && a !== null && a.$$typeof === n4;
  }
  function escape(a) {
    var b4 = {"=": "=0", ":": "=2"};
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b4[a2];
    });
  }
  var M3 = /\/+/g;
  function N3(a, b4) {
    return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b4.toString(36);
  }
  function O3(a, b4, c4, e4, d4) {
    var k4 = typeof a;
    if (k4 === "undefined" || k4 === "boolean")
      a = null;
    var h4 = false;
    if (a === null)
      h4 = true;
    else
      switch (k4) {
        case "string":
        case "number":
          h4 = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case n4:
            case p5:
              h4 = true;
          }
      }
    if (h4)
      return h4 = a, d4 = d4(h4), a = e4 === "" ? "." + N3(h4, 0) : e4, Array.isArray(d4) ? (c4 = "", a != null && (c4 = a.replace(M3, "$&/") + "/"), O3(d4, b4, c4, "", function(a2) {
        return a2;
      })) : d4 != null && (L2(d4) && (d4 = K2(d4, c4 + (!d4.key || h4 && h4.key === d4.key ? "" : ("" + d4.key).replace(M3, "$&/") + "/") + a)), b4.push(d4)), 1;
    h4 = 0;
    e4 = e4 === "" ? "." : e4 + ":";
    if (Array.isArray(a))
      for (var g4 = 0; g4 < a.length; g4++) {
        k4 = a[g4];
        var f4 = e4 + N3(k4, g4);
        h4 += O3(k4, b4, c4, f4, d4);
      }
    else if (f4 = y5(a), typeof f4 === "function")
      for (a = f4.call(a), g4 = 0; !(k4 = a.next()).done; )
        k4 = k4.value, f4 = e4 + N3(k4, g4++), h4 += O3(k4, b4, c4, f4, d4);
    else if (k4 === "object")
      throw b4 = "" + a, Error(z4(31, b4 === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b4));
    return h4;
  }
  function P3(a, b4, c4) {
    if (a == null)
      return a;
    var e4 = [], d4 = 0;
    O3(a, e4, "", "", function(a2) {
      return b4.call(c4, a2, d4++);
    });
    return e4;
  }
  function Q2(a) {
    if (a._status === -1) {
      var b4 = a._result;
      b4 = b4();
      a._status = 0;
      a._result = b4;
      b4.then(function(b5) {
        a._status === 0 && (b5 = b5.default, a._status = 1, a._result = b5);
      }, function(b5) {
        a._status === 0 && (a._status = 2, a._result = b5);
      });
    }
    if (a._status === 1)
      return a._result;
    throw a._result;
  }
  var R2 = {current: null};
  function S3() {
    var a = R2.current;
    if (a === null)
      throw Error(z4(321));
    return a;
  }
  var T3 = {ReactCurrentDispatcher: R2, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G3, IsSomeRendererActing: {current: false}, assign: objectAssign};
  exports.Children = {map: P3, forEach: function(a, b4, c4) {
    P3(a, function() {
      b4.apply(this, arguments);
    }, c4);
  }, count: function(a) {
    var b4 = 0;
    P3(a, function() {
      b4++;
    });
    return b4;
  }, toArray: function(a) {
    return P3(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!L2(a))
      throw Error(z4(143));
    return a;
  }};
  exports.Component = C2;
  exports.PureComponent = E2;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T3;
  exports.cloneElement = function(a, b4, c4) {
    if (a === null || a === void 0)
      throw Error(z4(267, a));
    var e4 = objectAssign({}, a.props), d4 = a.key, k4 = a.ref, h4 = a._owner;
    if (b4 != null) {
      b4.ref !== void 0 && (k4 = b4.ref, h4 = G3.current);
      b4.key !== void 0 && (d4 = "" + b4.key);
      if (a.type && a.type.defaultProps)
        var g4 = a.type.defaultProps;
      for (f4 in b4)
        H3.call(b4, f4) && !I3.hasOwnProperty(f4) && (e4[f4] = b4[f4] === void 0 && g4 !== void 0 ? g4[f4] : b4[f4]);
    }
    var f4 = arguments.length - 2;
    if (f4 === 1)
      e4.children = c4;
    else if (1 < f4) {
      g4 = Array(f4);
      for (var m4 = 0; m4 < f4; m4++)
        g4[m4] = arguments[m4 + 2];
      e4.children = g4;
    }
    return {
      $$typeof: n4,
      type: a.type,
      key: d4,
      ref: k4,
      props: e4,
      _owner: h4
    };
  };
  exports.createContext = function(a, b4) {
    b4 === void 0 && (b4 = null);
    a = {$$typeof: r4, _calculateChangedBits: b4, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null};
    a.Provider = {$$typeof: q4, _context: a};
    return a.Consumer = a;
  };
  exports.createElement = J2;
  exports.createFactory = function(a) {
    var b4 = J2.bind(null, a);
    b4.type = a;
    return b4;
  };
  exports.createRef = function() {
    return {current: null};
  };
  exports.forwardRef = function(a) {
    return {$$typeof: t3, render: a};
  };
  exports.isValidElement = L2;
  exports.lazy = function(a) {
    return {$$typeof: v4, _payload: {_status: -1, _result: a}, _init: Q2};
  };
  exports.memo = function(a, b4) {
    return {$$typeof: u2, type: a, compare: b4 === void 0 ? null : b4};
  };
  exports.useCallback = function(a, b4) {
    return S3().useCallback(a, b4);
  };
  exports.useContext = function(a, b4) {
    return S3().useContext(a, b4);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a, b4) {
    return S3().useEffect(a, b4);
  };
  exports.useImperativeHandle = function(a, b4, c4) {
    return S3().useImperativeHandle(a, b4, c4);
  };
  exports.useLayoutEffect = function(a, b4) {
    return S3().useLayoutEffect(a, b4);
  };
  exports.useMemo = function(a, b4) {
    return S3().useMemo(a, b4);
  };
  exports.useReducer = function(a, b4, c4) {
    return S3().useReducer(a, b4, c4);
  };
  exports.useRef = function(a) {
    return S3().useRef(a);
  };
  exports.useState = function(a) {
    return S3().useState(a);
  };
  exports.version = "17.0.2";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// build/_snowpack/pkg/react.js
var Component = react.Component;

// build/_snowpack/pkg/react-dom.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  var f4, g4, h4, k4;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l4 = performance;
    exports.unstable_now = function() {
      return l4.now();
    };
  } else {
    var p5 = Date, q4 = p5.now();
    exports.unstable_now = function() {
      return p5.now() - q4;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t3 = null, u2 = null, w5 = function() {
      if (t3 !== null)
        try {
          var a = exports.unstable_now();
          t3(true, a);
          t3 = null;
        } catch (b4) {
          throw setTimeout(w5, 0), b4;
        }
    };
    f4 = function(a) {
      t3 !== null ? setTimeout(f4, 0, a) : (t3 = a, setTimeout(w5, 0));
    };
    g4 = function(a, b4) {
      u2 = setTimeout(a, b4);
    };
    h4 = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k4 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x3 = window.setTimeout, y5 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z4 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z4 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A4 = false, B3 = null, C2 = -1, D3 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k4 = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D3 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F3 = new MessageChannel(), G3 = F3.port2;
    F3.port1.onmessage = function() {
      if (B3 !== null) {
        var a = exports.unstable_now();
        E2 = a + D3;
        try {
          B3(true, a) ? G3.postMessage(null) : (A4 = false, B3 = null);
        } catch (b4) {
          throw G3.postMessage(null), b4;
        }
      } else
        A4 = false;
    };
    f4 = function(a) {
      B3 = a;
      A4 || (A4 = true, G3.postMessage(null));
    };
    g4 = function(a, b4) {
      C2 = x3(function() {
        a(exports.unstable_now());
      }, b4);
    };
    h4 = function() {
      y5(C2);
      C2 = -1;
    };
  }
  function H3(a, b4) {
    var c4 = a.length;
    a.push(b4);
    a:
      for (; ; ) {
        var d4 = c4 - 1 >>> 1, e4 = a[d4];
        if (e4 !== void 0 && 0 < I3(e4, b4))
          a[d4] = b4, a[c4] = e4, c4 = d4;
        else
          break a;
      }
  }
  function J2(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K2(a) {
    var b4 = a[0];
    if (b4 !== void 0) {
      var c4 = a.pop();
      if (c4 !== b4) {
        a[0] = c4;
        a:
          for (var d4 = 0, e4 = a.length; d4 < e4; ) {
            var m4 = 2 * (d4 + 1) - 1, n4 = a[m4], v4 = m4 + 1, r4 = a[v4];
            if (n4 !== void 0 && 0 > I3(n4, c4))
              r4 !== void 0 && 0 > I3(r4, n4) ? (a[d4] = r4, a[v4] = c4, d4 = v4) : (a[d4] = n4, a[m4] = c4, d4 = m4);
            else if (r4 !== void 0 && 0 > I3(r4, c4))
              a[d4] = r4, a[v4] = c4, d4 = v4;
            else
              break a;
          }
      }
      return b4;
    }
    return null;
  }
  function I3(a, b4) {
    var c4 = a.sortIndex - b4.sortIndex;
    return c4 !== 0 ? c4 : a.id - b4.id;
  }
  var L2 = [], M3 = [], N3 = 1, O3 = null, P3 = 3, Q2 = false, R2 = false, S3 = false;
  function T3(a) {
    for (var b4 = J2(M3); b4 !== null; ) {
      if (b4.callback === null)
        K2(M3);
      else if (b4.startTime <= a)
        K2(M3), b4.sortIndex = b4.expirationTime, H3(L2, b4);
      else
        break;
      b4 = J2(M3);
    }
  }
  function U3(a) {
    S3 = false;
    T3(a);
    if (!R2)
      if (J2(L2) !== null)
        R2 = true, f4(V3);
      else {
        var b4 = J2(M3);
        b4 !== null && g4(U3, b4.startTime - a);
      }
  }
  function V3(a, b4) {
    R2 = false;
    S3 && (S3 = false, h4());
    Q2 = true;
    var c4 = P3;
    try {
      T3(b4);
      for (O3 = J2(L2); O3 !== null && (!(O3.expirationTime > b4) || a && !exports.unstable_shouldYield()); ) {
        var d4 = O3.callback;
        if (typeof d4 === "function") {
          O3.callback = null;
          P3 = O3.priorityLevel;
          var e4 = d4(O3.expirationTime <= b4);
          b4 = exports.unstable_now();
          typeof e4 === "function" ? O3.callback = e4 : O3 === J2(L2) && K2(L2);
          T3(b4);
        } else
          K2(L2);
        O3 = J2(L2);
      }
      if (O3 !== null)
        var m4 = true;
      else {
        var n4 = J2(M3);
        n4 !== null && g4(U3, n4.startTime - b4);
        m4 = false;
      }
      return m4;
    } finally {
      O3 = null, P3 = c4, Q2 = false;
    }
  }
  var W3 = k4;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f4(V3));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P3;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a) {
    switch (P3) {
      case 1:
      case 2:
      case 3:
        var b4 = 3;
        break;
      default:
        b4 = P3;
    }
    var c4 = P3;
    P3 = b4;
    try {
      return a();
    } finally {
      P3 = c4;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W3;
  exports.unstable_runWithPriority = function(a, b4) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c4 = P3;
    P3 = a;
    try {
      return b4();
    } finally {
      P3 = c4;
    }
  };
  exports.unstable_scheduleCallback = function(a, b4, c4) {
    var d4 = exports.unstable_now();
    typeof c4 === "object" && c4 !== null ? (c4 = c4.delay, c4 = typeof c4 === "number" && 0 < c4 ? d4 + c4 : d4) : c4 = d4;
    switch (a) {
      case 1:
        var e4 = -1;
        break;
      case 2:
        e4 = 250;
        break;
      case 5:
        e4 = 1073741823;
        break;
      case 4:
        e4 = 1e4;
        break;
      default:
        e4 = 5e3;
    }
    e4 = c4 + e4;
    a = {id: N3++, callback: b4, priorityLevel: a, startTime: c4, expirationTime: e4, sortIndex: -1};
    c4 > d4 ? (a.sortIndex = c4, H3(M3, a), J2(L2) === null && a === J2(M3) && (S3 ? h4() : S3 = true, g4(U3, c4 - d4))) : (a.sortIndex = e4, H3(L2, a), R2 || Q2 || (R2 = true, f4(V3)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b4 = P3;
    return function() {
      var c4 = P3;
      P3 = b4;
      try {
        return a.apply(this, arguments);
      } finally {
        P3 = c4;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a) {
  for (var b4 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c4 = 1; c4 < arguments.length; c4++)
    b4 += "&args[]=" + encodeURIComponent(arguments[c4]);
  return "Minified React error #" + a + "; visit " + b4 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a, b4) {
  ea(a, b4);
  ea(a + "Capture", b4);
}
function ea(a, b4) {
  ca[a] = b4;
  for (a = 0; a < b4.length; a++)
    ba.add(b4[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b4, c4, d4) {
  if (c4 !== null && c4.type === 0)
    return false;
  switch (typeof b4) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d4)
        return false;
      if (c4 !== null)
        return !c4.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b4, c4, d4) {
  if (b4 === null || typeof b4 === "undefined" || ma(a, b4, c4, d4))
    return true;
  if (d4)
    return false;
  if (c4 !== null)
    switch (c4.type) {
      case 3:
        return !b4;
      case 4:
        return b4 === false;
      case 5:
        return isNaN(b4);
      case 6:
        return isNaN(b4) || 1 > b4;
    }
  return false;
}
function B(a, b4, c4, d4, e4, f4, g4) {
  this.acceptsBooleans = b4 === 2 || b4 === 3 || b4 === 4;
  this.attributeName = d4;
  this.attributeNamespace = e4;
  this.mustUseProperty = c4;
  this.propertyName = a;
  this.type = b4;
  this.sanitizeURL = f4;
  this.removeEmptyString = g4;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b4 = a[0];
  D[b4] = new B(b4, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b4 = a.replace(oa, pa);
  D[b4] = new B(b4, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b4 = a.replace(oa, pa);
  D[b4] = new B(b4, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b4 = a.replace(oa, pa);
  D[b4] = new B(b4, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b4, c4, d4) {
  var e4 = D.hasOwnProperty(b4) ? D[b4] : null;
  var f4 = e4 !== null ? e4.type === 0 : d4 ? false : !(2 < b4.length) || b4[0] !== "o" && b4[0] !== "O" || b4[1] !== "n" && b4[1] !== "N" ? false : true;
  f4 || (na(b4, c4, e4, d4) && (c4 = null), d4 || e4 === null ? la(b4) && (c4 === null ? a.removeAttribute(b4) : a.setAttribute(b4, "" + c4)) : e4.mustUseProperty ? a[e4.propertyName] = c4 === null ? e4.type === 3 ? false : "" : c4 : (b4 = e4.attributeName, d4 = e4.attributeNamespace, c4 === null ? a.removeAttribute(b4) : (e4 = e4.type, c4 = e4 === 3 || e4 === 4 && c4 === true ? "" : "" + c4, d4 ? a.setAttributeNS(d4, b4, c4) : a.setAttribute(b4, c4))));
}
var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var sa = 60103;
var ta = 60106;
var ua = 60107;
var wa = 60108;
var xa = 60114;
var ya = 60109;
var za = 60110;
var Aa = 60112;
var Ba = 60113;
var Ca = 60120;
var Da = 60115;
var Ea = 60116;
var Fa = 60121;
var Ga = 60128;
var Ha = 60129;
var Ia = 60130;
var Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  E2 = Symbol.for;
  sa = E2("react.element");
  ta = E2("react.portal");
  ua = E2("react.fragment");
  wa = E2("react.strict_mode");
  xa = E2("react.profiler");
  ya = E2("react.provider");
  za = E2("react.context");
  Aa = E2("react.forward_ref");
  Ba = E2("react.suspense");
  Ca = E2("react.suspense_list");
  Da = E2("react.memo");
  Ea = E2("react.lazy");
  Fa = E2("react.block");
  E2("react.scope");
  Ga = E2("react.opaque.id");
  Ha = E2("react.debug_trace_mode");
  Ia = E2("react.offscreen");
  Ja = E2("react.legacy_hidden");
}
var E2;
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c4) {
      var b4 = c4.stack.trim().match(/\n( *(at )?)/);
      Ma = b4 && b4[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b4) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c4 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b4)
      if (b4 = function() {
        throw Error();
      }, Object.defineProperty(b4.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b4, []);
        } catch (k4) {
          var d4 = k4;
        }
        Reflect.construct(a, [], b4);
      } else {
        try {
          b4.call();
        } catch (k4) {
          d4 = k4;
        }
        a.call(b4.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k4) {
        d4 = k4;
      }
      a();
    }
  } catch (k4) {
    if (k4 && d4 && typeof k4.stack === "string") {
      for (var e4 = k4.stack.split("\n"), f4 = d4.stack.split("\n"), g4 = e4.length - 1, h4 = f4.length - 1; 1 <= g4 && 0 <= h4 && e4[g4] !== f4[h4]; )
        h4--;
      for (; 1 <= g4 && 0 <= h4; g4--, h4--)
        if (e4[g4] !== f4[h4]) {
          if (g4 !== 1 || h4 !== 1) {
            do
              if (g4--, h4--, 0 > h4 || e4[g4] !== f4[h4])
                return "\n" + e4[g4].replace(" at new ", " at ");
            while (1 <= g4 && 0 <= h4);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c4;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b4 = a.render;
        b4 = b4.displayName || b4.name || "";
        return a.displayName || (b4 !== "" ? "ForwardRef(" + b4 + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b4 = a._payload;
        a = a._init;
        try {
          return Ra(a(b4));
        } catch (c4) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b4 = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b4 === "checkbox" || b4 === "radio");
}
function Ua(a) {
  var b4 = Ta(a) ? "checked" : "value", c4 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b4), d4 = "" + a[b4];
  if (!a.hasOwnProperty(b4) && typeof c4 !== "undefined" && typeof c4.get === "function" && typeof c4.set === "function") {
    var e4 = c4.get, f4 = c4.set;
    Object.defineProperty(a, b4, {configurable: true, get: function() {
      return e4.call(this);
    }, set: function(a2) {
      d4 = "" + a2;
      f4.call(this, a2);
    }});
    Object.defineProperty(a, b4, {enumerable: c4.enumerable});
    return {getValue: function() {
      return d4;
    }, setValue: function(a2) {
      d4 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b4];
    }};
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b4 = a._valueTracker;
  if (!b4)
    return true;
  var c4 = b4.getValue();
  var d4 = "";
  a && (d4 = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d4;
  return a !== c4 ? (b4.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b4) {
    return a.body;
  }
}
function Ya(a, b4) {
  var c4 = b4.checked;
  return objectAssign({}, b4, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c4 != null ? c4 : a._wrapperState.initialChecked});
}
function Za(a, b4) {
  var c4 = b4.defaultValue == null ? "" : b4.defaultValue, d4 = b4.checked != null ? b4.checked : b4.defaultChecked;
  c4 = Sa(b4.value != null ? b4.value : c4);
  a._wrapperState = {initialChecked: d4, initialValue: c4, controlled: b4.type === "checkbox" || b4.type === "radio" ? b4.checked != null : b4.value != null};
}
function $a(a, b4) {
  b4 = b4.checked;
  b4 != null && qa(a, "checked", b4, false);
}
function ab(a, b4) {
  $a(a, b4);
  var c4 = Sa(b4.value), d4 = b4.type;
  if (c4 != null)
    if (d4 === "number") {
      if (c4 === 0 && a.value === "" || a.value != c4)
        a.value = "" + c4;
    } else
      a.value !== "" + c4 && (a.value = "" + c4);
  else if (d4 === "submit" || d4 === "reset") {
    a.removeAttribute("value");
    return;
  }
  b4.hasOwnProperty("value") ? bb(a, b4.type, c4) : b4.hasOwnProperty("defaultValue") && bb(a, b4.type, Sa(b4.defaultValue));
  b4.checked == null && b4.defaultChecked != null && (a.defaultChecked = !!b4.defaultChecked);
}
function cb(a, b4, c4) {
  if (b4.hasOwnProperty("value") || b4.hasOwnProperty("defaultValue")) {
    var d4 = b4.type;
    if (!(d4 !== "submit" && d4 !== "reset" || b4.value !== void 0 && b4.value !== null))
      return;
    b4 = "" + a._wrapperState.initialValue;
    c4 || b4 === a.value || (a.value = b4);
    a.defaultValue = b4;
  }
  c4 = a.name;
  c4 !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c4 !== "" && (a.name = c4);
}
function bb(a, b4, c4) {
  if (b4 !== "number" || Xa(a.ownerDocument) !== a)
    c4 == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c4 && (a.defaultValue = "" + c4);
}
function db(a) {
  var b4 = "";
  react.Children.forEach(a, function(a2) {
    a2 != null && (b4 += a2);
  });
  return b4;
}
function eb(a, b4) {
  a = objectAssign({children: void 0}, b4);
  if (b4 = db(b4.children))
    a.children = b4;
  return a;
}
function fb(a, b4, c4, d4) {
  a = a.options;
  if (b4) {
    b4 = {};
    for (var e4 = 0; e4 < c4.length; e4++)
      b4["$" + c4[e4]] = true;
    for (c4 = 0; c4 < a.length; c4++)
      e4 = b4.hasOwnProperty("$" + a[c4].value), a[c4].selected !== e4 && (a[c4].selected = e4), e4 && d4 && (a[c4].defaultSelected = true);
  } else {
    c4 = "" + Sa(c4);
    b4 = null;
    for (e4 = 0; e4 < a.length; e4++) {
      if (a[e4].value === c4) {
        a[e4].selected = true;
        d4 && (a[e4].defaultSelected = true);
        return;
      }
      b4 !== null || a[e4].disabled || (b4 = a[e4]);
    }
    b4 !== null && (b4.selected = true);
  }
}
function gb(a, b4) {
  if (b4.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b4, {value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue});
}
function hb(a, b4) {
  var c4 = b4.value;
  if (c4 == null) {
    c4 = b4.children;
    b4 = b4.defaultValue;
    if (c4 != null) {
      if (b4 != null)
        throw Error(y(92));
      if (Array.isArray(c4)) {
        if (!(1 >= c4.length))
          throw Error(y(93));
        c4 = c4[0];
      }
      b4 = c4;
    }
    b4 == null && (b4 = "");
    c4 = b4;
  }
  a._wrapperState = {initialValue: Sa(c4)};
}
function ib(a, b4) {
  var c4 = Sa(b4.value), d4 = Sa(b4.defaultValue);
  c4 != null && (c4 = "" + c4, c4 !== a.value && (a.value = c4), b4.defaultValue == null && a.defaultValue !== c4 && (a.defaultValue = c4));
  d4 != null && (a.defaultValue = "" + d4);
}
function jb(a) {
  var b4 = a.textContent;
  b4 === a._wrapperState.initialValue && b4 !== "" && b4 !== null && (a.value = b4);
}
var kb = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b4) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b4) : a === "http://www.w3.org/2000/svg" && b4 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb;
var ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b4, c4, d4, e4) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b4, c4, d4, e4);
    });
  } : a;
}(function(a, b4) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b4;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b4.valueOf().toString() + "</svg>";
    for (b4 = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b4.firstChild; )
      a.appendChild(b4.firstChild);
  }
});
function pb(a, b4) {
  if (b4) {
    var c4 = a.firstChild;
    if (c4 && c4 === a.lastChild && c4.nodeType === 3) {
      c4.nodeValue = b4;
      return;
    }
  }
  a.textContent = b4;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b4) {
    b4 = b4 + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b4] = qb[a];
  });
});
function sb(a, b4, c4) {
  return b4 == null || typeof b4 === "boolean" || b4 === "" ? "" : c4 || typeof b4 !== "number" || b4 === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b4).trim() : b4 + "px";
}
function tb(a, b4) {
  a = a.style;
  for (var c4 in b4)
    if (b4.hasOwnProperty(c4)) {
      var d4 = c4.indexOf("--") === 0, e4 = sb(c4, b4[c4], d4);
      c4 === "float" && (c4 = "cssFloat");
      d4 ? a.setProperty(c4, e4) : a[c4] = e4;
    }
}
var ub = objectAssign({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function vb(a, b4) {
  if (b4) {
    if (ub[a] && (b4.children != null || b4.dangerouslySetInnerHTML != null))
      throw Error(y(137, a));
    if (b4.dangerouslySetInnerHTML != null) {
      if (b4.children != null)
        throw Error(y(60));
      if (!(typeof b4.dangerouslySetInnerHTML === "object" && "__html" in b4.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b4.style != null && typeof b4.style !== "object")
      throw Error(y(62));
  }
}
function wb(a, b4) {
  if (a.indexOf("-") === -1)
    return typeof b4.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b4 = a.stateNode;
    b4 && (b4 = Db(b4), yb(a.stateNode, a.type, b4));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b4 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b4)
      for (a = 0; a < b4.length; a++)
        Bb(b4[a]);
  }
}
function Gb(a, b4) {
  return a(b4);
}
function Hb(a, b4, c4, d4, e4) {
  return a(b4, c4, d4, e4);
}
function Ib() {
}
var Jb = Gb;
var Kb = false;
var Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b4, c4) {
  if (Lb)
    return a(b4, c4);
  Lb = true;
  try {
    return Jb(a, b4, c4);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b4) {
  var c4 = a.stateNode;
  if (c4 === null)
    return null;
  var d4 = Db(c4);
  if (d4 === null)
    return null;
  c4 = d4[b4];
  a:
    switch (b4) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d4 = !d4.disabled) || (a = a.type, d4 = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d4;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c4 && typeof c4 !== "function")
    throw Error(y(231, b4, typeof c4));
  return c4;
}
var Pb = false;
if (fa)
  try {
    Qb = {};
    Object.defineProperty(Qb, "passive", {get: function() {
      Pb = true;
    }});
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
var Qb;
function Rb(a, b4, c4, d4, e4, f4, g4, h4, k4) {
  var l4 = Array.prototype.slice.call(arguments, 3);
  try {
    b4.apply(c4, l4);
  } catch (n4) {
    this.onError(n4);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {onError: function(a) {
  Sb = true;
  Tb = a;
}};
function Xb(a, b4, c4, d4, e4, f4, g4, h4, k4) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b4, c4, d4, e4, f4, g4, h4, k4) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l4 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l4);
  }
}
function Zb(a) {
  var b4 = a, c4 = a;
  if (a.alternate)
    for (; b4.return; )
      b4 = b4.return;
  else {
    a = b4;
    do
      b4 = a, (b4.flags & 1026) !== 0 && (c4 = b4.return), a = b4.return;
    while (a);
  }
  return b4.tag === 3 ? c4 : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b4 = a.memoizedState;
    b4 === null && (a = a.alternate, a !== null && (b4 = a.memoizedState));
    if (b4 !== null)
      return b4.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b4 = a.alternate;
  if (!b4) {
    b4 = Zb(a);
    if (b4 === null)
      throw Error(y(188));
    return b4 !== a ? null : a;
  }
  for (var c4 = a, d4 = b4; ; ) {
    var e4 = c4.return;
    if (e4 === null)
      break;
    var f4 = e4.alternate;
    if (f4 === null) {
      d4 = e4.return;
      if (d4 !== null) {
        c4 = d4;
        continue;
      }
      break;
    }
    if (e4.child === f4.child) {
      for (f4 = e4.child; f4; ) {
        if (f4 === c4)
          return ac(e4), a;
        if (f4 === d4)
          return ac(e4), b4;
        f4 = f4.sibling;
      }
      throw Error(y(188));
    }
    if (c4.return !== d4.return)
      c4 = e4, d4 = f4;
    else {
      for (var g4 = false, h4 = e4.child; h4; ) {
        if (h4 === c4) {
          g4 = true;
          c4 = e4;
          d4 = f4;
          break;
        }
        if (h4 === d4) {
          g4 = true;
          d4 = e4;
          c4 = f4;
          break;
        }
        h4 = h4.sibling;
      }
      if (!g4) {
        for (h4 = f4.child; h4; ) {
          if (h4 === c4) {
            g4 = true;
            c4 = f4;
            d4 = e4;
            break;
          }
          if (h4 === d4) {
            g4 = true;
            d4 = f4;
            c4 = e4;
            break;
          }
          h4 = h4.sibling;
        }
        if (!g4)
          throw Error(y(189));
      }
    }
    if (c4.alternate !== d4)
      throw Error(y(190));
  }
  if (c4.tag !== 3)
    throw Error(y(188));
  return c4.stateNode.current === c4 ? a : b4;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b4 = a; ; ) {
    if (b4.tag === 5 || b4.tag === 6)
      return b4;
    if (b4.child)
      b4.child.return = b4, b4 = b4.child;
    else {
      if (b4 === a)
        break;
      for (; !b4.sibling; ) {
        if (!b4.return || b4.return === a)
          return null;
        b4 = b4.return;
      }
      b4.sibling.return = b4.return;
      b4 = b4.sibling;
    }
  }
  return null;
}
function dc(a, b4) {
  for (var c4 = a.alternate; b4 !== null; ) {
    if (b4 === a || b4 === c4)
      return true;
    b4 = b4.return;
  }
  return false;
}
var ec;
var fc;
var gc;
var hc;
var ic = false;
var jc = [];
var kc = null;
var lc = null;
var mc = null;
var nc = new Map();
var oc = new Map();
var pc = [];
var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b4, c4, d4, e4) {
  return {blockedOn: a, domEventName: b4, eventSystemFlags: c4 | 16, nativeEvent: e4, targetContainers: [d4]};
}
function sc(a, b4) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b4.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b4.pointerId);
  }
}
function tc(a, b4, c4, d4, e4, f4) {
  if (a === null || a.nativeEvent !== f4)
    return a = rc(b4, c4, d4, e4, f4), b4 !== null && (b4 = Cb(b4), b4 !== null && fc(b4)), a;
  a.eventSystemFlags |= d4;
  b4 = a.targetContainers;
  e4 !== null && b4.indexOf(e4) === -1 && b4.push(e4);
  return a;
}
function uc(a, b4, c4, d4, e4) {
  switch (b4) {
    case "focusin":
      return kc = tc(kc, a, b4, c4, d4, e4), true;
    case "dragenter":
      return lc = tc(lc, a, b4, c4, d4, e4), true;
    case "mouseover":
      return mc = tc(mc, a, b4, c4, d4, e4), true;
    case "pointerover":
      var f4 = e4.pointerId;
      nc.set(f4, tc(nc.get(f4) || null, a, b4, c4, d4, e4));
      return true;
    case "gotpointercapture":
      return f4 = e4.pointerId, oc.set(f4, tc(oc.get(f4) || null, a, b4, c4, d4, e4)), true;
  }
  return false;
}
function vc(a) {
  var b4 = wc(a.target);
  if (b4 !== null) {
    var c4 = Zb(b4);
    if (c4 !== null) {
      if (b4 = c4.tag, b4 === 13) {
        if (b4 = $b(c4), b4 !== null) {
          a.blockedOn = b4;
          hc(a.lanePriority, function() {
            scheduler.unstable_runWithPriority(a.priority, function() {
              gc(c4);
            });
          });
          return;
        }
      } else if (b4 === 3 && c4.stateNode.hydrate) {
        a.blockedOn = c4.tag === 3 ? c4.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b4 = a.targetContainers; 0 < b4.length; ) {
    var c4 = yc(a.domEventName, a.eventSystemFlags, b4[0], a.nativeEvent);
    if (c4 !== null)
      return b4 = Cb(c4), b4 !== null && fc(b4), a.blockedOn = c4, false;
    b4.shift();
  }
  return true;
}
function zc(a, b4, c4) {
  xc(a) && c4.delete(b4);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b4 = a.targetContainers; 0 < b4.length; ) {
      var c4 = yc(a.domEventName, a.eventSystemFlags, b4[0], a.nativeEvent);
      if (c4 !== null) {
        a.blockedOn = c4;
        break;
      }
      b4.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b4) {
  a.blockedOn === b4 && (a.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b4(b5) {
    return Bc(b5, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c4 = 1; c4 < jc.length; c4++) {
      var d4 = jc[c4];
      d4.blockedOn === a && (d4.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b4);
  oc.forEach(b4);
  for (c4 = 0; c4 < pc.length; c4++)
    d4 = pc[c4], d4.blockedOn === a && (d4.blockedOn = null);
  for (; 0 < pc.length && (c4 = pc[0], c4.blockedOn === null); )
    vc(c4), c4.blockedOn === null && pc.shift();
}
function Dc(a, b4) {
  var c4 = {};
  c4[a.toLowerCase()] = b4.toLowerCase();
  c4["Webkit" + a] = "webkit" + b4;
  c4["Moz" + a] = "moz" + b4;
  return c4;
}
var Ec = {animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd")};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b4 = Ec[a], c4;
  for (c4 in b4)
    if (b4.hasOwnProperty(c4) && c4 in Gc)
      return Fc[a] = b4[c4];
  return a;
}
var Ic = Hc("animationend");
var Jc = Hc("animationiteration");
var Kc = Hc("animationstart");
var Lc = Hc("transitionend");
var Mc = new Map();
var Nc = new Map();
var Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b4) {
  for (var c4 = 0; c4 < a.length; c4 += 2) {
    var d4 = a[c4], e4 = a[c4 + 1];
    e4 = "on" + (e4[0].toUpperCase() + e4.slice(1));
    Nc.set(d4, b4);
    Mc.set(d4, e4);
    da(e4, [d4]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F = 15, 1;
  if ((2 & a) !== 0)
    return F = 14, 2;
  if ((4 & a) !== 0)
    return F = 13, 4;
  var b4 = 24 & a;
  if (b4 !== 0)
    return F = 12, b4;
  if ((a & 32) !== 0)
    return F = 11, 32;
  b4 = 192 & a;
  if (b4 !== 0)
    return F = 10, b4;
  if ((a & 256) !== 0)
    return F = 9, 256;
  b4 = 3584 & a;
  if (b4 !== 0)
    return F = 8, b4;
  if ((a & 4096) !== 0)
    return F = 7, 4096;
  b4 = 4186112 & a;
  if (b4 !== 0)
    return F = 6, b4;
  b4 = 62914560 & a;
  if (b4 !== 0)
    return F = 5, b4;
  if (a & 67108864)
    return F = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F = 3, 134217728;
  b4 = 805306368 & a;
  if (b4 !== 0)
    return F = 2, b4;
  if ((1073741824 & a) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b4) {
  var c4 = a.pendingLanes;
  if (c4 === 0)
    return F = 0;
  var d4 = 0, e4 = 0, f4 = a.expiredLanes, g4 = a.suspendedLanes, h4 = a.pingedLanes;
  if (f4 !== 0)
    d4 = f4, e4 = F = 15;
  else if (f4 = c4 & 134217727, f4 !== 0) {
    var k4 = f4 & ~g4;
    k4 !== 0 ? (d4 = Rc(k4), e4 = F) : (h4 &= f4, h4 !== 0 && (d4 = Rc(h4), e4 = F));
  } else
    f4 = c4 & ~g4, f4 !== 0 ? (d4 = Rc(f4), e4 = F) : h4 !== 0 && (d4 = Rc(h4), e4 = F);
  if (d4 === 0)
    return 0;
  d4 = 31 - Vc(d4);
  d4 = c4 & ((0 > d4 ? 0 : 1 << d4) << 1) - 1;
  if (b4 !== 0 && b4 !== d4 && (b4 & g4) === 0) {
    Rc(b4);
    if (e4 <= F)
      return b4;
    F = e4;
  }
  b4 = a.entangledLanes;
  if (b4 !== 0)
    for (a = a.entanglements, b4 &= d4; 0 < b4; )
      c4 = 31 - Vc(b4), e4 = 1 << c4, d4 |= a[c4], b4 &= ~e4;
  return d4;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b4) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b4), a === 0 ? Xc(10, b4) : a;
    case 10:
      return a = Yc(192 & ~b4), a === 0 ? Xc(8, b4) : a;
    case 8:
      return a = Yc(3584 & ~b4), a === 0 && (a = Yc(4186112 & ~b4), a === 0 && (a = 512)), a;
    case 2:
      return b4 = Yc(805306368 & ~b4), b4 === 0 && (b4 = 268435456), b4;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b4 = [], c4 = 0; 31 > c4; c4++)
    b4.push(a);
  return b4;
}
function $c(a, b4, c4) {
  a.pendingLanes |= b4;
  var d4 = b4 - 1;
  a.suspendedLanes &= d4;
  a.pingedLanes &= d4;
  a = a.eventTimes;
  b4 = 31 - Vc(b4);
  a[b4] = c4;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a, b4, c4, d4) {
  Kb || Ib();
  var e4 = hd, f4 = Kb;
  Kb = true;
  try {
    Hb(e4, a, b4, c4, d4);
  } finally {
    (Kb = f4) || Mb();
  }
}
function id(a, b4, c4, d4) {
  ed(dd, hd.bind(null, a, b4, c4, d4));
}
function hd(a, b4, c4, d4) {
  if (fd) {
    var e4;
    if ((e4 = (b4 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b4, c4, d4), jc.push(a);
    else {
      var f4 = yc(a, b4, c4, d4);
      if (f4 === null)
        e4 && sc(a, d4);
      else {
        if (e4) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f4, a, b4, c4, d4);
            jc.push(a);
            return;
          }
          if (uc(f4, a, b4, c4, d4))
            return;
          sc(a, d4);
        }
        jd(a, b4, d4, null, c4);
      }
    }
  }
}
function yc(a, b4, c4, d4) {
  var e4 = xb(d4);
  e4 = wc(e4);
  if (e4 !== null) {
    var f4 = Zb(e4);
    if (f4 === null)
      e4 = null;
    else {
      var g4 = f4.tag;
      if (g4 === 13) {
        e4 = $b(f4);
        if (e4 !== null)
          return e4;
        e4 = null;
      } else if (g4 === 3) {
        if (f4.stateNode.hydrate)
          return f4.tag === 3 ? f4.stateNode.containerInfo : null;
        e4 = null;
      } else
        f4 !== e4 && (e4 = null);
    }
  }
  jd(a, b4, d4, e4, c4);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a, b4 = ld, c4 = b4.length, d4, e4 = "value" in kd ? kd.value : kd.textContent, f4 = e4.length;
  for (a = 0; a < c4 && b4[a] === e4[a]; a++)
    ;
  var g4 = c4 - a;
  for (d4 = 1; d4 <= g4 && b4[c4 - d4] === e4[f4 - d4]; d4++)
    ;
  return md = e4.slice(a, 1 < d4 ? 1 - d4 : void 0);
}
function od(a) {
  var b4 = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b4 === 13 && (a = 13)) : a = b4;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b4(b5, d4, e4, f4, g4) {
    this._reactName = b5;
    this._targetInst = e4;
    this.type = d4;
    this.nativeEvent = f4;
    this.target = g4;
    this.currentTarget = null;
    for (var c4 in a)
      a.hasOwnProperty(c4) && (b5 = a[c4], this[c4] = b5 ? b5(f4) : f4[c4]);
    this.isDefaultPrevented = (f4.defaultPrevented != null ? f4.defaultPrevented : f4.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b4.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b4;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = objectAssign({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
}});
var Jd = rd(Id);
var Kd = objectAssign({}, sd, {data: 0});
var Ld = rd(Kd);
var Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Pd(a) {
  var b4 = this.nativeEvent;
  return b4.getModifierState ? b4.getModifierState(a) : (a = Od[a]) ? !!b4[a] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {key: function(a) {
  if (a.key) {
    var b4 = Md[a.key] || a.key;
    if (b4 !== "Unidentified")
      return b4;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = fa && "CompositionEvent" in window;
var be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be;
var de = fa && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a, b4) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b4.keyCode) !== -1;
    case "keydown":
      return b4.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b4) {
  switch (a) {
    case "compositionend":
      return he(b4);
    case "keypress":
      if (b4.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b4.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b4) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b4) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b4.ctrlKey || b4.altKey || b4.metaKey) || b4.ctrlKey && b4.altKey) {
        if (b4.char && 1 < b4.char.length)
          return b4.char;
        if (b4.which)
          return String.fromCharCode(b4.which);
      }
      return null;
    case "compositionend":
      return de && b4.locale !== "ko" ? null : b4.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a) {
  var b4 = a && a.nodeName && a.nodeName.toLowerCase();
  return b4 === "input" ? !!le[a.type] : b4 === "textarea" ? true : false;
}
function ne(a, b4, c4, d4) {
  Eb(d4);
  b4 = oe(b4, "onChange");
  0 < b4.length && (c4 = new td("onChange", "change", null, c4, d4), a.push({event: c4, listeners: b4}));
}
var pe = null;
var qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b4 = ue(a);
  if (Wa(b4))
    return a;
}
function ve(a, b4) {
  if (a === "change")
    return b4;
}
var we = false;
if (fa) {
  if (fa) {
    ye = "oninput" in document;
    if (!ye) {
      ze2 = document.createElement("div");
      ze2.setAttribute("oninput", "return;");
      ye = typeof ze2.oninput === "function";
    }
    xe2 = ye;
  } else
    xe2 = false;
  we = xe2 && (!document.documentMode || 9 < document.documentMode);
}
var xe2;
var ye;
var ze2;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b4 = [];
    ne(b4, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b4);
    else {
      Kb = true;
      try {
        Gb(a, b4);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b4, c4) {
  a === "focusin" ? (Ae(), pe = b4, qe = c4, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b4) {
  if (a === "click")
    return te(b4);
}
function Fe(a, b4) {
  if (a === "input" || a === "change")
    return te(b4);
}
function Ge(a, b4) {
  return a === b4 && (a !== 0 || 1 / a === 1 / b4) || a !== a && b4 !== b4;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a, b4) {
  if (He(a, b4))
    return true;
  if (typeof a !== "object" || a === null || typeof b4 !== "object" || b4 === null)
    return false;
  var c4 = Object.keys(a), d4 = Object.keys(b4);
  if (c4.length !== d4.length)
    return false;
  for (d4 = 0; d4 < c4.length; d4++)
    if (!Ie.call(b4, c4[d4]) || !He(a[c4[d4]], b4[c4[d4]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b4) {
  var c4 = Ke(a);
  a = 0;
  for (var d4; c4; ) {
    if (c4.nodeType === 3) {
      d4 = a + c4.textContent.length;
      if (a <= b4 && d4 >= b4)
        return {node: c4, offset: b4 - a};
      a = d4;
    }
    a: {
      for (; c4; ) {
        if (c4.nextSibling) {
          c4 = c4.nextSibling;
          break a;
        }
        c4 = c4.parentNode;
      }
      c4 = void 0;
    }
    c4 = Ke(c4);
  }
}
function Me(a, b4) {
  return a && b4 ? a === b4 ? true : a && a.nodeType === 3 ? false : b4 && b4.nodeType === 3 ? Me(a, b4.parentNode) : "contains" in a ? a.contains(b4) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b4) & 16) : false : false;
}
function Ne() {
  for (var a = window, b4 = Xa(); b4 instanceof a.HTMLIFrameElement; ) {
    try {
      var c4 = typeof b4.contentWindow.location.href === "string";
    } catch (d4) {
      c4 = false;
    }
    if (c4)
      a = b4.contentWindow;
    else
      break;
    b4 = Xa(a.document);
  }
  return b4;
}
function Oe(a) {
  var b4 = a && a.nodeName && a.nodeName.toLowerCase();
  return b4 && (b4 === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b4 === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a, b4, c4) {
  var d4 = c4.window === c4 ? c4.document : c4.nodeType === 9 ? c4 : c4.ownerDocument;
  Te || Qe == null || Qe !== Xa(d4) || (d4 = Qe, "selectionStart" in d4 && Oe(d4) ? d4 = {start: d4.selectionStart, end: d4.selectionEnd} : (d4 = (d4.ownerDocument && d4.ownerDocument.defaultView || window).getSelection(), d4 = {anchorNode: d4.anchorNode, anchorOffset: d4.anchorOffset, focusNode: d4.focusNode, focusOffset: d4.focusOffset}), Se && Je(Se, d4) || (Se = d4, d4 = oe(Re, "onSelect"), 0 < d4.length && (b4 = new td("onSelect", "select", null, b4, c4), a.push({event: b4, listeners: d4}), b4.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve2 = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve2.length; We++)
  Nc.set(Ve2[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b4, c4) {
  var d4 = a.type || "unknown-event";
  a.currentTarget = c4;
  Yb(d4, b4, void 0, a);
  a.currentTarget = null;
}
function se(a, b4) {
  b4 = (b4 & 4) !== 0;
  for (var c4 = 0; c4 < a.length; c4++) {
    var d4 = a[c4], e4 = d4.event;
    d4 = d4.listeners;
    a: {
      var f4 = void 0;
      if (b4)
        for (var g4 = d4.length - 1; 0 <= g4; g4--) {
          var h4 = d4[g4], k4 = h4.instance, l4 = h4.currentTarget;
          h4 = h4.listener;
          if (k4 !== f4 && e4.isPropagationStopped())
            break a;
          Ze(e4, h4, l4);
          f4 = k4;
        }
      else
        for (g4 = 0; g4 < d4.length; g4++) {
          h4 = d4[g4];
          k4 = h4.instance;
          l4 = h4.currentTarget;
          h4 = h4.listener;
          if (k4 !== f4 && e4.isPropagationStopped())
            break a;
          Ze(e4, h4, l4);
          f4 = k4;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b4) {
  var c4 = $e(b4), d4 = a + "__bubble";
  c4.has(d4) || (af(b4, a, 2, false), c4.add(d4));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b4) {
    Ye.has(b4) || df(b4, false, a, null);
    df(b4, true, a, null);
  }));
}
function df(a, b4, c4, d4) {
  var e4 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f4 = c4;
  a === "selectionchange" && c4.nodeType !== 9 && (f4 = c4.ownerDocument);
  if (d4 !== null && !b4 && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e4 |= 2;
    f4 = d4;
  }
  var g4 = $e(f4), h4 = a + "__" + (b4 ? "capture" : "bubble");
  g4.has(h4) || (b4 && (e4 |= 4), af(f4, a, e4, b4), g4.add(h4));
}
function af(a, b4, c4, d4) {
  var e4 = Nc.get(b4);
  switch (e4 === void 0 ? 2 : e4) {
    case 0:
      e4 = gd;
      break;
    case 1:
      e4 = id;
      break;
    default:
      e4 = hd;
  }
  c4 = e4.bind(null, b4, c4, a);
  e4 = void 0;
  !Pb || b4 !== "touchstart" && b4 !== "touchmove" && b4 !== "wheel" || (e4 = true);
  d4 ? e4 !== void 0 ? a.addEventListener(b4, c4, {capture: true, passive: e4}) : a.addEventListener(b4, c4, true) : e4 !== void 0 ? a.addEventListener(b4, c4, {passive: e4}) : a.addEventListener(b4, c4, false);
}
function jd(a, b4, c4, d4, e4) {
  var f4 = d4;
  if ((b4 & 1) === 0 && (b4 & 2) === 0 && d4 !== null)
    a:
      for (; ; ) {
        if (d4 === null)
          return;
        var g4 = d4.tag;
        if (g4 === 3 || g4 === 4) {
          var h4 = d4.stateNode.containerInfo;
          if (h4 === e4 || h4.nodeType === 8 && h4.parentNode === e4)
            break;
          if (g4 === 4)
            for (g4 = d4.return; g4 !== null; ) {
              var k4 = g4.tag;
              if (k4 === 3 || k4 === 4) {
                if (k4 = g4.stateNode.containerInfo, k4 === e4 || k4.nodeType === 8 && k4.parentNode === e4)
                  return;
              }
              g4 = g4.return;
            }
          for (; h4 !== null; ) {
            g4 = wc(h4);
            if (g4 === null)
              return;
            k4 = g4.tag;
            if (k4 === 5 || k4 === 6) {
              d4 = f4 = g4;
              continue a;
            }
            h4 = h4.parentNode;
          }
        }
        d4 = d4.return;
      }
  Nb(function() {
    var d5 = f4, e5 = xb(c4), g5 = [];
    a: {
      var h5 = Mc.get(a);
      if (h5 !== void 0) {
        var k5 = td, x3 = a;
        switch (a) {
          case "keypress":
            if (od(c4) === 0)
              break a;
          case "keydown":
          case "keyup":
            k5 = Rd;
            break;
          case "focusin":
            x3 = "focus";
            k5 = Fd;
            break;
          case "focusout":
            x3 = "blur";
            k5 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k5 = Fd;
            break;
          case "click":
            if (c4.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k5 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k5 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k5 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k5 = Hd;
            break;
          case Lc:
            k5 = Xd;
            break;
          case "scroll":
            k5 = vd;
            break;
          case "wheel":
            k5 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k5 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k5 = Td;
        }
        var w5 = (b4 & 4) !== 0, z4 = !w5 && a === "scroll", u2 = w5 ? h5 !== null ? h5 + "Capture" : null : h5;
        w5 = [];
        for (var t3 = d5, q4; t3 !== null; ) {
          q4 = t3;
          var v4 = q4.stateNode;
          q4.tag === 5 && v4 !== null && (q4 = v4, u2 !== null && (v4 = Ob(t3, u2), v4 != null && w5.push(ef(t3, v4, q4))));
          if (z4)
            break;
          t3 = t3.return;
        }
        0 < w5.length && (h5 = new k5(h5, x3, null, c4, e5), g5.push({event: h5, listeners: w5}));
      }
    }
    if ((b4 & 7) === 0) {
      a: {
        h5 = a === "mouseover" || a === "pointerover";
        k5 = a === "mouseout" || a === "pointerout";
        if (h5 && (b4 & 16) === 0 && (x3 = c4.relatedTarget || c4.fromElement) && (wc(x3) || x3[ff]))
          break a;
        if (k5 || h5) {
          h5 = e5.window === e5 ? e5 : (h5 = e5.ownerDocument) ? h5.defaultView || h5.parentWindow : window;
          if (k5) {
            if (x3 = c4.relatedTarget || c4.toElement, k5 = d5, x3 = x3 ? wc(x3) : null, x3 !== null && (z4 = Zb(x3), x3 !== z4 || x3.tag !== 5 && x3.tag !== 6))
              x3 = null;
          } else
            k5 = null, x3 = d5;
          if (k5 !== x3) {
            w5 = Bd;
            v4 = "onMouseLeave";
            u2 = "onMouseEnter";
            t3 = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w5 = Td, v4 = "onPointerLeave", u2 = "onPointerEnter", t3 = "pointer";
            z4 = k5 == null ? h5 : ue(k5);
            q4 = x3 == null ? h5 : ue(x3);
            h5 = new w5(v4, t3 + "leave", k5, c4, e5);
            h5.target = z4;
            h5.relatedTarget = q4;
            v4 = null;
            wc(e5) === d5 && (w5 = new w5(u2, t3 + "enter", x3, c4, e5), w5.target = q4, w5.relatedTarget = z4, v4 = w5);
            z4 = v4;
            if (k5 && x3)
              b: {
                w5 = k5;
                u2 = x3;
                t3 = 0;
                for (q4 = w5; q4; q4 = gf(q4))
                  t3++;
                q4 = 0;
                for (v4 = u2; v4; v4 = gf(v4))
                  q4++;
                for (; 0 < t3 - q4; )
                  w5 = gf(w5), t3--;
                for (; 0 < q4 - t3; )
                  u2 = gf(u2), q4--;
                for (; t3--; ) {
                  if (w5 === u2 || u2 !== null && w5 === u2.alternate)
                    break b;
                  w5 = gf(w5);
                  u2 = gf(u2);
                }
                w5 = null;
              }
            else
              w5 = null;
            k5 !== null && hf(g5, h5, k5, w5, false);
            x3 !== null && z4 !== null && hf(g5, z4, x3, w5, true);
          }
        }
      }
      a: {
        h5 = d5 ? ue(d5) : window;
        k5 = h5.nodeName && h5.nodeName.toLowerCase();
        if (k5 === "select" || k5 === "input" && h5.type === "file")
          var J2 = ve;
        else if (me(h5))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k5 = h5.nodeName) && k5.toLowerCase() === "input" && (h5.type === "checkbox" || h5.type === "radio") && (J2 = Ee);
        if (J2 && (J2 = J2(a, d5))) {
          ne(g5, J2, c4, e5);
          break a;
        }
        K2 && K2(a, h5, d5);
        a === "focusout" && (K2 = h5._wrapperState) && K2.controlled && h5.type === "number" && bb(h5, "number", h5.value);
      }
      K2 = d5 ? ue(d5) : window;
      switch (a) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d5, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g5, c4, e5);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g5, c4, e5);
      }
      var Q2;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a, c4) && (L2 = "onCompositionEnd") : a === "keydown" && c4.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de && c4.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e5, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d5, L2), 0 < K2.length && (L2 = new Ld(L2, a, null, c4, e5), g5.push({event: L2, listeners: K2}), Q2 ? L2.data = Q2 : (Q2 = he(c4), Q2 !== null && (L2.data = Q2))));
      if (Q2 = ce ? je(a, c4) : ke(a, c4))
        d5 = oe(d5, "onBeforeInput"), 0 < d5.length && (e5 = new Ld("onBeforeInput", "beforeinput", null, c4, e5), g5.push({event: e5, listeners: d5}), e5.data = Q2);
    }
    se(g5, b4);
  });
}
function ef(a, b4, c4) {
  return {instance: a, listener: b4, currentTarget: c4};
}
function oe(a, b4) {
  for (var c4 = b4 + "Capture", d4 = []; a !== null; ) {
    var e4 = a, f4 = e4.stateNode;
    e4.tag === 5 && f4 !== null && (e4 = f4, f4 = Ob(a, c4), f4 != null && d4.unshift(ef(a, f4, e4)), f4 = Ob(a, b4), f4 != null && d4.push(ef(a, f4, e4)));
    a = a.return;
  }
  return d4;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b4, c4, d4, e4) {
  for (var f4 = b4._reactName, g4 = []; c4 !== null && c4 !== d4; ) {
    var h4 = c4, k4 = h4.alternate, l4 = h4.stateNode;
    if (k4 !== null && k4 === d4)
      break;
    h4.tag === 5 && l4 !== null && (h4 = l4, e4 ? (k4 = Ob(c4, f4), k4 != null && g4.unshift(ef(c4, k4, h4))) : e4 || (k4 = Ob(c4, f4), k4 != null && g4.push(ef(c4, k4, h4))));
    c4 = c4.return;
  }
  g4.length !== 0 && a.push({event: b4, listeners: g4});
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a, b4) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b4.autoFocus;
  }
  return false;
}
function nf(a, b4) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b4.children === "string" || typeof b4.children === "number" || typeof b4.dangerouslySetInnerHTML === "object" && b4.dangerouslySetInnerHTML !== null && b4.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b4 = a.nodeType;
    if (b4 === 1 || b4 === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b4 = 0; a; ) {
    if (a.nodeType === 8) {
      var c4 = a.data;
      if (c4 === "$" || c4 === "$!" || c4 === "$?") {
        if (b4 === 0)
          return a;
        b4--;
      } else
        c4 === "/$" && b4++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return {$$typeof: Ga, toString: a, valueOf: a};
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a) {
  var b4 = a[wf];
  if (b4)
    return b4;
  for (var c4 = a.parentNode; c4; ) {
    if (b4 = c4[ff] || c4[wf]) {
      c4 = b4.alternate;
      if (b4.child !== null || c4 !== null && c4.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c4 = a[wf])
            return c4;
          a = sf(a);
        }
      return b4;
    }
    a = c4;
    c4 = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b4 = a[yf];
  b4 === void 0 && (b4 = a[yf] = new Set());
  return b4;
}
var zf = [];
var Af = -1;
function Bf(a) {
  return {current: a};
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b4) {
  Af++;
  zf[Af] = a.current;
  a.current = b4;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a, b4) {
  var c4 = a.type.contextTypes;
  if (!c4)
    return Cf;
  var d4 = a.stateNode;
  if (d4 && d4.__reactInternalMemoizedUnmaskedChildContext === b4)
    return d4.__reactInternalMemoizedMaskedChildContext;
  var e4 = {}, f4;
  for (f4 in c4)
    e4[f4] = b4[f4];
  d4 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b4, a.__reactInternalMemoizedMaskedChildContext = e4);
  return e4;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b4, c4) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b4);
  I(N, c4);
}
function If(a, b4, c4) {
  var d4 = a.stateNode;
  a = b4.childContextTypes;
  if (typeof d4.getChildContext !== "function")
    return c4;
  d4 = d4.getChildContext();
  for (var e4 in d4)
    if (!(e4 in a))
      throw Error(y(108, Ra(b4) || "Unknown", e4));
  return objectAssign({}, c4, d4);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b4, c4) {
  var d4 = a.stateNode;
  if (!d4)
    throw Error(y(169));
  c4 ? (a = If(a, b4, Df), d4.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c4);
}
var Lf = null;
var Mf = null;
var Nf = scheduler.unstable_runWithPriority;
var Of = scheduler.unstable_scheduleCallback;
var Pf = scheduler.unstable_cancelCallback;
var Qf = scheduler.unstable_shouldYield;
var Rf = scheduler.unstable_requestPaint;
var Sf = scheduler.unstable_now;
var Tf = scheduler.unstable_getCurrentPriorityLevel;
var Uf = scheduler.unstable_ImmediatePriority;
var Vf = scheduler.unstable_UserBlockingPriority;
var Wf = scheduler.unstable_NormalPriority;
var Xf = scheduler.unstable_LowPriority;
var Yf = scheduler.unstable_IdlePriority;
var Zf = {};
var $f = Rf !== void 0 ? Rf : function() {
};
var ag = null;
var bg = null;
var cg = false;
var dg = Sf();
var O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b4) {
  a = fg(a);
  return Nf(a, b4);
}
function hg(a, b4, c4) {
  a = fg(a);
  return Of(a, b4, c4);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b4 = ag;
      gg(99, function() {
        for (; a < b4.length; a++) {
          var c4 = b4[a];
          do
            c4 = c4(true);
          while (c4 !== null);
        }
      });
      ag = null;
    } catch (c4) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c4;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b4) {
  if (a && a.defaultProps) {
    b4 = objectAssign({}, b4);
    a = a.defaultProps;
    for (var c4 in a)
      b4[c4] === void 0 && (b4[c4] = a[c4]);
    return b4;
  }
  return b4;
}
var mg = Bf(null);
var ng = null;
var og = null;
var pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b4 = mg.current;
  H(mg);
  a.type._context._currentValue = b4;
}
function sg(a, b4) {
  for (; a !== null; ) {
    var c4 = a.alternate;
    if ((a.childLanes & b4) === b4)
      if (c4 === null || (c4.childLanes & b4) === b4)
        break;
      else
        c4.childLanes |= b4;
    else
      a.childLanes |= b4, c4 !== null && (c4.childLanes |= b4);
    a = a.return;
  }
}
function tg(a, b4) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b4) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b4) {
  if (pg !== a && b4 !== false && b4 !== 0) {
    if (typeof b4 !== "number" || b4 === 1073741823)
      pg = a, b4 = 1073741823;
    b4 = {context: a, observedBits: b4, next: null};
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b4;
      ng.dependencies = {lanes: 0, firstContext: b4, responders: null};
    } else
      og = og.next = b4;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = {baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null}, effects: null};
}
function yg(a, b4) {
  a = a.updateQueue;
  b4.updateQueue === a && (b4.updateQueue = {baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects});
}
function zg(a, b4) {
  return {eventTime: a, lane: b4, tag: 0, payload: null, callback: null, next: null};
}
function Ag(a, b4) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c4 = a.pending;
    c4 === null ? b4.next = b4 : (b4.next = c4.next, c4.next = b4);
    a.pending = b4;
  }
}
function Bg(a, b4) {
  var c4 = a.updateQueue, d4 = a.alternate;
  if (d4 !== null && (d4 = d4.updateQueue, c4 === d4)) {
    var e4 = null, f4 = null;
    c4 = c4.firstBaseUpdate;
    if (c4 !== null) {
      do {
        var g4 = {eventTime: c4.eventTime, lane: c4.lane, tag: c4.tag, payload: c4.payload, callback: c4.callback, next: null};
        f4 === null ? e4 = f4 = g4 : f4 = f4.next = g4;
        c4 = c4.next;
      } while (c4 !== null);
      f4 === null ? e4 = f4 = b4 : f4 = f4.next = b4;
    } else
      e4 = f4 = b4;
    c4 = {baseState: d4.baseState, firstBaseUpdate: e4, lastBaseUpdate: f4, shared: d4.shared, effects: d4.effects};
    a.updateQueue = c4;
    return;
  }
  a = c4.lastBaseUpdate;
  a === null ? c4.firstBaseUpdate = b4 : a.next = b4;
  c4.lastBaseUpdate = b4;
}
function Cg(a, b4, c4, d4) {
  var e4 = a.updateQueue;
  wg = false;
  var f4 = e4.firstBaseUpdate, g4 = e4.lastBaseUpdate, h4 = e4.shared.pending;
  if (h4 !== null) {
    e4.shared.pending = null;
    var k4 = h4, l4 = k4.next;
    k4.next = null;
    g4 === null ? f4 = l4 : g4.next = l4;
    g4 = k4;
    var n4 = a.alternate;
    if (n4 !== null) {
      n4 = n4.updateQueue;
      var A4 = n4.lastBaseUpdate;
      A4 !== g4 && (A4 === null ? n4.firstBaseUpdate = l4 : A4.next = l4, n4.lastBaseUpdate = k4);
    }
  }
  if (f4 !== null) {
    A4 = e4.baseState;
    g4 = 0;
    n4 = l4 = k4 = null;
    do {
      h4 = f4.lane;
      var p5 = f4.eventTime;
      if ((d4 & h4) === h4) {
        n4 !== null && (n4 = n4.next = {
          eventTime: p5,
          lane: 0,
          tag: f4.tag,
          payload: f4.payload,
          callback: f4.callback,
          next: null
        });
        a: {
          var C2 = a, x3 = f4;
          h4 = b4;
          p5 = c4;
          switch (x3.tag) {
            case 1:
              C2 = x3.payload;
              if (typeof C2 === "function") {
                A4 = C2.call(p5, A4, h4);
                break a;
              }
              A4 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x3.payload;
              h4 = typeof C2 === "function" ? C2.call(p5, A4, h4) : C2;
              if (h4 === null || h4 === void 0)
                break a;
              A4 = objectAssign({}, A4, h4);
              break a;
            case 2:
              wg = true;
          }
        }
        f4.callback !== null && (a.flags |= 32, h4 = e4.effects, h4 === null ? e4.effects = [f4] : h4.push(f4));
      } else
        p5 = {eventTime: p5, lane: h4, tag: f4.tag, payload: f4.payload, callback: f4.callback, next: null}, n4 === null ? (l4 = n4 = p5, k4 = A4) : n4 = n4.next = p5, g4 |= h4;
      f4 = f4.next;
      if (f4 === null)
        if (h4 = e4.shared.pending, h4 === null)
          break;
        else
          f4 = h4.next, h4.next = null, e4.lastBaseUpdate = h4, e4.shared.pending = null;
    } while (1);
    n4 === null && (k4 = A4);
    e4.baseState = k4;
    e4.firstBaseUpdate = l4;
    e4.lastBaseUpdate = n4;
    Dg |= g4;
    a.lanes = g4;
    a.memoizedState = A4;
  }
}
function Eg(a, b4, c4) {
  a = b4.effects;
  b4.effects = null;
  if (a !== null)
    for (b4 = 0; b4 < a.length; b4++) {
      var d4 = a[b4], e4 = d4.callback;
      if (e4 !== null) {
        d4.callback = null;
        d4 = c4;
        if (typeof e4 !== "function")
          throw Error(y(191, e4));
        e4.call(d4);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a, b4, c4, d4) {
  b4 = a.memoizedState;
  c4 = c4(d4, b4);
  c4 = c4 === null || c4 === void 0 ? b4 : objectAssign({}, b4, c4);
  a.memoizedState = c4;
  a.lanes === 0 && (a.updateQueue.baseState = c4);
}
var Kg = {isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b4, c4) {
  a = a._reactInternals;
  var d4 = Hg(), e4 = Ig(a), f4 = zg(d4, e4);
  f4.payload = b4;
  c4 !== void 0 && c4 !== null && (f4.callback = c4);
  Ag(a, f4);
  Jg(a, e4, d4);
}, enqueueReplaceState: function(a, b4, c4) {
  a = a._reactInternals;
  var d4 = Hg(), e4 = Ig(a), f4 = zg(d4, e4);
  f4.tag = 1;
  f4.payload = b4;
  c4 !== void 0 && c4 !== null && (f4.callback = c4);
  Ag(a, f4);
  Jg(a, e4, d4);
}, enqueueForceUpdate: function(a, b4) {
  a = a._reactInternals;
  var c4 = Hg(), d4 = Ig(a), e4 = zg(c4, d4);
  e4.tag = 2;
  b4 !== void 0 && b4 !== null && (e4.callback = b4);
  Ag(a, e4);
  Jg(a, d4, c4);
}};
function Lg(a, b4, c4, d4, e4, f4, g4) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d4, f4, g4) : b4.prototype && b4.prototype.isPureReactComponent ? !Je(c4, d4) || !Je(e4, f4) : true;
}
function Mg(a, b4, c4) {
  var d4 = false, e4 = Cf;
  var f4 = b4.contextType;
  typeof f4 === "object" && f4 !== null ? f4 = vg(f4) : (e4 = Ff(b4) ? Df : M.current, d4 = b4.contextTypes, f4 = (d4 = d4 !== null && d4 !== void 0) ? Ef(a, e4) : Cf);
  b4 = new b4(c4, f4);
  a.memoizedState = b4.state !== null && b4.state !== void 0 ? b4.state : null;
  b4.updater = Kg;
  a.stateNode = b4;
  b4._reactInternals = a;
  d4 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e4, a.__reactInternalMemoizedMaskedChildContext = f4);
  return b4;
}
function Ng(a, b4, c4, d4) {
  a = b4.state;
  typeof b4.componentWillReceiveProps === "function" && b4.componentWillReceiveProps(c4, d4);
  typeof b4.UNSAFE_componentWillReceiveProps === "function" && b4.UNSAFE_componentWillReceiveProps(c4, d4);
  b4.state !== a && Kg.enqueueReplaceState(b4, b4.state, null);
}
function Og(a, b4, c4, d4) {
  var e4 = a.stateNode;
  e4.props = c4;
  e4.state = a.memoizedState;
  e4.refs = Fg;
  xg(a);
  var f4 = b4.contextType;
  typeof f4 === "object" && f4 !== null ? e4.context = vg(f4) : (f4 = Ff(b4) ? Df : M.current, e4.context = Ef(a, f4));
  Cg(a, c4, e4, d4);
  e4.state = a.memoizedState;
  f4 = b4.getDerivedStateFromProps;
  typeof f4 === "function" && (Gg(a, b4, f4, c4), e4.state = a.memoizedState);
  typeof b4.getDerivedStateFromProps === "function" || typeof e4.getSnapshotBeforeUpdate === "function" || typeof e4.UNSAFE_componentWillMount !== "function" && typeof e4.componentWillMount !== "function" || (b4 = e4.state, typeof e4.componentWillMount === "function" && e4.componentWillMount(), typeof e4.UNSAFE_componentWillMount === "function" && e4.UNSAFE_componentWillMount(), b4 !== e4.state && Kg.enqueueReplaceState(e4, e4.state, null), Cg(a, c4, e4, d4), e4.state = a.memoizedState);
  typeof e4.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b4, c4) {
  a = c4.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c4._owner) {
      c4 = c4._owner;
      if (c4) {
        if (c4.tag !== 1)
          throw Error(y(309));
        var d4 = c4.stateNode;
      }
      if (!d4)
        throw Error(y(147, a));
      var e4 = "" + a;
      if (b4 !== null && b4.ref !== null && typeof b4.ref === "function" && b4.ref._stringRef === e4)
        return b4.ref;
      b4 = function(a2) {
        var b5 = d4.refs;
        b5 === Fg && (b5 = d4.refs = {});
        a2 === null ? delete b5[e4] : b5[e4] = a2;
      };
      b4._stringRef = e4;
      return b4;
    }
    if (typeof a !== "string")
      throw Error(y(284));
    if (!c4._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b4) {
  if (a.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b4) === "[object Object]" ? "object with keys {" + Object.keys(b4).join(", ") + "}" : b4));
}
function Sg(a) {
  function b4(b5, c5) {
    if (a) {
      var d5 = b5.lastEffect;
      d5 !== null ? (d5.nextEffect = c5, b5.lastEffect = c5) : b5.firstEffect = b5.lastEffect = c5;
      c5.nextEffect = null;
      c5.flags = 8;
    }
  }
  function c4(c5, d5) {
    if (!a)
      return null;
    for (; d5 !== null; )
      b4(c5, d5), d5 = d5.sibling;
    return null;
  }
  function d4(a2, b5) {
    for (a2 = new Map(); b5 !== null; )
      b5.key !== null ? a2.set(b5.key, b5) : a2.set(b5.index, b5), b5 = b5.sibling;
    return a2;
  }
  function e4(a2, b5) {
    a2 = Tg(a2, b5);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f4(b5, c5, d5) {
    b5.index = d5;
    if (!a)
      return c5;
    d5 = b5.alternate;
    if (d5 !== null)
      return d5 = d5.index, d5 < c5 ? (b5.flags = 2, c5) : d5;
    b5.flags = 2;
    return c5;
  }
  function g4(b5) {
    a && b5.alternate === null && (b5.flags = 2);
    return b5;
  }
  function h4(a2, b5, c5, d5) {
    if (b5 === null || b5.tag !== 6)
      return b5 = Ug(c5, a2.mode, d5), b5.return = a2, b5;
    b5 = e4(b5, c5);
    b5.return = a2;
    return b5;
  }
  function k4(a2, b5, c5, d5) {
    if (b5 !== null && b5.elementType === c5.type)
      return d5 = e4(b5, c5.props), d5.ref = Qg(a2, b5, c5), d5.return = a2, d5;
    d5 = Vg(c5.type, c5.key, c5.props, null, a2.mode, d5);
    d5.ref = Qg(a2, b5, c5);
    d5.return = a2;
    return d5;
  }
  function l4(a2, b5, c5, d5) {
    if (b5 === null || b5.tag !== 4 || b5.stateNode.containerInfo !== c5.containerInfo || b5.stateNode.implementation !== c5.implementation)
      return b5 = Wg(c5, a2.mode, d5), b5.return = a2, b5;
    b5 = e4(b5, c5.children || []);
    b5.return = a2;
    return b5;
  }
  function n4(a2, b5, c5, d5, f5) {
    if (b5 === null || b5.tag !== 7)
      return b5 = Xg(c5, a2.mode, d5, f5), b5.return = a2, b5;
    b5 = e4(b5, c5);
    b5.return = a2;
    return b5;
  }
  function A4(a2, b5, c5) {
    if (typeof b5 === "string" || typeof b5 === "number")
      return b5 = Ug("" + b5, a2.mode, c5), b5.return = a2, b5;
    if (typeof b5 === "object" && b5 !== null) {
      switch (b5.$$typeof) {
        case sa:
          return c5 = Vg(b5.type, b5.key, b5.props, null, a2.mode, c5), c5.ref = Qg(a2, null, b5), c5.return = a2, c5;
        case ta:
          return b5 = Wg(b5, a2.mode, c5), b5.return = a2, b5;
      }
      if (Pg(b5) || La(b5))
        return b5 = Xg(b5, a2.mode, c5, null), b5.return = a2, b5;
      Rg(a2, b5);
    }
    return null;
  }
  function p5(a2, b5, c5, d5) {
    var e5 = b5 !== null ? b5.key : null;
    if (typeof c5 === "string" || typeof c5 === "number")
      return e5 !== null ? null : h4(a2, b5, "" + c5, d5);
    if (typeof c5 === "object" && c5 !== null) {
      switch (c5.$$typeof) {
        case sa:
          return c5.key === e5 ? c5.type === ua ? n4(a2, b5, c5.props.children, d5, e5) : k4(a2, b5, c5, d5) : null;
        case ta:
          return c5.key === e5 ? l4(a2, b5, c5, d5) : null;
      }
      if (Pg(c5) || La(c5))
        return e5 !== null ? null : n4(a2, b5, c5, d5, null);
      Rg(a2, c5);
    }
    return null;
  }
  function C2(a2, b5, c5, d5, e5) {
    if (typeof d5 === "string" || typeof d5 === "number")
      return a2 = a2.get(c5) || null, h4(b5, a2, "" + d5, e5);
    if (typeof d5 === "object" && d5 !== null) {
      switch (d5.$$typeof) {
        case sa:
          return a2 = a2.get(d5.key === null ? c5 : d5.key) || null, d5.type === ua ? n4(b5, a2, d5.props.children, e5, d5.key) : k4(b5, a2, d5, e5);
        case ta:
          return a2 = a2.get(d5.key === null ? c5 : d5.key) || null, l4(b5, a2, d5, e5);
      }
      if (Pg(d5) || La(d5))
        return a2 = a2.get(c5) || null, n4(b5, a2, d5, e5, null);
      Rg(b5, d5);
    }
    return null;
  }
  function x3(e5, g5, h5, k5) {
    for (var l5 = null, t3 = null, u2 = g5, z4 = g5 = 0, q4 = null; u2 !== null && z4 < h5.length; z4++) {
      u2.index > z4 ? (q4 = u2, u2 = null) : q4 = u2.sibling;
      var n5 = p5(e5, u2, h5[z4], k5);
      if (n5 === null) {
        u2 === null && (u2 = q4);
        break;
      }
      a && u2 && n5.alternate === null && b4(e5, u2);
      g5 = f4(n5, g5, z4);
      t3 === null ? l5 = n5 : t3.sibling = n5;
      t3 = n5;
      u2 = q4;
    }
    if (z4 === h5.length)
      return c4(e5, u2), l5;
    if (u2 === null) {
      for (; z4 < h5.length; z4++)
        u2 = A4(e5, h5[z4], k5), u2 !== null && (g5 = f4(u2, g5, z4), t3 === null ? l5 = u2 : t3.sibling = u2, t3 = u2);
      return l5;
    }
    for (u2 = d4(e5, u2); z4 < h5.length; z4++)
      q4 = C2(u2, e5, z4, h5[z4], k5), q4 !== null && (a && q4.alternate !== null && u2.delete(q4.key === null ? z4 : q4.key), g5 = f4(q4, g5, z4), t3 === null ? l5 = q4 : t3.sibling = q4, t3 = q4);
    a && u2.forEach(function(a2) {
      return b4(e5, a2);
    });
    return l5;
  }
  function w5(e5, g5, h5, k5) {
    var l5 = La(h5);
    if (typeof l5 !== "function")
      throw Error(y(150));
    h5 = l5.call(h5);
    if (h5 == null)
      throw Error(y(151));
    for (var t3 = l5 = null, u2 = g5, z4 = g5 = 0, q4 = null, n5 = h5.next(); u2 !== null && !n5.done; z4++, n5 = h5.next()) {
      u2.index > z4 ? (q4 = u2, u2 = null) : q4 = u2.sibling;
      var w6 = p5(e5, u2, n5.value, k5);
      if (w6 === null) {
        u2 === null && (u2 = q4);
        break;
      }
      a && u2 && w6.alternate === null && b4(e5, u2);
      g5 = f4(w6, g5, z4);
      t3 === null ? l5 = w6 : t3.sibling = w6;
      t3 = w6;
      u2 = q4;
    }
    if (n5.done)
      return c4(e5, u2), l5;
    if (u2 === null) {
      for (; !n5.done; z4++, n5 = h5.next())
        n5 = A4(e5, n5.value, k5), n5 !== null && (g5 = f4(n5, g5, z4), t3 === null ? l5 = n5 : t3.sibling = n5, t3 = n5);
      return l5;
    }
    for (u2 = d4(e5, u2); !n5.done; z4++, n5 = h5.next())
      n5 = C2(u2, e5, z4, n5.value, k5), n5 !== null && (a && n5.alternate !== null && u2.delete(n5.key === null ? z4 : n5.key), g5 = f4(n5, g5, z4), t3 === null ? l5 = n5 : t3.sibling = n5, t3 = n5);
    a && u2.forEach(function(a2) {
      return b4(e5, a2);
    });
    return l5;
  }
  return function(a2, d5, f5, h5) {
    var k5 = typeof f5 === "object" && f5 !== null && f5.type === ua && f5.key === null;
    k5 && (f5 = f5.props.children);
    var l5 = typeof f5 === "object" && f5 !== null;
    if (l5)
      switch (f5.$$typeof) {
        case sa:
          a: {
            l5 = f5.key;
            for (k5 = d5; k5 !== null; ) {
              if (k5.key === l5) {
                switch (k5.tag) {
                  case 7:
                    if (f5.type === ua) {
                      c4(a2, k5.sibling);
                      d5 = e4(k5, f5.props.children);
                      d5.return = a2;
                      a2 = d5;
                      break a;
                    }
                    break;
                  default:
                    if (k5.elementType === f5.type) {
                      c4(a2, k5.sibling);
                      d5 = e4(k5, f5.props);
                      d5.ref = Qg(a2, k5, f5);
                      d5.return = a2;
                      a2 = d5;
                      break a;
                    }
                }
                c4(a2, k5);
                break;
              } else
                b4(a2, k5);
              k5 = k5.sibling;
            }
            f5.type === ua ? (d5 = Xg(f5.props.children, a2.mode, h5, f5.key), d5.return = a2, a2 = d5) : (h5 = Vg(f5.type, f5.key, f5.props, null, a2.mode, h5), h5.ref = Qg(a2, d5, f5), h5.return = a2, a2 = h5);
          }
          return g4(a2);
        case ta:
          a: {
            for (k5 = f5.key; d5 !== null; ) {
              if (d5.key === k5)
                if (d5.tag === 4 && d5.stateNode.containerInfo === f5.containerInfo && d5.stateNode.implementation === f5.implementation) {
                  c4(a2, d5.sibling);
                  d5 = e4(d5, f5.children || []);
                  d5.return = a2;
                  a2 = d5;
                  break a;
                } else {
                  c4(a2, d5);
                  break;
                }
              else
                b4(a2, d5);
              d5 = d5.sibling;
            }
            d5 = Wg(f5, a2.mode, h5);
            d5.return = a2;
            a2 = d5;
          }
          return g4(a2);
      }
    if (typeof f5 === "string" || typeof f5 === "number")
      return f5 = "" + f5, d5 !== null && d5.tag === 6 ? (c4(a2, d5.sibling), d5 = e4(d5, f5), d5.return = a2, a2 = d5) : (c4(a2, d5), d5 = Ug(f5, a2.mode, h5), d5.return = a2, a2 = d5), g4(a2);
    if (Pg(f5))
      return x3(a2, d5, f5, h5);
    if (La(f5))
      return w5(a2, d5, f5, h5);
    l5 && Rg(a2, f5);
    if (typeof f5 === "undefined" && !k5)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c4(a2, d5);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b4) {
  I(ch, b4);
  I(bh, a);
  I(ah, $g);
  a = b4.nodeType;
  switch (a) {
    case 9:
    case 11:
      b4 = (b4 = b4.documentElement) ? b4.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b4.parentNode : b4, b4 = a.namespaceURI || null, a = a.tagName, b4 = mb(b4, a);
  }
  H(ah);
  I(ah, b4);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b4 = dh(ah.current);
  var c4 = mb(b4, a.type);
  b4 !== c4 && (I(bh, a), I(ah, c4));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b4 = a; b4 !== null; ) {
    if (b4.tag === 13) {
      var c4 = b4.memoizedState;
      if (c4 !== null && (c4 = c4.dehydrated, c4 === null || c4.data === "$?" || c4.data === "$!"))
        return b4;
    } else if (b4.tag === 19 && b4.memoizedProps.revealOrder !== void 0) {
      if ((b4.flags & 64) !== 0)
        return b4;
    } else if (b4.child !== null) {
      b4.child.return = b4;
      b4 = b4.child;
      continue;
    }
    if (b4 === a)
      break;
    for (; b4.sibling === null; ) {
      if (b4.return === null || b4.return === a)
        return null;
      b4 = b4.return;
    }
    b4.sibling.return = b4.return;
    b4 = b4.sibling;
  }
  return null;
}
var jh = null;
var kh = null;
var lh = false;
function mh(a, b4) {
  var c4 = nh(5, null, null, 0);
  c4.elementType = "DELETED";
  c4.type = "DELETED";
  c4.stateNode = b4;
  c4.return = a;
  c4.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c4, a.lastEffect = c4) : a.firstEffect = a.lastEffect = c4;
}
function oh(a, b4) {
  switch (a.tag) {
    case 5:
      var c4 = a.type;
      b4 = b4.nodeType !== 1 || c4.toLowerCase() !== b4.nodeName.toLowerCase() ? null : b4;
      return b4 !== null ? (a.stateNode = b4, true) : false;
    case 6:
      return b4 = a.pendingProps === "" || b4.nodeType !== 3 ? null : b4, b4 !== null ? (a.stateNode = b4, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b4 = kh;
    if (b4) {
      var c4 = b4;
      if (!oh(a, b4)) {
        b4 = rf(c4.nextSibling);
        if (!b4 || !oh(a, b4)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c4);
      }
      jh = a;
      kh = rf(b4.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b4 = a.type;
  if (a.tag !== 5 || b4 !== "head" && b4 !== "body" && !nf(b4, a.memoizedProps))
    for (b4 = kh; b4; )
      mh(a, b4), b4 = rf(b4.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b4 = 0; a; ) {
        if (a.nodeType === 8) {
          var c4 = a.data;
          if (c4 === "/$") {
            if (b4 === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b4--;
          } else
            c4 !== "$" && c4 !== "$!" && c4 !== "$?" || b4++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher;
var wh = ra.ReactCurrentBatchConfig;
var xh = 0;
var R = null;
var S = null;
var T = null;
var yh = false;
var zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b4) {
  if (b4 === null)
    return false;
  for (var c4 = 0; c4 < b4.length && c4 < a.length; c4++)
    if (!He(a[c4], b4[c4]))
      return false;
  return true;
}
function Ch(a, b4, c4, d4, e4, f4) {
  xh = f4;
  R = b4;
  b4.memoizedState = null;
  b4.updateQueue = null;
  b4.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c4(d4, e4);
  if (zh) {
    f4 = 0;
    do {
      zh = false;
      if (!(25 > f4))
        throw Error(y(301));
      f4 += 1;
      T = S = null;
      b4.updateQueue = null;
      vh.current = Fh;
      a = c4(d4, e4);
    } while (zh);
  }
  vh.current = Gh;
  b4 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b4)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b4 = T === null ? R.memoizedState : T.next;
  if (b4 !== null)
    T = b4, S = a;
  else {
    if (a === null)
      throw Error(y(310));
    S = a;
    a = {memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null};
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b4) {
  return typeof b4 === "function" ? b4(a) : b4;
}
function Kh(a) {
  var b4 = Ih(), c4 = b4.queue;
  if (c4 === null)
    throw Error(y(311));
  c4.lastRenderedReducer = a;
  var d4 = S, e4 = d4.baseQueue, f4 = c4.pending;
  if (f4 !== null) {
    if (e4 !== null) {
      var g4 = e4.next;
      e4.next = f4.next;
      f4.next = g4;
    }
    d4.baseQueue = e4 = f4;
    c4.pending = null;
  }
  if (e4 !== null) {
    e4 = e4.next;
    d4 = d4.baseState;
    var h4 = g4 = f4 = null, k4 = e4;
    do {
      var l4 = k4.lane;
      if ((xh & l4) === l4)
        h4 !== null && (h4 = h4.next = {lane: 0, action: k4.action, eagerReducer: k4.eagerReducer, eagerState: k4.eagerState, next: null}), d4 = k4.eagerReducer === a ? k4.eagerState : a(d4, k4.action);
      else {
        var n4 = {
          lane: l4,
          action: k4.action,
          eagerReducer: k4.eagerReducer,
          eagerState: k4.eagerState,
          next: null
        };
        h4 === null ? (g4 = h4 = n4, f4 = d4) : h4 = h4.next = n4;
        R.lanes |= l4;
        Dg |= l4;
      }
      k4 = k4.next;
    } while (k4 !== null && k4 !== e4);
    h4 === null ? f4 = d4 : h4.next = g4;
    He(d4, b4.memoizedState) || (ug = true);
    b4.memoizedState = d4;
    b4.baseState = f4;
    b4.baseQueue = h4;
    c4.lastRenderedState = d4;
  }
  return [b4.memoizedState, c4.dispatch];
}
function Lh(a) {
  var b4 = Ih(), c4 = b4.queue;
  if (c4 === null)
    throw Error(y(311));
  c4.lastRenderedReducer = a;
  var d4 = c4.dispatch, e4 = c4.pending, f4 = b4.memoizedState;
  if (e4 !== null) {
    c4.pending = null;
    var g4 = e4 = e4.next;
    do
      f4 = a(f4, g4.action), g4 = g4.next;
    while (g4 !== e4);
    He(f4, b4.memoizedState) || (ug = true);
    b4.memoizedState = f4;
    b4.baseQueue === null && (b4.baseState = f4);
    c4.lastRenderedState = f4;
  }
  return [f4, d4];
}
function Mh(a, b4, c4) {
  var d4 = b4._getVersion;
  d4 = d4(b4._source);
  var e4 = b4._workInProgressVersionPrimary;
  if (e4 !== null)
    a = e4 === d4;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b4._workInProgressVersionPrimary = d4, th.push(b4);
  if (a)
    return c4(b4._source);
  th.push(b4);
  throw Error(y(350));
}
function Nh(a, b4, c4, d4) {
  var e4 = U;
  if (e4 === null)
    throw Error(y(349));
  var f4 = b4._getVersion, g4 = f4(b4._source), h4 = vh.current, k4 = h4.useState(function() {
    return Mh(e4, b4, c4);
  }), l4 = k4[1], n4 = k4[0];
  k4 = T;
  var A4 = a.memoizedState, p5 = A4.refs, C2 = p5.getSnapshot, x3 = A4.source;
  A4 = A4.subscribe;
  var w5 = R;
  a.memoizedState = {refs: p5, source: b4, subscribe: d4};
  h4.useEffect(function() {
    p5.getSnapshot = c4;
    p5.setSnapshot = l4;
    var a2 = f4(b4._source);
    if (!He(g4, a2)) {
      a2 = c4(b4._source);
      He(n4, a2) || (l4(a2), a2 = Ig(w5), e4.mutableReadLanes |= a2 & e4.pendingLanes);
      a2 = e4.mutableReadLanes;
      e4.entangledLanes |= a2;
      for (var d5 = e4.entanglements, h5 = a2; 0 < h5; ) {
        var k5 = 31 - Vc(h5), v4 = 1 << k5;
        d5[k5] |= a2;
        h5 &= ~v4;
      }
    }
  }, [c4, b4, d4]);
  h4.useEffect(function() {
    return d4(b4._source, function() {
      var a2 = p5.getSnapshot, c5 = p5.setSnapshot;
      try {
        c5(a2(b4._source));
        var d5 = Ig(w5);
        e4.mutableReadLanes |= d5 & e4.pendingLanes;
      } catch (q4) {
        c5(function() {
          throw q4;
        });
      }
    });
  }, [b4, d4]);
  He(C2, c4) && He(x3, b4) && He(A4, d4) || (a = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n4}, a.dispatch = l4 = Oh.bind(null, R, a), k4.queue = a, k4.baseQueue = null, n4 = Mh(e4, b4, c4), k4.memoizedState = k4.baseState = n4);
  return n4;
}
function Ph(a, b4, c4) {
  var d4 = Ih();
  return Nh(d4, a, b4, c4);
}
function Qh(a) {
  var b4 = Hh();
  typeof a === "function" && (a = a());
  b4.memoizedState = b4.baseState = a;
  a = b4.queue = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a};
  a = a.dispatch = Oh.bind(null, R, a);
  return [b4.memoizedState, a];
}
function Rh(a, b4, c4, d4) {
  a = {tag: a, create: b4, destroy: c4, deps: d4, next: null};
  b4 = R.updateQueue;
  b4 === null ? (b4 = {lastEffect: null}, R.updateQueue = b4, b4.lastEffect = a.next = a) : (c4 = b4.lastEffect, c4 === null ? b4.lastEffect = a.next = a : (d4 = c4.next, c4.next = a, a.next = d4, b4.lastEffect = a));
  return a;
}
function Sh(a) {
  var b4 = Hh();
  a = {current: a};
  return b4.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b4, c4, d4) {
  var e4 = Hh();
  R.flags |= a;
  e4.memoizedState = Rh(1 | b4, c4, void 0, d4 === void 0 ? null : d4);
}
function Vh(a, b4, c4, d4) {
  var e4 = Ih();
  d4 = d4 === void 0 ? null : d4;
  var f4 = void 0;
  if (S !== null) {
    var g4 = S.memoizedState;
    f4 = g4.destroy;
    if (d4 !== null && Bh(d4, g4.deps)) {
      Rh(b4, c4, f4, d4);
      return;
    }
  }
  R.flags |= a;
  e4.memoizedState = Rh(1 | b4, c4, f4, d4);
}
function Wh(a, b4) {
  return Uh(516, 4, a, b4);
}
function Xh(a, b4) {
  return Vh(516, 4, a, b4);
}
function Yh(a, b4) {
  return Vh(4, 2, a, b4);
}
function Zh(a, b4) {
  if (typeof b4 === "function")
    return a = a(), b4(a), function() {
      b4(null);
    };
  if (b4 !== null && b4 !== void 0)
    return a = a(), b4.current = a, function() {
      b4.current = null;
    };
}
function $h(a, b4, c4) {
  c4 = c4 !== null && c4 !== void 0 ? c4.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b4, a), c4);
}
function ai() {
}
function bi(a, b4) {
  var c4 = Ih();
  b4 = b4 === void 0 ? null : b4;
  var d4 = c4.memoizedState;
  if (d4 !== null && b4 !== null && Bh(b4, d4[1]))
    return d4[0];
  c4.memoizedState = [a, b4];
  return a;
}
function ci(a, b4) {
  var c4 = Ih();
  b4 = b4 === void 0 ? null : b4;
  var d4 = c4.memoizedState;
  if (d4 !== null && b4 !== null && Bh(b4, d4[1]))
    return d4[0];
  a = a();
  c4.memoizedState = [a, b4];
  return a;
}
function di(a, b4) {
  var c4 = eg();
  gg(98 > c4 ? 98 : c4, function() {
    a(true);
  });
  gg(97 < c4 ? 97 : c4, function() {
    var c5 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b4();
    } finally {
      wh.transition = c5;
    }
  });
}
function Oh(a, b4, c4) {
  var d4 = Hg(), e4 = Ig(a), f4 = {lane: e4, action: c4, eagerReducer: null, eagerState: null, next: null}, g4 = b4.pending;
  g4 === null ? f4.next = f4 : (f4.next = g4.next, g4.next = f4);
  b4.pending = f4;
  g4 = a.alternate;
  if (a === R || g4 !== null && g4 === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g4 === null || g4.lanes === 0) && (g4 = b4.lastRenderedReducer, g4 !== null))
      try {
        var h4 = b4.lastRenderedState, k4 = g4(h4, c4);
        f4.eagerReducer = g4;
        f4.eagerState = k4;
        if (He(k4, h4))
          return;
      } catch (l4) {
      } finally {
      }
    Jg(a, e4, d4);
  }
}
var Gh = {readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false};
var Dh = {readContext: vg, useCallback: function(a, b4) {
  Hh().memoizedState = [a, b4 === void 0 ? null : b4];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b4, c4) {
  c4 = c4 !== null && c4 !== void 0 ? c4.concat([a]) : null;
  return Uh(4, 2, Zh.bind(null, b4, a), c4);
}, useLayoutEffect: function(a, b4) {
  return Uh(4, 2, a, b4);
}, useMemo: function(a, b4) {
  var c4 = Hh();
  b4 = b4 === void 0 ? null : b4;
  a = a();
  c4.memoizedState = [a, b4];
  return a;
}, useReducer: function(a, b4, c4) {
  var d4 = Hh();
  b4 = c4 !== void 0 ? c4(b4) : b4;
  d4.memoizedState = d4.baseState = b4;
  a = d4.queue = {pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b4};
  a = a.dispatch = Oh.bind(null, R, a);
  return [d4.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b4 = Qh(a), c4 = b4[0], d4 = b4[1];
  Wh(function() {
    var b5 = wh.transition;
    wh.transition = 1;
    try {
      d4(a);
    } finally {
      wh.transition = b5;
    }
  }, [a]);
  return c4;
}, useTransition: function() {
  var a = Qh(false), b4 = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b4];
}, useMutableSource: function(a, b4, c4) {
  var d4 = Hh();
  d4.memoizedState = {refs: {getSnapshot: b4, setSnapshot: null}, source: a, subscribe: c4};
  return Nh(d4, a, b4, c4);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b4 = uf(function() {
      a || (a = true, c4("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c4 = Qh(b4)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c4("r:" + (tf++).toString(36));
    }, void 0, null));
    return b4;
  }
  b4 = "r:" + (tf++).toString(36);
  Qh(b4);
  return b4;
}, unstable_isNewReconciler: false};
var Eh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b4 = Kh(Jh), c4 = b4[0], d4 = b4[1];
  Xh(function() {
    var b5 = wh.transition;
    wh.transition = 1;
    try {
      d4(a);
    } finally {
      wh.transition = b5;
    }
  }, [a]);
  return c4;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false};
var Fh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b4 = Lh(Jh), c4 = b4[0], d4 = b4[1];
  Xh(function() {
    var b5 = wh.transition;
    wh.transition = 1;
    try {
      d4(a);
    } finally {
      wh.transition = b5;
    }
  }, [a]);
  return c4;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a, b4, c4, d4) {
  b4.child = a === null ? Zg(b4, null, c4, d4) : Yg(b4, a.child, c4, d4);
}
function gi(a, b4, c4, d4, e4) {
  c4 = c4.render;
  var f4 = b4.ref;
  tg(b4, e4);
  d4 = Ch(a, b4, c4, d4, f4, e4);
  if (a !== null && !ug)
    return b4.updateQueue = a.updateQueue, b4.flags &= -517, a.lanes &= ~e4, hi(a, b4, e4);
  b4.flags |= 1;
  fi(a, b4, d4, e4);
  return b4.child;
}
function ii(a, b4, c4, d4, e4, f4) {
  if (a === null) {
    var g4 = c4.type;
    if (typeof g4 === "function" && !ji(g4) && g4.defaultProps === void 0 && c4.compare === null && c4.defaultProps === void 0)
      return b4.tag = 15, b4.type = g4, ki(a, b4, g4, d4, e4, f4);
    a = Vg(c4.type, null, d4, b4, b4.mode, f4);
    a.ref = b4.ref;
    a.return = b4;
    return b4.child = a;
  }
  g4 = a.child;
  if ((e4 & f4) === 0 && (e4 = g4.memoizedProps, c4 = c4.compare, c4 = c4 !== null ? c4 : Je, c4(e4, d4) && a.ref === b4.ref))
    return hi(a, b4, f4);
  b4.flags |= 1;
  a = Tg(g4, d4);
  a.ref = b4.ref;
  a.return = b4;
  return b4.child = a;
}
function ki(a, b4, c4, d4, e4, f4) {
  if (a !== null && Je(a.memoizedProps, d4) && a.ref === b4.ref)
    if (ug = false, (f4 & e4) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b4.lanes = a.lanes, hi(a, b4, f4);
  return li(a, b4, c4, d4, f4);
}
function mi(a, b4, c4) {
  var d4 = b4.pendingProps, e4 = d4.children, f4 = a !== null ? a.memoizedState : null;
  if (d4.mode === "hidden" || d4.mode === "unstable-defer-without-hiding")
    if ((b4.mode & 4) === 0)
      b4.memoizedState = {baseLanes: 0}, ni(b4, c4);
    else if ((c4 & 1073741824) !== 0)
      b4.memoizedState = {baseLanes: 0}, ni(b4, f4 !== null ? f4.baseLanes : c4);
    else
      return a = f4 !== null ? f4.baseLanes | c4 : c4, b4.lanes = b4.childLanes = 1073741824, b4.memoizedState = {baseLanes: a}, ni(b4, a), null;
  else
    f4 !== null ? (d4 = f4.baseLanes | c4, b4.memoizedState = null) : d4 = c4, ni(b4, d4);
  fi(a, b4, e4, c4);
  return b4.child;
}
function oi(a, b4) {
  var c4 = b4.ref;
  if (a === null && c4 !== null || a !== null && a.ref !== c4)
    b4.flags |= 128;
}
function li(a, b4, c4, d4, e4) {
  var f4 = Ff(c4) ? Df : M.current;
  f4 = Ef(b4, f4);
  tg(b4, e4);
  c4 = Ch(a, b4, c4, d4, f4, e4);
  if (a !== null && !ug)
    return b4.updateQueue = a.updateQueue, b4.flags &= -517, a.lanes &= ~e4, hi(a, b4, e4);
  b4.flags |= 1;
  fi(a, b4, c4, e4);
  return b4.child;
}
function pi(a, b4, c4, d4, e4) {
  if (Ff(c4)) {
    var f4 = true;
    Jf(b4);
  } else
    f4 = false;
  tg(b4, e4);
  if (b4.stateNode === null)
    a !== null && (a.alternate = null, b4.alternate = null, b4.flags |= 2), Mg(b4, c4, d4), Og(b4, c4, d4, e4), d4 = true;
  else if (a === null) {
    var g4 = b4.stateNode, h4 = b4.memoizedProps;
    g4.props = h4;
    var k4 = g4.context, l4 = c4.contextType;
    typeof l4 === "object" && l4 !== null ? l4 = vg(l4) : (l4 = Ff(c4) ? Df : M.current, l4 = Ef(b4, l4));
    var n4 = c4.getDerivedStateFromProps, A4 = typeof n4 === "function" || typeof g4.getSnapshotBeforeUpdate === "function";
    A4 || typeof g4.UNSAFE_componentWillReceiveProps !== "function" && typeof g4.componentWillReceiveProps !== "function" || (h4 !== d4 || k4 !== l4) && Ng(b4, g4, d4, l4);
    wg = false;
    var p5 = b4.memoizedState;
    g4.state = p5;
    Cg(b4, d4, g4, e4);
    k4 = b4.memoizedState;
    h4 !== d4 || p5 !== k4 || N.current || wg ? (typeof n4 === "function" && (Gg(b4, c4, n4, d4), k4 = b4.memoizedState), (h4 = wg || Lg(b4, c4, h4, d4, p5, k4, l4)) ? (A4 || typeof g4.UNSAFE_componentWillMount !== "function" && typeof g4.componentWillMount !== "function" || (typeof g4.componentWillMount === "function" && g4.componentWillMount(), typeof g4.UNSAFE_componentWillMount === "function" && g4.UNSAFE_componentWillMount()), typeof g4.componentDidMount === "function" && (b4.flags |= 4)) : (typeof g4.componentDidMount === "function" && (b4.flags |= 4), b4.memoizedProps = d4, b4.memoizedState = k4), g4.props = d4, g4.state = k4, g4.context = l4, d4 = h4) : (typeof g4.componentDidMount === "function" && (b4.flags |= 4), d4 = false);
  } else {
    g4 = b4.stateNode;
    yg(a, b4);
    h4 = b4.memoizedProps;
    l4 = b4.type === b4.elementType ? h4 : lg(b4.type, h4);
    g4.props = l4;
    A4 = b4.pendingProps;
    p5 = g4.context;
    k4 = c4.contextType;
    typeof k4 === "object" && k4 !== null ? k4 = vg(k4) : (k4 = Ff(c4) ? Df : M.current, k4 = Ef(b4, k4));
    var C2 = c4.getDerivedStateFromProps;
    (n4 = typeof C2 === "function" || typeof g4.getSnapshotBeforeUpdate === "function") || typeof g4.UNSAFE_componentWillReceiveProps !== "function" && typeof g4.componentWillReceiveProps !== "function" || (h4 !== A4 || p5 !== k4) && Ng(b4, g4, d4, k4);
    wg = false;
    p5 = b4.memoizedState;
    g4.state = p5;
    Cg(b4, d4, g4, e4);
    var x3 = b4.memoizedState;
    h4 !== A4 || p5 !== x3 || N.current || wg ? (typeof C2 === "function" && (Gg(b4, c4, C2, d4), x3 = b4.memoizedState), (l4 = wg || Lg(b4, c4, l4, d4, p5, x3, k4)) ? (n4 || typeof g4.UNSAFE_componentWillUpdate !== "function" && typeof g4.componentWillUpdate !== "function" || (typeof g4.componentWillUpdate === "function" && g4.componentWillUpdate(d4, x3, k4), typeof g4.UNSAFE_componentWillUpdate === "function" && g4.UNSAFE_componentWillUpdate(d4, x3, k4)), typeof g4.componentDidUpdate === "function" && (b4.flags |= 4), typeof g4.getSnapshotBeforeUpdate === "function" && (b4.flags |= 256)) : (typeof g4.componentDidUpdate !== "function" || h4 === a.memoizedProps && p5 === a.memoizedState || (b4.flags |= 4), typeof g4.getSnapshotBeforeUpdate !== "function" || h4 === a.memoizedProps && p5 === a.memoizedState || (b4.flags |= 256), b4.memoizedProps = d4, b4.memoizedState = x3), g4.props = d4, g4.state = x3, g4.context = k4, d4 = l4) : (typeof g4.componentDidUpdate !== "function" || h4 === a.memoizedProps && p5 === a.memoizedState || (b4.flags |= 4), typeof g4.getSnapshotBeforeUpdate !== "function" || h4 === a.memoizedProps && p5 === a.memoizedState || (b4.flags |= 256), d4 = false);
  }
  return qi(a, b4, c4, d4, f4, e4);
}
function qi(a, b4, c4, d4, e4, f4) {
  oi(a, b4);
  var g4 = (b4.flags & 64) !== 0;
  if (!d4 && !g4)
    return e4 && Kf(b4, c4, false), hi(a, b4, f4);
  d4 = b4.stateNode;
  ei.current = b4;
  var h4 = g4 && typeof c4.getDerivedStateFromError !== "function" ? null : d4.render();
  b4.flags |= 1;
  a !== null && g4 ? (b4.child = Yg(b4, a.child, null, f4), b4.child = Yg(b4, null, h4, f4)) : fi(a, b4, h4, f4);
  b4.memoizedState = d4.state;
  e4 && Kf(b4, c4, true);
  return b4.child;
}
function ri(a) {
  var b4 = a.stateNode;
  b4.pendingContext ? Hf(a, b4.pendingContext, b4.pendingContext !== b4.context) : b4.context && Hf(a, b4.context, false);
  eh(a, b4.containerInfo);
}
var si = {dehydrated: null, retryLane: 0};
function ti(a, b4, c4) {
  var d4 = b4.pendingProps, e4 = P.current, f4 = false, g4;
  (g4 = (b4.flags & 64) !== 0) || (g4 = a !== null && a.memoizedState === null ? false : (e4 & 2) !== 0);
  g4 ? (f4 = true, b4.flags &= -65) : a !== null && a.memoizedState === null || d4.fallback === void 0 || d4.unstable_avoidThisFallback === true || (e4 |= 1);
  I(P, e4 & 1);
  if (a === null) {
    d4.fallback !== void 0 && ph(b4);
    a = d4.children;
    e4 = d4.fallback;
    if (f4)
      return a = ui(b4, a, e4, c4), b4.child.memoizedState = {baseLanes: c4}, b4.memoizedState = si, a;
    if (typeof d4.unstable_expectedLoadTime === "number")
      return a = ui(b4, a, e4, c4), b4.child.memoizedState = {baseLanes: c4}, b4.memoizedState = si, b4.lanes = 33554432, a;
    c4 = vi({mode: "visible", children: a}, b4.mode, c4, null);
    c4.return = b4;
    return b4.child = c4;
  }
  if (a.memoizedState !== null) {
    if (f4)
      return d4 = wi(a, b4, d4.children, d4.fallback, c4), f4 = b4.child, e4 = a.child.memoizedState, f4.memoizedState = e4 === null ? {baseLanes: c4} : {baseLanes: e4.baseLanes | c4}, f4.childLanes = a.childLanes & ~c4, b4.memoizedState = si, d4;
    c4 = xi(a, b4, d4.children, c4);
    b4.memoizedState = null;
    return c4;
  }
  if (f4)
    return d4 = wi(a, b4, d4.children, d4.fallback, c4), f4 = b4.child, e4 = a.child.memoizedState, f4.memoizedState = e4 === null ? {baseLanes: c4} : {baseLanes: e4.baseLanes | c4}, f4.childLanes = a.childLanes & ~c4, b4.memoizedState = si, d4;
  c4 = xi(a, b4, d4.children, c4);
  b4.memoizedState = null;
  return c4;
}
function ui(a, b4, c4, d4) {
  var e4 = a.mode, f4 = a.child;
  b4 = {mode: "hidden", children: b4};
  (e4 & 2) === 0 && f4 !== null ? (f4.childLanes = 0, f4.pendingProps = b4) : f4 = vi(b4, e4, 0, null);
  c4 = Xg(c4, e4, d4, null);
  f4.return = a;
  c4.return = a;
  f4.sibling = c4;
  a.child = f4;
  return c4;
}
function xi(a, b4, c4, d4) {
  var e4 = a.child;
  a = e4.sibling;
  c4 = Tg(e4, {mode: "visible", children: c4});
  (b4.mode & 2) === 0 && (c4.lanes = d4);
  c4.return = b4;
  c4.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b4.firstEffect = b4.lastEffect = a);
  return b4.child = c4;
}
function wi(a, b4, c4, d4, e4) {
  var f4 = b4.mode, g4 = a.child;
  a = g4.sibling;
  var h4 = {mode: "hidden", children: c4};
  (f4 & 2) === 0 && b4.child !== g4 ? (c4 = b4.child, c4.childLanes = 0, c4.pendingProps = h4, g4 = c4.lastEffect, g4 !== null ? (b4.firstEffect = c4.firstEffect, b4.lastEffect = g4, g4.nextEffect = null) : b4.firstEffect = b4.lastEffect = null) : c4 = Tg(g4, h4);
  a !== null ? d4 = Tg(a, d4) : (d4 = Xg(d4, f4, e4, null), d4.flags |= 2);
  d4.return = b4;
  c4.return = b4;
  c4.sibling = d4;
  b4.child = c4;
  return d4;
}
function yi(a, b4) {
  a.lanes |= b4;
  var c4 = a.alternate;
  c4 !== null && (c4.lanes |= b4);
  sg(a.return, b4);
}
function zi(a, b4, c4, d4, e4, f4) {
  var g4 = a.memoizedState;
  g4 === null ? a.memoizedState = {isBackwards: b4, rendering: null, renderingStartTime: 0, last: d4, tail: c4, tailMode: e4, lastEffect: f4} : (g4.isBackwards = b4, g4.rendering = null, g4.renderingStartTime = 0, g4.last = d4, g4.tail = c4, g4.tailMode = e4, g4.lastEffect = f4);
}
function Ai(a, b4, c4) {
  var d4 = b4.pendingProps, e4 = d4.revealOrder, f4 = d4.tail;
  fi(a, b4, d4.children, c4);
  d4 = P.current;
  if ((d4 & 2) !== 0)
    d4 = d4 & 1 | 2, b4.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b4.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c4);
          else if (a.tag === 19)
            yi(a, c4);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b4)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b4)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d4 &= 1;
  }
  I(P, d4);
  if ((b4.mode & 2) === 0)
    b4.memoizedState = null;
  else
    switch (e4) {
      case "forwards":
        c4 = b4.child;
        for (e4 = null; c4 !== null; )
          a = c4.alternate, a !== null && ih(a) === null && (e4 = c4), c4 = c4.sibling;
        c4 = e4;
        c4 === null ? (e4 = b4.child, b4.child = null) : (e4 = c4.sibling, c4.sibling = null);
        zi(b4, false, e4, c4, f4, b4.lastEffect);
        break;
      case "backwards":
        c4 = null;
        e4 = b4.child;
        for (b4.child = null; e4 !== null; ) {
          a = e4.alternate;
          if (a !== null && ih(a) === null) {
            b4.child = e4;
            break;
          }
          a = e4.sibling;
          e4.sibling = c4;
          c4 = e4;
          e4 = a;
        }
        zi(b4, true, c4, null, f4, b4.lastEffect);
        break;
      case "together":
        zi(b4, false, null, null, void 0, b4.lastEffect);
        break;
      default:
        b4.memoizedState = null;
    }
  return b4.child;
}
function hi(a, b4, c4) {
  a !== null && (b4.dependencies = a.dependencies);
  Dg |= b4.lanes;
  if ((c4 & b4.childLanes) !== 0) {
    if (a !== null && b4.child !== a.child)
      throw Error(y(153));
    if (b4.child !== null) {
      a = b4.child;
      c4 = Tg(a, a.pendingProps);
      b4.child = c4;
      for (c4.return = b4; a.sibling !== null; )
        a = a.sibling, c4 = c4.sibling = Tg(a, a.pendingProps), c4.return = b4;
      c4.sibling = null;
    }
    return b4.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a, b4) {
  for (var c4 = b4.child; c4 !== null; ) {
    if (c4.tag === 5 || c4.tag === 6)
      a.appendChild(c4.stateNode);
    else if (c4.tag !== 4 && c4.child !== null) {
      c4.child.return = c4;
      c4 = c4.child;
      continue;
    }
    if (c4 === b4)
      break;
    for (; c4.sibling === null; ) {
      if (c4.return === null || c4.return === b4)
        return;
      c4 = c4.return;
    }
    c4.sibling.return = c4.return;
    c4 = c4.sibling;
  }
};
Ci = function() {
};
Di = function(a, b4, c4, d4) {
  var e4 = a.memoizedProps;
  if (e4 !== d4) {
    a = b4.stateNode;
    dh(ah.current);
    var f4 = null;
    switch (c4) {
      case "input":
        e4 = Ya(a, e4);
        d4 = Ya(a, d4);
        f4 = [];
        break;
      case "option":
        e4 = eb(a, e4);
        d4 = eb(a, d4);
        f4 = [];
        break;
      case "select":
        e4 = objectAssign({}, e4, {value: void 0});
        d4 = objectAssign({}, d4, {value: void 0});
        f4 = [];
        break;
      case "textarea":
        e4 = gb(a, e4);
        d4 = gb(a, d4);
        f4 = [];
        break;
      default:
        typeof e4.onClick !== "function" && typeof d4.onClick === "function" && (a.onclick = jf);
    }
    vb(c4, d4);
    var g4;
    c4 = null;
    for (l4 in e4)
      if (!d4.hasOwnProperty(l4) && e4.hasOwnProperty(l4) && e4[l4] != null)
        if (l4 === "style") {
          var h4 = e4[l4];
          for (g4 in h4)
            h4.hasOwnProperty(g4) && (c4 || (c4 = {}), c4[g4] = "");
        } else
          l4 !== "dangerouslySetInnerHTML" && l4 !== "children" && l4 !== "suppressContentEditableWarning" && l4 !== "suppressHydrationWarning" && l4 !== "autoFocus" && (ca.hasOwnProperty(l4) ? f4 || (f4 = []) : (f4 = f4 || []).push(l4, null));
    for (l4 in d4) {
      var k4 = d4[l4];
      h4 = e4 != null ? e4[l4] : void 0;
      if (d4.hasOwnProperty(l4) && k4 !== h4 && (k4 != null || h4 != null))
        if (l4 === "style")
          if (h4) {
            for (g4 in h4)
              !h4.hasOwnProperty(g4) || k4 && k4.hasOwnProperty(g4) || (c4 || (c4 = {}), c4[g4] = "");
            for (g4 in k4)
              k4.hasOwnProperty(g4) && h4[g4] !== k4[g4] && (c4 || (c4 = {}), c4[g4] = k4[g4]);
          } else
            c4 || (f4 || (f4 = []), f4.push(l4, c4)), c4 = k4;
        else
          l4 === "dangerouslySetInnerHTML" ? (k4 = k4 ? k4.__html : void 0, h4 = h4 ? h4.__html : void 0, k4 != null && h4 !== k4 && (f4 = f4 || []).push(l4, k4)) : l4 === "children" ? typeof k4 !== "string" && typeof k4 !== "number" || (f4 = f4 || []).push(l4, "" + k4) : l4 !== "suppressContentEditableWarning" && l4 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l4) ? (k4 != null && l4 === "onScroll" && G("scroll", a), f4 || h4 === k4 || (f4 = [])) : typeof k4 === "object" && k4 !== null && k4.$$typeof === Ga ? k4.toString() : (f4 = f4 || []).push(l4, k4));
    }
    c4 && (f4 = f4 || []).push("style", c4);
    var l4 = f4;
    if (b4.updateQueue = l4)
      b4.flags |= 4;
  }
};
Ei = function(a, b4, c4, d4) {
  c4 !== d4 && (b4.flags |= 4);
};
function Fi(a, b4) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b4 = a.tail;
        for (var c4 = null; b4 !== null; )
          b4.alternate !== null && (c4 = b4), b4 = b4.sibling;
        c4 === null ? a.tail = null : c4.sibling = null;
        break;
      case "collapsed":
        c4 = a.tail;
        for (var d4 = null; c4 !== null; )
          c4.alternate !== null && (d4 = c4), c4 = c4.sibling;
        d4 === null ? b4 || a.tail === null ? a.tail = null : a.tail.sibling = null : d4.sibling = null;
    }
}
function Gi(a, b4, c4) {
  var d4 = b4.pendingProps;
  switch (b4.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b4.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d4 = b4.stateNode;
      d4.pendingContext && (d4.context = d4.pendingContext, d4.pendingContext = null);
      if (a === null || a.child === null)
        rh(b4) ? b4.flags |= 4 : d4.hydrate || (b4.flags |= 256);
      Ci(b4);
      return null;
    case 5:
      hh(b4);
      var e4 = dh(ch.current);
      c4 = b4.type;
      if (a !== null && b4.stateNode != null)
        Di(a, b4, c4, d4, e4), a.ref !== b4.ref && (b4.flags |= 128);
      else {
        if (!d4) {
          if (b4.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b4)) {
          d4 = b4.stateNode;
          c4 = b4.type;
          var f4 = b4.memoizedProps;
          d4[wf] = b4;
          d4[xf] = f4;
          switch (c4) {
            case "dialog":
              G("cancel", d4);
              G("close", d4);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d4);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d4);
              break;
            case "source":
              G("error", d4);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d4);
              G("load", d4);
              break;
            case "details":
              G("toggle", d4);
              break;
            case "input":
              Za(d4, f4);
              G("invalid", d4);
              break;
            case "select":
              d4._wrapperState = {wasMultiple: !!f4.multiple};
              G("invalid", d4);
              break;
            case "textarea":
              hb(d4, f4), G("invalid", d4);
          }
          vb(c4, f4);
          a = null;
          for (var g4 in f4)
            f4.hasOwnProperty(g4) && (e4 = f4[g4], g4 === "children" ? typeof e4 === "string" ? d4.textContent !== e4 && (a = ["children", e4]) : typeof e4 === "number" && d4.textContent !== "" + e4 && (a = ["children", "" + e4]) : ca.hasOwnProperty(g4) && e4 != null && g4 === "onScroll" && G("scroll", d4));
          switch (c4) {
            case "input":
              Va(d4);
              cb(d4, f4, true);
              break;
            case "textarea":
              Va(d4);
              jb(d4);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f4.onClick === "function" && (d4.onclick = jf);
          }
          d4 = a;
          b4.updateQueue = d4;
          d4 !== null && (b4.flags |= 4);
        } else {
          g4 = e4.nodeType === 9 ? e4 : e4.ownerDocument;
          a === kb.html && (a = lb(c4));
          a === kb.html ? c4 === "script" ? (a = g4.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : typeof d4.is === "string" ? a = g4.createElement(c4, {is: d4.is}) : (a = g4.createElement(c4), c4 === "select" && (g4 = a, d4.multiple ? g4.multiple = true : d4.size && (g4.size = d4.size))) : a = g4.createElementNS(a, c4);
          a[wf] = b4;
          a[xf] = d4;
          Bi(a, b4, false, false);
          b4.stateNode = a;
          g4 = wb(c4, d4);
          switch (c4) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e4 = d4;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e4 = d4;
              break;
            case "video":
            case "audio":
              for (e4 = 0; e4 < Xe.length; e4++)
                G(Xe[e4], a);
              e4 = d4;
              break;
            case "source":
              G("error", a);
              e4 = d4;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e4 = d4;
              break;
            case "details":
              G("toggle", a);
              e4 = d4;
              break;
            case "input":
              Za(a, d4);
              e4 = Ya(a, d4);
              G("invalid", a);
              break;
            case "option":
              e4 = eb(a, d4);
              break;
            case "select":
              a._wrapperState = {wasMultiple: !!d4.multiple};
              e4 = objectAssign({}, d4, {value: void 0});
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d4);
              e4 = gb(a, d4);
              G("invalid", a);
              break;
            default:
              e4 = d4;
          }
          vb(c4, e4);
          var h4 = e4;
          for (f4 in h4)
            if (h4.hasOwnProperty(f4)) {
              var k4 = h4[f4];
              f4 === "style" ? tb(a, k4) : f4 === "dangerouslySetInnerHTML" ? (k4 = k4 ? k4.__html : void 0, k4 != null && ob(a, k4)) : f4 === "children" ? typeof k4 === "string" ? (c4 !== "textarea" || k4 !== "") && pb(a, k4) : typeof k4 === "number" && pb(a, "" + k4) : f4 !== "suppressContentEditableWarning" && f4 !== "suppressHydrationWarning" && f4 !== "autoFocus" && (ca.hasOwnProperty(f4) ? k4 != null && f4 === "onScroll" && G("scroll", a) : k4 != null && qa(a, f4, k4, g4));
            }
          switch (c4) {
            case "input":
              Va(a);
              cb(a, d4, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d4.value != null && a.setAttribute("value", "" + Sa(d4.value));
              break;
            case "select":
              a.multiple = !!d4.multiple;
              f4 = d4.value;
              f4 != null ? fb(a, !!d4.multiple, f4, false) : d4.defaultValue != null && fb(a, !!d4.multiple, d4.defaultValue, true);
              break;
            default:
              typeof e4.onClick === "function" && (a.onclick = jf);
          }
          mf(c4, d4) && (b4.flags |= 4);
        }
        b4.ref !== null && (b4.flags |= 128);
      }
      return null;
    case 6:
      if (a && b4.stateNode != null)
        Ei(a, b4, a.memoizedProps, d4);
      else {
        if (typeof d4 !== "string" && b4.stateNode === null)
          throw Error(y(166));
        c4 = dh(ch.current);
        dh(ah.current);
        rh(b4) ? (d4 = b4.stateNode, c4 = b4.memoizedProps, d4[wf] = b4, d4.nodeValue !== c4 && (b4.flags |= 4)) : (d4 = (c4.nodeType === 9 ? c4 : c4.ownerDocument).createTextNode(d4), d4[wf] = b4, b4.stateNode = d4);
      }
      return null;
    case 13:
      H(P);
      d4 = b4.memoizedState;
      if ((b4.flags & 64) !== 0)
        return b4.lanes = c4, b4;
      d4 = d4 !== null;
      c4 = false;
      a === null ? b4.memoizedProps.fallback !== void 0 && rh(b4) : c4 = a.memoizedState !== null;
      if (d4 && !c4 && (b4.mode & 2) !== 0)
        if (a === null && b4.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d4 || c4)
        b4.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b4), a === null && cf(b4.stateNode.containerInfo), null;
    case 10:
      return rg(b4), null;
    case 17:
      return Ff(b4.type) && Gf(), null;
    case 19:
      H(P);
      d4 = b4.memoizedState;
      if (d4 === null)
        return null;
      f4 = (b4.flags & 64) !== 0;
      g4 = d4.rendering;
      if (g4 === null)
        if (f4)
          Fi(d4, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b4.child; a !== null; ) {
              g4 = ih(a);
              if (g4 !== null) {
                b4.flags |= 64;
                Fi(d4, false);
                f4 = g4.updateQueue;
                f4 !== null && (b4.updateQueue = f4, b4.flags |= 4);
                d4.lastEffect === null && (b4.firstEffect = null);
                b4.lastEffect = d4.lastEffect;
                d4 = c4;
                for (c4 = b4.child; c4 !== null; )
                  f4 = c4, a = d4, f4.flags &= 2, f4.nextEffect = null, f4.firstEffect = null, f4.lastEffect = null, g4 = f4.alternate, g4 === null ? (f4.childLanes = 0, f4.lanes = a, f4.child = null, f4.memoizedProps = null, f4.memoizedState = null, f4.updateQueue = null, f4.dependencies = null, f4.stateNode = null) : (f4.childLanes = g4.childLanes, f4.lanes = g4.lanes, f4.child = g4.child, f4.memoizedProps = g4.memoizedProps, f4.memoizedState = g4.memoizedState, f4.updateQueue = g4.updateQueue, f4.type = g4.type, a = g4.dependencies, f4.dependencies = a === null ? null : {lanes: a.lanes, firstContext: a.firstContext}), c4 = c4.sibling;
                I(P, P.current & 1 | 2);
                return b4.child;
              }
              a = a.sibling;
            }
          d4.tail !== null && O() > Ji && (b4.flags |= 64, f4 = true, Fi(d4, false), b4.lanes = 33554432);
        }
      else {
        if (!f4)
          if (a = ih(g4), a !== null) {
            if (b4.flags |= 64, f4 = true, c4 = a.updateQueue, c4 !== null && (b4.updateQueue = c4, b4.flags |= 4), Fi(d4, true), d4.tail === null && d4.tailMode === "hidden" && !g4.alternate && !lh)
              return b4 = b4.lastEffect = d4.lastEffect, b4 !== null && (b4.nextEffect = null), null;
          } else
            2 * O() - d4.renderingStartTime > Ji && c4 !== 1073741824 && (b4.flags |= 64, f4 = true, Fi(d4, false), b4.lanes = 33554432);
        d4.isBackwards ? (g4.sibling = b4.child, b4.child = g4) : (c4 = d4.last, c4 !== null ? c4.sibling = g4 : b4.child = g4, d4.last = g4);
      }
      return d4.tail !== null ? (c4 = d4.tail, d4.rendering = c4, d4.tail = c4.sibling, d4.lastEffect = b4.lastEffect, d4.renderingStartTime = O(), c4.sibling = null, b4 = P.current, I(P, f4 ? b4 & 1 | 2 : b4 & 1), c4) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b4.memoizedState !== null) && d4.mode !== "unstable-defer-without-hiding" && (b4.flags |= 4), null;
  }
  throw Error(y(156, b4.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b4 = a.flags;
      return b4 & 4096 ? (a.flags = b4 & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b4 = a.flags;
      if ((b4 & 64) !== 0)
        throw Error(y(285));
      a.flags = b4 & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b4 = a.flags, b4 & 4096 ? (a.flags = b4 & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b4) {
  try {
    var c4 = "", d4 = b4;
    do
      c4 += Qa(d4), d4 = d4.return;
    while (d4);
    var e4 = c4;
  } catch (f4) {
    e4 = "\nError generating stack: " + f4.message + "\n" + f4.stack;
  }
  return {value: a, source: b4, stack: e4};
}
function Ni(a, b4) {
  try {
    console.error(b4.value);
  } catch (c4) {
    setTimeout(function() {
      throw c4;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b4, c4) {
  c4 = zg(-1, c4);
  c4.tag = 3;
  c4.payload = {element: null};
  var d4 = b4.value;
  c4.callback = function() {
    Qi || (Qi = true, Ri = d4);
    Ni(a, b4);
  };
  return c4;
}
function Si(a, b4, c4) {
  c4 = zg(-1, c4);
  c4.tag = 3;
  var d4 = a.type.getDerivedStateFromError;
  if (typeof d4 === "function") {
    var e4 = b4.value;
    c4.payload = function() {
      Ni(a, b4);
      return d4(e4);
    };
  }
  var f4 = a.stateNode;
  f4 !== null && typeof f4.componentDidCatch === "function" && (c4.callback = function() {
    typeof d4 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a, b4));
    var c5 = b4.stack;
    this.componentDidCatch(b4.value, {componentStack: c5 !== null ? c5 : ""});
  });
  return c4;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b4 = a.ref;
  if (b4 !== null)
    if (typeof b4 === "function")
      try {
        b4(null);
      } catch (c4) {
        Wi(a, c4);
      }
    else
      b4.current = null;
}
function Xi(a, b4) {
  switch (b4.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b4.flags & 256 && a !== null) {
        var c4 = a.memoizedProps, d4 = a.memoizedState;
        a = b4.stateNode;
        b4 = a.getSnapshotBeforeUpdate(b4.elementType === b4.type ? c4 : lg(b4.type, c4), d4);
        a.__reactInternalSnapshotBeforeUpdate = b4;
      }
      return;
    case 3:
      b4.flags & 256 && qf(b4.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b4, c4) {
  switch (c4.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b4 = c4.updateQueue;
      b4 = b4 !== null ? b4.lastEffect : null;
      if (b4 !== null) {
        a = b4 = b4.next;
        do {
          if ((a.tag & 3) === 3) {
            var d4 = a.create;
            a.destroy = d4();
          }
          a = a.next;
        } while (a !== b4);
      }
      b4 = c4.updateQueue;
      b4 = b4 !== null ? b4.lastEffect : null;
      if (b4 !== null) {
        a = b4 = b4.next;
        do {
          var e4 = a;
          d4 = e4.next;
          e4 = e4.tag;
          (e4 & 4) !== 0 && (e4 & 1) !== 0 && (Zi(c4, a), $i(c4, a));
          a = d4;
        } while (a !== b4);
      }
      return;
    case 1:
      a = c4.stateNode;
      c4.flags & 4 && (b4 === null ? a.componentDidMount() : (d4 = c4.elementType === c4.type ? b4.memoizedProps : lg(c4.type, b4.memoizedProps), a.componentDidUpdate(d4, b4.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b4 = c4.updateQueue;
      b4 !== null && Eg(c4, b4, a);
      return;
    case 3:
      b4 = c4.updateQueue;
      if (b4 !== null) {
        a = null;
        if (c4.child !== null)
          switch (c4.child.tag) {
            case 5:
              a = c4.child.stateNode;
              break;
            case 1:
              a = c4.child.stateNode;
          }
        Eg(c4, b4, a);
      }
      return;
    case 5:
      a = c4.stateNode;
      b4 === null && c4.flags & 4 && mf(c4.type, c4.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c4.memoizedState === null && (c4 = c4.alternate, c4 !== null && (c4 = c4.memoizedState, c4 !== null && (c4 = c4.dehydrated, c4 !== null && Cc(c4))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b4) {
  for (var c4 = a; ; ) {
    if (c4.tag === 5) {
      var d4 = c4.stateNode;
      if (b4)
        d4 = d4.style, typeof d4.setProperty === "function" ? d4.setProperty("display", "none", "important") : d4.display = "none";
      else {
        d4 = c4.stateNode;
        var e4 = c4.memoizedProps.style;
        e4 = e4 !== void 0 && e4 !== null && e4.hasOwnProperty("display") ? e4.display : null;
        d4.style.display = sb("display", e4);
      }
    } else if (c4.tag === 6)
      c4.stateNode.nodeValue = b4 ? "" : c4.memoizedProps;
    else if ((c4.tag !== 23 && c4.tag !== 24 || c4.memoizedState === null || c4 === a) && c4.child !== null) {
      c4.child.return = c4;
      c4 = c4.child;
      continue;
    }
    if (c4 === a)
      break;
    for (; c4.sibling === null; ) {
      if (c4.return === null || c4.return === a)
        return;
      c4 = c4.return;
    }
    c4.sibling.return = c4.return;
    c4 = c4.sibling;
  }
}
function bj(a, b4) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b4);
    } catch (f4) {
    }
  switch (b4.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b4.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c4 = a = a.next;
        do {
          var d4 = c4, e4 = d4.destroy;
          d4 = d4.tag;
          if (e4 !== void 0)
            if ((d4 & 4) !== 0)
              Zi(b4, c4);
            else {
              d4 = b4;
              try {
                e4();
              } catch (f4) {
                Wi(d4, f4);
              }
            }
          c4 = c4.next;
        } while (c4 !== a);
      }
      break;
    case 1:
      Vi(b4);
      a = b4.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b4.memoizedProps, a.state = b4.memoizedState, a.componentWillUnmount();
        } catch (f4) {
          Wi(b4, f4);
        }
      break;
    case 5:
      Vi(b4);
      break;
    case 4:
      cj(a, b4);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b4 = a.return; b4 !== null; ) {
      if (ej(b4))
        break a;
      b4 = b4.return;
    }
    throw Error(y(160));
  }
  var c4 = b4;
  b4 = c4.stateNode;
  switch (c4.tag) {
    case 5:
      var d4 = false;
      break;
    case 3:
      b4 = b4.containerInfo;
      d4 = true;
      break;
    case 4:
      b4 = b4.containerInfo;
      d4 = true;
      break;
    default:
      throw Error(y(161));
  }
  c4.flags & 16 && (pb(b4, ""), c4.flags &= -17);
  a:
    b:
      for (c4 = a; ; ) {
        for (; c4.sibling === null; ) {
          if (c4.return === null || ej(c4.return)) {
            c4 = null;
            break a;
          }
          c4 = c4.return;
        }
        c4.sibling.return = c4.return;
        for (c4 = c4.sibling; c4.tag !== 5 && c4.tag !== 6 && c4.tag !== 18; ) {
          if (c4.flags & 2)
            continue b;
          if (c4.child === null || c4.tag === 4)
            continue b;
          else
            c4.child.return = c4, c4 = c4.child;
        }
        if (!(c4.flags & 2)) {
          c4 = c4.stateNode;
          break a;
        }
      }
  d4 ? gj(a, c4, b4) : hj(a, c4, b4);
}
function gj(a, b4, c4) {
  var d4 = a.tag, e4 = d4 === 5 || d4 === 6;
  if (e4)
    a = e4 ? a.stateNode : a.stateNode.instance, b4 ? c4.nodeType === 8 ? c4.parentNode.insertBefore(a, b4) : c4.insertBefore(a, b4) : (c4.nodeType === 8 ? (b4 = c4.parentNode, b4.insertBefore(a, c4)) : (b4 = c4, b4.appendChild(a)), c4 = c4._reactRootContainer, c4 !== null && c4 !== void 0 || b4.onclick !== null || (b4.onclick = jf));
  else if (d4 !== 4 && (a = a.child, a !== null))
    for (gj(a, b4, c4), a = a.sibling; a !== null; )
      gj(a, b4, c4), a = a.sibling;
}
function hj(a, b4, c4) {
  var d4 = a.tag, e4 = d4 === 5 || d4 === 6;
  if (e4)
    a = e4 ? a.stateNode : a.stateNode.instance, b4 ? c4.insertBefore(a, b4) : c4.appendChild(a);
  else if (d4 !== 4 && (a = a.child, a !== null))
    for (hj(a, b4, c4), a = a.sibling; a !== null; )
      hj(a, b4, c4), a = a.sibling;
}
function cj(a, b4) {
  for (var c4 = b4, d4 = false, e4, f4; ; ) {
    if (!d4) {
      d4 = c4.return;
      a:
        for (; ; ) {
          if (d4 === null)
            throw Error(y(160));
          e4 = d4.stateNode;
          switch (d4.tag) {
            case 5:
              f4 = false;
              break a;
            case 3:
              e4 = e4.containerInfo;
              f4 = true;
              break a;
            case 4:
              e4 = e4.containerInfo;
              f4 = true;
              break a;
          }
          d4 = d4.return;
        }
      d4 = true;
    }
    if (c4.tag === 5 || c4.tag === 6) {
      a:
        for (var g4 = a, h4 = c4, k4 = h4; ; )
          if (bj(g4, k4), k4.child !== null && k4.tag !== 4)
            k4.child.return = k4, k4 = k4.child;
          else {
            if (k4 === h4)
              break a;
            for (; k4.sibling === null; ) {
              if (k4.return === null || k4.return === h4)
                break a;
              k4 = k4.return;
            }
            k4.sibling.return = k4.return;
            k4 = k4.sibling;
          }
      f4 ? (g4 = e4, h4 = c4.stateNode, g4.nodeType === 8 ? g4.parentNode.removeChild(h4) : g4.removeChild(h4)) : e4.removeChild(c4.stateNode);
    } else if (c4.tag === 4) {
      if (c4.child !== null) {
        e4 = c4.stateNode.containerInfo;
        f4 = true;
        c4.child.return = c4;
        c4 = c4.child;
        continue;
      }
    } else if (bj(a, c4), c4.child !== null) {
      c4.child.return = c4;
      c4 = c4.child;
      continue;
    }
    if (c4 === b4)
      break;
    for (; c4.sibling === null; ) {
      if (c4.return === null || c4.return === b4)
        return;
      c4 = c4.return;
      c4.tag === 4 && (d4 = false);
    }
    c4.sibling.return = c4.return;
    c4 = c4.sibling;
  }
}
function ij(a, b4) {
  switch (b4.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c4 = b4.updateQueue;
      c4 = c4 !== null ? c4.lastEffect : null;
      if (c4 !== null) {
        var d4 = c4 = c4.next;
        do
          (d4.tag & 3) === 3 && (a = d4.destroy, d4.destroy = void 0, a !== void 0 && a()), d4 = d4.next;
        while (d4 !== c4);
      }
      return;
    case 1:
      return;
    case 5:
      c4 = b4.stateNode;
      if (c4 != null) {
        d4 = b4.memoizedProps;
        var e4 = a !== null ? a.memoizedProps : d4;
        a = b4.type;
        var f4 = b4.updateQueue;
        b4.updateQueue = null;
        if (f4 !== null) {
          c4[xf] = d4;
          a === "input" && d4.type === "radio" && d4.name != null && $a(c4, d4);
          wb(a, e4);
          b4 = wb(a, d4);
          for (e4 = 0; e4 < f4.length; e4 += 2) {
            var g4 = f4[e4], h4 = f4[e4 + 1];
            g4 === "style" ? tb(c4, h4) : g4 === "dangerouslySetInnerHTML" ? ob(c4, h4) : g4 === "children" ? pb(c4, h4) : qa(c4, g4, h4, b4);
          }
          switch (a) {
            case "input":
              ab(c4, d4);
              break;
            case "textarea":
              ib(c4, d4);
              break;
            case "select":
              a = c4._wrapperState.wasMultiple, c4._wrapperState.wasMultiple = !!d4.multiple, f4 = d4.value, f4 != null ? fb(c4, !!d4.multiple, f4, false) : a !== !!d4.multiple && (d4.defaultValue != null ? fb(c4, !!d4.multiple, d4.defaultValue, true) : fb(c4, !!d4.multiple, d4.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b4.stateNode === null)
        throw Error(y(162));
      b4.stateNode.nodeValue = b4.memoizedProps;
      return;
    case 3:
      c4 = b4.stateNode;
      c4.hydrate && (c4.hydrate = false, Cc(c4.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b4.memoizedState !== null && (jj = O(), aj(b4.child, true));
      kj(b4);
      return;
    case 19:
      kj(b4);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b4, b4.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b4 = a.updateQueue;
  if (b4 !== null) {
    a.updateQueue = null;
    var c4 = a.stateNode;
    c4 === null && (c4 = a.stateNode = new Ui());
    b4.forEach(function(b5) {
      var d4 = lj.bind(null, a, b5);
      c4.has(b5) || (c4.add(b5), b5.then(d4, d4));
    });
  }
}
function mj(a, b4) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b4 = b4.memoizedState, b4 !== null && b4.dehydrated === null) : false;
}
var nj = Math.ceil;
var oj = ra.ReactCurrentDispatcher;
var pj = ra.ReactCurrentOwner;
var X = 0;
var U = null;
var Y = null;
var W = 0;
var qj = 0;
var rj = Bf(0);
var V = 0;
var sj = null;
var tj = 0;
var Dg = 0;
var Hi = 0;
var uj = 0;
var vj = null;
var jj = 0;
var Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null;
var Qi = false;
var Ri = null;
var Ti = null;
var xj = false;
var yj = null;
var zj = 90;
var Aj = [];
var Bj = [];
var Cj = null;
var Dj = 0;
var Ej = null;
var Fj = -1;
var Gj = 0;
var Hj = 0;
var Ij = null;
var Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b4 = 4186112 & ~Hj;
    b4 &= -b4;
    b4 === 0 && (a = 4186112 & ~a, b4 = a & -a, b4 === 0 && (b4 = 8192));
    return b4;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b4, c4) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b4);
  if (a === null)
    return null;
  $c(a, b4, c4);
  a === U && (Hi |= b4, V === 4 && Ii(a, W));
  var d4 = eg();
  b4 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c4), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d4 !== 98 && d4 !== 99 || (Cj === null ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c4));
  vj = a;
}
function Kj(a, b4) {
  a.lanes |= b4;
  var c4 = a.alternate;
  c4 !== null && (c4.lanes |= b4);
  c4 = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b4, c4 = a.alternate, c4 !== null && (c4.childLanes |= b4), c4 = a, a = a.return;
  return c4.tag === 3 ? c4.stateNode : null;
}
function Mj(a, b4) {
  for (var c4 = a.callbackNode, d4 = a.suspendedLanes, e4 = a.pingedLanes, f4 = a.expirationTimes, g4 = a.pendingLanes; 0 < g4; ) {
    var h4 = 31 - Vc(g4), k4 = 1 << h4, l4 = f4[h4];
    if (l4 === -1) {
      if ((k4 & d4) === 0 || (k4 & e4) !== 0) {
        l4 = b4;
        Rc(k4);
        var n4 = F;
        f4[h4] = 10 <= n4 ? l4 + 250 : 6 <= n4 ? l4 + 5e3 : -1;
      }
    } else
      l4 <= b4 && (a.expiredLanes |= k4);
    g4 &= ~k4;
  }
  d4 = Uc(a, a === U ? W : 0);
  b4 = F;
  if (d4 === 0)
    c4 !== null && (c4 !== Zf && Pf(c4), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c4 !== null) {
      if (a.callbackPriority === b4)
        return;
      c4 !== Zf && Pf(c4);
    }
    b4 === 15 ? (c4 = Lj.bind(null, a), ag === null ? (ag = [c4], bg = Of(Uf, jg)) : ag.push(c4), c4 = Zf) : b4 === 14 ? c4 = hg(99, Lj.bind(null, a)) : (c4 = Tc(b4), c4 = hg(c4, Nj.bind(null, a)));
    a.callbackPriority = b4;
    a.callbackNode = c4;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b4 = a.callbackNode;
  if (Oj() && a.callbackNode !== b4)
    return null;
  var c4 = Uc(a, a === U ? W : 0);
  if (c4 === 0)
    return null;
  var d4 = c4;
  var e4 = X;
  X |= 16;
  var f4 = Pj();
  if (U !== a || W !== d4)
    wj(), Qj(a, d4);
  do
    try {
      Rj();
      break;
    } catch (h4) {
      Sj(a, h4);
    }
  while (1);
  qg();
  oj.current = f4;
  X = e4;
  Y !== null ? d4 = 0 : (U = null, W = 0, d4 = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d4 !== 0) {
    d4 === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c4 = Wc(a), c4 !== 0 && (d4 = Tj(a, c4)));
    if (d4 === 1)
      throw b4 = sj, Qj(a, 0), Ii(a, c4), Mj(a, O()), b4;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c4;
    switch (d4) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c4);
        if ((c4 & 62914560) === c4 && (d4 = jj + 500 - O(), 10 < d4)) {
          if (Uc(a, 0) !== 0)
            break;
          e4 = a.suspendedLanes;
          if ((e4 & c4) !== c4) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e4;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d4);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c4);
        if ((c4 & 4186112) === c4)
          break;
        d4 = a.eventTimes;
        for (e4 = -1; 0 < c4; ) {
          var g4 = 31 - Vc(c4);
          f4 = 1 << g4;
          g4 = d4[g4];
          g4 > e4 && (e4 = g4);
          c4 &= ~f4;
        }
        c4 = e4;
        c4 = O() - c4;
        c4 = (120 > c4 ? 120 : 480 > c4 ? 480 : 1080 > c4 ? 1080 : 1920 > c4 ? 1920 : 3e3 > c4 ? 3e3 : 4320 > c4 ? 4320 : 1960 * nj(c4 / 1960)) - c4;
        if (10 < c4) {
          a.timeoutHandle = of(Uj.bind(null, a), c4);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b4 ? Nj.bind(null, a) : null;
}
function Ii(a, b4) {
  b4 &= ~uj;
  b4 &= ~Hi;
  a.suspendedLanes |= b4;
  a.pingedLanes &= ~b4;
  for (a = a.expirationTimes; 0 < b4; ) {
    var c4 = 31 - Vc(b4), d4 = 1 << c4;
    a[c4] = -1;
    b4 &= ~d4;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b4 = W;
    var c4 = Tj(a, b4);
    (tj & Hi) !== 0 && (b4 = Uc(a, b4), c4 = Tj(a, b4));
  } else
    b4 = Uc(a, 0), c4 = Tj(a, b4);
  a.tag !== 0 && c4 === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b4 = Wc(a), b4 !== 0 && (c4 = Tj(a, b4)));
  if (c4 === 1)
    throw c4 = sj, Qj(a, 0), Ii(a, b4), Mj(a, O()), c4;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b4;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b4) {
  var c4 = X;
  X |= 1;
  try {
    return a(b4);
  } finally {
    X = c4, X === 0 && (wj(), ig());
  }
}
function Xj(a, b4) {
  var c4 = X;
  X &= -2;
  X |= 8;
  try {
    return a(b4);
  } finally {
    X = c4, X === 0 && (wj(), ig());
  }
}
function ni(a, b4) {
  I(rj, qj);
  qj |= b4;
  tj |= b4;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b4) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c4 = a.timeoutHandle;
  c4 !== -1 && (a.timeoutHandle = -1, pf(c4));
  if (Y !== null)
    for (c4 = Y.return; c4 !== null; ) {
      var d4 = c4;
      switch (d4.tag) {
        case 1:
          d4 = d4.type.childContextTypes;
          d4 !== null && d4 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d4);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d4);
          break;
        case 23:
        case 24:
          Ki();
      }
      c4 = c4.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b4;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b4) {
  do {
    var c4 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d4 = R.memoizedState; d4 !== null; ) {
          var e4 = d4.queue;
          e4 !== null && (e4.pending = null);
          d4 = d4.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c4 === null || c4.return === null) {
        V = 1;
        sj = b4;
        Y = null;
        break;
      }
      a: {
        var f4 = a, g4 = c4.return, h4 = c4, k4 = b4;
        b4 = W;
        h4.flags |= 2048;
        h4.firstEffect = h4.lastEffect = null;
        if (k4 !== null && typeof k4 === "object" && typeof k4.then === "function") {
          var l4 = k4;
          if ((h4.mode & 2) === 0) {
            var n4 = h4.alternate;
            n4 ? (h4.updateQueue = n4.updateQueue, h4.memoizedState = n4.memoizedState, h4.lanes = n4.lanes) : (h4.updateQueue = null, h4.memoizedState = null);
          }
          var A4 = (P.current & 1) !== 0, p5 = g4;
          do {
            var C2;
            if (C2 = p5.tag === 13) {
              var x3 = p5.memoizedState;
              if (x3 !== null)
                C2 = x3.dehydrated !== null ? true : false;
              else {
                var w5 = p5.memoizedProps;
                C2 = w5.fallback === void 0 ? false : w5.unstable_avoidThisFallback !== true ? true : A4 ? false : true;
              }
            }
            if (C2) {
              var z4 = p5.updateQueue;
              if (z4 === null) {
                var u2 = new Set();
                u2.add(l4);
                p5.updateQueue = u2;
              } else
                z4.add(l4);
              if ((p5.mode & 2) === 0) {
                p5.flags |= 64;
                h4.flags |= 16384;
                h4.flags &= -2981;
                if (h4.tag === 1)
                  if (h4.alternate === null)
                    h4.tag = 17;
                  else {
                    var t3 = zg(-1, 1);
                    t3.tag = 2;
                    Ag(h4, t3);
                  }
                h4.lanes |= 1;
                break a;
              }
              k4 = void 0;
              h4 = b4;
              var q4 = f4.pingCache;
              q4 === null ? (q4 = f4.pingCache = new Oi(), k4 = new Set(), q4.set(l4, k4)) : (k4 = q4.get(l4), k4 === void 0 && (k4 = new Set(), q4.set(l4, k4)));
              if (!k4.has(h4)) {
                k4.add(h4);
                var v4 = Yj.bind(null, f4, l4, h4);
                l4.then(v4, v4);
              }
              p5.flags |= 4096;
              p5.lanes = b4;
              break a;
            }
            p5 = p5.return;
          } while (p5 !== null);
          k4 = Error((Ra(h4.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k4 = Mi(k4, h4);
        p5 = g4;
        do {
          switch (p5.tag) {
            case 3:
              f4 = k4;
              p5.flags |= 4096;
              b4 &= -b4;
              p5.lanes |= b4;
              var J2 = Pi(p5, f4, b4);
              Bg(p5, J2);
              break a;
            case 1:
              f4 = k4;
              var K2 = p5.type, Q2 = p5.stateNode;
              if ((p5.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                p5.flags |= 4096;
                b4 &= -b4;
                p5.lanes |= b4;
                var L2 = Si(p5, f4, b4);
                Bg(p5, L2);
                break a;
              }
          }
          p5 = p5.return;
        } while (p5 !== null);
      }
      Zj(c4);
    } catch (va) {
      b4 = va;
      Y === c4 && c4 !== null && (Y = c4 = c4.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b4) {
  var c4 = X;
  X |= 16;
  var d4 = Pj();
  U === a && W === b4 || Qj(a, b4);
  do
    try {
      ak();
      break;
    } catch (e4) {
      Sj(a, e4);
    }
  while (1);
  qg();
  X = c4;
  oj.current = d4;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b4 = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b4 === null ? Zj(a) : Y = b4;
  pj.current = null;
}
function Zj(a) {
  var b4 = a;
  do {
    var c4 = b4.alternate;
    a = b4.return;
    if ((b4.flags & 2048) === 0) {
      c4 = Gi(c4, b4, qj);
      if (c4 !== null) {
        Y = c4;
        return;
      }
      c4 = b4;
      if (c4.tag !== 24 && c4.tag !== 23 || c4.memoizedState === null || (qj & 1073741824) !== 0 || (c4.mode & 4) === 0) {
        for (var d4 = 0, e4 = c4.child; e4 !== null; )
          d4 |= e4.lanes | e4.childLanes, e4 = e4.sibling;
        c4.childLanes = d4;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b4.firstEffect), b4.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b4.firstEffect), a.lastEffect = b4.lastEffect), 1 < b4.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b4 : a.firstEffect = b4, a.lastEffect = b4));
    } else {
      c4 = Li(b4);
      if (c4 !== null) {
        c4.flags &= 2047;
        Y = c4;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b4 = b4.sibling;
    if (b4 !== null) {
      Y = b4;
      return;
    }
    Y = b4 = a;
  } while (b4 !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b4 = eg();
  gg(99, dk.bind(null, a, b4));
  return null;
}
function dk(a, b4) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c4 = a.finishedWork;
  if (c4 === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c4 === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d4 = c4.lanes | c4.childLanes, e4 = d4, f4 = a.pendingLanes & ~e4;
  a.pendingLanes = e4;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e4;
  a.mutableReadLanes &= e4;
  a.entangledLanes &= e4;
  e4 = a.entanglements;
  for (var g4 = a.eventTimes, h4 = a.expirationTimes; 0 < f4; ) {
    var k4 = 31 - Vc(f4), l4 = 1 << k4;
    e4[k4] = 0;
    g4[k4] = -1;
    h4[k4] = -1;
    f4 &= ~l4;
  }
  Cj !== null && (d4 & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c4.flags ? c4.lastEffect !== null ? (c4.lastEffect.nextEffect = c4, d4 = c4.firstEffect) : d4 = c4 : d4 = c4.firstEffect;
  if (d4 !== null) {
    e4 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g4 = Ne();
    if (Oe(g4)) {
      if ("selectionStart" in g4)
        h4 = {start: g4.selectionStart, end: g4.selectionEnd};
      else
        a:
          if (h4 = (h4 = g4.ownerDocument) && h4.defaultView || window, (l4 = h4.getSelection && h4.getSelection()) && l4.rangeCount !== 0) {
            h4 = l4.anchorNode;
            f4 = l4.anchorOffset;
            k4 = l4.focusNode;
            l4 = l4.focusOffset;
            try {
              h4.nodeType, k4.nodeType;
            } catch (va) {
              h4 = null;
              break a;
            }
            var n4 = 0, A4 = -1, p5 = -1, C2 = 0, x3 = 0, w5 = g4, z4 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w5 !== h4 || f4 !== 0 && w5.nodeType !== 3 || (A4 = n4 + f4);
                  w5 !== k4 || l4 !== 0 && w5.nodeType !== 3 || (p5 = n4 + l4);
                  w5.nodeType === 3 && (n4 += w5.nodeValue.length);
                  if ((u2 = w5.firstChild) === null)
                    break;
                  z4 = w5;
                  w5 = u2;
                }
                for (; ; ) {
                  if (w5 === g4)
                    break b;
                  z4 === h4 && ++C2 === f4 && (A4 = n4);
                  z4 === k4 && ++x3 === l4 && (p5 = n4);
                  if ((u2 = w5.nextSibling) !== null)
                    break;
                  w5 = z4;
                  z4 = w5.parentNode;
                }
                w5 = u2;
              }
            h4 = A4 === -1 || p5 === -1 ? null : {start: A4, end: p5};
          } else
            h4 = null;
      h4 = h4 || {start: 0, end: 0};
    } else
      h4 = null;
    lf = {focusedElem: g4, selectionRange: h4};
    fd = false;
    Ij = null;
    Jj = false;
    Z = d4;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d4;
    do
      try {
        for (g4 = a; Z !== null; ) {
          var t3 = Z.flags;
          t3 & 16 && pb(Z.stateNode, "");
          if (t3 & 128) {
            var q4 = Z.alternate;
            if (q4 !== null) {
              var v4 = q4.ref;
              v4 !== null && (typeof v4 === "function" ? v4(null) : v4.current = null);
            }
          }
          switch (t3 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h4 = Z;
              cj(g4, h4);
              var J2 = h4.alternate;
              dj(h4);
              J2 !== null && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v4 = lf;
    q4 = Ne();
    t3 = v4.focusedElem;
    g4 = v4.selectionRange;
    if (q4 !== t3 && t3 && t3.ownerDocument && Me(t3.ownerDocument.documentElement, t3)) {
      g4 !== null && Oe(t3) && (q4 = g4.start, v4 = g4.end, v4 === void 0 && (v4 = q4), "selectionStart" in t3 ? (t3.selectionStart = q4, t3.selectionEnd = Math.min(v4, t3.value.length)) : (v4 = (q4 = t3.ownerDocument || document) && q4.defaultView || window, v4.getSelection && (v4 = v4.getSelection(), h4 = t3.textContent.length, J2 = Math.min(g4.start, h4), g4 = g4.end === void 0 ? J2 : Math.min(g4.end, h4), !v4.extend && J2 > g4 && (h4 = g4, g4 = J2, J2 = h4), h4 = Le(t3, J2), f4 = Le(t3, g4), h4 && f4 && (v4.rangeCount !== 1 || v4.anchorNode !== h4.node || v4.anchorOffset !== h4.offset || v4.focusNode !== f4.node || v4.focusOffset !== f4.offset) && (q4 = q4.createRange(), q4.setStart(h4.node, h4.offset), v4.removeAllRanges(), J2 > g4 ? (v4.addRange(q4), v4.extend(f4.node, f4.offset)) : (q4.setEnd(f4.node, f4.offset), v4.addRange(q4))))));
      q4 = [];
      for (v4 = t3; v4 = v4.parentNode; )
        v4.nodeType === 1 && q4.push({element: v4, left: v4.scrollLeft, top: v4.scrollTop});
      typeof t3.focus === "function" && t3.focus();
      for (t3 = 0; t3 < q4.length; t3++)
        v4 = q4[t3], v4.element.scrollLeft = v4.left, v4.element.scrollTop = v4.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c4;
    Z = d4;
    do
      try {
        for (t3 = a; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t3, Z.alternate, Z);
          if (K2 & 128) {
            q4 = void 0;
            var Q2 = Z.ref;
            if (Q2 !== null) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q4 = L2;
                  break;
                default:
                  q4 = L2;
              }
              typeof Q2 === "function" ? Q2(q4) : Q2.current = q4;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e4;
  } else
    a.current = c4;
  if (xj)
    xj = false, yj = a, zj = b4;
  else
    for (Z = d4; Z !== null; )
      b4 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b4;
  d4 = a.pendingLanes;
  d4 === 0 && (Ti = null);
  d4 === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c4 = c4.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c4, void 0, (c4.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b4 = Z.flags;
    (b4 & 256) !== 0 && Xi(a, Z);
    (b4 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b4) {
  Aj.push(b4, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b4) {
  Bj.push(b4, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b4 = X;
  X |= 32;
  var c4 = Bj;
  Bj = [];
  for (var d4 = 0; d4 < c4.length; d4 += 2) {
    var e4 = c4[d4], f4 = c4[d4 + 1], g4 = e4.destroy;
    e4.destroy = void 0;
    if (typeof g4 === "function")
      try {
        g4();
      } catch (k4) {
        if (f4 === null)
          throw Error(y(330));
        Wi(f4, k4);
      }
  }
  c4 = Aj;
  Aj = [];
  for (d4 = 0; d4 < c4.length; d4 += 2) {
    e4 = c4[d4];
    f4 = c4[d4 + 1];
    try {
      var h4 = e4.create;
      e4.destroy = h4();
    } catch (k4) {
      if (f4 === null)
        throw Error(y(330));
      Wi(f4, k4);
    }
  }
  for (h4 = a.current.firstEffect; h4 !== null; )
    a = h4.nextEffect, h4.nextEffect = null, h4.flags & 8 && (h4.sibling = null, h4.stateNode = null), h4 = a;
  X = b4;
  ig();
  return true;
}
function gk(a, b4, c4) {
  b4 = Mi(c4, b4);
  b4 = Pi(a, b4, 1);
  Ag(a, b4);
  b4 = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b4), Mj(a, b4));
}
function Wi(a, b4) {
  if (a.tag === 3)
    gk(a, a, b4);
  else
    for (var c4 = a.return; c4 !== null; ) {
      if (c4.tag === 3) {
        gk(c4, a, b4);
        break;
      } else if (c4.tag === 1) {
        var d4 = c4.stateNode;
        if (typeof c4.type.getDerivedStateFromError === "function" || typeof d4.componentDidCatch === "function" && (Ti === null || !Ti.has(d4))) {
          a = Mi(b4, a);
          var e4 = Si(c4, a, 1);
          Ag(c4, e4);
          e4 = Hg();
          c4 = Kj(c4, 1);
          if (c4 !== null)
            $c(c4, 1, e4), Mj(c4, e4);
          else if (typeof d4.componentDidCatch === "function" && (Ti === null || !Ti.has(d4)))
            try {
              d4.componentDidCatch(b4, a);
            } catch (f4) {
            }
          break;
        }
      }
      c4 = c4.return;
    }
}
function Yj(a, b4, c4) {
  var d4 = a.pingCache;
  d4 !== null && d4.delete(b4);
  b4 = Hg();
  a.pingedLanes |= a.suspendedLanes & c4;
  U === a && (W & c4) === c4 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c4);
  Mj(a, b4);
}
function lj(a, b4) {
  var c4 = a.stateNode;
  c4 !== null && c4.delete(b4);
  b4 = 0;
  b4 === 0 && (b4 = a.mode, (b4 & 2) === 0 ? b4 = 1 : (b4 & 4) === 0 ? b4 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b4 = Yc(62914560 & ~Gj), b4 === 0 && (b4 = 4194304)));
  c4 = Hg();
  a = Kj(a, b4);
  a !== null && ($c(a, b4, c4), Mj(a, c4));
}
var ck;
ck = function(a, b4, c4) {
  var d4 = b4.lanes;
  if (a !== null)
    if (a.memoizedProps !== b4.pendingProps || N.current)
      ug = true;
    else if ((c4 & d4) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b4.tag) {
        case 3:
          ri(b4);
          sh();
          break;
        case 5:
          gh(b4);
          break;
        case 1:
          Ff(b4.type) && Jf(b4);
          break;
        case 4:
          eh(b4, b4.stateNode.containerInfo);
          break;
        case 10:
          d4 = b4.memoizedProps.value;
          var e4 = b4.type._context;
          I(mg, e4._currentValue);
          e4._currentValue = d4;
          break;
        case 13:
          if (b4.memoizedState !== null) {
            if ((c4 & b4.child.childLanes) !== 0)
              return ti(a, b4, c4);
            I(P, P.current & 1);
            b4 = hi(a, b4, c4);
            return b4 !== null ? b4.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d4 = (c4 & b4.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d4)
              return Ai(a, b4, c4);
            b4.flags |= 64;
          }
          e4 = b4.memoizedState;
          e4 !== null && (e4.rendering = null, e4.tail = null, e4.lastEffect = null);
          I(P, P.current);
          if (d4)
            break;
          else
            return null;
        case 23:
        case 24:
          return b4.lanes = 0, mi(a, b4, c4);
      }
      return hi(a, b4, c4);
    }
  else
    ug = false;
  b4.lanes = 0;
  switch (b4.tag) {
    case 2:
      d4 = b4.type;
      a !== null && (a.alternate = null, b4.alternate = null, b4.flags |= 2);
      a = b4.pendingProps;
      e4 = Ef(b4, M.current);
      tg(b4, c4);
      e4 = Ch(null, b4, d4, a, e4, c4);
      b4.flags |= 1;
      if (typeof e4 === "object" && e4 !== null && typeof e4.render === "function" && e4.$$typeof === void 0) {
        b4.tag = 1;
        b4.memoizedState = null;
        b4.updateQueue = null;
        if (Ff(d4)) {
          var f4 = true;
          Jf(b4);
        } else
          f4 = false;
        b4.memoizedState = e4.state !== null && e4.state !== void 0 ? e4.state : null;
        xg(b4);
        var g4 = d4.getDerivedStateFromProps;
        typeof g4 === "function" && Gg(b4, d4, g4, a);
        e4.updater = Kg;
        b4.stateNode = e4;
        e4._reactInternals = b4;
        Og(b4, d4, a, c4);
        b4 = qi(null, b4, d4, true, f4, c4);
      } else
        b4.tag = 0, fi(null, b4, e4, c4), b4 = b4.child;
      return b4;
    case 16:
      e4 = b4.elementType;
      a: {
        a !== null && (a.alternate = null, b4.alternate = null, b4.flags |= 2);
        a = b4.pendingProps;
        f4 = e4._init;
        e4 = f4(e4._payload);
        b4.type = e4;
        f4 = b4.tag = hk(e4);
        a = lg(e4, a);
        switch (f4) {
          case 0:
            b4 = li(null, b4, e4, a, c4);
            break a;
          case 1:
            b4 = pi(null, b4, e4, a, c4);
            break a;
          case 11:
            b4 = gi(null, b4, e4, a, c4);
            break a;
          case 14:
            b4 = ii(null, b4, e4, lg(e4.type, a), d4, c4);
            break a;
        }
        throw Error(y(306, e4, ""));
      }
      return b4;
    case 0:
      return d4 = b4.type, e4 = b4.pendingProps, e4 = b4.elementType === d4 ? e4 : lg(d4, e4), li(a, b4, d4, e4, c4);
    case 1:
      return d4 = b4.type, e4 = b4.pendingProps, e4 = b4.elementType === d4 ? e4 : lg(d4, e4), pi(a, b4, d4, e4, c4);
    case 3:
      ri(b4);
      d4 = b4.updateQueue;
      if (a === null || d4 === null)
        throw Error(y(282));
      d4 = b4.pendingProps;
      e4 = b4.memoizedState;
      e4 = e4 !== null ? e4.element : null;
      yg(a, b4);
      Cg(b4, d4, null, c4);
      d4 = b4.memoizedState.element;
      if (d4 === e4)
        sh(), b4 = hi(a, b4, c4);
      else {
        e4 = b4.stateNode;
        if (f4 = e4.hydrate)
          kh = rf(b4.stateNode.containerInfo.firstChild), jh = b4, f4 = lh = true;
        if (f4) {
          a = e4.mutableSourceEagerHydrationData;
          if (a != null)
            for (e4 = 0; e4 < a.length; e4 += 2)
              f4 = a[e4], f4._workInProgressVersionPrimary = a[e4 + 1], th.push(f4);
          c4 = Zg(b4, null, d4, c4);
          for (b4.child = c4; c4; )
            c4.flags = c4.flags & -3 | 1024, c4 = c4.sibling;
        } else
          fi(a, b4, d4, c4), sh();
        b4 = b4.child;
      }
      return b4;
    case 5:
      return gh(b4), a === null && ph(b4), d4 = b4.type, e4 = b4.pendingProps, f4 = a !== null ? a.memoizedProps : null, g4 = e4.children, nf(d4, e4) ? g4 = null : f4 !== null && nf(d4, f4) && (b4.flags |= 16), oi(a, b4), fi(a, b4, g4, c4), b4.child;
    case 6:
      return a === null && ph(b4), null;
    case 13:
      return ti(a, b4, c4);
    case 4:
      return eh(b4, b4.stateNode.containerInfo), d4 = b4.pendingProps, a === null ? b4.child = Yg(b4, null, d4, c4) : fi(a, b4, d4, c4), b4.child;
    case 11:
      return d4 = b4.type, e4 = b4.pendingProps, e4 = b4.elementType === d4 ? e4 : lg(d4, e4), gi(a, b4, d4, e4, c4);
    case 7:
      return fi(a, b4, b4.pendingProps, c4), b4.child;
    case 8:
      return fi(a, b4, b4.pendingProps.children, c4), b4.child;
    case 12:
      return fi(a, b4, b4.pendingProps.children, c4), b4.child;
    case 10:
      a: {
        d4 = b4.type._context;
        e4 = b4.pendingProps;
        g4 = b4.memoizedProps;
        f4 = e4.value;
        var h4 = b4.type._context;
        I(mg, h4._currentValue);
        h4._currentValue = f4;
        if (g4 !== null)
          if (h4 = g4.value, f4 = He(h4, f4) ? 0 : (typeof d4._calculateChangedBits === "function" ? d4._calculateChangedBits(h4, f4) : 1073741823) | 0, f4 === 0) {
            if (g4.children === e4.children && !N.current) {
              b4 = hi(a, b4, c4);
              break a;
            }
          } else
            for (h4 = b4.child, h4 !== null && (h4.return = b4); h4 !== null; ) {
              var k4 = h4.dependencies;
              if (k4 !== null) {
                g4 = h4.child;
                for (var l4 = k4.firstContext; l4 !== null; ) {
                  if (l4.context === d4 && (l4.observedBits & f4) !== 0) {
                    h4.tag === 1 && (l4 = zg(-1, c4 & -c4), l4.tag = 2, Ag(h4, l4));
                    h4.lanes |= c4;
                    l4 = h4.alternate;
                    l4 !== null && (l4.lanes |= c4);
                    sg(h4.return, c4);
                    k4.lanes |= c4;
                    break;
                  }
                  l4 = l4.next;
                }
              } else
                g4 = h4.tag === 10 ? h4.type === b4.type ? null : h4.child : h4.child;
              if (g4 !== null)
                g4.return = h4;
              else
                for (g4 = h4; g4 !== null; ) {
                  if (g4 === b4) {
                    g4 = null;
                    break;
                  }
                  h4 = g4.sibling;
                  if (h4 !== null) {
                    h4.return = g4.return;
                    g4 = h4;
                    break;
                  }
                  g4 = g4.return;
                }
              h4 = g4;
            }
        fi(a, b4, e4.children, c4);
        b4 = b4.child;
      }
      return b4;
    case 9:
      return e4 = b4.type, f4 = b4.pendingProps, d4 = f4.children, tg(b4, c4), e4 = vg(e4, f4.unstable_observedBits), d4 = d4(e4), b4.flags |= 1, fi(a, b4, d4, c4), b4.child;
    case 14:
      return e4 = b4.type, f4 = lg(e4, b4.pendingProps), f4 = lg(e4.type, f4), ii(a, b4, e4, f4, d4, c4);
    case 15:
      return ki(a, b4, b4.type, b4.pendingProps, d4, c4);
    case 17:
      return d4 = b4.type, e4 = b4.pendingProps, e4 = b4.elementType === d4 ? e4 : lg(d4, e4), a !== null && (a.alternate = null, b4.alternate = null, b4.flags |= 2), b4.tag = 1, Ff(d4) ? (a = true, Jf(b4)) : a = false, tg(b4, c4), Mg(b4, d4, e4), Og(b4, d4, e4, c4), qi(null, b4, d4, true, a, c4);
    case 19:
      return Ai(a, b4, c4);
    case 23:
      return mi(a, b4, c4);
    case 24:
      return mi(a, b4, c4);
  }
  throw Error(y(156, b4.tag));
};
function ik(a, b4, c4, d4) {
  this.tag = a;
  this.key = c4;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b4;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d4;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b4, c4, d4) {
  return new ik(a, b4, c4, d4);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b4) {
  var c4 = a.alternate;
  c4 === null ? (c4 = nh(a.tag, b4, a.key, a.mode), c4.elementType = a.elementType, c4.type = a.type, c4.stateNode = a.stateNode, c4.alternate = a, a.alternate = c4) : (c4.pendingProps = b4, c4.type = a.type, c4.flags = 0, c4.nextEffect = null, c4.firstEffect = null, c4.lastEffect = null);
  c4.childLanes = a.childLanes;
  c4.lanes = a.lanes;
  c4.child = a.child;
  c4.memoizedProps = a.memoizedProps;
  c4.memoizedState = a.memoizedState;
  c4.updateQueue = a.updateQueue;
  b4 = a.dependencies;
  c4.dependencies = b4 === null ? null : {lanes: b4.lanes, firstContext: b4.firstContext};
  c4.sibling = a.sibling;
  c4.index = a.index;
  c4.ref = a.ref;
  return c4;
}
function Vg(a, b4, c4, d4, e4, f4) {
  var g4 = 2;
  d4 = a;
  if (typeof a === "function")
    ji(a) && (g4 = 1);
  else if (typeof a === "string")
    g4 = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c4.children, e4, f4, b4);
        case Ha:
          g4 = 8;
          e4 |= 16;
          break;
        case wa:
          g4 = 8;
          e4 |= 1;
          break;
        case xa:
          return a = nh(12, c4, b4, e4 | 8), a.elementType = xa, a.type = xa, a.lanes = f4, a;
        case Ba:
          return a = nh(13, c4, b4, e4), a.type = Ba, a.elementType = Ba, a.lanes = f4, a;
        case Ca:
          return a = nh(19, c4, b4, e4), a.elementType = Ca, a.lanes = f4, a;
        case Ia:
          return vi(c4, e4, f4, b4);
        case Ja:
          return a = nh(24, c4, b4, e4), a.elementType = Ja, a.lanes = f4, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g4 = 10;
                break a;
              case za:
                g4 = 9;
                break a;
              case Aa:
                g4 = 11;
                break a;
              case Da:
                g4 = 14;
                break a;
              case Ea:
                g4 = 16;
                d4 = null;
                break a;
              case Fa:
                g4 = 22;
                break a;
            }
          throw Error(y(130, a == null ? a : typeof a, ""));
      }
  b4 = nh(g4, c4, b4, e4);
  b4.elementType = a;
  b4.type = d4;
  b4.lanes = f4;
  return b4;
}
function Xg(a, b4, c4, d4) {
  a = nh(7, a, d4, b4);
  a.lanes = c4;
  return a;
}
function vi(a, b4, c4, d4) {
  a = nh(23, a, d4, b4);
  a.elementType = Ia;
  a.lanes = c4;
  return a;
}
function Ug(a, b4, c4) {
  a = nh(6, a, null, b4);
  a.lanes = c4;
  return a;
}
function Wg(a, b4, c4) {
  b4 = nh(4, a.children !== null ? a.children : [], a.key, b4);
  b4.lanes = c4;
  b4.stateNode = {containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation};
  return b4;
}
function jk(a, b4, c4) {
  this.tag = b4;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c4;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b4, c4) {
  var d4 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: ta, key: d4 == null ? null : "" + d4, children: a, containerInfo: b4, implementation: c4};
}
function lk(a, b4, c4, d4) {
  var e4 = b4.current, f4 = Hg(), g4 = Ig(e4);
  a:
    if (c4) {
      c4 = c4._reactInternals;
      b: {
        if (Zb(c4) !== c4 || c4.tag !== 1)
          throw Error(y(170));
        var h4 = c4;
        do {
          switch (h4.tag) {
            case 3:
              h4 = h4.stateNode.context;
              break b;
            case 1:
              if (Ff(h4.type)) {
                h4 = h4.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h4 = h4.return;
        } while (h4 !== null);
        throw Error(y(171));
      }
      if (c4.tag === 1) {
        var k4 = c4.type;
        if (Ff(k4)) {
          c4 = If(c4, k4, h4);
          break a;
        }
      }
      c4 = h4;
    } else
      c4 = Cf;
  b4.context === null ? b4.context = c4 : b4.pendingContext = c4;
  b4 = zg(f4, g4);
  b4.payload = {element: a};
  d4 = d4 === void 0 ? null : d4;
  d4 !== null && (b4.callback = d4);
  Ag(e4, b4);
  Jg(e4, g4, f4);
  return g4;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b4) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c4 = a.retryLane;
    a.retryLane = c4 !== 0 && c4 < b4 ? c4 : b4;
  }
}
function ok(a, b4) {
  nk(a, b4);
  (a = a.alternate) && nk(a, b4);
}
function pk() {
  return null;
}
function qk(a, b4, c4) {
  var d4 = c4 != null && c4.hydrationOptions != null && c4.hydrationOptions.mutableSources || null;
  c4 = new jk(a, b4, c4 != null && c4.hydrate === true);
  b4 = nh(3, null, null, b4 === 2 ? 7 : b4 === 1 ? 3 : 0);
  c4.current = b4;
  b4.stateNode = c4;
  xg(b4);
  a[ff] = c4.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d4)
    for (a = 0; a < d4.length; a++) {
      b4 = d4[a];
      var e4 = b4._getVersion;
      e4 = e4(b4._source);
      c4.mutableSourceEagerHydrationData == null ? c4.mutableSourceEagerHydrationData = [b4, e4] : c4.mutableSourceEagerHydrationData.push(b4, e4);
    }
  this._internalRoot = c4;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b4 = a.containerInfo;
  lk(null, a, null, function() {
    b4[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b4) {
  b4 || (b4 = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b4 = !(!b4 || b4.nodeType !== 1 || !b4.hasAttribute("data-reactroot")));
  if (!b4)
    for (var c4; c4 = a.lastChild; )
      a.removeChild(c4);
  return new qk(a, 0, b4 ? {hydrate: true} : void 0);
}
function tk(a, b4, c4, d4, e4) {
  var f4 = c4._reactRootContainer;
  if (f4) {
    var g4 = f4._internalRoot;
    if (typeof e4 === "function") {
      var h4 = e4;
      e4 = function() {
        var a2 = mk(g4);
        h4.call(a2);
      };
    }
    lk(b4, g4, a, e4);
  } else {
    f4 = c4._reactRootContainer = sk(c4, d4);
    g4 = f4._internalRoot;
    if (typeof e4 === "function") {
      var k4 = e4;
      e4 = function() {
        var a2 = mk(g4);
        k4.call(a2);
      };
    }
    Xj(function() {
      lk(b4, g4, a, e4);
    });
  }
  return mk(g4);
}
ec = function(a) {
  if (a.tag === 13) {
    var b4 = Hg();
    Jg(a, 4, b4);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b4 = Hg();
    Jg(a, 67108864, b4);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b4 = Hg(), c4 = Ig(a);
    Jg(a, c4, b4);
    ok(a, c4);
  }
};
hc = function(a, b4) {
  return b4();
};
yb = function(a, b4, c4) {
  switch (b4) {
    case "input":
      ab(a, c4);
      b4 = c4.name;
      if (c4.type === "radio" && b4 != null) {
        for (c4 = a; c4.parentNode; )
          c4 = c4.parentNode;
        c4 = c4.querySelectorAll("input[name=" + JSON.stringify("" + b4) + '][type="radio"]');
        for (b4 = 0; b4 < c4.length; b4++) {
          var d4 = c4[b4];
          if (d4 !== a && d4.form === a.form) {
            var e4 = Db(d4);
            if (!e4)
              throw Error(y(90));
            Wa(d4);
            ab(d4, e4);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c4);
      break;
    case "select":
      b4 = c4.value, b4 != null && fb(a, !!c4.multiple, b4, false);
  }
};
Gb = Wj;
Hb = function(a, b4, c4, d4, e4) {
  var f4 = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b4, c4, d4, e4));
  } finally {
    X = f4, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b4) {
  var c4 = X;
  X |= 2;
  try {
    return a(b4);
  } finally {
    X = c4, X === 0 && (wj(), ig());
  }
};
function uk(a, b4) {
  var c4 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b4))
    throw Error(y(200));
  return kk(a, b4, null, c4);
}
var vk = {Events: [Cb, ue, Db, Eb, Fb, Oj, {current: false}]};
var wk = {findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"};
var xk = {bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
var createPortal = uk;
var findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b4 = a._reactInternals;
  if (b4 === void 0) {
    if (typeof a.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b4);
  a = a === null ? null : a.stateNode;
  return a;
};
var flushSync = function(a, b4) {
  var c4 = X;
  if ((c4 & 48) !== 0)
    return a(b4);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b4));
  } finally {
    X = c4, ig();
  }
};
var hydrate = function(a, b4, c4) {
  if (!rk(b4))
    throw Error(y(200));
  return tk(null, a, b4, true, c4);
};
var render = function(a, b4, c4) {
  if (!rk(b4))
    throw Error(y(200));
  return tk(null, a, b4, false, c4);
};
var unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a, b4) {
  return uk(a, b4, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a, b4, c4, d4) {
  if (!rk(c4))
    throw Error(y(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y(38));
  return tk(a, b4, c4, false, d4);
};
var version = "17.0.2";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var react_dom_default = reactDom;

// build/_snowpack/pkg/common/index-97fa2e1f.js
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
var propTypes = createCommonjsModule(function(module) {
  {
    module.exports = factoryWithThrowingShims();
  }
});

// build/_snowpack/pkg/common/hoist-non-react-statics.cjs-386baca3.js
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for;
var c = b ? Symbol.for("react.element") : 60103;
var d = b ? Symbol.for("react.portal") : 60106;
var e = b ? Symbol.for("react.fragment") : 60107;
var f = b ? Symbol.for("react.strict_mode") : 60108;
var g = b ? Symbol.for("react.profiler") : 60114;
var h = b ? Symbol.for("react.provider") : 60109;
var k = b ? Symbol.for("react.context") : 60110;
var l = b ? Symbol.for("react.async_mode") : 60111;
var m = b ? Symbol.for("react.concurrent_mode") : 60111;
var n = b ? Symbol.for("react.forward_ref") : 60112;
var p = b ? Symbol.for("react.suspense") : 60113;
var q = b ? Symbol.for("react.suspense_list") : 60120;
var r = b ? Symbol.for("react.memo") : 60115;
var t = b ? Symbol.for("react.lazy") : 60116;
var v = b ? Symbol.for("react.block") : 60121;
var w = b ? Symbol.for("react.fundamental") : 60117;
var x = b ? Symbol.for("react.responder") : 60118;
var y2 = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if (typeof a === "object" && a !== null) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A(a) {
  return z(a) === m;
}
var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;
var isAsyncMode = function(a) {
  return A(a) || z(a) === l;
};
var isConcurrentMode = A;
var isContextConsumer = function(a) {
  return z(a) === k;
};
var isContextProvider = function(a) {
  return z(a) === h;
};
var isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === c;
};
var isForwardRef = function(a) {
  return z(a) === n;
};
var isFragment = function(a) {
  return z(a) === e;
};
var isLazy = function(a) {
  return z(a) === t;
};
var isMemo = function(a) {
  return z(a) === r;
};
var isPortal = function(a) {
  return z(a) === d;
};
var isProfiler = function(a) {
  return z(a) === g;
};
var isStrictMode = function(a) {
  return z(a) === f;
};
var isSuspense = function(a) {
  return z(a) === p;
};
var isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === e || a === m || a === g || a === f || a === p || a === q || typeof a === "object" && a !== null && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y2 || a.$$typeof === v);
};
var typeOf = z;
var reactIs_production_min = {
  AsyncMode,
  ConcurrentMode,
  ContextConsumer,
  ContextProvider,
  Element,
  ForwardRef,
  Fragment,
  Lazy,
  Memo,
  Portal,
  Profiler,
  StrictMode,
  Suspense,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isValidElementType,
  typeOf
};
var reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min;
  }
});
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols2 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols2) {
      keys = keys.concat(getOwnPropertySymbols2(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e4) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;

// build/_snowpack/pkg/react-router-dom.js
function _setPrototypeOf(o, p5) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p6) {
    o2.__proto__ = p6;
    return o2;
  };
  return _setPrototypeOf(o, p5);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function isAbsolute(pathname) {
  return pathname.charAt(0) === "/";
}
function spliceOne(list, index3) {
  for (var i = index3, k4 = i + 1, n4 = list.length; k4 < n4; i += 1, k4 += 1) {
    list[i] = list[k4];
  }
  list.pop();
}
function resolvePathname(to, from) {
  if (from === void 0)
    from = "";
  var toParts = to && to.split("/") || [];
  var fromParts = from && from.split("/") || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;
  if (to && isAbsolute(to)) {
    fromParts = toParts;
  } else if (toParts.length) {
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }
  if (!fromParts.length)
    return "/";
  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === "." || last === ".." || last === "";
  } else {
    hasTrailingSlash = false;
  }
  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];
    if (part === ".") {
      spliceOne(fromParts, i);
    } else if (part === "..") {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }
  if (!mustEndAbs)
    for (; up--; up)
      fromParts.unshift("..");
  if (mustEndAbs && fromParts[0] !== "" && (!fromParts[0] || !isAbsolute(fromParts[0])))
    fromParts.unshift("");
  var result = fromParts.join("/");
  if (hasTrailingSlash && result.substr(-1) !== "/")
    result += "/";
  return result;
}
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  {
    throw new Error(prefix);
  }
}
function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === "/" ? path.substr(1) : path;
}
function hasBasename(path, prefix2) {
  return path.toLowerCase().indexOf(prefix2.toLowerCase()) === 0 && "/?#".indexOf(path.charAt(prefix2.length)) !== -1;
}
function stripBasename(path, prefix2) {
  return hasBasename(path, prefix2) ? path.substr(prefix2.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }
  var searchIndex = pathname.indexOf("?");
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }
  return {
    pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}
function createPath(location) {
  var pathname = location.pathname, search = location.search, hash = location.hash;
  var path = pathname || "/";
  if (search && search !== "?")
    path += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    path += hash.charAt(0) === "#" ? hash : "#" + hash;
  return path;
}
function createLocation(path, state, key, currentLocation) {
  var location;
  if (typeof path === "string") {
    location = parsePath(path);
    location.state = state;
  } else {
    location = _extends({}, path);
    if (location.pathname === void 0)
      location.pathname = "";
    if (location.search) {
      if (location.search.charAt(0) !== "?")
        location.search = "?" + location.search;
    } else {
      location.search = "";
    }
    if (location.hash) {
      if (location.hash.charAt(0) !== "#")
        location.hash = "#" + location.hash;
    } else {
      location.hash = "";
    }
    if (state !== void 0 && location.state === void 0)
      location.state = state;
  }
  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e4) {
    if (e4 instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
    } else {
      throw e4;
    }
  }
  if (key)
    location.key = key;
  if (currentLocation) {
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== "/") {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    if (!location.pathname) {
      location.pathname = "/";
    }
  }
  return location;
}
function createTransitionManager() {
  var prompt = null;
  function setPrompt(nextPrompt) {
    prompt = nextPrompt;
    return function() {
      if (prompt === nextPrompt)
        prompt = null;
    };
  }
  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    if (prompt != null) {
      var result = typeof prompt === "function" ? prompt(location, action) : prompt;
      if (typeof result === "string") {
        if (typeof getUserConfirmation === "function") {
          getUserConfirmation(result, callback);
        } else {
          callback(true);
        }
      } else {
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }
  var listeners = [];
  function appendListener(fn) {
    var isActive = true;
    function listener3() {
      if (isActive)
        fn.apply(void 0, arguments);
    }
    listeners.push(listener3);
    return function() {
      isActive = false;
      listeners = listeners.filter(function(item) {
        return item !== listener3;
      });
    };
  }
  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    listeners.forEach(function(listener3) {
      return listener3.apply(void 0, args);
    });
  }
  return {
    setPrompt,
    confirmTransitionTo,
    appendListener,
    notifyListeners
  };
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message));
}
function supportsHistory() {
  var ua2 = window.navigator.userAgent;
  if ((ua2.indexOf("Android 2.") !== -1 || ua2.indexOf("Android 4.0") !== -1) && ua2.indexOf("Mobile Safari") !== -1 && ua2.indexOf("Chrome") === -1 && ua2.indexOf("Windows Phone") === -1)
    return false;
  return window.history && "pushState" in window.history;
}
function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function isExtraneousPopstateEvent(event) {
  return event.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var PopStateEvent = "popstate";
var HashChangeEvent = "hashchange";
function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e4) {
    return {};
  }
}
function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props, _props$forceRefresh = _props.forceRefresh, forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : "";
  function getDOMLocation(historyState) {
    var _ref2 = historyState || {}, key = _ref2.key, state = _ref2.state;
    var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
    var path = pathname + search + hash;
    if (basename)
      path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function handlePopState(event) {
    if (isExtraneousPopstateEvent(event))
      return;
    handlePop(getDOMLocation(event.state));
  }
  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }
  var forceNextPop = false;
  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
        if (ok2) {
          setState({
            action,
            location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1)
      toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1)
      fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];
  function createHref(location) {
    return basename + createPath(location);
  }
  function push(path, state) {
    var action = "PUSH";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var href = createHref(location);
      var key = location.key, state2 = location.state;
      if (canUseHistory) {
        globalHistory.pushState({
          key,
          state: state2
        }, null, href);
        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action,
            location
          });
        }
      } else {
        window.location.href = href;
      }
    });
  }
  function replace(path, state) {
    var action = "REPLACE";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var href = createHref(location);
      var key = location.key, state2 = location.state;
      if (canUseHistory) {
        globalHistory.replaceState({
          key,
          state: state2
        }, null, href);
        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1)
            allKeys[prevIndex] = location.key;
          setState({
            action,
            location
          });
        }
      } else {
        window.location.replace(href);
      }
    });
  }
  function go(n4) {
    globalHistory.go(n4);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener)
        window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener)
        window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function() {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener3) {
    var unlisten = transitionManager.appendListener(listener3);
    checkDOMListeners(1);
    return function() {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  };
  return history;
}
var HashChangeEvent$1 = "hashchange";
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === "!" ? path : "!/" + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === "!" ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};
function stripHash(url) {
  var hashIndex = url.indexOf("#");
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}
function getHashPath() {
  var href = window.location.href;
  var hashIndex = href.indexOf("#");
  return hashIndex === -1 ? "" : href.substring(hashIndex + 1);
}
function pushHashPath(path) {
  window.location.hash = path;
}
function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + "#" + path);
}
function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? invariant(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$hashType = _props.hashType, hashType = _props$hashType === void 0 ? "slash" : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : "";
  var _HashPathCoders$hashT = HashPathCoders[hashType], encodePath2 = _HashPathCoders$hashT.encodePath, decodePath2 = _HashPathCoders$hashT.decodePath;
  function getDOMLocation() {
    var path2 = decodePath2(getHashPath());
    if (basename)
      path2 = stripBasename(path2, basename);
    return createLocation(path2);
  }
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  var forceNextPop = false;
  var ignorePath = null;
  function locationsAreEqual$$1(a, b4) {
    return a.pathname === b4.pathname && a.search === b4.search && a.hash === b4.hash;
  }
  function handleHashChange() {
    var path2 = getHashPath();
    var encodedPath2 = encodePath2(path2);
    if (path2 !== encodedPath2) {
      replaceHashPath(encodedPath2);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location))
        return;
      if (ignorePath === createPath(location))
        return;
      ignorePath = null;
      handlePop(location);
    }
  }
  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
        if (ok2) {
          setState({
            action,
            location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history.location;
    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1)
      toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1)
      fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var path = getHashPath();
  var encodedPath = encodePath2(path);
  if (path !== encodedPath)
    replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)];
  function createHref(location) {
    var baseTag = document.querySelector("base");
    var href = "";
    if (baseTag && baseTag.getAttribute("href")) {
      href = stripHash(window.location.href);
    }
    return href + "#" + encodePath2(basename + createPath(location));
  }
  function push(path2, state) {
    var action = "PUSH";
    var location = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var path3 = createPath(location);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        pushHashPath(encodedPath2);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path3);
        allPaths = nextPaths;
        setState({
          action,
          location
        });
      } else {
        setState();
      }
    });
  }
  function replace(path2, state) {
    var action = "REPLACE";
    var location = createLocation(path2, void 0, void 0, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var path3 = createPath(location);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        replaceHashPath(encodedPath2);
      }
      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1)
        allPaths[prevIndex] = path3;
      setState({
        action,
        location
      });
    });
  }
  function go(n4) {
    globalHistory.go(n4);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function() {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener3) {
    var unlisten = transitionManager.appendListener(listener3);
    checkDOMListeners(1);
    return function() {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  };
  return history;
}
function clamp(n4, lowerBound, upperBound) {
  return Math.min(Math.max(n4, lowerBound), upperBound);
}
function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props, getUserConfirmation = _props.getUserConfirmation, _props$initialEntries = _props.initialEntries, initialEntries = _props$initialEntries === void 0 ? ["/"] : _props$initialEntries, _props$initialIndex = _props.initialIndex, initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history, nextState);
    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }
  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }
  var index3 = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function(entry) {
    return typeof entry === "string" ? createLocation(entry, void 0, createKey()) : createLocation(entry, void 0, entry.key || createKey());
  });
  var createHref = createPath;
  function push(path, state) {
    var action = "PUSH";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }
      setState({
        action,
        location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }
  function replace(path, state) {
    var action = "REPLACE";
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (!ok2)
        return;
      history.entries[history.index] = location;
      setState({
        action,
        location
      });
    });
  }
  function go(n4) {
    var nextIndex = clamp(history.index + n4, 0, history.entries.length - 1);
    var action = "POP";
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok2) {
      if (ok2) {
        setState({
          action,
          location,
          index: nextIndex
        });
      } else {
        setState();
      }
    });
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  function canGo(n4) {
    var nextIndex = history.index + n4;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    return transitionManager.setPrompt(prompt);
  }
  function listen(listener3) {
    return transitionManager.appendListener(listener3);
  }
  var history = {
    length: entries.length,
    action: "POP",
    location: entries[index3],
    index: index3,
    entries,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    canGo,
    block,
    listen
  };
  return history;
}
var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal2 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
function getUniqueId() {
  var key = "__global_unique_id__";
  return commonjsGlobal2[key] = (commonjsGlobal2[key] || 0) + 1;
}
function objectIs(x3, y5) {
  if (x3 === y5) {
    return x3 !== 0 || 1 / x3 === 1 / y5;
  } else {
    return x3 !== x3 && y5 !== y5;
  }
}
function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on2(handler) {
      handlers.push(handler);
    },
    off: function off2(handler) {
      handlers = handlers.filter(function(h4) {
        return h4 !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function(handler) {
        return handler(value, changedBits);
      });
    }
  };
}
function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}
function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;
  var contextProp = "__create-react-context-" + getUniqueId() + "__";
  var Provider = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(Provider2, _Component);
    function Provider2() {
      var _this;
      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }
    var _proto = Provider2.prototype;
    _proto.getChildContext = function getChildContext() {
      var _ref2;
      return _ref2 = {}, _ref2[contextProp] = this.emitter, _ref2;
    };
    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;
        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          changedBits |= 0;
          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };
    _proto.render = function render2() {
      return this.props.children;
    };
    return Provider2;
  }(react.Component);
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = propTypes.object.isRequired, _Provider$childContex);
  var Consumer = /* @__PURE__ */ function(_Component2) {
    _inheritsLoose(Consumer2, _Component2);
    function Consumer2() {
      var _this2;
      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };
      _this2.onUpdate = function(newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };
      return _this2;
    }
    var _proto2 = Consumer2.prototype;
    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };
    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };
    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };
    _proto2.render = function render2() {
      return onlyChild(this.props.children)(this.state.value);
    };
    return Consumer2;
  }(react.Component);
  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = propTypes.object, _Consumer$contextType);
  return {
    Provider,
    Consumer
  };
}
var index = react.createContext || createReactContext;
var isarray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
};
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;
var PATH_REGEXP = new RegExp([
  "(\\\\.)",
  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index3 = 0;
  var path = "";
  var defaultDelimiter = options && options.delimiter || "/";
  var res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m4 = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index3, offset);
    index3 = offset + m4.length;
    if (escaped) {
      path += escaped[1];
      continue;
    }
    var next = str[index3];
    var prefix2 = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];
    if (path) {
      tokens.push(path);
      path = "";
    }
    var partial = prefix2 != null && next != null && next !== prefix2;
    var repeat = modifier === "+" || modifier === "*";
    var optional = modifier === "?" || modifier === "*";
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix2 || "",
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
    });
  }
  if (index3 < str.length) {
    path += str.substr(index3);
  }
  if (path) {
    tokens.push(path);
  }
  return tokens;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function(c4) {
    return "%" + c4.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function(c4) {
    return "%" + c4.charCodeAt(0).toString(16).toUpperCase();
  });
}
function tokensToFunction(tokens, options) {
  var matches = new Array(tokens.length);
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === "object") {
      matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", flags(options));
    }
  }
  return function(obj, opts) {
    var path = "";
    var data = obj || {};
    var options2 = opts || {};
    var encode = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (var i2 = 0; i2 < tokens.length; i2++) {
      var token = tokens[i2];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data[token.name];
      var segment;
      if (value == null) {
        if (token.optional) {
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (var j2 = 0; j2 < value.length; j2++) {
          segment = encode(value[j2]);
          if (!matches[i2].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
          }
          path += (j2 === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i2].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, "\\$1");
}
function attachKeys(re3, keys) {
  re3.keys = keys;
  return re3;
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }
  return attachKeys(path, keys);
}
function arrayToRegexp(path, keys, options) {
  var parts = [];
  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }
  var regexp = new RegExp("(?:" + parts.join("|") + ")", flags(options));
  return attachKeys(regexp, keys);
}
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = keys || options;
    keys = [];
  }
  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = "";
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (typeof token === "string") {
      route += escapeString(token);
    } else {
      var prefix2 = escapeString(token.prefix);
      var capture = "(?:" + token.pattern + ")";
      keys.push(token);
      if (token.repeat) {
        capture += "(?:" + prefix2 + capture + ")*";
      }
      if (token.optional) {
        if (!token.partial) {
          capture = "(?:" + prefix2 + "(" + capture + "))?";
        } else {
          capture = prefix2 + "(" + capture + ")?";
        }
      } else {
        capture = prefix2 + "(" + capture + ")";
      }
      route += capture;
    }
  }
  var delimiter = escapeString(options.delimiter || "/");
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + "(?:" + delimiter + "(?=$))?";
  }
  if (end) {
    route += "$";
  } else {
    route += strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)";
  }
  return attachKeys(new RegExp("^" + route, flags(options)), keys);
}
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = keys || options;
    keys = [];
  }
  options = options || {};
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }
  if (isarray(path)) {
    return arrayToRegexp(path, keys, options);
  }
  return stringToRegexp(path, keys, options);
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b2 = typeof Symbol === "function" && Symbol.for;
var c2 = b2 ? Symbol.for("react.element") : 60103;
var d2 = b2 ? Symbol.for("react.portal") : 60106;
var e2 = b2 ? Symbol.for("react.fragment") : 60107;
var f2 = b2 ? Symbol.for("react.strict_mode") : 60108;
var g2 = b2 ? Symbol.for("react.profiler") : 60114;
var h2 = b2 ? Symbol.for("react.provider") : 60109;
var k2 = b2 ? Symbol.for("react.context") : 60110;
var l2 = b2 ? Symbol.for("react.async_mode") : 60111;
var m2 = b2 ? Symbol.for("react.concurrent_mode") : 60111;
var n2 = b2 ? Symbol.for("react.forward_ref") : 60112;
var p2 = b2 ? Symbol.for("react.suspense") : 60113;
var q2 = b2 ? Symbol.for("react.suspense_list") : 60120;
var r2 = b2 ? Symbol.for("react.memo") : 60115;
var t2 = b2 ? Symbol.for("react.lazy") : 60116;
var v2 = b2 ? Symbol.for("react.block") : 60121;
var w2 = b2 ? Symbol.for("react.fundamental") : 60117;
var x2 = b2 ? Symbol.for("react.responder") : 60118;
var y3 = b2 ? Symbol.for("react.scope") : 60119;
function z2(a) {
  if (typeof a === "object" && a !== null) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c2:
        switch (a = a.type, a) {
          case l2:
          case m2:
          case e2:
          case g2:
          case f2:
          case p2:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k2:
              case n2:
              case t2:
              case r2:
              case h2:
                return a;
              default:
                return u2;
            }
        }
      case d2:
        return u2;
    }
  }
}
function A2(a) {
  return z2(a) === m2;
}
var AsyncMode2 = l2;
var ConcurrentMode2 = m2;
var ContextConsumer2 = k2;
var ContextProvider2 = h2;
var Element2 = c2;
var ForwardRef2 = n2;
var Fragment2 = e2;
var Lazy2 = t2;
var Memo2 = r2;
var Portal2 = d2;
var Profiler2 = g2;
var StrictMode2 = f2;
var Suspense2 = p2;
var isAsyncMode2 = function(a) {
  return A2(a) || z2(a) === l2;
};
var isConcurrentMode2 = A2;
var isContextConsumer2 = function(a) {
  return z2(a) === k2;
};
var isContextProvider2 = function(a) {
  return z2(a) === h2;
};
var isElement2 = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === c2;
};
var isForwardRef2 = function(a) {
  return z2(a) === n2;
};
var isFragment2 = function(a) {
  return z2(a) === e2;
};
var isLazy2 = function(a) {
  return z2(a) === t2;
};
var isMemo2 = function(a) {
  return z2(a) === r2;
};
var isPortal2 = function(a) {
  return z2(a) === d2;
};
var isProfiler2 = function(a) {
  return z2(a) === g2;
};
var isStrictMode2 = function(a) {
  return z2(a) === f2;
};
var isSuspense2 = function(a) {
  return z2(a) === p2;
};
var isValidElementType2 = function(a) {
  return typeof a === "string" || typeof a === "function" || a === e2 || a === m2 || a === g2 || a === f2 || a === p2 || a === q2 || typeof a === "object" && a !== null && (a.$$typeof === t2 || a.$$typeof === r2 || a.$$typeof === h2 || a.$$typeof === k2 || a.$$typeof === n2 || a.$$typeof === w2 || a.$$typeof === x2 || a.$$typeof === y3 || a.$$typeof === v2);
};
var typeOf2 = z2;
var reactIs_production_min2 = {
  AsyncMode: AsyncMode2,
  ConcurrentMode: ConcurrentMode2,
  ContextConsumer: ContextConsumer2,
  ContextProvider: ContextProvider2,
  Element: Element2,
  ForwardRef: ForwardRef2,
  Fragment: Fragment2,
  Lazy: Lazy2,
  Memo: Memo2,
  Portal: Portal2,
  Profiler: Profiler2,
  StrictMode: StrictMode2,
  Suspense: Suspense2,
  isAsyncMode: isAsyncMode2,
  isConcurrentMode: isConcurrentMode2,
  isContextConsumer: isContextConsumer2,
  isContextProvider: isContextProvider2,
  isElement: isElement2,
  isForwardRef: isForwardRef2,
  isFragment: isFragment2,
  isLazy: isLazy2,
  isMemo: isMemo2,
  isPortal: isPortal2,
  isProfiler: isProfiler2,
  isStrictMode: isStrictMode2,
  isSuspense: isSuspense2,
  isValidElementType: isValidElementType2,
  typeOf: typeOf2
};
var reactIs2 = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min2;
  }
});
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var createNamedContext = function createNamedContext2(name) {
  var context2 = index();
  context2.displayName = name;
  return context2;
};
var historyContext = /* @__PURE__ */ createNamedContext("Router-History");
var createNamedContext$1 = function createNamedContext3(name) {
  var context2 = index();
  context2.displayName = name;
  return context2;
};
var context = /* @__PURE__ */ createNamedContext$1("Router");
var Router = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Router2, _React$Component);
  Router2.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };
  function Router2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    };
    _this._isMounted = false;
    _this._pendingLocation = null;
    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function(location) {
        if (_this._isMounted) {
          _this.setState({
            location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }
    return _this;
  }
  var _proto = Router2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten)
      this.unlisten();
  };
  _proto.render = function render2() {
    return react.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router2.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, react.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };
  return Router2;
}(react.Component);
var MemoryRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(MemoryRouter2, _React$Component);
  function MemoryRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }
  var _proto = MemoryRouter2.prototype;
  _proto.render = function render2() {
    return react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return MemoryRouter2;
}(react.Component);
var Lifecycle = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Lifecycle2, _React$Component);
  function Lifecycle2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Lifecycle2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount)
      this.props.onMount.call(this, this);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate)
      this.props.onUpdate.call(this, this, prevProps);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount)
      this.props.onUnmount.call(this, this);
  };
  _proto.render = function render2() {
    return null;
  };
  return Lifecycle2;
}(react.Component);
var cache$1 = {};
var cacheLimit$1 = 1e4;
var cacheCount$1 = 0;
function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path])
    return pathCache[path];
  var keys = [];
  var regexp = pathToRegexp_1(path, keys, options);
  var result = {
    regexp,
    keys
  };
  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }
  return result;
}
function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }
  var _options = options, path = _options.path, _options$exact = _options.exact, exact = _options$exact === void 0 ? false : _options$exact, _options$strict = _options.strict, strict = _options$strict === void 0 ? false : _options$strict, _options$sensitive = _options.sensitive, sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function(matched, path2) {
    if (!path2 && path2 !== "")
      return null;
    if (matched)
      return matched;
    var _compilePath = compilePath$1(path2, {
      end: exact,
      strict,
      sensitive
    }), regexp = _compilePath.regexp, keys = _compilePath.keys;
    var match = regexp.exec(pathname);
    if (!match)
      return null;
    var url = match[0], values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact)
      return null;
    return {
      path: path2,
      url: path2 === "/" && url === "" ? "/" : url,
      isExact,
      params: keys.reduce(function(memo, key, index3) {
        memo[key.name] = values[index3];
        return memo;
      }, {})
    };
  }, null);
}
var Route = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Route2, _React$Component);
  function Route2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Route2.prototype;
  _proto.render = function render2() {
    var _this = this;
    return react.createElement(context.Consumer, null, function(context$1) {
      !context$1 ? invariant(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;
      var props = _extends({}, context$1, {
        location,
        match
      });
      var _this$props = _this.props, children = _this$props.children, component = _this$props.component, render3 = _this$props.render;
      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }
      return react.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ? children(props) : children : component ? react.createElement(component, props) : render3 ? render3(props) : null : typeof children === "function" ? children(props) : null);
    });
  };
  return Route2;
}(react.Component);
function addLeadingSlash$1(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function addBasename(basename, location) {
  if (!basename)
    return location;
  return _extends({}, location, {
    pathname: addLeadingSlash$1(basename) + location.pathname
  });
}
function stripBasename$1(basename, location) {
  if (!basename)
    return location;
  var base = addLeadingSlash$1(basename);
  if (location.pathname.indexOf(base) !== 0)
    return location;
  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}
function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}
function staticHandler(methodName) {
  return function() {
    invariant(false);
  };
}
function noop() {
}
var StaticRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(StaticRouter2, _React$Component);
  function StaticRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handlePush = function(location) {
      return _this.navigateTo(location, "PUSH");
    };
    _this.handleReplace = function(location) {
      return _this.navigateTo(location, "REPLACE");
    };
    _this.handleListen = function() {
      return noop;
    };
    _this.handleBlock = function() {
      return noop;
    };
    return _this;
  }
  var _proto = StaticRouter2.prototype;
  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props, _this$props$basename = _this$props.basename, basename = _this$props$basename === void 0 ? "" : _this$props$basename, _this$props$context = _this$props.context, context2 = _this$props$context === void 0 ? {} : _this$props$context;
    context2.action = action;
    context2.location = addBasename(basename, createLocation(location));
    context2.url = createURL(context2.location);
  };
  _proto.render = function render2() {
    var _this$props2 = this.props, _this$props2$basename = _this$props2.basename, basename = _this$props2$basename === void 0 ? "" : _this$props2$basename, _this$props2$context = _this$props2.context, context2 = _this$props2$context === void 0 ? {} : _this$props2$context, _this$props2$location = _this$props2.location, location = _this$props2$location === void 0 ? "/" : _this$props2$location, rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);
    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash$1(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename$1(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler(),
      goBack: staticHandler(),
      goForward: staticHandler(),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react.createElement(Router, _extends({}, rest, {
      history,
      staticContext: context2
    }));
  };
  return StaticRouter2;
}(react.Component);
var Switch = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Switch2, _React$Component);
  function Switch2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Switch2.prototype;
  _proto.render = function render2() {
    var _this = this;
    return react.createElement(context.Consumer, null, function(context2) {
      !context2 ? invariant(false) : void 0;
      var location = _this.props.location || context2.location;
      var element, match;
      react.Children.forEach(_this.props.children, function(child) {
        if (match == null && react.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, _extends({}, child.props, {
            path
          })) : context2.match;
        }
      });
      return match ? react.cloneElement(element, {
        location,
        computedMatch: match
      }) : null;
    });
  };
  return Switch2;
}(react.Component);
var useContext = react.useContext;
var BrowserRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(BrowserRouter2, _React$Component);
  function BrowserRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }
  var _proto = BrowserRouter2.prototype;
  _proto.render = function render2() {
    return react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return BrowserRouter2;
}(react.Component);
var HashRouter = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(HashRouter2, _React$Component);
  function HashRouter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }
  var _proto = HashRouter2.prototype;
  _proto.render = function render2() {
    return react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };
  return HashRouter2;
}(react.Component);
var resolveToLocation = function resolveToLocation2(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation2(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};
var forwardRefShim = function forwardRefShim2(C2) {
  return C2;
};
var forwardRef = react.forwardRef;
if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var LinkAnchor = forwardRef(function(_ref2, forwardedRef) {
  var innerRef = _ref2.innerRef, navigate = _ref2.navigate, _onClick = _ref2.onClick, rest = _objectWithoutPropertiesLoose(_ref2, ["innerRef", "navigate", "onClick"]);
  var target = rest.target;
  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick)
          _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }
      if (!event.defaultPrevented && event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
        event.preventDefault();
        navigate();
      }
    }
  });
  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  return react.createElement("a", props);
});
var Link = forwardRef(function(_ref2, forwardedRef) {
  var _ref2$component = _ref2.component, component = _ref2$component === void 0 ? LinkAnchor : _ref2$component, replace = _ref2.replace, to = _ref2.to, innerRef = _ref2.innerRef, rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);
  return react.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var history = context2.history;
    var location = normalizeToLocation(resolveToLocation(to, context2.location), context2.location);
    var href = location ? history.createHref(location) : "";
    var props = _extends({}, rest, {
      href,
      navigate: function navigate() {
        var location2 = resolveToLocation(to, context2.location);
        var method = replace ? history.replace : history.push;
        method(location2);
      }
    });
    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return react.createElement(component, props);
  });
});
var forwardRefShim$1 = function forwardRefShim3(C2) {
  return C2;
};
var forwardRef$1 = react.forwardRef;
if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}
function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }
  return classnames.filter(function(i) {
    return i;
  }).join(" ");
}
var NavLink = forwardRef$1(function(_ref2, forwardedRef) {
  var _ref$ariaCurrent = _ref2["aria-current"], ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent, _ref$activeClassName = _ref2.activeClassName, activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName, activeStyle = _ref2.activeStyle, classNameProp = _ref2.className, exact = _ref2.exact, isActiveProp = _ref2.isActive, locationProp = _ref2.location, sensitive = _ref2.sensitive, strict = _ref2.strict, styleProp = _ref2.style, to = _ref2.to, innerRef = _ref2.innerRef, rest = _objectWithoutPropertiesLoose(_ref2, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return react.createElement(context.Consumer, null, function(context2) {
    !context2 ? invariant(false) : void 0;
    var currentLocation = locationProp || context2.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname;
    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact,
      sensitive,
      strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;
    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className,
      style,
      to: toLocation
    }, rest);
    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }
    return react.createElement(Link, props);
  });
});

// build/_snowpack/pkg/styled-components.js
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== "undefined") {
  globalContext = window;
} else if (typeof self !== "undefined") {
  globalContext = self;
} else {
  globalContext = {};
}
if (typeof globalContext.setTimeout === "function") {
  cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === "function") {
  cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e4) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e5) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e4) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e5) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title = "browser";
var platform = "browser";
var browser = true;
var argv = [];
var version2 = "";
var versions = {};
var release = {};
var config = {};
function noop2() {
}
var on = noop2;
var addListener = noop2;
var once = noop2;
var off = noop2;
var removeListener = noop2;
var removeAllListeners = noop2;
var emit = noop2;
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
var performance2 = globalContext.performance || {};
var performanceNow = performance2.now || performance2.mozNow || performance2.msNow || performance2.oNow || performance2.webkitNow || function() {
  return new Date().getTime();
};
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance2) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
var process = {
  nextTick,
  title,
  browser,
  env: {NODE_ENV: "production"},
  argv,
  version: version2,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  binding,
  cwd,
  chdir,
  umask,
  hrtime,
  platform,
  release,
  config,
  uptime
};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b3 = 60103;
var c3 = 60106;
var d3 = 60107;
var e3 = 60108;
var f3 = 60114;
var g3 = 60109;
var h3 = 60110;
var k3 = 60112;
var l3 = 60113;
var m3 = 60120;
var n3 = 60115;
var p3 = 60116;
var q3 = 60121;
var r3 = 60122;
var u = 60117;
var v3 = 60129;
var w3 = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  x3 = Symbol.for;
  b3 = x3("react.element");
  c3 = x3("react.portal");
  d3 = x3("react.fragment");
  e3 = x3("react.strict_mode");
  f3 = x3("react.profiler");
  g3 = x3("react.provider");
  h3 = x3("react.context");
  k3 = x3("react.forward_ref");
  l3 = x3("react.suspense");
  m3 = x3("react.suspense_list");
  n3 = x3("react.memo");
  p3 = x3("react.lazy");
  q3 = x3("react.block");
  r3 = x3("react.server.block");
  u = x3("react.fundamental");
  v3 = x3("react.debug_trace_mode");
  w3 = x3("react.legacy_hidden");
}
var x3;
function y4(a) {
  if (typeof a === "object" && a !== null) {
    var t3 = a.$$typeof;
    switch (t3) {
      case b3:
        switch (a = a.type, a) {
          case d3:
          case f3:
          case e3:
          case l3:
          case m3:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case h3:
              case k3:
              case p3:
              case n3:
              case g3:
                return a;
              default:
                return t3;
            }
        }
      case c3:
        return t3;
    }
  }
}
var z3 = g3;
var A3 = b3;
var B2 = k3;
var C = d3;
var D2 = p3;
var E = n3;
var F2 = c3;
var G2 = f3;
var H2 = e3;
var I2 = l3;
var ContextConsumer3 = h3;
var ContextProvider3 = z3;
var Element3 = A3;
var ForwardRef3 = B2;
var Fragment3 = C;
var Lazy3 = D2;
var Memo3 = E;
var Portal3 = F2;
var Profiler3 = G2;
var StrictMode3 = H2;
var Suspense3 = I2;
var isAsyncMode3 = function() {
  return false;
};
var isConcurrentMode3 = function() {
  return false;
};
var isContextConsumer3 = function(a) {
  return y4(a) === h3;
};
var isContextProvider3 = function(a) {
  return y4(a) === g3;
};
var isElement3 = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === b3;
};
var isForwardRef3 = function(a) {
  return y4(a) === k3;
};
var isFragment3 = function(a) {
  return y4(a) === d3;
};
var isLazy3 = function(a) {
  return y4(a) === p3;
};
var isMemo3 = function(a) {
  return y4(a) === n3;
};
var isPortal3 = function(a) {
  return y4(a) === c3;
};
var isProfiler3 = function(a) {
  return y4(a) === f3;
};
var isStrictMode3 = function(a) {
  return y4(a) === e3;
};
var isSuspense3 = function(a) {
  return y4(a) === l3;
};
var isValidElementType3 = function(a) {
  return typeof a === "string" || typeof a === "function" || a === d3 || a === f3 || a === v3 || a === e3 || a === l3 || a === m3 || a === w3 || typeof a === "object" && a !== null && (a.$$typeof === p3 || a.$$typeof === n3 || a.$$typeof === g3 || a.$$typeof === h3 || a.$$typeof === k3 || a.$$typeof === u || a.$$typeof === q3 || a[0] === r3) ? true : false;
};
var typeOf3 = y4;
var reactIs_production_min3 = {
  ContextConsumer: ContextConsumer3,
  ContextProvider: ContextProvider3,
  Element: Element3,
  ForwardRef: ForwardRef3,
  Fragment: Fragment3,
  Lazy: Lazy3,
  Memo: Memo3,
  Portal: Portal3,
  Profiler: Profiler3,
  StrictMode: StrictMode3,
  Suspense: Suspense3,
  isAsyncMode: isAsyncMode3,
  isConcurrentMode: isConcurrentMode3,
  isContextConsumer: isContextConsumer3,
  isContextProvider: isContextProvider3,
  isElement: isElement3,
  isForwardRef: isForwardRef3,
  isFragment: isFragment3,
  isLazy: isLazy3,
  isMemo: isMemo3,
  isPortal: isPortal3,
  isProfiler: isProfiler3,
  isStrictMode: isStrictMode3,
  isSuspense: isSuspense3,
  isValidElementType: isValidElementType3,
  typeOf: typeOf3
};
var reactIs3 = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min3;
  }
});
function stylis_min(W3) {
  function M3(d4, c4, e4, h4, a) {
    for (var m4 = 0, b4 = 0, v4 = 0, n4 = 0, q4, g4, x3 = 0, K2 = 0, k4, u2 = k4 = q4 = 0, l4 = 0, r4 = 0, I3 = 0, t3 = 0, B4 = e4.length, J2 = B4 - 1, y5, f4 = "", p5 = "", F4 = "", G4 = "", C2; l4 < B4; ) {
      g4 = e4.charCodeAt(l4);
      l4 === J2 && b4 + n4 + v4 + m4 !== 0 && (b4 !== 0 && (g4 = b4 === 47 ? 10 : 47), n4 = v4 = m4 = 0, B4++, J2++);
      if (b4 + n4 + v4 + m4 === 0) {
        if (l4 === J2 && (0 < r4 && (f4 = f4.replace(N3, "")), 0 < f4.trim().length)) {
          switch (g4) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f4 += e4.charAt(l4);
          }
          g4 = 59;
        }
        switch (g4) {
          case 123:
            f4 = f4.trim();
            q4 = f4.charCodeAt(0);
            k4 = 1;
            for (t3 = ++l4; l4 < B4; ) {
              switch (g4 = e4.charCodeAt(l4)) {
                case 123:
                  k4++;
                  break;
                case 125:
                  k4--;
                  break;
                case 47:
                  switch (g4 = e4.charCodeAt(l4 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l4 + 1; u2 < J2; ++u2) {
                          switch (e4.charCodeAt(u2)) {
                            case 47:
                              if (g4 === 42 && e4.charCodeAt(u2 - 1) === 42 && l4 + 2 !== u2) {
                                l4 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (g4 === 47) {
                                l4 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l4 = u2;
                      }
                  }
                  break;
                case 91:
                  g4++;
                case 40:
                  g4++;
                case 34:
                case 39:
                  for (; l4++ < J2 && e4.charCodeAt(l4) !== g4; ) {
                  }
              }
              if (k4 === 0)
                break;
              l4++;
            }
            k4 = e4.substring(t3, l4);
            q4 === 0 && (q4 = (f4 = f4.replace(ca2, "").trim()).charCodeAt(0));
            switch (q4) {
              case 64:
                0 < r4 && (f4 = f4.replace(N3, ""));
                g4 = f4.charCodeAt(1);
                switch (g4) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r4 = c4;
                    break;
                  default:
                    r4 = O3;
                }
                k4 = M3(c4, r4, k4, g4, a + 1);
                t3 = k4.length;
                0 < A4 && (r4 = X3(O3, f4, I3), C2 = H3(3, k4, r4, c4, D3, z4, t3, g4, a, h4), f4 = r4.join(""), C2 !== void 0 && (t3 = (k4 = C2.trim()).length) === 0 && (g4 = 0, k4 = ""));
                if (0 < t3)
                  switch (g4) {
                    case 115:
                      f4 = f4.replace(da2, ea2);
                    case 100:
                    case 109:
                    case 45:
                      k4 = f4 + "{" + k4 + "}";
                      break;
                    case 107:
                      f4 = f4.replace(fa2, "$1 $2");
                      k4 = f4 + "{" + k4 + "}";
                      k4 = w5 === 1 || w5 === 2 && L2("@" + k4, 3) ? "@-webkit-" + k4 + "@" + k4 : "@" + k4;
                      break;
                    default:
                      k4 = f4 + k4, h4 === 112 && (k4 = (p5 += k4, ""));
                  }
                else
                  k4 = "";
                break;
              default:
                k4 = M3(c4, X3(c4, f4, I3), k4, h4, a + 1);
            }
            F4 += k4;
            k4 = I3 = r4 = u2 = q4 = 0;
            f4 = "";
            g4 = e4.charCodeAt(++l4);
            break;
          case 125:
          case 59:
            f4 = (0 < r4 ? f4.replace(N3, "") : f4).trim();
            if (1 < (t3 = f4.length))
              switch (u2 === 0 && (q4 = f4.charCodeAt(0), q4 === 45 || 96 < q4 && 123 > q4) && (t3 = (f4 = f4.replace(" ", ":")).length), 0 < A4 && (C2 = H3(1, f4, c4, d4, D3, z4, p5.length, h4, a, h4)) !== void 0 && (t3 = (f4 = C2.trim()).length) === 0 && (f4 = "\0\0"), q4 = f4.charCodeAt(0), g4 = f4.charCodeAt(1), q4) {
                case 0:
                  break;
                case 64:
                  if (g4 === 105 || g4 === 99) {
                    G4 += f4 + e4.charAt(l4);
                    break;
                  }
                default:
                  f4.charCodeAt(t3 - 1) !== 58 && (p5 += P3(f4, q4, g4, f4.charCodeAt(2)));
              }
            I3 = r4 = u2 = q4 = 0;
            f4 = "";
            g4 = e4.charCodeAt(++l4);
        }
      }
      switch (g4) {
        case 13:
        case 10:
          b4 === 47 ? b4 = 0 : 1 + q4 === 0 && h4 !== 107 && 0 < f4.length && (r4 = 1, f4 += "\0");
          0 < A4 * Y3 && H3(0, f4, c4, d4, D3, z4, p5.length, h4, a, h4);
          z4 = 1;
          D3++;
          break;
        case 59:
        case 125:
          if (b4 + n4 + v4 + m4 === 0) {
            z4++;
            break;
          }
        default:
          z4++;
          y5 = e4.charAt(l4);
          switch (g4) {
            case 9:
            case 32:
              if (n4 + m4 + b4 === 0)
                switch (x3) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y5 = "";
                    break;
                  default:
                    g4 !== 32 && (y5 = " ");
                }
              break;
            case 0:
              y5 = "\\0";
              break;
            case 12:
              y5 = "\\f";
              break;
            case 11:
              y5 = "\\v";
              break;
            case 38:
              n4 + b4 + m4 === 0 && (r4 = I3 = 1, y5 = "\f" + y5);
              break;
            case 108:
              if (n4 + b4 + m4 + E2 === 0 && 0 < u2)
                switch (l4 - u2) {
                  case 2:
                    x3 === 112 && e4.charCodeAt(l4 - 3) === 58 && (E2 = x3);
                  case 8:
                    K2 === 111 && (E2 = K2);
                }
              break;
            case 58:
              n4 + b4 + m4 === 0 && (u2 = l4);
              break;
            case 44:
              b4 + v4 + n4 + m4 === 0 && (r4 = 1, y5 += "\r");
              break;
            case 34:
            case 39:
              b4 === 0 && (n4 = n4 === g4 ? 0 : n4 === 0 ? g4 : n4);
              break;
            case 91:
              n4 + b4 + v4 === 0 && m4++;
              break;
            case 93:
              n4 + b4 + v4 === 0 && m4--;
              break;
            case 41:
              n4 + b4 + m4 === 0 && v4--;
              break;
            case 40:
              if (n4 + b4 + m4 === 0) {
                if (q4 === 0)
                  switch (2 * x3 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q4 = 1;
                  }
                v4++;
              }
              break;
            case 64:
              b4 + v4 + n4 + m4 + u2 + k4 === 0 && (k4 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n4 + m4 + v4))
                switch (b4) {
                  case 0:
                    switch (2 * g4 + 3 * e4.charCodeAt(l4 + 1)) {
                      case 235:
                        b4 = 47;
                        break;
                      case 220:
                        t3 = l4, b4 = 42;
                    }
                    break;
                  case 42:
                    g4 === 47 && x3 === 42 && t3 + 2 !== l4 && (e4.charCodeAt(t3 + 2) === 33 && (p5 += e4.substring(t3, l4 + 1)), y5 = "", b4 = 0);
                }
          }
          b4 === 0 && (f4 += y5);
      }
      K2 = x3;
      x3 = g4;
      l4++;
    }
    t3 = p5.length;
    if (0 < t3) {
      r4 = c4;
      if (0 < A4 && (C2 = H3(2, p5, r4, d4, D3, z4, t3, h4, a, h4), C2 !== void 0 && (p5 = C2).length === 0))
        return G4 + p5 + F4;
      p5 = r4.join(",") + "{" + p5 + "}";
      if (w5 * E2 !== 0) {
        w5 !== 2 || L2(p5, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p5 = p5.replace(ha2, ":-moz-$1") + p5;
            break;
          case 112:
            p5 = p5.replace(Q2, "::-webkit-input-$1") + p5.replace(Q2, "::-moz-$1") + p5.replace(Q2, ":-ms-input-$1") + p5;
        }
        E2 = 0;
      }
    }
    return G4 + p5 + F4;
  }
  function X3(d4, c4, e4) {
    var h4 = c4.trim().split(ia2);
    c4 = h4;
    var a = h4.length, m4 = d4.length;
    switch (m4) {
      case 0:
      case 1:
        var b4 = 0;
        for (d4 = m4 === 0 ? "" : d4[0] + " "; b4 < a; ++b4) {
          c4[b4] = Z3(d4, c4[b4], e4).trim();
        }
        break;
      default:
        var v4 = b4 = 0;
        for (c4 = []; b4 < a; ++b4) {
          for (var n4 = 0; n4 < m4; ++n4) {
            c4[v4++] = Z3(d4[n4] + " ", h4[b4], e4).trim();
          }
        }
    }
    return c4;
  }
  function Z3(d4, c4, e4) {
    var h4 = c4.charCodeAt(0);
    33 > h4 && (h4 = (c4 = c4.trim()).charCodeAt(0));
    switch (h4) {
      case 38:
        return c4.replace(F3, "$1" + d4.trim());
      case 58:
        return d4.trim() + c4.replace(F3, "$1" + d4.trim());
      default:
        if (0 < 1 * e4 && 0 < c4.indexOf("\f"))
          return c4.replace(F3, (d4.charCodeAt(0) === 58 ? "" : "$1") + d4.trim());
    }
    return d4 + c4;
  }
  function P3(d4, c4, e4, h4) {
    var a = d4 + ";", m4 = 2 * c4 + 3 * e4 + 4 * h4;
    if (m4 === 944) {
      d4 = a.indexOf(":", 9) + 1;
      var b4 = a.substring(d4, a.length - 1).trim();
      b4 = a.substring(0, d4).trim() + b4 + ";";
      return w5 === 1 || w5 === 2 && L2(b4, 1) ? "-webkit-" + b4 + b4 : b4;
    }
    if (w5 === 0 || w5 === 2 && !L2(a, 1))
      return a;
    switch (m4) {
      case 1015:
        return a.charCodeAt(10) === 97 ? "-webkit-" + a + a : a;
      case 951:
        return a.charCodeAt(3) === 116 ? "-webkit-" + a + a : a;
      case 963:
        return a.charCodeAt(5) === 110 ? "-webkit-" + a + a : a;
      case 1009:
        if (a.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a + a;
      case 978:
        return "-webkit-" + a + "-moz-" + a + a;
      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
      case 883:
        if (a.charCodeAt(8) === 45)
          return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11))
          return a.replace(ja2, "$1-webkit-$2") + a;
        break;
      case 932:
        if (a.charCodeAt(4) === 45)
          switch (a.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
            case 115:
              return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
            case 98:
              return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
          }
        return "-webkit-" + a + "-ms-" + a + a;
      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;
      case 1023:
        if (a.charCodeAt(8) !== 99)
          break;
        b4 = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b4 + "-webkit-" + a + "-ms-flex-pack" + b4 + a;
      case 1005:
        return ka2.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;
      case 1e3:
        b4 = a.substring(13).trim();
        c4 = b4.indexOf("-") + 1;
        switch (b4.charCodeAt(0) + b4.charCodeAt(c4)) {
          case 226:
            b4 = a.replace(G3, "tb");
            break;
          case 232:
            b4 = a.replace(G3, "tb-rl");
            break;
          case 220:
            b4 = a.replace(G3, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + b4 + a;
      case 1017:
        if (a.indexOf("sticky", 9) === -1)
          break;
      case 975:
        c4 = (a = d4).length - 10;
        b4 = (a.charCodeAt(c4) === 33 ? a.substring(0, c4) : a).substring(d4.indexOf(":", 7) + 1).trim();
        switch (m4 = b4.charCodeAt(0) + (b4.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b4.charCodeAt(8))
              break;
          case 115:
            a = a.replace(b4, "-webkit-" + b4) + ";" + a;
            break;
          case 207:
          case 102:
            a = a.replace(b4, "-webkit-" + (102 < m4 ? "inline-" : "") + "box") + ";" + a.replace(b4, "-webkit-" + b4) + ";" + a.replace(b4, "-ms-" + b4 + "box") + ";" + a;
        }
        return a + ";";
      case 938:
        if (a.charCodeAt(5) === 45)
          switch (a.charCodeAt(6)) {
            case 105:
              return b4 = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b4 + "-ms-flex-" + b4 + a;
            case 115:
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba2, "") + a;
            default:
              return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba2, "") + a;
          }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (la2.test(d4) === true)
          return (b4 = d4.substring(d4.indexOf(":") + 1)).charCodeAt(0) === 115 ? P3(d4.replace("stretch", "fill-available"), c4, e4, h4).replace(":fill-available", ":stretch") : a.replace(b4, "-webkit-" + b4) + a.replace(b4, "-moz-" + b4.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, e4 + h4 === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10))
          return a.substring(0, a.indexOf(";", 27) + 1).replace(ma2, "$1-webkit-$2") + a;
    }
    return a;
  }
  function L2(d4, c4) {
    var e4 = d4.indexOf(c4 === 1 ? ":" : "{"), h4 = d4.substring(0, c4 !== 3 ? e4 : 10);
    e4 = d4.substring(e4 + 1, d4.length - 1);
    return R2(c4 !== 2 ? h4 : h4.replace(na2, "$1"), e4, c4);
  }
  function ea2(d4, c4) {
    var e4 = P3(c4, c4.charCodeAt(0), c4.charCodeAt(1), c4.charCodeAt(2));
    return e4 !== c4 + ";" ? e4.replace(oa2, " or ($1)").substring(4) : "(" + c4 + ")";
  }
  function H3(d4, c4, e4, h4, a, m4, b4, v4, n4, q4) {
    for (var g4 = 0, x3 = c4, w6; g4 < A4; ++g4) {
      switch (w6 = S3[g4].call(B3, d4, x3, e4, h4, a, m4, b4, v4, n4, q4)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x3 = w6;
      }
    }
    if (x3 !== c4)
      return x3;
  }
  function T3(d4) {
    switch (d4) {
      case void 0:
      case null:
        A4 = S3.length = 0;
        break;
      default:
        if (typeof d4 === "function")
          S3[A4++] = d4;
        else if (typeof d4 === "object")
          for (var c4 = 0, e4 = d4.length; c4 < e4; ++c4) {
            T3(d4[c4]);
          }
        else
          Y3 = !!d4 | 0;
    }
    return T3;
  }
  function U3(d4) {
    d4 = d4.prefix;
    d4 !== void 0 && (R2 = null, d4 ? typeof d4 !== "function" ? w5 = 1 : (w5 = 2, R2 = d4) : w5 = 0);
    return U3;
  }
  function B3(d4, c4) {
    var e4 = d4;
    33 > e4.charCodeAt(0) && (e4 = e4.trim());
    V3 = e4;
    e4 = [V3];
    if (0 < A4) {
      var h4 = H3(-1, c4, e4, e4, D3, z4, 0, 0, 0, 0);
      h4 !== void 0 && typeof h4 === "string" && (c4 = h4);
    }
    var a = M3(O3, e4, c4, 0, 0);
    0 < A4 && (h4 = H3(-2, a, e4, e4, D3, z4, a.length, 0, 0, 0), h4 !== void 0 && (a = h4));
    V3 = "";
    E2 = 0;
    z4 = D3 = 1;
    return a;
  }
  var ca2 = /^\0+/g, N3 = /[\0\r\f]/g, aa = /: */g, ka2 = /zoo|gra/, ma2 = /([,: ])(transform)/g, ia2 = /,\r+?/g, F3 = /([\t\r\n ])*\f?&/g, fa2 = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha2 = /:(read-only)/g, G3 = /[svh]\w+-[tblr]{2}/, da2 = /\(\s*(.*)\s*\)/g, oa2 = /([\s\S]*?);/g, ba2 = /-self|flex-/g, na2 = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la2 = /stretch|:\s*\w+\-(?:conte|avail)/, ja2 = /([^-])(image-set\()/, z4 = 1, D3 = 1, E2 = 0, w5 = 1, O3 = [], S3 = [], A4 = 0, R2 = null, Y3 = 0, V3 = "";
  B3.use = T3;
  B3.set = U3;
  W3 !== void 0 && U3(W3);
  return B3;
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index2 = memoize(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
function v$1() {
  return (v$1 = Object.assign || function(e4) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n4 = arguments[t3];
      for (var r4 in n4)
        Object.prototype.hasOwnProperty.call(n4, r4) && (e4[r4] = n4[r4]);
    }
    return e4;
  }).apply(this, arguments);
}
var g$1 = function(e4, t3) {
  for (var n4 = [e4[0]], r4 = 0, o = t3.length; r4 < o; r4 += 1)
    n4.push(t3[r4], e4[r4 + 1]);
  return n4;
};
var S2 = function(t3) {
  return t3 !== null && typeof t3 == "object" && (t3.toString ? t3.toString() : Object.prototype.toString.call(t3)) === "[object Object]" && !reactIs3.typeOf(t3);
};
var w$1 = Object.freeze([]);
var E$1 = Object.freeze({});
function b$1(e4) {
  return typeof e4 == "function";
}
function _(e4) {
  return e4.displayName || e4.name || "Component";
}
function N2(e4) {
  return e4 && typeof e4.styledComponentId == "string";
}
var A$1 = typeof process != "undefined" && process.env.SC_ATTR || "data-styled";
var I$1 = typeof window != "undefined" && "HTMLElement" in window;
var P2 = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY : false);
var O2 = {};
function j(e4) {
  for (var t3 = arguments.length, n4 = new Array(t3 > 1 ? t3 - 1 : 0), r4 = 1; r4 < t3; r4++)
    n4[r4 - 1] = arguments[r4];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e4 + " for more information." + (n4.length > 0 ? " Args: " + n4.join(", ") : ""));
}
var T2 = function() {
  function e4(e5) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e5;
  }
  var t3 = e4.prototype;
  return t3.indexOfGroup = function(e5) {
    for (var t4 = 0, n4 = 0; n4 < e5; n4++)
      t4 += this.groupSizes[n4];
    return t4;
  }, t3.insertRules = function(e5, t4) {
    if (e5 >= this.groupSizes.length) {
      for (var n4 = this.groupSizes, r4 = n4.length, o = r4; e5 >= o; )
        (o <<= 1) < 0 && j(16, "" + e5);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n4), this.length = o;
      for (var i = r4; i < o; i++)
        this.groupSizes[i] = 0;
    }
    for (var s = this.indexOfGroup(e5 + 1), a = 0, c4 = t4.length; a < c4; a++)
      this.tag.insertRule(s, t4[a]) && (this.groupSizes[e5]++, s++);
  }, t3.clearGroup = function(e5) {
    if (e5 < this.length) {
      var t4 = this.groupSizes[e5], n4 = this.indexOfGroup(e5), r4 = n4 + t4;
      this.groupSizes[e5] = 0;
      for (var o = n4; o < r4; o++)
        this.tag.deleteRule(n4);
    }
  }, t3.getGroup = function(e5) {
    var t4 = "";
    if (e5 >= this.length || this.groupSizes[e5] === 0)
      return t4;
    for (var n4 = this.groupSizes[e5], r4 = this.indexOfGroup(e5), o = r4 + n4, i = r4; i < o; i++)
      t4 += this.tag.getRule(i) + "/*!sc*/\n";
    return t4;
  }, e4;
}();
var k$1 = new Map();
var x$1 = new Map();
var V2 = 1;
var B$1 = function(e4) {
  if (k$1.has(e4))
    return k$1.get(e4);
  for (; x$1.has(V2); )
    V2++;
  var t3 = V2++;
  return k$1.set(e4, t3), x$1.set(t3, e4), t3;
};
var M2 = function(e4) {
  return x$1.get(e4);
};
var z$1 = function(e4, t3) {
  k$1.set(e4, t3), x$1.set(t3, e4);
};
var L = "style[" + A$1 + '][data-styled-version="5.3.0"]';
var G$1 = new RegExp("^" + A$1 + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var F$1 = function(e4, t3, n4) {
  for (var r4, o = n4.split(","), i = 0, s = o.length; i < s; i++)
    (r4 = o[i]) && e4.registerName(t3, r4);
};
var Y2 = function(e4, t3) {
  for (var n4 = t3.innerHTML.split("/*!sc*/\n"), r4 = [], o = 0, i = n4.length; o < i; o++) {
    var s = n4[o].trim();
    if (s) {
      var a = s.match(G$1);
      if (a) {
        var c4 = 0 | parseInt(a[1], 10), u2 = a[2];
        c4 !== 0 && (z$1(u2, c4), F$1(e4, u2, a[3]), e4.getTag().insertRules(c4, r4)), r4.length = 0;
      } else
        r4.push(s);
    }
  }
};
var q$1 = function() {
  return typeof window != "undefined" && window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null;
};
var H$1 = function(e4) {
  var t3 = document.head, n4 = e4 || t3, r4 = document.createElement("style"), o = function(e5) {
    for (var t4 = e5.childNodes, n5 = t4.length; n5 >= 0; n5--) {
      var r5 = t4[n5];
      if (r5 && r5.nodeType === 1 && r5.hasAttribute(A$1))
        return r5;
    }
  }(n4), i = o !== void 0 ? o.nextSibling : null;
  r4.setAttribute(A$1, "active"), r4.setAttribute("data-styled-version", "5.3.0");
  var s = q$1();
  return s && r4.setAttribute("nonce", s), n4.insertBefore(r4, i), r4;
};
var $ = function() {
  function e4(e5) {
    var t4 = this.element = H$1(e5);
    t4.appendChild(document.createTextNode("")), this.sheet = function(e6) {
      if (e6.sheet)
        return e6.sheet;
      for (var t5 = document.styleSheets, n4 = 0, r4 = t5.length; n4 < r4; n4++) {
        var o = t5[n4];
        if (o.ownerNode === e6)
          return o;
      }
      j(17);
    }(t4), this.length = 0;
  }
  var t3 = e4.prototype;
  return t3.insertRule = function(e5, t4) {
    try {
      return this.sheet.insertRule(t4, e5), this.length++, true;
    } catch (e6) {
      return false;
    }
  }, t3.deleteRule = function(e5) {
    this.sheet.deleteRule(e5), this.length--;
  }, t3.getRule = function(e5) {
    var t4 = this.sheet.cssRules[e5];
    return t4 !== void 0 && typeof t4.cssText == "string" ? t4.cssText : "";
  }, e4;
}();
var W2 = function() {
  function e4(e5) {
    var t4 = this.element = H$1(e5);
    this.nodes = t4.childNodes, this.length = 0;
  }
  var t3 = e4.prototype;
  return t3.insertRule = function(e5, t4) {
    if (e5 <= this.length && e5 >= 0) {
      var n4 = document.createTextNode(t4), r4 = this.nodes[e5];
      return this.element.insertBefore(n4, r4 || null), this.length++, true;
    }
    return false;
  }, t3.deleteRule = function(e5) {
    this.element.removeChild(this.nodes[e5]), this.length--;
  }, t3.getRule = function(e5) {
    return e5 < this.length ? this.nodes[e5].textContent : "";
  }, e4;
}();
var U2 = function() {
  function e4(e5) {
    this.rules = [], this.length = 0;
  }
  var t3 = e4.prototype;
  return t3.insertRule = function(e5, t4) {
    return e5 <= this.length && (this.rules.splice(e5, 0, t4), this.length++, true);
  }, t3.deleteRule = function(e5) {
    this.rules.splice(e5, 1), this.length--;
  }, t3.getRule = function(e5) {
    return e5 < this.length ? this.rules[e5] : "";
  }, e4;
}();
var J = I$1;
var X2 = {isServer: !I$1, useCSSOMInjection: !P2};
var Z2 = function() {
  function e4(e5, t4, n4) {
    e5 === void 0 && (e5 = E$1), t4 === void 0 && (t4 = {}), this.options = v$1({}, X2, {}, e5), this.gs = t4, this.names = new Map(n4), !this.options.isServer && I$1 && J && (J = false, function(e6) {
      for (var t5 = document.querySelectorAll(L), n5 = 0, r4 = t5.length; n5 < r4; n5++) {
        var o = t5[n5];
        o && o.getAttribute(A$1) !== "active" && (Y2(e6, o), o.parentNode && o.parentNode.removeChild(o));
      }
    }(this));
  }
  e4.registerId = function(e5) {
    return B$1(e5);
  };
  var t3 = e4.prototype;
  return t3.reconstructWithOptions = function(t4, n4) {
    return n4 === void 0 && (n4 = true), new e4(v$1({}, this.options, {}, t4), this.gs, n4 && this.names || void 0);
  }, t3.allocateGSInstance = function(e5) {
    return this.gs[e5] = (this.gs[e5] || 0) + 1;
  }, t3.getTag = function() {
    return this.tag || (this.tag = (n4 = (t4 = this.options).isServer, r4 = t4.useCSSOMInjection, o = t4.target, e5 = n4 ? new U2(o) : r4 ? new $(o) : new W2(o), new T2(e5)));
    var e5, t4, n4, r4, o;
  }, t3.hasNameForId = function(e5, t4) {
    return this.names.has(e5) && this.names.get(e5).has(t4);
  }, t3.registerName = function(e5, t4) {
    if (B$1(e5), this.names.has(e5))
      this.names.get(e5).add(t4);
    else {
      var n4 = new Set();
      n4.add(t4), this.names.set(e5, n4);
    }
  }, t3.insertRules = function(e5, t4, n4) {
    this.registerName(e5, t4), this.getTag().insertRules(B$1(e5), n4);
  }, t3.clearNames = function(e5) {
    this.names.has(e5) && this.names.get(e5).clear();
  }, t3.clearRules = function(e5) {
    this.getTag().clearGroup(B$1(e5)), this.clearNames(e5);
  }, t3.clearTag = function() {
    this.tag = void 0;
  }, t3.toString = function() {
    return function(e5) {
      for (var t4 = e5.getTag(), n4 = t4.length, r4 = "", o = 0; o < n4; o++) {
        var i = M2(o);
        if (i !== void 0) {
          var s = e5.names.get(i), a = t4.getGroup(o);
          if (s !== void 0 && a.length !== 0) {
            var c4 = A$1 + ".g" + o + '[id="' + i + '"]', u2 = "";
            s !== void 0 && s.forEach(function(e6) {
              e6.length > 0 && (u2 += e6 + ",");
            }), r4 += "" + a + c4 + '{content:"' + u2 + '"}/*!sc*/\n';
          }
        }
      }
      return r4;
    }(this);
  }, e4;
}();
var K = /(a)(d)/gi;
var Q = function(e4) {
  return String.fromCharCode(e4 + (e4 > 25 ? 39 : 97));
};
function ee2(e4) {
  var t3, n4 = "";
  for (t3 = Math.abs(e4); t3 > 52; t3 = t3 / 52 | 0)
    n4 = Q(t3 % 52) + n4;
  return (Q(t3 % 52) + n4).replace(K, "$1-$2");
}
var te2 = function(e4, t3) {
  for (var n4 = t3.length; n4; )
    e4 = 33 * e4 ^ t3.charCodeAt(--n4);
  return e4;
};
var ne2 = function(e4) {
  return te2(5381, e4);
};
function re2(e4) {
  for (var t3 = 0; t3 < e4.length; t3 += 1) {
    var n4 = e4[t3];
    if (b$1(n4) && !N2(n4))
      return false;
  }
  return true;
}
var oe2 = ne2("5.3.0");
var ie2 = function() {
  function e4(e5, t3, n4) {
    this.rules = e5, this.staticRulesId = "", this.isStatic = (n4 === void 0 || n4.isStatic) && re2(e5), this.componentId = t3, this.baseHash = te2(oe2, t3), this.baseStyle = n4, Z2.registerId(t3);
  }
  return e4.prototype.generateAndInjectStyles = function(e5, t3, n4) {
    var r4 = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e5, t3, n4)), this.isStatic && !n4.hash)
      if (this.staticRulesId && t3.hasNameForId(r4, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var i = Ne2(this.rules, e5, t3, n4).join(""), s = ee2(te2(this.baseHash, i.length) >>> 0);
        if (!t3.hasNameForId(r4, s)) {
          var a = n4(i, "." + s, void 0, r4);
          t3.insertRules(r4, s, a);
        }
        o.push(s), this.staticRulesId = s;
      }
    else {
      for (var c4 = this.rules.length, u2 = te2(this.baseHash, n4.hash), l4 = "", d4 = 0; d4 < c4; d4++) {
        var h4 = this.rules[d4];
        if (typeof h4 == "string")
          l4 += h4, false;
        else if (h4) {
          var p5 = Ne2(h4, e5, t3, n4), f4 = Array.isArray(p5) ? p5.join("") : p5;
          u2 = te2(u2, f4 + d4), l4 += f4;
        }
      }
      if (l4) {
        var m4 = ee2(u2 >>> 0);
        if (!t3.hasNameForId(r4, m4)) {
          var y5 = n4(l4, "." + m4, void 0, r4);
          t3.insertRules(r4, m4, y5);
        }
        o.push(m4);
      }
    }
    return o.join(" ");
  }, e4;
}();
var se2 = /^\s*\/\/.*$/gm;
var ae2 = [":", "[", ".", "#"];
function ce2(e4) {
  var t3, n4, r4, o, i = e4 === void 0 ? E$1 : e4, s = i.options, a = s === void 0 ? E$1 : s, c4 = i.plugins, u2 = c4 === void 0 ? w$1 : c4, l4 = new stylis_min(a), d4 = [], h4 = function(e5) {
    function t4(t5) {
      if (t5)
        try {
          e5(t5 + "}");
        } catch (e6) {
        }
    }
    return function(n5, r5, o2, i2, s2, a2, c5, u3, l5, d5) {
      switch (n5) {
        case 1:
          if (l5 === 0 && r5.charCodeAt(0) === 64)
            return e5(r5 + ";"), "";
          break;
        case 2:
          if (u3 === 0)
            return r5 + "/*|*/";
          break;
        case 3:
          switch (u3) {
            case 102:
            case 112:
              return e5(o2[0] + r5), "";
            default:
              return r5 + (d5 === 0 ? "/*|*/" : "");
          }
        case -2:
          r5.split("/*|*/}").forEach(t4);
      }
    };
  }(function(e5) {
    d4.push(e5);
  }), f4 = function(e5, r5, i2) {
    return r5 === 0 && ae2.indexOf(i2[n4.length]) !== -1 || i2.match(o) ? e5 : "." + t3;
  };
  function m4(e5, i2, s2, a2) {
    a2 === void 0 && (a2 = "&");
    var c5 = e5.replace(se2, ""), u3 = i2 && s2 ? s2 + " " + i2 + " { " + c5 + " }" : c5;
    return t3 = a2, n4 = i2, r4 = new RegExp("\\" + n4 + "\\b", "g"), o = new RegExp("(\\" + n4 + "\\b){2,}"), l4(s2 || !i2 ? "" : i2, u3);
  }
  return l4.use([].concat(u2, [function(e5, t4, o2) {
    e5 === 2 && o2.length && o2[0].lastIndexOf(n4) > 0 && (o2[0] = o2[0].replace(r4, f4));
  }, h4, function(e5) {
    if (e5 === -2) {
      var t4 = d4;
      return d4 = [], t4;
    }
  }])), m4.hash = u2.length ? u2.reduce(function(e5, t4) {
    return t4.name || j(15), te2(e5, t4.name);
  }, 5381).toString() : "", m4;
}
var ue2 = react.createContext();
var le2 = ue2.Consumer;
var de2 = react.createContext();
var he2 = (de2.Consumer, new Z2());
var pe2 = ce2();
function fe2() {
  return react.useContext(ue2) || he2;
}
function me2() {
  return react.useContext(de2) || pe2;
}
var ve2 = function() {
  function e4(e5, t3) {
    var n4 = this;
    this.inject = function(e6, t4) {
      t4 === void 0 && (t4 = pe2);
      var r4 = n4.name + t4.hash;
      e6.hasNameForId(n4.id, r4) || e6.insertRules(n4.id, r4, t4(n4.rules, r4, "@keyframes"));
    }, this.toString = function() {
      return j(12, String(n4.name));
    }, this.name = e5, this.id = "sc-keyframes-" + e5, this.rules = t3;
  }
  return e4.prototype.getName = function(e5) {
    return e5 === void 0 && (e5 = pe2), this.name + e5.hash;
  }, e4;
}();
var ge2 = /([A-Z])/;
var Se2 = /([A-Z])/g;
var we2 = /^ms-/;
var Ee2 = function(e4) {
  return "-" + e4.toLowerCase();
};
function be2(e4) {
  return ge2.test(e4) ? e4.replace(Se2, Ee2).replace(we2, "-ms-") : e4;
}
var _e = function(e4) {
  return e4 == null || e4 === false || e4 === "";
};
function Ne2(e4, n4, r4, o) {
  if (Array.isArray(e4)) {
    for (var i, s = [], a = 0, c4 = e4.length; a < c4; a += 1)
      (i = Ne2(e4[a], n4, r4, o)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (_e(e4))
    return "";
  if (N2(e4))
    return "." + e4.styledComponentId;
  if (b$1(e4)) {
    if (typeof (l4 = e4) != "function" || l4.prototype && l4.prototype.isReactComponent || !n4)
      return e4;
    var u2 = e4(n4);
    return Ne2(u2, n4, r4, o);
  }
  var l4;
  return e4 instanceof ve2 ? r4 ? (e4.inject(r4, o), e4.getName(o)) : e4 : S2(e4) ? function e5(t3, n5) {
    var r5, o2, i2 = [];
    for (var s2 in t3)
      t3.hasOwnProperty(s2) && !_e(t3[s2]) && (S2(t3[s2]) ? i2.push.apply(i2, e5(t3[s2], s2)) : b$1(t3[s2]) ? i2.push(be2(s2) + ":", t3[s2], ";") : i2.push(be2(s2) + ": " + (r5 = s2, (o2 = t3[s2]) == null || typeof o2 == "boolean" || o2 === "" ? "" : typeof o2 != "number" || o2 === 0 || r5 in unitlessKeys ? String(o2).trim() : o2 + "px") + ";"));
    return n5 ? [n5 + " {"].concat(i2, ["}"]) : i2;
  }(e4) : e4.toString();
}
function Ae2(e4) {
  for (var t3 = arguments.length, n4 = new Array(t3 > 1 ? t3 - 1 : 0), r4 = 1; r4 < t3; r4++)
    n4[r4 - 1] = arguments[r4];
  return b$1(e4) || S2(e4) ? Ne2(g$1(w$1, [e4].concat(n4))) : n4.length === 0 && e4.length === 1 && typeof e4[0] == "string" ? e4 : Ne2(g$1(e4, n4));
}
var Oe2 = function(e4, t3, n4) {
  return n4 === void 0 && (n4 = E$1), e4.theme !== n4.theme && e4.theme || t3 || n4.theme;
};
var Re2 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var De2 = /(^-|-$)/g;
function je2(e4) {
  return e4.replace(Re2, "-").replace(De2, "");
}
var Te2 = function(e4) {
  return ee2(ne2(e4) >>> 0);
};
function ke2(e4) {
  return typeof e4 == "string" && true;
}
var xe = function(e4) {
  return typeof e4 == "function" || typeof e4 == "object" && e4 !== null && !Array.isArray(e4);
};
var Ve = function(e4) {
  return e4 !== "__proto__" && e4 !== "constructor" && e4 !== "prototype";
};
function Be2(e4, t3, n4) {
  var r4 = e4[n4];
  xe(t3) && xe(r4) ? Me2(r4, t3) : e4[n4] = t3;
}
function Me2(e4) {
  for (var t3 = arguments.length, n4 = new Array(t3 > 1 ? t3 - 1 : 0), r4 = 1; r4 < t3; r4++)
    n4[r4 - 1] = arguments[r4];
  for (var o = 0, i = n4; o < i.length; o++) {
    var s = i[o];
    if (xe(s))
      for (var a in s)
        Ve(a) && Be2(e4, s[a], a);
  }
  return e4;
}
var ze = react.createContext();
var Le2 = ze.Consumer;
var Fe2 = {};
function Ye2(e4, t3, n4) {
  var o = N2(e4), s = !ke2(e4), a = t3.attrs, c4 = a === void 0 ? w$1 : a, d4 = t3.componentId, h4 = d4 === void 0 ? function(e5, t4) {
    var n5 = typeof e5 != "string" ? "sc" : je2(e5);
    Fe2[n5] = (Fe2[n5] || 0) + 1;
    var r4 = n5 + "-" + Te2("5.3.0" + n5 + Fe2[n5]);
    return t4 ? t4 + "-" + r4 : r4;
  }(t3.displayName, t3.parentComponentId) : d4, p5 = t3.displayName, f4 = p5 === void 0 ? function(e5) {
    return ke2(e5) ? "styled." + e5 : "Styled(" + _(e5) + ")";
  }(e4) : p5, g4 = t3.displayName && t3.componentId ? je2(t3.displayName) + "-" + t3.componentId : t3.componentId || h4, S3 = o && e4.attrs ? Array.prototype.concat(e4.attrs, c4).filter(Boolean) : c4, A4 = t3.shouldForwardProp;
  o && e4.shouldForwardProp && (A4 = t3.shouldForwardProp ? function(n5, r4, o2) {
    return e4.shouldForwardProp(n5, r4, o2) && t3.shouldForwardProp(n5, r4, o2);
  } : e4.shouldForwardProp);
  var C2, I3 = new ie2(n4, g4, o ? e4.componentStyle : void 0), P3 = I3.isStatic && c4.length === 0, O3 = function(e5, t4) {
    return function(e6, t5, n5, r4) {
      var o2 = e6.attrs, s2 = e6.componentStyle, a2 = e6.defaultProps, c5 = e6.foldedComponentIds, d5 = e6.shouldForwardProp, h5 = e6.styledComponentId, p6 = e6.target;
      var f5 = function(e7, t6, n6) {
        e7 === void 0 && (e7 = E$1);
        var r5 = v$1({}, t6, {theme: e7}), o3 = {};
        return n6.forEach(function(e8) {
          var t7, n7, i, s3 = e8;
          for (t7 in b$1(s3) && (s3 = s3(r5)), s3)
            r5[t7] = o3[t7] = t7 === "className" ? (n7 = o3[t7], i = s3[t7], n7 && i ? n7 + " " + i : n7 || i) : s3[t7];
        }), [r5, o3];
      }(Oe2(t5, react.useContext(ze), a2) || E$1, t5, o2), y5 = f5[0], g5 = f5[1], S4 = function(e7, t6, n6, r5) {
        var o3 = fe2(), i = me2(), s3 = t6 ? e7.generateAndInjectStyles(E$1, o3, i) : e7.generateAndInjectStyles(n6, o3, i);
        return s3;
      }(s2, r4, y5), w5 = n5, _2 = g5.$as || t5.$as || g5.as || t5.as || p6, N3 = ke2(_2), A5 = g5 !== t5 ? v$1({}, t5, {}, g5) : t5, C3 = {};
      for (var I4 in A5)
        I4[0] !== "$" && I4 !== "as" && (I4 === "forwardedAs" ? C3.as = A5[I4] : (d5 ? d5(I4, index2, _2) : !N3 || index2(I4)) && (C3[I4] = A5[I4]));
      return t5.style && g5.style !== t5.style && (C3.style = v$1({}, t5.style, {}, g5.style)), C3.className = Array.prototype.concat(c5, h5, S4 !== h5 ? S4 : null, t5.className, g5.className).filter(Boolean).join(" "), C3.ref = w5, react.createElement(_2, C3);
    }(C2, e5, t4, P3);
  };
  return O3.displayName = f4, (C2 = react.forwardRef(O3)).attrs = S3, C2.componentStyle = I3, C2.displayName = f4, C2.shouldForwardProp = A4, C2.foldedComponentIds = o ? Array.prototype.concat(e4.foldedComponentIds, e4.styledComponentId) : w$1, C2.styledComponentId = g4, C2.target = o ? e4.target : e4, C2.withComponent = function(e5) {
    var r4 = t3.componentId, o2 = function(e6, t4) {
      if (e6 == null)
        return {};
      var n5, r5, o3 = {}, i2 = Object.keys(e6);
      for (r5 = 0; r5 < i2.length; r5++)
        n5 = i2[r5], t4.indexOf(n5) >= 0 || (o3[n5] = e6[n5]);
      return o3;
    }(t3, ["componentId"]), i = r4 && r4 + "-" + (ke2(e5) ? e5 : je2(_(e5)));
    return Ye2(e5, v$1({}, o2, {attrs: S3, componentId: i}), n4);
  }, Object.defineProperty(C2, "defaultProps", {get: function() {
    return this._foldedDefaultProps;
  }, set: function(t4) {
    this._foldedDefaultProps = o ? Me2({}, e4.defaultProps, t4) : t4;
  }}), C2.toString = function() {
    return "." + C2.styledComponentId;
  }, s && hoistNonReactStatics_cjs(C2, e4, {attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true}), C2;
}
var qe2 = function(e4) {
  return function e5(t3, r4, o) {
    if (o === void 0 && (o = E$1), !reactIs3.isValidElementType(r4))
      return j(1, String(r4));
    var i = function() {
      return t3(r4, o, Ae2.apply(void 0, arguments));
    };
    return i.withConfig = function(n4) {
      return e5(t3, r4, v$1({}, o, {}, n4));
    }, i.attrs = function(n4) {
      return e5(t3, r4, v$1({}, o, {attrs: Array.prototype.concat(o.attrs, n4).filter(Boolean)}));
    }, i;
  }(Ye2, e4);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e4) {
  qe2[e4] = qe2(e4);
});
var He2 = function() {
  function e4(e5, t4) {
    this.rules = e5, this.componentId = t4, this.isStatic = re2(e5), Z2.registerId(this.componentId + 1);
  }
  var t3 = e4.prototype;
  return t3.createStyles = function(e5, t4, n4, r4) {
    var o = r4(Ne2(this.rules, t4, n4, r4).join(""), ""), i = this.componentId + e5;
    n4.insertRules(i, i, o);
  }, t3.removeStyles = function(e5, t4) {
    t4.clearRules(this.componentId + e5);
  }, t3.renderStyles = function(e5, t4, n4, r4) {
    e5 > 2 && Z2.registerId(this.componentId + e5), this.removeStyles(e5, n4), this.createStyles(e5, t4, n4, r4);
  }, e4;
}();
function $e2(e4) {
  for (var t3 = arguments.length, n4 = new Array(t3 > 1 ? t3 - 1 : 0), o = 1; o < t3; o++)
    n4[o - 1] = arguments[o];
  var s = Ae2.apply(void 0, [e4].concat(n4)), a = "sc-global-" + Te2(JSON.stringify(s)), u2 = new He2(s, a);
  function l4(e5) {
    var t4 = fe2(), n5 = me2(), o2 = react.useContext(ze), l5 = react.useRef(t4.allocateGSInstance(a)).current;
    return react.useLayoutEffect(function() {
      return h4(l5, e5, t4, o2, n5), function() {
        return u2.removeStyles(l5, t4);
      };
    }, [l5, e5, t4, o2, n5]), null;
  }
  function h4(e5, t4, n5, r4, o2) {
    if (u2.isStatic)
      u2.renderStyles(e5, O2, n5, o2);
    else {
      var i = v$1({}, t4, {theme: Oe2(t4, r4, l4.defaultProps)});
      u2.renderStyles(e5, i, n5, o2);
    }
  }
  return react.memo(l4);
}
var styled_components_default = qe2;

// build/dist/components/Header.js
var colors = {
  font: "#fff"
};
var Container = styled_components_default.header`
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    color: ${colors.font};
    height: 3.5em;
    font-size: 16px;
    display: flex;
    position: fixed;
`;
var Title = styled_components_default.h1`
    margin: 0;
    margin-left: 1em;
    padding-top: auto;
    font-size: 2em;
    align-self: center;

    & > a:visited, a:link {
        text-decoration: none;
        color: ${colors.font};
    }
`;
var Spacer = styled_components_default.div`
    margin: 0;
    flex-grow: 1;
    height: 1px;
`;
var NavLink2 = styled_components_default(Link)`
    color: ${colors.font};
    font-size: 1.15em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    align-self: center;
    width: 4em;
    text-align: center;
    padding-bottom: 6px;

    &:visited,
    &:link {
        text-decoration: none;
        color: ${colors.font};
    }

    &:after {
        display: block;
        content: '';
        border-bottom: 1px solid white;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }

    &:hover:after {
        transform: scaleX(1);
    }
`;
var Header = class extends Component {
  render() {
    return /* @__PURE__ */ react.createElement(Container, null, /* @__PURE__ */ react.createElement(Title, null, /* @__PURE__ */ react.createElement(Link, {
      to: "/"
    }, "~")), /* @__PURE__ */ react.createElement(Spacer, null), /* @__PURE__ */ react.createElement(NavLink2, {
      to: "/projects"
    }, "Projects"), /* @__PURE__ */ react.createElement(NavLink2, {
      to: "/posts"
    }, "Posts"), /* @__PURE__ */ react.createElement(NavLink2, {
      to: "/about"
    }, "About"));
  }
};
var Header_default = Header;

// build/dist/components/Card.js
var Container2 = styled_components_default.div`
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding-left: 2em;
    padding-right: 2em;
`;
function Card(props) {
  return /* @__PURE__ */ react.createElement(Container2, {
    className: props.className
  }, props.children);
}
var Card_default = Card;

// build/_snowpack/pkg/@fortawesome/react-fontawesome.js
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e2 = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e2 = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e2;
    }
  }
  return _arr;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
var noop3 = function noop4() {
};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop3,
  measure: noop3
};
try {
  if (typeof window !== "undefined")
    _WINDOW = window;
  if (typeof document !== "undefined")
    _DOCUMENT = document;
  if (typeof MutationObserver !== "undefined")
    _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== "undefined")
    _PERFORMANCE = performance;
} catch (e4) {
}
var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var DEFAULT_FAMILY_PREFIX = "fa";
var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var DATA_FA_I2SVG = "data-fa-i2svg";
var PRODUCTION = function() {
  try {
    return true;
  } catch (e4) {
    return false;
  }
}();
var DUOTONE_CLASSES = {
  GROUP: "group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector("script[" + attr + "]");
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  if (val === "")
    return true;
  if (val === "false")
    return false;
  if (val === "true")
    return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
  attrs = [["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  attrs.forEach(function(_ref2) {
    var _ref22 = _slicedToArray(_ref2, 2), attr = _ref22[0], key = _ref22[1];
    var val = coerce(getAttrConfig(attr));
    if (val !== void 0 && val !== null) {
      initial[key] = val;
    }
  });
}
var attrs;
var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
var _config = _objectSpread({}, _default, initial);
if (!_config.autoReplaceSvg)
  _config.observeMutations = false;
var config2 = _objectSpread({}, _config);
WINDOW.FontAwesomeConfig = config2;
var w4 = WINDOW || {};
if (!w4[NAMESPACE_IDENTIFIER])
  w4[NAMESPACE_IDENTIFIER] = {};
if (!w4[NAMESPACE_IDENTIFIER].styles)
  w4[NAMESPACE_IDENTIFIER].styles = {};
if (!w4[NAMESPACE_IDENTIFIER].hooks)
  w4[NAMESPACE_IDENTIFIER].hooks = {};
if (!w4[NAMESPACE_IDENTIFIER].shims)
  w4[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w4[NAMESPACE_IDENTIFIER];
var functions = [];
var listener = function listener2() {
  DOCUMENT.removeEventListener("DOMContentLoaded", listener2);
  loaded = 1;
  functions.map(function(fn) {
    return fn();
  });
};
var loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded)
    DOCUMENT.addEventListener("DOMContentLoaded", listener);
}
var isNode = typeof global !== "undefined" && typeof global.process !== "undefined" && typeof global.process.emit === "function";
var asyncSetTimer = typeof setImmediate === "undefined" ? setTimeout : setImmediate;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  var style = DOCUMENT.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css2;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;
  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css2;
}
var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId() {
  var size = 12;
  var id2 = "";
  while (size-- > 0) {
    id2 += idPool[Math.random() * 62 | 0];
  }
  return id2;
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
  }, "").trim();
}
function joinStyles(styles2) {
  return Object.keys(styles2 || {}).reduce(function(acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles2[styleName], ";");
  }, "");
}
function transformIsMeaningful(transform2) {
  return transform2.size !== meaninglessTransform.size || transform2.x !== meaninglessTransform.x || transform2.y !== meaninglessTransform.y || transform2.rotate !== meaninglessTransform.rotate || transform2.flipX || transform2.flipY;
}
function transformForSvg(_ref2) {
  var transform2 = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform2.x * 32, ", ").concat(transform2.y * 32, ") ");
  var innerScale = "scale(".concat(transform2.size / 16 * (transform2.flipX ? -1 : 1), ", ").concat(transform2.size / 16 * (transform2.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform2.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = "black";
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === "g") {
    return abstract.children;
  } else {
    return [abstract];
  }
}
function makeIconMasking(_ref2) {
  var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform2 = _ref2.transform;
  var mainWidth = main.width, mainPath = main.icon;
  var maskWidth = mask.width, maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform2,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: "rect",
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: "white"
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: "g",
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: "g",
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: "mask",
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: "userSpaceOnUse",
      maskContentUnits: "userSpaceOnUse"
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: "defs",
    children: [{
      tag: "clipPath",
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: "rect",
    attributes: _objectSpread({
      fill: "currentColor",
      "clip-path": "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children,
    attributes
  };
}
function makeIconStandard(_ref2) {
  var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, transform2 = _ref2.transform, styles2 = _ref2.styles;
  var styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  if (transformIsMeaningful(transform2)) {
    var trans = transformForSvg({
      transform: transform2,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: "g",
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: "g",
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }
  return {
    children,
    attributes
  };
}
function asIcon(_ref2) {
  var children = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform2 = _ref2.transform;
  if (transformIsMeaningful(transform2) && main.found && !mask.found) {
    var width = main.width, height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(_objectSpread({}, styles2, {
      "transform-origin": "".concat(offset.x + transform2.x / 16, "em ").concat(offset.y + transform2.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes,
    children
  }];
}
function asSymbol(_ref2) {
  var prefix2 = _ref2.prefix, iconName = _ref2.iconName, children = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol;
  var id2 = symbol === true ? "".concat(prefix2, "-").concat(config2.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: _objectSpread({}, attributes, {
        id: id2
      }),
      children
    }]
  }];
}
function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix2 = params.prefix, iconName = params.iconName, transform2 = params.transform, symbol = params.symbol, title2 = params.title, maskId = params.maskId, titleId = params.titleId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
  var _ref2 = mask.found ? mask : main, width = _ref2.width, height = _ref2.height;
  var isUploadedIcon = prefix2 === "fak";
  var widthClass = isUploadedIcon ? "" : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config2.replacementClass, iconName ? "".concat(config2.familyPrefix, "-").concat(iconName) : "", widthClass].filter(function(c4) {
    return extra.classes.indexOf(c4) === -1;
  }).filter(function(c4) {
    return c4 !== "" || !!c4;
  }).concat(extra.classes).join(" ");
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      "data-prefix": prefix2,
      "data-icon": iconName,
      class: attrClass,
      role: extra.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  if (title2)
    content.children.push({
      tag: "title",
      attributes: {
        id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title2]
    });
  var args = _objectSpread({}, content, {
    prefix: prefix2,
    iconName,
    main,
    mask,
    maskId,
    transform: transform2,
    symbol,
    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
  });
  var _ref22 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args), children = _ref22.children, attributes = _ref22.attributes;
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
var noop$1 = function noop5() {
};
var p4 = config2.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var bindInternal4 = function bindInternal42(func, thisContext) {
  return function(a, b4, c4, d4) {
    return func.call(thisContext, a, b4, c4, d4);
  };
};
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
  if (initialValue === void 0) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};
function defineIcons(prefix2, icons) {
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function(acc, iconName) {
    var icon2 = icons[iconName];
    var expanded = !!icon2.icon;
    if (expanded) {
      acc[icon2.iconName] = icon2.icon;
    } else {
      acc[iconName] = icon2;
    }
    return acc;
  }, {});
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix2, normalized);
  } else {
    namespace.styles[prefix2] = _objectSpread({}, namespace.styles[prefix2] || {}, normalized);
  }
  if (prefix2 === "fas") {
    defineIcons("fa", icons);
  }
}
var styles = namespace.styles;
var shims = namespace.shims;
var build = function build2() {
  var lookup = function lookup2(reducer) {
    return reduce(styles, function(o, style, prefix2) {
      o[prefix2] = reduce(style, reducer, {});
      return o;
    }, {});
  };
  lookup(function(acc, icon2, iconName) {
    if (icon2[3]) {
      acc[icon2[3]] = iconName;
    }
    return acc;
  });
  lookup(function(acc, icon2, iconName) {
    var ligatures = icon2[2];
    acc[iconName] = iconName;
    ligatures.forEach(function(ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = "far" in styles;
  reduce(shims, function(acc, shim) {
    var oldName = shim[0];
    var prefix2 = shim[1];
    var iconName = shim[2];
    if (prefix2 === "far" && !hasRegular) {
      prefix2 = "fas";
    }
    acc[oldName] = {
      prefix: prefix2,
      iconName
    };
    return acc;
  }, {});
};
build();
var styles$1 = namespace.styles;
function iconFromMapping(mapping, prefix2, iconName) {
  if (mapping && mapping[prefix2] && mapping[prefix2][iconName]) {
    return {
      prefix: prefix2,
      iconName,
      icon: mapping[prefix2][iconName]
    };
  }
}
function toHtml(abstractNodes) {
  var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
  }
}
var parseTransformString = function parseTransformString2(transformString) {
  var transform2 = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  if (!transformString) {
    return transform2;
  } else {
    return transformString.toLowerCase().split(" ").reduce(function(acc, n4) {
      var parts = n4.toLowerCase().split("-");
      var first = parts[0];
      var rest = parts.slice(1).join("-");
      if (first && rest === "h") {
        acc.flipX = true;
        return acc;
      }
      if (first && rest === "v") {
        acc.flipY = true;
        return acc;
      }
      rest = parseFloat(rest);
      if (isNaN(rest)) {
        return acc;
      }
      switch (first) {
        case "grow":
          acc.size = acc.size + rest;
          break;
        case "shrink":
          acc.size = acc.size - rest;
          break;
        case "left":
          acc.x = acc.x - rest;
          break;
        case "right":
          acc.x = acc.x + rest;
          break;
        case "up":
          acc.y = acc.y - rest;
          break;
        case "down":
          acc.y = acc.y + rest;
          break;
        case "rotate":
          acc.rotate = acc.rotate + rest;
          break;
      }
      return acc;
    }, transform2);
  }
};
function MissingIcon(error) {
  this.name = "MissingIcon";
  this.message = error || "Icon unavailable";
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;
var FILL = {
  fill: "currentColor"
};
var ANIMATION_BASE = {
  attributeType: "XML",
  repeatCount: "indefinite",
  dur: "2s"
};
var RING = {
  tag: "path",
  attributes: _objectSpread({}, FILL, {
    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
  })
};
var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: "opacity"
});
var DOT = {
  tag: "circle",
  attributes: _objectSpread({}, FILL, {
    cx: "256",
    cy: "364",
    r: "28"
  }),
  children: [{
    tag: "animate",
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: "r",
      values: "28;14;28;28;14;28;"
    })
  }, {
    tag: "animate",
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: "1;0;1;1;0;1;"
    })
  }]
};
var QUESTION = {
  tag: "path",
  attributes: _objectSpread({}, FILL, {
    opacity: "1",
    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
  }),
  children: [{
    tag: "animate",
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: "1;0;0;0;0;1;"
    })
  }]
};
var EXCLAMATION = {
  tag: "path",
  attributes: _objectSpread({}, FILL, {
    opacity: "0",
    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
  }),
  children: [{
    tag: "animate",
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: "0;0;1;1;0;0;"
    })
  }]
};
var styles$2 = namespace.styles;
function asFoundIcon(icon2) {
  var width = icon2[0];
  var height = icon2[1];
  var _icon$slice = icon2.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
  var element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: "g",
      attributes: {
        class: "".concat(config2.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(config2.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: "currentColor",
          d: vectorData[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(config2.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: "currentColor",
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
var styles$3 = namespace.styles;
var baseStyles = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
function css() {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config2.familyPrefix;
  var rc2 = config2.replacementClass;
  var s = baseStyles;
  if (fp !== dfp || rc2 !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), "g");
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), "g");
    var rPatt = new RegExp("\\.".concat(drc), "g");
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc2));
  }
  return s;
}
var Library = /* @__PURE__ */ function() {
  function Library2() {
    _classCallCheck(this, Library2);
    this.definitions = {};
  }
  _createClass(Library2, [{
    key: "add",
    value: function add() {
      var _this = this;
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function(key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function(key) {
        var _normalized$key = normalized[key], prefix2 = _normalized$key.prefix, iconName = _normalized$key.iconName, icon2 = _normalized$key.icon;
        if (!additions[prefix2])
          additions[prefix2] = {};
        additions[prefix2][iconName] = icon2;
      });
      return additions;
    }
  }]);
  return Library2;
}();
function ensureCss() {
  if (config2.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
function apiObject(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function get() {
      return val.abstract.map(function(a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, "node", {
    get: function get() {
      if (!IS_DOM)
        return;
      var container = DOCUMENT.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix, prefix2 = _iconLookup$prefix === void 0 ? "fa" : _iconLookup$prefix, iconName = iconLookup.iconName;
  if (!iconName)
    return;
  return iconFromMapping(library.definitions, prefix2, iconName) || iconFromMapping(namespace.styles, prefix2, iconName);
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread({}, params, {
      mask
    }));
  };
}
var library = new Library();
var _cssInserted = false;
var parse2 = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$transform = params.transform, transform2 = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$title = params.title, title2 = _params$title === void 0 ? null : _params$title, _params$titleId = params.titleId, titleId = _params$titleId === void 0 ? null : _params$titleId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition)
    return;
  var prefix2 = iconDefinition.prefix, iconName = iconDefinition.iconName, icon2 = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: "icon"
  }, iconDefinition), function() {
    ensureCss();
    if (config2.autoA11y) {
      if (title2) {
        attributes["aria-labelledby"] = "".concat(config2.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes["aria-hidden"] = "true";
        attributes["focusable"] = "false";
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon2),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix2,
      iconName,
      transform: _objectSpread({}, meaninglessTransform, transform2),
      symbol,
      title: title2,
      maskId,
      titleId,
      extra: {
        attributes,
        styles: styles2,
        classes
      }
    });
  });
});
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i];
    return arr2;
  }
}
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
    return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function classList(props) {
  var _classes;
  var spin = props.spin, pulse = props.pulse, fixedWidth = props.fixedWidth, inverse = props.inverse, border = props.border, listItem = props.listItem, flip = props.flip, size = props.size, rotation = props.rotation, pull = props.pull;
  var classes = (_classes = {
    "fa-spin": spin,
    "fa-pulse": pulse,
    "fa-fw": fixedWidth,
    "fa-inverse": inverse,
    "fa-border": border,
    "fa-li": listItem,
    "fa-flip-horizontal": flip === "horizontal" || flip === "both",
    "fa-flip-vertical": flip === "vertical" || flip === "both"
  }, _defineProperty$1(_classes, "fa-".concat(size), typeof size !== "undefined" && size !== null), _defineProperty$1(_classes, "fa-rotate-".concat(rotation), typeof rotation !== "undefined" && rotation !== null && rotation !== 0), _defineProperty$1(_classes, "fa-pull-".concat(pull), typeof pull !== "undefined" && pull !== null), _defineProperty$1(_classes, "fa-swap-opacity", props.swapOpacity), _classes);
  return Object.keys(classes).map(function(key) {
    return classes[key] ? key : null;
  }).filter(function(key) {
    return key;
  });
}
function _isNumerical(obj) {
  obj = obj - 0;
  return obj === obj;
}
function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  }
  string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : "";
  });
  return string.substr(0, 1).toLowerCase() + string.substr(1);
}
function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}
function styleToObject(style) {
  return style.split(";").map(function(s) {
    return s.trim();
  }).filter(function(s) {
    return s;
  }).reduce(function(acc, pair) {
    var i = pair.indexOf(":");
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith("webkit") ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}
function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof element === "string") {
    return element;
  }
  var children = (element.children || []).map(function(child) {
    return convert(createElement, child);
  });
  var mixins = Object.keys(element.attributes || {}).reduce(function(acc, key) {
    var val = element.attributes[key];
    switch (key) {
      case "class":
        acc.attrs["className"] = val;
        delete element.attributes["class"];
        break;
      case "style":
        acc.attrs["style"] = styleToObject(val);
        break;
      default:
        if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }
    }
    return acc;
  }, {
    attrs: {}
  });
  var _extraProps$style = extraProps.style, existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style, remaining = _objectWithoutProperties(extraProps, ["style"]);
  mixins.attrs["style"] = _objectSpread2({}, mixins.attrs["style"], {}, existingStyle);
  return createElement.apply(void 0, [element.tag, _objectSpread2({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
}
var PRODUCTION$1 = false;
try {
  PRODUCTION$1 = true;
} catch (e4) {
}
function log() {
  if (!PRODUCTION$1 && console && typeof console.error === "function") {
    var _console;
    (_console = console).error.apply(_console, arguments);
  }
}
function normalizeIconArgs(icon2) {
  if (parse2.icon) {
    return parse2.icon(icon2);
  }
  if (icon2 === null) {
    return null;
  }
  if (_typeof(icon2) === "object" && icon2.prefix && icon2.iconName) {
    return icon2;
  }
  if (Array.isArray(icon2) && icon2.length === 2) {
    return {
      prefix: icon2[0],
      iconName: icon2[1]
    };
  }
  if (typeof icon2 === "string") {
    return {
      prefix: "fas",
      iconName: icon2
    };
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty$1({}, key, value) : {};
}
function FontAwesomeIcon(_ref2) {
  var forwardedRef = _ref2.forwardedRef, props = _objectWithoutProperties(_ref2, ["forwardedRef"]);
  var iconArgs = props.icon, maskArgs = props.mask, symbol = props.symbol, className = props.className, title2 = props.title, titleId = props.titleId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey("classes", [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(" "))));
  var transform2 = objectWithKey("transform", typeof props.transform === "string" ? parse2.transform(props.transform) : props.transform);
  var mask = objectWithKey("mask", normalizeIconArgs(maskArgs));
  var renderedIcon = icon(iconLookup, _objectSpread2({}, classes, {}, transform2, {}, mask, {
    symbol,
    title: title2,
    titleId
  }));
  if (!renderedIcon) {
    log("Could not find icon", iconLookup);
    return null;
  }
  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: forwardedRef
  };
  Object.keys(props).forEach(function(key) {
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = "FontAwesomeIcon";
FontAwesomeIcon.propTypes = {
  border: propTypes.bool,
  className: propTypes.string,
  mask: propTypes.oneOfType([propTypes.object, propTypes.array, propTypes.string]),
  fixedWidth: propTypes.bool,
  inverse: propTypes.bool,
  flip: propTypes.oneOf(["horizontal", "vertical", "both"]),
  icon: propTypes.oneOfType([propTypes.object, propTypes.array, propTypes.string]),
  listItem: propTypes.bool,
  pull: propTypes.oneOf(["right", "left"]),
  pulse: propTypes.bool,
  rotation: propTypes.oneOf([0, 90, 180, 270]),
  size: propTypes.oneOf(["lg", "xs", "sm", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: propTypes.bool,
  symbol: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  title: propTypes.string,
  transform: propTypes.oneOfType([propTypes.string, propTypes.object]),
  swapOpacity: propTypes.bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: "",
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: "",
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, react.createElement);

// build/_snowpack/pkg/@fortawesome/free-brands-svg-icons.js
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var faAngular = {
  prefix: "fab",
  iconName: "angular",
  icon: [448, 512, [], "f420", "M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"]
};
var faFacebookSquare = {
  prefix: "fab",
  iconName: "facebook-square",
  icon: [448, 512, [], "f082", "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"]
};
var faGithubSquare = {
  prefix: "fab",
  iconName: "github-square",
  icon: [448, 512, [], "f092", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"]
};
var faLinkedin = {
  prefix: "fab",
  iconName: "linkedin",
  icon: [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]
};
var faMedium = {
  prefix: "fab",
  iconName: "medium",
  icon: [448, 512, [], "f23a", "M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"]
};
var faNodeJs = {
  prefix: "fab",
  iconName: "node-js",
  icon: [448, 512, [], "f3d3", "M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"]
};
var faReact = {
  prefix: "fab",
  iconName: "react",
  icon: [512, 512, [], "f41b", "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"]
};
var faTwitterSquare = {
  prefix: "fab",
  iconName: "twitter-square",
  icon: [448, 512, [], "f081", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"]
};

// build/dist/components/Introduction.js
var Container3 = styled_components_default(Card_default)`
    text-align: center;
    background-color: #242424;

    & > a:visited, a:link {
        text-decoration: none;
        color: white;
    }
`;
var Icon = styled_components_default(FontAwesomeIcon)`
    height: 2em;
    width: 2em !important;
    margin: 0;
    padding: 0 0.5em 0 0.5em;
`;
function Introduction(props) {
  return /* @__PURE__ */ react.createElement(Container3, {
    className: props.className
  }, /* @__PURE__ */ react.createElement("h1", null, "Jonathan Arantes"), /* @__PURE__ */ react.createElement("a", {
    href: "https://github.com/Mytsu"
  }, /* @__PURE__ */ react.createElement(Icon, {
    icon: faGithubSquare
  })), /* @__PURE__ */ react.createElement("a", {
    href: "https://www.linkedin.com/in/mytsu/"
  }, /* @__PURE__ */ react.createElement(Icon, {
    icon: faLinkedin
  })), /* @__PURE__ */ react.createElement("a", {
    href: "https://www.facebook.com/JonhArantes"
  }, /* @__PURE__ */ react.createElement(Icon, {
    icon: faFacebookSquare
  })), /* @__PURE__ */ react.createElement("a", {
    href: "https://twitter.com/JohnMytsu"
  }, /* @__PURE__ */ react.createElement(Icon, {
    icon: faTwitterSquare
  })), /* @__PURE__ */ react.createElement("a", {
    href: "https://medium.com/@mytsu"
  }, /* @__PURE__ */ react.createElement(Icon, {
    icon: faMedium
  })), /* @__PURE__ */ react.createElement("p", null, "Estudante e desenvolvedor. Atualmente trabalhando em pequenos projetos para preencher este portfólio."));
}

// build/_snowpack/pkg/react-tsparticles.js
var initPjs = (main) => {
  const particlesJS2 = (tagId, options) => {
    return main.load(tagId, options);
  };
  particlesJS2.load = (tagId, pathConfigJson, callback) => {
    main.loadJSON(tagId, pathConfigJson).then((container) => {
      if (container) {
        callback(container);
      }
    });
  };
  particlesJS2.setOnClickHandler = (callback) => {
    main.setOnClickHandler(callback);
  };
  const pJSDom2 = main.dom();
  return {particlesJS: particlesJS2, pJSDom: pJSDom2};
};
var SquareDrawer = class {
  getSidesCount() {
    return 4;
  }
  draw(context2, particle, radius) {
    context2.rect(-radius, -radius, radius * 2, radius * 2);
  }
};
var OutModeDirection;
(function(OutModeDirection2) {
  OutModeDirection2["bottom"] = "bottom";
  OutModeDirection2["left"] = "left";
  OutModeDirection2["right"] = "right";
  OutModeDirection2["top"] = "top";
})(OutModeDirection || (OutModeDirection = {}));
var MoveDirection;
(function(MoveDirection2) {
  MoveDirection2["bottom"] = "bottom";
  MoveDirection2["bottomLeft"] = "bottom-left";
  MoveDirection2["bottomRight"] = "bottom-right";
  MoveDirection2["left"] = "left";
  MoveDirection2["none"] = "none";
  MoveDirection2["right"] = "right";
  MoveDirection2["top"] = "top";
  MoveDirection2["topLeft"] = "top-left";
  MoveDirection2["topRight"] = "top-right";
})(MoveDirection || (MoveDirection = {}));
var RotateDirection;
(function(RotateDirection2) {
  RotateDirection2["clockwise"] = "clockwise";
  RotateDirection2["counterClockwise"] = "counter-clockwise";
  RotateDirection2["random"] = "random";
})(RotateDirection || (RotateDirection = {}));
var ClickMode;
(function(ClickMode2) {
  ClickMode2["attract"] = "attract";
  ClickMode2["bubble"] = "bubble";
  ClickMode2["push"] = "push";
  ClickMode2["remove"] = "remove";
  ClickMode2["repulse"] = "repulse";
  ClickMode2["pause"] = "pause";
  ClickMode2["trail"] = "trail";
})(ClickMode || (ClickMode = {}));
var DestroyMode;
(function(DestroyMode2) {
  DestroyMode2["none"] = "none";
  DestroyMode2["split"] = "split";
})(DestroyMode || (DestroyMode = {}));
var DivMode;
(function(DivMode2) {
  DivMode2["bounce"] = "bounce";
  DivMode2["bubble"] = "bubble";
  DivMode2["repulse"] = "repulse";
})(DivMode || (DivMode = {}));
var HoverMode;
(function(HoverMode2) {
  HoverMode2["attract"] = "attract";
  HoverMode2["bounce"] = "bounce";
  HoverMode2["bubble"] = "bubble";
  HoverMode2["connect"] = "connect";
  HoverMode2["grab"] = "grab";
  HoverMode2["light"] = "light";
  HoverMode2["repulse"] = "repulse";
  HoverMode2["slow"] = "slow";
  HoverMode2["trail"] = "trail";
})(HoverMode || (HoverMode = {}));
var CollisionMode;
(function(CollisionMode2) {
  CollisionMode2["absorb"] = "absorb";
  CollisionMode2["bounce"] = "bounce";
  CollisionMode2["destroy"] = "destroy";
})(CollisionMode || (CollisionMode = {}));
var OutMode;
(function(OutMode2) {
  OutMode2["bounce"] = "bounce";
  OutMode2["bounceHorizontal"] = "bounce-horizontal";
  OutMode2["bounceVertical"] = "bounce-vertical";
  OutMode2["none"] = "none";
  OutMode2["out"] = "out";
  OutMode2["destroy"] = "destroy";
  OutMode2["split"] = "split";
})(OutMode || (OutMode = {}));
var SizeMode;
(function(SizeMode2) {
  SizeMode2["precise"] = "precise";
  SizeMode2["percent"] = "percent";
})(SizeMode || (SizeMode = {}));
var ThemeMode;
(function(ThemeMode2) {
  ThemeMode2["any"] = "any";
  ThemeMode2["dark"] = "dark";
  ThemeMode2["light"] = "light";
})(ThemeMode || (ThemeMode = {}));
var AnimationStatus;
(function(AnimationStatus2) {
  AnimationStatus2[AnimationStatus2["increasing"] = 0] = "increasing";
  AnimationStatus2[AnimationStatus2["decreasing"] = 1] = "decreasing";
})(AnimationStatus || (AnimationStatus = {}));
var DestroyType;
(function(DestroyType2) {
  DestroyType2["none"] = "none";
  DestroyType2["max"] = "max";
  DestroyType2["min"] = "min";
})(DestroyType || (DestroyType = {}));
var ProcessBubbleType;
(function(ProcessBubbleType2) {
  ProcessBubbleType2["color"] = "color";
  ProcessBubbleType2["opacity"] = "opacity";
  ProcessBubbleType2["size"] = "size";
})(ProcessBubbleType || (ProcessBubbleType = {}));
var ShapeType;
(function(ShapeType2) {
  ShapeType2["char"] = "char";
  ShapeType2["character"] = "character";
  ShapeType2["circle"] = "circle";
  ShapeType2["edge"] = "edge";
  ShapeType2["image"] = "image";
  ShapeType2["images"] = "images";
  ShapeType2["line"] = "line";
  ShapeType2["polygon"] = "polygon";
  ShapeType2["square"] = "square";
  ShapeType2["star"] = "star";
  ShapeType2["triangle"] = "triangle";
})(ShapeType || (ShapeType = {}));
var StartValueType;
(function(StartValueType2) {
  StartValueType2["max"] = "max";
  StartValueType2["min"] = "min";
  StartValueType2["random"] = "random";
})(StartValueType || (StartValueType = {}));
var DivType;
(function(DivType2) {
  DivType2["circle"] = "circle";
  DivType2["rectangle"] = "rectangle";
})(DivType || (DivType = {}));
var EasingType;
(function(EasingType2) {
  EasingType2["easeOutBack"] = "ease-out-back";
  EasingType2["easeOutCirc"] = "ease-out-circ";
  EasingType2["easeOutCubic"] = "ease-out-cubic";
  EasingType2["easeOutQuad"] = "ease-out-quad";
  EasingType2["easeOutQuart"] = "ease-out-quart";
  EasingType2["easeOutQuint"] = "ease-out-quint";
  EasingType2["easeOutExpo"] = "ease-out-expo";
  EasingType2["easeOutSine"] = "ease-out-sine";
})(EasingType || (EasingType = {}));
var InteractivityDetect;
(function(InteractivityDetect2) {
  InteractivityDetect2["canvas"] = "canvas";
  InteractivityDetect2["parent"] = "parent";
  InteractivityDetect2["window"] = "window";
})(InteractivityDetect || (InteractivityDetect = {}));
var Vector = class {
  constructor(x3, y5) {
    let defX, defY;
    if (y5 === void 0) {
      if (typeof x3 === "number") {
        throw new Error("tsParticles - Vector not initialized correctly");
      }
      const coords = x3;
      [defX, defY] = [coords.x, coords.y];
    } else {
      [defX, defY] = [x3, y5];
    }
    this.x = defX;
    this.y = defY;
  }
  static clone(source) {
    return Vector.create(source.x, source.y);
  }
  static create(x3, y5) {
    return new Vector(x3, y5);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(angle) {
    this.updateFromAngle(angle, this.length);
  }
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
  set length(length) {
    this.updateFromAngle(this.angle, length);
  }
  add(v4) {
    return Vector.create(this.x + v4.x, this.y + v4.y);
  }
  addTo(v4) {
    this.x += v4.x;
    this.y += v4.y;
  }
  sub(v4) {
    return Vector.create(this.x - v4.x, this.y - v4.y);
  }
  subFrom(v4) {
    this.x -= v4.x;
    this.y -= v4.y;
  }
  mult(n4) {
    return Vector.create(this.x * n4, this.y * n4);
  }
  multTo(n4) {
    this.x *= n4;
    this.y *= n4;
  }
  div(n4) {
    return Vector.create(this.x / n4, this.y / n4);
  }
  divTo(n4) {
    this.x /= n4;
    this.y /= n4;
  }
  distanceTo(v4) {
    return this.sub(v4).length;
  }
  getLengthSq() {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2);
  }
  distanceToSq(v4) {
    return this.sub(v4).getLengthSq();
  }
  manhattanDistanceTo(v4) {
    return Math.abs(v4.x - this.x) + Math.abs(v4.y - this.y);
  }
  copy() {
    return Vector.clone(this);
  }
  setTo(velocity) {
    this.x = velocity.x;
    this.y = velocity.y;
  }
  rotate(angle) {
    return Vector.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
  }
  updateFromAngle(angle, length) {
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }
};
Vector.origin = Vector.create(0, 0);
var NumberUtils = class {
  static clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }
  static mix(comp1, comp2, weight1, weight2) {
    return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
  }
  static randomInRange(r4) {
    const max = NumberUtils.getRangeMax(r4);
    let min = NumberUtils.getRangeMin(r4);
    if (max === min) {
      min = 0;
    }
    return Math.random() * (max - min) + min;
  }
  static getRangeValue(value) {
    return typeof value === "number" ? value : NumberUtils.randomInRange(value);
  }
  static getRangeMin(value) {
    return typeof value === "number" ? value : value.min;
  }
  static getRangeMax(value) {
    return typeof value === "number" ? value : value.max;
  }
  static setRangeValue(source, value) {
    if (source === value || value === void 0 && typeof source === "number") {
      return source;
    }
    const min = NumberUtils.getRangeMin(source), max = NumberUtils.getRangeMax(source);
    return value !== void 0 ? {
      min: Math.min(min, value),
      max: Math.max(max, value)
    } : NumberUtils.setRangeValue(min, max);
  }
  static getValue(options) {
    const random = options.random;
    const {enable, minimumValue} = typeof random === "boolean" ? {enable: random, minimumValue: 0} : random;
    return enable ? NumberUtils.getRangeValue(NumberUtils.setRangeValue(options.value, minimumValue)) : NumberUtils.getRangeValue(options.value);
  }
  static getDistances(pointA, pointB) {
    const dx = pointA.x - pointB.x;
    const dy = pointA.y - pointB.y;
    return {dx, dy, distance: Math.sqrt(dx * dx + dy * dy)};
  }
  static getDistance(pointA, pointB) {
    return NumberUtils.getDistances(pointA, pointB).distance;
  }
  static getParticleDirectionAngle(direction) {
    if (typeof direction === "number") {
      return direction * Math.PI / 180;
    } else {
      switch (direction) {
        case MoveDirection.top:
          return -Math.PI / 2;
        case MoveDirection.topRight:
          return -Math.PI / 4;
        case MoveDirection.right:
          return 0;
        case MoveDirection.bottomRight:
          return Math.PI / 4;
        case MoveDirection.bottom:
          return Math.PI / 2;
        case MoveDirection.bottomLeft:
          return 3 * Math.PI / 4;
        case MoveDirection.left:
          return Math.PI;
        case MoveDirection.topLeft:
          return -3 * Math.PI / 4;
        case MoveDirection.none:
        default:
          return Math.random() * Math.PI * 2;
      }
    }
  }
  static getParticleBaseVelocity(direction) {
    const baseVelocity = Vector.origin;
    baseVelocity.length = 1;
    baseVelocity.angle = direction;
    return baseVelocity;
  }
  static rotateVelocity(velocity, angle) {
    return {
      horizontal: velocity.horizontal * Math.cos(angle) - velocity.vertical * Math.sin(angle),
      vertical: velocity.horizontal * Math.sin(angle) + velocity.vertical * Math.cos(angle)
    };
  }
  static collisionVelocity(v1, v22, m1, m22) {
    return Vector.create(v1.x * (m1 - m22) / (m1 + m22) + v22.x * 2 * m22 / (m1 + m22), v1.y);
  }
  static calcEasing(value, type) {
    switch (type) {
      case EasingType.easeOutQuad:
        return 1 - Math.pow(1 - value, 2);
      case EasingType.easeOutCubic:
        return 1 - Math.pow(1 - value, 3);
      case EasingType.easeOutQuart:
        return 1 - Math.pow(1 - value, 4);
      case EasingType.easeOutQuint:
        return 1 - Math.pow(1 - value, 5);
      case EasingType.easeOutExpo:
        return value === 1 ? 1 : 1 - Math.pow(2, -10 * value);
      case EasingType.easeOutSine:
        return Math.sin(value * Math.PI / 2);
      case EasingType.easeOutBack: {
        const c1 = 1.70158;
        const c32 = c1 + 1;
        return 1 + c32 * Math.pow(value - 1, 3) + c1 * Math.pow(value - 1, 2);
      }
      case EasingType.easeOutCirc:
        return Math.sqrt(1 - Math.pow(value - 1, 2));
      default:
        return value;
    }
  }
};
var __awaiter = function(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e4) {
        reject(e4);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e4) {
        reject(e4);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function rectSideBounce(pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor) {
  const res = {bounced: false};
  if (pOtherSide.min >= rectOtherSide.min && pOtherSide.min <= rectOtherSide.max && pOtherSide.max >= rectOtherSide.min && pOtherSide.max <= rectOtherSide.max) {
    if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0 || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0) {
      res.velocity = velocity * -factor;
      res.bounced = true;
    }
  }
  return res;
}
function checkSelector(element, selectors) {
  if (selectors instanceof Array) {
    for (const selector of selectors) {
      if (element.matches(selector)) {
        return true;
      }
    }
    return false;
  } else {
    return element.matches(selectors);
  }
}
var Utils = class {
  static isSsr() {
    return typeof window === "undefined" || !window;
  }
  static get animate() {
    return Utils.isSsr() ? (callback) => setTimeout(callback) : (callback) => (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(callback);
  }
  static get cancelAnimation() {
    return Utils.isSsr() ? (handle) => clearTimeout(handle) : (handle) => (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(handle);
  }
  static isInArray(value, array) {
    return value === array || array instanceof Array && array.indexOf(value) > -1;
  }
  static loadFont(character) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        yield document.fonts.load(`${character.weight} 36px '${character.font}'`);
      } catch (_a) {
      }
    });
  }
  static arrayRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  static itemFromArray(array, index3, useIndex = true) {
    const fixedIndex = index3 !== void 0 && useIndex ? index3 % array.length : Utils.arrayRandomIndex(array);
    return array[fixedIndex];
  }
  static isPointInside(point, size, radius, direction) {
    return Utils.areBoundsInside(Utils.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size, direction);
  }
  static areBoundsInside(bounds, size, direction) {
    let inside = true;
    if (!direction || direction === OutModeDirection.bottom) {
      inside = bounds.top < size.height;
    }
    if (inside && (!direction || direction === OutModeDirection.left)) {
      inside = bounds.right > 0;
    }
    if (inside && (!direction || direction === OutModeDirection.right)) {
      inside = bounds.left < size.width;
    }
    if (inside && (!direction || direction === OutModeDirection.top)) {
      inside = bounds.bottom > 0;
    }
    return inside;
  }
  static calculateBounds(point, radius) {
    return {
      bottom: point.y + radius,
      left: point.x - radius,
      right: point.x + radius,
      top: point.y - radius
    };
  }
  static loadImage(source) {
    return new Promise((resolve, reject) => {
      if (!source) {
        reject("Error tsParticles - No image.src");
        return;
      }
      const image = {
        source,
        type: source.substr(source.length - 3)
      };
      const img = new Image();
      img.addEventListener("load", () => {
        image.element = img;
        resolve(image);
      });
      img.addEventListener("error", () => {
        reject(`Error tsParticles - loading image: ${source}`);
      });
      img.src = source;
    });
  }
  static downloadSvgImage(source) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!source) {
        throw new Error("Error tsParticles - No image.src");
      }
      const image = {
        source,
        type: source.substr(source.length - 3)
      };
      if (image.type !== "svg") {
        return Utils.loadImage(source);
      }
      const response = yield fetch(image.source);
      if (!response.ok) {
        throw new Error("Error tsParticles - Image not found");
      }
      image.svgData = yield response.text();
      return image;
    });
  }
  static deepExtend(destination, ...sources) {
    for (const source of sources) {
      if (source === void 0 || source === null) {
        continue;
      }
      if (typeof source !== "object") {
        destination = source;
        continue;
      }
      const sourceIsArray = Array.isArray(source);
      if (sourceIsArray && (typeof destination !== "object" || !destination || !Array.isArray(destination))) {
        destination = [];
      } else if (!sourceIsArray && (typeof destination !== "object" || !destination || Array.isArray(destination))) {
        destination = {};
      }
      for (const key in source) {
        if (key === "__proto__") {
          continue;
        }
        const sourceDict = source;
        const value = sourceDict[key];
        const isObject = typeof value === "object";
        const destDict = destination;
        destDict[key] = isObject && Array.isArray(value) ? value.map((v4) => Utils.deepExtend(destDict[key], v4)) : Utils.deepExtend(destDict[key], value);
      }
    }
    return destination;
  }
  static isDivModeEnabled(mode, divs) {
    return divs instanceof Array ? !!divs.find((t3) => t3.enable && Utils.isInArray(mode, t3.mode)) : Utils.isInArray(mode, divs.mode);
  }
  static divModeExecute(mode, divs, callback) {
    if (divs instanceof Array) {
      for (const div of divs) {
        const divMode = div.mode;
        const divEnabled = div.enable;
        if (divEnabled && Utils.isInArray(mode, divMode)) {
          Utils.singleDivModeExecute(div, callback);
        }
      }
    } else {
      const divMode = divs.mode;
      const divEnabled = divs.enable;
      if (divEnabled && Utils.isInArray(mode, divMode)) {
        Utils.singleDivModeExecute(divs, callback);
      }
    }
  }
  static singleDivModeExecute(div, callback) {
    const selectors = div.selectors;
    if (selectors instanceof Array) {
      for (const selector of selectors) {
        callback(selector, div);
      }
    } else {
      callback(selectors, div);
    }
  }
  static divMode(divs, element) {
    if (!element || !divs) {
      return;
    }
    if (divs instanceof Array) {
      return divs.find((d4) => checkSelector(element, d4.selectors));
    } else if (checkSelector(element, divs.selectors)) {
      return divs;
    }
  }
  static circleBounceDataFromParticle(p5) {
    return {
      position: p5.getPosition(),
      radius: p5.getRadius(),
      mass: p5.getMass(),
      velocity: p5.velocity,
      factor: {
        horizontal: NumberUtils.getValue(p5.options.bounce.horizontal),
        vertical: NumberUtils.getValue(p5.options.bounce.vertical)
      }
    };
  }
  static circleBounce(p1, p22) {
    const xVelocityDiff = p1.velocity.x;
    const yVelocityDiff = p1.velocity.y;
    const pos1 = p1.position;
    const pos2 = p22.position;
    const xDist = pos2.x - pos1.x;
    const yDist = pos2.y - pos1.y;
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
      const angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
      const m1 = p1.mass;
      const m22 = p22.mass;
      const u1 = p1.velocity.rotate(angle);
      const u2 = p22.velocity.rotate(angle);
      const v1 = NumberUtils.collisionVelocity(u1, u2, m1, m22);
      const v22 = NumberUtils.collisionVelocity(u2, u1, m1, m22);
      const vFinal1 = v1.rotate(-angle);
      const vFinal2 = v22.rotate(-angle);
      p1.velocity.x = vFinal1.x * p1.factor.horizontal;
      p1.velocity.y = vFinal1.y * p1.factor.vertical;
      p22.velocity.x = vFinal2.x * p22.factor.horizontal;
      p22.velocity.y = vFinal2.y * p22.factor.vertical;
    }
  }
  static rectBounce(particle, divBounds) {
    const pPos = particle.getPosition();
    const size = particle.getRadius();
    const bounds = Utils.calculateBounds(pPos, size);
    const resH = rectSideBounce({
      min: bounds.left,
      max: bounds.right
    }, {
      min: bounds.top,
      max: bounds.bottom
    }, {
      min: divBounds.left,
      max: divBounds.right
    }, {
      min: divBounds.top,
      max: divBounds.bottom
    }, particle.velocity.x, NumberUtils.getValue(particle.options.bounce.horizontal));
    if (resH.bounced) {
      if (resH.velocity !== void 0) {
        particle.velocity.x = resH.velocity;
      }
    }
    const resV = rectSideBounce({
      min: bounds.top,
      max: bounds.bottom
    }, {
      min: bounds.left,
      max: bounds.right
    }, {
      min: divBounds.top,
      max: divBounds.bottom
    }, {
      min: divBounds.left,
      max: divBounds.right
    }, particle.velocity.y, NumberUtils.getValue(particle.options.bounce.vertical));
    if (resV.bounced) {
      if (resV.velocity !== void 0) {
        particle.velocity.y = resV.velocity;
      }
    }
  }
};
var Constants = class {
};
Constants.canvasClass = "tsparticles-canvas-el";
Constants.randomColorValue = "random";
Constants.midColorValue = "mid";
Constants.touchEndEvent = "touchend";
Constants.mouseDownEvent = "mousedown";
Constants.mouseUpEvent = "mouseup";
Constants.mouseMoveEvent = "mousemove";
Constants.touchStartEvent = "touchstart";
Constants.touchMoveEvent = "touchmove";
Constants.mouseLeaveEvent = "mouseleave";
Constants.mouseOutEvent = "mouseout";
Constants.touchCancelEvent = "touchcancel";
Constants.resizeEvent = "resize";
Constants.visibilityChangeEvent = "visibilitychange";
Constants.noPolygonDataLoaded = "No polygon data loaded.";
Constants.noPolygonFound = "No polygon found, you need to specify SVG url in config.";
function hue2rgb(p5, q4, t3) {
  let tCalc = t3;
  if (tCalc < 0) {
    tCalc += 1;
  }
  if (tCalc > 1) {
    tCalc -= 1;
  }
  if (tCalc < 1 / 6) {
    return p5 + (q4 - p5) * 6 * tCalc;
  }
  if (tCalc < 1 / 2) {
    return q4;
  }
  if (tCalc < 2 / 3) {
    return p5 + (q4 - p5) * (2 / 3 - tCalc) * 6;
  }
  return p5;
}
function stringToRgba(input) {
  if (input.startsWith("rgb")) {
    const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
    const result = regex.exec(input);
    return result ? {
      a: result.length > 4 ? parseFloat(result[5]) : 1,
      b: parseInt(result[3], 10),
      g: parseInt(result[2], 10),
      r: parseInt(result[1], 10)
    } : void 0;
  } else if (input.startsWith("hsl")) {
    const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
    const result = regex.exec(input);
    return result ? ColorUtils.hslaToRgba({
      a: result.length > 4 ? parseFloat(result[5]) : 1,
      h: parseInt(result[1], 10),
      l: parseInt(result[3], 10),
      s: parseInt(result[2], 10)
    }) : void 0;
  } else if (input.startsWith("hsv")) {
    const regex = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
    const result = regex.exec(input);
    return result ? ColorUtils.hsvaToRgba({
      a: result.length > 4 ? parseFloat(result[5]) : 1,
      h: parseInt(result[1], 10),
      s: parseInt(result[2], 10),
      v: parseInt(result[3], 10)
    }) : void 0;
  } else {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
    const hexFixed = input.replace(shorthandRegex, (_m, r4, g4, b4, a) => {
      return r4 + r4 + g4 + g4 + b4 + b4 + (a !== void 0 ? a + a : "");
    });
    const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
    const result = regex.exec(hexFixed);
    return result ? {
      a: result[4] !== void 0 ? parseInt(result[4], 16) / 255 : 1,
      b: parseInt(result[3], 16),
      g: parseInt(result[2], 16),
      r: parseInt(result[1], 16)
    } : void 0;
  }
}
var ColorUtils = class {
  static colorToRgb(input, index3, useIndex = true) {
    var _a, _b, _c;
    if (input === void 0) {
      return;
    }
    const color = typeof input === "string" ? {value: input} : input;
    let res;
    if (typeof color.value === "string") {
      if (color.value === Constants.randomColorValue) {
        res = ColorUtils.getRandomRgbColor();
      } else {
        res = ColorUtils.stringToRgb(color.value);
      }
    } else {
      if (color.value instanceof Array) {
        const colorSelected = Utils.itemFromArray(color.value, index3, useIndex);
        res = ColorUtils.colorToRgb({value: colorSelected});
      } else {
        const colorValue = color.value;
        const rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
        if (rgbColor.r !== void 0) {
          res = rgbColor;
        } else {
          const hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;
          if (hslColor.h !== void 0 && hslColor.l !== void 0) {
            res = ColorUtils.hslToRgb(hslColor);
          } else {
            const hsvColor = (_c = colorValue.hsv) !== null && _c !== void 0 ? _c : color.value;
            if (hsvColor.h !== void 0 && hsvColor.v !== void 0) {
              res = ColorUtils.hsvToRgb(hsvColor);
            }
          }
        }
      }
    }
    return res;
  }
  static colorToHsl(color, index3, useIndex = true) {
    const rgb = ColorUtils.colorToRgb(color, index3, useIndex);
    return rgb !== void 0 ? ColorUtils.rgbToHsl(rgb) : void 0;
  }
  static rgbToHsl(color) {
    const r1 = color.r / 255;
    const g1 = color.g / 255;
    const b1 = color.b / 255;
    const max = Math.max(r1, g1, b1);
    const min = Math.min(r1, g1, b1);
    const res = {
      h: 0,
      l: (max + min) / 2,
      s: 0
    };
    if (max != min) {
      res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
      res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? 2 + (b1 - r1) / (max - min) : 4 + (r1 - g1) / (max - min);
    }
    res.l *= 100;
    res.s *= 100;
    res.h *= 60;
    if (res.h < 0) {
      res.h += 360;
    }
    return res;
  }
  static stringToAlpha(input) {
    var _a;
    return (_a = stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
  }
  static stringToRgb(input) {
    return stringToRgba(input);
  }
  static hslToRgb(hsl) {
    const result = {b: 0, g: 0, r: 0};
    const hslPercent = {
      h: hsl.h / 360,
      l: hsl.l / 100,
      s: hsl.s / 100
    };
    if (hslPercent.s === 0) {
      result.b = hslPercent.l;
      result.g = hslPercent.l;
      result.r = hslPercent.l;
    } else {
      const q4 = hslPercent.l < 0.5 ? hslPercent.l * (1 + hslPercent.s) : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
      const p5 = 2 * hslPercent.l - q4;
      result.r = hue2rgb(p5, q4, hslPercent.h + 1 / 3);
      result.g = hue2rgb(p5, q4, hslPercent.h);
      result.b = hue2rgb(p5, q4, hslPercent.h - 1 / 3);
    }
    result.r = Math.floor(result.r * 255);
    result.g = Math.floor(result.g * 255);
    result.b = Math.floor(result.b * 255);
    return result;
  }
  static hslaToRgba(hsla) {
    const rgbResult = ColorUtils.hslToRgb(hsla);
    return {
      a: hsla.a,
      b: rgbResult.b,
      g: rgbResult.g,
      r: rgbResult.r
    };
  }
  static hslToHsv(hsl) {
    const l4 = hsl.l / 100, sl = hsl.s / 100;
    const v4 = l4 + sl * Math.min(l4, 1 - l4), sv = !v4 ? 0 : 2 * (1 - l4 / v4);
    return {
      h: hsl.h,
      s: sv * 100,
      v: v4 * 100
    };
  }
  static hslaToHsva(hsla) {
    const hsvResult = ColorUtils.hslToHsv(hsla);
    return {
      a: hsla.a,
      h: hsvResult.h,
      s: hsvResult.s,
      v: hsvResult.v
    };
  }
  static hsvToHsl(hsv) {
    const v4 = hsv.v / 100, sv = hsv.s / 100;
    const l4 = v4 * (1 - sv / 2), sl = l4 === 0 || l4 === 1 ? 0 : (v4 - l4) / Math.min(l4, 1 - l4);
    return {
      h: hsv.h,
      l: l4 * 100,
      s: sl * 100
    };
  }
  static hsvaToHsla(hsva) {
    const hslResult = ColorUtils.hsvToHsl(hsva);
    return {
      a: hsva.a,
      h: hslResult.h,
      l: hslResult.l,
      s: hslResult.s
    };
  }
  static hsvToRgb(hsv) {
    const result = {b: 0, g: 0, r: 0};
    const hsvPercent = {
      h: hsv.h / 60,
      s: hsv.s / 100,
      v: hsv.v / 100
    };
    const c4 = hsvPercent.v * hsvPercent.s, x3 = c4 * (1 - Math.abs(hsvPercent.h % 2 - 1));
    let tempRgb;
    if (hsvPercent.h >= 0 && hsvPercent.h <= 1) {
      tempRgb = {
        r: c4,
        g: x3,
        b: 0
      };
    } else if (hsvPercent.h > 1 && hsvPercent.h <= 2) {
      tempRgb = {
        r: x3,
        g: c4,
        b: 0
      };
    } else if (hsvPercent.h > 2 && hsvPercent.h <= 3) {
      tempRgb = {
        r: 0,
        g: c4,
        b: x3
      };
    } else if (hsvPercent.h > 3 && hsvPercent.h <= 4) {
      tempRgb = {
        r: 0,
        g: x3,
        b: c4
      };
    } else if (hsvPercent.h > 4 && hsvPercent.h <= 5) {
      tempRgb = {
        r: x3,
        g: 0,
        b: c4
      };
    } else if (hsvPercent.h > 5 && hsvPercent.h <= 6) {
      tempRgb = {
        r: c4,
        g: 0,
        b: x3
      };
    }
    if (tempRgb) {
      const m4 = hsvPercent.v - c4;
      result.r = Math.floor((tempRgb.r + m4) * 255);
      result.g = Math.floor((tempRgb.g + m4) * 255);
      result.b = Math.floor((tempRgb.b + m4) * 255);
    }
    return result;
  }
  static hsvaToRgba(hsva) {
    const rgbResult = ColorUtils.hsvToRgb(hsva);
    return {
      a: hsva.a,
      b: rgbResult.b,
      g: rgbResult.g,
      r: rgbResult.r
    };
  }
  static rgbToHsv(rgb) {
    const rgbPercent = {
      r: rgb.r / 255,
      g: rgb.g / 255,
      b: rgb.b / 255
    }, xMax = Math.max(rgbPercent.r, rgbPercent.g, rgbPercent.b), xMin = Math.min(rgbPercent.r, rgbPercent.g, rgbPercent.b), v4 = xMax, c4 = xMax - xMin;
    let h4 = 0;
    if (v4 === rgbPercent.r) {
      h4 = 60 * ((rgbPercent.g - rgbPercent.b) / c4);
    } else if (v4 === rgbPercent.g) {
      h4 = 60 * (2 + (rgbPercent.b - rgbPercent.r) / c4);
    } else if (v4 === rgbPercent.b) {
      h4 = 60 * (4 + (rgbPercent.r - rgbPercent.g) / c4);
    }
    const s = !v4 ? 0 : c4 / v4;
    return {
      h: h4,
      s: s * 100,
      v: v4 * 100
    };
  }
  static rgbaToHsva(rgba) {
    const hsvResult = ColorUtils.rgbToHsv(rgba);
    return {
      a: rgba.a,
      h: hsvResult.h,
      s: hsvResult.s,
      v: hsvResult.v
    };
  }
  static getRandomRgbColor(min) {
    const fixedMin = min !== null && min !== void 0 ? min : 0;
    return {
      b: Math.floor(NumberUtils.randomInRange(NumberUtils.setRangeValue(fixedMin, 256))),
      g: Math.floor(NumberUtils.randomInRange(NumberUtils.setRangeValue(fixedMin, 256))),
      r: Math.floor(NumberUtils.randomInRange(NumberUtils.setRangeValue(fixedMin, 256)))
    };
  }
  static getStyleFromRgb(color, opacity) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
  }
  static getStyleFromHsl(color, opacity) {
    return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
  }
  static getStyleFromHsv(color, opacity) {
    return ColorUtils.getStyleFromHsl(ColorUtils.hsvToHsl(color), opacity);
  }
  static mix(color1, color2, size1, size2) {
    let rgb1 = color1;
    let rgb2 = color2;
    if (rgb1.r === void 0) {
      rgb1 = ColorUtils.hslToRgb(color1);
    }
    if (rgb2.r === void 0) {
      rgb2 = ColorUtils.hslToRgb(color2);
    }
    return {
      b: NumberUtils.mix(rgb1.b, rgb2.b, size1, size2),
      g: NumberUtils.mix(rgb1.g, rgb2.g, size1, size2),
      r: NumberUtils.mix(rgb1.r, rgb2.r, size1, size2)
    };
  }
  static replaceColorSvg(imageShape, color, opacity) {
    const {svgData} = imageShape;
    if (!svgData) {
      return "";
    }
    if (svgData.includes("fill")) {
      const currentColor = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
      return svgData.replace(currentColor, () => ColorUtils.getStyleFromHsl(color, opacity));
    }
    const preFillIndex = svgData.indexOf(">");
    return `${svgData.substring(0, preFillIndex)} fill="${ColorUtils.getStyleFromHsl(color, opacity)}"${svgData.substring(preFillIndex)}`;
  }
  static getLinkColor(p1, p22, linkColor) {
    var _a, _b;
    if (linkColor === Constants.randomColorValue) {
      return ColorUtils.getRandomRgbColor();
    } else if (linkColor === "mid") {
      const sourceColor = (_a = p1.getFillColor()) !== null && _a !== void 0 ? _a : p1.getStrokeColor();
      const destColor = (_b = p22 === null || p22 === void 0 ? void 0 : p22.getFillColor()) !== null && _b !== void 0 ? _b : p22 === null || p22 === void 0 ? void 0 : p22.getStrokeColor();
      if (sourceColor && destColor && p22) {
        return ColorUtils.mix(sourceColor, destColor, p1.getRadius(), p22.getRadius());
      } else {
        const hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
        if (hslColor) {
          return ColorUtils.hslToRgb(hslColor);
        }
      }
    } else {
      return linkColor;
    }
  }
  static getLinkRandomColor(optColor, blink, consent) {
    const color = typeof optColor === "string" ? optColor : optColor.value;
    if (color === Constants.randomColorValue) {
      if (consent) {
        return ColorUtils.colorToRgb({
          value: color
        });
      } else if (blink) {
        return Constants.randomColorValue;
      } else {
        return Constants.midColorValue;
      }
    } else {
      return ColorUtils.colorToRgb({
        value: color
      });
    }
  }
  static getHslFromAnimation(animation) {
    return animation !== void 0 ? {
      h: animation.h.value,
      s: animation.s.value,
      l: animation.l.value
    } : void 0;
  }
};
function drawLine(context2, begin, end) {
  context2.beginPath();
  context2.moveTo(begin.x, begin.y);
  context2.lineTo(end.x, end.y);
  context2.closePath();
}
function drawTriangle(context2, p1, p22, p32) {
  context2.beginPath();
  context2.moveTo(p1.x, p1.y);
  context2.lineTo(p22.x, p22.y);
  context2.lineTo(p32.x, p32.y);
  context2.closePath();
}
var CanvasUtils = class {
  static paintBase(context2, dimension, baseColor) {
    context2.save();
    context2.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
    context2.fillRect(0, 0, dimension.width, dimension.height);
    context2.restore();
  }
  static clear(context2, dimension) {
    context2.clearRect(0, 0, dimension.width, dimension.height);
  }
  static drawLinkLine(context2, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, composite, colorLine, opacity, shadow) {
    let drawn = false;
    if (NumberUtils.getDistance(begin, end) <= maxDistance) {
      drawLine(context2, begin, end);
      drawn = true;
    } else if (warp) {
      let pi1;
      let pi2;
      const endNE = {
        x: end.x - canvasSize.width,
        y: end.y
      };
      const d1 = NumberUtils.getDistances(begin, endNE);
      if (d1.distance <= maxDistance) {
        const yi2 = begin.y - d1.dy / d1.dx * begin.x;
        pi1 = {x: 0, y: yi2};
        pi2 = {x: canvasSize.width, y: yi2};
      } else {
        const endSW = {
          x: end.x,
          y: end.y - canvasSize.height
        };
        const d22 = NumberUtils.getDistances(begin, endSW);
        if (d22.distance <= maxDistance) {
          const yi2 = begin.y - d22.dy / d22.dx * begin.x;
          const xi2 = -yi2 / (d22.dy / d22.dx);
          pi1 = {x: xi2, y: 0};
          pi2 = {x: xi2, y: canvasSize.height};
        } else {
          const endSE = {
            x: end.x - canvasSize.width,
            y: end.y - canvasSize.height
          };
          const d32 = NumberUtils.getDistances(begin, endSE);
          if (d32.distance <= maxDistance) {
            const yi2 = begin.y - d32.dy / d32.dx * begin.x;
            const xi2 = -yi2 / (d32.dy / d32.dx);
            pi1 = {x: xi2, y: yi2};
            pi2 = {x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height};
          }
        }
      }
      if (pi1 && pi2) {
        drawLine(context2, begin, pi1);
        drawLine(context2, end, pi2);
        drawn = true;
      }
    }
    if (!drawn) {
      return;
    }
    context2.lineWidth = width;
    if (backgroundMask) {
      context2.globalCompositeOperation = composite;
    }
    context2.strokeStyle = ColorUtils.getStyleFromRgb(colorLine, opacity);
    if (shadow.enable) {
      const shadowColor = ColorUtils.colorToRgb(shadow.color);
      if (shadowColor) {
        context2.shadowBlur = shadow.blur;
        context2.shadowColor = ColorUtils.getStyleFromRgb(shadowColor);
      }
    }
    context2.stroke();
  }
  static drawLinkTriangle(context2, pos1, pos2, pos3, backgroundMask, composite, colorTriangle, opacityTriangle) {
    drawTriangle(context2, pos1, pos2, pos3);
    if (backgroundMask) {
      context2.globalCompositeOperation = composite;
    }
    context2.fillStyle = ColorUtils.getStyleFromRgb(colorTriangle, opacityTriangle);
    context2.fill();
  }
  static drawConnectLine(context2, width, lineStyle, begin, end) {
    context2.save();
    drawLine(context2, begin, end);
    context2.lineWidth = width;
    context2.strokeStyle = lineStyle;
    context2.stroke();
    context2.restore();
  }
  static gradient(context2, p1, p22, opacity) {
    const gradStop = Math.floor(p22.getRadius() / p1.getRadius());
    const color1 = p1.getFillColor();
    const color2 = p22.getFillColor();
    if (!color1 || !color2) {
      return;
    }
    const sourcePos = p1.getPosition();
    const destPos = p22.getPosition();
    const midRgb = ColorUtils.mix(color1, color2, p1.getRadius(), p22.getRadius());
    const grad = context2.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
    grad.addColorStop(0, ColorUtils.getStyleFromHsl(color1, opacity));
    grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils.getStyleFromRgb(midRgb, opacity));
    grad.addColorStop(1, ColorUtils.getStyleFromHsl(color2, opacity));
    return grad;
  }
  static drawGrabLine(context2, width, begin, end, colorLine, opacity) {
    context2.save();
    drawLine(context2, begin, end);
    context2.strokeStyle = ColorUtils.getStyleFromRgb(colorLine, opacity);
    context2.lineWidth = width;
    context2.stroke();
    context2.restore();
  }
  static drawLight(container, context2, mousePos) {
    const lightOptions = container.actualOptions.interactivity.modes.light.area;
    context2.beginPath();
    context2.arc(mousePos.x, mousePos.y, lightOptions.radius, 0, 2 * Math.PI);
    const gradientAmbientLight = context2.createRadialGradient(mousePos.x, mousePos.y, 0, mousePos.x, mousePos.y, lightOptions.radius);
    const gradient = lightOptions.gradient;
    const gradientRgb = {
      start: ColorUtils.colorToRgb(gradient.start),
      stop: ColorUtils.colorToRgb(gradient.stop)
    };
    if (!gradientRgb.start || !gradientRgb.stop) {
      return;
    }
    gradientAmbientLight.addColorStop(0, ColorUtils.getStyleFromRgb(gradientRgb.start));
    gradientAmbientLight.addColorStop(1, ColorUtils.getStyleFromRgb(gradientRgb.stop));
    context2.fillStyle = gradientAmbientLight;
    context2.fill();
  }
  static drawParticleShadow(container, context2, particle, mousePos) {
    const pos = particle.getPosition();
    const shadowOptions = container.actualOptions.interactivity.modes.light.shadow;
    context2.save();
    const radius = particle.getRadius();
    const sides = particle.sides;
    const full = Math.PI * 2 / sides;
    const angle = -particle.rotate.value + Math.PI / 4;
    const factor = 1;
    const dots = [];
    for (let i = 0; i < sides; i++) {
      dots.push({
        x: pos.x + radius * Math.sin(angle + full * i) * factor,
        y: pos.y + radius * Math.cos(angle + full * i) * factor
      });
    }
    const points = [];
    const shadowLength = shadowOptions.length;
    for (const dot of dots) {
      const dotAngle = Math.atan2(mousePos.y - dot.y, mousePos.x - dot.x);
      const endX = dot.x + shadowLength * Math.sin(-dotAngle - Math.PI / 2);
      const endY = dot.y + shadowLength * Math.cos(-dotAngle - Math.PI / 2);
      points.push({
        endX,
        endY,
        startX: dot.x,
        startY: dot.y
      });
    }
    const shadowRgb = ColorUtils.colorToRgb(shadowOptions.color);
    if (!shadowRgb) {
      return;
    }
    const shadowColor = ColorUtils.getStyleFromRgb(shadowRgb);
    for (let i = points.length - 1; i >= 0; i--) {
      const n4 = i == points.length - 1 ? 0 : i + 1;
      context2.beginPath();
      context2.moveTo(points[i].startX, points[i].startY);
      context2.lineTo(points[n4].startX, points[n4].startY);
      context2.lineTo(points[n4].endX, points[n4].endY);
      context2.lineTo(points[i].endX, points[i].endY);
      context2.fillStyle = shadowColor;
      context2.fill();
    }
    context2.restore();
  }
  static drawParticle(container, context2, particle, delta, fillColorValue, strokeColorValue, backgroundMask, composite, radius, opacity, shadow) {
    const pos = particle.getPosition();
    context2.save();
    context2.translate(pos.x, pos.y);
    context2.beginPath();
    const angle = particle.rotate.value + (particle.options.rotate.path ? particle.velocity.angle : 0);
    if (angle !== 0) {
      context2.rotate(angle);
    }
    if (backgroundMask) {
      context2.globalCompositeOperation = composite;
    }
    const shadowColor = particle.shadowColor;
    if (shadow.enable && shadowColor) {
      context2.shadowBlur = shadow.blur;
      context2.shadowColor = ColorUtils.getStyleFromRgb(shadowColor);
      context2.shadowOffsetX = shadow.offset.x;
      context2.shadowOffsetY = shadow.offset.y;
    }
    if (fillColorValue) {
      context2.fillStyle = fillColorValue;
    }
    const stroke = particle.stroke;
    context2.lineWidth = particle.strokeWidth;
    if (strokeColorValue) {
      context2.strokeStyle = strokeColorValue;
    }
    CanvasUtils.drawShape(container, context2, particle, radius, opacity, delta);
    if (stroke.width > 0) {
      context2.stroke();
    }
    if (particle.close) {
      context2.closePath();
    }
    if (particle.fill) {
      context2.fill();
    }
    context2.restore();
    context2.save();
    context2.translate(pos.x, pos.y);
    if (angle !== 0) {
      context2.rotate(angle);
    }
    if (backgroundMask) {
      context2.globalCompositeOperation = composite;
    }
    CanvasUtils.drawShapeAfterEffect(container, context2, particle, radius, opacity, delta);
    context2.restore();
  }
  static drawShape(container, context2, particle, radius, opacity, delta) {
    if (!particle.shape) {
      return;
    }
    const drawer = container.drawers.get(particle.shape);
    if (!drawer) {
      return;
    }
    drawer.draw(context2, particle, radius, opacity, delta, container.retina.pixelRatio);
  }
  static drawShapeAfterEffect(container, context2, particle, radius, opacity, delta) {
    if (!particle.shape) {
      return;
    }
    const drawer = container.drawers.get(particle.shape);
    if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) {
      return;
    }
    drawer.afterEffect(context2, particle, radius, opacity, delta, container.retina.pixelRatio);
  }
  static drawPlugin(context2, plugin2, delta) {
    if (plugin2.draw !== void 0) {
      context2.save();
      plugin2.draw(context2, delta);
      context2.restore();
    }
  }
};
var Range = class {
  constructor(x3, y5) {
    this.position = {
      x: x3,
      y: y5
    };
  }
};
var Circle = class extends Range {
  constructor(x3, y5, radius) {
    super(x3, y5);
    this.radius = radius;
  }
  contains(point) {
    const d4 = Math.pow(point.x - this.position.x, 2) + Math.pow(point.y - this.position.y, 2);
    return d4 <= this.radius * this.radius;
  }
  intersects(range) {
    const rect = range;
    const circle = range;
    const pos1 = this.position;
    const pos2 = range.position;
    const xDist = Math.abs(pos2.x - pos1.x);
    const yDist = Math.abs(pos2.y - pos1.y);
    const r4 = this.radius;
    if (circle.radius !== void 0) {
      const rSum = r4 + circle.radius;
      const dist = Math.sqrt(xDist * xDist + yDist + yDist);
      return rSum > dist;
    } else if (rect.size !== void 0) {
      const w5 = rect.size.width;
      const h4 = rect.size.height;
      const edges = Math.pow(xDist - w5, 2) + Math.pow(yDist - h4, 2);
      if (xDist > r4 + w5 || yDist > r4 + h4) {
        return false;
      }
      if (xDist <= w5 || yDist <= h4) {
        return true;
      }
      return edges <= r4 * r4;
    }
    return false;
  }
};
var Rectangle = class extends Range {
  constructor(x3, y5, width, height) {
    super(x3, y5);
    this.size = {
      height,
      width
    };
  }
  contains(point) {
    const w5 = this.size.width;
    const h4 = this.size.height;
    const pos = this.position;
    return point.x >= pos.x && point.x <= pos.x + w5 && point.y >= pos.y && point.y <= pos.y + h4;
  }
  intersects(range) {
    const rect = range;
    const circle = range;
    const w5 = this.size.width;
    const h4 = this.size.height;
    const pos1 = this.position;
    const pos2 = range.position;
    if (circle.radius !== void 0) {
      return circle.intersects(this);
    } else if (rect.size !== void 0) {
      const size2 = rect.size;
      const w22 = size2.width;
      const h22 = size2.height;
      return pos2.x < pos1.x + w5 && pos2.x + w22 > pos1.x && pos2.y < pos1.y + h4 && pos2.y + h22 > pos1.y;
    }
    return false;
  }
};
var CircleWarp = class extends Circle {
  constructor(x3, y5, radius, canvasSize) {
    super(x3, y5, radius);
    this.canvasSize = canvasSize;
    this.canvasSize = {
      height: canvasSize.height,
      width: canvasSize.width
    };
  }
  contains(point) {
    if (super.contains(point)) {
      return true;
    }
    const posNE = {
      x: point.x - this.canvasSize.width,
      y: point.y
    };
    if (super.contains(posNE)) {
      return true;
    }
    const posSE = {
      x: point.x - this.canvasSize.width,
      y: point.y - this.canvasSize.height
    };
    if (super.contains(posSE)) {
      return true;
    }
    const posSW = {
      x: point.x,
      y: point.y - this.canvasSize.height
    };
    return super.contains(posSW);
  }
  intersects(range) {
    if (super.intersects(range)) {
      return true;
    }
    const rect = range;
    const circle = range;
    const newPos = {
      x: range.position.x - this.canvasSize.width,
      y: range.position.y - this.canvasSize.height
    };
    if (circle.radius !== void 0) {
      const biggerCircle = new Circle(newPos.x, newPos.y, circle.radius * 2);
      return super.intersects(biggerCircle);
    } else if (rect.size !== void 0) {
      const rectSW = new Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
      return super.intersects(rectSW);
    }
    return false;
  }
};
function manageListener(element, event, handler, add, options) {
  if (add) {
    let addOptions = {passive: true};
    if (typeof options === "boolean") {
      addOptions.capture = options;
    } else if (options !== void 0) {
      addOptions = options;
    }
    element.addEventListener(event, handler, addOptions);
  } else {
    const removeOptions = options;
    element.removeEventListener(event, handler, removeOptions);
  }
}
var EventListeners = class {
  constructor(container) {
    this.container = container;
    this.canPush = true;
    this.mouseMoveHandler = (e4) => this.mouseTouchMove(e4);
    this.touchStartHandler = (e4) => this.mouseTouchMove(e4);
    this.touchMoveHandler = (e4) => this.mouseTouchMove(e4);
    this.touchEndHandler = () => this.mouseTouchFinish();
    this.mouseLeaveHandler = () => this.mouseTouchFinish();
    this.touchCancelHandler = () => this.mouseTouchFinish();
    this.touchEndClickHandler = (e4) => this.mouseTouchClick(e4);
    this.mouseUpHandler = (e4) => this.mouseTouchClick(e4);
    this.mouseDownHandler = () => this.mouseDown();
    this.visibilityChangeHandler = () => this.handleVisibilityChange();
    this.resizeHandler = () => this.handleWindowResize();
  }
  addListeners() {
    this.manageListeners(true);
  }
  removeListeners() {
    this.manageListeners(false);
  }
  manageListeners(add) {
    var _a;
    const container = this.container;
    const options = container.actualOptions;
    const detectType = options.interactivity.detectsOn;
    let mouseLeaveEvent = Constants.mouseLeaveEvent;
    if (detectType === InteractivityDetect.window) {
      container.interactivity.element = window;
      mouseLeaveEvent = Constants.mouseOutEvent;
    } else if (detectType === InteractivityDetect.parent && container.canvas.element) {
      const canvasEl = container.canvas.element;
      container.interactivity.element = (_a = canvasEl.parentElement) !== null && _a !== void 0 ? _a : canvasEl.parentNode;
    } else {
      container.interactivity.element = container.canvas.element;
    }
    const interactivityEl = container.interactivity.element;
    if (!interactivityEl) {
      return;
    }
    const html = interactivityEl;
    if (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable) {
      manageListener(interactivityEl, Constants.mouseMoveEvent, this.mouseMoveHandler, add);
      manageListener(interactivityEl, Constants.touchStartEvent, this.touchStartHandler, add);
      manageListener(interactivityEl, Constants.touchMoveEvent, this.touchMoveHandler, add);
      if (!options.interactivity.events.onClick.enable) {
        manageListener(interactivityEl, Constants.touchEndEvent, this.touchEndHandler, add);
      } else {
        manageListener(interactivityEl, Constants.touchEndEvent, this.touchEndClickHandler, add);
        manageListener(interactivityEl, Constants.mouseUpEvent, this.mouseUpHandler, add);
        manageListener(interactivityEl, Constants.mouseDownEvent, this.mouseDownHandler, add);
      }
      manageListener(interactivityEl, mouseLeaveEvent, this.mouseLeaveHandler, add);
      manageListener(interactivityEl, Constants.touchCancelEvent, this.touchCancelHandler, add);
    }
    if (container.canvas.element) {
      container.canvas.element.style.pointerEvents = html === container.canvas.element ? "initial" : "none";
    }
    if (options.interactivity.events.resize) {
      manageListener(window, Constants.resizeEvent, this.resizeHandler, add);
    }
    if (document) {
      manageListener(document, Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
    }
  }
  handleWindowResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      delete this.resizeTimeout;
    }
    this.resizeTimeout = setTimeout(() => {
      var _a;
      return (_a = this.container.canvas) === null || _a === void 0 ? void 0 : _a.windowResize();
    }, 500);
  }
  handleVisibilityChange() {
    const container = this.container;
    const options = container.actualOptions;
    this.mouseTouchFinish();
    if (!options.pauseOnBlur) {
      return;
    }
    if (document === null || document === void 0 ? void 0 : document.hidden) {
      container.pageHidden = true;
      container.pause();
    } else {
      container.pageHidden = false;
      if (container.getAnimationStatus()) {
        container.play(true);
      } else {
        container.draw();
      }
    }
  }
  mouseDown() {
    const interactivity = this.container.interactivity;
    if (interactivity) {
      const mouse = interactivity.mouse;
      mouse.clicking = true;
      mouse.downPosition = mouse.position;
    }
  }
  mouseTouchMove(e4) {
    var _a, _b, _c, _d, _e2, _f, _g;
    const container = this.container;
    const options = container.actualOptions;
    if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === void 0) {
      return;
    }
    container.interactivity.mouse.inside = true;
    let pos;
    const canvas = container.canvas.element;
    if (e4.type.startsWith("mouse")) {
      this.canPush = true;
      const mouseEvent = e4;
      if (container.interactivity.element === window) {
        if (canvas) {
          const clientRect = canvas.getBoundingClientRect();
          pos = {
            x: mouseEvent.clientX - clientRect.left,
            y: mouseEvent.clientY - clientRect.top
          };
        }
      } else if (options.interactivity.detectsOn === InteractivityDetect.parent) {
        const source = mouseEvent.target;
        const target = mouseEvent.currentTarget;
        const canvasEl = container.canvas.element;
        if (source && target && canvasEl) {
          const sourceRect = source.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          const canvasRect = canvasEl.getBoundingClientRect();
          pos = {
            x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
            y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top)
          };
        } else {
          pos = {
            x: (_b = mouseEvent.offsetX) !== null && _b !== void 0 ? _b : mouseEvent.clientX,
            y: (_c = mouseEvent.offsetY) !== null && _c !== void 0 ? _c : mouseEvent.clientY
          };
        }
      } else {
        if (mouseEvent.target === container.canvas.element) {
          pos = {
            x: (_d = mouseEvent.offsetX) !== null && _d !== void 0 ? _d : mouseEvent.clientX,
            y: (_e2 = mouseEvent.offsetY) !== null && _e2 !== void 0 ? _e2 : mouseEvent.clientY
          };
        }
      }
    } else {
      this.canPush = e4.type !== "touchmove";
      const touchEvent = e4;
      const lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
      const canvasRect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
      pos = {
        x: lastTouch.clientX - ((_f = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _f !== void 0 ? _f : 0),
        y: lastTouch.clientY - ((_g = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _g !== void 0 ? _g : 0)
      };
    }
    const pxRatio = container.retina.pixelRatio;
    if (pos) {
      pos.x *= pxRatio;
      pos.y *= pxRatio;
    }
    container.interactivity.mouse.position = pos;
    container.interactivity.status = Constants.mouseMoveEvent;
  }
  mouseTouchFinish() {
    const interactivity = this.container.interactivity;
    if (interactivity === void 0) {
      return;
    }
    const mouse = interactivity.mouse;
    delete mouse.position;
    delete mouse.clickPosition;
    delete mouse.downPosition;
    interactivity.status = Constants.mouseLeaveEvent;
    mouse.inside = false;
    mouse.clicking = false;
  }
  mouseTouchClick(e4) {
    const container = this.container;
    const options = container.actualOptions;
    const mouse = container.interactivity.mouse;
    mouse.inside = true;
    let handled = false;
    const mousePosition = mouse.position;
    if (mousePosition === void 0 || !options.interactivity.events.onClick.enable) {
      return;
    }
    for (const [, plugin2] of container.plugins) {
      if (plugin2.clickPositionValid !== void 0) {
        handled = plugin2.clickPositionValid(mousePosition);
        if (handled) {
          break;
        }
      }
    }
    if (!handled) {
      this.doMouseTouchClick(e4);
    }
    mouse.clicking = false;
  }
  doMouseTouchClick(e4) {
    const container = this.container;
    const options = container.actualOptions;
    if (this.canPush) {
      const mousePos = container.interactivity.mouse.position;
      if (mousePos) {
        container.interactivity.mouse.clickPosition = {
          x: mousePos.x,
          y: mousePos.y
        };
      } else {
        return;
      }
      container.interactivity.mouse.clickTime = new Date().getTime();
      const onClick = options.interactivity.events.onClick;
      if (onClick.mode instanceof Array) {
        for (const mode of onClick.mode) {
          this.handleClickMode(mode);
        }
      } else {
        this.handleClickMode(onClick.mode);
      }
    }
    if (e4.type === "touchend") {
      setTimeout(() => this.mouseTouchFinish(), 500);
    }
  }
  handleClickMode(mode) {
    const container = this.container;
    const options = container.actualOptions;
    const pushNb = options.interactivity.modes.push.quantity;
    const removeNb = options.interactivity.modes.remove.quantity;
    switch (mode) {
      case ClickMode.push: {
        if (pushNb > 0) {
          container.particles.push(pushNb, container.interactivity.mouse);
        }
        break;
      }
      case ClickMode.remove:
        container.particles.removeQuantity(removeNb);
        break;
      case ClickMode.bubble:
        container.bubble.clicking = true;
        break;
      case ClickMode.repulse:
        container.repulse.clicking = true;
        container.repulse.count = 0;
        for (const particle of container.repulse.particles) {
          particle.velocity.setTo(particle.initialVelocity);
        }
        container.repulse.particles = [];
        container.repulse.finish = false;
        setTimeout(() => {
          if (!container.destroyed) {
            container.repulse.clicking = false;
          }
        }, options.interactivity.modes.repulse.duration * 1e3);
        break;
      case ClickMode.attract:
        container.attract.clicking = true;
        container.attract.count = 0;
        for (const particle of container.attract.particles) {
          particle.velocity.setTo(particle.initialVelocity);
        }
        container.attract.particles = [];
        container.attract.finish = false;
        setTimeout(() => {
          if (!container.destroyed) {
            container.attract.clicking = false;
          }
        }, options.interactivity.modes.attract.duration * 1e3);
        break;
      case ClickMode.pause:
        if (container.getAnimationStatus()) {
          container.pause();
        } else {
          container.play();
        }
        break;
    }
    for (const [, plugin2] of container.plugins) {
      if (plugin2.handleClickMode) {
        plugin2.handleClickMode(mode);
      }
    }
  }
};
var plugins = [];
var presets = new Map();
var drawers = new Map();
var pathGenerators = new Map();
var Plugins = class {
  static getPlugin(plugin2) {
    return plugins.find((t3) => t3.id === plugin2);
  }
  static addPlugin(plugin2) {
    if (!Plugins.getPlugin(plugin2.id)) {
      plugins.push(plugin2);
    }
  }
  static getAvailablePlugins(container) {
    const res = new Map();
    for (const plugin2 of plugins) {
      if (!plugin2.needsPlugin(container.actualOptions)) {
        continue;
      }
      res.set(plugin2.id, plugin2.getPlugin(container));
    }
    return res;
  }
  static loadOptions(options, sourceOptions) {
    for (const plugin2 of plugins) {
      plugin2.loadOptions(options, sourceOptions);
    }
  }
  static getPreset(preset) {
    return presets.get(preset);
  }
  static addPreset(presetKey, options, override = false) {
    if (override || !Plugins.getPreset(presetKey)) {
      presets.set(presetKey, options);
    }
  }
  static addShapeDrawer(type, drawer) {
    if (!Plugins.getShapeDrawer(type)) {
      drawers.set(type, drawer);
    }
  }
  static getShapeDrawer(type) {
    return drawers.get(type);
  }
  static getSupportedShapes() {
    return drawers.keys();
  }
  static getPathGenerator(type) {
    return pathGenerators.get(type);
  }
  static addPathGenerator(type, pathGenerator) {
    if (!Plugins.getPathGenerator(type)) {
      pathGenerators.set(type, pathGenerator);
    }
  }
};
var Point = class {
  constructor(position, particle) {
    this.position = position;
    this.particle = particle;
  }
};
var QuadTree = class {
  constructor(rectangle, capacity) {
    this.rectangle = rectangle;
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
  }
  subdivide() {
    const x3 = this.rectangle.position.x;
    const y5 = this.rectangle.position.y;
    const w5 = this.rectangle.size.width;
    const h4 = this.rectangle.size.height;
    const capacity = this.capacity;
    this.northEast = new QuadTree(new Rectangle(x3, y5, w5 / 2, h4 / 2), capacity);
    this.northWest = new QuadTree(new Rectangle(x3 + w5 / 2, y5, w5 / 2, h4 / 2), capacity);
    this.southEast = new QuadTree(new Rectangle(x3, y5 + h4 / 2, w5 / 2, h4 / 2), capacity);
    this.southWest = new QuadTree(new Rectangle(x3 + w5 / 2, y5 + h4 / 2, w5 / 2, h4 / 2), capacity);
    this.divided = true;
  }
  insert(point) {
    var _a, _b, _c, _d, _e2;
    if (!this.rectangle.contains(point.position)) {
      return false;
    }
    if (this.points.length < this.capacity) {
      this.points.push(point);
      return true;
    }
    if (!this.divided) {
      this.subdivide();
    }
    return (_e2 = ((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) || ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) || ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) || ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point))) !== null && _e2 !== void 0 ? _e2 : false;
  }
  queryCircle(position, radius) {
    return this.query(new Circle(position.x, position.y, radius));
  }
  queryCircleWarp(position, radius, containerOrSize) {
    const container = containerOrSize;
    const size = containerOrSize;
    return this.query(new CircleWarp(position.x, position.y, radius, container.canvas !== void 0 ? container.canvas.size : size));
  }
  queryRectangle(position, size) {
    return this.query(new Rectangle(position.x, position.y, size.width, size.height));
  }
  query(range, found) {
    var _a, _b, _c, _d;
    const res = found !== null && found !== void 0 ? found : [];
    if (!range.intersects(this.rectangle)) {
      return [];
    } else {
      for (const p5 of this.points) {
        if (!range.contains(p5.position)) {
          continue;
        }
        res.push(p5.particle);
      }
      if (this.divided) {
        (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, res);
        (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, res);
        (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, res);
        (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, res);
      }
    }
    return res;
  }
};
var __awaiter$1 = function(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e4) {
        reject(e4);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e4) {
        reject(e4);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var TextDrawer = class {
  getSidesCount() {
    return 12;
  }
  init(container) {
    var _a;
    return __awaiter$1(this, void 0, void 0, function* () {
      const options = container.actualOptions;
      if (Utils.isInArray(ShapeType.char, options.particles.shape.type) || Utils.isInArray(ShapeType.character, options.particles.shape.type)) {
        const shapeOptions = (_a = options.particles.shape.options[ShapeType.character]) !== null && _a !== void 0 ? _a : options.particles.shape.options[ShapeType.char];
        if (shapeOptions instanceof Array) {
          for (const character of shapeOptions) {
            yield Utils.loadFont(character);
          }
        } else {
          if (shapeOptions !== void 0) {
            yield Utils.loadFont(shapeOptions);
          }
        }
      }
    });
  }
  draw(context2, particle, radius) {
    const character = particle.shapeData;
    if (character === void 0) {
      return;
    }
    const textData = character.value;
    if (textData === void 0) {
      return;
    }
    const textParticle = particle;
    if (textParticle.text === void 0) {
      textParticle.text = textData instanceof Array ? Utils.itemFromArray(textData, particle.randomIndexData) : textData;
    }
    const text = textParticle.text;
    const style = character.style;
    const weight = character.weight;
    const size = Math.round(radius) * 2;
    const font = character.font;
    const fill = particle.fill;
    const offsetX = text.length * radius / 2;
    context2.font = `${style} ${weight} ${size}px "${font}"`;
    const pos = {
      x: -offsetX,
      y: radius / 2
    };
    if (fill) {
      context2.fillText(text, pos.x, pos.y);
    } else {
      context2.strokeText(text, pos.x, pos.y);
    }
  }
};
var __awaiter$2 = function(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e4) {
        reject(e4);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e4) {
        reject(e4);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var ImageDrawer = class {
  constructor() {
    this.images = [];
  }
  getSidesCount() {
    return 12;
  }
  getImages(container) {
    const containerImages = this.images.filter((t3) => t3.id === container.id);
    if (!containerImages.length) {
      this.images.push({
        id: container.id,
        images: []
      });
      return this.getImages(container);
    }
    return containerImages[0];
  }
  addImage(container, image) {
    const containerImages = this.getImages(container);
    containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
  }
  init(container) {
    var _a;
    return __awaiter$2(this, void 0, void 0, function* () {
      const options = container.actualOptions;
      const shapeOptions = options.particles.shape;
      if (!Utils.isInArray(ShapeType.image, shapeOptions.type) && !Utils.isInArray(ShapeType.images, shapeOptions.type)) {
        return;
      }
      const imageOptions = (_a = shapeOptions.options[ShapeType.images]) !== null && _a !== void 0 ? _a : shapeOptions.options[ShapeType.image];
      if (imageOptions instanceof Array) {
        for (const optionsImage of imageOptions) {
          yield this.loadImageShape(container, optionsImage);
        }
      } else {
        yield this.loadImageShape(container, imageOptions);
      }
    });
  }
  destroy() {
    this.images = [];
  }
  loadImageShape(container, imageShape) {
    return __awaiter$2(this, void 0, void 0, function* () {
      try {
        const image = imageShape.replaceColor ? yield Utils.downloadSvgImage(imageShape.src) : yield Utils.loadImage(imageShape.src);
        if (image) {
          this.addImage(container, image);
        }
      } catch (_a) {
        console.warn(`tsParticles error - ${imageShape.src} not found`);
      }
    });
  }
  draw(context2, particle, radius, opacity) {
    var _a, _b;
    if (!context2) {
      return;
    }
    const image = particle.image;
    const element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
    if (!element) {
      return;
    }
    const ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
    const pos = {
      x: -radius,
      y: -radius
    };
    if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
      context2.globalAlpha = opacity;
    }
    context2.drawImage(element, pos.x, pos.y, radius * 2, radius * 2 / ratio);
    if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
      context2.globalAlpha = 1;
    }
  }
};
var LineDrawer = class {
  getSidesCount() {
    return 1;
  }
  draw(context2, particle, radius) {
    context2.moveTo(-radius / 2, 0);
    context2.lineTo(radius / 2, 0);
  }
};
var CircleDrawer = class {
  getSidesCount() {
    return 12;
  }
  draw(context2, particle, radius) {
    context2.arc(0, 0, radius, 0, Math.PI * 2, false);
  }
};
var PolygonDrawerBase = class {
  getSidesCount(particle) {
    var _a, _b;
    const polygon = particle.shapeData;
    return (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
  }
  draw(context2, particle, radius) {
    const start = this.getCenter(particle, radius);
    const side = this.getSidesData(particle, radius);
    const sideCount = side.count.numerator * side.count.denominator;
    const decimalSides = side.count.numerator / side.count.denominator;
    const interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    const interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
    if (!context2) {
      return;
    }
    context2.beginPath();
    context2.translate(start.x, start.y);
    context2.moveTo(0, 0);
    for (let i = 0; i < sideCount; i++) {
      context2.lineTo(side.length, 0);
      context2.translate(side.length, 0);
      context2.rotate(interiorAngle);
    }
  }
};
var TriangleDrawer = class extends PolygonDrawerBase {
  getSidesCount() {
    return 3;
  }
  getSidesData(particle, radius) {
    return {
      count: {
        denominator: 2,
        numerator: 3
      },
      length: radius * 2
    };
  }
  getCenter(particle, radius) {
    return {
      x: -radius,
      y: radius / 1.66
    };
  }
};
var StarDrawer = class {
  getSidesCount(particle) {
    var _a, _b;
    const star = particle.shapeData;
    return (_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5;
  }
  draw(context2, particle, radius) {
    var _a;
    const star = particle.shapeData;
    const sides = this.getSidesCount(particle);
    const inset = (_a = star === null || star === void 0 ? void 0 : star.inset) !== null && _a !== void 0 ? _a : 2;
    context2.moveTo(0, 0 - radius);
    for (let i = 0; i < sides; i++) {
      context2.rotate(Math.PI / sides);
      context2.lineTo(0, 0 - radius * inset);
      context2.rotate(Math.PI / sides);
      context2.lineTo(0, 0 - radius);
    }
  }
};
var PolygonDrawer = class extends PolygonDrawerBase {
  getSidesData(particle, radius) {
    var _a, _b;
    const polygon = particle.shapeData;
    const sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
    return {
      count: {
        denominator: 1,
        numerator: sides
      },
      length: radius * 2.66 / (sides / 3)
    };
  }
  getCenter(particle, radius) {
    const sides = this.getSidesCount(particle);
    return {
      x: -radius / (sides / 3.5),
      y: -radius / (2.66 / 3.5)
    };
  }
};
var Canvas = class {
  constructor(container) {
    this.container = container;
    this.size = {
      height: 0,
      width: 0
    };
    this.context = null;
    this.generatedCanvas = false;
  }
  init() {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _j, _k, _l, _m;
    const options = this.container.actualOptions;
    const element = this.element;
    if (element) {
      if (options.fullScreen.enable) {
        this.originalStyle = Utils.deepExtend({}, element.style);
        element.style.position = "fixed";
        element.style.zIndex = options.fullScreen.zIndex.toString(10);
        element.style.top = "0";
        element.style.left = "0";
        element.style.width = "100%";
        element.style.height = "100%";
      } else {
        element.style.position = (_b = (_a = this.originalStyle) === null || _a === void 0 ? void 0 : _a.position) !== null && _b !== void 0 ? _b : "";
        element.style.zIndex = (_d = (_c = this.originalStyle) === null || _c === void 0 ? void 0 : _c.zIndex) !== null && _d !== void 0 ? _d : "";
        element.style.top = (_f = (_e2 = this.originalStyle) === null || _e2 === void 0 ? void 0 : _e2.top) !== null && _f !== void 0 ? _f : "";
        element.style.left = (_h = (_g = this.originalStyle) === null || _g === void 0 ? void 0 : _g.left) !== null && _h !== void 0 ? _h : "";
        element.style.width = (_k = (_j = this.originalStyle) === null || _j === void 0 ? void 0 : _j.width) !== null && _k !== void 0 ? _k : "";
        element.style.height = (_m = (_l = this.originalStyle) === null || _l === void 0 ? void 0 : _l.height) !== null && _m !== void 0 ? _m : "";
      }
    }
    this.resize();
    const cover = options.backgroundMask.cover;
    const color = cover.color;
    const trail = options.particles.move.trail;
    const coverRgb = ColorUtils.colorToRgb(color);
    this.coverColor = coverRgb !== void 0 ? {
      r: coverRgb.r,
      g: coverRgb.g,
      b: coverRgb.b,
      a: cover.opacity
    } : void 0;
    this.trailFillColor = ColorUtils.colorToRgb(trail.fillColor);
    this.initBackground();
    this.paint();
  }
  loadCanvas(canvas, generatedCanvas) {
    var _a;
    if (!canvas.className) {
      canvas.className = Constants.canvasClass;
    }
    if (this.generatedCanvas) {
      (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
    }
    this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : this.generatedCanvas;
    this.element = canvas;
    this.originalStyle = Utils.deepExtend({}, this.element.style);
    this.size.height = canvas.offsetHeight;
    this.size.width = canvas.offsetWidth;
    this.context = this.element.getContext("2d");
    this.container.retina.init();
    this.initBackground();
  }
  destroy() {
    var _a;
    if (this.generatedCanvas) {
      (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
    }
    if (this.context) {
      CanvasUtils.clear(this.context, this.size);
    }
  }
  paint() {
    const options = this.container.actualOptions;
    if (!this.context) {
      return;
    }
    if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
      CanvasUtils.clear(this.context, this.size);
      this.paintBase(ColorUtils.getStyleFromRgb(this.coverColor, this.coverColor.a));
    } else {
      this.paintBase();
    }
  }
  clear() {
    const options = this.container.actualOptions;
    const trail = options.particles.move.trail;
    if (options.backgroundMask.enable) {
      this.paint();
    } else if (trail.enable && trail.length > 0 && this.trailFillColor) {
      this.paintBase(ColorUtils.getStyleFromRgb(this.trailFillColor, 1 / trail.length));
    } else if (this.context) {
      CanvasUtils.clear(this.context, this.size);
    }
  }
  windowResize() {
    if (!this.element) {
      return;
    }
    const container = this.container;
    this.resize();
    container.actualOptions.setResponsive(this.size.width, container.retina.pixelRatio, container.options);
    container.particles.setDensity();
    for (const [, plugin2] of container.plugins) {
      if (plugin2.resize !== void 0) {
        plugin2.resize();
      }
    }
  }
  resize() {
    if (!this.element) {
      return;
    }
    const container = this.container;
    const pxRatio = container.retina.pixelRatio;
    const size = container.canvas.size;
    const oldSize = {
      width: size.width,
      height: size.height
    };
    size.width = this.element.offsetWidth * pxRatio;
    size.height = this.element.offsetHeight * pxRatio;
    this.element.width = size.width;
    this.element.height = size.height;
    if (this.container.started) {
      this.resizeFactor = {
        width: size.width / oldSize.width,
        height: size.height / oldSize.height
      };
    }
  }
  drawConnectLine(p1, p22) {
    var _a;
    const ctx = this.context;
    if (!ctx) {
      return;
    }
    const lineStyle = this.lineStyle(p1, p22);
    if (!lineStyle) {
      return;
    }
    const pos1 = p1.getPosition();
    const pos2 = p22.getPosition();
    CanvasUtils.drawConnectLine(ctx, (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : this.container.retina.linksWidth, lineStyle, pos1, pos2);
  }
  drawGrabLine(particle, lineColor, opacity, mousePos) {
    var _a;
    const container = this.container;
    const ctx = container.canvas.context;
    if (!ctx) {
      return;
    }
    const beginPos = particle.getPosition();
    CanvasUtils.drawGrabLine(ctx, (_a = particle.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth, beginPos, mousePos, lineColor, opacity);
  }
  drawParticleShadow(particle, mousePos) {
    if (!this.context) {
      return;
    }
    CanvasUtils.drawParticleShadow(this.container, this.context, particle, mousePos);
  }
  drawLinkTriangle(p1, link1, link2) {
    var _a;
    const container = this.container;
    const options = container.actualOptions;
    const p22 = link1.destination;
    const p32 = link2.destination;
    const triangleOptions = p1.options.links.triangles;
    const opacityTriangle = (_a = triangleOptions.opacity) !== null && _a !== void 0 ? _a : (link1.opacity + link2.opacity) / 2;
    if (opacityTriangle <= 0) {
      return;
    }
    const pos1 = p1.getPosition();
    const pos2 = p22.getPosition();
    const pos3 = p32.getPosition();
    const ctx = this.context;
    if (!ctx) {
      return;
    }
    if (NumberUtils.getDistance(pos1, pos2) > container.retina.linksDistance || NumberUtils.getDistance(pos3, pos2) > container.retina.linksDistance || NumberUtils.getDistance(pos3, pos1) > container.retina.linksDistance) {
      return;
    }
    let colorTriangle = ColorUtils.colorToRgb(triangleOptions.color);
    if (!colorTriangle) {
      const linksOptions = p1.options.links;
      const linkColor = linksOptions.id !== void 0 ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
      colorTriangle = ColorUtils.getLinkColor(p1, p22, linkColor);
    }
    if (!colorTriangle) {
      return;
    }
    CanvasUtils.drawLinkTriangle(ctx, pos1, pos2, pos3, options.backgroundMask.enable, options.backgroundMask.composite, colorTriangle, opacityTriangle);
  }
  drawLinkLine(p1, link) {
    var _a, _b;
    const container = this.container;
    const options = container.actualOptions;
    const p22 = link.destination;
    let opacity = link.opacity;
    const pos1 = p1.getPosition();
    const pos2 = p22.getPosition();
    const ctx = this.context;
    if (!ctx) {
      return;
    }
    let colorLine;
    const twinkle = p1.options.twinkle.lines;
    if (twinkle.enable) {
      const twinkleFreq = twinkle.frequency;
      const twinkleRgb = ColorUtils.colorToRgb(twinkle.color);
      const twinkling = Math.random() < twinkleFreq;
      if (twinkling && twinkleRgb !== void 0) {
        colorLine = twinkleRgb;
        opacity = twinkle.opacity;
      }
    }
    if (!colorLine) {
      const linksOptions = p1.options.links;
      const linkColor = linksOptions.id !== void 0 ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
      colorLine = ColorUtils.getLinkColor(p1, p22, linkColor);
    }
    if (!colorLine) {
      return;
    }
    const width = (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth;
    const maxDistance = (_b = p1.linksDistance) !== null && _b !== void 0 ? _b : container.retina.linksDistance;
    CanvasUtils.drawLinkLine(ctx, width, pos1, pos2, maxDistance, container.canvas.size, p1.options.links.warp, options.backgroundMask.enable, options.backgroundMask.composite, colorLine, opacity, p1.options.links.shadow);
  }
  drawParticle(particle, delta) {
    var _a, _b, _c, _d;
    if (((_a = particle.image) === null || _a === void 0 ? void 0 : _a.loaded) === false || particle.spawning || particle.destroyed) {
      return;
    }
    const pfColor = particle.getFillColor();
    const psColor = (_b = particle.getStrokeColor()) !== null && _b !== void 0 ? _b : pfColor;
    if (!pfColor && !psColor) {
      return;
    }
    const options = this.container.actualOptions;
    const pOptions = particle.options;
    const twinkle = pOptions.twinkle.particles;
    const twinkleFreq = twinkle.frequency;
    const twinkleRgb = ColorUtils.colorToRgb(twinkle.color);
    const twinkling = twinkle.enable && Math.random() < twinkleFreq;
    const radius = particle.getRadius();
    const opacity = twinkling ? twinkle.opacity : (_c = particle.bubble.opacity) !== null && _c !== void 0 ? _c : particle.opacity.value;
    const infectionStage = particle.infecter.infectionStage;
    const infection = options.infection;
    const infectionStages = infection.stages;
    const infectionColor = infectionStage !== void 0 ? infectionStages[infectionStage].color : void 0;
    const infectionRgb = ColorUtils.colorToRgb(infectionColor);
    const fColor = twinkling && twinkleRgb !== void 0 ? twinkleRgb : infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : pfColor ? ColorUtils.hslToRgb(pfColor) : void 0;
    const sColor = twinkling && twinkleRgb !== void 0 ? twinkleRgb : infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : psColor ? ColorUtils.hslToRgb(psColor) : void 0;
    const fillColorValue = fColor !== void 0 ? ColorUtils.getStyleFromRgb(fColor, opacity) : void 0;
    if (!this.context || !fillColorValue && !sColor) {
      return;
    }
    const strokeColorValue = sColor !== void 0 ? ColorUtils.getStyleFromRgb(sColor, (_d = particle.stroke.opacity) !== null && _d !== void 0 ? _d : opacity) : fillColorValue;
    this.drawParticleLinks(particle);
    if (radius > 0) {
      CanvasUtils.drawParticle(this.container, this.context, particle, delta, fillColorValue, strokeColorValue, options.backgroundMask.enable, options.backgroundMask.composite, radius, opacity, particle.options.shadow);
    }
  }
  drawParticleLinks(particle) {
    if (!this.context) {
      return;
    }
    const container = this.container;
    const particles2 = container.particles;
    const pOptions = particle.options;
    if (particle.links.length > 0) {
      this.context.save();
      const p1Links = particle.links.filter((l4) => {
        const linkFreq = container.particles.getLinkFrequency(particle, l4.destination);
        return linkFreq <= pOptions.links.frequency;
      });
      for (const link of p1Links) {
        const p22 = link.destination;
        if (pOptions.links.triangles.enable) {
          const links = p1Links.map((l4) => l4.destination);
          const vertices = p22.links.filter((t3) => {
            const linkFreq = container.particles.getLinkFrequency(p22, t3.destination);
            return linkFreq <= p22.options.links.frequency && links.indexOf(t3.destination) >= 0;
          });
          if (vertices.length) {
            for (const vertex of vertices) {
              const p32 = vertex.destination;
              const triangleFreq = particles2.getTriangleFrequency(particle, p22, p32);
              if (triangleFreq > pOptions.links.triangles.frequency) {
                continue;
              }
              this.drawLinkTriangle(particle, link, vertex);
            }
          }
        }
        if (link.opacity > 0 && container.retina.linksWidth > 0) {
          this.drawLinkLine(particle, link);
        }
      }
      this.context.restore();
    }
  }
  drawPlugin(plugin2, delta) {
    if (!this.context) {
      return;
    }
    CanvasUtils.drawPlugin(this.context, plugin2, delta);
  }
  drawLight(mousePos) {
    if (!this.context) {
      return;
    }
    CanvasUtils.drawLight(this.container, this.context, mousePos);
  }
  initBackground() {
    const options = this.container.actualOptions;
    const background = options.background;
    const element = this.element;
    const elementStyle = element === null || element === void 0 ? void 0 : element.style;
    if (!elementStyle) {
      return;
    }
    if (background.color) {
      const color = ColorUtils.colorToRgb(background.color);
      elementStyle.backgroundColor = color ? ColorUtils.getStyleFromRgb(color, background.opacity) : "";
    } else {
      elementStyle.backgroundColor = "";
    }
    elementStyle.backgroundImage = background.image || "";
    elementStyle.backgroundPosition = background.position || "";
    elementStyle.backgroundRepeat = background.repeat || "";
    elementStyle.backgroundSize = background.size || "";
  }
  paintBase(baseColor) {
    if (!this.context) {
      return;
    }
    CanvasUtils.paintBase(this.context, this.size, baseColor);
  }
  lineStyle(p1, p22) {
    if (!this.context) {
      return;
    }
    const options = this.container.actualOptions;
    const connectOptions = options.interactivity.modes.connect;
    return CanvasUtils.gradient(this.context, p1, p22, connectOptions.links.opacity);
  }
};
function bounceHorizontal(data) {
  if (data.outMode === OutMode.bounce || data.outMode === OutMode.bounceHorizontal || data.outMode === "bounceHorizontal" || data.outMode === OutMode.split) {
    const velocity = data.particle.velocity.x;
    let bounced = false;
    if (data.direction === OutModeDirection.right && data.bounds.right >= data.canvasSize.width && velocity > 0 || data.direction === OutModeDirection.left && data.bounds.left <= 0 && velocity < 0) {
      const newVelocity = NumberUtils.getValue(data.particle.options.bounce.horizontal);
      data.particle.velocity.x *= -newVelocity;
      bounced = true;
    }
    if (!bounced) {
      return;
    }
    const minPos = data.offset.x + data.size;
    if (data.bounds.right >= data.canvasSize.width) {
      data.particle.position.x = data.canvasSize.width - minPos;
    } else if (data.bounds.left <= 0) {
      data.particle.position.x = minPos;
    }
    if (data.outMode === OutMode.split) {
      data.particle.destroy();
    }
  }
}
function bounceVertical(data) {
  if (data.outMode === OutMode.bounce || data.outMode === OutMode.bounceVertical || data.outMode === "bounceVertical" || data.outMode === OutMode.split) {
    const velocity = data.particle.velocity.y;
    let bounced = false;
    if (data.direction === OutModeDirection.bottom && data.bounds.bottom >= data.canvasSize.height && velocity > 0 || data.direction === OutModeDirection.top && data.bounds.top <= 0 && velocity < 0) {
      const newVelocity = NumberUtils.getValue(data.particle.options.bounce.vertical);
      data.particle.velocity.y *= -newVelocity;
      bounced = true;
    }
    if (!bounced) {
      return;
    }
    const minPos = data.offset.y + data.size;
    if (data.bounds.bottom >= data.canvasSize.height) {
      data.particle.position.y = data.canvasSize.height - minPos;
    } else if (data.bounds.top <= 0) {
      data.particle.position.y = minPos;
    }
    if (data.outMode === OutMode.split) {
      data.particle.destroy();
    }
  }
}
function checkDestroy(particle, destroy2, value, minValue, maxValue) {
  switch (destroy2) {
    case DestroyType.max:
      if (value >= maxValue) {
        particle.destroy();
      }
      break;
    case DestroyType.min:
      if (value <= minValue) {
        particle.destroy();
      }
      break;
  }
}
var Updater = class {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }
  update(delta) {
    if (this.particle.destroyed) {
      return;
    }
    this.updateLife(delta);
    if (this.particle.destroyed || this.particle.spawning) {
      return;
    }
    this.updateOpacity(delta);
    this.updateSize(delta);
    this.updateAngle(delta);
    this.updateColor(delta);
    this.updateStrokeColor(delta);
    this.updateOutModes(delta);
  }
  updateLife(delta) {
    const particle = this.particle;
    let justSpawned = false;
    if (particle.spawning) {
      particle.lifeDelayTime += delta.value;
      if (particle.lifeDelayTime >= particle.lifeDelay) {
        justSpawned = true;
        particle.spawning = false;
        particle.lifeDelayTime = 0;
        particle.lifeTime = 0;
      }
    }
    if (particle.lifeDuration === -1) {
      return;
    }
    if (!particle.spawning) {
      if (justSpawned) {
        particle.lifeTime = 0;
      } else {
        particle.lifeTime += delta.value;
      }
      if (particle.lifeTime >= particle.lifeDuration) {
        particle.lifeTime = 0;
        if (particle.livesRemaining > 0) {
          particle.livesRemaining--;
        }
        if (particle.livesRemaining === 0) {
          particle.destroy();
          return;
        }
        const canvasSize = this.container.canvas.size;
        particle.position.x = NumberUtils.randomInRange(NumberUtils.setRangeValue(0, canvasSize.width));
        particle.position.y = NumberUtils.randomInRange(NumberUtils.setRangeValue(0, canvasSize.height));
        particle.spawning = true;
        particle.lifeDelayTime = 0;
        particle.lifeTime = 0;
        particle.reset();
        const lifeOptions = particle.options.life;
        particle.lifeDelay = NumberUtils.getValue(lifeOptions.delay) * 1e3;
        particle.lifeDuration = NumberUtils.getValue(lifeOptions.duration) * 1e3;
      }
    }
  }
  updateOpacity(delta) {
    var _a, _b;
    const particle = this.particle;
    const opacityOpt = particle.options.opacity;
    const opacityAnim = opacityOpt.animation;
    const minValue = NumberUtils.getRangeMin(opacityOpt.value);
    const maxValue = NumberUtils.getRangeMax(opacityOpt.value);
    if (!particle.destroyed && opacityAnim.enable && (opacityAnim.count <= 0 || particle.loops.size < opacityAnim.count)) {
      switch (particle.opacity.status) {
        case AnimationStatus.increasing:
          if (particle.opacity.value >= maxValue) {
            particle.opacity.status = AnimationStatus.decreasing;
            particle.loops.opacity++;
          } else {
            particle.opacity.value += ((_a = particle.opacity.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
          }
          break;
        case AnimationStatus.decreasing:
          if (particle.opacity.value <= minValue) {
            particle.opacity.status = AnimationStatus.increasing;
            particle.loops.opacity++;
          } else {
            particle.opacity.value -= ((_b = particle.opacity.velocity) !== null && _b !== void 0 ? _b : 0) * delta.factor;
          }
          break;
      }
      checkDestroy(particle, opacityAnim.destroy, particle.opacity.value, minValue, maxValue);
      if (!particle.destroyed) {
        particle.opacity.value = NumberUtils.clamp(particle.opacity.value, minValue, maxValue);
      }
    }
  }
  updateSize(delta) {
    var _a;
    const container = this.container;
    const particle = this.particle;
    const sizeOpt = particle.options.size;
    const sizeAnim = sizeOpt.animation;
    const sizeVelocity = ((_a = particle.size.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
    const minValue = NumberUtils.getRangeMin(sizeOpt.value) * container.retina.pixelRatio;
    const maxValue = NumberUtils.getRangeMax(sizeOpt.value) * container.retina.pixelRatio;
    if (!particle.destroyed && sizeAnim.enable && (sizeAnim.count <= 0 || particle.loops.size < sizeAnim.count)) {
      switch (particle.size.status) {
        case AnimationStatus.increasing:
          if (particle.size.value >= maxValue) {
            particle.size.status = AnimationStatus.decreasing;
            particle.loops.size++;
          } else {
            particle.size.value += sizeVelocity;
          }
          break;
        case AnimationStatus.decreasing:
          if (particle.size.value <= minValue) {
            particle.size.status = AnimationStatus.increasing;
            particle.loops.size++;
          } else {
            particle.size.value -= sizeVelocity;
          }
      }
      checkDestroy(particle, sizeAnim.destroy, particle.size.value, minValue, maxValue);
      if (!particle.destroyed) {
        particle.size.value = NumberUtils.clamp(particle.size.value, minValue, maxValue);
      }
    }
  }
  updateAngle(delta) {
    var _a;
    const particle = this.particle;
    const rotate = particle.options.rotate;
    const rotateAnimation = rotate.animation;
    const speed = ((_a = particle.rotate.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
    const max = 2 * Math.PI;
    if (rotateAnimation.enable) {
      switch (particle.rotate.status) {
        case AnimationStatus.increasing:
          particle.rotate.value += speed;
          if (particle.rotate.value > max) {
            particle.rotate.value -= max;
          }
          break;
        case AnimationStatus.decreasing:
        default:
          particle.rotate.value -= speed;
          if (particle.rotate.value < 0) {
            particle.rotate.value += max;
          }
          break;
      }
    }
  }
  updateColor(delta) {
    var _a, _b, _c;
    const particle = this.particle;
    const animationOptions = particle.options.color.animation;
    if (((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h) !== void 0) {
      this.updateColorValue(particle, delta, particle.color.h, animationOptions.h, 360, false);
    }
    if (((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s) !== void 0) {
      this.updateColorValue(particle, delta, particle.color.s, animationOptions.s, 100, true);
    }
    if (((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l) !== void 0) {
      this.updateColorValue(particle, delta, particle.color.l, animationOptions.l, 100, true);
    }
  }
  updateStrokeColor(delta) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _j, _k, _l, _m;
    const particle = this.particle;
    if (!particle.stroke.color) {
      return;
    }
    const animationOptions = particle.stroke.color.animation;
    const valueAnimations = animationOptions;
    if (valueAnimations.enable !== void 0) {
      const hue = (_b = (_a = particle.strokeColor) === null || _a === void 0 ? void 0 : _a.h) !== null && _b !== void 0 ? _b : (_c = particle.color) === null || _c === void 0 ? void 0 : _c.h;
      if (hue) {
        this.updateColorValue(particle, delta, hue, valueAnimations, 360, false);
      }
    } else {
      const hslAnimations = animationOptions;
      const h4 = (_e2 = (_d = particle.strokeColor) === null || _d === void 0 ? void 0 : _d.h) !== null && _e2 !== void 0 ? _e2 : (_f = particle.color) === null || _f === void 0 ? void 0 : _f.h;
      if (h4) {
        this.updateColorValue(particle, delta, h4, hslAnimations.h, 360, false);
      }
      const s = (_h = (_g = particle.strokeColor) === null || _g === void 0 ? void 0 : _g.s) !== null && _h !== void 0 ? _h : (_j = particle.color) === null || _j === void 0 ? void 0 : _j.s;
      if (s) {
        this.updateColorValue(particle, delta, s, hslAnimations.s, 100, true);
      }
      const l4 = (_l = (_k = particle.strokeColor) === null || _k === void 0 ? void 0 : _k.l) !== null && _l !== void 0 ? _l : (_m = particle.color) === null || _m === void 0 ? void 0 : _m.l;
      if (l4) {
        this.updateColorValue(particle, delta, l4, hslAnimations.l, 100, true);
      }
    }
  }
  updateColorValue(particle, delta, value, valueAnimation, max, decrease) {
    var _a;
    const colorValue = value;
    if (!colorValue || !valueAnimation.enable) {
      return;
    }
    const offset = NumberUtils.randomInRange(valueAnimation.offset);
    const velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6;
    if (!decrease || colorValue.status === AnimationStatus.increasing) {
      colorValue.value += velocity;
      if (decrease && colorValue.value > max) {
        colorValue.status = AnimationStatus.decreasing;
        colorValue.value -= colorValue.value % max;
      }
    } else {
      colorValue.value -= velocity;
      if (colorValue.value < 0) {
        colorValue.status = AnimationStatus.increasing;
        colorValue.value += colorValue.value;
      }
    }
    if (colorValue.value > max) {
      colorValue.value %= max;
    }
  }
  updateOutModes(delta) {
    var _a, _b, _c, _d;
    const outModes = this.particle.options.move.outModes;
    this.updateOutMode(delta, (_a = outModes.bottom) !== null && _a !== void 0 ? _a : outModes.default, OutModeDirection.bottom);
    this.updateOutMode(delta, (_b = outModes.left) !== null && _b !== void 0 ? _b : outModes.default, OutModeDirection.left);
    this.updateOutMode(delta, (_c = outModes.right) !== null && _c !== void 0 ? _c : outModes.default, OutModeDirection.right);
    this.updateOutMode(delta, (_d = outModes.top) !== null && _d !== void 0 ? _d : outModes.default, OutModeDirection.top);
  }
  updateOutMode(delta, outMode, direction) {
    const container = this.container;
    const particle = this.particle;
    switch (outMode) {
      case OutMode.bounce:
      case OutMode.bounceVertical:
      case OutMode.bounceHorizontal:
      case "bounceVertical":
      case "bounceHorizontal":
      case OutMode.split:
        this.updateBounce(delta, direction, outMode);
        break;
      case OutMode.destroy:
        if (!Utils.isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
          container.particles.remove(particle, true);
        }
        break;
      case OutMode.out:
        if (!Utils.isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
          this.fixOutOfCanvasPosition(direction);
        }
        break;
      case OutMode.none:
        this.bounceNone(direction);
        break;
    }
  }
  fixOutOfCanvasPosition(direction) {
    const container = this.container;
    const particle = this.particle;
    const wrap = particle.options.move.warp;
    const canvasSize = container.canvas.size;
    const newPos = {
      bottom: canvasSize.height + particle.getRadius() - particle.offset.y,
      left: -particle.getRadius() - particle.offset.x,
      right: canvasSize.width + particle.getRadius() + particle.offset.x,
      top: -particle.getRadius() - particle.offset.y
    };
    const sizeValue = particle.getRadius();
    const nextBounds = Utils.calculateBounds(particle.position, sizeValue);
    if (direction === OutModeDirection.right && nextBounds.left > canvasSize.width - particle.offset.x) {
      particle.position.x = newPos.left;
      if (!wrap) {
        particle.position.y = Math.random() * canvasSize.height;
      }
    } else if (direction === OutModeDirection.left && nextBounds.right < -particle.offset.x) {
      particle.position.x = newPos.right;
      if (!wrap) {
        particle.position.y = Math.random() * canvasSize.height;
      }
    }
    if (direction === OutModeDirection.bottom && nextBounds.top > canvasSize.height - particle.offset.y) {
      if (!wrap) {
        particle.position.x = Math.random() * canvasSize.width;
      }
      particle.position.y = newPos.top;
    } else if (direction === OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
      if (!wrap) {
        particle.position.x = Math.random() * canvasSize.width;
      }
      particle.position.y = newPos.bottom;
    }
  }
  updateBounce(delta, direction, outMode) {
    const container = this.container;
    const particle = this.particle;
    let handled = false;
    for (const [, plugin2] of container.plugins) {
      if (plugin2.particleBounce !== void 0) {
        handled = plugin2.particleBounce(particle, delta, direction);
      }
      if (handled) {
        break;
      }
    }
    if (handled) {
      return;
    }
    const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = Utils.calculateBounds(pos, size), canvasSize = container.canvas.size;
    bounceHorizontal({particle, outMode, direction, bounds, canvasSize, offset, size});
    bounceVertical({particle, outMode, direction, bounds, canvasSize, offset, size});
  }
  bounceNone(direction) {
    const particle = this.particle;
    if (particle.options.move.distance) {
      return;
    }
    const gravityOptions = particle.options.move.gravity;
    const container = this.container;
    if (!gravityOptions.enable) {
      if (!Utils.isPointInside(particle.position, container.canvas.size, particle.getRadius(), direction)) {
        container.particles.remove(particle);
      }
    } else {
      const position = particle.position;
      if (gravityOptions.acceleration >= 0 && position.y > container.canvas.size.height && direction === OutModeDirection.bottom || gravityOptions.acceleration < 0 && position.y < 0 && direction === OutModeDirection.top) {
        container.particles.remove(particle);
      }
    }
  }
};
var OptionsColor = class {
  constructor() {
    this.value = "#fff";
  }
  static create(source, data) {
    const color = source !== null && source !== void 0 ? source : new OptionsColor();
    if (data !== void 0) {
      color.load(typeof data === "string" ? {value: data} : data);
    }
    return color;
  }
  load(data) {
    if ((data === null || data === void 0 ? void 0 : data.value) === void 0) {
      return;
    }
    this.value = data.value;
  }
};
var LinksShadow = class {
  constructor() {
    this.blur = 5;
    this.color = new OptionsColor();
    this.enable = false;
    this.color.value = "#00ff00";
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.blur !== void 0) {
      this.blur = data.blur;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
};
var LinksTriangle = class {
  constructor() {
    this.enable = false;
    this.frequency = 1;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.frequency !== void 0) {
      this.frequency = data.frequency;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};
var Links = class {
  constructor() {
    this.blink = false;
    this.color = new OptionsColor();
    this.consent = false;
    this.distance = 100;
    this.enable = false;
    this.frequency = 1;
    this.opacity = 1;
    this.shadow = new LinksShadow();
    this.triangles = new LinksTriangle();
    this.width = 1;
    this.warp = false;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.id !== void 0) {
      this.id = data.id;
    }
    if (data.blink !== void 0) {
      this.blink = data.blink;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.consent !== void 0) {
      this.consent = data.consent;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.frequency !== void 0) {
      this.frequency = data.frequency;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
    this.shadow.load(data.shadow);
    this.triangles.load(data.triangles);
    if (data.width !== void 0) {
      this.width = data.width;
    }
    if (data.warp !== void 0) {
      this.warp = data.warp;
    }
  }
};
var Attract = class {
  constructor() {
    this.distance = 200;
    this.enable = false;
    this.rotate = {
      x: 3e3,
      y: 3e3
    };
  }
  get rotateX() {
    return this.rotate.x;
  }
  set rotateX(value) {
    this.rotate.x = value;
  }
  get rotateY() {
    return this.rotate.y;
  }
  set rotateY(value) {
    this.rotate.y = value;
  }
  load(data) {
    var _a, _b, _c, _d;
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
    if (rotateX !== void 0) {
      this.rotate.x = rotateX;
    }
    const rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
    if (rotateY !== void 0) {
      this.rotate.y = rotateY;
    }
  }
};
var Trail = class {
  constructor() {
    this.enable = false;
    this.length = 10;
    this.fillColor = new OptionsColor();
    this.fillColor.value = "#000000";
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.fillColor = OptionsColor.create(this.fillColor, data.fillColor);
    if (data.length !== void 0) {
      this.length = data.length;
    }
  }
};
var Random = class {
  constructor() {
    this.enable = false;
    this.minimumValue = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.minimumValue !== void 0) {
      this.minimumValue = data.minimumValue;
    }
  }
};
var ValueWithRandom = class {
  constructor() {
    this.random = new Random();
    this.value = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (typeof data.random === "boolean") {
      this.random.enable = data.random;
    } else {
      this.random.load(data.random);
    }
    if (data.value !== void 0) {
      this.value = NumberUtils.setRangeValue(data.value, this.random.enable ? this.random.minimumValue : void 0);
    }
  }
};
var PathDelay = class extends ValueWithRandom {
  constructor() {
    super();
  }
};
var Path = class {
  constructor() {
    this.clamp = true;
    this.delay = new PathDelay();
    this.enable = false;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.clamp !== void 0) {
      this.clamp = data.clamp;
    }
    this.delay.load(data.delay);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.generator = data.generator;
  }
};
var MoveAngle = class {
  constructor() {
    this.offset = 45;
    this.value = 90;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.offset !== void 0) {
      this.offset = data.offset;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};
var MoveGravity = class {
  constructor() {
    this.acceleration = 9.81;
    this.enable = false;
    this.maxSpeed = 50;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.acceleration !== void 0) {
      this.acceleration = data.acceleration;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = data.maxSpeed;
    }
  }
};
var OutModes = class {
  constructor() {
    this.default = OutMode.out;
  }
  load(data) {
    var _a, _b, _c, _d;
    if (!data) {
      return;
    }
    if (data.default !== void 0) {
      this.default = data.default;
    }
    this.bottom = (_a = data.bottom) !== null && _a !== void 0 ? _a : data.default;
    this.left = (_b = data.left) !== null && _b !== void 0 ? _b : data.default;
    this.right = (_c = data.right) !== null && _c !== void 0 ? _c : data.default;
    this.top = (_d = data.top) !== null && _d !== void 0 ? _d : data.default;
  }
};
var Move = class {
  constructor() {
    this.angle = new MoveAngle();
    this.attract = new Attract();
    this.decay = 0;
    this.distance = 0;
    this.direction = MoveDirection.none;
    this.drift = 0;
    this.enable = false;
    this.gravity = new MoveGravity();
    this.path = new Path();
    this.outModes = new OutModes();
    this.random = false;
    this.size = false;
    this.speed = 2;
    this.straight = false;
    this.trail = new Trail();
    this.vibrate = false;
    this.warp = false;
  }
  get collisions() {
    return false;
  }
  set collisions(value) {
  }
  get bounce() {
    return this.collisions;
  }
  set bounce(value) {
    this.collisions = value;
  }
  get out_mode() {
    return this.outMode;
  }
  set out_mode(value) {
    this.outMode = value;
  }
  get outMode() {
    return this.outModes.default;
  }
  set outMode(value) {
    this.outModes.default = value;
  }
  get noise() {
    return this.path;
  }
  set noise(value) {
    this.path = value;
  }
  load(data) {
    var _a, _b, _c;
    if (data === void 0) {
      return;
    }
    if (data.angle !== void 0) {
      if (typeof data.angle === "number") {
        this.angle.value = data.angle;
      } else {
        this.angle.load(data.angle);
      }
    }
    this.attract.load(data.attract);
    if (data.decay !== void 0) {
      this.decay = data.decay;
    }
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.drift !== void 0) {
      this.drift = NumberUtils.setRangeValue(data.drift);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.gravity.load(data.gravity);
    const outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;
    if (data.outModes !== void 0 || outMode !== void 0) {
      if (typeof data.outModes === "string" || data.outModes === void 0 && outMode !== void 0) {
        this.outModes.load({
          default: (_b = data.outModes) !== null && _b !== void 0 ? _b : outMode
        });
      } else {
        this.outModes.load(data.outModes);
      }
    }
    this.path.load((_c = data.path) !== null && _c !== void 0 ? _c : data.noise);
    if (data.random !== void 0) {
      this.random = data.random;
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
    if (data.speed !== void 0) {
      this.speed = NumberUtils.setRangeValue(data.speed);
    }
    if (data.straight !== void 0) {
      this.straight = data.straight;
    }
    this.trail.load(data.trail);
    if (data.vibrate !== void 0) {
      this.vibrate = data.vibrate;
    }
    if (data.warp !== void 0) {
      this.warp = data.warp;
    }
  }
};
var Density = class {
  constructor() {
    this.enable = false;
    this.area = 800;
    this.factor = 1e3;
  }
  get value_area() {
    return this.area;
  }
  set value_area(value) {
    this.area = value;
  }
  load(data) {
    var _a;
    if (data === void 0) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
    if (area !== void 0) {
      this.area = area;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
  }
};
var ParticlesNumber = class {
  constructor() {
    this.density = new Density();
    this.limit = 0;
    this.value = 100;
  }
  get max() {
    return this.limit;
  }
  set max(value) {
    this.limit = value;
  }
  load(data) {
    var _a;
    if (data === void 0) {
      return;
    }
    this.density.load(data.density);
    const limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
    if (limit !== void 0) {
      this.limit = limit;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};
var AnimationOptions = class {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.speed = 1;
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = data.count;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};
var OpacityAnimation = class extends AnimationOptions {
  constructor() {
    super();
    this.destroy = DestroyType.none;
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 2;
    this.startValue = StartValueType.random;
    this.sync = false;
  }
  get opacity_min() {
    return this.minimumValue;
  }
  set opacity_min(value) {
    this.minimumValue = value;
  }
  load(data) {
    var _a;
    if (data === void 0) {
      return;
    }
    super.load(data);
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
    if (minimumValue !== void 0) {
      this.minimumValue = minimumValue;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
    if (data.startValue !== void 0) {
      this.startValue = data.startValue;
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};
var Opacity = class extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new OpacityAnimation();
    this.random.minimumValue = 0.1;
    this.value = 1;
  }
  get anim() {
    return this.animation;
  }
  set anim(value) {
    this.animation = value;
  }
  load(data) {
    var _a;
    if (!data) {
      return;
    }
    super.load(data);
    const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
    if (animation !== void 0) {
      this.animation.load(animation);
      this.value = NumberUtils.setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
    }
  }
};
var Shape = class {
  constructor() {
    this.options = {};
    this.type = ShapeType.circle;
  }
  get image() {
    var _a;
    return (_a = this.options[ShapeType.image]) !== null && _a !== void 0 ? _a : this.options[ShapeType.images];
  }
  set image(value) {
    this.options[ShapeType.image] = value;
    this.options[ShapeType.images] = value;
  }
  get custom() {
    return this.options;
  }
  set custom(value) {
    this.options = value;
  }
  get images() {
    return this.image instanceof Array ? this.image : [this.image];
  }
  set images(value) {
    this.image = value;
  }
  get stroke() {
    return [];
  }
  set stroke(_value) {
  }
  get character() {
    var _a;
    return (_a = this.options[ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[ShapeType.char];
  }
  set character(value) {
    this.options[ShapeType.character] = value;
    this.options[ShapeType.char] = value;
  }
  get polygon() {
    var _a;
    return (_a = this.options[ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[ShapeType.star];
  }
  set polygon(value) {
    this.options[ShapeType.polygon] = value;
    this.options[ShapeType.star] = value;
  }
  load(data) {
    var _a, _b, _c;
    if (data === void 0) {
      return;
    }
    const options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
    if (options !== void 0) {
      for (const shape in options) {
        const item = options[shape];
        if (item !== void 0) {
          this.options[shape] = Utils.deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
        }
      }
    }
    this.loadShape(data.character, ShapeType.character, ShapeType.char, true);
    this.loadShape(data.polygon, ShapeType.polygon, ShapeType.star, false);
    this.loadShape((_c = data.image) !== null && _c !== void 0 ? _c : data.images, ShapeType.image, ShapeType.images, true);
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
  loadShape(item, mainKey, altKey, altOverride) {
    var _a, _b, _c, _d;
    if (item === void 0) {
      return;
    }
    if (item instanceof Array) {
      if (!(this.options[mainKey] instanceof Array)) {
        this.options[mainKey] = [];
        if (!this.options[altKey] || altOverride) {
          this.options[altKey] = [];
        }
      }
      this.options[mainKey] = Utils.deepExtend((_a = this.options[mainKey]) !== null && _a !== void 0 ? _a : [], item);
      if (!this.options[altKey] || altOverride) {
        this.options[altKey] = Utils.deepExtend((_b = this.options[altKey]) !== null && _b !== void 0 ? _b : [], item);
      }
    } else {
      if (this.options[mainKey] instanceof Array) {
        this.options[mainKey] = {};
        if (!this.options[altKey] || altOverride) {
          this.options[altKey] = {};
        }
      }
      this.options[mainKey] = Utils.deepExtend((_c = this.options[mainKey]) !== null && _c !== void 0 ? _c : {}, item);
      if (!this.options[altKey] || altOverride) {
        this.options[altKey] = Utils.deepExtend((_d = this.options[altKey]) !== null && _d !== void 0 ? _d : {}, item);
      }
    }
  }
};
var SizeAnimation = class extends AnimationOptions {
  constructor() {
    super();
    this.destroy = DestroyType.none;
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 5;
    this.startValue = StartValueType.random;
    this.sync = false;
  }
  get size_min() {
    return this.minimumValue;
  }
  set size_min(value) {
    this.minimumValue = value;
  }
  load(data) {
    var _a;
    if (data === void 0) {
      return;
    }
    super.load(data);
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
    if (minimumValue !== void 0) {
      this.minimumValue = minimumValue;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
    if (data.startValue !== void 0) {
      this.startValue = data.startValue;
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};
var Size = class extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new SizeAnimation();
    this.random.minimumValue = 1;
    this.value = 3;
  }
  get anim() {
    return this.animation;
  }
  set anim(value) {
    this.animation = value;
  }
  load(data) {
    var _a;
    if (!data) {
      return;
    }
    super.load(data);
    const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
    if (animation !== void 0) {
      this.animation.load(animation);
      this.value = NumberUtils.setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
    }
  }
};
var RotateAnimation = class {
  constructor() {
    this.enable = false;
    this.speed = 0;
    this.sync = false;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};
var Rotate = class extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new RotateAnimation();
    this.direction = RotateDirection.clockwise;
    this.path = false;
    this.value = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
    this.animation.load(data.animation);
    if (data.path !== void 0) {
      this.path = data.path;
    }
  }
};
var Shadow = class {
  constructor() {
    this.blur = 0;
    this.color = new OptionsColor();
    this.enable = false;
    this.offset = {
      x: 0,
      y: 0
    };
    this.color.value = "#000000";
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.blur !== void 0) {
      this.blur = data.blur;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.offset === void 0) {
      return;
    }
    if (data.offset.x !== void 0) {
      this.offset.x = data.offset.x;
    }
    if (data.offset.y !== void 0) {
      this.offset.y = data.offset.y;
    }
  }
};
var ColorAnimation = class {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.offset = 0;
    this.speed = 1;
    this.sync = true;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.count !== void 0) {
      this.count = data.count;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.offset !== void 0) {
      this.offset = NumberUtils.setRangeValue(data.offset);
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};
var HslAnimation = class {
  constructor() {
    this.h = new ColorAnimation();
    this.s = new ColorAnimation();
    this.l = new ColorAnimation();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.h.load(data.h);
    this.s.load(data.s);
    this.l.load(data.l);
  }
};
var AnimatableColor = class extends OptionsColor {
  constructor() {
    super();
    this.animation = new HslAnimation();
  }
  static create(source, data) {
    const color = source !== null && source !== void 0 ? source : new AnimatableColor();
    if (data !== void 0) {
      color.load(typeof data === "string" ? {value: data} : data);
    }
    return color;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    const colorAnimation = data.animation;
    if (colorAnimation !== void 0) {
      if (colorAnimation.enable !== void 0) {
        this.animation.h.load(colorAnimation);
      } else {
        this.animation.load(data.animation);
      }
    }
  }
};
var Stroke = class {
  constructor() {
    this.width = 0;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.color !== void 0) {
      this.color = AnimatableColor.create(this.color, data.color);
    }
    if (data.width !== void 0) {
      this.width = data.width;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};
var BounceFactor = class extends ValueWithRandom {
  constructor() {
    super();
    this.random.minimumValue = 0.1;
    this.value = 1;
  }
};
var Bounce = class {
  constructor() {
    this.horizontal = new BounceFactor();
    this.vertical = new BounceFactor();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.horizontal.load(data.horizontal);
    this.vertical.load(data.vertical);
  }
};
var CollisionsOverlap = class {
  constructor() {
    this.enable = true;
    this.retries = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.retries !== void 0) {
      this.retries = data.retries;
    }
  }
};
var Collisions = class {
  constructor() {
    this.bounce = new Bounce();
    this.enable = false;
    this.mode = CollisionMode.bounce;
    this.overlap = new CollisionsOverlap();
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    this.bounce.load(data.bounce);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.overlap.load(data.overlap);
  }
};
var TwinkleValues = class {
  constructor() {
    this.enable = false;
    this.frequency = 0.05;
    this.opacity = 1;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.frequency !== void 0) {
      this.frequency = data.frequency;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};
var Twinkle = class {
  constructor() {
    this.lines = new TwinkleValues();
    this.particles = new TwinkleValues();
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    this.lines.load(data.lines);
    this.particles.load(data.particles);
  }
};
var LifeDelay = class extends ValueWithRandom {
  constructor() {
    super();
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};
var LifeDuration = class extends ValueWithRandom {
  constructor() {
    super();
    this.random.minimumValue = 1e-4;
    this.sync = false;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    super.load(data);
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};
var Life = class {
  constructor() {
    this.count = 0;
    this.delay = new LifeDelay();
    this.duration = new LifeDuration();
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.count !== void 0) {
      this.count = data.count;
    }
    this.delay.load(data.delay);
    this.duration.load(data.duration);
  }
};
var SplitFactor = class extends ValueWithRandom {
  constructor() {
    super();
    this.value = 3;
  }
};
var SplitRate = class extends ValueWithRandom {
  constructor() {
    super();
    this.value = {min: 4, max: 9};
  }
};
var Split = class {
  constructor() {
    this.count = 1;
    this.factor = new SplitFactor();
    this.rate = new SplitRate();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = data.count;
    }
    this.factor.load(data.factor);
    this.rate.load(data.rate);
    if (data.particles !== void 0) {
      this.particles = Utils.deepExtend({}, data.particles);
    }
  }
};
var Destroy = class {
  constructor() {
    this.mode = DestroyMode.none;
    this.split = new Split();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.split.load(data.split);
  }
};
var ParticlesOptions = class {
  constructor() {
    this.bounce = new Bounce();
    this.collisions = new Collisions();
    this.color = new AnimatableColor();
    this.destroy = new Destroy();
    this.life = new Life();
    this.links = new Links();
    this.move = new Move();
    this.number = new ParticlesNumber();
    this.opacity = new Opacity();
    this.reduceDuplicates = false;
    this.rotate = new Rotate();
    this.shadow = new Shadow();
    this.shape = new Shape();
    this.size = new Size();
    this.stroke = new Stroke();
    this.twinkle = new Twinkle();
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(value) {
    this.links = value;
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(value) {
    this.links = value;
  }
  load(data) {
    var _a, _b, _c, _d, _e2, _f, _g;
    if (data === void 0) {
      return;
    }
    this.bounce.load(data.bounce);
    this.color = AnimatableColor.create(this.color, data.color);
    this.destroy.load(data.destroy);
    this.life.load(data.life);
    const links = (_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked;
    if (links !== void 0) {
      this.links.load(links);
    }
    this.move.load(data.move);
    this.number.load(data.number);
    this.opacity.load(data.opacity);
    if (data.reduceDuplicates !== void 0) {
      this.reduceDuplicates = data.reduceDuplicates;
    }
    this.rotate.load(data.rotate);
    this.shape.load(data.shape);
    this.size.load(data.size);
    this.shadow.load(data.shadow);
    this.twinkle.load(data.twinkle);
    const collisions = (_d = (_c = data.move) === null || _c === void 0 ? void 0 : _c.collisions) !== null && _d !== void 0 ? _d : (_e2 = data.move) === null || _e2 === void 0 ? void 0 : _e2.bounce;
    if (collisions !== void 0) {
      this.collisions.enable = collisions;
    }
    this.collisions.load(data.collisions);
    const strokeToLoad = (_f = data.stroke) !== null && _f !== void 0 ? _f : (_g = data.shape) === null || _g === void 0 ? void 0 : _g.stroke;
    if (strokeToLoad === void 0) {
      return;
    }
    if (strokeToLoad instanceof Array) {
      this.stroke = strokeToLoad.map((s) => {
        const tmp = new Stroke();
        tmp.load(s);
        return tmp;
      });
    } else {
      if (this.stroke instanceof Array) {
        this.stroke = new Stroke();
      }
      this.stroke.load(strokeToLoad);
    }
  }
};
var Infecter = class {
  constructor(container) {
    this.container = container;
  }
  startInfection(stage) {
    const options = this.container.actualOptions;
    const stages = options.infection.stages;
    const stagesCount = stages.length;
    if (stage > stagesCount || stage < 0) {
      return;
    }
    this.infectionDelay = 0;
    this.infectionDelayStage = stage;
  }
  updateInfectionStage(stage) {
    const options = this.container.actualOptions;
    const stagesCount = options.infection.stages.length;
    if (stage > stagesCount || stage < 0 || this.infectionStage !== void 0 && this.infectionStage > stage) {
      return;
    }
    this.infectionStage = stage;
    this.infectionTime = 0;
  }
  updateInfection(delta) {
    const options = this.container.actualOptions;
    const infection = options.infection;
    const stages = options.infection.stages;
    const stagesCount = stages.length;
    if (this.infectionDelay !== void 0 && this.infectionDelayStage !== void 0) {
      const stage = this.infectionDelayStage;
      if (stage > stagesCount || stage < 0) {
        return;
      }
      if (this.infectionDelay > infection.delay * 1e3) {
        this.infectionStage = stage;
        this.infectionTime = 0;
        delete this.infectionDelay;
        delete this.infectionDelayStage;
      } else {
        this.infectionDelay += delta;
      }
    } else {
      delete this.infectionDelay;
      delete this.infectionDelayStage;
    }
    if (this.infectionStage !== void 0 && this.infectionTime !== void 0) {
      const infectionStage = stages[this.infectionStage];
      if (infectionStage.duration !== void 0 && infectionStage.duration >= 0) {
        if (this.infectionTime > infectionStage.duration * 1e3) {
          this.nextInfectionStage();
        } else {
          this.infectionTime += delta;
        }
      } else {
        this.infectionTime += delta;
      }
    } else {
      delete this.infectionStage;
      delete this.infectionTime;
    }
  }
  nextInfectionStage() {
    const options = this.container.actualOptions;
    const stagesCount = options.infection.stages.length;
    if (stagesCount <= 0 || this.infectionStage === void 0) {
      return;
    }
    this.infectionTime = 0;
    if (stagesCount <= ++this.infectionStage) {
      if (options.infection.cure) {
        delete this.infectionStage;
        delete this.infectionTime;
        return;
      } else {
        this.infectionStage = 0;
        this.infectionTime = 0;
      }
    }
  }
};
var Mover = class {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }
  move(delta) {
    const particle = this.particle;
    particle.bubble.inRange = false;
    particle.links = [];
    for (const [, plugin2] of this.container.plugins) {
      if (particle.destroyed) {
        break;
      }
      if (plugin2.particleUpdate) {
        plugin2.particleUpdate(particle, delta);
      }
    }
    if (particle.destroyed) {
      return;
    }
    this.moveParticle(delta);
    this.moveParallax();
  }
  moveParticle(delta) {
    var _a, _b;
    const particle = this.particle;
    const particlesOptions = particle.options;
    if (!particlesOptions.move.enable) {
      return;
    }
    const container = this.container;
    const slowFactor = this.getProximitySpeedFactor();
    const baseSpeed = ((_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : NumberUtils.getRangeValue(particle.options.move.speed) * container.retina.pixelRatio) * container.retina.reduceFactor;
    const maxSize = NumberUtils.getRangeMax(particle.options.size.value) * container.retina.pixelRatio;
    const sizeFactor = particlesOptions.move.size ? particle.getRadius() / maxSize : 1;
    const moveSpeed = baseSpeed / 2 * sizeFactor * slowFactor * delta.factor;
    const moveDrift = (_b = particle.moveDrift) !== null && _b !== void 0 ? _b : NumberUtils.getRangeValue(particle.options.move.drift) * container.retina.pixelRatio;
    this.applyPath(delta);
    const gravityOptions = particlesOptions.move.gravity;
    if (gravityOptions.enable) {
      particle.velocity.y += gravityOptions.acceleration * delta.factor / (60 * moveSpeed);
    }
    if (moveSpeed) {
      particle.velocity.x += moveDrift * delta.factor / (60 * moveSpeed);
    }
    const decay = 1 - particle.options.move.decay;
    particle.velocity.multTo(decay);
    const velocity = particle.velocity.mult(moveSpeed);
    if (gravityOptions.enable && velocity.y >= gravityOptions.maxSpeed && gravityOptions.maxSpeed > 0) {
      velocity.y = gravityOptions.maxSpeed;
      if (moveSpeed) {
        particle.velocity.y = velocity.y / moveSpeed;
      }
    }
    particle.position.addTo(velocity);
    if (particlesOptions.move.vibrate) {
      particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
      particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
    }
    const initialPosition = particle.initialPosition;
    const initialDistance = NumberUtils.getDistance(initialPosition, particle.position);
    if (particle.maxDistance) {
      if (initialDistance >= particle.maxDistance && !particle.misplaced) {
        particle.misplaced = initialDistance > particle.maxDistance;
        particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
        particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
      } else if (initialDistance < particle.maxDistance && particle.misplaced) {
        particle.misplaced = false;
      } else if (particle.misplaced) {
        if (particle.position.x < initialPosition.x && particle.velocity.x < 0 || particle.position.x > initialPosition.x && particle.velocity.x > 0) {
          particle.velocity.x *= -Math.random();
        }
        if (particle.position.y < initialPosition.y && particle.velocity.y < 0 || particle.position.y > initialPosition.y && particle.velocity.y > 0) {
          particle.velocity.y *= -Math.random();
        }
      }
    }
  }
  applyPath(delta) {
    const particle = this.particle;
    const particlesOptions = particle.options;
    const pathOptions = particlesOptions.move.path;
    const pathEnabled = pathOptions.enable;
    if (!pathEnabled) {
      return;
    }
    const container = this.container;
    if (particle.lastPathTime <= particle.pathDelay) {
      particle.lastPathTime += delta.value;
      return;
    }
    let generator = container.pathGenerator;
    if (pathOptions.generator) {
      const customGenerator = Plugins.getPathGenerator(pathOptions.generator);
      if (customGenerator) {
        generator = customGenerator;
      }
    }
    const path = generator.generate(particle);
    particle.velocity.addTo(path);
    if (pathOptions.clamp) {
      particle.velocity.x = NumberUtils.clamp(particle.velocity.x, -1, 1);
      particle.velocity.y = NumberUtils.clamp(particle.velocity.y, -1, 1);
    }
    particle.lastPathTime -= particle.pathDelay;
  }
  moveParallax() {
    const container = this.container;
    const options = container.actualOptions;
    if (Utils.isSsr() || !options.interactivity.events.onHover.parallax.enable) {
      return;
    }
    const particle = this.particle;
    const parallaxForce = options.interactivity.events.onHover.parallax.force;
    const mousePos = container.interactivity.mouse.position;
    if (!mousePos) {
      return;
    }
    const canvasCenter = {
      x: container.canvas.size.width / 2,
      y: container.canvas.size.height / 2
    };
    const parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
    const factor = particle.getRadius() / parallaxForce;
    const tmp = {
      x: (mousePos.x - canvasCenter.x) * factor,
      y: (mousePos.y - canvasCenter.y) * factor
    };
    particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
    particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
  }
  getProximitySpeedFactor() {
    const container = this.container;
    const options = container.actualOptions;
    const active = Utils.isInArray(HoverMode.slow, options.interactivity.events.onHover.mode);
    if (!active) {
      return 1;
    }
    const mousePos = this.container.interactivity.mouse.position;
    if (!mousePos) {
      return 1;
    }
    const particlePos = this.particle.getPosition();
    const dist = NumberUtils.getDistance(mousePos, particlePos);
    const radius = container.retina.slowModeRadius;
    if (dist > radius) {
      return 1;
    }
    const proximityFactor = dist / radius || 0;
    const slowFactor = options.interactivity.modes.slow.factor;
    return proximityFactor / slowFactor;
  }
};
var Particle = class {
  constructor(id2, container, position, overrideOptions) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _j;
    this.id = id2;
    this.container = container;
    this.links = [];
    this.fill = true;
    this.close = true;
    this.lastPathTime = 0;
    this.destroyed = false;
    this.unbreakable = false;
    this.splitCount = 0;
    this.misplaced = false;
    this.loops = {
      opacity: 0,
      size: 0
    };
    const pxRatio = container.retina.pixelRatio;
    const options = container.actualOptions;
    const particlesOptions = new ParticlesOptions();
    particlesOptions.load(options.particles);
    const shapeType = particlesOptions.shape.type;
    const reduceDuplicates = particlesOptions.reduceDuplicates;
    this.shape = shapeType instanceof Array ? Utils.itemFromArray(shapeType, this.id, reduceDuplicates) : shapeType;
    if (overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) {
      if (overrideOptions.shape.type) {
        const overrideShapeType = overrideOptions.shape.type;
        this.shape = overrideShapeType instanceof Array ? Utils.itemFromArray(overrideShapeType, this.id, reduceDuplicates) : overrideShapeType;
      }
      const shapeOptions = new Shape();
      shapeOptions.load(overrideOptions.shape);
      if (this.shape) {
        const shapeData = shapeOptions.options[this.shape];
        if (shapeData) {
          this.shapeData = Utils.deepExtend({}, shapeData instanceof Array ? Utils.itemFromArray(shapeData, this.id, reduceDuplicates) : shapeData);
        }
      }
    } else {
      const shapeData = particlesOptions.shape.options[this.shape];
      if (shapeData) {
        this.shapeData = Utils.deepExtend({}, shapeData instanceof Array ? Utils.itemFromArray(shapeData, this.id, reduceDuplicates) : shapeData);
      }
    }
    if (overrideOptions !== void 0) {
      particlesOptions.load(overrideOptions);
    }
    if (((_a = this.shapeData) === null || _a === void 0 ? void 0 : _a.particles) !== void 0) {
      particlesOptions.load((_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.particles);
    }
    this.fill = (_d = (_c = this.shapeData) === null || _c === void 0 ? void 0 : _c.fill) !== null && _d !== void 0 ? _d : this.fill;
    this.close = (_f = (_e2 = this.shapeData) === null || _e2 === void 0 ? void 0 : _e2.close) !== null && _f !== void 0 ? _f : this.close;
    this.options = particlesOptions;
    this.pathDelay = NumberUtils.getValue(this.options.move.path.delay) * 1e3;
    container.retina.initParticle(this);
    const color = this.options.color;
    const sizeOptions = this.options.size;
    const sizeValue = NumberUtils.getValue(sizeOptions) * container.retina.pixelRatio;
    const randomSize = typeof sizeOptions.random === "boolean" ? sizeOptions.random : sizeOptions.random.enable;
    this.size = {
      value: sizeValue
    };
    this.direction = NumberUtils.getParticleDirectionAngle(this.options.move.direction);
    this.bubble = {
      inRange: false
    };
    this.initialVelocity = this.calculateVelocity();
    this.velocity = this.initialVelocity.copy();
    const rotateOptions = this.options.rotate;
    this.rotate = {
      value: NumberUtils.getRangeValue(rotateOptions.value) * Math.PI / 180
    };
    let rotateDirection = rotateOptions.direction;
    if (rotateDirection === RotateDirection.random) {
      const index3 = Math.floor(Math.random() * 2);
      rotateDirection = index3 > 0 ? RotateDirection.counterClockwise : RotateDirection.clockwise;
    }
    switch (rotateDirection) {
      case RotateDirection.counterClockwise:
      case "counterClockwise":
        this.rotate.status = AnimationStatus.decreasing;
        break;
      case RotateDirection.clockwise:
        this.rotate.status = AnimationStatus.increasing;
        break;
    }
    const rotateAnimation = this.options.rotate.animation;
    if (rotateAnimation.enable) {
      this.rotate.velocity = rotateAnimation.speed / 360 * container.retina.reduceFactor;
      if (!rotateAnimation.sync) {
        this.rotate.velocity *= Math.random();
      }
    }
    const sizeAnimation = this.options.size.animation;
    if (sizeAnimation.enable) {
      this.size.status = AnimationStatus.increasing;
      if (!randomSize) {
        switch (sizeAnimation.startValue) {
          case StartValueType.min:
            this.size.value = sizeAnimation.minimumValue * pxRatio;
            break;
          case StartValueType.random:
            this.size.value = NumberUtils.randomInRange(NumberUtils.setRangeValue(sizeAnimation.minimumValue * pxRatio, this.size.value));
            break;
          case StartValueType.max:
          default:
            this.size.status = AnimationStatus.decreasing;
            break;
        }
      }
      this.size.velocity = ((_g = this.sizeAnimationSpeed) !== null && _g !== void 0 ? _g : container.retina.sizeAnimationSpeed) / 100 * container.retina.reduceFactor;
      if (!sizeAnimation.sync) {
        this.size.velocity *= Math.random();
      }
    }
    const hslColor = ColorUtils.colorToHsl(color, this.id, reduceDuplicates);
    if (hslColor) {
      this.color = {
        h: {
          value: hslColor.h
        },
        s: {
          value: hslColor.s
        },
        l: {
          value: hslColor.l
        }
      };
      const colorAnimation = this.options.color.animation;
      this.setColorAnimation(colorAnimation.h, this.color.h);
      this.setColorAnimation(colorAnimation.s, this.color.s);
      this.setColorAnimation(colorAnimation.l, this.color.l);
    }
    this.position = this.calcPosition(this.container, position);
    this.initialPosition = this.position.copy();
    this.offset = Vector.create(0, 0);
    const opacityOptions = this.options.opacity;
    const randomOpacity = typeof opacityOptions.random === "boolean" ? opacityOptions.random : opacityOptions.random.enable;
    this.opacity = {
      value: NumberUtils.getValue(opacityOptions)
    };
    const opacityAnimation = opacityOptions.animation;
    if (opacityAnimation.enable) {
      this.opacity.status = AnimationStatus.increasing;
      if (!randomOpacity) {
        switch (opacityAnimation.startValue) {
          case StartValueType.min:
            this.opacity.value = opacityAnimation.minimumValue;
            break;
          case StartValueType.random:
            this.opacity.value = NumberUtils.randomInRange(NumberUtils.setRangeValue(opacityAnimation.minimumValue, this.opacity.value));
            break;
          case StartValueType.max:
          default:
            this.opacity.status = AnimationStatus.decreasing;
            break;
        }
      }
      this.opacity.velocity = opacityAnimation.speed / 100 * container.retina.reduceFactor;
      if (!opacityAnimation.sync) {
        this.opacity.velocity *= Math.random();
      }
    }
    this.sides = 24;
    let drawer = container.drawers.get(this.shape);
    if (!drawer) {
      drawer = Plugins.getShapeDrawer(this.shape);
      if (drawer) {
        container.drawers.set(this.shape, drawer);
      }
    }
    const sideCountFunc = drawer === null || drawer === void 0 ? void 0 : drawer.getSidesCount;
    if (sideCountFunc) {
      this.sides = sideCountFunc(this);
    }
    const imageShape = this.loadImageShape(container, drawer);
    if (imageShape) {
      this.image = imageShape.image;
      this.fill = imageShape.fill;
      this.close = imageShape.close;
    }
    this.stroke = this.options.stroke instanceof Array ? Utils.itemFromArray(this.options.stroke, this.id, reduceDuplicates) : this.options.stroke;
    this.strokeWidth = this.stroke.width * container.retina.pixelRatio;
    const strokeHslColor = (_h = ColorUtils.colorToHsl(this.stroke.color)) !== null && _h !== void 0 ? _h : this.getFillColor();
    if (strokeHslColor) {
      this.strokeColor = {
        h: {
          value: strokeHslColor.h
        },
        s: {
          value: strokeHslColor.s
        },
        l: {
          value: strokeHslColor.l
        }
      };
      const strokeColorAnimation = (_j = this.stroke.color) === null || _j === void 0 ? void 0 : _j.animation;
      if (strokeColorAnimation && this.strokeColor) {
        this.setColorAnimation(strokeColorAnimation.h, this.strokeColor.h);
        this.setColorAnimation(strokeColorAnimation.s, this.strokeColor.s);
        this.setColorAnimation(strokeColorAnimation.l, this.strokeColor.l);
      }
    }
    const lifeOptions = particlesOptions.life;
    this.lifeDelay = container.retina.reduceFactor ? NumberUtils.getValue(lifeOptions.delay) * (lifeOptions.delay.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1e3 : 0;
    this.lifeDelayTime = 0;
    this.lifeDuration = container.retina.reduceFactor ? NumberUtils.getValue(lifeOptions.duration) * (lifeOptions.duration.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1e3 : 0;
    this.lifeTime = 0;
    this.livesRemaining = particlesOptions.life.count;
    this.spawning = this.lifeDelay > 0;
    if (this.lifeDuration <= 0) {
      this.lifeDuration = -1;
    }
    if (this.livesRemaining <= 0) {
      this.livesRemaining = -1;
    }
    this.shadowColor = ColorUtils.colorToRgb(this.options.shadow.color);
    this.updater = new Updater(container, this);
    this.infecter = new Infecter(container);
    this.mover = new Mover(container, this);
    if (drawer && drawer.particleInit) {
      drawer.particleInit(container, this);
    }
  }
  move(delta) {
    this.mover.move(delta);
  }
  update(delta) {
    this.updater.update(delta);
  }
  draw(delta) {
    this.container.canvas.drawParticle(this, delta);
  }
  getPosition() {
    return this.position.add(this.offset);
  }
  getRadius() {
    return this.bubble.radius || this.size.value;
  }
  getMass() {
    const radius = this.getRadius();
    return Math.pow(radius, 2) * Math.PI / 2;
  }
  getFillColor() {
    var _a;
    return (_a = this.bubble.color) !== null && _a !== void 0 ? _a : ColorUtils.getHslFromAnimation(this.color);
  }
  getStrokeColor() {
    var _a, _b;
    return (_b = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : ColorUtils.getHslFromAnimation(this.strokeColor)) !== null && _b !== void 0 ? _b : this.getFillColor();
  }
  destroy(override) {
    this.destroyed = true;
    this.bubble.inRange = false;
    this.links = [];
    if (this.unbreakable) {
      return;
    }
    this.destroyed = true;
    this.bubble.inRange = false;
    for (const [, plugin2] of this.container.plugins) {
      if (plugin2.particleDestroyed) {
        plugin2.particleDestroyed(this, override);
      }
    }
    if (override) {
      return;
    }
    const destroyOptions = this.options.destroy;
    if (destroyOptions.mode === DestroyMode.split) {
      this.split();
    }
  }
  reset() {
    this.loops.opacity = 0;
    this.loops.size = 0;
  }
  split() {
    const splitOptions = this.options.destroy.split;
    if (splitOptions.count >= 0 && this.splitCount++ > splitOptions.count) {
      return;
    }
    const rate = NumberUtils.getRangeValue(splitOptions.rate.value);
    for (let i = 0; i < rate; i++) {
      this.container.particles.addSplitParticle(this);
    }
  }
  setColorAnimation(colorAnimation, colorValue) {
    if (colorAnimation.enable) {
      colorValue.velocity = colorAnimation.speed / 100 * this.container.retina.reduceFactor;
      if (colorAnimation.sync) {
        return;
      }
      colorValue.status = AnimationStatus.increasing;
      colorValue.velocity *= Math.random();
      if (colorValue.value) {
        colorValue.value *= Math.random();
      }
    } else {
      colorValue.velocity = 0;
    }
  }
  calcPosition(container, position, tryCount = 0) {
    var _a, _b;
    for (const [, plugin2] of container.plugins) {
      const pluginPos = plugin2.particlePosition !== void 0 ? plugin2.particlePosition(position, this) : void 0;
      if (pluginPos !== void 0) {
        return Vector.create(pluginPos.x, pluginPos.y);
      }
    }
    const canvasSize = container.canvas.size;
    const pos = Vector.create((_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width, (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height);
    const outMode = this.options.move.outMode;
    if (Utils.isInArray(outMode, OutMode.bounce) || Utils.isInArray(outMode, OutMode.bounceHorizontal)) {
      if (pos.x > container.canvas.size.width - this.size.value * 2) {
        pos.x -= this.size.value;
      } else if (pos.x < this.size.value * 2) {
        pos.x += this.size.value;
      }
    }
    if (Utils.isInArray(outMode, OutMode.bounce) || Utils.isInArray(outMode, OutMode.bounceVertical)) {
      if (pos.y > container.canvas.size.height - this.size.value * 2) {
        pos.y -= this.size.value;
      } else if (pos.y < this.size.value * 2) {
        pos.y += this.size.value;
      }
    }
    if (this.checkOverlap(pos, tryCount)) {
      return this.calcPosition(container, void 0, tryCount + 1);
    }
    return pos;
  }
  checkOverlap(pos, tryCount = 0) {
    const overlapOptions = this.options.collisions.overlap;
    if (!overlapOptions.enable) {
      const retries = overlapOptions.retries;
      if (retries >= 0 && tryCount > retries) {
        throw new Error("Particle is overlapping and can't be placed");
      }
      let overlaps = false;
      for (const particle of this.container.particles.array) {
        if (NumberUtils.getDistance(pos, particle.position) < this.size.value + particle.size.value) {
          overlaps = true;
          break;
        }
      }
      return overlaps;
    }
    return false;
  }
  calculateVelocity() {
    const baseVelocity = NumberUtils.getParticleBaseVelocity(this.direction);
    const res = baseVelocity.copy();
    const moveOptions = this.options.move;
    let rad;
    let radOffset = Math.PI / 4;
    if (typeof moveOptions.angle === "number") {
      rad = Math.PI / 180 * moveOptions.angle;
    } else {
      rad = Math.PI / 180 * moveOptions.angle.value;
      radOffset = Math.PI / 180 * moveOptions.angle.offset;
    }
    const range = {
      left: Math.sin(radOffset + rad / 2) - Math.sin(radOffset - rad / 2),
      right: Math.cos(radOffset + rad / 2) - Math.cos(radOffset - rad / 2)
    };
    if (!moveOptions.straight || moveOptions.random) {
      res.x += NumberUtils.randomInRange(NumberUtils.setRangeValue(range.left, range.right)) / 2;
      res.y += NumberUtils.randomInRange(NumberUtils.setRangeValue(range.left, range.right)) / 2;
    }
    return res;
  }
  loadImageShape(container, drawer) {
    var _a, _b, _c, _d, _e2;
    if (!(this.shape === ShapeType.image || this.shape === ShapeType.images)) {
      return;
    }
    const imageDrawer = drawer;
    const images = imageDrawer.getImages(container).images;
    const imageData = this.shapeData;
    const image = (_a = images.find((t3) => t3.source === imageData.src)) !== null && _a !== void 0 ? _a : images[0];
    const color = this.getFillColor();
    let imageRes;
    if (!image) {
      return;
    }
    if (image.svgData !== void 0 && imageData.replaceColor && color) {
      const svgColoredData = ColorUtils.replaceColorSvg(image, color, this.opacity.value);
      const svg = new Blob([svgColoredData], {type: "image/svg+xml"});
      const domUrl = URL || window.URL || window.webkitURL || window;
      const url = domUrl.createObjectURL(svg);
      const img = new Image();
      imageRes = {
        data: Object.assign(Object.assign({}, image), {svgData: svgColoredData}),
        loaded: false,
        ratio: imageData.width / imageData.height,
        replaceColor: (_b = imageData.replaceColor) !== null && _b !== void 0 ? _b : imageData.replace_color,
        source: imageData.src
      };
      img.addEventListener("load", () => {
        if (this.image) {
          this.image.loaded = true;
          image.element = img;
        }
        domUrl.revokeObjectURL(url);
      });
      img.addEventListener("error", () => {
        domUrl.revokeObjectURL(url);
        Utils.loadImage(imageData.src).then((img2) => {
          if (this.image && img2) {
            image.element = img2.element;
            this.image.loaded = true;
          }
        });
      });
      img.src = url;
    } else {
      imageRes = {
        data: image,
        loaded: true,
        ratio: imageData.width / imageData.height,
        replaceColor: (_c = imageData.replaceColor) !== null && _c !== void 0 ? _c : imageData.replace_color,
        source: imageData.src
      };
    }
    if (!imageRes.ratio) {
      imageRes.ratio = 1;
    }
    const fill = (_d = imageData.fill) !== null && _d !== void 0 ? _d : this.fill;
    const close = (_e2 = imageData.close) !== null && _e2 !== void 0 ? _e2 : this.close;
    return {
      image: imageRes,
      fill,
      close
    };
  }
};
var Grabber = class {
  constructor(container) {
    this.container = container;
  }
  isEnabled() {
    const container = this.container;
    const mouse = container.interactivity.mouse;
    const events = container.actualOptions.interactivity.events;
    if (!(events.onHover.enable && mouse.position)) {
      return false;
    }
    const hoverMode = events.onHover.mode;
    return Utils.isInArray(HoverMode.grab, hoverMode);
  }
  reset() {
  }
  interact() {
    var _a;
    const container = this.container;
    const options = container.actualOptions;
    const interactivity = options.interactivity;
    if (interactivity.events.onHover.enable && container.interactivity.status === Constants.mouseMoveEvent) {
      const mousePos = container.interactivity.mouse.position;
      if (mousePos === void 0) {
        return;
      }
      const distance = container.retina.grabModeDistance;
      const query = container.particles.quadTree.queryCircle(mousePos, distance);
      for (const particle of query) {
        const pos = particle.getPosition();
        const pointDistance = NumberUtils.getDistance(pos, mousePos);
        if (pointDistance <= distance) {
          const grabLineOptions = interactivity.modes.grab.links;
          const lineOpacity = grabLineOptions.opacity;
          const opacityLine = lineOpacity - pointDistance * lineOpacity / distance;
          if (opacityLine > 0) {
            const optColor = (_a = grabLineOptions.color) !== null && _a !== void 0 ? _a : particle.options.links.color;
            if (!container.particles.grabLineColor) {
              const linksOptions = container.actualOptions.interactivity.modes.grab.links;
              container.particles.grabLineColor = ColorUtils.getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
            }
            const colorLine = ColorUtils.getLinkColor(particle, void 0, container.particles.grabLineColor);
            if (colorLine === void 0) {
              return;
            }
            container.canvas.drawGrabLine(particle, colorLine, opacityLine, mousePos);
          }
        }
      }
    }
  }
};
var Repulser = class {
  constructor(container) {
    this.container = container;
  }
  isEnabled() {
    const container = this.container;
    const options = container.actualOptions;
    const mouse = container.interactivity.mouse;
    const events = options.interactivity.events;
    const divs = events.onDiv;
    const divRepulse = Utils.isDivModeEnabled(DivMode.repulse, divs);
    if (!(divRepulse || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
      return false;
    }
    const hoverMode = events.onHover.mode;
    const clickMode = events.onClick.mode;
    return Utils.isInArray(HoverMode.repulse, hoverMode) || Utils.isInArray(ClickMode.repulse, clickMode) || divRepulse;
  }
  reset() {
  }
  interact() {
    const container = this.container;
    const options = container.actualOptions;
    const mouseMoveStatus = container.interactivity.status === Constants.mouseMoveEvent;
    const events = options.interactivity.events;
    const hoverEnabled = events.onHover.enable;
    const hoverMode = events.onHover.mode;
    const clickEnabled = events.onClick.enable;
    const clickMode = events.onClick.mode;
    const divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && Utils.isInArray(HoverMode.repulse, hoverMode)) {
      this.hoverRepulse();
    } else if (clickEnabled && Utils.isInArray(ClickMode.repulse, clickMode)) {
      this.clickRepulse();
    } else {
      Utils.divModeExecute(DivMode.repulse, divs, (selector, div) => this.singleSelectorRepulse(selector, div));
    }
  }
  singleSelectorRepulse(selector, div) {
    const container = this.container;
    const query = document.querySelectorAll(selector);
    if (!query.length) {
      return;
    }
    query.forEach((item) => {
      const elem = item;
      const pxRatio = container.retina.pixelRatio;
      const pos = {
        x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
        y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
      };
      const repulseRadius = elem.offsetWidth / 2 * pxRatio;
      const area = div.type === DivType.circle ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio);
      const divs = container.actualOptions.interactivity.modes.repulse.divs;
      const divRepulse = Utils.divMode(divs, elem);
      this.processRepulse(pos, repulseRadius, area, divRepulse);
    });
  }
  hoverRepulse() {
    const container = this.container;
    const mousePos = container.interactivity.mouse.position;
    if (!mousePos) {
      return;
    }
    const repulseRadius = container.retina.repulseModeDistance;
    this.processRepulse(mousePos, repulseRadius, new Circle(mousePos.x, mousePos.y, repulseRadius));
  }
  processRepulse(position, repulseRadius, area, divRepulse) {
    var _a;
    const container = this.container;
    const repulseOptions = container.actualOptions.interactivity.modes.repulse;
    const query = container.particles.quadTree.query(area);
    for (const particle of query) {
      const {dx, dy, distance} = NumberUtils.getDistances(particle.position, position);
      const normVec = {
        x: dx / distance,
        y: dy / distance
      };
      const velocity = ((_a = divRepulse === null || divRepulse === void 0 ? void 0 : divRepulse.speed) !== null && _a !== void 0 ? _a : repulseOptions.speed) * repulseOptions.factor;
      const repulseFactor = NumberUtils.clamp(NumberUtils.calcEasing(1 - distance / repulseRadius, repulseOptions.easing) * velocity, 0, repulseOptions.maxSpeed);
      particle.position.x += normVec.x * repulseFactor;
      particle.position.y += normVec.y * repulseFactor;
    }
  }
  clickRepulse() {
    const container = this.container;
    if (!container.repulse.finish) {
      if (!container.repulse.count) {
        container.repulse.count = 0;
      }
      container.repulse.count++;
      if (container.repulse.count === container.particles.count) {
        container.repulse.finish = true;
      }
    }
    if (container.repulse.clicking) {
      const repulseDistance = container.retina.repulseModeDistance;
      const repulseRadius = Math.pow(repulseDistance / 6, 3);
      const mouseClickPos = container.interactivity.mouse.clickPosition;
      if (mouseClickPos === void 0) {
        return;
      }
      const range = new Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius);
      const query = container.particles.quadTree.query(range);
      for (const particle of query) {
        const {dx, dy, distance} = NumberUtils.getDistances(mouseClickPos, particle.position);
        const d4 = distance * distance;
        if (d4 <= repulseRadius) {
          container.repulse.particles.push(particle);
          const velocity = container.actualOptions.interactivity.modes.repulse.speed;
          const v4 = Vector.create(dx, dy);
          v4.length = -repulseRadius * velocity / d4;
          particle.velocity.setTo(v4);
        }
      }
    } else if (container.repulse.clicking === false) {
      for (const particle of container.repulse.particles) {
        particle.velocity.setTo(particle.initialVelocity);
      }
      container.repulse.particles = [];
    }
  }
};
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
  if (modeValue > optionsValue) {
    const size = particleValue + (modeValue - optionsValue) * ratio;
    return NumberUtils.clamp(size, particleValue, modeValue);
  } else if (modeValue < optionsValue) {
    const size = particleValue - (optionsValue - modeValue) * ratio;
    return NumberUtils.clamp(size, modeValue, particleValue);
  }
}
var Bubbler = class {
  constructor(container) {
    this.container = container;
  }
  isEnabled() {
    const container = this.container;
    const options = container.actualOptions;
    const mouse = container.interactivity.mouse;
    const events = options.interactivity.events;
    const divs = events.onDiv;
    const divBubble = Utils.isDivModeEnabled(DivMode.bubble, divs);
    if (!(divBubble || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
      return false;
    }
    const hoverMode = events.onHover.mode;
    const clickMode = events.onClick.mode;
    return Utils.isInArray(HoverMode.bubble, hoverMode) || Utils.isInArray(ClickMode.bubble, clickMode) || divBubble;
  }
  reset(particle, force) {
    if (!particle.bubble.inRange || force) {
      delete particle.bubble.div;
      delete particle.bubble.opacity;
      delete particle.bubble.radius;
      delete particle.bubble.color;
    }
  }
  interact() {
    const options = this.container.actualOptions;
    const events = options.interactivity.events;
    const onHover = events.onHover;
    const onClick = events.onClick;
    const hoverEnabled = onHover.enable;
    const hoverMode = onHover.mode;
    const clickEnabled = onClick.enable;
    const clickMode = onClick.mode;
    const divs = events.onDiv;
    if (hoverEnabled && Utils.isInArray(HoverMode.bubble, hoverMode)) {
      this.hoverBubble();
    } else if (clickEnabled && Utils.isInArray(ClickMode.bubble, clickMode)) {
      this.clickBubble();
    } else {
      Utils.divModeExecute(DivMode.bubble, divs, (selector, div) => this.singleSelectorHover(selector, div));
    }
  }
  singleSelectorHover(selector, div) {
    const container = this.container;
    const selectors = document.querySelectorAll(selector);
    if (!selectors.length) {
      return;
    }
    selectors.forEach((item) => {
      const elem = item;
      const pxRatio = container.retina.pixelRatio;
      const pos = {
        x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
        y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
      };
      const repulseRadius = elem.offsetWidth / 2 * pxRatio;
      const area = div.type === DivType.circle ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio);
      const query = container.particles.quadTree.query(area);
      for (const particle of query) {
        if (!area.contains(particle.getPosition())) {
          continue;
        }
        particle.bubble.inRange = true;
        const divs = container.actualOptions.interactivity.modes.bubble.divs;
        const divBubble = Utils.divMode(divs, elem);
        if (!particle.bubble.div || particle.bubble.div !== elem) {
          this.reset(particle, true);
          particle.bubble.div = elem;
        }
        this.hoverBubbleSize(particle, 1, divBubble);
        this.hoverBubbleOpacity(particle, 1, divBubble);
        this.hoverBubbleColor(particle, divBubble);
      }
    });
  }
  process(particle, distMouse, timeSpent, data) {
    const container = this.container;
    const bubbleParam = data.bubbleObj.optValue;
    if (bubbleParam === void 0) {
      return;
    }
    const options = container.actualOptions;
    const bubbleDuration = options.interactivity.modes.bubble.duration;
    const bubbleDistance = container.retina.bubbleModeDistance;
    const particlesParam = data.particlesObj.optValue;
    const pObjBubble = data.bubbleObj.value;
    const pObj = data.particlesObj.value || 0;
    const type = data.type;
    if (bubbleParam !== particlesParam) {
      if (!container.bubble.durationEnd) {
        if (distMouse <= bubbleDistance) {
          const obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
          if (obj !== bubbleParam) {
            const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
            if (type === ProcessBubbleType.size) {
              particle.bubble.radius = value;
            }
            if (type === ProcessBubbleType.opacity) {
              particle.bubble.opacity = value;
            }
          }
        } else {
          if (type === ProcessBubbleType.size) {
            delete particle.bubble.radius;
          }
          if (type === ProcessBubbleType.opacity) {
            delete particle.bubble.opacity;
          }
        }
      } else if (pObjBubble) {
        if (type === ProcessBubbleType.size) {
          delete particle.bubble.radius;
        }
        if (type === ProcessBubbleType.opacity) {
          delete particle.bubble.opacity;
        }
      }
    }
  }
  clickBubble() {
    const container = this.container;
    const options = container.actualOptions;
    const mouseClickPos = container.interactivity.mouse.clickPosition;
    if (mouseClickPos === void 0) {
      return;
    }
    const distance = container.retina.bubbleModeDistance;
    const query = container.particles.quadTree.queryCircle(mouseClickPos, distance);
    for (const particle of query) {
      if (!container.bubble.clicking) {
        continue;
      }
      particle.bubble.inRange = !container.bubble.durationEnd;
      const pos = particle.getPosition();
      const distMouse = NumberUtils.getDistance(pos, mouseClickPos);
      const timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1e3;
      if (timeSpent > options.interactivity.modes.bubble.duration) {
        container.bubble.durationEnd = true;
      }
      if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
        container.bubble.clicking = false;
        container.bubble.durationEnd = false;
      }
      const sizeData = {
        bubbleObj: {
          optValue: container.retina.bubbleModeSize,
          value: particle.bubble.radius
        },
        particlesObj: {
          optValue: NumberUtils.getRangeMax(particle.options.size.value) * container.retina.pixelRatio,
          value: particle.size.value
        },
        type: ProcessBubbleType.size
      };
      this.process(particle, distMouse, timeSpent, sizeData);
      const opacityData = {
        bubbleObj: {
          optValue: options.interactivity.modes.bubble.opacity,
          value: particle.bubble.opacity
        },
        particlesObj: {
          optValue: NumberUtils.getRangeMax(particle.options.opacity.value),
          value: particle.opacity.value
        },
        type: ProcessBubbleType.opacity
      };
      this.process(particle, distMouse, timeSpent, opacityData);
      if (!container.bubble.durationEnd) {
        if (distMouse <= container.retina.bubbleModeDistance) {
          this.hoverBubbleColor(particle);
        } else {
          delete particle.bubble.color;
        }
      } else {
        delete particle.bubble.color;
      }
    }
  }
  hoverBubble() {
    const container = this.container;
    const mousePos = container.interactivity.mouse.position;
    if (mousePos === void 0) {
      return;
    }
    const distance = container.retina.bubbleModeDistance;
    const query = container.particles.quadTree.queryCircle(mousePos, distance);
    for (const particle of query) {
      particle.bubble.inRange = true;
      const pos = particle.getPosition();
      const pointDistance = NumberUtils.getDistance(pos, mousePos);
      const ratio = 1 - pointDistance / distance;
      if (pointDistance <= distance) {
        if (ratio >= 0 && container.interactivity.status === Constants.mouseMoveEvent) {
          this.hoverBubbleSize(particle, ratio);
          this.hoverBubbleOpacity(particle, ratio);
          this.hoverBubbleColor(particle);
        }
      } else {
        this.reset(particle);
      }
      if (container.interactivity.status === Constants.mouseLeaveEvent) {
        this.reset(particle);
      }
    }
  }
  hoverBubbleSize(particle, ratio, divBubble) {
    const container = this.container;
    const modeSize = (divBubble === null || divBubble === void 0 ? void 0 : divBubble.size) ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
    if (modeSize === void 0) {
      return;
    }
    const optSize = NumberUtils.getRangeMax(particle.options.size.value) * container.retina.pixelRatio;
    const pSize = particle.size.value;
    const size = calculateBubbleValue(pSize, modeSize, optSize, ratio);
    if (size !== void 0) {
      particle.bubble.radius = size;
    }
  }
  hoverBubbleOpacity(particle, ratio, divBubble) {
    var _a;
    const options = this.container.actualOptions;
    const modeOpacity = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.opacity) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.opacity;
    if (modeOpacity === void 0) {
      return;
    }
    const optOpacity = particle.options.opacity.value;
    const pOpacity = particle.opacity.value;
    const opacity = calculateBubbleValue(pOpacity, modeOpacity, NumberUtils.getRangeMax(optOpacity), ratio);
    if (opacity !== void 0) {
      particle.bubble.opacity = opacity;
    }
  }
  hoverBubbleColor(particle, divBubble) {
    var _a;
    const options = this.container.actualOptions;
    if (particle.bubble.color === void 0) {
      const modeColor = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.color) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.color;
      if (modeColor === void 0) {
        return;
      }
      const bubbleColor = modeColor instanceof Array ? Utils.itemFromArray(modeColor) : modeColor;
      particle.bubble.color = ColorUtils.colorToHsl(bubbleColor);
    }
  }
};
var Connector = class {
  constructor(container) {
    this.container = container;
  }
  isEnabled() {
    const container = this.container;
    const mouse = container.interactivity.mouse;
    const events = container.actualOptions.interactivity.events;
    if (!(events.onHover.enable && mouse.position)) {
      return false;
    }
    const hoverMode = events.onHover.mode;
    return Utils.isInArray(HoverMode.connect, hoverMode);
  }
  reset() {
  }
  interact() {
    const container = this.container;
    const options = container.actualOptions;
    if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
      const mousePos = container.interactivity.mouse.position;
      if (!mousePos) {
        return;
      }
      const distance = Math.abs(container.retina.connectModeRadius);
      const query = container.particles.quadTree.queryCircle(mousePos, distance);
      let i = 0;
      for (const p1 of query) {
        const pos1 = p1.getPosition();
        for (const p22 of query.slice(i + 1)) {
          const pos2 = p22.getPosition();
          const distMax = Math.abs(container.retina.connectModeDistance);
          const xDiff = Math.abs(pos1.x - pos2.x);
          const yDiff = Math.abs(pos1.y - pos2.y);
          if (xDiff < distMax && yDiff < distMax) {
            container.canvas.drawConnectLine(p1, p22);
          }
        }
        ++i;
      }
    }
  }
};
var Linker = class {
  constructor(container) {
    this.container = container;
  }
  isEnabled(particle) {
    return particle.options.links.enable;
  }
  reset() {
  }
  interact(p1) {
    var _a;
    const container = this.container;
    const linkOpt1 = p1.options.links;
    const optOpacity = linkOpt1.opacity;
    const optDistance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
    const canvasSize = container.canvas.size;
    const warp = linkOpt1.warp;
    const pos1 = p1.getPosition();
    const range = warp ? new CircleWarp(pos1.x, pos1.y, optDistance, canvasSize) : new Circle(pos1.x, pos1.y, optDistance);
    const query = container.particles.quadTree.query(range);
    for (const p22 of query) {
      const linkOpt2 = p22.options.links;
      if (p1 === p22 || !linkOpt2.enable || linkOpt1.id !== linkOpt2.id || p22.spawning || p22.destroyed) {
        continue;
      }
      const pos2 = p22.getPosition();
      let distance = NumberUtils.getDistance(pos1, pos2);
      if (warp) {
        if (distance > optDistance) {
          const pos2NE = {
            x: pos2.x - canvasSize.width,
            y: pos2.y
          };
          distance = NumberUtils.getDistance(pos1, pos2NE);
          if (distance > optDistance) {
            const pos2SE = {
              x: pos2.x - canvasSize.width,
              y: pos2.y - canvasSize.height
            };
            distance = NumberUtils.getDistance(pos1, pos2SE);
            if (distance > optDistance) {
              const pos2SW = {
                x: pos2.x,
                y: pos2.y - canvasSize.height
              };
              distance = NumberUtils.getDistance(pos1, pos2SW);
            }
          }
        }
      }
      if (distance > optDistance) {
        return;
      }
      const opacityLine = (1 - distance / optDistance) * optOpacity;
      const linksOptions = p1.options.links;
      let linkColor = linksOptions.id !== void 0 ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
      if (!linkColor) {
        const optColor = linksOptions.color;
        linkColor = ColorUtils.getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
        if (linksOptions.id !== void 0) {
          container.particles.linksColors.set(linksOptions.id, linkColor);
        } else {
          container.particles.linksColor = linkColor;
        }
      }
      if (p22.links.map((t3) => t3.destination).indexOf(p1) === -1 && p1.links.map((t3) => t3.destination).indexOf(p22) === -1) {
        p1.links.push({
          destination: p22,
          opacity: opacityLine
        });
      }
    }
  }
};
var Attractor = class {
  constructor(container) {
    this.container = container;
  }
  interact(p1) {
    var _a;
    const container = this.container;
    const distance = (_a = p1.attractDistance) !== null && _a !== void 0 ? _a : container.retina.attractDistance;
    const pos1 = p1.getPosition();
    const query = container.particles.quadTree.queryCircle(pos1, distance);
    for (const p22 of query) {
      if (p1 === p22 || !p22.options.move.attract.enable || p22.destroyed || p22.spawning) {
        continue;
      }
      const pos2 = p22.getPosition();
      const {dx, dy} = NumberUtils.getDistances(pos1, pos2);
      const rotate = p1.options.move.attract.rotate;
      const ax = dx / (rotate.x * 1e3);
      const ay = dy / (rotate.y * 1e3);
      p1.velocity.x -= ax;
      p1.velocity.y -= ay;
      p22.velocity.x += ax;
      p22.velocity.y += ay;
    }
  }
  isEnabled(particle) {
    return particle.options.move.attract.enable;
  }
  reset() {
  }
};
function bounce(p1, p22) {
  Utils.circleBounce(Utils.circleBounceDataFromParticle(p1), Utils.circleBounceDataFromParticle(p22));
}
function destroy(p1, p22) {
  if (p1.getRadius() === void 0 && p22.getRadius() !== void 0) {
    p1.destroy();
  } else if (p1.getRadius() !== void 0 && p22.getRadius() === void 0) {
    p22.destroy();
  } else if (p1.getRadius() !== void 0 && p22.getRadius() !== void 0) {
    if (p1.getRadius() >= p22.getRadius()) {
      p22.destroy();
    } else {
      p1.destroy();
    }
  }
}
var Collider = class {
  constructor(container) {
    this.container = container;
  }
  isEnabled(particle) {
    return particle.options.collisions.enable;
  }
  reset() {
  }
  interact(p1) {
    const container = this.container;
    const pos1 = p1.getPosition();
    const query = container.particles.quadTree.queryCircle(pos1, p1.getRadius() * 2);
    for (const p22 of query) {
      if (p1 === p22 || !p22.options.collisions.enable || p1.options.collisions.mode !== p22.options.collisions.mode || p22.destroyed || p22.spawning) {
        continue;
      }
      const pos2 = p22.getPosition();
      const dist = NumberUtils.getDistance(pos1, pos2);
      const radius1 = p1.getRadius();
      const radius2 = p22.getRadius();
      const distP = radius1 + radius2;
      if (dist <= distP) {
        this.resolveCollision(p1, p22);
      }
    }
  }
  resolveCollision(p1, p22) {
    switch (p1.options.collisions.mode) {
      case CollisionMode.absorb: {
        this.absorb(p1, p22);
        break;
      }
      case CollisionMode.bounce: {
        bounce(p1, p22);
        break;
      }
      case CollisionMode.destroy: {
        destroy(p1, p22);
        break;
      }
    }
  }
  absorb(p1, p22) {
    const container = this.container;
    const fps = container.actualOptions.fpsLimit / 1e3;
    if (p1.getRadius() === void 0 && p22.getRadius() !== void 0) {
      p1.destroy();
    } else if (p1.getRadius() !== void 0 && p22.getRadius() === void 0) {
      p22.destroy();
    } else if (p1.getRadius() !== void 0 && p22.getRadius() !== void 0) {
      if (p1.getRadius() >= p22.getRadius()) {
        const factor = NumberUtils.clamp(p1.getRadius() / p22.getRadius(), 0, p22.getRadius()) * fps;
        p1.size.value += factor;
        p22.size.value -= factor;
        if (p22.getRadius() <= container.retina.pixelRatio) {
          p22.size.value = 0;
          p22.destroy();
        }
      } else {
        const factor = NumberUtils.clamp(p22.getRadius() / p1.getRadius(), 0, p1.getRadius()) * fps;
        p1.size.value -= factor;
        p22.size.value += factor;
        if (p1.getRadius() <= container.retina.pixelRatio) {
          p1.size.value = 0;
          p1.destroy();
        }
      }
    }
  }
};
var Infecter$1 = class {
  constructor(container) {
    this.container = container;
  }
  isEnabled() {
    return this.container.actualOptions.infection.enable;
  }
  reset() {
  }
  interact(p1, delta) {
    var _a, _b;
    const infecter1 = p1.infecter;
    infecter1.updateInfection(delta.value);
    if (infecter1.infectionStage === void 0) {
      return;
    }
    const container = this.container;
    const options = container.actualOptions;
    const infectionOptions = options.infection;
    if (!infectionOptions.enable || infectionOptions.stages.length < 1) {
      return;
    }
    const infectionStage1 = infectionOptions.stages[infecter1.infectionStage];
    const pxRatio = container.retina.pixelRatio;
    const radius = p1.getRadius() * 2 + infectionStage1.radius * pxRatio;
    const pos = p1.getPosition();
    const infectedStage1 = (_a = infectionStage1.infectedStage) !== null && _a !== void 0 ? _a : infecter1.infectionStage;
    const query = container.particles.quadTree.queryCircle(pos, radius);
    const infections = infectionStage1.rate;
    const neighbors = query.length;
    for (const p22 of query) {
      if (p22 === p1 || p22.destroyed || p22.spawning || !(p22.infecter.infectionStage === void 0 || p22.infecter.infectionStage !== infecter1.infectionStage)) {
        continue;
      }
      const infecter2 = p22.infecter;
      if (Math.random() < infections / neighbors) {
        if (infecter2.infectionStage === void 0) {
          infecter2.startInfection(infectedStage1);
        } else if (infecter2.infectionStage < infecter1.infectionStage) {
          infecter2.updateInfectionStage(infectedStage1);
        } else if (infecter2.infectionStage > infecter1.infectionStage) {
          const infectionStage2 = infectionOptions.stages[infecter2.infectionStage];
          const infectedStage2 = (_b = infectionStage2 === null || infectionStage2 === void 0 ? void 0 : infectionStage2.infectedStage) !== null && _b !== void 0 ? _b : infecter2.infectionStage;
          infecter1.updateInfectionStage(infectedStage2);
        }
      }
    }
  }
};
var TrailMaker = class {
  constructor(container) {
    this.container = container;
    this.delay = 0;
  }
  interact(delta) {
    var _a, _b, _c, _d;
    if (!this.container.retina.reduceFactor) {
      return;
    }
    const container = this.container, options = container.actualOptions, trailOptions = options.interactivity.modes.trail, optDelay = trailOptions.delay * 1e3 / this.container.retina.reduceFactor;
    if (this.delay < optDelay) {
      this.delay += delta.value;
    }
    if (this.delay < optDelay) {
      return;
    }
    let canEmit = true;
    if (trailOptions.pauseOnStop) {
      if (container.interactivity.mouse.position === this.lastPosition || ((_a = container.interactivity.mouse.position) === null || _a === void 0 ? void 0 : _a.x) === ((_b = this.lastPosition) === null || _b === void 0 ? void 0 : _b.x) && ((_c = container.interactivity.mouse.position) === null || _c === void 0 ? void 0 : _c.y) === ((_d = this.lastPosition) === null || _d === void 0 ? void 0 : _d.y)) {
        canEmit = false;
      }
    }
    if (container.interactivity.mouse.position) {
      this.lastPosition = {
        x: container.interactivity.mouse.position.x,
        y: container.interactivity.mouse.position.y
      };
    } else {
      delete this.lastPosition;
    }
    if (canEmit) {
      container.particles.push(trailOptions.quantity, container.interactivity.mouse, trailOptions.particles);
    }
    this.delay -= optDelay;
  }
  isEnabled() {
    const container = this.container;
    const options = container.actualOptions;
    const mouse = container.interactivity.mouse;
    const events = options.interactivity.events;
    return mouse.clicking && mouse.inside && !!mouse.position && Utils.isInArray(ClickMode.trail, events.onClick.mode) || mouse.inside && !!mouse.position && Utils.isInArray(HoverMode.trail, events.onHover.mode);
  }
  reset() {
  }
};
var Attractor$1 = class {
  constructor(container) {
    this.container = container;
  }
  isEnabled() {
    const container = this.container;
    const options = container.actualOptions;
    const mouse = container.interactivity.mouse;
    const events = options.interactivity.events;
    if (!(events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
      return false;
    }
    const hoverMode = events.onHover.mode;
    const clickMode = events.onClick.mode;
    return Utils.isInArray(HoverMode.attract, hoverMode) || Utils.isInArray(ClickMode.attract, clickMode);
  }
  reset() {
  }
  interact() {
    const container = this.container;
    const options = container.actualOptions;
    const mouseMoveStatus = container.interactivity.status === Constants.mouseMoveEvent;
    const events = options.interactivity.events;
    const hoverEnabled = events.onHover.enable;
    const hoverMode = events.onHover.mode;
    const clickEnabled = events.onClick.enable;
    const clickMode = events.onClick.mode;
    if (mouseMoveStatus && hoverEnabled && Utils.isInArray(HoverMode.attract, hoverMode)) {
      this.hoverAttract();
    } else if (clickEnabled && Utils.isInArray(ClickMode.attract, clickMode)) {
      this.clickAttract();
    }
  }
  hoverAttract() {
    const container = this.container;
    const mousePos = container.interactivity.mouse.position;
    if (!mousePos) {
      return;
    }
    const attractRadius = container.retina.attractModeDistance;
    this.processAttract(mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius));
  }
  processAttract(position, attractRadius, area) {
    const container = this.container;
    const attractOptions = container.actualOptions.interactivity.modes.attract;
    const query = container.particles.quadTree.query(area);
    for (const particle of query) {
      const {dx, dy, distance} = NumberUtils.getDistances(particle.position, position);
      const normVec = {
        x: dx / distance,
        y: dy / distance
      };
      const velocity = attractOptions.speed * attractOptions.factor;
      const attractFactor = NumberUtils.clamp(NumberUtils.calcEasing(1 - distance / attractRadius, attractOptions.easing) * velocity, 0, attractOptions.maxSpeed);
      particle.position.x -= normVec.x * attractFactor;
      particle.position.y -= normVec.y * attractFactor;
    }
  }
  clickAttract() {
    const container = this.container;
    if (!container.attract.finish) {
      if (!container.attract.count) {
        container.attract.count = 0;
      }
      container.attract.count++;
      if (container.attract.count === container.particles.count) {
        container.attract.finish = true;
      }
    }
    if (container.attract.clicking) {
      const mousePos = container.interactivity.mouse.clickPosition;
      if (!mousePos) {
        return;
      }
      const attractRadius = container.retina.attractModeDistance;
      this.processAttract(mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius));
    } else if (container.attract.clicking === false) {
      container.attract.particles = [];
    }
    return;
  }
};
var Lighter = class {
  constructor(container) {
    this.container = container;
  }
  interact(particle) {
    const container = this.container;
    const options = container.actualOptions;
    if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
      const mousePos = this.container.interactivity.mouse.position;
      if (mousePos) {
        container.canvas.drawParticleShadow(particle, mousePos);
      }
    }
  }
  isEnabled() {
    const container = this.container;
    const mouse = container.interactivity.mouse;
    const events = container.actualOptions.interactivity.events;
    if (!(events.onHover.enable && mouse.position)) {
      return false;
    }
    const hoverMode = events.onHover.mode;
    return Utils.isInArray(HoverMode.light, hoverMode);
  }
  reset() {
  }
};
var Lighter$1 = class {
  constructor(container) {
    this.container = container;
  }
  interact() {
    const container = this.container;
    const options = container.actualOptions;
    if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
      const mousePos = container.interactivity.mouse.position;
      if (!mousePos) {
        return;
      }
      container.canvas.drawLight(mousePos);
    }
  }
  isEnabled() {
    const container = this.container;
    const mouse = container.interactivity.mouse;
    const events = container.actualOptions.interactivity.events;
    if (!(events.onHover.enable && mouse.position)) {
      return false;
    }
    const hoverMode = events.onHover.mode;
    return Utils.isInArray(HoverMode.light, hoverMode);
  }
  reset() {
  }
};
var Bouncer = class {
  constructor(container) {
    this.container = container;
  }
  isEnabled() {
    const container = this.container;
    const options = container.actualOptions;
    const mouse = container.interactivity.mouse;
    const events = options.interactivity.events;
    const divs = events.onDiv;
    return mouse.position && events.onHover.enable && Utils.isInArray(HoverMode.bounce, events.onHover.mode) || Utils.isDivModeEnabled(DivMode.bounce, divs);
  }
  interact() {
    const container = this.container;
    const options = container.actualOptions;
    const events = options.interactivity.events;
    const mouseMoveStatus = container.interactivity.status === Constants.mouseMoveEvent;
    const hoverEnabled = events.onHover.enable;
    const hoverMode = events.onHover.mode;
    const divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && Utils.isInArray(HoverMode.bounce, hoverMode)) {
      this.processMouseBounce();
    } else {
      Utils.divModeExecute(DivMode.bounce, divs, (selector, div) => this.singleSelectorBounce(selector, div));
    }
  }
  reset() {
  }
  processMouseBounce() {
    const container = this.container;
    const pxRatio = container.retina.pixelRatio;
    const tolerance = 10 * pxRatio;
    const mousePos = container.interactivity.mouse.position;
    const radius = container.retina.bounceModeDistance;
    if (mousePos) {
      this.processBounce(mousePos, radius, new Circle(mousePos.x, mousePos.y, radius + tolerance));
    }
  }
  singleSelectorBounce(selector, div) {
    const container = this.container;
    const query = document.querySelectorAll(selector);
    if (!query.length) {
      return;
    }
    query.forEach((item) => {
      const elem = item;
      const pxRatio = container.retina.pixelRatio;
      const pos = {
        x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
        y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
      };
      const radius = elem.offsetWidth / 2 * pxRatio;
      const tolerance = 10 * pxRatio;
      const area = div.type === DivType.circle ? new Circle(pos.x, pos.y, radius + tolerance) : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);
      this.processBounce(pos, radius, area);
    });
  }
  processBounce(position, radius, area) {
    const query = this.container.particles.quadTree.query(area);
    for (const particle of query) {
      if (area instanceof Circle) {
        Utils.circleBounce(Utils.circleBounceDataFromParticle(particle), {
          position,
          radius,
          mass: Math.pow(radius, 2) * Math.PI / 2,
          velocity: Vector.create(0, 0),
          factor: {
            horizontal: 0,
            vertical: 0
          }
        });
      } else if (area instanceof Rectangle) {
        Utils.rectBounce(particle, Utils.calculateBounds(position, radius));
      }
    }
  }
};
var InteractionManager = class {
  constructor(container) {
    this.container = container;
    this.externalInteractors = [
      new Bouncer(container),
      new Bubbler(container),
      new Connector(container),
      new Grabber(container),
      new Lighter$1(container),
      new Attractor$1(container),
      new Repulser(container),
      new TrailMaker(container)
    ];
    this.particleInteractors = [
      new Attractor(container),
      new Lighter(container),
      new Collider(container),
      new Infecter$1(container),
      new Linker(container)
    ];
  }
  init() {
  }
  externalInteract(delta) {
    for (const interactor of this.externalInteractors) {
      if (interactor.isEnabled()) {
        interactor.interact(delta);
      }
    }
  }
  particlesInteract(particle, delta) {
    for (const interactor of this.externalInteractors) {
      interactor.reset(particle);
    }
    for (const interactor of this.particleInteractors) {
      if (interactor.isEnabled(particle)) {
        interactor.interact(particle, delta);
      }
    }
  }
};
var Particles = class {
  constructor(container) {
    this.container = container;
    this.nextId = 0;
    this.array = [];
    this.limit = 0;
    this.linksFreq = new Map();
    this.trianglesFreq = new Map();
    this.interactionManager = new InteractionManager(container);
    const canvasSize = this.container.canvas.size;
    this.linksColors = new Map();
    this.quadTree = new QuadTree(new Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
  }
  get count() {
    return this.array.length;
  }
  init() {
    const container = this.container;
    const options = container.actualOptions;
    this.linksFreq = new Map();
    this.trianglesFreq = new Map();
    let handled = false;
    for (const particle of options.manualParticles) {
      const pos = particle.position ? {
        x: particle.position.x * container.canvas.size.width / 100,
        y: particle.position.y * container.canvas.size.height / 100
      } : void 0;
      this.addParticle(pos, particle.options);
    }
    for (const [, plugin2] of container.plugins) {
      if (plugin2.particlesInitialization !== void 0) {
        handled = plugin2.particlesInitialization();
      }
      if (handled) {
        break;
      }
    }
    if (!handled) {
      for (let i = this.count; i < options.particles.number.value; i++) {
        this.addParticle();
      }
    }
    if (options.infection.enable) {
      for (let i = 0; i < options.infection.infections; i++) {
        const notInfected = this.array.filter((p5) => p5.infecter.infectionStage === void 0);
        const infected = Utils.itemFromArray(notInfected);
        infected.infecter.startInfection(0);
      }
    }
    this.interactionManager.init();
    container.pathGenerator.init();
  }
  redraw() {
    this.clear();
    this.init();
    this.draw({value: 0, factor: 0});
  }
  removeAt(index3, quantity, override) {
    if (index3 >= 0 && index3 <= this.count) {
      for (const particle of this.array.splice(index3, quantity !== null && quantity !== void 0 ? quantity : 1)) {
        particle.destroy(override);
      }
    }
  }
  remove(particle, override) {
    this.removeAt(this.array.indexOf(particle), void 0, override);
  }
  update(delta) {
    const container = this.container;
    const particlesToDelete = [];
    container.pathGenerator.update();
    for (const [, plugin2] of container.plugins) {
      if (plugin2.update !== void 0) {
        plugin2.update(delta);
      }
    }
    for (const particle of this.array) {
      const resizeFactor = this.container.canvas.resizeFactor;
      if (resizeFactor) {
        particle.position.x *= resizeFactor.width;
        particle.position.y *= resizeFactor.height;
      }
      particle.move(delta);
      if (particle.destroyed) {
        particlesToDelete.push(particle);
        continue;
      }
      this.quadTree.insert(new Point(particle.getPosition(), particle));
    }
    for (const particle of particlesToDelete) {
      this.remove(particle);
    }
    this.interactionManager.externalInteract(delta);
    for (const particle of this.container.particles.array) {
      particle.update(delta);
      if (!particle.destroyed && !particle.spawning) {
        this.interactionManager.particlesInteract(particle, delta);
      }
    }
    delete container.canvas.resizeFactor;
  }
  draw(delta) {
    const container = this.container;
    container.canvas.clear();
    const canvasSize = this.container.canvas.size;
    this.quadTree = new QuadTree(new Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
    this.update(delta);
    for (const [, plugin2] of container.plugins) {
      container.canvas.drawPlugin(plugin2, delta);
    }
    for (const p5 of this.array) {
      p5.draw(delta);
    }
  }
  clear() {
    this.array = [];
  }
  push(nb2, mouse, overrideOptions) {
    const container = this.container;
    const options = container.actualOptions;
    const limit = options.particles.number.limit * container.density;
    this.pushing = true;
    if (limit > 0) {
      const countToRemove = this.count + nb2 - limit;
      if (countToRemove > 0) {
        this.removeQuantity(countToRemove);
      }
    }
    for (let i = 0; i < nb2; i++) {
      this.addParticle(mouse === null || mouse === void 0 ? void 0 : mouse.position, overrideOptions);
    }
    this.pushing = false;
  }
  addParticle(position, overrideOptions) {
    return this.pushParticle(position, overrideOptions);
  }
  addSplitParticle(parent) {
    const splitOptions = parent.options.destroy.split;
    const options = new ParticlesOptions();
    options.load(parent.options);
    const factor = NumberUtils.getRangeValue(splitOptions.factor.value);
    options.color.load({
      value: {
        hsl: parent.getFillColor()
      }
    });
    if (typeof options.size.value === "number") {
      options.size.value /= factor;
    } else {
      options.size.value.min /= factor;
      options.size.value.max /= factor;
    }
    options.load(splitOptions.particles);
    const offset = NumberUtils.setRangeValue(-parent.size.value, parent.size.value);
    const position = {
      x: parent.position.x + NumberUtils.randomInRange(offset),
      y: parent.position.y + NumberUtils.randomInRange(offset)
    };
    return this.pushParticle(position, options, (particle) => {
      if (particle.size.value < 0.5) {
        return false;
      }
      particle.velocity.length = NumberUtils.randomInRange(NumberUtils.setRangeValue(parent.velocity.length, particle.velocity.length));
      particle.splitCount = parent.splitCount + 1;
      particle.unbreakable = true;
      setTimeout(() => {
        particle.unbreakable = false;
      }, 500);
      return true;
    });
  }
  removeQuantity(quantity) {
    this.removeAt(0, quantity);
  }
  getLinkFrequency(p1, p22) {
    const key = `${Math.min(p1.id, p22.id)}_${Math.max(p1.id, p22.id)}`;
    let res = this.linksFreq.get(key);
    if (res === void 0) {
      res = Math.random();
      this.linksFreq.set(key, res);
    }
    return res;
  }
  getTriangleFrequency(p1, p22, p32) {
    let [id1, id2, id3] = [p1.id, p22.id, p32.id];
    if (id1 > id2) {
      [id2, id1] = [id1, id2];
    }
    if (id2 > id3) {
      [id3, id2] = [id2, id3];
    }
    if (id1 > id3) {
      [id3, id1] = [id1, id3];
    }
    const key = `${id1}_${id2}_${id3}`;
    let res = this.trianglesFreq.get(key);
    if (res === void 0) {
      res = Math.random();
      this.trianglesFreq.set(key, res);
    }
    return res;
  }
  setDensity() {
    this.applyDensity(this.container.actualOptions.particles);
  }
  applyDensity(options) {
    var _a;
    if (!((_a = options.number.density) === null || _a === void 0 ? void 0 : _a.enable)) {
      return;
    }
    const numberOptions = options.number;
    const densityFactor = this.initDensityFactor(numberOptions.density);
    const optParticlesNumber = numberOptions.value;
    const optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
    const particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor;
    const particlesCount = this.count;
    this.limit = numberOptions.limit * densityFactor;
    if (particlesCount < particlesNumber) {
      this.push(Math.abs(particlesNumber - particlesCount), void 0, options);
    } else if (particlesCount > particlesNumber) {
      this.removeQuantity(particlesCount - particlesNumber);
    }
  }
  initDensityFactor(densityOptions) {
    const container = this.container;
    if (!container.canvas.element || !densityOptions.enable) {
      return 1;
    }
    const canvas = container.canvas.element;
    const pxRatio = container.retina.pixelRatio;
    return canvas.width * canvas.height / (densityOptions.factor * Math.pow(pxRatio, 2) * densityOptions.area);
  }
  pushParticle(position, overrideOptions, initializer) {
    try {
      const particle = new Particle(this.nextId, this.container, position, overrideOptions);
      let canAdd = true;
      if (initializer) {
        canAdd = initializer(particle);
      }
      if (!canAdd) {
        return;
      }
      this.array.push(particle);
      this.nextId++;
      return particle;
    } catch (e4) {
      console.warn(`error adding particle: ${e4}`);
      return;
    }
  }
};
var Retina = class {
  constructor(container) {
    this.container = container;
  }
  init() {
    const container = this.container;
    const options = container.actualOptions;
    this.pixelRatio = !options.detectRetina || Utils.isSsr() ? 1 : window.devicePixelRatio;
    const motionOptions = this.container.actualOptions.motion;
    if (motionOptions && (motionOptions.disable || motionOptions.reduce.value)) {
      if (Utils.isSsr() || typeof matchMedia === "undefined" || !matchMedia) {
        this.reduceFactor = 1;
      } else {
        const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
        if (mediaQuery) {
          this.handleMotionChange(mediaQuery);
          const handleChange = () => {
            this.handleMotionChange(mediaQuery);
            container.refresh().catch(() => {
            });
          };
          if (mediaQuery.addEventListener !== void 0) {
            mediaQuery.addEventListener("change", handleChange);
          } else if (mediaQuery.addListener !== void 0) {
            mediaQuery.addListener(handleChange);
          }
        }
      }
    } else {
      this.reduceFactor = 1;
    }
    const ratio = this.pixelRatio;
    if (container.canvas.element) {
      const element = container.canvas.element;
      container.canvas.size.width = element.offsetWidth * ratio;
      container.canvas.size.height = element.offsetHeight * ratio;
    }
    const particles2 = options.particles;
    this.attractDistance = particles2.move.attract.distance * ratio;
    this.linksDistance = particles2.links.distance * ratio;
    this.linksWidth = particles2.links.width * ratio;
    this.sizeAnimationSpeed = particles2.size.animation.speed * ratio;
    const modes = options.interactivity.modes;
    this.connectModeDistance = modes.connect.distance * ratio;
    this.connectModeRadius = modes.connect.radius * ratio;
    this.grabModeDistance = modes.grab.distance * ratio;
    this.repulseModeDistance = modes.repulse.distance * ratio;
    this.bounceModeDistance = modes.bounce.distance * ratio;
    this.attractModeDistance = modes.attract.distance * ratio;
    this.slowModeRadius = modes.slow.radius * ratio;
    this.bubbleModeDistance = modes.bubble.distance * ratio;
    if (modes.bubble.size) {
      this.bubbleModeSize = modes.bubble.size * ratio;
    }
  }
  initParticle(particle) {
    const particlesOptions = particle.options;
    const ratio = this.pixelRatio;
    particle.attractDistance = particlesOptions.move.attract.distance * ratio;
    particle.linksDistance = particlesOptions.links.distance * ratio;
    particle.linksWidth = particlesOptions.links.width * ratio;
    particle.moveDrift = NumberUtils.getRangeValue(particlesOptions.move.drift) * ratio;
    particle.moveSpeed = NumberUtils.getRangeValue(particlesOptions.move.speed) * ratio;
    particle.sizeAnimationSpeed = particlesOptions.size.animation.speed * ratio;
    particle.maxDistance = particlesOptions.move.distance * ratio;
  }
  handleMotionChange(mediaQuery) {
    const options = this.container.actualOptions;
    if (mediaQuery.matches) {
      const motion = options.motion;
      this.reduceFactor = motion.disable ? 0 : motion.reduce.value ? 1 / motion.reduce.factor : 1;
    } else {
      this.reduceFactor = 1;
    }
  }
};
var FrameManager = class {
  constructor(container) {
    this.container = container;
  }
  nextFrame(timestamp) {
    try {
      const container = this.container;
      if (container.lastFrameTime !== void 0 && timestamp < container.lastFrameTime + 1e3 / container.fpsLimit) {
        container.draw();
        return;
      }
      const deltaValue = timestamp - container.lastFrameTime;
      const delta = {
        value: deltaValue,
        factor: 60 * deltaValue / 1e3
      };
      container.lastFrameTime = timestamp;
      container.particles.draw(delta);
      if (container.getAnimationStatus()) {
        container.draw();
      }
    } catch (e4) {
      console.error("tsParticles error in animation loop", e4);
    }
  }
};
var ClickEvent = class {
  constructor() {
    this.enable = false;
    this.mode = [];
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
  }
};
var DivEvent = class {
  constructor() {
    this.selectors = [];
    this.enable = false;
    this.mode = [];
    this.type = DivType.circle;
  }
  get elementId() {
    return this.ids;
  }
  set elementId(value) {
    this.ids = value;
  }
  get el() {
    return this.elementId;
  }
  set el(value) {
    this.elementId = value;
  }
  get ids() {
    return this.selectors instanceof Array ? this.selectors.map((t3) => t3.replace("#", "")) : this.selectors.replace("#", "");
  }
  set ids(value) {
    this.selectors = value instanceof Array ? value.map((t3) => `#${t3}`) : `#${value}`;
  }
  load(data) {
    var _a, _b;
    if (data === void 0) {
      return;
    }
    const ids = (_b = (_a = data.ids) !== null && _a !== void 0 ? _a : data.elementId) !== null && _b !== void 0 ? _b : data.el;
    if (ids !== void 0) {
      this.ids = ids;
    }
    if (data.selectors !== void 0) {
      this.selectors = data.selectors;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
};
var Parallax = class {
  constructor() {
    this.enable = false;
    this.force = 2;
    this.smooth = 10;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.force !== void 0) {
      this.force = data.force;
    }
    if (data.smooth !== void 0) {
      this.smooth = data.smooth;
    }
  }
};
var HoverEvent = class {
  constructor() {
    this.enable = false;
    this.mode = [];
    this.parallax = new Parallax();
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.parallax.load(data.parallax);
  }
};
var Events = class {
  constructor() {
    this.onClick = new ClickEvent();
    this.onDiv = new DivEvent();
    this.onHover = new HoverEvent();
    this.resize = true;
  }
  get onclick() {
    return this.onClick;
  }
  set onclick(value) {
    this.onClick = value;
  }
  get ondiv() {
    return this.onDiv;
  }
  set ondiv(value) {
    this.onDiv = value;
  }
  get onhover() {
    return this.onHover;
  }
  set onhover(value) {
    this.onHover = value;
  }
  load(data) {
    var _a, _b, _c;
    if (data === void 0) {
      return;
    }
    this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
    const onDiv = (_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv;
    if (onDiv !== void 0) {
      if (onDiv instanceof Array) {
        this.onDiv = onDiv.map((div) => {
          const tmp = new DivEvent();
          tmp.load(div);
          return tmp;
        });
      } else {
        this.onDiv = new DivEvent();
        this.onDiv.load(onDiv);
      }
    }
    this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
    if (data.resize !== void 0) {
      this.resize = data.resize;
    }
  }
};
var BubbleBase = class {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
    if (data.color !== void 0) {
      if (data.color instanceof Array) {
        this.color = data.color.map((s) => OptionsColor.create(void 0, s));
      } else {
        if (this.color instanceof Array) {
          this.color = new OptionsColor();
        }
        this.color = OptionsColor.create(this.color, data.color);
      }
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
  }
};
var BubbleDiv = class extends BubbleBase {
  constructor() {
    super();
    this.selectors = [];
  }
  get ids() {
    return this.selectors instanceof Array ? this.selectors.map((t3) => t3.replace("#", "")) : this.selectors.replace("#", "");
  }
  set ids(value) {
    this.selectors = value instanceof Array ? value.map((t3) => `#${t3}`) : `#${value}`;
  }
  load(data) {
    super.load(data);
    if (data === void 0) {
      return;
    }
    if (data.ids !== void 0) {
      this.ids = data.ids;
    }
    if (data.selectors !== void 0) {
      this.selectors = data.selectors;
    }
  }
};
var Bubble = class extends BubbleBase {
  load(data) {
    super.load(data);
    if (!(data !== void 0 && data.divs !== void 0)) {
      return;
    }
    if (data.divs instanceof Array) {
      this.divs = data.divs.map((s) => {
        const tmp = new BubbleDiv();
        tmp.load(s);
        return tmp;
      });
    } else {
      if (this.divs instanceof Array || !this.divs) {
        this.divs = new BubbleDiv();
      }
      this.divs.load(data.divs);
    }
  }
};
var ConnectLinks = class {
  constructor() {
    this.opacity = 0.5;
  }
  load(data) {
    if (!(data !== void 0 && data.opacity !== void 0)) {
      return;
    }
    this.opacity = data.opacity;
  }
};
var Connect = class {
  constructor() {
    this.distance = 80;
    this.links = new ConnectLinks();
    this.radius = 60;
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(value) {
    this.links = value;
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(value) {
    this.links = value;
  }
  load(data) {
    var _a, _b;
    if (data === void 0) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
};
var GrabLinks = class {
  constructor() {
    this.blink = false;
    this.consent = false;
    this.opacity = 1;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.blink !== void 0) {
      this.blink = data.blink;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.consent !== void 0) {
      this.consent = data.consent;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};
var Grab = class {
  constructor() {
    this.distance = 100;
    this.links = new GrabLinks();
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(value) {
    this.links = value;
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(value) {
    this.links = value;
  }
  load(data) {
    var _a, _b;
    if (data === void 0) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
  }
};
var Remove = class {
  constructor() {
    this.quantity = 2;
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(value) {
    this.quantity = value;
  }
  load(data) {
    var _a;
    if (data === void 0) {
      return;
    }
    const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
    if (quantity !== void 0) {
      this.quantity = quantity;
    }
  }
};
var Push = class {
  constructor() {
    this.quantity = 4;
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(value) {
    this.quantity = value;
  }
  load(data) {
    var _a;
    if (data === void 0) {
      return;
    }
    const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
    if (quantity !== void 0) {
      this.quantity = quantity;
    }
  }
};
var RepulseBase = class {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.factor = 100;
    this.speed = 1;
    this.maxSpeed = 50;
    this.easing = EasingType.easeOutQuad;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
    if (data.easing !== void 0) {
      this.easing = data.easing;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = data.maxSpeed;
    }
  }
};
var RepulseDiv = class extends RepulseBase {
  constructor() {
    super();
    this.selectors = [];
  }
  get ids() {
    if (this.selectors instanceof Array) {
      return this.selectors.map((t3) => t3.replace("#", ""));
    } else {
      return this.selectors.replace("#", "");
    }
  }
  set ids(value) {
    if (value instanceof Array) {
      this.selectors = value.map(() => `#${value}`);
    } else {
      this.selectors = `#${value}`;
    }
  }
  load(data) {
    super.load(data);
    if (data === void 0) {
      return;
    }
    if (data.ids !== void 0) {
      this.ids = data.ids;
    }
    if (data.selectors !== void 0) {
      this.selectors = data.selectors;
    }
  }
};
var Repulse = class extends RepulseBase {
  load(data) {
    super.load(data);
    if ((data === null || data === void 0 ? void 0 : data.divs) === void 0) {
      return;
    }
    if (data.divs instanceof Array) {
      this.divs = data.divs.map((s) => {
        const tmp = new RepulseDiv();
        tmp.load(s);
        return tmp;
      });
    } else {
      if (this.divs instanceof Array || !this.divs) {
        this.divs = new RepulseDiv();
      }
      this.divs.load(data.divs);
    }
  }
};
var Slow = class {
  constructor() {
    this.factor = 3;
    this.radius = 200;
  }
  get active() {
    return false;
  }
  set active(_value) {
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
};
var Trail$1 = class {
  constructor() {
    this.delay = 1;
    this.pauseOnStop = false;
    this.quantity = 1;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.delay !== void 0) {
      this.delay = data.delay;
    }
    if (data.quantity !== void 0) {
      this.quantity = data.quantity;
    }
    if (data.particles !== void 0) {
      this.particles = Utils.deepExtend({}, data.particles);
    }
    if (data.pauseOnStop !== void 0) {
      this.pauseOnStop = data.pauseOnStop;
    }
  }
};
var Attract$1 = class {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.easing = EasingType.easeOutQuad;
    this.factor = 1;
    this.maxSpeed = 50;
    this.speed = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
    if (data.easing !== void 0) {
      this.easing = data.easing;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = data.maxSpeed;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
  }
};
var LightGradient = class {
  constructor() {
    this.start = new OptionsColor();
    this.stop = new OptionsColor();
    this.start.value = "#ffffff";
    this.stop.value = "#000000";
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    this.start = OptionsColor.create(this.start, data.start);
    this.stop = OptionsColor.create(this.stop, data.stop);
  }
};
var LightArea = class {
  constructor() {
    this.gradient = new LightGradient();
    this.radius = 1e3;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    this.gradient.load(data.gradient);
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
};
var LightShadow = class {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "#000000";
    this.length = 2e3;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.length !== void 0) {
      this.length = data.length;
    }
  }
};
var Light = class {
  constructor() {
    this.area = new LightArea();
    this.shadow = new LightShadow();
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    this.area.load(data.area);
    this.shadow.load(data.shadow);
  }
};
var Bounce$1 = class {
  constructor() {
    this.distance = 200;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
  }
};
var Modes = class {
  constructor() {
    this.attract = new Attract$1();
    this.bounce = new Bounce$1();
    this.bubble = new Bubble();
    this.connect = new Connect();
    this.grab = new Grab();
    this.light = new Light();
    this.push = new Push();
    this.remove = new Remove();
    this.repulse = new Repulse();
    this.slow = new Slow();
    this.trail = new Trail$1();
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    this.attract.load(data.attract);
    this.bubble.load(data.bubble);
    this.connect.load(data.connect);
    this.grab.load(data.grab);
    this.light.load(data.light);
    this.push.load(data.push);
    this.remove.load(data.remove);
    this.repulse.load(data.repulse);
    this.slow.load(data.slow);
    this.trail.load(data.trail);
  }
};
var Interactivity = class {
  constructor() {
    this.detectsOn = InteractivityDetect.canvas;
    this.events = new Events();
    this.modes = new Modes();
  }
  get detect_on() {
    return this.detectsOn;
  }
  set detect_on(value) {
    this.detectsOn = value;
  }
  load(data) {
    var _a, _b, _c;
    if (data === void 0) {
      return;
    }
    const detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
    if (detectsOn !== void 0) {
      this.detectsOn = detectsOn;
    }
    this.events.load(data.events);
    this.modes.load(data.modes);
    if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
      if (this.events.onHover.mode instanceof Array) {
        if (this.events.onHover.mode.indexOf(HoverMode.slow) < 0) {
          this.events.onHover.mode.push(HoverMode.slow);
        }
      } else if (this.events.onHover.mode !== HoverMode.slow) {
        this.events.onHover.mode = [this.events.onHover.mode, HoverMode.slow];
      }
    }
  }
};
var BackgroundMaskCover = class {
  constructor() {
    this.color = new OptionsColor();
    this.opacity = 1;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};
var BackgroundMask = class {
  constructor() {
    this.composite = "destination-out";
    this.cover = new BackgroundMaskCover();
    this.enable = false;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.composite !== void 0) {
      this.composite = data.composite;
    }
    if (data.cover !== void 0) {
      const cover = data.cover;
      const color = typeof data.cover === "string" ? {color: data.cover} : data.cover;
      this.cover.load(cover.color !== void 0 ? cover : {color});
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
};
var Background = class {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "";
    this.image = "";
    this.position = "";
    this.repeat = "";
    this.size = "";
    this.opacity = 1;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.image !== void 0) {
      this.image = data.image;
    }
    if (data.position !== void 0) {
      this.position = data.position;
    }
    if (data.repeat !== void 0) {
      this.repeat = data.repeat;
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};
var InfectionStage = class {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "#ff0000";
    this.radius = 0;
    this.rate = 1;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    this.duration = data.duration;
    this.infectedStage = data.infectedStage;
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
    if (data.rate !== void 0) {
      this.rate = data.rate;
    }
  }
};
var Infection = class {
  constructor() {
    this.cure = false;
    this.delay = 0;
    this.enable = false;
    this.infections = 0;
    this.stages = [];
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.cure !== void 0) {
      this.cure = data.cure;
    }
    if (data.delay !== void 0) {
      this.delay = data.delay;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.infections !== void 0) {
      this.infections = data.infections;
    }
    if (data.stages === void 0) {
      return;
    }
    this.stages = data.stages.map((t3) => {
      const s = new InfectionStage();
      s.load(t3);
      return s;
    });
  }
};
var ThemeDefault = class {
  constructor() {
    this.mode = ThemeMode.any;
    this.value = false;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};
var Theme = class {
  constructor() {
    this.name = "";
    this.default = new ThemeDefault();
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.name !== void 0) {
      this.name = data.name;
    }
    this.default.load(data.default);
    if (data.options !== void 0) {
      this.options = Utils.deepExtend({}, data.options);
    }
  }
};
var FullScreen = class {
  constructor() {
    this.enable = false;
    this.zIndex = -1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.zIndex !== void 0) {
      this.zIndex = data.zIndex;
    }
  }
};
var MotionReduce = class {
  constructor() {
    this.factor = 4;
    this.value = true;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};
var Motion = class {
  constructor() {
    this.disable = false;
    this.reduce = new MotionReduce();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.disable !== void 0) {
      this.disable = data.disable;
    }
    this.reduce.load(data.reduce);
  }
};
var ManualParticle = class {
  load(data) {
    var _a, _b;
    if (!data) {
      return;
    }
    if (data.position !== void 0) {
      this.position = {
        x: (_a = data.position.x) !== null && _a !== void 0 ? _a : 50,
        y: (_b = data.position.y) !== null && _b !== void 0 ? _b : 50
      };
    }
    if (data.options !== void 0) {
      this.options = Utils.deepExtend({}, data.options);
    }
  }
};
var Responsive = class {
  constructor() {
    this.maxWidth = Infinity;
    this.options = {};
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.maxWidth !== void 0) {
      this.maxWidth = data.maxWidth;
    }
    if (data.options !== void 0) {
      this.options = Utils.deepExtend({}, data.options);
    }
  }
};
var Options = class {
  constructor() {
    this.autoPlay = true;
    this.background = new Background();
    this.backgroundMask = new BackgroundMask();
    this.fullScreen = new FullScreen();
    this.detectRetina = true;
    this.fpsLimit = 60;
    this.infection = new Infection();
    this.interactivity = new Interactivity();
    this.manualParticles = [];
    this.motion = new Motion();
    this.particles = new ParticlesOptions();
    this.pauseOnBlur = true;
    this.pauseOnOutsideViewport = true;
    this.responsive = [];
    this.themes = [];
  }
  get fps_limit() {
    return this.fpsLimit;
  }
  set fps_limit(value) {
    this.fpsLimit = value;
  }
  get retina_detect() {
    return this.detectRetina;
  }
  set retina_detect(value) {
    this.detectRetina = value;
  }
  get backgroundMode() {
    return this.fullScreen;
  }
  set backgroundMode(value) {
    this.fullScreen.load(value);
  }
  load(data) {
    var _a, _b, _c;
    if (data === void 0) {
      return;
    }
    if (data.preset !== void 0) {
      if (data.preset instanceof Array) {
        for (const preset of data.preset) {
          this.importPreset(preset);
        }
      } else {
        this.importPreset(data.preset);
      }
    }
    if (data.autoPlay !== void 0) {
      this.autoPlay = data.autoPlay;
    }
    const detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
    if (detectRetina !== void 0) {
      this.detectRetina = detectRetina;
    }
    const fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
    if (fpsLimit !== void 0) {
      this.fpsLimit = fpsLimit;
    }
    if (data.pauseOnBlur !== void 0) {
      this.pauseOnBlur = data.pauseOnBlur;
    }
    if (data.pauseOnOutsideViewport !== void 0) {
      this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
    }
    this.background.load(data.background);
    this.fullScreen.load((_c = data.fullScreen) !== null && _c !== void 0 ? _c : data.backgroundMode);
    this.backgroundMask.load(data.backgroundMask);
    this.infection.load(data.infection);
    this.interactivity.load(data.interactivity);
    if (data.manualParticles !== void 0) {
      this.manualParticles = data.manualParticles.map((t3) => {
        const tmp = new ManualParticle();
        tmp.load(t3);
        return tmp;
      });
    }
    this.motion.load(data.motion);
    this.particles.load(data.particles);
    Plugins.loadOptions(this, data);
    if (data.responsive !== void 0) {
      for (const responsive of data.responsive) {
        const optResponsive = new Responsive();
        optResponsive.load(responsive);
        this.responsive.push(optResponsive);
      }
    }
    this.responsive.sort((a, b4) => a.maxWidth - b4.maxWidth);
    if (data.themes !== void 0) {
      for (const theme of data.themes) {
        const optTheme = new Theme();
        optTheme.load(theme);
        this.themes.push(optTheme);
      }
    }
  }
  setTheme(name) {
    if (name) {
      const chosenTheme = this.themes.find((theme) => theme.name === name);
      if (chosenTheme) {
        this.load(chosenTheme.options);
      }
    } else {
      const clientDarkMode = typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches;
      let defaultTheme = this.themes.find((theme) => theme.default.value && (theme.default.mode === ThemeMode.dark && clientDarkMode || theme.default.mode === ThemeMode.light && !clientDarkMode));
      if (!defaultTheme) {
        defaultTheme = this.themes.find((theme) => theme.default.value && theme.default.mode === ThemeMode.any);
      }
      if (defaultTheme) {
        this.load(defaultTheme.options);
      }
    }
  }
  importPreset(preset) {
    this.load(Plugins.getPreset(preset));
  }
  setResponsive(width, pxRatio, defaultOptions) {
    var _a;
    this.load(defaultOptions);
    this.load((_a = this.responsive.find((t3) => t3.maxWidth * pxRatio > width)) === null || _a === void 0 ? void 0 : _a.options);
  }
};
var __awaiter$3 = function(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e4) {
        reject(e4);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e4) {
        reject(e4);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var Container4 = class {
  constructor(id2, sourceOptions, ...presets2) {
    this.id = id2;
    this.fpsLimit = 60;
    this.firstStart = true;
    this.started = false;
    this.destroyed = false;
    this.paused = true;
    this.lastFrameTime = 0;
    this.pageHidden = false;
    this._sourceOptions = sourceOptions;
    this.retina = new Retina(this);
    this.canvas = new Canvas(this);
    this.particles = new Particles(this);
    this.drawer = new FrameManager(this);
    this.pathGenerator = {
      generate: () => {
        const v4 = Vector.create(0, 0);
        v4.length = Math.random();
        v4.angle = Math.random() * Math.PI * 2;
        return v4;
      },
      init: () => {
      },
      update: () => {
      }
    };
    this.interactivity = {
      mouse: {
        clicking: false,
        inside: false
      }
    };
    this.bubble = {};
    this.repulse = {particles: []};
    this.attract = {particles: []};
    this.plugins = new Map();
    this.drawers = new Map();
    this.density = 1;
    this._options = new Options();
    this.actualOptions = new Options();
    for (const preset of presets2) {
      this._options.load(Plugins.getPreset(preset));
    }
    const shapes = Plugins.getSupportedShapes();
    for (const type of shapes) {
      const drawer = Plugins.getShapeDrawer(type);
      if (drawer) {
        this.drawers.set(type, drawer);
      }
    }
    if (this._options) {
      this._options.load(this._sourceOptions);
    }
    this.eventListeners = new EventListeners(this);
    if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
      this.intersectionObserver = new IntersectionObserver((entries) => this.intersectionManager(entries));
    }
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  play(force) {
    const needsUpdate = this.paused || force;
    if (this.firstStart && !this.actualOptions.autoPlay) {
      this.firstStart = false;
      return;
    }
    if (this.paused) {
      this.paused = false;
    }
    if (needsUpdate) {
      for (const [, plugin2] of this.plugins) {
        if (plugin2.play) {
          plugin2.play();
        }
      }
      this.lastFrameTime = performance.now();
    }
    this.draw();
  }
  pause() {
    if (this.drawAnimationFrame !== void 0) {
      Utils.cancelAnimation(this.drawAnimationFrame);
      delete this.drawAnimationFrame;
    }
    if (this.paused) {
      return;
    }
    for (const [, plugin2] of this.plugins) {
      if (plugin2.pause) {
        plugin2.pause();
      }
    }
    if (!this.pageHidden) {
      this.paused = true;
    }
  }
  draw() {
    this.drawAnimationFrame = Utils.animate((timestamp) => this.drawer.nextFrame(timestamp));
  }
  getAnimationStatus() {
    return !this.paused;
  }
  setNoise(noiseOrGenerator, init, update) {
    this.setPath(noiseOrGenerator, init, update);
  }
  setPath(pathOrGenerator, init, update) {
    if (!pathOrGenerator) {
      return;
    }
    if (typeof pathOrGenerator === "function") {
      this.pathGenerator.generate = pathOrGenerator;
      if (init) {
        this.pathGenerator.init = init;
      }
      if (update) {
        this.pathGenerator.update = update;
      }
    } else {
      if (pathOrGenerator.generate) {
        this.pathGenerator.generate = pathOrGenerator.generate;
      }
      if (pathOrGenerator.init) {
        this.pathGenerator.init = pathOrGenerator.init;
      }
      if (pathOrGenerator.update) {
        this.pathGenerator.update = pathOrGenerator.update;
      }
    }
  }
  destroy() {
    this.stop();
    this.canvas.destroy();
    for (const [, drawer] of this.drawers) {
      if (drawer.destroy) {
        drawer.destroy(this);
      }
    }
    for (const key of this.drawers.keys()) {
      this.drawers.delete(key);
    }
    this.destroyed = true;
  }
  exportImg(callback) {
    this.exportImage(callback);
  }
  exportImage(callback, type, quality) {
    var _a;
    return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
  }
  exportConfiguration() {
    return JSON.stringify(this.actualOptions, void 0, 2);
  }
  refresh() {
    this.stop();
    return this.start();
  }
  reset() {
    this._options = new Options();
    return this.refresh();
  }
  stop() {
    if (!this.started) {
      return;
    }
    this.firstStart = true;
    this.started = false;
    this.eventListeners.removeListeners();
    this.pause();
    this.particles.clear();
    this.canvas.clear();
    if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
      this.intersectionObserver.observe(this.interactivity.element);
    }
    for (const [, plugin2] of this.plugins) {
      if (plugin2.stop) {
        plugin2.stop();
      }
    }
    for (const key of this.plugins.keys()) {
      this.plugins.delete(key);
    }
    this.particles.linksColors = new Map();
    delete this.particles.grabLineColor;
    delete this.particles.linksColor;
  }
  loadTheme(name) {
    return __awaiter$3(this, void 0, void 0, function* () {
      this.currentTheme = name;
      yield this.refresh();
    });
  }
  start() {
    return __awaiter$3(this, void 0, void 0, function* () {
      if (this.started) {
        return;
      }
      yield this.init();
      this.started = true;
      this.eventListeners.addListeners();
      if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
        this.intersectionObserver.observe(this.interactivity.element);
      }
      for (const [, plugin2] of this.plugins) {
        if (plugin2.startAsync !== void 0) {
          yield plugin2.startAsync();
        } else if (plugin2.start !== void 0) {
          plugin2.start();
        }
      }
      this.play();
    });
  }
  addClickHandler(callback) {
    const el = this.interactivity.element;
    if (!el) {
      return;
    }
    const clickOrTouchHandler = (e4, pos) => {
      if (this.destroyed) {
        return;
      }
      const pxRatio = this.retina.pixelRatio;
      const posRetina = {
        x: pos.x * pxRatio,
        y: pos.y * pxRatio
      };
      const particles2 = this.particles.quadTree.queryCircle(posRetina, this.retina.sizeValue);
      callback(e4, particles2);
    };
    const clickHandler = (e4) => {
      if (this.destroyed) {
        return;
      }
      const mouseEvent = e4;
      const pos = {
        x: mouseEvent.offsetX || mouseEvent.clientX,
        y: mouseEvent.offsetY || mouseEvent.clientY
      };
      clickOrTouchHandler(e4, pos);
    };
    const touchStartHandler = () => {
      if (this.destroyed) {
        return;
      }
      touched = true;
      touchMoved = false;
    };
    const touchMoveHandler = () => {
      if (this.destroyed) {
        return;
      }
      touchMoved = true;
    };
    const touchEndHandler = (e4) => {
      var _a, _b, _c;
      if (this.destroyed) {
        return;
      }
      if (touched && !touchMoved) {
        const touchEvent = e4;
        const lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
        const canvasRect = (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const pos = {
          x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
          y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0)
        };
        clickOrTouchHandler(e4, pos);
      }
      touched = false;
      touchMoved = false;
    };
    const touchCancelHandler = () => {
      if (this.destroyed) {
        return;
      }
      touched = false;
      touchMoved = false;
    };
    let touched = false;
    let touchMoved = false;
    el.addEventListener("click", clickHandler);
    el.addEventListener("touchstart", touchStartHandler);
    el.addEventListener("touchmove", touchMoveHandler);
    el.addEventListener("touchend", touchEndHandler);
    el.addEventListener("touchcancel", touchCancelHandler);
  }
  init() {
    return __awaiter$3(this, void 0, void 0, function* () {
      this.actualOptions = new Options();
      this.actualOptions.load(this._options);
      this.retina.init();
      this.canvas.init();
      this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
      this.actualOptions.setTheme(this.currentTheme);
      this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 60;
      const availablePlugins = Plugins.getAvailablePlugins(this);
      for (const [id2, plugin2] of availablePlugins) {
        this.plugins.set(id2, plugin2);
      }
      for (const [, drawer] of this.drawers) {
        if (drawer.init) {
          yield drawer.init(this);
        }
      }
      for (const [, plugin2] of this.plugins) {
        if (plugin2.init) {
          plugin2.init(this.actualOptions);
        } else if (plugin2.initAsync !== void 0) {
          yield plugin2.initAsync(this.actualOptions);
        }
      }
      this.canvas.initBackground();
      this.canvas.resize();
      this.particles.init();
      this.particles.setDensity();
    });
  }
  intersectionManager(entries) {
    if (!this.actualOptions.pauseOnOutsideViewport) {
      return;
    }
    for (const entry of entries) {
      if (entry.target !== this.interactivity.element) {
        continue;
      }
      if (entry.isIntersecting) {
        this.play();
      } else {
        this.pause();
      }
    }
  }
};
var __awaiter$4 = function(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e4) {
        reject(e4);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e4) {
        reject(e4);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var tsParticlesDom = [];
function fetchError(statusCode) {
  console.error(`Error tsParticles - fetch status: ${statusCode}`);
  console.error("Error tsParticles - File config not found");
}
var Loader = class {
  static dom() {
    return tsParticlesDom;
  }
  static domItem(index3) {
    const dom = Loader.dom();
    const item = dom[index3];
    if (item && !item.destroyed) {
      return item;
    }
    dom.splice(index3, 1);
  }
  static load(tagId, options, index3) {
    return __awaiter$4(this, void 0, void 0, function* () {
      const domContainer = document.getElementById(tagId);
      if (!domContainer) {
        return;
      }
      return Loader.set(tagId, domContainer, options, index3);
    });
  }
  static set(id2, domContainer, options, index3) {
    return __awaiter$4(this, void 0, void 0, function* () {
      const currentOptions = options instanceof Array ? Utils.itemFromArray(options, index3) : options;
      const dom = Loader.dom();
      const oldIndex = dom.findIndex((v4) => v4.id === id2);
      if (oldIndex >= 0) {
        const old = Loader.domItem(oldIndex);
        if (old && !old.destroyed) {
          old.destroy();
          dom.splice(oldIndex, 1);
        }
      }
      let canvasEl;
      let generatedCanvas;
      if (domContainer.tagName.toLowerCase() === "canvas") {
        canvasEl = domContainer;
        generatedCanvas = false;
      } else {
        const existingCanvases = domContainer.getElementsByTagName("canvas");
        if (existingCanvases.length) {
          canvasEl = existingCanvases[0];
          if (!canvasEl.className) {
            canvasEl.className = Constants.canvasClass;
          }
          generatedCanvas = false;
        } else {
          generatedCanvas = true;
          canvasEl = document.createElement("canvas");
          canvasEl.className = Constants.canvasClass;
          canvasEl.style.width = "100%";
          canvasEl.style.height = "100%";
          domContainer.appendChild(canvasEl);
        }
      }
      const newItem = new Container4(id2, currentOptions);
      if (oldIndex >= 0) {
        dom.splice(oldIndex, 0, newItem);
      } else {
        dom.push(newItem);
      }
      newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
      yield newItem.start();
      return newItem;
    });
  }
  static loadJSON(tagId, jsonUrl, index3) {
    return __awaiter$4(this, void 0, void 0, function* () {
      const url = jsonUrl instanceof Array ? Utils.itemFromArray(jsonUrl, index3) : jsonUrl;
      const response = yield fetch(url);
      if (response.ok) {
        return Loader.load(tagId, yield response.json());
      } else {
        fetchError(response.status);
      }
    });
  }
  static setJSON(id2, domContainer, jsonUrl, index3) {
    return __awaiter$4(this, void 0, void 0, function* () {
      const url = jsonUrl instanceof Array ? Utils.itemFromArray(jsonUrl, index3) : jsonUrl;
      const response = yield fetch(url);
      if (response.ok) {
        const options = yield response.json();
        return Loader.set(id2, domContainer, options);
      } else {
        fetchError(response.status);
      }
    });
  }
  static setOnClickHandler(callback) {
    const dom = Loader.dom();
    if (dom.length === 0) {
      throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
    }
    for (const domItem of dom) {
      domItem.addClickHandler(callback);
    }
  }
};
var __awaiter$5 = function(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e4) {
        reject(e4);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e4) {
        reject(e4);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __classPrivateFieldSet = function(receiver, state, value, kind, f4) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f4)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f4 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f4.call(receiver, value) : f4 ? f4.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f4) {
  if (kind === "a" && !f4)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f4 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f4 : kind === "a" ? f4.call(receiver) : f4 ? f4.value : state.get(receiver);
};
var _MainSlim_initialized;
var MainSlim = class {
  constructor() {
    _MainSlim_initialized.set(this, void 0);
    __classPrivateFieldSet(this, _MainSlim_initialized, false, "f");
    const squareDrawer = new SquareDrawer();
    const textDrawer = new TextDrawer();
    const imageDrawer = new ImageDrawer();
    Plugins.addShapeDrawer(ShapeType.line, new LineDrawer());
    Plugins.addShapeDrawer(ShapeType.circle, new CircleDrawer());
    Plugins.addShapeDrawer(ShapeType.edge, squareDrawer);
    Plugins.addShapeDrawer(ShapeType.square, squareDrawer);
    Plugins.addShapeDrawer(ShapeType.triangle, new TriangleDrawer());
    Plugins.addShapeDrawer(ShapeType.star, new StarDrawer());
    Plugins.addShapeDrawer(ShapeType.polygon, new PolygonDrawer());
    Plugins.addShapeDrawer(ShapeType.char, textDrawer);
    Plugins.addShapeDrawer(ShapeType.character, textDrawer);
    Plugins.addShapeDrawer(ShapeType.image, imageDrawer);
    Plugins.addShapeDrawer(ShapeType.images, imageDrawer);
  }
  init() {
    if (!__classPrivateFieldGet(this, _MainSlim_initialized, "f")) {
      __classPrivateFieldSet(this, _MainSlim_initialized, true, "f");
    }
  }
  loadFromArray(tagId, options, index3) {
    return __awaiter$5(this, void 0, void 0, function* () {
      return Loader.load(tagId, options, index3);
    });
  }
  load(tagId, options) {
    return __awaiter$5(this, void 0, void 0, function* () {
      return Loader.load(tagId, options);
    });
  }
  set(id2, element, options) {
    return __awaiter$5(this, void 0, void 0, function* () {
      return Loader.set(id2, element, options);
    });
  }
  loadJSON(tagId, pathConfigJson, index3) {
    return Loader.loadJSON(tagId, pathConfigJson, index3);
  }
  setJSON(id2, element, pathConfigJson, index3) {
    return __awaiter$5(this, void 0, void 0, function* () {
      return Loader.setJSON(id2, element, pathConfigJson, index3);
    });
  }
  setOnClickHandler(callback) {
    Loader.setOnClickHandler(callback);
  }
  dom() {
    return Loader.dom();
  }
  domItem(index3) {
    return Loader.domItem(index3);
  }
  addShape(shape, drawer, init, afterEffect, destroy2) {
    let customDrawer;
    if (typeof drawer === "function") {
      customDrawer = {
        afterEffect,
        destroy: destroy2,
        draw: drawer,
        init
      };
    } else {
      customDrawer = drawer;
    }
    Plugins.addShapeDrawer(shape, customDrawer);
  }
  addPreset(preset, options, override = false) {
    Plugins.addPreset(preset, options, override);
  }
  addPlugin(plugin2) {
    Plugins.addPlugin(plugin2);
  }
  addPathGenerator(name, generator) {
    Plugins.addPathGenerator(name, generator);
  }
};
_MainSlim_initialized = new WeakMap();
var AbsorberInstance = class {
  constructor(absorbers, container, options, position) {
    var _a, _b, _c;
    this.absorbers = absorbers;
    this.container = container;
    this.initialPosition = position ? Vector.create(position.x, position.y) : void 0;
    this.options = options;
    this.dragging = false;
    this.name = this.options.name;
    this.opacity = this.options.opacity;
    this.size = NumberUtils.getValue(options.size) * container.retina.pixelRatio;
    this.mass = this.size * options.size.density * container.retina.reduceFactor;
    const limit = options.size.limit;
    this.limit = limit !== void 0 ? limit * container.retina.pixelRatio * container.retina.reduceFactor : limit;
    const color = typeof options.color === "string" ? {value: options.color} : options.color;
    this.color = (_a = ColorUtils.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
      b: 0,
      g: 0,
      r: 0
    };
    this.position = (_c = (_b = this.initialPosition) === null || _b === void 0 ? void 0 : _b.copy()) !== null && _c !== void 0 ? _c : this.calcPosition();
  }
  attract(particle) {
    const options = this.options;
    if (options.draggable) {
      const mouse = this.container.interactivity.mouse;
      if (mouse.clicking && mouse.downPosition) {
        const mouseDist = NumberUtils.getDistance(this.position, mouse.downPosition);
        if (mouseDist <= this.size) {
          this.dragging = true;
        }
      } else {
        this.dragging = false;
      }
      if (this.dragging && mouse.position) {
        this.position.x = mouse.position.x;
        this.position.y = mouse.position.y;
      }
    }
    const pos = particle.getPosition();
    const {dx, dy, distance} = NumberUtils.getDistances(this.position, pos);
    const v4 = Vector.create(dx, dy);
    v4.length = this.mass / Math.pow(distance, 2) * this.container.retina.reduceFactor;
    if (distance < this.size + particle.getRadius()) {
      const sizeFactor = particle.getRadius() * 0.033 * this.container.retina.pixelRatio;
      if (this.size > particle.getRadius() && distance < this.size - particle.getRadius()) {
        if (options.destroy) {
          particle.destroy();
        } else {
          particle.needsNewPosition = true;
          this.updateParticlePosition(particle, v4);
        }
      } else {
        if (options.destroy) {
          particle.size.value -= sizeFactor;
        }
        this.updateParticlePosition(particle, v4);
      }
      if (this.limit === void 0 || this.size < this.limit) {
        this.size += sizeFactor;
      }
      this.mass += sizeFactor * this.options.size.density * this.container.retina.reduceFactor;
    } else {
      this.updateParticlePosition(particle, v4);
    }
  }
  resize() {
    const initialPosition = this.initialPosition;
    this.position = initialPosition && Utils.isPointInside(initialPosition, this.container.canvas.size) ? initialPosition : this.calcPosition();
  }
  draw(context2) {
    context2.translate(this.position.x, this.position.y);
    context2.beginPath();
    context2.arc(0, 0, this.size, 0, Math.PI * 2, false);
    context2.closePath();
    context2.fillStyle = ColorUtils.getStyleFromRgb(this.color, this.opacity);
    context2.fill();
  }
  calcPosition() {
    var _a, _b;
    const container = this.container;
    const percentPosition = this.options.position;
    return Vector.create(((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100 * container.canvas.size.width, ((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100 * container.canvas.size.height);
  }
  updateParticlePosition(particle, v4) {
    var _a;
    if (particle.destroyed) {
      return;
    }
    const canvasSize = this.container.canvas.size;
    if (particle.needsNewPosition) {
      const pSize = particle.getRadius();
      particle.position.x = Math.random() * (canvasSize.width - pSize * 2) + pSize;
      particle.position.y = Math.random() * (canvasSize.height - pSize * 2) + pSize;
      particle.needsNewPosition = false;
    }
    if (this.options.orbits) {
      if (particle.orbit === void 0) {
        particle.orbit = Vector.create(0, 0);
        particle.orbit.length = NumberUtils.getDistance(particle.getPosition(), this.position);
        particle.orbit.angle = Math.random() * Math.PI * 2;
      }
      if (particle.orbit.length <= this.size && !this.options.destroy) {
        particle.orbit.length = Math.random() * Math.max(canvasSize.width, canvasSize.height);
      }
      particle.velocity.x = 0;
      particle.velocity.y = 0;
      particle.position.setTo(particle.orbit.add(this.position));
      particle.orbit.length -= v4.length;
      particle.orbit.angle += ((_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : NumberUtils.getRangeValue(particle.options.move.speed) * this.container.retina.pixelRatio) / 100 * this.container.retina.reduceFactor;
    } else {
      particle.velocity.addTo(v4);
    }
  }
};
var AbsorberSize = class extends ValueWithRandom {
  constructor() {
    super();
    this.density = 5;
    this.random.minimumValue = 1;
    this.value = 50;
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    if (data.density !== void 0) {
      this.density = data.density;
    }
    if (data.limit !== void 0) {
      this.limit = data.limit;
    }
    if (data.limit !== void 0) {
      this.limit = data.limit;
    }
  }
};
var Absorber = class {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "#000000";
    this.draggable = false;
    this.opacity = 1;
    this.destroy = true;
    this.orbits = false;
    this.size = new AbsorberSize();
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.draggable !== void 0) {
      this.draggable = data.draggable;
    }
    this.name = data.name;
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
    if (data.position !== void 0) {
      this.position = {
        x: data.position.x,
        y: data.position.y
      };
    }
    if (data.size !== void 0) {
      this.size.load(data.size);
    }
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
    if (data.orbits !== void 0) {
      this.orbits = data.orbits;
    }
  }
};
var AbsorberClickMode;
(function(AbsorberClickMode2) {
  AbsorberClickMode2["absorber"] = "absorber";
})(AbsorberClickMode || (AbsorberClickMode = {}));
var Absorbers = class {
  constructor(container) {
    this.container = container;
    this.array = [];
    this.absorbers = [];
    this.interactivityAbsorbers = [];
    const overridableContainer = container;
    overridableContainer.getAbsorber = (idxOrName) => idxOrName === void 0 || typeof idxOrName === "number" ? this.array[idxOrName || 0] : this.array.find((t3) => t3.name === idxOrName);
    overridableContainer.addAbsorber = (options, position) => this.addAbsorber(options, position);
  }
  init(options) {
    var _a, _b;
    if (!options) {
      return;
    }
    if (options.absorbers) {
      if (options.absorbers instanceof Array) {
        this.absorbers = options.absorbers.map((s) => {
          const tmp = new Absorber();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.absorbers instanceof Array) {
          this.absorbers = new Absorber();
        }
        this.absorbers.load(options.absorbers);
      }
    }
    const interactivityAbsorbers = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
    if (interactivityAbsorbers) {
      if (interactivityAbsorbers instanceof Array) {
        this.interactivityAbsorbers = interactivityAbsorbers.map((s) => {
          const tmp = new Absorber();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.interactivityAbsorbers instanceof Array) {
          this.interactivityAbsorbers = new Absorber();
        }
        this.interactivityAbsorbers.load(interactivityAbsorbers);
      }
    }
    if (this.absorbers instanceof Array) {
      for (const absorberOptions of this.absorbers) {
        this.addAbsorber(absorberOptions);
      }
    } else {
      this.addAbsorber(this.absorbers);
    }
  }
  particleUpdate(particle) {
    for (const absorber of this.array) {
      absorber.attract(particle);
      if (particle.destroyed) {
        break;
      }
    }
  }
  draw(context2) {
    for (const absorber of this.array) {
      context2.save();
      absorber.draw(context2);
      context2.restore();
    }
  }
  stop() {
    this.array = [];
  }
  resize() {
    for (const absorber of this.array) {
      absorber.resize();
    }
  }
  handleClickMode(mode) {
    const container = this.container;
    const absorberOptions = this.absorbers;
    const modeAbsorbers = this.interactivityAbsorbers;
    if (mode === AbsorberClickMode.absorber) {
      let absorbersModeOptions;
      if (modeAbsorbers instanceof Array) {
        if (modeAbsorbers.length > 0) {
          absorbersModeOptions = Utils.itemFromArray(modeAbsorbers);
        }
      } else {
        absorbersModeOptions = modeAbsorbers;
      }
      const absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : absorberOptions instanceof Array ? Utils.itemFromArray(absorberOptions) : absorberOptions;
      const aPosition = container.interactivity.mouse.clickPosition;
      this.addAbsorber(absorbersOptions, aPosition);
    }
  }
  addAbsorber(options, position) {
    const absorber = new AbsorberInstance(this, this.container, options, position);
    this.array.push(absorber);
    return absorber;
  }
  removeAbsorber(absorber) {
    const index3 = this.array.indexOf(absorber);
    if (index3 >= 0) {
      this.array.splice(index3, 1);
    }
  }
};
var AbsorbersPlugin = class {
  constructor() {
    this.id = "absorbers";
  }
  getPlugin(container) {
    return new Absorbers(container);
  }
  needsPlugin(options) {
    var _a, _b, _c;
    if (options === void 0) {
      return false;
    }
    const absorbers = options.absorbers;
    let loadAbsorbers = false;
    if (absorbers instanceof Array) {
      if (absorbers.length) {
        loadAbsorbers = true;
      }
    } else if (absorbers !== void 0) {
      loadAbsorbers = true;
    } else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && Utils.isInArray(AbsorberClickMode.absorber, options.interactivity.events.onClick.mode)) {
      loadAbsorbers = true;
    }
    return loadAbsorbers;
  }
  loadOptions(options, source) {
    var _a, _b;
    if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
      return;
    }
    const optionsCast = options;
    if (source === null || source === void 0 ? void 0 : source.absorbers) {
      if ((source === null || source === void 0 ? void 0 : source.absorbers) instanceof Array) {
        optionsCast.absorbers = source === null || source === void 0 ? void 0 : source.absorbers.map((s) => {
          const tmp = new Absorber();
          tmp.load(s);
          return tmp;
        });
      } else {
        let absorberOptions = optionsCast.absorbers;
        if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === void 0) {
          optionsCast.absorbers = absorberOptions = new Absorber();
        }
        absorberOptions.load(source === null || source === void 0 ? void 0 : source.absorbers);
      }
    }
    const interactivityAbsorbers = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
    if (interactivityAbsorbers) {
      if (interactivityAbsorbers instanceof Array) {
        optionsCast.interactivity.modes.absorbers = interactivityAbsorbers.map((s) => {
          const tmp = new Absorber();
          tmp.load(s);
          return tmp;
        });
      } else {
        let absorberOptions = optionsCast.interactivity.modes.absorbers;
        if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === void 0) {
          optionsCast.interactivity.modes.absorbers = absorberOptions = new Absorber();
        }
        absorberOptions.load(interactivityAbsorbers);
      }
    }
  }
};
var plugin = new AbsorbersPlugin();
var EmitterSize = class {
  constructor() {
    this.mode = SizeMode.percent;
    this.height = 0;
    this.width = 0;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.height !== void 0) {
      this.height = data.height;
    }
    if (data.width !== void 0) {
      this.width = data.width;
    }
  }
};
function randomCoordinate(position, offset) {
  return position + offset * (Math.random() - 0.5);
}
function randomPosition(position, offset) {
  return {
    x: randomCoordinate(position.x, offset.x),
    y: randomCoordinate(position.y, offset.y)
  };
}
var EmitterInstance = class {
  constructor(emitters, container, emitterOptions, position) {
    var _a, _b, _c, _d, _e2, _f;
    var _g;
    this.emitters = emitters;
    this.container = container;
    this.firstSpawn = true;
    this.currentDuration = 0;
    this.currentEmitDelay = 0;
    this.currentSpawnDelay = 0;
    this.initialPosition = position;
    this.emitterOptions = Utils.deepExtend({}, emitterOptions);
    this.spawnDelay = ((_a = this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0) * 1e3 / this.container.retina.reduceFactor;
    this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
    this.name = emitterOptions.name;
    let particlesOptions = Utils.deepExtend({}, this.emitterOptions.particles);
    particlesOptions !== null && particlesOptions !== void 0 ? particlesOptions : particlesOptions = {};
    (_c = particlesOptions.move) !== null && _c !== void 0 ? _c : particlesOptions.move = {};
    (_d = (_g = particlesOptions.move).direction) !== null && _d !== void 0 ? _d : _g.direction = this.emitterOptions.direction;
    if (this.emitterOptions.spawnColor !== void 0) {
      this.spawnColor = ColorUtils.colorToHsl(this.emitterOptions.spawnColor);
    }
    this.paused = !this.emitterOptions.autoPlay;
    this.particlesOptions = particlesOptions;
    this.size = (_e2 = this.emitterOptions.size) !== null && _e2 !== void 0 ? _e2 : (() => {
      const size = new EmitterSize();
      size.load({
        height: 0,
        mode: SizeMode.percent,
        width: 0
      });
      return size;
    })();
    this.lifeCount = (_f = this.emitterOptions.life.count) !== null && _f !== void 0 ? _f : -1;
    this.immortal = this.lifeCount <= 0;
    this.play();
  }
  externalPlay() {
    this.paused = false;
    this.play();
  }
  externalPause() {
    this.paused = true;
    this.pause();
  }
  play() {
    if (this.paused) {
      return;
    }
    if (this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.emitterOptions.life.count)) {
      if (this.emitDelay === void 0) {
        this.emitDelay = 1e3 * this.emitterOptions.rate.delay / this.container.retina.reduceFactor;
      }
      if (this.lifeCount > 0 || this.immortal) {
        this.prepareToDie();
      }
    }
  }
  pause() {
    if (this.paused) {
      return;
    }
    delete this.emitDelay;
  }
  resize() {
    const initialPosition = this.initialPosition;
    this.position = initialPosition && Utils.isPointInside(initialPosition, this.container.canvas.size) ? initialPosition : this.calcPosition();
  }
  update(delta) {
    var _a, _b, _c;
    if (this.paused) {
      return;
    }
    if (this.firstSpawn) {
      this.firstSpawn = false;
      this.currentSpawnDelay = (_a = this.spawnDelay) !== null && _a !== void 0 ? _a : 0;
      this.currentEmitDelay = (_b = this.emitDelay) !== null && _b !== void 0 ? _b : 0;
      delta.value = 0;
    }
    if (this.duration !== void 0) {
      this.currentDuration += delta.value;
      if (this.currentDuration >= this.duration) {
        this.pause();
        if (this.spawnDelay !== void 0) {
          delete this.spawnDelay;
        }
        if (!this.immortal) {
          this.lifeCount--;
        }
        if (this.lifeCount > 0 || this.immortal) {
          this.position = this.calcPosition();
          this.spawnDelay = ((_c = this.emitterOptions.life.delay) !== null && _c !== void 0 ? _c : 0) * 1e3 / this.container.retina.reduceFactor;
        } else {
          this.destroy();
        }
        this.currentDuration -= this.duration;
        delete this.duration;
      }
    }
    if (this.spawnDelay !== void 0) {
      this.currentSpawnDelay += delta.value;
      if (this.currentSpawnDelay >= this.spawnDelay) {
        this.play();
        this.currentSpawnDelay -= this.currentSpawnDelay;
        delete this.spawnDelay;
      }
    }
    if (this.emitDelay !== void 0) {
      this.currentEmitDelay += delta.value;
      if (this.currentEmitDelay >= this.emitDelay) {
        this.emit();
        this.currentEmitDelay -= this.emitDelay;
      }
    }
  }
  prepareToDie() {
    var _a;
    if (this.paused) {
      return;
    }
    const duration = (_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration;
    if (this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && duration !== void 0 && duration > 0) {
      this.duration = duration * 1e3;
    }
  }
  destroy() {
    this.emitters.removeEmitter(this);
  }
  calcPosition() {
    var _a, _b;
    const container = this.container;
    const percentPosition = this.emitterOptions.position;
    return {
      x: ((_a = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.x) !== null && _a !== void 0 ? _a : Math.random() * 100) / 100 * container.canvas.size.width,
      y: ((_b = percentPosition === null || percentPosition === void 0 ? void 0 : percentPosition.y) !== null && _b !== void 0 ? _b : Math.random() * 100) / 100 * container.canvas.size.height
    };
  }
  emit() {
    var _a;
    if (this.paused) {
      return;
    }
    const container = this.container;
    const position = this.position;
    const offset = {
      x: this.size.mode === SizeMode.percent ? container.canvas.size.width * this.size.width / 100 : this.size.width,
      y: this.size.mode === SizeMode.percent ? container.canvas.size.height * this.size.height / 100 : this.size.height
    };
    for (let i = 0; i < this.emitterOptions.rate.quantity; i++) {
      const particlesOptions = Utils.deepExtend({}, this.particlesOptions);
      if (this.spawnColor !== void 0) {
        const colorAnimation = (_a = this.emitterOptions.spawnColor) === null || _a === void 0 ? void 0 : _a.animation;
        if (colorAnimation) {
          const hueAnimation = colorAnimation;
          if (hueAnimation.enable) {
            this.spawnColor.h = this.setColorAnimation(hueAnimation, this.spawnColor.h, 360);
          } else {
            const hslAnimation = colorAnimation;
            this.spawnColor.h = this.setColorAnimation(hslAnimation.h, this.spawnColor.h, 360);
            this.spawnColor.s = this.setColorAnimation(hslAnimation.s, this.spawnColor.s, 100);
            this.spawnColor.l = this.setColorAnimation(hslAnimation.l, this.spawnColor.l, 100);
          }
        }
        if (!particlesOptions.color) {
          particlesOptions.color = {
            value: this.spawnColor
          };
        } else {
          particlesOptions.color.value = this.spawnColor;
        }
      }
      container.particles.addParticle(randomPosition(position, offset), particlesOptions);
    }
  }
  setColorAnimation(animation, initValue, maxValue) {
    var _a;
    const container = this.container;
    if (!animation.enable) {
      return initValue;
    }
    const colorOffset = NumberUtils.randomInRange(animation.offset);
    const emitFactor = 1e3 * this.emitterOptions.rate.delay / container.retina.reduceFactor;
    const colorSpeed = (_a = animation.speed) !== null && _a !== void 0 ? _a : 0;
    return (initValue + colorSpeed * container.fpsLimit / emitFactor + colorOffset * 3.6) % maxValue;
  }
};
var EmitterRate = class {
  constructor() {
    this.quantity = 1;
    this.delay = 0.1;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.quantity !== void 0) {
      this.quantity = data.quantity;
    }
    if (data.delay !== void 0) {
      this.delay = data.delay;
    }
  }
};
var EmitterLife = class {
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.count !== void 0) {
      this.count = data.count;
    }
    if (data.delay !== void 0) {
      this.delay = data.delay;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
  }
};
var Emitter = class {
  constructor() {
    this.autoPlay = true;
    this.life = new EmitterLife();
    this.rate = new EmitterRate();
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.autoPlay !== void 0) {
      this.autoPlay = data.autoPlay;
    }
    if (data.size !== void 0) {
      if (this.size === void 0) {
        this.size = new EmitterSize();
      }
      this.size.load(data.size);
    }
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
    this.life.load(data.life);
    this.name = data.name;
    if (data.particles !== void 0) {
      this.particles = Utils.deepExtend({}, data.particles);
    }
    this.rate.load(data.rate);
    if (data.position !== void 0) {
      this.position = {
        x: data.position.x,
        y: data.position.y
      };
    }
    if (data.spawnColor !== void 0) {
      if (this.spawnColor === void 0) {
        this.spawnColor = new AnimatableColor();
      }
      this.spawnColor.load(data.spawnColor);
    }
  }
};
var EmitterClickMode;
(function(EmitterClickMode2) {
  EmitterClickMode2["emitter"] = "emitter";
})(EmitterClickMode || (EmitterClickMode = {}));
var Emitters = class {
  constructor(container) {
    this.container = container;
    this.array = [];
    this.emitters = [];
    this.interactivityEmitters = [];
    const overridableContainer = container;
    overridableContainer.getEmitter = (idxOrName) => idxOrName === void 0 || typeof idxOrName === "number" ? this.array[idxOrName || 0] : this.array.find((t3) => t3.name === idxOrName);
    overridableContainer.addEmitter = (options, position) => this.addEmitter(options, position);
    overridableContainer.playEmitter = (idxOrName) => {
      const emitter = overridableContainer.getEmitter(idxOrName);
      if (emitter) {
        emitter.externalPlay();
      }
    };
    overridableContainer.pauseEmitter = (idxOrName) => {
      const emitter = overridableContainer.getEmitter(idxOrName);
      if (emitter) {
        emitter.externalPause();
      }
    };
  }
  init(options) {
    var _a, _b;
    if (!options) {
      return;
    }
    if (options.emitters) {
      if (options.emitters instanceof Array) {
        this.emitters = options.emitters.map((s) => {
          const tmp = new Emitter();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.emitters instanceof Array) {
          this.emitters = new Emitter();
        }
        this.emitters.load(options.emitters);
      }
    }
    const interactivityEmitters = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
    if (interactivityEmitters) {
      if (interactivityEmitters instanceof Array) {
        this.interactivityEmitters = interactivityEmitters.map((s) => {
          const tmp = new Emitter();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.interactivityEmitters instanceof Array) {
          this.interactivityEmitters = new Emitter();
        }
        this.interactivityEmitters.load(interactivityEmitters);
      }
    }
    if (this.emitters instanceof Array) {
      for (const emitterOptions of this.emitters) {
        this.addEmitter(emitterOptions);
      }
    } else {
      this.addEmitter(this.emitters);
    }
  }
  play() {
    for (const emitter of this.array) {
      emitter.play();
    }
  }
  pause() {
    for (const emitter of this.array) {
      emitter.pause();
    }
  }
  stop() {
    this.array = [];
  }
  update(delta) {
    for (const emitter of this.array) {
      emitter.update(delta);
    }
  }
  handleClickMode(mode) {
    const container = this.container;
    const emitterOptions = this.emitters;
    const modeEmitters = this.interactivityEmitters;
    if (mode === EmitterClickMode.emitter) {
      let emitterModeOptions;
      if (modeEmitters instanceof Array) {
        if (modeEmitters.length > 0) {
          emitterModeOptions = Utils.itemFromArray(modeEmitters);
        }
      } else {
        emitterModeOptions = modeEmitters;
      }
      const emittersOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : emitterOptions instanceof Array ? Utils.itemFromArray(emitterOptions) : emitterOptions;
      const ePosition = container.interactivity.mouse.clickPosition;
      this.addEmitter(Utils.deepExtend({}, emittersOptions), ePosition);
    }
  }
  resize() {
    for (const emitter of this.array) {
      emitter.resize();
    }
  }
  addEmitter(options, position) {
    const emitter = new EmitterInstance(this, this.container, options, position);
    this.array.push(emitter);
    return emitter;
  }
  removeEmitter(emitter) {
    const index3 = this.array.indexOf(emitter);
    if (index3 >= 0) {
      this.array.splice(index3, 1);
    }
  }
};
var EmittersPlugin = class {
  constructor() {
    this.id = "emitters";
  }
  getPlugin(container) {
    return new Emitters(container);
  }
  needsPlugin(options) {
    var _a, _b, _c;
    if (options === void 0) {
      return false;
    }
    const emitters = options.emitters;
    let loadEmitters = false;
    if (emitters instanceof Array) {
      if (emitters.length) {
        loadEmitters = true;
      }
    } else if (emitters !== void 0) {
      loadEmitters = true;
    } else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && Utils.isInArray(EmitterClickMode.emitter, options.interactivity.events.onClick.mode)) {
      loadEmitters = true;
    }
    return loadEmitters;
  }
  loadOptions(options, source) {
    var _a, _b;
    if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
      return;
    }
    const optionsCast = options;
    if (source === null || source === void 0 ? void 0 : source.emitters) {
      if ((source === null || source === void 0 ? void 0 : source.emitters) instanceof Array) {
        optionsCast.emitters = source === null || source === void 0 ? void 0 : source.emitters.map((s) => {
          const tmp = new Emitter();
          tmp.load(s);
          return tmp;
        });
      } else {
        let emitterOptions = optionsCast.emitters;
        if ((emitterOptions === null || emitterOptions === void 0 ? void 0 : emitterOptions.load) === void 0) {
          optionsCast.emitters = emitterOptions = new Emitter();
        }
        emitterOptions.load(source === null || source === void 0 ? void 0 : source.emitters);
      }
    }
    const interactivityEmitters = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
    if (interactivityEmitters) {
      if (interactivityEmitters instanceof Array) {
        optionsCast.interactivity.modes.emitters = interactivityEmitters.map((s) => {
          const tmp = new Emitter();
          tmp.load(s);
          return tmp;
        });
      } else {
        let emitterOptions = optionsCast.interactivity.modes.emitters;
        if ((emitterOptions === null || emitterOptions === void 0 ? void 0 : emitterOptions.load) === void 0) {
          optionsCast.interactivity.modes.emitters = emitterOptions = new Emitter();
        }
        emitterOptions.load(interactivityEmitters);
      }
    }
  }
};
var plugin$1 = new EmittersPlugin();
var InlineArrangement;
(function(InlineArrangement2) {
  InlineArrangement2["equidistant"] = "equidistant";
  InlineArrangement2["onePerPoint"] = "one-per-point";
  InlineArrangement2["perPoint"] = "per-point";
  InlineArrangement2["randomLength"] = "random-length";
  InlineArrangement2["randomPoint"] = "random-point";
})(InlineArrangement || (InlineArrangement = {}));
var MoveType;
(function(MoveType2) {
  MoveType2["path"] = "path";
  MoveType2["radius"] = "radius";
})(MoveType || (MoveType = {}));
var Type;
(function(Type2) {
  Type2["inline"] = "inline";
  Type2["inside"] = "inside";
  Type2["outside"] = "outside";
  Type2["none"] = "none";
})(Type || (Type = {}));
var DrawStroke = class {
  constructor() {
    this.color = new OptionsColor();
    this.width = 0.5;
    this.opacity = 1;
  }
  load(data) {
    var _a;
    if (data !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
      if (typeof this.color.value === "string") {
        this.opacity = (_a = ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
      }
      if (data.opacity !== void 0) {
        this.opacity = data.opacity;
      }
      if (data.width !== void 0) {
        this.width = data.width;
      }
    }
  }
};
var Draw = class {
  constructor() {
    this.enable = false;
    this.stroke = new DrawStroke();
  }
  get lineWidth() {
    return this.stroke.width;
  }
  set lineWidth(value) {
    this.stroke.width = value;
  }
  get lineColor() {
    return this.stroke.color;
  }
  set lineColor(value) {
    this.stroke.color = OptionsColor.create(this.stroke.color, value);
  }
  load(data) {
    var _a;
    if (data !== void 0) {
      if (data.enable !== void 0) {
        this.enable = data.enable;
      }
      const stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
        color: data.lineColor,
        width: data.lineWidth
      };
      this.stroke.load(stroke);
    }
  }
};
var Move$1 = class {
  constructor() {
    this.radius = 10;
    this.type = MoveType.path;
  }
  load(data) {
    if (data !== void 0) {
      if (data.radius !== void 0) {
        this.radius = data.radius;
      }
      if (data.type !== void 0) {
        this.type = data.type;
      }
    }
  }
};
var Inline = class {
  constructor() {
    this.arrangement = InlineArrangement.onePerPoint;
  }
  load(data) {
    if (data !== void 0) {
      if (data.arrangement !== void 0) {
        this.arrangement = data.arrangement;
      }
    }
  }
};
var LocalSvg = class {
  constructor() {
    this.path = [];
    this.size = {
      height: 0,
      width: 0
    };
  }
  load(data) {
    if (data !== void 0) {
      if (data.path !== void 0) {
        this.path = data.path;
      }
      if (data.size !== void 0) {
        if (data.size.width !== void 0) {
          this.size.width = data.size.width;
        }
        if (data.size.height !== void 0) {
          this.size.height = data.size.height;
        }
      }
    }
  }
};
var PolygonMask = class {
  constructor() {
    this.draw = new Draw();
    this.enable = false;
    this.inline = new Inline();
    this.move = new Move$1();
    this.scale = 1;
    this.type = Type.none;
  }
  get inlineArrangement() {
    return this.inline.arrangement;
  }
  set inlineArrangement(value) {
    this.inline.arrangement = value;
  }
  load(data) {
    var _a;
    if (data !== void 0) {
      this.draw.load(data.draw);
      const inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
        arrangement: data.inlineArrangement
      };
      if (inline !== void 0) {
        this.inline.load(inline);
      }
      this.move.load(data.move);
      if (data.scale !== void 0) {
        this.scale = data.scale;
      }
      if (data.type !== void 0) {
        this.type = data.type;
      }
      if (data.enable !== void 0) {
        this.enable = data.enable;
      } else {
        this.enable = this.type !== Type.none;
      }
      if (data.url !== void 0) {
        this.url = data.url;
      }
      if (data.data !== void 0) {
        if (typeof data.data === "string") {
          this.data = data.data;
        } else {
          this.data = new LocalSvg();
          this.data.load(data.data);
        }
      }
      if (data.position !== void 0) {
        this.position = Utils.deepExtend({}, data.position);
      }
    }
  }
};
var __awaiter$6 = function(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e4) {
        reject(e4);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e4) {
        reject(e4);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function drawPolygonMask(context2, rawData, stroke) {
  const color = ColorUtils.colorToRgb(stroke.color);
  if (!color) {
    return;
  }
  context2.beginPath();
  context2.moveTo(rawData[0].x, rawData[0].y);
  for (const item of rawData) {
    context2.lineTo(item.x, item.y);
  }
  context2.closePath();
  context2.strokeStyle = ColorUtils.getStyleFromRgb(color);
  context2.lineWidth = stroke.width;
  context2.stroke();
}
function drawPolygonMaskPath(context2, path, stroke, position) {
  context2.translate(position.x, position.y);
  const color = ColorUtils.colorToRgb(stroke.color);
  if (!color) {
    return;
  }
  context2.strokeStyle = ColorUtils.getStyleFromRgb(color, stroke.opacity);
  context2.lineWidth = stroke.width;
  context2.stroke(path);
}
function parsePaths(paths, scale, offset) {
  const res = [];
  for (const path of paths) {
    const segments = path.element.pathSegList;
    const len = segments.numberOfItems;
    const p5 = {
      x: 0,
      y: 0
    };
    for (let i = 0; i < len; i++) {
      const segment = segments.getItem(i);
      const svgPathSeg = window.SVGPathSeg;
      switch (segment.pathSegType) {
        case svgPathSeg.PATHSEG_MOVETO_ABS:
        case svgPathSeg.PATHSEG_LINETO_ABS:
        case svgPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
        case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
        case svgPathSeg.PATHSEG_ARC_ABS:
        case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
        case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
          const absSeg = segment;
          p5.x = absSeg.x;
          p5.y = absSeg.y;
          break;
        }
        case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
          p5.x = segment.x;
          break;
        case svgPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
          p5.y = segment.y;
          break;
        case svgPathSeg.PATHSEG_LINETO_REL:
        case svgPathSeg.PATHSEG_MOVETO_REL:
        case svgPathSeg.PATHSEG_CURVETO_CUBIC_REL:
        case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
        case svgPathSeg.PATHSEG_ARC_REL:
        case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
        case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
          const relSeg = segment;
          p5.x += relSeg.x;
          p5.y += relSeg.y;
          break;
        }
        case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
          p5.x += segment.x;
          break;
        case svgPathSeg.PATHSEG_LINETO_VERTICAL_REL:
          p5.y += segment.y;
          break;
        case svgPathSeg.PATHSEG_UNKNOWN:
        case svgPathSeg.PATHSEG_CLOSEPATH:
          continue;
      }
      res.push({
        x: p5.x * scale + offset.x,
        y: p5.y * scale + offset.y
      });
    }
  }
  return res;
}
function calcClosestPtOnSegment(s1, s2, pos) {
  const {dx, dy} = NumberUtils.getDistances(pos, s1);
  const {dx: dxx, dy: dyy} = NumberUtils.getDistances(s2, s1);
  const t3 = (dx * dxx + dy * dyy) / (Math.pow(dxx, 2) + Math.pow(dyy, 2));
  let x3 = s1.x + dxx * t3;
  let y5 = s1.y + dyy * t3;
  if (t3 < 0) {
    x3 = s1.x;
    y5 = s1.y;
  } else if (t3 > 1) {
    x3 = s2.x;
    y5 = s2.y;
  }
  return {x: x3, y: y5, isOnSegment: t3 >= 0 && t3 <= 1};
}
function segmentBounce(start, stop, velocity) {
  const {dx, dy} = NumberUtils.getDistances(start, stop);
  const wallAngle = Math.atan2(dy, dx);
  const wallNormalX = Math.sin(wallAngle);
  const wallNormalY = -Math.cos(wallAngle);
  const d4 = 2 * (velocity.x * wallNormalX + velocity.y * wallNormalY);
  velocity.x -= d4 * wallNormalX;
  velocity.y -= d4 * wallNormalY;
}
var PolygonMaskInstance = class {
  constructor(container) {
    this.container = container;
    this.dimension = {
      height: 0,
      width: 0
    };
    this.path2DSupported = !!window.Path2D;
    this.options = new PolygonMask();
    this.polygonMaskMoveRadius = this.options.move.radius * container.retina.pixelRatio;
  }
  initAsync(options) {
    return __awaiter$6(this, void 0, void 0, function* () {
      this.options.load(options === null || options === void 0 ? void 0 : options.polygon);
      const polygonMaskOptions = this.options;
      this.polygonMaskMoveRadius = polygonMaskOptions.move.radius * this.container.retina.pixelRatio;
      if (polygonMaskOptions.enable) {
        yield this.initRawData();
      }
    });
  }
  resize() {
    const container = this.container;
    const options = this.options;
    if (!(options.enable && options.type !== Type.none)) {
      return;
    }
    if (this.redrawTimeout) {
      clearTimeout(this.redrawTimeout);
    }
    this.redrawTimeout = window.setTimeout(() => __awaiter$6(this, void 0, void 0, function* () {
      yield this.initRawData(true);
      container.particles.redraw();
    }), 250);
  }
  stop() {
    delete this.raw;
    delete this.paths;
  }
  particlesInitialization() {
    const options = this.options;
    if (options.enable && options.type === Type.inline && (options.inline.arrangement === InlineArrangement.onePerPoint || options.inline.arrangement === InlineArrangement.perPoint)) {
      this.drawPoints();
      return true;
    }
    return false;
  }
  particlePosition(position) {
    var _a, _b;
    const options = this.options;
    if (!(options.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0)) {
      return;
    }
    return Utils.deepExtend({}, position ? position : this.randomPoint());
  }
  particleBounce(particle, delta, direction) {
    return this.polygonBounce(particle, delta, direction);
  }
  clickPositionValid(position) {
    const options = this.options;
    return options.enable && options.type !== Type.none && options.type !== Type.inline && this.checkInsidePolygon(position);
  }
  draw(context2) {
    var _a;
    if (!((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
      return;
    }
    const options = this.options;
    const polygonDraw = options.draw;
    if (!(options.enable && polygonDraw.enable)) {
      return;
    }
    const rawData = this.raw;
    for (const path of this.paths) {
      const path2d = path.path2d;
      const path2dSupported = this.path2DSupported;
      if (!context2) {
        continue;
      }
      if (path2dSupported && path2d && this.offset) {
        drawPolygonMaskPath(context2, path2d, polygonDraw.stroke, this.offset);
      } else if (rawData) {
        drawPolygonMask(context2, rawData, polygonDraw.stroke);
      }
    }
  }
  polygonBounce(particle, delta, direction) {
    const options = this.options;
    if (!this.raw || !options.enable || direction !== OutModeDirection.top) {
      return false;
    }
    if (options.type === Type.inside || options.type === Type.outside) {
      let closest, dx, dy;
      const pos = particle.getPosition(), radius = particle.getRadius();
      for (let i = 0, j2 = this.raw.length - 1; i < this.raw.length; j2 = i++) {
        const pi2 = this.raw[i], pj2 = this.raw[j2];
        closest = calcClosestPtOnSegment(pi2, pj2, pos);
        const dist = NumberUtils.getDistances(pos, closest);
        [dx, dy] = [dist.dx, dist.dy];
        if (dist.distance < radius) {
          segmentBounce(pi2, pj2, particle.velocity);
          return true;
        }
      }
      if (closest && dx !== void 0 && dy !== void 0 && !this.checkInsidePolygon(pos)) {
        const factor = {x: 1, y: 1};
        if (particle.position.x >= closest.x) {
          factor.x = -1;
        }
        if (particle.position.y >= closest.y) {
          factor.y = -1;
        }
        particle.position.x = closest.x + radius * 2 * factor.x;
        particle.position.y = closest.y + radius * 2 * factor.y;
        particle.velocity.mult(-1);
        return true;
      }
    } else if (options.type === Type.inline && particle.initialPosition) {
      const dist = NumberUtils.getDistance(particle.initialPosition, particle.getPosition());
      if (dist > this.polygonMaskMoveRadius) {
        particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
        particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
        return true;
      }
    }
    return false;
  }
  checkInsidePolygon(position) {
    var _a, _b;
    const container = this.container;
    const options = this.options;
    if (!options.enable || options.type === Type.none || options.type === Type.inline) {
      return true;
    }
    if (!this.raw) {
      throw new Error(Constants.noPolygonFound);
    }
    const canvasSize = container.canvas.size;
    const x3 = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width;
    const y5 = (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height;
    let inside = false;
    for (let i = 0, j2 = this.raw.length - 1; i < this.raw.length; j2 = i++) {
      const pi2 = this.raw[i];
      const pj2 = this.raw[j2];
      const intersect = pi2.y > y5 !== pj2.y > y5 && x3 < (pj2.x - pi2.x) * (y5 - pi2.y) / (pj2.y - pi2.y) + pi2.x;
      if (intersect) {
        inside = !inside;
      }
    }
    return options.type === Type.inside ? inside : options.type === Type.outside ? !inside : false;
  }
  parseSvgPath(xml, force) {
    var _a, _b, _c;
    const forceDownload = force !== null && force !== void 0 ? force : false;
    if (this.paths !== void 0 && !forceDownload) {
      return this.raw;
    }
    const container = this.container;
    const options = this.options;
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "image/svg+xml");
    const svg = doc.getElementsByTagName("svg")[0];
    let svgPaths = svg.getElementsByTagName("path");
    if (!svgPaths.length) {
      svgPaths = doc.getElementsByTagName("path");
    }
    this.paths = [];
    for (let i = 0; i < svgPaths.length; i++) {
      const path = svgPaths.item(i);
      if (path) {
        this.paths.push({
          element: path,
          length: path.getTotalLength()
        });
      }
    }
    const pxRatio = container.retina.pixelRatio;
    const scale = options.scale / pxRatio;
    this.dimension.width = parseFloat((_a = svg.getAttribute("width")) !== null && _a !== void 0 ? _a : "0") * scale;
    this.dimension.height = parseFloat((_b = svg.getAttribute("height")) !== null && _b !== void 0 ? _b : "0") * scale;
    const position = (_c = options.position) !== null && _c !== void 0 ? _c : {
      x: 50,
      y: 50
    };
    this.offset = {
      x: container.canvas.size.width * position.x / (100 * pxRatio) - this.dimension.width / 2,
      y: container.canvas.size.height * position.y / (100 * pxRatio) - this.dimension.height / 2
    };
    return parsePaths(this.paths, scale, this.offset);
  }
  downloadSvgPath(svgUrl, force) {
    return __awaiter$6(this, void 0, void 0, function* () {
      const options = this.options;
      const url = svgUrl || options.url;
      const forceDownload = force !== null && force !== void 0 ? force : false;
      if (!url || this.paths !== void 0 && !forceDownload) {
        return this.raw;
      }
      const req = yield fetch(url);
      if (!req.ok) {
        throw new Error("tsParticles Error - Error occurred during polygon mask download");
      }
      return this.parseSvgPath(yield req.text(), force);
    });
  }
  drawPoints() {
    if (!this.raw) {
      return;
    }
    for (const item of this.raw) {
      this.container.particles.addParticle({
        x: item.x,
        y: item.y
      });
    }
  }
  randomPoint() {
    const container = this.container;
    const options = this.options;
    let position;
    if (options.type === Type.inline) {
      switch (options.inline.arrangement) {
        case InlineArrangement.randomPoint:
          position = this.getRandomPoint();
          break;
        case InlineArrangement.randomLength:
          position = this.getRandomPointByLength();
          break;
        case InlineArrangement.equidistant:
          position = this.getEquidistantPointByIndex(container.particles.count);
          break;
        case InlineArrangement.onePerPoint:
        case InlineArrangement.perPoint:
        default:
          position = this.getPointByIndex(container.particles.count);
      }
    } else {
      position = {
        x: Math.random() * container.canvas.size.width,
        y: Math.random() * container.canvas.size.height
      };
    }
    if (this.checkInsidePolygon(position)) {
      return position;
    } else {
      return this.randomPoint();
    }
  }
  getRandomPoint() {
    if (!this.raw || !this.raw.length) {
      throw new Error(Constants.noPolygonDataLoaded);
    }
    const coords = Utils.itemFromArray(this.raw);
    return {
      x: coords.x,
      y: coords.y
    };
  }
  getRandomPointByLength() {
    var _a, _b, _c;
    const options = this.options;
    if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
      throw new Error(Constants.noPolygonDataLoaded);
    }
    const path = Utils.itemFromArray(this.paths);
    const distance = Math.floor(Math.random() * path.length) + 1;
    const point = path.element.getPointAtLength(distance);
    return {
      x: point.x * options.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) || 0),
      y: point.y * options.scale + (((_c = this.offset) === null || _c === void 0 ? void 0 : _c.y) || 0)
    };
  }
  getEquidistantPointByIndex(index3) {
    var _a, _b, _c, _d, _e2, _f, _g;
    const options = this.container.actualOptions;
    const polygonMaskOptions = this.options;
    if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length))
      throw new Error(Constants.noPolygonDataLoaded);
    let offset = 0;
    let point;
    const totalLength = this.paths.reduce((tot, path) => tot + path.length, 0);
    const distance = totalLength / options.particles.number.value;
    for (const path of this.paths) {
      const pathDistance = distance * index3 - offset;
      if (pathDistance <= path.length) {
        point = path.element.getPointAtLength(pathDistance);
        break;
      } else {
        offset += path.length;
      }
    }
    return {
      x: ((_b = point === null || point === void 0 ? void 0 : point.x) !== null && _b !== void 0 ? _b : 0) * polygonMaskOptions.scale + ((_d = (_c = this.offset) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : 0),
      y: ((_e2 = point === null || point === void 0 ? void 0 : point.y) !== null && _e2 !== void 0 ? _e2 : 0) * polygonMaskOptions.scale + ((_g = (_f = this.offset) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : 0)
    };
  }
  getPointByIndex(index3) {
    if (!this.raw || !this.raw.length) {
      throw new Error(Constants.noPolygonDataLoaded);
    }
    const coords = this.raw[index3 % this.raw.length];
    return {
      x: coords.x,
      y: coords.y
    };
  }
  createPath2D() {
    var _a, _b;
    const options = this.options;
    if (!this.path2DSupported || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
      return;
    }
    for (const path of this.paths) {
      const pathData = (_b = path.element) === null || _b === void 0 ? void 0 : _b.getAttribute("d");
      if (pathData) {
        const path2d = new Path2D(pathData);
        const matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
        const finalPath = new Path2D();
        const transform2 = matrix.scale(options.scale);
        if (finalPath.addPath) {
          finalPath.addPath(path2d, transform2);
          path.path2d = finalPath;
        } else {
          delete path.path2d;
        }
      } else {
        delete path.path2d;
      }
      if (path.path2d || !this.raw) {
        continue;
      }
      path.path2d = new Path2D();
      path.path2d.moveTo(this.raw[0].x, this.raw[0].y);
      this.raw.forEach((pos, i) => {
        var _a2;
        if (i > 0) {
          (_a2 = path.path2d) === null || _a2 === void 0 ? void 0 : _a2.lineTo(pos.x, pos.y);
        }
      });
      path.path2d.closePath();
    }
  }
  initRawData(force) {
    return __awaiter$6(this, void 0, void 0, function* () {
      const options = this.options;
      if (options.url) {
        this.raw = yield this.downloadSvgPath(options.url, force);
      } else if (options.data) {
        const data = options.data;
        let svg;
        if (typeof data !== "string") {
          const path = data.path instanceof Array ? data.path.map((t3) => `<path d="${t3}" />`).join("") : `<path d="${data.path}" />`;
          const namespaces = 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';
          svg = `<svg ${namespaces} width="${data.size.width}" height="${data.size.height}">${path}</svg>`;
        } else {
          svg = data;
        }
        this.raw = this.parseSvgPath(svg, force);
      }
      this.createPath2D();
    });
  }
};
var PolygonMaskPlugin = class {
  constructor() {
    this.id = "polygonMask";
  }
  getPlugin(container) {
    return new PolygonMaskInstance(container);
  }
  needsPlugin(options) {
    var _a, _b, _c;
    return (_b = (_a = options === null || options === void 0 ? void 0 : options.polygon) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : ((_c = options === null || options === void 0 ? void 0 : options.polygon) === null || _c === void 0 ? void 0 : _c.type) !== void 0 && options.polygon.type !== Type.none;
  }
  loadOptions(options, source) {
    if (!this.needsPlugin(source)) {
      return;
    }
    const optionsCast = options;
    let polygonOptions = optionsCast.polygon;
    if ((polygonOptions === null || polygonOptions === void 0 ? void 0 : polygonOptions.load) === void 0) {
      optionsCast.polygon = polygonOptions = new PolygonMask();
    }
    polygonOptions.load(source === null || source === void 0 ? void 0 : source.polygon);
  }
};
var plugin$2 = new PolygonMaskPlugin();
var Main = class extends MainSlim {
  constructor() {
    super();
    this.addPlugin(plugin);
    this.addPlugin(plugin$1);
    this.addPlugin(plugin$2);
  }
};
var tsParticles = new Main();
tsParticles.init();
var {particlesJS, pJSDom} = initPjs(tsParticles);
var esm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CanvasUtils,
  ColorUtils,
  Constants,
  Utils,
  Main,
  particlesJS,
  pJSDom,
  tsParticles,
  Vector,
  Container: Container4,
  get MoveDirection() {
    return MoveDirection;
  },
  get RotateDirection() {
    return RotateDirection;
  },
  get ClickMode() {
    return ClickMode;
  },
  get DestroyMode() {
    return DestroyMode;
  },
  get DivMode() {
    return DivMode;
  },
  get HoverMode() {
    return HoverMode;
  },
  get CollisionMode() {
    return CollisionMode;
  },
  get OutMode() {
    return OutMode;
  },
  get SizeMode() {
    return SizeMode;
  },
  get ThemeMode() {
    return ThemeMode;
  },
  get AnimationStatus() {
    return AnimationStatus;
  },
  get DestroyType() {
    return DestroyType;
  },
  get ProcessBubbleType() {
    return ProcessBubbleType;
  },
  get ShapeType() {
    return ShapeType;
  },
  get StartValueType() {
    return StartValueType;
  },
  get DivType() {
    return DivType;
  },
  get EasingType() {
    return EasingType;
  },
  get InteractivityDetect() {
    return InteractivityDetect;
  },
  get AbsorberClickMode() {
    return AbsorberClickMode;
  },
  get EmitterClickMode() {
    return EmitterClickMode;
  },
  get InlineArrangement() {
    return InlineArrangement;
  },
  get MoveType() {
    return MoveType;
  },
  get Type() {
    return Type;
  }
});
var MoveDirection_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.MoveDirection = void 0;
  (function(MoveDirection2) {
    MoveDirection2["bottom"] = "bottom";
    MoveDirection2["bottomLeft"] = "bottom-left";
    MoveDirection2["bottomRight"] = "bottom-right";
    MoveDirection2["left"] = "left";
    MoveDirection2["none"] = "none";
    MoveDirection2["right"] = "right";
    MoveDirection2["top"] = "top";
    MoveDirection2["topLeft"] = "top-left";
    MoveDirection2["topRight"] = "top-right";
  })(exports.MoveDirection || (exports.MoveDirection = {}));
});
var RotateDirection_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.RotateDirection = void 0;
  (function(RotateDirection2) {
    RotateDirection2["clockwise"] = "clockwise";
    RotateDirection2["counterClockwise"] = "counter-clockwise";
    RotateDirection2["random"] = "random";
  })(exports.RotateDirection || (exports.RotateDirection = {}));
});
var Directions = createCommonjsModule(function(module, exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m4, k4, k22) {
    if (k22 === void 0)
      k22 = k4;
    Object.defineProperty(o, k22, {enumerable: true, get: function() {
      return m4[k4];
    }});
  } : function(o, m4, k4, k22) {
    if (k22 === void 0)
      k22 = k4;
    o[k22] = m4[k4];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m4, exports2) {
    for (var p5 in m4)
      if (p5 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p5))
        __createBinding(exports2, m4, p5);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  __exportStar(MoveDirection_1, exports);
  __exportStar(RotateDirection_1, exports);
});
var ClickMode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ClickMode = void 0;
  (function(ClickMode2) {
    ClickMode2["attract"] = "attract";
    ClickMode2["bubble"] = "bubble";
    ClickMode2["push"] = "push";
    ClickMode2["remove"] = "remove";
    ClickMode2["repulse"] = "repulse";
    ClickMode2["pause"] = "pause";
    ClickMode2["trail"] = "trail";
  })(exports.ClickMode || (exports.ClickMode = {}));
});
var DestroyMode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DestroyMode = void 0;
  (function(DestroyMode2) {
    DestroyMode2["none"] = "none";
    DestroyMode2["split"] = "split";
  })(exports.DestroyMode || (exports.DestroyMode = {}));
});
var DivMode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DivMode = void 0;
  (function(DivMode2) {
    DivMode2["bounce"] = "bounce";
    DivMode2["bubble"] = "bubble";
    DivMode2["repulse"] = "repulse";
  })(exports.DivMode || (exports.DivMode = {}));
});
var HoverMode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.HoverMode = void 0;
  (function(HoverMode2) {
    HoverMode2["attract"] = "attract";
    HoverMode2["bounce"] = "bounce";
    HoverMode2["bubble"] = "bubble";
    HoverMode2["connect"] = "connect";
    HoverMode2["grab"] = "grab";
    HoverMode2["light"] = "light";
    HoverMode2["repulse"] = "repulse";
    HoverMode2["slow"] = "slow";
    HoverMode2["trail"] = "trail";
  })(exports.HoverMode || (exports.HoverMode = {}));
});
var CollisionMode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.CollisionMode = void 0;
  (function(CollisionMode2) {
    CollisionMode2["absorb"] = "absorb";
    CollisionMode2["bounce"] = "bounce";
    CollisionMode2["destroy"] = "destroy";
  })(exports.CollisionMode || (exports.CollisionMode = {}));
});
var OutMode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.OutMode = void 0;
  (function(OutMode2) {
    OutMode2["bounce"] = "bounce";
    OutMode2["bounceHorizontal"] = "bounce-horizontal";
    OutMode2["bounceVertical"] = "bounce-vertical";
    OutMode2["none"] = "none";
    OutMode2["out"] = "out";
    OutMode2["destroy"] = "destroy";
    OutMode2["split"] = "split";
  })(exports.OutMode || (exports.OutMode = {}));
});
var SizeMode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.SizeMode = void 0;
  (function(SizeMode2) {
    SizeMode2["precise"] = "precise";
    SizeMode2["percent"] = "percent";
  })(exports.SizeMode || (exports.SizeMode = {}));
});
var ThemeMode_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ThemeMode = void 0;
  (function(ThemeMode2) {
    ThemeMode2["any"] = "any";
    ThemeMode2["dark"] = "dark";
    ThemeMode2["light"] = "light";
  })(exports.ThemeMode || (exports.ThemeMode = {}));
});
var Modes$1 = createCommonjsModule(function(module, exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m4, k4, k22) {
    if (k22 === void 0)
      k22 = k4;
    Object.defineProperty(o, k22, {enumerable: true, get: function() {
      return m4[k4];
    }});
  } : function(o, m4, k4, k22) {
    if (k22 === void 0)
      k22 = k4;
    o[k22] = m4[k4];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m4, exports2) {
    for (var p5 in m4)
      if (p5 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p5))
        __createBinding(exports2, m4, p5);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  __exportStar(ClickMode_1, exports);
  __exportStar(DestroyMode_1, exports);
  __exportStar(DivMode_1, exports);
  __exportStar(HoverMode_1, exports);
  __exportStar(CollisionMode_1, exports);
  __exportStar(OutMode_1, exports);
  __exportStar(SizeMode_1, exports);
  __exportStar(ThemeMode_1, exports);
});
var AnimationStatus_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.AnimationStatus = void 0;
  (function(AnimationStatus2) {
    AnimationStatus2[AnimationStatus2["increasing"] = 0] = "increasing";
    AnimationStatus2[AnimationStatus2["decreasing"] = 1] = "decreasing";
  })(exports.AnimationStatus || (exports.AnimationStatus = {}));
});
var DestroyType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DestroyType = void 0;
  (function(DestroyType2) {
    DestroyType2["none"] = "none";
    DestroyType2["max"] = "max";
    DestroyType2["min"] = "min";
  })(exports.DestroyType || (exports.DestroyType = {}));
});
var ProcessBubbleType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ProcessBubbleType = void 0;
  (function(ProcessBubbleType2) {
    ProcessBubbleType2["color"] = "color";
    ProcessBubbleType2["opacity"] = "opacity";
    ProcessBubbleType2["size"] = "size";
  })(exports.ProcessBubbleType || (exports.ProcessBubbleType = {}));
});
var ShapeType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.ShapeType = void 0;
  (function(ShapeType2) {
    ShapeType2["char"] = "char";
    ShapeType2["character"] = "character";
    ShapeType2["circle"] = "circle";
    ShapeType2["edge"] = "edge";
    ShapeType2["image"] = "image";
    ShapeType2["images"] = "images";
    ShapeType2["line"] = "line";
    ShapeType2["polygon"] = "polygon";
    ShapeType2["square"] = "square";
    ShapeType2["star"] = "star";
    ShapeType2["triangle"] = "triangle";
  })(exports.ShapeType || (exports.ShapeType = {}));
});
var StartValueType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.StartValueType = void 0;
  (function(StartValueType2) {
    StartValueType2["max"] = "max";
    StartValueType2["min"] = "min";
    StartValueType2["random"] = "random";
  })(exports.StartValueType || (exports.StartValueType = {}));
});
var DivType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.DivType = void 0;
  (function(DivType2) {
    DivType2["circle"] = "circle";
    DivType2["rectangle"] = "rectangle";
  })(exports.DivType || (exports.DivType = {}));
});
var EasingType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.EasingType = void 0;
  (function(EasingType2) {
    EasingType2["easeOutBack"] = "ease-out-back";
    EasingType2["easeOutCirc"] = "ease-out-circ";
    EasingType2["easeOutCubic"] = "ease-out-cubic";
    EasingType2["easeOutQuad"] = "ease-out-quad";
    EasingType2["easeOutQuart"] = "ease-out-quart";
    EasingType2["easeOutQuint"] = "ease-out-quint";
    EasingType2["easeOutExpo"] = "ease-out-expo";
    EasingType2["easeOutSine"] = "ease-out-sine";
  })(exports.EasingType || (exports.EasingType = {}));
});
var Types = createCommonjsModule(function(module, exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m4, k4, k22) {
    if (k22 === void 0)
      k22 = k4;
    Object.defineProperty(o, k22, {enumerable: true, get: function() {
      return m4[k4];
    }});
  } : function(o, m4, k4, k22) {
    if (k22 === void 0)
      k22 = k4;
    o[k22] = m4[k4];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m4, exports2) {
    for (var p5 in m4)
      if (p5 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p5))
        __createBinding(exports2, m4, p5);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  __exportStar(DestroyType_1, exports);
  __exportStar(ProcessBubbleType_1, exports);
  __exportStar(ShapeType_1, exports);
  __exportStar(StartValueType_1, exports);
  __exportStar(DivType_1, exports);
  __exportStar(EasingType_1, exports);
});
var InteractivityDetect_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.InteractivityDetect = void 0;
  (function(InteractivityDetect2) {
    InteractivityDetect2["canvas"] = "canvas";
    InteractivityDetect2["parent"] = "parent";
    InteractivityDetect2["window"] = "window";
  })(exports.InteractivityDetect || (exports.InteractivityDetect = {}));
});
var Enums = createCommonjsModule(function(module, exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m4, k4, k22) {
    if (k22 === void 0)
      k22 = k4;
    Object.defineProperty(o, k22, {enumerable: true, get: function() {
      return m4[k4];
    }});
  } : function(o, m4, k4, k22) {
    if (k22 === void 0)
      k22 = k4;
    o[k22] = m4[k4];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m4, exports2) {
    for (var p5 in m4)
      if (p5 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p5))
        __createBinding(exports2, m4, p5);
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  __exportStar(Directions, exports);
  __exportStar(Modes$1, exports);
  __exportStar(AnimationStatus_1, exports);
  __exportStar(Types, exports);
  __exportStar(InteractivityDetect_1, exports);
});
var particles = createCommonjsModule(function(module, exports) {
  (() => {
    var t3 = {245: (t4, e5, r5) => {
      r5.d(e5, {Z: () => d4});
      const o2 = react;
      var n5 = r5.n(o2);
      const i2 = esm;
      var s = r5(252), u2 = r5.n(s);
      function a(t5) {
        return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t6) {
          return typeof t6;
        } : function(t6) {
          return t6 && typeof Symbol == "function" && t6.constructor === Symbol && t6 !== Symbol.prototype ? "symbol" : typeof t6;
        })(t5);
      }
      function c4(t5, e6) {
        for (var r6 = 0; r6 < e6.length; r6++) {
          var o3 = e6[r6];
          o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(t5, o3.key, o3);
        }
      }
      function l4(t5, e6, r6) {
        return (l4 = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t6, e7, r7) {
          var o3 = function(t7, e8) {
            for (; !Object.prototype.hasOwnProperty.call(t7, e8) && (t7 = y5(t7)) !== null; )
              ;
            return t7;
          }(t6, e7);
          if (o3) {
            var n6 = Object.getOwnPropertyDescriptor(o3, e7);
            return n6.get ? n6.get.call(r7) : n6.value;
          }
        })(t5, e6, r6 || t5);
      }
      function f4(t5, e6) {
        return (f4 = Object.setPrototypeOf || function(t6, e7) {
          return t6.__proto__ = e7, t6;
        })(t5, e6);
      }
      function p5(t5, e6) {
        return !e6 || a(e6) !== "object" && typeof e6 != "function" ? function(t6) {
          if (t6 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t6;
        }(t5) : e6;
      }
      function y5(t5) {
        return (y5 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t6) {
          return t6.__proto__ || Object.getPrototypeOf(t6);
        })(t5);
      }
      var d4 = function(t5) {
        !function(t6, e7) {
          if (typeof e7 != "function" && e7 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t6.prototype = Object.create(e7 && e7.prototype, {constructor: {value: t6, writable: true, configurable: true}}), e7 && f4(t6, e7);
        }(d5, t5);
        var e6, r6, o3, s2, a2 = (o3 = d5, s2 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t6) {
            return false;
          }
        }(), function() {
          var t6, e7 = y5(o3);
          if (s2) {
            var r7 = y5(this).constructor;
            t6 = Reflect.construct(e7, arguments, r7);
          } else
            t6 = e7.apply(this, arguments);
          return p5(this, t6);
        });
        function d5(t6) {
          var e7;
          return function(t7, e8) {
            if (!(t7 instanceof e8))
              throw new TypeError("Cannot call a class as a function");
          }(this, d5), (e7 = a2.call(this, t6)).state = {library: void 0}, e7;
        }
        return e6 = d5, (r6 = [{key: "destroy", value: function() {
          this.state.library && (this.state.library.destroy(), this.setState({library: void 0}));
        }}, {key: "shouldComponentUpdate", value: function(t6) {
          return !u2()(t6, this.props);
        }}, {key: "componentDidUpdate", value: function() {
          this.refresh();
        }}, {key: "forceUpdate", value: function() {
          this.refresh(), l4(y5(d5.prototype), "forceUpdate", this).call(this);
        }}, {key: "componentDidMount", value: function() {
          this.props.init && this.props.init(i2.tsParticles), this.loadParticles();
        }}, {key: "componentWillUnmount", value: function() {
          this.destroy();
        }}, {key: "render", value: function() {
          var t6 = this.props, e7 = t6.width, r7 = t6.height, o4 = t6.className, i3 = t6.canvasClassName, s3 = t6.id;
          return n5().createElement("div", {className: o4, id: s3}, n5().createElement("canvas", {className: i3, style: Object.assign(Object.assign({}, this.props.style), {width: e7, height: r7})}));
        }}, {key: "refresh", value: function() {
          this.destroy(), this.loadParticles();
        }}, {key: "loadParticles", value: function() {
          var t6, e7 = this, r7 = function(t7) {
            e7.props.container && (e7.props.container.current = t7), e7.setState({library: t7}), e7.props.loaded && e7.props.loaded(t7);
          };
          this.props.url ? i2.tsParticles.loadJSON(this.props.id, this.props.url).then(r7) : i2.tsParticles.load(this.props.id, (t6 = this.props.params) !== null && t6 !== void 0 ? t6 : this.props.options).then(r7);
        }}]) && c4(e6.prototype, r6), d5;
      }(o2.Component);
      d4.defaultProps = {width: "100%", height: "100%", options: {}, style: {}, url: void 0, id: "tsparticles"};
    }, 252: (t4) => {
      t4.exports = function t5(e5, r5) {
        if (e5 === r5)
          return true;
        if (e5 && r5 && typeof e5 == "object" && typeof r5 == "object") {
          if (e5.constructor !== r5.constructor)
            return false;
          var o2, n5, i2;
          if (Array.isArray(e5)) {
            if ((o2 = e5.length) != r5.length)
              return false;
            for (n5 = o2; n5-- != 0; )
              if (!t5(e5[n5], r5[n5]))
                return false;
            return true;
          }
          if (e5.constructor === RegExp)
            return e5.source === r5.source && e5.flags === r5.flags;
          if (e5.valueOf !== Object.prototype.valueOf)
            return e5.valueOf() === r5.valueOf();
          if (e5.toString !== Object.prototype.toString)
            return e5.toString() === r5.toString();
          if ((o2 = (i2 = Object.keys(e5)).length) !== Object.keys(r5).length)
            return false;
          for (n5 = o2; n5-- != 0; )
            if (!Object.prototype.hasOwnProperty.call(r5, i2[n5]))
              return false;
          for (n5 = o2; n5-- != 0; ) {
            var s = i2[n5];
            if (!(s === "_owner" && e5.$$typeof || t5(e5[s], r5[s])))
              return false;
          }
          return true;
        }
        return e5 != e5 && r5 != r5;
      };
    }, 90: (t4) => {
      t4.exports = Enums;
    }}, e4 = {};
    function r4(o2) {
      var n5 = e4[o2];
      if (n5 !== void 0)
        return n5.exports;
      var i2 = e4[o2] = {exports: {}};
      return t3[o2](i2, i2.exports, r4), i2.exports;
    }
    r4.n = (t4) => {
      var e5 = t4 && t4.__esModule ? () => t4.default : () => t4;
      return r4.d(e5, {a: e5}), e5;
    }, r4.d = (t4, e5) => {
      for (var o2 in e5)
        r4.o(e5, o2) && !r4.o(t4, o2) && Object.defineProperty(t4, o2, {enumerable: true, get: e5[o2]});
    }, r4.o = (t4, e5) => Object.prototype.hasOwnProperty.call(t4, e5), r4.r = (t4) => {
      typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t4, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t4, "__esModule", {value: true});
    };
    var o = {};
    (() => {
      r4.r(o), r4.d(o, {default: () => i2, Particles: () => t4.Z});
      var t4 = r4(245), e5 = r4(90), n5 = {};
      for (const t5 in e5)
        ["default", "Particles"].indexOf(t5) < 0 && (n5[t5] = () => e5[t5]);
      r4.d(o, n5);
      const i2 = t4.Z;
    })();
    var n4 = exports;
    for (var i in o)
      n4[i] = o[i];
    o.__esModule && Object.defineProperty(n4, "__esModule", {value: true});
  })();
});
for (let key in particles) {
  particles.default[key] = particles[key];
}
var reactTsparticles = particles.default;
var react_tsparticles_default = reactTsparticles;

// build/dist/components/Particles.js
var TSParticles = class extends Component {
  constructor(props) {
    super(props);
    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }
  particlesInit(main) {
  }
  particlesLoaded(container) {
  }
  render() {
    return /* @__PURE__ */ react.createElement(react_tsparticles_default, {
      id: "tsparticles",
      init: this.particlesInit,
      loaded: this.particlesLoaded,
      options: {
        backgroundMode: {
          enable: true
        },
        background: {
          color: {
            value: "#242424"
          }
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: false,
              mode: "push"
            },
            onHover: {
              enable: false,
              mode: "repulse"
            },
            resize: false
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: "#888888"
          },
          links: {
            color: "#888888",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.3,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: false
      }
    });
  }
};
var Particles_default = TSParticles;

// build/dist/components/TechStack.js
var Icon2 = styled_components_default(FontAwesomeIcon)`
    height: 3em;
    width: 3em !important;
`;
function TechStack(props) {
  return /* @__PURE__ */ react.createElement(Card_default, {
    className: props.className
  }, /* @__PURE__ */ react.createElement(Icon2, {
    icon: faAngular
  }), /* @__PURE__ */ react.createElement(Icon2, {
    icon: faReact
  }), /* @__PURE__ */ react.createElement(Icon2, {
    icon: faNodeJs
  }));
}
var TechStack_default = TechStack;

// build/dist/components/Welcome.js
var Container5 = styled_components_default.div`
    height: 100vh;
    width: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;

    @media(max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
`;
var Intro = styled_components_default(Introduction)`
    width: 30%;
    margin: 0 0 2em 3em;
    align-self: end;

    @media (max-width: 1200px) {
        width: auto;
        align-self: center;
        margin: auto 0 auto 0;
    }
`;
var Tech = styled_components_default(TechStack_default)`
    display: flex;
    align-self: end;
    align-items: end;
    justify-content: center;
    justify-self: end;
    width: 10em;
    margin: 0 0 2em 0;
    gap: 1em;
    border: none;

    @media(max-width: 1200px) {
        align-self: center;
        justify-self: center;
    }
`;
function Welcome(props) {
  return /* @__PURE__ */ react.createElement(Container5, {
    className: props.className
  }, /* @__PURE__ */ react.createElement(Intro, null), /* @__PURE__ */ react.createElement(Tech, null));
}

// build/_snowpack/pkg/@fortawesome/free-solid-svg-icons.js
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var faTools = {
  prefix: "fas",
  iconName: "tools",
  icon: [512, 512, [], "f7d9", "M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"]
};

// build/dist/components/Maintenance.js
function Maintenance() {
  return /* @__PURE__ */ react.createElement("div", {
    style: {
      margin: "4em 2em 0 0",
      width: "-moz-available",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      paddingLeft: "3em"
    }
  }, /* @__PURE__ */ react.createElement(FontAwesomeIcon, {
    style: {
      width: "3em",
      height: "3em",
      marginRight: "2em",
      marginTop: "1em"
    },
    icon: faTools
  }), /* @__PURE__ */ react.createElement("h1", null, "Página em construção."));
}

// build/dist/components/About.js
function About() {
  return /* @__PURE__ */ react.createElement(Maintenance, null);
}
var About_default = About;

// build/dist/components/Posts.js
function Posts() {
  return /* @__PURE__ */ react.createElement(Maintenance, null);
}
var Posts_default = Posts;

// build/dist/components/Projects.js
function Projects() {
  return /* @__PURE__ */ react.createElement(Maintenance, null);
}
var Projects_default = Projects;

// build/dist/App.js
function App() {
  return /* @__PURE__ */ react.createElement(BrowserRouter, null, /* @__PURE__ */ react.createElement(Particles_default, null), /* @__PURE__ */ react.createElement(Header_default, null), /* @__PURE__ */ react.createElement(Switch, null, /* @__PURE__ */ react.createElement(Route, {
    exact: true,
    path: "/",
    component: Welcome
  }), /* @__PURE__ */ react.createElement(Route, {
    path: "/projects",
    component: Projects_default
  }), /* @__PURE__ */ react.createElement(Route, {
    path: "/posts",
    component: Posts_default
  }), /* @__PURE__ */ react.createElement(Route, {
    path: "/about",
    component: About_default
  })));
}

// build/dist/index.js
import.meta.env = env_exports;
var GlobalStyle = $e2`
    * {
        scrollbar-color: #888888 #242424;
        scrollbar-width: thin;
    }

    html, body {
        margin: 0;
    }

    body {
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
react_dom_default.render(/* @__PURE__ */ react.createElement(react.StrictMode, null, /* @__PURE__ */ react.createElement(GlobalStyle, null), /* @__PURE__ */ react.createElement(App, null)), document.getElementById("root"));
if (void 0) {
  (void 0).accept();
}
//# sourceMappingURL=index.js.map

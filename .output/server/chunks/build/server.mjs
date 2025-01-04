import { version, ref, watchEffect, watch, getCurrentInstance, defineAsyncComponent, toRef, isRef, defineComponent, provide, shallowReactive, h, inject, Suspense, nextTick, Fragment, Transition, createElementBlock, markRaw, hasInjectionContext, unref, openBlock, normalizeProps, guardReactiveProps, useSSRContext, createApp, effectScope, reactive, getCurrentScope, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, createElementVNode, mergeProps, shallowRef, isReadonly, computed, withCtx, isShallow, isReactive, toRaw, mergeDefaults, createBlock, renderSlot, createCommentVNode, normalizeClass, normalizeStyle, toDisplayString, Teleport, renderList, toRefs } from 'vue';
import { $ as $fetch$1, k as baseURL, l as hasProtocol, m as isScriptProtocol, n as joinURL, w as withQuery, f as createError$1, o as klona, q as defu, r as sanitizeStatusCode, v as defuFn, x as getContext, y as createHooks, z as toRouteMatcher, A as createRouter$1 } from '../_/nitro.mjs';
import { CapoPlugin, getActiveHead } from 'unhead';
import { defineHeadPlugin, composableNames } from '@unhead/shared';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { createSharedComposable } from '@vueuse/core';
import { extendTailwindMerge } from 'tailwind-merge';
import { _api, disableCache, addAPIProvider, setCustomIconsLoader } from '@iconify/vue';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import 'node:module';
import 'ipx';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink", "prefetch": true, "prefetchOn": { "visibility": true } };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.15.0";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise2 = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise2.catch((e) => errors.push(e)));
      } else {
        await promise2;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config2) {
  return config2;
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error2) => {
  const nuxtError = createError(error2);
  try {
    const nuxtApp = useNuxtApp();
    const error22 = useError();
    if (false) ;
    error22.value = error22.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error2) => !!error2 && typeof error2 === "object" && NUXT_ERROR_SIGNATURE in error2;
const createError = (error2) => {
  const nuxtError = createError$1(error2);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error2) => {
      restore();
      throw error2;
    });
  }
  return [awaitable, restore];
}
const ROUTE_KEY_PARENTHESES_RE$1 = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE$1 = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE$1 = /:\w+/g;
const interpolatePath = (route, match) => {
  return match.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
const _routes = [
  {
    name: "about",
    path: "/about",
    component: () => import('./about-CtlSqL2r.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-BJ7brr7l.mjs')
  },
  {
    name: "join",
    path: "/join",
    component: () => import('./join-BxzTIPcY.mjs')
  },
  {
    name: "ministries",
    path: "/ministries",
    component: () => import('./ministries-HymJxYvA.mjs')
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error2 = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error2));
      });
      return false;
    }
  });
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const LazyIcon = defineAsyncComponent(() => import('./index-DLmDMQP0.mjs').then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["Icon", LazyIcon]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const slidOverInjectionKey = Symbol("nuxt-ui.slideover");
function _useSlideover() {
  const slideoverState = inject(slidOverInjectionKey);
  const isOpen = ref(false);
  function open(component, props) {
    if (!slideoverState) {
      throw new Error("useSlideover() is called without provider");
    }
    slideoverState.value = {
      component,
      props: props ?? {}
    };
    isOpen.value = true;
  }
  async function close() {
    if (!slideoverState) return;
    isOpen.value = false;
  }
  function reset() {
    slideoverState.value = {
      component: "div",
      props: {}
    };
  }
  function patch(props) {
    if (!slideoverState) return;
    slideoverState.value = {
      ...slideoverState.value,
      props: {
        ...slideoverState.value.props,
        ...props
      }
    };
  }
  return {
    open,
    close,
    reset,
    patch,
    isOpen
  };
}
createSharedComposable(_useSlideover);
const slideovers_X7whXyrIWR = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const slideoverState = shallowRef({
    component: "div",
    props: {}
  });
  nuxtApp.vueApp.provide(slidOverInjectionKey, slideoverState);
});
const modalInjectionKey = Symbol("nuxt-ui.modal");
function _useModal() {
  const modalState = inject(modalInjectionKey);
  const isOpen = ref(false);
  function open(component, props) {
    if (!modalState) {
      throw new Error("useModal() is called without provider");
    }
    modalState.value = {
      component,
      props: props ?? {}
    };
    isOpen.value = true;
  }
  async function close() {
    if (!modalState) return;
    isOpen.value = false;
  }
  function reset() {
    modalState.value = {
      component: "div",
      props: {}
    };
  }
  function patch(props) {
    if (!modalState) return;
    modalState.value = {
      ...modalState.value,
      props: {
        ...modalState.value.props,
        ...props
      }
    };
  }
  return {
    open,
    close,
    reset,
    patch,
    isOpen
  };
}
createSharedComposable(_useModal);
const modals_oqljskDzoR = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const modalState = shallowRef({
    component: "div",
    props: {}
  });
  nuxtApp.vueApp.provide(modalInjectionKey, modalState);
});
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return Number.isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}
extendTailwindMerge({
  extend: {
    classGroups: {
      icons: [(classPart) => classPart.startsWith("i-")]
    }
  }
});
const rxHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
function parseConfigValue(value) {
  return rxHex.test(value) ? hexToRgb(value) : value;
}
function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(_, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = rxHex.exec(hex);
  return result ? `${Number.parseInt(result[1], 16)} ${Number.parseInt(result[2], 16)} ${Number.parseInt(result[3], 16)}` : null;
}
const _inherit = "inherit";
const _current = "currentColor";
const _transparent = "transparent";
const _black = "#000";
const _white = "#fff";
const _slate = { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a", "950": "#020617" };
const _gray = { "50": "rgb(var(--color-gray-50) / <alpha-value>)", "100": "rgb(var(--color-gray-100) / <alpha-value>)", "200": "rgb(var(--color-gray-200) / <alpha-value>)", "300": "rgb(var(--color-gray-300) / <alpha-value>)", "400": "rgb(var(--color-gray-400) / <alpha-value>)", "500": "rgb(var(--color-gray-500) / <alpha-value>)", "600": "rgb(var(--color-gray-600) / <alpha-value>)", "700": "rgb(var(--color-gray-700) / <alpha-value>)", "800": "rgb(var(--color-gray-800) / <alpha-value>)", "900": "rgb(var(--color-gray-900) / <alpha-value>)", "950": "rgb(var(--color-gray-950) / <alpha-value>)" };
const _zinc = { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b", "950": "#09090b" };
const _neutral = { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717", "950": "#0a0a0a" };
const _stone = { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917", "950": "#0c0a09" };
const _red = { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d", "950": "#450a0a" };
const _orange = { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12", "950": "#431407" };
const _amber = { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f", "950": "#451a03" };
const _yellow = { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12", "950": "#422006" };
const _lime = { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314", "950": "#1a2e05" };
const _green = { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d", "950": "#052e16" };
const _emerald = { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b", "950": "#022c22" };
const _teal = { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a", "950": "#042f2e" };
const _cyan = { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63", "950": "#083344" };
const _sky = { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e", "950": "#082f49" };
const _blue = { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" };
const _indigo = { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81", "950": "#1e1b4b" };
const _violet = { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95", "950": "#2e1065" };
const _purple = { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87", "950": "#3b0764" };
const _fuchsia = { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75", "950": "#4a044e" };
const _pink = { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843", "950": "#500724" };
const _rose = { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337", "950": "#4c0519" };
const _primaryColor = { "50": "#BABEE1", "100": "#ACB0DB", "200": "#8F96CE", "300": "#737BC2", "400": "#5660B5", "500": "#454E9E", "600": "#343B77", "700": "#232750", "800": "#121429", "900": "#010102", "950": "#000000", "DEFAULT": "#454E9E" };
const _primary = { "50": "rgb(var(--color-primary-50) / <alpha-value>)", "100": "rgb(var(--color-primary-100) / <alpha-value>)", "200": "rgb(var(--color-primary-200) / <alpha-value>)", "300": "rgb(var(--color-primary-300) / <alpha-value>)", "400": "rgb(var(--color-primary-400) / <alpha-value>)", "500": "rgb(var(--color-primary-500) / <alpha-value>)", "600": "rgb(var(--color-primary-600) / <alpha-value>)", "700": "rgb(var(--color-primary-700) / <alpha-value>)", "800": "rgb(var(--color-primary-800) / <alpha-value>)", "900": "rgb(var(--color-primary-900) / <alpha-value>)", "950": "rgb(var(--color-primary-950) / <alpha-value>)", "DEFAULT": "rgb(var(--color-primary-DEFAULT) / <alpha-value>)" };
const _cool = { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827", "950": "#030712" };
const config = { "inherit": _inherit, "current": _current, "transparent": _transparent, "black": _black, "white": _white, "slate": _slate, "gray": _gray, "zinc": _zinc, "neutral": _neutral, "stone": _stone, "red": _red, "orange": _orange, "amber": _amber, "yellow": _yellow, "lime": _lime, "green": _green, "emerald": _emerald, "teal": _teal, "cyan": _cyan, "sky": _sky, "blue": _blue, "indigo": _indigo, "violet": _violet, "purple": _purple, "fuchsia": _fuchsia, "pink": _pink, "rose": _rose, "primaryColor": _primaryColor, "primary": _primary, "cool": _cool };
const cfg0 = defineAppConfig({
  ui: {
    primary: "primaryColor",
    dropdown: {
      background: "bg-black dark:bg-black",
      padding: "px-2 py-3",
      ring: "ring-0",
      width: "w-80",
      item: {
        active: "bg-black",
        inactive: "text-white dark:text-white",
        padding: "py-3"
      }
    },
    accordion: {
      item: {
        padding: "pl-3 py-2",
        size: "text-base"
      }
    },
    notifications: {
      position: "top-0 right-0"
    }
  }
});
const inlineConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  },
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary-color",
      "primary"
    ],
    "strategy": "merge"
  }
};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const colors_ETtiVmZNmO = /* @__PURE__ */ defineNuxtPlugin(() => {
  const appConfig = useAppConfig();
  useNuxtApp();
  const root = computed(() => {
    const primary = get(config, appConfig.ui.primary);
    const gray = get(config, appConfig.ui.gray);
    if (!primary) {
      console.warn(`[@nuxt/ui] Primary color '${appConfig.ui.primary}' not found in Tailwind config`);
    }
    if (!gray) {
      console.warn(`[@nuxt/ui] Gray color '${appConfig.ui.gray}' not found in Tailwind config`);
    }
    return `:root {
${Object.entries(primary || config.green).map(([key, value]) => `--color-primary-${key}: ${parseConfigValue(value)};`).join("\n")}
--color-primary-DEFAULT: var(--color-primary-500);

${Object.entries(gray || config.cool).map(([key, value]) => `--color-gray-${key}: ${parseConfigValue(value)};`).join("\n")}
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}
`;
  });
  const headData = {
    style: [{
      innerHTML: () => root.value,
      tagPriority: -2,
      id: "nuxt-ui-colors"
    }]
  };
  useHead(headData);
});
const preference = "system";
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const plugin_server_ano7jnMEqi = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  var _a;
  const colorMode = ((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) ? ref({}) : useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const plugin_WLsn00x1qh = /* @__PURE__ */ defineNuxtPlugin({
  name: "@nuxt/icon",
  setup() {
    var _a, _b;
    const configs = /* @__PURE__ */ useRuntimeConfig();
    const options = useAppConfig().icon;
    _api.setFetch($fetch.native);
    disableCache("all");
    const resources = [];
    if (options.provider === "server") {
      const baseURL2 = ((_b = (_a = configs.app) == null ? void 0 : _a.baseURL) == null ? void 0 : _b.replace(/\/$/, "")) ?? "";
      resources.push(baseURL2 + (options.localApiEndpoint || "/api/_nuxt_icon"));
      if (options.fallbackToApi === true || options.fallbackToApi === "client-only") {
        resources.push(options.iconifyApiEndpoint);
      }
    } else {
      resources.push(options.iconifyApiEndpoint);
    }
    async function customIconLoader(icons, prefix) {
      try {
        const data = await $fetch(resources[0] + "/" + prefix + ".json", {
          query: {
            icons: icons.join(",")
          }
        });
        if (!data || data.prefix !== prefix || !data.icons)
          throw new Error("Invalid data" + JSON.stringify(data));
        return data;
      } catch (e) {
        console.error("Failed to load custom icons", e);
        return null;
      }
    }
    addAPIProvider("", { resources });
    for (const prefix of options.customCollections || []) {
      if (prefix)
        setCustomIconsLoader(customIconLoader, prefix);
    }
  }
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  slideovers_X7whXyrIWR,
  modals_oqljskDzoR,
  colors_ETtiVmZNmO,
  plugin_server_ano7jnMEqi,
  plugin_WLsn00x1qh
];
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const CLASS_PREFIX = "Notivue__";
const DEFAULT_DURATION = 6e3;
const NotificationTypeKeys = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  PROMISE: "promise",
  PROMISE_RESOLVE: "promise-resolve",
  PROMISE_REJECT: "promise-reject"
};
const success = {
  title: "",
  message: "",
  duration: DEFAULT_DURATION,
  ariaLive: "polite",
  ariaRole: "status"
};
const error = __spreadProps(__spreadValues({}, success), {
  ariaLive: "assertive",
  ariaRole: "alert"
});
const promise = __spreadProps(__spreadValues({}, success), {
  duration: Infinity
});
const warning = __spreadProps(__spreadValues({}, error), {
  ariaLive: "polite"
});
const info = __spreadValues({}, success);
const DEFAULT_NOTIFICATION_OPTIONS = {
  [NotificationTypeKeys.SUCCESS]: success,
  [NotificationTypeKeys.ERROR]: error,
  [NotificationTypeKeys.WARNING]: warning,
  [NotificationTypeKeys.INFO]: info,
  [NotificationTypeKeys.PROMISE]: promise,
  [NotificationTypeKeys.PROMISE_RESOLVE]: success,
  [NotificationTypeKeys.PROMISE_REJECT]: error
};
const DEFAULT_CONFIG = {
  pauseOnHover: true,
  pauseOnTouch: true,
  pauseOnTabChange: true,
  enqueue: false,
  position: "top-center",
  teleportTo: "body",
  notifications: DEFAULT_NOTIFICATION_OPTIONS,
  limit: Infinity,
  avoidDuplicates: false,
  transition: "transform 0.35s cubic-bezier(0.5, 1, 0.25, 1)",
  animations: {
    enter: CLASS_PREFIX + "enter",
    leave: CLASS_PREFIX + "leave",
    clearAll: CLASS_PREFIX + "clearAll"
  }
};
const push$1 = createPushMock();
function createPush(proxies) {
  let createCount = 0;
  function push2(options, type, id = `${createCount++}`) {
    if (typeof unref(options) === "string") {
      options = { message: options };
    }
    proxies.push(__spreadProps(__spreadValues({}, options), { id, type }));
    return {
      id,
      clear: () => proxies.clear(id),
      destroy: () => proxies.clear(id, { isDestroy: true })
    };
  }
  return {
    success: (options) => push2(options, NotificationTypeKeys.SUCCESS),
    error: (options) => push2(options, NotificationTypeKeys.ERROR),
    warning: (options) => push2(options, NotificationTypeKeys.WARNING),
    info: (options) => push2(options, NotificationTypeKeys.INFO),
    promise: (options) => {
      const { id, clear, destroy } = push2(options, NotificationTypeKeys.PROMISE);
      return {
        resolve: (options2) => push2(options2, NotificationTypeKeys.PROMISE_RESOLVE, id),
        reject: (options2) => push2(options2, NotificationTypeKeys.PROMISE_REJECT, id),
        success: (options2) => push2(options2, NotificationTypeKeys.PROMISE_RESOLVE, id),
        error: (options2) => push2(options2, NotificationTypeKeys.PROMISE_REJECT, id),
        clear,
        destroy
      };
    },
    load(options) {
      return this.promise(options);
    },
    clearAll: () => proxies.clearAll(),
    destroyAll: () => proxies.destroyAll()
  };
}
function createPushMock() {
  const noop = new Proxy({}, { get: () => () => {
  } });
  return createPush(noop);
}
const internalKeys = [
  "timeout",
  "resumedAt",
  "remaining",
  // Maybe in future releases these could be exposed
  "animationAttrs",
  "positionStyles"
];
function getSlotItem(item) {
  return Object.fromEntries(
    Object.entries(item).filter(([key]) => !internalKeys.includes(key))
  );
}
const notivueInjectionKey = Symbol();
function useStore() {
  return inject(notivueInjectionKey);
}
function useNotivueInstance() {
  {
    return {
      isRunning: ref(true),
      startInstance: () => {
      },
      stopInstance: () => {
      }
    };
  }
}
function useNotivue() {
  {
    return __spreadProps(__spreadValues({}, toRefs(reactive(DEFAULT_CONFIG))), {
      update: () => {
      },
      isTopAlign: computed(() => true),
      isStreamPaused: ref(false)
    });
  }
}
const DEFAULT_PROPS$1 = {
  listAriaLabel: "Notifications"
};
const NotivueClientOnly = defineComponent({
  setup(_, { slots, attrs }) {
    const isMounted = ref(false);
    return () => {
      var _a;
      if (isMounted.value) return (_a = slots.default) == null ? void 0 : _a.call(slots);
      return createElementBlock("span", attrs, "");
    };
  }
});
const isMouse = (e) => e.pointerType === "mouse";
function getAriaLabel(item) {
  return `${item.title ? `${item.title}: ` : ""}${item.message}`;
}
const _hoisted_1$a = ["role", "aria-live"];
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "AriaLive",
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const visuallyHidden = {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      border: "0"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: visuallyHidden,
        role: props.item.ariaRole,
        "aria-live": props.item.ariaLive,
        key: `${_ctx.item.id}_${_ctx.item.type}`,
        "aria-atomic": "true"
      }, toDisplayString(unref(getAriaLabel)(props.item)), 9, _hoisted_1$a);
    };
  }
});
function useMouseEvents() {
  const { timeouts, config: config2 } = useStore();
  function pauseHover(e) {
    if (isMouse(e)) timeouts.pause();
  }
  function resumeHover(e) {
    if (isMouse(e)) timeouts.resume();
  }
  return computed(
    () => config2.pauseOnHover.value && !timeouts.isStreamFocused.value ? {
      onPointerenter: pauseHover,
      onPointerleave: resumeHover
    } : {}
  );
}
function useTouchEvents() {
  const { timeouts, config: config2 } = useStore();
  function pauseTouch(e) {
    if (!isMouse(e)) {
      timeouts.clearDebounceTimeout();
      timeouts.pause();
      timeouts.resumeWithDebounce(2e3);
    }
  }
  return computed(
    () => config2.pauseOnTouch.value && !timeouts.isStreamFocused.value ? { onPointerdown: pauseTouch } : {}
  );
}
const boxSizing = { boxSizing: "border-box" };
const baseStyles = {
  list: __spreadProps(__spreadValues({}, boxSizing), {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    margin: "0 auto",
    maxWidth: "var(--nv-root-width, 100%)",
    padding: "0",
    pointerEvents: "none",
    position: "fixed",
    zIndex: "var(--nv-z, 500)"
  }),
  listItem: __spreadProps(__spreadValues({}, boxSizing), {
    display: "flex",
    margin: "0",
    position: "absolute",
    transitionProperty: "transform",
    width: "100%"
  }),
  itemContainer: __spreadProps(__spreadValues({}, boxSizing), {
    maxWidth: "100%",
    padding: `0 0 var(--nv-gap, 0.75rem) 0`,
    pointerEvents: "auto"
  })
};
function useNotivueStyles() {
  const { isTopAlign, position } = useNotivue();
  const offset = computed(() => {
    const isTop = isTopAlign.value;
    const inset = [
      `var(--nv-root-top, ${isTop ? "1.25rem" : "0px"})`,
      "var(--nv-root-right, 1.25rem)",
      `var(--nv-root-bottom, ${isTop ? "0px" : "1.25rem"})`,
      "var(--nv-root-left, 1.25rem)"
    ];
    const clipPath = inset.map((v) => `calc(-1 * ${v})`);
    isTop ? clipPath.splice(2, 1, "0px") : clipPath.splice(0, 1, "0px");
    return { inset: inset.join(" "), clipPath: `inset(${clipPath.join(" ")})` };
  });
  const xAlignment = computed(() => ({
    [isTopAlign.value ? "top" : "bottom"]: "0",
    justifyContent: `var(--nv-root-x-align, ${position.value.endsWith("left") ? "flex-start" : position.value.endsWith("right") ? "flex-end" : "center"})`
  }));
  return computed(() => ({
    list: __spreadValues(__spreadValues({}, baseStyles.list), offset.value),
    listItem: __spreadValues(__spreadValues({}, baseStyles.listItem), xAlignment.value),
    itemContainer: baseStyles.itemContainer
  }));
}
function useResizeListObserver(elements, onSizeChange) {
  watch(
    elements,
    (el) => {
      if (el.length > 0) el.forEach((el2) => void 0);
    },
    { flush: "post" }
  );
}
function useSizes() {
  const { elements, animations } = useStore();
  useResizeListObserver(elements.items.value);
}
function useWindowFocus() {
  useStore();
}
function useReducedMotion() {
  useStore();
  (void 0).matchMedia("(prefers-reduced-motion: reduce)");
}
const _hoisted_1$9 = ["data-notivue-align", "aria-label"];
const _hoisted_2$9 = ["data-notivue-item", "aria-setsize", "aria-posinset"];
const _hoisted_3$6 = ["aria-label", "tabindex", "data-notivue-container"];
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "NotivueImpl",
  props: /* @__PURE__ */ mergeDefaults({
    class: {},
    containersTabIndex: {},
    listAriaLabel: {},
    styles: {}
  }, DEFAULT_PROPS$1),
  setup(__props) {
    const props = __props;
    const { config: config2, items, elements } = useStore();
    const styles = useNotivueStyles();
    const mouseEvents = useMouseEvents();
    const touchEvents = useTouchEvents();
    useReducedMotion();
    useWindowFocus();
    useSizes();
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(Teleport, {
        to: unref(config2).teleportTo.value === false ? void 0 : unref(config2).teleportTo.value,
        disabled: unref(config2).teleportTo.value === false
      }, [
        unref(items).entries.value.length > 0 ? (openBlock(), createElementBlock("ol", mergeProps({ key: 0 }, __spreadValues(__spreadValues(__spreadValues({}, unref(mouseEvents)), unref(touchEvents)), unref(elements).rootAttrs.value), {
          "data-notivue-align": unref(config2).position.value.split("-")[0],
          "aria-label": props.listAriaLabel,
          ref: unref(elements).root,
          class: props.class,
          style: __spreadValues(__spreadValues({}, unref(styles).list), (_a = props.styles) == null ? void 0 : _a.list)
        }), [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items).entries.value, (item, i) => {
            var _a2, _b, _c, _d;
            return openBlock(), createElementBlock("li", {
              tabindex: "-1",
              key: item.id,
              "data-notivue-item": item.id,
              "aria-setsize": unref(items).length,
              "aria-posinset": i + 1,
              ref_for: true,
              ref: unref(elements).items,
              style: normalizeStyle(__spreadValues(__spreadValues(__spreadValues({}, unref(styles).listItem), item.positionStyles), (_a2 = props.styles) == null ? void 0 : _a2.listItem))
            }, [
              item.ariaLiveOnly ? (openBlock(), createBlock(_sfc_main$g, {
                key: 0,
                item
              }, null, 8, ["item"])) : (openBlock(), createElementBlock("div", mergeProps({
                key: 1,
                ref_for: true
              }, item.animationAttrs, {
                "aria-label": unref(getAriaLabel)(item),
                tabindex: (_c = (_b = _ctx.containersTabIndex) == null ? void 0 : _b[item.id]) != null ? _c : -1,
                "data-notivue-container": item.id,
                ref_for: true,
                ref: unref(elements).containers,
                style: __spreadValues(__spreadValues({}, unref(styles).itemContainer), (_d = props.styles) == null ? void 0 : _d.itemContainer)
              }), [
                renderSlot(_ctx.$slots, "default", mergeProps({ ref_for: true }, unref(getSlotItem)(item)))
              ], 16, _hoisted_3$6))
            ], 12, _hoisted_2$9);
          }), 128))
        ], 16, _hoisted_1$9)) : createCommentVNode("", true)
      ], 8, ["to", "disabled"]);
    };
  }
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Notivue",
  props: /* @__PURE__ */ mergeDefaults({
    class: {},
    containersTabIndex: {},
    listAriaLabel: {},
    styles: {}
  }, DEFAULT_PROPS$1),
  setup(__props) {
    const props = __props;
    const { isRunning } = useNotivueInstance();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NotivueClientOnly), null, {
        default: withCtx(() => [
          unref(isRunning) ? (openBlock(), createBlock(_sfc_main$f, normalizeProps(mergeProps({ key: 0 }, props)), {
            default: withCtx((item) => [
              renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(item)))
            ]),
            _: 3
          }, 16)) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const _hoisted_1$8 = /* @__PURE__ */ createElementVNode("path", { d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm3.123,3.989l-3.877,4.616c-0.086,0.102 -0.213,0.162 -0.346,0.164l-0.008,0c-0.131,0 -0.256,-0.055 -0.343,-0.153l-1.662,-1.846c-0.081,-0.085 -0.126,-0.199 -0.126,-0.316c0,-0.254 0.209,-0.462 0.462,-0.462c0.135,0 0.263,0.059 0.35,0.161l1.307,1.451l3.536,-4.209c0.087,-0.101 0.215,-0.159 0.349,-0.159c0.253,-0 0.461,0.208 0.461,0.461c0,0.107 -0.036,0.21 -0.103,0.292Z" }, null, -1);
const _hoisted_2$8 = [
  _hoisted_1$8
];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SuccessIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_2$8, 16);
    };
  }
});
const _hoisted_1$7 = /* @__PURE__ */ createElementVNode("path", { d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm-0,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Zm0.627,-5.802l-0.166,3.519c-0,0.253 -0.208,0.462 -0.462,0.462c-0.253,-0 -0.461,-0.209 -0.461,-0.462l-0.166,-3.518l0,-0.001c-0,-0.009 -0,-0.018 -0,-0.027c-0,-0.344 0.283,-0.627 0.627,-0.627c0.344,0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.018 -0.001,0.027l0.002,-0Z" }, null, -1);
const _hoisted_2$7 = [
  _hoisted_1$7
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ErrorIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_2$7, 16);
    };
  }
});
const _hoisted_1$6 = /* @__PURE__ */ createElementVNode("path", { d: "M6,0c-3.308,0 -6,2.692 -6,6c0,3.308 2.692,6 6,6c3.308,0 6,-2.692 6,-6c0,-3.308 -2.692,-6 -6,-6Zm0,2.46c0.428,0 0.78,0.352 0.78,0.78c-0,0.428 -0.352,0.78 -0.78,0.78c-0.428,0 -0.78,-0.352 -0.78,-0.78c0,-0.428 0.352,-0.78 0.78,-0.78Zm1.44,6.78l-2.64,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.84,0l0,-2.64l-0.48,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.96,0c0.263,0 0.48,0.217 0.48,0.48l0,3.12l0.84,0c0.263,0 0.48,0.217 0.48,0.48c0,0.263 -0.217,0.48 -0.48,0.48Z" }, null, -1);
const _hoisted_2$6 = [
  _hoisted_1$6
];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "InfoIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_2$6, 16);
    };
  }
});
const _hoisted_1$5 = /* @__PURE__ */ createElementVNode("path", { d: "M11.963,6.037c-0,3.292 -2.671,5.963 -5.963,5.963c-3.292,0 -5.963,-2.671 -5.963,-5.963c0,-3.292 2.671,-5.962 5.963,-5.962c3.292,-0 5.963,2.67 5.963,5.962Zm-0.918,0c0,-2.785 -2.26,-5.045 -5.045,-5.045c-2.785,0 -5.045,2.26 -5.045,5.045c-0,2.786 2.26,5.046 5.045,5.046c2.785,-0 5.045,-2.26 5.045,-5.046Z" }, null, -1);
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", { d: "M8.401,3.449c0.163,-0.194 0.452,-0.219 0.646,-0.056c0.194,0.163 0.219,0.452 0.056,0.646l-3.853,4.587c-0.085,0.101 -0.21,0.161 -0.343,0.163c-0.133,0.003 -0.26,-0.053 -0.349,-0.151l-1.651,-1.835c-0.169,-0.188 -0.154,-0.479 0.034,-0.648c0.188,-0.169 0.479,-0.154 0.648,0.034l1.298,1.443l3.514,-4.183Z" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_1$5,
  _hoisted_2$5
];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SuccessOutlineIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_3$5, 16);
    };
  }
});
const _hoisted_1$4 = /* @__PURE__ */ createElementVNode("path", { d: "M12, 6c0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.688 -6,-6c0,-3.313 2.688,-6 6,-6c3.313,-0 6,2.687 6,6Zm-0.923,-0c-0,-2.803 -2.274,-5.077 -5.077,-5.077c-2.803,0 -5.077,2.274 -5.077,5.077c0,2.803 2.274,5.077 5.077,5.077c2.803,-0 5.077,-2.274 5.077,-5.077Z" }, null, -1);
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", { d: "M5.373,3.426c-0,-0.009 -0,-0.019 -0,-0.028c-0,-0.342 0.279,-0.624 0.621,-0.627c0.002,-0 0.004,-0 0.006,-0c0.344,-0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.019 -0.001,0.028l0,0.001l-0.165,3.518c-0.012,0.246 -0.215,0.44 -0.461,0.44c-0.246,-0 -0.449,-0.194 -0.461,-0.44l-0.166,-3.518l0,-0.001Z" }, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("path", { d: "M6,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Z" }, null, -1);
const _hoisted_4$2 = [
  _hoisted_1$4,
  _hoisted_2$4,
  _hoisted_3$4
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ErrorOutlineIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_4$2, 16);
    };
  }
});
const _hoisted_1$3 = /* @__PURE__ */ createElementVNode("path", { d: "M6, 0c3.313, 0 6, 2.687 6, 6c-0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.687 -6,-6c0,-3.313 2.687,-6 6,-6Zm0, 0.96c-2.783, 0 -5.04, 2.257 -5.04, 5.04c0, 2.783 2.257, 5.04 5.04, 5.04c2.783, 0 5.04,-2.257 5.04,-5.04c-0,-2.783 -2.257,-5.04 -5.04,-5.04Z" }, null, -1);
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", { d: "M6.6, 8.28l0.84, 0c0.265, 0 0.48, 0.215 0.48, 0.48c-0, 0.265 -0.215, 0.48 -0.48, 0.48l-2.64,-0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.84, 0l-0,-2.64l-0.48, 0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.96, 0c0.265, 0 0.48, 0.215 0.48, 0.48l-0, 3.12Z" }, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("path", { d: "M6, 2.46c-0.428, 0 -0.78, 0.352 -0.78, 0.78c-0, 0.428 0.352, 0.78 0.78, 0.78c0.428, 0 0.78,-0.352 0.78,-0.78c-0,-0.428 -0.352,-0.78 -0.78,-0.78Z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_1$3,
  _hoisted_2$3,
  _hoisted_3$3
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InfoOutlineIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_4$1, 16);
    };
  }
});
const _hoisted_1$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
  opacity: ".25"
}, null, -1);
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
  class: "Notivue__spinner"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_1$2,
  _hoisted_2$2
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PromiseIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(__spreadProps(__spreadValues({}, unref(svgProps)), { width: 28, height: 28, fill: "currentColor" }))), _hoisted_3$2, 16);
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}, null, -1);
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_1$1,
  _hoisted_2$1
];
const _sfc_main$2$1 = /* @__PURE__ */ defineComponent({
  __name: "CloseIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(featherProps))), _hoisted_3$1, 16);
    };
  }
});
const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
};
const ionProps = __spreadProps(__spreadValues({}, svgProps), {
  fill: "currentColor",
  viewBox: "0 0 12 12"
});
const featherProps = __spreadProps(__spreadValues({}, svgProps), {
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
});
const filledIcons = {
  [NotificationTypeKeys.SUCCESS]: markRaw(_sfc_main$9),
  [NotificationTypeKeys.ERROR]: markRaw(_sfc_main$8),
  [NotificationTypeKeys.INFO]: markRaw(_sfc_main$7),
  [NotificationTypeKeys.WARNING]: markRaw(_sfc_main$8),
  [NotificationTypeKeys.PROMISE]: markRaw(_sfc_main$3),
  [NotificationTypeKeys.PROMISE_RESOLVE]: markRaw(_sfc_main$9),
  [NotificationTypeKeys.PROMISE_REJECT]: markRaw(_sfc_main$8),
  close: markRaw(_sfc_main$2$1)
};
({
  [NotificationTypeKeys.SUCCESS]: markRaw(_sfc_main$6),
  [NotificationTypeKeys.ERROR]: markRaw(_sfc_main$5),
  [NotificationTypeKeys.INFO]: markRaw(_sfc_main$4),
  [NotificationTypeKeys.WARNING]: markRaw(_sfc_main$5),
  [NotificationTypeKeys.PROMISE]: markRaw(_sfc_main$3),
  [NotificationTypeKeys.PROMISE_RESOLVE]: markRaw(_sfc_main$6),
  [NotificationTypeKeys.PROMISE_REJECT]: markRaw(_sfc_main$5),
  close: markRaw(_sfc_main$2$1)
});
const layout = {
  "--nv-width": "350px",
  "--nv-spacing": "0.625rem",
  "--nv-radius": "0.625rem",
  "--nv-icon-size": "1.25rem",
  "--nv-title-size": "0.925rem",
  "--nv-message-size": "0.925rem",
  "--nv-y-align": "center"
};
const shadow = {
  "--nv-shadow": "rgba(0, 0, 0, 0.06) 0px 4px 6px -1px, rgba(0, 0, 0, 0.03) 0px 2px 4px -1px"
};
const lightTheme = __spreadProps(__spreadValues(__spreadValues({}, layout), shadow), {
  "--nv-global-bg": "#FFF",
  "--nv-global-fg": "#171717",
  "--nv-success-accent": "#28B780",
  "--nv-error-accent": "#E74C3C",
  "--nv-warning-accent": "#F59E0B",
  "--nv-info-accent": "#3E8EFF",
  "--nv-promise-accent": "#171717"
});
__spreadProps(__spreadValues(__spreadValues({}, layout), shadow), {
  "--nv-success-bg": "#E9FAEF",
  "--nv-success-accent": "#059669",
  "--nv-success-fg": "#057452",
  "--nv-error-bg": "#FEEFEF",
  "--nv-error-accent": "#E6523C",
  "--nv-error-fg": "#C5412C",
  "--nv-warning-bg": "#FFF0D8",
  "--nv-warning-accent": "#F48533",
  "--nv-warning-fg": "#81471D",
  "--nv-info-bg": "#DEF0FA",
  "--nv-info-accent": "#1F70AC",
  "--nv-info-fg": "#1F70AC",
  "--nv-promise-bg": "#FFF",
  "--nv-promise-accent": "#334155",
  "--nv-promise-fg": "#334155"
});
__spreadProps(__spreadValues(__spreadValues({}, layout), shadow), {
  "--nv-global-accent": "#FFF",
  "--nv-global-fg": "#FFF",
  "--nv-success-bg": "#178570",
  "--nv-error-bg": "#C94430",
  "--nv-info-bg": "#117AAE",
  "--nv-warning-bg": "#FFE556",
  "--nv-warning-fg": "#4F5358",
  "--nv-warning-accent": "#4F5358",
  "--nv-promise-bg": "#FFF",
  "--nv-promise-fg": "#334155",
  "--nv-promise-accent": "#64748B"
});
__spreadProps(__spreadValues({}, layout), {
  "--nv-border-width": "1px",
  "--nv-global-bg": "#1F1F1F",
  "--nv-global-border": "#414141",
  "--nv-global-fg": "#D0D0D0",
  "--nv-success-accent": "#8EF997",
  "--nv-error-accent": "#FF7777",
  "--nv-warning-accent": "#FFE554",
  "--nv-info-accent": "#5FD4FF",
  "--nv-promise-accent": "#D0D0D0"
});
__spreadProps(__spreadValues({}, layout), {
  "--nv-border-width": "1px",
  "--nv-global-bg": "#20252E",
  "--nv-global-border": "#353b45",
  "--nv-global-fg": "#dfdfdf",
  "--nv-success-accent": "#34D399",
  "--nv-error-accent": "#FF7777",
  "--nv-warning-accent": "#FFE554",
  "--nv-info-accent": "#5FD4FF",
  "--nv-promise-accent": "#D0D0D0"
});
const Classes = {
  NOTIFICATION: CLASS_PREFIX + "notification",
  ICON: CLASS_PREFIX + "icon",
  CONTENT: CLASS_PREFIX + "content",
  TITLE: CLASS_PREFIX + "content-title",
  MESSAGE: CLASS_PREFIX + "content-message",
  CLOSE: CLASS_PREFIX + "close",
  CLOSE_ICON: CLASS_PREFIX + "close-icon",
  TRANSITION: CLASS_PREFIX + "transition",
  PROGRESS: CLASS_PREFIX + "progress",
  DUPLICATE: CLASS_PREFIX + "duplicate"
};
const DEFAULT_NOTIFICATIONS_PROPS = {
  icons: () => filledIcons,
  theme: () => lightTheme,
  hideClose: false,
  closeAriaLabel: "Close"
};
const _hoisted_1 = ["data-notivue", "data-notivue-has-title"];
const _hoisted_2 = ["aria-live", "role"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["aria-label"];
const _hoisted_6 = ["textContent"];
const _sfc_main$1$1 = /* @__PURE__ */ defineComponent({
  __name: "Notification",
  props: /* @__PURE__ */ mergeDefaults({
    item: {},
    icons: {},
    theme: {},
    closeAriaLabel: {},
    hideClose: { type: Boolean }
  }, DEFAULT_NOTIFICATIONS_PROPS),
  setup(__props) {
    const props = __props;
    const Icon = shallowRef(props.icons[props.item.type]);
    const Close = props.icons.close;
    watch(
      () => props.item.type,
      (t) => Icon.value = props.icons[t],
      { flush: "sync" }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(Classes).NOTIFICATION, { [unref(Classes).DUPLICATE]: _ctx.item.duplicateCount > 0 }]),
        key: _ctx.item.duplicateCount,
        "data-notivue": _ctx.item.type,
        "data-notivue-has-title": Boolean(_ctx.item.title),
        style: normalizeStyle(_ctx.theme)
      }, [
        Icon.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          typeof Icon.value === "object" ? (openBlock(), createBlock(Transition, {
            key: 0,
            name: unref(Classes).TRANSITION,
            mode: "out-in"
          }, {
            default: withCtx(() => [
              typeof Icon.value === "object" ? (openBlock(), createBlock(resolveDynamicComponent(Icon.value), {
                key: 0,
                class: normalizeClass(unref(Classes).ICON),
                "aria-hidden": "true"
              }, null, 8, ["class"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["name"])) : typeof Icon.value === "string" ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(Classes).ICON),
            "aria-hidden": "true"
          }, toDisplayString(Icon.value), 3)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(unref(Classes).CONTENT),
          "aria-live": _ctx.item.ariaLive,
          role: _ctx.item.ariaRole,
          "aria-atomic": "true"
        }, [
          _ctx.item.title ? (openBlock(), createElementBlock("h3", {
            key: 0,
            class: normalizeClass(unref(Classes).TITLE),
            textContent: toDisplayString(unref(_ctx.item.title))
          }, null, 10, _hoisted_3)) : createCommentVNode("", true),
          createElementVNode("p", {
            class: normalizeClass(unref(Classes).MESSAGE),
            textContent: toDisplayString(unref(_ctx.item.message))
          }, null, 10, _hoisted_4)
        ], 10, _hoisted_2),
        !props.hideClose && unref(Close) && _ctx.item.type !== "promise" ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: normalizeClass(unref(Classes).CLOSE),
          "aria-label": _ctx.closeAriaLabel,
          type: "button",
          tabindex: "-1",
          onClick: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => _ctx.item.clear && _ctx.item.clear(...args))
        }, [
          typeof unref(Close) === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(Close)), {
            key: 0,
            class: normalizeClass(unref(Classes).CLOSE_ICON)
          }, null, 8, ["class"])) : typeof unref(Close) === "string" ? (openBlock(), createElementBlock("div", {
            key: 1,
            "aria-hidden": "true",
            textContent: toDisplayString(unref(Close))
          }, null, 8, _hoisted_6)) : createCommentVNode("", true)
        ], 10, _hoisted_5)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 14, _hoisted_1);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __nuxt_component_0;
  const _component_Notivue = _sfc_main$e;
  const _component_Notification = _sfc_main$1$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(ssrRenderComponent(_component_Notivue, null, {
    default: withCtx((item, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Notification, { item }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Notification, { item }, null, 8, ["item"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-BegWE-cy.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-EGI5_-iy.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error2 = useError();
    const abortRender = error2.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info2) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info2).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error2)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error2) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error2) {
      await nuxt.hooks.callHook("app:error", error2);
      nuxt.payload.error = nuxt.payload.error || createError(error2);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, useState as a, useRouter as b, navigateTo as c, useNuxtApp as d, entry$1 as default, useRuntimeConfig as e, useAppConfig as f, asyncDataDefaults as g, createError as h, nuxtLinkDefaults as n, push$1 as p, resolveRouteObject as r, useHead as u };
//# sourceMappingURL=server.mjs.map

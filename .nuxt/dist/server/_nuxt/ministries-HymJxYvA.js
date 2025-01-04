import { _ as __nuxt_component_0 } from "./nuxt-link-DDKZUcAZ.js";
import { u as useColorMode, _ as _imports_0, a as __nuxt_component_1, b as __nuxt_component_1$1 } from "./foot-DCu1LAAh.js";
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@vueuse/core";
import "tailwind-merge";
import "klona";
import "@iconify/vue";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    let isScrolled = ref(false);
    const colorMode = useColorMode();
    computed({
      get() {
        return colorMode.value === "dark";
      },
      set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: [
          "px-8 py-3 xl:py-4 fixed top-0 w-full z-[1000]",
          {
            "dark:bg-white bg-satinlinen": unref(isScrolled),
            "bg-transparent": !unref(isScrolled)
          }
        ]
      }, _attrs))}><div class="flex justify-between w-full place-items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "h-12 lg:h-24 xl:h-18 2xl:h-21 w-auto",
                    src: _imports_0,
                    alt: "Logo"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "font-semibold transition-transform transform hover:scale-105"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Serve `);
          } else {
            return [
              createTextVNode(" Serve ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "font-semibold transition-transform transform hover:scale-105"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Us `);
          } else {
            return [
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/join",
        class: "grid place-items-center px-4 py-2 bg-[#b70213] text-white rounded-full focus:outline-none focus:ring-4 focus:ring-[#b70213] whitespace-nowrap transition-all transform hover:scale-105"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Join Us `);
          } else {
            return [
              createTextVNode(" Join Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const yesus = "" + __buildAssetsURL("sunday.-6Sqmdfc.jpg");
const cross = "" + __buildAssetsURL("teen.Cbg3euPy.jpg");
const eeer = "" + __buildAssetsURL("youth.B3z3ez-c.jpg");
const wee = "" + __buildAssetsURL("women.BPWMwLpX.jpg");
const tom = "" + __buildAssetsURL("man.u8mRvT2z.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ministries",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref(0);
    const ministries = [
      {
        title: "Sunday School",
        shortTitle: "Sunday",
        description: "Sunday School provides a nurturing environment for children to learn about God's word through engaging lessons and activities.",
        image: yesus
      },
      {
        title: "Teens Ministry",
        shortTitle: "Teens",
        description: "Our Teens Ministry supports adolescents in their faith journey, addressing their unique challenges and spiritual growth.",
        image: cross
      },
      {
        title: "Youth Ministry",
        shortTitle: "Youth",
        description: "The Youth Ministry empowers young adults to grow in their faith and connect through fellowship, service, and worship.",
        image: eeer
      },
      {
        title: "Women Ministries",
        shortTitle: "Women",
        description: "Women Ministries provides a supportive community for women to grow spiritually, share experiences, and serve others.",
        image: wee
      },
      {
        title: "Men Ministries",
        shortTitle: "Men",
        description: "Men Ministries fosters spiritual growth and brotherhood among men, encouraging them to lead Christ-centered lives.",
        image: tom
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AboutNavbar = _sfc_main$1;
      const _component_HomeFoot = __nuxt_component_1$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AboutNavbar, null, null, _parent));
      _push(`<section class="w-full overflow-hidden px-4 py-10 mt-16 lg:mt-24 lg:px-16 2xl:px-48"><div class="mx-auto max-w-7xl"><div class="max-w-2xl space-y-4"><h2 class="text-2xl lg:text-3xl font-semibold text-[#b70213]"> Church Ministries </h2><p class="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-gray-100"> Engage and grow in faith. </p><p class="text-base lg:text-lg text-slate-700 dark:text-gray-300 max-w-xl"> Our church ministries provide diverse opportunities to connect, serve, and grow spiritually. Join a group that resonates with your journey in faith. </p><a href="/" class="inline-flex items-center text-[#b70213] hover:text-slate-700 font-semibold group"> Explore all ministries <span class="ml-1 transition-transform group-hover:translate-x-1">→</span></a></div><div class="mt-12 lg:mt-16"><div class="flex overflow-x-auto gap-4 lg:grid lg:grid-cols-5 lg:gap-8 pb-4 lg:pb-0"><!--[-->`);
      ssrRenderList(ministries, (ministry, index) => {
        _push(`<button class="${ssrRenderClass([[
          activeTab.value === index ? "bg-[#b70213] text-white" : "hover:bg-slate-100 text-slate-700"
        ], "flex-none min-w-[200px] lg:min-w-0 p-4 rounded-lg transition-all"])}"><div class="text-sm font-semibold mb-2">${ssrInterpolate(ministry.shortTitle)}</div><h3 class="text-base font-semibold mb-2 hidden lg:block">${ssrInterpolate(ministry.title)}</h3><p class="text-sm leading-relaxed hidden lg:block">${ssrInterpolate(ministry.description)}</p></button>`);
      });
      _push(`<!--]--></div><div class="mt-6 lg:hidden"><h3 class="text-xl font-semibold mb-2">${ssrInterpolate(ministries[activeTab.value].title)}</h3><p class="text-slate-700">${ssrInterpolate(ministries[activeTab.value].description)}</p></div><div class="mt-8 overflow-hidden rounded-2xl"><img${ssrRenderAttr("src", ministries[activeTab.value].image)}${ssrRenderAttr("alt", ministries[activeTab.value].title)} class="w-full aspect-[1216/640] object-cover transition-opacity duration-300" loading="lazy"></div></div></div></section>`);
      _push(ssrRenderComponent(_component_HomeFoot, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ministries.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ministries-HymJxYvA.js.map

import { _ as __nuxt_component_0 } from "./nuxt-link-DDKZUcAZ.js";
import { u as useColorMode, _ as _imports_0$3, a as __nuxt_component_1$1, b as __nuxt_component_1$2 } from "./foot-DCu1LAAh.js";
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _imports_0$4 } from "./cross-BM7evfg3.js";
import "ufo";
import "hookable";
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
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
      const _component_ClientOnly = __nuxt_component_1$1;
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
                    src: _imports_0$3,
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/navbar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0$2 = "" + __buildAssetsURL("bibl.DF8ZnAfK.mp4");
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-[100vh] w-full bg-white md:pt-0 pt-12" }, _attrs))}><div class="flex lg:flex-row flex-col gap-4 h-full"><div class="flex-1 flex items-center justify-center"><div class="p-6 pt-12 lg:p-12"><h1 class="text-3xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center lg:text-left"> Welcome to <span class="text-[#b70213] dark:text-[#b70213]">Growth Centre Church</span></h1><p class="text-surface-700 dark:text-surface-200 leading-normal mb-8 text-center lg:text-left"> Join us in worship, fellowship, and growing in the Word of God. Together, let us build a strong community rooted in faith and love. </p><div class="flex items-center justify-center lg:justify-start gap-6"><a href="/join" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#b70213] border border-transparent rounded-md hover:bg-[#99020f] focus:bg-[#99020f]"> Join Us </a><a href="/ministries" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold bg-white text-[#b70213] rounded-lg shadow border-2 border-[#b70213] hover:bg-[#b70213] hover:text-white transition-all duration-300"> Ministries </a></div></div></div><div class="flex-1 overflow-hidden relative"><video class="h-full w-full object-cover lg:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]" playsinline autoplay muted loop><source${ssrRenderAttr("src", _imports_0$2)} type="video/mp4"> Your browser does not support the video tag. </video></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_FlipCard = resolveComponent("FlipCard");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_FlipCard, {
    description: "Inspira UI offers beautifully designed, reusable animation components and includes custom components developed by us and contributed by the community.",
    image: " https://images.unsplash.com/photo-1525373698358-041e3a460346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rotate: "y",
    subtitle: "What is Inspira UI?",
    title: "Inspira UI"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/carousel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font bg-white" }, _attrs))}><div class="container px-5 py-24 mx-auto flex flex-col"><div class="mb-12 text-center"><h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Our Church Mission</h2><p class="text-lg text-gray-600 mt-4"> Transforming lives through the power of God and building a community grounded in faith, love, and service. </p></div><div class="flex flex-wrap"><div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"><img alt="Church Community" class="object-cover object-center h-full w-full"${ssrRenderAttr("src", _imports_0$4)}></div><div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"><div class="flex flex-col mb-10 lg:items-start items-center"><div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-[#b70213] mb-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></div><div class="flex-grow"><h2 class="text-gray-900 text-lg title-font font-medium mb-3"> Worship Services </h2><p class="leading-relaxed text-base"> Join us for uplifting worship services that bring us closer to God and inspire spiritual growth through prayer, song, and sermons. </p><a class="mt-3 text-[#b70213] inline-flex items-center">Learn More <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div></div><div class="flex flex-col mb-10 lg:items-start items-center"><div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-[#b70213] mb-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path></svg></div><div class="flex-grow"><h2 class="text-gray-900 text-lg title-font font-medium mb-3"> Community Outreach </h2><p class="leading-relaxed text-base"> We extend God’s love through charity programs, support for the less fortunate, and initiatives that uplift the community spiritually and socially. </p><a class="mt-3 text-[#b70213] inline-flex items-center">Learn More <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div></div><div class="flex flex-col mb-10 lg:items-start items-center"><div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-[#b70213] mb-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><div class="flex-grow"><h2 class="text-gray-900 text-lg title-font font-medium mb-3"> Youth and Family Programs </h2><p class="leading-relaxed text-base"> Programs dedicated to nurturing the faith and spiritual growth of families and empowering the next generation to live purposefully in Christ. </p><a class="mt-3 text-[#b70213] inline-flex items-center">Learn More <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/features.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$1 = "" + __buildAssetsURL("jesus.Djp3_6tY.jpg");
const _imports_2 = "" + __buildAssetsURL("leaders.DsbaF0Mg.webp");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-10 bg-gray-50 sm:py-16" }, _attrs))}><div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"><div class="text-center"><h2 class="text-3xl font-bold text-black sm:text-4xl"> Church News &amp; Announcements </h2><p class="mt-4 text-base text-gray-600"> Stay informed with the latest news, events, and updates from the Christian Growth Center Church. </p></div><div class="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3"><div class="overflow-hidden bg-white shadow-md transform transition-transform duration-300 hover:scale-105"><img class="object-cover w-full h-56"${ssrRenderAttr("src", _imports_0$1)} alt="Church Event 1"><div class="p-6"><h3 class="text-xl font-semibold text-black"> Sunday Worship Service </h3><p class="mt-3 text-sm text-gray-600"> Join us this Sunday for a spirit-filled worship experience. Everyone is welcome! </p><a href="#" class="mt-4 text-sm font-medium text-[#b70213] hover:text-green-700 flex items-center gap-1 group"> Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></a></div></div><div class="overflow-hidden bg-white shadow-md transform transition-transform duration-300 hover:scale-105"><img class="object-cover w-full h-56"${ssrRenderAttr("src", _imports_0$4)} alt="Church Testimony"><div class="p-6"><h3 class="text-xl font-semibold text-black"> Member Testimony </h3><p class="mt-3 text-sm text-gray-600"> Be inspired by Sister Grace’s testimony of how God transformed her life through faith and prayer. </p><a href="#" class="mt-4 text-sm font-medium text-[#b70213] hover:text-green-700 flex items-center gap-1 group"> Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></a></div></div><div class="overflow-hidden bg-white shadow-md transform transition-transform duration-300 hover:scale-105"><img class="object-cover w-full h-56"${ssrRenderAttr("src", _imports_2)} alt="Church Announcement"><div class="p-6"><h3 class="text-xl font-semibold text-black"> Monthly Prayer Meeting </h3><p class="mt-3 text-sm text-gray-600"> Don’t miss our monthly prayer meeting as we come together to seek God’s guidance and blessings. </p><a href="#" class="mt-4 text-sm font-medium text-[#b70213] hover:text-green-700 flex items-center gap-1 group"> Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></a></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/news.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + __buildAssetsURL("biblebg.2oTa7gck.jpeg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-black/50" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="Christian Growth Center Church" class="absolute inset-0 object-cover w-full h-full"><div class="relative p-8 md:p-12 lg:px-16 lg:py-24 bg-black/50"><div class="text-center"><h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl"> Worship, Fellowship, and Grow in Faith! </h2><p class="max-w-lg mx-auto text-white/90 md:mt-6 md:text-lg md:leading-relaxed"> Join the Christian Growth Center Church as we grow together in faith, love, and service to the Lord. Together, we build a strong community rooted in Christ. </p><div class="mt-4 sm:mt-8"><a href="/join" class="inline-block rounded-full bg-[#b70213] px-12 py-3 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus:ring focus:ring-green-400"> Become a Member </a></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/cta.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    let activeIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-10 sm:py-16 lg:py-12 bg-white" }, _attrs))}><div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"><div class="max-w-2xl mx-auto text-center"><h2 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"> Frequently Asked Questions </h2></div><div class="max-w-3xl mx-auto mt-4 space-y-4 md:mt-16 border border-gray-200 z-[100] relative"><div class="transition-all duration-200 shadow-lg cursor-pointer 2xl:ext-xl"><button class="flex justify-between w-full px-4 py-5 sm:p-6 gap-3"><span class="flex 2xl:text-2xl text-start font-semibold"> How can I become a member of this church? </span><svg class="${ssrRenderClass([{ "rotate-180": unref(activeIndex) === 1 }, "w-6 h-6 text-gray-400"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>`);
      if (unref(activeIndex) === 1) {
        _push(`<div class="px-4 pb-5 sm:px-6 sm:pb-6"><p> Becoming a member is simple! Visit our membership page or attend our Sunday service. Speak with any of our church leaders to learn more and complete your membership registration. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="transition-all duration-200 shadow-lg cursor-pointer 2xl:text-xl"><button class="flex justify-between w-full px-4 py-5 sm:p-6 cursor-pointer gap-3"><span class="flex 2xl:text-2xl font-semibold text-start cursor-pointer"> What programs does the church offer? </span><svg class="${ssrRenderClass([{ "rotate-180": unref(activeIndex) === 2 }, "w-6 h-6 text-gray-400"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>`);
      if (unref(activeIndex) === 2) {
        _push(`<div class="px-4 pb-5 sm:px-6 sm:pb-6"><p> Our church offers a range of programs including Bible study groups, youth mentorship, community outreach initiatives, worship nights, and prayer sessions to support spiritual growth and fellowship. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="transition-all duration-200 shadow-lg cursor-pointer 2xl:text-xl"><button class="flex justify-between w-full px-4 py-5 sm:p-6 cursor-pointer gap-3"><span class="flex 2xl:text-2xl font-semibold text-start cursor-pointer"> How can I get involved in the church&#39;s activities? </span><svg class="${ssrRenderClass([{ "rotate-180": unref(activeIndex) === 3 }, "w-6 h-6 text-gray-400"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>`);
      if (unref(activeIndex) === 3) {
        _push(`<div class="px-4 pb-5 sm:px-6 sm:pb-6"><p> You can participate in various church activities by joining our volunteer programs, small groups, or outreach events. Check our events calendar or speak with our ministry leaders for more details. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="transition-all duration-200 shadow-lg cursor-pointer 2xl:text-xl"><button class="flex justify-between w-full px-4 py-5 sm:p-6 cursor-pointer gap-3"><span class="flex 2xl:text-2xl font-semibold text-start cursor-pointer"> What support services does the church provide? </span><svg class="${ssrRenderClass([{ "rotate-180": unref(activeIndex) === 4 }, "w-6 h-6 text-gray-400"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>`);
      if (unref(activeIndex) === 4) {
        _push(`<div class="px-4 pb-5 sm:px-6 sm:pb-6"><p> We provide counseling services, financial assistance for those in need, and spiritual guidance to support our members through challenging times. Reach out to our pastoral team for help. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/faq.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeNavbar = _sfc_main$7;
  const _component_HomeHero = __nuxt_component_1;
  const _component_HomeCarousel = __nuxt_component_2;
  const _component_HomeFeatures = __nuxt_component_3;
  const _component_HomeNews = __nuxt_component_4;
  const _component_HomeCta = __nuxt_component_5;
  const _component_HomeFaq = _sfc_main$1;
  const _component_HomeFoot = __nuxt_component_1$2;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HomeNavbar, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeHero, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeCarousel, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeFeatures, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeNews, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeCta, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeFaq, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeFoot, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/join" }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/event" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BJ7brr7l.js.map

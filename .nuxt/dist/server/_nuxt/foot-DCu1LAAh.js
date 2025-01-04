import { defineComponent, createElementBlock, ref, provide, mergeProps, useSSRContext } from "vue";
import "hookable";
import { a as useState, _ as _export_sfc } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_1$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _imports_0 = "" + __buildAssetsURL("logo.Duwu51lj.png");
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font bg-blue-100 relative" }, _attrs))}><div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"><a href="/" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 relative z-10"><img${ssrRenderAttr("src", _imports_0)} alt="Growth Center Church Logo" class="w-16 h-16 rounded-full object-contain"></a><p class="text-sm text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:py-2 sm:mt-0 mt-4 relative z-10"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Growth Center Church — <a href="#" class="text-[#b70213] ml-1" rel="noopener noreferrer" target="_blank">All rights reserved</a></p><span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start relative z-10"><a class="text-gray-600 hover:text-[#b70213]" href="https://web.facebook.com/mediagcc/" target="_blank" rel="noopener"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-3 text-gray-600 hover:text-[#b70213]" href="https://twitter.com" target="_blank" rel="noopener"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-3 text-gray-600 hover:text-[#b70213]" href="https://instagram.com" target="_blank" rel="noopener"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a><a class="ml-3 text-gray-600 hover:text-[#b70213]" href="https://www.youtube.com/@ChristianGrowthcenterchurch" target="_blank" rel="noopener"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5"><path d="M549.655 124.083c-6.281-23.65-24.761-42.126-48.419-48.419C457.16 64 288 64 288 64s-169.16 0-213.236 11.664c-23.659 6.293-42.138 24.769-48.419 48.419C16 168.163 16 256.019 16 256.019s0 87.837 10.345 131.936c6.281 23.65 24.761 42.126 48.419 48.419C118.84 448 288 448 288 448s169.16 0 213.236-11.626c23.659-6.293 42.138-24.769 48.419-48.419C560 343.856 560 256 560 256s0-87.837-10.345-131.917zM232 336V176l142.857 80L232 336z"></path></svg></a></span></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/foot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _imports_0 as _,
  __nuxt_component_1$1 as a,
  __nuxt_component_1 as b,
  useColorMode as u
};
//# sourceMappingURL=foot-DCu1LAAh.js.map

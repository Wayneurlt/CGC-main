import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@vueuse/core";
import "tailwind-merge";
import "klona";
import "@iconify/vue";
const _sfc_main = {
  name: "AboutUs",
  data() {
    return {
      leaders: [
        {
          id: 1,
          name: "Pastor John Smith",
          role: "Senior Pastor",
          photo: "/images/pastor-john.jpg"
        },
        {
          id: 2,
          name: "Jane Doe",
          role: "Youth Ministry Leader",
          photo: "/images/jane-doe.jpg"
        },
        {
          id: 3,
          name: "Michael Brown",
          role: "Worship Leader",
          photo: "/images/michael-brown.jpg"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-us" }, _attrs))} data-v-8dc3140c><section class="hero-section" data-v-8dc3140c><h1 class="hero-title" data-v-8dc3140c>Welcome to Our Church</h1><p class="hero-description" data-v-8dc3140c> We are a community of faith, hope, and love, dedicated to serving God and our neighbors. </p></section><section class="mission-section" data-v-8dc3140c><h2 data-v-8dc3140c>Our Mission</h2><p data-v-8dc3140c> Our mission is to glorify God by leading people into a growing relationship with Jesus Christ, equipping them to serve and share His love with the world. </p></section><section class="history-section" data-v-8dc3140c><h2 data-v-8dc3140c>Our History</h2><p data-v-8dc3140c> Established in 2000, our church has been a beacon of hope and faith for generations. From humble beginnings, we have grown into a vibrant community dedicated to making a difference. </p></section><section class="leadership-section" data-v-8dc3140c><h2 data-v-8dc3140c>Meet Our Leadership</h2><div class="leaders" data-v-8dc3140c><!--[-->`);
  ssrRenderList($data.leaders, (leader) => {
    _push(`<div class="leader" data-v-8dc3140c><img${ssrRenderAttr("src", leader.photo)}${ssrRenderAttr("alt", leader.name)} class="leader-photo" data-v-8dc3140c><h3 data-v-8dc3140c>${ssrInterpolate(leader.name)}</h3><p data-v-8dc3140c>${ssrInterpolate(leader.role)}</p></div>`);
  });
  _push(`<!--]--></div></section><section class="services-section" data-v-8dc3140c><h2 data-v-8dc3140c>Service Times</h2><ul data-v-8dc3140c><li data-v-8dc3140c><strong data-v-8dc3140c>Sunday Worship:</strong> 10:00 AM</li><li data-v-8dc3140c><strong data-v-8dc3140c>Bible Study:</strong> Wednesday, 7:00 PM</li><li data-v-8dc3140c><strong data-v-8dc3140c>Youth Fellowship:</strong> Friday, 6:00 PM</li></ul></section><section class="contact-section" data-v-8dc3140c><h2 data-v-8dc3140c>Contact Us</h2><p data-v-8dc3140c><strong data-v-8dc3140c>Address:</strong> Uganda road, Eldoret City<br data-v-8dc3140c><strong data-v-8dc3140c>Phone:</strong> (123) 456-7890<br data-v-8dc3140c><strong data-v-8dc3140c>Email:</strong> info@ourchurch.com </p></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8dc3140c"]]);
export {
  about as default
};
//# sourceMappingURL=about-CtlSqL2r.js.map

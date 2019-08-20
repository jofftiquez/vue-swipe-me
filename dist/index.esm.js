import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

/* script */
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm._m(0);
};

var __vue_staticRenderFns__ = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "swipe-me-swipe-container"
  }, [_c('h1', [_vm._v("Foo")])]);
}];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = "data-v-9333bb0c";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

var SwipeMeSwiper = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, {}, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

/* script */
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm._m(0);
};

var __vue_staticRenderFns__$1 = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "swipe-me-swipe-container"
  }, [_c('h1', [_vm._v("Foo")])]);
}];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = "data-v-82985ba6";
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

var SwipeMeSwiperItem = __vue_normalize__({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, {}, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

var VueSwipeMe = {
  install: function install(Vue, options) {
    Vue.component('swipe-me-swiper', SwipeMeSwiper);
    Vue.component('swipe-me-swiper-item', SwipeMeSwiperItem);
  }
};

export default VueSwipeMe;
export { SwipeMeSwiper, SwipeMeSwiperItem };

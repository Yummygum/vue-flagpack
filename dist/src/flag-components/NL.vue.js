'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var NL_vue_rollupPluginVue_script = require('./NL.vue_rollup-plugin-vue=script.js');
var normalizeComponent = require('../../node_modules/vue-runtime-helpers/dist/normalize-component.mjs.js');
var browser = require('../../node_modules/vue-runtime-helpers/dist/inject-style/browser.mjs.js');

/* script */
const __vue_script__ = NL_vue_rollupPluginVue_script['default'];

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "flag",
        "size-" + _vm.size.toLowerCase(),
        { "border-radius": _vm.hasBorderRadius },
        { border: _vm.hasBorder },
        { "drop-shadow": _vm.hasDropShadow },
        _vm.gradient,
        _vm.className
      ]
    },
    [_c("img", { attrs: { src: _vm.getUrl(_vm.size.toLowerCase()) } })]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-f4213dba_0", { source: ".flag[data-v-f4213dba] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  box-sizing: border-box;\n}\n.flag.size-s[data-v-f4213dba] {\n  width: 16px;\n  height: 12px;\n}\n.flag.size-s.drop-shadow[data-v-f4213dba] {\n  box-shadow: 0 0 1px 0.5px rgba(0, 0, 0, 0.1);\n}\n.flag.size-s.border-radius[data-v-f4213dba] {\n  border-radius: 1px;\n}\n.flag.size-m[data-v-f4213dba] {\n  width: 20px;\n  height: 15px;\n}\n.flag.size-m.drop-shadow[data-v-f4213dba] {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n.flag.size-m.border-radius[data-v-f4213dba] {\n  border-radius: 1.5px;\n}\n.flag.size-l[data-v-f4213dba] {\n  width: 32px;\n  height: 24px;\n}\n.flag.size-l.drop-shadow[data-v-f4213dba] {\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.flag.size-l.border-radius[data-v-f4213dba] {\n  border-radius: 2px;\n}\n.flag.border[data-v-f4213dba]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n  box-sizing: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  mix-blend-mode: overlay;\n}\n.flag.border-radius[data-v-f4213dba]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n  box-sizing: border-box;\n  border-radius: 1px;\n}\n.flag.top-down[data-v-f4213dba]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n  box-sizing: border-box;\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 2%, rgba(255, 255, 255, 0.7) 100%);\n}\n.flag.real-linear[data-v-f4213dba]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n  box-sizing: border-box;\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.2) 0%, rgba(39, 39, 39, 0.22) 11%, rgba(255, 255, 255, 0.3) 27%, rgba(0, 0, 0, 0.24) 41%, rgba(0, 0, 0, 0.55) 52%, rgba(255, 255, 255, 0.26) 63%, rgba(0, 0, 0, 0.27) 74%, rgba(255, 255, 255, 0.3) 100%);\n}\n.flag.real-circular[data-v-f4213dba]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n  box-sizing: border-box;\n  background: radial-gradient(50% 36%, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.24) 11%, rgba(0, 0, 0, 0.55) 17%, rgba(255, 255, 255, 0.26) 22%, rgba(0, 0, 0, 0.17) 27%, rgba(255, 255, 255, 0.28) 31%, rgba(255, 255, 255, 0) 37%) center calc(50% - 8px)/600% 600%, radial-gradient(50% 123%, rgba(255, 255, 255, 0.3) 25%, rgba(0, 0, 0, 0.24) 48%, rgba(0, 0, 0, 0.55) 61%, rgba(255, 255, 255, 0.26) 72%, rgba(0, 0, 0, 0.17) 80%, rgba(255, 255, 255, 0.28) 88%, rgba(255, 255, 255, 0.3) 100%) center calc(50% - 8px)/600% 600%;\n}\n.flag img[data-v-f4213dba] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n/*# sourceMappingURL=NL.vue.map */", map: {"version":3,"sources":["C:\\Users\\daone\\Documents\\yummygum\\vue-flagpack\\src\\flag-components\\NL.vue","NL.vue"],"names":[],"mappings":"AA8EA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;AC7EA;ADgFA;EACA,WAAA;EACA,YAAA;AC9EA;ADgFA;EACA,4CAAA;AC9EA;ADiFA;EACA,kBAAA;AC/EA;ADmFA;EACA,WAAA;EACA,YAAA;ACjFA;ADmFA;EACA,0CAAA;ACjFA;ADoFA;EACA,oBAAA;AClFA;ADsFA;EACA,WAAA;EACA,YAAA;ACpFA;ADsFA;EACA,0CAAA;ACpFA;ADuFA;EACA,kBAAA;ACrFA;AD2FA;EAzDA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EAqDA,oCAAA;EACA,uBAAA;ACnFA;ADwFA;EAjEA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EA6DA,kBAAA;AChFA;ADqFA;EAxEA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EAoEA,6FAAA;AC7EA;ADkFA;EA/EA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EA2EA,kQAAA;AC1EA;AD+EA;EAtFA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EAkFA,ygBAAA;ACvEA;AD4EA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AC1EA;;AAEA,iCAAiC","file":"NL.vue","sourcesContent":["<template>\n  <div\n    :class=\"[\n      'flag',\n      `size-${size.toLowerCase()}`,\n      {'border-radius': hasBorderRadius },\n      {'border': hasBorder },\n      {'drop-shadow': hasDropShadow},\n      gradient,\n      className\n    ]\">\n    <img :src=\"getUrl(size.toLowerCase())\">\n  </div>\n</template>\n\n<script>\n\nexport default {\n  name: 'NL',\n  methods: {\n    getUrl(size) {\n      if (size === 's') {\n        return require('./../../flags/s/NL.svg')\n      }\n\n      if (size === 'm') {\n        return require('./../../flags/m/NL.svg')\n      }\n\n      if (size === 'l') {\n        return require('./../../flags/l/NL.svg')\n      }\n    }\n  },\n  props: {\n    size: {\n      type: String,\n      default: 'm',\n      validator: value => (\n        ['s', 'm', 'l'].indexOf(value.toLowerCase()) !== -1\n      ),\n    },\n    hasDropShadow: {\n      type: Boolean,\n      default: false,\n    },\n    hasBorder: {\n      type: Boolean,\n      default: true\n    },\n    hasBorderRadius: {\n      type: Boolean,\n      default: true,\n    },\n    gradient: {\n      type: String,\n      validator: value => (\n        ['top-down', 'real-linear', 'real-circular'].indexOf(value) !== -1\n      ),\n    },\n    className: {\n      type: String\n    }\n  },\n}\n</script>\n\n<style scoped lang=\"scss\">\n@mixin before-styling {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n  box-sizing: border-box;\n}\n\n.flag {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  box-sizing: border-box;\n\n  &.size {\n    &-s {\n      width: 16px;\n      height: 12px;\n\n      &.drop-shadow {\n        box-shadow: 0 0 1px 0.5px rgba(0,0,0,0.10);\n      }\n\n      &.border-radius {\n        border-radius: 1px;\n      }\n    }\n\n    &-m {\n      width: 20px;\n      height: 15px;\n\n      &.drop-shadow {\n        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10);\n      }\n\n      &.border-radius {\n        border-radius: 1.5px;\n      }\n    }\n\n    &-l {\n      width: 32px;\n      height: 24px;\n\n      &.drop-shadow {\n        box-shadow: 0 2px 3px 0 rgba(0,0,0,0.10);\n      }\n\n      &.border-radius {\n        border-radius: 2px;\n      }\n    }\n  }\n\n  &.border {\n    &::before {\n      @include before-styling();\n      border: 1px solid rgba(0, 0, 0, .5);\n      mix-blend-mode: overlay;\n    }\n  }\n\n  &.border-radius {\n    &::before {\n      @include before-styling();\n      border-radius: 1px;\n    }\n  }\n\n  &.top-down {\n    &::before {\n      @include before-styling();\n      background-image: linear-gradient(0deg, rgba(0,0,0,0.30) 2%, rgba(255,255,255,0.70) 100%);\n    }\n  }\n\n  &.real-linear {\n    &::before {\n      @include before-styling();\n      background-image: linear-gradient(45deg, rgba(0,0,0,0.20) 0%, rgba(39,39,39,0.22) 11%, rgba(255,255,255,0.30) 27%, rgba(0,0,0,0.24) 41%, rgba(0,0,0,0.55) 52%, rgba(255,255,255,0.26) 63%, rgba(0,0,0,0.27) 74%, rgba(255,255,255,0.30) 100%);\n    }\n  }\n\n  &.real-circular {\n    &::before {\n      @include before-styling();\n      background: radial-gradient(50% 36%, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.24) 11%, rgba(0,0,0,0.55) 17%, rgba(255,255,255,0.26) 22%, rgba(0,0,0,0.17) 27%, rgba(255,255,255,0.28) 31%, rgba(255,255,255,0.00) 37%) center calc(50% - 8px) / 600% 600%,\n                  radial-gradient(50% 123%, rgba(255,255,255,0.30) 25%, rgba(0,0,0,0.24) 48%, rgba(0,0,0,0.55) 61%, rgba(255,255,255,0.26) 72%, rgba(0,0,0,0.17) 80%, rgba(255,255,255,0.28) 88%, rgba(255,255,255,0.30) 100%) center calc(50% - 8px) / 600% 600%;\n    }\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n}\n</style>\n",".flag {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  box-sizing: border-box;\n}\n.flag.size-s {\n  width: 16px;\n  height: 12px;\n}\n.flag.size-s.drop-shadow {\n  box-shadow: 0 0 1px 0.5px rgba(0, 0, 0, 0.1);\n}\n.flag.size-s.border-radius {\n  border-radius: 1px;\n}\n.flag.size-m {\n  width: 20px;\n  height: 15px;\n}\n.flag.size-m.drop-shadow {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n.flag.size-m.border-radius {\n  border-radius: 1.5px;\n}\n.flag.size-l {\n  width: 32px;\n  height: 24px;\n}\n.flag.size-l.drop-shadow {\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.flag.size-l.border-radius {\n  border-radius: 2px;\n}\n.flag.border::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n  box-sizing: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  mix-blend-mode: overlay;\n}\n.flag.border-radius::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n  box-sizing: border-box;\n  border-radius: 1px;\n}\n.flag.top-down::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n  box-sizing: border-box;\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 2%, rgba(255, 255, 255, 0.7) 100%);\n}\n.flag.real-linear::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n  box-sizing: border-box;\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.2) 0%, rgba(39, 39, 39, 0.22) 11%, rgba(255, 255, 255, 0.3) 27%, rgba(0, 0, 0, 0.24) 41%, rgba(0, 0, 0, 0.55) 52%, rgba(255, 255, 255, 0.26) 63%, rgba(0, 0, 0, 0.27) 74%, rgba(255, 255, 255, 0.3) 100%);\n}\n.flag.real-circular::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n  box-sizing: border-box;\n  background: radial-gradient(50% 36%, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.24) 11%, rgba(0, 0, 0, 0.55) 17%, rgba(255, 255, 255, 0.26) 22%, rgba(0, 0, 0, 0.17) 27%, rgba(255, 255, 255, 0.28) 31%, rgba(255, 255, 255, 0) 37%) center calc(50% - 8px)/600% 600%, radial-gradient(50% 123%, rgba(255, 255, 255, 0.3) 25%, rgba(0, 0, 0, 0.24) 48%, rgba(0, 0, 0, 0.55) 61%, rgba(255, 255, 255, 0.26) 72%, rgba(0, 0, 0, 0.17) 80%, rgba(255, 255, 255, 0.28) 88%, rgba(255, 255, 255, 0.3) 100%) center calc(50% - 8px)/600% 600%;\n}\n.flag img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n/*# sourceMappingURL=NL.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-f4213dba";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent['default'](
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    browser['default'],
    undefined,
    undefined
  );

exports.default = __vue_component__;

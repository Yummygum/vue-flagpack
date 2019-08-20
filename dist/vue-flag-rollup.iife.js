var Flag = (function (exports, flagPackCore) {
  'use strict';

  //

  var script = {
    name: 'Flag',
    computed: {
      isoToCountryCodeLocal() {
        return flagPackCore.isoToCountryCode(this.code)
      }
    },
    props: {
      size: {
        type: String,
        default: 'm',
      },
      code: {
        type: String,
        required: true,
        default: '528'
      },
      dropshadow: {
        type: Boolean,
        default: false
      },
      hasBorder: {
        type: Boolean,
        default: false
      },
      hasBorderRadius: {
        type: Boolean,
        default: true,
      },
      customBorderRadius: {
        type: String,
      },
      gradient: {
        type: String,
        default: '',
      },
      className: {
        type: String
      }
    },
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  const __vue_script__ = script;

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
          "size-" + _vm.size,
          { "border-radius": _vm.hasBorderRadius },
          { border: _vm.hasBorder },
          { dropshadow: _vm.dropshadow },
          _vm.gradient,
          _vm.className
        ],
        style: { borderRadius: _vm.customBorderRadius }
      },
      [
        _c("img", {
          attrs: {
            src:
              "https://raw.githubusercontent.com/Yummygum/flag-pack-core/master/svg/" +
              _vm.size.toLowerCase() +
              "/" +
              _vm.isoToCountryCodeLocal.toUpperCase() +
              ".svg?sanitize=true"
          }
        })
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-f967d066_0", { source: ".flag[data-v-f967d066] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n}\n.flag.size-s[data-v-f967d066] {\n  width: 16px;\n  height: 12px;\n}\n.flag.size-s.dropshadow[data-v-f967d066] {\n  box-shadow: 0 0 1px 0.5px rgba(0, 0, 0, 0.1);\n}\n.flag.size-s.border-radius[data-v-f967d066] {\n  border-radius: 1px;\n}\n.flag.size-m[data-v-f967d066] {\n  width: 20px;\n  height: 15px;\n}\n.flag.size-m.dropshadow[data-v-f967d066] {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n.flag.size-m.border-radius[data-v-f967d066] {\n  border-radius: 1.5px;\n}\n.flag.size-l[data-v-f967d066] {\n  width: 32px;\n  height: 24px;\n}\n.flag.size-l.dropshadow[data-v-f967d066] {\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.flag.size-l.border-radius[data-v-f967d066] {\n  border-radius: 2px;\n}\n.flag[data-v-f967d066]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n}\n.flag.border[data-v-f967d066]::before {\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  mix-blend-mode: overlay;\n}\n.flag.border-radius[data-v-f967d066]::before {\n  border-radius: 1px;\n}\n.flag.top-down[data-v-f967d066]::before {\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 2%, rgba(255, 255, 255, 0.7) 100%);\n}\n.flag.real-linear[data-v-f967d066]::before {\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.2) 0%, rgba(39, 39, 39, 0.22) 11%, rgba(255, 255, 255, 0.3) 27%, rgba(0, 0, 0, 0.24) 41%, rgba(0, 0, 0, 0.55) 52%, rgba(255, 255, 255, 0.26) 63%, rgba(0, 0, 0, 0.27) 74%, rgba(255, 255, 255, 0.3) 100%);\n}\n.flag.real-circular[data-v-f967d066]::before {\n  background: radial-gradient(50% 36%, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.24) 11%, rgba(0, 0, 0, 0.55) 17%, rgba(255, 255, 255, 0.26) 22%, rgba(0, 0, 0, 0.17) 27%, rgba(255, 255, 255, 0.28) 31%, rgba(255, 255, 255, 0) 37%) center calc(50% - 8px)/600% 600%, radial-gradient(50% 123%, rgba(255, 255, 255, 0.3) 25%, rgba(0, 0, 0, 0.24) 48%, rgba(0, 0, 0, 0.55) 61%, rgba(255, 255, 255, 0.26) 72%, rgba(0, 0, 0, 0.17) 80%, rgba(255, 255, 255, 0.28) 88%, rgba(255, 255, 255, 0.3) 100%) center calc(50% - 8px)/600% 600%;\n}\n.flag img[data-v-f967d066] {\n  display: block;\n}\n\n/*# sourceMappingURL=Flag.vue.map */", map: {"version":3,"sources":["/Users/yannick/Desktop/Dev/Yummygum-dev/vue-flag-pack/src/Flag.vue","Flag.vue"],"names":[],"mappings":"AA+DA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AC9DA;ADiEA;EACA,WAAA;EACA,YAAA;AC/DA;ADiEA;EACA,4CAAA;AC/DA;ADkEA;EACA,kBAAA;AChEA;ADoEA;EACA,WAAA;EACA,YAAA;AClEA;ADoEA;EACA,0CAAA;AClEA;ADqEA;EACA,oBAAA;ACnEA;ADuEA;EACA,WAAA;EACA,YAAA;ACrEA;ADuEA;EACA,0CAAA;ACrEA;ADwEA;EACA,kBAAA;ACtEA;AD2EA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,uBAAA;ACzEA;AD6EA;EACA,uBAAA;EACA,wBAAA;EACA,oCAAA;EACA,uBAAA;AC3EA;ADgFA;EACA,kBAAA;AC9EA;ADmFA;EACA,6FAAA;ACjFA;ADsFA;EACA,kQAAA;ACpFA;ADyFA;EACA,ygBAAA;ACvFA;AD4FA;EACA,cAAA;AC1FA;;AAEA,mCAAmC","file":"Flag.vue","sourcesContent":["<template>\n  <div\n    :style=\"{borderRadius: customBorderRadius}\"\n    :class=\"[\n      'flag',\n      `size-${size}`,\n      {'border-radius': hasBorderRadius },\n      {'border': hasBorder },\n      {dropshadow},\n      gradient,\n      className\n    ]\">\n    <img :src=\"`https://raw.githubusercontent.com/Yummygum/flag-pack-core/master/svg/${size.toLowerCase()}/${isoToCountryCodeLocal.toUpperCase()}.svg?sanitize=true`\">\n  </div>\n</template>\n\n<script>\nimport { isoToCountryCode } from 'flag-pack-core'\n\nexport default {\n  name: 'Flag',\n  computed: {\n    isoToCountryCodeLocal() {\n      return isoToCountryCode(this.code)\n    }\n  },\n  props: {\n    size: {\n      type: String,\n      default: 'm',\n    },\n    code: {\n      type: String,\n      required: true,\n      default: '528'\n    },\n    dropshadow: {\n      type: Boolean,\n      default: false\n    },\n    hasBorder: {\n      type: Boolean,\n      default: false\n    },\n    hasBorderRadius: {\n      type: Boolean,\n      default: true,\n    },\n    customBorderRadius: {\n      type: String,\n    },\n    gradient: {\n      type: String,\n      default: '',\n    },\n    className: {\n      type: String\n    }\n  },\n}\n</script>\n\n<style scoped lang=\"scss\">\n.flag {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n\n  &.size {\n    &-s {\n      width: 16px;\n      height: 12px;\n\n      &.dropshadow {\n        box-shadow: 0 0 1px 0.5px rgba(0,0,0,0.10);\n      }\n\n      &.border-radius {\n        border-radius: 1px;\n      }\n    }\n\n    &-m {\n      width: 20px;\n      height: 15px;\n\n      &.dropshadow {\n        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10);\n      }\n\n      &.border-radius {\n        border-radius: 1.5px;\n      }\n    }\n\n    &-l {\n      width: 32px;\n      height: 24px;\n\n      &.dropshadow {\n        box-shadow: 0 2px 3px 0 rgba(0,0,0,0.10);\n      }\n\n      &.border-radius {\n        border-radius: 2px;\n      }\n    }\n  }\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    display: block;\n    mix-blend-mode: overlay;\n  }\n\n  &.border {\n    &::before {\n      width: calc(100% - 2px);\n      height: calc(100% - 2px);\n      border: 1px solid rgba(0, 0, 0, .5);\n      mix-blend-mode: overlay;\n    }\n  }\n\n  &.border-radius {\n    &::before {\n      border-radius: 1px;\n    }\n  }\n\n  &.top-down {\n    &::before {\n      background-image: linear-gradient(0deg, rgba(0,0,0,0.30) 2%, rgba(255,255,255,0.70) 100%);\n    }\n  }\n\n  &.real-linear {\n    &::before {\n      background-image: linear-gradient(45deg, rgba(0,0,0,0.20) 0%, rgba(39,39,39,0.22) 11%, rgba(255,255,255,0.30) 27%, rgba(0,0,0,0.24) 41%, rgba(0,0,0,0.55) 52%, rgba(255,255,255,0.26) 63%, rgba(0,0,0,0.27) 74%, rgba(255,255,255,0.30) 100%);\n    }\n  }\n\n  &.real-circular {\n    &::before {\n      background: radial-gradient(50% 36%, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.24) 11%, rgba(0,0,0,0.55) 17%, rgba(255,255,255,0.26) 22%, rgba(0,0,0,0.17) 27%, rgba(255,255,255,0.28) 31%, rgba(255,255,255,0.00) 37%) center calc(50% - 8px) / 600% 600%,\n                  radial-gradient(50% 123%, rgba(255,255,255,0.30) 25%, rgba(0,0,0,0.24) 48%, rgba(0,0,0,0.55) 61%, rgba(255,255,255,0.26) 72%, rgba(0,0,0,0.17) 80%, rgba(255,255,255,0.28) 88%, rgba(255,255,255,0.30) 100%) center calc(50% - 8px) / 600% 600%;\n    }\n  }\n\n  img {\n    display: block;\n  }\n}\n</style>\n",".flag {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n}\n.flag.size-s {\n  width: 16px;\n  height: 12px;\n}\n.flag.size-s.dropshadow {\n  box-shadow: 0 0 1px 0.5px rgba(0, 0, 0, 0.1);\n}\n.flag.size-s.border-radius {\n  border-radius: 1px;\n}\n.flag.size-m {\n  width: 20px;\n  height: 15px;\n}\n.flag.size-m.dropshadow {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n.flag.size-m.border-radius {\n  border-radius: 1.5px;\n}\n.flag.size-l {\n  width: 32px;\n  height: 24px;\n}\n.flag.size-l.dropshadow {\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.flag.size-l.border-radius {\n  border-radius: 2px;\n}\n.flag::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  mix-blend-mode: overlay;\n}\n.flag.border::before {\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  mix-blend-mode: overlay;\n}\n.flag.border-radius::before {\n  border-radius: 1px;\n}\n.flag.top-down::before {\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 2%, rgba(255, 255, 255, 0.7) 100%);\n}\n.flag.real-linear::before {\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.2) 0%, rgba(39, 39, 39, 0.22) 11%, rgba(255, 255, 255, 0.3) 27%, rgba(0, 0, 0, 0.24) 41%, rgba(0, 0, 0, 0.55) 52%, rgba(255, 255, 255, 0.26) 63%, rgba(0, 0, 0, 0.27) 74%, rgba(255, 255, 255, 0.3) 100%);\n}\n.flag.real-circular::before {\n  background: radial-gradient(50% 36%, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.24) 11%, rgba(0, 0, 0, 0.55) 17%, rgba(255, 255, 255, 0.26) 22%, rgba(0, 0, 0, 0.17) 27%, rgba(255, 255, 255, 0.28) 31%, rgba(255, 255, 255, 0) 37%) center calc(50% - 8px)/600% 600%, radial-gradient(50% 123%, rgba(255, 255, 255, 0.3) 25%, rgba(0, 0, 0, 0.24) 48%, rgba(0, 0, 0, 0.55) 61%, rgba(255, 255, 255, 0.26) 72%, rgba(0, 0, 0, 0.17) 80%, rgba(255, 255, 255, 0.28) 88%, rgba(255, 255, 255, 0.3) 100%) center calc(50% - 8px)/600% 600%;\n}\n.flag img {\n  display: block;\n}\n\n/*# sourceMappingURL=Flag.vue.map */"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = "data-v-f967d066";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var Flag = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      browser,
      undefined
    );

  var main = {
    install: function install(Vue, options) {
      Vue.component(options.name || 'vue-flag-pack', Flag);
    }
  };

  exports.Flag = Flag;
  exports.default = main;

  return exports;

}({}, flagPackCore));

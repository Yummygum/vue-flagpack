import Flag from './Flag.vue'


export { Flag }

export default {
  install: function install(Vue, options) {
    Vue.component(options.name || 'vue-flag-pack', Flag)
  }
}

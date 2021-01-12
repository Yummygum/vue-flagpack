import Flag from './Flag.vue'

module.exports = {
  install: function install(Vue, options) {
    Vue.component(options.name || 'vue-flagpack', Flag)
  }
}

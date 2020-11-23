import Flag from './Flag.vue'

modue.exports = {
  install: function install(Vue, options) {
    Vue.component(options.name || 'vue-flag-pack', Flag)
  }
}

import Flag from './Flag.vue'
import NL from './NL.vue'

module.exports = Flag
module.exports.install = function install(Vue, options) {
    Vue.component(options.name || 'vue-flagpack', Flag)
  }
module.exports.Flag = Flag

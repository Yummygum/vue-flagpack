import type from 'vue'
import Flag from './Flag.vue'

export default {
  install: (app: type.App, options?: any) => {
    app.component(options.name || 'vue-flagpack', Flag)
  }
}

export {Flag}

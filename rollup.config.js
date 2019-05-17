import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'

export default {
  input: 'src/main.js',
  plugins: [
    commonjs(),
    VuePlugin()
  ],
  output: {
    file: 'dist/vue-flag-rollup.cjs.js',
    format: 'cjs'
  }
}

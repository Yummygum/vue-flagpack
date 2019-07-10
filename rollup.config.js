import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'

export default {
  input: 'src/main.js',
  externals: ['vue', 'flag-pack-core'],
  plugins: [
    commonjs(),
    VuePlugin()
  ],
  output: [
    {
      file: 'dist/vue-flag-rollup.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/vue-flag-rollup.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/vue-flag-rollup.iife.js',
      format: 'iife',
      name: 'Flag'
    }
  ]
}

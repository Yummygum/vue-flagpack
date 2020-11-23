import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/main.js',
  externals: ['vue', 'flagpack-core'],
  plugins: [
    commonjs(),
    VuePlugin(),
    (process.env.NODE_ENV === 'production' && terser())
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

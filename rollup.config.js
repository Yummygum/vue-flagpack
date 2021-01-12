import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'src/main.js',
  plugins: [
    commonjs(),
    VuePlugin(),
    isProduction && (import('rollup-plugin-terser')).terser()
  ],
  external: ['vue', 'flagpack-core'],
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
      name: 'Flag',
      globals: {
        vue: 'Vue',
        'flagpack-core': 'flagpackCore'
      }
    }
  ]
}

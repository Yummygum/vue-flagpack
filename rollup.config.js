import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'

const isProduction = process.env.NODE_ENV === 'production'

const plugins = [
  commonjs(),
  VuePlugin()
]

if (isProduction) {
  plugins.push(terser())
}

export default {
  input: 'src/main.js',
  plugins,
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

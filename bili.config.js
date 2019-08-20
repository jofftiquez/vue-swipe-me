/** @type {import('bili').Config} */
module.exports = {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    moduleName: 'vue-swipe-me',
    format: ['cjs', 'es', 'umd'],
    target: 'node'
  },
  exports: 'named',
  plugins: {
    vue: true
  }
}
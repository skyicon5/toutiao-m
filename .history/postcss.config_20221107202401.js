module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue({ file }) {
        return 37.5
      },
      propList: ['*']
    }
  }
}

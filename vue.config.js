module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ServiceSynergy/' : '/',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/variables.scss";`,
      },
    },
  },
};
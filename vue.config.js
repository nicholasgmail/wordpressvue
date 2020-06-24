module.exports = {
  filenameHashing: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/styles.module.scss";`,
      },
    },
  },
};

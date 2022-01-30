const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@btn-primary-bg": "#81CDBA",
              "@btn-primary-color": "#FFFFFF",
              "@btn-font-weight": "600",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

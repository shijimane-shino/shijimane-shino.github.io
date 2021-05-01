// eslint-disable-next-line @typescript-eslint/no-var-requires
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  env: {
    TITLE: "静寂音しの",
    DESCRIPTION:
      "UTAU 向け音源ライブラリ 「静寂音しの」 (しじまね しの) の配布サイトです。",
    AUTHOR: "東雲",
    URL: "http://shijimane-shino.github.io",
    THEME_COLOR: "#01a982",
    TRACKING_ID: "UA-165365751-1",
  },

  webpack: (config, {}) => {
    config.plugins.push(
      new ESLintPlugin({
        fix: true,
      })
    );

    return config;
  },
};

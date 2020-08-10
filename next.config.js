module.exports = {
  exportTrailingSlash: true,

  exportPathMap: async () => {
    const res = {
      "/": {
        page: "/"
      },
      "/download": {
        page: "/download"
      },
      "/credit": {
        page: "/credit"
      },
      "/terms-of-use": {
        page: "/terms-of-use"
      }
    };

    //const fs = require("fs");
    //const list = JSON.parse(fs.readFileSync(`./data/items/config.json`, "utf8"));
    //for (const itemId of list.items) {
    //  res[`/items/${itemId}`] = {
    //    page: "/items/[id]",
    //    query: {
    //      id: itemId
    //    }
    //  };
    //}

    return res;
  },

  devIndicators: {
    autoPrerender: false,
  },

  env: {
    TITLE: "静寂音しの",
    DESCRIPTION: "UTAU 向け音源ライブラリ 「静寂音しの」 (しじまね しの) の配布サイトです。",
    AUTHOR: "東雲",
    URL: "http://shijimane-shino.github.io",
    THEME_COLOR: "#01a982",
    TRACKING_ID: "UA-165365751-1",
    GRAPHCMS_URL: "https://api-ap-northeast-1.graphcms.com/v2/ckdlq6xkqme3z01za6t2fcp7m/master"
  }
}

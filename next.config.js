module.exports = {
  exportTrailingSlash: true,

  //exportPathMap: async () => {
  //  const res = {
  //    "/": {
  //      page: "/"
  //    },
  //    "/download": {
  //      page: "/download"
  //    },
  //    "/credit": {
  //      page: "/credit"
  //    },
  //    "/terms-of-use": {
  //      page: "/terms-of-use"
  //    },
  //    "/404": {
  //      page: "/404"
  //    }
  //  };


  //  const { request, gql } = require("graphql-request");
  //  const endpoint = "https://api-ap-northeast-1.graphcms.com/v2/ckdlq6xkqme3z01za6t2fcp7m/master";
  //  const query = gql`
  //    query allItems {
  //      items(orderBy: updatedAt_DESC) {
  //        id
  //        createdAt
  //        updatedAt
  //        publishedAt
  //        title
  //        category
  //        description
  //        thumbnail {
  //          url
  //        }
  //        body {
  //          html
  //          markdown
  //        }
  //        content(orderBy: updatedAt_DESC) {
  //          id
  //          createdAt
  //          updatedAt
  //          publishedAt
  //          title
  //          url
  //        }
  //      }
  //    }
  //  `;

  //  const data = await request(endpoint, query);
  //  for (const item of data.items) {
  //    res[`/items/${item.id}`] = {
  //      page: "/items/[id]",
  //      query: {
  //        id: item.id
  //      }
  //    };
  //  }

  //  return res;
  //},

  devIndicators: {
    autoPrerender: false,
  },

  env: {
    TITLE: "静寂音しの",
    DESCRIPTION: "UTAU 向け音源ライブラリ 「静寂音しの」 (しじまね しの) の配布サイトです。",
    AUTHOR: "東雲",
    URL: "http://shijimane-shino.github.io",
    THEME_COLOR: "#01a982",
    TRACKING_ID: "UA-165365751-1"
  }
}

if (!process.env.NODE_ENV) require("dotenv").config()

module.exports = {
  apiUrl: {
    wordpressRest: process.env.WORDPRESS_REST_API_URL,
  },
  defaultTestPostSlug:
    process.env.DEFAULT_TEST_POST_SLUG || "multilingual-post",
  defaultTestPostId: process.env.DEFAULT_TEST_POST_ID || "1053",
  defaultTestCommunityPostSlug:
    process.env.DEFAULT_TEST_COMMUNITY_POST_SLUG || "admin-post",
  defaultTestCommunityPostId:
    process.env.DEFAULT_TEST_COMMUNITY_POST_ID || "11366",
  defaultTestAuthorSlug: process.env.DEFAULT_TEST_AUTHOR_SLUG || "coint_qml36u",
  defaultTimezoneDesignator: "-00:00",
  useLiveTestData: process.env.USE_LIVE_TEST_DATA,
  authUsername: process.env.WORDPRESS_AUTH_USERNAME,
  authPassword: process.env.WORDPRESS_AUTH_PASSWORD,
  wordpressAuthToken: process.env.WORDPRESS_AUTH_TOKEN,
}

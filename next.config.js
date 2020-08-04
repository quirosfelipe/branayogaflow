const withCSS = require("@zeit/next-css"); // allows for the use of next css
const { processEnv } = require("next/dist/lib/load-env-config");

module.exports = withCSS({
  publicRuntimeConfig: {
    APP_NAME: "BRANA YOGA",
    API_DEVELOPMENT: "http://localhost:8000/api",
    API_PRODUCTION: "https://branayoga.herokuapp.com/api",
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: "http://localhost:3000",
    DOMAIN_PRODUCTION: "https://branayoga.herokuapp.com",
    FB_APP_ID: process.env.FB_APP_ID,
    DISQUS_SHORTNAME: process.env.DISQUS_SHORTNAME,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
});

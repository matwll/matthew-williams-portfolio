// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/matthew-williams-portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

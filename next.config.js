const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = {
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
  distDir: "out",
};

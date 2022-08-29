const nextTranslate = require("next-translate");
const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: { locales: ["en-US"], defaultLocale: "en-US" },
};

module.exports = withPlugins([nextTranslate], nextConfig);

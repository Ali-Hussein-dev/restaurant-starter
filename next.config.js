const nextTranslate = require("next-translate");
const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = (phase, config) => ({
  ...config,
  reactStrictMode: true,
  i18n: { locales: ["en-US", "de"], defaultLocale: "en-US" },
});

module.exports = withPlugins([nextTranslate], nextConfig);

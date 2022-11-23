const nextTranslate = require("next-translate");
const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = (phase, config) => ({
  ...config,
  reactStrictMode: true,
  i18n: { locales: ["en-US", "de"], defaultLocale: "en-US" },
  async redirects() {
    return [
      {
        source: "/:id",
        destination: "https://restaurants-template.vercel.app/", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
});

module.exports = withPlugins([nextTranslate], nextConfig);

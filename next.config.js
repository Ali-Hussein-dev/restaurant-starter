const nextTranslate = require("next-translate");
const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
// const nextConfig = (phase, config) => ({
//   ...config,
//   reactStrictMode: true,
//   i18n: { locales: ["en-US", "de"], defaultLocale: "en-US" },
//   redirects() {
//     return [
//       {
//         source: "/:id",
//         destination: "https://restaurants-template.vercel.app/",
//         permanent: true,
//         basePath: false,
//       },
//     ];
//   },
// });

// module.exports = withPlugins([nextTranslate], nextConfig);
module.exports = {
  reactStrictMode: true,
  i18n: { locales: ["en-US", "de"], defaultLocale: "en-US" },
  redirects() {
    return [
      {
        source: "/:id",
        destination: "https://restaurants-template.vercel.app/",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

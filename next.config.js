/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/global')],
    includePaths: [path.join(__dirname, 'styles/components')],
    prependData: `@import "@styles/global/utilities.scss";`,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'styles'),
    };

    return config;
  },
};

module.exports = nextConfig;

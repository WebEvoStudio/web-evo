/** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_SITE_URL: process.env.SITE_URL,
  },
  // pwa: {
  //   dest: 'public',
  //   runtimeCaching,
  // },
};

module.exports = nextConfig;

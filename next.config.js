const runtimeCaching = require('next-pwa/cache');
const path = require('path');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
});
const unoCSS = require('@unocss/webpack').default;
const {withContentlayer} = require('next-contentlayer');


/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  experimental: {},
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  output: 'standalone',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_SITE_URL: process.env.SITE_URL,
    NEXT_PUBLIC_MIDDLEWARE_URL: process.env.MIDDLEWARE_URL,
  },
  images: {
    domains: [
      'pic3.zhimg.com',
      'p3-juejin.byteimg.com',
      'nextjs.org',
      'developers-center.oss-cn-beijing.aliyuncs.com',
      'angular.io',
    ],
  },
  webpack: (config) => {
    config.cache = false;
    config.plugins.push(
        unoCSS(),
    );
    return config;
  },
};
const config = withPWA(withContentlayer(nextConfig));
module.exports = config;

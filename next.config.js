const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const unoCSS = require('@unocss/webpack').default;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
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

module.exports = withBundleAnalyzer(withPWA(nextConfig));

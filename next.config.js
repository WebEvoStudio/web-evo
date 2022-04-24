/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const path = require('path');
const nextConfig = withPWA({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_SITE_URL: process.env.SITE_URL,
    NEXT_PUBLIC_MIDDLEWARE_URL: process.env.MIDDLEWARE_URL,
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
  images: {
    domains: ['pic3.zhimg.com', 'p3-juejin.byteimg.com', 'nextjs.org'],
  },
});

module.exports = nextConfig;

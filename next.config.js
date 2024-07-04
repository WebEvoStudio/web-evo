const {withContentlayer} = require('next-contentlayer');
const UnoCSS = require('@unocss/webpack').default
const path = require("path");
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
});
const withMDX = require('@next/mdx')()


/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  experimental: {},
  reactStrictMode: true,
  swcMinify: true,
  mdxRs: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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
  rewrites: async () => ([
    {
      source: '/weibo-cdn/:path*',
      destination: 'https://f.video.weibocdn.com/:path*',
    },
  ]),
  redirects: async () => ([
    {
      source: '/',
      destination: '/articles',
      permanent: true,
    },
  ]),
  webpack: (config) => {
    config.cache = false;
    config.plugins.push(
        UnoCSS(),
    );
    return config;
  },
}

module.exports = withMDX(withPWA(withContentlayer(nextConfig)));

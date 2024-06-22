/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.web-evo.studio',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/blogs-sitemap.xml', '/portfolio', '/editor', '/blogs/publish', '/search', '/dashboard*'],
};

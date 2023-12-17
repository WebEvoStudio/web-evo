/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://web-evo.bulv.life',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/blogs-sitemap.xml', '/portfolio', '/editor', '/blogs/publish', '/search', '/dashboard*'],
};

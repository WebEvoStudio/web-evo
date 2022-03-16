/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://developer.bulv.life',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml', '/about', '/portfolio', '/contact', '/editor', '/blogs/publish'],
};

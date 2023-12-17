import {getServerSideSitemap, ISitemapField} from 'next-sitemap';

/**
 * Blogs Route
 * @constructor
 */
export async function GET() {
  const fields: ISitemapField[] = [];
  // const host = process.env.NEXT_PUBLIC_SITE_URL;
  // const url = `${process.env.NEXT_PUBLIC_MIDDLEWARE_URL}blogs`;
  // const response = await (await fetch(url, {cache: 'no-cache'})).json();
  // fields.push(...response.map((it: any) => ({
  //   loc: it.pathName ? `${host}/blogs/${it.pathName}` : `${host}/blogs/${it['_id']}`,
  //   lastmod: it['updatedAt'],
  //   changefreq: 'daily',
  //   priority: 0.7,
  // })));
  return getServerSideSitemap(fields);
}

import {getServerSideSitemapIndex} from 'next-sitemap';

/**
 * Blogs Route
 * @constructor
 */
export async function GET() {
  const host = process.env.NEXT_PUBLIC_SITE_URL;
  const url = `${process.env.NEXT_PUBLIC_MIDDLEWARE_URL}blogs`;
  const response = await (await fetch(url)).json();
  const blogUrls = response.map((it: any) => `${host}/blogs/${it['_id']}`);
  return getServerSideSitemapIndex(blogUrls);
}

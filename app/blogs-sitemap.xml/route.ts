import {getServerSideSitemap} from 'next-sitemap';
import {ISitemapField} from 'next-sitemap/dist/@types/interface';

/**
 * Blogs Route
 * @constructor
 */
export async function GET() {
  const fields: ISitemapField[] = [];
  const host = process.env.NEXT_PUBLIC_SITE_URL;
  const url = `${process.env.NEXT_PUBLIC_MIDDLEWARE_URL}blogs`;
  const response = await (await fetch(url)).json();
  fields.push(...response.map((it: any) => ({
    loc: `${host}/blogs/${it['_id']}`,
  })));
  return getServerSideSitemap(fields);
}

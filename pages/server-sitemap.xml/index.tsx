import {GetServerSideProps} from 'next';
import {getServerSideSitemap} from 'next-sitemap';
import axios from 'axios';

const SitemapIndex = () => {};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const fields: {loc: string, lastmod: string}[] = [];
  try {
    const host = 'https://web-evo.bulv.life';
    const url = `${process.env.NEXT_PUBLIC_MIDDLEWARE_URL}blogs`;
    const response = await axios.get(url);
    fields.push(...response.data.map((blog: any) => ({
      loc: `${host}/blogs/${blog['_id']}`,
      lastmod: new Date().toISOString(),
    })));
  } catch (e) {
    console.error(e);
  }
  return getServerSideSitemap(context, fields);
};
export default SitemapIndex;

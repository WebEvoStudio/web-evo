import {GetServerSideProps} from "next";
import {getServerSideSitemap} from "next-sitemap";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const fields: {loc: string, lastmod: string}[] = [];
    const host = "http://developer.bulv.life";
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/blogs`;
    const response =  await axios.get(url);
    console.log(response.data);
    fields.push(...response.data.map((blog: any) => ({
        loc: `${host}/blogs/${blog['_id']}`,
        lastmod: new Date().toISOString(),
    })));
    return getServerSideSitemap(context, fields);
};
export default function SitemapIndex() {}

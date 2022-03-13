import {GetServerSideProps} from "next";
import {getServerSideSitemap} from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const fields: {loc: string, lastmod: string}[] = [];
    const blogs: any[] = require("../../src/assets/data/blog.json");
    const host = "http://developer.bulv.life";
    fields.push(...blogs.map((blog) => ({
        loc: `${host}/blogs/${blog.id}`,
        lastmod: new Date().toISOString(),
    })));
    return getServerSideSitemap(context, fields);
};
export default function SitemapIndex() {}

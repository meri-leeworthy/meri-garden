import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { readFileSync } from "fs";
import path from "path";
import { postFilePaths, POSTS_PATH } from "lib/mdxUtils";
import matter from "gray-matter";
import { generateRSSFeed } from "lib/build-rss-feed";

export interface Post {
  content?: string;
  data: {
    title: string;
    isPublished: boolean;
    publishDate: string;
  };
  slug: string;
}

type Props = {
  posts: Post[];
};

export const getDate = (date: string | null) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = postFilePaths.map((filePath) => {
    const source = readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);
    const slug = filePath.slice(0, -4);
    return {
      content,
      data,
      slug,
    };
  });

  generateRSSFeed(posts as Post[]);

  return { props: { posts } };
};

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center w-screen h-screen">
      <Head>
        <title>blog - meri.garden</title>
        <meta name="description" content="Meri Leeworthy as writer." />
      </Head>
      <header>
        <h1 className="font-mono text-6xl">meri blog</h1>
      </header>
      <main className="flex flex-col justify-start p-12 space-y-8">
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={`/${post.slug}`}>
              <a className="">
                <article className="flex max-w-xl space-x-6">
                  <div className="flex flex-col items-end justify-center flex-shrink-0 w-32">
                    <h2 className="font-mono text-2xl text-right">
                      {post.data.title}
                    </h2>
                    <time>{getDate(post.data.publishDate)}</time>
                  </div>
                  <p className="max-w-2xl mt-2 ">
                    {post.content?.slice(0, 200) +
                      (post.content && post.content.length > 200 ? "..." : "")}
                  </p>
                </article>
              </a>
            </Link>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;

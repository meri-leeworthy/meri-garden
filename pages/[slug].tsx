import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Back } from "components/Back";
import { postFilePaths, POSTS_PATH } from "lib/mdxUtils";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, getDate } from "./blog";
import BackButton from "components/BackButton";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: postFilePaths.map((filePath) => ({
      params: { slug: filePath.slice(0, -4) },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug as string) || "";
  const source = readFileSync(path.join(POSTS_PATH, slug + ".mdx"));

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return { props: { post: { data, slug, source: mdxSource } } };
};

type Props = {
  post: Post & { source: MDXRemoteSerializeResult };
};

const Blog: NextPage<Props> = ({ post }: Props) => {
  const components = {};

  return (
    <div className="flex flex-col items-center h-screen max-w-screen-xl">
      <Head>
        <title>blog - meri.garden</title>
        <meta name="description" content="Meri Leeworthy as writer." />
      </Head>
      <header className="px-2 mt-20 space-y-2">
        <BackButton />
        <h1 className="max-w-4xl pt-20 pb-12 font-serif text-3xl xl:text-6xl">
          {post.data.title}{" "}
          <time className="px-4 py-1 relative bottom-2  text-xl rounded-[100%] bg-green-300 dark:bg-blue-600 font-mono">
            {getDate(post.data.publishDate)}
          </time>
        </h1>

        <div className="relative w-full aspect-video">
          <Image
            alt={post.data.alt}
            src={`/images/${post.data.image}`}
            layout="fill"
          />
        </div>
      </header>
      <main className="p-12 xl:w-1/2">
        <article className="prose lg:prose-xl document dark:prose-invert">
          <MDXRemote {...post.source} components={components} />
        </article>
        <Back />
      </main>
    </div>
  );
};

export default Blog;

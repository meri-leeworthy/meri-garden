import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { readFileSync } from "fs";
import path from "path";
import { postFilePaths, POSTS_PATH } from "lib/mdxUtils";
import matter from "gray-matter";
import { useEffect } from "react";
import Image from "next/image";
import { Footer } from "components/Footer";

export interface Post {
  content?: string;
  data: {
    title: string;
    isPublished: boolean;
    publishDate: string;
    alt: string;
    image: string;
    tags: string[];
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

  return { props: { posts } };
};

const renderPosts = (posts: Post[], tag: string) => {
  return posts
    .filter((post) => post.data.tags?.includes(tag))
    .map((post) => {
      return (
        <Link href={`/${post.slug}`} key={post.slug}>
          <a>
            <article className="post-card">
              <div className="relative">
                <div className="relative aspect-[16/9] w-40 xl:w-96 2xl:w-[35rem]">
                  <Image
                    src={`/images/${post.data.image}`}
                    alt={post.data.alt}
                    layout="fill"
                  />
                </div>
                <h3>{post.data.title}</h3>
              </div>
              <p>{post.content?.slice(0, 180)}...</p>
            </article>
          </a>
        </Link>
      );
    });
};

const Blog: NextPage<Props> = ({ posts }) => {
  useEffect(() => {
    if (!window || !document) return;
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  });

  return (
    <div className="projects">
      <Head>
        <title>projects - meri.garden</title>
        <meta name="description" content="Meri Leeworthy as writer." />
      </Head>

      <header className="flex items-center w-screen p-20 border-b-2 border-dashed h-[80vh] shrink-0 border-stone-500 dark:border-stone-200">
        <Link href="/">
          <a className="text-4xl absolute p-4 border-2 border-transparent rounded-[100%] hover:border-black dark:hover:border-stone-200 top-12 left-12">
            &larr; back
          </a>
        </Link>
        <h1 className="text-[9rem] 2xl:text-[12rem] font-serif underline decoration-pink-300 underline-offset-8">
          projects
        </h1>
      </header>

      <section className="">
        <h2 className="">radical directory</h2>
        <div className="project-description">
          <p>
            The goal of Radical Directory is to build a community-run media
            platform for social and environmental justice activism.
          </p>
          <p>
            I got involved in May 2020 and took on the role of web developer.
            Since then I have been working to create an incredibly intuitive
            content creation experience for activists to share their projects,
            campaigns and events with each other and the world.
          </p>
          <p>
            In the process I have become experienced programming for a modern
            tech stack, particularly using React, Next.js, Typescript, GraphQL,
            Apollo, Prisma and Postgres.
          </p>
        </div>
        <div className="posts-container">
          {renderPosts(posts, "radical-directory")}
        </div>
      </section>

      <section className="">
        <h2 className="">freelance web design</h2>
        <div className="project-description">
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            vero saepe vitae blanditiis porro asperiores numquam? Odio earum
            praesentium, facilis dolores quo voluptatem qui id. Molestias alias
            quod veniam iusto.
          </p>
        </div>
        <div className="posts-container">{renderPosts(posts, "freelance")}</div>
      </section>

      <section className="">
        <h2 className="font-serif text-8xl">antidote biomedical</h2>
        <div className="project-description">
          <p className="text-4xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            vero saepe vitae blanditiis porro asperiores numquam? Odio earum
            praesentium, facilis dolores quo voluptatem qui id. Molestias alias
            quod veniam iusto.
          </p>
        </div>
      </section>

      <section className="">
        <h2 className="font-serif text-8xl">paradisiac</h2>
        <div className="project-description">
          <p className="text-4xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            vero saepe vitae blanditiis porro asperiores numquam? Odio earum
            praesentium, facilis dolores quo voluptatem qui id. Molestias alias
            quod veniam iusto.
          </p>
        </div>
      </section>

      {/* <main className="flex flex-col p-12 space-y-8">
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={`/${post.slug}`}>
              <a className="">
                <article className="flex flex-col max-w-xl space-x-6">
                  <div className="flex justify-between">
                    <h2 className="font-mono text-2xl">{post.data.title}</h2>
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
      </main> */}
      <Footer />
    </div>
  );
};

export default Blog;

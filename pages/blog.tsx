import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "lib/apollo-client";

const GET_POSTS = gql`
  query {
    posts {
      title
      slug
      snippet
      publishDate
      author {
        name
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data, error } = await client.query({
      query: GET_POSTS
    });
    // error -> 404 (rather than just breaking)
    if (!data || error) return { notFound: true };
    return {
      props: {
        // return modified data
        posts: data.posts
      },
      revalidate: 10
    };
  } catch {
    // different kind of error? -> 404
    return { notFound: true };
  }
};

type Props = {
  posts: {
    title: string;
    slug: string;
    publishDate: string | null;
    author: {
      name: string;
    };
    snippet: string;
  }[];
};

const Blog: NextPage<Props> = ({ posts }: Props) => {
  const getDate = (date: string | null) => {
    if (!date) return "";
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-center w-screen h-screen">
      <Head>
        <title>blog - meri.garden</title>
        <meta name="description" content="Meri Leeworthy as writer." />
      </Head>
      <header>
        <h1 className="font-mono text-6xl">meri blog</h1>
      </header>
      <main className="p-12">
        {posts.map((post) => (
          <Link key={post.slug} href={`/${post.slug}`}>
            <a>
              <article key={post.slug} className="flex max-w-xl space-x-6">
                <div className="flex flex-col items-end justify-center">
                  <h2 className="font-mono text-2xl text-right">
                    {post.title}
                  </h2>
                  <time>{getDate(post.publishDate)}</time>
                </div>
                <p className="max-w-2xl mt-2 ">{post.snippet}</p>
              </article>
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Blog;

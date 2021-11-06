import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "lib/apollo-client";
import {
  DocumentRenderer,
  DocumentRendererProps
} from "@keystone-next/document-renderer";
import { Back } from "components/Back";

interface Post {
  slug: string;
}

const GET_POSTS = gql`
  query {
    posts {
      slug
    }
  }
`;

const GET_PAGE = gql`
  query ($slug: String) {
    post(where: { slug: $slug }) {
      title
      content {
        document
      }
    }
  }
`;

export const getStaticPaths: GetStaticPaths = async (params) => {
  const { data, error } = await client.query({
    query: GET_POSTS
  });

  return {
    paths: data.posts.map((post: Post) => ({ params: { slug: post.slug } })),
    // static generate these post pages at build time
    // if the page wasn't pre-generated, force the user to wait for the server to generate it
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data, error } = await client.query({
      query: GET_PAGE,
      variables: {
        // plug the route into the query
        slug: params?.slug
      }
    });
    // error -> 404 (rather than just breaking)
    if (!data || error) return { notFound: true };
    console.log(data);
    return {
      props: {
        post: data.post
      }
    };
  } catch {
    // different kind of error? -> 404
    return { notFound: true };
  }
};

type Props = {
  post: {
    title: string;
    content: DocumentRendererProps;
    publishDate: string | null;
  };
};

const Blog: NextPage<Props> = ({ post }: Props) => {
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
        <h1 className="font-mono text-6xl">{post.title}</h1>
        <time>{getDate(post.publishDate)}</time>
      </header>
      <main className="p-12">
        <article className="document">
          <DocumentRenderer document={post.content.document} />
        </article>
        <Back />
      </main>
    </div>
  );
};

export default Blog;

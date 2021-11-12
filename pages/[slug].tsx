import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "lib/apollo-client";
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-next/document-renderer";
import { Back } from "components/Back";

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
      publishDate
      content {
        document(hydrateRelationships: true)
      }
    }
  }
`;

const componentBlocks = {
  cloudinaryImage: ({ image }: any) => {
    const data = image?.data;
    if (!image) return <div>No Image Selected</div>;

    //replace with Next Image if I can get image size from API
    return (
      <div className="relative max-w-xl max-h-full min-w-full">
        <img src={data?.image?.publicUrlTransformed} alt={data?.description} />
      </div>
    );
  },
};

export const getStaticPaths: GetStaticPaths = async (params) => {
  const { data, error } = await client.query({
    query: GET_POSTS,
  });

  return {
    paths: data.posts.map((post: { slug: string }) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data, error } = await client.query({
      query: GET_PAGE,
      variables: {
        // plug the route into the query
        slug: params?.slug,
      },
    });
    // error -> 404 (rather than just breaking)
    if (!data || error) return { notFound: true };
    console.log(data);
    return {
      props: {
        post: data.post,
      },
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
    <div className="flex flex-col items-center h-screen max-w-screen-xl">
      <Head>
        <title>blog - meri.garden</title>
        <meta name="description" content="Meri Leeworthy as writer." />
      </Head>
      <header className="mt-20 space-y-2">
        <h1 className="max-w-4xl font-mono px-2 text-3xl xl:text-6xl">
          {post.title}
        </h1>
        <time>{getDate(post.publishDate)}</time>
      </header>
      <main className="p-12 xl:w-1/2">
        <article className="document">
          <DocumentRenderer
            document={post.content.document}
            componentBlocks={componentBlocks}
          />
        </article>
        <Back />
      </main>
    </div>
  );
};

export default Blog;

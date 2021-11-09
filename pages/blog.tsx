import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "lib/apollo-client";
import { Feed } from "feed";
import { writeFileSync } from "fs";

interface Post {
  title: string;
  slug: string;
  publishDate: string | null;
  author: {
    name: string;
  };
  plaintext: string;
}

type Props = {
  posts: Post[];
};

const GET_POSTS = gql`
  query {
    posts {
      title
      slug
      plaintext
      publishDate
      author {
        name
      }
    }
  }
`;

const generateRSSFeed = (posts: Post[]) => {
  const baseUrl = "https://meri.garden";
  const author = {
    name: "Meri Leeworthy",
    email: "doesntwork@meri.garden",
    link: "https://meri.garden"
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: "Writing by Meri Leeworthy",
    description: "Programming, art, politics, parenting/domestic work.",
    id: baseUrl,
    copyright: "Property is theft 2021, Meri Leeworthy",
    link: baseUrl,
    language: "en",
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`
    },
    author
  });

  // Add each article to the feed
  posts.forEach((post) => {
    const { plaintext, slug, publishDate, title } = post;
    const url = `${baseUrl}/${slug}`;
    const date = publishDate || "2021-11-02T00:38:00.000Z";

    feed.addItem({
      title,
      id: url,
      link: url,
      content: plaintext,
      author: [author],
      date: new Date(date)
    });
  });

  // Write the RSS output to a public file, making it
  // accessible at meri.garden/rss.xml
  writeFileSync("public/rss.xml", feed.rss2());
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data, error } = await client.query({
      query: GET_POSTS
    });
    // error -> 404 (rather than just breaking)
    if (!data || error) {
      console.log("blahhhh");
      return { notFound: true };
    }

    generateRSSFeed(data.posts);

    return {
      props: {
        posts: data.posts
      }
      // revalidate: 10
    };
  } catch {
    // different kind of error? -> 404
    console.log("bleeeh??");
    return { notFound: true };
  }
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
      <main className="flex flex-col justify-start p-12 space-y-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/${post.slug}`}>
            <a className="">
              <article className="flex max-w-xl space-x-6">
                <div className="flex flex-col items-end justify-center flex-shrink-0 w-32">
                  <h2 className="font-mono text-2xl text-right">
                    {post.title}
                  </h2>
                  <time>{getDate(post.publishDate)}</time>
                </div>
                <p className="max-w-2xl mt-2 ">
                  {post.plaintext.slice(0, 200) +
                    (post.plaintext.length > 200 ? "..." : "")}
                </p>
              </article>
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Blog;

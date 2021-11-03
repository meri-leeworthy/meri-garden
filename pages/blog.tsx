import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>blog - meri.garden</title>
        <meta name="description" content="Meri Leeworthy as writer." />
      </Head>
      <main className="flex flex-col flex-wrap items-center justify-center w-screen h-screen">
        <h2 className="font-mono text-6xl">blog</h2>
        <p className="max-w-2xl mt-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          ipsum asperiores nihil quia blanditiis rerum illo? Excepturi atque
          nulla vitae in, nostrum quasi at neque facere, accusamus provident
          sapiente minima?
        </p>
      </main>
    </div>
  );
};

export default Blog;

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>meri.garden</title>
        <meta name="description" content="Meri Leeworthy, internet edition." />
      </Head>
      <main className="flex items-center justify-center w-screen h-screen">
        <Link href="blog">
          <a>
            <h1 className="text-5xl font-bold sm:text-7xl md:text-8xl lg:text-9xl font-title">
              meri.garden
            </h1>
          </a>
        </Link>
      </main>
    </div>
  );
};

export default Home;

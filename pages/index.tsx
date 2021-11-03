import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>meri.garden</title>
        <meta name="description" content="Meri Leeworthy, internet edition." />
      </Head>
      <main className="flex items-center justify-center w-screen h-screen">
        <h1 className="font-bold text-9xl font-title">meri.garden</h1>
      </main>
    </div>
  );
};

export default Home;

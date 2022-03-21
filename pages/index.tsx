import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import meriPic from "public/images/meri.jpg";

const Home: NextPage = () => {
  const viewportGrid = useRef<HTMLDivElement>(null);

  // //set scroll position to the central box of the 9x9 grid of viewport-boxes
  // const scrollReset = () =>
  //   viewportGrid.current &&
  //   viewportGrid.current.scrollTo(window.innerWidth, window.innerHeight);

  // //scrolling both X and Y is only permitted if scroll position is on the central viewport-box
  // const onScroll = useCallback(() => {
  //   setScrollable(
  //     viewportGrid.current?.scrollTop !== window.innerHeight &&
  //       window.innerWidth > 640
  //       ? "Y"
  //       : viewportGrid.current?.scrollLeft !== window.innerWidth ||
  //         window.innerWidth < 640
  //       ? "X"
  //       : "XY"
  //   );
  //   if (
  //     viewportGrid.current?.scrollTop !== window.innerHeight &&
  //     viewportGrid.current?.scrollLeft !== window.innerWidth
  //   ) {
  //     scrollReset();
  //   }
  // }, []);

  // useEffect(() => {
  //   scrollReset();

  //   viewportGrid.current &&
  //     viewportGrid.current.addEventListener("scroll", onScroll);
  // }, [onScroll]);

  // const [scrollable, setScrollable] = useState<ScrollDirection>("XY");

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
    <div className="viewport-container">
      <Head>
        <title>meri.garden</title>
        <meta name="description" content="Meri Leeworthy, internet edition." />
        <meta
          name="viewport"
          content="viewport-fit=auto, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <main className="swipe-container" ref={viewportGrid}>
        <section className="swipe-card-fixed">
          <div className="absolute -mt-36 sm:mt-0 sm:relative -z-10">
            <div className="aspect-[3/4] w-40 md:w-60 2xl:w-96 relative">
              <Image
                src={meriPic}
                alt="Selfie of a woman in a green dress sitting in a desk chair and looking slightly upwards"
                layout="fill"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="relative flex flex-col items-start p-2 bg-white bg-opacity-75 dark:bg-stone-800 dark:bg-opacity-60 top-16 sm:top-0">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem]">
              Meri Leeworthy
            </h1>
            <p className="mt-4 text-2xl font-bold md:mt-8 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              🙋🏻‍♀️ Hire me! I am looking for work as a{" "}
              <strong className="font-bold text-bg-green">
                frontend web developer.
              </strong>
            </p>
            <p className="mt-4 text-xl md:mt-10 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-stone-700 dark:text-stone-300">
              <Link href="">
                <a className="text-purple-700 dark:text-pink-300">CV</a>
              </Link>{" "}
              •{" "}
              <Link href="https://github.com/meri-leeworthy">
                <a className="text-pink-700 dark:text-orange-300">Github</a>
              </Link>{" "}
              • Swipe right for more about me.
            </p>
          </div>
          <span>&rarr;</span>
        </section>

        <section className="left-0 sm:sticky swipe-card">
          <h2>about me</h2>
          <div className="items-start justify-start content-list">
            <div className="list-1">
              <ul>
                <li>📚 self-taught programmer</li>
                <li>🔮 background in art, design & media</li>
                <li>🏳️‍⚧️ queer trans woman</li>
                <li>🏕 love camping & nature</li>
              </ul>
            </div>
            {/* <span>&rarr;</span> */}
          </div>
        </section>

        <section className="left-0 sm:sticky swipe-card overlap-card">
          <div className="items-center justify-end content-list">
            <div className="list-2">
              <ul className="list-[square] list-inside w-56 md:w-64 lg:w-80 2xl:w-[36rem] columns-2">
                <li>Javascript</li>
                <li>
                  <a href="https://www.typescriptlang.org">Typescript</a>
                </li>
                <li>CSS</li>
                <li>
                  <a href="https://graphql.org">GraphQL</a>
                </li>
                <li>
                  <a href="https://reactjs.org">React</a>
                </li>
                <li>
                  <a href="https://nextjs.org">Next.js</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com">Tailwind</a>
                </li>
                <li>
                  <a href="https://www.apollographql.com">Apollo</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="swipe-card overlap-card">
          <div className="items-center justify-center sm:items-end bottom-20 right-16 content-list">
            <div className="list-3">
              <ul>
                <li>
                  <Link href="/projects">
                    <a>Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Writing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <h3>Beginner</h3>
            <ul>
              <li>Docker</li>
              <li>Linux</li>
              <li>Prisma</li>
              <li>Postgres</li>
              <li>Serverless</li>
              <li>Webpack</li>
            </ul> */}
        {/* <section className="swipe-card">
          <div className="content">
            <h2>Radical Directory</h2>
            
            <span>&rarr;</span>
          </div>
        </section>

                    {/* <p>
              When I was about 14, I started making basic websites for small
              businesses.
            </p>
            <p>
              They were really bad. But they exposed me to technologies like
              HTML, CSS, and basic Javascript, jQuery, PHP and Wordpress.
            </p>
            <p>
              Then I put a pause on web development to work in the arts. I spent
              time in the theatre industry as a sound and lighting technician,
              and in arts and community organisations in admin roles, as well as
              making my own work.
            </p>
            <p>
              Over time, my curiosity for coding brought me back. At the start
              of 2020, I got involved in a project called Radical Directory,
              which pulled me back into the web development world.
            </p> 

        <section className="swipe-card">
          <div className="content">
            <h2>Recurse Centre</h2>
            <p>
              In October 2021 I applied and was accepted to the Recurse Centre,
              an organisation based in New York which runs self-directed
              educational retreats for programmers.
            </p>
            <p>
              During COVID, retreats have been offered online, so despite being
              locked down in Naarm (Melbourne), Australia, I was able to
              complete a 12-week batch from November through to February 2022.
            </p>
            <p>
              During my retreat, I worked on three main projects to consolidate
              my frontend skills: build a personal website (this one), learn
              about caching and state management, and create a rich-text
              document editor for Radical Directory.
            </p>
            <p>
              I also gave presentations about my work, and spent lots of time
              pair programming and attending study groups with other Recursers.
            </p>
            <span>&rarr;</span>
          </div>
        </section> */}
        {/* <section className="flex flex-col justify-center w-screen min-w-full min-h-screen p-8 snap-start snap-always">
          <p>Contact me here.</p>
        </section> */}

        {/* <div className="pretty-background" /> */}
      </main>
      {/* <div className="inset-box"></div> */}
    </div>
  );
};

export default Home;

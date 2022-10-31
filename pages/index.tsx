import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import meriPic from "public/images/meri.jpg";

const Styles = () => <style jsx>{`
    .viewport-container {
    /* @apply border-4 border-green-400; */
    height: calc(var(--vh, 1vh) * 100);
    max-height: calc(var(--vh, 1vh) * 100);
  }

  .swipe-container {
    @apply flex w-screen h-full min-w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth;
  }

  .swipe-card-fixed {
    @apply relative flex items-center w-screen h-full min-w-full px-8 side-safe-insets 2xl:px-16 snap-start snap-always space-x-8 2xl:space-x-16;
  }

  .swipe-card {
    @apply relative z-10 flex items-end w-screen h-full max-h-full min-w-full -mr-24 sm:mr-0 snap-start snap-always;
    pointer-events: none;

    h2 {
      @apply absolute z-50 w-0 h-0 font-serif text-5xl italic text-left left-2 md:left-8 bottom-5 xl:text-6xl 2xl:text-8xl whitespace-nowrap md:text-6xl -rotate-90;
    }

    h3 {
      @apply pb-2 text-xl font-bold tracking-widest text-center uppercase;
    }

    p {
      @apply pb-4 text-lg md:text-2xl xl:text-3xl;
    }

    ul {
      @apply text-xl md:text-2xl xl:text-3xl 2xl:text-5xl space-y-4 2xl:space-y-8 text-stone-700 dark:text-white;
    }

    a {
      @apply underline underline-offset-4 hover:decoration-dashed;
    }

    .content {
      @apply h-full max-h-full my-auto columns-1 md:columns-2 xl:columns-3 overflow-y-scroll md:overflow-y-visible pt-16 px-4 pl-[4rem] sm:pl-[5rem] md:pl-[8rem] lg:pl-[12rem] md:mr-8 gap-8 mt-8 mb-5 xl:w-[80rem];
    }

    .content-list {
      @apply md:relative w-screen min-w-full h-full flex flex-col max-h-full my-auto mt-16 px-4 pl-[4rem] sm:pl-[5rem] md:pl-[8rem] lg:pl-[12rem] md:mr-8 gap-8 mb-5 xl:w-[80rem] z-10;
    }
  }

  .swipe-card.overlap-card {
    @apply sm:bg-transparent;
  }

  .text-bg-green {
    /* @apply bg-green-300 dark:bg-green-600; */
    background-image: linear-gradient(
      to bottom,
      transparent,
      transparent 20%,
      rgb(134 239 172 / 1) 17%,
      rgb(134 239 172 / 1)
    );
    .dark & {
      /* @apply bg-green-300 dark:bg-green-600; */
      background-image: linear-gradient(
        to bottom,
        transparent,
        transparent 20%,
        rgb(22 163 74 / 1) 17%,
        rgb(22 163 74 / 1)
      );
    }
  }

  .list-1 {
    @apply relative p-6 sm:p-8 md:p-12 lg:p-16 2xl:p-24 top-16;
    pointer-events: auto;
    &::before {
      @apply absolute inset-0 bg-green-300 -z-10 dark:bg-green-700;
      content: "";
      clip-path: polygon(0 30%, 40% 0%, 90% 30%, 60% 100%, 20% 100%);
      rotate: 5deg;
    }
  }

  .list-2 {
    @apply relative z-50 p-6 sm:p-8 md:p-12 lg:p-16 2xl:p-24 bottom-8;
    pointer-events: auto;
    a {
      @apply decoration-orange-400 dark:decoration-blue-800;
    }

    &::before {
      @apply absolute inset-0 bg-orange-300 -z-10 dark:bg-blue-700;
      content: "";
      clip-path: polygon(
        20% 100%,
        0 40%,
        20% 0%,
        50% 0%,
        100% 40%,
        100% 50%,
        60% 100%
      );
      rotate: -5deg;
    }
  }

  .list-3 {
    @apply relative p-8 text-center md:p-12 lg:p-16 2xl:p-24;
    pointer-events: auto;

    a {
      @apply decoration-pink-400 dark:decoration-pink-800;
    }

    &::before {
      @apply absolute inset-0 bg-pink-300 -z-10 dark:bg-pink-600;
      content: "";
      clip-path: polygon(0 30%, 40% 10%, 100% 30%, 90% 80%, 60% 100%, 20% 80%);
      rotate: 5deg;
    }
  }
`}</style>

const Home: NextPage = () => {
  //find viewport height despite transparent/changing  url bars on phones
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

  const viewport = useRef<HTMLDivElement>(null);

  // const scrollToRight = () => {
  //   viewport.
  // }

  return (
    <div className="viewport-container" ref={viewport}>
      <Head>
        <title>meri.garden</title>
        <meta name="description" content="Meri Leeworthy, internet edition." />
        <meta
          name="viewport"
          content="viewport-fit=auto, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <main className="swipe-container">
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
              <Link href="/resume.pdf">
                <a className="text-purple-700 dark:text-pink-300">Resume</a>
              </Link>{" "}
              •{" "}
              <Link href="https://github.com/meri-leeworthy">
                <a className="text-pink-700 dark:text-orange-300">Github</a>
              </Link>{" "}
              • Swipe right for more about me
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
      <Styles />
    </div>
  );
};


export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";

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

  return (
    <div>
      <Head>
        <title>meri.garden</title>
        <meta name="description" content="Meri Leeworthy, internet edition." />
      </Head>
      <main className="swipe-container" ref={viewportGrid}>
        <section className="flex flex-col justify-center w-screen min-w-full min-h-screen p-8 snap-start snap-always">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl">
            Meri Leeworthy
          </h1>
          <p className="mt-8 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
            Hire me! I am looking for work as a{" "}
            <strong className="font-bold bg-pink-300 dark:bg-pink-600">
              frontend web developer.
            </strong>
          </p>
          <p className="mt-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-neutral-700 dark:text-neutral-300">
            Swipe right for more about me.
          </p>
          <span>&rarr;</span>
        </section>

        <section className="swipe-card">
          <div className="content">
            <h2>About</h2>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>CSS</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Apollo</li>
            </ul>
            <p>I am a self-taught programmer since high school.</p>
            <p>
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
            <span>&rarr;</span>
          </div>
        </section>

        <section className="swipe-card">
          <div className="content">
            <h2>Radical Directory</h2>
            <p>
              The goal of Radical Directory is to build a community-run media
              platform for social and environmental justice activism.
            </p>
            <p>
              I got involved in May 2020 and took on the role of web developer.
              Since then I have been working hard to create the highest quality
              web app possible.
            </p>
            <p>
              Our goal has been to create an incredibly intuitive content
              creation experience for activists to share their projects,
              campaigns and events with each other and the world.
            </p>
            <p>
              In the process I have become experienced programming for a modern
              tech stack, particularly using React, Next.js, Typescript,
              GraphQL, Apollo, Prisma and Postgres.
            </p>
            <span>&rarr;</span>
          </div>
        </section>

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
        </section>
        <section className="flex flex-col justify-center w-screen min-w-full min-h-screen p-8 snap-start snap-always">
          <p>Contact me here.</p>
        </section>

        {/* <div className="pretty-background" /> */}
      </main>
    </div>
  );
};

export default Home;

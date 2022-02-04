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
      <main
        className="relative flex w-screen h-screen min-w-full overflow-x-scroll snap-x snap-mandatory scroll-smooth"
        ref={viewportGrid}
      >
        <section className="flex flex-col justify-center w-screen min-w-full min-h-screen p-8 snap-start snap-always">
          <h1 className="font-serif text-5xl leading-relaxed sm:text-7xl md:text-8xl lg:text-8xl">
            Meri Leeworthy
          </h1>
          <p className="mt-8 text-3xl font-bold">
            Hire me! I am looking for work as a{" "}
            <strong className="font-bold bg-pink-300">
              frontend or full-stack developer.
            </strong>
          </p>
          <p className="mt-10 text-2xl text-neutral-700">
            Swipe right for more about me.
          </p>
          <span className="-mt-2 font-serif text-7xl">&rarr;</span>
        </section>

        <section className="swipe-card">
          <h2>About</h2>
          <div className="columns-sm max-h-[80vh] pt-16 gap-16">
            <p>I am a self-taught programmer since high school.</p>
            <p>
              When I was about 14, I started making basic websites for small
              businesses.
            </p>
            <p>
              They were really bad. But they got me exposed to technologies like
              HTML, CSS, and very basic Javascript, jQuery, PHP and Wordpress. I
              was using FTP and cPanel based hosting.
            </p>
            <p>
              Then I wanted to be an artist, so I put a pause on web development
              while I studied cinema and made music and performance art. I also
              got work in the theatre industry as a sound and lighting
              technician.
            </p>
            <p>
              Over time, my curiosity brought me back, and I started integrating
              Arduinos and Python scripts into my artistic work. This indirectly
              led to a short stint as a junior engineer at a biomedical tech
              startup working on embedded devices.
            </p>
            <p>
              At the start of 2020, I got involved in a project called Radical
              Directory, which pulled me back deep into the web development
              world.
            </p>
            <span className="-mt-2 font-serif text-7xl">&rarr;</span>
          </div>
        </section>

        <section className="swipe-card">
          <h2>Radical Directory</h2>
          <div className="columns-sm max-h-[70vh] gap-16">
            <p>
              Radical Directory is a vision for a future in which communities
              are empowered to use media to create social change.
            </p>
            <p>
              What it means in practice is building a community-run web platform
              for media relating to social and environmental justice.
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
            <p>
              Unlike startups with a rush to MVP, Radical Directory has
              prioritised slow growth and design in collaboration with
              community.
            </p>
            <span className="-mt-2 font-serif text-7xl">&rarr;</span>
          </div>
        </section>

        <section className="swipe-card">
          <h2>Recurse Centre</h2>
          <div className="columns-sm max-h-[70vh] gap-16">
            <p>
              The next stage of my web development journey has been with the
              Recurse Centre, an organisation based in New York which runs
              self-directed educational retreats to programmers seeking to get
              dramatically better at their craft.
            </p>
            <p>
              During COVID, retreats have been offered online, so despite being
              locked down in Naarm (Melbourne), Australia, I still had the
              opportunity to apply and was lucky to be accepted into a 12-week
              batch.
            </p>
            <p>
              During my retreat, I assigned myself three main projects to
              consolidate my frontend development skills: build a personal
              website (this one), learn about caching and state management, and
              create a rich-text document editor for Radical Directory.
            </p>
            <p>
              Besides achieving these goals, I also gave presentations about my
              work, and spent lots of time pair programming and attending study
              groups with other Recursers.
            </p>
          </div>
        </section>

        {/* <div className="pretty-background" /> */}
      </main>
    </div>
  );
};

export default Home;

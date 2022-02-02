import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";

const Home: NextPage = () => {
  const viewportGrid = useRef<HTMLDivElement>(null);
  type ScrollDirection = "X" | "Y" | "XY";

  //set scroll position to the central box of the 9x9 grid of viewport-boxes
  const scrollReset = () =>
    viewportGrid.current &&
    viewportGrid.current.scrollTo(window.innerWidth, window.innerHeight);

  //scrolling both X and Y is only permitted if scroll position is on the central viewport-box
  const onScroll = useCallback(() => {
    setScrollable(
      viewportGrid.current?.scrollTop !== window.innerHeight
        ? "Y"
        : viewportGrid.current?.scrollLeft !== window.innerWidth
        ? "X"
        : "XY"
    );
    if (
      viewportGrid.current?.scrollTop !== window.innerHeight &&
      viewportGrid.current?.scrollLeft !== window.innerWidth
    ) {
      scrollReset();
    }
  }, []);

  useEffect(() => {
    scrollReset();

    viewportGrid.current &&
      viewportGrid.current.addEventListener("scroll", onScroll);
  }, [onScroll]);

  const [scrollable, setScrollable] = useState<ScrollDirection>("XY");

  return (
    <div>
      <Head>
        <title>meri.garden</title>
        <meta name="description" content="Meri Leeworthy, internet edition." />
      </Head>
      <div
        className={`w-screen relative h-screen min-w-full snap-both snap-mandatory grid-box scroll-smooth ${
          scrollable === "Y"
            ? "overflow-y-scroll overflow-x-hidden"
            : scrollable === "X"
            ? "overflow-x-scroll overflow-y-hidden"
            : "overflow-scroll"
        }`}
        ref={viewportGrid}
      >
        <article className="flex flex-col items-center justify-center w-screen min-w-full min-h-screen col-start-2 row-start-2 snap-center snap-always">
          {scrollable}
          <Link href="blog">
            <a>
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
                Meri Leeworthy
              </h1>
            </a>
          </Link>
        </article>

        <article className="flex items-center justify-center w-screen min-h-screen col-start-2 row-start-1 snap-center snap-always">
          <h2 className="font-serif text-5xl italic sm:text-7xl md:text-8xl lg:text-9xl">
            About me
          </h2>
        </article>

        <article className="flex items-center justify-center w-screen min-w-full min-h-screen col-start-1 row-start-2 snap-center snap-always">
          <h2 className="font-serif text-5xl italic sm:text-7xl md:text-8xl lg:text-9xl">
            left page
          </h2>
        </article>

        <article className="flex items-center justify-center w-screen min-w-full min-h-screen col-start-3 row-start-2 snap-center snap-always">
          <h2 className="font-serif text-5xl italic sm:text-7xl md:text-8xl lg:text-9xl">
            right page
          </h2>
        </article>

        <article className="flex items-center justify-center w-screen min-h-screen col-start-2 row-start-3 snap-center snap-always">
          <h2 className="font-serif text-5xl italic sm:text-7xl md:text-8xl lg:text-9xl">
            More stuff
          </h2>
        </article>

        <div className="pretty-background" />
      </div>
    </div>
  );
};

export default Home;

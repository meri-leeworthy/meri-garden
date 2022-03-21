export const Footer = () => {
  return (
    <footer className="w-screen px-20 py-16 text-xl font-bold xl:w-1/2 2xl:w-2/5">
      <p>
        I live and work on land sovereign to the Wurundjeri and Boon Wurrung
        peoples, who are part of the Kulin Nation. I sincerely pay respects to
        Wurundjeri and Boon Wurrung elders and culture, and acknowledge that
        sovereignty was never ceded.{" "}
        <span className="underline decoration-4 decoration-black">
          Always was,
        </span>{" "}
        <span className="underline decoration-4 decoration-yellow-400">
          always will be
        </span>{" "}
        <span className="underline decoration-4 decoration-red-600">
          Aboriginal land.
        </span>
      </p>
      <p>
        Saying sorry for colonisation isn&apos;t enough. Non-Aboriginal people
        and organisations should{" "}
        <a className="text-green-600" href="https://paytherent.net.au">
          Pay The Rent.
        </a>
      </p>
    </footer>
  );
};

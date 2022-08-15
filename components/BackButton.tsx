import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/">
      <a className="text-4xl absolute p-4 border-2 border-transparent rounded-[100%] hover:border-black dark:hover:border-stone-200 top-12 left-12">
        &larr; back
      </a>
    </Link>
  );
};

export default BackButton;

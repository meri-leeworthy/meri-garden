import { Feed } from "feed";
import { writeFileSync } from "fs";
import { Post } from "pages/blog";

export const generateRSSFeed = (posts: Post[]) => {
  const baseUrl = "https://meri.garden";
  const author = {
    name: "Meri Leeworthy",
    email: "doesntwork@meri.garden",
    link: "https://meri.garden",
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: "Writing by Meri Leeworthy",
    description: "Programming, art, politics, parenting/domestic work.",
    id: baseUrl,
    copyright: "Property is theft 2021, Meri Leeworthy",
    link: baseUrl,
    language: "en",
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
  });

  // Add each article to the feed
  posts.forEach((post) => {
    const {
      content,
      slug,
      data: { publishDate, title },
    } = post;
    const url = `${baseUrl}/${slug}`;
    const date = publishDate || "2021-11-02T00:38:00.000Z";

    feed.addItem({
      title,
      id: url,
      link: url,
      content: content,
      author: [author],
      date: new Date(date),
    });
  });

  // Write the RSS output to a public file, making it
  // accessible at meri.garden/rss.xml
  writeFileSync("public/rss.xml", feed.rss2());
};

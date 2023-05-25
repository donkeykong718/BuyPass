// utils/extractThumbnail.js
import { parse } from "node-html-parser";

export const extractThumbnail = (html) => {
  const root = parse(html);
  const metaTags = root.querySelectorAll("meta");

  console.log("The metaTags are");
  console.log(metaTags);

  for (const tag of metaTags) {
    const property = tag.getAttribute("property");
    if (property === "og:image") {
      return tag.getAttribute("content");
    }
  }

  return null;
};

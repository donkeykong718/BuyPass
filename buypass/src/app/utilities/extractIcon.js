// utils/extractIcon.js
import axios from "axios";

export const extractIcon = async (url) => {
  let domain = new URL(url);
  domain = domain.hostname.replace("www.", "");
  console.log(domain);
  try {
    const icon = await axios.get(
      `https://www.google.com/s2/favicons?domain=${domain}`
    );
  } catch (error) {
    console.log(error);
  }
  console.log("The icon is...");
  console.log(icon);
  if (icon != undefined) {
    return icon;
  } else return null;
};

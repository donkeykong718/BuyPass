// utils/extractIcon.js
import axios from "axios";

export const extractIcon = async (url) => {
  let domain = new URL(url);
  domain = domain.hostname.replace("www.", "");
  console.log(domain);
  let icon;
  try {
    icon = await axios.get(
      `https://www.google.com/s2/favicons?domain=${domain}`
    );
    console.log("The icon is...");
    console.log(icon);
  } catch (error) {
    console.log(error);
  }
  if (icon) {
    return icon;
  } else return null;
};

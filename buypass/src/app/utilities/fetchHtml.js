// utils/fetchHtml.js
import axios from "axios";

export const fetchHtml = async (url) => {
  let domain = new URL(url);
  domain = domain.hostname.replace("www.", "");
  console.log(domain);

  try {
    const response = await axios.get(
      `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching HTML: ${error}`);
    return null;
  }
};

// utils/fetchHtml.js
import axios from "axios";

export const fetchHtml = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching HTML: ${error}`);
    return null;
  }
};

import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const Key = "fz-rp7DXGIUuk8e9WTt520rt-Kv2ec4Z8Jx9-sSw_yo";

export const getImages = async (searchQuery, page = 1, perPage = 12) => {
  try {
    const images = await axios.get(`search/photos/?client_id=${Key}`, {
      params: {
        query: searchQuery,
        page,
        per_page: perPage,
        orientation: "landscape"
      },
    });
    return images.data.results;
  } catch (e) {
    console.error("Error fetching images:", e);
    throw e;
  }
};

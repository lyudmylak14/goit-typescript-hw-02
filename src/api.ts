import axios, { AxiosResponse } from "axios";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface GetImagesParams {
  searchQuery: string;
  page?: number;
  perPage?: number;
}

axios.defaults.baseURL = "https://api.unsplash.com/";
const Key = "fz-rp7DXGIUuk8e9WTt520rt-Kv2ec4Z8Jx9-sSw_yo";

export const getImages = async (
  searchQuery: string,
  page: number = 1,
  perPage: number = 12
): Promise<Image[]> => {
  try {
    const images: AxiosResponse<{ results: Image[] }> = await axios.get(
      `search/photos/?client_id=${Key}`,
      {
        params: {
          query: searchQuery,
          page,
          per_page: perPage,
          orientation: "landscape",
        },
      }
    );
    return images.data.results;
  } catch (e) {
    console.error("Error fetching images:", e);
    throw e;
  }
};

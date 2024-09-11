import axios from "axios";

export const fetchImage = async (inputValue, page) => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos?client_id=i2b3U8AMlj2uC8-LaSyMO19wsgjoJG22U9ZFROc1lKU",
    {
      params: {
        query: inputValue,
        page: page,
        per_page: 24,
      },
    }
  );

  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
};

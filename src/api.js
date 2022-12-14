import axios from "axios";

export const searchImages = async (term) => {
  const response = await axios.get(
    process.env.REACT_APP_BASE_URL,{
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
    },
    params: {
        query: term,
        page: 1,
        per_page: 30,
        order_by: 'latest',
    }}
  );

  return response.data.results;
};

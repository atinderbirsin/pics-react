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
        per_page: 10,
        order_by: 'latest',
    }}
  );

  return response.data.results;
};

export const searchImagesNextpage = async (term, page) => {
  const response = await axios.get(
    process.env.REACT_APP_BASE_URL,{
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
    },
    params: {
        query: term,
        page: page,
        per_page: 10,
        order_by: 'latest',
    }}
  );

  return response.data.results;
}

import axios from "axios";

const BASE_URL = "http://localhost:3001/api/events";

export const getAllEvents = async (currentPage) => {
  const resp = await axios.get(`${BASE_URL}?page=${currentPage}`);
  return resp.data;
};

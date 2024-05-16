import axios from "axios";
import { BASE_URL } from "../const";

axios.defaults.baseURL = BASE_URL;

export const getAllEvents = async (currentPage) => {
  const resp = await axios.get(`/events?page=${currentPage}`);
  return resp.data;
};

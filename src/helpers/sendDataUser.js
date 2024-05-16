import axios from "axios";

export const sendDataUser = async (data, eventId) => {
  try {
    await axios.post(`/registration/${eventId}`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (eventId) => {
  try {
    const resp = await axios.get(`/registration/${eventId}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";

export const sendDataUser = async (data, eventId) => {
  try {
    console.log(data);
    await axios.post(`/registration/${eventId}`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (eventId) => {
  try {
    await axios.get(`/registration/${eventId}`);
  } catch (error) {
    console.log(error);
  }
};

import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

const request = async <T>(options: AxiosRequestConfig): Promise<T> => {
  try {
    const res: AxiosResponse = await axios<T>(options);
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export default request;

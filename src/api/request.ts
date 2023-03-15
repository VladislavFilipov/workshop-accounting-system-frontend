import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

type CustomAxiosError = AxiosError<{ apierror: { message: string } }>;

export const baseURL = `${process.env.SERVER_URL}/api/v${process.env.API_VERSION}`;
// export const baseURL = `http://localhost:5000`;

const axios = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getCustomError = (error: AxiosError) => {
  try {
    const message = (error as CustomAxiosError).response?.data.apierror.message;
    if (!message) throw new Error(error.message);
    return message;
  } catch (e) {
    return error.message;
  }
};

const request = async <T>(options: AxiosRequestConfig): Promise<T> => {
  try {
    const res: AxiosResponse = await axios<T>(options);
    return res.data;
  } catch (error) {
    throw new Error(getCustomError(error as AxiosError));
  }
};

export default request;

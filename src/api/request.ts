import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

type CustomAxiosError = AxiosError<{ apierror: { message: string } }>;

const axios = Axios.create({
  baseURL: `${process.env.SERVER_URL}/api/v${process.env.API_VERSION}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const getCustomError = (error: AxiosError) => {
  try {
    return (error as CustomAxiosError).response?.data.apierror.message;
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

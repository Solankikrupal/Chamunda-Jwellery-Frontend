import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import AxiosInstance, { ResponseData } from "./axios";


//A function which takes two parameters 'URL & body' for sending post request to server.
export const AxiosPost = async <T>(
  URL: string,
  body: T
): Promise<string | AxiosResponse<any,any> & ResponseData | undefined> => {
  try {
    return await AxiosInstance.post(URL, body);
  } catch (error: unknown) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      return error?.response?.data.message;
    } else if (error instanceof Error) {
      return error.message;
    } else {
      return "An unknown error occurred";
    }
  }
};

//   A function which takes two parameters 'URL & body' for sending put request to server.
export const AxiosPut = async (
  URL: string,
  body: string
): Promise<string | AxiosResponse<any, any> | undefined> => {
  try {
    return await AxiosInstance.put(URL, body);
  } catch (error: unknown) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      return error?.response?.data.message;
    } else if (error instanceof Error) {
      return error.message;
    } else {
      return "An unknown error occurred";
    }
  }
};

// A function which takes one parameter 'URL' for sending get request to server.
export const AxiosGet = async (
  URL: string
): Promise<string | AxiosResponse<any, any> | undefined> => {
  try {
    return await AxiosInstance.get(URL);
  } catch (error: unknown) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      return error?.response?.data.message;
    } else if (error instanceof Error) {
      return error.message;
    } else {
      return "An unknown error occurred";
    }
  }
};

// /A function which takes two parameters 'URL & body' for sending delete request to server.
export const AxiosDelete = async (
  URL: string
): Promise<string | AxiosResponse<any, any> | undefined> => {
  try {
    return await AxiosInstance.delete(URL);
  } catch (error: unknown) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      return error?.response?.data.message;
    } else if (error instanceof Error) {
      return error.message;
    } else {
      return "An unknown error occurred";
    }
  }
};

//A function which takes two parameters 'URL & body' for sending delete request to server.
export const AxiosPatch = async (
  URL: string,
  body: any
): Promise<string | AxiosResponse<any, any> | undefined> => {
  try {
    return await AxiosInstance.patch(URL, body);
  } catch (error: unknown) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      return error?.response?.data.message;
    } else if (error instanceof Error) {
      return error.message;
    } else {
      return "An unknown error occurred";
    }
  }
};

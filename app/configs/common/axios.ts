import { toast } from "react-toastify";
import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// Define the response data type
export interface ResponseData {
  statusCode?: number;
  message?: string;
  data: [];
  filePath: string;
}

// Creating instance of axios by passing baseURL taken from an env file, to create method of axios.
const instance: AxiosInstance = axios.create({
  baseURL: "http://13.126.129.218:6002",
}); // TODO: add baseURL

// TODO: add the token
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sen
    config.headers["Authorization"] = `Bearer ${"Remove-this"}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && (response.status === 200 || response.status === 201)) {
      return response.data;
    } else {
      if (response && (response.status === 401 || response.status === 408)) {
        toast.error("Session Expire.");
      } else if (response && response.status >= 500) {
        toast.error("Internal Server Error.", {
          toastId: "error",
          autoClose: 2000,
        });
      } else {
        toast.error(response.data?.message ?? "Unknown error", {
          toastId: "response_data",
          autoClose: 2000,
        });
      }
      return Promise.reject(response);
    }
  },
  (error: AxiosError<ResponseData>) => {
    if (error.response?.data) {
      if (
        error.response.data.statusCode === 401 ||
        error.response.data.statusCode === 408
      ) {
        toast.error(error.response.data.message ?? "Unauthorized", {
          toastId: "nodata",
          autoClose: 1000,
        });
        setTimeout(() => {
          //   doLogout();
          window?.location?.replace("/");
        }, 1000);
      } else if (error.response.data.statusCode === 404) {
        if (!toast.isActive("nodata")) {
          toast.error(error.response.data.message ?? "Not Found", {
            toastId: "nodata",
            autoClose: 1000,
          });
        } else {
          toast.update("nodata", {
            autoClose: 2000,
            render: error.response.data.message ?? "Not Found",
            type: "error",
          });
        }
      } else {
        toast.error(error.response.data.message ?? "Unknown error", {
          toastId: "error_response",
          autoClose: 2000,
        });
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;

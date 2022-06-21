import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { EnvironmentKeysInterface } from "../models";

(async (env: EnvironmentKeysInterface) => {
  Axios.defaults.baseURL = env.REACT_APP_API_BASE_URL;
  Axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  Axios.interceptors.response.use(
    (response: AxiosResponse) => {
      if ([200, 201, 204].includes(response.status)) {
        return response;
      } else {
        return Promise.reject({
          code: response.status,
          message: response.data,
        });
      }
    },
    (error: AxiosError) => {
      let message: string;
      if (error.response!.data! && (error.response!.data! as any).message) {
        message = (error.response!.data! as any).message;
      } else {
        message = error.response?.statusText!;
      }
      return Promise.reject({
        code: error.response?.status,
        message,
      });
    }
  );
})(process.env as any);

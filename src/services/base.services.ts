import Axios, { AxiosRequestConfig } from "axios";

export abstract class BaseService {
  async post<T, Result = any>(
    path: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<Result> {
    const result: Result | any = await Axios.post(path, data, config);
    return result.data;
  }

  async get<T>(
    path: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    let parsedParams: any = {};
    if (params) {
      for (const key in params) {
        if (Array.isArray(params[key])) {
          const arrayParamsStr = params[key];
          parsedParams[key] = arrayParamsStr;
        } else if (params[key] && params[key] !== "") {
          parsedParams[key] = params[key];
        }
      }
    }
    const result: any = await Axios.get(path, {
      params: parsedParams,
      ...config,
    });

    return result.data;
  }
}

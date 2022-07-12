import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

export function request(
  method: AxiosRequestConfig["method"],
  url: AxiosRequestConfig["url"],
  data?: AxiosRequestConfig["data"],
  headers?: AxiosRequestConfig["headers"],
  responseType?: AxiosRequestConfig["responseType"]
): AxiosPromise {
  const token = JSON.parse(localStorage.getItem("token") || "");
  const accessToken = token?.accessToken || "";
  return axios({
    method,
    url,
    data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...headers,
    },
    responseType,
  });
}

import axios, { Method } from "axios";

const defaultHeaders = { "Content-Type": "application/json" };
const axiosInstance = axios.create();

export default function axiosUtils<R>(
  url: string,
  method: Method,
  body?: object,
  extraHeaders?: Record<string, unknown>
): Promise<R> {
  const options = {
    url,
    headers: extraHeaders
      ? Object.assign(defaultHeaders, extraHeaders)
      : defaultHeaders,
    method,
    data: body,
  };

  return axiosInstance.request<any, R>(options);
}

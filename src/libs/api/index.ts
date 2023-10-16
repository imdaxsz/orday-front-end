import axios from "axios";

import { ApiError, BaseError } from "../error";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 5 * 1000,
});

// Request interceptor
instance.interceptors.request.use((config) => {
  return config;
});

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // TODO: 서버 응답 오류 예외 처리
    if (error.response?.data?.["message"]) {
      return Promise.reject(
        new ApiError(error.response.data, error.response.status),
      );
    }

    if (error.message.startsWith("timeout")) {
      return Promise.reject(new BaseError("Timeout Error", "Network timeout"));
    }

    return Promise.reject(new BaseError("Unknown Error", error.message));
  },
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T>(...args);
}

export default {
  get,
  post,
  put,
  patch,
  delete: del,
};

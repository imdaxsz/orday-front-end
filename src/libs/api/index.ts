import axios from "axios";

import store from "@/store";
import { setAccessToken, signout } from "@/store/slices/authSlice";

import { ApiError, BaseError } from "../error";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT,
  timeout: 5 * 1000,
  withCredentials: true,
});

// Request interceptor
instance.interceptors.request.use((config) => {
  if (!config.headers) return config;
  // redux store에서 accesstoken 가져오기
  const accesstoken = store.getState().auth.accessToken;
  if (accesstoken && config.headers) {
    config.headers["authorization"] = `Bearer ${accesstoken}`;
  }
  return config;
});

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // response header에 access token이 있다면
    // access token이 (재)발급된 걸로 간주 -> redux store에 저장
    console.log(response);
    const accessToken = response.headers["authorization"]
      ? response.headers["authorization"].split("Bearer")[1]
      : null;
    if (accessToken) store.dispatch(setAccessToken(accessToken));
    // refresh token이 있다면 localstorage에 저장
    const refreshToken = response.headers["authorization-refresh"]
      ? response.headers["authorization-refresh"].split("Bearer")[1]
      : null;
    if (refreshToken) localStorage.setItem("token", refreshToken);
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log(error);
      const originalRequest = error.config;
      // access token 만료인 경우(요청 헤더에 access token만 있었던 경우)
      if (!originalRequest.headers["authorization-refresh"]) {
        // refresh 토큰과 함께 이전 요청 재요청
        const refreshToken = localStorage.getItem("token");
        originalRequest.headers[
          "authorization-refresh"
        ] = `Bearer ${refreshToken}`;
        return instance(originalRequest);
      }
      // 모든 토큰 만료인 경우 (요청 헤더에 모든 토큰이 있었던 경우)
      // 로그아웃 처리
      store.dispatch(signout());
      localStorage.removeItem("token");
      window.alert("로그인 해주세요!");
      window.location.href = "/login";
    }
    // TODO: 서버 응답 오류 예외 처리
    if (error.response?.data) {
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
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}

export default {
  get,
  post,
  put,
  patch,
  delete: del,
};

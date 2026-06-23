import { fetcher } from "@/lib/http/fetcher";
import { BodyFetcher, FetcherOptions } from "@/lib/http/types";
import { cache } from "react";

export const api = {
  cache: {
    get: cache(<T>(url: string, options?: FetcherOptions) =>
      fetcher<T>(url, { ...options, method: "GET" }),
    ),
  },
  get: <T>(url: string, options?: FetcherOptions) =>
    fetcher<T>(url, { ...options, method: "GET" }),

  post: <T>(url: string, body?: BodyFetcher, options?: FetcherOptions) =>
    fetcher<T>(url, { ...options, method: "POST", body }),

  patch: <T>(url: string, body?: BodyFetcher, options?: FetcherOptions) =>
    fetcher<T>(url, { ...options, method: "PATCH", body }),

  put: <T>(url: string, body?: BodyFetcher, options?: FetcherOptions) =>
    fetcher<T>(url, { ...options, method: "PUT", body }),

  delete: <T>(url: string, options?: FetcherOptions) =>
    fetcher<T>(url, { ...options, method: "DELETE" }),
};

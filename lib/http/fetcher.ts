import { ApiError } from "./api-error";
import { FetcherOptions } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

function buildUrl(path: string, query?: Record<string, any>) {
  const url = new URL(`api/${ path }`, BASE_URL);

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    }
  }

  return url.toString();
}

export async function fetcher<T>(
  path: string,
  options: FetcherOptions,
): Promise<T> {
  const { query, headers, body, ...rest } = options;

  const url = buildUrl(path, query);

  const isFormData = body instanceof FormData;

  const requestHeaders = await getRequestHeaders();

  const res = await fetch(url, {
    ...rest,
    credentials: "include",
    headers: {
      ...requestHeaders,
      ...(isFormData ? {} : { "content-type": "application/json" }),
      ...headers,
    },
    body: isFormData ? body : body ? JSON.stringify(body) : undefined,
  });

  const contentType = res.headers.get("content-type");

  let data: any;

  if (contentType?.includes("application/json")) {
    data = await res.json();
  } else {
    data = await res.text();
  }

  if (!res.ok) {
    throw new ApiError(
      data?.message || "Request failed",
      res.status,
      data,
    );
  }

  return data as T;
}

async function getRequestHeaders(): Promise<Record<string, string>> {
  if (typeof window !== "undefined") {
    return {};
  }

  const { headers } = await import("next/headers");

  const requestHeaders = await headers();

  return {
    cookie: requestHeaders.get("cookie") ?? "",
    authorization: requestHeaders.get("authorization") ?? "",
    "user-agent": requestHeaders.get("user-agent") ?? "",
    "x-forwarded-for": requestHeaders.get("x-forwarded-for") ?? "",
  };
}
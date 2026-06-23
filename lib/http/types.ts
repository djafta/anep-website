export type BodyFetcher = FormData | string | undefined | any;

export type FetcherOptions = RequestInit & {
  query?: Record<string, string | number | boolean | undefined>;
  body?: BodyFetcher;
};

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Joke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

interface JokesResult {
  total: number;
  result: Joke[];
}

const chuckNorrisApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.chucknorris.io' }),
  endpoints: builder => ({
    getCategories: builder.query<string[], void>({
      query: () => '/jokes/categories',
    }),
    getJokesBySearch: builder.query<JokesResult, string>({
      query: query => `/jokes/search?query=${query}`,
    }),
    getRandomJokeByCategory: builder.query<Joke, string>({
      query: category => `/jokes/random?category=${category}`,
    }),
  }),
  reducerPath: 'chuckNorrisApi',
});

export const {
  reducer: apiReducer,
  reducerPath: apiReducerPath,
  middleware: apiMiddleware,
  injectEndpoints,
  useGetCategoriesQuery,
  useGetRandomJokeByCategoryQuery,
  useGetJokesBySearchQuery,
  endpoints,
} = chuckNorrisApi;

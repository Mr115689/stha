import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1' }),


  endpoints: (builder) => ({

    getCocktailByCategory: builder.query({
      query: (q) => ({
        url: '/filter.php',
        params: {
          c: q
        },
        method: 'GET'
      })
    })




  })



});

export const { useGetCocktailByCategoryQuery, useLazyGetCocktailByCategoryQuery } = cocktailApi;
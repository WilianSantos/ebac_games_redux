import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getGames: builder.query<Game[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetGamesQuery } = api

export default api

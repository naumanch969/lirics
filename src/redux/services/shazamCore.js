import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"  


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'd0c60faf6amshd2e3ebb8b2528c1p18f5f8jsn1cc6d8d21b22');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
        getSongDetails: builder.query({ query: ({ songId }) => `/tracks/details?track_id=${songId}` }),
        getSongRelated: builder.query({ query: ({ songId }) => `/tracks/related?track_id=${songId}` }),
        getArtistDetails: builder.query({ query: ({ artistId }) => `/artists/get-detail?artist_id=${artistId}` }),
        // https://shazam.p.rapidapi.com/artists/get-details
        getSongsByCountry: builder.query({ query: (country) => `/charts/country?country_code=${country || 'IN' }` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?query=${searchTerm}&search_type=SONGS_ARTISTS` }),
    }),
})

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi;
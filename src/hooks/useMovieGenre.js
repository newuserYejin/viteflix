import { useQuery } from "@tanstack/react-query"
import api from '../utils/api'

function fetchMovieGenre() {
    return api.get("/genre/movie/list?language=ko")
}

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: ['movie-genre'],
        queryFn: fetchMovieGenre,
        suspense: true,
        select: (result) => result.data.genres
    })
}
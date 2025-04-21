import { useQuery } from "@tanstack/react-query"
import api from '../utils/api'

function fetchUpcomingMovie() {
    return api.get('https://api.themoviedb.org/3/movie/upcoming?language=ko-KR')
}

export const useUpcomingMovies = () => {
    return useQuery({
        queryKey: ['movie-upcoming'],
        queryFn: fetchUpcomingMovie,
        select: (result) => result.data
    })
}
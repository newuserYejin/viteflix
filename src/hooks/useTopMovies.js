import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

function fetchTopMovies() {
    return api.get("https://api.themoviedb.org/3/movie/top_rated?language=ko-KR")
}

export const useTopMovies = () => {
    return useQuery({
        queryKey: ['movie-top-rated'],
        queryFn: fetchTopMovies,
        select: (result) => result.data
    })
}
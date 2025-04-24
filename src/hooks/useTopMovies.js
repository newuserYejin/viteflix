import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

function fetchTopMovies() {
    return api.get("/movie/top_rated?language=ko-KR")
}

export const useTopMovies = () => {
    return useQuery({
        queryKey: ['movie-top-rated'],
        queryFn: fetchTopMovies,
        suspense: true,
        select: (result) => result.data,
        staleTime: 300000
    })
}
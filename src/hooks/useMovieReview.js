import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

async function fetchMovieReview({ id }) {
    return api.get(`/movie/${id}/reviews`)
}

export const useMovieReview = ({ id }) => {
    return useQuery({
        queryKey: ['movie-review', id],
        queryFn: () => fetchMovieReview({ id }),
        select: (result) => result.data
    })
}
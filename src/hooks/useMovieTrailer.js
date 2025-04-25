import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

function fetchMovieTrailer({ id }) {
    return api.get(`/movie/${id}/videos`)
}

export const useMovieTrailer = ({ id }) => {
    return useQuery({
        queryKey: ['movie-trailer', id],
        queryFn: () => fetchMovieTrailer({ id }),
        select: (result) => result.data.results[0]
    })
}
import { useQuery } from "@tanstack/react-query"
import api from '../utils/api'

async function fetchMovieDetail({ id }) {
    console.log("id : ", id)

    return await api.get(`/movie/${id}?language=ko-KR`)
}

export const useMovieDetail = ({ id }) => {
    return useQuery({
        queryKey: ['movie-detail', id],
        queryFn: () => fetchMovieDetail({ id }),
        select: (result) => result.data
    })
}
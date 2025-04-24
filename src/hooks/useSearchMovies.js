import { useQuery } from "@tanstack/react-query"
import api from '../utils/api'

function fetchSearchMovie({ keyword, page, genre }) {
    if (genre) {
        console.log("장르 있음 : ", genre)
        return api.get(`/discover/movie?with_genres=${genre}`)
    }
    return keyword ? api.get(`/search/movie?query=${keyword}&page=${page}`) : api.get(`/movie/popular?language=ko-KR&page=${page}`)
}

export const useSearchMovieQuery = ({ keyword, page, genre }) => {
    console.log("genre 들어옴 : ", genre)
    return useQuery({
        queryKey: ['movie-search', keyword, page, genre],
        queryFn: () => fetchSearchMovie({ keyword, page, genre }),
        select: (result) => result.data,
        suspense: true
    })
}
export const baseUrl = "https://api.themoviedb.org/3";

export const urls = {
    movies: {
        all: (page: number): string => `/discover/movie?page=${page}`,
        byId: (id: number): string => `/movie/${id}`
    },
    poster: {
        base500: "https://image.tmdb.org/t/p/w500/"
    },
    genres: {
        base: "/genre/movie/list"
    }

}
export const baseUrl = "https://api.themoviedb.org/3";

export const urls = {
    movies: {
        all: "/discover/movie",
        byId: (id: number): string => `/movie/${id}`,
        byStringName: "/search/movie"
    },
    poster: {
        base: "https://image.tmdb.org/t/p/",
        size: {
            original: "original",
            size_500: "w500/",
            size_400: "w400/",
            size_300: "w300/",
        }
    },
    images: (movie_id: number): string => `${baseUrl}/movie/${movie_id}/images}`,
    genres: {
        base: "/genre/movie/list"
    }

}
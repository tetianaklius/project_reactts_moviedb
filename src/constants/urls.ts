export const baseUrl = "https://api.themoviedb.org/3";

export const urls = {
    movies: {
        all: "/discover/movie",
        byId: (id: number): string => `/movie/${id}?append_to_response=videos`,
        byStringName: "/search/movie"
    },
    poster: {
        base: "https://image.tmdb.org/t/p/",
        size: {
            original: "original",
            size_500: "w500",
            size_400: "w400",
            size_300: "w300",
        },
    },
    video: {
        base: {
            youtube: "https://www.youtube.com/embed/"
        }
    },
    // movieImages: (movie_id: number): string => `${baseUrl}/movie/${movie_id}/images}`,
    actors: {
        byMovieId: (movie_id: number): string => `${baseUrl}/movie/${movie_id}/credits`
    },
    genres: {
        base: "/genre/movie/list"
    }

}
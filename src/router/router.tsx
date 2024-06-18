import {createBrowserRouter} from "react-router-dom";
import {RouteObject} from "react-router";

import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import GenresPage from "../pages/GenresPage/GenresPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import SearchPage from "../pages/SearchPage/SearchPage";

const routes: RouteObject[] = [
    {
        path: "",
        element: <MainLayout/>,
        children: [
            {path: "movies", element: <MoviesPage/>},
            {path: "genres", element: <GenresPage/>},
            {path: "search", element: <SearchPage/>},
            {path: "movies/:id", element: <MoviePage/>},
        ]
    }
]

export const router = createBrowserRouter(routes);
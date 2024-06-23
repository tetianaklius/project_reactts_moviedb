import {createBrowserRouter, Navigate} from "react-router-dom";
import {RouteObject} from "react-router";

import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import GenresPage from "../pages/GenresPage/GenresPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import {SearchPage} from "../pages/SearchPage/SearchPage";
import ErrorLayout from "../layouts/ErrorLayout/ErrorLayout";
import PosterFullComponent from "../components/PosterFullComponent/PosterFullComponent";

const routes: RouteObject[] = [
    {
        path: "",
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <Navigate to={"movies"}/>},
            {path: "movies", element: <MoviesPage/>},
            {path: "genres", element: <GenresPage/>},
            {path: "search", element: <SearchPage/>},
            {path: "movies/:id", element: <MoviePage/>},
            {path: "genres/:id", element: <MoviePage/>},
            {path: "search/:id", element: <MoviePage/>},
            {path: "movies/:id/poster", element: <PosterFullComponent/>},
            {path: "genres/:id/poster", element: <PosterFullComponent/>},
            {path: "search/:id/poster", element: <PosterFullComponent/>},
        ]
    }
]

export const router = createBrowserRouter(routes);
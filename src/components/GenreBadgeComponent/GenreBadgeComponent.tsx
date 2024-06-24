import React, {FC, useEffect, useState} from 'react';
import {Badge} from "@mui/material";

import {ISearchParams} from "../../models/Search/SearchParams";
import {moviesService} from "../../services/movies.api.service";
import {IMovieDetailed} from "../../models/Movies/IMovieDetailed";
import styles from "./GenreBadgeComponent.module.css";
import {genresService} from "../../services/genres.api.service";
import {IGenre} from "../../models/Genres/IGenre";

interface IProps {
    movie: IMovieDetailed | null,
}

const GenreBadgeComponent: FC<IProps> = ({movie}) => {
    const [genresArr, setGenresArr] = useState<IGenre[]>([{id: 0, name: "жанри відсутні", genreMoviesCount: 1}]);
    const [trigger, setTrigger] = useState<boolean>(false);

    useEffect(() => {
        genresService.getAll().then(genres => {
                genres.genres.map(genre => setGenresArr((prevState) => {
                        prevState.push({
                            id: genre.id,
                            name: genre.name,
                            genreMoviesCount: null
                        })
                        if (prevState[0].name === "жанри відсутні" && prevState.length > 1) {
                            prevState.shift();
                            setTrigger(true);
                        }
                        return prevState;
                    }
                ))
            }
        )
    }, []);

    const getCountSelectedGenres = () => {
        const params: ISearchParams = {
            page: "1",
            with_genres: null,
            language: "uk-UA",
            sort_by: "vote_count.desc"
        }

        movie &&
        movie.genres.map(genre => {
            params.with_genres = genre.id.toString();

            moviesService.getAll(params).then(movies => {
                genresArr.map(item => {
                    if (item.id === genre.id) {
                        item.genreMoviesCount = movies.total_results;
                    }
                    return item;
                })
            })
            return genre;
        })
    }

    useEffect(() => {
            getCountSelectedGenres();
        }, [getCountSelectedGenres]
    );

    return (
        <div className={styles.badges_container}>

            {genresArr.map(genre => (

                genre.genreMoviesCount &&
                <div key={genre.id}>
                    <Badge color="secondary"
                           badgeContent={genre.genreMoviesCount}
                           max={100000}
                           overlap={"rectangular"}>
                        <div>{genre.name}</div>
                    </Badge>
                </div>
            ))}
        </div>
    );
};

export default GenreBadgeComponent;
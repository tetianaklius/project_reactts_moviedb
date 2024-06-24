import React, {FC, useEffect, useState} from 'react';

import {ISearchParams} from "../../models/Search/SearchParams";
import {moviesService} from "../../services/movies.api.service";
import {IGenre} from "../../models/Genres/IGenre";
import {genresService} from "../../services/genres.api.service";
import {Badge} from "@mui/material";
import {IMovieDetailed} from "../../models/Movies/IMovieDetailed";
import styles from "./GenreBadgeComponent.module.css";


interface IProps {
    movie: IMovieDetailed | null,
    // setTriggerBadge: Dispatch<SetStateAction<boolean>>
}


const GenreBadgeComponent: FC<IProps> = ({movie}) => {
    const [trigger, setTrigger] = useState<boolean>(false);

    const [genresArr, setGenresArr] = useState<IGenre[]>([{id: 0, name: "жанри відсутні", genreMoviesCount: 1}]);

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
                        // @ts-ignore
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
        // setTriggerBadge(true);
        }, []
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





    // const {genres: allGenresStore} = useAppSelector(state => state.genresSlice);
    // const [allGenresState, setAllGenresArr] = useState<IGenre[]>([{id: 0, name: "default", genreMoviesCount: 1}]);

    // const getGenres = (): void => {
    //         genresService.getAll().then(genres => {
    //                 genres.genres.map(genre => setAllGenresArr((prevState: IGenre[]) => {
    //                         prevState.push({
    //                             id: genre.id,
    //                             name: genre.name,
    //                             genreMoviesCount: null
    //                         })
    //                         return prevState;
    //                     }
    //                 ))
    //             }
    //         )
    //     }
    // ;
    // let allGenresArr: IGenre[];
    //
    // if (allGenresStore === null) {
    //     getGenres();
    //     allGenresArr = allGenresState;
    // } else {
    //     allGenresArr = allGenresStore.genres;
    // }

    // const getCountSelectedGenres = () => {
    //     const params: ISearchParams = {
    //         page: "1",
    //         with_genres: null,
    //         language: "uk-UA",
    //         sort_by: 'vote_count.desc'
    //     }
    //     let ResGenreArray: IGenre[];
    //
    //     movie &&
    //     movie.genres.map(
    //         movieGenre => {
    //             params.with_genres = movieGenre.id.toString();
    //
    //             moviesService.getAll(params).then(movies => {
    //                 allGenresArr.map(someGenre => {
    //                     if (someGenre.id === movieGenre.id) {
    //                         // @ts-ignore
    //                         someGenre.genreMoviesCount = movies.total_results;
    //                         // ResGenreArray.push(someGenre);
    //                     }
    //                     // setAllGenresArr(ResGenreArray);
    //                 })
    //             })
    //             return ResGenreArray;
    //         }
    //     );
    // }
    // getCountSelectedGenres();
import React, {FC, useEffect} from 'react';
import {useAppDispatch} from "../../redux/store";
import {genresActions} from "../../redux/slices/genresSlice";
import GenresComponent from "../../components/GenresComponent/GenresComponent";

const GenresPage: FC = () => {
    const dispatch = useAppDispatch();

    useEffect((): void => {
        dispatch(genresActions.loadGenres());
    })

    return (
        <div>
            <GenresComponent/>
        </div>
    );
};

export default GenresPage;
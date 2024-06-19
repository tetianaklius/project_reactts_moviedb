import React, {FC} from 'react';

import {useAppSelector} from "../../redux/store";

const MoreMovieDetailsComponent: FC = () => {
    const {movieDetailed} = useAppSelector(state => state.moviesSlice);

    return (
        <div>
            movie {movieDetailed?.id} {movieDetailed?.title}
            {/*//todo*/}
        </div>
    );
};

export default MoreMovieDetailsComponent;
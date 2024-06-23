import React, {FC} from 'react';
import {IMovieActors} from "../../models/Actors/IMovieActors";

interface IProps {
    actors: IMovieActors
}

const ActorsCarouselComponent: FC<IProps> = ({actors}) => {

    return (
        <div>
            {/*{actors?.cast.map(<ActorBoxComponent actor={actor}/>)}*/}
            {/*// чи тут на місці каруселька?*/}
        </div>
    );
};

export default ActorsCarouselComponent;
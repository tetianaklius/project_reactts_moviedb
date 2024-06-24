import React, {FC} from 'react';

import ActorBoxComponent from "../ActorBoxComponent/ActorBoxComponent";
import {IMovieActor} from "../../models/Actors/IMovieActor";
import styles from "./ActorsContainerComponent.module.css";

interface IProps {
    actors: IMovieActor[]
}

const ActorsContainerComponent: FC<IProps> = ({actors}) => {

    const actorsToShow = actors.filter(actor => actor.profile_path?.length).slice(0, 10);

    return (
        <div>
            <h4>Акторський склад</h4>
            <div className={styles.actors_carousel}>
                {actorsToShow?.map(actor => <ActorBoxComponent actor={actor} key={actor.id}/>)}
            </div>
        </div>
    );
};

export default ActorsContainerComponent;
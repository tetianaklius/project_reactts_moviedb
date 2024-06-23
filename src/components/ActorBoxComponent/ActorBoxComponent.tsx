import React, {FC} from 'react';

import {IMovieActor} from "../../models/Actors/IMovieActor";
import {urls} from "../../constants/urls";
import styles from "./ActorBoxComponent.module.css";

interface IProps {
    actor: IMovieActor
}

const ActorBoxComponent: FC<IProps> = ({actor}) => {

    return (
        <div className={styles.actor_box}>
            <img src={`${urls.poster.base}${urls.poster.size.size_500}/${actor.profile_path}`} alt={actor.name}/>
            {actor.name}
        </div>
    );
};

export default ActorBoxComponent;
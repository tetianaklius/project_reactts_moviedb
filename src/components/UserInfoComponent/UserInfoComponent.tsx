import React from 'react';

import styles from "./UserInfoComponent.module.css";
import user_icon from "../../files/icons8-user-32.png";

const UserInfoComponent = () => {
    return (
        <div className={styles.user_info}>
            <div className={styles.user_icon}>
                <img src={user_icon} alt="user icon" width={"20px"}/>
            </div>
            <div className={styles.user_name}>user name</div>
        </div>
    );
};

export default UserInfoComponent;
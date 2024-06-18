import React from 'react';

import styles from "./UserInfoComponent.module.css";

const UserInfoComponent = () => {
    return (
        <div className={styles.user_info}>
            <div className={styles.user_icon}>
                <img src="" alt=""/>
            </div>
            <div className={styles.user_name}>user name</div>
        </div>
    );
};

export default UserInfoComponent;
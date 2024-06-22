import React from 'react';

import styles from "../../layouts/ErrorLayout/ErrorLayout.module.css";

const ErrorMessageComponent = () => {

    return (
        <>
            <h2 className={styles.error_message}>От халепа! Щось пішло не так. Перевірте, будь ласка, адресу (URL)
                сторінки.</h2>
        </>
    );
};

export default ErrorMessageComponent;
import React, {FC} from 'react';

import styles from "../../layouts/ErrorLayout/ErrorLayout.module.css";

const ErrorMessageComponent: FC = () => {

    return (
        <>
            <h2 className={styles.error_message}>От халепа! Щось пішло не так. Перевірте, будь ласка, адресу (URL)
                сторінки або скористайтесь навігаційним меню вище.</h2>
        </>
    );
};

export default ErrorMessageComponent;
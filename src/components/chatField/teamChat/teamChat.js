import React from 'react';
import styles from './teamChat.module.css';

const teamChat = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}></div>
            <div className={styles.content}>
                {props.text}
                <div className={styles.chatArrow}></div>
            </div>

        </div>
    );
}

export default teamChat;
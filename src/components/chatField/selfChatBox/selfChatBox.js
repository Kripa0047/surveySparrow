import React from 'react';
import styles from './selfChatBox.module.css';

const selfChatBox = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.chatArrow}></div>
            <div className={styles.content}>{props.text}</div>
        </div>
    );
}

export default selfChatBox;
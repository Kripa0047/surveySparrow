import React from 'react';
import styles from './messageBox.module.css';
import sendIcon from '../../assets/icon/send-24px.svg';
import ChatField from '../chatField/chatField';
import sendIconColor from '../../assets/icon/send-24px-color.svg';

const messageBox = (props) => {
    return (
        <div className={props.isShow ? styles.containerIn : styles.containerOut}>
            <div className={styles.textContainer} ref={props.chatBoxRef}>
                <div className={styles.chatHeader}>
                    <div className={styles.headerText}>Hi There</div>
                    <div className={styles.subHeaderText}>{props.isConversation ? 'The team typically replies in a few minutes.' : 'Hello Ask Us Anything. Share Your Feedback.'}</div>
                </div>

                {
                    props.isConversation
                        ?
                        <ChatField
                            chat={props.chat}
                        />
                        :
                        <div className={styles.preConversationBox}>
                            <div className={styles.preHeader}>Start a Conversation</div>
                            <div className={styles.preHeaderText}>The team typically replies in a few minutes.</div>
                            <div className={styles.startConversation} onClick={props.onConversation}>
                                <div>New Conversation</div>
                                <img src={sendIcon} alt='icon' />
                            </div>
                        </div>
                }
            </div>

            {
                props.isConversation
                    ?
                    <div className={styles.inputContainer}>
                        <div className={styles.bar}></div>
                        <input type='text' placeholder='Write to reply...' onChange={(e) => props.onText(e)} value={props.inputText}
                            onKeyUp={(e) => e.keyCode === 13 ? props.onSend() : null} />
                        <img src={sendIconColor} alt='send' onClick={props.onSend} />
                    </div>
                    :
                    null
            }

        </div>
    );
}

export default messageBox;
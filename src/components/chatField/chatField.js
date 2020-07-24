import React from 'react';
import styles from './chatField.module.css';
import SelfChatBox from './selfChatBox/selfChatBox';
import TeamChat from './teamChat/teamChat';
import birdIcon from '../../assets/icon/sparrow favicon.png';

const chatField = (props) => {
    return (
        <div>
            <div>
                {
                    props.chat.map((item, index) => {
                        return (
                            item.msg === 'team'
                                ?
                                <TeamChat
                                    key={index}
                                    text={item.text}
                                />
                                :
                                <SelfChatBox
                                    key={index}
                                    text={item.text}
                                />
                        )
                    })
                }
            </div>

            <div className={styles.chatFooter}>
                <img src={birdIcon} alt='icon' />
                <div>we run on surveysparrow</div>
            </div>

        </div>
    );
}

export default chatField;
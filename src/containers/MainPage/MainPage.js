import React, { Component } from 'react';
import styles from './MainPage.module.css';

import Header from '../../components/header/header';
import TextBox from '../../components/textBox/textBox';
import chatBird from '../../assets/icon/SparrowBird.png';
import closeIcon from '../../assets/icon/close-24px.svg';
import MessageBox from '../../components/messageBox/messageBox';
import axios from 'axios';

class MainPage extends Component {
    state = {
        showMenu: false,
        showChat: false,
        isConversation: false,

        chat: [],
        inputText: '',

        chatBoxRef: React.createRef()
    }

    componentDidMount() {
        this.getAdvice();
    }

    getAdvice = () => {
        let chat = [...this.state.chat];
        let data = {
            msg: 'team',
            text: ''
        };

        axios.get('https://api.adviceslip.com/advice')
            .then(function (response) {
                console.log(response.data);
                data.text = response.data.slip.advice;
            })
            .catch(function (error) {
                console.log(error);
            });

        chat.push(data);
        this.setState({ chat });
    }

    onSend = () => {
        let text = this.state.inputText.trim();
        let root = this;
        if (text.length !== 0) {
            let chat = [...this.state.chat];
            let data = {
                msg: 'user',
                text: text
            };
            chat.push(data);
            this.setState({
                chat: chat,
                inputText: ''
            }, () => {
                root.state.chatBoxRef.current.scrollTo(0, root.state.chatBoxRef.current.scrollHeight);
            });
        }
    }


    render() {
        return (
            <div className={styles.container}>
                <Header
                    onMenu={() => this.setState({ showMenu: !this.state.showMenu })}
                    isMenu={this.state.showMenu}
                />
                <TextBox />

                <div className={styles.chatBox}>
                    <MessageBox
                        isShow={this.state.showChat}
                        isConversation={this.state.isConversation}
                        onConversation={() => this.setState({ isConversation: true })}
                        chat={this.state.chat}
                        onText={(e) => this.setState({ inputText: e.target.value })}
                        onSend={this.onSend}
                        inputText={this.state.inputText}
                        chatBoxRef={this.state.chatBoxRef}
                    />
                    <img className={this.state.showChat ? styles.chatCloseButton : styles.chatButton} src={this.state.showChat ? closeIcon : chatBird} alt='icon'
                        onClick={() => this.setState({ showChat: !this.state.showChat })} />
                </div>
            </div>
        );
    }
}

export default MainPage;
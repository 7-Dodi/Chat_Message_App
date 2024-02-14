import React from 'react';
import './style.css';
import { Default } from '../Default';
import ChatHeader from '../ChatHeader';
import ChatFooter from '../ChatFooter';
import ChatBody from '../ChatBody';

const Chat = ({userChat}) => {

    if (!userChat) return <Default/>;
    return (
        <div className='chat'>
            <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name}/>
            <ChatBody chatId={userChat?.chatId} />
            <ChatFooter chatId={userChat?.chatId} />
        </div>
    )
}

export default Chat
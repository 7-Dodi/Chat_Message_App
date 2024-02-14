import React from 'react';
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
import './style.css';

const ChatHeader = ({ photoURL, name }) => {
  return (
    <div className='chatHeader'>
        <div className='userInfor'>
            {photoURL ? <img className='avatar' src={photoURL}/> : <MdPerson/>}
            <div className="nameContent">
                <span className="name">{name}</span>
            </div>
        </div>
        <div className="options">
            <MdSearch/>
            <MdMoreVert/>
        </div>
    </div>
  )
}

export default ChatHeader
import React from 'react';
import { SideBarHeader } from '../SideBarHeader';
import { SideBarChats } from '../SideBarChats';
import './style.css';

const SideBar = ({setUserChat, userChat}) => {
  return (
    <div>
        <SideBarHeader setUserChat={setUserChat}/>
        <SideBarChats setUserChat={setUserChat} userChat={userChat}/>   
    </div>
  )
}

export default SideBar
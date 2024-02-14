import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../service/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import SideBarChatsItem from '../SideBarChatsItem';
import './style.css';

export const SideBarChats = ({ setUserChat, userChat }) => {
  
  const [user] = useAuthState(auth);

  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  const [chatsSnapshot] = useCollection(refChat);
  
  return (
    <div className='sideBarChats'>
      {chatsSnapshot?.docs.map((item, index) => (
        <div className='content' key={index}>
          <SideBarChatsItem
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "active" : ""}
          />
          <div className='divider'></div>
        </div>
      ))}
    </div>
  )
}
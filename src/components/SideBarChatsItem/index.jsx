import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../service/firebase";
import { MdPerson } from "react-icons/md";
import './style.css';

const getUser = (users, userLogged) =>
    users?.filter((user) => user !== userLogged?.email)[0];

const SideBarChatsItem = ({ id, users, user, setUserChat, active }) => {
    const [getUserItem] = useCollection(
        db.collection("users").where("email", "==", getUser(users, user))
    );

    const avatar = getUserItem?.docs?.[0]?.data();
    const item = getUser(users, user);

    const handleNewChat = () => {
        const userChat = {
            chatId: id,
            name: item.split("@")[0],
            photoURL: avatar?.photoURL,
        };

        setUserChat(userChat);
    };

    return (
    <div className={`sideBarChatsItem ${active}`} onClick={handleNewChat}>
            {avatar ? <img className='avatar' src={avatar?.photoURL}/> : <MdPerson/>}
            <span className='name'>{item.split("@")[0]}</span>
        </div>
    )
}

export default SideBarChatsItem
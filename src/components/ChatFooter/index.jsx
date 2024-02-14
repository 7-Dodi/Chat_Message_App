import React, {useState} from 'react';
import { MdSend } from "react-icons/md";
import { auth, db } from "../../service/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import './style.css';

const ChatFooter = ({ chatId }) => {
    const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      message: message,
      user: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
  };

  return (
    <div className='chatFooter'>
        <form className="form" onSubmit={handleSendMessage}>
            <input type="text" className="input" placeholder="Mensagem" onChange={(e) => setMessage(e.target.value)} value={message}/>
        </form>
        <MdSend onClick={handleSendMessage} />
    </div>
  )
}

export default ChatFooter
import React from 'react';
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../service/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import './style.css';

export const SideBarHeader = ({setUserChat}) => {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  //Função abre um popuot no alert onde digita o e-mail
  const handleCreateChat = () => {
    const emailInput = prompt("Escreva o e-mail desejado");

    //Se não tiver nada
    if (!emailInput) return;

    //Se tiver algo
    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe!");
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  //Checar se o chat já existe
  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  return (
    <div className='sideBarHeader'>
      <img className='avatar' src={user?.photoURL} onClick={()=> {auth.signOut(), setUserChat(null)}}/>
      <div className="options">
        <MdDonutLarge/>
        <MdChat onClick={handleCreateChat}/>
        <MdMoreVert/>
      </div>
    </div>
  )
}

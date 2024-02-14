import { useEffect, useState } from "react";
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth, db } from "./service/firebase";
import { Login } from "./components/Login";
import SideBar from "./components/SideBar";
import './app.css';
import Chat from "./components/Chat";

function App() {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if(user){
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if(loading) return <p>Carregando ...</p>

  if(!user) return <Login />

  return (
    <div className="appContainer">
      <SideBar setUserChat={setUserChat} userChat={userChat}/>
      <Chat userChat={userChat}/>
    </div>
  )
}

export default App

import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../service/firebase";
import './style.css';

const Message = ({ user, message }) => {
    const [userLoggedIn] = useAuthState(auth);

    return (
        <div>
            <div className={`line ${userLoggedIn?.email === user ? "me" : ""}`}>
                <div className="content">
                    <span className="message">{message.message}</span>
                    <span className="messageDate">
                        {new Date(message?.timestamp).toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Message
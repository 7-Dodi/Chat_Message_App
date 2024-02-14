import React from 'react';
import { MdMessage } from "react-icons/md";
import './style.css';

export const Default = () => {
    return (
        <div className='default'>
            <MdMessage />
            <h1 className='title'>Chat App</h1>
            <span className='text'>
                Agora você pode enviar e receber mensagens sem precisar manter seu
                celular conectado à internet.
            </span>
        </div>
    )
}

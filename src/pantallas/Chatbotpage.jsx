import React from 'react';
import { Chatbot } from 'react-chatbot-kit'

import MessageParser from '../MessageParser';
import ActionProvider from '../ActionProvider';
import config
 from './config';
 import "./style/style.css"



export default function Chatbotpage() {
    return(
        <div className="">
            <header className="chatbotgeneral">
                <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
                </header>
        </div>
    );
}

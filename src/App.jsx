import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useCallback } from 'react';
import Talk from 'talkjs';
import { Session, Chatbox, Inbox } from '@talkjs/react';

function ChatComponent() {
    const syncUser = useCallback(
        () =>
            new Talk.User({
                id: 'user1',
                name: 'user1',
                email: 'user1@gmail.com',
                photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
                welcomeMessage: 'Hey there! How are you? :-)',
                role: 'crew',
            }),
        []
    );

    const syncConversation = useCallback((session) => {
        // JavaScript SDK code here
        const conversation = session.getOrCreateConversation('conv_1');

        const other = new Talk.User({
            id: 'user2',
            name: 'user2@gmail.com',
            email: 'user2@gmail.com',
            photoUrl: 'https://talkjs.com/images/avatar-2.jpg',
            welcomeMessage: 'Hey there! How are you? :-)',
            role: 'company',
        });
        conversation.setParticipant(session.me);
        conversation.setParticipant(other);

        return conversation;
    }, []);

    return (
        <Session appId="APP_ID" syncUser={syncUser}>
            <Inbox
                conversationId="conv_1"
                style={{ width: 400, height: 600 }}
                className="chat-container"
            />

        </Session>
    );
}


function App() {
    return (
        <>
            <ChatComponent />
        </>
    )
}

export default App

import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

 const Chats =() => {

    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    console.log(user);
    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }

    const getFile = async (url)  => {
        const response = await fetch(url); 
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' });
    }

    useEffect(() => {
        if(!user) {
            history.push('/');
            
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id":"0ccedd71-623f-40ee-8aec-178dca89d4c1",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
        .then(() => {
            setLoading(false);
        })
        .catch(()  => {
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.displayName);
            formdata.append('secret', user.uid);

            getFile(user.photoURL)
            .then((avatar) => {
                formdata.append('avatar', avatar, avatar.name);

                axios.post('https://api.chatengine.io/users',
                formdata,
                { headers: {"private=key": "495dd4e0-9156-4ad6-80a2-f012c4a560c0"}} //env variable
                )
                .then(() => setLoading(false))
                .catch((error) => console.log(error));
            })
        });
    }, [user, history])

    if(!user || loading) return 'Loading...';

    return (
        <div className='chats-page'>
            <div className='nav-bar'>
                <div className='logo-tab'>
                    Unichat
                </div>
                <div onClick={handleLogout} className='logout-tab'>
                    Logout
                 </div>

            </div>
            
            <ChatEngine
            height="calc(100vh - 66px)"
            projectID="0ccedd71-623f-40ee-8aec-178dca89d4c1"
            userName="."
            uesrSecret="."

            />
        </div>

            

    )
}

export default Chats;
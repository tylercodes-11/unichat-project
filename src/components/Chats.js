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
                "project-id":'a2f79bb4-8ea1-4aba-85d1-818ef46c586f',
                "private-key":'81104f82-3965-4c93-ad6d-59cc6b566d9b',
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
            formdata.append('username', user.email);
            formdata.append('secret', user.uid);

            getFile(user.photoURL)
            .then((avatar) => {
                formdata.append('avatar', avatar, avatar.name);

                axios.post('https://api.chatengine.io/users',
                formdata,
                { headers: { "private-key": '81104f82-3965-4c93-ad6d-59cc6b566d9b',
                            'access-control-allow-origin': 'https://localhost:3000',
                            "Access-Control-Allow-Headers": "Origin",
            }} //env variable
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
            projectID= 'a2f79bb4-8ea1-4aba-85d1-818ef46c586f'
            userName={user.email}
            userSecret={user.uid}

            />
        </div>

            

    )
}

export default Chats;
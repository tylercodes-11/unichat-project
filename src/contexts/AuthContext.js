import React, { useContext, useState, useEffect } from 'react';
import { useNavigate }  from 'react-router-dom';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // set up states
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null) ;
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            // once we get user data, we need to set the user state
            setUser(user);
            setLoading(false);
            console.log(user);
           if(user) navigate('/chats'); //renavigate to chat app
        }) 
    }, [user, navigate]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {/* not loading then show the children */}
            {!loading && children} 
        </AuthContext.Provider>
    )

} 

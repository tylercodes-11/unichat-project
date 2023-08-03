import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // set up states
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({}) ;
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            // once we get user data, we need to set the user state
            setUser(user);
            setLoading(false);
            history.push('/chats'); //renavigate to chat app
        }) 
    }, [user, history]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {/* not loading then show the children */}
            {!loading && children} 
        </AuthContext.Provider>
    )

} 

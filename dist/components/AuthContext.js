import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
// Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const AuthContext = createContext(undefined);
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setUser({
                    uid: user.uid,
                    email: user.email,
                });
            }
            else {
                setUser(null);
            }
        });
        return unsubscribe;
    }, []);
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signOut = () => {
        return firebaseSignOut(auth);
    };
    return (_jsx(AuthContext.Provider, { value: { user, signIn, signUp, signOut }, children: children }));
};
export default AuthProvider;

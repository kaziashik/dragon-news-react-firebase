import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, use, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext=createContext();



const AuthProvider = ({children}) => {
    ;
      const [user,setUser]=useState(null)
      console.log("formAuth",user);

      const usercreatEmailPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
      }

      const sinInWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

      }

      const logout=()=>{
        return signOut(auth)
      }

      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe()

        }
      })
    const authData={
        user,
        setUser,
        usercreatEmailPassword,
        sinInWithEmail,
        logout

    }
    return <AuthContext value={authData}> {children}</AuthContext>

};

export default AuthProvider;
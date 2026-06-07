import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, use, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext=createContext();



const AuthProvider = ({children}) => {
 
 
  const [loading,setLoading]=useState(true)
      const [user,setUser]=useState(null)
      // console.log("loading",user, loading);

      const usercreatEmailPassword=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }

      const sinInWithEmail=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

      }

      const logout=()=>{
        return signOut(auth)
      }

      const updateuser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)

      }
      const resetPassword=( email)=>{
        return sendPasswordResetEmail(auth, email)
      }

      const checkUser=(email)=>{
        return fetchSignInMethodsForEmail(auth, email)

      }

      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
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
        logout,
        loading,
        setLoading,
        updateuser,
        resetPassword,
        checkUser

    }
    return <AuthContext value={authData}> {children}</AuthContext>

};

export default AuthProvider;
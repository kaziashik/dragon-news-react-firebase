import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loding from '../pages/Loding';

const PrivatRout = ({ children }) => {
     const location=useLocation()

    const { user,loading } = use(AuthContext)
    // console.log("user_check", user);

    if(loading){
        return <Loding></Loding>
    }
    //if->user exist theke return childern

    if (user && user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }



    //if user not exit navigate==>login
}

export default PrivatRout;
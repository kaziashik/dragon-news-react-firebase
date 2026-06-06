import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import usericon from "../../assets/user.png"
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {
  const { user, logout } = use(AuthContext)
 

  const handelLogout = () => {
    // console.log("clickogout");
    logout()
      .then(() => {
        alert("Your Logged Out Successfully")
      }).catch((error) => {
        // console.log(error);
      })

  }
  return (
    <div className='relative flex items-center py-4 gap-5 px-5'>
      <div className="div">{user && user.email}</div>
      <div className="mx-auto flex gap-5 text-accent ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full" src={user ?   user.photoURL : usericon} alt="" />
        {user ? <button onClick={handelLogout}>LogOut</button> : <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>}

      </div>
    </div>
  );
};

export default NavBar;
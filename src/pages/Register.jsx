import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { usercreatEmailPassword, setUser, user } = use(AuthContext)
    const handelRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        usercreatEmailPassword(email, password)
            .then(result => {
                const user=result.user
                setUser(user)

            }).catch((error) => {
                const errorCode=error.code;
                const errorMesssage=error.message;
                alert(errorMesssage)
            })



        // console.log("register clicked", name, photo, email, password);

    }
    return (
        <div className=" flex justify-center min-h-screen items-center ">
            <div className="cardbg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'> Register your account</h2>
                <form onSubmit={handelRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* Name */}
                        <label className="label">Your Name</label>
                        <input type="text" className="input" name="name" placeholder="Enter your Name" required />

                        {/* PhotoUrl */}
                        <label className="label">Photo URL</label>
                        <input type="textl" className="input" name="photo" placeholder="Enter your photoURL" required />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Enter your email address" required/>

                        {/* Password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" name="password" placeholder=" Enter your Password" required/>

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'> Have An Account ? <Link to="/auth/login" className="text-secondary"> Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("")
    const { sinInWithEmail } = use(AuthContext)
    const handleLocation = useLocation()
    const navigate = useNavigate()

    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("checkLogin", email, password);

        sinInWithEmail(email, password)
            .then(result => {
                console.log(result);
                navigate(`${handleLocation.state ? handleLocation.state : "/"}`)
            }).catch((error) => {
                const errorCode = error.code;
                // const errorMessage=error.message;
                // alert(errorCode,errorMessage)
                setError(errorCode)

            });


    }
    return (


        <div className=" flex justify-center min-h-screen items-center ">
            <div className="cardbg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'> Login your account</h2>
                <form onSubmit={handelLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label" >Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {error && <p className='text-red-500'>{error}</p>}

                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center pt-5'>Dont’t Have An Account ? <Link to="/auth/register" className="text-secondary"> Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;
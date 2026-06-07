import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';

const ForgetPassword = () => {
    const { resetPassword, checkUser } = use(AuthContext)
    const navigate=useNavigate()

    const handelPasswordReset = (e) => {
        e.preventDefault();

        const email = e.target.email.value;


        resetPassword(email)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Request Submitted",
                    text: "If this email is registered, a reset link has been sent. Please check your inbox or spam folder.",
                    timer: 4000,
                    showConfirmButton: false
                }).then(()=>{
                    navigate("/auth/login")
                })

                e.target.reset();
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Reset Failed",
                    text: error.message
                });
            });
    };


    return (
        <div className=" flex justify-center min-h-screen items-center ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'> Reset Password</h2>
                <p className="text-center text-gray-500 px-5">
                    Enter your email address and a password reset link will be sent to you.
                </p>
                <form onSubmit={handelPasswordReset} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label" >Your Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required />

                        {/* {error && <p className='text-red-500'>{error}</p>} */}

                        <button className="btn btn-neutral mt-4">Reset Password</button>
                        <p className='font-semibold text-center pt-5'>Dont’t Have An Account ? <Link to="/auth/register" className="text-secondary"> Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
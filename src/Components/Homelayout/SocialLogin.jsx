import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    const navigate = useNavigate()
      const handleLocation = useLocation()
    const { loginWIthGoodle, loginEithGithub } = use(AuthContext)

    const handelGoogleLogin = (e) => {
        e.preventDefault();

        loginWIthGoodle()
            .then((result) => {

                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    text: `Welcome ${result.user.displayName || result.user.email}!`,
                    timer: 2000,
                    showConfirmButton: false
                });
                navigate(`${handleLocation.state ? handleLocation.state : "/"}`)

            })
            .catch((error) => {

                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message
                });

            });
    };

    const handleGithupLogin = (e) => {
        e.preventDefault()

        loginEithGithub()
            .then((result) => {

                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    text: `Welcome ${result.user.displayName || result.user.email}!`,
                    timer: 2000,
                    showConfirmButton: false
                });

                navigate(`${handleLocation.state ? handleLocation.state : "/"}`)

            })
            .catch((error) => {

                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message
                });

            });

        console.log("click_Githup_loging");
    }
    return (
        <div>
            <h2 className="font-bold mb-5"> Login with</h2>
            <div className="space-y-3">
                <button className='btn btn-outline btn-secondary w-full' onClick={handelGoogleLogin}> <FcGoogle size={24} />Login with Google</button>
                <button className='btn btn-outline btn-primary w-full' onClick={handleGithupLogin}> <ImGithub size={24} />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
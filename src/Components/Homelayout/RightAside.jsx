import React, { use } from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzoon from './Qzoon';
import { AuthContext } from '../../provider/AuthProvider';

const RightAside = () => {
    const {user}=use(AuthContext)
    return (
        <div className='space-y-8'>
            {!user && <SocialLogin></SocialLogin>}
            <FindUs></FindUs>
            <Qzoon></Qzoon>
        </div>
    );
};

export default RightAside;
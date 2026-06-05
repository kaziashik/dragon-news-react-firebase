import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzoon from './Qzoon';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzoon></Qzoon>
        </div>
    );
};

export default RightAside;
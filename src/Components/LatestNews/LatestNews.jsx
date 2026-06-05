import React from 'react';
import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default || MarqueeModule;

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2 '>latest</p>
            <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, impedit!</p>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, impedit!</p>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, impedit!</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;
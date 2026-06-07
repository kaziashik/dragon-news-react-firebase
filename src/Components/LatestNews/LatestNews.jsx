import React from 'react';
import MarqueeModule from "react-fast-marquee";
import { Link } from 'react-router';

const Marquee = MarqueeModule.default || MarqueeModule;

const LatestNews = ({ data }) => {


    const latestNews = data.filter((news) =>
        news.others?. is_today_pick === true)
    // console.log("from_latest_news", data);

    // console.log("from_latest_news", latestNews);





    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2 '>latest</p>
            <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
                {
                    
                    latestNews.map(news=>(
                        <Link key={news.id} className='font-bold mr-10' to={`/news-details/${news.id}`}>
                            {news.title}
                        </Link>
                    ))
                }
                {/* <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, impedit!</p>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, impedit!</p>
                <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, impedit!</p> */}
            </Marquee>

        </div>
    );
};

export default LatestNews;
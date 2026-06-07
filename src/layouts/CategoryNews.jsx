import React, { useEffect, useState } from 'react';
import { useLoaderData, useOutletContext, useParams } from 'react-router';
import NewsCard from '../Components/Homelayout/NewsCard';

const CategoryNews = () => {
    const { id } = useParams()
const {data} = useOutletContext()
    const [categoryNews, setCategorynews] = useState([])



    useEffect(() => {
        if (id == "0") {
            setCategorynews(data)
            return;
        } else if (id == "1") {
            const filteredNews = data.filter((news) => news.
                others.is_today_pick == true);
            setCategorynews(filteredNews)
            return;
        }
        else {
            const filteredNews = data.filter((news) => news.category_id == id)
            setCategorynews(filteredNews)
        }
    }, [data, id])


    return (
        <div>
            <h2 className='font-bold'>
                Total  <span className="text-secondary mb-5">{categoryNews.length} News Found</span>
            </h2>
            <div className="grid grid-cols-1 gap-5">
               {
                categoryNews.map(news=>( <NewsCard key={news.id} news={news}></NewsCard>))
               }
            </div>
        </div>
    );
};

export default CategoryNews;
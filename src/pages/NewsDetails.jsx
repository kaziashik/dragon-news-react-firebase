import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import RightAside from '../Components/Homelayout/RightAside';
import { Link, useLoaderData, useParams } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import NewsDetilsCard from '../Components/NewsDetilsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news,setNews]=useState({})

    useEffect(()=>{
        const newsDetails=data.find(singleNews => singleNews.id === id);
        setNews(newsDetails)
    },[data, id])
    // const news = data.find(singleNews => singleNews.id === id);
    // console.log("newsDetails", data, id, news);

    if (!news) {
        return <h2>News not found</h2>;
    }


    return (
        <div>
             <header className="py-3">
                <Header></Header>
                <nav className='w-11/12 mx-auto my-3'>
                    <NavBar></NavBar>
                </nav>
            </header>

            <main className=' w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
                <section className="col-span-9">
                  <NewsDetilsCard news={news}></NewsDetilsCard>
                </section>

                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>

            </main>

        </div>
    );
};

export default NewsDetails;
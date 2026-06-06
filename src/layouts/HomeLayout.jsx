import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import NavBar from '../Components/NavBar/NavBar';
import LeftAsid from '../Components/Homelayout/LeftAsid';
import RightAside from '../Components/Homelayout/RightAside';
import Loding from '../pages/Loding';

const HomeLayout = () => {
    const {state}=useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <NavBar></NavBar>
                </nav>
            </header>

            <main className=' w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>

                <aside className='col-span-3 sticky top-0 h-fit'> 
                    <LeftAsid></LeftAsid>
                    </aside>
                <section className='col-span-6'>
                   {state =="loading" ? <Loding></Loding> : <Outlet></Outlet> } 
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'> 
                    <RightAside></RightAside>
                    </aside>

            </main>
        </div>
    );
};

export default HomeLayout;
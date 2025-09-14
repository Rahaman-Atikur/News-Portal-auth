import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section>
                <LatestNews></LatestNews>
            </section>
            <div className="left-nav"></div>
            <div className="main">
                <Outlet></Outlet>
            </div>
            <div className="right-nav"></div>
        </div>
    );
};
export default HomeLayout;
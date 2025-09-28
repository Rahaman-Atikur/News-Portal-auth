import React from 'react';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside';

const NewsDetails = () => {
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-3'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;
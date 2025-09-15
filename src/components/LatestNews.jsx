import React from 'react';
import Marquee from 'react-fast-marquee';
const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <p className='font-bold'>This is extremely good News and
                    therefore , we don't know
                    what is this , This is how we think
                    and can't tell how should this work.
                </p>
                <p className='font-bold'>This is extremely good News and
                    therefore , we don't know
                    what is this , This is how we think
                    and can't tell how should this work.
                </p>
                <p className='font-bold'>This is extremely good News and
                    therefore , we don't know
                    what is this , This is how we think
                    and can't tell how should this work.
                </p>
                <p className='font-bold'>This is extremely good News and
                    therefore , we don't know
                    what is this , This is how we think
                    and can't tell how should this work.
                </p>
            </Marquee>

        </div>
    );
};
export default LatestNews;
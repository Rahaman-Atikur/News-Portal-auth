import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    console.log(news);
    return (
        <div className='space-y-5'>
            <h2>{news.title}</h2>
            <img className='w-full h-350px object-cover' src={news.image_url} alt="" />
            <p>{news.details}</p>
            <Link className='btn btn-primary' to={`/category/${news.category_id}`}>Back to News Category</Link>

        </div>
    );
};

export default NewsDetailsCard;
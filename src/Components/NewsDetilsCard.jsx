import React from 'react';
import { Link } from 'react-router';

const NewsDetilsCard = ({news}) => {
    return (
        <div>
            <h2 className="font-bold mb-5">Dragon News</h2>

            <div className="card bg-base-100 border p-5 space-y-5">
                <img
                    src={news.image_url}
                    alt={news.title}
                    className="w-full h-[350px] object-cover rounded-md"
                />

                <h1 className="text-2xl font-bold mt-6 mb-3">
                    {news.title}
                </h1>

                <p className="text-gray-500 text-sm mb-4">
                    {news.author?.published_date}
                </p>

                <p className="text-gray-600 leading-7">
                    {news.details}
                </p>

                <div className="mt-6">
                    <Link
                        to={`/category/${news.category_id}`}
                        className="btn btn-secondary"
                    >
                        ← All news in this category
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetilsCard;
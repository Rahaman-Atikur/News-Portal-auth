import React from "react";
import { FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-xl  rounded-lg p-4">
      {/* Author Info */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{news.author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg mb-3">{news.title}</h2>

      {/* Thumbnail */}
      <figure>
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="rounded-lg w-full"
        />
      </figure>

      {/* Details */}
      <p className="mt-3 text-gray-700">
        {news.details.slice(0, 150)}...
        <span className="text-primary font-semibold cursor-pointer">
          {" "}
          Read More
        </span>
      </p>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`text-orange-400 text-lg ${
                i < news.rating.number ? "opacity-100" : "opacity-30"
              }`}
            >
              ★
            </span>
          ))}
          <span className="ml-1 font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

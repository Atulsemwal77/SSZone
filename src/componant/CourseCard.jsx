import React from "react";
import { useState } from "react";
import {  Star, BookOpen } from "lucide-react";



const CourseCard = ({
  image,
  duration,
  title,
  description,
  lessons,
  rating,
  price,
  
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-md  p-4 bg-white ">
      {/* Image and Badge */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-52 object-cover"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-xs rounded-full font-medium">
          {duration}
        </div>
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 bg-white p-1 rounded-full shadow cursor-pointer"
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Course Info */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>

        {/* Lessons and Rating */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
          <span className="flex items-center gap-1">
            <BookOpen size={16} /> {lessons} Lessons
          </span>
          <span className="flex items-center gap-1">
            <Star size={16} className="text-red-500" /> {rating}
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-red-600 font-semibold text-lg">₹ {price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-md transition  cursor-pointer duration-300 ease-in-out  hover:scale-105">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

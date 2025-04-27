import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays,  ArrowRight } from 'lucide-react';

function BlogCard({ title, description, date, image }) {
  return (
    <div>
      <div className="h-[400px] flex flex-col justify-between max-w-sm rounded-xl shadow-md p-4 bg-white">
        <img
          src={image}
          alt="Course Cover"
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4 " />
            <p className=" font-bold">{date}</p>
          </div>
          <Link to="/" className="text-blue-600 hover:underline font-medium flex items-center  gap-1">
            Read More <ArrowRight  size={16} className="mt-[3px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

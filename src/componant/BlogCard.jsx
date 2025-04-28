// import React from "react";
// import { Link } from "react-router-dom";
// import { CalendarDays,  ArrowRight } from 'lucide-react';

// function BlogCard({ title, description, date, image }) {
//   return (
//     <div>
//       <div className="h-[400px] flex flex-col justify-between max-w-sm rounded-xl shadow-md p-4 bg-white">
//         <img
//           src={image}
//           alt="Course Cover"
//           className="rounded-lg mb-4 w-full h-48 object-cover"
//         />
//         <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
//         <p className="text-sm text-gray-600 mb-4">{description}</p>
//         <div className="flex items-center justify-between text-sm text-gray-500">
//           <div className="flex items-center gap-1">
//             <CalendarDays className="w-4 h-4 " />
//             <p className=" font-bold">{date}</p>
//           </div>
//           <Link to="/" className="text-blue-600 hover:underline font-medium flex items-center  gap-1">
//             Read More <ArrowRight  size={16} className="mt-[3px]" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogCard;
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function BlogCard({ blog, handleBlogClick }) {
  if (!blog) return null;

  return (
    <div
      className="cursor-pointer  rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col py-4 px-6 gap-4 items-center ml-0   shadow-md"
      onClick={() => handleBlogClick(blog)}
    >
      <img src={blog.image} alt={blog.title} className=" h-48 object-cover  " />
      <h1 className="text-xl font-semibold text-gray-800 mb-2 place-self-start" >
        {blog.title}
      </h1>

      <h3 className="text-gray-600 text-sm mb-4 place-self-start sm:w-full">
        {blog.description}
      </h3>

      <div className='flex justify-between items-center gap-3  flex-col sm:flex-row w-full ' >
        <p className="text-gray-600 text-sm">{blog.date}</p>
        <button
          className="text-blue-600 font-medium hover:underline flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            handleBlogClick(blog);
          }}
        >
          Read More <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}

export default BlogCard;

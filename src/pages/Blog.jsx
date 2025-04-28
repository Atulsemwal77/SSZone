// import React from 'react'
// import bgImage from '../assets/image/blog.jpg'
// import blogimg from '../assets/image/card.jpg'
// import { Link, useNavigate } from 'react-router-dom';

// export const Blog = () => {
//     const navigate = useNavigate();

//     const handleBlogClick = (blog) => {
//         navigate(`/blogs/${blog.id}`, { state: { blog } });
//     };

//     const blogData = [
//         {
//             id: 1,
//             title: "Introduction to JavaScript for the Beginner",
//             description: "Learn the fundamentals of JavaScript from scratch and start building interactive web pages...",
//             date: "10 Apr, 2025",
//             image: blogimg,
//             about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
//         },
//         {
//             id: 2,
//             title: "Mastering React Hooks",
//             description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
//             date: "18 Apr, 2025",
//             image: blogimg,
//             about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
//         },
//         {
//             id: 3,
//             title: "Mastering React Hooks",
//             description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
//             date: "18 Apr, 2025",
//             image: blogimg,
//             about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
//         },
//         {
//             id: 4,
//             title: "Mastering React Hooks",
//             description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
//             date: "18 Apr, 2025",
//             about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
//             image: blogimg
//         },
//         {
//             id: 5,
//             title: "Mastering React Hooks",
//             description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
//             date: "18 Apr, 2025",
//             image: blogimg,
//             about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

//         },
//         {
//             id: 6,
//             title: "Mastering React Hooks",
//             description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
//             date: "18 Apr, 2025",
//             image: blogimg,
//             about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

//         },
//         {
//             id: 7,
//             title: "Mastering React Hooks",
//             description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
//             date: "18 Apr, 2025",
//             image: blogimg,
//             about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

//         },
//         {
//             id: 8,
//             title: "Mastering React Hooks",
//             description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
//             date: "18 Apr, 2025",
//             image: blogimg,
//             about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

//         },
//         {
//             id: 9,
//             title: "Mastering React Hooks",
//             description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
//             date: "18 Apr, 2025",
//             image: blogimg,
//             about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

//         },
//         // Add more entries as needed
//     ];

//     return (
//         <>
//             <div
//                 className="h-[60vh] w-full bg-cover bg-center flex items-center"
//                 style={{ backgroundImage: `url(${bgImage})` }}
//             >
//                 <div className="bg-black/50 p-8 rounded-lg ml-10 w-full md:w-3/5 text-white">
//                     <h1 className="text-4xl font-bold mb-4">Blog</h1>
//                     <p className="text-lg leading-relaxed">
//                         Discover helpful articles, expert tips, and the latest trends in online learning. Stay informed and inspired as you grow your skills and career.
//                     </p>
//                 </div>
//             </div>
//             <div className='flex flex-col items-center py-6 gap-6 justify-center text-center  border'>
//                 <div>
//                     <h3 className='text-2xl text-blue-700 tracking-wider '>Blog</h3>
//                     <h1 className='text-4xl  font-bold tracking-wide'>Ideas That Inspire Learning</h1>
//                     <p className='mt-3'>Stay updated with the latest insights, tips, and trends from our expert blog posts.</p>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6  w-3/4 border ">
//                     {blogData.map((blog) => (
//                         <div
//                             key={blog.id}
//                             onClick={() => handleBlogClick(blog)}
//                             className="flex flex-col p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 max-w-md gap-4 cursor-pointer"
//                         >
//                             <img src={blog.image} alt="Blog" className="rounded-lg mb-4 object-cover h-60 w-full" />

//                             <h1 className="text-xl font-semibold text-gray-800 mb-2">
//                                 {blog.title}
//                             </h1>

//                             <h3 className="text-gray-600 text-sm mb-4">
//                                 {blog.description}
//                             </h3>

//                             <div className="flex justify-between items-center mt-auto px-3 ">
//                                 <p className="text-gray-500 text-lg">
//                                     <span className="mr-1">📅</span>{blog.date}
//                                 </p>
//                                 <Link to={`/blogs/${blog.id}`} state={blog} className="text-blue-500 hover:text-blue-700 font-semibold">
//                                     <button className="text-blue-600 font-medium hover:underline">
//                                         Read More →
//                                     </button></Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Blog
import React from 'react'
import bgImage from '../assets/image/blog.jpg'
import blogimg from '../assets/image/card.jpg'
import BlogCard from '../componant/BlogCard';
import { Link, useNavigate } from 'react-router-dom';

export const Blog = () => {
    const navigate = useNavigate();

    const handleBlogClick = (blog) => {
        navigate(`/blogs/${blog.id}`, { state: { blogData: blog, allBlogs: blogData } });
    };

    const blogData = [
        {
            id: 1,
            title: "Introduction to JavaScript for the Beginner",
            description: "Learn the fundamentals of JavaScript from scratch and start building interactive web pages...",
            date: "10 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
        },
        {
            id: 2,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
        },
        {
            id: 3,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
        },
        {
            id: 4,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",
            image: blogimg
        },
        {
            id: 5,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

        },
        {
            id: 6,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

        },
        {
            id: 7,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

        },
        {
            id: 8,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

        },
        {
            id: 9,
            title: "Mastering React Hooks",
            description: "Dive deep into React Hooks and learn how to manage state and side effects in functional components...",
            date: "18 Apr, 2025",
            image: blogimg,
            about: "JavaScript is a versatile programming language that powers the web. In this blog, we will explore the basics of JavaScript, including variables, data types, functions, and control structures. By the end of this article, you will have a solid foundation to start your journey into web development.",

        },
        // Add more entries as needed
    ];

    return (
        <>
            <div
                className="h-[60vh] w-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className=" p-8 rounded-lg ml-10 sm:w-2/3 text-black">
                    <h1 className="text-5xl font-bold mb-4">Blog</h1>
                    <p className="text-lg leading-relaxed">
                        Discover helpful articles, expert tips, and the latest trends in online learning. Stay informed and inspired as you grow your skills and career.
                    </p>
                </div>
            </div>
            <div className='flex flex-col items-center py-6 gap-6 justify-center text-center  '>
                <div>
                    <h3 className='text-2xl text-blue-700 tracking-wider '>Blog</h3>
                    <h1 className='text-4xl  font-bold tracking-wide'>Ideas That Inspire Learning</h1>
                    <p className='mt-3'>Stay updated with the latest insights, tips, and trends from our expert blog posts.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogData.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                            handleBlogClick={handleBlogClick}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Blog
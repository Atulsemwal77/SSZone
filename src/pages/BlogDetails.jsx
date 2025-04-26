import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ins from '../assets/image/ins.jpg';
import related from '../assets/image/related.jpg';
import { useForm } from 'react-hook-form';
import blogimg from '../assets/image/img.jpg';
import { CiFacebook } from "react-icons/ci"
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiBasketball } from "react-icons/ci";

const BlogDetails = () => {
  const relatedBlog = [
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
    }
  ];
  const { state } = useLocation();
  const blog = state?.blog;

  if (!blog) return <div className="text-center py-10">Blog not found</div>;

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log('Form Data:', data);

  return (
    <div className=" container  mx-auto grid grid-cols-1 border">
      {/* Banner */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl">
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-15  px-3 border-2">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-gray-50 p-6 rounded-xl shadow">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
              <div className="flex items-center gap-4">
                <img src={ins} alt="Instructor" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="font-medium">Dylan Meringue</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{blog.date}</p>
              </div>
            </div>
          </section>

          <section className="px-4 max-w-none">
            <p>{blog.about}</p>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl shadow italic text-gray-600">
            “This blog offers a clear and beginner-friendly introduction to JavaScript, making it an
            excellent starting point for new learners.”
            <p className="mt-4 text-right font-semibold text-gray-800">— Dylan Meringue</p>
          </section>

          <section className="flex flex-wrap items-center gap-4 border-t pt-4">
            <span className="text-gray-500 font-semibold">Tags:</span>
            {['Education', 'Branding', 'JavaScript', 'Social'].map(tag => (
              <button key={tag} className="bg-gray-100 px-3 py-2 rounded-md text-lg text-gray-600">
                {tag}
              </button>
            ))}
            <div className='flex gap-5  border-2  '>
              <CiBasketball size={30} />
              <CiFacebook size={30} />
              <CiLinkedin size={30} />
              <CiTwitter size={30} />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 ">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
            <ul className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="flex items-center gap-4 shadow-md shadow-gray-400">
                  <img src={related} alt="Recent Post" className="w-16 h-16 rounded object-cover" />
                  <div>
                    <p className="text-sm text-gray-500">📅 April 20, 2025</p>
                    <p className="font-medium">Why online learning is the key to career growth</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Related Blogs */}
      <section className="space-y-6 py-8 ">
        <div className="text-center">
          <h2 className="text-gray-500 uppercase tracking-wide">Related Blogs</h2>
          <h3 className="text-2xl font-bold">Top Picks for You</h3>
          <p className="text-gray-600">Discover the most interesting reads selected for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {relatedBlog.map(blog => (
            <div key={blog.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover rounded-md mb-4" />
              <h4 className="font-semibold text-lg mb-2 px-4">{blog.title}</h4>
              <p className="text-sm text-gray-500 mb-4">{blog.description}</p>
              <div className="flex justify-between items-center px-4">
                <p className="text-sm text-gray-400">📅 {blog.date}</p>
                <Link to={`/blogs/${blog.id}`} state={blog} className="text-blue-600 font-medium px-6">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comments & Form */}
      <section className="max-w-2xl border space-y-6 ml-40">
        <h2 className="text-2xl font-bold">Comments</h2>
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="flex gap-4 bg-white p-4 rounded-xl shadow">
            <img src={ins} alt="Commenter" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Apr 24, 2025 • 10:30 AM</p>
              <p className="mt-2 text-gray-700">This is a really thoughtful article. I enjoyed reading your take on building good habits—thanks for sharing!</p>
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="text-xl font-bold">Leave a Comment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input {...register('firstName', { required: true })} className="w-full border rounded px-3 py-2" />
              {errors.firstName && <p className="text-red-500 text-xs">First name is required</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input {...register('lastName', { required: true })} className="w-full border rounded px-3 py-2" />
              {errors.lastName && <p className="text-red-500 text-xs">Last name is required</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input {...register('email', { required: true })} className="w-full border rounded px-3 py-2" />
              {errors.email && <p className="text-red-500 text-xs">Enter a valid email</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Phone Number</label>
              <input {...register('phoneNumber', { required: true })} className="w-full border rounded px-3 py-2" />
              {errors.phoneNumber && <p className="text-red-500 text-xs">Enter a valid phone number</p>}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Comment</label>
              <textarea {...register('comment', { required: true })} className="w-full border rounded px-3 py-2 h-24 resize-none"></textarea>
              {errors.comment && <p className="text-red-500 text-xs">Comment is required</p>}
            </div>
          </div>
          <div className="flex items-center">
            <input {...register('agree', { required: true })} type="checkbox" className="mr-2" />
            <label className="text-sm text-gray-700">I agree that my data is collected and stored</label>
          </div>
          {errors.agree && <p className="text-red-500 text-xs">You must agree to continue</p>}
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Post Comment</button>
        </form>
      </section>
    </div>
  );
};

export default BlogDetails;

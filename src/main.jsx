// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css'
// import App from './App.jsx'
// import { CartProvider } from './context/CartContext.jsx';



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <CartProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     </CartProvider>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Courses from './pages/Courses.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Cart from './pages/Cart.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import CourseDetails from './pages/courseDetails.jsx';
import Dashboard from './componant/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'courses', element: <Courses /> },
      { path: 'wishlist', element: <Wishlist /> },
      { path: 'cart', element: <Cart /> },
      { path: 'blogs', element: <Blog /> },
      { path: 'blogs/:id', element: <BlogDetails /> },
      { path: 'courseDetailsOverview/:courseId', element: <CourseDetails /> }
    ]
  },
  {path : '/dashboard' , element : <Dashboard/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);






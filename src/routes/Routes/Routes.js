import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import AddReview from "../../pages/AddReview/AddReview";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Service from "../../pages/Service/Service";
import Services from "../../pages/Services/Services";
import SignUp from "../../pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://dentistbhai-server-ehsan-info.vercel.app/firstServices')
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://dentistbhai-server-ehsan-info.vercel.app/service/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addReview/:id',
                element: <AddReview></AddReview>,
                loader: ({ params }) => fetch(`https://dentistbhai-server-ehsan-info.vercel.app/service/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            }
        ]
    },
    {
        path: '*',
        element: <div className='font-mono my-3'>
            <p className='text-6xl font-bold my-3 text-orange-600'>404</p>
            <p className='text-7xl font-bold my-3 text-zinc-500'>This route is not found</p>
            <p className=' text-zinc-500'>Go to</p>
        </div>
    }

])
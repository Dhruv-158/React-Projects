/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store/store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { AuthLayout, Login } from './components/index.js';
import AddPost from "./pages/AllPosts";
import Signup from './pages/Signup';
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from './pages/AllPosts';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: (
                        <Login />
                ),
            },
            {
                path: "/signup",
                element: (
                        <Signup />
                ),
            },
            {
                path: "/all-posts",
                element: <AllPosts />,
            },
            {
                path: "/add-post",
                Element: <AddPost />,
            },
            {
                path: "/edit-post/:slug",
                element: <EditPost />,
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);

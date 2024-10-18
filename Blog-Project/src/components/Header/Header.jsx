/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authService from '../../Appwrite/Auth';
import { Container, LogoutBtn, Logo } from '../index';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location

    const navItems = [
        {
            name: 'Home',
            slug: '/',
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
    ];

    return (
        <header className='py-3 shadow bg-gray-500 overflow-hidden'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {item.active !== false && ( // Check if the item is active
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className={`inline-block px-6 py-2 duration-200 ${
                                            location.pathname === item.slug
                                                ? 'text-white ' // Active styles
                                                : 'hover:text-white'
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                )}
                            </li>
                        ))}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;

// Layout.js
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import LargeWithAppLinksAndSocial from './Footer';
import WithSubnavigation from './Navbar';
function Layout() {
    return (
        <ChakraProvider>
            <WithSubnavigation />
            <div>
                <header>
                    <h1>My App</h1>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
            <LargeWithAppLinksAndSocial />
        </ChakraProvider>

    );
}

export default Layout;
import { Show } from '@chakra-ui/react';
import { Header } from './Header';
import { SidebarItems } from './SidebarItems';
import { Footer } from './Footer';
import { SidebarNav } from './SidebarNav';
import { Outlet } from 'react-router-dom';
import './Layout.css';

export const Layout = () => (
    <div id="app">
        <Header />
        {/* Left side */}
        <Show breakpoint="(min-width: 600px)">
            <SidebarNav />
        </Show>
        {/* Router outlet */}
        <main>
            <Outlet />
        </main>
        {/* Right side */}
        <Show breakpoint="(min-width: 1080px)">
            <SidebarItems />
        </Show>
        <Footer />
    </div>
);

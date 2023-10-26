import { Show } from '@chakra-ui/react';
import { Header } from './Header';
import { SidebarItems } from './SidebarItems';
import { Footer } from './Footer';
import { SidebarNav } from './SidebarNav';
import './Layout.css';
import { AllQuestions } from '../../all-questions/components/AllQuestions';

export const Layout = () => (
    <div id="app">
        <Header />
        <Show breakpoint="(min-width: 600px)">
            <SidebarNav />
        </Show>
        <main>
            <AllQuestions />
        </main>
        <Show breakpoint="(min-width: 1080px)">
            <SidebarItems />
        </Show>
        <Footer />
    </div>
);

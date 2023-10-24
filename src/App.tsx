import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './Header';
import './App.css';
import { Question } from './Question';
import { SidebarNav } from './SidebarNav';
import { Footer } from './Footer';
import { SidebarItems } from './SidebarItems';

function App() {
    return (
        <>
            <ChakraProvider>
                <div id="app">
                    <Header />
                    <SidebarNav />
                    <main>
                        {/* Router Outlet here */}
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                    </main>
                    <SidebarItems />
                    <Footer />
                </div>
            </ChakraProvider>
        </>
    );
}

export default App;

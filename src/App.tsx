import { ChakraProvider, Show } from '@chakra-ui/react';
import { Header } from './Header';
import './App.css';
import { Question } from './Question';
import { SidebarNav } from './SidebarNav';
import { Footer } from './Footer';
import { SidebarItems } from './SidebarItems';
import { questions } from './mock';

const App = () => (
    <>
        <ChakraProvider>
            <div id="app">
                <Header />
                <Show breakpoint="(min-width: 600px)">
                    <SidebarNav />
                </Show>
                <main>
                    {questions.map((question) => (
                        <Question {...question} />
                    ))}
                    {/* Router Outlet here */}
                </main>
                <Show breakpoint="(min-width: 1080px)">
                    <SidebarItems />
                </Show>
                <Footer />
            </div>
        </ChakraProvider>
    </>
);

export default App;

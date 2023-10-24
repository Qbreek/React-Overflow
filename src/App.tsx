import { ChakraProvider, Show, Spinner } from '@chakra-ui/react';
import { Header } from './Header';
import './App.css';
import { Question, QuestionProps } from './Question';
import { SidebarNav } from './SidebarNav';
import { Footer } from './Footer';
import { SidebarItems } from './SidebarItems';
import { useEffect, useState } from 'react';

const App = () => {
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://api.stackexchange.com/2.3/questions?order=desc&sort=creation&site=stackoverflow',
            {
                method: 'GET',
            }
        )
            .then((res) => res.json())
            .then((data) => setQuestions(data.items))
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <ChakraProvider>
                <div id="app">
                    <Header />
                    <Show breakpoint="(min-width: 600px)">
                        <SidebarNav />
                    </Show>
                    <main>
                        {isLoading ? (
                            <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="xl"
                            />
                        ) : (
                            questions.map((question) => <Question {...question} />)
                        )}
                    </main>
                    <Show breakpoint="(min-width: 1080px)">
                        <SidebarItems />
                    </Show>
                    <Footer />
                </div>
            </ChakraProvider>
        </>
    );
};

export default App;

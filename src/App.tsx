import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './features/layout/components/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AllQuestions } from './features/all-questions/components/AllQuestions';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'questions',
                element: <AllQuestions />,
            },
        ],
    },
]);

const App = () => {
    return (
        <>
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        </>
    );
};

export default App;

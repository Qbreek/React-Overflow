import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './features/layout/components/Layout';
import { AllQuestions } from './features/all-questions/components/AllQuestions';

export const router = createBrowserRouter([
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

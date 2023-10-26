import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './features/layout/components/Layout';

const App = () => {
    return (
        <>
            <ChakraProvider>
                <Layout />
            </ChakraProvider>
        </>
    );
};

export default App;

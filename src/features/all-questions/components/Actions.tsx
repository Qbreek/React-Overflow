import { Text } from '@chakra-ui/react';
import './Actions.css';
import { Filters } from './Filters';

export const Actions = () => {
    return (
        <section className="all-questions-actions-container">
            <Text fontSize="3xl">All questions</Text>
            <Text fontSize="lg">Sort by</Text>
            <Filters />
        </section>
    );
};

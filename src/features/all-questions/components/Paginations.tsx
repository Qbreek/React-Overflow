import { Button, Text } from '@chakra-ui/react';
import { pageAtom } from '../state/PageAtom';
import { useAtom } from 'jotai';
import './Pagination.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export const Pagination = () => {
    const [page, setPage] = useAtom(pageAtom);

    return (
        <section className="pagination">
            <Button
                leftIcon={<ArrowLeftIcon />}
                colorScheme="white"
                textColor="black"
                size="md"
                borderRadius="0px"
                onClick={() => setPage((prev) => (prev === 1 ? 1 : prev - 1))}
            >
                Prev
            </Button>
            <Text>{page}</Text>
            <Button
                rightIcon={<ArrowRightIcon />}
                colorScheme="white"
                textColor="black"
                size="md"
                borderRadius="0px"
                onClick={() => setPage((prev) => prev + 1)}
            >
                Next
            </Button>
        </section>
    );
};

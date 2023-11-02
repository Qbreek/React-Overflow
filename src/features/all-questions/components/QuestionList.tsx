import { Center, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Question, QuestionProps } from './Question';
import { pageAtom } from '../state/PageAtom';
import { useAtom } from 'jotai';

export const QuestionList = () => {
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page] = useAtom(pageAtom);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://api.stackexchange.com/2.3/questions?page=${page}&order=desc&site=stackoverflow`
        )
            .then((res) => res.json())
            .then((data) => setQuestions(data.items))
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }, [page]);

    return (
        <ul>
            {isLoading ? (
                <Center h="100vh" color="white">
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                    />
                </Center>
            ) : (
                questions.map((question) => (
                    <li>
                        <Question {...question} />
                    </li>
                ))
            )}
        </ul>
    );
};

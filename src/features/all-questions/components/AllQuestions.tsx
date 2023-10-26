import { useEffect, useState } from 'react';
import { Question, QuestionProps } from './Question';
import { Spinner } from '@chakra-ui/react';
import { questions } from '../mock/questions';

export const AllQuestions = () => {
    // const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(
    //         'https://api.stackexchange.com/2.3/questions?order=desc&sort=creation&site=stackoverflow',
    //         {
    //             method: 'GET',
    //         }
    //     )
    //         .then((res) => res.json())
    //         .then((data) => setQuestions(data.items))
    //         .catch((error) => console.log(error))
    //         .finally(() => setIsLoading(false));
    // }, []);

    return (
        <ul>
            {isLoading ? (
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
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

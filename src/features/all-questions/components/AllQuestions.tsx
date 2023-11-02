import { Actions } from './Actions';
import { Pagination } from './Paginations';
import { QuestionList } from './QuestionList';

export const AllQuestions = () => {
    return (
        <>
            <Actions />
            <QuestionList />
            <Pagination />
        </>
    );
};

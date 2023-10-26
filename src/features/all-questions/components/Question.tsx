import { Link, Tag, TagLabel } from '@chakra-ui/react';
import './Question.css';

export interface QuestionProps {
    tags: string[];
    owner: Owner;
    is_answered: boolean;
    view_count: number;
    answer_count: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    last_edit_date?: number;
    question_id: number;
    content_license?: string;
    link: string;
    title: string;
    closed_date?: number;
    closed_reason?: string;
    accepted_answer_id?: number;
}

interface Owner {
    account_id: number;
    reputation: number;
    user_id: number;
    user_type: string;
    profile_image: string;
    display_name: string;
    link: string;
    accept_rate?: number;
}

export const Question = (props: QuestionProps) => (
    <article className="question-item">
        <ul className="question-item-statistics">
            <li>{props.answer_count} answers</li>
            <li>{props.view_count} views</li>
        </ul>
        <section className="question-item-body">
            <Link color="teal.600" href={props.link}>
                {props.title}
            </Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus non fuga quod?
                Laboriosam, minima omnis. Ipsam minima fugiat reiciendis nulla at distinctio itaque
                sapiente sint consequuntur nesciunt, a quidem officiis!
            </p>
            <div className="question-item-info">
                <ul className="tags-container">
                    {props.tags.map((tag) =>
                        tag.length <= 16 ? (
                            <li>
                                <Tag colorScheme="blue">
                                    <TagLabel overflow="hidden"> {tag}</TagLabel>
                                </Tag>
                            </li>
                        ) : null
                    )}
                </ul>
            </div>
            <ul className="owner-container">
                <li>
                    <Link href={props.owner.link} color="blue.500">
                        {props.owner.display_name}
                    </Link>
                </li>
                <li>
                    <b>{props.owner.reputation}</b>
                </li>
                <li>asked {calcElapsedMinutesSinceCreation(props.creation_date)} minutes ago</li>
            </ul>
        </section>
    </article>
);

const calcElapsedMinutesSinceCreation = (unix: number) =>
    Math.floor((Date.now() - unix * 1000) / (1000 * 60));

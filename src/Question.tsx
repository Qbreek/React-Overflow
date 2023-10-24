import { Flex, Link, Tag } from '@chakra-ui/react';
import './Question.css';

export function Question() {
    return (
        <article className="question-item">
            <ul className="question-item-statistics">
                <li>0 votes</li>
                <li>0 answers</li>
                <li>2 views</li>
            </ul>
            <section className="question-item-body">
                <Link color="teal.600">Link to question</Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus non fuga
                    quod? Laboriosam, minima omnis. Ipsam minima fugiat reiciendis nulla at
                    distinctio itaque sapiente sint consequuntur nesciunt, a quidem officiis!
                </p>
                <Flex gap="2">
                    <Tag colorScheme="cyan">Javascript</Tag>
                    <Tag colorScheme="cyan">HTML</Tag>
                    <Tag colorScheme="cyan">Go</Tag>
                </Flex>
            </section>
        </article>
    );
}

import { Flex, Radio, RadioGroup } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { filterAtom } from '../state/Atoms';

export const Filters = () => {
    const [filter, setFilter] = useAtom(filterAtom);

    const handleFilterChange = (nextValue: string) => {
        setFilter(nextValue);
    };

    return (
        <>
            <RadioGroup onChange={(v) => handleFilterChange(v)} value={filter} size="sm">
                <Flex direction="row" gap="1.5" wrap="wrap">
                    <Radio value="activity">Activity</Radio>
                    <Radio value="creation">Creation</Radio>
                    <Radio value="votes">Votes</Radio>
                    <Radio value="hot">Hot</Radio>
                    <Radio value="week">Week</Radio>
                    <Radio value="month">Month</Radio>
                </Flex>
            </RadioGroup>
        </>
    );
};

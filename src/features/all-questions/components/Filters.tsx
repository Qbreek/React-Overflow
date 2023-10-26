import { Flex, Radio, RadioGroup } from '@chakra-ui/react';
import { useState } from 'react';

export const Filters = () => {
    const [value, setValue] = useState('creation');

    return (
        <>
            <RadioGroup onChange={setValue} value={value} size="sm">
                <Flex direction="row" gap="2" wrap="wrap">
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

import {
    ChakraProvider,
    Card,
    CardBody,
    Text,
    CardHeader,
    Stack,
    Box,
    StackDivider,
    Heading,
} from '@chakra-ui/react';

function App() {
    return (
        <>
            <ChakraProvider>
                <Card>
                    <CardHeader>
                        <Heading size="md">React overflow</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider />} spacing="4">
                            <Box>
                                <Heading size="xs" textTransform="uppercase">
                                    Summary
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                    Chakra UI works
                                </Text>
                            </Box>
                            <Box>
                                <Heading size="xs" textTransform="uppercase">
                                    Overview
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                                    illo, odit doloribus et exercitationem similique odio
                                    accusantium. Quis ipsa omnis, nostrum consequuntur quas quos ab
                                    cupiditate non odit similique asperiores.
                                </Text>
                            </Box>
                            <Box>
                                <Heading size="xs" textTransform="uppercase">
                                    Analysis
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Necessitatibus eligendi rerum ipsa ut, voluptatibus molestiae
                                    porro cupiditate hic dolore quas eveniet aliquam placeat!
                                    Distinctio delectus molestiae maiores! Sapiente, voluptatum
                                    porro?
                                </Text>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </ChakraProvider>
        </>
    );
}

export default App;

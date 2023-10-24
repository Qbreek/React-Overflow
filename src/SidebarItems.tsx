import { Box, Card, CardBody, CardHeader, Flex, Heading, Link, Text } from '@chakra-ui/react';
import './SidebarItems.css';

export const SidebarItems = () => (
    <section>
        <Card style={{ border: '1px solid #f4d27b', boxShadow: 'none' }}>
            <CardHeader style={{ borderBottom: '1px solid #f4d27b', backgroundColor: '#f9ebc8' }}>
                <Heading size="sm">The React blog</Heading>
            </CardHeader>

            <CardBody>
                <Box>
                    <Link fontSize="sm" href="https://react.dev/">
                        React Documentation
                    </Link>
                </Box>
            </CardBody>
        </Card>
        <Card style={{ border: '1px solid #f4d27b', boxShadow: 'none' }}>
            <CardHeader style={{ borderBottom: '1px solid #f4d27b', backgroundColor: '#f9ebc8' }}>
                <Heading size="sm">Technologies used</Heading>
            </CardHeader>

            <CardBody>
                <Flex direction="column" gap="4">
                    <Box>
                        <Link href="https://vitejs.dev/" fontSize="sm">
                            Vite
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://chakra-ui.com/" fontSize="sm">
                            ChakraUI
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://www.typescriptlang.org/" fontSize="sm">
                            Typescript
                        </Link>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    </section>
);

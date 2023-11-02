import { Box, Card, CardBody, CardHeader, Flex, Heading, Link } from '@chakra-ui/react';
import './SidebarItems.css';

export const SidebarItems = () => (
    <section className="sidebar-items">
        <Card
            style={{
                border: '1px solid #f4d27b',
                boxShadow: 'none',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0',
                backgroundColor: '#fdf8ed',
            }}
        >
            <CardHeader
                style={{
                    borderBottom: '1px solid #f4d27b',
                    backgroundColor: '#f9ebc8',
                }}
            >
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
        <Card
            style={{
                border: '1px solid #f4d27b',
                borderTop: 'none',
                borderTopLeftRadius: '0',
                borderTopRightRadius: '0',
                boxShadow: 'none',
                backgroundColor: '#fdf8ed',
            }}
        >
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
                    <Box>
                        <Link href="https://jotai.org/" fontSize="sm">
                            Jotai
                        </Link>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    </section>
);

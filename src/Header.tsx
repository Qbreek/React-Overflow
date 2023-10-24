import { DragHandleIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import './Header.css';
import {
    IconButton,
    Image,
    InputGroup,
    InputLeftElement,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Input,
    Show,
} from '@chakra-ui/react';

export const Header = () => (
    <header className="app-header">
        <section className="header-items-container">
            <ul className="desktop-list-anchors">
                <Link>
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
                        boxSize="50px"
                        objectFit="cover"
                    />
                </Link>
                <Link>About</Link>
                <Link>Products</Link>
                <Link>For Teams</Link>
            </ul>
            <ul className="mobile-burger">
                <Link>
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
                        boxSize="35px"
                        objectFit="cover"
                    />
                </Link>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Mobile navigation burger menu"
                        icon={<HamburgerIcon />}
                        variant="outline"
                        size="sm"
                    />
                    <MenuList>
                        <MenuItem as="a" href="#">
                            About
                        </MenuItem>
                        <MenuItem as="a" href="#">
                            Products
                        </MenuItem>
                        <MenuItem as="a" href="#">
                            For Teams
                        </MenuItem>
                    </MenuList>
                </Menu>
            </ul>
            <InputGroup size="sm">
                <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.600" />
                </InputLeftElement>
                <Input
                    type="text"
                    placeholder="Search..."
                    size="sm"
                    _placeholder={{ color: 'gray.900' }}
                />
            </InputGroup>
            <nav className="header-nav">
                <Link
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        borderRadius: '6px',
                        padding: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        backgroundColor: 'transparent',
                        color: '#3182ce',
                        border: '1px solid #2b6cb0',
                    }}
                >
                    Login
                </Link>
                <Link
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: 'white',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        backgroundColor: '#3182ce',
                        padding: '6px',
                    }}
                >
                    Sign Up
                </Link>
            </nav>
            <Show breakpoint="(max-width: 600px)">
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Mobile user management options menu"
                        icon={<DragHandleIcon />}
                        variant="outline"
                        size="sm"
                    />
                    <MenuList>
                        <MenuItem as="a" href="#">
                            Login
                        </MenuItem>
                        <MenuItem as="a" href="#">
                            Sign Up
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Show>
        </section>
    </header>
);

import { Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import './SidebarNav.css';

export function SidebarNav() {
    return (
        <nav className="sidebar">
            <Link as={ReactRouterLink} to="/questions">
                All Questions
            </Link>
        </nav>
    );
}

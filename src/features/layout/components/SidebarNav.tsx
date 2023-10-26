import { Link } from '@chakra-ui/react';
import './SidebarNav.css';

export function SidebarNav() {
    return (
        <nav className="sidebar">
            <Link>Home</Link>
            <Link>Tags</Link>
            <Link>Users</Link>
            <Link>Companies</Link>
        </nav>
    );
}

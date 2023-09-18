import{ useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsNavbarOpaque(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isNavbarOpaque ? 'opaque' : ''}`}>
            <div className="navbar-container">
                <FaBars className="checkbtn" onClick={toggleMenu} />
                <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
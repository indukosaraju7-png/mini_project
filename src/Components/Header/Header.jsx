import React, { useState } from 'react';
import { Link } from 'react-scroll';


const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const menuItems = [
        { to: 'home', label: 'Home' },
        { to: 'programs', label: 'Programs' },
        { to: 'reasons', label: 'Why Us' },
        { to: 'Plans', label: 'Plans' },
        { to: 'testimonial', label: 'Testimonials' }
    ];

    return (
        <nav className="relative z-50">
            <div className="flex items-center justify-between">
                

                {/* Desktop menu */}
                <ul className="hidden md:flex items-center space-x-8">
                    {menuItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                spy={true}
                                smooth={true}
                                onClick={() => setMenuOpened(false)}
                                className="text-white hover:text-orange-500 cursor-pointer transition-colors duration-300 text-sm font-medium"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

           
        </nav>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-zinc-900 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">
                        <Link to="/">My Website</Link>
                    </div>
                    <ul className="flex space-x-4">
                        <li className="text-white">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-white">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

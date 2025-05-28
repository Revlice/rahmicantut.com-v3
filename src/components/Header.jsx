import {useState} from "react";
import { Link } from 'react-scroll';
import { Cog,Menu,X } from 'lucide-react';

const Header = () => {
    const links = ['Home', 'Skills', 'Education', 'Contact', 'CV'];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="container mx-auto flex justify-between sticky top-4 items-center py-5.5 px-8 border-1 rounded border-stone-800 bg-background z-50">
            <div className="flex justify-center items-center gap-8">
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <X size={24} color="#ffffff"/>
                    ) : (
                        <Menu size={24} color="#ffffff"/>
                    )}
                </button>
                <h1 className="bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent text-xl ">
                    Rahmican TUT
                </h1>
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    {links.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-100}
                                activeClass="text-white font-semibold"
                                className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden transition-transform duration-300 translate-x-0">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={28}/>
                        </button>
                        <div
                            className="absolute top-0 left-0 h-full w-3/4 max-w-xs bg-stone-900 border-r border-stone-800 p-6 shadow-lg flex flex-col gap-6">
                            {links.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-100}
                                    activeClass="text-white font-semibold"
                                    className="text-lg text-gray-300 hover:text-white transition-colors duration-300 border-b border-stone-700 pb-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}


            </div>

            <button>
                <div className="inline-flex justify-center items-center p-1.5 bg-stone-900 border border-gray-800">
                    <Cog size={20} color="#ffffff" strokeWidth={1.5}/>
                </div>
            </button>
        </header>
    );
};

export default Header;

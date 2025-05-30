import { useState } from "react";
import { Link } from 'react-scroll';
import { Cog, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const links = ['Home', 'Skills', 'Education', 'Contact', 'CV'];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="container mx-auto flex justify-between sticky top-4 items-center py-5.5 px-8 border-1 rounded border-stone-800 bg-background z-50">
            <div className="flex justify-center items-center gap-8">
                <button
                    className="md:hidden bg-stone-900 border border-gray-800 p-1.5"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X size={20} color="#ffffff" />
                    ) : (
                        <Menu size={20} color="#ffffff" />
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

                {/* Mobile Menu with Animation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
                                onClick={() => setIsMenuOpen(false)}
                            />

                            {/* Sidebar */}
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%' }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-stone-900 border-r border-stone-800 p-6 z-50 shadow-lg flex flex-col gap-6"
                            >
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={28} />
                                </button>

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
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>

            <button>
                <div className="inline-flex justify-center items-center p-1.5 bg-stone-900 border border-gray-800">
                    <Cog size={20} color="#ffffff" strokeWidth={1.5} />
                </div>
            </button>
        </header>
    );
};

export default Header;

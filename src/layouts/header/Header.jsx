import { useState } from 'react';
import logo from '../../assets/logo.webp';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="fixed top-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className="h-8 md:h-12 w-auto object-contain" 
                        />
                    </div>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="/" className="text-gray-700 border-b-2 border-transparent hover:border-black transition duration-200">
                            Nosotros
                        </a>
                        <a href="/" className="text-gray-700 border-b-2 border-transparent hover:border-black transition duration-200">
                            Categoría
                        </a>
                        <a href="/" className="text-gray-700 border-b-2 border-transparent hover:border-black transition duration-200">
                            Contacto
                        </a>
                    </nav>

                    {/* Search Icon */}
                    <div className="hidden md:block">
                        <button
                            aria-label="Buscar"
                            className="text-gray-700 hover:text-slate-400 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            aria-label="Abrir menú"
                            className="text-gray-700 hover:text-blue-500 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-md">
                        <nav className="flex flex-col items-start p-4 space-y-2">
                            <a href="/" className="text-gray-700 hover:text-blue-500">Nosotros</a>
                            <a href="/" className="text-gray-700 hover:text-blue-500">Categoría</a>
                            <a href="/" className="text-gray-700 hover:text-blue-500">Contacto</a>
                            <button
                                aria-label="Buscar"
                                className="text-gray-700 hover:text-blue-500 focus:outline-none flex items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6 mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                                    />
                                </svg>
                                Buscar
                            </button>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;

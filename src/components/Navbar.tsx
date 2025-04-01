'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, hover, motion } from 'framer-motion';
import {
    AiFillHome,
    AiFillTool,
    AiOutlineHome,
    AiOutlineTool,
} from 'react-icons/ai';
import {
    MdOutlinePersonOutline,
    MdOutlineWork,
    MdOutlineWorkOutline,
    MdPerson,
} from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

const navItems = [
    {
        id: 1,
        name: 'Início',
        icon: {
            fill: <AiFillHome />,
            outline: <AiOutlineHome />,
        },
        href: '/',
    },
    {
        id: 2,
        name: 'Serviços',
        icon: {
            fill: <AiFillTool />,
            outline: <AiOutlineTool />,
        },
        href: '/services',
    },
    {
        id: 3,
        name: 'Trabalhos',
        icon: {
            fill: <MdOutlineWork />,
            outline: <MdOutlineWorkOutline />,
        },
        href: '/works',
    },
    {
        id: 4,
        name: 'Contato',
        icon: {
            fill: <MdPerson />,
            outline: <MdOutlinePersonOutline />,
        },
        href: '/contact',
    },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoverItem, setHoverItem] = useState<number | null>(null);
    const pathname = usePathname();

    const toggleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseEnter = (id: number) => {
        setHoverItem(id);
    };

    const handleMouseLeave = () => {
        setHoverItem(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <nav
            className={`w-full h-[60px] flex justify-between items-center px-4 md:px-[50px] mx-auto fixed top-0 z-50 font-jetbrains transition-all ease-in duration-500 ${
                scrolled ? 'bg-background shadow-2xl md:px-[130px]' : ''
            }`}
        >
            {/* Logo */}
            <Link
                className="navbar-logo text-3xl font-black cursor-pointer hover:text-[#bebebe] hover:tracking-wider transition-all"
                href="/"
            >
                CarlusNZ
            </Link>

            {/* Menu para PC */}
            <ul className="hidden lg:flex space-x-5 lg:space-x-7 items-center">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li
                            key={item.id}
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href={item.href}
                                className={`flex items-center text-lg hover:font-bold transition-all ${
                                    isActive ? 'text-violet-400 font-bold' : ''
                                }`}
                            >
                                {hoverItem === item.id || isActive
                                    ? item.icon.fill
                                    : item.icon.outline}
                                <span className="ml-2">{item.name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* Ícone do Menu Mobile */}
            <div className="lg:hidden">
                <button
                    onClick={toggleMenuOpen}
                    className="text-2xl focus:outline-none"
                >
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden absolute right-0 top-0 h-screen w-full sm:w-[75%] md:w-[50%] shadow-2xl bg-background"
                    >
                        <ul className="flex flex-col px-4 space-y-4 py-4">
                            <div className="flex justify-between mb-5 py-3">
                                <h1 className="text-2xl font-bold font-jetbrains-mono">
                                    Menu
                                </h1>
                                <button
                                    onClick={toggleMenuOpen}
                                    className="text-2xl focus:outline-none"
                                >
                                    {isMenuOpen ? <HiX /> : <HiMenu />}
                                </button>
                            </div>
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li
                                        key={item.id}
                                        onMouseEnter={() =>
                                            handleMouseEnter(item.id)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`flex items-center text-lg hover:font-bold transition-all md:text-2xl sm:text-2xl mb-3 ${
                                                isActive
                                                    ? 'text-violet-400 font-bold'
                                                    : ''
                                            }`}
                                        >
                                            {hoverItem === item.id || isActive
                                                ? item.icon.fill
                                                : item.icon.outline}
                                            <span className="ml-2">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

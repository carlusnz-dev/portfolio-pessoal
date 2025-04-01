import Link from 'next/link';
import type React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

export function ButtonPrimary({ children, href, className }: ButtonProps) {
    return (
        <Link href={href}>
            <button className={`text-white bg-violet-500 text-xl px-8 py-3 hover:bg-violet-700 hover:font-bold hover:shadow-violet-500 shadow-2xl transition-all duration-300 ease-in cursor-pointer ${className}`}>
                {children}
            </button>
        </Link>
    );
}

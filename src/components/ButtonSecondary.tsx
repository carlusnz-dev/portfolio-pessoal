import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    href: string;
}

export function ButtonSecondary({ children, href }: ButtonProps) {
    return (
        <Link href={href}>
            <button className="text-white border-3 border-orange-300 text-xl px-7 py-2 md:px-9 md:py-4 lg:px-12 hover:bg-orange-300 hover:font-bold hover:shadow-orange-300 shadow-2xl transition-all duration-300 ease-in-out focus:ring-5 focus:ring-orange-400 cursor-pointer">
                {children}
            </button>
        </Link>
    );
}

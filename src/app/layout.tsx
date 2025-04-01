import type { Metadata } from 'next';
import { Fira_Code, Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import './globals.css';

// Fonts
const inter = Inter({ 
    subsets: ['latin'],
    variable: '--font-inter'
});

const firaCode = Fira_Code({
    subsets: ['latin'],
    variable: '--font-firacode'
})

const jetBrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains'
})

export const metadata: Metadata = {
    title: 'CarlusNZ - Portfólio',
    description: 'Um app incrível!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={`${firaCode.variable} ${inter.variable} ${jetBrains.variable}`}>
            <body className={jetBrains.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

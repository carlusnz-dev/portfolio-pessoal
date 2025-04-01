import { TypeAnimation } from 'react-type-animation';
import { ButtonSecondary } from '../ButtonSecondary';
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';

export function HeroSection() {
    return (
        <>
            {/* Hero Section */}
            <div className="container w-full mx-auto font-firacode">
                <div className="flex flex-col lg:flex-row h-screen items-center justify-center mt-15 sm:mt-25 lg:mt-0 px-4 py-12 lg:py-0">
                    {/* Title */}
                    <div className="max-w-full text-center lg:text-start space-y-3 lg:space-y-5 px-5 md:px-8">
                        <h3 className="text-xl lg:text-2xl font-inter">
                            Olá,{' '}
                            <span className="text-violet-600 font-bold">
                                eu sou
                            </span>
                        </h3>
                        <h1 className="text-4xl sm:text-6xl xl:text-7xl">
                            Carlos
                            <span className="font-bold text-violet-600">
                                Antunes
                            </span>
                        </h1>
                        {/* Typed Animation */}
                        <TypeAnimation
                            sequence={[
                                'Programador',
                                1000,
                                'Radialista',
                                1000,
                                'Designer',
                                1000,
                                'Excelência Acadêmica',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-2xl sm:text-3xl lg:text-4xl"
                        />
                        {/* Button */}
                        <div className="mt-10 lg:mt-20 hidden sm:block">
                            <ButtonSecondary href="/contacts">
                                SAIBA MAIS
                            </ButtonSecondary>
                        </div>
                        {/* Social Midia */}
                        <div className="hidden lg:flex max-w-full h-[25px] me-auto 2items-center justify-start mt-12 md:px-5">
                            <h1 className="text-[18px] h-[24px] font-bold">
                                Minhas redes
                            </h1>

                            <div className="h-[30px] flex items-center px-5 mid:h-auto">
                                <Link
                                    href="https://www.instagram.com/carlusnzdev/"
                                    target="_blank"
                                    className="ml-[18px] hover:opacity-80 transition-opacity"
                                >
                                    <BsInstagram className="h-[30px] w-auto object-cover" />
                                </Link>

                                <Link
                                    href="https://wa.link/ekxf98"
                                    target="_blank"
                                    className="ml-[18px] hover:opacity-80 transition-opacity"
                                >
                                    <BsWhatsapp className="h-[30px] w-auto object-cover" />
                                </Link>

                                <Link
                                    href="https://wa.link/ekxf98"
                                    target="_blank"
                                    className="ml-[18px] hover:opacity-80 transition-opacity"
                                >
                                    <BsLinkedin className="h-[30px] w-auto object-cover" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="w-full flex items-center justify-center px-4 mt-10 lg:mt-0">
                        <img
                            src="/portfolio-pessoal/photo.svg"
                            alt="foto"
                            className="w-auto h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

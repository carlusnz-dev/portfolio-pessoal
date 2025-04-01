'use client';

import {
    motion,
    useAnimation,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const itemsCard = [
    {
        id: 1,
        title: 'MUV - Ciência em Movimento',
        local: 'IFPI - SRN / Out. 2023',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augu.',
        img: '/muv-2023.jpg',
    },
    {
        id: 2,
        title: 'Grêmio Estudantil Rupestre',
        local: 'IFPI - SRN / Mar. 2024',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augu.',
        img: '/grer.jpg',
    },
    {
        id: 3,
        title: 'Mostratec - Mostra Internacional de Ciência e Tecnologia',
        local: 'Novo Hamburgo - RS / Out. 2024',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augu.',
        img: '/mostratec.jpg',
    },
    {
        id: 4,
        title: 'MUV II - Ciência em Movimento',
        local: 'IFPI - SRN / Nov. 2024',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augu.',
        img: '/muv2.jpg',
    },
    {
        id: 5,
        title: 'Graduação no Ensino Técnico integrado ao Médio',
        local: 'IFPI - SRN / Jan. 2025',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augu.',
        img: '/graduation.jpg',
    },
];

const itemsTimeline = [
    {
        id: 1,
        title: '2023 - MUV',
        subtitle:
            'Feira municipal de projetos científicos, organizado pelo Instituto Federal do Piauí',
    },
    {
        id: 2,
        title: '2024 - Grêmio Estudantil',
        subtitle: 'Criação e organização do Grêmio Rupestre do IFPI-CASRN',
    },
    {
        id: 3,
        title: '2024 - Mostratec',
        subtitle:
            'Feira científica internacional, com mais de 600 projetos, de mais de 14 países, sediada no estado do Rio Grande do Sul',
    },
    {
        id: 4,
        title: '2024 - MUV II',
        subtitle:
            'Agora, novamente, buscando o segundo título na segunda edição do MUV - SRN',
    },
    {
        id: 5,
        title: '2025 - Graduação',
        subtitle: 'Terminando aqui um capítulo da minha história',
    },
];

export function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const controls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Atualiza o índice ativo durante o scroll
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const newIndex = Math.round(Number(latest) * (itemsCard.length - 1));
        setActiveIndex(newIndex);
    });

    // Função para rolar até o card específico usando ID
    const scrollToItem = (index: number) => {
        const cardId = `card-${itemsCard[index].id}`;
        const element = document.getElementById(cardId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    // Animação spring para a barra de progresso
    const scaleY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div className="max-w-full bg-background" ref={containerRef}>
            {/* Container principal com scroll normal */}
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-inter mb-8 md:mb-16 pt-8">
                    Minha{' '}
                    <span className="text-violet-500 font-bold">timeline</span>
                </h3>

                <div className="flex flex-col md:flex-row">
                    {/* Cards (lado esquerdo) - Scroll normal */}
                    <div className="md:w-2/3 space-y-12 pb-12">
                        {itemsCard.map((item, index) => {
                            return (
                                <motion.div
                                    key={item.id}
                                    id={`card-${item.id}`}
                                    className="w-full"
                                >
                                    <motion.div
                                        animate={
                                            activeIndex === index
                                                ? {
                                                      borderColor: [
                                                          '#8B5CF6',
                                                          '#8B5CF6',
                                                          'transparent',
                                                      ],
                                                      transition: {
                                                          duration: 2,
                                                          repeat: Infinity,
                                                      },
                                                  }
                                                : {}
                                        }
                                        className="w-full max-w-3xl rounded-xl shadow-lg overflow-hidden border-2 border-transparent"
                                    >
                                        <img
                                            src={`/portfolio-pessoal/${item.img}`}
                                            alt={item.title}
                                            className="w-full h-64 md:h-80 object-cover"
                                        />
                                        <div className="p-6">
                                            <span className="text-sm text-white/70">
                                                {item.local}
                                            </span>
                                            <h2 className="text-2xl font-bold mt-1">
                                                {item.title}
                                            </h2>
                                            <p className="mt-4">
                                                {item.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Barra e Timeline (lado direito) - Sticky */}
                    <div className="md:w-1/3 relative hidden md:block">
                        <div className="sticky top-0 h-screen flex items-center justify-start lg:justify-center">
                            {/* Barra Scroll Progress com animação spring */}
                            <div className="relative w-4 h-[75%] bg-gray-800 mx-6">
                                <motion.div
                                    style={{
                                        height: scaleY,
                                    }}
                                    className="absolute top-0 left-0 w-4 bg-violet-500"
                                />
                            </div>

                            {/* Timeline */}
                            <div className="w-full space-y-4">
                                {itemsTimeline.map((item, index) => {
                                    const isActive = activeIndex === index;

                                    return (
                                        <motion.div
                                            key={item.id}
                                            initial={false}
                                            animate={{
                                                borderLeft: isActive
                                                    ? '4px solid #8B5CF6'
                                                    : '4px solid transparent',
                                                paddingLeft: isActive
                                                    ? '1rem'
                                                    : '1.25rem',
                                            }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 20,
                                            }}
                                            className="relative backdrop-blur-sm p-4 rounded-lg shadow-sm cursor-pointer"
                                            onClick={() => scrollToItem(index)}
                                        >
                                            <div className="flex items-start">
                                                <motion.div
                                                    animate={{
                                                        scale: isActive
                                                            ? 1.2
                                                            : 1,
                                                        backgroundColor:
                                                            isActive
                                                                ? '#8B5CF6'
                                                                : '#D1D5DB',
                                                    }}
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 300,
                                                        damping: 10,
                                                    }}
                                                    className="w-4 h-4 rounded-full mt-1 mr-3 flex-shrink-0"
                                                />
                                                <div>
                                                    <h3
                                                        className={`text-lg font-bold ${
                                                            isActive
                                                                ? 'text-violet-600'
                                                                : 'text-white/70'
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </h3>
                                                    <p className="hidden lg:block mt-1 text-sm text-white">
                                                        {item.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

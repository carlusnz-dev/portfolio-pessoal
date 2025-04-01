import { ButtonPrimary } from "../ButtonPrimary";

const cardItems = [
    {
        id: 1,
        title: 'Desenvolvedor',
        span: 'Full Stack',
        content:
            'Atualmente, atuando nas linguagens JavaScript, Python, Kotlin e C++, desenvolvendo sites, aplicativos, sistemas e estruturação de dados',
    },
    {
        id: 2,
        title: 'Designer',
        span: 'Web e UI/UX',
        content:
            'Conhecimento aprofunddado em Photoshop, Illustrator e em edição de vídeo. Também, criando interfaces gráficas para desenvolvimento de aplicações.',
    },
    {
        id: 3,
        title: 'Compositor e',
        span: 'Radialista',
        content:
            'Mais de 9 anos de experência na aŕea em sistemas de rádios e apresentando programas.',
    },
];

export function ServicesSection() {
    return (
        <div className="max-w-full h-full lg:h-screen bg-[#1c1c1c]">
            <div className="container flex flex-col justify-between h-full px-5 py-7 md:py-22 mx-auto font-firacode">
                <div>
                    <h3 className="text-2xl font-inter mb-3">
                        Meus{' '}
                        <span className="font-bold text-violet-500">
                            serviços
                        </span>
                    </h3>
                    <h1 className="text-4xl font-jetbrains-mono">
                        O que eu faço?
                    </h1>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18 my-12">
                    {cardItems.map((item) => {
                        return (
                            <div
                                className="card flex flex-col items-center justify-center w-full h-[370px] bg-background p-8 text-center"
                                key={item.id}
                            >
                                <img
                                    src={`/portfolio-pessoal/icons/${item.id}.png`}
                                    alt="icone"
                                />
                                <h1 className="text-xl md:text-2xl text-white font-thin mb-5 md:mb-8">
                                    {item.title}
                                    <br />
                                    <span className="text-2xl md:text-4xl text-amber-500 font-bold">
                                        {item.span}
                                    </span>
                                </h1>
                                <p className="text-lg md:text-sm">
                                    {item.content}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <h3 className="text-center sm:text-start text-xl md:text-2xl font-thin mb-6 sm:mb-3 lg:mb-0">
                    Mas, quais são os{' '}
                    <span className="font-bold text-violet-500">
                        meus objetivos
                    </span>
                    ?
                </h3>
                <ButtonPrimary href="/" className="w-full sm:w-auto">
                    Ver mais
                </ButtonPrimary>
            </div>
        </div>
    );
}

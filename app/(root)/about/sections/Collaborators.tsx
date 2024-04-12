    import React from "react";

    interface CollaboratorProps {
    imageUrl: string;
    name: string;
    description: string;
    }

    const Collaborator: React.FC<CollaboratorProps> = ({ imageUrl, name, description }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="flex justify-between">
            <div className="bg-white p-7 border border-slate-200 drop-shadow-md rounded-md">
            <div className="w-24 h-24 bg-cover bg-center rounded-full mx-auto" style={{ backgroundImage: `url(${imageUrl})`, width: "150px", height: "150px" }}></div>
            <h3 className="text-gray-800 text-xl font-semibold mt-4">{name}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
        </div>
    );
    };

    const Collaborators: React.FC = () => {
    const collaborators: CollaboratorProps[] = [
        {
        imageUrl: "https://uploaddeimagens.com.br/images/004/767/881/original/imagemmuca.jpg?1712717283",
        name: "Murilo Medina",
        description: "lorem",
        },
        {
            imageUrl: "https://uploaddeimagens.com.br/images/004/767/882/full/Captura_de_tela_2024-04-09_235613.jpg?1712717812",
            name: "Vitin Teacher",
            description: "lorem",
            },
            {
                imageUrl: "https://uploaddeimagens.com.br/images/004/767/882/full/Captura_de_tela_2024-04-09_235613.jpg?1712717812",
                name: "Higor Matias",
                description: "lorem",
                },{
                    imageUrl: "https://uploaddeimagens.com.br/images/004/767/882/full/Captura_de_tela_2024-04-09_235613.jpg?1712717812",
                    name: "Matheus Pidao",
                    description: "lorem",
                    },
        // aqui da pra adicionar mais colaboradores se quiserem, mas dai tem que ajustar pra nao quebrar o site kkkkkkk
    ];

    return (
        <section className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
                Nossos Colaboradores
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Conheça quem faz parte da nossa equipe
            </p>
            </div>
            <div className="mt-10">
            <div className="flex flex-wrap justify-between">
                {collaborators.map((collaborator, index) => (
                <Collaborator key={index} {...collaborator} />
                ))}
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default Collaborators;
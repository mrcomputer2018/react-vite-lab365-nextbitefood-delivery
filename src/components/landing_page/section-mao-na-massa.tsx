import { Pizza, StoreIcon, TruckIcon, UsersRound } from "lucide-react";

export default function SectionMaoNaMassa() {
    return (
        <section className="w-full bg-gray-200 pb-16">
            <div className="w-full max-w-7xl">
                <div>
                    <div className="flex flex-row gap-8 mb-8">
                        <StoreIcon className="w-12 h-12 text-green-600" />
                        <TruckIcon className="w-12 h-12 text-green-600" />
                        <UsersRound className="w-12 h-12 text-green-600" />
                        <Pizza className="w-12 h-12 text-green-600" />
                    </div>

                    <div>
                        <h2 className="text-6xl font-extrabold text-gray-800 text-left max-w-4xl tracking-[1px]">
                            "BOTAMOS A MÃO NA MASSA PRA ALIMENTAR MAIS DE 6
                            MILHÕES DE FOMINHAS"
                        </h2>
                        <p className="text-xl text-gray-600 mt-4 max-w-4xl text-left tracking-[1px]">
                            O nextbite food acredita que só é bom quando é bom
                            pra todo mundo. E prova isso contribuindo com mais
                            de 30 mil lojistas parceiros, transformando a
                            economia local de mais de 700 cidades, oferecendo o
                            melhor para todos os entregadores e construindo uma
                            relação verdadeira com quem escolhe consumir com a
                            gente.

                        </p>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    );
}

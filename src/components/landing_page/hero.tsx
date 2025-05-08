import { assets } from "@/assets/assets";
import Header from "../commons/Header";
import ButtonCustom from "../commons/ButtonCustom";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col w-full bg-cover bg-center overflow-hidden
        justify-center items-center"
            style={{
                backgroundImage: `url(${assets.hero_image})`,
            }}
        >
            <Header />

            <div className="absolute left-[10%] h-full flex flex-col justify-center">
                <p className="text-6xl text-white font-light tracking-[1px] max-w-2xl mb-10">
                    O Futuro da sua proxima refeição. 1º app do Brasil que te
                    ajuda a escolher o que comer.
                </p>

                <ButtonCustom
                    title="Baixe o app"
                    color="bg-green-600"
                    border="w-[200px] rounded-md elevation-2"
                />
            </div>
        </section>
    );
}

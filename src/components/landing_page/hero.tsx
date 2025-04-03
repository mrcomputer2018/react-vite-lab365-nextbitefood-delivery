import { assets } from "@/assets/assets";
import Header from "../commons/Header";

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

            <div></div>
        </section>
    );
}

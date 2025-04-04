import { assets } from "@/assets/assets";
import { ShoppingCart, User } from "lucide-react";
import ButtonCustom from "./ButtonCustom";

export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center container py-6 px-[5%] absolute top-0">
            <div className="flex flex-row items-center space-x-2">
                <img
                    src={assets.logo}
                    alt="imagem do logotipo"
                    className="w-14 h-14 rounded-full"
                />

                <h1 className="text-white text-2xl font-semibold">
                    NextBite Food
                </h1>
            </div>

            <nav>
                <ul className="flex flex-row items-center space-x-6 text-xl tracking-[1px]">
                    <li className="text-white">
                        <a href="#Hero">Home</a>
                    </li>
                    <li className="text-white">
                        <a href="#about">Sobre nos</a>
                    </li>
                    <li className="text-white">
                        <a href="#menu">Menu</a>
                    </li>
                    <li className="text-white">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className="flex flex-row items-center space-x-8">
                <div className="text-white flex flex-col items-center text-xs tracking-[1px] gap-1">
                    <User className="w-8 h-8 text-white" />
                    <span className="text-gray-300">Minha conta</span>
                </div>

                <div className="text-white flex flex-col items-center text-xs tracking-[1px] gap-1">
                    <ShoppingCart className="w-8 h-8 text-white" />
                    <span className="text-gray-300">Meu carrinho</span>
                </div>

                <ButtonCustom
                    title="Signup"
                    color="bg-transparent"
                    border=" border border-2 border-green-600 rounded-full"
                />
            </div>
        </header>
    );
}

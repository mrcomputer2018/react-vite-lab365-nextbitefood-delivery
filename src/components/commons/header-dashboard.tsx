import { assets } from "@/assets/assets";
import { Heart, MapPin, Search, ShoppingCart } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function HeaderDashboard() {
    const location = useLocation();

    return (
        <header className="w-full py-4 px-4 border-b border-gray-200 flex flex-row justify-between items-center bg-gray-100">
            <div className="flex flex-row gap-1">
                <span>dashboard {">"}</span>
                <span className="font-bold">{location.pathname.split("/")[1]}</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>Rio de Janeiro, RJ</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
                <div className="flex flex-row items-center justify-center border border-gray-200 rounded-3xl p-2 gap-1 bg-white shadow-md">
                    <Search className="h-5 w-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="pesquisar..."
                        className="focus:outline-none bg-transparent tex-gray-500"
                    />
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                    <div className="bg-white border border-gray-200 rounded-full shadow-md cursor-point p-2">
                        <ShoppingCart className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-full shadow-md cursor-point p-2">
                        <Heart className="h-5 w-5 text-gray-500" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={assets.user_image} alt="foto do usuario logado" className="h-10 w-10 rounded-full shadow-md" />
                    </div>
                </div>
            </div>
        </header>
    );
}

import { assets } from "@/assets/assets";
import ButtonCustom from "./button-custom";
import { Heart, LogOutIcon, ShoppingCart, User, Utensils } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";

export default function Sidebar() {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        signOut();
        navigate("/", { replace: true });
    }

    function handleNavigateToProfile() {
        navigate("/profile")
    }

    function handleNavigateToMycart() {
        navigate("/mycart")
    }

    return (
        <aside className="flex flex-col max-w-60 h-screen bg-white w-full justify-between">
            <div className="px-2 py-4">
                <div className="flex flex-row items-center gap-2 mb-4 border-b border-gray-200 pb-4">
                    <img
                        src={assets.logo}
                        alt="logotipo Nextbite Food"
                        className="h-10 w-10 rounded-full"
                    />
                    <h1 className="text-lg font-bold">Nextbite Food</h1>
                </div>
                <div className="flex flex-col gap-2 items-start p-2 mt-4">
                    <ButtonCustom
                        title="Perfil"
                        variant="selected"
                        icon={<User className="w-5 h-5 mr-2" />}
                        action={handleNavigateToProfile}
                    />
                    <ButtonCustom
                        title="Meu Carrinho"
                        variant="unselected"
                        icon={<ShoppingCart className="w-5 h-5 mr-2" />}
                        action={handleNavigateToMycart}
                    />
                    <ButtonCustom
                        title="Meu Pediddos"
                        variant="unselected"
                        icon={<FaTasks className="w-5 h-5 mr-2" />}
                    />
                    <ButtonCustom
                        title="Restaurantes"
                        variant="unselected"
                        icon={<Utensils className="w-5 h-5 mr-2" />}
                    />
                    <ButtonCustom
                        title="Favoritos"
                        variant="unselected"
                        icon={<Heart className="w-5 h-5 mr-2" />}
                    />
                </div>
            </div>
            <div className=" border-t border-gray-200 p-2">
                <ButtonCustom
                    title="Sair"
                    action={handleLogout}
                    icon={<LogOutIcon className="w-5 h-5 mr-2" />}
                    variant="gradient"
                    width="w-full"
                    alignment="items-center justify-start"
                />
            </div>
        </aside>
    );
}

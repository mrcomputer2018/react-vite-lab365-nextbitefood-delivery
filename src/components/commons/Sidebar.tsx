import { assets } from "@/assets/assets";
import ButtonCustom from "./button-custom";
import { LogOutIcon } from "lucide-react";

export default function Sidebar() {
    function handleLogout() {
        localStorage.removeItem("@user");
        window.location.href = "/signin";
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
                <div>
                    <button>Perfil</button>
                </div>
            </div>
            <div className=" border-t border-gray-200 p-2">
                <ButtonCustom
                    title="Sair"
                    action={handleLogout}
                    icon={<LogOutIcon className="w-5 h-5 mr-2" />}
                    color="bg-gradient-to-r from-green-600 to-blue-800"
                    width="w-full"
                    alignment="items-center justify-start"
                />
            </div>
        </aside>
    );
}

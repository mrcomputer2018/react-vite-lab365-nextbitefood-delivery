import { useAuth } from "@/contexts/auth-context";
import { assets } from "@/assets/assets";

export default function DashboardProfileCard() {
    const { user } = useAuth();

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-4 w-58 h-88">
            <div className="flex items-center justify-center">
                <img
                    src={assets.user_image}
                    alt="imagem do usuario"
                    className="w-20 h-20 rounded-full shadow-md"
                />
            </div>
            <div className="text-center mt-4 flex flex-col">
                <h3 className="text-lg font-bold mt-4">{user?.name}</h3>
                <span className="text-muted-foreground">{user?.email}</span>
                <span className="text-[10px] bg-black text-white rounded-full px-2 py-1 mt-3">
                    Cliente desde janeiro de 2025
                </span>
            </div>
        </div>
    );
}

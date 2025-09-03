import { useAuth } from "@/contexts/auth-context";
import Loading from "./loading";

type ButtonCustomProps = {
    title: string;
    border?: string | undefined;
    width?: string | undefined;
    action?: () => void;
    icon?: React.ReactNode;
    alignment?: string;
    variant?: "default" | "selected" | "unselected" | "gradient" | "ghost" | "primary" | "black" | "ghost-black";
};

export default function ButtonCustom({
    title,
    border,
    width,
    action,
    icon,
    alignment,
    variant,
}: ButtonCustomProps) {
    const { loading } = useAuth();

    function getVariantClasses() {
        if (variant === "selected") {
            return "bg-green-600/10 text-green-600 w-full";
        } else if (variant === "unselected") {
            return "text-[#9A9C9F] hover:bg-green-600/10 hover:text-green-600 w-full";
        } else if (variant === "gradient") {
            return "bg-gradient-to-r from-green-600 to-blue-800 text-white";
        } else if (variant === "ghost") {
            return "bg-transparent text-white hover:opacity-60 font-bold";
        }
        else if (variant === "ghost-black") {
            return "bg-transparent text-gray-500 hover:opacity-60 font-bold";
        }
        else if (variant === "primary") {
            return "bg-green-600 text-white hover:opacity-80 font-bold elevation-2 justify-center";
        }
        else if (variant === "black") {
            return "bg-zinc-800 text-white hover:opacity-80 elevation-2 justify-center";
        }
        return null;
    }

    return (
        <button
            onClick={action}
            className={`py-2 px-4 rounded ${border}
                hover:opacity-70 transition duration-600 ease-in-out cursor-pointer ${width} flex flex-row ${alignment} ${getVariantClasses()}`}
        >
            {icon}
            {loading ? <Loading /> : title}
        </button>
    );
}

import { useAuth } from "@/contexts/auth-context";
import Loading from "./loading";

type ButtonCustomProps = {
    title: string;
    border?: string | undefined;
    width?: string | undefined;
    action?: () => void;
    icon?: React.ReactNode;
    alignment?: string;
    variant?: "default" | "selected" | "unselected" | "gradient" | "ghost";
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
            return "bg-green-600/10 text-green-600 font-bold";
        } else if (variant === "unselected") {
            return "text-[#9A9C9F] hover:bg-green-600/10 hover:text-green-600 font-semibold";
        } else if (variant === "gradient") {
            return "bg-gradient-to-r from-green-600 to-blue-800 text-white";
        } else if (variant === "ghost") {
            return "bg-transparent text-white hover:opacity-60 font-bold";
        }
        return null;
    }

    return (
        <button
            onClick={action}
            className={`py-2 px-4 rounded ${border} w-full
                hover:opacity-70 transition duration-600 ease-in-out cursor-pointer ${width} flex flex-row ${alignment} ${getVariantClasses()}`}
        >
            {icon}
            {loading ? <Loading /> : title}
        </button>
    );
}

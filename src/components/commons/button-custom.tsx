import { useAuth } from "@/contexts/auth-context";
import Loading from "./loading";

type ButtonCustomProps = {
    title: string;
    color?: string;
    border?: string | undefined;
    width?: string | undefined;
    action? : () => void
    icon?: React.ReactNode;
    alignment?: string;
};

export default function ButtonCustom({
    title,
    color,
    border,
    width,
    action,
    icon,
    alignment
}: ButtonCustomProps) {
    const { loading } =useAuth();
    
    return (
        <button
            onClick={action}
            className={`${color} text-white font-bold py-2 px-4 rounded ${border} 
                hover:opacity-70 transition duration-600 ease-in-out cursor-pointer ${width} flex flex-row ${alignment}`}
        >
            {icon}
            {loading ? <Loading /> : title}
        </button>
    );
}

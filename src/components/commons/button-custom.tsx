import { useAuth } from "@/contexts/auth-context";
import Loading from "./loading";
import { tv } from "tailwind-variants";
import { ButtonHTMLAttributes } from "react";

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    action?: () => void;
    icon?: React.ReactNode;
    variant?: "selected" | "unselected" | "gradient" | "ghost" | "primary" | "black" | "ghostWhite";
};

const buttonVariants = tv({
    base: "py-2 px-4 rounded hover:opacity-70 transition duration-600 ease-in-out cursor-pointer flex flex-row",
    variants: {
        variant: {
            selected: "bg-green-600/10 text-green-600 w-full",
            unselected: "text-[#9A9C9F] hover:bg-green-600/10 hover:text-green-600 w-full",
            gradient: "bg-gradient-to-r from-green-600 to-blue-800 text-white",
            ghost: "bg-transparent text-white hover:opacity-60 font-bold",
            ghostWhite: "bg-twhite text-gray-500 border border-gray-500 hover:opacity-60 font-bold" ,
            primary: "bg-green-600 text-white hover:opacity-80 font-bold elevation-2 justify-center",
            black: "bg-zinc-800 text-white hover:opacity-80 elevation-2 justify-center"
        }
    },
    defaultVariants: {
        variant: "selected"
    }
})

export default function ButtonCustom({
    title,
    action,
    icon,
    variant,
    ...props
}: ButtonCustomProps) {
    const { loading } = useAuth();

    return (
        <button
            onClick={action}
            className={buttonVariants({variant})}
            {...props}
        >
            {icon}
            {loading ? <Loading /> : title}
        </button>
    );
}

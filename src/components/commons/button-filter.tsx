import { ButtonHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

interface ButtonFilterProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "selected" | "unselected";

}

const buttonVariant = tv({
    base: "border rounded-xl px-4 py-1 text-sm transition ease-in-out duration-500",
    variants: {
        variant: {
            selected: "bg-green-600 text-white font-semibold shadow-md elevation-2",
            unselected: "bg-gray-200 text-gray-800 border-gray-400"
        }
    },
    defaultVariants: {
        variant: "selected",
    }
})

export function ButtonFilter({children, variant, ...props}: ButtonFilterProps ) {
 return (
   <button className={buttonVariant({variant})} {...props}>
        {children}
   </button>
 );
}
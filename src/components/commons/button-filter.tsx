import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonFilterProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function ButtonFilter({children, ...props}: ButtonFilterProps ) {
 return (
   <button className="" {...props}>
        {children}
   </button>
 );
}
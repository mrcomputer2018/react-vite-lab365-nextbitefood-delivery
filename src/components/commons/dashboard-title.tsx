import { HtmlHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

interface DashboardTitleProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    title?: string;
    size?: "extrasmall" | "small" | "large" | "extralarge";
    color?: "primary" | "secondary"
}

const dashboardTitleVariants = tv({
    base: "font-semibold mb-2",
    variants: {
        size: {
            extrasmall: "text-md",
            small: "text-xl",
            large: "text-3xl",
            extralarge: "text-5xl",
        },
        color : {
            primary: "text-gray-900",
            secondary: "text-gray-600"
        }
    },
    defaultVariants: {
        size: "small",
        color:"primary"
    },
});

export default function DashboardTitle({
    children,
    title,
    size,
    color,
    ...props
}: DashboardTitleProps) {
    return (
        <div className="mb-2">
            <h2 className={dashboardTitleVariants({ size, color })} {...props}>
                {title || children}
            </h2>
        </div>
    );
}

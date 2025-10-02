import { HtmlHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

interface DashboardTitleProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    title?: string;
    size?: "small" | "large" | "extralarge";
}

const dashboardTitleVariants = tv({
    base: "font-semibold mb-2",
    variants: {
        size: {
            small: "text-xl",
            large: "text-3xl",
            extralarge: "text-5xl",
        },
    },
    defaultVariants: {
        size: "small",
    },
});

export default function DashboardTitle({
    children,
    title,
    size,
    ...props
}: DashboardTitleProps) {
    return (
        <div className="mb-2">
            <h2 className={dashboardTitleVariants({ size })} {...props}>
                {title || children}
            </h2>
        </div>
    );
}

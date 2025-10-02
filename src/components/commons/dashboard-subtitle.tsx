import { ReactNode } from "react";

interface DashboardSubtitleProps {
    children: ReactNode;
}

export default function DashboardSubtitle({ children }: DashboardSubtitleProps) {
    return (
        <div>
            <small className="text-gray-600 block mt-1">
                {children}
            </small>
        </div>
    );
}

interface DashboardTitleProps {
    title: string;
    subtitle: string;
}

export default function DashboardTitle({ title, subtitle }: DashboardTitleProps) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">
               {title}
            </h2>
            <p>{subtitle}</p>
        </div>
    );
}

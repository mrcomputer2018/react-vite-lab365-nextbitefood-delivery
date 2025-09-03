interface HeaderTabsProps {
    title: string
    subtitle: string
}

export default function HeaderTabs({ title, subtitle }: HeaderTabsProps) {
    return (
    <div className="flex flex-row justify-between items-center mt-2">
        <div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <span className="text-gray-500 text-sm">{subtitle}</span>
        </div>
    </div>
    );
}

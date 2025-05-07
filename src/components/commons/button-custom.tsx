type ButtonCustomProps = {
    title: string;
    color: string;
    border?: string | undefined;
};

export default function ButtonCustom({
    title,
    color,
    border,
}: ButtonCustomProps) {
    return (
        <button
            className={`${color} text-white font-bold py-2 px-4 rounded ${border} 
                hover:opacity-70 transition duration-600 ease-in-out`}
        >
            {title}
        </button>
    );
}

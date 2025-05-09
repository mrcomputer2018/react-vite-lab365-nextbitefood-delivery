import { CardDescription } from "../ui/card";

type TitleCardProps = {
    title: string;
    description: string
}

export default function TitleCard({ title, description } : TitleCardProps) {
    return (
        <>
            <h2 className="text-3xl uppercase">{title}</h2>
            <CardDescription>
                {description}
            </CardDescription>
        </>
    );
}

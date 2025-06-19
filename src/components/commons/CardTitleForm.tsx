import { CardDescription, CardTitle } from "../ui/card";

interface CardTitleFormProps {
    title: string;
    description: string;
}

export default function CardTitleForm({ title, description }: CardTitleFormProps) {
    return (
        <CardTitle>
            <h2 className="text-3xl font-bold uppercase">{title}</h2>
            <CardDescription className="text-md mt-2">
                {description}
            </CardDescription>
        </CardTitle>
    );
}

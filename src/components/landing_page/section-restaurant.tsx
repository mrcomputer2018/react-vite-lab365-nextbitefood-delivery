import { Button } from "../ui/button";

export default function SectionRestaurant() {
    return (
        <section className="w-full flex flex-col items-center justify-center pb-16 bg-gray-50">
            <div className="flex flex-row justify-between items-center max-w-7xl w-full">
                <h2 className="text-3xl font-bold text-gray-800">
                    Os melhores restaurantes da cidade
                </h2>

                <Button variant="ghost">Ver todos</Button>
            </div>
        </section>
    );
}

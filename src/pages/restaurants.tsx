import { assets } from "@/assets/assets";
import { ButtonFilter } from "@/components/commons/button-filter";
import CardImage from "@/components/commons/card-image";
import DashboardSubtitle from "@/components/commons/dashboard-subtitle";
import DashboardTitle from "@/components/commons/dashboard-title";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cuisineFilters } from "@/constants/restaurants";
import { StarIcon } from "lucide-react";
import { useState } from "react";

export default function RestaurantsPage() {
    const [activeFilter, setActiveFilter] = useState<string>("all");

    function handleFilterClick(filterId: string) {
        setActiveFilter(filterId);
    }

    return (
        <section className="bg-gray-100 h-screen w-full p-4">
            <div>
                <DashboardTitle>
                    Bem-vindo a área de restaurantes
                </DashboardTitle>
                <DashboardSubtitle>
                    Escolha aqui o restaurante para fazer o seu pedido
                </DashboardSubtitle>
            </div>
            <div className="bg-white mt-6 flex flex-col justify-start shadow-md p-5 rounded-md space-y-10">
                <div>
                    <DashboardTitle size="extrasmall" color="secondary">
                        Filtrar por culinria
                    </DashboardTitle>

                    <div className="flex flex-row gap-6 mt-4 flex-wrap">
                        {cuisineFilters.map((cuisine) => (
                            <ButtonFilter
                                key={cuisine.id}
                                variant={
                                    activeFilter === cuisine.id
                                        ? "selected"
                                        : "unselected"
                                }
                                title={cuisine.name}
                                onClick={() => handleFilterClick(cuisine.id)}
                            >
                                todos
                            </ButtonFilter>
                        ))}
                    </div>
                </div>
                <div>
                    <DashboardTitle size="extrasmall" color="secondary">
                        Destaques do dia
                    </DashboardTitle>
                    <div>
                        <Card className="w-90 overflow-hidden relative cursor-pointer shadow-md hover:shadow-lg hover:elevation-2 hover:scale-[1.03] transition-transform duration-400 ease-in-out">
                            <CardContent className="absolute w-full flex flex-row justify-between p-3">
                                <Badge className="mb-2 bg-green-600 font-semibold">
                                    Top Avaliado
                                </Badge>
                                <Badge>
                                    <StarIcon className="inline mr-1 text-amber-500" size={16}/>
                                    <span className="text-gray-800 font-semibold">4.8</span>
                                </Badge>
                            </CardContent>
                            <CardImage src={assets.nonas_kitchen} alt="" size="large" resizeMode="cover" />
                        </Card>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
}

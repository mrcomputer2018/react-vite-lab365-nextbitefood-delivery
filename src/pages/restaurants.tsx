import { ButtonFilter } from "@/components/commons/button-filter";
import DashboardSubtitle from "@/components/commons/dashboard-subtitle";
import DashboardTitle from "@/components/commons/dashboard-title";
import { Card, CardContent } from "@/components/ui/card";
import { cuisineFilters } from "@/constants/restaurants";
import { useState } from "react";

export default function RestaurantsPage() {
    const [activeFilter, setActiveFilter] = useState<string>("all");

    function handleFilterClick(filterId: string) {
        setActiveFilter(filterId)
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
                        <Card>
                            <CardContent>
                                
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
}

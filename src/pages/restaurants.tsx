import { FeaturedRestautants } from "@/@types/restaurant-types";
import { ButtonFilter } from "@/components/commons/button-filter";
import CardImage from "@/components/commons/card-image";
import DashboardSubtitle from "@/components/commons/dashboard-subtitle";
import DashboardTitle from "@/components/commons/dashboard-title";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cuisineFilters, featuredRestaurants } from "@/constants/restaurants";
import { Clock, MapPin, StarIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RestaurantsPage() {
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [cuisineFiltered, setCuisineFiltered] = useState(featuredRestaurants);

    const navigate = useNavigate();

    function handleFilterClick(filterId: string) {
        setActiveFilter(filterId);
        filterRestaurants();
    }

    function filterRestaurants() {
        if (activeFilter === "all") {
            setCuisineFiltered(featuredRestaurants);
        } else {
            const filtered = featuredRestaurants.filter((restaurant) =>
                restaurant.cuisine
                    .toLowerCase()
                    .includes(activeFilter.toLowerCase())
            );
            setCuisineFiltered(filtered);
        }
    }

    function handleNavigatetoRestaurantDetail(restaurant: FeaturedRestautants) {
        try {
            if(!restaurant.id) {
                console.error("Id do restaurant não encontrado")
                return
            }
            navigate(`/restaurantes/${restaurant.id}`, {
                state: { restaurant }
            })

        } catch (error) {
            console.error("Erro ao navegar para o restaurante", error)
        }
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
                        Filtrar por culinaria
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
                                onClick={() => handleFilterClick(cuisine.id)}
                            >
                                {cuisine.name}
                            </ButtonFilter>
                        ))}
                    </div>
                </div>
                <div>
                    <DashboardTitle size="extrasmall" color="secondary">
                        Destaques do dia
                    </DashboardTitle>
                    <div className="flex flex-row gap-6 flex-wrap justify-center">
                        {cuisineFiltered.map((restaurant) => (
                            <Card 
                            onClick={() => handleNavigatetoRestaurantDetail(restaurant)}
                            className="w-90 overflow-hidden relative cursor-pointer shadow-md hover:shadow-lg hover:elevation-2 hover:scale-[1.03] transition-transform duration-400 ease-in-out">
                                <CardContent className="absolute w-full flex flex-row justify-between p-3">
                                    <Badge className="mb-2 bg-green-600 font-semibold">
                                        {restaurant.badge}
                                    </Badge>
                                    <Badge className="bg-white mb-2">
                                        <StarIcon
                                            className="inline mr-1 text-amber-500"
                                            size={16}
                                        />
                                        <span className="text-gray-800 font-semibold">
                                            {restaurant.rating}
                                        </span>
                                    </Badge>
                                </CardContent>
                                <CardImage
                                    src={restaurant.image}
                                    alt=""
                                    size="large"
                                    resizeMode="cover"
                                />

                                <CardContent className="px-4 m-0 space-y-1 bg-gray-50">
                                    <div className="flex flex-row justify-between items-center">
                                        <h3 className="text-xl font-bold mb-0">
                                            {restaurant.name}
                                        </h3>
                                        <Badge className="font-semibold bg-green-600">
                                            {restaurant.cuisine}
                                        </Badge>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        <div className="flex flex-row items-center">
                                            <StarIcon
                                                className="mr-1 text-green-600"
                                                size={17}
                                            />
                                            <span>{restaurant.rating}</span>
                                        </div>
                                        <div className="mx-1">
                                            <span className="">
                                                ({restaurant.reviews})
                                            </span>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <MapPin
                                                className="mr-1 text-green-600"
                                                size={17}
                                            />
                                            <span>{restaurant.distance}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-2 mb-5">
                                        <div className="flex flex-row items-center">
                                            <Clock
                                                className="mr-1 text-green-600"
                                                size={17}
                                            />
                                            <span className="text-gray-800">
                                                {restaurant.deliveryTime}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-green-600 text-md">
                                                R$ {restaurant.deliveryFee}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
}

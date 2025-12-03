import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuredRestaurants } from "@/constants/restaurants";
import { ArrowLeftIcon, Clock, MapPinIcon, StarIcon } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function RestaurantDetail() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const location = useLocation();

    const restaurant =
        location.state?.restaurant ||
        featuredRestaurants.find((rest) => rest.id === id);

    if (!restaurant) {
        return (
            <section className="w-full max-w-4xl mx-auto p-6">
                <div className="text-center py-12">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Restaurante nçao encontrado.
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Orestaurante que você esta procurando não existe ou foi
                        removido.
                    </p>
                    <Button variant="outline" size="sm" onClick={handleGoBack}>
                        <ArrowLeftIcon size={16} />
                        Voltar
                    </Button>
                </div>
            </section>
        );
    }

    function handleGoBack() {
        navigate(-1);
    }

    return (
        <section className="w-full max-w-6xl mx-auto p-6">
            <div className="flex items-center gap-4 mb-6">
                <Button variant="outline" size="sm" onClick={handleGoBack}>
                    <ArrowLeftIcon size={16} />
                    Voltar
                </Button>
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        {restaurant.name}
                    </h1>
                    <p className="text-md text-gray-500">
                        Detalhes do restaurante e cardapio
                    </p>
                </div>
            </div>
            <Card className="overflow-hidden mb-8">
                <div className="relative">
                    <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-green-600 font-semibold">
                            {restaurant.badge}
                        </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                        <Badge className="bg-white">
                            <StarIcon
                                className="inline mr-1 text-amber-400"
                                size={16}
                            />
                            <span className="text-gray-800 font-semibold">
                                {restaurant.rating}
                            </span>
                        </Badge>
                    </div>
                </div>

                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-star gap-4">
                        <div>
                            <div className="flex flex-row items-center gap-2 mb-2">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {restaurant.name}
                                </h2>
                                <Badge className="bg-green-600">
                                    {restaurant.cuisine}
                                </Badge>
                            </div>
                            <div className="flex flex-row items-center gap-6 text-gray-600 mb-4">
                                <div className="flex items-center gap-1">
                                    <StarIcon
                                        className="inline mr-1 text-green-600"
                                        size={18}
                                    />
                                    <span className="font-medium">
                                        {restaurant.rating}
                                    </span>
                                    <span>
                                        ({restaurant.reviews} avaliações)
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPinIcon
                                        className="inline mr-1 text-green-600"
                                        size={18}
                                    />
                                    <span>{restaurant.distance}</span>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-6 text-gray-600 mb-4">
                                <div className="flex items-center gap-1">
                                     <Clock
                                        className="inline mr-1 text-green-600"
                                        size={18}
                                    />
                                    <span>{restaurant.deliveryTime}</span>
                                </div>
                                <div className="font-bold text-green-600 text-lg">
                                    taxa de ebtrega: {restaurant.deliveryFee}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

import { assets } from "@/assets/assets";

export const cuisineFilters = [
    { id: "all", name: "Todos" },
    { id: "italian", name: "Italiana" },
    { id: "japanese", name: "Japonesa" },
    { id: "brazilian", name: "Brasileira" },
    { id: "mexican", name: "Mexicana" },
    { id: "arab", name: "Árabe" },
    { id: "indian", name: "Indiana" },
];

export const featuredRestaurants = [
    {
        id: 1,
        name: "Nonna's Kitchen",
        image: assets.nonas_kitchen,
        cuisine: "Italiana",
        rating: 4.8,
        reviews: 247,
        deliveryTime: "25-35 min",
        deliveryFee: "R$ 4,99",
        distance: "1.2 km",
        featured: true,
        badge: "Top Avaliado",
    },
    {
        id: 2,
        name: "Sakura Sushi",
        image: assets.sakura_sushi,
        cuisine: "Japonesa",
        rating: 4.9,
        reviews: 189,
        deliveryTime: "30-40 min",
        deliveryFee: "R$ 6,99",
        distance: "2.1 km",
        featured: true,
        badge: "Mais Pedido",
    },
    {
        id: 3,
        name: "Taco Loco",
        image: assets.taco_loco,
        cuisine: "Mexicana",
        rating: 4.6,
        reviews: 156,
        deliveryTime: "20-30 min",
        deliveryFee: "R$ 3,99",
        distance: "0.8 km",
        featured: true,
        badge: "Entrega Rápida",
    },
];

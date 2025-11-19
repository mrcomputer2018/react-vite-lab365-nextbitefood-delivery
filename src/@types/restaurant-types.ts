export interface FeaturedRestautants {
    id: string;
    name: string;
    //eslint-disable-next-line 
    image: any;
    cuisine: string;
    rating: number;
    reviews: number;
    deliveryTime: string;
    deliveryFee: string;
    distance: string;
    featured: boolean;
    badge: string;
}
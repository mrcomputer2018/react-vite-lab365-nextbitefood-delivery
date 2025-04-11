import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { carouselImages } from "../../assets/assets";

type CarouselImage = {
    src: string;
    alt: string;
};

export default function SectionRestaurant() {
    return (
        <section className="w-full flex flex-col items-center justify-center pb-16 bg-gray-50">
            <div className="flex flex-row justify-between items-center max-w-7xl w-full">
                <h2 className="text-3xl font-bold text-gray-800">
                    Os melhores restaurantes da cidade
                </h2>

                <Button
                    variant="ghost"
                    className=" text-xl text-muted-foreground"
                >
                    Ver todos
                </Button>
            </div>

            <div className="mt-16">
                <Carousel className="w-full max-w-7xl">
                    <CarouselContent>
                        {carouselImages.map((image: CarouselImage, index: number) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-2">
                                    <Card>
                                        <CardContent className="flex items-center justify-center">
                                            <img 
                                            src={image.src}
                                            alt={image.alt} 
                                            className="h-64 w-full object-cover rounded-lg shadow-md transition-transform duration-600 transform hover:scale-105"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}

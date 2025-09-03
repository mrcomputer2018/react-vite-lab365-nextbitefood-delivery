import { BadgeCheckIcon, StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import ButtonCustom from "./button-custom";

export default function OrderCard() {
    return (
        <Card className="bg-gray-100 p-6">
            <CardContent className="flex flex-row justify-between">
                <div>
                    <div className="flex items-center justify-start gap-2 mb-2">
                        <span className="font-semibold text-lg text-gray-500">#12345</span>
                        <Badge className="bg-green-600 text-white font-bold uppercase">
                            <BadgeCheckIcon />
                            Entregue
                        </Badge>
                    </div>
                    <div>
                        <h2 className="font-bold text-zinc-900 text-xl">Nonna´s Kitchen</h2>
                        <small className="text-gray-600 text-lg font-semibold">Pizza Margherita, Spaghetti Carbonara</small>
                        <div className="flex flex-row gap-2 items-center justify-start mt-2">
                            <span className="text-md text-gray-500">15 Jun 2024</span>
                            <div className="flex flex-row justify-center gap-1">
                                <StarIcon className="h-4 w-4 text-yellow-500" />
                                <StarIcon className="h-4 w-4 text-yellow-500" />
                                <StarIcon className="h-4 w-4 text-yellow-500" />
                                <StarIcon className="h-4 w-4 text-yellow-500" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <div className="flex flex-row justify-end">
                        <span className="font-bold text-green-600 text-2xl">R$ 129,69</span>
                    </div>
                    
                    <div className="flex flex-row gap-6">
                        <ButtonCustom title="Ver detalhes" variant="ghost-black"/>
                        <ButtonCustom title="Pedir novamente" variant="black"/>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

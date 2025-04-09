import { CreditCard, Headset, Truck } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function SectionServices() {
    return (
        <section className="py-10 relative rounded-t-4xl w-full top-[-50px] bg-gray-50">
            <Card className="max-w-7xl mx-auto">
                <CardContent className="flex flex-row justify-between items-center p-4">
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <Truck className="h-12 w-12 text-green-600" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700">
                                Frete grátis
                            </h2>
                            <span>Frete grátis em pedidos</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <Headset className="h-12 w-12 text-green-600" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700">
                                Suporte 24/7
                            </h2>
                            <span>Suporte completo durante o processo</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <CreditCard className="h-12 w-12 text-green-600" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700">
                                Frete grátis
                            </h2>
                            <span>Frete grátis em pedidos</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

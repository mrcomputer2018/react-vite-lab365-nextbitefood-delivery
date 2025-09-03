import { BadgeCheckIcon, CreditCard } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import ActionButton from "./action-button";
import CreditCardInformation from "./credit-card-information";

export default function CardPayment() {
    return (
        <Card className="bg-gray-100 p-6">
            <CardContent className="flex flex-row justify-between">
                <div>
                    <Badge className="bg-green-600 text-white font-bold uppercase mb-2">
                        <BadgeCheckIcon />
                        Padrão
                    </Badge>
                    <div className="flex flex-row items-center">
                        <CreditCard className=" h-10 w-10 mr-2 text-gray-400" />
                        <CreditCardInformation />
                    </div>
                </div>
                <ActionButton />
            </CardContent>
        </Card>
    );
}

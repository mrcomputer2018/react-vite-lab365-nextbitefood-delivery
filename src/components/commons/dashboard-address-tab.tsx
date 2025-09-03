import { BadgeCheckIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import HeaderTabs from "./header-tabs";
import ActionButton from "./action-button";

export default function DashboardAddressTab() {
    return (
        <section className="space-y-3">
            <div>
                <HeaderTabs
                    title="Meus Endereços"
                    subtitle="Gerencie seus endereços de entrega."
                />
            </div>
            <div className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-start mb-2 gap-3">
                        <Badge
                            variant="secondary"
                            className="bg-green-600 text-white font-bold uppercase"
                        >
                            <BadgeCheckIcon />
                            Padrao
                        </Badge>
                        <Badge
                            variant="outline"
                            className="bg-white font-bold uppercase"
                        >
                            Casa
                        </Badge>
                    </div>
                    <div className="max-w-64">
                        <p>
                            Rua das flores, 456 - Apartamento 12B - Vila
                            madalena, São Paulo
                        </p>
                    </div>
                </div>
                <ActionButton />
            </div>
        </section>
    );
}

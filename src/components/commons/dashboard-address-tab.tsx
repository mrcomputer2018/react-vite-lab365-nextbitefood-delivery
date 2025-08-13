import { BadgeCheckIcon, PenIcon, TrashIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import HeaderTabs from "./header-tabs";

export default function DashboardAddressTab() {
    return (
        <section className="space-y-4">
            <div>
                <HeaderTabs title="Meus Endereços" subtitle="Gerencie seus endereços de entrega."/>
            </div>
            <div className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-start mb-2 gap-3">
                        <Badge variant="secondary" className="bg-green-600 text-white font-bold uppercase">
                            <BadgeCheckIcon />
                            Padrao
                        </Badge>
                        <Badge variant="outline" className="bg-white font-bold uppercase">
                            Casa
                        </Badge>
                    </div>
                    <div>
                        <p>
                            Rua das flores, 456 - Apartamento 12B - Vila madalena,
                            São Paulo
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-center space-x-6">
                    <PenIcon className="w-7 h-7 text-gray-500 cursor-pointer border border-gray-300 p-1 rounded hover:opavity-60 bg-white"/>
                    <TrashIcon className="w-7 h-7 text-gray-500 cursor-pointer border border-gray-300 p-1 rounded hover:opavity-60 bg-white"/>
                </div>
            </div>
        </section>
    )
}
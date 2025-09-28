import ButtonCustom from "@/components/commons/button-custom";
import DashboardTitle from "@/components/commons/dashboard-title";
import { Star } from "lucide-react";

export default function RestaurantsPage() {
    return (
        <section className="bg-green-100 h-screen w-full p-4">
            <DashboardTitle>
                daqui a pouco comecamos   
            </DashboardTitle>
             <DashboardTitle size="large">
                daqui a pouco comecamos   
            </DashboardTitle>
             <DashboardTitle size="extralarge">
                <Star className="inline mr-2 mb-1" size={32} color="gold" />
                Daqui a pouco comecamos. As 20hs  
            </DashboardTitle>
            <ButtonCustom title="teste de botao" variant="gradient"/>
        </section>
    )
}
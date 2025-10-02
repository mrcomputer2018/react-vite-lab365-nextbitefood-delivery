import DashboardSubtitle from "@/components/commons/dashboard-subtitle";
import DashboardTitle from "@/components/commons/dashboard-title";


export default function RestaurantsPage() {
    return (
        <section className="bg-gray-100 h-screen w-full p-4">
            <DashboardTitle>
                Bem-vindo a área de restaurantes
            </DashboardTitle>
            <DashboardSubtitle>
                Escolha aqui o restaurante para fazer o seu pedido
            </DashboardSubtitle>
        </section>
    )
}
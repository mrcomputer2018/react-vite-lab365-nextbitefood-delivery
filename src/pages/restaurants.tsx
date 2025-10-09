import { ButtonFilter } from "@/components/commons/button-filter";
import DashboardSubtitle from "@/components/commons/dashboard-subtitle";
import DashboardTitle from "@/components/commons/dashboard-title";

export default function RestaurantsPage() {
    return (
        <section className="bg-gray-100 h-screen w-full p-4">
            <div>
                <DashboardTitle>
                    Bem-vindo a área de restaurantes
                </DashboardTitle>
                <DashboardSubtitle>
                    Escolha aqui o restaurante para fazer o seu pedido
                </DashboardSubtitle>
            </div>
            <div className="bg-white mt-6 flex flex-col justify-start shadow-md p-5 rounded-md space-y-10">
                <div>
                    <DashboardTitle size="extrasmall" color="secondary">
                        Filtrar por culinria
                    </DashboardTitle>

                    <div>
                        <ButtonFilter>
                            todos
                        </ButtonFilter>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
}

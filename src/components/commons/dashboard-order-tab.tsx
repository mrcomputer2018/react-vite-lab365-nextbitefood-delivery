import HeaderTabs from "./header-tabs";
import OrderCard from "./order-card";

export default function DashBoardOrderTab() {
    return (
        <div>
            <div className="flex flex-row justify-between items-center px-1 mb-4">
                <HeaderTabs
                    title="Meus Pedidos"
                    subtitle="Veja e acompanhe aqui os seus pedidos."
                />
            </div>

            <div>
                <OrderCard />
            </div>
        </div>
    );
}

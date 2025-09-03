import ButtonCustom from "./button-custom";
import HeaderTabs from "./header-tabs";
import CardPayment from "./card-payment";

export default function DashboardPaymentTab() {
    return (
        <div>
            <div className="flex flex-row justify-between items-center px-1 mb-4">
                <HeaderTabs
                    title="Formas de Pagamento"
                    subtitle="Adicione aqui a suas formas de pagamentos."
                />
                <ButtonCustom variant="black" title="Adicionar Cartão" />
            </div>
            <div>
                <CardPayment />
            </div>
        </div>
    );
}

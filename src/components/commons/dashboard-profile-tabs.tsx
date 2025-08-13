import { CreditCard, MapPin, ShoppingCart, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProfileTab from "./profile-tab";
import DashboardAddressTab from "./dashboard-address-tab";

export default function DashboardProfileTabs() {
    return (
        <Tabs defaultValue="profile" className="space-y-4">
            <TabsList>
                <TabsTrigger value="profile" className="px-20">
                    <User className="h-4 w-4 mr-2" />
                    Perfil
                </TabsTrigger>
                <TabsTrigger value="addresses" className="px-20">
                    <MapPin className="h-4 w-4 mr-2" />
                    Endereços
                </TabsTrigger>
                <TabsTrigger value="payments" className="px-20">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pagamentos
                </TabsTrigger>
                <TabsTrigger value="orders" className="px-20">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Pedidos
                </TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
                <ProfileTab />
            </TabsContent>
            <TabsContent value="addresses">
                <DashboardAddressTab />
            </TabsContent>
            <TabsContent value="payments">
                Change your payment methods here.
            </TabsContent>
            <TabsContent value="orders">Change your orders here.</TabsContent>
        </Tabs>
    );
}

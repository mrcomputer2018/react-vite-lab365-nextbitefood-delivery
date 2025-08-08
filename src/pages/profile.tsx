import { assets } from "@/assets/assets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/auth-context";

export default function ProfilePage() {
    const { user } = useAuth();
    return (
        <section className="bg-gray-100 h-screen w-full p-4">
            <div>
                <h2 className="text-xl font-semibold mb-2">
                    Bem-vindo ao seu painel
                </h2>
                <p>
                    Aqui você pode gerenciar suas informações e configurações.
                </p>
            </div>
            <div className="flex flex-row gap-6 justify-start">
                <div className="bg-white shadow-md rounded-lg p-6 mt-4 w-58 h-88">
                    <div className="flex items-center justify-center">
                        <img
                            src={assets.user_image}
                            alt="imagem do usuario"
                            className="w-20 h-20 rounded-full shadow-md"
                        />
                    </div>
                    <div className="text-center mt-4 flex flex-col">
                        <h3 className="text-lg font-bold mt-4">{user?.name}</h3>
                        <span className="text-muted-foreground">
                            {user?.email}
                        </span>
                        <span className="text-xs bg-black text-white rounded-full px-2 py-1 mt-3">
                            Cliente desde janeiro de 2025
                        </span>
                    </div>
                </div>
                <div>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            Make changes to your account here.
                        </TabsContent>
                        <TabsContent value="password">
                            Change your password here.
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

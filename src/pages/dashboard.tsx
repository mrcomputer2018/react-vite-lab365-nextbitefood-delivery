import { Button } from "@/components/ui/button";

export default function Dashboard() {
    function handleLogout() {
        localStorage.removeItem("@user");
        window.location.href = "/signin";
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <h1 className="text-2xl mb-4">Área privada - Dashboard</h1>
            <Button onClick={handleLogout}>Sair</Button>
        </div>
    );
}

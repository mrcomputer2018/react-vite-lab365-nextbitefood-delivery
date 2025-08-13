import DashboardProfileCard from "@/components/commons/dashboard-profile-card";
import DashboardProfileTabs from "@/components/commons/dashboard-profile-tabs";
import DashboardTitle from "@/components/commons/dashboard-title";

export default function ProfilePage() {
   
    return (
        <section className="bg-gray-100 h-screen w-full p-4">
            <DashboardTitle
                title=" Bem-vindo ao seu painel"
                subtitle="Aqui você pode gerenciar suas informações e configurações."
            />

            <div className="flex flex-row gap-6 justify-start">
                 <DashboardProfileCard />
               
                <div className="bg-white shadow-md rounded-lg p-6 mt-4 w-full">
                    <DashboardProfileTabs />
                </div>
            </div>
        </section>
    );
}

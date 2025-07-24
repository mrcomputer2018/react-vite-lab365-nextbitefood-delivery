import HeaderDashboard from "@/components/commons/header-dashboard";
import Sidebar from "@/components/commons/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex flex-row items-start justify-start h-screen w-full">
            <Sidebar />

            <div>
                <HeaderDashboard />
                <section></section>
            </div>
        </div>
    );
}

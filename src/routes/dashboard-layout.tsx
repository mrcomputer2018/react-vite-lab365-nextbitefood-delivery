import HeaderDashboard from "@/components/commons/header-dashboard";
import Sidebar from "@/components/commons/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="flex flex-row items-start justify-start h-screen w-full">
            <Sidebar />

            <div className="w-full">
                <HeaderDashboard />
                
                <Outlet />
            </div>
        </div>
    );
}

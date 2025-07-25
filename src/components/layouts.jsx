import Sidebar from "./Sidebar";
import Header from "./header";
import { Outlet } from "react-router-dom";

function LayoutDashboard() {
    return (
        <>
            <div className="flex min-h-screen">
                <Sidebar />
                <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
                    <Header />
                    
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default LayoutDashboard; 
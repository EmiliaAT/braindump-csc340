import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import "./Layout.css";

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();

    let suffix: "Dashboard" | "Discover" | "Collections" | undefined = undefined;

    switch (location.pathname) {
        case "/dashboard":
            suffix = "Dashboard";
            break;
        case "/discover":
            suffix = "Discover";
            break;
        case "/collections":
            suffix = "Collections";
            break;
    }

    const handleDashboard = () => navigate("/dashboard", { replace: true });
    const handleDiscover = () => navigate("/discover", { replace: true });
    const handleCollections = () => navigate("/collections", { replace: true });

    return (
        <div className="app-container">
            <Header suffix={suffix} onDashboard={handleDashboard} onDiscover={handleDiscover} onCollections={handleCollections} />
            <main className="main-container">
                <Outlet />
            </main>
        </div>
    );
}

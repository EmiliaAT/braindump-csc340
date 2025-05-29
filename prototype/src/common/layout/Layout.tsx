import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import "./Layout.css";

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();

    let suffix: "Dashboard" | "Discover" | undefined = undefined;

    switch (location.pathname) {
        case "/dashboard":
            suffix = "Dashboard";
            break;
        case "/discover":
            suffix = "Discover";
            break;
    }

    const handleTestA = () => navigate("/dashboard", { replace: true });
    const handleTestB = () => navigate("/discover", { replace: true });

    return (
        <div className="app-container">
            <Header suffix={suffix} onTestA={handleTestA} onTestB={handleTestB} />
            <main className="main-container">
                <Outlet />
            </main>
        </div>
    );
}

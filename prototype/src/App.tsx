import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Discover from "./pages/discover/Discover";
import Layout from "./common/layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="discover" element={<Discover />} />
      </Route>
    </Routes>
  );
}

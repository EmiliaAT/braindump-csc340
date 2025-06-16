import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Discover from "./routes/discover/Discover";
import Dashboard from "./routes/dashboard/Dashboard";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to="/discover" replace />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

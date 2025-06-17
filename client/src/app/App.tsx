import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Discover from "./routes/discover/Discover";
import Dashboard from "./routes/dashboard/Dashboard";
import Auth from "./Auth";
import { AuthProvider } from "@descope/react-sdk";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <AuthProvider projectId={import.meta.env.VITE_DESCOPE_KEY}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Navigate to="/discover" replace />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/auth" element={<Auth />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Discover from "./routes/discover/Discover";
import Dashboard from "./routes/dashboard/Dashboard";
import Login from "./routes/login/Login";
import AuthProvider from "../features/auth/components/AuthProvider";
import Article from "./routes/article/Article";
import Collection from "./routes/collection/Collection";
import Create from "./routes/create/Create";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Navigate to="/discover" replace />} />
              <Route path="discover" element={<Discover />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="articles/:id" element={<Article />} />
              <Route path="collections/:id" element={<Collection />} />
              <Route path="login" element={<Login />} />
              <Route path="create" element={<Create />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

// src/routes/index.tsx  (or wherever AppRoutes lives)
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import { useAuth } from "../hooks/useAuth";
import DashboardLayout from "../components/layout/DashbordLayout";
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { token } = useAuth();
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />

          <Route path="*" element={<div>404 - Page not found</div>} />
        </Route>

        {/* Global catch-all (for unmatched paths outside protected) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

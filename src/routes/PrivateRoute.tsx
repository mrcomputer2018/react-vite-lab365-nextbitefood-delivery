import { useAuth } from "@/hooks/useAuth";
import { JSX } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
 children: JSX.Element;
}

export function PrivateRoute({children}: PrivateRouteProps) {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? children : <Navigate to="/signin" replace />;
}
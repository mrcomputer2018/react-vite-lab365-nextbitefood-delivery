import { useAuth } from "../contexts/auth-context";
import { JSX } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
 children: JSX.Element;
}

export function PrivateRoute({children}: PrivateRouteProps) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return children
}
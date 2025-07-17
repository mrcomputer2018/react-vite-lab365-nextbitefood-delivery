import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./contexts/auth-context.tsx";
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider>
            <App />
            <Toaster />
        </AuthProvider>
    </StrictMode>
);

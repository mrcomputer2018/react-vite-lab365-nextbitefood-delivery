import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";
import { PrivateRoute } from "./routes/PrivateRoute";
import Dashboard from "./pages/dashboard";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota Publicas */}
                <Route path="/" element={<Home />} /> 
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />

                {/* Rota Privada */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />    
            </Routes>
        </BrowserRouter>
    );
}

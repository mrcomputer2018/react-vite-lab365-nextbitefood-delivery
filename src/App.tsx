import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";
import { PrivateRoute } from "./routes/PrivateRoute";
import DashboardLayout from "./routes/dashboard-layout";
import ProfilePage from "./pages/profile";
import Mycart from "./pages/my-cart";
import RestaurantsPage from "./pages/restaurants";

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
                    path="/perfil"
                    element={
                        <PrivateRoute>
                            <DashboardLayout />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<ProfilePage />} />
                    <Route path="perfil" element={<ProfilePage />} />
                </Route>

                <Route
                    path="/meucarrinho"
                    element={
                        <PrivateRoute>
                            <DashboardLayout />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<Mycart />} />
                </Route>

                <Route path="/restaurantes" element={<RestaurantsPage />} />
            </Routes>
        </BrowserRouter>
    );
}
